/**
 * FINTRACK ENTERPRISE V2.8 - CORE JAVASCRIPT (PRO-FIXED EDITION)
 * Architecture: Shell & Data Caching (Bulletproof Edition)
 * Fixed: Duplication issues, Submit Delays, and Form Validation.
 */

const i18n = {
    en: {
        "app-desc": "Enterprise Wealth Management", "login-title": "Log in to Account",
        "lbl-email": "Email Address", "ph-email": "example@gmail.com",
        "lbl-pass": "Password", "ph-pass": "••••••••",
        "btn-login": "Confirm Identity", "txt-hello": "Hello,", "btn-logout": "Logout",
        "dash-bal": "Current Balance", "dash-sum": "Monthly Summary",
        "dash-inc": "Income", "dash-exp": "Expenditure", "dash-qm": "Quick Menu",
        "qm-topup": "Top up", "qm-pay": "Pay", "qm-tf": "Transfer", "qm-rec": "Recurring",
        "dash-sub": "Active Subscriptions", "dash-debt": "Debts & Receivables",
        "btn-add-debt": "+ Add Debt", "txt-mydebt": "My Debt", "txt-receivable": "Receivables",
        "dash-acc": "Your Accounts", "cal-title": "Transaction Calendar", "cal-month": "Month",
        "day-sun": "Sun", "day-mon": "Mon", "day-tue": "Tue", "day-wed": "Wed", "day-thu": "Thu", "day-fri": "Fri", "day-sat": "Sat",
        "cal-today": "Today's Transactions", "port-title": "Assets & Portfolio",
        "btn-buy-asset": "+ Buy Asset", "port-dist": "Wealth Distribution", "port-net": "Total Net Asset",
        "port-list": "Asset Ownership List", "port-prog": "Target Savings Progress",
        "btn-add-goal": "+ Create Target", "hist-title": "Financial Recap",
        "btn-month": "This Month", "btn-7days": "Last 7 Days", "btn-custom": "Custom Date",
        "lbl-from": "From", "lbl-to": "To", "txt-diff": "Difference", "hist-cat": "Category Details",
        "txt-total": "Total", "hist-list": "Transaction List",
        "nav-home": "Home", "nav-cal": "Calendar", "nav-port": "Assets", "nav-hist": "History",
        "mod-trx-in": "New Income", "mod-trx-out": "New Expenditure",
        "lbl-amount": "Amount", "ph-desc": "What is this for?", "btn-save-trx": "Save",
        "mod-tf-title": "Transfer Funds", "lbl-tf-amount": "Transfer Amount",
        "lbl-from-acc": "From Account", "lbl-to-acc": "To Account", "lbl-admin": "Admin Fee",
        "ph-tf-desc": "Additional Notes (Optional)", "btn-send": "Send Funds",
        "mod-rec-title": "New Subscription", "lbl-rec-amount": "Bill Amount",
        "ph-rec-name": "Service Name (e.g., Netflix)", "lbl-freq": "Frequency",
        "lbl-date": "Date", "lbl-cut": "Deduct From", "btn-save-rec": "Save Subscription",
        "mod-buy-title": "Buy New Asset", "lbl-unit": "Purchase Units", "lbl-price": "Price per Unit (Rp)",
        "btn-confirm-buy": "Confirm Purchase", "mod-sell-title": "Sell Asset",
        "lbl-sell-unit": "Units to Sell", "lbl-sell-price": "Selling Price per Unit (Rp)",
        "lbl-cair": "Liquidate To", "btn-sell": "Sell Now", "mod-wd-title": "Withdraw Funds",
        "txt-wd-reason": "Choose reason for withdrawing from target", "ph-wd-amount": "Withdrawal Amount",
        "btn-wd-temp": "Temporary Use Only", "btn-wd-done": "Target Achieved! (Finish)",
        "btn-cancel": "Cancel", "mod-add-title": "Add Savings", "txt-add-desc": "Saving for target",
        "ph-add-amount": "Savings Amount", "btn-add-save": "Save Savings",
        "mod-goal-title": "New Savings Target", "ph-goal-name": "Target Name",
        "ph-goal-amount": "Target Amount (Rp)", "btn-create-goal": "Create Target",
        "mod-debt-title": "Debt / Receivable", "opt-utang": "I Owe (Debt)", "opt-piutang": "They Owe (Receivable)",
        "ph-debt-name": "Person/Entity Name", "ph-debt-amount": "Amount (Rp)", "btn-save-debt": "Save Record",
        "no-acc": "No account data yet.", "no-goal": "No active savings targets yet.",
        "no-rec": "No active subscriptions yet.", "no-asset": "No investment assets yet.",
        "no-trx": "No transactions found.", "no-trx-today": "No transactions today.",
        "no-data-period": "No data for this period.", "max": "Max", "unit": "Unit",
        "live": "Live", "avg": "Avg", "from-trx": "From", "transactions": "transactions",
        "sync": "SYNCHRONIZING...", "tot-inc": "Total Income", "tot-exp": "Total Expenditure", "tot-tf": "Total Transfer",
        "month-names": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "freq-mo": "Monthly", "freq-yr": "Yearly", "dtl-title": "Transaction Detail",
        "dtl-date": "Date and Time", "dtl-type": "Transaction Type", "dtl-cat": "Category",
        "dtl-acc": "Source of Funds", "dtl-items": "Purchased Items", "type-inc": "Income", "type-exp": "Expenditure",
        "txt-analyze": "ANALYZING RECEIPT...", "txt-extract": "EXTRACTING DATA...",
        "err-scan-fail": "Failed to read receipt: ", "err-scan-sys": "System error occurred during scan.",
        "txt-unknown-merchant": "UNKNOWN MERCHANT", "confirm-close-trx": "Are you sure you want to close? Unsaved data will be lost.",
        "mod-export-title": "Account statement", "txt-export-desc": "View and download your available account statements.",
        "lbl-export-acc": "Account", "lbl-export-period": "Select period",
        "txt-export-pass": "Password: Your date of birth with format <b>ddmmyyyy</b> (e.g. 17081945)",
        "opt-all-accounts": "ALL ACCOUNTS", "pdf-title": "Account Statement", "pdf-period": "Period",
        "pdf-all-acc": "ALL ACCOUNTS - COMBINED", "pdf-system": "Fintrack System", "pdf-curr": "Currency",
        "pdf-bal-start": "Starting Balance", "pdf-tot-in": "Total Income", "pdf-tot-out": "Total Expense",
        "pdf-bal-end": "Ending Balance", "pdf-col-date": "Date & Time", "pdf-col-desc": "Transaction Details",
        "pdf-col-nom": "Nominal", "pdf-col-bal": "Balance",
        "pdf-footer": "This document is printed automatically by the Fintrack Enterprise system and is a valid proof of transaction even without a physical signature.",
        "pdf-page": "Page", "pdf-of": "of", "mod-level-info-title": "Fintrack Status",
        "txt-level-desc": "Keep increasing your net worth to achieve financial freedom.",
        "lvl-1-name": "Liability Elimination Phase", "lvl-1-desc": "Main focus is paying off consumptive debt to restore cash flow.",
        "lvl-2-name": "Liquidity Protection Phase", "lvl-2-desc": "Debts are paid. Building an emergency fund buffer of at least 6x average monthly expenses.",
        "lvl-3-name": "Capital Accumulation Phase", "lvl-3-desc": "Emergency fund secured. Start aggressive asset investment targeting around Rp50 Million.",
        "lvl-4-name": "Specific Portfolio Allocation", "lvl-4-desc": "Total assets > Rp50 Million. Splitting portfolio based on risk management and long-term goals.",
        "lvl-5-name": "Equity Maximization Phase", "lvl-5-desc": "Total assets > Rp250 Million. Focus on maximizing net worth and reducing productive debts (mortgage).",
        "lvl-6-name": "Financial Independence", "lvl-6-desc": "Total Assets > 25x Yearly Expenses. Portfolio yield is able to automatically fund your lifestyle.",
        "msg-level-up": "You have successfully advanced to a new financial phase.",
        "msg-level-down": "Your financial phase has decreased. Time to re-evaluate your cash flow.",
        "txt-congrats": "Congratulations!", "txt-warning": "Warning!", "btn-continue": "Continue",
        "ph-amount": "Amount", "title-pay-debt": "Pay Debt", "title-recv-debt": "Receive Funds",
        "desc-pay-debt": "Paying debt to", "desc-recv-debt": "Receiving funds from",
        "btn-pay-debt": "Pay Now", "btn-recv-debt": "Receive Funds", "txt-paid": "Paid",
        "btn-pay-now": "Pay Now", "mod-asset-detail-title": "Asset Detail", "lbl-lot-owned": "Lot / Unit Owned",
        "lbl-avg-price": "Average Price", "lbl-invested": "Invested Amount", "lbl-total-val": "Total Value",
        "lbl-return": "Return", "btn-buy-asset-2": "Buy", "btn-hist-debt": "History",
        "mod-debt-hist-title": "Debt & Receivable History", "tab-active": "Active",
        "tab-lunas": "Settled", "txt-sisa": "Remaining:"
    },
    id: {
        "app-desc": "Manajemen Kekayaan Enterprise", "login-title": "Masuk ke Akun",
        "lbl-email": "Alamat Email", "ph-email": "contoh@gmail.com",
        "lbl-pass": "Kata Sandi", "ph-pass": "••••••••",
        "btn-login": "Konfirmasi Identitas", "txt-hello": "Halo,", "btn-logout": "Keluar",
        "dash-bal": "Saldo Saat Ini", "dash-sum": "Ringkasan Bulanan",
        "dash-inc": "Pemasukan", "dash-exp": "Pengeluaran", "dash-qm": "Menu Cepat",
        "qm-topup": "Top up", "qm-pay": "Bayar", "qm-tf": "Transfer", "qm-rec": "Langganan",
        "dash-sub": "Langganan Aktif", "dash-debt": "Utang & Piutang",
        "btn-add-debt": "+ Tambah Utang", "txt-mydebt": "Utang Saya", "txt-receivable": "Piutang",
        "dash-acc": "Akun Anda", "cal-title": "Kalender Transaksi",
        "day-sun": "Min", "day-mon": "Sen", "day-tue": "Sel", "day-wed": "Rab", "day-thu": "Kam", "day-fri": "Jum", "day-sat": "Sab",
        "cal-today": "Transaksi Hari Ini", "port-title": "Aset & Portofolio",
        "btn-buy-asset": "+ Beli Aset", "port-dist": "Distribusi Kekayaan",
        "port-net": "Total Net Aset", "port-list": "Daftar Kepemilikan Aset",
        "port-prog": "Progress Tabungan Target", "btn-add-goal": "+ Buat Target",
        "hist-title": "Rekap Keuangan", "btn-month": "Bulan Ini",
        "btn-7days": "7 Hari Terakhir", "btn-custom": "Kustom Tanggal",
        "lbl-from": "Dari", "lbl-to": "Sampai", "txt-diff": "Selisih",
        "hist-cat": "Rincian Kategori", "txt-total": "Total", "hist-list": "Daftar Transaksi",
        "nav-home": "Beranda", "nav-cal": "Kalender", "nav-port": "Aset", "nav-hist": "Mutasi",
        "mod-trx-in": "Pemasukan Baru", "mod-trx-out": "Pengeluaran Baru",
        "lbl-amount": "Nominal", "ph-desc": "Untuk apa ini?", "btn-save-trx": "Simpan Transaksi",
        "mod-tf-title": "Transfer Dana", "lbl-tf-amount": "Nominal Transfer",
        "lbl-from-acc": "Dari Akun", "lbl-to-acc": "Ke Akun", "lbl-admin": "Biaya Admin",
        "ph-tf-desc": "Catatan Tambahan (Opsional)", "btn-send": "Kirim Dana",
        "mod-rec-title": "Langganan Baru", "lbl-rec-amount": "Nominal Tagihan",
        "ph-rec-name": "Nama Layanan (mis: Netflix)", "lbl-freq": "Frekuensi",
        "lbl-date": "Tanggal", "lbl-cut": "Potong dari Akun", "btn-save-rec": "Simpan Langganan",
        "mod-buy-title": "Beli Aset Baru", "lbl-unit": "Unit Pembelian",
        "lbl-price": "Harga Satuan (Rp)", "btn-confirm-buy": "Konfirmasi Pembelian",
        "mod-sell-title": "Jual Aset", "lbl-sell-unit": "Unit Dijual",
        "lbl-sell-price": "Harga Jual per Unit (Rp)", "lbl-cair": "Cairkan Ke",
        "btn-sell": "Jual Sekarang", "mod-wd-title": "Pencairan Dana",
        "txt-wd-reason": "Pilih alasan pencairan dana untuk target", "ph-wd-amount": "Nominal Tarik",
        "btn-wd-temp": "Hanya Pemakaian Sementara", "btn-wd-done": "Target Tercapai! (Selesai)",
        "btn-cancel": "Batal", "mod-add-title": "Tambah Tabungan",
        "txt-add-desc": "Menabung untuk target", "ph-add-amount": "Nominal Tabung",
        "btn-add-save": "Simpan Tabungan", "mod-goal-title": "Target Tabungan Baru",
        "ph-goal-name": "Nama Target", "ph-goal-amount": "Nominal Target (Rp)",
        "btn-create-goal": "Buat Target", "mod-debt-title": "Utang / Piutang",
        "opt-utang": "Saya Berutang (Utang)", "opt-piutang": "Orang Berutang (Piutang)",
        "ph-debt-name": "Nama Instansi/Orang", "ph-debt-amount": "Nominal (Rp)",
        "btn-save-debt": "Simpan Catatan", "no-acc": "Belum ada data akun.",
        "no-goal": "Belum ada target tabungan aktif.", "no-rec": "Belum ada langganan aktif.",
        "no-asset": "Belum memiliki aset investasi.", "no-trx": "Belum ada mutasi.",
        "no-trx-today": "Tidak ada transaksi pada hari ini.", "no-data-period": "Tidak ada data pada periode ini.",
        "max": "Maks", "unit": "Unit", "live": "Live", "avg": "Rata-rata",
        "from-trx": "Dari", "transactions": "transaksi", "sync": "SINKRONISASI...",
        "tot-inc": "Total Pemasukan", "tot-exp": "Total Pengeluaran", "tot-tf": "Total Transfer",
        "month-names": ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        "freq-mo": "Bulanan", "freq-yr": "Tahunan", "dtl-title": "Detail transaksi",
        "dtl-date": "Tanggal dan waktu", "dtl-type": "Tipe transaksi", "dtl-cat": "Kategori",
        "dtl-acc": "Sumber dana", "dtl-items": "Rincian Barang", "type-inc": "Pemasukan",
        "type-exp": "Pengeluaran", "txt-analyze": "MENGANALISA NOTA...", "txt-extract": "MENGEKSTRAK DATA...",
        "err-scan-fail": "Gagal membaca nota: ", "err-scan-sys": "Terjadi kesalahan sistem saat scan.",
        "txt-unknown-merchant": "TOKO TIDAK TERBACA", "confirm-close-trx": "Apakah Anda yakin ingin menutup? Data yang belum disimpan akan hilang.",
        "mod-export-title": "Laporan mutasi rekening", "txt-export-desc": "Lihat dan download mutasi rekening kamu yang tersedia.",
        "lbl-export-acc": "Rekening", "lbl-export-period": "Pilih periode",
        "txt-export-pass": "Password: Tanggal lahir kamu dengan format <b>ddmmyyyy</b> (contoh: 17081945)",
        "opt-all-accounts": "SEMUA REKENING", "pdf-title": "Laporan Mutasi Rekening",
        "pdf-period": "Periode", "pdf-all-acc": "SEMUA REKENING - GABUNGAN",
        "pdf-system": "Sistem Fintrack", "pdf-curr": "Mata Uang",
        "pdf-bal-start": "Saldo Awal", "pdf-tot-in": "Total Pemasukan",
        "pdf-tot-out": "Total Pengeluaran", "pdf-bal-end": "Saldo Akhir",
        "pdf-col-date": "Tanggal & Waktu", "pdf-col-desc": "Rincian Transaksi",
        "pdf-col-nom": "Nominal", "pdf-col-bal": "Saldo",
        "pdf-footer": "Dokumen ini dicetak secara otomatis oleh sistem Fintrack Enterprise dan merupakan bukti transaksi yang sah meskipun tanpa tanda tangan fisik.",
        "pdf-page": "Halaman", "pdf-of": "dari", "mod-level-info-title": "Status Fintrack",
        "txt-level-desc": "Tingkatkan terus kekayaan bersih Anda untuk mencapai kebebasan finansial.",
        "lvl-1-name": "Fase Eliminasi Liabilitas", "lvl-1-desc": "Fokus utama melunasi hutang konsumtif untuk memulihkan arus kas (cash flow).",
        "lvl-2-name": "Fase Proteksi Likuiditas", "lvl-2-desc": "Hutang telah lunas. Membangun bantalan kas darurat minimal 6x rata-rata pengeluaran bulanan.",
        "lvl-3-name": "Fase Akumulasi Kapital", "lvl-3-desc": "Dana darurat terpenuhi. Mulai investasi aset agresif dengan target aset mendekati Rp50 Juta.",
        "lvl-4-name": "Alokasi Portofolio Spesifik", "lvl-4-desc": "Total aset > Rp50 Juta. Memecah portofolio berdasarkan manajemen risiko dan tujuan spesifik jangka panjang.",
        "lvl-5-name": "Fase Maksimalisasi Ekuitas", "lvl-5-desc": "Total aset > Rp250 Juta. Fokus memaksimalkan kekayaan bersih dan mengurangi hutang produktif (KPR dll).",
        "lvl-6-name": "Kemerdekaan Finansial", "lvl-6-desc": "Total Aset > 25x Pengeluaran Tahunan. Imbal hasil portofolio mampu membiayai gaya hidup secara otomatis.",
        "msg-level-up": "Anda berhasil naik ke fase finansial baru.", "msg-level-down": "Fase finansial Anda turun. Waktunya mengevaluasi kembali arus kas Anda.",
        "txt-congrats": "Selamat!", "txt-warning": "Perhatian!", "btn-continue": "Lanjutkan",
        "ph-amount": "Nominal", "title-pay-debt": "Bayar Hutang", "title-recv-debt": "Terima Piutang",
        "desc-pay-debt": "Membayar hutang kepada", "desc-recv-debt": "Menerima piutang dari",
        "btn-pay-debt": "Bayar Sekarang", "btn-recv-debt": "Terima Dana", "txt-paid": "Lunas",
        "btn-pay-now": "Bayar Tagihan", "mod-asset-detail-title": "Ringkasan Saham",
        "lvl-lot-owned": "Lot Dimiliki", "lbl-avg-price": "Harga Rata-rata",
        "lbl-invested": "Diinvestasikan", "lbl-total-val": "Total Nilai",
        "lbl-return": "Return", "btn-buy-asset-2": "Beli", "btn-hist-debt": "Riwayat",
        "mod-debt-hist-title": "Riwayat Hutang & Piutang", "tab-active": "Berjalan",
        "tab-lunas": "Lunas", "txt-sisa": "Sisa:"
    }
};

