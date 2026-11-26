/**
 * ============================================================================
 * FINTRACK ENTERPRISE V3.0 - BACKEND ENGINE (CORE GOOGLE APPS SCRIPT)
 * Architecture: Google Apps Script Database Logic (Multi-Account & Cloud Sync)
 * Security & Integrity Hardened:
 * - Token-Based Session Validation (CacheService + PropertiesService TTL)
 * - Strict Per-User Email Ownership Verification on All Read & Write Endpoints
 * - Formula / CSV Injection Protection (sanitizeSheetText)
 * - Concurrency Lock (LockService) & Atomic Balance Transfers
 * - Multi-Lot FIFO Asset Selling & Consistent IDR/FX Valuation
 * - Gemini 2.5 Flash AI Receipt Scanner Integration
 * ============================================================================
 */

// Isi ID Spreadsheet HANYA jika script dibuat sebagai Standalone Script (di luar Google Sheets).
// Jika dibuat dari menu Google Sheets (Ekstensi > Apps Script), biarkan kosong.
const SPREADSHEET_ID_MANUAL = "";

// ============================================================================
// 1. DYNAMIC SPREADSHEET RESOLVER
// ============================================================================
function getSS() {
  try {
    const act = SpreadsheetApp.getActiveSpreadsheet();
    if (act) return act;
  } catch (e) {}

  try {
    const propId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
    if (propId) return SpreadsheetApp.openById(propId);
  } catch (e) {}

  if (SPREADSHEET_ID_MANUAL && SPREADSHEET_ID_MANUAL !== "GANTI_DENGAN_ID_SPREADSHEET_ANDA") {
    try {
      return SpreadsheetApp.openById(SPREADSHEET_ID_MANUAL);
    } catch (e) {
      throw new Error("Gagal membuka Spreadsheet dengan ID Manual: " + e.toString());
    }
  }

  throw new Error("Spreadsheet belum terhubung! Buka Apps Script dari Google Sheets (Ekstensi > Apps Script) atau atur SPREADSHEET_ID di Script Properties.");
}

const SS = {
  getSheetByName: function(name) {
    return getOrCreateSheet(name);
  },
  getDataRange: function() {
    return getSS().getDataRange();
  },
  getSheets: function() {
    return getSS().getSheets();
  },
  getName: function() {
    return getSS().getName();
  }
};

// ============================================================================
// 2. SELF-HEALING DATABASE & SCHEMA BUILDER
// ============================================================================
const DEFAULT_SCHEMAS = {
  'M_Akun': ['Email', 'ID_Akun', 'Nama_Akun', 'Tipe_Akun', 'Atas_Nama', 'Nomor_Rekening', 'Saldo_Awal', 'Saldo_Realtime'],
  'T_Transaksi': ['Email', 'ID_Transaksi', 'Tanggal', 'Tipe', 'Nama_Akun', 'Kategori', 'Jumlah', 'Keterangan', 'Ref_ID'],
  'T_Transaksi_Detail': ['Email', 'ID_Transaksi', 'Nama_Item', 'Qty', 'Harga'],
  'M_Recurring': ['Email', 'ID_Recurring', 'Nama', 'Nominal', 'Frekuensi', 'Tgl_Tagihan', 'Akun'],
  'M_Debt': ['Email', 'ID_Debt', 'Tipe', 'Kontak', 'Nominal_Awal', 'Sisa', 'Status'],
  'M_Goals': ['Email', 'ID_Goal', 'Nama_Goal', 'Target_Nominal', 'Terkumpul', 'Tenggat_Waktu', 'Status'],
  'M_Portofolio': ['Email', 'ID_Aset', 'Simbol', 'Jumlah', 'Harga_Beli', 'Harga_Realtime', 'Jenis_Aset', 'Mata_Uang'],
  'M_User': ['Email', 'Nama', 'Password']
};

function getOrCreateSheet(sheetName) {
  const ss = getSS();
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    const headers = DEFAULT_SCHEMAS[sheetName] || ['Email', 'ID', 'Nama', 'Keterangan'];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#E6F4EA');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function initDatabase() {
  const ss = getSS();
  Object.keys(DEFAULT_SCHEMAS).forEach(name => {
    getOrCreateSheet(name);
  });
  Logger.log("Inisialisasi tabel Fintrack V3.0 selesai pada: " + ss.getName());
}

// ============================================================================
// 3. SECURITY, SANITIZATION & SESSION TOKEN ENGINE
// ============================================================================
function sanitizeSheetText(val) {
  if (val === undefined || val === null) return "";
  var str = val.toString().trim();
  if (/^[=+\-@]/.test(str)) {
    return "'" + str;
  }
  return str;
}

function hashPassword(pass) {
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, pass + "_fintrack_salt");
  return digest.map(function(byte) {
    return (byte < 0 ? byte + 256 : byte).toString(16).padStart(2, '0');
  }).join('');
}

function createSessionToken(email) {
  const cleanEmail = (email || '').toString().toLowerCase().trim();
  const token = "SES-" + Utilities.getUuid();
  const payload = JSON.stringify({
    email: cleanEmail,
    expiresAt: Date.now() + (24 * 60 * 60 * 1000)
  });

  try {
    CacheService.getScriptCache().put("TOKEN_" + token, payload, 21600);
  } catch (e) {}

  try {
    PropertiesService.getScriptProperties().setProperty("SESSION_" + token, payload);
  } catch (e) {}

  return token;
}

function validateSession(email, token) {
  const cleanEmail = (email || '').toString().toLowerCase().trim();
  const cleanToken = (token || '').toString().trim();
  if (!cleanEmail || !cleanToken || !cleanToken.startsWith("SES-")) {
    return false;
  }

  let raw = null;
  try {
    raw = CacheService.getScriptCache().get("TOKEN_" + cleanToken);
  } catch (e) {}

  if (!raw) {
    try {
      raw = PropertiesService.getScriptProperties().getProperty("SESSION_" + cleanToken);
    } catch (e) {}
  }

  if (!raw) return false;

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.email !== cleanEmail) return false;
    if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
      revokeSessionToken(cleanToken);
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

