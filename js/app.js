/**
 * FINTRACK ENTERPRISE V2.8 - CORE JAVASCRIPT
 * Architecture: Shell & Data Caching (Bulletproof Edition)
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
        "lbl-lot-owned": "Lot Dimiliki", "lbl-avg-price": "Harga Rata-rata",
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

function t(key) { return i18n[currentLang][key] || key; }

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
        const now = new Date();
        document.getElementById('form-trx-date').value = now.toISOString().split('T')[0];
        document.getElementById('form-trx-time').value = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
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

async function apiPost(payload) { showLoading(true); try { const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify(payload) }); const result = await response.json(); if(result.status === 'success') return true; else { alert(result.message); return false; } } catch(e) { return false; } finally { showLoading(false); } }

async function submitTransaction() {
    const amount = extractNumber(document.getElementById('form-trx-amount').value), account = document.getElementById('form-trx-account').value, type = document.getElementById('form-trx-tipe').value, category = document.getElementById('form-trx-category').value;
    const admin = extractNumber(document.getElementById('form-trx-admin').value) || 0, desc = document.getElementById('form-trx-desc').value;
    const combinedDateTime = `${document.getElementById('form-trx-date').value} ${document.getElementById('form-trx-time').value}`;
    if(amount <= 0 || !account || !category) return;
    if(await apiPost({ action: 'addTransaction', email: sessionEmail, tipe: type, akun: account, jumlah: amount, kategori: category, keterangan: desc, tanggal: combinedDateTime, items: currentScannedItems })) { 
        if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: account, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin trx ${category}`, tanggal: combinedDateTime })});
        closeModal('modal-trx', true); await fetchAllData(); 
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
    try {
        await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: fromAcc, jumlah: transferKeluar, kategori: 'Transfer Keluar', keterangan: descRaw ? descRaw : `Tf ke ${toAcc}` })});
        await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'INFLOW', akun: toAcc, jumlah: transferMasuk, kategori: 'Transfer Masuk', keterangan: descRaw ? descRaw : `Tf dari ${fromAcc}` })});
        if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: fromAcc, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin tf ke ${toAcc}` })});
        closeModal('modal-transfer'); document.getElementById('form-tf-amount').value = ''; document.getElementById('form-tf-admin').value = ''; document.getElementById('form-tf-desc').value = '';
        await fetchAllData(); 
    } catch(e) {} finally { showLoading(false); }
}

async function submitRecurring() {
    const name = document.getElementById('form-rec-name').value, amount = extractNumber(document.getElementById('form-rec-amount').value), type = document.getElementById('form-rec-tipe').value, date = document.getElementById('form-rec-date').value, account = document.getElementById('form-rec-account').value;
    if(!name || amount <= 0 || !date || !account) return;
    if(await apiPost({ action: 'addRecurring', email: sessionEmail, nama: name, nominal: amount, frekuensi: type, tgl_tagihan: date, akun: account })) { closeModal('modal-recurring'); await fetchAllData(); }
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
    if(await apiPost({ action: 'addGoal', email: sessionEmail, nama: name, target: amount })) { closeModal('modal-goal'); await fetchAllData(); }
}

async function submitDebt() {
    const name = document.getElementById('form-debt-name').value, amount = extractNumber(document.getElementById('form-debt-amount').value);
    if(!name || amount <= 0) return;
    if(await apiPost({ action: 'addDebt', email: sessionEmail, tipe: document.getElementById('form-debt-tipe').value, kontak: name, jumlah: amount })) { closeModal('modal-debt'); await fetchAllData(); }
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
    showLoading(true);
    try {
        await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'payDebt', email: sessionEmail, idDebt: idDebt, nominal: amount, akun: akun }) });
        closeModal('modal-pay-debt'); document.getElementById('form-pay-debt-amount').value = ''; await fetchAllData();
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
    if(await apiPost({ action: 'buyAsset', email: sessionEmail, jenis: jenis, simbol: simbol, jumlah: jumlah, harga: harga, totalHarga: harga * jumlah, akun: akun })) { 
        if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: akun, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin beli aset ${simbol}` })});
        closeModal('modal-buy-asset'); document.getElementById('form-asset-simbol').value = ''; document.getElementById('form-asset-jumlah').value = ''; document.getElementById('form-asset-harga').value = ''; document.getElementById('form-buy-asset-admin').value = '';
        await fetchAllData(); 
    }
}

async function submitSellAsset() {
    const idAset = document.getElementById('form-sell-asset-id').value, simbol = document.getElementById('form-sell-asset-simbol').value, unitDijual = parseFloat(document.getElementById('form-sell-asset-jumlah').value.replace(/,/g, '.')) || 0, hargaJual = extractNumber(document.getElementById('form-sell-asset-harga').value), akunTujuan = document.getElementById('form-sell-asset-account').value, maxUnit = parseFloat(document.getElementById('sell-asset-max-display').innerText) || 0, admin = extractNumber(document.getElementById('form-sell-asset-admin').value) || 0;
    if (unitDijual <= 0 || hargaJual <= 0 || !akunTujuan || unitDijual > maxUnit) return;
    if(await apiPost({ action: 'sellAsset', email: sessionEmail, idAset: idAset, simbol: simbol, jumlahJual: unitDijual, totalDapat: unitDijual * hargaJual, akunTujuan: akunTujuan })) { 
        if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: akunTujuan, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin jual aset ${simbol}` })});
        closeModal('modal-sell-asset'); document.getElementById('form-sell-asset-jumlah').value = ''; document.getElementById('form-sell-asset-admin').value = ''; await fetchAllData(); 
    }
}

async function processGoalAction(actionType, isAchieved) {
    const amount = extractNumber(document.getElementById(actionType === 'withdraw' ? 'form-withdraw-amount' : 'form-add-savings-amount').value), account = document.getElementById(actionType === 'withdraw' ? 'form-withdraw-account' : 'form-add-savings-account').value;
    if(amount <= 0 || !account) return;
    if(actionType === 'add') {
        const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === account);
        if(accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal', 'Saldo Awal')) < amount) return alert(currentLang === 'id' ? "Saldo tidak mencukupi." : "Insufficient balance.");
    }
    showLoading(true);
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
            closeModal('modal-withdraw-goal'); closeModal('modal-add-savings'); 
            document.getElementById('form-withdraw-amount').value = ''; document.getElementById('form-add-savings-amount').value = ''; await fetchAllData(); 
        } else { alert(result.message); }
    } catch(e) { console.error(e); } finally { showLoading(false); }
}

function checkAndUpdateLevel() {
    let totalDebt = 0; (appData.M_Debt || []).forEach(d => { if((getProp(d, 'Tipe') || '').toString().trim().toUpperCase() === 'UTANG') totalDebt += extractNumber(getProp(d, 'Sisa', 'Sisa Saldo')); });
    let currentBalance = 0; (appData.M_Akun || []).forEach(acc => { let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun'); if (namaAkun && namaAkun.toUpperCase().includes('RDN')) return; let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal'); currentBalance += extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); });
    let totalAsset = 0; (appData.M_Akun || []).forEach(acc => { let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun'); if (namaAkun && namaAkun.toUpperCase().includes('RDN')) { let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal'); totalAsset += extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); }});
    (appData.M_Portofolio || []).forEach(a => { const jumlah = parseFloat((getProp(a, 'Jumlah', 'Unit') || "0").toString().replace(',', '.')) || 0, hargaLiveRaw = getProp(a, 'Harga_Saat_Ini', 'Harga Saat Ini'), hargaSekarang = (hargaLiveRaw !== undefined && hargaLiveRaw !== null && hargaLiveRaw !== "") ? extractNumber(hargaLiveRaw) : extractNumber(getProp(a, 'Harga_Beli', 'Harga Beli')); totalAsset += (jumlah * hargaSekarang); });
    let totalOutflowHistorical = 0, uniqueMonths = new Set();
    (appData.T_Transaksi || []).forEach(t => { const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return; const tgl = new Date(tglRaw), tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = (getProp(t, 'Kategori') || '').toString().trim(); if(tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') { totalOutflowHistorical += extractNumber(getProp(t, 'Jumlah')); uniqueMonths.add(`${tgl.getFullYear()}-${tgl.getMonth()}`); }});
    let avgExpenditure = totalOutflowHistorical / (uniqueMonths.size > 0 ? uniqueMonths.size : 1); if (avgExpenditure === 0) avgExpenditure = 0; 
    let newLevelNum = 1, totalGabunganDana = currentBalance + totalAsset, targetDanaDarurat = 6 * avgExpenditure;
    if (totalDebt > 0) newLevelNum = 1; else if (totalDebt === 0 && totalGabunganDana < targetDanaDarurat) newLevelNum = 2; else if (totalGabunganDana >= targetDanaDarurat && totalAsset < 50000000) newLevelNum = 3; else if (totalAsset >= 50000000 && totalAsset < 250000000) newLevelNum = 4; else if (totalAsset >= 250000000 && totalAsset < (25 * (avgExpenditure * 12))) newLevelNum = 5; else if (totalAsset >= (25 * (avgExpenditure * 12))) newLevelNum = 6;
    const levelConfig = { 1: { title: "Level 1: " + t('lvl-1-name'), icon: "🔥", color: "from-amber-700 to-orange-900" }, 2: { title: "Level 2: " + t('lvl-2-name'), icon: "🛡️", color: "from-gray-400 to-gray-600" }, 3: { title: "Level 3: " + t('lvl-3-name'), icon: "🪙", color: "from-yellow-400 to-yellow-600" }, 4: { title: "Level 4: " + t('lvl-4-name'), icon: "📈", color: "from-slate-700 to-slate-900" }, 5: { title: "Level 5: " + t('lvl-5-name'), icon: "💎", color: "from-cyan-400 to-blue-600" }, 6: { title: "Level 6: " + t('lvl-6-name'), icon: "👑", color: "from-purple-500 to-indigo-700 ring-2 ring-purple-300" }};
    const conf = levelConfig[newLevelNum], badgeEl = document.getElementById('user-level-badge');
    if(badgeEl) { badgeEl.className = `mt-1 px-3 py-1.5 rounded-full text-[10px] font-bold text-white shadow-md transition-all duration-300 flex items-center gap-1.5 hover:scale-105 active:scale-95 bg-gradient-to-r ${conf.color}`; document.getElementById('badge-icon').innerText = conf.icon; document.getElementById('badge-text').innerText = conf.title; }
    for(let i=1; i<=6; i++) { const listEl = document.getElementById('list-level-' + i); if(listEl) { if(i === newLevelNum) { listEl.classList.remove('opacity-50'); listEl.classList.add('ring-2', 'ring-[#6342E8]', 'scale-105', 'shadow-lg'); } else { listEl.classList.add('opacity-50'); listEl.classList.remove('ring-2', 'ring-[#6342E8]', 'scale-105', 'shadow-lg'); } } }
    const savedLevel = localStorage.getItem('fintrack_user_level');
    if (savedLevel && parseInt(savedLevel) !== newLevelNum) {
        const isLevelUp = newLevelNum > parseInt(savedLevel), modalNotify = document.getElementById('modal-level-notify');
        if(modalNotify) { document.getElementById('notify-level-title').innerText = isLevelUp ? t('txt-congrats') : t('txt-warning'); document.getElementById('notify-level-title').className = isLevelUp ? 'font-bold text-xl dark:text-white' : 'font-bold text-xl text-red-500'; document.getElementById('notify-level-desc').innerText = isLevelUp ? t('msg-level-up') : t('msg-level-down'); document.getElementById('notify-level-name').innerText = conf.title; document.getElementById('notify-level-icon').innerText = conf.icon; document.getElementById('notify-level-icon').className = `w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${conf.color} flex items-center justify-center text-4xl shadow-lg mb-4 text-white border-2 border-white/20`; modalNotify.classList.remove('hidden', 'hidden-page'); }
    }
    localStorage.setItem('fintrack_user_level', newLevelNum);
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
    try { renderDashboard(); } catch(e){ console.error(e); } try { renderAccounts(); } catch(e){ console.error(e); } try { renderGoals(); } catch(e){ console.error(e); } try { renderRecurring(); } catch(e){ console.error(e); } try { renderPortfolioScreen(false); } catch(e) {} try { renderHistoryScreen(false); } catch(e) {} try { renderCalendar(); } catch(e) {} applyPrivacyMasks(); checkAndUpdateLevel();
}

function renderDashboard() {
    const balEl = document.getElementById('main-balance'); if(!balEl) return; 
    const accounts = appData.M_Akun || []; let totalBalance = 0;
    accounts.forEach(acc => { let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun'); if (namaAkun && namaAkun.toUpperCase().includes('RDN')) return; let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal'); totalBalance += extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); });
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
    let dIn = 0, dOut = 0; const debtListContainer = document.getElementById('debt-list'); let debtHtml = '';
    (appData.M_Debt || []).forEach(d => { 
        const sisa = extractNumber(getProp(d, 'Sisa', 'Sisa Saldo', 'Jumlah')), tipe = (getProp(d, 'Tipe') || '').toString().trim().toUpperCase(), nama = getProp(d, 'Kontak', 'Nama', 'Keterangan') || 'Unknown', status = (getProp(d, 'Status') || 'ACTIVE').toString().trim().toUpperCase();
        if(tipe === 'PIUTANG') dIn += sisa; if(tipe === 'UTANG') dOut += sisa; 
        if (status === 'ACTIVE' && sisa > 0) {
            const isUtang = tipe === 'UTANG', typeLabel = isUtang ? t('txt-mydebt') : t('txt-receivable'), colorClass = isUtang ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400', bgClass = isUtang ? 'bg-red-50 dark:bg-red-900/20' : 'bg-green-50 dark:bg-green-900/20';
            debtHtml += `<div class="bg-white dark:bg-[#1e1e1e] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex justify-between items-center transition hover:shadow-md mb-2 last:mb-0"><div><p class="text-sm font-bold dark:text-gray-200">${nama}</p><p class="text-[10px] text-gray-500">${typeLabel}</p></div><div class="text-right flex items-center gap-3"><p class="text-sm font-bold ${colorClass} privacy-mask" data-value="${sisa}">${isPrivate?'********':toRp(sisa)}</p><button onclick="preparePayDebt('${nama}', '${tipe}', ${sisa})" class="w-8 h-8 flex items-center justify-center rounded-xl ${bgClass} ${colorClass} hover:scale-105 active:scale-95 transition shadow-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button></div></div>`;
        }
    });
    const debtInEl = document.getElementById('debt-in'); if(debtInEl) { debtInEl.setAttribute('data-value', dIn); debtInEl.innerText = isPrivate ? '********' : toRp(dIn); }
    const debtOutEl = document.getElementById('debt-out'); if(debtOutEl) { debtOutEl.setAttribute('data-value', dOut); debtOutEl.innerText = isPrivate ? '********' : toRp(dOut); }
    if(debtListContainer) debtListContainer.innerHTML = debtHtml === '' ? `<p class="text-center text-xs text-gray-400 italic py-2">${t('no-data-period')}</p>` : debtHtml;
}

// --- MODIFIKASI: FUNGSI RENDER AKUN DENGAN ONCLICK POP-UP REKENING ---
function renderAccounts() {
    const container = document.getElementById('accounts-list'), selectTrx = document.getElementById('form-trx-account'), selectTfFrom = document.getElementById('form-tf-from'), selectTfTo = document.getElementById('form-tf-to'), selAst = document.getElementById('form-asset-account'), selSellAst = document.getElementById('form-sell-asset-account'), selWdGoal = document.getElementById('form-withdraw-account'), selAddGoal = document.getElementById('form-add-savings-account'), selRec = document.getElementById('form-rec-account'), selExport = document.getElementById('export-pdf-account');
    let accounts = appData.M_Akun || [];
    
    // Sortir akun berdasarkan saldo terbanyak
    let sortedAccounts = accounts.map(acc => { 
        const namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun') || 'Akun';
        const tipeAkun = getProp(acc, 'Tipe_Akun', 'Tipe Akun') || '';
        const initial = namaAkun.substring(0, 2).toUpperCase();
        const valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime');
        const valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal');
        const nominal = extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); 
        
        // PENTING: Ekstrak data Atas Nama dan Nomor Rekening dari backend untuk dilempar ke pop-up nanti
        const atasNama = getProp(acc, 'Atas_Nama', 'Atas Nama') || '';
        const noRek = getProp(acc, 'Nomor_Rekening', 'Nomor Rekening', 'No_Rekening', 'No Rekening', 'Rekening') || '';

        return { acc, namaAkun, tipeAkun, initial, nominal, atasNama, noRek }; 
    }).sort((a, b) => b.nominal - a.nominal);
    
    let html = '', optsAll = '', optsRegular = '', optsExport = `<option value="ALL">${t('opt-all-accounts')}</option>`;
    
    sortedAccounts.forEach(item => {
        const isRdn = item.namaAkun.toUpperCase().includes('RDN');
        const logoSrc = getAccountLogo(item.namaAkun);
        const iconHtml = logoSrc 
            ? `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">` 
            : `<div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-xs">${item.initial}</div>`;
        
        // Ciptakan Kartu Akun yang Bisa Diklik (Melempar data ke pop-up menggunakan openAccountDetailModal)
        const encodedIconHtml = encodeURIComponent(iconHtml);
        if (!isRdn) {
            html += `
            <div onclick="openAccountDetailModal('${item.namaAkun}', '${item.atasNama}', '${item.noRek}', ${item.nominal}, '${encodedIconHtml}')" class="cursor-pointer flex items-center justify-between p-4 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] active:scale-[0.98] transition-all duration-200">
                <div class="flex items-center gap-3">
                    ${iconHtml}
                    <div>
                        <p class="text-sm font-bold">${item.namaAkun}</p>
                        <p class="text-[10px] text-gray-500">${item.tipeAkun}</p>
                    </div>
                </div>
                <p class="text-sm font-bold privacy-mask" data-value="${item.nominal}">${isPrivate?'********':toRp(item.nominal)}</p>
            </div>`;
        }
        
        optsAll += `<option value="${item.namaAkun}">${item.namaAkun}</option>`; 
        optsExport += `<option value="${item.namaAkun}">${item.namaAkun}</option>`;
        if (!isRdn) optsRegular += `<option value="${item.namaAkun}">${item.namaAkun}</option>`;
    });
    
    if(container) container.innerHTML = accounts.length === 0 ? `<p class="p-6 text-center text-xs text-gray-400">${t('no-acc')}</p>` : html; 
    if(selectTrx) selectTrx.innerHTML = optsRegular; 
    if(selectTfFrom) selectTfFrom.innerHTML = optsAll; 
    if(selectTfTo) selectTfTo.innerHTML = optsAll; 
    if(selAst) selAst.innerHTML = optsAll; 
    if(selWdGoal) selWdGoal.innerHTML = optsRegular; 
    if(selAddGoal) selAddGoal.innerHTML = optsRegular; 
    if(selSellAst) selSellAst.innerHTML = optsAll; 
    if(selRec) selRec.innerHTML = optsRegular; 
    if(selExport) selExport.innerHTML = optsExport;
}

function renderGoals() {
    const container = document.getElementById('goals-list') || document.getElementById('porto-goals-list'); if(!container) return;
    const goals = (appData.M_Goals || []).filter(g => getProp(g, 'Status') !== 'COMPLETED');
    if(goals.length === 0) return container.innerHTML = `<div class="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center"><p class="text-xs text-gray-400 italic">${t('no-goal')}</p></div>`;
    let html = '';
    goals.forEach(g => {
        const nama = getProp(g, 'Nama_Goal', 'Nama Goal') || 'Target', terkumpul = extractNumber(getProp(g, 'Terkumpul')), target = extractNumber(getProp(g, 'Target')) || 1, percent = Math.min(100, Math.round((terkumpul / target) * 100));
        if(container.id === 'porto-goals-list') html += `<div class="bg-white dark:bg-[#1e1e1e] border border-gray-50 dark:border-gray-800 p-4 rounded-2xl shadow-sm mb-3 hover:shadow-md transition duration-300"><div class="flex justify-between items-center mb-3"><div><p class="text-sm font-bold dark:text-gray-200">${nama}</p><p class="text-[10px] text-gray-500"><span class="privacy-mask" data-value="${terkumpul}">${isPrivate?'********':toRp(terkumpul)}</span> / <span class="privacy-mask" data-value="${target}">${isPrivate?'********':toRp(target)}</span></p></div><div class="flex gap-2"><button onclick="prepareGoalAction('add', '${nama}')" class="w-8 h-8 flex items-center justify-center bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-lg font-bold text-lg hover:scale-105 transition shadow-sm">+</button><button onclick="prepareGoalAction('withdraw', '${nama}')" class="w-8 h-8 flex items-center justify-center bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-lg font-bold text-lg hover:scale-105 transition shadow-sm">-</button></div></div><div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden"><div class="bg-[#6342E8] h-2 transition-all duration-1000 ease-out" style="width: ${percent}%"></div></div></div>`;
        else html += `<div class="bg-white dark:bg-[#1e1e1e] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2d2d2d] hover:shadow-md transition duration-300"><div class="flex justify-between items-end mb-2"><p class="text-sm font-bold">${nama}</p><p class="text-[10px] text-gray-500"><span class="privacy-mask" data-value="${terkumpul}">${isPrivate?'********':toRp(terkumpul)}</span> / <span class="privacy-mask" data-value="${target}">${isPrivate?'********':toRp(target)}</span></p></div><div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2"><div class="bg-[#6342E8] h-2 rounded-full transition-all duration-1000 ease-out" style="width: ${percent}%"></div></div></div>`;
    });
    container.innerHTML = html;
}

// --- MODIFIKASI: FUNGSI RENDER LIST LANGGANAN DENGAN FITUR KLIK DETAIL ---
function renderRecurring() {
    const container = document.getElementById('recurring-list'); 
    if(!container) return;
    const recs = appData.M_Recurring || [];
    
    if(recs.length === 0) {
        return container.innerHTML = `<div class="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center"><p class="text-xs text-gray-400 italic">${t('no-rec')}</p></div>`;
    }
    
    let html = ''; 
    const now = new Date(), currentMonth = now.getMonth(), currentYear = now.getFullYear();
    
    recs.forEach(r => {
        // Ambil data inti (termasuk ID_Recurring untuk proses hapus nantinya)
        const idRec = getProp(r, 'ID_Recurring', 'ID', 'Id') || '';
        const nama = getProp(r, 'Nama') || '-';
        const nominal = extractNumber(getProp(r, 'Nominal'));
        const frekuensi = getProp(r, 'Frekuensi') || 'Bulanan';
        const akun = getProp(r, 'Akun_Sumber', 'Akun');
        const tglTagihan = getProp(r, 'Tgl_Tagihan') || 1;
        
        let isPaid = false;
        (appData.T_Transaksi || []).forEach(tobj => {
            const tglRaw = getProp(tobj, 'Tanggal'); if(!tglRaw) return; 
            const tgl = new Date(tglRaw), tipe = (getProp(tobj, 'Tipe') || '').toString().trim().toUpperCase(), keterangan = getProp(tobj, 'Keterangan') || '';
            if (tipe === 'OUTFLOW' && keterangan.includes(nama)) {
                if (frekuensi.toLowerCase() === 'bulanan' || frekuensi.toLowerCase() === 'monthly') { if (tgl.getMonth() === currentMonth && tgl.getFullYear() === currentYear) isPaid = true; } 
                else if (frekuensi.toLowerCase() === 'tahunan' || frekuensi.toLowerCase() === 'yearly') { if (tgl.getFullYear() === currentYear) isPaid = true; }
            }
        });

        // Modifikasi Tombol: Tambahkan event.stopPropagation() agar saat tombol Pay diklik, modal detail tidak ikut terbuka (Mencegah Bubble Event)
        const btnHtml = isPaid 
            ? `<button onclick="event.stopPropagation();" disabled class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-400 rounded-lg text-[10px] font-bold cursor-not-allowed flex items-center gap-1 border border-gray-200 dark:border-gray-700 shadow-none"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ${t('txt-paid')}</button>` 
            : `<button onclick="event.stopPropagation(); payRecurring('${nama}', ${nominal}, '${akun}')" class="px-3 py-1.5 bg-[#6342E8] text-white rounded-lg text-[10px] font-bold hover:scale-105 active:scale-95 transition shadow-sm">${t('btn-pay-now')}</button>`;
        
        // Modifikasi Kartu: Tambahkan onclick="openRecurringDetailModal(...)" untuk melempar data ke Pop-up
        html += `
        <div onclick="openRecurringDetailModal('${idRec}', '${nama}', ${nominal}, '${frekuensi}', ${tglTagihan}, '${akun}')" class="cursor-pointer bg-white dark:bg-[#1e1e1e] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2d2d2d] flex items-center justify-between hover:shadow-md transition duration-300 mb-3 last:mb-0 active:scale-[0.98]">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 text-[#6342E8] flex items-center justify-center font-bold text-lg">↻</div>
                <div>
                    <p class="text-sm font-bold dark:text-gray-200">${nama}</p>
                    <p class="text-[10px] text-gray-500">Tgl ${tglTagihan} • ${akun}</p>
                </div>
            </div>
            <div class="text-right flex flex-col items-end gap-1.5">
                <p class="text-sm font-bold text-red-500 dark:text-red-400 privacy-mask" data-value="${nominal}">${isPrivate?'********':toRp(nominal)}</p>
                ${btnHtml}
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
}

function renderPortfolioScreen(drawChart = true) {
    const assetContainer = document.getElementById('asset-list'); if(!assetContainer) return;
    const porto = appData.M_Portofolio || [], accounts = appData.M_Akun || [], rdnAccount = accounts.find(a => { let nama = getProp(a, 'Nama_Akun', 'Nama Akun'); return nama && nama.toUpperCase().includes('RDN'); });
    const aggregatedAssets = {}; let html = '', rdnBalance = 0;
    if (rdnAccount) {
        let rdnName = getProp(rdnAccount, 'Nama_Akun', 'Nama Akun') || 'RDN', valReal = getProp(rdnAccount, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(rdnAccount, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal'); rdnBalance = extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal);
        html += `<div class="flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-blue-100 dark:border-blue-900/50 rounded-2xl shadow-sm mb-2 hover:shadow-md transition duration-300"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center rounded-xl font-bold text-blue-600">RDN</div><div><p class="text-sm font-bold dark:text-gray-200">${rdnName}</p><p class="text-[10px] text-gray-500">Saldo Cash</p></div></div><div class="text-right"><p class="text-sm font-bold privacy-mask text-[#6342E8]" data-value="${rdnBalance}">${isPrivate?'********':toRp(rdnBalance)}</p></div></div>`;
    }
    if(porto.length === 0 && !rdnAccount) assetContainer.innerHTML = `<p class="text-center text-xs text-gray-400 italic py-4">${t('no-asset')}</p>`;
    else {
        porto.forEach(a => {
            const idAset = getProp(a, 'ID_Aset', 'ID Aset'), simbol = getProp(a, 'Simbol', 'Nama Aset') || 'Aset', jumlahRaw = (getProp(a, 'Jumlah', 'Unit') || "0").toString(), jumlah = parseFloat(jumlahRaw.replace(',', '.')) || 0, hargaBeli = extractNumber(getProp(a, 'Harga_Beli', 'Harga Beli')), hargaLiveRaw = getProp(a, 'Harga_Saat_Ini', 'Harga Saat Ini'), hargaSekarang = (hargaLiveRaw !== undefined && hargaLiveRaw !== null && hargaLiveRaw !== "") ? extractNumber(hargaLiveRaw) : hargaBeli, totalValBeli = jumlah * hargaBeli;
            if (!aggregatedAssets[simbol]) aggregatedAssets[simbol] = { idAset: idAset, simbol: simbol, totalJumlah: 0, totalInvestasi: 0, hargaSekarang: hargaSekarang };
            aggregatedAssets[simbol].totalJumlah += jumlah; aggregatedAssets[simbol].totalInvestasi += totalValBeli;
        });
        Object.values(aggregatedAssets).forEach(a => {
            const avgHargaBeli = a.totalJumlah > 0 ? (a.totalInvestasi / a.totalJumlah) : 0, totalValSekarang = a.totalJumlah * a.hargaSekarang, nominalReturn = totalValSekarang - a.totalInvestasi, pnl = a.totalInvestasi > 0 ? (nominalReturn / a.totalInvestasi) * 100 : 0, pnlColor = nominalReturn >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400', pnlSign = nominalReturn > 0 ? '+' : '';
            html += `<div onclick="openAssetDetailModal('${a.idAset}', '${a.simbol}', ${a.totalJumlah}, ${avgHargaBeli}, ${a.totalInvestasi}, ${a.hargaSekarang}, ${totalValSekarang}, ${nominalReturn}, ${pnl})" class="cursor-pointer flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-gray-50 dark:border-gray-800 rounded-2xl shadow-sm mb-2 hover:shadow-md active:scale-[0.98] transition-all duration-300"><div class="flex items-center gap-3">${getAssetLogoHtml(a.simbol)}<div><p class="text-sm font-bold dark:text-gray-200">${a.simbol}</p><p class="text-[10px] text-gray-500">${a.totalJumlah.toLocaleString('en-US', {maximumFractionDigits: 6})} ${t('unit')}</p><p class="text-[10px] text-[#6342E8] dark:text-[#a78bfa] font-semibold mt-1">${t('live')}: ${toRp(a.hargaSekarang)}</p></div></div><div class="text-right flex flex-col justify-center"><p class="text-sm font-bold privacy-mask dark:text-white" data-value="${totalValSekarang}">${isPrivate?'********':toRp(totalValSekarang)}</p><p class="text-[10px] font-semibold ${pnlColor} mt-1">${pnlSign}${toRp(Math.abs(nominalReturn))} (${pnlSign}${pnl.toFixed(2)}%)</p></div></div>`;
        });
        assetContainer.innerHTML = html;
    }
    renderGoals();
    let labels = [], dataValues = []; const goals = (appData.M_Goals || []).filter(g => getProp(g, 'Status') !== 'COMPLETED'); let totalGoalSavings = goals.reduce((s, g) => s + extractNumber(getProp(g, 'Terkumpul')), 0);
    if(totalGoalSavings > 0) { labels.push('Tabungan Target'); dataValues.push(totalGoalSavings); }
    if(rdnBalance > 0) { let rdnName = getProp(rdnAccount, 'Nama_Akun', 'Nama Akun') || 'RDN'; labels.push(rdnName); dataValues.push(rdnBalance); }
    Object.values(aggregatedAssets).forEach(p => { labels.push(p.simbol); dataValues.push(p.totalJumlah * p.hargaSekarang); });
    const totalNetAsset = dataValues.reduce((a,b)=>a+b, 0), portoCenter = document.getElementById('porto-center-val');
    if (portoCenter) { portoCenter.setAttribute('data-value', totalNetAsset); portoCenter.innerText = isPrivate ? '********' : toRp(totalNetAsset); }
    if(drawChart && document.getElementById('portfolioChart')) {
        const ctx = document.getElementById('portfolioChart').getContext('2d'); if (portoChartInstance) portoChartInstance.destroy();
        portoChartInstance = new Chart(ctx, { type: 'doughnut', data: { labels: labels.length > 0 ? labels : ['Kosong'], datasets: [{ data: dataValues.length > 0 ? dataValues : [1], backgroundColor: dataValues.length > 0 ? CHART_COLORS : ['#e5e7eb'], borderWidth: 0, hoverOffset: 4 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '80%', plugins: { legend: { display: false }, tooltip: { callbacks: { label: function(context) { if(dataValues.length === 0) return ' Tidak ada aset'; return ' ' + (context.label || '') + ': ' + toRp(context.raw || 0); } } } }, animation: { animateScale: true, animateRotate: true } } });
    }
}

function changeCalMonth(step) { currentCalMonth += step; if(currentCalMonth > 11) { currentCalMonth = 0; currentCalYear++; } else if(currentCalMonth < 0) { currentCalMonth = 11; currentCalYear--; } renderCalendar(); showDailyDetail(new Date().getDate(), true); }

function renderCalendar() {
    const calGrid = document.getElementById('calendar-grid'); if(!calGrid) return;
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
    let html = ''; for(let i = 0; i < firstDay; i++) html += `<div class="aspect-[4/5] rounded-xl"></div>`;
    const today = new Date(), isCurrentMonthReal = today.getMonth() === currentCalMonth && today.getFullYear() === currentCalYear, currentDayReal = today.getDate();
    for(let i = 1; i <= daysInMonth; i++) {
        let isToday = isCurrentMonthReal && i === currentDayReal, isActive = i === activeCalDay, dateClass = isToday ? "bg-[#6342E8] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md mb-1" : "text-gray-700 dark:text-gray-300 w-6 h-6 flex items-center justify-center mb-1 transition-colors", dataHtml = '';
        if(dailyData[i]) { if(dailyData[i].in > 0) dataHtml += `<p class="text-[8px] text-green-500 dark:text-green-400 font-bold leading-tight truncate w-full text-center">+${formatShortNumber(dailyData[i].in)}</p>`; if(dailyData[i].out > 0) dataHtml += `<p class="text-[8px] text-red-500 dark:text-red-400 font-bold leading-tight truncate w-full text-center">-${formatShortNumber(dailyData[i].out)}</p>`; }
        let cellClass = isActive ? "border-[#6342E8]/50 dark:border-[#a78bfa]/50 bg-purple-50/50 dark:bg-purple-900/20 scale-105 shadow-sm z-10 relative" : "border-gray-50 dark:border-gray-800 bg-white dark:bg-[#1e1e1e] hover:bg-gray-50 dark:hover:bg-[#2d2d2d]";
        html += `<div class="cal-cell flex flex-col items-center justify-start pt-1 pb-1 px-0.5 rounded-xl border ${cellClass} overflow-hidden cursor-pointer" onclick="showDailyDetail(${i})"><div class="${dateClass} text-xs font-semibold">${i}</div><div class="flex flex-col w-full px-0.5 mt-auto pb-1">${dataHtml}</div></div>`;
    }
    calGrid.innerHTML = html; if(isCurrentMonthReal && activeCalDay === currentDayReal) showDailyDetail(currentDayReal, false);
}

function showDailyDetail(day, refreshCalendarUI = true) {
    activeCalDay = day; if(refreshCalendarUI) renderCalendar(); 
    const titleEl = document.getElementById('daily-detail-title'); if(!titleEl) return;
    titleEl.innerText = `${t('nav-hist')} ${day} ${i18n[currentLang]['month-names'][currentCalMonth]} ${currentCalYear}`;
    const dailyTrxs = (appData.T_Transaksi || []).filter(t => { const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return false; const tgl = new Date(tglRaw); return tgl.getDate() === day && tgl.getMonth() === currentCalMonth && tgl.getFullYear() === currentCalYear; });
    const listContainer = document.getElementById('daily-transaction-list');
    if(dailyTrxs.length === 0) return listContainer.innerHTML = `<p class="text-center text-xs text-gray-400 py-4 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800 transition-all">${t('no-trx-today') || t('no-trx')}</p>`; 
    let html = '';
    [...dailyTrxs].sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime()).forEach(tobj => {
        const isOut = (getProp(tobj, 'Tipe')||'').toString().trim().toUpperCase() === 'OUTFLOW', sign = isOut ? '-' : '+', kategori = getProp(tobj, 'Kategori') || '', akun = getProp(tobj, 'Akun') || '';
        let color = isOut ? 'text-gray-800 dark:text-gray-100' : 'text-green-500 dark:text-green-400'; if(kategori === 'Transfer Keluar' || kategori === 'Transfer Masuk' || kategori === 'Biaya Admin') color = 'text-gray-800 dark:text-gray-100';
        const logoSrc = getAccountLogo(akun), iconHtml = logoSrc ? `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">` : `<div class="w-10 h-10 rounded-full ${isOut ? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300' : 'bg-green-50 text-green-500 dark:bg-green-900/30'} flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${isOut ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}"></path></svg></div>`;
        const val = extractNumber(getProp(tobj, 'Jumlah')), tobjJSON = encodeURIComponent(JSON.stringify(tobj));
        html += `<div onclick="openTransactionDetail('${tobjJSON}')" class="cursor-pointer flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-gray-50 dark:border-gray-800 rounded-2xl shadow-sm mb-2 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] active:scale-[0.98] transition-all duration-200"><div class="flex items-center gap-3">${iconHtml}<div class="overflow-hidden"><p class="text-sm font-bold truncate w-32 dark:text-white">${kategori}</p><p class="text-[10px] text-gray-500 truncate w-32 uppercase tracking-wide">${getProp(tobj, 'Keterangan') || akun}</p></div></div><p class="text-sm font-bold ${color} whitespace-nowrap">${sign} <span class="privacy-mask" data-value="${val}">${isPrivate?'********':toRp(val)}</span></p></div>`;
    });
    listContainer.innerHTML = html; applyPrivacyMasks();
}

function setHistoryFilter(filterType) {
    histFilterTime = filterType;
    document.querySelectorAll('#main-content button[id^="filter-"]').forEach(b => { b.classList.remove('bg-[#6342E8]', 'text-white', 'shadow-md'); b.classList.add('bg-white', 'dark:bg-[#1e1e1e]', 'text-gray-600', 'dark:text-gray-300', 'shadow-sm'); });
    const btn = document.getElementById('filter-' + filterType); if(btn) { btn.classList.remove('bg-white', 'dark:bg-[#1e1e1e]', 'text-gray-600', 'dark:text-gray-300', 'shadow-sm'); btn.classList.add('bg-[#6342E8]', 'text-white', 'shadow-md'); }
    const customPanel = document.getElementById('custom-date-container'); if(customPanel) { if (filterType === 'custom') { customPanel.classList.remove('hidden'); customPanel.classList.add('grid'); } else { customPanel.classList.add('hidden'); customPanel.classList.remove('grid'); } }
    renderHistoryScreen();
}

function setHistoryType(type) {
    histToggleType = type;
    const btnIn = document.getElementById('toggle-inflow'), btnOut = document.getElementById('toggle-outflow'), btnTf = document.getElementById('toggle-transfer');
    if(btnIn && btnOut && btnTf) { btnIn.classList.remove('toggle-active'); btnOut.classList.remove('toggle-active'); btnTf.classList.remove('toggle-active'); if(type === 'INFLOW') btnIn.classList.add('toggle-active'); else if(type === 'OUTFLOW') btnOut.classList.add('toggle-active'); else btnTf.classList.add('toggle-active'); }
    renderHistoryScreen();
}

function triggerHistoryRender() { if(histFilterTime === 'custom') renderHistoryScreen(); }

function getFilteredTransactions() {
    let trxs = appData.T_Transaksi || []; const today = new Date();
    return trxs.filter(t => {
        const tgl = getProp(t, 'Tanggal'); if(!tgl) return false; const txDate = new Date(tgl);
        if (histFilterTime === 'month') return txDate.getMonth() === today.getMonth() && txDate.getFullYear() === today.getFullYear();
        else if (histFilterTime === '7days') { const s = new Date(today); s.setDate(today.getDate() - 7); return txDate >= s && txDate <= today; }
        else if (histFilterTime === 'custom') { const s = document.getElementById('date-start')?.valueAsDate, e = document.getElementById('date-end')?.valueAsDate; if(!s || !e) return true; e.setHours(23, 59, 59, 999); return txDate >= s && txDate <= e; }
        return true;
    });
}

function renderHistoryScreen(drawChart = true) {
    const historyListContainer = document.getElementById('history-list'); if(!historyListContainer) return;
    const filteredData = getFilteredTransactions(); let sumIn = 0, sumOut = 0;
    filteredData.forEach(t => {
        const val = extractNumber(getProp(t, 'Jumlah')), tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = (getProp(t, 'Kategori') || '').toString().trim();
        if(tipe === 'INFLOW' && kategori !== 'Transfer Masuk') sumIn += val; if(tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') sumOut += val;
    });
    const diff = sumIn - sumOut;
    document.getElementById('hist-sum-in').setAttribute('data-value', sumIn); document.getElementById('hist-sum-in').innerText = isPrivate ? '********' : toRp(sumIn);
    document.getElementById('hist-sum-out').setAttribute('data-value', sumOut); document.getElementById('hist-sum-out').innerText = isPrivate ? '********' : toRp(sumOut);
    const diffEl = document.getElementById('hist-sum-diff'); diffEl.setAttribute('data-value', diff); diffEl.innerText = isPrivate ? '********' : toRp(diff); diffEl.className = `font-bold text-lg privacy-mask ${diff < 0 ? 'text-red-500' : 'text-gray-800 dark:text-white'}`;
    let chartDataRaw = [], listDataRaw = [], centerLabel = '';
    if (histToggleType === 'INFLOW') { chartDataRaw = filteredData.filter(t => (getProp(t, 'Tipe')||'').toString().trim().toUpperCase() === 'INFLOW' && getProp(t, 'Kategori') !== 'Transfer Masuk'); listDataRaw = chartDataRaw; centerLabel = t('tot-inc'); } 
    else if (histToggleType === 'OUTFLOW') { chartDataRaw = filteredData.filter(t => (getProp(t, 'Tipe')||'').toString().trim().toUpperCase() === 'OUTFLOW' && getProp(t, 'Kategori') !== 'Transfer Keluar'); listDataRaw = chartDataRaw; centerLabel = t('tot-exp'); } 
    else if (histToggleType === 'TRANSFER') { chartDataRaw = filteredData.filter(t => getProp(t, 'Kategori') === 'Transfer Masuk'); listDataRaw = filteredData.filter(t => getProp(t, 'Kategori') === 'Transfer Keluar' || getProp(t, 'Kategori') === 'Transfer Masuk' || getProp(t, 'Kategori') === 'Biaya Admin'); centerLabel = t('tot-tf'); }
    const categorySums = {}, categoryCounts = {}; let grandTotalChart = 0;
    chartDataRaw.forEach(t => {
        const groupKey = histToggleType === 'TRANSFER' ? getProp(t, 'Akun') : getProp(t, 'Kategori'), val = extractNumber(getProp(t, 'Jumlah'));
        if(!categorySums[groupKey]) { categorySums[groupKey] = 0; categoryCounts[groupKey] = 0; }
        categorySums[groupKey] += val; categoryCounts[groupKey] += 1; grandTotalChart += val;
    });
    const sortedCategories = Object.keys(categorySums).map(cat => ({ name: cat, total: categorySums[cat], count: categoryCounts[cat], percent: grandTotalChart > 0 ? ((categorySums[cat] / grandTotalChart) * 100).toFixed(1) : 0 })).sort((a, b) => b.total - a.total);
    document.getElementById('chart-center-val').setAttribute('data-value', grandTotalChart); document.getElementById('chart-center-val').innerText = isPrivate ? '********' : toRp(grandTotalChart);
    document.getElementById('chart-center-label').innerText = centerLabel;
    if(drawChart && document.getElementById('categoryChart')) {
        if (myChartInstance) myChartInstance.destroy();
        myChartInstance = new Chart(document.getElementById('categoryChart').getContext('2d'), { type: 'doughnut', data: { labels: sortedCategories.length > 0 ? sortedCategories.map(c => c.name) : ['Kosong'], datasets: [{ data: sortedCategories.length > 0 ? sortedCategories.map(c => c.total) : [1], backgroundColor: sortedCategories.length > 0 ? CHART_COLORS : ['#e5e7eb'], borderWidth: 0, hoverOffset: 4 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '75%', plugins: { legend: { display: false } } } });
    }
    const catListContainer = document.getElementById('history-category-list'); catListContainer.innerHTML = '';
    if(sortedCategories.length === 0) { catListContainer.innerHTML = `<p class="text-center text-xs text-gray-400 py-6">${t('no-data-period')}</p>`; } 
    else {
        sortedCategories.forEach((cat, index) => {
            const color = CHART_COLORS[index % CHART_COLORS.length]; let iconHtml = '';
            if (histToggleType === 'TRANSFER') {
                const logoSrc = getAccountLogo(cat.name);
                if (logoSrc) iconHtml = `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">`;
                else iconHtml = `<div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-xs">${cat.name ? cat.name.substring(0,2).toUpperCase() : 'BK'}</div>`;
            } else { iconHtml = `<div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm" style="background-color: ${color}20; color: ${color};">${getCategoryIcon(cat.name)}</div>`; }
            catListContainer.innerHTML += `<div class="flex items-center justify-between py-3 border-b border-gray-50 dark:border-gray-800 last:border-0"><div class="flex items-center gap-3">${iconHtml}<div><p class="text-sm font-bold text-gray-700 dark:text-gray-200">${cat.name}</p><p class="text-[10px] text-gray-500">${t('from-trx')} ${cat.count} ${t('transactions')}</p></div></div><div class="text-right"><p class="text-sm font-bold text-gray-800 dark:text-white privacy-mask" data-value="${cat.total}">${isPrivate?'********':toRp(cat.total)}</p><p class="text-[10px] font-semibold text-gray-400">${cat.percent}%</p></div></div>`;
        });
    }
    
    if(listDataRaw.length === 0) {
        historyListContainer.innerHTML = `<div class="text-center p-6"><p class="text-xs text-gray-400">${t('no-trx')}</p></div>`;
    } else {
        let html = ''; const sortedTransactions = [...listDataRaw].sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime());
        let currentDateGroup = '';
        sortedTransactions.forEach(tobj => {
            const tglRaw = getProp(tobj, 'Tanggal'), tglObj = tglRaw ? new Date(tglRaw) : null;
            let dateString = tglObj ? `${tglObj.getDate().toString().padStart(2, '0')} ${i18n[currentLang]['month-names'][tglObj.getMonth()]} ${tglObj.getFullYear()}` : 'Tanggal Tidak Diketahui';
            if(dateString !== currentDateGroup) { html += `<div class="px-4 py-2 bg-gray-50/90 dark:bg-[#121212]/90 backdrop-blur-sm sticky top-0 z-10 border-y border-gray-100 dark:border-gray-800"><span class="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">${dateString}</span></div>`; currentDateGroup = dateString; }
            const isOut = (getProp(tobj, 'Tipe')||'').toString().trim().toUpperCase() === 'OUTFLOW', sign = isOut ? '-' : '+', kategori = getProp(tobj, 'Kategori') || '', akun = getProp(tobj, 'Akun') || '';
            let color = isOut ? 'text-gray-800 dark:text-gray-100' : 'text-green-500 dark:text-green-400'; if(kategori === 'Transfer Keluar' || kategori === 'Transfer Masuk' || kategori === 'Biaya Admin') color = 'text-gray-800 dark:text-gray-100';
            const logoSrc = getAccountLogo(akun), iconHtml = logoSrc ? `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">` : `<div class="w-10 h-10 rounded-full ${isOut ? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300' : 'bg-green-50 text-green-500 dark:bg-green-900/30'} flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${isOut ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}"></path></svg></div>`;
            const val = extractNumber(getProp(tobj, 'Jumlah')), tobjJSON = encodeURIComponent(JSON.stringify(tobj));
            html += `<div onclick="openTransactionDetail('${tobjJSON}')" class="cursor-pointer flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] active:scale-[0.98] transition-all duration-200"><div class="flex items-center gap-3">${iconHtml}<div class="overflow-hidden"><p class="text-sm font-bold truncate w-32 dark:text-white">${kategori}</p><p class="text-[10px] text-gray-500 truncate w-32 uppercase tracking-wide">${getProp(tobj, 'Keterangan') || akun}</p></div></div><p class="text-sm font-bold ${color} whitespace-nowrap">${sign} <span class="privacy-mask" data-value="${val}">${isPrivate?'********':toRp(val)}</span></p></div>`;
        });
        historyListContainer.innerHTML = html;
    }
}

// --- FUNGSI AJAX SHELL ARCHITECTURE DENGAN HANDLING ERROR YANG AMAN --- //
async function showPage(pageId) {
    document.querySelectorAll('nav button.nav-btn').forEach(b => { 
        b.classList.remove('active-nav', 'text-[#6342E8]'); b.classList.add('text-gray-400'); 
    });
    const navTarget = document.getElementById('nav-' + pageId);
    if (navTarget) { navTarget.classList.add('active-nav'); navTarget.classList.remove('text-gray-400'); }

    const mainContent = document.getElementById('main-content');
    if (!window.pageCache) window.pageCache = {};
    
    mainContent.classList.remove('active-page');
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(15px) scale(0.98)';
    
    setTimeout(async () => {
        if (!window.pageCache[pageId]) {
            showLoading(true);
            try {
                const response = await fetch(`pages/${pageId}.html?t=${new Date().getTime()}`);
                if(response.ok) { window.pageCache[pageId] = await response.text(); } 
                else {
                    mainContent.innerHTML = `<div class="flex flex-col items-center justify-center pt-20"><div class="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><h2 class="text-lg font-bold text-gray-800 dark:text-white">Halaman Tidak Ditemukan</h2><p class="text-sm text-gray-500 text-center mt-2 max-w-xs">Gagal memuat <b>pages/${pageId}.html</b>. Pastikan nama file sudah benar (huruf kecil semua) dan berada di dalam folder <b>pages</b>.</p></div>`;
                    mainContent.classList.add('active-page'); mainContent.style.opacity = '1'; mainContent.style.transform = 'translateY(0) scale(1)';
                    showLoading(false); return;
                }
            } catch (e) {
                mainContent.innerHTML = `<div class="flex flex-col items-center justify-center pt-20"><div class="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><h2 class="text-lg font-bold text-gray-800 dark:text-white">Error Network</h2><p class="text-sm text-gray-500 text-center mt-2 max-w-xs">Tidak bisa menghubungi Local Server. Buka halaman via Live Server.</p></div>`;
                mainContent.classList.add('active-page'); mainContent.style.opacity = '1'; mainContent.style.transform = 'translateY(0) scale(1)';
                showLoading(false); return;
            }
            showLoading(false);
        }
        mainContent.innerHTML = window.pageCache[pageId];
        applyLanguage();
        try {
            if(pageId === 'dashboard') { try { renderDashboard(); } catch(e){ console.error("Error Dashboard:", e); } try { renderAccounts(); } catch(e){ console.error("Error Accounts:", e); } try { renderGoals(); } catch(e){ console.error("Error Goals:", e); } try { renderRecurring(); } catch(e){ console.error("Error Recurring:", e); } }
            if(pageId === 'calendar') { try { renderCalendar(); } catch(e){ console.error(e); } }
            if(pageId === 'portfolio') { try { renderPortfolioScreen(true); } catch(e){ console.error(e); } }
            if(pageId === 'history') { try { renderHistoryScreen(true); } catch(e){ console.error(e); } }
        } catch (e) { console.error("Global Render Error:", e); }
        applyPrivacyMasks();
        mainContent.classList.add('active-page');
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0) scale(1)';
    }, 250);
}

function toggleDarkMode() { 
    const isDark = document.documentElement.classList.toggle('dark'); localStorage.setItem('fintrack_theme', isDark ? 'dark' : 'light'); document.getElementById('theme-icon').innerText = isDark ? '☀️' : '🌙'; 
}

function togglePrivacy() {
    isPrivate = !isPrivate; applyPrivacyMasks();
    document.getElementById('privacy-icon').innerHTML = isPrivate ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>' : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>';
}

function applyPrivacyMasks() { document.querySelectorAll('.privacy-mask').forEach(el => { if(isPrivate) el.innerText = '********'; else el.innerText = toRp(Number(el.getAttribute('data-value')) || 0); }); }

let exportSelectedYear = new Date().getFullYear();

function renderExportModal() {
    const trxs = appData.T_Transaksi || []; let years = new Set();
    trxs.forEach(t => { const tgl = getProp(t, 'Tanggal'); if(tgl) years.add(new Date(tgl).getFullYear()); });
    if(years.size === 0) years.add(new Date().getFullYear());
    const sortedYears = Array.from(years).sort((a,b) => b - a);
    if(!sortedYears.includes(exportSelectedYear)) exportSelectedYear = sortedYears[0];
    const yearContainer = document.getElementById('export-year-container'); if(!yearContainer) return;
    yearContainer.innerHTML = '';
    sortedYears.forEach(year => {
        const isActive = year === exportSelectedYear, btnClass = isActive ? 'bg-[#21C55D] text-white shadow-md border-transparent' : 'bg-white dark:bg-[#1e1e1e] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700';
        yearContainer.innerHTML += `<button onclick="setExportYear(${year})" class="px-5 py-2 text-sm font-bold rounded-full whitespace-nowrap border transition-all ${btnClass}">${year}</button>`;
    });
    renderExportMonths();
}

function setExportYear(year) { exportSelectedYear = year; renderExportModal(); }

function renderExportMonths() {
    const monthContainer = document.getElementById('export-month-container'); if(!monthContainer) return;
    monthContainer.innerHTML = ''; const tx = appData.T_Transaksi || []; let vm = new Set();
    tx.forEach(t => { if(getProp(t,'Tanggal') && new Date(getProp(t,'Tanggal')).getFullYear() === exportSelectedYear) vm.add(new Date(getProp(t,'Tanggal')).getMonth()); });
    const monthNames = i18n[currentLang]['month-names'];
    for(let i = 11; i >= 0; i--) {
        if(vm.has(i)) { monthContainer.innerHTML += `<button onclick="generatePDF(${i}, ${exportSelectedYear})" class="w-full bg-white dark:bg-[#1e1e1e] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex justify-between items-center hover:bg-gray-50 dark:hover:bg-[#2d2d2d] active:scale-[0.98] transition-all"><span class="font-semibold text-gray-800 dark:text-gray-200">${monthNames[i]} ${exportSelectedYear}</span><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>`;}
    }
}

async function getBase64ImageFromUrl(imageUrl) {
    return new Promise((resolve, reject) => {
        let img = new Image(); img.crossOrigin = 'Anonymous';
        img.onload = () => {
            let canvas = document.createElement('canvas'); canvas.width = img.width; canvas.height = img.height;
            let ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0); resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = error => reject(error); img.src = imageUrl;
    });
}

async function generatePDF(monthIdx, year) {
    showLoading(true);
    try {
        const { jsPDF } = window.jspdf; const doc = new jsPDF('p', 'mm', 'a4'); const totalPagesExp = "{total_pages_count_string}";
        const selectedAccount = document.getElementById('export-pdf-account').value, isAllAccounts = selectedAccount === 'ALL';
        const userName = sessionName ? sessionName.toUpperCase() : "PENGGUNA FINTRACK", userEmail = sessionEmail ? sessionEmail.toLowerCase() : "fintrack user", accLabel = isAllAccounts ? t('pdf-all-acc') : selectedAccount.toUpperCase();
        let trxs = appData.T_Transaksi || [];
        
        let currentRealtimeBalance = 0;
        if (isAllAccounts) {
            (appData.M_Akun || []).forEach(acc => {
                let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun'); if (namaAkun && namaAkun.toUpperCase().includes('RDN')) return; 
                let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal');
                currentRealtimeBalance += extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal);
            });
        } else {
            const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === selectedAccount);
            if(accData) {
                let valReal = getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(accData, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal');
                currentRealtimeBalance = extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal);
            }
        }

        let relevantTrxs = trxs.filter(t => { const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return false; if(isAllAccounts) return true; return getProp(t, 'Akun') === selectedAccount; });
        relevantTrxs.sort((a, b) => new Date(getProp(a, 'Tanggal')).getTime() - new Date(getProp(b, 'Tanggal')).getTime());

        const endOfTargetMonth = new Date(year, monthIdx + 1, 0, 23, 59, 59, 999).getTime();
        let mutasiSetelahTarget = 0;
        relevantTrxs.forEach(t => {
            const tgl = new Date(getProp(t, 'Tanggal')).getTime();
            if (tgl > endOfTargetMonth) {
                const tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), val = extractNumber(getProp(t, 'Jumlah'));
                if (tipe === 'INFLOW') mutasiSetelahTarget += val; else if (tipe === 'OUTFLOW') mutasiSetelahTarget -= val;
            }
        });

        let saldoAkhirBulan = currentRealtimeBalance - mutasiSetelahTarget;
        let monthTrxs = relevantTrxs.filter(t => { const d = new Date(getProp(t, 'Tanggal')); return d.getMonth() === monthIdx && d.getFullYear() === year; });
        let mutasiBulanIni = 0, summaryTotalIn = 0, summaryTotalOut = 0;

        monthTrxs.forEach(t => {
            const tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = getProp(t, 'Kategori') || '', val = extractNumber(getProp(t, 'Jumlah'));
            if(tipe === 'INFLOW') { mutasiBulanIni += val; if (!(isAllAccounts && kategori === 'Transfer Masuk')) summaryTotalIn += val; } 
            else if(tipe === 'OUTFLOW') { mutasiBulanIni -= val; if (!(isAllAccounts && kategori === 'Transfer Keluar')) summaryTotalOut += val; }
        });

        let saldoAwalBulan = saldoAkhirBulan - mutasiBulanIni, runningBalance = saldoAwalBulan, tableRows = [];
        tableRows.push(['', { content: t('pdf-bal-start'), styles: { fontStyle: 'bold' } }, '', { content: new Intl.NumberFormat('id-ID').format(saldoAwalBulan), styles: { fontStyle: 'bold' } }]);

        monthTrxs.forEach(t => {
            const tglRaw = getProp(t, 'Tanggal'), d = new Date(tglRaw), dateStr = `${d.getDate().toString().padStart(2,'0')} ${i18n[currentLang]['month-names'][d.getMonth()].substring(0,3)} ${d.getFullYear()}`, timeStr = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')} WIB`;
            const tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = getProp(t, 'Kategori') || ''; let keterangan = getProp(t, 'Keterangan') || '';
            if(!isAllAccounts && (kategori === 'Transfer Keluar' || kategori === 'Transfer Masuk')) keterangan = keterangan; else if (isAllAccounts) keterangan += ` (${getProp(t, 'Akun')})`;
            const val = extractNumber(getProp(t, 'Jumlah')); let nomStr = '', nomStyle = {};

            if(tipe === 'INFLOW') {
                runningBalance += val;
                if(isAllAccounts && kategori === 'Transfer Masuk') { nomStr = new Intl.NumberFormat('id-ID').format(val); nomStyle = { textColor: [100, 100, 100] }; } 
                else { nomStr = '+' + new Intl.NumberFormat('id-ID').format(val); nomStyle = { textColor: [34, 197, 94] }; }
            } else if(tipe === 'OUTFLOW') {
                runningBalance -= val;
                if(isAllAccounts && kategori === 'Transfer Keluar') { nomStr = new Intl.NumberFormat('id-ID').format(val); nomStyle = { textColor: [100, 100, 100] }; } 
                else { nomStr = '-' + new Intl.NumberFormat('id-ID').format(val); nomStyle = { textColor: [239, 68, 68] }; }
            }
            tableRows.push([`${dateStr}\n${timeStr}`, { content: `${kategori}\n${keterangan.toUpperCase()}` }, { content: nomStr, styles: nomStyle }, new Intl.NumberFormat('id-ID').format(runningBalance)]);
        });

        let logoBase64 = null, logoHeight = 12, logoWidth = 36;
        try { logoBase64 = await getBase64ImageFromUrl('Logo_Fintrack.png'); const imgProps = doc.getImageProperties(logoBase64); logoWidth = 45; logoHeight = (imgProps.height * logoWidth) / imgProps.width; } catch(e) { console.log('Logo failed to load for PDF'); }

        const periodLastDay = new Date(year, monthIdx + 1, 0).getDate();
        const periodStr = `1 - ${periodLastDay} ${i18n[currentLang]['month-names'][monthIdx]} ${year}`;
        const primaryColor = [99, 66, 232], softColor = [240, 237, 255]; 

        const drawHeader = (data) => {
            if (logoBase64) doc.addImage(logoBase64, 'PNG', 15, 8, logoWidth, logoHeight);
            else { doc.setFont("helvetica", "bolditalic"); doc.setFontSize(22); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]); doc.text("Fintrack", 15, 20); }
            doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]); doc.setLineWidth(1); doc.line(110, 12, 195, 12);
            doc.setFont("helvetica", "bold"); doc.setFontSize(16); doc.setTextColor(30, 30, 30); doc.text(t('pdf-title'), 195, 20, { align: "right" });
            doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(100, 100, 100); doc.text(`${t('pdf-period')}: ${periodStr}`, 195, 25, { align: "right" });
            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30, 30, 30); doc.text(userName, 15, 36);
            doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(80, 80, 80);
            const splitAddress = doc.splitTextToSize(userEmail, 90); doc.text(splitAddress, 15, 41);
            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30, 30, 30); doc.text(accLabel, 195, 36, { align: "right" });
            doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(80, 80, 80); doc.text(`${t('pdf-system')} • ${t('pdf-curr')}: `, 185, 41, { align: "right" });
            doc.setFont("helvetica", "bold"); doc.text("IDR", 195, 41, { align: "right" });

            if (data.pageNumber === 1) {
                const boxY = 52, boxH = 18;
                doc.setFillColor(softColor[0], softColor[1], softColor[2]); doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]); doc.setLineWidth(0.5); doc.roundedRect(15, boxY, 180, boxH, 3, 3, 'FD');
                doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]); doc.setLineWidth(0.2); doc.line(60, boxY + 3, 60, boxY + boxH - 3); doc.line(105, boxY + 3, 105, boxY + boxH - 3); doc.line(150, boxY + 3, 150, boxY + boxH - 3);
                doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(100, 100, 100);
                doc.text(t('pdf-bal-start'), 37.5, boxY + 7, { align: "center" }); doc.text(t('pdf-tot-in'), 82.5, boxY + 7, { align: "center" }); doc.text(t('pdf-tot-out'), 127.5, boxY + 7, { align: "center" }); doc.text(t('pdf-bal-end'), 172.5, boxY + 7, { align: "center" });
                doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30, 30, 30); doc.text(new Intl.NumberFormat('id-ID').format(saldoAwalBulan), 37.5, boxY + 13, { align: "center" });
                doc.setTextColor(34, 197, 94); doc.text('+' + new Intl.NumberFormat('id-ID').format(summaryTotalIn), 82.5, boxY + 13, { align: "center" });
                doc.setTextColor(239, 68, 68); doc.text('-' + new Intl.NumberFormat('id-ID').format(summaryTotalOut), 127.5, boxY + 13, { align: "center" });
                doc.setTextColor(30, 30, 30); doc.text(new Intl.NumberFormat('id-ID').format(saldoAkhirBulan), 172.5, boxY + 13, { align: "center" });
            }
        };

        const drawFooter = (data) => {
            const footerY = doc.internal.pageSize.height - 15;
            doc.setDrawColor(220, 220, 220); doc.setLineWidth(0.5); doc.line(15, footerY - 5, 195, footerY - 5);
            doc.setDrawColor(200, 200, 200); doc.setFillColor(245, 245, 245); doc.circle(20, footerY + 2, 4, 'FD');
            doc.setDrawColor(150, 150, 150); doc.setLineWidth(0.8); doc.line(18.5, footerY + 2, 19.5, footerY + 3.5); doc.line(19.5, footerY + 3.5, 22, footerY + 0.5);
            doc.setFont("helvetica", "normal"); doc.setFontSize(7); doc.setTextColor(120, 120, 120);
            const splitFooter = doc.splitTextToSize(t('pdf-footer'), 140); doc.text(splitFooter, 28, footerY);
            doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(100, 100, 100);
            doc.text(`${t('pdf-page')} ${data.pageNumber} ${t('pdf-of')} ${totalPagesExp}`, 195, footerY + 3, { align: "right" });
        };

        doc.autoTable({
            startY: 75, 
            head: [[t('pdf-col-date'), t('pdf-col-desc'), t('pdf-col-nom'), t('pdf-col-bal')]],
            body: tableRows, theme: 'plain',
            headStyles: { fillColor: primaryColor, textColor: 255, fontStyle: 'bold', fontSize: 9, halign: 'left', cellPadding: 4 },
            bodyStyles: { fontSize: 8, textColor: 50, cellPadding: 4, valign: 'top' },
            columnStyles: { 0: { cellWidth: 35 }, 1: { cellWidth: 'auto' }, 2: { cellWidth: 35, halign: 'right' }, 3: { cellWidth: 35, halign: 'right' } },
            didParseCell: function (data) { if (data.section === 'head' && (data.column.index === 2 || data.column.index === 3)) data.cell.styles.halign = 'right'; },
            willDrawCell: function (data) { if (data.section === 'body' && data.row.index % 2 === 1) { doc.setFillColor(248, 246, 255); doc.rect(data.cell.x, data.cell.y, data.cell.width, data.cell.height, 'F'); } },
            margin: { top: 55, left: 15, right: 15, bottom: 25 },
            didDrawPage: function (data) { drawHeader(data); drawFooter(data); }
        });

        if (typeof doc.putTotalPages === 'function') doc.putTotalPages(totalPagesExp);
        const fileName = `Mutasi_${selectedAccount}_${i18n[currentLang]['month-names'][monthIdx]}_${year}.pdf`;
        doc.save(fileName); closeModal('modal-export-pdf');

    } catch(e) { console.error("Gagal export PDF:", e); alert(currentLang === 'id' ? "Gagal membuat file PDF." : "Failed to generate PDF.");
    } finally { showLoading(false); }
}
// --- FUNGSI POP-UP DETAIL TRANSAKSI (EDISI OPTIMALISASI STATIS HTML) --- //
window.openTransactionDetail = function(jsonStr) {
    try {
        // Safe fallbacks perlindungan variabel global scope
        const lang = (typeof currentLang !== 'undefined') ? currentLang : 'id';
        const priv = (typeof isPrivate !== 'undefined') ? isPrivate : false;
        
        const safeToRp = function(num) {
            if (typeof toRp === 'function') return toRp(num);
            return 'Rp ' + new Intl.NumberFormat('id-ID').format(num);
        };
        
        const safeGetProp = function(obj, ...keys) {
            if (typeof getProp === 'function') return getProp(obj, ...keys);
            for (let key of keys) {
                if (obj && obj[key] !== undefined) return obj[key];
            }
            return '';
        };

        const safeExtractNumber = function(val) {
            if (typeof extractNumber === 'function') return extractNumber(val);
            if (typeof val === 'number') return val;
            if (!val) return 0;
            return parseFloat(val.toString().replace(/[^0-9,-]/g, '').replace(',', '.')) || 0;
        };

        // 1. Verifikasi keberadaan elemen modal di dokumen HTML
        let modal = document.getElementById('modal-transaction-detail');
        if (!modal) {
            console.error("Kesalahan: Elemen #modal-transaction-detail tidak ditemukan di index.html.");
            return;
        }

        // 2. PARSE DATA ENKRIPSI TRANSAKSI
        const tobj = JSON.parse(decodeURIComponent(jsonStr));
        const tipeRaw = (safeGetProp(tobj, 'Tipe') || '').toString().trim().toUpperCase();
        const isOut = tipeRaw === 'OUTFLOW';
        const val = safeExtractNumber(safeGetProp(tobj, 'Jumlah'));
        const kategori = safeGetProp(tobj, 'Kategori') || '';
        const akun = safeGetProp(tobj, 'Akun') || '';
        const tglRaw = safeGetProp(tobj, 'Tanggal');
        
        // 3. LOGIKA ALIH BAHASA BILINGUAL
        if (lang === 'id') {
            document.getElementById('dtl-title-text').innerText = 'Detail Transaksi';
            document.getElementById('dtl-cat-label').innerText = 'Kategori';
            document.getElementById('dtl-date-label').innerText = 'Tanggal & Waktu';
            document.getElementById('dtl-acc-label').innerText = 'Sumber Dana';
            document.getElementById('dtl-desc-label').innerText = 'Keterangan';
            document.getElementById('dtl-items-label').innerText = 'Rincian Barang';
        } else {
            document.getElementById('dtl-title-text').innerText = 'Transaction Detail';
            document.getElementById('dtl-cat-label').innerText = 'Category';
            document.getElementById('dtl-date-label').innerText = 'Date & Time';
            document.getElementById('dtl-acc-label').innerText = 'Source of Funds';
            document.getElementById('dtl-desc-label').innerText = 'Description';
            document.getElementById('dtl-items-label').innerText = 'Purchased Items';
        }

        // 4. FORMAT PENANGGALAN MUTASI (WITA)
        let dateStr = '-';
        if (tglRaw) {
            const d = new Date(tglRaw);
            let mName = d.getMonth() + 1;
            if (typeof i18n !== 'undefined' && i18n[lang] && i18n[lang]['month-names']) {
                mName = i18n[lang]['month-names'][d.getMonth()];
            }
            dateStr = `${d.getDate().toString().padStart(2, '0')} ${mName} ${d.getFullYear()} • ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} WITA`;
        }

        // 5. UPDATE ELEMEN VISUAL DATA DATA MUTASI
        document.getElementById('dtl-type-label').innerText = isOut ? (lang === 'id' ? 'Pengeluaran' : 'Expenditure') : (lang === 'id' ? 'Pemasukan' : 'Income');
        
        const amtEl = document.getElementById('dtl-amount');
        amtEl.setAttribute('data-value', val);
        amtEl.innerText = priv ? '********' : safeToRp(val);
        
        if (isOut && kategori !== 'Transfer Keluar' && kategori !== 'Biaya Admin') {
            amtEl.className = "text-2xl font-bold text-red-500 dark:text-red-400 privacy-mask";
        } else if (!isOut && kategori !== 'Transfer Masuk') {
            amtEl.className = "text-2xl font-bold text-green-500 dark:text-green-400 privacy-mask";
        } else {
            amtEl.className = "text-2xl font-bold text-gray-800 dark:text-white privacy-mask";
        }

        document.getElementById('dtl-kategori').innerText = kategori;
        document.getElementById('dtl-tanggal').innerText = dateStr;
        document.getElementById('dtl-akun').innerText = akun;
        document.getElementById('dtl-keterangan').innerText = safeGetProp(tobj, 'Keterangan') || '-';

        // 6. RENDER DAFTAR ITEM NOTA BELANJAAN OCR
        const itemsSection = document.getElementById('dtl-items-section');
        const itemsContainer = document.getElementById('dtl-items-container');
        const items = tobj.items || [];
        
        if (items.length > 0) {
            itemsSection.classList.remove('hidden');
            itemsContainer.innerHTML = '';
            items.forEach(item => {
                const qty = item.qty || 1;
                const hargaSatuan = item.price / qty;
                itemsContainer.innerHTML += `
                    <div class="flex justify-between items-center text-xs py-1.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                        <div class="flex flex-col w-2/3">
                            <span class="text-gray-700 dark:text-gray-200 font-bold uppercase truncate">${item.name}</span>
                            <span class="text-[10px] text-gray-500 font-medium">${qty}x @ ${safeToRp(hargaSatuan)}</span>
                        </div>
                        <span class="text-gray-800 dark:text-gray-100 font-bold text-right text-xs">${safeToRp(item.price)}</span>
                    </div>`;
            });
        } else {
            itemsSection.classList.add('hidden');
            itemsContainer.innerHTML = '';
        }

        // 7. EKSEKUSI TAMPILAN: Hilangkan kelas hidden Tailwind CSS
        modal.classList.remove('hidden');
        
    } catch (e) {
        console.error("Gagal mengeksekusi pop-up detail transaksi:", e);
    }
};
// --- FUNGSI POP-UP DETAIL ASET DENGAN GRAFIK REALTIME HYBRID UNIFIED (APP.JS) --- //
let currentActiveFilter = '1H'; // Menyimpan state filter waktu grafik aset

window.openAssetDetail = function(jsonStr) {
    try {
        const d = JSON.parse(decodeURIComponent(jsonStr));
        const tipeRaw = (getProp(d, 'Tipe') || '').toString().trim().toUpperCase();
        const tipeLabel = getProp(d, 'Tipe Label') || 'Asset';
        const name = getProp(d, 'Nama Aset') || '-';
        const value = extractNumber(getProp(d, 'Nilai'));
        
        // 1. POPULASI IDENTITAS UTAMA ASET
        document.getElementById('porto-detail-name').innerText = name;
        document.getElementById('porto-detail-ticker').innerText = tipeLabel;
        document.getElementById('porto-detail-icon').src = getAccountLogo(name);
        
        const priceEl = document.getElementById('porto-detail-price');
        priceEl.innerText = isPrivate ? '********' : toRp(value);
        priceEl.setAttribute('data-value', value);

        // 2. SIMULASI UNIT & EVALUASI NILAI KEPEMILIKAN
        const mockUnitPrice = value / 1.045; 
        const mockUnits = value / mockUnitPrice;
        
        document.getElementById('porto-detail-units').innerText = isPrivate ? '********' : mockUnits.toFixed(4);
        document.getElementById('porto-detail-units').setAttribute('data-value', mockUnits);

        const valEl = document.getElementById('porto-detail-value');
        valEl.innerText = isPrivate ? '********' : toRp(value);
        valEl.setAttribute('data-value', value);

        // 3. GENERASI DATA STATISTIK PASAR BERDASARKAN SEKTOR ASET
        const mktCapEl = document.getElementById('porto-detail-mktcap');
        const volEl = document.getElementById('porto-detail-vol');
        const supplySec = document.getElementById('circulating-supply-sec');
        const supplyLabel = document.getElementById('porto-detail-supply-label');
        const supplyEl = document.getElementById('porto-detail-supply');

        if (tipeRaw === 'KRIPTO' || tipeRaw === 'SAHAM' || tipeRaw === 'ASET DIGITAL') {
            supplySec.classList.remove('hidden');
            
            const mktCapVal = tipeRaw === 'KRIPTO' ? (value * 85000000) : (value * 35000);
            mktCapEl.innerText = isPrivate ? '********' : toRp(mktCapVal);
            mktCapEl.setAttribute('data-value', mktCapVal);
            
            const volVal = value * 1250;
            volEl.innerText = isPrivate ? '********' : toRp(volVal);
            volEl.setAttribute('data-value', volVal);
            
            if (tipeRaw === 'KRIPTO') {
                supplyLabel.innerText = 'Suplai Beredar';
                const mockSupply = mktCapVal / value;
                supplyEl.innerText = isPrivate ? '********' : mockSupply.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            } else {
                supplyLabel.innerText = 'Total Saham';
                const mockShares = mktCapVal / value;
                supplyEl.innerText = isPrivate ? '********' : mockShares.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
        } else {
            mktCapEl.innerText = '-';
            volEl.innerText = '-';
            supplySec.classList.add('hidden');
        }

        // 4. STRUKTURISASI TOMBOL AKSI MENYESUAIKAN REKENING / INVESTASI
        const actionsSection = document.getElementById('porto-actions-section');
        if (tipeRaw === 'KAS' || tipeRaw === 'BANK' || tipeRaw === 'E-WALLET') {
            actionsSection.innerHTML = `
                <button onclick="closeModal('modal-porto-detail'); openModal('modal-transfer');" class="w-full text-center py-3 bg-[#6342E8] hover:bg-[#5232d3] text-white text-xs font-bold rounded-xl transition shadow-lg flex items-center justify-center gap-2">
                    <span>⇄</span> Transfer
                </button>
                <button onclick="closeModal('modal-porto-detail'); openModal('modal-porto');" class="w-full text-center py-3 bg-gray-100 hover:bg-gray-200 dark:bg-[#252525] dark:hover:bg-[#303030] text-gray-700 dark:text-gray-200 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
                    <span>≡</span> Kelola Akun
                </button>
            `;
        } else {
            actionsSection.innerHTML = `
                <button onclick="closeModal('modal-porto-detail'); openModal('modal-topup');" class="w-full text-center py-3 bg-[#6342E8] hover:bg-[#5232d3] text-white text-xs font-bold rounded-xl transition shadow-lg shadow-[#6342E8]/20 flex items-center justify-center gap-2">
                    <span>↑</span> Beli / Top Up
                </button>
                <button onclick="closeModal('modal-porto-detail'); openModal('modal-withdraw');" class="w-full text-center py-3 bg-gray-100 hover:bg-gray-200 dark:bg-[#252525] dark:hover:bg-[#303030] text-gray-700 dark:text-gray-200 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
                    <span>↓</span> Jual / Tarik
                </button>
            `;
        }

        // 5. RENDER GRAFIK REALTIME AWAL
        renderMockPriceChart(name, tipeRaw, value);
        
        // Buka Modal Fisik
        openModal('modal-porto-detail');
        
    } catch (e) {
        console.error("Gagal memuat detail aset premium:", e);
    }
};

// --- FUNGSI EVENT: FILTER WAKTU GRAFIK --- //
window.setChartFilter = function(filter) {
    currentActiveFilter = filter;
    
    document.querySelectorAll('.time-filter-btn').forEach(btn => btn.classList.remove('active'));
    const targetedBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (targetedBtn) targetedBtn.classList.add('active');
    
    const currentPrice = extractNumber(document.getElementById('porto-detail-price').getAttribute('data-value'));
    renderMockPriceChart(document.getElementById('porto-detail-name').innerText, 'SIMULATION', currentPrice);
};
// =============================================================================
// --- OVERRIDE SYSTEM: DETAIL ASET MULTI-CURRENCY DENGAN LIVE EXCHANGE RATE ---
// =============================================================================

window.currentActiveFilter = window.currentActiveFilter || '1H';
window.currentActiveCurrency = window.currentActiveCurrency || 'IDR'; // Default: Rupiah
window.usdExchangeRate = window.usdExchangeRate || 16250; // Fallback rate jika API terhambat
window.lastAssetData = window.lastAssetData || null;

// Background Worker: Ambil kurs USD terhadap IDR secara live dan real-time dari FinTech API
if (typeof window.hasInitiatedForexFetch === 'undefined') {
    window.hasInitiatedForexFetch = true;
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            if (data && data.rates && data.rates.IDR) {
                window.usdExchangeRate = data.rates.IDR;
                console.log("Fintrack Forex Engine Active: 1 USD = Rp", window.usdExchangeRate);
            }
        })
        .catch(err => console.warn("Forex Engine menggunakan kurs aman karena koneksi API terhambat:", err));
}

window.openAssetDetailModal = function(idAset, simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent) {
    try {
        // Rekam salinan data mentah asli dalam Rupiah ke cache memory
        window.lastAssetData = { idAset, simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent };

        // 1. Populasi Identitas Inti
        const simbolEl = document.getElementById('det-aset-simbol');
        if (simbolEl) simbolEl.innerText = simbol;
        
        const logoEl = document.getElementById('det-aset-logo');
        if (logoEl && typeof getAssetLogoHtml === 'function') {
            logoEl.innerHTML = getAssetLogoHtml(simbol).replace('w-10 h-10', 'w-7 h-7 object-contain rounded-full');
        }

        // 2. Pengikatan Fungsi Klik Tombol Aksi Jual & Beli Asli Sistem Bli Bayu
        const btnJual = document.getElementById('btn-det-jual');
        if (btnJual) {
            btnJual.onclick = () => { 
                if (typeof closeModal === 'function') closeModal('modal-asset-detail'); 
                document.getElementById('modal-asset-detail').classList.add('hidden');
                if (typeof prepareSellAsset === 'function') prepareSellAsset(idAset, simbol, lot, liveHarga); 
            };
        }
        
        const btnBeli = document.getElementById('btn-det-beli');
        if (btnBeli) {
            btnBeli.onclick = () => { 
                if (typeof closeModal === 'function') closeModal('modal-asset-detail'); 
                document.getElementById('modal-asset-detail').classList.add('hidden');
                if (typeof openModal === 'function') openModal('modal-buy-asset'); 
                const formSimbol = document.getElementById('form-asset-simbol');
                if (formSimbol) formSimbol.value = simbol; 
            };
        }

        // 3. Eksekusi Rendering Komponen Berdasarkan Tampilan Kurs Aktif
        window.updateAssetDetailCurrencyView();

        // Tampilkan Modal Utama
        const modalEl = document.getElementById('modal-asset-detail');
        if (modalEl) {
            modalEl.classList.remove('hidden');
            if (typeof openModal === 'function') openModal('modal-asset-detail');
        }
    } catch (e) {
        console.error("Gagal memuat detail aset premium multi-currency:", e);
    }
};

// --- CORE LOGIC: MANAGEMENT CONVERSION VIEW DATA ENGINE --- //
window.updateAssetDetailCurrencyView = function() {
    if (!window.lastAssetData) return;
    const { simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent } = window.lastAssetData;
    const curr = window.currentActiveCurrency;
    const rate = window.usdExchangeRate;
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'id';

    // Helper: Formatter nominal dinamis menyesuaikan mata uang terpilih
    const formatValueByCurrency = function(num) {
        if (curr === 'IDR') {
            return typeof toRp === 'function' ? toRp(num) : 'Rp ' + new Intl.NumberFormat('id-ID').format(num);
        } else {
            const convertedVal = num / rate;
            return '$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(convertedVal);
        }
    };

    // Sinkronisasi Pelokalan Bahasa (ID/EN)
    if (lang === 'id') {
        document.getElementById('lbl-live-price-text').innerText = 'Harga Saat Ini';
        document.getElementById('lbl-position-title').innerText = 'Posisi Anda';
        document.getElementById('lbl-market-stats-title').innerText = 'Statistik Pasar & Imbal Hasil';
        document.getElementById('lbl-mktcap-text').innerText = 'Kapitalisasi Pasar';
        document.getElementById('lbl-volume-text').innerText = 'Volume Perdagangan (24j)';
    } else {
        document.getElementById('lbl-live-price-text').innerText = 'Current Price';
        document.getElementById('lbl-position-title').innerText = 'Your Position';
        document.getElementById('lbl-market-stats-title').innerText = 'Market Statistics & Returns';
        document.getElementById('lbl-mktcap-text').innerText = 'Market Cap';
        document.getElementById('lbl-volume-text').innerText = 'Trading Volume (24h)';
    }

    // Isikan data tekstual finansial terkonversi rapi
    const mask = (typeof isPrivate !== 'undefined' && isPrivate);
    document.getElementById('det-aset-live').innerText = mask ? '********' : formatValueByCurrency(liveHarga);
    document.getElementById('det-aset-lot').innerText = (typeof formatShortNumber === 'function' ? formatShortNumber(lot) : lot) + ' ' + (typeof t === 'function' ? t('unit') : 'Unit');
    document.getElementById('det-aset-avg').innerText = mask ? '********' : formatValueByCurrency(avgHarga);
    document.getElementById('det-aset-invest').innerText = mask ? '********' : formatValueByCurrency(investasi);
    document.getElementById('det-aset-total').innerText = mask ? '********' : formatValueByCurrency(totalVal);

    // Hitung dan hias warna return profit/loss
    let pnlSign = nominalReturn > 0 ? '+' : '';
    let pnlColor = nominalReturn >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400';
    let formattedReturnText = curr === 'IDR' ? 
        (typeof toRp === 'function' ? toRp(Math.abs(nominalReturn)) : 'Rp ' + Math.abs(nominalReturn)) : 
        ('$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Math.abs(nominalReturn) / rate));
    
    let fullReturnString = `${pnlSign}${formattedReturnText} (${pnlSign}${pnlPercent.toFixed(2)}%)`;

    document.getElementById('det-aset-return').innerText = fullReturnString;
    document.getElementById('det-aset-return').className = `text-xs font-bold text-right ${pnlColor}`;
    document.getElementById('det-aset-live-change').innerText = fullReturnString;
    document.getElementById('det-aset-live-change').className = `text-xs font-bold mt-1 ${pnlColor}`;

    // Simulasi data statistik kapitalisasi pasar terkonversi
    const mockMktCap = totalVal * 42000;
    const mockVol = totalVal * 1.35;
    document.getElementById('det-aset-mktcap').innerText = mask ? '********' : formatValueByCurrency(mockMktCap);
    document.getElementById('det-aset-vol').innerText = mask ? '********' : formatValueByCurrency(mockVol);

    // Update kelas visual tombol aktif pada toggle switch pill
    const btnIdr = document.getElementById('currency-btn-idr');
    const btnUsd = document.getElementById('currency-btn-usd');
    if (btnIdr && btnUsd) {
        if (curr === 'IDR') {
            btnIdr.className = "px-2.5 py-1 rounded-full bg-[#6342E8] text-white transition-all duration-200";
            btnUsd.className = "px-2.5 py-1 rounded-full text-gray-400 dark:text-gray-500 transition-all duration-200";
        } else {
            btnIdr.className = "px-2.5 py-1 rounded-full text-gray-400 dark:text-gray-500 transition-all duration-200";
            btnUsd.className = "px-2.5 py-1 rounded-full bg-[#6342E8] text-white transition-all duration-200";
        }
    }

    // Refresh render grafik kurva harga realtime
    renderMockPriceChart(simbol, liveHarga);
    if (typeof applyLanguage === 'function') applyLanguage();
};

// --- INTERACTION EVENT: ACTION SWITCH CURRENCY TOGGLE --- //
window.setCurrencyFilter = function(currency) {
    window.currentActiveCurrency = currency;
    window.updateAssetDetailCurrencyView();
};

// --- EVENT FILTER JANGKA WAKTU GRAFIK --- //
window.setChartFilter = function(filter) {
    window.currentActiveFilter = filter;
    document.querySelectorAll('.time-filter-btn').forEach(btn => btn.classList.remove('active'));
    const targetedBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (targetedBtn) targetedBtn.classList.add('active');
    
    window.updateAssetDetailCurrencyView();
};

// --- GRAPH INJECTION ENGINE UTALITAS CHART.JS --- //
function renderMockPriceChart(assetName, currentPrice) {
    const canvas = document.getElementById('portoChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    if (typeof window.portoChartInstance !== 'undefined' && window.portoChartInstance) {
        window.portoChartInstance.destroy();
    }

    let points = 20; let volatility = 0.02; let daysBack = 1;
    switch(window.currentActiveFilter) {
        case '1H': points = 12; volatility = 0.006; daysBack = 1/24; break;
        case '1D': points = 24; volatility = 0.018; daysBack = 1; break;
        case '1W': points = 14; volatility = 0.035; daysBack = 7; break;
        case '1M': points = 30; volatility = 0.07; daysBack = 30; break;
        case '1Y': points = 52; volatility = 0.18; daysBack = 365; break;
    }

    const mockData = []; let tempPrice = currentPrice;
    for (let i = 0; i < points; i++) {
        const change = (Math.random() - 0.48) * volatility; 
        tempPrice = tempPrice * (1 + change); mockData.unshift(tempPrice);
    }
    mockData[points - 1] = currentPrice; 

    const mockLabels = Array.from({length: points}, (_, i) => i.toString());
    const gradient = ctx.createLinearGradient(0, 0, 0, 160);
    gradient.addColorStop(0, 'rgba(99, 66, 232, 0.25)'); 
    gradient.addColorStop(1, 'rgba(99, 66, 232, 0.0)');  

    if (typeof Chart !== 'undefined') {
        window.portoChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: mockLabels,
                datasets: [{
                    data: mockData, borderColor: '#6342E8', borderWidth: 2, fill: true, backgroundColor: gradient, tension: 0.4, 
                    pointRadius: 0, pointHoverRadius: 5, pointHoverBackgroundColor: '#6342E8', pointHoverBorderColor: 'white', pointHoverBorderWidth: 2
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: { x: { display: false }, y: { display: false } },
                interaction: { mode: 'index', intersect: false }
            }
        });
    }
}
// =============================================================================
// --- OVERRIDE SYSTEM: POP-UP DETAIL ASET & TRANSAKSI MULTI-CURRENCY FINTRACK -
// =============================================================================

window.currentActiveFilter = window.currentActiveFilter || '1H';
window.currentActiveCurrency = window.currentActiveCurrency || 'IDR'; 
window.usdExchangeRate = window.usdExchangeRate || 16250; 
window.lastAssetData = window.lastAssetData || null;

// Background Forex Engine: Ambil kurs live internasional terupdate
if (typeof window.hasInitiatedForexFetch === 'undefined') {
    window.hasInitiatedForexFetch = true;
    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            if (data && data.rates && data.rates.IDR) {
                window.usdExchangeRate = data.rates.IDR;
                console.log("Fintrack Forex Engine Active: 1 USD = Rp", window.usdExchangeRate);
            }
        })
        .catch(err => console.warn("Forex Engine menggunakan rate aman:", err));
}

window.openAssetDetailModal = function(idAset, simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent) {
    try {
        // Rekam salinan data mentah asli ke memori sistem
        window.lastAssetData = { idAset, simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent };

        // 1. Populasi Identitas Inti Pada Header Modal
        const simbolEl = document.getElementById('det-aset-simbol');
        if (simbolEl) simbolEl.innerText = simbol;
        
        const logoEl = document.getElementById('det-aset-logo');
        if (logoEl && typeof getAssetLogoHtml === 'function') {
            logoEl.innerHTML = getAssetLogoHtml(simbol).replace('w-10 h-10', 'w-7 h-7 object-contain rounded-full');
        }

        // 2. Pengikatan Aksi Tombol Beli Mandiri (Bulletproof Injection)
        const btnBeli = document.getElementById('btn-det-beli');
        if (btnBeli) {
            btnBeli.onclick = () => { 
                if (typeof closeModal === 'function') closeModal('modal-asset-detail'); 
                document.getElementById('modal-asset-detail').classList.add('hidden');
                if (typeof openModal === 'function') openModal('modal-buy-asset'); 
                
                // Isi otomatis simbol aset pada kolom form beli
                const formSimbol = document.getElementById('form-asset-simbol');
                if (formSimbol) formSimbol.value = simbol; 
            };
        }
        
        // 3. Pengikatan Aksi Tombol Jual Mandiri (Bulletproof Injection - Mengatasi Masalah Teks SIMBOL)
        const btnJual = document.getElementById('btn-det-jual');
        if (btnJual) {
            btnJual.onclick = () => { 
                // A. Tutup dan amankan modal detail induk
                if (typeof closeModal === 'function') closeModal('modal-asset-detail'); 
                document.getElementById('modal-asset-detail').classList.add('hidden');
                
                // B. Suntikkan teks secara paksa langsung ke elemen ID target modal jual
                const displaySimbol = document.getElementById('sell-asset-simbol-display');
                if (displaySimbol) displaySimbol.innerText = simbol;
                
                const displayMax = document.getElementById('sell-asset-max-display');
                if (displayMax) {
                    displayMax.innerText = typeof formatShortNumber === 'function' ? formatShortNumber(lot) : lot;
                }
                
                // C. Isikan nilai input tersembunyi demi keamanan submit data Fintrack
                const inputId = document.getElementById('form-sell-asset-id');
                if (inputId) inputId.value = idAset;
                
                const inputSimbol = document.getElementById('form-sell-asset-simbol');
                if (inputSimbol) inputSimbol.value = simbol;
                
                const inputHarga = document.getElementById('form-sell-asset-harga');
                if (inputHarga) {
                    // Masukkan estimasi harga live saat ini ke kolom harga jual unit
                    inputHarga.value = typeof toRp === 'function' ? toRp(liveHarga).replace('Rp ', '') : liveHarga;
                }

                // D. Jalankan fungsi persiapan internal jika terdeteksi global
                if (typeof prepareSellAsset === 'function' && prepareSellAsset !== window.prepareSellAsset) {
                    prepareSellAsset(idAset, simbol, lot, liveHarga);
                }

                // E. Munculkan modal jual melayang di tengah layar
                const sellModal = document.getElementById('modal-sell-asset');
                if (sellModal) {
                    sellModal.classList.remove('hidden');
                    sellModal.classList.remove('hidden-page');
                    if (typeof openModal === 'function') openModal('modal-sell-asset');
                }
            };
        }

        // 4. Jalankan Perhitungan Kurs Default Awal
        window.updateAssetDetailCurrencyView();

        // Tampilkan Modal Detail Utama
        const modalEl = document.getElementById('modal-asset-detail');
        if (modalEl) {
            modalEl.classList.remove('hidden');
            if (typeof openModal === 'function') openModal('modal-asset-detail');
        }
    } catch (e) {
        console.error("Gagal mengeksekusi detail aset premium multi-currency:", e);
    }
};

// --- CALCULATOR ENGINE: CONVERSION AND LOCALIZATION VIEW --- //
window.updateAssetDetailCurrencyView = function() {
    if (!window.lastAssetData) return;
    const { simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent } = window.lastAssetData;
    const curr = window.currentActiveCurrency;
    const rate = window.usdExchangeRate;
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'id';

    const formatValueByCurrency = function(num) {
        if (curr === 'IDR') {
            return typeof toRp === 'function' ? toRp(num) : 'Rp ' + new Intl.NumberFormat('id-ID').format(num);
        } else {
            return '$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num / rate);
        }
    };

    if (lang === 'id') {
        document.getElementById('lbl-live-price-text').innerText = 'Harga Saat Ini';
        document.getElementById('lbl-position-title').innerText = 'Posisi Anda';
        document.getElementById('lbl-market-stats-title').innerText = 'Statistik Pasar & Imbal Hasil';
        document.getElementById('lbl-mktcap-text').innerText = 'Kapitalisasi Pasar';
        document.getElementById('lbl-volume-text').innerText = 'Volume Perdagangan (24j)';
    } else {
        document.getElementById('lbl-live-price-text').innerText = 'Current Price';
        document.getElementById('lbl-position-title').innerText = 'Your Position';
        document.getElementById('lbl-market-stats-title').innerText = 'Market Statistics & Returns';
        document.getElementById('lbl-mktcap-text').innerText = 'Market Cap';
        document.getElementById('lbl-volume-text').innerText = 'Trading Volume (24h)';
    }

    const mask = (typeof isPrivate !== 'undefined' && isPrivate);
    document.getElementById('det-aset-live').innerText = mask ? '********' : formatValueByCurrency(liveHarga);
    document.getElementById('det-aset-lot').innerText = (typeof formatShortNumber === 'function' ? formatShortNumber(lot) : lot) + ' ' + (typeof t === 'function' ? t('unit') : 'Unit');
    document.getElementById('det-aset-avg').innerText = mask ? '********' : formatValueByCurrency(avgHarga);
    document.getElementById('det-aset-invest').innerText = mask ? '********' : formatValueByCurrency(investasi);
    document.getElementById('det-aset-total').innerText = mask ? '********' : formatValueByCurrency(totalVal);

    let pnlSign = nominalReturn > 0 ? '+' : '';
    let pnlColor = nominalReturn >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400';
    let formattedReturnText = curr === 'IDR' ? 
        (typeof toRp === 'function' ? toRp(Math.abs(nominalReturn)) : 'Rp ' + Math.abs(nominalReturn)) : 
        ('$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Math.abs(nominalReturn) / rate));
    
    let fullReturnString = `${pnlSign}${formattedReturnText} (${pnlSign}${pnlPercent.toFixed(2)}%)`;

    document.getElementById('det-aset-return').innerText = fullReturnString;
    document.getElementById('det-aset-return').className = `text-xs font-bold text-right ${pnlColor}`;
    document.getElementById('det-aset-live-change').innerText = fullReturnString;
    document.getElementById('det-aset-live-change').className = `text-xs font-bold mt-1 ${pnlColor}`;

    const mockMktCap = totalVal * 42000;
    const mockVol = totalVal * 1.35;
    document.getElementById('det-aset-mktcap').innerText = mask ? '********' : formatValueByCurrency(mockMktCap);
    document.getElementById('det-aset-vol').innerText = mask ? '********' : formatValueByCurrency(mockVol);

    const btnIdr = document.getElementById('currency-btn-idr');
    const btnUsd = document.getElementById('currency-btn-usd');
    if (btnIdr && btnUsd) {
        if (curr === 'IDR') {
            btnIdr.className = "px-2.5 py-1 rounded-full bg-[#6342E8] text-white transition-all duration-200";
            btnUsd.className = "px-2.5 py-1 rounded-full text-gray-400 dark:text-gray-500 transition-all duration-200";
        } else {
            btnIdr.className = "px-2.5 py-1 rounded-full text-gray-400 dark:text-gray-500 transition-all duration-200";
            btnUsd.className = "px-2.5 py-1 rounded-full bg-[#6342E8] text-white transition-all duration-200";
        }
    }

    renderMockPriceChart(simbol, liveHarga);
    if (typeof applyLanguage === 'function') applyLanguage();
};

// --- CORE COMPATIBILITY BRIDGE FOR MODAL OPEN/CLOSE --- //
if (typeof window.originalOpenModal === 'undefined') {
    window.originalOpenModal = window.openModal;
    window.openModal = function(id) {
        if (typeof window.originalOpenModal === 'function') window.originalOpenModal(id);
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('hidden');
            el.classList.remove('hidden-page');
            el.style.display = ''; 
        }
    };
}

if (typeof window.originalCloseModal === 'undefined') {
    window.originalCloseModal = window.closeModal;
    window.closeModal = function(id) {
        if (typeof window.originalCloseModal === 'function') window.originalCloseModal(id);
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    };
}

window.setCurrencyFilter = function(currency) {
    window.currentActiveCurrency = currency;
    window.updateAssetDetailCurrencyView();
};

window.setChartFilter = function(filter) {
    window.currentActiveFilter = filter;
    document.querySelectorAll('.time-filter-btn').forEach(btn => btn.classList.remove('active'));
    const targetedBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (targetedBtn) targetedBtn.classList.add('active');
    window.updateAssetDetailCurrencyView();
};

function renderMockPriceChart(assetName, currentPrice) {
    const canvas = document.getElementById('portoChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    if (typeof window.portoChartInstance !== 'undefined' && window.portoChartInstance) {
        window.portoChartInstance.destroy();
    }

    let points = 20; let volatility = 0.02; let daysBack = 1;
    switch(window.currentActiveFilter) {
        case '1H': points = 12; volatility = 0.006; daysBack = 1/24; break;
        case '1D': points = 24; volatility = 0.018; daysBack = 1; break;
        case '1W': points = 14; volatility = 0.035; daysBack = 7; break;
        case '1M': points = 30; volatility = 0.07; daysBack = 30; break;
        case '1Y': points = 52; volatility = 0.18; daysBack = 365; break;
    }

    const mockData = []; let tempPrice = currentPrice;
    for (let i = 0; i < points; i++) {
        const change = (Math.random() - 0.48) * volatility; 
        tempPrice = tempPrice * (1 + change); mockData.unshift(tempPrice);
    }
    mockData[points - 1] = currentPrice; 

    const mockLabels = Array.from({length: points}, (_, i) => i.toString());
    const gradient = ctx.createLinearGradient(0, 0, 0, 160);
    gradient.addColorStop(0, 'rgba(99, 66, 232, 0.25)'); 
    gradient.addColorStop(1, 'rgba(99, 66, 232, 0.0)');  

    if (typeof Chart !== 'undefined') {
        window.portoChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: mockLabels,
                datasets: [{
                    data: mockData, borderColor: '#6342E8', borderWidth: 2, fill: true, backgroundColor: gradient, tension: 0.4, 
                    pointRadius: 0, pointHoverRadius: 5, pointHoverBackgroundColor: '#6342E8', pointHoverBorderColor: 'white', pointHoverBorderWidth: 2
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: { x: { display: false }, y: { display: false } },
                interaction: { mode: 'index', intersect: false }
            }
        });
    }
}
// =============================================================================
// --- ABSOLUTE SPLASH SCREEN SHIELD (ANTI POP-IN V5 - RAPID TRANSLATOR) -------
// =============================================================================

(function() {
    const loader = document.getElementById('loading-overlay');
    if (!loader) return;

    let isTimerFinished = false;

    // RADAR BAHASA CEPAT: Pindai mode bahasa Fintrack setiap 50 milidetik
    const loaderText = document.getElementById('loading-text');
    if (loaderText) {
        const langScanner = setInterval(() => {
            let activeLang = 'id'; // Setelan bawaan
            
            // Sapu bersih seluruh kemungkinan variabel penyimpan bahasa Fintrack
            if (typeof currentLang !== 'undefined') {
                activeLang = currentLang;
            } else if (localStorage.getItem('fintrack_lang')) {
                activeLang = localStorage.getItem('fintrack_lang');
            } else if (localStorage.getItem('language')) {
                activeLang = localStorage.getItem('language');
            } else if (localStorage.getItem('lang')) {
                activeLang = localStorage.getItem('lang');
            }

            // Eksekusi tembak teks seketika
            if (activeLang === 'en') {
                loaderText.innerText = loaderText.getAttribute('data-en');
            } else {
                loaderText.innerText = loaderText.getAttribute('data-id');
            }
            
            // Matikan radar jika layar loading sudah ditutup (hemat RAM)
            if (isTimerFinished) clearInterval(langScanner);
        }, 50);
    }

    // Fungsi penutup tirai
    function closeLoader() {
        isTimerFinished = true; 
        
        loader.classList.remove('opacity-100');
        loader.classList.add('opacity-0');
        
        setTimeout(() => {
            loader.classList.add('hidden', 'pointer-events-none');
        }, 500);
    }

    // PERISAI MUTLAK (MutationObserver Lock)
    const shieldObserver = new MutationObserver((mutations) => {
        if (!isTimerFinished) {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    if (loader.classList.contains('hidden')) {
                        loader.classList.remove('hidden', 'pointer-events-none', 'opacity-0');
                        loader.classList.add('opacity-100');
                    }
                }
            });
        }
    });

    shieldObserver.observe(loader, { attributes: true, attributeFilter: ['class'] });

    // Kunci Utama: Tahan Layar Penuh Selama 1.8 Detik
    window.addEventListener('load', () => {
        setTimeout(() => {
            shieldObserver.disconnect(); 
            closeLoader();               
        }, 5000); 
    });

    // Failsafe darurat 4 detik
    setTimeout(() => {
        if (!isTimerFinished) {
            shieldObserver.disconnect();
            closeLoader();
        }
    }, 4000);
})();
// =============================================================================
// --- RECURRING SUBSCRIPTION CONTROLLER: DETAIL & DELETE ENGINE ---------------
// =============================================================================

// Fungsi global untuk membuka modal detail langganan (Dipanggil saat kartu diklik)
window.openRecurringDetailModal = function(id, name, amount, freq, date, account) {
    try {
        // 1. Populasi Identitas ke Form Modal Detail
        const elName = document.getElementById('det-rec-name');
        if (elName) elName.innerText = name;
        
        const elAmount = document.getElementById('det-rec-amount');
        if (elAmount) elAmount.innerText = typeof toRp === 'function' ? toRp(amount) : 'Rp ' + amount;
        
        const elFreq = document.getElementById('det-rec-freq');
        if (elFreq) {
            // Terapkan terjemahan otomatis untuk siklus
            const isEng = (typeof currentLang !== 'undefined' && currentLang === 'en') || (localStorage.getItem('lang') === 'en');
            if (freq.toLowerCase().includes('bulan') || freq.toLowerCase().includes('month')) {
                elFreq.innerText = isEng ? 'Monthly' : 'Bulanan';
            } else if (freq.toLowerCase().includes('tahun') || freq.toLowerCase().includes('year')) {
                elFreq.innerText = isEng ? 'Yearly' : 'Tahunan';
            } else {
                elFreq.innerText = freq;
            }
        }
        
        const elDate = document.getElementById('det-rec-date');
        if (elDate) elDate.innerText = date;
        
        const elAccount = document.getElementById('det-rec-account');
        if (elAccount) elAccount.innerText = account;
        
        const elId = document.getElementById('det-rec-id');
        if (elId) elId.value = id;

        // 2. Terjemahkan otomatis seluruh komponen kustom modal ini
        if (typeof window.applyLanguage === 'function') window.applyLanguage();

        // 3. Tampilkan Pop-Up ke Layar
        const recModal = document.getElementById('modal-rec-detail');
        if (recModal) {
            recModal.classList.remove('hidden', 'hidden-page');
            if (typeof openModal === 'function') openModal('modal-rec-detail');
        }
    } catch (error) {
        console.error("Gagal memuat detail langganan:", error);
    }
};

// Fungsi eksekusi perintah Hapus dari dalam modal detail
window.deleteRecurringAction = function() {
    const idInput = document.getElementById('det-rec-id');
    if (!idInput || !idInput.value) return;
    
    const idToDelete = idInput.value;
    
    // Dialog konfirmasi penghapusan berlapis ganda
    const isEng = (typeof currentLang !== 'undefined' && currentLang === 'en') || (localStorage.getItem('lang') === 'en');
    const confirmMsg = isEng ? "Are you sure you want to delete this subscription?" : "Anda yakin ingin menghapus langganan ini?";
    
    if (confirm(confirmMsg)) {
        // Tutup modal secara paksa
        const recModal = document.getElementById('modal-rec-detail');
        if (recModal) recModal.classList.add('hidden');
        if (typeof closeModal === 'function') closeModal('modal-rec-detail');
        
        // Panggil fungsi penghapus asli dari core sistem Fintrack Bli Bayu
        if (typeof deleteRecurring === 'function') {
            deleteRecurring(idToDelete);
        } else {
            console.warn("Fungsi deleteRecurring() tidak ditemukan di core sistem Bli!");
        }
    }
};
// =============================================================================
// --- NATIVE TRANSLATION ENGINE: INTERCEPTOR UNTUK CUSTOM LABEL BILINGUAL ---
// =============================================================================

// Fungsi ini akan membajak fungsi ganti bahasa Fintrack dan mengikutsertakan teks kustom baru
if (typeof window.originalApplyLanguage === 'undefined' && typeof applyLanguage === 'function') {
    window.originalApplyLanguage = applyLanguage;
    window.applyLanguage = function() {
        // 1. Jalankan fungsi terjemahan bawaan asli sistem
        if (typeof window.originalApplyLanguage === 'function') {
            window.originalApplyLanguage();
        }
        
        // 2. Terjemahkan juga seluruh komponen UI kustom baru secara otomatis
        const lang = (typeof currentLang !== 'undefined') ? currentLang : 'id';
        
        document.querySelectorAll('.lang-custom').forEach(el => {
            const textToSet = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
            if (textToSet) {
                // Jika elemen tersebut berupa kolom ketik (input placeholder)
                if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                    el.placeholder = textToSet;
                } else {
                    // Jika elemen berupa label teks biasa
                    el.innerText = textToSet;
                }
            }
        });
    };
    
    // Injeksi otomatis saat aplikasi pertama kali termuat
    window.applyLanguage();
}
// =============================================================================
// --- ACCOUNT CONTROLLER: DETAIL & SMART COPY CLIPBOARD ENGINE ----------------
// =============================================================================

// Fungsi penangkap dan pembuka modal detail akun (Dilengkapi Pendeteksi Uang Tunai)
window.openAccountDetailModal = function(name, holder, number, balance, logoHtml) {
    try {
        // Render logo bank dengan ukurannya yang sedikit dibesarkan
        const iconContainer = document.getElementById('det-acc-icon-container');
        if (iconContainer) {
            iconContainer.innerHTML = decodeURIComponent(logoHtml).replace('w-10 h-10', 'w-16 h-16 p-2 border-2 shadow-sm');
        }
        
        document.getElementById('det-acc-name').innerText = name;
        document.getElementById('det-acc-holder').innerText = holder ? holder : '-';
        document.getElementById('det-acc-number').innerText = number ? number : '-';
        
        // Render saldo dengan pelindung privasi mata
        const balEl = document.getElementById('det-acc-balance');
        if (balEl) {
            balEl.setAttribute('data-value', balance);
            const isPriv = (typeof isPrivate !== 'undefined') ? isPrivate : false;
            balEl.innerText = isPriv ? '********' : (typeof toRp === 'function' ? toRp(balance) : 'Rp ' + balance);
        }
        
        // FITUR CERDAS: Sembunyikan tombol salin jika akun berupa uang tunai
        const copyBtn = document.getElementById('btn-copy-acc');
        if (copyBtn) {
            const nameLower = name.toLowerCase();
            // Cek apakah nama akun mengandung kata 'tunai', 'cash', atau 'dompet'
            if (nameLower.includes('tunai') || nameLower.includes('cash') || nameLower.includes('dompet')) {
                copyBtn.classList.add('hidden'); // Sembunyikan tombol
            } else {
                copyBtn.classList.remove('hidden'); // Tampilkan tombol untuk bank/ewallet
                
                // Kembalikan tulisan tombol copy ke setelan awal
                const copyBtnText = document.querySelector('#btn-copy-acc span');
                if (copyBtnText) {
                    const isEng = (typeof currentLang !== 'undefined' && currentLang === 'en') || (localStorage.getItem('lang') === 'en');
                    copyBtnText.innerText = isEng ? 'Copy Account Info' : 'Salin Informasi Rekening';
                }
            }
        }

        // Terapkan paksa mesin penerjemah pada pop-up baru
        if (typeof window.applyLanguage === 'function') window.applyLanguage();
        
        // Tampilkan modal ke layar
        const modal = document.getElementById('modal-account-detail');
        if (modal) {
            modal.classList.remove('hidden', 'hidden-page');
            if (typeof openModal === 'function') openModal('modal-account-detail');
        }
    } catch (e) {
        console.error("Gagal membuka detail rekening: ", e);
    }
};

// Fungsi mesin pencetak otomatis ke Clipboard (Copy-Paste)
// Fungsi mesin pencetak otomatis ke Clipboard (Copy-Paste) - Format WhatsApp (Bold & Italic)
window.copyAccountInfo = function() {
    const bank = document.getElementById('det-acc-name').innerText;
    const nama = document.getElementById('det-acc-holder').innerText;
    const norek = document.getElementById('det-acc-number').innerText;
    
    // Cegah copy jika data di backend Bli belum disi sama sekali
    if(nama === '-' && norek === '-') {
        const isEng = (typeof currentLang !== 'undefined' && currentLang === 'en') || (localStorage.getItem('lang') === 'en');
        alert(isEng ? "Account details not yet added in backend." : "Detail rekening belum ditambahkan di database.");
        return;
    }

    // Merakit format template teks (Gunakan * untuk Bold dan _ untuk Italic khas WhatsApp/Chat)
    const textToCopy = `*${bank}*\n_${nama}_\n${norek}`;
    
    // Tembakkan ke Clipboard HP/PC
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Animasi visual sukses copy
        const copyBtnText = document.querySelector('#btn-copy-acc span');
        if (copyBtnText) {
            const isEng = (typeof currentLang !== 'undefined' && currentLang === 'en') || (localStorage.getItem('lang') === 'en');
            copyBtnText.innerText = isEng ? 'Copied!' : 'Berhasil Disalin!';
            
            // Kembalikan teks tombol setelah 2.5 detik
            setTimeout(() => {
                copyBtnText.innerText = isEng ? 'Copy Account Info' : 'Salin Informasi Rekening';
            }, 5000);
        }
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
        alert('Gagal menyalin teks ke clipboard. Izin browser mungkin belum diberikan.');
    });
};