let currentLang = 'en'; 
const API_URL = "https://script.google.com/macros/s/AKfycbx5QKPwG7auSpUI--xScR1uHZuGaDMt23gpPasBQB2LNGT8bB0pD_1M20LYIU5kN9OYiQ/exec"; 
const KATEGORI_INFLOW = ["Gaji & Pemasukan", "Hasil Usaha", "Pemberian"];
const KATEGORI_OUTFLOW = ["Makanan", "Hiburan", "Tagihan", "Tabungan & Investasi", "Kewajiban & Sosial", "Transportasi", "Lainnya"];
const CHART_COLORS = ['#6342E8', '#8B5CF6', '#A78BFA', '#C084FC', '#38BDF8', '#818CF8', '#4F46E5', '#E879F9'];

let sessionEmail = null, sessionName = null, appData = {}, isPrivate = false;
let histFilterTime = 'month', histToggleType = 'OUTFLOW'; 
let myChartInstance = null, portoChartInstance = null;
let activeGoalName = null;
let currentCalMonth = new Date().getMonth();
let currentCalYear = new Date().getFullYear();
let activeCalDay = new Date().getDate();
let currentScannedItems = [];
let debtHistoryTab = 'ACTIVE';
let isSubmitting = false; // Flag anti double-submit

function t(key) { return i18n[currentLang][key] || key; }

// --- FORM VALIDATOR ENGINE ---
function validateTrxForm() {
    const amount = extractNumber(document.getElementById('form-trx-amount').value);
    const account = document.getElementById('form-trx-account').value;
    const category = document.getElementById('form-trx-category').value;
    const btn = document.querySelector('#modal-trx button[onclick="submitTransaction()"]');
    
    if (amount > 0 && account && category) {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    } else {
        btn.disabled = true;
        btn.style.opacity = "0.5";
        btn.style.cursor = "not-allowed";
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('fintrack_lang', currentLang);
    applyLanguage();
    if (sessionEmail) {
        renderAllHTMLData(); 
        const modExport = document.getElementById('modal-export-pdf');
        if(modExport && !modExport.classList.contains('hidden-page')) renderExportModal();
        const modDebtHist = document.getElementById('modal-debt-history');
        if(modDebtHist && !modDebtHist.classList.contains('hidden-page')) renderDebtHistory();
    }
}

function applyLanguage() {
    const langIcon = document.getElementById('lang-icon');
    if(langIcon) langIcon.innerText = currentLang.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = i18n[currentLang][key];
            else if (el.tagName === 'OPTION') el.innerText = i18n[currentLang][key];
            else if (el.innerHTML.includes('<b>')) el.innerHTML = i18n[currentLang][key];
            else el.innerText = i18n[currentLang][key];
        }
    });
    const lblHello = document.getElementById('lbl-hello');
    if(lblHello) lblHello.innerText = t('txt-hello');
}

function getProp(obj, ...possibleKeys) {
    if (!obj) return undefined;
    const keys = Object.keys(obj);
    for (let pk of possibleKeys) {
        const match = keys.find(k => k.toString().replace(/[_ ]/g, '').toLowerCase() === pk.toString().replace(/[_ ]/g, '').toLowerCase());
        if (match && obj[match] !== undefined && obj[match] !== "") return obj[match];
    }
    return undefined;
}

function extractNumber(val) {
    if(val === undefined || val === null || val === '') return 0;
    if(typeof val === 'number') return val;
    let str = val.toString().replace(/Rp/gi, '').trim();
    if (str.indexOf(',') > -1 && str.indexOf('.') !== -1 && str.lastIndexOf(',') > str.lastIndexOf('.')) str = str.replace(/\./g, '').replace(',', '.');
    else if (str.indexOf(',') > -1 && str.indexOf('.') === -1) str = str.replace(',', '.');
    else if (str.indexOf(',') > -1) str = str.replace(/,/g, '');
    else if (str.indexOf('.') > -1 && str.split('.').length > 2) str = str.replace(/\./g, '');
    else if (str.indexOf('.') > -1 && str.split('.')[1].length === 3) str = str.replace(/\./g, '');
    return parseFloat(str) || 0;
}

function formatRupiahInput(inputElement) {
    let numericValue = inputElement.value.replace(/[^0-9]/g, '');
    inputElement.value = numericValue ? new Intl.NumberFormat('id-ID').format(numericValue) : '';
    validateTrxForm(); // Trigger validation
}

function formatShortNumber(num) {
    if(num >= 1000000) return (num/1000000).toFixed(1).replace('.0','') + 'M';
    if(num >= 1000) return (num/1000).toFixed(1).replace('.0','') + 'K';
    return num;
}

function toRp(num) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

function getAccountLogo(accountName) {
    if (!accountName) return null;
    const name = accountName.toLowerCase();
    if (name.includes('bni')) return 'Logo_Bank/BNI_Logo.png';
    if (name.includes('bri')) return 'Logo_Bank/BRI_Logo.png';
    if (name.includes('mandiri')) return 'Logo_Bank/MANDIRI_Logo.png';
    if (name.includes('shopee')) return 'Logo_Bank/ShopeePay_Logo.png';
    if (name.includes('gopay')) return 'Logo_Bank/Gopay_Logo.png';
    if (name.includes('ovo')) return 'Logo_Bank/OVO_Logo.png';
    if (name.includes('dana')) return 'Logo_Bank/Dana_Logo.png';
    if (name.includes('link')) return 'Logo_Bank/LinkAja_Logo.png';
    if (name.includes('tunai') || name.includes('cash')) return 'Logo_Bank/Cash_Logo.png';
    return null; 
}