function revokeSessionToken(token) {
  const cleanToken = (token || '').toString().trim();
  if (!cleanToken) return;
  try {
    CacheService.getScriptCache().remove("TOKEN_" + cleanToken);
  } catch (e) {}
  try {
    PropertiesService.getScriptProperties().deleteProperty("SESSION_" + cleanToken);
  } catch (e) {}
}

// ============================================================================
// 4. HTTP HANDLERS (doGet & doPost)
// ============================================================================
function doGet(e) {
  try {
    const action = e && e.parameter && e.parameter.action;
    const email = (e && e.parameter && (e.parameter.email || e.parameter.user)) || '';
    const token = (e && e.parameter && e.parameter.token) || '';

    if (action === 'getData' && email) {
      if (!validateSession(email, token)) {
        return response({ status: 'unauthorized', message: 'Sesi tidak valid atau telah berakhir. Silakan login ulang.' });
      }
      return response(getUserData(email));
    }

    let ssName = "Tidak Terhubung";
    let sheetNames = [];
    try {
      const ss = getSS();
      ssName = ss.getName();
      sheetNames = ss.getSheets().map(s => s.getName());
    } catch (err) {
      ssName = "Error: " + err.message;
    }

    return response({
      status: 'success',
      message: 'Fintrack Enterprise V3.0 Hardened Backend Active',
      spreadsheet: ssName,
      availableSheets: sheetNames,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return response({ status: 'error', message: err.toString() });
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);

    if (!e || !e.postData || !e.postData.contents) {
      return response({ status: 'error', message: 'Payload request kosong.' });
    }

    const res = JSON.parse(e.postData.contents);
    const action = res.action;

    if (action === 'login') {
      return response(loginUser(res.email, res.password));
    }

    if (action === 'logout') {
      revokeSessionToken(res.token);
      return response({ status: 'success' });
    }

    const email = (res.email || '').toString().toLowerCase().trim();
    const token = (res.token || '').toString().trim();

    if (!validateSession(email, token)) {
      return response({
        status: 'unauthorized',
        message: 'Sesi tidak valid atau telah berakhir. Silakan login ulang.'
      });
    }

    res.email = email;

    switch (action) {
      case 'getData': return response(getUserData(email));
      case 'addTransaction': return response(addTransaction(res));
      case 'deleteTransaction': return response(deleteTransaction(res));
      case 'transfer': return response(transferFunds(res));
      case 'addRecurring': return response(addRecurring(res));
      case 'deleteRecurring': return response(deleteRecurring(res));
      case 'addGoal': return response(addGoal(res));
      case 'manageGoalFunds': return response(manageGoalFunds(res));
      case 'addDebt': return response(addDebt(res));
      case 'payDebt': return response(payDebt(res));
      case 'buyAsset': return response(buyAsset(res));
      case 'sellAsset': return response(sellAsset(res));
      case 'addWallet': return response(addWallet(res));
      case 'deleteWallet': return response(deleteWallet(res));
      case 'addAccount': return response(addAccount(res));
      case 'updateAccount': return response(updateAccount(res));
      case 'deleteAccount': return response(deleteAccount(res));
      case 'scanReceipt': return response(processReceiptWithGemini(res.imageB64));
      default: return response({ status: 'error', message: 'Fungsi "' + action + '" tidak dikenali.' });
    }
  } catch (err) {
    return response({ status: 'error', message: "System Error: " + err.toString() });
  } finally {
    lock.releaseLock();
  }
}

function response(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

// ============================================================================
// 5. AUTHENTICATION & STRICT USER DATA RETRIEVAL
// ============================================================================
function loginUser(email, password) {
  try {
    const searchEmail = (email || '').toString().toLowerCase().trim();
    const rawPass = (password || '').toString();
    if (!searchEmail || !rawPass) {
      return { status: 'error', message: 'Email dan kata sandi wajib diisi.' };
    }

    const sheet = SS.getSheetByName('M_User');
    if (!sheet) {
      return { status: 'error', message: 'Tabel M_User tidak ditemukan.' };
    }

    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return { status: 'error', message: 'Belum ada akun terdaftar pada sistem.' };
    }

    const headers = data[0].map(h => (h || '').toString().toLowerCase().trim());
    const idxEmail = headers.findIndex(h => h.includes('email'));
    const idxName = headers.findIndex(h => h.includes('nama') || h.includes('name'));
    const idxPass = headers.findIndex(h => h.includes('pass') || h.includes('password'));

    const colEmail = idxEmail !== -1 ? idxEmail : 0;
    const colName = idxName !== -1 ? idxName : 1;
    const colPass = idxPass !== -1 ? idxPass : 2;
    const inputHash = hashPassword(rawPass);

    for (let i = 1; i < data.length; i++) {
      const rowEmail = (data[i][colEmail] || '').toString().toLowerCase().trim();
      const rowPass = (data[i][colPass] || '').toString();
      const rowName = (data[i][colName] || '').toString().trim();

      if (rowEmail === searchEmail) {
        if (rowPass && (rowPass === inputHash || rowPass === rawPass)) {
          if (rowPass === rawPass && rowPass !== inputHash) {
            sheet.getRange(i + 1, colPass + 1).setValue(inputHash);
          }
          const token = createSessionToken(rowEmail);
          return {
            status: 'success',
            name: rowName || rowEmail.split('@')[0],
            email: rowEmail,
            token: token
          };
        }
      }
    }

    return { status: 'error', message: 'Email atau Password salah.' };
  } catch (err) {
    return { status: 'error', message: err.toString() };
  }
}

function getUserData(email) {
  const tables = ['M_Akun', 'T_Transaksi', 'T_Transaksi_Detail', 'M_Goals', 'M_Debt', 'M_Recurring', 'M_Portofolio'];
  let result = { status: 'success', data: {} };
  const searchEmail = (email || '').toString().toLowerCase().trim();

  tables.forEach(tableName => {
    const sheet = SS.getSheetByName(tableName);
    if (!sheet) {
      result.data[tableName] = [];
      return;
    }
    const rows = sheet.getDataRange().getValues();
    if (rows.length <= 1) {
      result.data[tableName] = [];
      return;
    }

    const headers = rows.shift();
    const emailIdx = headers.findIndex(h => {
      const clean = (h || '').toString().toLowerCase().trim().replace(/[_ ]/g, '');
      return clean === 'email' || clean === 'useremail' || clean === 'owner';
    });
    const colE = emailIdx !== -1 ? emailIdx : 0;

    const userRows = rows.filter(row => {
      const cell = (row[colE] || '').toString().toLowerCase().trim();
      return cell === searchEmail;
    });

    result.data[tableName] = userRows.map(row => {
      let obj = {};
      headers.forEach((header, i) => {
        if (header) obj[header] = row[i];
      });
      return obj;
    });
  });

  return result;
}

// ============================================================================
// 6. TRANSACTION ENGINE
// ============================================================================
function addTransaction(payload) {
  const email = payload.email;
  const idTrx = payload.refId && payload.refId.toString().startsWith("TRX-") ? payload.refId : ("TRX-" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000));
  const tglFinal = payload.tanggal || new Date();
  const sheetTrx = SS.getSheetByName('T_Transaksi');
  const refId = payload.refId || "";
  const jumlahFinal = Math.round(Number(payload.jumlah) || 0);
  const tipeFinal = (payload.tipe || '').toString().trim().toUpperCase();

  if (jumlahFinal <= 0) {
    return { status: 'error', message: 'Nominal transaksi harus lebih dari 0.' };
  }
  if (!['INFLOW', 'OUTFLOW', 'NEUTRAL'].includes(tipeFinal)) {
    return { status: 'error', message: 'Tipe transaksi tidak valid.' };
  }

  if (tipeFinal === 'INFLOW' || tipeFinal === 'OUTFLOW') {
    const akunStr = (payload.akun || '').toString().trim();
    if (!akunStr) {
      return { status: 'error', message: 'Akun transaksi wajib dipilih.' };
    }

    if (akunStr.startsWith("VALAS_")) {
      let valasSimbol = akunStr.replace("VALAS_", "").toUpperCase();
      let sheetPorto = SS.getSheetByName('M_Portofolio');
      let dataPorto = sheetPorto.getDataRange().getValues();

      let valasRate = 1;
      let portoIndex = -1;
      let currentUnits = 0;

      for (let i = 1; i < dataPorto.length; i++) {
        if ((dataPorto[i][0] || '').toString().toLowerCase().trim() === email &&
            (dataPorto[i][2] || '').toString().toUpperCase() === valasSimbol &&
            dataPorto[i][6] === 'Valuta Asing') {
          valasRate = Number(dataPorto[i][5]) || Number(dataPorto[i][4]) || 1;
          currentUnits = Number(dataPorto[i][3]) || 0;
          portoIndex = i;
          break;
        }
      }

      if (portoIndex === -1) {
        return { status: 'error', message: 'Dompet Valuta Asing tidak ditemukan.' };
      }

      let amountInValas = jumlahFinal / valasRate;
      if (tipeFinal === 'OUTFLOW' && currentUnits + 1e-8 < amountInValas) {
        return { status: 'error', message: 'Saldo Valas tidak mencukupi.' };
      }
      let newUnits = (tipeFinal === 'INFLOW') ? currentUnits + amountInValas : Math.max(0, currentUnits - amountInValas);
      sheetPorto.getRange(portoIndex + 1, 4).setValue(newUnits);
    } else {
      const sheetAkun = SS.getSheetByName('M_Akun');
      const dataAkun = sheetAkun.getDataRange().getValues();
      if (dataAkun.length <= 1) {
        return { status: 'error', message: 'Data rekening tidak ditemukan.' };
      }

      const cols = resolveAkunColumns(dataAkun[0]);
      const targetAkun = akunStr.toLowerCase();
      let foundIdx = -1;

      for (let i = 1; i < dataAkun.length; i++) {
        const rowEmail = (dataAkun[i][cols.email] || '').toString().toLowerCase().trim();
        const rowNama = (dataAkun[i][cols.nama] || '').toString().trim().toLowerCase();
        const rowId = (dataAkun[i][cols.id] || '').toString().trim().toLowerCase();

        if (rowEmail === email && (rowNama === targetAkun || rowId === targetAkun)) {
          foundIdx = i;
          break;
        }
      }

      if (foundIdx === -1) {
        return { status: 'error', message: 'Rekening "' + akunStr + '" tidak ditemukan.' };
      }

      let saldoLama = Number(dataAkun[foundIdx][cols.saldoReal]) || 0;
      if (tipeFinal === 'OUTFLOW' && !payload.allowNegative && saldoLama < jumlahFinal) {
        return { status: 'error', message: 'Saldo rekening tidak mencukupi.' };
      }
      let newBalance = (tipeFinal === 'INFLOW') ? saldoLama + jumlahFinal : saldoLama - jumlahFinal;
      sheetAkun.getRange(foundIdx + 1, cols.saldoReal + 1).setValue(newBalance);
    }
  }

  sheetTrx.appendRow([
    email,
    idTrx,
    tglFinal,
    tipeFinal,
    sanitizeSheetText(payload.akun || ''),
    sanitizeSheetText(payload.kategori || 'Lainnya'),
    jumlahFinal,
    sanitizeSheetText(payload.keterangan || ''),
    sanitizeSheetText(refId)
  ]);

  if (payload.itemsDetail) {
    try {
      const sheetDetail = SS.getSheetByName("T_Transaksi_Detail");
      const items = typeof payload.itemsDetail === 'string' ? JSON.parse(payload.itemsDetail) : payload.itemsDetail;
      if (Array.isArray(items)) {
        items.forEach(function (item) {
          sheetDetail.appendRow([
            email,
            idTrx,
            sanitizeSheetText(item.name || "Item"),
            Number(item.qty) || 1,
            Number(item.price) || 0
          ]);
        });
      }
    } catch (e) {
      Logger.log("Gagal memproses detail transaksi: " + e.toString());
    }
  }

  return { status: 'success', trxId: idTrx };
}

