/**
 * ============================================================================
 * FINTRACK ENTERPRISE V3.0 - BACKEND ENGINE (CORE GS)
 * Architecture: Google Apps Script Database Logic
 * Enhanced: Dynamic SS Resolver, FIFO Multi-Lot Asset Engine, Atomic Forex
 *           Transfers, Formula Error Shield, Session & Email Validation,
 *           Gemini 2.5 Flash Receipt Scanner
 * ============================================================================
 */

const FALLBACK_SPREADSHEET_ID = "1nNOxMdkYQh1rh2zPq5P9sIjdG8T_fLYe7e3wEzu4oY5HLhfnzWdWxJuq";

const DEFAULT_SCHEMAS = {
  'M_User': ['Email', 'Nama', 'Password'],
  'M_Akun': ['Email', 'ID_Akun', 'Nama_Akun', 'Tipe_Akun', 'Atas_Nama', 'Nomor_Rekening', 'Saldo_Awal', 'Saldo_Realtime'],
  'T_Transaksi': ['Email', 'ID_Transaksi', 'Tanggal', 'Tipe', 'Akun', 'Kategori', 'Jumlah', 'Keterangan', 'Ref_ID'],
  'T_Transaksi_Detail': ['Email', 'ID_Transaksi', 'Nama_Item', 'Qty', 'Harga'],
  'M_Recurring': ['Email', 'ID_Recurring', 'Nama', 'Nominal', 'Frekuensi', 'Tgl_Tagihan', 'Akun'],
  'M_Debt': ['Email', 'ID_Debt', 'Tipe', 'Kontak', 'Nominal_Awal', 'Sisa', 'Status'],
  'M_Goals': ['Email', 'ID_Goal', 'Nama_Goal', 'Target', 'Terkumpul', 'Tenggat_Waktu', 'Status'],
  'M_Portofolio': ['Email', 'ID_Aset', 'Simbol', 'Jumlah', 'Harga_Beli', 'Harga_Saat_Ini', 'Jenis_Aset', 'Mata_Uang']
};

// ============================================================================
// 1. DATABASE RESOLVER & SELF-HEALING SHEET HELPER
// ============================================================================

function getSS() {
  const propId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (propId) {
    return SpreadsheetApp.openById(propId);
  }
  try {
    const active = SpreadsheetApp.getActiveSpreadsheet();
    if (active) return active;
  } catch (e) {}

  if (FALLBACK_SPREADSHEET_ID) {
    return SpreadsheetApp.openById(FALLBACK_SPREADSHEET_ID);
  }
  throw new Error("SPREADSHEET_ID belum dikonfigurasi pada Script Properties.");
}

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

// ============================================================================
// 2. HTTP HANDLERS (doGet & doPost)
// ============================================================================

function doGet(e) {
  return response({
    status: 'success',
    message: 'Fintrack Enterprise V3.0 Backend Engine Active',
    timestamp: new Date().toISOString()
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
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

    const email = (res.email || '').toString().trim();
    if (!email || !isRegisteredEmail(email)) {
      return response({ status: 'error', message: 'Sesi tidak valid atau email tidak terdaftar.' });
    }
    res.email = email;

    switch (action) {
      case 'getData':
        return response(getUserData(email));
      case 'addTransaction':
        return response(addTransaction(res));
      case 'transfer':
        return response(transferFunds(res));
      case 'addRecurring':
        return response(addRecurring(res));
      case 'deleteRecurring':
        return response(deleteRecurring(res));
      case 'addGoal':
        return response(addGoal(res));
      case 'manageGoalFunds':
        return response(manageGoalFunds(res));
      case 'addDebt':
        return response(addDebt(res));
      case 'payDebt':
        return response(payDebt(res));
      case 'buyAsset':
        return response(buyAsset(res));
      case 'sellAsset':
        return response(sellAsset(res));
      case 'addWallet':
        return response(addWallet(res));
      case 'deleteWallet':
        return response(deleteWallet(res));
      case 'scanReceipt':
        return response(processReceiptWithGemini(res.imageB64));
      default:
        return response({ status: 'error', message: 'Fungsi tidak dikenali.' });
    }
  } catch (err) {
    return response({ status: 'error', message: "System Error: " + err.toString() });
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

function response(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================================================
// 3. SECURITY, AUTH & GENERAL UTILITIES
// ============================================================================

function sanitizeSheetText(val) {
  if (val === undefined || val === null) return "";
  const str = val.toString();
  if (/^[=+\-@\t\r]/.test(str)) {
    return "'" + str;
  }
  return str;
}

function hashPassword(pass) {
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, pass + "_fintrack_salt");
  return digest.map(function (byte) {
    return (byte < 0 ? byte + 256 : byte).toString(16).padStart(2, '0');
  }).join('');
}

function isRegisteredEmail(email) {
  const sheet = getSS().getSheetByName('M_User');
  if (!sheet) return false;
  const data = sheet.getDataRange().getValues();
  const target = email.toLowerCase();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][0].toString().trim().toLowerCase() === target) {
      return true;
    }
  }
  return false;
}