function getCategoryIcon(cat) {
    const map = { "Makanan": "🍽️", "Hiburan": "🎬", "Tagihan": "🧾", "Tabungan & Investasi": "📈", "Kewajiban & Sosial": "🧾", "Transportasi": "🚗", "Gaji & Pemasukan": "💼", "Hasil Usaha": "🏪", "Pemberian": "🎁", "Biaya Admin": "🏦" };
    return map[cat] || "🏷️";
}

function getAssetLogoHtml(simbol) {
    let s = simbol.toUpperCase().trim();
    let cryptoBase = s.replace('USD', '').replace('IDR', '').toLowerCase();
    let imgUrl = `https://assets.coincap.io/assets/icons/${cryptoBase}@2x.png`; 
    let fallbackUrl = `https://ui-avatars.com/api/?name=${s.substring(0,2)}&background=6342E8&color=fff&rounded=true&bold=true`;
    if(s.length === 4 && !s.includes('USD') && !s.includes('IDR')) imgUrl = `https://ui-avatars.com/api/?name=${s}&background=1e293b&color=fff&rounded=true&bold=true`; 
    return `<img src="${imgUrl}" onerror="this.onerror=null; this.src='${fallbackUrl}';" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">`;
}

function openModal(id, type = null) {
    document.getElementById(id).classList.remove('hidden-page', 'hidden'); 
    if(id === 'modal-trx') {
        isSubmitting = false; // Reset state submit
        document.getElementById('modal-trx-title').innerText = type === 'INFLOW' ? t('mod-trx-in') : t('mod-trx-out');
        document.getElementById('form-trx-tipe').value = type; 
        const catSel = document.getElementById('form-trx-category'); 
        catSel.innerHTML = '';
        (type === 'INFLOW' ? KATEGORI_INFLOW : KATEGORI_OUTFLOW).forEach(opt => catSel.innerHTML += `<option value="${opt}">${opt}</option>`);
        const now = new Date();
        document.getElementById('form-trx-date').value = now.toISOString().split('T')[0];
        document.getElementById('form-trx-time').value = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        currentScannedItems = [];
        const itemListSec = document.getElementById('itemListSection');
        if (itemListSec) itemListSec.classList.add('hidden');
        validateTrxForm(); // Initial validation check
    } else if (id === 'modal-export-pdf') renderExportModal();
    else if (id === 'modal-debt-history') renderDebtHistory();
}

function closeModal(id, forceClose = false) { 
    if (id === 'modal-trx') {
        if (!forceClose) {
            const confirmMsg = i18n[currentLang]['confirm-close-trx'] || "Are you sure you want to close? Unsaved data will be lost.";
            if (!confirm(confirmMsg)) return;
        }
        document.getElementById('form-trx-amount').value = '';
        document.getElementById('form-trx-desc').value = '';
        if(document.getElementById('form-trx-admin')) document.getElementById('form-trx-admin').value = '';
        currentScannedItems = [];
        const itemListSec = document.getElementById('itemListSection');
        if (itemListSec) itemListSec.classList.add('hidden');
    }
    document.getElementById(id).classList.add('hidden-page', 'hidden'); 
}

function initApp() {
    if(localStorage.getItem('fintrack_theme') === 'dark') {
        document.documentElement.classList.add('dark'); document.getElementById('theme-icon').innerText = '☀️';
    } else {
        document.documentElement.classList.remove('dark'); document.getElementById('theme-icon').innerText = '🌙';
        localStorage.setItem('fintrack_theme', 'light');
    }
    if(!localStorage.getItem('fintrack_lang')) localStorage.setItem('fintrack_lang', 'en'); 
    currentLang = localStorage.getItem('fintrack_lang');
    applyLanguage();
    sessionEmail = localStorage.getItem('fintrack_session_email');
    sessionName = localStorage.getItem('fintrack_session_name');
    initPTR(); 
    if(sessionEmail) {
        document.getElementById('user-display').innerText = sessionName + "!";
        document.getElementById('app-wrapper').classList.remove('hidden-page');
        showPage('dashboard'); 
        fetchAllData();
    } else { document.getElementById('login-page').classList.remove('hidden-page'); }
}

let ptrStartY = 0, ptrCurrentY = 0, isPtrPulling = false, isPtrRefreshing = false;

function initPTR() {
    const ptrEl = document.getElementById('ptr-indicator');
    const coin = ptrEl.querySelector('.coin-spinner');
    document.addEventListener('touchstart', (e) => {
        if (window.scrollY <= 0 && !isPtrRefreshing) {
            ptrStartY = e.touches[0].clientY; isPtrPulling = true; ptrEl.style.transition = 'none';
        }
    }, { passive: true });
    document.addEventListener('touchmove', (e) => {
        if (!isPtrPulling || isPtrRefreshing) return;
        ptrCurrentY = e.touches[0].clientY;
        const pullDist = ptrCurrentY - ptrStartY;
        if (pullDist > 0 && window.scrollY <= 0) {
            const moveY = Math.min(pullDist * 0.4, 120); 
            ptrEl.style.transform = `translateY(${moveY - 80}px)`; 
            if (coin) { coin.style.animation = 'none'; coin.style.transform = `rotateY(${pullDist * 3}deg)`; }
        } else if (pullDist < 0) isPtrPulling = false; 
    }, { passive: true });
    document.addEventListener('touchend', async () => {
        if (!isPtrPulling || isPtrRefreshing) return;
        isPtrPulling = false;
        const pullDist = ptrCurrentY - ptrStartY;
        ptrEl.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        if (pullDist > 100 && window.scrollY <= 0 && sessionEmail) {
            isPtrRefreshing = true;
            ptrEl.style.transform = `translateY(30px)`; 
            if (coin) { coin.style.transform = ''; coin.style.animation = 'flipCoin 1s infinite linear'; }
            try {
                const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'getData', email: sessionEmail }) }); 
                const result = await response.json(); 
                if(result.status === 'success') { appData = result.data; renderAllHTMLData(); } 
            } catch (e) { console.error("Sync Error:", e); 
            } finally { ptrEl.style.transform = `translateY(-80px)`; setTimeout(() => { isPtrRefreshing = false; }, 300); }
        } else {
            ptrEl.style.transform = `translateY(-80px)`; 
            if (coin) { coin.style.transform = ''; coin.style.animation = 'flipCoin 1.5s infinite linear'; }
        }
        ptrStartY = 0; ptrCurrentY = 0;
    });
}

async function handleLogin() {
    const email = document.getElementById('login-email').value.trim(), password = document.getElementById('login-password').value.trim();
    if(!email || !password) return;
    showLoading(true);
    try {
        const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'login', email: email, password: password }) });
        const result = await response.json();
        if(result.status === 'success') {
            localStorage.setItem('fintrack_session_email', result.email); localStorage.setItem('fintrack_session_name', result.name);
            sessionEmail = result.email; sessionName = result.name;
            document.getElementById('user-display').innerText = sessionName + "!";
            document.getElementById('login-page').classList.add('hidden-page'); document.getElementById('app-wrapper').classList.remove('hidden-page');
            showPage('dashboard');
            await fetchAllData();
        } else { alert(currentLang === 'id' ? 'Login gagal.' : 'Login failed.'); }
    } catch(e) { alert(currentLang === 'id' ? 'Kesalahan koneksi.' : 'Connection error.'); } finally { showLoading(false); }
}

function handleLogout() { localStorage.removeItem('fintrack_session_email'); localStorage.removeItem('fintrack_session_name'); location.reload(); }

function showLoading(show) { 
    const el = document.getElementById('loading-overlay'); 
    if(show) {
        el.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
        void el.offsetWidth;
        el.classList.add('opacity-100');
    } else {
        el.classList.remove('opacity-100');
        el.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => el.classList.add('hidden'), 300);
    }
}

function compressImage(file, maxWidth, quality) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width, height = img.height;
                if (width > maxWidth) { height = Math.round((height * maxWidth) / width); width = maxWidth; }
                canvas.width = width; canvas.height = height;
                const ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', quality));
            };
            img.onerror = error => reject(error);
        };
        reader.onerror = error => reject(error);
    });
}

async function processReceiptImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    const loadingTextEl = document.getElementById('loading-text');
    loadingTextEl.innerText = t('txt-analyze');
    showLoading(true);
    try {
        const compressedBase64 = await compressImage(file, 800, 0.6);
        loadingTextEl.innerText = t('txt-extract');
        const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'scanReceipt', email: sessionEmail, imageB64: compressedBase64 }) });
        const result = await response.json();
        if (result.status === 'success') {
            let merchant = result.data.merchant;
            if (merchant === "TOKO TIDAK TERBACA") merchant = t('txt-unknown-merchant');
            const total = result.data.total;
            openModal('modal-trx', 'OUTFLOW');
            document.getElementById('form-trx-desc').value = merchant;
            const amountInput = document.getElementById('form-trx-amount');
            amountInput.value = total; formatRupiahInput(amountInput); 
            document.getElementById('form-trx-date').value = result.data.date || new Date().toISOString().split('T')[0];
            const now = new Date();
            const defaultTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
            document.getElementById('form-trx-time').value = result.data.time || defaultTime;
            
            const section = document.getElementById('itemListSection');
            const container = document.getElementById('itemsContainer');
            container.innerHTML = ''; currentScannedItems = result.data.items || [];
            
            if (currentScannedItems.length > 0) {
                section.classList.remove('hidden');
                currentScannedItems.forEach(item => {
                    const qty = item.qty || 1, hargaSatuan = item.price / qty;
                    container.innerHTML += `
                        <div class="flex justify-between items-center text-xs">
                            <div class="flex flex-col w-2/3 pr-2">
                                <span class="text-gray-700 dark:text-gray-200 font-bold uppercase truncate">${item.name}</span>
                                <span class="text-[10px] text-gray-500 font-medium">${qty}x @ Rp ${new Intl.NumberFormat('id-ID').format(hargaSatuan)}</span>
                            </div>
                            <span class="text-gray-800 dark:text-gray-100 font-bold whitespace-nowrap text-right text-sm">${new Intl.NumberFormat('id-ID').format(item.price)}</span>
                        </div>`;
                });
            } else { section.classList.add('hidden'); }
            const amountContainer = document.getElementById('form-trx-amount-container');
            const currencyLabel = document.getElementById('form-trx-currency');
            amountContainer.classList.remove('bg-white', 'dark:bg-[#1e1e1e]'); amountContainer.classList.add('bg-purple-100', 'dark:bg-purple-900/50');
            amountInput.classList.add('animate-pulse'); currencyLabel.classList.add('animate-pulse');
            setTimeout(() => {
                amountContainer.classList.add('bg-white', 'dark:bg-[#1e1e1e]'); amountContainer.classList.remove('bg-purple-100', 'dark:bg-purple-900/50');
                amountInput.classList.remove('animate-pulse'); currencyLabel.classList.remove('animate-pulse');
            }, 2000);
        } else { alert(t('err-scan-fail') + result.message); }
    } catch (err) { console.error(err); alert(t('err-scan-sys')); 
    } finally { loadingTextEl.innerText = t('sync'); showLoading(false); e.target.value = ''; }
}

async function fetchAllData() { 
    showLoading(true); 
    try { 
        const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'getData', email: sessionEmail }) }); 
        const result = await response.json(); 
        if(result.status === 'success') { appData = result.data; renderAllHTMLData(); } 
    } catch (e) { console.error("DB Loss:", e); } finally { showLoading(false); } 
}

async function apiPost(payload) { 
    try { 
        const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify(payload) }); 
        const result = await response.json(); 
        return result.status === 'success' ? true : false;
    } catch(e) { return false; }
}