function deleteTransaction(payload) {
  const email = payload.email;
  const idTrx = (payload.idTrx || '').toString().trim();
  if (!idTrx) return { status: 'error', message: 'ID transaksi tidak valid.' };

  const sheetTrx = SS.getSheetByName('T_Transaksi');
  const data = sheetTrx.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if ((data[i][0] || '').toString().toLowerCase().trim() === email &&
        (data[i][1] || '').toString().trim() === idTrx) {
      const tipe = (data[i][3] || '').toString().trim().toUpperCase();
      const akun = (data[i][4] || '').toString().trim();
      const jumlah = Number(data[i][6]) || 0;

      if ((tipe === 'INFLOW' || tipe === 'OUTFLOW') && akun && !akun.startsWith('VALAS_')) {
        const sheetAkun = SS.getSheetByName('M_Akun');
        const dataAkun = sheetAkun.getDataRange().getValues();
        if (dataAkun.length > 1) {
          const cols = resolveAkunColumns(dataAkun[0]);
          for (let j = 1; j < dataAkun.length; j++) {
            if ((dataAkun[j][cols.email] || '').toString().toLowerCase().trim() === email &&
                (dataAkun[j][cols.nama] || '').toString().trim().toLowerCase() === akun.toLowerCase()) {
              const cur = Number(dataAkun[j][cols.saldoReal]) || 0;
              const restored = tipe === 'INFLOW' ? (cur - jumlah) : (cur + jumlah);
              sheetAkun.getRange(j + 1, cols.saldoReal + 1).setValue(restored);
              break;
            }
          }
        }
      }

      sheetTrx.deleteRow(i + 1);
      return { status: 'success' };
    }
  }

  return { status: 'error', message: 'Transaksi tidak ditemukan.' };
}