function loginUser(email, password) {
  const sheet = getSS().getSheetByName('M_User');
  if (!sheet) return { status: 'error', message: 'Tabel M_User tidak ditemukan.' };
  if (!email || !password) return { status: 'error', message: 'Email dan password wajib diisi.' };

  const data = sheet.getDataRange().getValues();
  const inputEmail = email.toString().trim().toLowerCase();
  const inputHash = hashPassword(password);

  for (let i = 1; i < data.length; i++) {
    const sheetEmail = (data[i][0] || '').toString().trim().toLowerCase();
    const sheetPass = (data[i][2] || '').toString();
    if (sheetEmail === inputEmail) {
      if (sheetPass === inputHash || sheetPass === password.toString()) {
        const sessionToken = "SES-" + Utilities.getUuid();
        if (sheetPass === password.toString() && sheetPass !== inputHash) {
          sheet.getRange(i + 1, 3).setValue(inputHash);
        }
        return {
          status: 'success',
          name: data[i][1],
          email: data[i][0].toString().trim(),
          token: sessionToken
        };
      }
    }
  }
  return { status: 'error', message: 'Email atau Password salah.' };
}

function getColumnIndex(headers, ...candidates) {
  for (let c = 0; c < candidates.length; c++) {
    const target = candidates[c].toLowerCase().replace(/[_ ]/g, '');
    const idx = headers.findIndex(function (h) {
      return h.toString().toLowerCase().replace(/[_ ]/g, '') === target;
    });
    if (idx !== -1) return idx;
  }
  return -1;
}

function parseValidNumber(val) {
  if (val === undefined || val === null || val === '') return NaN;
  if (typeof val === 'number') return isFinite(val) ? val : NaN;
  const str = val.toString().trim();
  if (str.startsWith('#') || str.toLowerCase().includes('loading') || str.toLowerCase().includes('error')) {
    return NaN;
  }
  const num = Number(str.replace(/,/g, '.'));
  return isFinite(num) ? num : NaN;
}

// ============================================================================
// 4. FOREX & PORTFOLIO HELPERS
// ============================================================================

function getValasRate(email, currencyCode) {
  const curr = (currencyCode || 'IDR').toString().trim().toUpperCase();
  if (curr === 'IDR') return 1;

  const sheetPorto = getSS().getSheetByName('M_Portofolio');
  if (sheetPorto) {
    const dataPorto = sheetPorto.getDataRange().getValues();
    for (let i = 1; i < dataPorto.length; i++) {
      const rowEmail = (dataPorto[i][0] || '').toString().trim().toLowerCase();
      const rowSimbol = (dataPorto[i][2] || '').toString().trim().toUpperCase();
      const rowJenis = (dataPorto[i][6] || '').toString().trim();
      if (rowEmail === email.toLowerCase() && rowSimbol === curr && rowJenis === 'Valuta Asing') {
        const liveVal = parseValidNumber(dataPorto[i][5]);
        const buyVal = parseValidNumber(dataPorto[i][4]);
        if (!isNaN(liveVal) && liveVal > 0) return liveVal;
        if (!isNaN(buyVal) && buyVal > 0) return buyVal;
      }
    }
  }

  // Fallback live exchange rate API jika aset valas belum tercatat di M_Portofolio
  try {
    const res = UrlFetchApp.fetch("https://open.er-api.com/v6/latest/" + encodeURIComponent(curr), {
      muteHttpExceptions: true
    });
    const json = JSON.parse(res.getContentText());
    if (json && json.rates && json.rates.IDR) {
      return Number(json.rates.IDR);
    }
  } catch (e) {
    Logger.log("Fallback Forex API gagal: " + e.toString());
  }

  return curr === 'USD' ? 16250 : 1;
}