// --- SUBMIT TRANSACTION (INSTANT UI FIX) --- //
async function submitTransaction() {
    if(isSubmitting) return; // Kunci double click
    
    const amount = extractNumber(document.getElementById('form-trx-amount').value);
    const account = document.getElementById('form-trx-account').value;
    const type = document.getElementById('form-trx-tipe').value;
    const category = document.getElementById('form-trx-category').value;
    const admin = extractNumber(document.getElementById('form-trx-admin').value) || 0;
    const desc = document.getElementById('form-trx-desc').value;
    const combinedDateTime = `${document.getElementById('form-trx-date').value} ${document.getElementById('form-trx-time').value}`;
    
    if(amount <= 0 || !account || !category) return;

    isSubmitting = true; // Set flag
    showLoading(true); // Langsung loading
    closeModal('modal-trx', true); // Langsung tutup modal

    try {
        const success = await apiPost({ 
            action: 'addTransaction', 
            email: sessionEmail, 
            tipe: type, 
            akun: account, 
            jumlah: amount, 
            kategori: category, 
            keterangan: desc, 
            tanggal: combinedDateTime 
        });
        
        if(success) { 
            if (admin > 0) {
                await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: account, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin trx ${category}`, tanggal: combinedDateTime })});
            }
            await fetchAllData(); 
        }
    } catch(e) {
        console.error(e);
    } finally {
        isSubmitting = false;
        showLoading(false);
    }
}

async function submitTransfer() {
    const fromAcc = document.getElementById('form-tf-from').value, toAcc = document.getElementById('form-tf-to').value;
    const amount = extractNumber(document.getElementById('form-tf-amount').value), admin = extractNumber(document.getElementById('form-tf-admin').value) || 0;
    const descRaw = document.getElementById('form-tf-desc').value;
    if(amount <= 0 || !fromAcc || !toAcc || fromAcc === toAcc) return;
    let transferKeluar = amount, transferMasuk = amount;
    if (fromAcc.toUpperCase().includes('RDN') && admin > 0) {
        if (amount <= admin) return alert(currentLang === 'id' ? "Nominal transfer harus lebih besar dari biaya admin." : "Transfer amount must be greater than admin fee.");
        transferKeluar = amount - admin; transferMasuk = amount - admin;
    }
    showLoading(true);
    closeModal('modal-transfer');
    try {
        await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: fromAcc, jumlah: transferKeluar, kategori: 'Transfer Keluar', keterangan: descRaw ? descRaw : `Tf ke ${toAcc}` })});
        await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'INFLOW', akun: toAcc, jumlah: transferMasuk, kategori: 'Transfer Masuk', keterangan: descRaw ? descRaw : `Tf dari ${fromAcc}` })});
        if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: fromAcc, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin tf ke ${toAcc}` })});
        await fetchAllData(); 
    } catch(e) {} finally { showLoading(false); }
}

async function submitRecurring() {
    const name = document.getElementById('form-rec-name').value, amount = extractNumber(document.getElementById('form-rec-amount').value), type = document.getElementById('form-rec-tipe').value, date = document.getElementById('form-rec-date').value, account = document.getElementById('form-rec-account').value;
    if(!name || amount <= 0 || !date || !account) return;
    showLoading(true);
    closeModal('modal-recurring');
    if(await apiPost({ action: 'addRecurring', email: sessionEmail, nama: name, nominal: amount, frekuensi: type, tgl_tagihan: date, akun: account })) { await fetchAllData(); }
    else { showLoading(false); }
}

async function payRecurring(nama, nominal, akun) {
    const confirmMsg = currentLang === 'id' ? `Yakin melakukan pembayaran tagihan ${nama} sebesar ${toRp(nominal)} dari akun ${akun}?` : `Are you sure you want to pay ${nama} bill of ${toRp(nominal)} from ${akun} account?`;
    if(!confirm(confirmMsg)) return;
    const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === akun);
    if(accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal')) < nominal) return alert(currentLang === 'id' ? "Saldo tidak mencukupi." : "Insufficient balance.");
    const now = new Date(), combinedDateTime = now.toISOString().split('T')[0] + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    showLoading(true);
    try {
        await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: akun, jumlah: nominal, kategori: 'Tagihan', keterangan: `Tagihan Berulang: ${nama}`, tanggal: combinedDateTime })});
        await fetchAllData();
    } catch(e) { console.error(e); } finally { showLoading(false); }
}

async function submitGoal() {
    const name = document.getElementById('form-goal-name').value, amount = extractNumber(document.getElementById('form-goal-amount').value);
    if(!name || amount <= 0) return;
    showLoading(true); closeModal('modal-goal');
    if(await apiPost({ action: 'addGoal', email: sessionEmail, nama: name, target: amount })) { await fetchAllData(); }
    else { showLoading(false); }
}

async function submitDebt() {
    const name = document.getElementById('form-debt-name').value, amount = extractNumber(document.getElementById('form-debt-amount').value);
    if(!name || amount <= 0) return;
    showLoading(true); closeModal('modal-debt');
    if(await apiPost({ action: 'addDebt', email: sessionEmail, tipe: document.getElementById('form-debt-tipe').value, kontak: name, jumlah: amount })) { await fetchAllData(); }
    else { showLoading(false); }
}

function preparePayDebt(nama, tipe, sisa) {
    const debtItem = (appData.M_Debt || []).find(d => getProp(d, 'Kontak', 'Nama', 'Keterangan') === nama && getProp(d, 'Tipe') === tipe && extractNumber(getProp(d, 'Sisa', 'Sisa Saldo', 'Jumlah')) === sisa);
    const idDebt = debtItem ? getProp(debtItem, 'ID_Debt', 'ID Debt') : '';
    document.getElementById('form-pay-debt-id').value = idDebt; document.getElementById('form-pay-debt-name').value = nama; document.getElementById('form-pay-debt-tipe').value = tipe; document.getElementById('form-pay-debt-max').value = sisa;
    document.getElementById('pay-debt-name-display').innerText = nama; document.getElementById('pay-debt-sisa-display').innerText = toRp(sisa);
    const isUtang = tipe === 'UTANG';
    document.getElementById('mod-pay-debt-title').innerText = isUtang ? t('title-pay-debt') : t('title-recv-debt');
    document.getElementById('txt-pay-debt-desc').innerText = isUtang ? t('desc-pay-debt') : t('desc-recv-debt');
    document.getElementById('btn-pay-debt-submit').innerText = isUtang ? t('btn-pay-debt') : t('btn-recv-debt');
    document.getElementById('form-pay-debt-account').innerHTML = document.getElementById('form-trx-account').innerHTML; 
    document.getElementById('modal-pay-debt').classList.remove('hidden', 'hidden-page');
}

async function submitPayDebt() {
    const idDebt = document.getElementById('form-pay-debt-id').value, nama = document.getElementById('form-pay-debt-name').value, tipe = document.getElementById('form-pay-debt-tipe').value, maxSisa = parseFloat(document.getElementById('form-pay-debt-max').value), amount = extractNumber(document.getElementById('form-pay-debt-amount').value), akun = document.getElementById('form-pay-debt-account').value;
    if (amount <= 0 || !akun || amount > maxSisa || !idDebt) { alert(currentLang === 'id' ? "Nominal tidak valid, melebihi sisa, atau ID tidak ditemukan." : "Invalid amount, exceeds remaining balance, or ID not found."); return; }
    if (tipe === 'UTANG') {
        const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === akun);
        if(accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal')) < amount) return alert(currentLang === 'id' ? "Saldo tidak mencukupi." : "Insufficient balance.");
    }
    showLoading(true); closeModal('modal-pay-debt');
    try {
        await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'payDebt', email: sessionEmail, idDebt: idDebt, nominal: amount, akun: akun }) });
        await fetchAllData();
    } catch(e) { console.error(e); } finally { showLoading(false); }
}

function toggleDebtHistoryTab(tabName) {
    debtHistoryTab = tabName;
    const btnActive = document.getElementById('tab-debt-active'), btnInactive = document.getElementById('tab-debt-inactive');
    if(!btnActive || !btnInactive) return;
    btnActive.classList.remove('toggle-active'); btnInactive.classList.remove('toggle-active');
    if (tabName === 'ACTIVE') btnActive.classList.add('toggle-active'); else btnInactive.classList.add('toggle-active');
    renderDebtHistory();
}

function renderDebtHistory() {
    const container = document.getElementById('debt-history-list-container'); if(!container) return;
    container.innerHTML = ''; // ANTI-DUPLIKASI
    const debts = appData.M_Debt || [], trxs = appData.T_Transaksi || [];
    const filteredDebts = debts.filter(d => (getProp(d, 'Status') || 'ACTIVE').toUpperCase() === debtHistoryTab);
    if (filteredDebts.length === 0) return container.innerHTML = `<p class="text-center text-xs text-gray-400 italic py-4 bg-white dark:bg-[#1e1e1e] rounded-2xl">${t('no-data-period')}</p>`;
    let html = '';
    filteredDebts.forEach(d => {
        const idDebt = getProp(d, 'ID_Debt', 'ID Debt'), tipe = (getProp(d, 'Tipe') || '').toUpperCase(), nama = getProp(d, 'Kontak', 'Nama', 'Keterangan') || 'Unknown', totalAwal = extractNumber(getProp(d, 'Total', 'Total_Awal', 'Jumlah')), sisa = extractNumber(getProp(d, 'Sisa', 'Sisa Saldo'));
        const isUtang = tipe === 'UTANG', typeLabel = isUtang ? t('txt-mydebt') : t('txt-receivable'), colorClass = isUtang ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400', iconBg = isUtang ? 'bg-red-50 dark:bg-red-900/20' : 'bg-green-50 dark:bg-green-900/20';
        const cicilanTrxs = trxs.filter(t => { const ref = getProp(t, 'Ref_ID', 'Ref ID', 'refId'); return ref && ref === idDebt; }).sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime());
        let cicilanHtml = '';
        if (cicilanTrxs.length > 0) {
            cicilanHtml = `<div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 space-y-2"><p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">Jejak Pembayaran</p>`;
            cicilanTrxs.forEach(c => {
                const tglRaw = getProp(c, 'Tanggal'), tgl = tglRaw ? new Date(tglRaw) : new Date(), dateStr = `${tgl.getDate().toString().padStart(2,'0')} ${i18n[currentLang]['month-names'][tgl.getMonth()].substring(0,3)} ${tgl.getFullYear()}`;
                const nom = extractNumber(getProp(c, 'Jumlah')), akun = getProp(c, 'Akun') || '';
                cicilanHtml += `<div class="flex justify-between items-center bg-gray-50 dark:bg-[#2d2d2d] p-2.5 rounded-xl border border-gray-100 dark:border-gray-800"><div><p class="text-[10px] font-bold text-gray-700 dark:text-gray-300">${dateStr}</p><p class="text-[9px] text-gray-500 uppercase tracking-wide">${akun}</p></div><p class="text-[11px] font-bold ${colorClass} privacy-mask" data-value="${nom}">${isPrivate?'********':toRp(nom)}</p></div>`;
            });
            cicilanHtml += `</div>`;
        } else { cicilanHtml = `<p class="text-center text-[10px] text-gray-400 italic mt-3 pt-3 border-t border-gray-50 dark:border-gray-700">Belum ada cicilan tercatat.</p>`; }
        html += `<div class="bg-white dark:bg-[#1e1e1e] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition"><div class="flex justify-between items-start mb-2"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full ${iconBg} ${colorClass} flex items-center justify-center font-bold text-lg">${isUtang ? '↑' : '↓'}</div><div><p class="text-sm font-bold dark:text-gray-200">${nama}</p><p class="text-[9px] text-gray-500 uppercase tracking-widest">${typeLabel} • ${idDebt}</p></div></div><div class="text-right"><p class="text-[10px] text-gray-500 uppercase tracking-wide">Total Awal</p><p class="text-xs font-bold text-gray-800 dark:text-gray-200 privacy-mask" data-value="${totalAwal}">${isPrivate?'********':toRp(totalAwal)}</p></div></div><div class="flex justify-between items-center mt-3 bg-gray-50 dark:bg-[#2d2d2d] p-3 rounded-xl border border-gray-100 dark:border-gray-700"><p class="text-xs font-bold text-gray-600 dark:text-gray-400">${t('txt-sisa')} <span class="${colorClass} privacy-mask" data-value="${sisa}">${isPrivate?'********':toRp(sisa)}</span></p><span class="text-[9px] px-2 py-1 rounded-md font-bold uppercase tracking-widest ${debtHistoryTab === 'ACTIVE' ? 'bg-blue-100 text-blue-600 border border-blue-200' : 'bg-green-100 text-green-600 border border-green-200'}">${debtHistoryTab === 'ACTIVE' ? t('tab-active') : t('tab-lunas')}</span></div>${cicilanHtml}</div>`;
    });
    container.innerHTML = html; applyPrivacyMasks();
}