function transferFunds(payload) {
  const email = payload.email;
  const fromAcc = (payload.fromAcc || '').toString().trim();
  const toAcc = (payload.toAcc || '').toString().trim();
  const amount = Math.round(Number(payload.amount) || 0);
  const admin = Math.round(Number(payload.admin) || 0);
  const desc = payload.desc || ("Transfer dari " + fromAcc + " ke " + toAcc);
  const tgl = payload.tanggal || new Date();
  const refId = "TF-" + new Date().getTime();

  if (amount <= 0 || admin < 0 || !fromAcc || !toAcc || fromAcc === toAcc) {
    return { status: 'error', message: 'Parameter transfer tidak valid.' };
  }

  const sheetAkun = SS.getSheetByName('M_Akun');
  const dataAkun = sheetAkun.getDataRange().getValues();
  if (dataAkun.length <= 1) {
    return { status: 'error', message: 'Data rekening kosong.' };
  }

  const cols = resolveAkunColumns(dataAkun[0]);
  let fromIdx = -1, toIdx = -1;
  let fromBal = 0, toBal = 0;

  for (let i = 1; i < dataAkun.length; i++) {
    if ((dataAkun[i][cols.email] || '').toString().toLowerCase().trim() === email) {
      const rowNama = (dataAkun[i][cols.nama] || '').toString().trim();
      if (rowNama === fromAcc) {
        fromIdx = i;
        fromBal = Number(dataAkun[i][cols.saldoReal]) || 0;
      }
      if (rowNama === toAcc) {
        toIdx = i;
        toBal = Number(dataAkun[i][cols.saldoReal]) || 0;
      }
    }
  }

  if (fromIdx === -1 || toIdx === -1) {
    return { status: 'error', message: 'Rekening asal atau tujuan tidak ditemukan.' };
  }

  if (fromBal < (amount + admin)) {
    return { status: 'error', message: 'Saldo rekening asal tidak mencukupi.' };
  }

  sheetAkun.getRange(fromIdx + 1, cols.saldoReal + 1).setValue(fromBal - amount - admin);
  sheetAkun.getRange(toIdx + 1, cols.saldoReal + 1).setValue(toBal + amount);

  const sheetTrx = SS.getSheetByName('T_Transaksi');
  const nowMs = new Date().getTime();
  sheetTrx.appendRow([email, "TRX-" + nowMs, tgl, 'OUTFLOW', sanitizeSheetText(fromAcc), 'Transfer Keluar', amount, sanitizeSheetText(desc), refId]);
  sheetTrx.appendRow([email, "TRX-" + (nowMs + 1), tgl, 'INFLOW', sanitizeSheetText(toAcc), 'Transfer Masuk', amount, sanitizeSheetText(desc), refId]);
  if (admin > 0) {
    sheetTrx.appendRow([email, "TRX-" + (nowMs + 2), tgl, 'OUTFLOW', sanitizeSheetText(fromAcc), 'Biaya Admin', admin, sanitizeSheetText("Admin tf ke " + toAcc), refId]);
  }

  return { status: 'success', refId: refId };
}

// ============================================================================
// 7. ACCOUNT MANAGEMENT ENGINE
// ============================================================================
function resolveAkunColumns(headers) {
  const findIdx = (patterns, fallback) => {
    const idx = headers.findIndex(h => {
      const clean = (h || '').toString().toLowerCase().replace(/[_ ]/g, '');
      return patterns.some(p => clean === p || clean.includes(p));
    });
    return idx !== -1 ? idx : fallback;
  };

  return {
    email: findIdx(['email'], 0),
    id: findIdx(['idakun', 'id'], 1),
    nama: findIdx(['namaakun', 'nama', 'akun'], 2),
    tipe: findIdx(['tipeakun', 'tipe', 'jenis'], 3),
    atasNama: findIdx(['atasnama', 'pemilik'], 4),
    noRek: findIdx(['nomorrekening', 'norekening', 'rekening', 'norek'], 5),
    saldoAwal: findIdx(['saldoawal', 'awal'], 6),
    saldoReal: findIdx(['saldorealtime', 'saldoreal', 'saldo'], 7)
  };
}