function updateValasUnits(email, valasSimbol, deltaUnits) {
  const sym = valasSimbol.toString().trim().toUpperCase();
  const sheetPorto = getOrCreateSheet('M_Portofolio');
  const dataPorto = sheetPorto.getDataRange().getValues();
  const targetEmail = email.toLowerCase();

  const matchingRows = [];
  for (let i = 1; i < dataPorto.length; i++) {
    const rowEmail = (dataPorto[i][0] || '').toString().trim().toLowerCase();
    const rowSimbol = (dataPorto[i][2] || '').toString().trim().toUpperCase();
    const rowJenis = (dataPorto[i][6] || '').toString().trim();
    if (rowEmail === targetEmail && rowSimbol === sym && rowJenis === 'Valuta Asing') {
      matchingRows.push({
        rowIndex: i + 1,
        units: Number(dataPorto[i][3]) || 0
      });
    }
  }

  if (deltaUnits >= 0) {
    if (matchingRows.length > 0) {
      const first = matchingRows[0];
      sheetPorto.getRange(first.rowIndex, 4).setValue(first.units + deltaUnits);
    } else {
      const rate = getValasRate(email, sym);
      const formula = '=IFERROR(GOOGLEFINANCE("CURRENCY:' + sym + 'IDR"), ' + rate + ')';
      sheetPorto.appendRow([
        email,
        "AST-" + new Date().getTime(),
        sym,
        deltaUnits,
        rate,
        formula,
        'Valuta Asing',
        'IDR'
      ]);
    }
    return true;
  }

  // Pemotongan FIFO jika deltaUnits < 0
  let remainingToDeduct = Math.abs(deltaUnits);
  for (let j = 0; j < matchingRows.length && remainingToDeduct > 0; j++) {
    const lot = matchingRows[j];
    if (lot.units <= remainingToDeduct) {
      remainingToDeduct -= lot.units;
      sheetPorto.getRange(lot.rowIndex, 4).setValue(0);
    } else {
      sheetPorto.getRange(lot.rowIndex, 4).setValue(lot.units - remainingToDeduct);
      remainingToDeduct = 0;
    }
  }
  return true;
}

// ============================================================================
// 5. DATA FETCHING (getUserData)
// ============================================================================

function getUserData(email) {
  const tables = ['M_Akun', 'T_Transaksi', 'T_Transaksi_Detail', 'M_Goals', 'M_Debt', 'M_Recurring', 'M_Portofolio'];
  const result = { status: 'success', data: {} };
  const targetEmail = email.toLowerCase();

  tables.forEach(function (tableName) {
    const sheet = getSS().getSheetByName(tableName);
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
    const userRows = rows.filter(function (row) {
      return row[0] && row[0].toString().trim().toLowerCase() === targetEmail;
    });

    result.data[tableName] = userRows.map(function (row) {
      const obj = {};
      headers.forEach(function (header, i) {
        obj[header] = row[i];
      });

      // Shield harga live GOOGLEFINANCE dari #N/A atau Loading... agar portofolio tidak drop ke 0
      if (tableName === 'M_Portofolio') {
        const hargaBeli = parseValidNumber(obj['Harga_Beli'] !== undefined ? obj['Harga_Beli'] : obj['Harga Beli']) || 0;
        const rawLive = obj['Harga_Saat_Ini'] !== undefined ? obj['Harga_Saat_Ini'] : obj['Harga_Realtime'];
        const parsedLive = parseValidNumber(rawLive);
        const safeLive = (!isNaN(parsedLive) && parsedLive > 0) ? parsedLive : hargaBeli;
        obj['Harga_Saat_Ini'] = safeLive;
      }

      return obj;
    });
  });

  return result;
}

// ============================================================================
// 6. CORE TRANSACTION & TRANSFER ENGINE
// ============================================================================