async function submitBuyAsset() {
    const jenis = document.getElementById('form-asset-jenis').value, simbol = document.getElementById('form-asset-simbol').value.toUpperCase(), jumlah = parseFloat(document.getElementById('form-asset-jumlah').value.replace(/,/g, '.')) || 0, harga = extractNumber(document.getElementById('form-asset-harga').value), akun = document.getElementById('form-asset-account').value, admin = extractNumber(document.getElementById('form-buy-asset-admin').value) || 0;
    if(!simbol || jumlah <= 0 || harga <= 0 || !akun) return;
    const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === akun);
    if(accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal', 'Saldo Awal')) < ((harga * jumlah) + admin)) return alert(currentLang === 'id' ? "Saldo tidak mencukupi." : "Insufficient balance.");
    showLoading(true); closeModal('modal-buy-asset');
    if(await apiPost({ action: 'buyAsset', email: sessionEmail, jenis: jenis, simbol: simbol, jumlah: jumlah, harga: harga, totalHarga: harga * jumlah, akun: akun })) { 
        if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: akun, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin beli aset ${simbol}` })});
        await fetchAllData(); 
    } else { showLoading(false); }
}

async function submitSellAsset() {
    const idAset = document.getElementById('form-sell-asset-id').value, simbol = document.getElementById('form-sell-asset-simbol').value, unitDijual = parseFloat(document.getElementById('form-sell-asset-jumlah').value.replace(/,/g, '.')) || 0, hargaJual = extractNumber(document.getElementById('form-sell-asset-harga').value), akunTujuan = document.getElementById('form-sell-asset-account').value, maxUnit = parseFloat(document.getElementById('sell-asset-max-display').innerText) || 0, admin = extractNumber(document.getElementById('form-sell-asset-admin').value) || 0;
    if (unitDijual <= 0 || hargaJual <= 0 || !akunTujuan || unitDijual > maxUnit) return;
    showLoading(true); closeModal('modal-sell-asset');
    if(await apiPost({ action: 'sellAsset', email: sessionEmail, idAset: idAset, simbol: simbol, jumlahJual: unitDijual, totalDapat: unitDijual * hargaJual, akunTujuan: akunTujuan })) { 
        if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: akunTujuan, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin jual aset ${simbol}` })});
        await fetchAllData(); 
    } else { showLoading(false); }
}

async function processGoalAction(actionType, isAchieved) {
    const amount = extractNumber(document.getElementById(actionType === 'withdraw' ? 'form-withdraw-amount' : 'form-add-savings-amount').value), account = document.getElementById(actionType === 'withdraw' ? 'form-withdraw-account' : 'form-add-savings-account').value;
    if(amount <= 0 || !account) return;
    if(actionType === 'add') {
        const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === account);
        if(accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal', 'Saldo Awal')) < amount) return alert(currentLang === 'id' ? "Saldo tidak mencukupi." : "Insufficient balance.");
    }
    showLoading(true); 
    if(actionType === 'add') closeModal('modal-add-savings'); else closeModal('modal-withdraw-goal');
    try {
        const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'manageGoalFunds', email: sessionEmail, namaGoal: activeGoalName, tipeAksi: actionType, nominal: amount, isAchieved: isAchieved, akun: account }) });
        const result = await res.json();
        if (result.status === 'success') {
            const now = new Date(), combinedDateTime = now.toISOString().split('T')[0] + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
            if (actionType === 'add') {
                const desc = currentLang === 'id' ? `Menabung Target: ${activeGoalName}` : `Saving Target: ${activeGoalName}`;
                await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: account, jumlah: amount, kategori: 'Tabungan & Investasi', keterangan: desc, tanggal: combinedDateTime })});
            } else if (actionType === 'withdraw') {
                const desc = currentLang === 'id' ? `Pencairan Target: ${activeGoalName}` : `Target Withdrawal: ${activeGoalName}`;
                await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'INFLOW', akun: account, jumlah: amount, kategori: 'Tabungan & Investasi', keterangan: desc, tanggal: combinedDateTime })});
            }
            await fetchAllData(); 
        } else { alert(result.message); }
    } catch(e) { console.error(e); } finally { showLoading(false); }
}

function checkAndUpdateLevel() {
    let totalDebt = 0; (appData.M_Debt || []).forEach(d => { if((getProp(d, 'Tipe') || '').toString().trim().toUpperCase() === 'UTANG') totalDebt += extractNumber(getProp(d, 'Sisa', 'Sisa Saldo')); });
    let currentBalance = 0; (appData.M_Akun || []).forEach(acc => { let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun'); if (namaAkun && namaAkun.toUpperCase().includes('RDN')) return; let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal'); currentBalance += extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); });
    let totalAsset = 0; (appData.M_Akun || []).forEach(acc => { let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun'); if (namaAkun && namaAkun.toUpperCase().includes('RDN')) { let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal'); totalAsset += extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); }});
    (appData.M_Portofolio || []).forEach(a => { const jumlah = parseFloat((getProp(a, 'Jumlah', 'Unit') || "0").toString().replace(',', '.')) || 0, hargaLiveRaw = getProp(a, 'Harga_Saat_Ini', 'Harga Saat Ini'), hargaSekarang = (hargaLiveRaw !== undefined && hargaLiveRaw !== null && hargaLiveRaw !== "") ? extractNumber(hargaLiveRaw) : extractNumber(getProp(a, 'Harga_Beli', 'Harga Beli')); totalAsset += (jumlah * hargaSekarang); });
    let totalOutflowHistorical = 0, uniqueMonths = new Set();
    (appData.T_Transaksi || []).forEach(t => { const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return; const tgl = new Date(tglRaw), tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = (getProp(t, 'Kategori') || '').toString().trim(); if(tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') { totalOutflowHistorical += extractNumber(getProp(t, 'Jumlah')); uniqueMonths.add(`${tgl.getFullYear()}-${tgl.getMonth()}`); }});
    let avgExpenditure = totalOutflowHistorical / (uniqueMonths.size > 0 ? uniqueMonths.size : 1);
    let newLevelNum = 1, totalGabunganDana = currentBalance + totalAsset, targetDanaDarurat = 6 * avgExpenditure;
    if (totalDebt > 0) newLevelNum = 1; else if (totalDebt === 0 && totalGabunganDana < targetDanaDarurat) newLevelNum = 2; else if (totalGabunganDana >= targetDanaDarurat && totalAsset < 50000000) newLevelNum = 3; else if (totalAsset >= 50000000 && totalAsset < 250000000) newLevelNum = 4; else if (totalAsset >= 250000000 && totalAsset < (25 * (avgExpenditure * 12))) newLevelNum = 5; else if (totalAsset >= (25 * (avgExpenditure * 12))) newLevelNum = 6;
    const levelConfig = { 1: { title: "Level 1: " + t('lvl-1-name'), icon: "🔥", color: "from-amber-700 to-orange-900" }, 2: { title: "Level 2: " + t('lvl-2-name'), icon: "🛡️", color: "from-gray-400 to-gray-600" }, 3: { title: "Level 3: " + t('lvl-3-name'), icon: "🪙", color: "from-yellow-400 to-yellow-600" }, 4: { title: "Level 4: " + t('lvl-4-name'), icon: "📈", color: "from-slate-700 to-slate-900" }, 5: { title: "Level 5: " + t('lvl-5-name'), icon: "💎", color: "from-cyan-400 to-blue-600" }, 6: { title: "Level 6: " + t('lvl-6-name'), icon: "👑", color: "from-purple-500 to-indigo-700 ring-2 ring-purple-300" }};
    const conf = levelConfig[newLevelNum], badgeEl = document.getElementById('user-level-badge');
    if(badgeEl) { badgeEl.className = `mt-1 px-3 py-1.5 rounded-full text-[10px] font-bold text-white shadow-md transition-all duration-300 flex items-center gap-1.5 hover:scale-105 active:scale-95 bg-gradient-to-r ${conf.color}`; document.getElementById('badge-icon').innerText = conf.icon; document.getElementById('badge-text').innerText = conf.title; }
}

window.openAssetDetailModal = function(idAset, simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent) {
    document.getElementById('det-aset-simbol').innerText = simbol; document.getElementById('det-aset-live').innerText = toRp(liveHarga);
    document.getElementById('det-aset-logo').innerHTML = getAssetLogoHtml(simbol).replace('w-10 h-10', 'w-16 h-16 p-2 border-2');
    document.getElementById('det-aset-lot').innerText = formatShortNumber(lot) + ' ' + t('unit'); document.getElementById('det-aset-avg').innerText = toRp(avgHarga); document.getElementById('det-aset-invest').innerText = toRp(investasi); document.getElementById('det-aset-total').innerText = toRp(totalVal);
    let pnlSign = nominalReturn > 0 ? '+' : '', pnlColor = nominalReturn >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400', returnText = `${pnlSign}${toRp(Math.abs(nominalReturn))} (${pnlSign}${pnlPercent.toFixed(2)}%)`;
    document.getElementById('det-aset-return').innerText = returnText; document.getElementById('det-aset-return').className = `text-xs font-bold text-right ${pnlColor}`;
    document.getElementById('det-aset-live-change').innerText = returnText; document.getElementById('det-aset-live-change').className = `text-sm font-semibold mt-1 ${pnlColor}`;
    document.getElementById('btn-det-jual').onclick = () => { closeModal('modal-asset-detail'); prepareSellAsset(idAset, simbol, lot, liveHarga); };
    document.getElementById('btn-det-beli').onclick = () => { closeModal('modal-asset-detail'); openModal('modal-buy-asset'); document.getElementById('form-asset-simbol').value = simbol; };
    openModal('modal-asset-detail');
}

function renderAllHTMLData() { 
    try { renderDashboard(); } catch(e){} try { renderAccounts(); } catch(e){} try { renderGoals(); } catch(e){} try { renderRecurring(); } catch(e){} try { renderPortfolioScreen(false); } catch(e) {} try { renderHistoryScreen(false); } catch(e) {} try { renderCalendar(); } catch(e) {} applyPrivacyMasks(); checkAndUpdateLevel();
}

function renderDashboard() {
    const balEl = document.getElementById('main-balance'); if(!balEl) return; 
    const debtListContainer = document.getElementById('debt-list'); if(debtListContainer) debtListContainer.innerHTML = ''; // ANTI-DUPLIKASI

    const accounts = appData.M_Akun || []; let totalBalance = 0;
    accounts.forEach(acc => { let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun'); if (namaAkun && namaAkun.toUpperCase().includes('RDN')) return; let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal'); totalBalance += extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); });
    balEl.setAttribute('data-value', totalBalance); balEl.innerText = isPrivate ? '********' : toRp(totalBalance);

    let inc = 0, exp = 0; const currentMonth = new Date().getMonth(), currentYear = new Date().getFullYear();
    (appData.T_Transaksi || []).forEach(t => {
        const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return; const tgl = new Date(tglRaw);
        if(tgl.getMonth() === currentMonth && tgl.getFullYear() === currentYear) {
            const val = extractNumber(getProp(t, 'Jumlah')), tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = (getProp(t, 'Kategori') || '').toString().trim();
            if(tipe === 'INFLOW' && kategori !== 'Transfer Masuk') inc += val; if(tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') exp += val;
        }
    });
    const sumIncEl = document.getElementById('summary-income'); if(sumIncEl) { sumIncEl.setAttribute('data-value', inc); sumIncEl.innerText = isPrivate ? '********' : toRp(inc); }
    const sumExpEl = document.getElementById('summary-expense'); if(sumExpEl) { sumExpEl.setAttribute('data-value', exp); sumExpEl.innerText = isPrivate ? '********' : toRp(exp); }
    
    let dIn = 0, dOut = 0; let debtHtml = '';
    (appData.M_Debt || []).forEach(d => { 
        const sisa = extractNumber(getProp(d, 'Sisa', 'Sisa Saldo')), tipe = (getProp(d, 'Tipe') || '').toUpperCase(), nama = getProp(d, 'Kontak', 'Nama') || 'Unknown', status = (getProp(d, 'Status') || 'ACTIVE').toUpperCase();
        if(tipe === 'PIUTANG') dIn += sisa; if(tipe === 'UTANG') dOut += sisa; 
        if (status === 'ACTIVE' && sisa > 0) {
            const isUtang = tipe === 'UTANG', typeLabel = isUtang ? t('txt-mydebt') : t('txt-receivable'), colorClass = isUtang ? 'text-red-500' : 'text-green-500', bgClass = isUtang ? 'bg-red-50' : 'bg-green-50';
            debtHtml += `<div class="bg-white dark:bg-[#1e1e1e] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex justify-between items-center transition hover:shadow-md mb-2 last:mb-0"><div><p class="text-sm font-bold dark:text-gray-200">${nama}</p><p class="text-[10px] text-gray-500">${typeLabel}</p></div><div class="text-right flex items-center gap-3"><p class="text-sm font-bold ${colorClass} privacy-mask" data-value="${sisa}">${isPrivate?'********':toRp(sisa)}</p><button onclick="preparePayDebt('${nama}', '${tipe}', ${sisa})" class="w-8 h-8 flex items-center justify-center rounded-xl ${bgClass} ${colorClass} hover:scale-105 active:scale-95 transition shadow-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button></div></div>`;
        }
    });
    const debtInEl = document.getElementById('debt-in'); if(debtInEl) { debtInEl.setAttribute('data-value', dIn); debtInEl.innerText = isPrivate ? '********' : toRp(dIn); }
    const debtOutEl = document.getElementById('debt-out'); if(debtOutEl) { debtOutEl.setAttribute('data-value', dOut); debtOutEl.innerText = isPrivate ? '********' : toRp(dOut); }
    if(debtListContainer) debtListContainer.innerHTML = debtHtml === '' ? `<p class="text-center text-xs text-gray-400 italic py-2">${t('no-data-period')}</p>` : debtHtml;
}

function renderAccounts() {
    const container = document.getElementById('accounts-list'); if(!container) return;
    container.innerHTML = ''; // ANTI-DUPLIKASI
    const selectTrx = document.getElementById('form-trx-account'), selectTfFrom = document.getElementById('form-tf-from'), selectTfTo = document.getElementById('form-tf-to'), selAst = document.getElementById('form-asset-account'), selSellAst = document.getElementById('form-sell-asset-account'), selWdGoal = document.getElementById('form-withdraw-account'), selAddGoal = document.getElementById('form-add-savings-account'), selRec = document.getElementById('form-rec-account'), selExport = document.getElementById('export-pdf-account');
    let accounts = appData.M_Akun || [];
    let sortedAccounts = accounts.map(acc => { 
        const namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun') || 'Akun', tipeAkun = getProp(acc, 'Tipe_Akun', 'Tipe Akun') || '', initial = namaAkun.substring(0, 2).toUpperCase(), valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal'), nominal = extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); 
        const atasNama = getProp(acc, 'Atas_Nama', 'Atas Nama') || '', noRek = getProp(acc, 'Nomor_Rekening', 'Nomor Rekening', 'No_Rekening') || '';
        return { acc, namaAkun, tipeAkun, initial, nominal, atasNama, noRek }; 
    }).sort((a, b) => b.nominal - a.nominal);
    let html = '', optsAll = '', optsRegular = '', optsExport = `<option value="ALL">${t('opt-all-accounts')}</option>`;
    sortedAccounts.forEach(item => {
        const isRdn = item.namaAkun.toUpperCase().includes('RDN'), logoSrc = getAccountLogo(item.namaAkun), iconHtml = logoSrc ? `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">` : `<div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-xs">${item.initial}</div>`;
        const encodedIconHtml = encodeURIComponent(iconHtml);
        if (!isRdn) html += `<div onclick="openAccountDetailModal('${item.namaAkun}', '${item.atasNama}', '${item.noRek}', ${item.nominal}, '${encodedIconHtml}')" class="cursor-pointer flex items-center justify-between p-4 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] active:scale-[0.98] transition-all duration-200"><div class="flex items-center gap-3">${iconHtml}<div><p class="text-sm font-bold">${item.namaAkun}</p><p class="text-[10px] text-gray-500">${item.tipeAkun}</p></div></div><p class="text-sm font-bold privacy-mask" data-value="${item.nominal}">${isPrivate?'********':toRp(item.nominal)}</p></div>`;
        optsAll += `<option value="${item.namaAkun}">${item.namaAkun}</option>`; optsExport += `<option value="${item.namaAkun}">${item.namaAkun}</option>`; if (!isRdn) optsRegular += `<option value="${item.namaAkun}">${item.namaAkun}</option>`;
    });
    container.innerHTML = accounts.length === 0 ? `<p class="p-6 text-center text-xs text-gray-400">${t('no-acc')}</p>` : html; 
    if(selectTrx) selectTrx.innerHTML = optsRegular; if(selectTfFrom) selectTfFrom.innerHTML = optsAll; if(selectTfTo) selectTfTo.innerHTML = optsAll; if(selAst) selAst.innerHTML = optsAll; if(selWdGoal) selWdGoal.innerHTML = optsRegular; if(selAddGoal) selAddGoal.innerHTML = optsRegular; if(selSellAst) selSellAst.innerHTML = optsAll; if(selRec) selRec.innerHTML = optsRegular; if(selExport) selExport.innerHTML = optsExport;
}