function addAccount(payload) {
  const email = payload.email;
  const sheet = SS.getSheetByName('M_Akun');
  const nama = (payload.nama || '').toString().trim();
  if (!nama) return { status: 'error', message: 'Nama rekening wajib diisi.' };

  const data = sheet.getDataRange().getValues();
  const cols = data.length > 0 ? resolveAkunColumns(data[0]) : { email: 0, id: 1, nama: 2, tipe: 3, atasNama: 4, noRek: 5, saldoAwal: 6, saldoReal: 7 };

  for (let i = 1; i < data.length; i++) {
    if ((data[i][cols.email] || '').toString().toLowerCase().trim() === email &&
        (data[i][cols.nama] || '').toString().trim().toLowerCase() === nama.toLowerCase()) {
      return { status: 'error', message: 'Nama rekening "' + nama + '" sudah terdaftar.' };
    }
  }

  const saldo = Math.max(0, Math.round(Number(payload.saldo) || 0));
  const tipe = (payload.tipe || 'Bank').toString().trim();
  const atasNama = (payload.atasNama || nama).toString().trim();
  const noRek = (payload.noRek || '').toString().trim();
  const idAkun = "ACC-" + new Date().getTime();

  const totalCols = Math.max(8, data.length > 0 ? data[0].length : 8);
  const newRow = new Array(totalCols).fill('');
  newRow[cols.email] = email;
  newRow[cols.id] = idAkun;
  newRow[cols.nama] = sanitizeSheetText(nama);
  newRow[cols.tipe] = sanitizeSheetText(tipe);
  newRow[cols.atasNama] = sanitizeSheetText(atasNama);
  newRow[cols.noRek] = sanitizeSheetText(noRek);
  newRow[cols.saldoAwal] = saldo;
  newRow[cols.saldoReal] = saldo;

  sheet.appendRow(newRow);
  return { status: 'success', idAkun: idAkun };
}

function updateAccount(payload) {
  const email = payload.email;
  const sheet = SS.getSheetByName('M_Akun');
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return { status: 'error', message: 'Data rekening kosong.' };

  const cols = resolveAkunColumns(data[0]);
  const targetId = (payload.idAkun || '').toString().trim();
  const oldNama = (payload.oldNama || '').toString().trim();

  let rowIndex = -1;
  for (let i = 1; i < data.length; i++) {
    if ((data[i][cols.email] || '').toString().toLowerCase().trim() === email) {
      const rowId = (data[i][cols.id] || '').toString().trim();
      const rowNama = (data[i][cols.nama] || '').toString().trim();
      if ((targetId && rowId === targetId) || (oldNama && rowNama === oldNama)) {
        rowIndex = i;
        break;
      }
    }
  }

  if (rowIndex === -1) return { status: 'error', message: 'Rekening tidak ditemukan.' };

  const currentNama = data[rowIndex][cols.nama].toString().trim();
  const currentSaldo = Number(data[rowIndex][cols.saldoReal]) || 0;
  const newNama = (payload.nama !== undefined && payload.nama !== null && payload.nama.toString().trim() !== '')
    ? payload.nama.toString().trim()
    : currentNama;

  if (newNama !== currentNama) {
    sheet.getRange(rowIndex + 1, cols.nama + 1).setValue(sanitizeSheetText(newNama));
    syncRenamedAccount(email, currentNama, newNama);
  }

  if (payload.tipe !== undefined && payload.tipe !== null && payload.tipe !== '') {
    sheet.getRange(rowIndex + 1, cols.tipe + 1).setValue(sanitizeSheetText(payload.tipe));
  }
  if (payload.atasNama !== undefined && payload.atasNama !== null) {
    sheet.getRange(rowIndex + 1, cols.atasNama + 1).setValue(sanitizeSheetText(payload.atasNama));
  }
  if (payload.noRek !== undefined && payload.noRek !== null) {
    sheet.getRange(rowIndex + 1, cols.noRek + 1).setValue(sanitizeSheetText(payload.noRek));
  }

  if (payload.saldo !== undefined && payload.saldo !== null && payload.saldo !== '') {
    const targetSaldo = Math.round(Number(payload.saldo) || 0);
    const diff = targetSaldo - currentSaldo;
    sheet.getRange(rowIndex + 1, cols.saldoReal + 1).setValue(targetSaldo);

    if (payload.recordAdjustment && diff !== 0) {
      const sheetTrx = SS.getSheetByName('T_Transaksi');
      const note = payload.adjNote ? payload.adjNote.toString().trim() : 'Penyesuaian Saldo Rekening';
      sheetTrx.appendRow([
        email,
        "TRX-" + new Date().getTime(),
        new Date(),
        diff > 0 ? 'INFLOW' : 'OUTFLOW',
        sanitizeSheetText(newNama),
        'Lainnya',
        Math.abs(diff),
        sanitizeSheetText(note),
        'ADJ-' + new Date().getTime()
      ]);
    }
  }

  return { status: 'success' };
}

function syncRenamedAccount(email, oldName, newName) {
  try {
    const sheetTrx = SS.getSheetByName('T_Transaksi');
    if (sheetTrx) {
      const trxData = sheetTrx.getDataRange().getValues();
      for (let i = 1; i < trxData.length; i++) {
        if ((trxData[i][0] || '').toString().toLowerCase().trim() === email &&
            (trxData[i][4] || '').toString().trim() === oldName) {
          sheetTrx.getRange(i + 1, 5).setValue(sanitizeSheetText(newName));
        }
      }
    }
    const sheetRec = SS.getSheetByName('M_Recurring');
    if (sheetRec) {
      const recData = sheetRec.getDataRange().getValues();
      for (let i = 1; i < recData.length; i++) {
        if ((recData[i][0] || '').toString().toLowerCase().trim() === email &&
            (recData[i][6] || '').toString().trim() === oldName) {
          sheetRec.getRange(i + 1, 7).setValue(sanitizeSheetText(newName));
        }
      }
    }
  } catch (e) {
    Logger.log("Sync rename notice: " + e.toString());
  }
}

