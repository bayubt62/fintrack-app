/**
 * ============================================================================
 * FINTRACK ENTERPRISE V3.0 — UNIFIED CORE APPLICATION ENGINE (js/app.js)
 * Design System: Warm Cream (#FAF8F5) / Deep Forest Emerald (#0F5132) / Pitch Obsidian (#070908)
 * Security & Integrity:
 * - Token-Based Session Auth (fintrack_session_token) + Auto Logout on 401/Unauthorized
 * - 3D Stacked Sliding Account Cards Deck + Account CRUD & Balance Reconciliation
 * - Smart Due-Date Alerts, Recurring Bills, Debts/Receivables & Savings Goals
 * - Multi-Currency Formatter + Accurate IDR/FX Portfolio & Multi-Lot FIFO Sell
 * - Gemini AI Receipt Scanner + Advance Mode Per-Item Category Splitting
 * - Advanced History Search/Filter + Emerald-Branded jsPDF Statement Export
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. GLOBAL CONFIGURATION & STORAGE KEYS
   * -------------------------------------------------------------------------- */
  const DEFAULT_API_URL = 'https://script.google.com/macros/s/AKfycbz9a9kYr2cwtxxHZBewNNMdvE-43HPX1Vx6H7uoct8yFaluTj-vKzaQp1ehD21fTehNlg/exec';
  const GAS_URL_KEY = 'fintrack_gas_url';
  const THEME_KEY = 'fintrack_theme';
  const LANG_KEY = 'fintrack_lang';
  const CURRENCY_KEY = 'fintrack_currency';
  const PRIVACY_KEY = 'fintrack_privacy';
  const SESSION_EMAIL_KEY = 'fintrack_session_email';
  const SESSION_NAME_KEY = 'fintrack_session_name';
  const SESSION_TOKEN_KEY = 'fintrack_session_token';
  const CACHE_KEY = 'fintrack_cache';

  const KATEGORI_INFLOW = ['Gaji & Pemasukan', 'Hasil Usaha', 'Pemberian', 'Dividen', 'Lainnya'];
  const KATEGORI_OUTFLOW = ['Makanan', 'Hiburan', 'Tagihan', 'Tabungan & Investasi', 'Kewajiban & Sosial', 'Transportasi', 'Lainnya'];

  const CHART_PALETTE = [
    '#0F5132', '#10B981', '#059669', '#D97706', '#0284C7',
    '#14B8A6', '#047857', '#84CC16', '#E11D48', '#0D9488'
  ];

  const CURRENCY_CONFIG = {
    IDR: { symbol: 'Rp', locale: 'id-ID', rate: 1, decimals: 0 },
    USD: { symbol: '$', locale: 'en-US', rate: 1 / 16250, decimals: 2 },
    SGD: { symbol: 'S$', locale: 'en-SG', rate: 1 / 12050, decimals: 2 },
    EUR: { symbol: '€', locale: 'de-DE', rate: 1 / 17500, decimals: 2 },
    JPY: { symbol: '¥', locale: 'ja-JP', rate: 1 / 106, decimals: 0 },
    MYR: { symbol: 'RM', locale: 'ms-MY', rate: 1 / 3650, decimals: 2 },
    AUD: { symbol: 'A$', locale: 'en-AU', rate: 1 / 10550, decimals: 2 }
  };

  const CARD_THEMES = {
    emerald: { bg: 'linear-gradient(135deg, #0F5132 0%, #0A3A24 55%, #062416 100%)', accent: '#34D399', badge: 'PRIMARY' },
    obsidian: { bg: 'linear-gradient(135deg, #1E2421 0%, #111613 55%, #070908 100%)', accent: '#10B981', badge: 'BLACK' },
    bca: { bg: 'linear-gradient(135deg, #0A3D62 0%, #072A44 55%, #041929 100%)', accent: '#38BDF8', badge: 'BANK' },
    mandiri: { bg: 'linear-gradient(135deg, #163A5F 0%, #0E253D 55%, #091726 100%)', accent: '#FBBF24', badge: 'BANK' },
    bni: { bg: 'linear-gradient(135deg, #0F4C5C 0%, #0A323D 55%, #061E24 100%)', accent: '#FB923C', badge: 'BANK' },
    ewallet: { bg: 'linear-gradient(135deg, #134E4A 0%, #0D3532 55%, #071F1D 100%)', accent: '#2DD4BF', badge: 'E-WALLET' },
    gold: { bg: 'linear-gradient(135deg, #423315 0%, #291F0C 55%, #171106 100%)', accent: '#F59E0B', badge: 'VAULT' }
  };

  /* --------------------------------------------------------------------------
   * 2. BILINGUAL DICTIONARY (ID / EN)
   * -------------------------------------------------------------------------- */
  const i18n = {
    en: {
      'app-desc': 'Enterprise Wealth Management', 'login-title': 'Log in to Account',
      'lbl-email': 'Email Address', 'ph-email': 'example@gmail.com',
      'lbl-pass': 'Password', 'ph-pass': '••••••••',
      'btn-login': 'Confirm Identity', 'txt-hello': 'Hello,', 'btn-logout': 'Logout',
      'dash-bal': 'Current Balance', 'dash-sum': 'Monthly Summary',
      'dash-inc': 'Income', 'dash-exp': 'Expenditure', 'dash-qm': 'Quick Menu',
      'qm-topup': 'Top up', 'qm-pay': 'Pay', 'qm-tf': 'Transfer', 'qm-rec': 'Recurring',
      'dash-sub': 'Active Subscriptions', 'btn-add-sub': '+ Add Bill',
      'dash-debt': 'Debts & Receivables', 'btn-add-debt': '+ Add Debt',
      'txt-mydebt': 'My Debt', 'txt-receivable': 'Receivables',
      'dash-acc': 'Your Accounts', 'btn-add-acc': '+ Add Account',
      'alert-due-title': 'Due Date Reminders',
      'cal-title': 'Transaction Calendar', 'cal-month': 'Month',
      'day-sun': 'Sun', 'day-mon': 'Mon', 'day-tue': 'Tue', 'day-wed': 'Wed', 'day-thu': 'Thu', 'day-fri': 'Fri', 'day-sat': 'Sat',
      'cal-today': "Today's Transactions", 'port-title': 'Assets & Portfolio',
      'btn-buy-asset': '+ Buy Asset', 'port-dist': 'Wealth Distribution', 'port-net': 'Total Net Asset',
      'port-list': 'Asset Ownership List', 'port-prog': 'Target Savings Progress',
      'btn-add-goal': '+ Create Target', 'hist-title': 'Financial Recap',
      'btn-month': 'This Month', 'btn-7days': 'Last 7 Days', 'btn-custom': 'Custom Date',
      'lbl-from': 'From', 'lbl-to': 'To', 'txt-diff': 'Difference', 'hist-cat': 'Category Details',
      'txt-total': 'Total', 'hist-list': 'Transaction List',
      'btn-reset-filter': 'Reset Filter', 'ph-hist-search': 'Search note, category, or amount...',
      'opt-all-acc': 'All Accounts', 'opt-all-cat': 'All Categories',
      'nav-home': 'Home', 'nav-cal': 'Calendar', 'nav-port': 'Assets', 'nav-hist': 'History',
      'mod-trx-in': 'New Income', 'mod-trx-out': 'New Expenditure',
      'lbl-amount': 'Amount', 'ph-desc': 'What is this for?', 'btn-save-trx': 'Save',
      'mod-tf-title': 'Transfer Funds', 'lbl-tf-amount': 'Transfer Amount',
      'lbl-from-acc': 'From Account', 'lbl-to-acc': 'To Account', 'lbl-admin': 'Admin Fee',
      'ph-tf-desc': 'Additional Notes (Optional)', 'btn-send': 'Send Funds',
      'mod-rec-title': 'New Subscription', 'lbl-rec-amount': 'Bill Amount',
      'ph-rec-name': 'Service Name (e.g., Netflix)', 'lbl-freq': 'Frequency',
      'lbl-date': 'Date', 'lbl-cut': 'Deduct From', 'btn-save-rec': 'Save Subscription',
      'mod-buy-title': 'Buy New Asset', 'lbl-unit': 'Purchase Units', 'lbl-price': 'Price per Unit (Rp)',
      'btn-confirm-buy': 'Confirm Purchase', 'mod-sell-title': 'Sell Asset',
      'lbl-sell-unit': 'Units to Sell', 'lbl-sell-price': 'Selling Price per Unit (Rp)',
      'lbl-cair': 'Liquidate To', 'btn-sell': 'Sell Now', 'mod-wd-title': 'Withdraw Funds',
      'txt-wd-reason': 'Choose reason for withdrawing from target', 'ph-wd-amount': 'Withdrawal Amount',
      'btn-wd-temp': 'Temporary Use Only', 'btn-wd-done': 'Target Achieved! (Finish)',
      'btn-cancel': 'Cancel', 'mod-add-title': 'Add Savings', 'txt-add-desc': 'Saving for target',
      'ph-add-amount': 'Savings Amount', 'btn-add-save': 'Save Savings',
      'mod-goal-title': 'New Savings Target', 'ph-goal-name': 'Target Name',
      'ph-goal-amount': 'Target Amount (Rp)', 'btn-create-goal': 'Create Target',
      'mod-debt-title': 'Debt / Receivable', 'opt-utang': 'I Owe (Debt)', 'opt-piutang': 'They Owe (Receivable)',
      'ph-debt-name': 'Person/Entity Name', 'ph-debt-amount': 'Amount (Rp)', 'btn-save-debt': 'Save Record',
      'no-acc': 'No account data yet.', 'no-goal': 'No active savings targets yet.',
      'no-rec': 'No active subscriptions yet.', 'no-asset': 'No investment assets yet.',
      'no-trx': 'No transactions found.', 'no-trx-today': 'No transactions today.',
      'no-data-period': 'No data for this period.', 'max': 'Max', 'unit': 'Unit',
      'live': 'Live', 'avg': 'Avg', 'from-trx': 'From', 'transactions': 'transactions',
      'sync': 'SYNCHRONIZING...', 'tot-inc': 'Total Income', 'tot-exp': 'Total Expenditure', 'tot-tf': 'Total Transfer',
      'month-names': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'freq-mo': 'Monthly', 'freq-yr': 'Yearly', 'dtl-title': 'Transaction Detail',
      'dtl-date': 'Date and Time', 'dtl-type': 'Transaction Type', 'dtl-cat': 'Category',
      'dtl-acc': 'Source of Funds', 'dtl-items': 'Purchased Items', 'type-inc': 'Income', 'type-exp': 'Expenditure',
      'txt-analyze': 'ANALYZING RECEIPT...', 'txt-extract': 'EXTRACTING DATA...',
      'err-scan-fail': 'Failed to read receipt: ', 'err-scan-sys': 'System error occurred during scan.',
      'txt-unknown-merchant': 'UNKNOWN MERCHANT', 'confirm-close-trx': 'Are you sure you want to close? Unsaved data will be lost.',
      'mod-export-title': 'Account statement', 'txt-export-desc': 'View and download your available account statements.',
      'lbl-export-acc': 'Account', 'lbl-export-period': 'Select period',
      'opt-all-accounts': 'ALL ACCOUNTS', 'pdf-title': 'Account Statement', 'pdf-period': 'Period',
      'pdf-all-acc': 'ALL ACCOUNTS - COMBINED', 'pdf-system': 'Fintrack System', 'pdf-curr': 'Currency',
      'pdf-bal-start': 'Starting Balance', 'pdf-tot-in': 'Total Income', 'pdf-tot-out': 'Total Expense',
      'pdf-bal-end': 'Ending Balance', 'pdf-col-date': 'Date & Time', 'pdf-col-desc': 'Transaction Details',
      'pdf-col-nom': 'Nominal', 'pdf-col-bal': 'Balance',
      'pdf-footer': 'This document is printed automatically by the Fintrack Enterprise system and is a valid proof of transaction even without a physical signature.',
      'pdf-page': 'Page', 'pdf-of': 'of', 'mod-level-info-title': 'Fintrack Status',
      'txt-level-desc': 'Keep increasing your net worth to achieve financial freedom.',
      'lvl-1-name': 'Liability Elimination Phase', 'lvl-1-desc': 'Main focus is paying off consumptive debt to restore cash flow.',
      'lvl-2-name': 'Liquidity Protection Phase', 'lvl-2-desc': 'Debts are paid. Building an emergency fund buffer of at least 6x average monthly expenses.',
      'lvl-3-name': 'Capital Accumulation Phase', 'lvl-3-desc': 'Emergency fund secured. Start aggressive asset investment targeting around Rp50 Million.',
      'lvl-4-name': 'Specific Portfolio Allocation', 'lvl-4-desc': 'Total assets > Rp50 Million. Splitting portfolio based on risk management and long-term goals.',
      'lvl-5-name': 'Equity Maximization Phase', 'lvl-5-desc': 'Total assets > Rp250 Million. Focus on maximizing net worth and reducing productive debts (mortgage).',
      'lvl-6-name': 'Financial Independence', 'lvl-6-desc': 'Total Assets > 25x Yearly Expenses. Portfolio yield is able to automatically fund your lifestyle.',
      'msg-level-up': 'You have successfully advanced to a new financial phase.',
      'msg-level-down': 'Your financial phase has decreased. Time to re-evaluate your cash flow.',
      'txt-congrats': 'Congratulations!', 'txt-warning': 'Warning!', 'btn-continue': 'Continue',
      'title-pay-debt': 'Pay Debt', 'title-recv-debt': 'Receive Funds',
      'desc-pay-debt': 'Paying debt to', 'desc-recv-debt': 'Receiving funds from',
      'btn-pay-debt': 'Pay Now', 'btn-recv-debt': 'Receive Funds', 'txt-paid': 'Paid',
      'btn-pay-now': 'Pay Now', 'lbl-lot-owned': 'Lot / Unit Owned',
      'lbl-avg-price': 'Average Price', 'lbl-invested': 'Invested Amount', 'lbl-total-val': 'Total Value',
      'lbl-return': 'Return', 'btn-buy-asset-2': 'Buy', 'btn-hist-debt': 'History',
      'mod-debt-hist-title': 'Debt & Receivable History', 'tab-active': 'Active',
      'tab-lunas': 'Settled', 'txt-sisa': 'Remaining:',
      'lbl-asset-type': 'Asset Type', 'lbl-asset-symbol': 'Symbol Code', 'ph-asset-symbol': 'e.g., BTC, BBCA',
      'port-wallet-title': 'Investment Wallets', 'btn-add-wallet': '+ Add Wallet',
      'mod-add-wallet-title': 'New Wallet', 'lbl-wallet-name': 'Wallet Name',
      'ph-wallet-name': 'e.g., RDN Ajaib, Binance', 'lbl-wallet-bal': 'Initial Balance',
      'btn-save-wallet': 'Save Wallet', 'mod-wallet-detail-title': 'Wallet Detail',
      'btn-del-wallet': 'Delete Wallet', 'txt-added': 'Added', 'txt-deducted': 'Paid',
      'msg-del-wallet': 'Are you sure you want to delete this wallet?',
      'txt-debt-added': 'Debt Added', 'txt-recv-added': 'Receivable Added',
      'mod-trx-title': 'New Transaction'
    },
    id: {
      'app-desc': 'Manajemen Kekayaan Enterprise', 'login-title': 'Masuk ke Akun',
      'lbl-email': 'Alamat Email', 'ph-email': 'contoh@gmail.com',
      'lbl-pass': 'Kata Sandi', 'ph-pass': '••••••••',
      'btn-login': 'Konfirmasi Identitas', 'txt-hello': 'Halo,', 'btn-logout': 'Keluar',
      'dash-bal': 'Saldo Saat Ini', 'dash-sum': 'Ringkasan Bulanan',
      'dash-inc': 'Pemasukan', 'dash-exp': 'Pengeluaran', 'dash-qm': 'Menu Cepat',
      'qm-topup': 'Isi Saldo', 'qm-pay': 'Bayar', 'qm-tf': 'Transfer', 'qm-rec': 'Rutin',
      'dash-sub': 'Langganan Aktif', 'btn-add-sub': '+ Tagihan',
      'dash-debt': 'Utang & Piutang', 'btn-add-debt': '+ Tambah Utang',
      'txt-mydebt': 'Utang Saya', 'txt-receivable': 'Piutang',
      'dash-acc': 'Akun Kamu', 'btn-add-acc': '+ Tambah Akun',
      'alert-due-title': 'Pengingat Jatuh Tempo',
      'cal-title': 'Kalender Transaksi', 'cal-month': 'Bulan',
      'day-sun': 'Min', 'day-mon': 'Sen', 'day-tue': 'Sel', 'day-wed': 'Rab', 'day-thu': 'Kam', 'day-fri': 'Jum', 'day-sat': 'Sab',
      'cal-today': 'Transaksi Hari Ini', 'port-title': 'Aset & Portofolio',
      'btn-buy-asset': '+ Beli Aset', 'port-dist': 'Distribusi Kekayaan',
      'port-net': 'Total Aset Bersih', 'port-list': 'Daftar Kepemilikan Aset',
      'port-prog': 'Progres Target Tabungan', 'btn-add-goal': '+ Buat Target',
      'hist-title': 'Rekap Keuangan', 'btn-month': 'Bulan Ini',
      'btn-7days': '7 Hari Terakhir', 'btn-custom': 'Tanggal Kustom',
      'lbl-from': 'Dari', 'lbl-to': 'Sampai', 'txt-diff': 'Selisih Bersih',
      'hist-cat': 'Detail Kategori', 'txt-total': 'Total', 'hist-list': 'Daftar Transaksi',
      'btn-reset-filter': 'Reset Filter', 'ph-hist-search': 'Cari keterangan, kategori, atau nominal...',
      'opt-all-acc': 'Semua Akun', 'opt-all-cat': 'Semua Kategori',
      'nav-home': 'Beranda', 'nav-cal': 'Kalender', 'nav-port': 'Aset', 'nav-hist': 'Mutasi',
      'mod-trx-in': 'Pemasukan Baru', 'mod-trx-out': 'Pengeluaran Baru',
      'lbl-amount': 'Nominal', 'ph-desc': 'Untuk apa ini?', 'btn-save-trx': 'Simpan Transaksi',
      'mod-tf-title': 'Transfer Dana', 'lbl-tf-amount': 'Nominal Transfer',
      'lbl-from-acc': 'Dari Akun', 'lbl-to-acc': 'Ke Akun', 'lbl-admin': 'Biaya Admin',
      'ph-tf-desc': 'Catatan Tambahan (Opsional)', 'btn-send': 'Kirim Dana',
      'mod-rec-title': 'Langganan Baru', 'lbl-rec-amount': 'Nominal Tagihan',
      'ph-rec-name': 'Nama Layanan (mis: Netflix)', 'lbl-freq': 'Frekuensi',
      'lbl-date': 'Tanggal', 'lbl-cut': 'Potong dari Akun', 'btn-save-rec': 'Simpan Langganan',
      'mod-buy-title': 'Beli Aset Baru', 'lbl-unit': 'Unit Pembelian',
      'lbl-price': 'Harga Satuan (Rp)', 'btn-confirm-buy': 'Konfirmasi Pembelian',
      'mod-sell-title': 'Jual Aset', 'lbl-sell-unit': 'Unit Dijual',
      'lbl-sell-price': 'Harga Jual per Unit (Rp)', 'lbl-cair': 'Cairkan Ke',
      'btn-sell': 'Jual Sekarang', 'mod-wd-title': 'Pencairan Dana',
      'txt-wd-reason': 'Pilih alasan pencairan dana untuk target', 'ph-wd-amount': 'Nominal Tarik',
      'btn-wd-temp': 'Hanya Pemakaian Sementara', 'btn-wd-done': 'Target Tercapai! (Selesai)',
      'btn-cancel': 'Batal', 'mod-add-title': 'Tambah Tabungan',
      'txt-add-desc': 'Menabung untuk target', 'ph-add-amount': 'Nominal Tabung',
      'btn-add-save': 'Simpan Tabungan', 'mod-goal-title': 'Target Tabungan Baru',
      'ph-goal-name': 'Nama Target', 'ph-goal-amount': 'Nominal Target (Rp)',
      'btn-create-goal': 'Buat Target', 'mod-debt-title': 'Utang / Piutang',
      'opt-utang': 'Saya Berutang (Utang)', 'opt-piutang': 'Orang Berutang (Piutang)',
      'ph-debt-name': 'Nama Instansi/Orang', 'ph-debt-amount': 'Nominal (Rp)',
      'btn-save-debt': 'Simpan Catatan', 'no-acc': 'Belum ada data akun.',
      'no-goal': 'Belum ada target tabungan aktif.', 'no-rec': 'Belum ada langganan aktif.',
      'no-asset': 'Belum memiliki aset investasi.', 'no-trx': 'Belum ada mutasi.',
      'no-trx-today': 'Tidak ada transaksi pada hari ini.', 'no-data-period': 'Tidak ada data pada periode ini.',
      'max': 'Maks', 'unit': 'Unit', 'live': 'Live', 'avg': 'Rata-rata',
      'from-trx': 'Dari', 'transactions': 'transaksi', 'sync': 'SINKRONISASI...',
      'tot-inc': 'Total Pemasukan', 'tot-exp': 'Total Pengeluaran', 'tot-tf': 'Total Transfer',
      'month-names': ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      'freq-mo': 'Bulanan', 'freq-yr': 'Tahunan', 'dtl-title': 'Detail Transaksi',
      'dtl-date': 'Tanggal dan waktu', 'dtl-type': 'Tipe transaksi', 'dtl-cat': 'Kategori',
      'dtl-acc': 'Sumber dana', 'dtl-items': 'Rincian Barang', 'type-inc': 'Pemasukan',
      'type-exp': 'Pengeluaran', 'txt-analyze': 'MENGANALISA NOTA...', 'txt-extract': 'MENGEKSTRAK DATA...',
      'err-scan-fail': 'Gagal membaca nota: ', 'err-scan-sys': 'Terjadi kesalahan sistem saat scan.',
      'txt-unknown-merchant': 'TOKO TIDAK TERBACA', 'confirm-close-trx': 'Apakah Anda yakin ingin menutup? Data yang belum disimpan akan hilang.',
      'mod-export-title': 'Laporan mutasi rekening', 'txt-export-desc': 'Lihat dan download mutasi rekening kamu yang tersedia.',
      'lbl-export-acc': 'Rekening', 'lbl-export-period': 'Pilih periode',
      'opt-all-accounts': 'SEMUA REKENING', 'pdf-title': 'Laporan Mutasi Rekening',
      'pdf-period': 'Periode', 'pdf-all-acc': 'SEMUA REKENING - GABUNGAN',
      'pdf-system': 'Sistem Fintrack', 'pdf-curr': 'Mata Uang',
      'pdf-bal-start': 'Saldo Awal', 'pdf-tot-in': 'Total Pemasukan',
      'pdf-tot-out': 'Total Pengeluaran', 'pdf-bal-end': 'Saldo Akhir',
      'pdf-col-date': 'Tanggal & Waktu', 'pdf-col-desc': 'Rincian Transaksi',
      'pdf-col-nom': 'Nominal', 'pdf-col-bal': 'Saldo',
      'pdf-footer': 'Dokumen ini dicetak secara otomatis oleh sistem Fintrack Enterprise dan merupakan bukti transaksi yang sah meskipun tanpa tanda tangan fisik.',
      'pdf-page': 'Halaman', 'pdf-of': 'dari', 'mod-level-info-title': 'Status Fintrack',
      'txt-level-desc': 'Tingkatkan terus kekayaan bersih Anda untuk mencapai kebebasan finansial.',
      'lvl-1-name': 'Fase Eliminasi Liabilitas', 'lvl-1-desc': 'Fokus utama melunasi hutang konsumtif untuk memulihkan arus kas (cash flow).',
      'lvl-2-name': 'Fase Proteksi Likuiditas', 'lvl-2-desc': 'Hutang telah lunas. Membangun bantalan kas darurat minimal 6x rata-rata pengeluaran bulanan.',
      'lvl-3-name': 'Fase Akumulasi Kapital', 'lvl-3-desc': 'Dana darurat terpenuhi. Mulai investasi aset agresif dengan target aset mendekati Rp50 Juta.',
      'lvl-4-name': 'Alokasi Portofolio Spesifik', 'lvl-4-desc': 'Total aset > Rp50 Juta. Memecah portofolio berdasarkan manajemen risiko dan tujuan spesifik jangka panjang.',
      'lvl-5-name': 'Fase Maksimalisasi Ekuitas', 'lvl-5-desc': 'Total aset > Rp250 Juta. Fokus memaksimalkan kekayaan bersih dan mengurangi hutang produktif (KPR dll).',
      'lvl-6-name': 'Kemerdekaan Finansial', 'lvl-6-desc': 'Total Aset > 25x Pengeluaran Tahunan. Imbal hasil portofolio mampu membiayai gaya hidup secara otomatis.',
      'msg-level-up': 'Anda berhasil naik ke fase finansial baru.', 'msg-level-down': 'Fase finansial Anda turun. Waktunya mengevaluasi kembali arus kas Anda.',
      'txt-congrats': 'Selamat!', 'txt-warning': 'Perhatian!', 'btn-continue': 'Lanjutkan',
      'title-pay-debt': 'Bayar Hutang', 'title-recv-debt': 'Terima Piutang',
      'desc-pay-debt': 'Membayar hutang kepada', 'desc-recv-debt': 'Menerima piutang dari',
      'btn-pay-debt': 'Bayar Sekarang', 'btn-recv-debt': 'Terima Dana', 'txt-paid': 'Lunas',
      'btn-pay-now': 'Bayar Tagihan', 'lbl-lot-owned': 'Lot Dimiliki',
      'lbl-avg-price': 'Harga Rata-rata', 'lbl-invested': 'Diinvestasikan',
      'lbl-total-val': 'Total Nilai', 'lbl-return': 'Return', 'btn-buy-asset-2': 'Beli',
      'btn-hist-debt': 'Riwayat', 'mod-debt-hist-title': 'Riwayat Hutang & Piutang',
      'tab-active': 'Berjalan', 'tab-lunas': 'Lunas', 'txt-sisa': 'Sisa:',
      'lbl-asset-type': 'Jenis Aset', 'lbl-asset-symbol': 'Simbol Kode', 'ph-asset-symbol': 'misal: BTC, BBCA',
      'port-wallet-title': 'Dompet Investasi', 'btn-add-wallet': '+ Tambah Dompet',
      'mod-add-wallet-title': 'Dompet Baru', 'lbl-wallet-name': 'Nama Dompet',
      'ph-wallet-name': 'mis. RDN Ajaib, Binance', 'lbl-wallet-bal': 'Saldo Awal',
      'btn-save-wallet': 'Simpan Dompet', 'mod-wallet-detail-title': 'Detail Dompet',
      'btn-del-wallet': 'Hapus Dompet', 'txt-added': 'Penambahan', 'txt-deducted': 'Pembayaran',
      'msg-del-wallet': 'Yakin ingin menghapus dompet ini?',
      'txt-debt-added': 'Hutang Bertambah', 'txt-recv-added': 'Piutang Bertambah',
      'mod-trx-title': 'Transaksi Baru'
    }
  };

  /* --------------------------------------------------------------------------
   * 3. RUNTIME STATE
   * -------------------------------------------------------------------------- */
  let currentLang = localStorage.getItem(LANG_KEY) || 'id';
  let currentCurrency = localStorage.getItem(CURRENCY_KEY) || 'IDR';
  let isPrivate = localStorage.getItem(PRIVACY_KEY) === 'true';

  let sessionEmail = null;
  let sessionName = null;
  let sessionToken = null;
  let appData = {};

  let activePage = 'dashboard';
  let activeDeckIndex = 0;
  let dueBannerDismissed = false;

  let histFilterTime = 'month';
  let histToggleType = 'OUTFLOW';
  let historySearchQuery = '';
  let historyAccountFilter = 'ALL';
  let historyCategoryFilter = 'ALL';

  let myChartInstance = null;
  let portoChartInstance = null;

  let activeGoalName = null;
  let activeGoalId = null;
  let activeAccountDetail = null;
  let activeWalletNameForDetail = null;
  let activeDetailTrxId = null;

  let currentCalMonth = new Date().getMonth();
  let currentCalYear = new Date().getFullYear();
  let activeCalDay = new Date().getDate();

  let currentScannedItems = [];
  let debtHistoryTab = 'ACTIVE';
  let exportSelectedYear = new Date().getFullYear();

  window.isAdvanceMode = false;
  window.currentActiveFilter = '1H';
  window.currentActiveCurrency = 'IDR';
  window.usdExchangeRate = 16250;
  window.lastAssetData = null;

  // Live USD exchange rate fetch
  if (typeof window.hasInitiatedForexFetch === 'undefined') {
    window.hasInitiatedForexFetch = true;
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => {
        if (data && data.rates && data.rates.IDR) {
          window.usdExchangeRate = data.rates.IDR;
          CURRENCY_CONFIG.USD.rate = 1 / data.rates.IDR;
        }
      })
      .catch(() => console.warn('Forex API fallback active.'));
  }

  /* --------------------------------------------------------------------------
   * 4. CORE HELPERS (CURRENCY, PRIVACY, THEME, I18N, TOAST)
   * -------------------------------------------------------------------------- */
  function getApiUrl() {
    return localStorage.getItem(GAS_URL_KEY) || DEFAULT_API_URL;
  }

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.en && i18n.en[key]) || key;
  }

  function escapeHtml(text) {
    if (text === undefined || text === null) return '';
    return text.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getProp(obj, ...possibleKeys) {
    if (!obj) return undefined;
    const keys = Object.keys(obj);
    for (let pk of possibleKeys) {
      const target = pk.toString().replace(/[_ ]/g, '').toLowerCase();
      const match = keys.find(k => k.toString().replace(/[_ ]/g, '').toLowerCase() === target);
      if (match && obj[match] !== undefined && obj[match] !== '') return obj[match];
    }
    return undefined;
  }

  function extractNumber(val) {
    if (val === undefined || val === null || val === '') return 0;
    if (typeof val === 'number') return isNaN(val) ? 0 : val;
    let str = val.toString().replace(/Rp/gi, '').trim();
    if (str.indexOf(',') > -1 && str.indexOf('.') !== -1 && str.lastIndexOf(',') > str.lastIndexOf('.')) {
      str = str.replace(/\./g, '').replace(',', '.');
    } else if (str.indexOf(',') > -1 && str.indexOf('.') === -1) {
      str = str.replace(',', '.');
    } else if (str.indexOf(',') > -1) {
      str = str.replace(/,/g, '');
    } else if (str.indexOf('.') > -1 && str.split('.').length > 2) {
      str = str.replace(/\./g, '');
    } else if (str.indexOf('.') > -1 && str.split('.')[1] && str.split('.')[1].length === 3) {
      str = str.replace(/\./g, '');
    }
    const finalNum = parseFloat(str);
    return isNaN(finalNum) ? 0 : finalNum;
  }

  function formatMoney(numIDR, overrideCurrency) {
    const code = overrideCurrency || currentCurrency || 'IDR';
    const cfg = CURRENCY_CONFIG[code] || CURRENCY_CONFIG.IDR;
    const numeric = isNaN(numIDR) ? 0 : Number(numIDR);
    const converted = numeric * cfg.rate;
    const formatted = new Intl.NumberFormat(cfg.locale, {
      minimumFractionDigits: cfg.decimals,
      maximumFractionDigits: cfg.decimals
    }).format(Math.abs(converted));
    const sign = numeric < 0 ? '-' : '';
    return `${sign}${cfg.symbol} ${formatted}`;
  }

  function toRp(num) {
    return formatMoney(num, currentCurrency);
  }

  function toExactIDR(num) {
    if (isNaN(num)) num = 0;
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  }

  function formatShortNumber(num) {
    if (isNaN(num)) return 0;
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + 'K';
    return num;
  }

  function getTimezoneLabel() {
    const offsetMin = -new Date().getTimezoneOffset();
    if (offsetMin === 420) return 'WIB';
    if (offsetMin === 480) return 'WITA';
    if (offsetMin === 540) return 'WIT';
    const hours = Math.floor(Math.abs(offsetMin) / 60);
    const mins = Math.abs(offsetMin) % 60;
    const sign = offsetMin >= 0 ? '+' : '-';
    return `UTC${sign}${hours}${mins ? ':' + mins.toString().padStart(2, '0') : ''}`;
  }

  function showToast(message, type = 'info') {
    const toast = document.getElementById('fintrack-toast');
    const textEl = document.getElementById('fintrack-toast-text');
    const iconEl = document.getElementById('fintrack-toast-icon');
    if (!toast || !textEl) return;

    textEl.innerText = message;
    if (iconEl) {
      iconEl.className = 'w-2 h-2 rounded-full shrink-0 ' + (
        type === 'error' ? 'bg-red-400' :
        type === 'warning' ? 'bg-amber-400' : 'bg-emerald-400'
      );
    }

    toast.classList.remove('opacity-0', '-translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', '-translate-y-4');
    }, 2600);
  }

  function showLoading(show) {
    const el = document.getElementById('loading-overlay');
    if (!el) return;
    if (show) {
      el.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
      void el.offsetWidth;
      el.classList.add('opacity-100');
    } else {
      el.classList.remove('opacity-100');
      el.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => el.classList.add('hidden'), 300);
    }
  }

  window.setBtnState = function(id, isProcessing) {
    const btn = document.getElementById(id);
    if (!btn) return;
    if (isProcessing) {
      btn.disabled = true;
      btn.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
    } else {
      btn.disabled = false;
      btn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
    }
  };

  function formatRupiahInput(inputElement) {
    if (!inputElement) return;
    let numericValue = inputElement.value.replace(/[^0-9]/g, '');
    inputElement.value = numericValue ? new Intl.NumberFormat('id-ID').format(numericValue) : '';
    if (inputElement.id === 'form-trx-amount') validateTrxForm();
  }

  window.formatDecimalInput = function(el) {
    if (!el) return;
    let val = el.value.replace(/[^0-9.]/g, '');
    if ((val.match(/\./g) || []).length > 1) {
      val = val.substring(0, val.lastIndexOf('.'));
    }
    el.value = val;
  };

  function quickAddAmount(val) {
    const el = document.getElementById('form-trx-amount');
    if (!el) return;
    const current = extractNumber(el.value);
    el.value = new Intl.NumberFormat('id-ID').format(current + val);
    validateTrxForm();
  }

  function validateTrxForm() {
    const amountInput = document.getElementById('form-trx-amount');
    const btn = document.getElementById('form-trx-submit-btn');
    if (!amountInput || !btn) return;
    if (extractNumber(amountInput.value) > 0) {
      btn.disabled = false;
      btn.classList.remove('bg-stone-300', 'dark:bg-stone-800', 'text-stone-400', 'dark:text-stone-500', 'cursor-not-allowed', 'shadow-none');
      btn.classList.add('bg-[#0F5132]', 'hover:bg-[#0B3F27]', 'dark:bg-emerald-500', 'dark:hover:bg-emerald-400', 'text-white', 'dark:text-[#070908]', 'shadow-lg', 'shadow-emerald-950/20');
    } else {
      btn.disabled = true;
      btn.classList.add('bg-stone-300', 'dark:bg-stone-800', 'text-stone-400', 'dark:text-stone-500', 'cursor-not-allowed', 'shadow-none');
      btn.classList.remove('bg-[#0F5132]', 'hover:bg-[#0B3F27]', 'dark:bg-emerald-500', 'dark:hover:bg-emerald-400', 'text-white', 'dark:text-[#070908]', 'shadow-lg', 'shadow-emerald-950/20');
    }
  }

  /* --------------------------------------------------------------------------
   * 5. THEME, LANGUAGE, CURRENCY & PRIVACY
   * -------------------------------------------------------------------------- */
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
    updateThemeIcon(isDark);
  }

  function toggleTheme() {
    const isDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
    if (activePage === 'portfolio') renderPortfolioScreen(true);
    if (activePage === 'history') renderHistoryScreen(true);
  }

  function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    icon.innerHTML = isDark
      ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>'
      : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
  }

  function setCurrency(code) {
    if (!CURRENCY_CONFIG[code]) return;
    currentCurrency = code;
    localStorage.setItem(CURRENCY_KEY, code);
    const sel = document.getElementById('header-currency-select');
    if (sel) sel.value = code;
    renderAllHTMLData();
    showToast(`${currentLang === 'id' ? 'Mata uang' : 'Currency'}: ${code}`, 'success');
  }

  window.toggleLanguage = function() {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem(LANG_KEY, currentLang);
    applyLanguage();
    updateLanguageSwitchUI();
    if (sessionEmail) {
      renderAllHTMLData();
      const modExport = document.getElementById('modal-export-pdf');
      if (modExport && !modExport.classList.contains('hidden')) renderExportModal();
      const modDebtHist = document.getElementById('modal-debt-history');
      if (modDebtHist && !modDebtHist.classList.contains('hidden')) renderDebtHistory();
    }
  };

  window.updateLanguageSwitchUI = function() {
    const btnId = document.getElementById('lang-btn-id');
    const btnEn = document.getElementById('lang-btn-en');
    if (!btnId || !btnEn) return;
    if (currentLang === 'en') {
      btnEn.className = 'px-2 py-1 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] shadow-sm transition-all duration-200';
      btnId.className = 'px-2 py-1 rounded-full text-stone-500 dark:text-stone-400 transition-all duration-200';
    } else {
      btnId.className = 'px-2 py-1 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] shadow-sm transition-all duration-200';
      btnEn.className = 'px-2 py-1 rounded-full text-stone-500 dark:text-stone-400 transition-all duration-200';
    }
  };

  window.applyLanguage = function() {
    const dict = i18n[currentLang] || i18n.id;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = dict[key];
        else if (el.tagName === 'OPTION') el.innerText = dict[key];
        else if (el.innerHTML.includes('<b>')) el.innerHTML = dict[key];
        else el.innerText = dict[key];
      }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('.lang-custom').forEach(el => {
      const textToSet = currentLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
      if (textToSet) {
        if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) el.placeholder = textToSet;
        else el.innerText = textToSet;
      }
    });
  };

  window.togglePrivacy = function() {
    isPrivate = !isPrivate;
    localStorage.setItem(PRIVACY_KEY, String(isPrivate));
    applyPrivacyMasks();
    const icon = document.getElementById('privacy-icon');
    if (icon) {
      icon.innerHTML = isPrivate
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>';
    }
  };

  window.applyPrivacyMasks = function() {
    document.querySelectorAll('.privacy-mask').forEach(el => {
      const val = extractNumber(el.getAttribute('data-value') || 0);
      el.innerText = isPrivate ? '••••••••' : toRp(val);
    });
  };

  /* --------------------------------------------------------------------------
   * 6. ASSET & LOGO RESOLVERS (ZERO-404 FALLBACKS)
   * -------------------------------------------------------------------------- */
  function getAccountLogo(accountName) {
    if (!accountName) return null;
    const name = accountName.toLowerCase();
    if (name.startsWith('valas_')) return null;
    if (name.includes('bni')) return 'Logo_Bank/BNI_Logo.png';
    if (name.includes('bri')) return 'Logo_Bank/BRI_Logo.png';
    if (name.includes('mandiri')) return 'Logo_Bank/MANDIRI_Logo.png';
    if (name.includes('shopee') || name.includes('spay')) return 'Logo_Bank/ShopeePay_Logo.png';
    if (name.includes('gopay')) return 'Logo_Bank/Gopay_Logo.png';
    if (name.includes('ovo')) return 'Logo_Bank/OVO_Logo.png';
    if (name.includes('dana')) return 'Logo_Bank/Dana_Logo.png';
    if (name.includes('link')) return 'Logo_Bank/Linkaja_Logo.png';
    if (name.includes('tunai') || name.includes('cash') || name.includes('dompet')) return 'Logo_Bank/Cash_Logo.png';
    return null;
  }

  function renderAccountBadgeHtml(accountName, sizeClass = 'w-10 h-10') {
    const logoSrc = getAccountLogo(accountName);
    const initial = escapeHtml((accountName || 'AK').substring(0, 2).toUpperCase());
    if (logoSrc) {
      return `<img src="${logoSrc}" onerror="this.onerror=null; this.outerHTML='<div class=\\'${sizeClass} rounded-full bg-[#EDF5F0] dark:bg-emerald-500/15 flex items-center justify-center text-[#0F5132] dark:text-emerald-300 font-extrabold text-xs shrink-0\\'>${initial}</div>';" class="${sizeClass} object-contain rounded-full bg-white dark:bg-[#161D19] border border-stone-200/70 dark:border-stone-800 p-1 shrink-0">`;
    }
    return `<div class="${sizeClass} rounded-full bg-[#EDF5F0] dark:bg-emerald-500/15 flex items-center justify-center text-[#0F5132] dark:text-emerald-300 font-extrabold text-xs shrink-0">${initial}</div>`;
  }

  function getCategoryIcon(cat) {
    const map = {
      'Makanan': '🍽️', 'Hiburan': '🎬', 'Tagihan': '🧾',
      'Tabungan & Investasi': '📈', 'Kewajiban & Sosial': '🤝',
      'Transportasi': '🚗', 'Gaji & Pemasukan': '💼',
      'Hasil Usaha': '🏪', 'Pemberian': '🎁', 'Biaya Admin': '🏦', 'Dividen': '💰'
    };
    return map[cat] || '🏷️';
  }

  function getAssetLogoHtml(simbol) {
    if (!simbol) return '';
    let s = simbol.toUpperCase().trim();
    let cryptoBase = s.replace('USD', '').replace('IDR', '').toLowerCase();
    let fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.substring(0, 2))}&background=0F5132&color=fff&rounded=true&bold=true`;
    let imgUrl = `https://assets.coincap.io/assets/icons/${cryptoBase}@2x.png`;
    if (s.length === 4 && !s.includes('USD') && !s.includes('IDR')) {
      imgUrl = fallbackUrl;
    }
    return `<img src="${imgUrl}" onerror="this.onerror=null; this.src='${fallbackUrl}';" class="w-10 h-10 object-contain rounded-full bg-white dark:bg-[#161D19] border border-stone-200/70 dark:border-stone-800 p-1 shrink-0">`;
  }

  /* --------------------------------------------------------------------------
   * 7. AUTHENTICATION & HARDENED API CLIENT
   * -------------------------------------------------------------------------- */
  function clearSessionAndRedirect(msg) {
    localStorage.removeItem(SESSION_EMAIL_KEY);
    localStorage.removeItem(SESSION_NAME_KEY);
    localStorage.removeItem(SESSION_TOKEN_KEY);
    sessionEmail = null;
    sessionName = null;
    sessionToken = null;
    const appWrap = document.getElementById('app-wrapper');
    if (appWrap) appWrap.classList.add('hidden-page');
    const loginPage = document.getElementById('login-page');
    if (loginPage) loginPage.classList.remove('hidden-page');
    if (msg) showToast(msg, 'warning');
  }

  async function handleLogin() {
    const email = (document.getElementById('login-email')?.value || '').trim();
    const password = (document.getElementById('login-password')?.value || '').trim();
    if (!email || !password) {
      showToast(currentLang === 'id' ? 'Email & password wajib diisi.' : 'Email & password required.', 'warning');
      return;
    }

    setBtnState('btn-login', true);
    showLoading(true);
    try {
      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'login', email: email, password: password })
      });
      const result = await response.json();
      if (result.status === 'success' && result.token) {
        sessionEmail = result.email;
        sessionName = result.name;
        sessionToken = result.token;

        localStorage.setItem(SESSION_EMAIL_KEY, sessionEmail);
        localStorage.setItem(SESSION_NAME_KEY, sessionName);
        localStorage.setItem(SESSION_TOKEN_KEY, sessionToken);

        updateUserHeaderDisplay();
        document.getElementById('login-page').classList.add('hidden-page');
        document.getElementById('app-wrapper').classList.remove('hidden-page');
        await showPage('dashboard');
        await fetchAllData();
      } else {
        showToast(result.message || (currentLang === 'id' ? 'Login gagal.' : 'Login failed.'), 'error');
      }
    } catch (e) {
      showToast(currentLang === 'id' ? 'Kesalahan koneksi server.' : 'Server connection error.', 'error');
    } finally {
      setBtnState('btn-login', false);
      showLoading(false);
    }
  }

  async function handleLogout() {
    const tok = sessionToken;
    try {
      if (tok) {
        fetch(getApiUrl(), {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'logout', token: tok })
        }).catch(() => {});
      }
    } catch (e) {}
    clearSessionAndRedirect(currentLang === 'id' ? 'Berhasil keluar' : 'Logged out');
  }

  async function apiPost(payload) {
    if (!sessionEmail || !sessionToken) {
      clearSessionAndRedirect(currentLang === 'id' ? 'Sesi berakhir. Silakan login.' : 'Session expired. Please log in.');
      return false;
    }
    showLoading(true);
    try {
      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...payload, email: sessionEmail, token: sessionToken })
      });
      const result = await response.json();
      if (result.status === 'unauthorized') {
        clearSessionAndRedirect(result.message || 'Sesi tidak valid.');
        return false;
      }
      if (result.status === 'success') {
        return true;
      } else {
        showToast(result.message || 'Operasi gagal.', 'error');
        return false;
      }
    } catch (e) {
      showToast(currentLang === 'id' ? 'Gagal terhubung ke server.' : 'Network error.', 'error');
      return false;
    } finally {
      showLoading(false);
    }
  }

  async function fetchAllData() {
    if (!sessionEmail || !sessionToken) return;
    showLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 16000);

    try {
      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'getData', email: sessionEmail, token: sessionToken }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const result = await response.json();
      if (result.status === 'unauthorized') {
        clearSessionAndRedirect(result.message || 'Sesi tidak valid.');
        return;
      }
      if (result.status === 'success' && result.data) {
        appData = result.data;
        localStorage.setItem(CACHE_KEY, JSON.stringify(appData));
        renderAllHTMLData();
      }
    } catch (e) {
      clearTimeout(timeoutId);
      console.warn('Offline fallback active:', e);
      const offlineData = localStorage.getItem(CACHE_KEY);
      if (offlineData) {
        appData = JSON.parse(offlineData);
        showToast(currentLang === 'id' ? 'Mode Offline: Data sinkronisasi terakhir' : 'Offline Mode: Cached data', 'info');
        renderAllHTMLData();
      }
    } finally {
      showLoading(false);
    }
  }

  function updateUserHeaderDisplay() {
    const nameStr = sessionName || (sessionEmail ? sessionEmail.split('@')[0] : 'User');
    const dispEl = document.getElementById('user-display');
    if (dispEl) dispEl.innerText = nameStr + '!';
    const initEl = document.getElementById('user-avatar-initial');
    if (initEl) initEl.innerText = nameStr.charAt(0).toUpperCase();
  }

  /* --------------------------------------------------------------------------
   * 8. SPA ROUTER & NAVIGATION
   * -------------------------------------------------------------------------- */
  window.showPage = async function(pageId) {
    activePage = pageId;
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active-nav');
      btn.classList.add('text-stone-400');
    });
    const navTarget = document.getElementById('nav-' + pageId);
    if (navTarget) {
      navTarget.classList.add('active-nav');
      navTarget.classList.remove('text-stone-400');
    }

    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    if (!window.pageCache) window.pageCache = {};

    mainContent.classList.remove('active-page');
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(15px) scale(0.98)';

    setTimeout(async () => {
      if (!window.pageCache[pageId]) {
        showLoading(true);
        try {
          let res = await fetch(`pages/${pageId}.html?v=3.1`);
          if (!res.ok) res = await fetch(`${pageId}.html?v=3.1`);
          if (res.ok) {
            const htmlText = await res.text();
            if (htmlText.includes('Cannot GET') || htmlText.includes('404 Not Found')) throw new Error('File missing');
            window.pageCache[pageId] = htmlText;
          } else {
            throw new Error('HTTP error ' + res.status);
          }
        } catch (e) {
          mainContent.innerHTML = `
            <div class="flex flex-col items-center justify-center pt-24 text-center">
              <h2 class="text-lg font-bold text-stone-800 dark:text-white">Gagal Memuat Halaman</h2>
              <p class="text-xs text-stone-500 mt-2 max-w-[250px]">File <b>pages/${pageId}.html</b> tidak ditemukan.</p>
            </div>`;
          mainContent.classList.add('active-page');
          mainContent.style.opacity = '1';
          mainContent.style.transform = 'translateY(0) scale(1)';
          showLoading(false);
          return;
        }
        showLoading(false);
      }

      mainContent.innerHTML = window.pageCache[pageId];
      applyLanguage();

      try {
        if (pageId === 'dashboard') {
          renderDashboard();
          renderAccounts();
          renderRecurring();
          renderGoals();
        } else if (pageId === 'calendar') {
          renderCalendar();
        } else if (pageId === 'portfolio') {
          renderPortfolioScreen(true);
        } else if (pageId === 'history') {
          renderHistoryScreen(true);
        }
      } catch (e) {
        console.error('Render Error:', e);
      }

      applyPrivacyMasks();
      mainContent.classList.add('active-page');
      mainContent.style.opacity = '1';
      mainContent.style.transform = 'translateY(0) scale(1)';
    }, 120);
  };

  /* --------------------------------------------------------------------------
   * 9. MODAL MANAGEMENT
   * -------------------------------------------------------------------------- */
  window.openModal = function(id, type = null) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('hidden-page', 'hidden');
    el.style.display = '';

    if (id === 'modal-trx') {
      const catSelect = document.getElementById('form-trx-category');
      if (catSelect && catSelect.parentElement) catSelect.parentElement.classList.remove('hidden');

      document.getElementById('modal-trx-title').innerText = type === 'INFLOW' ? t('mod-trx-in') : t('mod-trx-out');
      document.getElementById('form-trx-tipe').value = type || 'OUTFLOW';
      if (catSelect) {
        catSelect.innerHTML = '';
        ((type === 'INFLOW') ? KATEGORI_INFLOW : KATEGORI_OUTFLOW).forEach(opt => {
          catSelect.innerHTML += `<option value="${opt}">${opt}</option>`;
        });
      }
      const now = new Date();
      document.getElementById('form-trx-date').value = now.toISOString().split('T')[0];
      document.getElementById('form-trx-time').value = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

      currentScannedItems = [];
      window.isAdvanceMode = false;
      const btnAdv = document.getElementById('btn-advance-mode');
      if (btnAdv) {
        btnAdv.classList.remove('bg-[#0F5132]', 'text-white');
        btnAdv.classList.add('text-[#0F5132]');
      }
      const itemListSec = document.getElementById('itemListSection');
      if (itemListSec) itemListSec.classList.add('hidden');
      validateTrxForm();
    } else if (id === 'modal-export-pdf') {
      renderExportModal();
    } else if (id === 'modal-debt-history') {
      renderDebtHistory();
    } else if (id === 'modal-settings') {
      const gasInput = document.getElementById('gas-url-input');
      if (gasInput) gasInput.value = getApiUrl();
    }
  };

  window.closeModal = function(id, forceClose = false) {
    if (id === 'modal-trx' && !forceClose) {
      const amt = extractNumber(document.getElementById('form-trx-amount')?.value);
      const desc = (document.getElementById('form-trx-desc')?.value || '').trim();
      if (amt > 0 || desc || currentScannedItems.length > 0) {
        const confirmMsg = t('confirm-close-trx');
        if (!confirm(confirmMsg)) return;
      }
    }

    const el = document.getElementById(id);
    if (el) el.classList.add('hidden-page', 'hidden');

    if (id === 'modal-trx') {
      document.getElementById('form-trx-amount').value = '';
      document.getElementById('form-trx-desc').value = '';
      if (document.getElementById('form-trx-admin')) document.getElementById('form-trx-admin').value = '';
      currentScannedItems = [];
      window.isAdvanceMode = false;
      const itemListSec = document.getElementById('itemListSection');
      if (itemListSec) itemListSec.classList.add('hidden');
    }
  };

  /* --------------------------------------------------------------------------
   * 10. ACCOUNT DECK (3D STACKED SLIDING CARDS) & ACCOUNT CRUD
   * -------------------------------------------------------------------------- */
  function getRegularAccounts() {
    const accounts = appData.M_Akun || [];
    return accounts
      .map(acc => {
        const idAkun = getProp(acc, 'ID_Akun', 'ID Akun', 'ID') || '';
        const namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun') || 'Akun';
        const tipeAkun = getProp(acc, 'Tipe_Akun', 'Tipe Akun') || 'Bank';
        const valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime');
        const valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal');
        const nominal = extractNumber((valReal !== undefined && valReal !== null && valReal !== '') ? valReal : valAwal);
        const atasNama = getProp(acc, 'Atas_Nama', 'Atas Nama') || '';
        const noRek = getProp(acc, 'Nomor_Rekening', 'Nomor Rekening', 'No_Rekening', 'Rekening') || '';
        return { acc, idAkun, namaAkun, tipeAkun, nominal, atasNama, noRek };
      })
      .filter(item => !(item.tipeAkun === 'Wallet Investasi' || item.namaAkun.toUpperCase().includes('RDN')))
      .sort((a, b) => b.nominal - a.nominal);
  }

  function resolveCardTheme(namaAkun, tipeAkun, idx) {
    const lower = (namaAkun || '').toLowerCase();
    const tipeLower = (tipeAkun || '').toLowerCase();
    if (lower.includes('bca')) return CARD_THEMES.bca;
    if (lower.includes('mandiri')) return CARD_THEMES.mandiri;
    if (lower.includes('bni')) return CARD_THEMES.bni;
    if (tipeLower.includes('wallet') || lower.includes('gopay') || lower.includes('ovo') || lower.includes('dana') || lower.includes('shopee') || lower.includes('link')) return CARD_THEMES.ewallet;
    if (tipeLower.includes('tunai') || lower.includes('cash')) return CARD_THEMES.gold;
    return idx % 2 === 0 ? CARD_THEMES.emerald : CARD_THEMES.obsidian;
  }

  function renderAccounts() {
    const stage = document.getElementById('accounts-list');
    const dotsEl = document.getElementById('accounts-deck-dots');
    const counterEl = document.getElementById('accounts-deck-counter');

    const selectTrx = document.getElementById('form-trx-account');
    const selectTfFrom = document.getElementById('form-tf-from');
    const selectTfTo = document.getElementById('form-tf-to');
    const selAst = document.getElementById('form-asset-account');
    const selSellAst = document.getElementById('form-sell-asset-account');
    const selWdGoal = document.getElementById('form-withdraw-account');
    const selAddGoal = document.getElementById('form-add-savings-account');
    const selRec = document.getElementById('form-rec-account');
    const selExport = document.getElementById('export-pdf-account');
    const selDiv = document.getElementById('form-dividend-account');

    const allAccounts = (appData.M_Akun || []).map(acc => {
      const namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun') || 'Akun';
      const tipeAkun = getProp(acc, 'Tipe_Akun', 'Tipe Akun') || '';
      const valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime');
      const valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal');
      const nominal = extractNumber((valReal !== undefined && valReal !== null && valReal !== '') ? valReal : valAwal);
      return { namaAkun, tipeAkun, nominal };
    }).sort((a, b) => b.nominal - a.nominal);

    let optsAll = '';
    let optsRegular = '';
    let optsExport = `<option value="ALL">${t('opt-all-accounts')}</option>`;

    allAccounts.forEach(item => {
      const isWallet = item.tipeAkun === 'Wallet Investasi' || item.namaAkun.toUpperCase().includes('RDN');
      optsAll += `<option value="${escapeHtml(item.namaAkun)}">${escapeHtml(item.namaAkun)}</option>`;
      optsExport += `<option value="${escapeHtml(item.namaAkun)}">${escapeHtml(item.namaAkun)}</option>`;
      if (!isWallet) {
        optsRegular += `<option value="${escapeHtml(item.namaAkun)}">${escapeHtml(item.namaAkun)}</option>`;
      }
    });

    // Foreign currency wallets from M_Portofolio
    const porto = appData.M_Portofolio || [];
    let valasAgg = {};
    porto.forEach(a => {
      if (getProp(a, 'Jenis_Aset', 'Jenis Aset', 'Jenis') === 'Valuta Asing') {
        const sim = getProp(a, 'Simbol', 'Nama Aset');
        const qty = parseFloat((getProp(a, 'Jumlah', 'Unit') || '0').toString().replace(',', '.')) || 0;
        valasAgg[sim] = (valasAgg[sim] || 0) + qty;
      }
    });
    for (let sim in valasAgg) {
      if (valasAgg[sim] > 0) {
        const valasOpt = `<option value="VALAS_${escapeHtml(sim)}">${escapeHtml(sim)} Wallet</option>`;
        optsAll += valasOpt;
        optsRegular += valasOpt;
        optsExport += valasOpt;
      }
    }

    if (selectTrx) selectTrx.innerHTML = optsRegular;
    if (selWdGoal) selWdGoal.innerHTML = optsRegular;
    if (selAddGoal) selAddGoal.innerHTML = optsRegular;
    if (selRec) selRec.innerHTML = optsRegular;
    if (selectTfFrom) selectTfFrom.innerHTML = optsAll;
    if (selectTfTo) selectTfTo.innerHTML = optsAll;
    if (selAst) {
      selAst.innerHTML = optsAll;
      selAst.onchange = window.handleBuyAssetAccountChange;
    }
    if (selSellAst) selSellAst.innerHTML = optsAll;
    if (selDiv) selDiv.innerHTML = optsAll;
    if (selExport) selExport.innerHTML = optsExport;

    // Render 3D Stacked Account Deck
    if (!stage) return;
    const regularAccounts = getRegularAccounts();
    if (regularAccounts.length === 0) {
      stage.style.height = '130px';
      stage.innerHTML = `
        <div class="w-full h-full rounded-[24px] border border-dashed border-white/20 flex flex-col items-center justify-center text-center p-4">
          <p class="text-xs font-bold text-stone-300 mb-2">${t('no-acc')}</p>
          <button type="button" onclick="openAccountModal()" class="text-[11px] font-bold px-3.5 py-1.5 rounded-full bg-emerald-500 text-[#070908]">${t('btn-add-acc')}</button>
        </div>`;
      if (dotsEl) dotsEl.innerHTML = '';
      if (counterEl) counterEl.textContent = '0/0';
      return;
    }

    if (activeDeckIndex >= regularAccounts.length) activeDeckIndex = 0;
    if (activeDeckIndex < 0) activeDeckIndex = regularAccounts.length - 1;

    const visibleStack = Math.min(regularAccounts.length, 3);
    stage.style.position = 'relative';
    stage.style.perspective = '1100px';
    stage.style.height = `${168 + (visibleStack - 1) * 16}px`;
    stage.style.touchAction = 'pan-y';

    stage.innerHTML = regularAccounts.map((acc, idx) => {
      const rel = (idx - activeDeckIndex + regularAccounts.length) % regularAccounts.length;
      const theme = resolveCardTheme(acc.namaAkun, acc.tipeAkun, idx);
      const isFront = rel === 0;
      const isHidden = rel >= 3;

      const translateY = rel * 14;
      const scale = Math.max(0.86, 1 - rel * 0.055);
      const zIndex = 30 - rel;
      const opacity = isHidden ? 0 : Math.max(0.55, 1 - rel * 0.22);
      const brightness = isFront ? 'brightness(1)' : `brightness(${1 - rel * 0.14})`;

      const safeId = acc.idAkun.replace(/'/g, "\\'");
      const safeName = acc.namaAkun.replace(/'/g, "\\'");
      const safeHolder = acc.atasNama.replace(/'/g, "\\'");
      const safeNoRek = acc.noRek.replace(/'/g, "\\'");
      const safeTipe = acc.tipeAkun.replace(/'/g, "\\'");

      const clickHandler = isFront
        ? `openAccountDetailModal('${safeId}', '${safeName}', '${safeHolder}', '${safeNoRek}', ${acc.nominal}, '${safeTipe}')`
        : `selectAccountCard(${idx})`;

      return `
        <div
          data-deck-index="${idx}"
          onclick="${clickHandler}"
          style="
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 162px;
            background: ${theme.bg};
            transform: translate3d(0, ${translateY}px, 0) scale(${scale});
            z-index: ${zIndex};
            opacity: ${opacity};
            filter: ${brightness};
            transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease, filter 0.35s ease;
            pointer-events: ${isHidden ? 'none' : 'auto'};
          "
          class="rounded-[24px] p-5 text-white border border-white/15 shadow-[0_18px_36px_rgba(0,0,0,0.45)] flex flex-col justify-between select-none overflow-hidden ${isFront ? 'cursor-pointer' : 'cursor-pointer'}"
        >
          <div class="absolute -right-10 -top-10 w-36 h-36 rounded-full opacity-20 pointer-events-none" style="background: radial-gradient(circle, ${theme.accent}, transparent 70%);"></div>

          <div class="flex items-start justify-between gap-2 relative z-10">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/12 text-white/90 border border-white/10">${escapeHtml(acc.tipeAkun || theme.badge)}</span>
                <span class="text-[11px] font-mono text-white/65 tracking-wider">${escapeHtml(acc.noRek || '•••• ••••')}</span>
              </div>
              <h4 class="text-base font-extrabold tracking-tight text-white mt-1.5">${escapeHtml(acc.namaAkun)}</h4>
            </div>

            <div class="flex items-center gap-1.5">
              <button type="button" onclick="event.stopPropagation(); openAccountModal('${safeId}', '${safeName}')" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition" title="Edit Akun">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              </button>
            </div>
          </div>

          <div class="flex items-end justify-between relative z-10">
            <div>
              <p class="text-[10px] font-bold uppercase tracking-wider text-white/60">Available Balance</p>
              <p class="text-xl font-black tracking-tight text-white privacy-mask mt-0.5" data-value="${acc.nominal}">${isPrivate ? '••••••••' : toRp(acc.nominal)}</p>
            </div>
            <div class="w-9 h-6 rounded-md bg-gradient-to-br from-amber-200/80 to-amber-400/60 border border-amber-100/40 flex items-center justify-center opacity-85">
              <div class="w-5 h-3.5 border border-amber-900/30 rounded-xs"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (counterEl) counterEl.textContent = `${activeDeckIndex + 1}/${regularAccounts.length}`;
    if (dotsEl) {
      dotsEl.innerHTML = regularAccounts.map((_, idx) => {
        const active = idx === activeDeckIndex;
        return `<button type="button" onclick="selectAccountCard(${idx})" aria-label="Card ${idx + 1}" class="h-1.5 rounded-full transition-all duration-300 ${active ? 'w-5 bg-emerald-400' : 'w-1.5 bg-white/25 hover:bg-white/45'}"></button>`;
      }).join('');
    }

    bindAccountDeckSwipe(stage);
  }

  function bindAccountDeckSwipe(stage) {
    if (!stage || stage.dataset.swipeBound === 'true') return;
    stage.dataset.swipeBound = 'true';
    let startX = 0, deltaX = 0, isDragging = false;

    stage.addEventListener('touchstart', e => {
      if (!e.touches || !e.touches[0]) return;
      startX = e.touches[0].clientX;
      deltaX = 0;
      isDragging = true;
    }, { passive: true });

    stage.addEventListener('touchmove', e => {
      if (!isDragging || !e.touches || !e.touches[0]) return;
      deltaX = e.touches[0].clientX - startX;
    }, { passive: true });

    stage.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      if (Math.abs(deltaX) > 42) {
        slideAccountDeck(deltaX < 0 ? 1 : -1);
      }
      deltaX = 0;
    });
  }

  window.slideAccountDeck = function(step) {
    const accounts = getRegularAccounts();
    if (accounts.length <= 1) return;
    activeDeckIndex = (activeDeckIndex + step + accounts.length) % accounts.length;
    renderAccounts();
  };

  window.selectAccountCard = function(index) {
    const accounts = getRegularAccounts();
    if (index < 0 || index >= accounts.length) return;
    activeDeckIndex = index;
    renderAccounts();
  };

  window.openAccountDetailModal = function(idAkun, name, holder, number, balance, tipeAkun) {
    activeAccountDetail = { idAkun, name, holder, number, balance, tipeAkun };
    const idEl = document.getElementById('det-acc-id');
    if (idEl) idEl.value = idAkun || '';
    const iconContainer = document.getElementById('det-acc-icon-container');
    if (iconContainer) iconContainer.innerHTML = renderAccountBadgeHtml(name, 'w-16 h-16 p-2 border-2 shadow-sm');

    document.getElementById('det-acc-name').innerText = name || '-';
    document.getElementById('det-acc-holder').innerText = holder || '-';
    document.getElementById('det-acc-number').innerText = number || '-';

    const balEl = document.getElementById('det-acc-balance');
    if (balEl) {
      balEl.setAttribute('data-value', balance);
      balEl.innerText = isPrivate ? '••••••••' : toRp(balance);
    }

    const copyBtn = document.getElementById('btn-copy-acc');
    if (copyBtn) {
      const nameLower = (name || '').toLowerCase();
      if (nameLower.includes('tunai') || nameLower.includes('cash') || nameLower.includes('dompet')) {
        copyBtn.classList.add('hidden');
      } else {
        copyBtn.classList.remove('hidden');
      }
    }
    openModal('modal-account-detail');
  };

  window.openEditAccountFromDetail = function() {
    closeModal('modal-account-detail');
    if (activeAccountDetail) {
      openAccountModal(activeAccountDetail.idAkun, activeAccountDetail.name);
    }
  };

  window.openAccountModal = function(idAkun, namaAkun) {
    const existing = getRegularAccounts().find(a => (idAkun && a.idAkun === idAkun) || (namaAkun && a.namaAkun === namaAkun));
    const titleEl = document.getElementById('mod-manage-acc-title');
    const modeEl = document.getElementById('form-acc-mode');
    const idEl = document.getElementById('form-acc-id');
    const oldNameEl = document.getElementById('form-acc-old-name');
    const oldBalEl = document.getElementById('form-acc-old-bal');
    const typeEl = document.getElementById('form-acc-type');
    const nameEl = document.getElementById('form-acc-name');
    const holderEl = document.getElementById('form-acc-holder');
    const numEl = document.getElementById('form-acc-number');
    const balEl = document.getElementById('form-acc-balance');
    const lblBal = document.getElementById('lbl-acc-balance-input');
    const recSec = document.getElementById('acc-reconcile-section');
    const delBtn = document.getElementById('btn-delete-account');

    if (existing) {
      if (titleEl) titleEl.innerText = currentLang === 'id' ? 'Edit Rekening' : 'Edit Account';
      if (modeEl) modeEl.value = 'edit';
      if (idEl) idEl.value = existing.idAkun;
      if (oldNameEl) oldNameEl.value = existing.namaAkun;
      if (oldBalEl) oldBalEl.value = existing.nominal;
      if (typeEl) typeEl.value = existing.tipeAkun || 'Bank';
      if (nameEl) nameEl.value = existing.namaAkun;
      if (holderEl) holderEl.value = existing.atasNama || '';
      if (numEl) numEl.value = existing.noRek || '';
      if (balEl) balEl.value = new Intl.NumberFormat('id-ID').format(existing.nominal || 0);
      if (lblBal) lblBal.innerText = currentLang === 'id' ? 'Saldo Aktual (Rp)' : 'Current Balance (Rp)';
      if (recSec) recSec.classList.remove('hidden');
      if (delBtn) delBtn.classList.remove('hidden');
    } else {
      if (titleEl) titleEl.innerText = currentLang === 'id' ? 'Tambah Rekening' : 'Add Account';
      if (modeEl) modeEl.value = 'add';
      if (idEl) idEl.value = '';
      if (oldNameEl) oldNameEl.value = '';
      if (oldBalEl) oldBalEl.value = '0';
      if (typeEl) typeEl.value = 'Bank';
      if (nameEl) nameEl.value = '';
      if (holderEl) holderEl.value = sessionName || '';
      if (numEl) numEl.value = '';
      if (balEl) balEl.value = '';
      if (lblBal) lblBal.innerText = currentLang === 'id' ? 'Saldo Awal (Rp)' : 'Initial Balance (Rp)';
      if (recSec) recSec.classList.add('hidden');
      if (delBtn) delBtn.classList.add('hidden');
    }

    openModal('modal-manage-account');
  };

  window.submitAccountForm = async function() {
    const mode = document.getElementById('form-acc-mode')?.value || 'add';
    const idAkun = document.getElementById('form-acc-id')?.value || '';
    const oldNama = document.getElementById('form-acc-old-name')?.value || '';
    const tipe = document.getElementById('form-acc-type')?.value || 'Bank';
    const nama = (document.getElementById('form-acc-name')?.value || '').trim();
    const atasNama = (document.getElementById('form-acc-holder')?.value || '').trim();
    const noRek = (document.getElementById('form-acc-number')?.value || '').trim();
    const saldo = extractNumber(document.getElementById('form-acc-balance')?.value);
    const recordAdjustment = document.getElementById('form-acc-record-adj')?.checked || false;
    const adjNote = (document.getElementById('form-acc-adj-note')?.value || '').trim();

    if (!nama) {
      showToast(currentLang === 'id' ? 'Nama rekening wajib diisi.' : 'Account name is required.', 'warning');
      return;
    }

    setBtnState('btn-save-account', true);
    let ok = false;
    if (mode === 'edit') {
      ok = await apiPost({
        action: 'updateAccount',
        idAkun,
        oldNama,
        nama,
        tipe,
        atasNama,
        noRek,
        saldo,
        recordAdjustment,
        adjNote
      });
    } else {
      ok = await apiPost({
        action: 'addAccount',
        nama,
        tipe,
        atasNama,
        noRek,
        saldo
      });
    }

    if (ok) {
      closeModal('modal-manage-account');
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Rekening berhasil disimpan' : 'Account saved', 'success');
    }
    setBtnState('btn-save-account', false);
  };

  window.deleteAccountAction = async function() {
    const idAkun = document.getElementById('form-acc-id')?.value || '';
    const nama = document.getElementById('form-acc-old-name')?.value || document.getElementById('form-acc-name')?.value || '';
    if (!nama && !idAkun) return;
    if (!confirm(currentLang === 'id' ? `Hapus rekening "${nama}"?` : `Delete account "${nama}"?`)) return;

    setBtnState('btn-delete-account', true);
    if (await apiPost({ action: 'deleteAccount', idAkun, nama })) {
      closeModal('modal-manage-account');
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Rekening dihapus' : 'Account deleted', 'info');
    }
    setBtnState('btn-delete-account', false);
  };

  window.copyAccountInfo = function() {
    const bank = document.getElementById('det-acc-name').innerText;
    const nama = document.getElementById('det-acc-holder').innerText;
    const norek = document.getElementById('det-acc-number').innerText;
    if (nama === '-' && norek === '-') {
      showToast(currentLang === 'en' ? 'Account details not yet added.' : 'Detail rekening belum ditambahkan.', 'warning');
      return;
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`*${bank}*\n_${nama}_\n${norek}`).then(() => {
        showToast(currentLang === 'en' ? 'Copied!' : 'Berhasil disalin!', 'success');
      });
    }
  };

  /* --------------------------------------------------------------------------
   * 11. TRANSACTIONS, TRANSFERS & AI RECEIPT SCANNER
   * -------------------------------------------------------------------------- */
  window.toggleAdvanceMode = function() {
    window.isAdvanceMode = !window.isAdvanceMode;
    const btn = document.getElementById('btn-advance-mode');
    const catSelect = document.getElementById('form-trx-category');
    if (btn) {
      if (window.isAdvanceMode) {
        btn.classList.add('bg-[#0F5132]', 'text-white');
        btn.classList.remove('text-[#0F5132]');
        if (catSelect && catSelect.parentElement) catSelect.parentElement.classList.add('hidden');
      } else {
        btn.classList.remove('bg-[#0F5132]', 'text-white');
        btn.classList.add('text-[#0F5132]');
        if (catSelect && catSelect.parentElement) catSelect.parentElement.classList.remove('hidden');
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
      if (amountInput) {
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
    if (amountInput) {
      amountInput.value = totalBelanja;
      formatRupiahInput(amountInput);
    }
  };

  window.renderScannedItems = function() {
    const section = document.getElementById('itemListSection');
    const container = document.getElementById('itemsContainer');
    if (!container || !section) return;
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
        let catSelectHtml = `<select onchange="window.updateScannedItem(${index}, 'category', this.value)" class="w-full mt-1.5 bg-white dark:bg-[#111613] border border-stone-200 dark:border-stone-700 rounded-lg px-2 py-1.5 text-[10px] font-bold outline-none text-stone-700 dark:text-stone-300">`;
        catOptionsList.forEach(opt => {
          catSelectHtml += `<option value="${opt}" ${itemCat === opt ? 'selected' : ''}>${opt}</option>`;
        });
        catSelectHtml += `</select>`;

        container.innerHTML += `
          <div class="flex flex-col gap-1 py-2 border-b border-stone-200 dark:border-stone-800 last:border-0 relative">
            <div class="flex justify-between items-start gap-2">
              <div class="flex-1">
                <input type="text" onchange="window.updateScannedItem(${index}, 'name', this.value)" value="${escapeHtml(item.name)}" class="w-full bg-white dark:bg-[#111613] border border-stone-200 dark:border-stone-700 rounded-lg px-2 py-1.5 text-xs font-bold uppercase text-stone-800 dark:text-stone-200 outline-none focus:border-[#0F5132] transition">
                ${catSelectHtml}
              </div>
              <div class="w-14">
                <input type="number" onchange="window.updateScannedItem(${index}, 'qty', this.value)" value="${qty}" class="w-full bg-white dark:bg-[#111613] border border-stone-200 dark:border-stone-700 rounded-lg px-1 py-1.5 text-[10px] text-center text-stone-800 dark:text-stone-200 outline-none focus:border-[#0F5132] transition">
              </div>
              <div class="w-24">
                <input type="number" onchange="window.updateScannedItem(${index}, 'price', this.value)" value="${price}" class="w-full bg-white dark:bg-[#111613] border border-stone-200 dark:border-stone-700 rounded-lg px-2 py-1.5 text-xs font-bold text-right text-stone-800 dark:text-stone-200 outline-none focus:border-[#0F5132] transition">
              </div>
              <button type="button" onclick="window.removeScannedItem(${index})" class="text-red-500 bg-red-50 dark:bg-red-900/30 p-2 rounded-lg hover:bg-red-100 transition active:scale-95">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
          </div>`;
      } else {
        const catLabel = item.category && item.category !== mainCat ? `<span class="text-[9px] text-[#0F5132] dark:text-emerald-400 font-bold mt-0.5">Kat: ${escapeHtml(item.category)}</span>` : '';
        container.innerHTML += `
          <div class="flex justify-between items-center text-xs py-1.5 border-b border-stone-200/70 dark:border-stone-800 last:border-0">
            <div class="flex flex-col w-2/3 pr-2">
              <span class="text-stone-700 dark:text-stone-200 font-bold uppercase truncate">${escapeHtml(item.name)}</span>
              <span class="text-[10px] text-stone-500 font-medium">${qty}x @ ${toRp(hargaSatuan)}</span>
              ${catLabel}
            </div>
            <span class="text-stone-800 dark:text-stone-100 font-bold whitespace-nowrap text-right text-sm">${toRp(price)}</span>
          </div>`;
      }
    });

    if (window.isAdvanceMode) {
      const amountInput = document.getElementById('form-trx-amount');
      if (amountInput) {
        amountInput.value = totalBelanja;
        formatRupiahInput(amountInput);
      }
    }
  };

  window.submitTransaction = async function() {
    const btn = document.getElementById('form-trx-submit-btn');
    if (btn && btn.disabled) return;

    const amount = extractNumber(document.getElementById('form-trx-amount').value);
    const account = document.getElementById('form-trx-account').value;
    const type = document.getElementById('form-trx-tipe').value;
    const category = document.getElementById('form-trx-category').value;
    const admin = extractNumber(document.getElementById('form-trx-admin').value) || 0;
    const desc = document.getElementById('form-trx-desc').value;
    const combinedDateTime = `${document.getElementById('form-trx-date').value} ${document.getElementById('form-trx-time').value}`;

    if (amount <= 0 || !account || !category) return;

    if (type === 'OUTFLOW' && !account.startsWith('VALAS_')) {
      const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === account);
      if (accData) {
        const valReal = getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal', 'Saldo Awal');
        if (extractNumber(valReal) < (amount + admin)) {
          showToast(currentLang === 'id' ? 'Saldo rekening tidak mencukupi.' : 'Insufficient account balance.', 'warning');
          return;
        }
      }
    }

    if (btn) btn.disabled = true;

    let receiptRefId = 'REF-' + new Date().getTime();
    let itemsByCategory = {};
    let hasCustomCategory = false;

    const itemsToSend = JSON.parse(JSON.stringify(currentScannedItems));
    const isAdvMode = window.isAdvanceMode;

    let totalRawPrice = itemsToSend.reduce((s, item) => s + (item.price || 0), 0);
    let discountRatio = (totalRawPrice > 0 && amount > 0) ? (amount / totalRawPrice) : 1;

    if (itemsToSend.length > 0) {
      itemsToSend.forEach(item => {
        let cat = item.category || category;
        if (cat !== category) hasCustomCategory = true;
        if (!itemsByCategory[cat]) itemsByCategory[cat] = { total: 0, items: [] };
        item.price = Math.round((item.price || 0) * discountRatio);
        itemsByCategory[cat].items.push(item);
        itemsByCategory[cat].total += item.price;
      });
    }

    let sumAfterDiscount = Object.values(itemsByCategory).reduce((s, g) => s + g.total, 0);
    let selisihPembulatan = amount - sumAfterDiscount;

    if (hasCustomCategory && selisihPembulatan !== 0) {
      let catKeys = Object.keys(itemsByCategory);
      if (catKeys.length > 0) {
        let lastCat = catKeys[catKeys.length - 1];
        itemsByCategory[lastCat].total += selisihPembulatan;
        let lastGroupItems = itemsByCategory[lastCat].items;
        if (lastGroupItems.length > 0) lastGroupItems[lastGroupItems.length - 1].price += selisihPembulatan;
      }
    }

    if (isAdvMode && hasCustomCategory) {
      let allSuccess = true;
      for (const cat in itemsByCategory) {
        const group = itemsByCategory[cat];
        let success = await apiPost({
          action: 'addTransaction',
          tipe: type,
          akun: account,
          jumlah: group.total,
          kategori: cat,
          keterangan: desc,
          tanggal: combinedDateTime,
          itemsDetail: JSON.stringify(group.items),
          refId: receiptRefId
        });
        if (!success) allSuccess = false;
      }

      if (allSuccess) {
        if (admin > 0) {
          await apiPost({
            action: 'addTransaction',
            tipe: 'OUTFLOW',
            akun: account,
            jumlah: admin,
            kategori: 'Biaya Admin',
            keterangan: 'Admin trx split',
            tanggal: combinedDateTime,
            refId: receiptRefId
          });
        }
        await fetchAllData();
        closeModal('modal-trx', true);
        showToast(currentLang === 'id' ? 'Transaksi tersimpan' : 'Transaction saved', 'success');
      } else if (btn) {
        btn.disabled = false;
      }
      return;
    }

    if (selisihPembulatan !== 0 && !hasCustomCategory && itemsToSend.length > 0) {
      itemsToSend[itemsToSend.length - 1].price += selisihPembulatan;
    }

    if (await apiPost({
      action: 'addTransaction',
      tipe: type,
      akun: account,
      jumlah: amount,
      kategori: category,
      keterangan: desc,
      tanggal: combinedDateTime,
      itemsDetail: JSON.stringify(itemsToSend),
      refId: receiptRefId
    })) {
      if (admin > 0) {
        await apiPost({
          action: 'addTransaction',
          tipe: 'OUTFLOW',
          akun: account,
          jumlah: admin,
          kategori: 'Biaya Admin',
          keterangan: `Admin trx ${category}`,
          tanggal: combinedDateTime,
          refId: receiptRefId
        });
      }
      await fetchAllData();
      closeModal('modal-trx', true);
      showToast(currentLang === 'id' ? 'Transaksi tersimpan' : 'Transaction saved', 'success');
    } else if (btn) {
      btn.disabled = false;
    }
  };

  window.deleteTransactionFromDetail = async function() {
    if (!activeDetailTrxId) return;
    if (!confirm(currentLang === 'id' ? 'Hapus transaksi ini dan pulihkan saldo?' : 'Delete this transaction and restore balance?')) return;
    setBtnState('btn-dtl-delete', true);
    if (await apiPost({ action: 'deleteTransaction', idTrx: activeDetailTrxId })) {
      closeModal('modal-transaction-detail');
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Transaksi dihapus' : 'Transaction deleted', 'info');
    }
    setBtnState('btn-dtl-delete', false);
  };

  window.submitTransfer = async function() {
    const fromAcc = document.getElementById('form-tf-from').value;
    const toAcc = document.getElementById('form-tf-to').value;
    const amount = extractNumber(document.getElementById('form-tf-amount').value);
    const admin = extractNumber(document.getElementById('form-tf-admin').value) || 0;
    const descRaw = document.getElementById('form-tf-desc').value;

    if (amount <= 0 || !fromAcc || !toAcc || fromAcc === toAcc) {
      showToast(currentLang === 'id' ? 'Pilih akun asal & tujuan berbeda dengan nominal > 0.' : 'Select distinct accounts and amount > 0.', 'warning');
      return;
    }

    const accFromData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === fromAcc);
    if (accFromData) {
      const valReal = getProp(accFromData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal', 'Saldo Awal');
      if (extractNumber(valReal) < (amount + admin)) {
        showToast(currentLang === 'id' ? 'Saldo rekening asal tidak mencukupi.' : 'Insufficient balance in source account.', 'warning');
        return;
      }
    }

    setBtnState('btn-tf-submit', true);
    if (await apiPost({
      action: 'transfer',
      fromAcc: fromAcc,
      toAcc: toAcc,
      amount: amount,
      admin: admin,
      desc: descRaw
    })) {
      closeModal('modal-transfer');
      document.getElementById('form-tf-amount').value = '';
      document.getElementById('form-tf-admin').value = '';
      document.getElementById('form-tf-desc').value = '';
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Transfer berhasil' : 'Transfer completed', 'success');
    }
    setBtnState('btn-tf-submit', false);
  };

  /* --------------------------------------------------------------------------
   * 12. RECEIPT SCANNER (GEMINI AI)
   * -------------------------------------------------------------------------- */
  window.processReceiptImage = async function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const loadingTextEl = document.getElementById('loading-text');
    if (loadingTextEl) loadingTextEl.innerText = t('txt-analyze');
    showLoading(true);
    try {
      const compressedBase64 = await compressImage(file, 800, 0.65);
      if (loadingTextEl) loadingTextEl.innerText = t('txt-extract');
      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'scanReceipt', email: sessionEmail, token: sessionToken, imageB64: compressedBase64 })
      });
      const result = await response.json();
      if (result.status === 'unauthorized') {
        clearSessionAndRedirect(result.message);
        return;
      }
      if (result.status === 'success' && result.data) {
        let merchant = result.data.merchant;
        if (merchant === 'TOKO TIDAK TERBACA') merchant = t('txt-unknown-merchant');
        const total = result.data.total || 0;

        openModal('modal-trx', 'OUTFLOW');
        document.getElementById('form-trx-desc').value = merchant || '';
        const amountInput = document.getElementById('form-trx-amount');
        amountInput.value = total;
        formatRupiahInput(amountInput);

        document.getElementById('form-trx-date').value = result.data.date || new Date().toISOString().split('T')[0];
        const now = new Date();
        document.getElementById('form-trx-time').value = result.data.time || (now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0'));

        currentScannedItems = result.data.items || [];
        window.isAdvanceMode = false;
        window.renderScannedItems();
        showToast(currentLang === 'id' ? 'Nota berhasil dipindai!' : 'Receipt scanned!', 'success');
      } else {
        showToast(t('err-scan-fail') + (result.message || ''), 'error');
      }
    } catch (err) {
      console.error(err);
      showToast(t('err-scan-sys'), 'error');
    } finally {
      if (loadingTextEl) loadingTextEl.innerText = t('sync');
      showLoading(false);
      e.target.value = '';
    }
  };

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
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.onerror = error => reject(error);
      };
      reader.onerror = error => reject(error);
    });
  }

  /* --------------------------------------------------------------------------
   * 13. RECURRING BILLS, DEBTS & SAVINGS GOALS
   * -------------------------------------------------------------------------- */
  window.submitRecurring = async function() {
    const name = (document.getElementById('form-rec-name').value || '').trim();
    const amount = extractNumber(document.getElementById('form-rec-amount').value);
    const type = document.getElementById('form-rec-tipe').value;
    const date = parseInt(document.getElementById('form-rec-date').value, 10);
    const account = document.getElementById('form-rec-account').value;

    if (!name || amount <= 0 || isNaN(date) || date < 1 || date > 31 || !account) {
      showToast(currentLang === 'id' ? 'Lengkapi layanan, nominal > 0, tanggal 1-31 & rekening.' : 'Fill service, amount > 0, date 1-31 & account.', 'warning');
      return;
    }

    setBtnState('btn-rec-submit', true);
    if (await apiPost({ action: 'addRecurring', nama: name, nominal: amount, frekuensi: type, tgl_tagihan: date, akun: account })) {
      closeModal('modal-recurring');
      document.getElementById('form-rec-name').value = '';
      document.getElementById('form-rec-amount').value = '';
      document.getElementById('form-rec-date').value = '';
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Langganan disimpan' : 'Subscription saved', 'success');
    }
    setBtnState('btn-rec-submit', false);
  };

  function isRecurringPaidThisCycle(recObj) {
    const idRec = (getProp(recObj, 'ID_Recurring', 'ID') || '').toString().trim();
    const nama = (getProp(recObj, 'Nama') || '').toString().trim();
    const frekuensi = (getProp(recObj, 'Frekuensi') || 'Bulanan').toString().toLowerCase();
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return (appData.T_Transaksi || []).some(tobj => {
      const tglRaw = getProp(tobj, 'Tanggal');
      if (!tglRaw) return false;
      const tgl = new Date(tglRaw);
      const tipe = (getProp(tobj, 'Tipe') || '').toString().trim().toUpperCase();
      const ket = (getProp(tobj, 'Keterangan') || '').toString().trim();
      const refId = (getProp(tobj, 'Ref_ID', 'Ref ID') || '').toString().trim();

      if (tipe !== 'OUTFLOW') return false;
      const matched = (idRec && refId === idRec) || ket === `Tagihan Berulang: ${nama}`;
      if (!matched) return false;

      if (frekuensi.includes('tahun') || frekuensi.includes('year')) {
        return tgl.getFullYear() === currentYear;
      }
      return tgl.getMonth() === currentMonth && tgl.getFullYear() === currentYear;
    });
  }

  window.payRecurring = async function(nama, nominal, akun, idRec = '') {
    const confirmText = currentLang === 'id'
      ? `Yakin bayar tagihan ${nama} sebesar ${toRp(nominal)} dari ${akun}?`
      : `Pay ${nama} bill of ${toRp(nominal)} from ${akun}?`;
    if (!confirm(confirmText)) return;

    const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === akun);
    if (accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal')) < nominal) {
      showToast(currentLang === 'id' ? 'Saldo tidak mencukupi.' : 'Insufficient balance.', 'warning');
      return;
    }

    const now = new Date();
    const combinedDateTime = now.toISOString().split('T')[0] + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    if (await apiPost({
      action: 'addTransaction',
      tipe: 'OUTFLOW',
      akun: akun,
      jumlah: nominal,
      kategori: 'Tagihan',
      keterangan: `Tagihan Berulang: ${nama}`,
      tanggal: combinedDateTime,
      refId: idRec || ''
    })) {
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Tagihan dibayar!' : 'Bill paid!', 'success');
    }
  };

  window.payRecurringNowAction = async function() {
    const idRec = document.getElementById('det-rec-id')?.value || '';
    const nama = document.getElementById('det-rec-name')?.innerText || '';
    const nominal = extractNumber(document.getElementById('det-rec-amount')?.getAttribute('data-value') || 0);
    const akun = document.getElementById('det-rec-account')?.innerText || '';
    closeModal('modal-rec-detail');
    await window.payRecurring(nama, nominal, akun, idRec);
  };

  window.deleteRecurringAction = async function() {
    const id = document.getElementById('det-rec-id')?.value;
    if (!id) return;
    if (!confirm(currentLang === 'id' ? 'Yakin ingin menghapus langganan ini?' : 'Delete this subscription?')) return;
    setBtnState('btn-del-rec-submit', true);
    if (await apiPost({ action: 'deleteRecurring', idRec: id })) {
      closeModal('modal-rec-detail');
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Langganan dihapus' : 'Subscription deleted', 'info');
    }
    setBtnState('btn-del-rec-submit', false);
  };

  window.openRecurringDetailModal = function(id, name, amount, freq, date, account) {
    const elName = document.getElementById('det-rec-name');
    if (elName) elName.innerText = name;
    const elAmount = document.getElementById('det-rec-amount');
    if (elAmount) {
      elAmount.setAttribute('data-value', amount);
      elAmount.innerText = isPrivate ? '••••••••' : toRp(amount);
    }
    const elFreq = document.getElementById('det-rec-freq');
    if (elFreq) {
      const isEng = currentLang === 'en';
      if (freq.toLowerCase().includes('bulan') || freq.toLowerCase().includes('month')) elFreq.innerText = isEng ? 'Monthly' : 'Bulanan';
      else if (freq.toLowerCase().includes('tahun') || freq.toLowerCase().includes('year')) elFreq.innerText = isEng ? 'Yearly' : 'Tahunan';
      else elFreq.innerText = freq;
    }
    const elDate = document.getElementById('det-rec-date');
    if (elDate) elDate.innerText = date;
    const elAccount = document.getElementById('det-rec-account');
    if (elAccount) elAccount.innerText = account;
    const elId = document.getElementById('det-rec-id');
    if (elId) elId.value = id;
    openModal('modal-rec-detail');
  };

  function renderDueAlerts() {
    const banner = document.getElementById('due-alert-banner');
    const itemsBox = document.getElementById('due-alert-items');
    if (!banner || !itemsBox) return;

    if (dueBannerDismissed) {
      banner.classList.add('hidden');
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentDay = today.getDate();
    const alerts = [];

    (appData.M_Recurring || []).forEach(r => {
      if (isRecurringPaidThisCycle(r)) return;
      const nama = getProp(r, 'Nama') || '-';
      const nominal = extractNumber(getProp(r, 'Nominal'));
      const dueDay = parseInt(getProp(r, 'Tgl_Tagihan'), 10) || 1;
      const diffDays = dueDay - currentDay;
      if (diffDays >= -3 && diffDays <= 5) {
        alerts.push({
          label: `${nama} (${toRp(nominal)})`,
          days: diffDays
        });
      }
    });

    if (alerts.length === 0) {
      banner.classList.add('hidden');
      return;
    }

    banner.classList.remove('hidden');
    itemsBox.innerHTML = alerts.map(a => {
      const tag = a.days < 0
        ? `<span class="text-red-600 dark:text-red-400 font-extrabold">Terlambat ${Math.abs(a.days)}h</span>`
        : a.days === 0
          ? `<span class="text-amber-700 dark:text-amber-300 font-extrabold">Hari Ini</span>`
          : `<span class="text-amber-700 dark:text-amber-300 font-bold">H-${a.days}</span>`;
      return `<div class="flex items-center justify-between gap-2 text-[11px] text-amber-900 dark:text-amber-200">
        <span class="truncate font-medium">• ${escapeHtml(a.label)}</span>
        <span class="shrink-0">${tag}</span>
      </div>`;
    }).join('');
  }

  window.dismissDueBanner = function() {
    dueBannerDismissed = true;
    const banner = document.getElementById('due-alert-banner');
    if (banner) banner.classList.add('hidden');
  };

  window.prepareGoalAction = function(actionType, goalName, goalId = '') {
    activeGoalName = goalName;
    activeGoalId = goalId;
    if (actionType === 'add') {
      const titleEl = document.getElementById('add-savings-goal-name');
      if (titleEl) titleEl.innerText = goalName;
      openModal('modal-add-savings');
    } else if (actionType === 'withdraw') {
      const titleEl = document.getElementById('withdraw-goal-name-display');
      if (titleEl) titleEl.innerText = goalName;
      openModal('modal-withdraw-goal');
    }
  };

  window.submitGoal = async function() {
    const name = (document.getElementById('form-goal-name').value || '').trim();
    const amount = extractNumber(document.getElementById('form-goal-amount').value);
    if (!name || amount <= 0) {
      showToast(currentLang === 'id' ? 'Nama target dan nominal > 0 wajib diisi.' : 'Target name and amount > 0 required.', 'warning');
      return;
    }
    setBtnState('btn-goal-submit', true);
    if (await apiPost({ action: 'addGoal', nama: name, target: amount })) {
      closeModal('modal-goal');
      document.getElementById('form-goal-name').value = '';
      document.getElementById('form-goal-amount').value = '';
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Target tabungan dibuat' : 'Savings target created', 'success');
    }
    setBtnState('btn-goal-submit', false);
  };

  window.processGoalAction = async function(actionType, isAchieved) {
    const amount = extractNumber(document.getElementById(actionType === 'withdraw' ? 'form-withdraw-amount' : 'form-add-savings-amount').value);
    const account = document.getElementById(actionType === 'withdraw' ? 'form-withdraw-account' : 'form-add-savings-account').value;
    if (amount <= 0 || !account) return;

    if (actionType === 'add' && !account.startsWith('VALAS_')) {
      const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === account);
      if (accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal', 'Saldo Awal')) < amount) {
        showToast(currentLang === 'id' ? 'Saldo tidak mencukupi.' : 'Insufficient balance.', 'warning');
        return;
      }
    }

    if (actionType === 'withdraw') {
      const goalObj = (appData.M_Goals || []).find(g => (activeGoalId && getProp(g, 'ID_Goal', 'ID') === activeGoalId) || getProp(g, 'Nama_Goal', 'Nama Goal') === activeGoalName);
      if (goalObj) {
        const terkumpul = extractNumber(getProp(goalObj, 'Terkumpul'));
        if (amount > terkumpul) {
          showToast(currentLang === 'id' ? 'Nominal tarik melebihi dana terkumpul.' : 'Withdrawal exceeds saved balance.', 'warning');
          return;
        }
      }
    }

    if (actionType === 'add') setBtnState('btn-add-savings-submit', true);
    else { setBtnState('btn-wd-temp', true); setBtnState('btn-wd-done', true); }

    if (await apiPost({
      action: 'manageGoalFunds',
      idGoal: activeGoalId,
      namaGoal: activeGoalName,
      tipeAksi: actionType,
      nominal: amount,
      isAchieved: isAchieved,
      akun: account
    })) {
      closeModal('modal-withdraw-goal');
      closeModal('modal-add-savings');
      document.getElementById('form-withdraw-amount').value = '';
      document.getElementById('form-add-savings-amount').value = '';
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Dana target diperbarui' : 'Target funds updated', 'success');
    }

    if (actionType === 'add') setBtnState('btn-add-savings-submit', false);
    else { setBtnState('btn-wd-temp', false); setBtnState('btn-wd-done', false); }
  };

  window.submitDebt = async function() {
    const name = (document.getElementById('form-debt-name').value || '').trim();
    const amount = extractNumber(document.getElementById('form-debt-amount').value);
    if (!name || amount <= 0) {
      showToast(currentLang === 'id' ? 'Nama dan nominal > 0 wajib diisi.' : 'Name and amount > 0 required.', 'warning');
      return;
    }
    setBtnState('btn-debt-submit', true);
    if (await apiPost({
      action: 'addDebt',
      tipe: document.getElementById('form-debt-tipe').value,
      kontak: name,
      jumlah: amount
    })) {
      closeModal('modal-debt');
      document.getElementById('form-debt-name').value = '';
      document.getElementById('form-debt-amount').value = '';
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Catatan tersimpan' : 'Record saved', 'success');
    }
    setBtnState('btn-debt-submit', false);
  };

  window.preparePayDebt = function(nama, tipe, sisa, idDebtParam = '') {
    let idDebt = idDebtParam;
    if (!idDebt) {
      const debtItem = (appData.M_Debt || []).find(d => getProp(d, 'Kontak', 'Nama') === nama && getProp(d, 'Tipe') === tipe && extractNumber(getProp(d, 'Sisa', 'Sisa Saldo', 'Jumlah')) === sisa);
      idDebt = debtItem ? getProp(debtItem, 'ID_Debt', 'ID Debt') : '';
    }
    document.getElementById('form-pay-debt-id').value = idDebt;
    document.getElementById('form-pay-debt-name').value = nama;
    document.getElementById('form-pay-debt-tipe').value = tipe;
    document.getElementById('form-pay-debt-max').value = sisa;
    document.getElementById('pay-debt-name-display').innerText = nama;
    document.getElementById('pay-debt-sisa-display').innerText = toRp(sisa);

    const isUtang = tipe === 'UTANG';
    document.getElementById('mod-pay-debt-title').innerText = isUtang ? t('title-pay-debt') : t('title-recv-debt');
    document.getElementById('txt-pay-debt-desc').innerText = isUtang ? t('desc-pay-debt') : t('desc-recv-debt');
    document.getElementById('btn-pay-debt-submit').innerText = isUtang ? t('btn-pay-debt') : t('btn-recv-debt');

    const trxAcc = document.getElementById('form-trx-account');
    const debtAcc = document.getElementById('form-pay-debt-account');
    if (trxAcc && debtAcc) debtAcc.innerHTML = trxAcc.innerHTML;
    openModal('modal-pay-debt');
  };

  window.submitPayDebt = async function() {
    const idDebt = document.getElementById('form-pay-debt-id').value;
    const tipe = document.getElementById('form-pay-debt-tipe').value;
    const maxSisa = parseFloat(document.getElementById('form-pay-debt-max').value) || 0;
    const amount = extractNumber(document.getElementById('form-pay-debt-amount').value);
    const akun = document.getElementById('form-pay-debt-account').value;

    if (amount <= 0 || !akun || amount > maxSisa || !idDebt) {
      showToast(currentLang === 'id' ? 'Nominal tidak valid atau melebihi sisa.' : 'Invalid amount or exceeds remaining balance.', 'warning');
      return;
    }

    if (tipe === 'UTANG' && !akun.startsWith('VALAS_')) {
      const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === akun);
      if (accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal')) < amount) {
        showToast(currentLang === 'id' ? 'Saldo tidak mencukupi.' : 'Insufficient balance.', 'warning');
        return;
      }
    }

    setBtnState('btn-pay-debt-submit', true);
    if (await apiPost({ action: 'payDebt', idDebt: idDebt, nominal: amount, akun: akun })) {
      closeModal('modal-pay-debt');
      document.getElementById('form-pay-debt-amount').value = '';
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Pembayaran tercatat' : 'Payment recorded', 'success');
    }
    setBtnState('btn-pay-debt-submit', false);
  };

  window.toggleDebtHistoryTab = function(tab) {
    debtHistoryTab = tab;
    const btnActive = document.getElementById('tab-debt-active');
    const btnInactive = document.getElementById('tab-debt-inactive');
    if (btnActive && btnInactive) {
      if (tab === 'ACTIVE') {
        btnActive.classList.add('toggle-active');
        btnInactive.classList.remove('toggle-active');
      } else {
        btnInactive.classList.add('toggle-active');
        btnActive.classList.remove('toggle-active');
      }
    }
    renderDebtHistory();
  };

  window.renderDebtHistory = function() {
    const container = document.getElementById('debt-history-list-container');
    if (!container) return;

    const allDebts = appData.M_Debt || [];
    const filteredDebts = allDebts.filter(d => {
      const sisa = extractNumber(getProp(d, 'Sisa', 'Sisa Saldo', 'Jumlah'));
      const status = (getProp(d, 'Status') || 'ACTIVE').toString().trim().toUpperCase();
      if (debtHistoryTab === 'ACTIVE') return status !== 'COMPLETED' && sisa > 0;
      return status === 'COMPLETED' || sisa <= 0;
    });

    if (filteredDebts.length === 0) {
      container.innerHTML = `<p class="text-center text-xs text-stone-400 py-6">${t('no-data-period')}</p>`;
      return;
    }

    let html = '';
    filteredDebts.forEach(d => {
      const idDebt = getProp(d, 'ID_Debt', 'ID Debt', 'ID') || '';
      const nama = getProp(d, 'Kontak', 'Nama') || 'Unknown';
      const tipe = (getProp(d, 'Tipe') || '').toString().trim().toUpperCase();
      const isUtang = tipe === 'UTANG';
      const sisa = extractNumber(getProp(d, 'Sisa', 'Sisa Saldo'));
      const totalAwal = extractNumber(getProp(d, 'Nominal_Awal', 'Jumlah_Awal', 'Total', 'Jumlah'));

      const allHistoryTrxs = (appData.T_Transaksi || []).filter(tx => {
        const txRefId = getProp(tx, 'Ref_ID', 'Ref ID');
        return txRefId && String(txRefId) === String(idDebt);
      });

      const additionTrxs = allHistoryTrxs.filter(tx => (getProp(tx, 'Tipe') || '') === 'NEUTRAL');
      const paymentTrxs = allHistoryTrxs.filter(tx => (getProp(tx, 'Tipe') || '') !== 'NEUTRAL');
      const totalDibayar = paymentTrxs.reduce((sum, tx) => sum + extractNumber(getProp(tx, 'Jumlah')), 0);
      const actualTotal = totalAwal > 0 ? totalAwal : (sisa + totalDibayar);

      const typeLabel = isUtang ? t('txt-mydebt') : t('txt-receivable');
      const colorClass = isUtang ? 'text-red-500 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400';
      const bgClass = isUtang ? 'bg-red-50 dark:bg-red-900/20' : 'bg-emerald-50 dark:bg-emerald-900/20';

      const lblTotal = 'Total';
      const lblPaid = currentLang === 'en' ? 'Paid' : 'Dibayar';
      const mergedHistory = [...paymentTrxs, ...additionTrxs].sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime());

      let trxsHtml = '';
      if (mergedHistory.length > 0) {
        trxsHtml += `<div class="mt-3 pt-3 border-t border-stone-200/60 dark:border-stone-800 space-y-2">`;
        mergedHistory.forEach(tx => {
          const txDateRaw = getProp(tx, 'Tanggal');
          const txDateObj = txDateRaw ? new Date(txDateRaw) : null;
          const txDate = txDateObj ? `${txDateObj.getDate().toString().padStart(2, '0')} ${i18n[currentLang]['month-names'][txDateObj.getMonth()].substring(0, 3)} ${txDateObj.getFullYear()}` : '-';
          const txNominal = extractNumber(getProp(tx, 'Jumlah'));
          const isAddition = (getProp(tx, 'Tipe') || '') === 'NEUTRAL';
          const sign = isAddition ? '+' : '-';
          const signColor = isAddition ? (isUtang ? 'text-red-500' : 'text-emerald-500') : 'text-emerald-600 dark:text-emerald-400';
          const badgeLabel = isAddition ? (isUtang ? t('txt-debt-added') : t('txt-recv-added')) : t('txt-deducted');

          trxsHtml += `
            <div class="flex justify-between items-center">
              <div>
                <span class="text-[10px] text-stone-500 dark:text-stone-400 block">${txDate}</span>
                <span class="text-[9px] font-bold text-stone-400 uppercase tracking-wider">${badgeLabel}</span>
              </div>
              <span class="text-[10px] font-bold ${signColor} privacy-mask" data-value="${txNominal}">${sign}${isPrivate ? '••••••••' : toRp(txNominal)}</span>
            </div>`;
        });
        trxsHtml += `</div>`;
      }

      html += `
        <div class="bg-[#FAF8F5] dark:bg-[#161D19] p-4 rounded-2xl border border-stone-200/70 dark:border-stone-800">
          <div class="flex justify-between items-start mb-2">
            <div>
              <p class="text-sm font-bold dark:text-stone-200">${escapeHtml(nama)}</p>
              <p class="text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-1 ${bgClass} ${colorClass}">${typeLabel}</p>
            </div>
            <div class="text-right">
              <p class="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">${t('txt-sisa')}</p>
              <p class="text-sm font-black ${colorClass} privacy-mask" data-value="${sisa}">${isPrivate ? '••••••••' : toRp(sisa)}</p>
            </div>
          </div>
          <div class="flex justify-between items-center text-[10px] text-stone-500 dark:text-stone-400 bg-white dark:bg-[#111613] p-2 rounded-xl mt-2">
            <span>${lblTotal}: <strong class="privacy-mask dark:text-stone-200" data-value="${actualTotal}">${isPrivate ? '••••••••' : toRp(actualTotal)}</strong></span>
            <span>${lblPaid}: <strong class="privacy-mask dark:text-stone-200" data-value="${totalDibayar}">${isPrivate ? '••••••••' : toRp(totalDibayar)}</strong></span>
          </div>
          ${trxsHtml}
        </div>`;
    });

    container.innerHTML = html;
  };

  /* --------------------------------------------------------------------------
   * 14. WALLETS, PORTFOLIO, FOREX & DIVIDENDS
   * -------------------------------------------------------------------------- */
  window.submitAddWallet = async function() {
    const name = (document.getElementById('form-wallet-name').value || '').trim();
    const initialBal = extractNumber(document.getElementById('form-wallet-bal').value) || 0;
    if (!name) return;

    setBtnState('btn-save-wallet', true);
    if (await apiPost({ action: 'addWallet', nama: name, saldo: initialBal })) {
      closeModal('modal-add-wallet');
      document.getElementById('form-wallet-name').value = '';
      document.getElementById('form-wallet-bal').value = '';
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Dompet investasi dibuat' : 'Wallet created', 'success');
    }
    setBtnState('btn-save-wallet', false);
  };

  window.openWalletDetailModal = function(name, balance) {
    activeWalletNameForDetail = name;
    document.getElementById('det-wallet-name').innerText = name;
    const balEl = document.getElementById('det-wallet-bal');
    if (balEl) {
      balEl.setAttribute('data-value', balance);
      balEl.innerText = isPrivate ? '••••••••' : toRp(balance);
    }
    openModal('modal-wallet-detail');
  };

  window.deleteWalletAction = async function() {
    if (!activeWalletNameForDetail) return;
    const walletData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === activeWalletNameForDetail && getProp(a, 'Tipe_Akun', 'Tipe Akun') === 'Wallet Investasi');
    if (walletData) {
      let valReal = getProp(walletData, 'Saldo_Realtime', 'Saldo Realtime');
      let valAwal = getProp(walletData, 'Saldo_Awal', 'Saldo Awal');
      let balance = extractNumber((valReal !== undefined && valReal !== null && valReal !== '') ? valReal : valAwal);
      if (balance > 0) {
        showToast(currentLang === 'id' ? 'Kosongkan saldo dompet terlebih dahulu.' : 'Empty wallet balance first.', 'warning');
        return;
      }
    }
    if (!confirm(t('msg-del-wallet'))) return;
    setBtnState('btn-del-wallet-submit', true);
    if (await apiPost({ action: 'deleteWallet', nama: activeWalletNameForDetail })) {
      closeModal('modal-wallet-detail');
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Dompet dihapus' : 'Wallet deleted', 'info');
    }
    setBtnState('btn-del-wallet-submit', false);
  };

  window.handleBuyAssetAccountChange = function() {
    const acc = document.getElementById('form-asset-account')?.value || '';
    const priceLabel = document.getElementById('lbl-buy-price');
    const priceInput = document.getElementById('form-asset-harga');
    if (!priceInput) return;

    if (acc.startsWith('VALAS_')) {
      let curr = acc.replace('VALAS_', '');
      if (priceLabel) priceLabel.innerText = currentLang === 'id' ? `Harga Satuan (${curr})` : `Price per Unit (${curr})`;
      priceInput.oninput = function() { formatDecimalInput(this); };
      priceInput.placeholder = '0.00';
    } else {
      if (priceLabel) priceLabel.innerText = currentLang === 'id' ? 'Harga Satuan (Rp)' : 'Price per Unit (Rp)';
      priceInput.oninput = function() { formatRupiahInput(this); };
      priceInput.placeholder = '0';
    }
  };

  window.submitBuyAsset = async function() {
    const jenis = document.getElementById('form-asset-jenis').value;
    const simbol = (document.getElementById('form-asset-simbol').value || '').toUpperCase().trim();
    const jumlah = parseFloat((document.getElementById('form-asset-jumlah').value || '0').replace(/,/g, '.')) || 0;
    const akun = document.getElementById('form-asset-account').value;
    const admin = extractNumber(document.getElementById('form-buy-asset-admin').value) || 0;

    let harga = 0;
    let mataUangBeli = 'IDR';
    let kursValas = 1;

    if (akun && akun.startsWith('VALAS_')) {
      mataUangBeli = akun.replace('VALAS_', '');
      harga = parseFloat((document.getElementById('form-asset-harga').value || '0').replace(/,/g, '.')) || 0;
      const totalForeign = harga * jumlah;

      let valasAgg = 0;
      (appData.M_Portofolio || []).forEach(a => {
        if (getProp(a, 'Jenis_Aset', 'Jenis Aset', 'Jenis') === 'Valuta Asing' && getProp(a, 'Simbol', 'Nama Aset') === mataUangBeli) {
          valasAgg += parseFloat((getProp(a, 'Jumlah', 'Unit') || '0').toString().replace(',', '.')) || 0;
          const r = extractNumber(getProp(a, 'Harga_Realtime', 'Harga_Saat_Ini', 'Harga_Beli'));
          if (r > 0) kursValas = r;
        }
      });

      if (valasAgg + 1e-8 < totalForeign) {
        showToast(currentLang === 'id' ? `Saldo ${mataUangBeli} tidak mencukupi.` : `Insufficient ${mataUangBeli} balance.`, 'warning');
        return;
      }
    } else {
      harga = extractNumber(document.getElementById('form-asset-harga').value);
      const totalHarga = harga * jumlah;
      const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === akun);
      if (accData && extractNumber(getProp(accData, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal')) < (totalHarga + admin)) {
        showToast(currentLang === 'id' ? 'Saldo tidak mencukupi.' : 'Insufficient balance.', 'warning');
        return;
      }
    }

    if (!simbol || jumlah <= 0 || harga <= 0 || !akun) return;

    setBtnState('btn-buy-asset-submit', true);
    if (await apiPost({
      action: 'buyAsset',
      jenis: jenis,
      simbol: simbol,
      jumlah: jumlah,
      harga: harga,
      kurs: kursValas,
      akun: akun,
      mataUang: mataUangBeli
    })) {
      if (admin > 0 && !akun.startsWith('VALAS_')) {
        await apiPost({
          action: 'addTransaction',
          tipe: 'OUTFLOW',
          akun: akun,
          jumlah: admin,
          kategori: 'Biaya Admin',
          keterangan: `Admin beli aset ${simbol}`
        });
      }
      closeModal('modal-buy-asset');
      document.getElementById('form-asset-simbol').value = '';
      document.getElementById('form-asset-jumlah').value = '';
      document.getElementById('form-asset-harga').value = '';
      document.getElementById('form-buy-asset-admin').value = '';
      await fetchAllData();
      showToast(currentLang === 'id' ? `Aset ${simbol} dibeli!` : `${simbol} purchased!`, 'success');
    }
    setBtnState('btn-buy-asset-submit', false);
  };

  window.submitSellAsset = async function() {
    const idAset = document.getElementById('form-sell-asset-id').value;
    const simbol = document.getElementById('form-sell-asset-simbol').value;
    const unitDijual = parseFloat((document.getElementById('form-sell-asset-jumlah').value || '0').replace(/,/g, '.')) || 0;
    const hargaJual = extractNumber(document.getElementById('form-sell-asset-harga').value);
    const akunTujuan = document.getElementById('form-sell-asset-account').value;
    const maxUnit = parseFloat(document.getElementById('sell-asset-max-display').getAttribute('data-raw')) || 0;
    const admin = extractNumber(document.getElementById('form-sell-asset-admin').value) || 0;

    if (unitDijual <= 0 || hargaJual <= 0 || !akunTujuan || unitDijual > maxUnit + 1e-8) {
      showToast(currentLang === 'id' ? 'Unit jual atau harga tidak valid.' : 'Invalid sell units or price.', 'warning');
      return;
    }

    setBtnState('btn-sell-asset-submit', true);
    if (await apiPost({
      action: 'sellAsset',
      idAset: idAset,
      simbol: simbol,
      jumlahJual: unitDijual,
      totalDapat: Math.round(unitDijual * hargaJual),
      akunTujuan: akunTujuan
    })) {
      if (admin > 0 && !akunTujuan.startsWith('VALAS_')) {
        await apiPost({
          action: 'addTransaction',
          tipe: 'OUTFLOW',
          akun: akunTujuan,
          jumlah: admin,
          kategori: 'Biaya Admin',
          keterangan: `Admin jual aset ${simbol}`
        });
      }
      closeModal('modal-sell-asset');
      document.getElementById('form-sell-asset-jumlah').value = '';
      document.getElementById('form-sell-asset-harga').value = '';
      document.getElementById('form-sell-asset-admin').value = '';
      await fetchAllData();
      showToast(currentLang === 'id' ? `Aset ${simbol} terjual` : `${simbol} sold`, 'success');
    }
    setBtnState('btn-sell-asset-submit', false);
  };

  window.prepareReceiveDividend = function(simbol) {
    document.getElementById('dividend-asset-simbol-display').innerText = simbol;
    const selAccount = document.getElementById('form-dividend-account');
    if (selAccount) {
      for (let i = 0; i < selAccount.options.length; i++) {
        if (selAccount.options[i].value.toUpperCase().includes('RDN')) {
          selAccount.selectedIndex = i;
          break;
        }
      }
    }
    document.getElementById('form-dividend-amount').value = '';
    openModal('modal-dividend');
  };

  window.submitReceiveDividend = async function() {
    const amount = extractNumber(document.getElementById('form-dividend-amount').value);
    const account = document.getElementById('form-dividend-account').value;
    const simbol = document.getElementById('dividend-asset-simbol-display').innerText;
    if (amount <= 0 || !account) return;

    setBtnState('btn-dividend-submit', true);
    const desc = currentLang === 'en' ? `Receiving dividend for stock ${simbol}` : `Menerima dividen saham ${simbol}`;
    const now = new Date();
    const combinedDateTime = now.toISOString().split('T')[0] + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    if (await apiPost({
      action: 'addTransaction',
      tipe: 'INFLOW',
      akun: account,
      jumlah: amount,
      kategori: 'Dividen',
      keterangan: desc,
      tanggal: combinedDateTime,
      refId: 'DIV-' + new Date().getTime()
    })) {
      closeModal('modal-dividend');
      await fetchAllData();
      showToast(currentLang === 'id' ? 'Dividen dicatat' : 'Dividend recorded', 'success');
    }
    setBtnState('btn-dividend-submit', false);
  };

  /* --------------------------------------------------------------------------
   * 15. RENDERERS: DASHBOARD, GOALS, RECURRING, PORTFOLIO, CALENDAR, HISTORY
   * -------------------------------------------------------------------------- */
  function renderAllHTMLData() {
    try {
      renderDashboard();
      renderAccounts();
      renderGoals();
      renderRecurring();
      renderPortfolioScreen(false);
      renderHistoryScreen(false);
      renderCalendar();
    } catch (e) {
      console.error('Data Render Engine Error:', e);
    }
    applyPrivacyMasks();
    checkAndUpdateLevel();
  }

  function renderDashboard() {
    const balEl = document.getElementById('main-balance');
    if (!balEl) return;

    let totalBalance = 0;
    (appData.M_Akun || []).forEach(acc => {
      let tipeAkun = getProp(acc, 'Tipe_Akun', 'Tipe Akun');
      let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun');
      if (tipeAkun === 'Wallet Investasi' || (namaAkun && namaAkun.toUpperCase().includes('RDN'))) return;
      let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime');
      let valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal');
      totalBalance += extractNumber((valReal !== undefined && valReal !== null && valReal !== '') ? valReal : valAwal);
    });
    balEl.setAttribute('data-value', totalBalance);
    balEl.innerText = isPrivate ? '••••••••' : toRp(totalBalance);

    let inc = 0, exp = 0;
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    (appData.T_Transaksi || []).forEach(tx => {
      const tglRaw = getProp(tx, 'Tanggal');
      if (!tglRaw) return;
      const tgl = new Date(tglRaw);
      if (tgl.getMonth() === currentMonth && tgl.getFullYear() === currentYear) {
        const val = extractNumber(getProp(tx, 'Jumlah'));
        const tipe = (getProp(tx, 'Tipe') || '').toString().trim().toUpperCase();
        const kategori = (getProp(tx, 'Kategori') || '').toString().trim();
        if (tipe === 'INFLOW' && kategori !== 'Transfer Masuk') inc += val;
        if (tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar' && tipe !== 'NEUTRAL') exp += val;
      }
    });

    const sumIncEl = document.getElementById('summary-income');
    if (sumIncEl) {
      sumIncEl.setAttribute('data-value', inc);
      sumIncEl.innerText = isPrivate ? '••••••••' : toRp(inc);
    }
    const sumExpEl = document.getElementById('summary-expense');
    if (sumExpEl) {
      sumExpEl.setAttribute('data-value', exp);
      sumExpEl.innerText = isPrivate ? '••••••••' : toRp(exp);
    }

    const netBadge = document.getElementById('dash-net-badge');
    if (netBadge) {
      const net = inc - exp;
      netBadge.classList.remove('hidden');
      netBadge.innerText = `${net >= 0 ? '+' : ''}${toRp(net)}`;
    }

    renderDueAlerts();

    let dIn = 0, dOut = 0;
    const debtListContainer = document.getElementById('debt-list');
    let debtHtml = '';
    (appData.M_Debt || []).forEach(d => {
      const idDebt = getProp(d, 'ID_Debt', 'ID Debt', 'ID') || '';
      const sisa = extractNumber(getProp(d, 'Sisa', 'Sisa Saldo', 'Jumlah'));
      const tipe = (getProp(d, 'Tipe') || '').toString().trim().toUpperCase();
      const nama = getProp(d, 'Kontak', 'Nama') || 'Unknown';
      const status = (getProp(d, 'Status') || 'ACTIVE').toString().trim().toUpperCase();
      if (status === 'ACTIVE' && sisa > 0) {
        if (tipe === 'PIUTANG') dIn += sisa;
        if (tipe === 'UTANG') dOut += sisa;
        const isUtang = tipe === 'UTANG';
        const typeLabel = isUtang ? t('txt-mydebt') : t('txt-receivable');
        const colorClass = isUtang ? 'text-red-400' : 'text-emerald-400';
        const safeNama = nama.replace(/'/g, "\\'");
        const safeId = idDebt.replace(/'/g, "\\'");

        debtHtml += `
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${isUtang ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'}">${typeLabel}</span>
                <p class="text-xs font-extrabold text-white truncate">${escapeHtml(nama)}</p>
              </div>
            </div>
            <div class="flex items-center gap-2.5 shrink-0">
              <p class="text-xs font-extrabold ${colorClass} privacy-mask" data-value="${sisa}">${isPrivate ? '••••••••' : toRp(sisa)}</p>
              <button type="button" onclick="preparePayDebt('${safeNama}', '${tipe}', ${sisa}, '${safeId}')" class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-[#070908] text-white transition">${t('btn-pay-now')}</button>
            </div>
          </div>`;
      }
    });

    const debtInEl = document.getElementById('debt-in');
    if (debtInEl) {
      debtInEl.setAttribute('data-value', dIn);
      debtInEl.innerText = isPrivate ? '••••••••' : toRp(dIn);
    }
    const debtOutEl = document.getElementById('debt-out');
    if (debtOutEl) {
      debtOutEl.setAttribute('data-value', dOut);
      debtOutEl.innerText = isPrivate ? '••••••••' : toRp(dOut);
    }
    if (debtListContainer) {
      debtListContainer.innerHTML = debtHtml === '' ? `<p class="text-center text-xs text-stone-400 py-3 bg-white/5 rounded-2xl border border-white/5">${t('no-data-period')}</p>` : debtHtml;
    }
  }

  function renderGoals() {
    const containers = [document.getElementById('goals-list'), document.getElementById('porto-goals-list')].filter(Boolean);
    if (containers.length === 0) return;

    const goals = (appData.M_Goals || []).filter(g => (getProp(g, 'Status') || 'ACTIVE').toString().toUpperCase() !== 'COMPLETED');
    containers.forEach(container => {
      if (goals.length === 0) {
        container.innerHTML = `<div class="p-5 rounded-2xl bg-white/5 border border-white/10 text-center"><p class="text-xs text-stone-400 italic">${t('no-goal')}</p></div>`;
        return;
      }
      let html = '';
      goals.forEach(g => {
        const idGoal = getProp(g, 'ID_Goal', 'ID Goal', 'ID') || '';
        const nama = getProp(g, 'Nama_Goal', 'Nama Goal') || 'Target';
        const terkumpul = extractNumber(getProp(g, 'Terkumpul'));
        const target = Math.max(1, extractNumber(getProp(g, 'Target_Nominal', 'Target Nominal', 'Target')));
        const percent = Math.min(100, Math.round((terkumpul / target) * 100));
        const safeNama = nama.replace(/'/g, "\\'");
        const safeId = idGoal.replace(/'/g, "\\'");

        html += `
          <div class="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <div class="flex justify-between items-center gap-2">
              <div class="min-w-0">
                <p class="text-xs font-extrabold text-white truncate">${escapeHtml(nama)}</p>
                <p class="text-[10px] text-stone-400 mt-0.5">
                  <span class="privacy-mask" data-value="${terkumpul}">${isPrivate ? '••••••••' : toRp(terkumpul)}</span> /
                  <span class="privacy-mask" data-value="${target}">${isPrivate ? '••••••••' : toRp(target)}</span>
                </p>
              </div>
              <div class="flex items-center gap-1.5 shrink-0">
                <span class="text-xs font-black text-emerald-400 mr-1">${percent}%</span>
                <button type="button" onclick="prepareGoalAction('add', '${safeNama}', '${safeId}')" class="w-7 h-7 flex items-center justify-center bg-emerald-500/20 text-emerald-300 rounded-lg font-bold text-sm hover:bg-emerald-500/35 transition">+</button>
                <button type="button" onclick="prepareGoalAction('withdraw', '${safeNama}', '${safeId}')" class="w-7 h-7 flex items-center justify-center bg-red-500/20 text-red-300 rounded-lg font-bold text-sm hover:bg-red-500/35 transition">-</button>
              </div>
            </div>
            <div class="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div class="bg-gradient-to-r from-[#0F5132] to-emerald-400 h-2 transition-all duration-700" style="width: ${percent}%"></div>
            </div>
          </div>`;
      });
      container.innerHTML = html;
    });
  }

  function renderRecurring() {
    const container = document.getElementById('recurring-list');
    if (!container) return;
    const recs = appData.M_Recurring || [];
    if (recs.length === 0) {
      container.innerHTML = `<div class="p-5 rounded-2xl bg-white/5 border border-white/10 text-center"><p class="text-xs text-stone-400 italic">${t('no-rec')}</p></div>`;
      return;
    }

    let html = '';
    recs.forEach(r => {
      const idRec = getProp(r, 'ID_Recurring', 'ID', 'Id') || '';
      const nama = getProp(r, 'Nama') || '-';
      const nominal = extractNumber(getProp(r, 'Nominal'));
      const frekuensi = getProp(r, 'Frekuensi') || 'Bulanan';
      const akun = getProp(r, 'Akun_Sumber', 'Akun') || '';
      const tglTagihan = getProp(r, 'Tgl_Tagihan') || 1;
      const safeNama = nama.replace(/'/g, "\\'");
      const safeAkun = akun.replace(/'/g, "\\'");
      const safeId = idRec.replace(/'/g, "\\'");

      const isPaid = isRecurringPaidThisCycle(r);
      const btnHtml = isPaid
        ? `<button type="button" onclick="event.stopPropagation();" disabled class="px-2.5 py-1 bg-white/10 text-stone-400 rounded-full text-[10px] font-bold cursor-not-allowed flex items-center gap-1">${t('txt-paid')}</button>`
        : `<button type="button" onclick="event.stopPropagation(); payRecurring('${safeNama}', ${nominal}, '${safeAkun}', '${safeId}')" class="px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 border border-emerald-400/25 rounded-full text-[10px] font-bold transition">${t('btn-pay-now')}</button>`;

      html += `
        <div onclick="openRecurringDetailModal('${safeId}', '${safeNama}', ${nominal}, '${frekuensi}', ${tglTagihan}, '${safeAkun}')" class="cursor-pointer p-3.5 rounded-2xl bg-white/5 hover:bg-white/8 border border-white/10 flex items-center justify-between gap-3 transition">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
              <p class="text-xs font-extrabold text-white truncate">${escapeHtml(nama)}</p>
            </div>
            <p class="text-[10px] text-stone-400 mt-1">Tgl ${tglTagihan} • ${escapeHtml(akun)}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="text-xs font-extrabold text-emerald-300 privacy-mask" data-value="${nominal}">${isPrivate ? '••••••••' : toRp(nominal)}</span>
            ${btnHtml}
          </div>
        </div>`;
    });
    container.innerHTML = html;
  }

  function renderPortfolioScreen(drawChart = true) {
    const assetContainer = document.getElementById('asset-list');
    const walletContainer = document.getElementById('wallet-list');
    if (!assetContainer || !walletContainer) return;

    const porto = appData.M_Portofolio || [];
    const accounts = appData.M_Akun || [];
    const wallets = accounts.filter(a => getProp(a, 'Tipe_Akun', 'Tipe Akun') === 'Wallet Investasi' || (getProp(a, 'Nama_Akun', 'Nama Akun') || '').toUpperCase().includes('RDN'));

    let walletHtml = '', rdnBalance = 0;
    wallets.forEach(w => {
      let nama = getProp(w, 'Nama_Akun', 'Nama Akun') || 'Wallet';
      let tipe = getProp(w, 'Tipe_Akun', 'Tipe Akun') || 'Wallet';
      let valReal = getProp(w, 'Saldo_Realtime', 'Saldo Realtime');
      let valAwal = getProp(w, 'Saldo_Awal', 'Saldo Awal');
      let bal = extractNumber((valReal !== undefined && valReal !== null && valReal !== '') ? valReal : valAwal);
      rdnBalance += bal;
      const safeNama = nama.replace(/'/g, "\\'");

      walletHtml += `
        <div onclick="openWalletDetailModal('${safeNama}', ${bal})" class="cursor-pointer flex items-center justify-between p-3.5 bg-[#FAF8F5] dark:bg-[#161D19] border border-stone-200/70 dark:border-stone-800/80 rounded-2xl hover:border-[#0F5132]/40 transition">
          <div class="flex items-center gap-3">
            ${renderAccountBadgeHtml(nama, 'w-10 h-10')}
            <div>
              <p class="text-xs font-extrabold text-stone-900 dark:text-white">${escapeHtml(nama)}</p>
              <p class="text-[10px] font-semibold text-stone-400">${escapeHtml(tipe)}</p>
            </div>
          </div>
          <p class="text-xs font-extrabold privacy-mask text-[#0F5132] dark:text-emerald-300" data-value="${bal}">${isPrivate ? '••••••••' : toRp(bal)}</p>
        </div>`;
    });

    const aggregatedAssets = {};
    let assetHtml = '';

    porto.forEach(a => {
      const idAset = getProp(a, 'ID_Aset', 'ID Aset') || '';
      const simbol = getProp(a, 'Simbol', 'Nama Aset') || 'Aset';
      const jenisAset = getProp(a, 'Jenis_Aset', 'Jenis Aset', 'Jenis') || '';
      const mataUang = (getProp(a, 'Mata_Uang', 'Mata Uang') || 'IDR').toString().trim().toUpperCase();
      const jumlah = parseFloat((getProp(a, 'Jumlah', 'Unit') || '0').toString().replace(',', '.')) || 0;
      const hargaBeli = extractNumber(getProp(a, 'Harga_Beli', 'Harga Beli'));
      const hargaLiveRaw = getProp(a, 'Harga_Realtime', 'Harga Saat Ini');
      let hargaSekarang = (hargaLiveRaw !== undefined && hargaLiveRaw !== null && hargaLiveRaw !== '') ? extractNumber(hargaLiveRaw) : hargaBeli;
      if (isNaN(hargaSekarang) || hargaSekarang <= 0) hargaSekarang = hargaBeli;

      const totalValBeli = jumlah * hargaBeli;
      if (!aggregatedAssets[simbol]) {
        aggregatedAssets[simbol] = {
          idAset,
          simbol,
          jenisAset,
          mataUang,
          totalJumlah: 0,
          totalInvestasi: 0,
          hargaSekarang
        };
      }
      aggregatedAssets[simbol].totalJumlah += jumlah;
      aggregatedAssets[simbol].totalInvestasi += totalValBeli;
      if (hargaSekarang > 0) aggregatedAssets[simbol].hargaSekarang = hargaSekarang;
    });

    Object.values(aggregatedAssets).forEach(a => {
      const avgHargaBeli = a.totalJumlah > 0 ? (a.totalInvestasi / a.totalJumlah) : 0;
      const totalValSekarang = a.totalJumlah * a.hargaSekarang;
      const nominalReturn = totalValSekarang - a.totalInvestasi;
      const pnl = a.totalInvestasi > 0 ? (nominalReturn / a.totalInvestasi) * 100 : 0;
      const pnlColor = nominalReturn >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400';
      const pnlSign = nominalReturn > 0 ? '+' : '';

      const safeId = a.idAset.replace(/'/g, "\\'");
      const safeSimbol = a.simbol.replace(/'/g, "\\'");
      const safeJenis = a.jenisAset.replace(/'/g, "\\'");

      if (a.jenisAset === 'Valuta Asing') {
        walletHtml += `
          <div onclick="openAssetDetailModal('${safeId}', '${safeSimbol}', '${safeJenis}', ${a.totalJumlah}, ${avgHargaBeli}, ${a.totalInvestasi}, ${a.hargaSekarang}, ${totalValSekarang}, ${nominalReturn}, ${pnl})" class="cursor-pointer flex items-center justify-between p-3.5 bg-[#FAF8F5] dark:bg-[#161D19] border border-stone-200/70 dark:border-stone-800/80 rounded-2xl hover:border-[#0F5132]/40 transition">
            <div class="flex items-center gap-3">
              ${getAssetLogoHtml(a.simbol)}
              <div>
                <p class="text-xs font-extrabold text-stone-900 dark:text-white">${escapeHtml(a.simbol)} Wallet</p>
                <p class="text-[10px] text-stone-400">${a.totalJumlah.toLocaleString('en-US', { maximumFractionDigits: 4 })} Unit • Live: ${toRp(a.hargaSekarang)}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-xs font-extrabold privacy-mask text-[#0F5132] dark:text-emerald-300" data-value="${totalValSekarang}">${isPrivate ? '••••••••' : toRp(totalValSekarang)}</p>
              <p class="text-[10px] font-bold ${pnlColor} mt-0.5">${pnlSign}${pnl.toFixed(2)}%</p>
            </div>
          </div>`;
      } else {
        assetHtml += `
          <div onclick="openAssetDetailModal('${safeId}', '${safeSimbol}', '${safeJenis}', ${a.totalJumlah}, ${avgHargaBeli}, ${a.totalInvestasi}, ${a.hargaSekarang}, ${totalValSekarang}, ${nominalReturn}, ${pnl})" class="cursor-pointer p-4 rounded-[22px] bg-white dark:bg-[#111613] border border-stone-200/70 dark:border-stone-800/80 shadow-sm flex items-center justify-between gap-3 hover:border-[#0F5132]/40 transition">
            <div class="flex items-center gap-3 min-w-0">
              ${getAssetLogoHtml(a.simbol)}
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <p class="text-xs font-extrabold text-stone-900 dark:text-white truncate">${escapeHtml(a.simbol)}</p>
                  <span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#EDF5F0] dark:bg-emerald-500/15 text-[#0F5132] dark:text-emerald-300">${escapeHtml(a.jenisAset || 'Asset')}</span>
                </div>
                <p class="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">${a.totalJumlah.toLocaleString('en-US', { maximumFractionDigits: 6 })} ${t('unit')} • ${t('live')}: ${toRp(a.hargaSekarang)}</p>
              </div>
            </div>
            <div class="text-right shrink-0">
              <p class="text-xs font-extrabold privacy-mask text-stone-900 dark:text-white" data-value="${totalValSekarang}">${isPrivate ? '••••••••' : toRp(totalValSekarang)}</p>
              <p class="text-[10px] font-bold ${pnlColor} mt-0.5">${pnlSign}${pnl.toFixed(2)}%</p>
            </div>
          </div>`;
      }
    });

    walletContainer.innerHTML = walletHtml || `<p class="text-center text-xs text-stone-400 italic py-2">Belum ada dompet investasi.</p>`;
    assetContainer.innerHTML = assetHtml || `<p class="text-center text-xs text-stone-400 italic py-4 bg-white dark:bg-[#111613] rounded-2xl border border-stone-200/70 dark:border-stone-800">${t('no-asset')}</p>`;

    renderGoals();

    let labels = [], dataValues = [];
    const goals = (appData.M_Goals || []).filter(g => (getProp(g, 'Status') || 'ACTIVE').toString().toUpperCase() !== 'COMPLETED');
    let totalGoalSavings = goals.reduce((s, g) => s + extractNumber(getProp(g, 'Terkumpul')), 0);
    if (totalGoalSavings > 0) {
      labels.push('Tabungan Target');
      dataValues.push(totalGoalSavings);
    }
    if (rdnBalance > 0) {
      labels.push('Wallets');
      dataValues.push(rdnBalance);
    }
    Object.values(aggregatedAssets).forEach(p => {
      const valIDR = Math.max(0, p.totalJumlah * p.hargaSekarang);
      if (valIDR > 0) {
        labels.push(p.simbol);
        dataValues.push(valIDR);
      }
    });

    const totalNetAsset = dataValues.reduce((a, b) => a + (isNaN(b) ? 0 : b), 0);
    const portoCenter = document.getElementById('porto-center-val');
    if (portoCenter) {
      portoCenter.setAttribute('data-value', totalNetAsset);
      portoCenter.innerText = isPrivate ? '••••••••' : toRp(totalNetAsset);
    }

    if (drawChart && document.getElementById('portfolioChart') && typeof Chart !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      const ctx = document.getElementById('portfolioChart').getContext('2d');
      if (portoChartInstance) portoChartInstance.destroy();
      portoChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels.length > 0 ? labels : ['Kosong'],
          datasets: [{
            data: dataValues.length > 0 ? dataValues : [1],
            backgroundColor: dataValues.length > 0 ? CHART_PALETTE : [isDark ? '#1E2722' : '#E7E5E4'],
            borderColor: isDark ? '#111613' : '#FFFFFF',
            borderWidth: 3,
            hoverOffset: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '74%',
          plugins: { legend: { display: false } }
        }
      });
    }
  }

  window.openAssetDetailModal = function(idAset, simbol, jenisAset, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent) {
    window.lastAssetData = { idAset, simbol, jenisAset, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent };
    const simbolEl = document.getElementById('det-aset-simbol');
    if (simbolEl) simbolEl.innerText = simbol;
    const logoEl = document.getElementById('det-aset-logo');
    if (logoEl) logoEl.innerHTML = getAssetLogoHtml(simbol).replace('w-10 h-10', 'w-7 h-7 object-contain rounded-full');

    const btnBeli = document.getElementById('btn-det-beli');
    if (btnBeli) {
      btnBeli.onclick = () => {
        closeModal('modal-asset-detail');
        openModal('modal-buy-asset');
        const formSimbol = document.getElementById('form-asset-simbol');
        if (formSimbol) formSimbol.value = simbol;
      };
    }

    const btnJual = document.getElementById('btn-det-jual');
    if (btnJual) {
      btnJual.onclick = () => {
        closeModal('modal-asset-detail');
        const displaySimbol = document.getElementById('sell-asset-simbol-display');
        if (displaySimbol) displaySimbol.innerText = simbol;
        const displayMax = document.getElementById('sell-asset-max-display');
        if (displayMax) {
          displayMax.innerText = lot.toLocaleString('en-US', { maximumFractionDigits: 6 });
          displayMax.setAttribute('data-raw', lot);
        }
        const inputId = document.getElementById('form-sell-asset-id');
        if (inputId) inputId.value = idAset;
        const inputSimbol = document.getElementById('form-sell-asset-simbol');
        if (inputSimbol) inputSimbol.value = simbol;
        openModal('modal-sell-asset');
      };
    }

    const btnDividen = document.getElementById('btn-det-dividen');
    if (btnDividen) {
      if (jenisAset && jenisAset.toUpperCase().includes('SAHAM')) {
        btnDividen.classList.remove('hidden');
        btnDividen.onclick = () => {
          closeModal('modal-asset-detail');
          window.prepareReceiveDividend(simbol);
        };
      } else {
        btnDividen.classList.add('hidden');
      }
    }

    window.updateAssetDetailCurrencyView();
    openModal('modal-asset-detail');
  };

  window.updateAssetDetailCurrencyView = function() {
    if (!window.lastAssetData) return;
    const { simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent } = window.lastAssetData;
    const curr = window.currentActiveCurrency;
    const rate = window.usdExchangeRate || 16250;

    const fmt = num => curr === 'IDR'
      ? toExactIDR(num)
      : '$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num / rate);

    document.getElementById('det-aset-live').innerText = isPrivate ? '••••••••' : fmt(liveHarga);
    document.getElementById('det-aset-lot').innerText = lot.toLocaleString('en-US', { maximumFractionDigits: 6 }) + ' ' + t('unit');
    document.getElementById('det-aset-avg').innerText = isPrivate ? '••••••••' : fmt(avgHarga);
    document.getElementById('det-aset-invest').innerText = isPrivate ? '••••••••' : fmt(investasi);
    document.getElementById('det-aset-total').innerText = isPrivate ? '••••••••' : fmt(totalVal);

    let pnlSign = nominalReturn > 0 ? '+' : '';
    let pnlColor = nominalReturn >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400';
    let fullReturnString = `${pnlSign}${fmt(Math.abs(nominalReturn))} (${pnlSign}${pnlPercent.toFixed(2)}%)`;

    document.getElementById('det-aset-return').innerText = fullReturnString;
    document.getElementById('det-aset-return').className = `text-xs font-bold text-right ${pnlColor}`;
    document.getElementById('det-aset-live-change').innerText = fullReturnString;
    document.getElementById('det-aset-live-change').className = `text-xs font-bold mt-1 ${pnlColor}`;

    document.getElementById('det-aset-mktcap').innerText = isPrivate ? '••••••••' : fmt(totalVal * 42000);
    document.getElementById('det-aset-vol').innerText = isPrivate ? '••••••••' : fmt(totalVal * 1.35);

    const btnIdr = document.getElementById('currency-btn-idr');
    const btnUsd = document.getElementById('currency-btn-usd');
    if (btnIdr && btnUsd) {
      if (curr === 'IDR') {
        btnIdr.className = 'px-2.5 py-1 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] transition-all duration-200';
        btnUsd.className = 'px-2.5 py-1 rounded-full text-stone-400 dark:text-stone-500 transition-all duration-200';
      } else {
        btnUsd.className = 'px-2.5 py-1 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] transition-all duration-200';
        btnIdr.className = 'px-2.5 py-1 rounded-full text-stone-400 dark:text-stone-500 transition-all duration-200';
      }
    }
    renderMockPriceChart(simbol, liveHarga);
  };

  function renderMockPriceChart(assetName, currentPrice) {
    const canvas = document.getElementById('portoChart');
    if (!canvas || typeof Chart === 'undefined') return;
    const ctx = canvas.getContext('2d');
    if (window.portoChartInstance) window.portoChartInstance.destroy();

    let points = 20, volatility = 0.02;
    switch (window.currentActiveFilter) {
      case '1H': points = 12; volatility = 0.006; break;
      case '1D': points = 24; volatility = 0.018; break;
      case '1W': points = 14; volatility = 0.035; break;
      case '1M': points = 30; volatility = 0.07; break;
      case '1Y': points = 52; volatility = 0.18; break;
    }
    const mockData = [];
    let tempPrice = currentPrice;
    for (let i = 0; i < points; i++) {
      const change = (Math.random() - 0.48) * volatility;
      tempPrice = tempPrice * (1 + change);
      mockData.unshift(tempPrice);
    }
    mockData[points - 1] = currentPrice;

    const gradient = ctx.createLinearGradient(0, 0, 0, 160);
    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.28)');
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

    window.portoChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: points }, (_, i) => i.toString()),
        datasets: [{
          data: mockData,
          borderColor: '#10B981',
          borderWidth: 2,
          fill: true,
          backgroundColor: gradient,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false } }
      }
    });
  }

  window.setChartFilter = function(filter) {
    window.currentActiveFilter = filter;
    document.querySelectorAll('.time-filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });
    if (window.lastAssetData) renderMockPriceChart(window.lastAssetData.simbol, window.lastAssetData.liveHarga);
  };

  window.setCurrencyFilter = function(curr) {
    window.currentActiveCurrency = curr;
    window.updateAssetDetailCurrencyView();
  };

  /* --------------------------------------------------------------------------
   * 16. CALENDAR & TRANSACTION DETAIL
   * -------------------------------------------------------------------------- */
  window.changeCalMonth = function(step) {
    currentCalMonth += step;
    if (currentCalMonth > 11) { currentCalMonth = 0; currentCalYear++; }
    else if (currentCalMonth < 0) { currentCalMonth = 11; currentCalYear--; }
    renderCalendar();
    showDailyDetail(1, true);
  };

  window.selectCalDay = function(day) {
    showDailyDetail(day);
  };

  function renderCalendar() {
    const calGrid = document.getElementById('calendar-grid');
    if (!calGrid) return;
    document.getElementById('calendar-month-year').innerText = `${i18n[currentLang]['month-names'][currentCalMonth]} ${currentCalYear}`;

    const firstDay = new Date(currentCalYear, currentCalMonth, 1).getDay();
    const daysInMonth = new Date(currentCalYear, currentCalMonth + 1, 0).getDate();
    const dailyData = {};

    (appData.T_Transaksi || []).filter(tx => getProp(tx, 'Tipe') !== 'NEUTRAL').forEach(tx => {
      const tglRaw = getProp(tx, 'Tanggal');
      if (!tglRaw) return;
      const tgl = new Date(tglRaw);
      if (tgl.getMonth() === currentCalMonth && tgl.getFullYear() === currentCalYear) {
        const dateNum = tgl.getDate();
        if (!dailyData[dateNum]) dailyData[dateNum] = { in: 0, out: 0 };
        const tipe = (getProp(tx, 'Tipe') || '').toString().trim().toUpperCase();
        const kategori = (getProp(tx, 'Kategori') || '').toString().trim();
        const val = extractNumber(getProp(tx, 'Jumlah'));
        if (tipe === 'INFLOW' && kategori !== 'Transfer Masuk') dailyData[dateNum].in += val;
        if (tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') dailyData[dateNum].out += val;
      }
    });

    let html = '';
    for (let i = 0; i < firstDay; i++) html += `<div class="h-12 rounded-2xl"></div>`;

    const today = new Date();
    const isCurrentMonthReal = today.getMonth() === currentCalMonth && today.getFullYear() === currentCalYear;
    const currentDayReal = today.getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      let isToday = isCurrentMonthReal && i === currentDayReal;
      let isActive = i === activeCalDay;
      let cellClass = isActive
        ? 'bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] border-transparent shadow-md font-extrabold'
        : isToday
          ? 'bg-[#EDF5F0] dark:bg-emerald-500/15 text-[#0F5132] dark:text-emerald-300 border-[#0F5132]/30 dark:border-emerald-500/30 font-extrabold'
          : 'bg-[#FAF8F5] dark:bg-[#161D19] text-stone-700 dark:text-stone-200 border-transparent hover:border-stone-300 dark:hover:border-stone-700 font-bold';

      let dotsHtml = '';
      if (dailyData[i]) {
        if (dailyData[i].in > 0) dotsHtml += `<span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white dark:bg-[#070908]' : 'bg-emerald-500'}"></span>`;
        if (dailyData[i].out > 0) dotsHtml += `<span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-amber-300 dark:bg-red-700' : 'bg-red-500'}"></span>`;
      }

      html += `
        <button type="button" onclick="selectCalDay(${i})" class="h-12 rounded-2xl flex flex-col items-center justify-center relative transition border ${cellClass}">
          <span class="text-xs leading-none">${i}</span>
          <div class="flex items-center gap-1 mt-1 h-1.5">${dotsHtml}</div>
        </button>`;
    }

    calGrid.innerHTML = html;
    showDailyDetail(activeCalDay, false);
  }

  function showDailyDetail(day, refreshCalendarUI = true) {
    activeCalDay = day;
    if (refreshCalendarUI) renderCalendar();
    const titleEl = document.getElementById('daily-detail-title');
    if (!titleEl) return;
    titleEl.innerText = `${day} ${i18n[currentLang]['month-names'][currentCalMonth]} ${currentCalYear}`;

    const dailyTrxs = (appData.T_Transaksi || []).filter(tx => {
      const tglRaw = getProp(tx, 'Tanggal');
      if (!tglRaw || getProp(tx, 'Tipe') === 'NEUTRAL') return false;
      const tgl = new Date(tglRaw);
      return tgl.getDate() === day && tgl.getMonth() === currentCalMonth && tgl.getFullYear() === currentCalYear;
    });

    const listContainer = document.getElementById('daily-transaction-list');
    if (!listContainer) return;
    if (dailyTrxs.length === 0) {
      listContainer.innerHTML = `<p class="text-center text-xs text-stone-400 py-6 bg-white/5 rounded-2xl border border-white/5">${t('no-trx-today')}</p>`;
      return;
    }

    let html = '';
    [...dailyTrxs].sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime()).forEach(tobj => {
      const isOut = (getProp(tobj, 'Tipe') || '').toString().trim().toUpperCase() === 'OUTFLOW';
      const sign = isOut ? '-' : '+';
      const kategori = getProp(tobj, 'Kategori') || '';
      const akun = getProp(tobj, 'Akun', 'Nama_Akun') || '';
      const color = isOut ? 'text-red-400' : 'text-emerald-400';
      const val = extractNumber(getProp(tobj, 'Jumlah'));
      const tobjJSON = encodeURIComponent(JSON.stringify(tobj)).replace(/'/g, '%27');

      html += `
        <div onclick="openTransactionDetail('${tobjJSON}')" class="cursor-pointer p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between gap-3 transition">
          <div class="flex items-center gap-3 min-w-0">
            ${renderAccountBadgeHtml(akun, 'w-9 h-9')}
            <div class="min-w-0">
              <p class="text-xs font-extrabold text-white truncate">${escapeHtml(getProp(tobj, 'Keterangan') || kategori)}</p>
              <p class="text-[10px] text-stone-400 mt-0.5 truncate">${escapeHtml(kategori)} • ${escapeHtml(akun)}</p>
            </div>
          </div>
          <p class="text-xs font-extrabold ${color} whitespace-nowrap shrink-0">${sign}<span class="privacy-mask" data-value="${val}">${isPrivate ? '••••••••' : toRp(val)}</span></p>
        </div>`;
    });
    listContainer.innerHTML = html;
    applyPrivacyMasks();
  }

  window.openTransactionDetail = function(jsonStr) {
    try {
      const tobj = JSON.parse(decodeURIComponent(jsonStr));
      const modal = document.getElementById('modal-transaction-detail');
      if (!modal) return;

      const isOut = (getProp(tobj, 'Tipe', 'Type') || '').toString().trim().toUpperCase() === 'OUTFLOW';
      const val = extractNumber(getProp(tobj, 'Jumlah', 'Amount', 'Nominal'));
      const kategori = getProp(tobj, 'Kategori', 'Category') || '-';
      const akun = getProp(tobj, 'Nama_Akun', 'Akun', 'Account') || '-';
      const tglRaw = getProp(tobj, 'Tanggal', 'Date');
      const trxId = getProp(tobj, 'ID_Transaksi', 'ID_Trx', 'ID') || '';
      activeDetailTrxId = trxId;

      let dateStr = '-';
      if (tglRaw) {
        const d = new Date(tglRaw);
        const mName = i18n[currentLang]['month-names'][d.getMonth()];
        dateStr = `${d.getDate().toString().padStart(2, '0')} ${mName} ${d.getFullYear()} • ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} ${getTimezoneLabel()}`;
      }

      document.getElementById('dtl-type-label').innerText = isOut ? t('type-exp') : t('type-inc');
      const amtEl = document.getElementById('dtl-amount');
      amtEl.setAttribute('data-value', val);
      amtEl.innerText = isPrivate ? '••••••••' : toRp(val);
      amtEl.className = `text-3xl font-black tracking-tight privacy-mask ${isOut ? 'text-red-500 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`;

      document.getElementById('dtl-kategori').innerText = kategori;
      document.getElementById('dtl-tanggal').innerText = dateStr;
      document.getElementById('dtl-akun').innerText = akun;
      document.getElementById('dtl-keterangan').innerText = getProp(tobj, 'Keterangan', 'Description') || '-';

      const itemsSection = document.getElementById('dtl-items-section');
      const itemsContainer = document.getElementById('dtl-items-container');
      const dbDetail = appData.T_Transaksi_Detail || [];
      let items = trxId ? dbDetail.filter(d => String(getProp(d, 'ID_Transaksi', 'ID')) === String(trxId)) : [];

      if (itemsSection && itemsContainer) {
        if (items.length > 0) {
          itemsSection.classList.remove('hidden');
          itemsContainer.innerHTML = items.map(item => {
            const itemName = getProp(item, 'Nama_Item', 'Nama_Barang', 'name') || 'Item';
            const qty = extractNumber(getProp(item, 'Qty', 'Jumlah')) || 1;
            const priceTotal = extractNumber(getProp(item, 'Harga', 'Total_Harga', 'price')) || 0;
            const hargaSatuan = qty > 0 ? (priceTotal / qty) : priceTotal;
            return `
              <div class="flex justify-between items-center text-xs py-1.5 border-b border-stone-200/60 dark:border-stone-800 last:border-0">
                <div class="flex flex-col w-2/3 pr-2">
                  <span class="text-stone-700 dark:text-stone-200 font-bold uppercase truncate">${escapeHtml(itemName)}</span>
                  <span class="text-[10px] text-stone-500 font-medium">${qty}x @ ${toRp(hargaSatuan)}</span>
                </div>
                <span class="text-stone-800 dark:text-stone-100 font-bold text-right text-xs">${toRp(priceTotal)}</span>
              </div>`;
          }).join('');
        } else {
          itemsSection.classList.add('hidden');
          itemsContainer.innerHTML = '';
        }
      }

      openModal('modal-transaction-detail');
    } catch (e) {
      console.error(e);
    }
  };

  /* --------------------------------------------------------------------------
   * 17. HISTORY ANALYTICS, SEARCH & FILTER
   * -------------------------------------------------------------------------- */
  window.setHistoryFilter = function(filterType) {
    histFilterTime = filterType;
    ['month', '7days', 'custom'].forEach(p => {
      const btn = document.getElementById('filter-' + p);
      if (!btn) return;
      const active = p === filterType;
      btn.className = active
        ? 'px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] shadow-md shadow-emerald-950/15 transition hover:opacity-95'
        : 'px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap bg-white dark:bg-[#111613] border border-stone-200/70 dark:border-stone-800 text-stone-600 dark:text-stone-300 shadow-sm transition hover:bg-[#FAF8F5] dark:hover:bg-[#18201C]';
    });
    const customPanel = document.getElementById('custom-date-container');
    if (customPanel) {
      if (filterType === 'custom') { customPanel.classList.remove('hidden'); customPanel.classList.add('grid'); }
      else { customPanel.classList.add('hidden'); customPanel.classList.remove('grid'); }
    }
    renderHistoryScreen();
  };

  window.setHistoryType = function(type) {
    histToggleType = type;
    ['INFLOW', 'OUTFLOW', 'TRANSFER'].forEach(t => {
      const btn = document.getElementById('toggle-' + t.toLowerCase());
      if (btn) btn.classList.toggle('toggle-active', t === type);
    });
    renderHistoryScreen();
  };

  window.triggerHistoryRender = function() {
    if (histFilterTime === 'custom') renderHistoryScreen();
  };

  window.triggerHistoryFilterUpdate = function() {
    const searchEl = document.getElementById('hist-search-input');
    const accEl = document.getElementById('hist-filter-account');
    const catEl = document.getElementById('hist-filter-category');
    const clearBtn = document.getElementById('btn-clear-hist-search');
    const resetBtn = document.getElementById('btn-reset-hist-filter');

    historySearchQuery = searchEl ? searchEl.value.trim().toLowerCase() : '';
    historyAccountFilter = accEl ? accEl.value : 'ALL';
    historyCategoryFilter = catEl ? catEl.value : 'ALL';

    if (clearBtn) clearBtn.classList.toggle('hidden', !historySearchQuery);
    const hasFilter = Boolean(historySearchQuery) || historyAccountFilter !== 'ALL' || historyCategoryFilter !== 'ALL';
    if (resetBtn) resetBtn.classList.toggle('hidden', !hasFilter);

    renderHistoryScreen(false);
  };

  window.clearHistorySearch = function() {
    const searchEl = document.getElementById('hist-search-input');
    if (searchEl) searchEl.value = '';
    triggerHistoryFilterUpdate();
  };

  window.resetHistoryFilters = function() {
    const searchEl = document.getElementById('hist-search-input');
    const accEl = document.getElementById('hist-filter-account');
    const catEl = document.getElementById('hist-filter-category');
    if (searchEl) searchEl.value = '';
    if (accEl) accEl.value = 'ALL';
    if (catEl) catEl.value = 'ALL';
    triggerHistoryFilterUpdate();
  };

  function populateHistoryFilterDropdowns() {
    const accEl = document.getElementById('hist-filter-account');
    const catEl = document.getElementById('hist-filter-category');
    if (accEl) {
      const cur = accEl.value || 'ALL';
      const accNames = new Set();
      (appData.M_Akun || []).forEach(a => {
        const n = getProp(a, 'Nama_Akun', 'Nama Akun');
        if (n) accNames.add(n);
      });
      accEl.innerHTML = `<option value="ALL">${t('opt-all-acc')}</option>` +
        Array.from(accNames).map(n => `<option value="${escapeHtml(n)}">${escapeHtml(n)}</option>`).join('');
      accEl.value = cur;
    }
    if (catEl) {
      const cur = catEl.value || 'ALL';
      const cats = new Set();
      (appData.T_Transaksi || []).forEach(tx => {
        const c = getProp(tx, 'Kategori');
        if (c) cats.add(c);
      });
      catEl.innerHTML = `<option value="ALL">${t('opt-all-cat')}</option>` +
        Array.from(cats).map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
      catEl.value = cur;
    }
  }

  function getFilteredTransactions() {
    let trxs = appData.T_Transaksi || [];
    const today = new Date();
    return trxs.filter(tx => {
      const tgl = getProp(tx, 'Tanggal');
      if (!tgl) return false;
      const txDate = new Date(tgl);
      if (histFilterTime === 'month') {
        return txDate.getMonth() === today.getMonth() && txDate.getFullYear() === today.getFullYear();
      } else if (histFilterTime === '7days') {
        const s = new Date(today);
        s.setDate(today.getDate() - 7);
        return txDate >= s && txDate <= today;
      } else if (histFilterTime === 'custom') {
        const s = document.getElementById('date-start')?.valueAsDate;
        const e = document.getElementById('date-end')?.valueAsDate;
        if (!s || !e) return true;
        e.setHours(23, 59, 59, 999);
        return txDate >= s && txDate <= e;
      }
      return true;
    });
  }

  function renderHistoryScreen(drawChart = true) {
    const historyListContainer = document.getElementById('history-list');
    if (!historyListContainer) return;

    populateHistoryFilterDropdowns();
    const filteredData = getFilteredTransactions().filter(tx => getProp(tx, 'Tipe') !== 'NEUTRAL');

    let sumIn = 0, sumOut = 0;
    filteredData.forEach(tx => {
      const val = extractNumber(getProp(tx, 'Jumlah'));
      const tipe = (getProp(tx, 'Tipe') || '').toString().trim().toUpperCase();
      const kategori = (getProp(tx, 'Kategori') || '').toString().trim();
      if (tipe === 'INFLOW' && kategori !== 'Transfer Masuk') sumIn += val;
      if (tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') sumOut += val;
    });

    const diff = sumIn - sumOut;
    document.getElementById('hist-sum-in').setAttribute('data-value', sumIn);
    document.getElementById('hist-sum-in').innerText = isPrivate ? '••••••••' : toRp(sumIn);
    document.getElementById('hist-sum-out').setAttribute('data-value', sumOut);
    document.getElementById('hist-sum-out').innerText = isPrivate ? '••••••••' : toRp(sumOut);

    const diffEl = document.getElementById('hist-sum-diff');
    diffEl.setAttribute('data-value', diff);
    diffEl.innerText = isPrivate ? '••••••••' : `${diff >= 0 ? '+' : ''}${toRp(diff)}`;

    let chartDataRaw = [], listDataRaw = [], centerLabel = '';
    if (histToggleType === 'INFLOW') {
      chartDataRaw = filteredData.filter(tx => (getProp(tx, 'Tipe') || '').toString().trim().toUpperCase() === 'INFLOW' && getProp(tx, 'Kategori') !== 'Transfer Masuk');
      listDataRaw = chartDataRaw;
      centerLabel = t('tot-inc');
    } else if (histToggleType === 'OUTFLOW') {
      chartDataRaw = filteredData.filter(tx => (getProp(tx, 'Tipe') || '').toString().trim().toUpperCase() === 'OUTFLOW' && getProp(tx, 'Kategori') !== 'Transfer Keluar');
      listDataRaw = chartDataRaw;
      centerLabel = t('tot-exp');
    } else {
      chartDataRaw = filteredData.filter(tx => getProp(tx, 'Kategori') === 'Transfer Masuk');
      listDataRaw = filteredData.filter(tx => ['Transfer Keluar', 'Transfer Masuk', 'Biaya Admin'].includes(getProp(tx, 'Kategori')));
      centerLabel = t('tot-tf');
    }

    const categorySums = {}, categoryCounts = {};
    let grandTotalChart = 0;
    chartDataRaw.forEach(tx => {
      let groupKey = histToggleType === 'TRANSFER' ? getProp(tx, 'Nama_Akun', 'Akun') : getProp(tx, 'Kategori');
      if (groupKey && groupKey.startsWith('VALAS_')) groupKey = groupKey.replace('VALAS_', '') + ' Wallet';
      const val = extractNumber(getProp(tx, 'Jumlah'));
      if (!categorySums[groupKey]) { categorySums[groupKey] = 0; categoryCounts[groupKey] = 0; }
      categorySums[groupKey] += val;
      categoryCounts[groupKey] += 1;
      grandTotalChart += val;
    });

    const sortedCategories = Object.keys(categorySums).map(cat => ({
      name: cat,
      total: categorySums[cat],
      count: categoryCounts[cat],
      percent: grandTotalChart > 0 ? ((categorySums[cat] / grandTotalChart) * 100).toFixed(1) : 0
    })).sort((a, b) => b.total - a.total);

    document.getElementById('chart-center-val').setAttribute('data-value', grandTotalChart);
    document.getElementById('chart-center-val').innerText = isPrivate ? '••••••••' : toRp(grandTotalChart);
    document.getElementById('chart-center-label').innerText = centerLabel;

    if (drawChart && document.getElementById('categoryChart') && typeof Chart !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      if (myChartInstance) myChartInstance.destroy();
      myChartInstance = new Chart(document.getElementById('categoryChart').getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: sortedCategories.length > 0 ? sortedCategories.map(c => c.name) : ['Kosong'],
          datasets: [{
            data: sortedCategories.length > 0 ? sortedCategories.map(c => c.total) : [1],
            backgroundColor: sortedCategories.length > 0 ? CHART_PALETTE : [isDark ? '#1E2722' : '#E7E5E4'],
            borderColor: isDark ? '#111613' : '#FFFFFF',
            borderWidth: 3
          }]
        },
        options: { responsive: true, maintainAspectRatio: false, cutout: '74%', plugins: { legend: { display: false } } }
      });
    }

    const catListContainer = document.getElementById('history-category-list');
    if (catListContainer) {
      if (sortedCategories.length === 0) {
        catListContainer.innerHTML = `<p class="text-center text-xs text-stone-400 py-4">${t('no-data-period')}</p>`;
      } else {
        catListContainer.innerHTML = sortedCategories.map((cat, index) => {
          const color = CHART_PALETTE[index % CHART_PALETTE.length];
          const iconHtml = histToggleType === 'TRANSFER'
            ? renderAccountBadgeHtml(cat.name, 'w-9 h-9')
            : `<div class="w-9 h-9 rounded-xl flex items-center justify-center text-base" style="background-color: ${color}20; color: ${color};">${getCategoryIcon(cat.name)}</div>`;
          return `
            <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-[#FAF8F5] dark:bg-[#161D19]">
              <div class="flex items-center gap-2.5 min-w-0">
                ${iconHtml}
                <div class="min-w-0">
                  <p class="text-xs font-extrabold text-stone-800 dark:text-stone-200 truncate">${escapeHtml(cat.name)}</p>
                  <p class="text-[10px] text-stone-400">${t('from-trx')} ${cat.count} ${t('transactions')}</p>
                </div>
              </div>
              <div class="text-right shrink-0">
                <p class="text-xs font-extrabold text-stone-900 dark:text-white privacy-mask" data-value="${cat.total}">${isPrivate ? '••••••••' : toRp(cat.total)}</p>
                <p class="text-[10px] font-bold text-stone-400">${cat.percent}%</p>
              </div>
            </div>`;
        }).join('');
      }
    }

    // Apply Search + Dropdown Filters
    const searchedList = listDataRaw.filter(tobj => {
      const akun = getProp(tobj, 'Nama_Akun', 'Akun') || '';
      const kat = getProp(tobj, 'Kategori') || '';
      const ket = getProp(tobj, 'Keterangan') || '';
      const amt = getProp(tobj, 'Jumlah') || '';
      if (historyAccountFilter !== 'ALL' && akun !== historyAccountFilter) return false;
      if (historyCategoryFilter !== 'ALL' && kat !== historyCategoryFilter) return false;
      if (historySearchQuery) {
        const hay = `${ket} ${kat} ${akun} ${amt}`.toLowerCase();
        if (!hay.includes(historySearchQuery)) return false;
      }
      return true;
    });

    const countBadge = document.getElementById('hist-count-badge');
    if (countBadge) countBadge.innerText = String(searchedList.length);

    if (searchedList.length === 0) {
      historyListContainer.innerHTML = `<div class="text-center p-6"><p class="text-xs text-stone-400">${t('no-trx')}</p></div>`;
      return;
    }

    let html = '';
    const sortedTransactions = [...searchedList].sort((a, b) => new Date(getProp(b, 'Tanggal') || 0).getTime() - new Date(getProp(a, 'Tanggal') || 0).getTime());
    let currentDateGroup = '';

    sortedTransactions.forEach(tobj => {
      const tglRaw = getProp(tobj, 'Tanggal');
      const tglObj = tglRaw ? new Date(tglRaw) : null;
      let dateString = tglObj ? `${tglObj.getDate().toString().padStart(2, '0')} ${i18n[currentLang]['month-names'][tglObj.getMonth()]} ${tglObj.getFullYear()}` : '-';
      if (dateString !== currentDateGroup) {
        html += `<div class="px-4 py-2 bg-[#FAF8F5] dark:bg-[#161D19] border-y border-stone-200/70 dark:border-stone-800"><span class="text-[10px] font-extrabold text-stone-500 dark:text-stone-400 uppercase tracking-wider">${dateString}</span></div>`;
        currentDateGroup = dateString;
      }

      const isOut = (getProp(tobj, 'Tipe') || '').toString().trim().toUpperCase() === 'OUTFLOW';
      const sign = isOut ? '-' : '+';
      const kategori = getProp(tobj, 'Kategori') || '';
      const akun = getProp(tobj, 'Nama_Akun', 'Akun') || '';
      const color = isOut ? 'text-red-600 dark:text-red-400' : 'text-[#0F5132] dark:text-emerald-400';
      const val = extractNumber(getProp(tobj, 'Jumlah'));
      const tobjJSON = encodeURIComponent(JSON.stringify(tobj)).replace(/'/g, '%27');

      html += `
        <div onclick="openTransactionDetail('${tobjJSON}')" class="cursor-pointer flex items-center justify-between p-4 border-b border-stone-100 dark:border-stone-800/70 last:border-0 hover:bg-[#FAF8F5] dark:hover:bg-[#161D19] transition">
          <div class="flex items-center gap-3 min-w-0">
            ${renderAccountBadgeHtml(akun, 'w-10 h-10')}
            <div class="min-w-0">
              <p class="text-xs font-extrabold truncate text-stone-900 dark:text-white">${escapeHtml(getProp(tobj, 'Keterangan') || kategori)}</p>
              <p class="text-[10px] text-stone-400 truncate uppercase tracking-wide mt-0.5">${escapeHtml(kategori)} • ${escapeHtml(akun)}</p>
            </div>
          </div>
          <p class="text-xs font-extrabold ${color} whitespace-nowrap shrink-0">${sign}<span class="privacy-mask" data-value="${val}">${isPrivate ? '••••••••' : toRp(val)}</span></p>
        </div>`;
    });
    historyListContainer.innerHTML = html;
  }

  /* --------------------------------------------------------------------------
   * 18. FINANCIAL LEVEL ENGINE & EMERALD PDF STATEMENT EXPORT
   * -------------------------------------------------------------------------- */
  function checkAndUpdateLevel() {
    let totalDebt = 0;
    (appData.M_Debt || []).forEach(d => {
      if ((getProp(d, 'Tipe') || '').toString().trim().toUpperCase() === 'UTANG' && (getProp(d, 'Status') || 'ACTIVE') === 'ACTIVE') {
        totalDebt += extractNumber(getProp(d, 'Sisa', 'Sisa Saldo'));
      }
    });

    let currentBalance = 0;
    let totalAsset = 0;
    (appData.M_Akun || []).forEach(acc => {
      let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun') || '';
      let tipeAkun = getProp(acc, 'Tipe_Akun', 'Tipe Akun') || '';
      let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime');
      let valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal');
      let bal = extractNumber((valReal !== undefined && valReal !== null && valReal !== '') ? valReal : valAwal);
      if (tipeAkun === 'Wallet Investasi' || namaAkun.toUpperCase().includes('RDN')) totalAsset += bal;
      else currentBalance += bal;
    });

    (appData.M_Portofolio || []).forEach(a => {
      const jumlah = parseFloat((getProp(a, 'Jumlah', 'Unit') || '0').toString().replace(',', '.')) || 0;
      const hargaLiveRaw = getProp(a, 'Harga_Realtime', 'Harga Saat Ini');
      const hargaSekarang = (hargaLiveRaw !== undefined && hargaLiveRaw !== null && hargaLiveRaw !== '') ? extractNumber(hargaLiveRaw) : extractNumber(getProp(a, 'Harga_Beli', 'Harga Beli'));
      totalAsset += (jumlah * hargaSekarang);
    });

    let totalOutflowHistorical = 0, uniqueMonths = new Set();
    (appData.T_Transaksi || []).filter(tx => getProp(tx, 'Tipe') !== 'NEUTRAL').forEach(tx => {
      const tglRaw = getProp(tx, 'Tanggal');
      if (!tglRaw) return;
      const tgl = new Date(tglRaw);
      const tipe = (getProp(tx, 'Tipe') || '').toString().trim().toUpperCase();
      const kategori = (getProp(tx, 'Kategori') || '').toString().trim();
      if (tipe === 'OUTFLOW' && kategori !== 'Transfer Keluar') {
        totalOutflowHistorical += extractNumber(getProp(tx, 'Jumlah'));
        uniqueMonths.add(`${tgl.getFullYear()}-${tgl.getMonth()}`);
      }
    });

    let avgExpenditure = uniqueMonths.size > 0 ? (totalOutflowHistorical / uniqueMonths.size) : 0;
    let newLevelNum = 1;
    let totalGabunganDana = currentBalance + totalAsset;
    let targetDanaDarurat = 6 * avgExpenditure;

    if (totalDebt > 0) newLevelNum = 1;
    else if (totalGabunganDana < targetDanaDarurat || avgExpenditure === 0) newLevelNum = 2;
    else if (totalAsset < 50000000) newLevelNum = 3;
    else if (totalAsset < 250000000) newLevelNum = 4;
    else if (totalAsset < (25 * avgExpenditure * 12)) newLevelNum = 5;
    else newLevelNum = 6;

    const levelConfig = {
      1: { title: 'Level 1: ' + t('lvl-1-name'), icon: '🔥', color: 'from-amber-700 to-orange-900' },
      2: { title: 'Level 2: ' + t('lvl-2-name'), icon: '🛡️', color: 'from-stone-500 to-stone-700' },
      3: { title: 'Level 3: ' + t('lvl-3-name'), icon: '🪙', color: 'from-yellow-500 to-amber-600' },
      4: { title: 'Level 4: ' + t('lvl-4-name'), icon: '📈', color: 'from-emerald-700 to-emerald-950' },
      5: { title: 'Level 5: ' + t('lvl-5-name'), icon: '💎', color: 'from-teal-500 to-emerald-700' },
      6: { title: 'Level 6: ' + t('lvl-6-name'), icon: '👑', color: 'from-[#0F5132] to-emerald-500' }
    };

    const conf = levelConfig[newLevelNum];
    const badgeEl = document.getElementById('user-level-badge');
    if (badgeEl && conf) {
      badgeEl.className = `mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold text-white shadow-sm transition-all duration-300 flex items-center gap-1 hover:scale-105 active:scale-95 bg-gradient-to-r ${conf.color}`;
      document.getElementById('badge-icon').innerText = conf.icon;
      document.getElementById('badge-text').innerText = conf.title;
    }

    for (let i = 1; i <= 6; i++) {
      const listEl = document.getElementById('list-level-' + i);
      if (listEl) {
        if (i === newLevelNum) {
          listEl.classList.remove('opacity-50');
          listEl.classList.add('ring-2', 'ring-[#0F5132]', 'dark:ring-emerald-400', 'scale-[1.02]', 'shadow-lg');
        } else {
          listEl.classList.add('opacity-50');
          listEl.classList.remove('ring-2', 'ring-[#0F5132]', 'dark:ring-emerald-400', 'scale-[1.02]', 'shadow-lg');
        }
      }
    }

    const savedLevel = localStorage.getItem('fintrack_user_level');
    if (savedLevel && parseInt(savedLevel, 10) !== newLevelNum) {
      const isLevelUp = newLevelNum > parseInt(savedLevel, 10);
      const modalNotify = document.getElementById('modal-level-notify');
      if (modalNotify && conf) {
        document.getElementById('notify-level-title').innerText = isLevelUp ? t('txt-congrats') : t('txt-warning');
        document.getElementById('notify-level-desc').innerText = isLevelUp ? t('msg-level-up') : t('msg-level-down');
        document.getElementById('notify-level-name').innerText = conf.title;
        document.getElementById('notify-level-icon').innerText = conf.icon;
        modalNotify.classList.remove('hidden', 'hidden-page');
      }
    }
    localStorage.setItem('fintrack_user_level', String(newLevelNum));
  }

  function renderExportModal() {
    const trxs = appData.T_Transaksi || [];
    let years = new Set();
    trxs.forEach(tx => {
      const tgl = getProp(tx, 'Tanggal');
      if (tgl) years.add(new Date(tgl).getFullYear());
    });
    if (years.size === 0) years.add(new Date().getFullYear());

    const sortedYears = Array.from(years).sort((a, b) => b - a);
    if (!sortedYears.includes(exportSelectedYear)) exportSelectedYear = sortedYears[0];
    const yearContainer = document.getElementById('export-year-container');
    if (!yearContainer) return;

    yearContainer.innerHTML = sortedYears.map(year => {
      const isActive = year === exportSelectedYear;
      const btnClass = isActive
        ? 'bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] shadow-md border-transparent'
        : 'bg-white dark:bg-[#161D19] text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-800';
      return `<button type="button" onclick="setExportYear(${year})" class="px-5 py-2 text-xs font-bold rounded-full whitespace-nowrap border transition-all ${btnClass}">${year}</button>`;
    }).join('');

    renderExportMonths();
  }

  window.setExportYear = function(year) {
    exportSelectedYear = year;
    renderExportModal();
  };

  function renderExportMonths() {
    const monthContainer = document.getElementById('export-month-container');
    if (!monthContainer) return;
    const tx = appData.T_Transaksi || [];
    let vm = new Set();
    tx.forEach(item => {
      const tgl = getProp(item, 'Tanggal');
      if (tgl && new Date(tgl).getFullYear() === exportSelectedYear) vm.add(new Date(tgl).getMonth());
    });
    const monthNames = i18n[currentLang]['month-names'];
    let html = '';
    for (let i = 11; i >= 0; i--) {
      if (vm.has(i)) {
        html += `<button type="button" onclick="generatePDF(${i}, ${exportSelectedYear})" class="w-full bg-[#FAF8F5] dark:bg-[#161D19] p-4 rounded-xl border border-stone-200/70 dark:border-stone-800 shadow-sm flex justify-between items-center hover:bg-[#EDF5F0] dark:hover:bg-[#1E2722] transition-all"><span class="font-bold text-xs text-stone-800 dark:text-stone-200">${monthNames[i]} ${exportSelectedYear}</span><svg class="w-4 h-4 text-[#0F5132] dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>`;
      }
    }
    monthContainer.innerHTML = html || `<p class="text-center text-xs text-stone-400 py-4">${t('no-data-period')}</p>`;
  }

  async function getBase64ImageFromUrl(imageUrl) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = error => reject(error);
      img.src = imageUrl;
    });
  }

  window.generatePDF = async function(monthIdx, year) {
    showLoading(true);
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF('p', 'mm', 'a4');
      const totalPagesExp = '{total_pages_count_string}';
      const selectedAccount = document.getElementById('export-pdf-account').value;
      const isAllAccounts = selectedAccount === 'ALL';
      const userName = sessionName ? sessionName.toUpperCase() : 'PENGGUNA FINTRACK';
      const userEmail = sessionEmail ? sessionEmail.toLowerCase() : 'fintrack user';
      const accLabel = isAllAccounts ? t('pdf-all-acc') : selectedAccount.toUpperCase();

      let trxs = (appData.T_Transaksi || []).filter(tx => getProp(tx, 'Tipe') !== 'NEUTRAL');
      let currentRealtimeBalance = 0;

      if (isAllAccounts) {
        (appData.M_Akun || []).forEach(acc => {
          let namaAkun = getProp(acc, 'Nama_Akun', 'Nama Akun') || '';
          if (namaAkun.toUpperCase().includes('RDN')) return;
          let valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime');
          let valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal');
          currentRealtimeBalance += extractNumber((valReal !== undefined && valReal !== null && valReal !== '') ? valReal : valAwal);
        });
      } else {
        const accData = (appData.M_Akun || []).find(a => getProp(a, 'Nama_Akun', 'Nama Akun') === selectedAccount);
        if (accData) {
          let valReal = getProp(accData, 'Saldo_Realtime', 'Saldo Realtime');
          let valAwal = getProp(accData, 'Saldo_Awal', 'Saldo Awal');
          currentRealtimeBalance = extractNumber((valReal !== undefined && valReal !== null && valReal !== '') ? valReal : valAwal);
        }
      }

      let relevantTrxs = trxs.filter(tx => {
        const tglRaw = getProp(tx, 'Tanggal');
        if (!tglRaw) return false;
        if (isAllAccounts) return true;
        return getProp(tx, 'Nama_Akun', 'Akun') === selectedAccount;
      });
      relevantTrxs.sort((a, b) => new Date(getProp(a, 'Tanggal')).getTime() - new Date(getProp(b, 'Tanggal')).getTime());

      const endOfTargetMonth = new Date(year, monthIdx + 1, 0, 23, 59, 59, 999).getTime();
      let mutasiSetelahTarget = 0;
      relevantTrxs.forEach(tx => {
        const tgl = new Date(getProp(tx, 'Tanggal')).getTime();
        if (tgl > endOfTargetMonth) {
          const tipe = (getProp(tx, 'Tipe') || '').toString().trim().toUpperCase();
          const val = extractNumber(getProp(tx, 'Jumlah'));
          if (tipe === 'INFLOW') mutasiSetelahTarget += val;
          else if (tipe === 'OUTFLOW') mutasiSetelahTarget -= val;
        }
      });

      let saldoAkhirBulan = currentRealtimeBalance - mutasiSetelahTarget;
      let monthTrxs = relevantTrxs.filter(tx => {
        const d = new Date(getProp(tx, 'Tanggal'));
        return d.getMonth() === monthIdx && d.getFullYear() === year;
      });

      let mutasiBulanIni = 0, summaryTotalIn = 0, summaryTotalOut = 0;
      monthTrxs.forEach(tx => {
        const tipe = (getProp(tx, 'Tipe') || '').toString().trim().toUpperCase();
        const kategori = getProp(tx, 'Kategori') || '';
        const val = extractNumber(getProp(tx, 'Jumlah'));
        if (tipe === 'INFLOW') {
          mutasiBulanIni += val;
          if (!(isAllAccounts && kategori === 'Transfer Masuk')) summaryTotalIn += val;
        } else if (tipe === 'OUTFLOW') {
          mutasiBulanIni -= val;
          if (!(isAllAccounts && kategori === 'Transfer Keluar')) summaryTotalOut += val;
        }
      });

      let saldoAwalBulan = saldoAkhirBulan - mutasiBulanIni;
      let runningBalance = saldoAwalBulan;
      let tableRows = [];
      tableRows.push(['', { content: t('pdf-bal-start'), styles: { fontStyle: 'bold' } }, '', { content: new Intl.NumberFormat('id-ID').format(saldoAwalBulan), styles: { fontStyle: 'bold' } }]);

      monthTrxs.forEach(tx => {
        const d = new Date(getProp(tx, 'Tanggal'));
        const dateStr = `${d.getDate().toString().padStart(2, '0')} ${i18n[currentLang]['month-names'][d.getMonth()].substring(0, 3)} ${d.getFullYear()}`;
        const timeStr = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')} ${getTimezoneLabel()}`;
        const tipe = (getProp(tx, 'Tipe') || '').toString().trim().toUpperCase();
        const kategori = getProp(tx, 'Kategori') || '';
        let keterangan = getProp(tx, 'Keterangan') || '';
        if (isAllAccounts) keterangan += ` (${getProp(tx, 'Nama_Akun', 'Akun')})`;

        const val = extractNumber(getProp(tx, 'Jumlah'));
        let nomStr = '', nomStyle = {};
        if (tipe === 'INFLOW') {
          runningBalance += val;
          if (isAllAccounts && kategori === 'Transfer Masuk') {
            nomStr = new Intl.NumberFormat('id-ID').format(val);
            nomStyle = { textColor: [100, 100, 100] };
          } else {
            nomStr = '+' + new Intl.NumberFormat('id-ID').format(val);
            nomStyle = { textColor: [15, 81, 50] };
          }
        } else if (tipe === 'OUTFLOW') {
          runningBalance -= val;
          if (isAllAccounts && kategori === 'Transfer Keluar') {
            nomStr = new Intl.NumberFormat('id-ID').format(val);
            nomStyle = { textColor: [100, 100, 100] };
          } else {
            nomStr = '-' + new Intl.NumberFormat('id-ID').format(val);
            nomStyle = { textColor: [220, 38, 38] };
          }
        }
        tableRows.push([`${dateStr}\n${timeStr}`, { content: `${kategori}\n${keterangan.toUpperCase()}` }, { content: nomStr, styles: nomStyle }, new Intl.NumberFormat('id-ID').format(runningBalance)]);
      });

      let logoBase64 = null, logoHeight = 12, logoWidth = 36;
      try {
        logoBase64 = await getBase64ImageFromUrl('Logo_Fintrack.png');
        const imgProps = doc.getImageProperties(logoBase64);
        logoWidth = 45;
        logoHeight = (imgProps.height * logoWidth) / imgProps.width;
      } catch (e) {}

      // Deep Forest Emerald & Warm Cream Palette for PDF Statement
      const periodLastDay = new Date(year, monthIdx + 1, 0).getDate();
      const periodStr = `1 - ${periodLastDay} ${i18n[currentLang]['month-names'][monthIdx]} ${year}`;
      const primaryColor = [15, 81, 50];
      const softColor = [237, 245, 240];

      const drawHeader = data => {
        if (logoBase64) doc.addImage(logoBase64, 'PNG', 15, 8, logoWidth, logoHeight);
        else {
          doc.setFont('helvetica', 'bolditalic');
          doc.setFontSize(22);
          doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.text('Fintrack', 15, 20);
        }
        doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setLineWidth(1);
        doc.line(110, 12, 195, 12);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.setTextColor(20, 26, 23);
        doc.text(t('pdf-title'), 195, 20, { align: 'right' });
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text(`${t('pdf-period')}: ${periodStr}`, 195, 25, { align: 'right' });
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(20, 26, 23);
        doc.text(userName, 15, 36);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(80, 80, 80);
        doc.text(doc.splitTextToSize(userEmail, 90), 15, 41);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(20, 26, 23);
        doc.text(accLabel, 195, 36, { align: 'right' });
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(80, 80, 80);
        doc.text(`${t('pdf-system')} • ${t('pdf-curr')}: IDR`, 195, 41, { align: 'right' });

        if (data.pageNumber === 1) {
          const boxY = 52, boxH = 18;
          doc.setFillColor(softColor[0], softColor[1], softColor[2]);
          doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.setLineWidth(0.5);
          doc.roundedRect(15, boxY, 180, boxH, 3, 3, 'FD');
          doc.line(60, boxY + 3, 60, boxY + boxH - 3);
          doc.line(105, boxY + 3, 105, boxY + boxH - 3);
          doc.line(150, boxY + 3, 150, boxY + boxH - 3);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(80, 90, 85);
          doc.text(t('pdf-bal-start'), 37.5, boxY + 7, { align: 'center' });
          doc.text(t('pdf-tot-in'), 82.5, boxY + 7, { align: 'center' });
          doc.text(t('pdf-tot-out'), 127.5, boxY + 7, { align: 'center' });
          doc.text(t('pdf-bal-end'), 172.5, boxY + 7, { align: 'center' });
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(20, 26, 23);
          doc.text(new Intl.NumberFormat('id-ID').format(saldoAwalBulan), 37.5, boxY + 13, { align: 'center' });
          doc.setTextColor(15, 81, 50);
          doc.text('+' + new Intl.NumberFormat('id-ID').format(summaryTotalIn), 82.5, boxY + 13, { align: 'center' });
          doc.setTextColor(220, 38, 38);
          doc.text('-' + new Intl.NumberFormat('id-ID').format(summaryTotalOut), 127.5, boxY + 13, { align: 'center' });
          doc.setTextColor(20, 26, 23);
          doc.text(new Intl.NumberFormat('id-ID').format(saldoAkhirBulan), 172.5, boxY + 13, { align: 'center' });
        }
      };

      const drawFooter = data => {
        const footerY = doc.internal.pageSize.height - 15;
        doc.setDrawColor(220, 220, 220);
        doc.setLineWidth(0.5);
        doc.line(15, footerY - 5, 195, footerY - 5);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(120, 120, 120);
        doc.text(doc.splitTextToSize(t('pdf-footer'), 145), 15, footerY);
        doc.setFontSize(8);
        doc.text(`${t('pdf-page')} ${data.pageNumber} ${t('pdf-of')} ${totalPagesExp}`, 195, footerY + 3, { align: 'right' });
      };

      doc.autoTable({
        startY: 75,
        head: [[t('pdf-col-date'), t('pdf-col-desc'), t('pdf-col-nom'), t('pdf-col-bal')]],
        body: tableRows,
        theme: 'plain',
        headStyles: { fillColor: primaryColor, textColor: 255, fontStyle: 'bold', fontSize: 9, halign: 'left', cellPadding: 4 },
        bodyStyles: { fontSize: 8, textColor: 40, cellPadding: 4, valign: 'top' },
        columnStyles: { 0: { cellWidth: 35 }, 1: { cellWidth: 'auto' }, 2: { cellWidth: 35, halign: 'right' }, 3: { cellWidth: 35, halign: 'right' } },
        didParseCell: data => {
          if (data.section === 'head' && (data.column.index === 2 || data.column.index === 3)) data.cell.styles.halign = 'right';
        },
        willDrawCell: data => {
          if (data.section === 'body' && data.row.index % 2 === 1) {
            doc.setFillColor(250, 248, 245);
            doc.rect(data.cell.x, data.cell.y, data.cell.width, data.cell.height, 'F');
          }
        },
        margin: { top: 55, left: 15, right: 15, bottom: 25 },
        didDrawPage: data => { drawHeader(data); drawFooter(data); }
      });

      if (typeof doc.putTotalPages === 'function') doc.putTotalPages(totalPagesExp);
      const fileName = `Mutasi_${selectedAccount}_${i18n[currentLang]['month-names'][monthIdx]}_${year}.pdf`;
      doc.save(fileName);
      closeModal('modal-export-pdf');
      showToast(currentLang === 'id' ? 'PDF mutasi diunduh' : 'Statement PDF downloaded', 'success');
    } catch (e) {
      console.error('Gagal export PDF:', e);
      showToast(currentLang === 'id' ? 'Gagal membuat file PDF.' : 'Failed to generate PDF.', 'error');
    } finally {
      showLoading(false);
    }
  };

  /* --------------------------------------------------------------------------
   * 19. SETTINGS, CLOUD URL & JSON BACKUP
   * -------------------------------------------------------------------------- */
  window.saveGasUrl = async function() {
    const val = (document.getElementById('gas-url-input')?.value || '').trim();
    if (val) {
      localStorage.setItem(GAS_URL_KEY, val);
    } else {
      localStorage.removeItem(GAS_URL_KEY);
    }
    closeModal('modal-settings');
    showToast(currentLang === 'id' ? 'URL diperbarui & menyinkronkan...' : 'URL saved & syncing...', 'success');
    await fetchAllData();
  };

  window.exportBackupJSON = function() {
    const blob = new Blob([JSON.stringify(appData, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `fintrack-v3-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast(currentLang === 'id' ? 'Backup JSON diunduh' : 'Backup JSON downloaded', 'success');
  };

  /* --------------------------------------------------------------------------
   * 20. PULL-TO-REFRESH & INITIALIZATION
   * -------------------------------------------------------------------------- */
  let ptrStartY = 0, ptrCurrentY = 0, isPtrPulling = false, isPtrRefreshing = false;
  function initPTR() {
    const ptrEl = document.getElementById('ptr-indicator');
    if (!ptrEl) return;
    const coin = ptrEl.querySelector('.coin-spinner');

    document.addEventListener('touchstart', e => {
      const hasOpenModal = document.querySelector('.modal-overlay:not(.hidden), [id^="modal-"]:not(.hidden):not(.hidden-page)');
      if (window.scrollY <= 0 && !isPtrRefreshing && !hasOpenModal) {
        ptrStartY = e.touches[0].clientY;
        isPtrPulling = true;
        ptrEl.style.transition = 'none';
      }
    }, { passive: true });

    document.addEventListener('touchmove', e => {
      if (!isPtrPulling || isPtrRefreshing) return;
      ptrCurrentY = e.touches[0].clientY;
      const pullDist = ptrCurrentY - ptrStartY;
      if (pullDist > 0 && window.scrollY <= 0) {
        const moveY = Math.min(pullDist * 0.4, 120);
        ptrEl.style.transform = `translateY(${moveY - 80}px)`;
        if (coin) { coin.style.animation = 'none'; coin.style.transform = `rotateY(${pullDist * 3}deg)`; }
      } else if (pullDist < 0) {
        isPtrPulling = false;
      }
    }, { passive: true });

    document.addEventListener('touchend', async () => {
      if (!isPtrPulling || isPtrRefreshing) return;
      isPtrPulling = false;
      const pullDist = ptrCurrentY - ptrStartY;
      ptrEl.style.transition = 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
      if (pullDist > 100 && window.scrollY <= 0 && sessionEmail && sessionToken) {
        isPtrRefreshing = true;
        ptrEl.style.transform = 'translateY(30px)';
        if (coin) { coin.style.transform = ''; coin.style.animation = 'flipCoin 1s infinite linear'; }
        await fetchAllData();
        ptrEl.style.transform = 'translateY(-80px)';
        setTimeout(() => { isPtrRefreshing = false; }, 300);
      } else {
        ptrEl.style.transform = 'translateY(-80px)';
      }
      ptrStartY = 0;
      ptrCurrentY = 0;
    });
  }

  let isAppInitialized = false;
  async function initApp() {
    if (isAppInitialized) return;
    isAppInitialized = true;

    initTheme();
    if (!localStorage.getItem(LANG_KEY)) localStorage.setItem(LANG_KEY, 'id');
    currentLang = localStorage.getItem(LANG_KEY);
    applyLanguage();
    updateLanguageSwitchUI();

    const currSel = document.getElementById('header-currency-select');
    if (currSel) currSel.value = currentCurrency;

    sessionEmail = localStorage.getItem(SESSION_EMAIL_KEY);
    sessionName = localStorage.getItem(SESSION_NAME_KEY);
    sessionToken = localStorage.getItem(SESSION_TOKEN_KEY);

    initPTR();

    if (sessionEmail && sessionToken) {
      updateUserHeaderDisplay();
      document.getElementById('login-page').classList.add('hidden-page');
      document.getElementById('app-wrapper').classList.remove('hidden-page');
      await showPage('dashboard');
      await fetchAllData();
    } else {
      clearSessionAndRedirect();
      showLoading(false);
    }
  }

  // Expose all global handlers for inline HTML attributes
  window.initApp = initApp;
  window.handleLogin = handleLogin;
  window.handleLogout = handleLogout;
  window.toggleTheme = toggleTheme;
  window.setCurrency = setCurrency;
  window.formatRupiahInput = formatRupiahInput;
  window.quickAddAmount = quickAddAmount;
  window.validateTrxForm = validateTrxForm;

  document.addEventListener('DOMContentLoaded', initApp);
})();