function addTransaction(payload) {
  const idTrx = payload.refId || ("TRX-" + new Date().getTime());
  const tglFinal = payload.tanggal || new Date();
  const sheetTrx = getOrCreateSheet('T_Transaksi');
  const refId = payload.refId || "";
  const jumlahFinal = Math.round(Number(payload.jumlah) || 0);
  const tipeFinal = (payload.tipe || '').toString().trim().toUpperCase();
  const akunStr = (payload.akun || '').toString().trim();

  // 1. Simpan Transaksi Utama
  sheetTrx.appendRow([
    payload.email,
    idTrx,
    tglFinal,
    tipeFinal,
    sanitizeSheetText(akunStr),
    sanitizeSheetText(payload.kategori),
    jumlahFinal,
    sanitizeSheetText(payload.keterangan),
    refId
  ]);

  // 2. Simpan Detail Item (Jika Ada)
  if (payload.itemsDetail) {
    try {
      const sheetDetail = getOrCreateSheet("T_Transaksi_Detail");
      const items = typeof payload.itemsDetail === 'string'
        ? JSON.parse(payload.itemsDetail)
        : payload.itemsDetail;
      if (Array.isArray(items)) {
        items.forEach(function (item) {
          sheetDetail.appendRow([
            payload.email,
            idTrx,
            sanitizeSheetText(item.name || "Item"),
            Number(item.qty) || 1,
            Math.round(Number(item.price) || 0)
          ]);
        });
      }
    } catch (e) {
      Logger.log("Gagal memproses detail transaksi: " + e.toString());
    }
  }

  // 3. Update Saldo Akun (VALAS vs IDR REGULER; NEUTRAL tidak mengubah saldo)
  if (tipeFinal === 'INFLOW' || tipeFinal === 'OUTFLOW') {
    if (akunStr.startsWith("VALAS_")) {
      const valasSimbol = akunStr.replace("VALAS_", "").trim().toUpperCase();
      const valasRate = getValasRate(payload.email, valasSimbol);
      const amountInValas = jumlahFinal / valasRate;
      const deltaUnits = (tipeFinal === 'INFLOW') ? amountInValas : -amountInValas;
      updateValasUnits(payload.email, valasSimbol, deltaUnits);
    } else {
      const sheetAkun = getOrCreateSheet('M_Akun');
      const dataAkun = sheetAkun.getDataRange().getValues();
      const headers = dataAkun[0];

      const idxEmail = getColumnIndex(headers, 'Email');
      const idxAkun = getColumnIndex(headers, 'Nama_Akun', 'Nama Akun');
      const idxSaldoReal = getColumnIndex(headers, 'Saldo_Realtime', 'Saldo Realtime');

      if (idxEmail !== -1 && idxAkun !== -1 && idxSaldoReal !== -1) {
        for (let i = 1; i < dataAkun.length; i++) {
          if (
            dataAkun[i][idxEmail].toString().trim().toLowerCase() === payload.email.toLowerCase() &&
            dataAkun[i][idxAkun].toString().trim() === akunStr
          ) {
            const saldoLama = Number(dataAkun[i][idxSaldoReal]) || 0;
            const newBalance = (tipeFinal === 'INFLOW') ? saldoLama + jumlahFinal : saldoLama - jumlahFinal;
            sheetAkun.getRange(i + 1, idxSaldoReal + 1).setValue(newBalance);
            break;
          }
        }
      }
    }
  }

  return { status: 'success', trxId: idTrx };
}

function transferFunds(payload) {
  const fromAcc = (payload.fromAcc || '').toString().trim();
  const toAcc = (payload.toAcc || '').toString().trim();
  const amount = Math.round(Number(payload.amount) || 0);
  const admin = Math.round(Number(payload.admin) || 0);
  const desc = payload.desc || ("Transfer dari " + fromAcc + " ke " + toAcc);
  const tgl = payload.tanggal || new Date();
  const nowMs = new Date().getTime();
  const refId = "TF-" + nowMs;

  if (amount <= 0 || !fromAcc || !toAcc || fromAcc === toAcc) {
    return { status: 'error', message: 'Parameter transfer tidak valid.' };
  }

  const isFromValas = fromAcc.startsWith('VALAS_');
  const isToValas = toAcc.startsWith('VALAS_');

  const sheetAkun = getOrCreateSheet('M_Akun');
  const dataAkun = sheetAkun.getDataRange().getValues();
  const headers = dataAkun[0];
  const idxEmail = getColumnIndex(headers, 'Email');
  const idxAkun = getColumnIndex(headers, 'Nama_Akun', 'Nama Akun');
  const idxSaldoReal = getColumnIndex(headers, 'Saldo_Realtime', 'Saldo Realtime');

  let fromIdx = -1, toIdx = -1;
  let fromBal = 0, toBal = 0;

  for (let i = 1; i < dataAkun.length; i++) {
    if (dataAkun[i][idxEmail].toString().trim().toLowerCase() === payload.email.toLowerCase()) {
      const namaRow = dataAkun[i][idxAkun].toString().trim();
      if (!isFromValas && namaRow === fromAcc) {
        fromIdx = i;
        fromBal = Number(dataAkun[i][idxSaldoReal]) || 0;
      }
      if (!isToValas && namaRow === toAcc) {
        toIdx = i;
        toBal = Number(dataAkun[i][idxSaldoReal]) || 0;
      }
    }
  }

  // Validasi keberadaan akun asal & tujuan
  if (!isFromValas && fromIdx === -1) {
    return { status: 'error', message: 'Rekening asal tidak ditemukan.' };
  }
  if (!isToValas && toIdx === -1) {
    return { status: 'error', message: 'Rekening tujuan tidak ditemukan.' };
  }

  // Validasi saldo rekening asal
  if (!isFromValas) {
    if (fromBal < (amount + admin)) {
      return { status: 'error', message: 'Saldo rekening asal tidak mencukupi.' };
    }
  } else {
    const fromSym = fromAcc.replace('VALAS_', '').trim().toUpperCase();
    const fromRate = getValasRate(payload.email, fromSym);
    const sheetPorto = getOrCreateSheet('M_Portofolio');
    const dataPorto = sheetPorto.getDataRange().getValues();
    let totalUnits = 0;
    for (let i = 1; i < dataPorto.length; i++) {
      if (
        dataPorto[i][0].toString().trim().toLowerCase() === payload.email.toLowerCase() &&
        dataPorto[i][2].toString().trim().toUpperCase() === fromSym &&
        dataPorto[i][6].toString().trim() === 'Valuta Asing'
      ) {
        totalUnits += Number(dataPorto[i][3]) || 0;
      }
    }
    if ((totalUnits * fromRate) + 1 < (amount + admin)) {
      return { status: 'error', message: 'Saldo ' + fromSym + ' tidak mencukupi.' };
    }
  }

  // Eksekusi mutasi asal
  if (!isFromValas) {
    sheetAkun.getRange(fromIdx + 1, idxSaldoReal + 1).setValue(fromBal - amount - admin);
  } else {
    const fromSym = fromAcc.replace('VALAS_', '').trim().toUpperCase();
    const fromRate = getValasRate(payload.email, fromSym);
    updateValasUnits(payload.email, fromSym, -((amount + admin) / fromRate));
  }

  // Eksekusi mutasi tujuan
  if (!isToValas) {
    sheetAkun.getRange(toIdx + 1, idxSaldoReal + 1).setValue(toBal + amount);
  } else {
    const toSym = toAcc.replace('VALAS_', '').trim().toUpperCase();
    const toRate = getValasRate(payload.email, toSym);
    updateValasUnits(payload.email, toSym, amount / toRate);
  }

  // Catat histori transaksi mutasi
  const sheetTrx = getOrCreateSheet('T_Transaksi');
  sheetTrx.appendRow([
    payload.email, "TRX-" + nowMs, tgl, 'OUTFLOW',
    sanitizeSheetText(fromAcc), 'Transfer Keluar', amount, sanitizeSheetText(desc), refId
  ]);
  sheetTrx.appendRow([
    payload.email, "TRX-" + (nowMs + 1), tgl, 'INFLOW',
    sanitizeSheetText(toAcc), 'Transfer Masuk', amount, sanitizeSheetText(desc), refId
  ]);
  if (admin > 0) {
    sheetTrx.appendRow([
      payload.email, "TRX-" + (nowMs + 2), tgl, 'OUTFLOW',
      sanitizeSheetText(fromAcc), 'Biaya Admin', admin, sanitizeSheetText("Admin tf ke " + toAcc), refId
    ]);
  }

  return { status: 'success', refId: refId };
}