function deleteAccount(payload) {
  const email = payload.email;
  const sheet = SS.getSheetByName('M_Akun');
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return { status: 'error', message: 'Rekening tidak ditemukan.' };

  const cols = resolveAkunColumns(data[0]);
  const targetId = (payload.idAkun || '').toString().trim();
  const targetNama = (payload.nama || '').toString().trim();

  for (let i = 1; i < data.length; i++) {
    if ((data[i][cols.email] || '').toString().toLowerCase().trim() === email) {
      const rowId = (data[i][cols.id] || '').toString().trim();
      const rowNama = (data[i][cols.nama] || '').toString().trim();
      if ((targetId && rowId === targetId) || (targetNama && rowNama === targetNama)) {
        sheet.deleteRow(i + 1);
        return { status: 'success' };
      }
    }
  }
  return { status: 'error', message: 'Rekening tidak ditemukan.' };
}

// ============================================================================
// 8. RECURRING, DEBT, GOALS, PORTFOLIO & WALLET MODULES (VALIDATED)
// ============================================================================
function addRecurring(payload) {
  const nama = (payload.nama || '').toString().trim();
  const nominal = Math.round(Number(payload.nominal) || 0);
  const tglTagihan = parseInt(payload.tgl_tagihan, 10) || 1;
  const akun = (payload.akun || '').toString().trim();

  if (!nama || nominal <= 0 || !akun) {
    return { status: 'error', message: 'Nama layanan, nominal (>0), dan rekening wajib diisi.' };
  }
  if (tglTagihan < 1 || tglTagihan > 31) {
    return { status: 'error', message: 'Tanggal tagihan harus antara 1 sampai 31.' };
  }

  SS.getSheetByName('M_Recurring').appendRow([
    payload.email,
    "REC-" + new Date().getTime(),
    sanitizeSheetText(nama),
    nominal,
    sanitizeSheetText(payload.frekuensi || 'Bulanan'),
    tglTagihan,
    sanitizeSheetText(akun)
  ]);
  return { status: 'success' };
}

function deleteRecurring(payload) {
  const email = payload.email;
  const sheet = SS.getSheetByName('M_Recurring');
  const data = sheet.getDataRange().getValues();
  const idRec = (payload.idRec || '').toString().trim();

  for (let i = 1; i < data.length; i++) {
    if ((data[i][0] || '').toString().toLowerCase().trim() === email &&
        (data[i][1] || '').toString().trim() === idRec) {
      sheet.deleteRow(i + 1);
      return { status: 'success' };
    }
  }
  return { status: 'error', message: 'Tagihan tidak ditemukan.' };
}

function addWallet(payload) {
  const nama = (payload.nama || '').toString().trim();
  const saldo = Math.max(0, Math.round(Number(payload.saldo) || 0));
  if (!nama) return { status: 'error', message: 'Nama dompet wajib diisi.' };

  const sheet = SS.getSheetByName('M_Akun');
  sheet.appendRow([
    payload.email,
    "ACC-" + new Date().getTime(),
    sanitizeSheetText(nama),
    'Wallet Investasi',
    sanitizeSheetText(nama),
    '',
    saldo,
    saldo
  ]);
  return { status: 'success' };
}

function deleteWallet(payload) {
  const email = payload.email;
  const nama = (payload.nama || '').toString().trim().toLowerCase();
  const sheet = SS.getSheetByName('M_Akun');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if ((data[i][0] || '').toString().toLowerCase().trim() === email &&
        (data[i][2] || '').toString().trim().toLowerCase() === nama &&
        (data[i][3] || '').toString() === 'Wallet Investasi') {
      const saldo = Number(data[i][7]) || 0;
      if (saldo > 0) {
        return { status: 'error', message: 'Dompet masih memiliki saldo. Kosongkan saldo terlebih dahulu.' };
      }
      sheet.deleteRow(i + 1);
      return { status: 'success' };
    }
  }
  return { status: 'error', message: 'Wallet tidak ditemukan.' };
}

function addGoal(payload) {
  const nama = (payload.nama || '').toString().trim();
  const target = Math.round(Number(payload.target) || 0);
  if (!nama || target <= 0) {
    return { status: 'error', message: 'Nama target dan nominal target (>0) wajib diisi.' };
  }

  SS.getSheetByName('M_Goals').appendRow([
    payload.email,
    "GOAL-" + new Date().getTime(),
    sanitizeSheetText(nama),
    target,
    0,
    sanitizeSheetText(payload.tenggat || ''),
    'ACTIVE'
  ]);
  return { status: 'success' };
}

function manageGoalFunds(payload) {
  const email = payload.email;
  const sheetGoal = SS.getSheetByName('M_Goals');
  const rows = sheetGoal.getDataRange().getValues();
  const targetName = (payload.namaGoal || '').toString().trim();
  const targetId = (payload.idGoal || '').toString().trim();

  for (let i = 1; i < rows.length; i++) {
    const rowEmail = (rows[i][0] || '').toString().toLowerCase().trim();
    const rowId = (rows[i][1] || '').toString().trim();
    const rowNama = (rows[i][2] || '').toString().trim();

    if (rowEmail === email && ((targetId && rowId === targetId) || (targetName && rowNama === targetName))) {
      let currentTerkumpul = Number(rows[i][4]) || 0;
      let nominal = Math.round(Number(payload.nominal) || 0);

      if (nominal <= 0) {
        return { status: 'error', message: 'Nominal harus lebih dari 0.' };
      }

      if (payload.tipeAksi === 'withdraw') {
        if (nominal > currentTerkumpul) {
          return { status: 'error', message: 'Nominal penarikan melebihi dana terkumpul pada target.' };
        }
        const sisaGoal = Math.max(0, currentTerkumpul - nominal);
        sheetGoal.getRange(i + 1, 5).setValue(sisaGoal);
        if (payload.isAchieved) {
          sheetGoal.getRange(i + 1, 7).setValue('COMPLETED');
        }
        return addTransaction({
          email: email,
          tipe: 'INFLOW',
          akun: payload.akun,
          kategori: 'Tabungan & Investasi',
          jumlah: nominal,
          keterangan: 'Pencairan: ' + rowNama,
          refId: rowId
        });
      } else if (payload.tipeAksi === 'add') {
        const trxRes = addTransaction({
          email: email,
          tipe: 'OUTFLOW',
          akun: payload.akun,
          kategori: 'Tabungan & Investasi',
          jumlah: nominal,
          keterangan: 'Nabung: ' + rowNama,
          refId: rowId
        });
        if (trxRes.status !== 'success') return trxRes;

        sheetGoal.getRange(i + 1, 5).setValue(currentTerkumpul + nominal);
        return { status: 'success' };
      }
    }
  }
  return { status: 'error', message: 'Goal tidak ditemukan.' };
}