function renderGoals() {
    const container = document.getElementById('goals-list') || document.getElementById('porto-goals-list'); if(!container) return;
    container.innerHTML = ''; // ANTI-DUPLIKASI
    const goals = (appData.M_Goals || []).filter(g => getProp(g, 'Status') !== 'COMPLETED');
    if(goals.length === 0) return container.innerHTML = `<div class="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center"><p class="text-xs text-gray-400 italic">${t('no-goal')}</p></div>`;
    let html = '';
    goals.forEach(g => {
        const nama = getProp(g, 'Nama_Goal', 'Nama Goal') || 'Target', terkumpul = extractNumber(getProp(g, 'Terkumpul')), target = extractNumber(getProp(g, 'Target')) || 1, percent = Math.min(100, Math.round((terkumpul / target) * 100));
        if(container.id === 'porto-goals-list') html += `<div class="bg-white dark:bg-[#1e1e1e] border border-gray-50 dark:border-gray-800 p-4 rounded-2xl shadow-sm mb-3 hover:shadow-md transition duration-300"><div class="flex justify-between items-center mb-3"><div><p class="text-sm font-bold dark:text-gray-200">${nama}</p><p class="text-[10px] text-gray-500"><span class="privacy-mask" data-value="${terkumpul}">${isPrivate?'********':toRp(terkumpul)}</span> / <span class="privacy-mask" data-value="${target}">${isPrivate?'********':toRp(target)}</span></p></div><div class="flex gap-2"><button onclick="prepareGoalAction('add', '${nama}')" class="w-8 h-8 flex items-center justify-center bg-green-50 text-green-600 rounded-lg font-bold hover:scale-105 transition shadow-sm">+</button><button onclick="prepareGoalAction('withdraw', '${nama}')" class="w-8 h-8 flex items-center justify-center bg-red-50 text-red-600 rounded-lg font-bold hover:scale-105 transition shadow-sm">-</button></div></div><div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden"><div class="bg-[#6342E8] h-2 transition-all duration-1000 ease-out" style="width: ${percent}%"></div></div></div>`;
        else html += `<div class="bg-white dark:bg-[#1e1e1e] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2d2d2d] hover:shadow-md transition duration-300"><div class="flex justify-between items-end mb-2"><p class="text-sm font-bold">${nama}</p><p class="text-[10px] text-gray-500"><span class="privacy-mask" data-value="${terkumpul}">${isPrivate?'********':toRp(terkumpul)}</span> / <span class="privacy-mask" data-value="${target}">${isPrivate?'********':toRp(target)}</span></p></div><div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2"><div class="bg-[#6342E8] h-2 rounded-full transition-all duration-1000 ease-out" style="width: ${percent}%"></div></div></div>`;
    });
    container.innerHTML = html;
}

function renderRecurring() {
    const container = document.getElementById('recurring-list'); if(!container) return;
    container.innerHTML = ''; // ANTI-DUPLIKASI
    const recs = appData.M_Recurring || [];
    if(recs.length === 0) return container.innerHTML = `<div class="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center"><p class="text-xs text-gray-400 italic">${t('no-rec')}</p></div>`;
    let html = ''; const now = new Date(), currentMonth = now.getMonth(), currentYear = now.getFullYear();
    recs.forEach(r => {
        const idRec = getProp(r, 'ID_Recurring', 'ID') || '', nama = getProp(r, 'Nama') || '-', nominal = extractNumber(getProp(r, 'Nominal')), frekuensi = getProp(r, 'Frekuensi') || 'Bulanan', akun = getProp(r, 'Akun_Sumber', 'Akun'), tglTagihan = getProp(r, 'Tgl_Tagihan') || 1;
        let isPaid = false;
        (appData.T_Transaksi || []).forEach(tobj => {
            const tglRaw = getProp(tobj, 'Tanggal'); if(!tglRaw) return; 
            const tgl = new Date(tglRaw), tipe = (getProp(tobj, 'Tipe') || '').toString().trim().toUpperCase(), keterangan = getProp(tobj, 'Keterangan') || '';
            if (tipe === 'OUTFLOW' && keterangan.includes(nama)) {
                if (frekuensi.toLowerCase().includes('bulan')) { if (tgl.getMonth() === currentMonth && tgl.getFullYear() === currentYear) isPaid = true; } 
                else if (frekuensi.toLowerCase().includes('tahun')) { if (tgl.getFullYear() === currentYear) isPaid = true; }
            }
        });
        const btnHtml = isPaid ? `<button disabled class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-lg text-[10px] font-bold cursor-not-allowed border border-gray-200">${t('txt-paid')}</button>` : `<button onclick="event.stopPropagation(); payRecurring('${nama}', ${nominal}, '${akun}')" class="px-3 py-1.5 bg-[#6342E8] text-white rounded-lg text-[10px] font-bold hover:scale-105 active:scale-95 transition shadow-sm">${t('btn-pay-now')}</button>`;
        html += `<div onclick="openRecurringDetailModal('${idRec}', '${nama}', ${nominal}, '${frekuensi}', ${tglTagihan}, '${akun}')" class="cursor-pointer bg-white dark:bg-[#1e1e1e] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2d2d2d] flex items-center justify-between hover:shadow-md transition duration-300 mb-3 last:mb-0 active:scale-[0.98]"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-purple-50 text-[#6342E8] flex items-center justify-center font-bold text-lg">↻</div><div><p class="text-sm font-bold dark:text-gray-200">${nama}</p><p class="text-[10px] text-gray-500">Tgl ${tglTagihan} • ${akun}</p></div></div><div class="text-right flex flex-col items-end gap-1.5"><p class="text-sm font-bold text-red-500 dark:text-red-400 privacy-mask" data-value="${nominal}">${isPrivate?'********':toRp(nominal)}</p>${btnHtml}</div></div>`;
    });
    container.innerHTML = html;
}