// ============================================================================
// 7. RECURRING, WALLETS, GOALS & DEBTS
// ============================================================================

function addRecurring(payload) {
  getOrCreateSheet('M_Recurring').appendRow([
    payload.email,
    "REC-" + new Date().getTime(),
    sanitizeSheetText(payload.nama),
    Math.round(Number(payload.nominal) || 0),
    sanitizeSheetText(payload.frekuensi),
    payload.tgl_tagihan,
    sanitizeSheetText(payload.akun)
  ]);
  return { status: 'success' };
}

function deleteRecurring(payload) {
  const sheet = getOrCreateSheet('M_Recurring');
  const data = sheet.getDataRange().getValues();
  const targetId = (payload.idRec || '').toString().trim();

  for (let i = 1; i < data.length; i++) {
    if (
      data[i][0].toString().trim().toLowerCase() === payload.email.toLowerCase() &&
      data[i][1].toString().trim() === targetId
    ) {
      sheet.deleteRow(i + 1);
      return { status: 'success' };
    }
  }
  return { status: 'error', message: 'Data langganan tidak ditemukan.' };
}

function addWallet(payload) {
  const initialSaldo = Math.round(Number(payload.saldo) || 0);
  getOrCreateSheet('M_Akun').appendRow([
    payload.email,
    "ACC-" + new Date().getTime(),
    sanitizeSheetText(payload.nama),
    'Wallet Investasi',
    sanitizeSheetText(payload.nama),
    '',
    initialSaldo,
    initialSaldo
  ]);
  return { status: 'success' };
}

function deleteWallet(payload) {
  const sheet = getOrCreateSheet('M_Akun');
  const data = sheet.getDataRange().getValues();
  const targetName = (payload.nama || '').toString().trim().toLowerCase();

  for (let i = 1; i < data.length; i++) {
    if (
      data[i][0].toString().trim().toLowerCase() === payload.email.toLowerCase() &&
      data[i][2].toString().trim().toLowerCase() === targetName &&
      data[i][3].toString().trim() === 'Wallet Investasi'
    ) {
      const saldoRealtime = Number(data[i][7]) || 0;
      if (saldoRealtime > 0) {
        return { status: 'error', message: 'Saldo dompet harus 0 sebelum dihapus.' };
      }
      sheet.deleteRow(i + 1);
      return { status: 'success' };
    }
  }
  return { status: 'error', message: 'Wallet tidak ditemukan.' };
}

