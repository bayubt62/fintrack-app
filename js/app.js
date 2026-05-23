/**
 * FINTRACK ENTERPRISE V2.9.2 - CORE JAVASCRIPT
 * Architecture: Unified Shell, Data Caching & Smart Routing
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
        "lvl-2-name": "Liquidity Protection Phase", "lvl-2-desc": "Hutang telah lunas. Membangun bantalan kas darurat minimal 6x rata-rata pengeluaran bulanan.",
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

window.isAdvanceMode = false;

window.currentActiveFilter = window.currentActiveFilter || '1H';
window.currentActiveCurrency = window.currentActiveCurrency || 'IDR'; 
window.usdExchangeRate = window.usdExchangeRate || 16250; 
window.lastAssetData = window.lastAssetData || null;
let exportSelectedYear = new Date().getFullYear();

// ==========================================
// BACKGROUND ENGINES & INITIALIZERS
// ==========================================

if (typeof window.hasInitiatedForexFetch === 'undefined') {
    window.hasInitiatedForexFetch = true;
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json()).then(data => {
        if (data && data.rates && data.rates.IDR) window.usdExchangeRate = data.rates.IDR;
    }).catch(err => console.warn("Forex API fallback active."));
}

(function initSplashScreenShield() {
    const loader = document.getElementById('loading-overlay');
    if (!loader) return;
    let isTimerFinished = false;
    const loaderText = document.getElementById('loading-text');
    
    if (loaderText) {
        const langScanner = setInterval(() => {
            let activeLang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('fintrack_lang') || 'id');
            loaderText.innerText = activeLang === 'en' ? loaderText.getAttribute('data-en') : loaderText.getAttribute('data-id');
            if (isTimerFinished) clearInterval(langScanner);
        }, 50);
    }
    
    function closeLoader() {
        isTimerFinished = true; 
        loader.classList.remove('opacity-100'); loader.classList.add('opacity-0');
        setTimeout(() => { loader.classList.add('hidden', 'pointer-events-none'); }, 500);
    }
    
    const shieldObserver = new MutationObserver((mutations) => {
        if (!isTimerFinished) mutations.forEach((m) => { if (m.attributeName === 'class' && loader.classList.contains('hidden')) { loader.classList.remove('hidden', 'pointer-events-none', 'opacity-0'); loader.classList.add('opacity-100'); } });
    });
    
    shieldObserver.observe(loader, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('load', () => setTimeout(() => { shieldObserver.disconnect(); closeLoader(); }, 5000));
    setTimeout(() => { if (!isTimerFinished) { shieldObserver.disconnect(); closeLoader(); } }, 4000);
})();

function initApp() {
    applySystemTheme();
    if (window.matchMedia) { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme); }
    if(!localStorage.getItem('fintrack_lang')) localStorage.setItem('fintrack_lang', 'en'); 
    currentLang = localStorage.getItem('fintrack_lang');
    applyLanguage();
    sessionEmail = localStorage.getItem('fintrack_session_email');
    sessionName = localStorage.getItem('fintrack_session_name');
    initPTR(); 
    if(sessionEmail) {
        document.getElementById('user-display').innerText = sessionName + "!";
        document.getElementById('app-wrapper').classList.remove('hidden-page');
        showPage('dashboard'); fetchAllData();
    } else { document.getElementById('login-page').classList.remove('hidden-page'); }
}

function applySystemTheme() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark'); } 
    else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light'); }
}

let ptrStartY = 0, ptrCurrentY = 0, isPtrPulling = false, isPtrRefreshing = false;
function initPTR() {
    const ptrEl = document.getElementById('ptr-indicator');
    const coin = ptrEl.querySelector('.coin-spinner');
    document.addEventListener('touchstart', (e) => {
        if (window.scrollY <= 0 && !isPtrRefreshing) { ptrStartY = e.touches[0].clientY; isPtrPulling = true; ptrEl.style.transition = 'none'; }
    }, { passive: true });
    document.addEventListener('touchmove', (e) => {
        if (!isPtrPulling || isPtrRefreshing) return;
        ptrCurrentY = e.touches[0].clientY; const pullDist = ptrCurrentY - ptrStartY;
        if (pullDist > 0 && window.scrollY <= 0) {
            const moveY = Math.min(pullDist * 0.4, 120); ptrEl.style.transform = `translateY(${moveY - 80}px)`; 
            if (coin) { coin.style.animation = 'none'; coin.style.transform = `rotateY(${pullDist * 3}deg)`; }
        } else if (pullDist < 0) isPtrPulling = false; 
    }, { passive: true });
    document.addEventListener('touchend', async () => {
        if (!isPtrPulling || isPtrRefreshing) return;
        isPtrPulling = false; const pullDist = ptrCurrentY - ptrStartY;
        ptrEl.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        if (pullDist > 100 && window.scrollY <= 0 && sessionEmail) {
            isPtrRefreshing = true; ptrEl.style.transform = `translateY(30px)`; 
            if (coin) { coin.style.transform = ''; coin.style.animation = 'flipCoin 1s infinite linear'; }
            try {
                const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'getData', email: sessionEmail }) }); 
                const result = await response.json(); if(result.status === 'success') { appData = result.data; renderAllHTMLData(); } 
            } catch (e) { console.error("Sync Error:", e); } finally { ptrEl.style.transform = `translateY(-80px)`; setTimeout(() => { isPtrRefreshing = false; }, 300); }
        } else {
            ptrEl.style.transform = `translateY(-80px)`; 
            if (coin) { coin.style.transform = ''; coin.style.animation = 'flipCoin 1.5s infinite linear'; }
        }
        ptrStartY = 0; ptrCurrentY = 0;
    });
}

// ==========================================
// UTILITIES & HELPERS
// ==========================================

function t(key) { return i18n[currentLang][key] || key; }

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
    if (inputElement && inputElement.id === 'form-trx-amount') validateTrxForm();
}

function validateTrxForm() {
    const amountInput = document.getElementById('form-trx-amount');
    const btn = document.getElementById('form-trx-submit-btn');
    if (!amountInput || !btn) return;
    if (extractNumber(amountInput.value) > 0) {
        btn.disabled = false; btn.classList.remove('bg-gray-300', 'dark:bg-gray-700', 'text-gray-400', 'dark:text-gray-500', 'cursor-not-allowed', 'shadow-none'); btn.classList.add('bg-[#6342E8]', 'hover:bg-[#5232d3]', 'text-white', 'shadow-lg', 'shadow-[#6342E8]/15');
    } else {
        btn.disabled = true; btn.classList.add('bg-gray-300', 'dark:bg-gray-700', 'text-gray-400', 'dark:text-gray-500', 'cursor-not-allowed', 'shadow-none'); btn.classList.remove('bg-[#6342E8]', 'hover:bg-[#5232d3]', 'text-white', 'shadow-lg', 'shadow-[#6342E8]/15');
    }
}

function formatShortNumber(num) { if(num >= 1000000) return (num/1000000).toFixed(1).replace('.0','') + 'M'; if(num >= 1000) return (num/1000).toFixed(1).replace('.0','') + 'K'; return num; }
function toRp(num) { return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num); }

function getAccountLogo(accountName) {
    if (!accountName) return null; const name = accountName.toLowerCase();
    if (name.includes('bni')) return 'Logo_Bank/BNI_Logo.png'; if (name.includes('bri')) return 'Logo_Bank/BRI_Logo.png'; if (name.includes('mandiri')) return 'Logo_Bank/MANDIRI_Logo.png'; if (name.includes('shopee')) return 'Logo_Bank/ShopeePay_Logo.png'; if (name.includes('gopay')) return 'Logo_Bank/Gopay_Logo.png'; if (name.includes('ovo')) return 'Logo_Bank/OVO_Logo.png'; if (name.includes('dana')) return 'Logo_Bank/Dana_Logo.png'; if (name.includes('link')) return 'Logo_Bank/LinkAja_Logo.png'; if (name.includes('tunai') || name.includes('cash') || name.includes('dompet')) return 'Logo_Bank/Cash_Logo.png';
    return null; 
}

function getCategoryIcon(cat) { const map = { "Makanan": "🍽️", "Hiburan": "🎬", "Tagihan": "🧾", "Tabungan & Investasi": "📈", "Kewajiban & Sosial": "🧾", "Transportasi": "🚗", "Gaji & Pemasukan": "💼", "Hasil Usaha": "🏪", "Pemberian": "🎁", "Biaya Admin": "🏦" }; return map[cat] || "🏷️"; }

function getAssetLogoHtml(simbol) {
    let s = simbol.toUpperCase().trim(), cryptoBase = s.replace('USD', '').replace('IDR', '').toLowerCase();
    let imgUrl = `https://assets.coincap.io/assets/icons/${cryptoBase}@2x.png`, fallbackUrl = `https://ui-avatars.com/api/?name=${s.substring(0,2)}&background=6342E8&color=fff&rounded=true&bold=true`;
    if(s.length === 4 && !s.includes('USD') && !s.includes('IDR')) imgUrl = `https://ui-avatars.com/api/?name=${s}&background=1e293b&color=fff&rounded=true&bold=true`; 
    return `<img src="${imgUrl}" onerror="this.onerror=null; this.src='${fallbackUrl}';" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">`;
}

function showLoading(show) { 
    const el = document.getElementById('loading-overlay'); 
    if(show) { el.classList.remove('hidden', 'opacity-0', 'pointer-events-none'); void el.offsetWidth; el.classList.add('opacity-100'); } 
    else { el.classList.remove('opacity-100'); el.classList.add('opacity-0', 'pointer-events-none'); setTimeout(() => el.classList.add('hidden'), 300); }
}

// --- FUNGSI ADVANCE SETTING UNTUK ITEM SCAN ---

window.toggleAdvanceMode = function() {
    window.isAdvanceMode = !window.isAdvanceMode;
    const btn = document.getElementById('btn-advance-mode');
    if (btn) {
        if (window.isAdvanceMode) {
            btn.classList.add('bg-[#6342E8]', 'text-white');
            btn.classList.remove('text-[#6342E8]');
        } else {
            btn.classList.remove('bg-[#6342E8]', 'text-white');
            btn.classList.add('text-[#6342E8]');
        }
    }
    window.renderScannedItems();
};

window.updateScannedItem = function(index, field, value) {
    if (!currentScannedItems[index]) return;
    if (field === 'price' || field === 'qty') {
        currentScannedItems[index][field] = parseFloat(value) || 0;
    } else {
        currentScannedItems[index][field] = value;
    }
    if (field === 'price') {
        let totalBelanja = currentScannedItems.reduce((sum, item) => sum + (item.price || 0), 0);
        const amountInput = document.getElementById('form-trx-amount');
        if(amountInput) {
            amountInput.value = totalBelanja;
            formatRupiahInput(amountInput);
        }
    }
};

window.removeScannedItem = function(index) {
    currentScannedItems.splice(index, 1);
    window.renderScannedItems();
    let totalBelanja = currentScannedItems.reduce((sum, item) => sum + (item.price || 0), 0);
    const amountInput = document.getElementById('form-trx-amount');
    if(amountInput) {
        amountInput.value = totalBelanja;
        formatRupiahInput(amountInput);
    }
};

window.renderScannedItems = function() {
    const section = document.getElementById('itemListSection');
    const container = document.getElementById('itemsContainer');
    if(!container || !section) return;
    container.innerHTML = '';
    
    if (!currentScannedItems || currentScannedItems.length === 0) {
        section.classList.add('hidden');
        return;
    }
    section.classList.remove('hidden');

    const typeEl = document.getElementById('form-trx-tipe');
    const type = typeEl ? typeEl.value : 'OUTFLOW';
    const catOptionsList = (type === 'INFLOW' ? KATEGORI_INFLOW : KATEGORI_OUTFLOW);
    const mainCatEl = document.getElementById('form-trx-category');
    const mainCat = (mainCatEl ? mainCatEl.value : null) || catOptionsList[0];

    let totalBelanja = 0;

    currentScannedItems.forEach((item, index) => {
        const qty = item.qty || 1;
        const price = item.price || 0;
        totalBelanja += price;
        const hargaSatuan = qty > 0 ? price / qty : 0;
        const itemCat = item.category || mainCat; 

        if (window.isAdvanceMode) {
            let catSelectHtml = `<select onchange="window.updateScannedItem(${index}, 'category', this.value)" class="w-full mt-1.5 bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-lg px-2 py-1.5 text-[10px] font-bold outline-none text-gray-700 dark:text-gray-300">`;
            catOptionsList.forEach(opt => {
                catSelectHtml += `<option value="${opt}" ${itemCat === opt ? 'selected' : ''}>${opt}</option>`;
            });
            catSelectHtml += `</select>`;

            container.innerHTML += `
            <div class="flex flex-col gap-1 py-2 border-b border-gray-200 dark:border-gray-700 last:border-0 relative">
                <div class="flex justify-between items-start gap-2">
                    <div class="flex-1">
                        <input type="text" onchange="window.updateScannedItem(${index}, 'name', this.value)" value="${item.name}" class="w-full bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-lg px-2 py-1.5 text-xs font-bold uppercase text-gray-800 dark:text-gray-200 outline-none focus:border-[#6342E8] transition">
                        ${catSelectHtml}
                    </div>
                    <div class="w-14">
                        <input type="number" onchange="window.updateScannedItem(${index}, 'qty', this.value)" value="${qty}" class="w-full bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-lg px-1 py-1.5 text-[10px] text-center text-gray-800 dark:text-gray-200 outline-none focus:border-[#6342E8] transition">
                    </div>
                    <div class="w-24">
                        <input type="number" onchange="window.updateScannedItem(${index}, 'price', this.value)" value="${price}" class="w-full bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-lg px-2 py-1.5 text-xs font-bold text-right text-gray-800 dark:text-gray-200 outline-none focus:border-[#6342E8] transition">
                    </div>
                    <button onclick="window.removeScannedItem(${index})" class="text-red-500 bg-red-50 dark:bg-red-900/30 p-2 rounded-lg hover:bg-red-100 transition active:scale-95"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                </div>
            </div>`;
        } else {
            container.innerHTML += `
            <div class="flex justify-between items-center text-xs py-1.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                <div class="flex flex-col w-2/3 pr-2">
                    <span class="text-gray-700 dark:text-gray-200 font-bold uppercase truncate">${item.name}</span>
                    <span class="text-[10px] text-gray-500 font-medium">${qty}x @ ${toRp(hargaSatuan)}</span>
                    ${item.category && item.category !== mainCat ? `<span class="text-[9px] text-[#6342E8] font-bold mt-0.5">Kat: ${item.category}</span>` : ''}
                </div>
                <span class="text-gray-800 dark:text-gray-100 font-bold whitespace-nowrap text-right text-sm">${toRp(price)}</span>
            </div>`;
        }
    });

    if (window.isAdvanceMode) {
        const amountInput = document.getElementById('form-trx-amount');
        if(amountInput) {
            amountInput.value = totalBelanja;
            formatRupiahInput(amountInput);
        }
    }
};

// ==========================================
// CORE APP ROUTING & MODAL ENGINE
// ==========================================

window.showPage = async function(pageId) {
    document.querySelectorAll('.nav-btn').forEach(btn => { btn.classList.remove('active-nav', 'text-[#6342E8]'); btn.classList.add('text-gray-400'); });
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
                // Pencari Cerdas: Cek di root directory dulu, kalau gagal cari di folder pages/
                let res = await fetch(`${pageId}.html?t=${new Date().getTime()}`);
                if (!res.ok) res = await fetch(`pages/${pageId}.html?t=${new Date().getTime()}`);
                
                if (res.ok) {
                    const htmlText = await res.text();
                    // Proteksi jika server malah mengembalikan halaman 404 teks
                    if (htmlText.includes("Cannot GET") || htmlText.includes("404 Not Found")) {
                        throw new Error("File missing");
                    }
                    window.pageCache[pageId] = htmlText;
                } else {
                    throw new Error("HTTP error " + res.status);
                }
            } catch (e) {
                mainContent.innerHTML = `
                    <div class="flex flex-col items-center justify-center pt-24 text-center">
                        <div class="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4 shadow-sm">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        </div>
                        <h2 class="text-lg font-bold text-gray-800 dark:text-white">Gagal Memuat Halaman</h2>
                        <p class="text-xs text-gray-500 mt-2 max-w-[250px]">File <b>${pageId}.html</b> tidak ditemukan. Pastikan file berada di tempat yang sama dengan index.html Anda.</p>
                    </div>`;
                mainContent.classList.add('active-page'); mainContent.style.opacity = '1'; mainContent.style.transform = 'translateY(0) scale(1)';
                showLoading(false);
                return;
            }
            showLoading(false);
        }
        
        mainContent.innerHTML = window.pageCache[pageId];
        applyLanguage();
        
        try {
            if(pageId === 'dashboard') { renderDashboard(); renderAccounts(); renderRecurring(); }
            if(pageId === 'calendar') { renderCalendar(); }
            if(pageId === 'portfolio') { renderPortfolioScreen(true); }
            if(pageId === 'history') { renderHistoryScreen(true); }
        } catch (e) { console.error("Render Error:", e); }
        
        applyPrivacyMasks();
        mainContent.classList.add('active-page');
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0) scale(1)';
    }, 150);
};

window.openModal = function(id, type = null) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('hidden-page', 'hidden'); el.style.display = ''; }
    
    if(id === 'modal-trx') {
        document.getElementById('modal-trx-title').innerText = type === 'INFLOW' ? t('mod-trx-in') : t('mod-trx-out');
        document.getElementById('form-trx-tipe').value = type; 
        const catSel = document.getElementById('form-trx-category'); catSel.innerHTML = '';
        (type === 'INFLOW' ? KATEGORI_INFLOW : KATEGORI_OUTFLOW).forEach(opt => catSel.innerHTML += `<option value="${opt}">${opt}</option>`);
        const now = new Date();
        document.getElementById('form-trx-date').value = now.toISOString().split('T')[0];
        document.getElementById('form-trx-time').value = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        currentScannedItems = [];
        window.isAdvanceMode = false;
        const btnAdv = document.getElementById('btn-advance-mode');
        if(btnAdv) { btnAdv.classList.remove('bg-[#6342E8]', 'text-white'); btnAdv.classList.add('text-[#6342E8]'); }
        const itemListSec = document.getElementById('itemListSection'); if (itemListSec) itemListSec.classList.add('hidden');
        validateTrxForm();
    } else if (id === 'modal-export-pdf') renderExportModal();
    else if (id === 'modal-debt-history') renderDebtHistory();
};

window.closeModal = function(id, forceClose = false) { 
    if (id === 'modal-trx' && !forceClose) {
        const confirmMsg = i18n[currentLang]['confirm-close-trx'] || "Are you sure you want to close? Unsaved data will be lost.";
        if (!confirm(confirmMsg)) return;
    }
    
    const el = document.getElementById(id);
    if (el) { el.classList.add('hidden-page', 'hidden'); }
    
    if (id === 'modal-trx') {
        document.getElementById('form-trx-amount').value = ''; document.getElementById('form-trx-desc').value = '';
        if(document.getElementById('form-trx-admin')) document.getElementById('form-trx-admin').value = '';
        currentScannedItems = [];
        window.isAdvanceMode = false;
        const btnAdv = document.getElementById('btn-advance-mode');
        if(btnAdv) { btnAdv.classList.remove('bg-[#6342E8]', 'text-white'); btnAdv.classList.add('text-[#6342E8]'); }
        const itemListSec = document.getElementById('itemListSection'); if (itemListSec) itemListSec.classList.add('hidden');
        const now = new Date(); document.getElementById('form-trx-date').value = now.toISOString().split('T')[0]; document.getElementById('form-trx-time').value = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    }
};

window.toggleLanguage = function() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('fintrack_lang', currentLang);
    applyLanguage(); updateLanguageSwitchUI();
    if (sessionEmail) {
        renderAllHTMLData(); 
        const modExport = document.getElementById('modal-export-pdf'); if(modExport && !modExport.classList.contains('hidden')) renderExportModal();
        const modDebtHist = document.getElementById('modal-debt-history'); if(modDebtHist && !modDebtHist.classList.contains('hidden')) renderDebtHistory();
    }
};

window.updateLanguageSwitchUI = function() {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('fintrack_lang') || 'id');
    const btnId = document.getElementById('lang-btn-id'), btnEn = document.getElementById('lang-btn-en');
    if (btnId && btnEn) {
        if (lang === 'en') { btnEn.className = "px-2.5 py-1.5 rounded-full bg-[#6342E8] text-white shadow-sm transition-all duration-200"; btnId.className = "px-2.5 py-1.5 rounded-full text-gray-400 dark:text-gray-500 transition-all duration-200"; } 
        else { btnId.className = "px-2.5 py-1.5 rounded-full bg-[#6342E8] text-white shadow-sm transition-all duration-200"; btnEn.className = "px-2.5 py-1.5 rounded-full text-gray-400 dark:text-gray-500 transition-all duration-200"; }
    }
};
setTimeout(window.updateLanguageSwitchUI, 200);

window.applyLanguage = function() {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'id';
    const langIcon = document.getElementById('lang-icon'); if(langIcon) langIcon.innerText = lang.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = i18n[lang][key];
            else if (el.tagName === 'OPTION') el.innerText = i18n[lang][key];
            else if (el.innerHTML.includes('<b>')) el.innerHTML = i18n[lang][key];
            else el.innerText = i18n[lang][key];
        }
    });
    const lblHello = document.getElementById('lbl-hello'); if(lblHello) lblHello.innerText = t('txt-hello');
    
    document.querySelectorAll('.lang-custom').forEach(el => {
        const textToSet = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
        if (textToSet) { if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) { el.placeholder = textToSet; } else { el.innerText = textToSet; } }
    });
};

window.togglePrivacy = function() {
    isPrivate = !isPrivate; applyPrivacyMasks();
    const icon = document.getElementById('privacy-icon'); if(icon) { if(isPrivate) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>'; else icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>'; }
};

window.applyPrivacyMasks = function() { document.querySelectorAll('.privacy-mask').forEach(el => { const val = extractNumber(el.getAttribute('data-value') || 0); el.innerText = isPrivate ? '********' : toRp(val); }); };

// ==========================================
// API TRANSACTIONS & CORE DB LOGIC
// ==========================================

async function handleLogin() {
    const email = document.getElementById('login-email').value.trim(), password = document.getElementById('login-password').value.trim();
    if(!email || !password) return; showLoading(true);
    try {
        const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'login', email: email, password: password }) }); const result = await response.json();
        if(result.status === 'success') {
            localStorage.setItem('fintrack_session_email', result.email); localStorage.setItem('fintrack_session_name', result.name);
            sessionEmail = result.email; sessionName = result.name; document.getElementById('user-display').innerText = sessionName + "!";
            document.getElementById('login-page').classList.add('hidden-page'); document.getElementById('app-wrapper').classList.remove('hidden-page');
            showPage('dashboard'); await fetchAllData();
        } else { alert(currentLang === 'id' ? 'Login gagal.' : 'Login failed.'); }
    } catch(e) { alert(currentLang === 'id' ? 'Kesalahan koneksi.' : 'Connection error.'); } finally { showLoading(false); }
}

function handleLogout() { localStorage.removeItem('fintrack_session_email'); localStorage.removeItem('fintrack_session_name'); location.reload(); }

async function fetchAllData() { 
    showLoading(true); 
    try { const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'getData', email: sessionEmail }) }); const result = await response.json(); if(result.status === 'success') { appData = result.data; renderAllHTMLData(); } } catch (e) { console.error("DB Loss:", e); } finally { showLoading(false); } 
}

async function apiPost(payload) { 
    showLoading(true); 
    try { const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify(payload) }); const result = await response.json(); if(result.status === 'success') return true; else { alert(result.message); return false; } } catch(e) { return false; } finally { showLoading(false); } 
}

async function submitTransaction() {
    const btn = document.getElementById('form-trx-submit-btn'); if (btn && btn.disabled) return; 
    const amount = extractNumber(document.getElementById('form-trx-amount').value), account = document.getElementById('form-trx-account').value, type = document.getElementById('form-trx-tipe').value, category = document.getElementById('form-trx-category').value, admin = extractNumber(document.getElementById('form-trx-admin').value) || 0, desc = document.getElementById('form-trx-desc').value;
    const combinedDateTime = `${document.getElementById('form-trx-date').value} ${document.getElementById('form-trx-time').value}`;
    if(amount <= 0 || !account || !category) return;

    if (btn) { btn.disabled = true; btn.classList.add('bg-gray-300', 'dark:bg-gray-700', 'text-gray-400', 'cursor-not-allowed', 'shadow-none'); btn.classList.remove('bg-[#6342E8]', 'text-white', 'shadow-lg'); }
    closeModal('modal-trx', true); 

    // ID Grup unik untuk nota ini (untuk menghubungkan transaksi pecah)
    let receiptRefId = "REF-" + new Date().getTime();
    
    let itemsByCategory = {};
    let hasCustomCategory = false;

    if (currentScannedItems && currentScannedItems.length > 0) {
        currentScannedItems.forEach(item => {
            let cat = item.category || category; 
            if (cat !== category) hasCustomCategory = true;
            if (!itemsByCategory[cat]) itemsByCategory[cat] = { total: 0, items: [] };
            itemsByCategory[cat].items.push(item);
            itemsByCategory[cat].total += (item.price || 0);
        });
    }

    if (window.isAdvanceMode && hasCustomCategory) {
        showLoading(true);
        let allSuccess = true;
        
        for (const cat in itemsByCategory) {
            const group = itemsByCategory[cat];
            let success = await apiPost({
                action: 'addTransaction', email: sessionEmail, tipe: type, akun: account,
                jumlah: group.total, kategori: cat, keterangan: desc,
                tanggal: combinedDateTime, itemsDetail: JSON.stringify(group.items), refId: receiptRefId
            });
            if (!success) allSuccess = false;
        }

        if (allSuccess) {
            if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: account, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin: ${desc}`, tanggal: combinedDateTime, refId: receiptRefId })});
            await fetchAllData();
        } else {
            if (btn) btn.disabled = false;
        }
        showLoading(false);
        return; 
    }
    
    // Single transaction path
    if(await apiPost({ action: 'addTransaction', email: sessionEmail, tipe: type, akun: account, jumlah: amount, kategori: category, keterangan: desc, tanggal: combinedDateTime, itemsDetail: JSON.stringify(currentScannedItems), refId: receiptRefId })) { 
        if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: account, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin: ${desc}`, tanggal: combinedDateTime, refId: receiptRefId })});
        await fetchAllData(); 
    } else { if (btn) btn.disabled = false; }
}

async function submitTransfer() {
    const fromAcc = document.getElementById('form-tf-from').value, toAcc = document.getElementById('form-tf-to').value, amount = extractNumber(document.getElementById('form-tf-amount').value), admin = extractNumber(document.getElementById('form-tf-admin').value) || 0, descRaw = document.getElementById('form-tf-desc').value;
    if(amount <= 0 || !fromAcc || !toAcc || fromAcc === toAcc) return;
    let transferKeluar = amount, transferMasuk = amount;
    if (fromAcc.toUpperCase().includes('RDN') && admin > 0) { if (amount <= admin) return alert(currentLang === 'id' ? "Nominal transfer harus lebih besar dari biaya admin." : "Transfer amount must be greater than admin fee."); transferKeluar = amount - admin; transferMasuk = amount - admin; }
    closeModal('modal-transfer'); showLoading(true);
    try {
        await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: fromAcc, jumlah: transferKeluar, kategori: 'Transfer Keluar', keterangan: descRaw ? descRaw : `Tf ke ${toAcc}` })});
        await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'INFLOW', akun: toAcc, jumlah: transferMasuk, kategori: 'Transfer Masuk', keterangan: descRaw ? descRaw : `Tf dari ${fromAcc}` })});
        if (admin > 0) await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: fromAcc, jumlah: admin, kategori: 'Biaya Admin', keterangan: `Admin tf ke ${toAcc}` })});
        document.getElementById('form-tf-amount').value = ''; document.getElementById('form-tf-admin').value = ''; document.getElementById('form-tf-desc').value = '';
        await fetchAllData(); 
    } catch(e) {} finally { showLoading(false); }
}

async function submitRecurring() {
    const name = document.getElementById('form-rec-name').value, amount = extractNumber(document.getElementById('form-rec-amount').value), type = document.getElementById('form-rec-tipe').value, date = document.getElementById('form-rec-date').value, account = document.getElementById('form-rec-account').value;
    if(!name || amount <= 0 || !date || !account) return;
    if(await apiPost({ action: 'addRecurring', email: sessionEmail, nama: name, nominal: amount, frekuensi: type, tgl_tagihan: date, akun: account })) { closeModal('modal-recurring'); await fetchAllData(); }
}

async function payRecurring(nama, nominal, akun) {
    if(!confirm(currentLang === 'id' ? `Yakin bayar tagihan ${nama} sebesar ${toRp(nominal)} dari ${akun}?` : `Are you sure you want to pay ${nama} bill of ${toRp(nominal)} from ${akun}?`)) return;
    const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === akun);
    if(accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal')) < nominal) return alert(currentLang === 'id' ? "Saldo tidak mencukupi." : "Insufficient balance.");
    const now = new Date(), combinedDateTime = now.toISOString().split('T')[0] + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    showLoading(true);
    try { await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: akun, jumlah: nominal, kategori: 'Tagihan', keterangan: `Tagihan Berulang: ${nama}`, tanggal: combinedDateTime })}); await fetchAllData(); } catch(e) { console.error(e); } finally { showLoading(false); }
}

window.deleteRecurringAction = async function() {
    const id = document.getElementById('det-rec-id').value; if(!id) return;
    if(!confirm(currentLang === 'id' ? 'Yakin ingin menghapus langganan ini?' : 'Are you sure you want to delete this subscription?')) return;
    closeModal('modal-rec-detail'); showLoading(true);
    try { await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'deleteRecurring', email: sessionEmail, idRec: id }) }); await fetchAllData(); } catch(e) {} finally { showLoading(false); }
};

async function submitGoal() { const name = document.getElementById('form-goal-name').value, amount = extractNumber(document.getElementById('form-goal-amount').value); if(!name || amount <= 0) return; if(await apiPost({ action: 'addGoal', email: sessionEmail, nama: name, target: amount })) { closeModal('modal-goal'); await fetchAllData(); } }
async function submitDebt() { const name = document.getElementById('form-debt-name').value, amount = extractNumber(document.getElementById('form-debt-amount').value); if(!name || amount <= 0) return; if(await apiPost({ action: 'addDebt', email: sessionEmail, tipe: document.getElementById('form-debt-tipe').value, kontak: name, jumlah: amount })) { closeModal('modal-debt'); await fetchAllData(); } }

function preparePayDebt(nama, tipe, sisa) {
    const debtItem = (appData.M_Debt || []).find(d => getProp(d, 'Kontak', 'Nama', 'Keterangan') === nama && getProp(d, 'Tipe') === tipe && extractNumber(getProp(d, 'Sisa', 'Sisa Saldo', 'Jumlah')) === sisa), idDebt = debtItem ? getProp(debtItem, 'ID_Debt', 'ID Debt') : '';
    document.getElementById('form-pay-debt-id').value = idDebt; document.getElementById('form-pay-debt-name').value = nama; document.getElementById('form-pay-debt-tipe').value = tipe; document.getElementById('form-pay-debt-max').value = sisa;
    document.getElementById('pay-debt-name-display').innerText = nama; document.getElementById('pay-debt-sisa-display').innerText = toRp(sisa);
    const isUtang = tipe === 'UTANG'; document.getElementById('mod-pay-debt-title').innerText = isUtang ? t('title-pay-debt') : t('title-recv-debt'); document.getElementById('txt-pay-debt-desc').innerText = isUtang ? t('desc-pay-debt') : t('desc-recv-debt'); document.getElementById('btn-pay-debt-submit').innerText = isUtang ? t('btn-pay-debt') : t('btn-recv-debt'); document.getElementById('form-pay-debt-account').innerHTML = document.getElementById('form-trx-account').innerHTML; 
    openModal('modal-pay-debt');
}

async function submitPayDebt() {
    const idDebt = document.getElementById('form-pay-debt-id').value, nama = document.getElementById('form-pay-debt-name').value, tipe = document.getElementById('form-pay-debt-tipe').value, maxSisa = parseFloat(document.getElementById('form-pay-debt-max').value), amount = extractNumber(document.getElementById('form-pay-debt-amount').value), akun = document.getElementById('form-pay-debt-account').value;
    if (amount <= 0 || !akun || amount > maxSisa || !idDebt) { alert(currentLang === 'id' ? "Nominal tidak valid atau melebihi sisa." : "Invalid amount or exceeds remaining balance."); return; }
    if (tipe === 'UTANG') { const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === akun); if(accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal')) < amount) return alert(currentLang === 'id' ? "Saldo tidak mencukupi." : "Insufficient balance."); }
    closeModal('modal-pay-debt'); showLoading(true);
    try { await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'payDebt', email: sessionEmail, idDebt: idDebt, nominal: amount, akun: akun }) }); document.getElementById('form-pay-debt-amount').value = ''; await fetchAllData(); } catch(e) { console.error(e); } finally { showLoading(false); }
}

window.toggleDebtHistoryTab = function(tab) {
    debtHistoryTab = tab;
    const btnActive = document.getElementById('tab-debt-active');
    const btnInactive = document.getElementById('tab-debt-inactive');
    
    if(btnActive && btnInactive) {
        if(tab === 'ACTIVE') {
            btnActive.classList.add('toggle-active', 'bg-[#6342E8]', 'text-white');
            btnActive.classList.remove('text-gray-500', 'dark:text-gray-400');
            btnInactive.classList.remove('toggle-active', 'bg-[#6342E8]', 'text-white');
            btnInactive.classList.add('text-gray-500', 'dark:text-gray-400');
        } else {
            btnInactive.classList.add('toggle-active', 'bg-[#6342E8]', 'text-white');
            btnInactive.classList.remove('text-gray-500', 'dark:text-gray-400');
            btnActive.classList.remove('toggle-active', 'bg-[#6342E8]', 'text-white');
            btnActive.classList.add('text-gray-500', 'dark:text-gray-400');
        }
    }
    renderDebtHistory();
};

window.renderDebtHistory = function() {
    const container = document.getElementById('debt-history-list-container');
    if(!container) return;

    const allDebts = appData.M_Debt || [];
    const filteredDebts = allDebts.filter(d => {
        const sisa = extractNumber(getProp(d, 'Sisa', 'Sisa Saldo', 'Jumlah'));
        const status = (getProp(d, 'Status') || 'ACTIVE').toString().trim().toUpperCase();
        
        if (debtHistoryTab === 'ACTIVE') {
            return status !== 'COMPLETED' && sisa > 0;
        } else {
            return status === 'COMPLETED' || sisa <= 0;
        }
    });

    if (filteredDebts.length === 0) {
        container.innerHTML = `<p class="text-center text-xs text-gray-400 py-6">${t('no-data-period')}</p>`;
        return;
    }

    let html = '';
    filteredDebts.forEach(d => {
        const idDebt = getProp(d, 'ID_Debt', 'ID Debt', 'ID') || '';
        const nama = getProp(d, 'Kontak', 'Nama', 'Keterangan') || 'Unknown';
        const tipe = (getProp(d, 'Tipe') || '').toString().trim().toUpperCase();
        
        const sisa = extractNumber(getProp(d, 'Sisa', 'Sisa Saldo'));
        const totalAwal = extractNumber(getProp(d, 'Jumlah_Awal', 'Total', 'Jumlah')); 
        
        const paymentTrxs = (appData.T_Transaksi || []).filter(tx => {
            const txRefId = getProp(tx, 'Ref_ID', 'Ref ID', 'Ref_Id', 'Ref_id');
            if (txRefId && txRefId !== '') {
                return String(txRefId) === String(idDebt);
            }
            const txDesc = (getProp(tx, 'Keterangan') || '').toLowerCase();
            const txCat = (getProp(tx, 'Kategori') || '').toLowerCase();
            return txDesc.includes(nama.toLowerCase()) && (txCat.includes('hutang') || txCat.includes('piutang') || txDesc.includes('bayar')) && !txRefId;
        });

        const totalDibayar = paymentTrxs.reduce((sum, tx) => sum + extractNumber(getProp(tx, 'Jumlah')), 0);
        const actualTotal = totalAwal > 0 ? totalAwal : (sisa + totalDibayar);

        const isUtang = tipe === 'UTANG';
        const typeLabel = isUtang ? t('txt-mydebt') : t('txt-receivable');
        const colorClass = isUtang ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400';
        const bgClass = isUtang ? 'bg-red-50 dark:bg-red-900/20' : 'bg-green-50 dark:bg-green-900/20';
        
        const lang = currentLang;
        const lblTotal = lang === 'en' ? 'Total' : 'Total';
        const lblPaid = lang === 'en' ? 'Paid' : 'Dibayar';

        paymentTrxs.sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime());

        let trxsHtml = '';
        if (paymentTrxs.length > 0) {
            trxsHtml += `<div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/60 space-y-2">`;
            paymentTrxs.forEach(tx => {
                const txDateRaw = getProp(tx, 'Tanggal');
                const txDateObj = txDateRaw ? new Date(txDateRaw) : null;
                const txDate = txDateObj ? `${txDateObj.getDate().toString().padStart(2, '0')} ${i18n[currentLang]['month-names'][txDateObj.getMonth()].substring(0,3)} ${txDateObj.getFullYear()}` : '-';
                const txNominal = extractNumber(getProp(tx, 'Jumlah'));
                
                trxsHtml += `
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] text-gray-500 dark:text-gray-400">${txDate}</span>
                        <span class="text-[10px] font-bold text-gray-700 dark:text-gray-300 privacy-mask" data-value="${txNominal}">${isPrivate ? '********' : toRp(txNominal)}</span>
                    </div>
                `;
            });
            trxsHtml += `</div>`;
        } else {
            const noHist = lang === 'en' ? 'No payment history' : 'Belum ada riwayat pembayaran';
            trxsHtml += `<div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/60"><p class="text-[10px] text-gray-400 text-center italic">${noHist}</p></div>`;
        }

        html += `
            <div class="bg-white dark:bg-[#1e1e1e] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition hover:shadow-md">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <p class="text-sm font-bold dark:text-gray-200">${nama}</p>
                        <p class="text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-1 ${bgClass} ${colorClass}">${typeLabel}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">${t('txt-sisa')}</p>
                        <p class="text-sm font-black ${colorClass} privacy-mask" data-value="${sisa}">${isPrivate ? '********' : toRp(sisa)}</p>
                    </div>
                </div>
                <div class="flex justify-between items-center text-[10px] text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#2d2d2d]/50 p-2 rounded-xl mt-2">
                    <span>${lblTotal}: <strong class="privacy-mask dark:text-gray-200" data-value="${actualTotal}">${isPrivate ? '********' : toRp(actualTotal)}</strong></span>
                    <span>${lblPaid}: <strong class="privacy-mask dark:text-gray-200" data-value="${totalDibayar}">${isPrivate ? '********' : toRp(totalDibayar)}</strong></span>
                </div>
                ${trxsHtml}
            </div>
        `;
    });
    
    container.innerHTML = html;
    applyPrivacyMasks();
};

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
    if(actionType === 'add') { const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === account); if(accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal', 'Saldo Awal')) < amount) return alert(currentLang === 'id' ? "Saldo tidak mencukupi." : "Insufficient balance."); }
    showLoading(true);
    try {
        const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'manageGoalFunds', email: sessionEmail, namaGoal: activeGoalName, tipeAksi: actionType, nominal: amount, isAchieved: isAchieved, akun: account }) });
        const result = await res.json();
        if (result.status === 'success') {
            const now = new Date(), combinedDateTime = now.toISOString().split('T')[0] + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
            if (actionType === 'add') { await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'OUTFLOW', akun: account, jumlah: amount, kategori: 'Tabungan & Investasi', keterangan: `Menabung Target: ${activeGoalName}`, tanggal: combinedDateTime })}); } 
            else if (actionType === 'withdraw') { await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'addTransaction', email: sessionEmail, tipe: 'INFLOW', akun: account, jumlah: amount, kategori: 'Tabungan & Investasi', keterangan: `Pencairan Target: ${activeGoalName}`, tanggal: combinedDateTime })}); }
            closeModal('modal-withdraw-goal'); closeModal('modal-add-savings'); document.getElementById('form-withdraw-amount').value = ''; document.getElementById('form-add-savings-amount').value = ''; await fetchAllData(); 
        } else { alert(result.message); }
    } catch(e) { console.error(e); } finally { showLoading(false); }
}

async function processReceiptImage(e) {
    const file = e.target.files[0]; if (!file) return;
    const loadingTextEl = document.getElementById('loading-text'); loadingTextEl.innerText = t('txt-analyze'); showLoading(true);
    try {
        const compressedBase64 = await compressImage(file, 800, 0.6); loadingTextEl.innerText = t('txt-extract');
        const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'scanReceipt', email: sessionEmail, imageB64: compressedBase64 }) }); const result = await response.json();
        if (result.status === 'success') {
            let merchant = result.data.merchant; if (merchant === "TOKO TIDAK TERBACA") merchant = t('txt-unknown-merchant'); const total = result.data.total;
            openModal('modal-trx', 'OUTFLOW'); document.getElementById('form-trx-desc').value = merchant; const amountInput = document.getElementById('form-trx-amount'); amountInput.value = total; formatRupiahInput(amountInput); 
            document.getElementById('form-trx-date').value = result.data.date || new Date().toISOString().split('T')[0]; const now = new Date(); document.getElementById('form-trx-time').value = result.data.time || (now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0'));
            
            // PERBAIKAN: Mengalihkan render ke fungsi renderScannedItems untuk dukungan Advance Mode
            currentScannedItems = result.data.items || [];
            window.isAdvanceMode = false;
            const btnAdv = document.getElementById('btn-advance-mode');
            if(btnAdv) { btnAdv.classList.remove('bg-[#6342E8]', 'text-white'); btnAdv.classList.add('text-[#6342E8]'); }
            window.renderScannedItems();
            
            const amountContainer = document.getElementById('form-trx-amount-container'), currencyLabel = document.getElementById('form-trx-currency');
            amountContainer.classList.remove('bg-white', 'dark:bg-[#1e1e1e]'); amountContainer.classList.add('bg-purple-100', 'dark:bg-purple-900/50'); amountInput.classList.add('animate-pulse'); currencyLabel.classList.add('animate-pulse');
            setTimeout(() => { amountContainer.classList.add('bg-white', 'dark:bg-[#1e1e1e]'); amountContainer.classList.remove('bg-purple-100', 'dark:bg-purple-900/50'); amountInput.classList.remove('animate-pulse'); currencyLabel.classList.remove('animate-pulse'); }, 2000);
        } else { alert(t('err-scan-fail') + result.message); }
    } catch (err) { console.error(err); alert(t('err-scan-sys')); } finally { loadingTextEl.innerText = t('sync'); showLoading(false); e.target.value = ''; }
}

function compressImage(file, maxWidth, quality) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.readAsDataURL(file); reader.onload = event => { const img = new Image(); img.src = event.target.result; img.onload = () => { const canvas = document.createElement('canvas'); let width = img.width, height = img.height; if (width > maxWidth) { height = Math.round((height * maxWidth) / width); width = maxWidth; } canvas.width = width; canvas.height = height; const ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0, width, height); resolve(canvas.toDataURL('image/jpeg', quality)); }; img.onerror = error => reject(error); }; reader.onerror = error => reject(error); }); }

// ==========================================
// RENDER DATA & COMPONENT LOGIC
// ==========================================

function renderAllHTMLData() { 
    try { renderDashboard(); renderAccounts(); renderGoals(); renderRecurring(); renderPortfolioScreen(false); renderHistoryScreen(false); renderCalendar(); } catch(e) { console.error("Data Render Engine Error:", e); } 
    applyPrivacyMasks(); checkAndUpdateLevel();
}

function renderDashboard() {
    const balEl = document.getElementById('main-balance'); if(!balEl) return; 
    let totalBalance = 0; (appData.M_Akun || []).forEach(acc => { let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun'); if (namaAkun && namaAkun.toUpperCase().includes('RDN')) return; let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal'); totalBalance += extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); });
    balEl.setAttribute('data-value', totalBalance); balEl.innerText = isPrivate ? '********' : toRp(totalBalance);
    let inc = 0, exp = 0; const currentMonth = new Date().getMonth(), currentYear = new Date().getFullYear();
    (appData.T_Transaksi || []).forEach(t => { const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return; const tgl = new Date(tglRaw); if(tgl.getMonth() === currentMonth && tgl.getFullYear() === currentYear) { const val = extractNumber(getProp(t, 'Jumlah')), tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = (getProp(t, 'Kategori') || '').toString().trim(); if(tipe === 'INFLOW' && kategori !== 'Transfer Masuk') inc += val; if(tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') exp += val; } });
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

function renderAccounts() {
    const container = document.getElementById('accounts-list'), selectTrx = document.getElementById('form-trx-account'), selectTfFrom = document.getElementById('form-tf-from'), selectTfTo = document.getElementById('form-tf-to'), selAst = document.getElementById('form-asset-account'), selSellAst = document.getElementById('form-sell-asset-account'), selWdGoal = document.getElementById('form-withdraw-account'), selAddGoal = document.getElementById('form-add-savings-account'), selRec = document.getElementById('form-rec-account'), selExport = document.getElementById('export-pdf-account');
    let accounts = appData.M_Akun || [];
    let sortedAccounts = accounts.map(acc => { 
        const namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun') || 'Akun', tipeAkun = getProp(acc, 'Tipe_Akun', 'Tipe Akun') || '', initial = namaAkun.substring(0, 2).toUpperCase(), valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal'), nominal = extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); 
        const atasNama = getProp(acc, 'Atas_Nama', 'Atas Nama') || '', noRek = getProp(acc, 'Nomor_Rekening', 'Nomor Rekening', 'No_Rekening', 'No Rekening', 'Rekening') || '';
        return { acc, namaAkun, tipeAkun, initial, nominal, atasNama, noRek }; 
    }).sort((a, b) => b.nominal - a.nominal);
    
    let html = '', optsAll = '', optsRegular = '', optsExport = `<option value="ALL">${t('opt-all-accounts')}</option>`;
    sortedAccounts.forEach(item => {
        const isRdn = item.namaAkun.toUpperCase().includes('RDN'), logoSrc = getAccountLogo(item.namaAkun);
        const iconHtml = logoSrc ? `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">` : `<div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-xs">${item.initial}</div>`;
        const encodedIconHtml = encodeURIComponent(iconHtml);
        if (!isRdn) {
            html += `<div onclick="window.openAccountDetailModal('${item.namaAkun}', '${item.atasNama}', '${item.noRek}', ${item.nominal}, '${encodedIconHtml}')" class="cursor-pointer flex items-center justify-between p-4 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] active:scale-[0.98] transition-all duration-200"><div class="flex items-center gap-3">${iconHtml}<div><p class="text-sm font-bold">${item.namaAkun}</p><p class="text-[10px] text-gray-500">${item.tipeAkun}</p></div></div><p class="text-sm font-bold privacy-mask" data-value="${item.nominal}">${isPrivate?'********':toRp(item.nominal)}</p></div>`;
        }
        optsAll += `<option value="${item.namaAkun}">${item.namaAkun}</option>`; optsExport += `<option value="${item.namaAkun}">${item.namaAkun}</option>`; if (!isRdn) optsRegular += `<option value="${item.namaAkun}">${item.namaAkun}</option>`;
    });
    if(container) container.innerHTML = accounts.length === 0 ? `<p class="p-6 text-center text-xs text-gray-400">${t('no-acc')}</p>` : html; 
    if(selectTrx) selectTrx.innerHTML = optsRegular; if(selectTfFrom) selectTfFrom.innerHTML = optsAll; if(selectTfTo) selectTfTo.innerHTML = optsAll; if(selAst) selAst.innerHTML = optsAll; if(selWdGoal) selWdGoal.innerHTML = optsRegular; if(selAddGoal) selAddGoal.innerHTML = optsRegular; if(selSellAst) selSellAst.innerHTML = optsAll; if(selRec) selRec.innerHTML = optsRegular; if(selExport) selExport.innerHTML = optsExport;
}

window.openAccountDetailModal = function(name, holder, number, balance, logoHtml) {
    const iconContainer = document.getElementById('det-acc-icon-container'); if (iconContainer) { iconContainer.innerHTML = decodeURIComponent(logoHtml).replace('w-10 h-10', 'w-16 h-16 p-2 border-2 shadow-sm'); }
    document.getElementById('det-acc-name').innerText = name; document.getElementById('det-acc-holder').innerText = holder ? holder : '-'; document.getElementById('det-acc-number').innerText = number ? number : '-';
    const balEl = document.getElementById('det-acc-balance'); if (balEl) { balEl.setAttribute('data-value', balance); balEl.innerText = isPrivate ? '********' : toRp(balance); }
    const copyBtn = document.getElementById('btn-copy-acc');
    if (copyBtn) {
        const nameLower = name.toLowerCase();
        if (nameLower.includes('tunai') || nameLower.includes('cash') || nameLower.includes('dompet')) { copyBtn.classList.add('hidden'); } 
        else { copyBtn.classList.remove('hidden'); const copyBtnText = document.querySelector('#btn-copy-acc span'); if (copyBtnText) { copyBtnText.innerText = (currentLang === 'en' ? 'Copy Account Info' : 'Salin Informasi Rekening'); } }
    }
    openModal('modal-account-detail');
};

window.copyAccountInfo = function() {
    const bank = document.getElementById('det-acc-name').innerText, nama = document.getElementById('det-acc-holder').innerText, norek = document.getElementById('det-acc-number').innerText;
    if(nama === '-' && norek === '-') { alert(currentLang === 'en' ? "Account details not yet added in backend." : "Detail rekening belum ditambahkan di database."); return; }
    navigator.clipboard.writeText(`*${bank}*\n_${nama}_\n${norek}`).then(() => {
        const btn = document.getElementById('btn-copy-acc'); const origText = btn.innerHTML;
        btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ${currentLang === 'en' ? 'Copied!' : 'Berhasil Disalin!'}`;
        btn.classList.add('bg-green-500'); btn.classList.remove('bg-[#6342E8]');
        setTimeout(() => { btn.innerHTML = origText; btn.classList.remove('bg-green-500'); btn.classList.add('bg-[#6342E8]'); }, 2000);
    });
};

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

function prepareGoalAction(actionType, namaGoal) {
    activeGoalName = namaGoal;
    if(actionType === 'add') { document.getElementById('add-savings-goal-name').innerText = namaGoal; openModal('modal-add-savings'); } 
    else if(actionType === 'withdraw') { document.getElementById('withdraw-goal-name-display').innerText = namaGoal; openModal('modal-withdraw-goal'); }
}

function renderRecurring() {
    const container = document.getElementById('recurring-list'); if(!container) return;
    const recs = appData.M_Recurring || []; if(recs.length === 0) { return container.innerHTML = `<div class="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center"><p class="text-xs text-gray-400 italic">${t('no-rec')}</p></div>`; }
    let html = ''; const now = new Date(), currentMonth = now.getMonth(), currentYear = now.getFullYear();
    recs.forEach(r => {
        const idRec = getProp(r, 'ID_Recurring', 'ID', 'Id') || '', nama = getProp(r, 'Nama') || '-', nominal = extractNumber(getProp(r, 'Nominal')), frekuensi = getProp(r, 'Frekuensi') || 'Bulanan', akun = getProp(r, 'Akun_Sumber', 'Akun'), tglTagihan = getProp(r, 'Tgl_Tagihan') || 1;
        let isPaid = false;
        (appData.T_Transaksi || []).forEach(tobj => {
            const tglRaw = getProp(tobj, 'Tanggal'); if(!tglRaw) return; 
            const tgl = new Date(tglRaw), tipe = (getProp(tobj, 'Tipe') || '').toString().trim().toUpperCase(), keterangan = getProp(tobj, 'Keterangan') || '';
            if (tipe === 'OUTFLOW' && keterangan.includes(nama)) { if (frekuensi.toLowerCase().includes('bulan') || frekuensi.toLowerCase().includes('month')) { if (tgl.getMonth() === currentMonth && tgl.getFullYear() === currentYear) isPaid = true; } else if (frekuensi.toLowerCase().includes('tahun') || frekuensi.toLowerCase().includes('year')) { if (tgl.getFullYear() === currentYear) isPaid = true; } }
        });
        const btnHtml = isPaid ? `<button onclick="event.stopPropagation();" disabled class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-400 rounded-lg text-[10px] font-bold cursor-not-allowed flex items-center gap-1 border border-gray-200 dark:border-gray-700 shadow-none"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ${t('txt-paid')}</button>` : `<button onclick="event.stopPropagation(); payRecurring('${nama}', ${nominal}, '${akun}')" class="px-3 py-1.5 bg-[#6342E8] text-white rounded-lg text-[10px] font-bold hover:scale-105 active:scale-95 transition shadow-sm">${t('btn-pay-now')}</button>`;
        html += `<div onclick="window.openRecurringDetailModal('${idRec}', '${nama}', ${nominal}, '${frekuensi}', ${tglTagihan}, '${akun}')" class="cursor-pointer bg-white dark:bg-[#1e1e1e] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2d2d2d] flex items-center justify-between hover:shadow-md transition duration-300 mb-3 last:mb-0 active:scale-[0.98]"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 text-[#6342E8] flex items-center justify-center font-bold text-lg">↻</div><div><p class="text-sm font-bold dark:text-gray-200">${nama}</p><p class="text-[10px] text-gray-500">Tgl ${tglTagihan} • ${akun}</p></div></div><div class="text-right flex flex-col items-end gap-1.5"><p class="text-sm font-bold text-red-500 dark:text-red-400 privacy-mask" data-value="${nominal}">${isPrivate?'********':toRp(nominal)}</p>${btnHtml}</div></div>`;
    });
    container.innerHTML = html;
}

window.openRecurringDetailModal = function(id, name, amount, freq, date, account) {
    const elName = document.getElementById('det-rec-name'); if (elName) elName.innerText = name;
    const elAmount = document.getElementById('det-rec-amount'); if (elAmount) { elAmount.innerText = toRp(amount); elAmount.setAttribute('data-value', amount); }
    const elFreq = document.getElementById('det-rec-freq'); if (elFreq) { const isEng = currentLang === 'en'; if (freq.toLowerCase().includes('bulan') || freq.toLowerCase().includes('month')) { elFreq.innerText = isEng ? 'Monthly' : 'Bulanan'; } else if (freq.toLowerCase().includes('tahun') || freq.toLowerCase().includes('year')) { elFreq.innerText = isEng ? 'Yearly' : 'Tahunan'; } else { elFreq.innerText = freq; } }
    const elDate = document.getElementById('det-rec-date'); if (elDate) elDate.innerText = date;
    const elAccount = document.getElementById('det-rec-account'); if (elAccount) elAccount.innerText = account;
    const elId = document.getElementById('det-rec-id'); if (elId) elId.value = id;
    openModal('modal-rec-detail'); applyPrivacyMasks();
};

function renderPortfolioScreen(drawChart = true) {
    const assetContainer = document.getElementById('asset-list'); if(!assetContainer) return;
    const porto = appData.M_Portofolio || [], accounts = appData.M_Akun || [], rdnAccount = accounts.find(a => { let nama = getProp(a, 'Nama_Akun', 'Nama Akun'); return nama && nama.toUpperCase().includes('RDN'); });
    const aggregatedAssets = {}; let html = '', rdnBalance = 0;
    if (rdnAccount) { let rdnName = getProp(rdnAccount, 'Nama_Akun', 'Nama Akun') || 'RDN', valReal = getProp(rdnAccount, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(rdnAccount, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal'); rdnBalance = extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); html += `<div class="flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-blue-100 dark:border-blue-900/50 rounded-2xl shadow-sm mb-2 hover:shadow-md transition duration-300"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center rounded-xl font-bold text-blue-600">RDN</div><div><p class="text-sm font-bold dark:text-gray-200">${rdnName}</p><p class="text-[10px] text-gray-500">Saldo Cash</p></div></div><div class="text-right"><p class="text-sm font-bold privacy-mask text-[#6342E8]" data-value="${rdnBalance}">${isPrivate?'********':toRp(rdnBalance)}</p></div></div>`; }
    if(porto.length === 0 && !rdnAccount) assetContainer.innerHTML = `<p class="text-center text-xs text-gray-400 italic py-4">${t('no-asset')}</p>`;
    else {
        porto.forEach(a => { const idAset = getProp(a, 'ID_Aset', 'ID Aset'), simbol = getProp(a, 'Simbol', 'Nama Aset') || 'Aset', jumlahRaw = (getProp(a, 'Jumlah', 'Unit') || "0").toString(), jumlah = parseFloat(jumlahRaw.replace(',', '.')) || 0, hargaBeli = extractNumber(getProp(a, 'Harga_Beli', 'Harga Beli')), hargaLiveRaw = getProp(a, 'Harga_Saat_Ini', 'Harga Saat Ini'), hargaSekarang = (hargaLiveRaw !== undefined && hargaLiveRaw !== null && hargaLiveRaw !== "") ? extractNumber(hargaLiveRaw) : hargaBeli, totalValBeli = jumlah * hargaBeli; if (!aggregatedAssets[simbol]) aggregatedAssets[simbol] = { idAset: idAset, simbol: simbol, totalJumlah: 0, totalInvestasi: 0, hargaSekarang: hargaSekarang }; aggregatedAssets[simbol].totalJumlah += jumlah; aggregatedAssets[simbol].totalInvestasi += totalValBeli; });
        Object.values(aggregatedAssets).forEach(a => { const avgHargaBeli = a.totalJumlah > 0 ? (a.totalInvestasi / a.totalJumlah) : 0, totalValSekarang = a.totalJumlah * a.hargaSekarang, nominalReturn = totalValSekarang - a.totalInvestasi, pnl = a.totalInvestasi > 0 ? (nominalReturn / a.totalInvestasi) * 100 : 0, pnlColor = nominalReturn >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400', pnlSign = nominalReturn > 0 ? '+' : ''; html += `<div onclick="window.openAssetDetailModal('${a.idAset}', '${a.simbol}', ${a.totalJumlah}, ${avgHargaBeli}, ${a.totalInvestasi}, ${a.hargaSekarang}, ${totalValSekarang}, ${nominalReturn}, ${pnl})" class="cursor-pointer flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-gray-50 dark:border-gray-800 rounded-2xl shadow-sm mb-2 hover:shadow-md active:scale-[0.98] transition-all duration-300"><div class="flex items-center gap-3">${getAssetLogoHtml(a.simbol)}<div><p class="text-sm font-bold dark:text-gray-200">${a.simbol}</p><p class="text-[10px] text-gray-500">${a.totalJumlah.toLocaleString('en-US', {maximumFractionDigits: 6})} ${t('unit')}</p><p class="text-[10px] text-[#6342E8] dark:text-[#a78bfa] font-semibold mt-1">${t('live')}: ${toRp(a.hargaSekarang)}</p></div></div><div class="text-right flex flex-col justify-center"><p class="text-sm font-bold privacy-mask dark:text-white" data-value="${totalValSekarang}">${isPrivate?'********':toRp(totalValSekarang)}</p><p class="text-[10px] font-semibold ${pnlColor} mt-1">${pnlSign}${toRp(Math.abs(nominalReturn))} (${pnlSign}${pnl.toFixed(2)}%)</p></div></div>`; });
        assetContainer.innerHTML = html;
    }
    renderGoals(); let labels = [], dataValues = []; const goals = (appData.M_Goals || []).filter(g => getProp(g, 'Status') !== 'COMPLETED'); let totalGoalSavings = goals.reduce((s, g) => s + extractNumber(getProp(g, 'Terkumpul')), 0);
    if(totalGoalSavings > 0) { labels.push('Tabungan Target'); dataValues.push(totalGoalSavings); } if(rdnBalance > 0) { let rdnName = getProp(rdnAccount, 'Nama_Akun', 'Nama Akun') || 'RDN'; labels.push(rdnName); dataValues.push(rdnBalance); }
    Object.values(aggregatedAssets).forEach(p => { labels.push(p.simbol); dataValues.push(p.totalJumlah * p.hargaSekarang); });
    const totalNetAsset = dataValues.reduce((a,b)=>a+b, 0), portoCenter = document.getElementById('porto-center-val');
    if (portoCenter) { portoCenter.setAttribute('data-value', totalNetAsset); portoCenter.innerText = isPrivate ? '********' : toRp(totalNetAsset); }
    if(drawChart && document.getElementById('portfolioChart')) {
        const ctx = document.getElementById('portfolioChart').getContext('2d'); if (portoChartInstance) portoChartInstance.destroy();
        portoChartInstance = new Chart(ctx, { type: 'doughnut', data: { labels: labels.length > 0 ? labels : ['Kosong'], datasets: [{ data: dataValues.length > 0 ? dataValues : [1], backgroundColor: dataValues.length > 0 ? CHART_COLORS : ['#e5e7eb'], borderWidth: 0, hoverOffset: 4 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '80%', plugins: { legend: { display: false } }, animation: { animateScale: true, animateRotate: true } } });
    }
}

window.updateAssetDetailCurrencyView = function() {
    if (!window.lastAssetData) return;
    const { simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent } = window.lastAssetData, curr = window.currentActiveCurrency, rate = window.usdExchangeRate, lang = currentLang;
    const formatValueByCurrency = function(num) { if (curr === 'IDR') { return toRp(num); } else { return '$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num / rate); } };
    
    if (lang === 'id') { document.getElementById('lbl-live-price-text').innerText = 'Harga Saat Ini'; document.getElementById('lbl-position-title').innerText = 'Posisi Anda'; document.getElementById('lbl-market-stats-title').innerText = 'Statistik Pasar & Imbal Hasil'; document.getElementById('lbl-mktcap-text').innerText = 'Kapitalisasi Pasar'; document.getElementById('lbl-volume-text').innerText = 'Volume Perdagangan (24j)'; } 
    else { document.getElementById('lbl-live-price-text').innerText = 'Current Price'; document.getElementById('lbl-position-title').innerText = 'Your Position'; document.getElementById('lbl-market-stats-title').innerText = 'Market Statistics & Returns'; document.getElementById('lbl-mktcap-text').innerText = 'Market Cap'; document.getElementById('lbl-volume-text').innerText = 'Trading Volume (24h)'; }
    
    const mask = isPrivate;
    document.getElementById('det-aset-live').innerText = mask ? '********' : formatValueByCurrency(liveHarga);
    document.getElementById('det-aset-lot').innerText = formatShortNumber(lot) + ' ' + t('unit');
    document.getElementById('det-aset-avg').innerText = mask ? '********' : formatValueByCurrency(avgHarga);
    document.getElementById('det-aset-invest').innerText = mask ? '********' : formatValueByCurrency(investasi);
    document.getElementById('det-aset-total').innerText = mask ? '********' : formatValueByCurrency(totalVal);

    let pnlSign = nominalReturn > 0 ? '+' : '', pnlColor = nominalReturn >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400';
    let formattedReturnText = curr === 'IDR' ? toRp(Math.abs(nominalReturn)) : ('$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Math.abs(nominalReturn) / rate));
    let fullReturnString = `${pnlSign}${formattedReturnText} (${pnlSign}${pnlPercent.toFixed(2)}%)`;
    
    document.getElementById('det-aset-return').innerText = fullReturnString; document.getElementById('det-aset-return').className = `text-xs font-bold text-right ${pnlColor}`;
    document.getElementById('det-aset-live-change').innerText = fullReturnString; document.getElementById('det-aset-live-change').className = `text-xs font-bold mt-1 ${pnlColor}`;

    const mockMktCap = totalVal * 42000, mockVol = totalVal * 1.35;
    document.getElementById('det-aset-mktcap').innerText = mask ? '********' : formatValueByCurrency(mockMktCap);
    document.getElementById('det-aset-vol').innerText = mask ? '********' : formatValueByCurrency(mockVol);

    const btnIdr = document.getElementById('currency-btn-idr'), btnUsd = document.getElementById('currency-btn-usd');
    if (btnIdr && btnUsd) { if (curr === 'IDR') { btnIdr.className = "px-2.5 py-1 rounded-full bg-[#6342E8] text-white transition-all duration-200"; btnUsd.className = "px-2.5 py-1 rounded-full text-gray-400 dark:text-gray-500 transition-all duration-200"; } else { btnIdr.className = "px-2.5 py-1 rounded-full text-gray-400 dark:text-gray-500 transition-all duration-200"; btnUsd.className = "px-2.5 py-1 rounded-full bg-[#6342E8] text-white transition-all duration-200"; } }
    renderMockPriceChart(simbol, liveHarga);
};

window.openAssetDetailModal = function(idAset, simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent) {
    window.lastAssetData = { idAset, simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent };
    const simbolEl = document.getElementById('det-aset-simbol'); if (simbolEl) simbolEl.innerText = simbol;
    const logoEl = document.getElementById('det-aset-logo'); if (logoEl) logoEl.innerHTML = getAssetLogoHtml(simbol).replace('w-10 h-10', 'w-7 h-7 object-contain rounded-full');
    
    const btnBeli = document.getElementById('btn-det-beli');
    if (btnBeli) { btnBeli.onclick = () => { closeModal('modal-asset-detail'); openModal('modal-buy-asset'); const formSimbol = document.getElementById('form-asset-simbol'); if (formSimbol) formSimbol.value = simbol; }; }
    const btnJual = document.getElementById('btn-det-jual');
    if (btnJual) { btnJual.onclick = () => { closeModal('modal-asset-detail'); const displaySimbol = document.getElementById('sell-asset-simbol-display'); if (displaySimbol) displaySimbol.innerText = simbol; const displayMax = document.getElementById('sell-asset-max-display'); if (displayMax) { displayMax.innerText = formatShortNumber(lot); } const inputId = document.getElementById('form-sell-asset-id'); if (inputId) inputId.value = idAset; const inputSimbol = document.getElementById('form-sell-asset-simbol'); if (inputSimbol) inputSimbol.value = simbol; const inputHarga = document.getElementById('form-sell-asset-harga'); if (inputHarga) { inputHarga.value = toRp(liveHarga).replace('Rp ', ''); } openModal('modal-sell-asset'); }; }
    
    window.updateAssetDetailCurrencyView(); openModal('modal-asset-detail');
};

function renderMockPriceChart(assetName, currentPrice) {
    const canvas = document.getElementById('portoChart'); if (!canvas) return; const ctx = canvas.getContext('2d');
    if (window.portoChartInstance) { window.portoChartInstance.destroy(); }
    let points = 20, volatility = 0.02;
    switch(window.currentActiveFilter) { case '1H': points = 12; volatility = 0.006; break; case '1D': points = 24; volatility = 0.018; break; case '1W': points = 14; volatility = 0.035; break; case '1M': points = 30; volatility = 0.07; break; case '1Y': points = 52; volatility = 0.18; break; }
    const mockData = []; let tempPrice = currentPrice; for (let i = 0; i < points; i++) { const change = (Math.random() - 0.48) * volatility; tempPrice = tempPrice * (1 + change); mockData.unshift(tempPrice); } mockData[points - 1] = currentPrice; 
    const mockLabels = Array.from({length: points}, (_, i) => i.toString()), gradient = ctx.createLinearGradient(0, 0, 0, 160); gradient.addColorStop(0, 'rgba(99, 66, 232, 0.25)'); gradient.addColorStop(1, 'rgba(99, 66, 232, 0.0)');  
    window.portoChartInstance = new Chart(ctx, { type: 'line', data: { labels: mockLabels, datasets: [{ data: mockData, borderColor: '#6342E8', borderWidth: 2, fill: true, backgroundColor: gradient, tension: 0.4, pointRadius: 0, pointHoverRadius: 5, pointHoverBackgroundColor: '#6342E8', pointHoverBorderColor: 'white', pointHoverBorderWidth: 2 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } }, interaction: { mode: 'index', intersect: false } } });
}

window.setCurrencyFilter = function(currency) { window.currentActiveCurrency = currency; window.updateAssetDetailCurrencyView(); };
window.setChartFilter = function(filter) { window.currentActiveFilter = filter; document.querySelectorAll('.time-filter-btn').forEach(btn => btn.classList.remove('active')); const targetedBtn = document.querySelector(`[data-filter="${filter}"]`); if (targetedBtn) targetedBtn.classList.add('active'); window.updateAssetDetailCurrencyView(); };

// --- FUNGSI RENDER HISTORY & CALENDAR --- //

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

function renderHistoryScreen(drawChart = true) {
    const historyListContainer = document.getElementById('history-list'); if(!historyListContainer) return;
    const filteredData = getFilteredTransactions(); let sumIn = 0, sumOut = 0;
    filteredData.forEach(t => { const val = extractNumber(getProp(t, 'Jumlah')), tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = (getProp(t, 'Kategori') || '').toString().trim(); if(tipe === 'INFLOW' && kategori !== 'Transfer Masuk') sumIn += val; if(tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') sumOut += val; });
    const diff = sumIn - sumOut;
    document.getElementById('hist-sum-in').setAttribute('data-value', sumIn); document.getElementById('hist-sum-in').innerText = isPrivate ? '********' : toRp(sumIn); document.getElementById('hist-sum-out').setAttribute('data-value', sumOut); document.getElementById('hist-sum-out').innerText = isPrivate ? '********' : toRp(sumOut);
    const diffEl = document.getElementById('hist-sum-diff'); diffEl.setAttribute('data-value', diff); diffEl.innerText = isPrivate ? '********' : toRp(diff); diffEl.className = `font-bold text-lg privacy-mask ${diff < 0 ? 'text-red-500' : 'text-gray-800 dark:text-white'}`;
    let chartDataRaw = [], listDataRaw = [], centerLabel = '';
    if (histToggleType === 'INFLOW') { chartDataRaw = filteredData.filter(t => (getProp(t, 'Tipe')||'').toString().trim().toUpperCase() === 'INFLOW' && getProp(t, 'Kategori') !== 'Transfer Masuk'); listDataRaw = chartDataRaw; centerLabel = t('tot-inc'); } 
    else if (histToggleType === 'OUTFLOW') { chartDataRaw = filteredData.filter(t => (getProp(t, 'Tipe')||'').toString().trim().toUpperCase() === 'OUTFLOW' && getProp(t, 'Kategori') !== 'Transfer Keluar'); listDataRaw = chartDataRaw; centerLabel = t('tot-exp'); } 
    else if (histToggleType === 'TRANSFER') { chartDataRaw = filteredData.filter(t => getProp(t, 'Kategori') === 'Transfer Masuk'); listDataRaw = filteredData.filter(t => getProp(t, 'Kategori') === 'Transfer Keluar' || getProp(t, 'Kategori') === 'Transfer Masuk' || getProp(t, 'Kategori') === 'Biaya Admin'); centerLabel = t('tot-tf'); }
    const categorySums = {}, categoryCounts = {}; let grandTotalChart = 0;
    chartDataRaw.forEach(t => { const groupKey = histToggleType === 'TRANSFER' ? getProp(t, 'Akun') : getProp(t, 'Kategori'), val = extractNumber(getProp(t, 'Jumlah')); if(!categorySums[groupKey]) { categorySums[groupKey] = 0; categoryCounts[groupKey] = 0; } categorySums[groupKey] += val; categoryCounts[groupKey] += 1; grandTotalChart += val; });
    const sortedCategories = Object.keys(categorySums).map(cat => ({ name: cat, total: categorySums[cat], count: categoryCounts[cat], percent: grandTotalChart > 0 ? ((categorySums[cat] / grandTotalChart) * 100).toFixed(1) : 0 })).sort((a, b) => b.total - a.total);
    document.getElementById('chart-center-val').setAttribute('data-value', grandTotalChart); document.getElementById('chart-center-val').innerText = isPrivate ? '********' : toRp(grandTotalChart); document.getElementById('chart-center-label').innerText = centerLabel;
    if(drawChart && document.getElementById('categoryChart')) {
        if (myChartInstance) myChartInstance.destroy();
        myChartInstance = new Chart(document.getElementById('categoryChart').getContext('2d'), { type: 'doughnut', data: { labels: sortedCategories.length > 0 ? sortedCategories.map(c => c.name) : ['Kosong'], datasets: [{ data: sortedCategories.length > 0 ? sortedCategories.map(c => c.total) : [1], backgroundColor: sortedCategories.length > 0 ? CHART_COLORS : ['#e5e7eb'], borderWidth: 0, hoverOffset: 4 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '75%', plugins: { legend: { display: false } } } });
    }
    const catListContainer = document.getElementById('history-category-list'); catListContainer.innerHTML = '';
    if(sortedCategories.length === 0) { catListContainer.innerHTML = `<p class="text-center text-xs text-gray-400 py-6">${t('no-data-period')}</p>`; } 
    else {
        sortedCategories.forEach((cat, index) => {
            const color = CHART_COLORS[index % CHART_COLORS.length]; let iconHtml = '';
            if (histToggleType === 'TRANSFER') { const logoSrc = getAccountLogo(cat.name); if (logoSrc) iconHtml = `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">`; else iconHtml = `<div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-xs">${cat.name ? cat.name.substring(0,2).toUpperCase() : 'BK'}</div>`; } else { iconHtml = `<div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm" style="background-color: ${color}20; color: ${color};">${getCategoryIcon(cat.name)}</div>`; }
            catListContainer.innerHTML += `<div class="flex items-center justify-between py-3 border-b border-gray-50 dark:border-gray-800 last:border-0"><div class="flex items-center gap-3">${iconHtml}<div><p class="text-sm font-bold text-gray-700 dark:text-gray-200">${cat.name}</p><p class="text-[10px] text-gray-500">${t('from-trx')} ${cat.count} ${t('transactions')}</p></div></div><div class="text-right"><p class="text-sm font-bold text-gray-800 dark:text-white privacy-mask" data-value="${cat.total}">${isPrivate?'********':toRp(cat.total)}</p><p class="text-[10px] font-semibold text-gray-400">${cat.percent}%</p></div></div>`;
        });
    }
    
    if(listDataRaw.length === 0) { historyListContainer.innerHTML = `<div class="text-center p-6"><p class="text-xs text-gray-400">${t('no-trx')}</p></div>`; } 
    else {
        let html = ''; const sortedTransactions = [...listDataRaw].sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime()); let currentDateGroup = '';
        sortedTransactions.forEach(tobj => {
            const tglRaw = getProp(tobj, 'Tanggal'), tglObj = tglRaw ? new Date(tglRaw) : null;
            let dateString = tglObj ? `${tglObj.getDate().toString().padStart(2, '0')} ${i18n[currentLang]['month-names'][tglObj.getMonth()]} ${tglObj.getFullYear()}` : 'Tanggal Tidak Diketahui';
            if(dateString !== currentDateGroup) { html += `<div class="px-4 py-2 bg-gray-50/90 dark:bg-[#121212]/90 backdrop-blur-sm sticky top-0 z-10 border-y border-gray-100 dark:border-gray-800"><span class="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">${dateString}</span></div>`; currentDateGroup = dateString; }
            const isOut = (getProp(tobj, 'Tipe')||'').toString().trim().toUpperCase() === 'OUTFLOW', sign = isOut ? '-' : '+', kategori = getProp(tobj, 'Kategori') || '', akun = getProp(tobj, 'Akun') || '';
            let color = isOut ? 'text-gray-800 dark:text-gray-100' : 'text-green-500 dark:text-green-400'; if(kategori === 'Transfer Keluar' || kategori === 'Transfer Masuk' || kategori === 'Biaya Admin') color = 'text-gray-800 dark:text-gray-100';
            const logoSrc = getAccountLogo(akun), iconHtml = logoSrc ? `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">` : `<div class="w-10 h-10 rounded-full ${isOut ? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300' : 'bg-green-50 text-green-500 dark:bg-green-900/30'} flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${isOut ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}"></path></svg></div>`;
            const val = extractNumber(getProp(tobj, 'Jumlah')), tobjJSON = encodeURIComponent(JSON.stringify(tobj));
            html += `<div onclick="window.openTransactionDetail('${tobjJSON}')" class="cursor-pointer flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] active:scale-[0.98] transition-all duration-200"><div class="flex items-center gap-3">${iconHtml}<div class="overflow-hidden"><p class="text-sm font-bold truncate w-32 dark:text-white">${kategori}</p><p class="text-[10px] text-gray-500 truncate w-32 uppercase tracking-wide">${getProp(tobj, 'Keterangan') || akun}</p></div></div><p class="text-sm font-bold ${color} whitespace-nowrap">${sign} <span class="privacy-mask" data-value="${val}">${isPrivate?'********':toRp(val)}</span></p></div>`;
        });
        historyListContainer.innerHTML = html;
    }
}

function changeCalMonth(step) { currentCalMonth += step; if(currentCalMonth > 11) { currentCalMonth = 0; currentCalYear++; } else if(currentCalMonth < 0) { currentCalMonth = 11; currentCalYear--; } renderCalendar(); showDailyDetail(new Date().getDate(), true); }
window.selectCalDay = function(day) { showDailyDetail(day); };

function renderCalendar() {
    const calGrid = document.getElementById('calendar-grid'); if(!calGrid) return;
    document.getElementById('calendar-month-year').innerText = `${i18n[currentLang]['month-names'][currentCalMonth]} ${currentCalYear}`;
    const firstDay = new Date(currentCalYear, currentCalMonth, 1).getDay(), daysInMonth = new Date(currentCalYear, currentCalMonth + 1, 0).getDate(), dailyData = {};
    (appData.T_Transaksi || []).forEach(t => { const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return; const tgl = new Date(tglRaw); if(tgl.getMonth() === currentCalMonth && tgl.getFullYear() === currentCalYear) { const dateNum = tgl.getDate(); if(!dailyData[dateNum]) dailyData[dateNum] = { in: 0, out: 0 }; const tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = (getProp(t, 'Kategori') || '').toString().trim(), val = extractNumber(getProp(t, 'Jumlah')); if(tipe === 'INFLOW' && kategori !== 'Transfer Masuk') dailyData[dateNum].in += val; if(tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') dailyData[dateNum].out += val; } });
    let html = ''; for(let i = 0; i < firstDay; i++) html += `<div class="aspect-[4/5] rounded-xl"></div>`;
    const today = new Date(), isCurrentMonthReal = today.getMonth() === currentCalMonth && today.getFullYear() === currentCalYear, currentDayReal = today.getDate();
    for(let i = 1; i <= daysInMonth; i++) {
        let isToday = isCurrentMonthReal && i === currentDayReal, isActive = i === activeCalDay, dateClass = isToday ? "bg-[#6342E8] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md mb-1" : "text-gray-700 dark:text-gray-300 w-6 h-6 flex items-center justify-center mb-1 transition-colors", dataHtml = '';
        if(dailyData[i]) { if(dailyData[i].in > 0) dataHtml += `<p class="text-[8px] text-green-500 dark:text-green-400 font-bold leading-tight truncate w-full text-center">+${formatShortNumber(dailyData[i].in)}</p>`; if(dailyData[i].out > 0) dataHtml += `<p class="text-[8px] text-red-500 dark:text-red-400 font-bold leading-tight truncate w-full text-center">-${formatShortNumber(dailyData[i].out)}</p>`; }
        let cellClass = isActive ? "border-[#6342E8]/50 dark:border-[#a78bfa]/50 bg-purple-50/50 dark:bg-purple-900/20 scale-105 shadow-sm z-10 relative" : "border-gray-50 dark:border-gray-800 bg-white dark:bg-[#1e1e1e] hover:bg-gray-50 dark:hover:bg-[#2d2d2d]";
        html += `<div class="cal-cell flex flex-col items-center justify-start pt-1 pb-1 px-0.5 rounded-xl border ${cellClass} overflow-hidden cursor-pointer" onclick="selectCalDay(${i})"><div class="${dateClass} text-xs font-semibold">${i}</div><div class="flex flex-col w-full px-0.5 mt-auto pb-1">${dataHtml}</div></div>`;
    }
    calGrid.innerHTML = html; if(isCurrentMonthReal && activeCalDay === currentDayReal) showDailyDetail(currentDayReal, false);
}

function showDailyDetail(day, refreshCalendarUI = true) {
    activeCalDay = day; if(refreshCalendarUI) renderCalendar(); 
    const titleEl = document.getElementById('daily-detail-title'); if(!titleEl) return; titleEl.innerText = `${t('nav-hist')} ${day} ${i18n[currentLang]['month-names'][currentCalMonth]} ${currentCalYear}`;
    const dailyTrxs = (appData.T_Transaksi || []).filter(t => { const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return false; const tgl = new Date(tglRaw); return tgl.getDate() === day && tgl.getMonth() === currentCalMonth && tgl.getFullYear() === currentCalYear; });
    const listContainer = document.getElementById('daily-transaction-list');
    if(dailyTrxs.length === 0) return listContainer.innerHTML = `<p class="text-center text-xs text-gray-400 py-4 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-gray-50 dark:border-gray-800 transition-all">${t('no-trx-today') || t('no-trx')}</p>`; 
    let html = '';
    [...dailyTrxs].sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime()).forEach(tobj => {
        const isOut = (getProp(tobj, 'Tipe')||'').toString().trim().toUpperCase() === 'OUTFLOW', sign = isOut ? '-' : '+', kategori = getProp(tobj, 'Kategori') || '', akun = getProp(tobj, 'Akun') || '';
        let color = isOut ? 'text-gray-800 dark:text-gray-100' : 'text-green-500 dark:text-green-400'; if(kategori === 'Transfer Keluar' || kategori === 'Transfer Masuk' || kategori === 'Biaya Admin') color = 'text-gray-800 dark:text-gray-100';
        const logoSrc = getAccountLogo(akun), iconHtml = logoSrc ? `<img src="${logoSrc}" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-700 p-1">` : `<div class="w-10 h-10 rounded-full ${isOut ? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300' : 'bg-green-50 text-green-500 dark:bg-green-900/30'} flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${isOut ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}"></path></svg></div>`;
        const val = extractNumber(getProp(tobj, 'Jumlah')), tobjJSON = encodeURIComponent(JSON.stringify(tobj));
        html += `<div onclick="window.openTransactionDetail('${tobjJSON}')" class="cursor-pointer flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] border border-gray-50 dark:border-gray-800 rounded-2xl shadow-sm mb-2 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] active:scale-[0.98] transition-all duration-200"><div class="flex items-center gap-3">${iconHtml}<div class="overflow-hidden"><p class="text-sm font-bold truncate w-32 dark:text-white">${kategori}</p><p class="text-[10px] text-gray-500 truncate w-32 uppercase tracking-wide">${getProp(tobj, 'Keterangan') || akun}</p></div></div><p class="text-sm font-bold ${color} whitespace-nowrap">${sign} <span class="privacy-mask" data-value="${val}">${isPrivate?'********':toRp(val)}</span></p></div>`;
    });
    listContainer.innerHTML = html; applyPrivacyMasks();
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

// ==========================================
// EXPORT PDF LOGIC
// ==========================================

function renderExportModal() {
    const trxs = appData.T_Transaksi || []; let years = new Set(); trxs.forEach(t => { const tgl = getProp(t, 'Tanggal'); if(tgl) years.add(new Date(tgl).getFullYear()); }); if(years.size === 0) years.add(new Date().getFullYear());
    const sortedYears = Array.from(years).sort((a,b) => b - a); if(!sortedYears.includes(exportSelectedYear)) exportSelectedYear = sortedYears[0];
    const yearContainer = document.getElementById('export-year-container'); if(!yearContainer) return; yearContainer.innerHTML = '';
    sortedYears.forEach(year => { const isActive = year === exportSelectedYear, btnClass = isActive ? 'bg-[#21C55D] text-white shadow-md border-transparent' : 'bg-white dark:bg-[#1e1e1e] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700'; yearContainer.innerHTML += `<button onclick="setExportYear(${year})" class="px-5 py-2 text-sm font-bold rounded-full whitespace-nowrap border transition-all ${btnClass}">${year}</button>`; });
    renderExportMonths();
}

window.setExportYear = function(year) { exportSelectedYear = year; renderExportModal(); };

function renderExportMonths() {
    const monthContainer = document.getElementById('export-month-container'); if(!monthContainer) return; monthContainer.innerHTML = ''; const tx = appData.T_Transaksi || []; let vm = new Set();
    tx.forEach(t => { if(getProp(t,'Tanggal') && new Date(getProp(t,'Tanggal')).getFullYear() === exportSelectedYear) vm.add(new Date(getProp(t,'Tanggal')).getMonth()); });
    const monthNames = i18n[currentLang]['month-names'];
    for(let i = 11; i >= 0; i--) { if(vm.has(i)) { monthContainer.innerHTML += `<button onclick="window.generatePDF(${i}, ${exportSelectedYear})" class="w-full bg-white dark:bg-[#1e1e1e] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex justify-between items-center hover:bg-gray-50 dark:hover:bg-[#2d2d2d] active:scale-[0.98] transition-all"><span class="font-semibold text-gray-800 dark:text-gray-200">${monthNames[i]} ${exportSelectedYear}</span><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>`;} }
}

async function getBase64ImageFromUrl(imageUrl) { return new Promise((resolve, reject) => { let img = new Image(); img.crossOrigin = 'Anonymous'; img.onload = () => { let canvas = document.createElement('canvas'); canvas.width = img.width; canvas.height = img.height; let ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0); resolve(canvas.toDataURL('image/png')); }; img.onerror = error => reject(error); img.src = imageUrl; }); }

window.generatePDF = async function(monthIdx, year) {
    showLoading(true);
    try {
        const { jsPDF } = window.jspdf; const doc = new jsPDF('p', 'mm', 'a4'); const totalPagesExp = "{total_pages_count_string}";
        const selectedAccount = document.getElementById('export-pdf-account').value, isAllAccounts = selectedAccount === 'ALL';
        const userName = sessionName ? sessionName.toUpperCase() : "PENGGUNA FINTRACK", userEmail = sessionEmail ? sessionEmail.toLowerCase() : "fintrack user", accLabel = isAllAccounts ? t('pdf-all-acc') : selectedAccount.toUpperCase();
        let trxs = appData.T_Transaksi || [];
        
        let currentRealtimeBalance = 0;
        if (isAllAccounts) { (appData.M_Akun || []).forEach(acc => { let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun'); if (namaAkun && namaAkun.toUpperCase().includes('RDN')) return; let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal'); currentRealtimeBalance += extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); }); } 
        else { const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === selectedAccount); if(accData) { let valReal = getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Realtime'), valAwal = getProp(accData, 'Saldo_Awal', 'Saldo Awal', 'Saldo_Awal'); currentRealtimeBalance = extractNumber((valReal !== undefined && valReal !== null && valReal !== "") ? valReal : valAwal); } }

        let relevantTrxs = trxs.filter(t => { const tglRaw = getProp(t, 'Tanggal'); if(!tglRaw) return false; if(isAllAccounts) return true; return getProp(t, 'Akun') === selectedAccount; });
        relevantTrxs.sort((a, b) => new Date(getProp(a, 'Tanggal')).getTime() - new Date(getProp(b, 'Tanggal')).getTime());

        const endOfTargetMonth = new Date(year, monthIdx + 1, 0, 23, 59, 59, 999).getTime();
        let mutasiSetelahTarget = 0;
        relevantTrxs.forEach(t => { const tgl = new Date(getProp(t, 'Tanggal')).getTime(); if (tgl > endOfTargetMonth) { const tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), val = extractNumber(getProp(t, 'Jumlah')); if (tipe === 'INFLOW') mutasiSetelahTarget += val; else if (tipe === 'OUTFLOW') mutasiSetelahTarget -= val; } });

        let saldoAkhirBulan = currentRealtimeBalance - mutasiSetelahTarget, monthTrxs = relevantTrxs.filter(t => { const d = new Date(getProp(t, 'Tanggal')); return d.getMonth() === monthIdx && d.getFullYear() === year; });
        let mutasiBulanIni = 0, summaryTotalIn = 0, summaryTotalOut = 0;
        monthTrxs.forEach(t => { const tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = getProp(t, 'Kategori') || '', val = extractNumber(getProp(t, 'Jumlah')); if(tipe === 'INFLOW') { mutasiBulanIni += val; if (!(isAllAccounts && kategori === 'Transfer Masuk')) summaryTotalIn += val; } else if(tipe === 'OUTFLOW') { mutasiBulanIni -= val; if (!(isAllAccounts && kategori === 'Transfer Keluar')) summaryTotalOut += val; } });

        let saldoAwalBulan = saldoAkhirBulan - mutasiBulanIni, runningBalance = saldoAwalBulan, tableRows = [];
        tableRows.push(['', { content: t('pdf-bal-start'), styles: { fontStyle: 'bold' } }, '', { content: new Intl.NumberFormat('id-ID').format(saldoAwalBulan), styles: { fontStyle: 'bold' } }]);

        monthTrxs.forEach(t => {
            const d = new Date(getProp(t, 'Tanggal')), dateStr = `${d.getDate().toString().padStart(2,'0')} ${i18n[currentLang]['month-names'][d.getMonth()].substring(0,3)} ${d.getFullYear()}`, timeStr = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')} WIB`;
            const tipe = (getProp(t, 'Tipe') || '').toString().trim().toUpperCase(), kategori = getProp(t, 'Kategori') || ''; let keterangan = getProp(t, 'Keterangan') || '';
            if(!isAllAccounts && (kategori === 'Transfer Keluar' || kategori === 'Transfer Masuk')) keterangan = keterangan; else if (isAllAccounts) keterangan += ` (${getProp(t, 'Akun')})`;
            const val = extractNumber(getProp(t, 'Jumlah')); let nomStr = '', nomStyle = {};
            if(tipe === 'INFLOW') { runningBalance += val; if(isAllAccounts && kategori === 'Transfer Masuk') { nomStr = new Intl.NumberFormat('id-ID').format(val); nomStyle = { textColor: [100, 100, 100] }; } else { nomStr = '+' + new Intl.NumberFormat('id-ID').format(val); nomStyle = { textColor: [34, 197, 94] }; } } 
            else if(tipe === 'OUTFLOW') { runningBalance -= val; if(isAllAccounts && kategori === 'Transfer Keluar') { nomStr = new Intl.NumberFormat('id-ID').format(val); nomStyle = { textColor: [100, 100, 100] }; } else { nomStr = '-' + new Intl.NumberFormat('id-ID').format(val); nomStyle = { textColor: [239, 68, 68] }; } }
            tableRows.push([`${dateStr}\n${timeStr}`, { content: `${kategori}\n${keterangan.toUpperCase()}` }, { content: nomStr, styles: nomStyle }, new Intl.NumberFormat('id-ID').format(runningBalance)]);
        });

        let logoBase64 = null, logoHeight = 12, logoWidth = 36;
        try { logoBase64 = await getBase64ImageFromUrl('Logo_Fintrack.png'); const imgProps = doc.getImageProperties(logoBase64); logoWidth = 45; logoHeight = (imgProps.height * logoWidth) / imgProps.width; } catch(e) { console.log('Logo failed to load for PDF'); }

        const periodLastDay = new Date(year, monthIdx + 1, 0).getDate(), periodStr = `1 - ${periodLastDay} ${i18n[currentLang]['month-names'][monthIdx]} ${year}`, primaryColor = [99, 66, 232], softColor = [240, 237, 255]; 

        const drawHeader = (data) => {
            if (logoBase64) doc.addImage(logoBase64, 'PNG', 15, 8, logoWidth, logoHeight); else { doc.setFont("helvetica", "bolditalic"); doc.setFontSize(22); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]); doc.text("Fintrack", 15, 20); }
            doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]); doc.setLineWidth(1); doc.line(110, 12, 195, 12);
            doc.setFont("helvetica", "bold"); doc.setFontSize(16); doc.setTextColor(30, 30, 30); doc.text(t('pdf-title'), 195, 20, { align: "right" });
            doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(100, 100, 100); doc.text(`${t('pdf-period')}: ${periodStr}`, 195, 25, { align: "right" });
            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30, 30, 30); doc.text(userName, 15, 36);
            doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(80, 80, 80); const splitAddress = doc.splitTextToSize(userEmail, 90); doc.text(splitAddress, 15, 41);
            doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(30, 30, 30); doc.text(accLabel, 195, 36, { align: "right" });
            doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(80, 80, 80); doc.text(`${t('pdf-system')} • ${t('pdf-curr')}: `, 185, 41, { align: "right" }); doc.setFont("helvetica", "bold"); doc.text("IDR", 195, 41, { align: "right" });

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
            doc.setFont("helvetica", "normal"); doc.setFontSize(7); doc.setTextColor(120, 120, 120); const splitFooter = doc.splitTextToSize(t('pdf-footer'), 140); doc.text(splitFooter, 28, footerY);
            doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(100, 100, 100); doc.text(`${t('pdf-page')} ${data.pageNumber} ${t('pdf-of')} ${totalPagesExp}`, 195, footerY + 3, { align: "right" });
        };

        doc.autoTable({
            startY: 75, head: [[t('pdf-col-date'), t('pdf-col-desc'), t('pdf-col-nom'), t('pdf-col-bal')]], body: tableRows, theme: 'plain',
            headStyles: { fillColor: primaryColor, textColor: 255, fontStyle: 'bold', fontSize: 9, halign: 'left', cellPadding: 4 },
            bodyStyles: { fontSize: 8, textColor: 50, cellPadding: 4, valign: 'top' },
            columnStyles: { 0: { cellWidth: 35 }, 1: { cellWidth: 'auto' }, 2: { cellWidth: 35, halign: 'right' }, 3: { cellWidth: 35, halign: 'right' } },
            didParseCell: function (data) { if (data.section === 'head' && (data.column.index === 2 || data.column.index === 3)) data.cell.styles.halign = 'right'; },
            willDrawCell: function (data) { if (data.section === 'body' && data.row.index % 2 === 1) { doc.setFillColor(248, 246, 255); doc.rect(data.cell.x, data.cell.y, data.cell.width, data.cell.height, 'F'); } },
            margin: { top: 55, left: 15, right: 15, bottom: 25 }, didDrawPage: function (data) { drawHeader(data); drawFooter(data); }
        });

        if (typeof doc.putTotalPages === 'function') doc.putTotalPages(totalPagesExp);
        const fileName = `Mutasi_${selectedAccount}_${i18n[currentLang]['month-names'][monthIdx]}_${year}.pdf`;
        doc.save(fileName); closeModal('modal-export-pdf');

    } catch(e) { console.error("Gagal export PDF:", e); alert(currentLang === 'id' ? "Gagal membuat file PDF." : "Failed to generate PDF."); } finally { showLoading(false); }
};

window.openTransactionDetail = function(jsonStr) {
    try {
        const lang = (typeof currentLang !== 'undefined') ? currentLang : 'id', priv = isPrivate;
        const tobj = JSON.parse(decodeURIComponent(jsonStr));
        const fuzzy = function(obj, ...hints) { if (!obj) return ''; for (let hint of hints) if (obj[hint] !== undefined && obj[hint] !== '') return obj[hint]; for (let hint of hints) { const cleanHint = hint.toLowerCase().replace(/[^a-z0-9]/g, ''); for (let k in obj) { if (k.toLowerCase().replace(/[^a-z0-9]/g, '') === cleanHint && obj[k] !== undefined && obj[k] !== '') return obj[k]; } } return ''; };
        const num = function(val) { if (!val) return 0; return parseFloat(val.toString().replace(/[^0-9,-]/g, '').replace(',', '.')) || 0; };
        
        let modal = document.getElementById('modal-transaction-detail'); if (!modal) return;
        const isOut = (fuzzy(tobj, 'Tipe', 'Type').toString().trim().toUpperCase() === 'OUTFLOW'), val = num(fuzzy(tobj, 'Jumlah', 'Amount', 'Nominal')), kategori = fuzzy(tobj, 'Kategori', 'Category'), akun = fuzzy(tobj, 'Akun', 'Account', 'SumberDana'), tglRaw = fuzzy(tobj, 'Tanggal', 'Date'), trxId = fuzzy(tobj, 'ID_Trx', 'ID_Transaksi', 'IDTransaksi', 'ID', 'Id');

        if (lang === 'id') { document.getElementById('dtl-title-text').innerText = 'Detail Transaksi'; document.getElementById('dtl-cat-label').innerText = 'Kategori'; document.getElementById('dtl-date-label').innerText = 'Tanggal & Waktu'; document.getElementById('dtl-acc-label').innerText = 'Sumber Dana'; document.getElementById('dtl-desc-label').innerText = 'Keterangan'; if (document.getElementById('dtl-items-label')) document.getElementById('dtl-items-label').innerText = 'Rincian Barang'; } else { document.getElementById('dtl-title-text').innerText = 'Transaction Detail'; document.getElementById('dtl-cat-label').innerText = 'Category'; document.getElementById('dtl-date-label').innerText = 'Date & Time'; document.getElementById('dtl-acc-label').innerText = 'Source of Funds'; document.getElementById('dtl-desc-label').innerText = 'Description'; if (document.getElementById('dtl-items-label')) document.getElementById('dtl-items-label').innerText = 'Purchased Items'; }
        
        let dateStr = '-'; if (tglRaw) { const d = new Date(tglRaw); let mName = d.getMonth() + 1; if (i18n[lang] && i18n[lang]['month-names']) mName = i18n[lang]['month-names'][d.getMonth()]; dateStr = `${d.getDate().toString().padStart(2, '0')} ${mName} ${d.getFullYear()} • ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} WITA`; }
        document.getElementById('dtl-type-label').innerText = isOut ? (lang === 'id' ? 'Pengeluaran' : 'Expenditure') : (lang === 'id' ? 'Pemasukan' : 'Income');
        const amtEl = document.getElementById('dtl-amount'); amtEl.setAttribute('data-value', val); amtEl.innerText = priv ? '********' : toRp(val);
        if (isOut && kategori !== 'Transfer Keluar' && kategori !== 'Biaya Admin') amtEl.className = "text-2xl font-bold text-red-500 dark:text-red-400 privacy-mask"; else if (!isOut && kategori !== 'Transfer Masuk') amtEl.className = "text-2xl font-bold text-green-500 dark:text-green-400 privacy-mask"; else amtEl.className = "text-2xl font-bold text-gray-800 dark:text-white privacy-mask";
        document.getElementById('dtl-kategori').innerText = kategori; document.getElementById('dtl-tanggal').innerText = dateStr; document.getElementById('dtl-akun').innerText = akun; document.getElementById('dtl-keterangan').innerText = fuzzy(tobj, 'Keterangan', 'Description') || '-';

        const itemsSection = document.getElementById('dtl-items-section'), itemsContainer = document.getElementById('dtl-items-container'); let items = []; const dbDetail = (typeof appData !== 'undefined') ? (appData.T_Transaksi_Detail || []) : [];
        if (dbDetail.length > 0 && trxId) { items = dbDetail.filter(d => { const dId = fuzzy(d, 'ID_Transaksi', 'ID_Trx', 'IDTransaksi', 'ID', 'Id'); return String(trxId) === String(dId); }); }
        if (items.length === 0) { const rawItems = fuzzy(tobj, 'items', 'Items', 'Rincian', 'Detail'); if (typeof rawItems === 'string' && rawItems.length > 5) { try { items = JSON.parse(rawItems); } catch(e){} } else if (Array.isArray(rawItems)) { items = rawItems; } }
        
        if (itemsSection && itemsContainer) {
            if (items && items.length > 0) {
                itemsSection.classList.remove('hidden'); itemsContainer.innerHTML = '';
                items.forEach(item => { const itemName = fuzzy(item, 'Nama_Barang', 'Nama_Item', 'name', 'nama') || 'Item', qty = num(fuzzy(item, 'Qty', 'Jumlah', 'quantity')) || 1, priceTotal = num(fuzzy(item, 'Total_Harga', 'Harga_Item', 'price', 'harga')) || 0, hargaSatuan = num(fuzzy(item, 'Harga_Satuan')) || (priceTotal / qty); itemsContainer.innerHTML += `<div class="flex justify-between items-center text-xs py-1.5 border-b border-gray-100 dark:border-gray-800 last:border-0"><div class="flex flex-col w-2/3 pr-2"><span class="text-gray-700 dark:text-gray-200 font-bold uppercase truncate">${itemName}</span><span class="text-[10px] text-gray-500 font-medium">${qty}x @ ${toRp(hargaSatuan)}</span></div><span class="text-gray-800 dark:text-gray-100 font-bold text-right text-xs">${toRp(priceTotal)}</span></div>`; });
            } else { itemsSection.classList.add('hidden'); itemsContainer.innerHTML = ''; }
        }
        openModal('modal-transaction-detail');
    } catch (e) { console.error("Gagal mengeksekusi pop-up:", e); }
};