function renderPortfolioScreen(drawChart = true) {
    const assetContainer = document.getElementById('asset-list'); if(!assetContainer) return;
    assetContainer.innerHTML = ''; // ANTI-DUPLIKASI
    const porto = appData.M_Portofolio || [], accounts = appData.M_Akun || [], rdnAccount = accounts.find(a => { let nama = getProp(a, 'Nama_Akun', 'Nama Akun'); return nama && nama.toUpperCase().includes('RDN'); });
    const aggregatedAssets = {}; let html = '', rdnBalance = 0;
    if (rdnAccount) {
        let rdnName = getProp(rdnAccount, 'Nama_Akun', 'Nama Akun') || 'RDN', valReal = getProp(rdnAccount, 'Saldo_Realtime', 'Saldo Realtime'), valAwal = getProp(rdnAccount, 'Saldo_Awal', 'Saldo Awal'); rdnBalance = extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal);
        html += `<div class="flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-blue-100 dark:border-blue-900/50 rounded-2xl shadow-sm mb-2"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-xl font-bold text-blue-600">RDN</div><div><p class="text-sm font-bold dark:text-gray-200">${rdnName}</p><p class="text-[10px] text-gray-500">Saldo Cash</p></div></div><div class="text-right"><p class="text-sm font-bold privacy-mask text-[#6342E8]" data-value="${rdnBalance}">${isPrivate?'********':toRp(rdnBalance)}</p></div></div>`;
    }
    porto.forEach(a => {
        const idAset = getProp(a, 'ID_Aset', 'ID Aset'), simbol = getProp(a, 'Simbol', 'Nama Aset') || 'Aset', jumlahRaw = (getProp(a, 'Jumlah', 'Unit') || "0").toString(), jumlah = parseFloat(jumlahRaw.replace(',', '.')) || 0, hargaBeli = extractNumber(getProp(a, 'Harga_Beli', 'Harga Beli')), hargaLiveRaw = getProp(a, 'Harga_Saat_Ini', 'Harga Saat Ini'), hargaSekarang = (hargaLiveRaw !== undefined && hargaLiveRaw !== null && hargaLiveRaw !== "") ? extractNumber(hargaLiveRaw) : hargaBeli, totalValBeli = jumlah * hargaBeli;
        if (!aggregatedAssets[simbol]) aggregatedAssets[simbol] = { idAset: idAset, simbol: simbol, totalJumlah: 0, totalInvestasi: 0, hargaSekarang: hargaSekarang };
        aggregatedAssets[simbol].totalJumlah += jumlah; aggregatedAssets[simbol].totalInvestasi += totalValBeli;
    });
    Object.values(aggregatedAssets).forEach(a => {
        const avgHargaBeli = a.totalJumlah > 0 ? (a.totalInvestasi / a.totalJumlah) : 0, totalValSekarang = a.totalJumlah * a.hargaSekarang, nominalReturn = totalValSekarang - a.totalInvestasi, pnl = a.totalInvestasi > 0 ? (nominalReturn / a.totalInvestasi) * 100 : 0, pnlColor = nominalReturn >= 0 ? 'text-green-500' : 'text-red-500', pnlSign = nominalReturn > 0 ? '+' : '';
        html += `<div onclick="openAssetDetailModal('${a.idAset}', '${a.simbol}', ${a.totalJumlah}, ${avgHargaBeli}, ${a.totalInvestasi}, ${a.hargaSekarang}, ${totalValSekarang}, ${nominalReturn}, ${pnl})" class="cursor-pointer flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-gray-50 dark:border-gray-800 rounded-2xl shadow-sm mb-2 hover:shadow-md active:scale-[0.98] transition-all duration-300"><div class="flex items-center gap-3">${getAssetLogoHtml(a.simbol)}<div><p class="text-sm font-bold dark:text-gray-200">${a.simbol}</p><p class="text-[10px] text-gray-500">${a.totalJumlah.toLocaleString('en-US', {maximumFractionDigits: 6})} ${t('unit')}</p><p class="text-[10px] text-[#6342E8] font-semibold mt-1">${t('live')}: ${toRp(a.hargaSekarang)}</p></div></div><div class="text-right flex flex-col justify-center"><p class="text-sm font-bold privacy-mask dark:text-white" data-value="${totalValSekarang}">${isPrivate?'********':toRp(totalValSekarang)}</p><p class="text-[10px] font-semibold ${pnlColor} mt-1">${pnlSign}${pnl.toFixed(2)}%</p></div></div>`;
    });
    assetContainer.innerHTML = html || `<p class="text-center text-xs text-gray-400 italic py-4">${t('no-asset')}</p>`;
    renderGoals();
    let labels = [], dataValues = []; const goals = (appData.M_Goals || []).filter(g => getProp(g, 'Status') !== 'COMPLETED'); let totalGoalSavings = goals.reduce((s, g) => s + extractNumber(getProp(g, 'Terkumpul')), 0);
    if(totalGoalSavings > 0) { labels.push('Tabungan'); dataValues.push(totalGoalSavings); }
    if(rdnBalance > 0) { labels.push('Cash RDN'); dataValues.push(rdnBalance); }
    Object.values(aggregatedAssets).forEach(p => { labels.push(p.simbol); dataValues.push(p.totalJumlah * p.hargaSekarang); });
    const totalNetAsset = dataValues.reduce((a,b)=>a+b, 0); const portoCenter = document.getElementById('porto-center-val');
    if (portoCenter) { portoCenter.setAttribute('data-value', totalNetAsset); portoCenter.innerText = isPrivate ? '********' : toRp(totalNetAsset); }
    if(drawChart && document.getElementById('portfolioChart')) {
        const ctx = document.getElementById('portfolioChart').getContext('2d'); if (portoChartInstance) portoChartInstance.destroy();
        portoChartInstance = new Chart(ctx, { type: 'doughnut', data: { labels: labels.length > 0 ? labels : ['Kosong'], datasets: [{ data: dataValues.length > 0 ? dataValues : [1], backgroundColor: CHART_COLORS, borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '80%', plugins: { legend: { display: false } } } });
    }
}

function changeCalMonth(step) { currentCalMonth += step; if(currentCalMonth > 11) { currentCalMonth = 0; currentCalYear++; } else if(currentCalMonth < 0) { currentCalMonth = 11; currentCalYear--; } renderCalendar(); showDailyDetail(new Date().getDate(), true); }

function renderCalendar() {
    const calGrid = document.getElementById('calendar-grid'); if(!calGrid) return;
    calGrid.innerHTML = ''; // ANTI-DUPLIKASI
    document.getElementById('calendar-month-year').innerText = `${i18n[currentLang]['month-names'][currentCalMonth]} ${currentCalYear}`;
    const firstDay = new Date(currentCalYear, currentCalMonth, 1).getDay(), daysInMonth = new Date(currentCalYear, currentCalMonth + 1, 0).getDate(), dailyData = {};
    (appData.T_Transaksi || []).forEach(t => {
        const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return; const tgl = new Date(tglRaw);
        if(tgl.getMonth() === currentCalMonth && tgl.getFullYear() === currentCalYear) {
            const dateNum = tgl.getDate(); if(!dailyData[dateNum]) dailyData[dateNum] = { in: 0, out: 0 };
            const tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = (getProp(t, 'Kategori') || '').toString().trim(), val = extractNumber(getProp(t, 'Jumlah'));
            if(tipe === 'INFLOW' && kategori !== 'Transfer Masuk') dailyData[dateNum].in += val; if(tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') dailyData[dateNum].out += val;
        }
    });
    let html = ''; for(let i = 0; i < firstDay; i++) html += `<div class="aspect-[4/5]"></div>`;
    const today = new Date(), isCurrentMonthReal = today.getMonth() === currentCalMonth && today.getFullYear() === currentCalYear, currentDayReal = today.getDate();
    for(let i = 1; i <= daysInMonth; i++) {
        let isToday = isCurrentMonthReal && i === currentDayReal, isActive = i === activeCalDay, dateClass = isToday ? "bg-[#6342E8] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md mb-1" : "text-gray-700 dark:text-gray-300 w-6 h-6 flex items-center justify-center mb-1", dataHtml = '';
        if(dailyData[i]) { if(dailyData[i].in > 0) dataHtml += `<p class="text-[8px] text-green-500 font-bold truncate w-full text-center">+${formatShortNumber(dailyData[i].in)}</p>`; if(dailyData[i].out > 0) dataHtml += `<p class="text-[8px] text-red-500 font-bold truncate w-full text-center">-${formatShortNumber(dailyData[i].out)}</p>`; }
        let cellClass = isActive ? "border-[#6342E8]/50 bg-purple-50/50 scale-105 shadow-sm z-10" : "border-gray-50 dark:border-gray-800 bg-white dark:bg-[#1e1e1e]";
        html += `<div class="cal-cell flex flex-col items-center justify-start pt-1 pb-1 rounded-xl border ${cellClass} cursor-pointer" onclick="showDailyDetail(${i})"><div class="${dateClass} text-xs font-semibold">${i}</div><div class="flex flex-col w-full mt-auto pb-1">${dataHtml}</div></div>`;
    }
    calGrid.innerHTML = html;
}

function showDailyDetail(day, refreshCalendarUI = true) {
    activeCalDay = day; if(refreshCalendarUI) renderCalendar(); 
    const titleEl = document.getElementById('daily-detail-title'); if(!titleEl) return;
    titleEl.innerText = `${t('nav-hist')} ${day} ${i18n[currentLang]['month-names'][currentCalMonth]} ${currentCalYear}`;
    const listContainer = document.getElementById('daily-transaction-list'); if(!listContainer) return;
    listContainer.innerHTML = ''; // ANTI-DUPLIKASI
    const dailyTrxs = (appData.T_Transaksi || []).filter(t => { const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return false; const tgl = new Date(tglRaw); return tgl.getDate() === day && tgl.getMonth() === currentCalMonth && tgl.getFullYear() === currentCalYear; });
    if(dailyTrxs.length === 0) return listContainer.innerHTML = `<p class="text-center text-xs text-gray-400 py-4">${t('no-trx-today')}</p>`; 
    let html = '';
    [...dailyTrxs].sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime()).forEach(tobj => {
        const isOut = (getProp(tobj, 'Tipe')||'').toUpperCase() === 'OUTFLOW', sign = isOut ? '-' : '+', kategori = getProp(tobj, 'Kategori') || '', akun = getProp(tobj, 'Akun') || '', val = extractNumber(getProp(tobj, 'Jumlah')), logoSrc = getAccountLogo(akun), iconHtml = logoSrc ? `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white border border-gray-100 p-1">` : `<div class="w-10 h-10 rounded-full ${isOut ? 'bg-gray-100' : 'bg-green-50'} flex items-center justify-center font-bold">${isOut ? '↓' : '↑'}</div>`;
        const tobjJSON = encodeURIComponent(JSON.stringify(tobj));
        html += `<div onclick="openTransactionDetail('${tobjJSON}')" class="cursor-pointer flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-gray-50 rounded-2xl shadow-sm mb-2 hover:bg-gray-50 active:scale-[0.98] transition-all"><div class="flex items-center gap-3">${iconHtml}<div><p class="text-sm font-bold truncate dark:text-white">${kategori}</p><p class="text-[10px] text-gray-500 uppercase tracking-wide">${getProp(tobj, 'Keterangan') || akun}</p></div></div><p class="text-sm font-bold ${isOut ? 'text-gray-800 dark:text-white' : 'text-green-500'} whitespace-nowrap">${sign} <span class="privacy-mask" data-value="${val}">${isPrivate?'********':toRp(val)}</span></p></div>`;
    });
    listContainer.innerHTML = html; applyPrivacyMasks();
}

function setHistoryFilter(filterType) { histFilterTime = filterType; renderHistoryScreen(); }
function setHistoryType(type) { histToggleType = type; renderHistoryScreen(); }
function triggerHistoryRender() { if(histFilterTime === 'custom') renderHistoryScreen(); }

function getFilteredTransactions() {
    let trxs = appData.T_Transaksi || []; const today = new Date();
    return trxs.filter(t => {
        const tgl = getProp(t, 'Tanggal'); if(!tgl) return false; const txDate = new Date(tgl);
        if (histFilterTime === 'month') return txDate.getMonth() === today.getMonth() && txDate.getFullYear() === today.getFullYear();
        if (histFilterTime === '7days') { const s = new Date(today); s.setDate(today.getDate() - 7); return txDate >= s && txDate <= today; }
        if (histFilterTime === 'custom') { const s = document.getElementById('date-start')?.valueAsDate, e = document.getElementById('date-end')?.valueAsDate; if(!s || !e) return true; e.setHours(23, 59, 59, 999); return txDate >= s && txDate <= e; }
        return true;
    });
}

function renderHistoryScreen(drawChart = true) {
    const historyListContainer = document.getElementById('history-list'); if(!historyListContainer) return;
    historyListContainer.innerHTML = ''; // ANTI-DUPLIKASI
    const filteredData = getFilteredTransactions(); let sumIn = 0, sumOut = 0;
    filteredData.forEach(t => {
        const val = extractNumber(getProp(t, 'Jumlah')), tipe = (getProp(t, 'Tipe') || '').toUpperCase(), kategori = (getProp(t, 'Kategori') || '').trim();
        if(tipe === 'INFLOW' && kategori !== 'Transfer Masuk') sumIn += val; if(tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') sumOut += val;
    });
    const diff = sumIn - sumOut;
    document.getElementById('hist-sum-in').innerText = isPrivate ? '********' : toRp(sumIn);
    document.getElementById('hist-sum-out').innerText = isPrivate ? '********' : toRp(sumOut);
    const diffEl = document.getElementById('hist-sum-diff'); diffEl.innerText = isPrivate ? '********' : toRp(diff); diffEl.className = `font-bold text-lg privacy-mask ${diff < 0 ? 'text-red-500' : 'dark:text-white'}`;
    let chartDataRaw = [], listDataRaw = [], centerLabel = '';
    if (histToggleType === 'INFLOW') { chartDataRaw = filteredData.filter(t => (getProp(t, 'Tipe')||'').toUpperCase() === 'INFLOW' && getProp(t, 'Kategori') !== 'Transfer Masuk'); listDataRaw = chartDataRaw; centerLabel = t('tot-inc'); } 
    else if (histToggleType === 'OUTFLOW') { chartDataRaw = filteredData.filter(t => (getProp(t, 'Tipe')||'').toUpperCase() === 'OUTFLOW' && getProp(t, 'Kategori') !== 'Transfer Keluar'); listDataRaw = chartDataRaw; centerLabel = t('tot-exp'); } 
    else { chartDataRaw = filteredData.filter(t => getProp(t, 'Kategori') === 'Transfer Masuk'); listDataRaw = filteredData.filter(t => getProp(t, 'Kategori').includes('Transfer') || getProp(t, 'Kategori') === 'Biaya Admin'); centerLabel = t('tot-tf'); }
    const categorySums = {}, categoryCounts = {}; let grandTotalChart = 0;
    chartDataRaw.forEach(t => {
        const groupKey = histToggleType === 'TRANSFER' ? getProp(t, 'Akun') : getProp(t, 'Kategori'), val = extractNumber(getProp(t, 'Jumlah'));
        if(!categorySums[groupKey]) { categorySums[groupKey] = 0; categoryCounts[groupKey] = 0; }
        categorySums[groupKey] += val; categoryCounts[groupKey] += 1; grandTotalChart += val;
    });
    const sortedCategories = Object.keys(categorySums).map(cat => ({ name: cat, total: categorySums[cat], count: categoryCounts[cat], percent: grandTotalChart > 0 ? ((categorySums[cat] / grandTotalChart) * 100).toFixed(1) : 0 })).sort((a, b) => b.total - a.total);
    document.getElementById('chart-center-val').innerText = isPrivate ? '********' : toRp(grandTotalChart); document.getElementById('chart-center-label').innerText = centerLabel;
    if(drawChart && document.getElementById('categoryChart')) {
        if (myChartInstance) myChartInstance.destroy();
        myChartInstance = new Chart(document.getElementById('categoryChart').getContext('2d'), { type: 'doughnut', data: { labels: sortedCategories.length > 0 ? sortedCategories.map(c => c.name) : ['Empty'], datasets: [{ data: sortedCategories.length > 0 ? sortedCategories.map(c => c.total) : [1], backgroundColor: CHART_COLORS, borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '75%', plugins: { legend: { display: false } } } });
    }
    const catListContainer = document.getElementById('history-category-list'); catListContainer.innerHTML = '';
    sortedCategories.forEach((cat, index) => {
        const color = CHART_COLORS[index % CHART_COLORS.length];
        catListContainer.innerHTML += `<div class="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: ${color}15; color: ${color}">${getCategoryIcon(cat.name)}</div><div><p class="text-sm font-bold dark:text-gray-200">${cat.name}</p><p class="text-[10px] text-gray-500">${cat.count} Trx</p></div></div><div class="text-right"><p class="text-sm font-bold dark:text-white privacy-mask" data-value="${cat.total}">${isPrivate?'********':toRp(cat.total)}</p><p class="text-[10px] text-gray-400">${cat.percent}%</p></div></div>`;
    });
    
    let html = ''; const sortedTransactions = [...listDataRaw].sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime());
    let currentDateGroup = '';
    sortedTransactions.forEach(tobj => {
        const tglRaw = getProp(tobj, 'Tanggal'), d = new Date(tglRaw), dateStr = `${d.getDate().toString().padStart(2, '0')} ${i18n[currentLang]['month-names'][d.getMonth()]} ${d.getFullYear()}`;
        if(dateStr !== currentDateGroup) { html += `<div class="px-4 py-2 bg-gray-50 dark:bg-[#121212] sticky top-0 z-10"><span class="text-[11px] font-bold text-gray-500 uppercase">${dateStr}</span></div>`; currentDateGroup = dateStr; }
        const isOut = (getProp(tobj, 'Tipe')||'').toUpperCase() === 'OUTFLOW', sign = isOut ? '-' : '+', val = extractNumber(getProp(tobj, 'Jumlah')), tobjJSON = encodeURIComponent(JSON.stringify(tobj));
        html += `<div onclick="openTransactionDetail('${tobjJSON}')" class="cursor-pointer flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border-b border-gray-50 dark:border-gray-800 last:border-0"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-lg">${sign}</div><div><p class="text-sm font-bold truncate w-32 dark:text-white">${getProp(tobj, 'Kategori')}</p><p class="text-[10px] text-gray-500 uppercase">${getProp(tobj, 'Keterangan') || getProp(tobj, 'Akun')}</p></div></div><p class="text-sm font-bold ${isOut ? 'dark:text-white' : 'text-green-500'}">${sign} <span class="privacy-mask" data-value="${val}">${isPrivate?'********':toRp(val)}</span></p></div>`;
    });
    historyListContainer.innerHTML = html || `<p class="text-center text-xs text-gray-400 py-6">${t('no-trx')}</p>`;
}

async function showPage(pageId) {
    document.querySelectorAll('nav button.nav-btn').forEach(b => { 
        b.classList.remove('active-nav', 'text-[#6342E8]'); b.classList.add('text-gray-400'); 
    });
    const navTarget = document.getElementById('nav-' + pageId);
    if (navTarget) navTarget.classList.add('active-nav');

    const mainContent = document.getElementById('main-content');
    if (!window.pageCache) window.pageCache = {};
    mainContent.style.opacity = '0';
    
    setTimeout(async () => {
        if (!window.pageCache[pageId]) {
            showLoading(true);
            try {
                const response = await fetch(`pages/${pageId}.html?t=${new Date().getTime()}`);
                if(response.ok) { window.pageCache[pageId] = await response.text(); } 
                else { mainContent.innerHTML = `<h2 class="text-center pt-20">Page Not Found</h2>`; showLoading(false); return; }
            } catch (e) { showLoading(false); return; }
            showLoading(false);
        }
        mainContent.innerHTML = window.pageCache[pageId];
        applyLanguage();
        if(pageId === 'dashboard') { renderDashboard(); renderAccounts(); renderGoals(); renderRecurring(); }
        if(pageId === 'calendar') { renderCalendar(); }
        if(pageId === 'portfolio') { renderPortfolioScreen(true); }
        if(pageId === 'history') { renderHistoryScreen(true); }
        applyPrivacyMasks();
        mainContent.style.opacity = '1';
    }, 200);
}

function applySystemTheme() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark');
}
applySystemTheme();

function togglePrivacy() {
    isPrivate = !isPrivate; applyPrivacyMasks();
    document.getElementById('privacy-icon').innerHTML = isPrivate ? '<path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>' : '<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>';
}

function applyPrivacyMasks() { document.querySelectorAll('.privacy-mask').forEach(el => { if(isPrivate) el.innerText = '********'; else el.innerText = toRp(Number(el.getAttribute('data-value')) || 0); }); }

// --- PDF GENERATOR (Core Enterprise Feature) --- //
async function getBase64ImageFromUrl(imageUrl) {
    return new Promise((resolve, reject) => {
        let img = new Image(); img.crossOrigin = 'Anonymous';
        img.onload = () => {
            let canvas = document.createElement('canvas'); canvas.width = img.width; canvas.height = img.height;
            let ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0); resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = e => reject(e); img.src = imageUrl;
    });
}

async function generatePDF(monthIdx, year) {
    showLoading(true);
    try {
        const { jsPDF } = window.jspdf; const doc = new jsPDF('p', 'mm', 'a4');
        const selectedAccount = document.getElementById('export-pdf-account').value, isAllAccounts = selectedAccount === 'ALL';
        const userName = sessionName ? sessionName.toUpperCase() : "USER", accLabel = isAllAccounts ? t('pdf-all-acc') : selectedAccount.toUpperCase();
        let trxs = appData.T_Transaksi || [];
        
        let currentRealtimeBalance = 0;
        if (isAllAccounts) {
            (appData.M_Akun || []).forEach(acc => { let nama = getProp(acc, 'Nama_Akun'); if (nama && !nama.toUpperCase().includes('RDN')) { let val = getProp(acc, 'Saldo_Realtime') || getProp(acc, 'Saldo_Awal'); currentRealtimeBalance += extractNumber(val); } });
        } else {
            const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun') === selectedAccount);
            if(accData) currentRealtimeBalance = extractNumber(getProp(accData, 'Saldo_Realtime') || getProp(accData, 'Saldo_Awal'));
        }

        let monthTrxs = trxs.filter(t => { const d = new Date(getProp(t, 'Tanggal')); return d.getMonth() === monthIdx && d.getFullYear() === year && (isAllAccounts || getProp(t, 'Akun') === selectedAccount); }).sort((a,b) => new Date(getProp(a, 'Tanggal')).getTime() - new Date(getProp(b, 'Tanggal')).getTime());

        let tableRows = []; let runningBalance = currentRealtimeBalance; // Simplified running logic
        monthTrxs.forEach(t => {
            const d = new Date(getProp(t, 'Tanggal')), dStr = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`, tipe = (getProp(t, 'Tipe')||'').toUpperCase(), val = extractNumber(getProp(t, 'Jumlah'));
            tableRows.push([dStr, getProp(t, 'Kategori') + ' - ' + (getProp(t, 'Keterangan')||''), (tipe === 'INFLOW' ? '+' : '-') + toRp(val), toRp(runningBalance)]);
        });

        doc.setFontSize(18); doc.text(t('pdf-title'), 15, 20);
        doc.setFontSize(10); doc.text(`${userName} | ${accLabel} | ${year}`, 15, 28);
        
        doc.autoTable({
            startY: 35, head: [[t('pdf-col-date'), t('pdf-col-desc'), t('pdf-col-nom'), t('pdf-col-bal')]],
            body: tableRows, headStyles: { fillColor: [99, 66, 232] }
        });

        doc.save(`Fintrack_Report_${accLabel}_${monthIdx+1}.pdf`);
        closeModal('modal-export-pdf');
    } catch(e) { console.error(e); } finally { showLoading(false); }
}

// --- OVERRIDE FIXED TRANSACTION DETAIL ---
window.openTransactionDetail = function(jsonStr) {
    try {
        const tobj = JSON.parse(decodeURIComponent(jsonStr));
        const modal = document.getElementById('modal-transaction-detail');
        if (!modal) return;
        const isOut = (getProp(tobj, 'Tipe')||'').toUpperCase() === 'OUTFLOW', val = extractNumber(getProp(tobj, 'Jumlah'));
        document.getElementById('dtl-amount').innerText = isPrivate ? '********' : toRp(val);
        document.getElementById('dtl-kategori').innerText = getProp(tobj, 'Kategori');
        document.getElementById('dtl-tanggal').innerText = getProp(tobj, 'Tanggal');
        document.getElementById('dtl-akun').innerText = getProp(tobj, 'Akun');
        document.getElementById('dtl-keterangan').innerText = getProp(tobj, 'Keterangan') || '-';
        openModal('modal-transaction-detail');
    } catch (e) { console.error(e); }
};

// --- INITIALIZE VALIDATION LISTENERS ---
document.addEventListener('input', (e) => {
    if (e.target.id === 'form-trx-amount' || e.target.id === 'form-trx-category' || e.target.id === 'form-trx-account') {
        validateTrxForm();
    }
});