function addGoal(payload) {
  getOrCreateSheet('M_Goals').appendRow([
    payload.email,
    "GOAL-" + new Date().getTime(),
    sanitizeSheetText(payload.nama),
    Math.round(Number(payload.target) || 0),
    0,
    '',
    'ACTIVE'
  ]);
  return { status: 'success' };
}

function manageGoalFunds(payload) {
  const sheetGoal = getOrCreateSheet('M_Goals');
  const rows = sheetGoal.getDataRange().getValues();
  const targetGoal = (payload.namaGoal || '').toString().trim();
  const nominal = Math.round(Number(payload.nominal) || 0);

  if (nominal <= 0) {
    return { status: 'error', message: 'Nominal harus lebih dari 0.' };
  }

  for (let i = 1; i < rows.length; i++) {
    if (
      rows[i][0].toString().trim().toLowerCase() === payload.email.toLowerCase() &&
      rows[i][2].toString().trim() === targetGoal &&
      (rows[i][6] || 'ACTIVE').toString().trim().toUpperCase() !== 'COMPLETED'
    ) {
      const currentTerkumpul = Number(rows[i][4]) || 0;

      if (payload.tipeAksi === 'withdraw') {
        if (nominal > currentTerkumpul) {
          return { status: 'error', message: 'Nominal tarik melebihi dana target yang terkumpul.' };
        }
        const sisaGoal = Math.max(0, currentTerkumpul - nominal);
        sheetGoal.getRange(i + 1, 5).setValue(sisaGoal);
        if (payload.isAchieved) {
          sheetGoal.getRange(i + 1, 7).setValue('COMPLETED');
        }
        return addTransaction({
          email: payload.email,
          tipe: 'INFLOW',
          akun: payload.akun,
          kategori: 'Tabungan & Investasi',
          jumlah: nominal,
          keterangan: 'Pencairan: ' + targetGoal
        });
      } else if (payload.tipeAksi === 'add') {
        sheetGoal.getRange(i + 1, 5).setValue(currentTerkumpul + nominal);
        return addTransaction({
          email: payload.email,
          tipe: 'OUTFLOW',
          akun: payload.akun,
          kategori: 'Tabungan & Investasi',
          jumlah: nominal,
          keterangan: 'Nabung: ' + targetGoal
        });
      }
    }
  }
  return { status: 'error', message: 'Goal aktif tidak ditemukan.' };
}