function addDebt(payload) {
  const email = payload.email;
  const kontak = (payload.kontak || '').toString().trim();
  const tipe = (payload.tipe || '').toString().trim().toUpperCase();
  const newAmount = Math.round(Number(payload.jumlah) || 0);

  if (!kontak || newAmount <= 0 || !['UTANG', 'PIUTANG'].includes(tipe)) {
    return { status: 'error', message: 'Data hutang/piutang tidak valid.' };
  }

  const sheetDebt = SS.getSheetByName('M_Debt');
  const data = sheetDebt.getDataRange().getValues();
  let existingIndex = -1;
  let currentSisa = 0;
  let currentAwal = 0;
  let targetId = "";

  for (let i = 1; i < data.length; i++) {
    if ((data[i][0] || '').toString().toLowerCase().trim() === email &&
        (data[i][3] || '').toString().toLowerCase().trim() === kontak.toLowerCase() &&
        data[i][2] === tipe &&
        data[i][6] === 'ACTIVE') {
      existingIndex = i;
      targetId = data[i][1];
      currentAwal = Number(data[i][4]) || 0;
      currentSisa = Number(data[i][5]) || 0;
      break;
    }
  }

  if (existingIndex !== -1) {
    sheetDebt.getRange(existingIndex + 1, 5).setValue(currentAwal + newAmount);
    sheetDebt.getRange(existingIndex + 1, 6).setValue(currentSisa + newAmount);
  } else {
    targetId = "DEBT-" + new Date().getTime();
    sheetDebt.appendRow([email, targetId, tipe, sanitizeSheetText(kontak), newAmount, newAmount, 'ACTIVE']);
  }

  const sheetTrx = SS.getSheetByName('T_Transaksi');
  let ketMsg = kontak + " bertambah";
  sheetTrx.appendRow([
    email,
    "TRX-" + new Date().getTime(),
    new Date(),
    "NEUTRAL",
    "-",
    tipe === 'UTANG' ? "Hutang Bertambah" : "Piutang Bertambah",
    newAmount,
    sanitizeSheetText(ketMsg),
    targetId
  ]);

  return { status: 'success' };
}

function payDebt(payload) {
  const email = payload.email;
  const sheetDebt = SS.getSheetByName('M_Debt');
  const data = sheetDebt.getDataRange().getValues();
  const idDebt = (payload.idDebt || '').toString().trim();

  for (let i = 1; i < data.length; i++) {
    if ((data[i][0] || '').toString().toLowerCase().trim() === email &&
        (data[i][1] || '').toString().trim() === idDebt) {
      let tipe = data[i][2];
      let kontak = data[i][3];
      let currentSisa = Number(data[i][5]) || 0;
      let nominalBayar = Math.round(Number(payload.nominal) || 0);

      if (nominalBayar <= 0) {
        return { status: 'error', message: 'Nominal pelunasan harus lebih dari 0.' };
      }
      if (nominalBayar > currentSisa) nominalBayar = currentSisa;

      let trxTipe = (tipe === 'UTANG') ? 'OUTFLOW' : 'INFLOW';
      let ketMsg = (tipe === 'UTANG') ? 'Bayar hutang: ' + kontak : 'Terima piutang: ' + kontak;

      const trxRes = addTransaction({
        email: email,
        tipe: trxTipe,
        akun: payload.akun,
        kategori: 'Kewajiban & Sosial',
        jumlah: nominalBayar,
        keterangan: ketMsg,
        refId: idDebt
      });
      if (trxRes.status !== 'success') return trxRes;

      let newSisa = Math.max(0, currentSisa - nominalBayar);
      let status = (newSisa <= 0) ? 'COMPLETED' : 'ACTIVE';
      sheetDebt.getRange(i + 1, 6).setValue(newSisa);
      sheetDebt.getRange(i + 1, 7).setValue(status);

      return { status: 'success' };
    }
  }
  return { status: 'error', message: 'Data hutang/piutang tidak ditemukan.' };
}

function buyAsset(payload) {
  const email = payload.email;
  const sheetPorto = SS.getSheetByName('M_Portofolio');
  const idAset = "AST-" + new Date().getTime();
  let pureSimbol = (payload.simbol || '').toString().toUpperCase().replace(/[^A-Z0-9.\-_]/g, '').trim();
  let jumlahUnit = Number(payload.jumlah) || 0;
  let hargaUnitInput = Number(payload.harga) || 0;
  let mataUang = (payload.mataUang || 'IDR').toString().toUpperCase().replace(/[^A-Z0-9]/g, '').trim();

  if (!pureSimbol || jumlahUnit <= 0 || hargaUnitInput <= 0) {
    return { status: 'error', message: 'Detail pembelian aset tidak valid.' };
  }

  let valasRate = 1;
  if (mataUang !== 'IDR') {
    valasRate = Number(payload.kurs) || 0;
    if (valasRate <= 0) {
      const dataPorto = sheetPorto.getDataRange().getValues();
      for (let i = 1; i < dataPorto.length; i++) {
        if ((dataPorto[i][0] || '').toString().toLowerCase().trim() === email &&
            (dataPorto[i][2] || '').toString().toUpperCase() === mataUang &&
            dataPorto[i][6] === 'Valuta Asing') {
          valasRate = Number(dataPorto[i][5]) || Number(dataPorto[i][4]) || 1;
          break;
        }
      }
    }
    if (valasRate <= 0) valasRate = 1;
  }

  let hargaBeliIDR = Math.round(hargaUnitInput * valasRate);
  let totalHargaIDR = Math.round(jumlahUnit * hargaBeliIDR);
  let formula = hargaBeliIDR;

  if (payload.jenis === 'Cryptocurrency') {
    formula = '=IFERROR(GOOGLEFINANCE("CURRENCY:' + pureSimbol + 'USD") * GOOGLEFINANCE("CURRENCY:USDIDR"), ' + hargaBeliIDR + ')';
  } else if (payload.jenis === 'Saham Indonesia') {
    formula = '=IFERROR(GOOGLEFINANCE("IDX:' + pureSimbol + '"), ' + hargaBeliIDR + ')';
  } else if (payload.jenis === 'Valuta Asing') {
    formula = '=IFERROR(GOOGLEFINANCE("CURRENCY:' + pureSimbol + 'IDR"), ' + hargaBeliIDR + ')';
  }

  let keteranganStr = 'Beli Aset: ' + pureSimbol;
  if (mataUang !== 'IDR') {
    keteranganStr += ' (' + (jumlahUnit * hargaUnitInput).toFixed(2) + ' ' + mataUang + ')';
  }

  const trxRes = addTransaction({
    email: email,
    tipe: 'OUTFLOW',
    akun: payload.akun,
    kategori: 'Tabungan & Investasi',
    jumlah: totalHargaIDR,
    keterangan: keteranganStr,
    refId: idAset
  });
  if (trxRes.status !== 'success') return trxRes;

  sheetPorto.appendRow([
    email,
    idAset,
    pureSimbol,
    jumlahUnit,
    hargaBeliIDR,
    formula,
    sanitizeSheetText(payload.jenis || 'Saham Indonesia'),
    mataUang
  ]);

  return { status: 'success', idAset: idAset };
}

function sellAsset(payload) {
  const email = payload.email;
  const sheetPorto = SS.getSheetByName('M_Portofolio');
  const data = sheetPorto.getDataRange().getValues();
  const targetSimbol = (payload.simbol || '').toString().toUpperCase().trim();
  const targetId = (payload.idAset || '').toString().trim();
  let remainingToSell = Number(payload.jumlahJual) || 0;
  const totalDapat = Math.round(Number(payload.totalDapat) || 0);

  if (remainingToSell <= 0 || totalDapat <= 0) {
    return { status: 'error', message: 'Jumlah unit atau harga jual tidak valid.' };
  }

  let matchingRows = [];
  let totalOwned = 0;

  for (let i = 1; i < data.length; i++) {
    const rowEmail = (data[i][0] || '').toString().toLowerCase().trim();
    const rowId = (data[i][1] || '').toString().trim();
    const rowSimbol = (data[i][2] || '').toString().toUpperCase().trim();

    if (rowEmail === email && ((targetSimbol && rowSimbol === targetSimbol) || (!targetSimbol && rowId === targetId))) {
      const units = Number(data[i][3]) || 0;
      if (units > 0) {
        matchingRows.push({ rowIndex: i + 1, units: units });
        totalOwned += units;
      }
    }
  }

  if (matchingRows.length === 0 || totalOwned + 1e-8 < remainingToSell) {
    return { status: 'error', message: 'Jumlah unit melebihi kepemilikan aset Anda.' };
  }

  const trxRes = addTransaction({
    email: email,
    tipe: 'INFLOW',
    akun: payload.akunTujuan,
    kategori: 'Tabungan & Investasi',
    jumlah: totalDapat,
    keterangan: 'Jual Aset: ' + (targetSimbol || targetId)
  });
  if (trxRes.status !== 'success') return trxRes;

  let rowsToDelete = [];
  for (let k = 0; k < matchingRows.length && remainingToSell > 1e-8; k++) {
    const lot = matchingRows[k];
    if (lot.units <= remainingToSell + 1e-8) {
      remainingToSell -= lot.units;
      rowsToDelete.push(lot.rowIndex);
    } else {
      const newUnits = lot.units - remainingToSell;
      sheetPorto.getRange(lot.rowIndex, 4).setValue(newUnits);
      remainingToSell = 0;
    }
  }

  rowsToDelete.sort((a, b) => b - a).forEach(rIdx => {
    sheetPorto.deleteRow(rIdx);
  });

  return { status: 'success' };
}

// ============================================================================
// 9. GEMINI AI RECEIPT SCANNER
// ============================================================================
function processReceiptWithGemini(base64ImageFull) {
  if (!base64ImageFull) return { status: 'error', message: 'Gambar kosong.' };

  const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!apiKey) {
    return { status: 'error', message: 'GEMINI_API_KEY belum disetel di Script Properties Google Apps Script.' };
  }

  const base64Data = base64ImageFull.split(',')[1] || base64ImageFull;
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apiKey;
  const promptText = `Analyze this receipt.
You MUST return ONLY a JSON object. Do NOT wrap it in markdown.
Extract the data using EXACTLY these keys:
{
  "merchant": "String (Merchant Name)",
  "total": Number (Total Amount),
  "date": "String (YYYY-MM-DD)",
  "time": "String (HH:MM)",
  "items": [
    {
      "name": "String (Item name)",
      "qty": Number (Quantity),
      "price": Number (Total price for this item)
    }
  ]
}`;

  const payload = {
    "contents": [
      {
        "parts": [
          { "text": promptText },
          { "inline_data": { "mime_type": "image/jpeg", "data": base64Data } }
        ]
      }
    ],
    "generationConfig": {
      "responseMimeType": "application/json"
    }
  };

  const options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload),
    'muteHttpExceptions': true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const resultJson = JSON.parse(response.getContentText());
    if (resultJson.error) {
      return { status: 'error', message: 'Error Gemini API: ' + resultJson.error.message };
    }

    if (!resultJson.candidates || !resultJson.candidates[0] || !resultJson.candidates[0].content || !resultJson.candidates[0].content.parts || !resultJson.candidates[0].content.parts[0]) {
      return { status: 'error', message: 'AI tidak dapat mendeteksi teks dari nota tersebut.' };
    }

    let aiText = resultJson.candidates[0].content.parts[0].text;
    let cleanedText = aiText.replace(/```json/gi, "").replace(/```/g, "").trim();
    return { status: 'success', data: JSON.parse(cleanedText) };

  } catch (error) {
    return { status: 'error', message: 'Gagal memproses struk dengan AI: ' + error.toString() };
  }
}