function addDebt(payload) {
  const sheetDebt = getOrCreateSheet('M_Debt');
  const data = sheetDebt.getDataRange().getValues();
  const tipeNorm = (payload.tipe || 'UTANG').toString().trim().toUpperCase();
  const kontakClean = (payload.kontak || '').toString().trim();
  const newAmount = Math.round(Number(payload.jumlah) || 0);

  if (!kontakClean || newAmount <= 0) {
    return { status: 'error', message: 'Data kontak atau nominal tidak valid.' };
  }

  let existingIndex = -1;
  let currentSisa = 0;
  let currentAwal = 0;
  let targetId = "";

  for (let i = 1; i < data.length; i++) {
    if (
      data[i][0].toString().trim().toLowerCase() === payload.email.toLowerCase() &&
      data[i][3].toString().trim().toLowerCase() === kontakClean.toLowerCase() &&
      data[i][2].toString().trim().toUpperCase() === tipeNorm &&
      (data[i][6] || '').toString().trim().toUpperCase() === 'ACTIVE'
    ) {
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
    sheetDebt.appendRow([
      payload.email,
      targetId,
      tipeNorm,
      sanitizeSheetText(kontakClean),
      newAmount,
      newAmount,
      'ACTIVE'
    ]);
  }

  const sheetTrx = getOrCreateSheet('T_Transaksi');
  const ketMsg = kontakClean + " bertambah";
  sheetTrx.appendRow([
    payload.email,
    "TRX-" + new Date().getTime(),
    new Date(),
    "NEUTRAL",
    "-",
    "Hutang Bertambah",
    newAmount,
    sanitizeSheetText(ketMsg),
    targetId
  ]);

  return { status: 'success' };
}

function payDebt(payload) {
  const sheetDebt = getOrCreateSheet('M_Debt');
  const data = sheetDebt.getDataRange().getValues();
  const idDebt = (payload.idDebt || '').toString().trim();

  for (let i = 1; i < data.length; i++) {
    if (
      data[i][0].toString().trim().toLowerCase() === payload.email.toLowerCase() &&
      data[i][1].toString().trim() === idDebt
    ) {
      const tipe = (data[i][2] || '').toString().trim().toUpperCase();
      const kontak = data[i][3];
      const currentSisa = Number(data[i][5]) || 0;
      let nominalBayar = Math.round(Number(payload.nominal) || 0);

      if (nominalBayar <= 0 || currentSisa <= 0) {
        return { status: 'error', message: 'Nominal pembayaran tidak valid atau tagihan sudah lunas.' };
      }
      if (nominalBayar > currentSisa) nominalBayar = currentSisa;

      const newSisa = Math.max(0, currentSisa - nominalBayar);
      const status = (newSisa <= 0) ? 'COMPLETED' : 'ACTIVE';

      sheetDebt.getRange(i + 1, 6).setValue(newSisa);
      sheetDebt.getRange(i + 1, 7).setValue(status);

      const trxTipe = (tipe === 'UTANG') ? 'OUTFLOW' : 'INFLOW';
      const ketMsg = (tipe === 'UTANG') ? 'Bayar hutang: ' + kontak : 'Terima piutang: ' + kontak;

      return addTransaction({
        email: payload.email,
        tipe: trxTipe,
        akun: payload.akun,
        kategori: 'Kewajiban & Sosial',
        jumlah: nominalBayar,
        keterangan: ketMsg,
        refId: idDebt
      });
    }
  }
  return { status: 'error', message: 'Data hutang/piutang tidak ditemukan.' };
}

// ============================================================================
// 8. INVESTMENT PORTFOLIO ENGINE (BUY & FIFO MULTI-LOT SELL)
// ============================================================================

function buyAsset(payload) {
  const sheetPorto = getOrCreateSheet('M_Portofolio');
  const idAset = "AST-" + new Date().getTime();
  const pureSimbol = (payload.simbol || '').toString().toUpperCase().replace(/[^A-Z0-9.\-_]/g, '').trim();
  const jenis = (payload.jenis || '').toString().trim();
  const jumlah = Number(payload.jumlah) || 0;
  const harga = Number(payload.harga) || 0;
  const mataUang = (payload.mataUang || 'IDR').toString().toUpperCase().replace(/[^A-Z0-9]/g, '').trim();

  if (!pureSimbol || jumlah <= 0 || harga <= 0) {
    return { status: 'error', message: 'Detail pembelian aset tidak valid.' };
  }

  let formula = harga;
  if (jenis === 'Cryptocurrency') {
    formula = '=IFERROR(GOOGLEFINANCE("CURRENCY:' + pureSimbol + 'USD") * GOOGLEFINANCE("CURRENCY:USDIDR"), ' + harga + ')';
  } else if (jenis === 'Saham Indonesia') {
    formula = '=IFERROR(GOOGLEFINANCE("IDX:' + pureSimbol + '"), ' + harga + ')';
  } else if (jenis === 'Valuta Asing') {
    formula = '=IFERROR(GOOGLEFINANCE("CURRENCY:' + pureSimbol + 'IDR"), ' + harga + ')';
  } else if (jenis.toLowerCase().includes('amerika') || jenis.toLowerCase().includes('us')) {
    formula = '=IFERROR(GOOGLEFINANCE("' + pureSimbol + '"), ' + harga + ')';
  }

  sheetPorto.appendRow([
    payload.email,
    idAset,
    pureSimbol,
    jumlah,
    harga,
    formula,
    jenis,
    mataUang
  ]);

  let totalHargaIDR = Number(payload.totalHarga) || (jumlah * harga);
  let keteranganStr = 'Beli Aset: ' + pureSimbol;

  if (mataUang !== 'IDR') {
    const valasRate = getValasRate(payload.email, mataUang);
    totalHargaIDR = (Number(payload.totalHarga) || (jumlah * harga)) * valasRate;
    keteranganStr += ' (' + (Number(payload.totalHarga) || (jumlah * harga)) + ' ' + mataUang + ')';
  }

  return addTransaction({
    email: payload.email,
    tipe: 'OUTFLOW',
    akun: payload.akun,
    kategori: 'Tabungan & Investasi',
    jumlah: totalHargaIDR,
    keterangan: keteranganStr
  });
}

function sellAsset(payload) {
  const sheetPorto = getOrCreateSheet('M_Portofolio');
  const data = sheetPorto.getDataRange().getValues();
  const targetEmail = payload.email.toLowerCase();
  const targetId = (payload.idAset || '').toString().trim();
  const targetSimbol = (payload.simbol || '').toString().trim().toUpperCase();
  let remainingToSell = Number(payload.jumlahJual) || 0;

  if (remainingToSell <= 0) {
    return { status: 'error', message: 'Jumlah unit jual tidak valid.' };
  }

  // Kumpulkan semua lot milik user untuk simbol ini (prioritaskan idAset jika ada, lalu FIFO)
  const lots = [];
  let assetCurrency = 'IDR';

  for (let i = 1; i < data.length; i++) {
    const rowEmail = (data[i][0] || '').toString().trim().toLowerCase();
    const rowId = (data[i][1] || '').toString().trim();
    const rowSimbol = (data[i][2] || '').toString().trim().toUpperCase();

    if (rowEmail === targetEmail && (rowId === targetId || (targetSimbol && rowSimbol === targetSimbol))) {
      const units = Number(data[i][3]) || 0;
      if (units > 0) {
        if (data[i][7]) assetCurrency = data[i][7].toString().trim().toUpperCase();
        lots.push({
          rowIndex: i + 1,
          isPrimary: rowId === targetId,
          units: units
        });
      }
    }
  }

  if (lots.length === 0) {
    return { status: 'error', message: 'Aset tidak ditemukan.' };
  }

  lots.sort(function (a, b) {
    if (a.isPrimary && !b.isPrimary) return -1;
    if (!a.isPrimary && b.isPrimary) return 1;
    return a.rowIndex - b.rowIndex;
  });

  const rowsToDelete = [];
  for (let j = 0; j < lots.length && remainingToSell > 0; j++) {
    const lot = lots[j];
    const newUnits = lot.units - remainingToSell;
    if (newUnits <= 0.0000001) {
      remainingToSell = Math.max(0, remainingToSell - lot.units);
      rowsToDelete.push(lot.rowIndex);
    } else {
      sheetPorto.getRange(lot.rowIndex, 4).setValue(newUnits);
      remainingToSell = 0;
    }
  }

  // Hapus baris dari indeks terbesar ke terkecil agar nomor baris tidak bergeser
  rowsToDelete.sort(function (a, b) { return b - a; }).forEach(function (rowIdx) {
    sheetPorto.deleteRow(rowIdx);
  });

  let totalDapatIDR = Number(payload.totalDapat) || 0;
  let keteranganStr = 'Jual Aset: ' + (targetSimbol || payload.simbol);

  if (assetCurrency !== 'IDR') {
    const valasRate = getValasRate(payload.email, assetCurrency);
    keteranganStr += ' (' + totalDapatIDR + ' ' + assetCurrency + ')';
    totalDapatIDR = totalDapatIDR * valasRate;
  }

  return addTransaction({
    email: payload.email,
    tipe: 'INFLOW',
    akun: payload.akunTujuan,
    kategori: 'Tabungan & Investasi',
    jumlah: totalDapatIDR,
    keterangan: keteranganStr
  });
}

// ============================================================================
// 9. GEMINI AI RECEIPT SCANNER
// ============================================================================

function processReceiptWithGemini(base64ImageFull) {
  if (!base64ImageFull) {
    return { status: 'error', message: 'Gambar kosong.' };
  }

  const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!apiKey) {
    return { status: 'error', message: 'Sistem gagal memuat Gemini API Key. Periksa Script Properties.' };
  }

  const base64Data = base64ImageFull.indexOf(',') > -1
    ? base64ImageFull.split(',')[1]
    : base64ImageFull;

  const promptText = [
    'Analyze this receipt and extract transaction details.',
    'Return ONLY a valid JSON object without markdown formatting.',
    'Use these exact keys:',
    '{',
    '  "merchant": "String (Merchant or store name)",',
    '  "total": Number (Final total amount paid),',
    '  "date": "String (YYYY-MM-DD)",',
    '  "time": "String (HH:MM)",',
    '  "items": [',
    '    {',
    '      "name": "String (Item name)",',
    '      "qty": Number (Quantity),',
    '      "price": Number (Total line price for this item),',
    '      "category": "String (One of: Makanan, Hiburan, Tagihan, Tabungan & Investasi, Kewajiban & Sosial, Transportasi, Lainnya)"',
    '    }',
    '  ]',
    '}'
  ].join('\n');

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

  const models = ['gemini-2.5-flash', 'gemini-2.0-flash'];
  let lastError = '';

  for (let m = 0; m < models.length; m++) {
    try {
      const url = "https://generativelanguage.googleapis.com/v1beta/models/" + models[m] + ":generateContent?key=" + apiKey;
      const res = UrlFetchApp.fetch(url, options);
      const resultJson = JSON.parse(res.getContentText());

      if (resultJson.error) {
        lastError = resultJson.error.message || 'API Error';
        continue;
      }

      if (
        !resultJson.candidates ||
        !resultJson.candidates[0] ||
        !resultJson.candidates[0].content ||
        !resultJson.candidates[0].content.parts ||
        !resultJson.candidates[0].content.parts[0]
      ) {
        lastError = 'AI tidak dapat mendeteksi teks dari nota tersebut.';
        continue;
      }

      const aiText = resultJson.candidates[0].content.parts[0].text;
      const cleanedText = aiText.replace(/```json/gi, "").replace(/```/g, "").trim();
      return { status: 'success', data: JSON.parse(cleanedText) };
    } catch (error) {
      lastError = error.toString();
    }
  }

  return { status: 'error', message: 'Gagal memproses nota: ' + lastError };
}