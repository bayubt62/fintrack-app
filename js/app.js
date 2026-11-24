/**
 * ============================================================================
 * FINTRACK ENTERPRISE V3.0 — CORE APPLICATION ENGINE (js/app.js)
 * Theme: Warm Cream (#FAF8F5) / Deep Forest Emerald (#0F5132) / Pitch Obsidian (#070908)
 * Compatibility: index.html, pages/*.html, Fintrack_DB & kode.gs V3.0
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. GLOBAL CONFIGURATION & STORAGE KEYS
   * -------------------------------------------------------------------------- */
  const STORAGE_KEY = 'fintrack_v3_0_2_state';
  const LEGACY_KEYS = ['fintrack_v3_state', 'fintrack_state', 'fintrack_data'];
  const THEME_KEY = 'fintrack_theme';
  const LANG_KEY = 'fintrack_lang';
  const CURRENCY_KEY = 'fintrack_currency';
  const PRIVACY_KEY = 'fintrack_privacy';
  const GAS_URL_KEY = 'fintrack_gas_url';
  const ACTIVE_USER_KEY = 'fintrack_active_user';
  const SESSION_EMAIL_KEY = 'fintrack_session_email';

  const DEFAULT_API_URL =
    'https://script.google.com/macros/s/AKfycbz9a9kYr2cwtxxHZBewNNMdvE-43HPX1Vx6H7uoct8yFaluTj-vKzaQp1ehD21fTehNlg/exec';

  const USER_PROFILES = {
    Bayu: {
      label: 'Bayu',
      fullName: 'Bayu Mahardika',
      email: 'bayubt62@gmail.com'
    },
    'Dedek Indra': {
      label: 'Dedek Indra',
      fullName: 'Indra Mahardika',
      email: 'indrakoko999@gmail.com'
    }
  };

  const CURRENCY_CONFIG = {
    IDR: { symbol: 'Rp', locale: 'id-ID', rate: 1, decimals: 0 },
    USD: { symbol: '$', locale: 'en-US', rate: 0.000062, decimals: 2 },
    SGD: { symbol: 'S$', locale: 'en-SG', rate: 0.000083, decimals: 2 },
    EUR: { symbol: '€', locale: 'de-DE', rate: 0.000057, decimals: 2 },
    JPY: { symbol: '¥', locale: 'ja-JP', rate: 0.0095, decimals: 0 },
    MYR: { symbol: 'RM', locale: 'ms-MY', rate: 0.00027, decimals: 2 },
    AUD: { symbol: 'A$', locale: 'en-AU', rate: 0.000095, decimals: 2 }
  };

  const CARD_THEMES = {
    emerald: {
      bg: 'linear-gradient(135deg, #0F5132 0%, #0A3A24 55%, #062416 100%)',
      accent: '#34D399',
      badge: 'PRIMARY'
    },
    obsidian: {
      bg: 'linear-gradient(135deg, #1E2421 0%, #111613 55%, #070908 100%)',
      accent: '#10B981',
      badge: 'BLACK'
    },
    bca: {
      bg: 'linear-gradient(135deg, #0A3D62 0%, #072A44 55%, #041929 100%)',
      accent: '#38BDF8',
      badge: 'BANK'
    },
    mandiri: {
      bg: 'linear-gradient(135deg, #163A5F 0%, #0E253D 55%, #091726 100%)',
      accent: '#FBBF24',
      badge: 'BANK'
    },
    bni: {
      bg: 'linear-gradient(135deg, #0F4C5C 0%, #0A323D 55%, #061E24 100%)',
      accent: '#FB923C',
      badge: 'BANK'
    },
    bri: {
      bg: 'linear-gradient(135deg, #0B3954 0%, #08273A 55%, #051824 100%)',
      accent: '#60A5FA',
      badge: 'BANK'
    },
    ewallet: {
      bg: 'linear-gradient(135deg, #134E4A 0%, #0D3532 55%, #071F1D 100%)',
      accent: '#2DD4BF',
      badge: 'E-WALLET'
    },
    gold: {
      bg: 'linear-gradient(135deg, #423315 0%, #291F0C 55%, #171106 100%)',
      accent: '#F59E0B',
      badge: 'VAULT'
    }
  };

  const CHART_PALETTE = [
    '#0F5132',
    '#10B981',
    '#059669',
    '#D97706',
    '#0284C7',
    '#14B8A6',
    '#6366F1',
    '#84CC16',
    '#E11D48',
    '#8B5CF6'
  ];

  /* --------------------------------------------------------------------------
   * 2. BILINGUAL DICTIONARY (ID / EN)
   * -------------------------------------------------------------------------- */
  const I18N = {
    id: {
      'app-desc': 'Manajemen Kekayaan Terpadu',
      'login-title': 'Masuk ke Akun',
      'lbl-email': 'Alamat Email',
      'ph-email': 'contoh@gmail.com',
      'lbl-pass': 'Kata Sandi',
      'btn-login': 'Konfirmasi Identitas',
      'txt-hello': 'Halo,',
      'btn-logout': 'Keluar',
      'dash-bal': 'Saldo Saat Ini',
      'dash-inc': 'Pemasukan',
      'dash-exp': 'Pengeluaran',
      'dash-qm': 'Menu Cepat',
      'qm-topup': 'Isi Saldo',
      'qm-pay': 'Bayar',
      'qm-tf': 'Transfer',
      'qm-rec': 'Rutin',
      'dash-acc': 'Akun Kamu',
      'btn-add-acc': '+ Tambah Akun',
      'dash-sub': 'Langganan Aktif',
      'btn-add-sub': '+ Tagihan',
      'dash-debt': 'Hutang & Piutang',
      'btn-hist-debt': 'Riwayat',
      'btn-add-debt': '+ Catat',
      'txt-mydebt': 'Hutang Saya',
      'txt-receivable': 'Piutang',
      'alert-due-title': 'Pengingat Jatuh Tempo',
      'cal-title': 'Kalender Transaksi',
      'cal-month': 'Bulan',
      'cal-today': 'Transaksi Hari Ini',
      'day-sun': 'Min',
      'day-mon': 'Sen',
      'day-tue': 'Sel',
      'day-wed': 'Rab',
      'day-thu': 'Kam',
      'day-fri': 'Jum',
      'day-sat': 'Sab',
      'port-title': 'Aset & Portofolio',
      'btn-buy-asset': '+ Beli Aset',
      'port-dist': 'Distribusi Kekayaan',
      'port-net': 'Total Aset Bersih',
      'port-wallet-title': 'Dompet Investasi',
      'btn-add-wallet': '+ Tambah Dompet',
      'port-list': 'Daftar Kepemilikan Aset',
      'port-prog': 'Progres Target Tabungan',
      'btn-add-goal': '+ Buat Target',
      'hist-title': 'Rekap Keuangan',
      'btn-month': 'Bulan Ini',
      'btn-7days': '7 Hari Terakhir',
      'btn-custom': 'Tanggal Kustom',
      'lbl-from': 'Dari',
      'lbl-to': 'Sampai',
      'txt-diff': 'Selisih Bersih',
      'hist-cat': 'Detail Kategori',
      'txt-total': 'Total',
      'hist-list': 'Daftar Transaksi',
      'btn-reset-filter': 'Reset Filter',
      'ph-hist-search': 'Cari keterangan, kategori, atau nominal...',
      'opt-all-acc': 'Semua Akun',
      'opt-all-cat': 'Semua Kategori',
      'nav-home': 'Beranda',
      'nav-cal': 'Kalender',
      'nav-port': 'Portofolio',
      'nav-hist': 'Riwayat',
      'nav-set': 'Pengaturan'
    },
    en: {
      'app-desc': 'Enterprise Wealth Management',
      'login-title': 'Log in to Account',
      'lbl-email': 'Email Address',
      'ph-email': 'example@gmail.com',
      'lbl-pass': 'Password',
      'btn-login': 'Confirm Identity',
      'txt-hello': 'Hello,',
      'btn-logout': 'Logout',
      'dash-bal': 'Current Balance',
      'dash-inc': 'Income',
      'dash-exp': 'Expenditure',
      'dash-qm': 'Quick Menu',
      'qm-topup': 'Top up',
      'qm-pay': 'Pay',
      'qm-tf': 'Transfer',
      'qm-rec': 'Recurring',
      'dash-acc': 'Your Accounts',
      'btn-add-acc': '+ Add Account',
      'dash-sub': 'Active Subscriptions',
      'btn-add-sub': '+ Add Bill',
      'dash-debt': 'Debts & Receivables',
      'btn-hist-debt': 'History',
      'btn-add-debt': '+ Add Debt',
      'txt-mydebt': 'My Debt',
      'txt-receivable': 'Receivables',
      'alert-due-title': 'Due Date Reminders',
      'cal-title': 'Transaction Calendar',
      'cal-month': 'Month',
      'cal-today': "Today's Transactions",
      'day-sun': 'Sun',
      'day-mon': 'Mon',
      'day-tue': 'Tue',
      'day-wed': 'Wed',
      'day-thu': 'Thu',
      'day-fri': 'Fri',
      'day-sat': 'Sat',
      'port-title': 'Assets & Portfolio',
      'btn-buy-asset': '+ Buy Asset',
      'port-dist': 'Wealth Distribution',
      'port-net': 'Total Net Asset',
      'port-wallet-title': 'Investment Wallets',
      'btn-add-wallet': '+ Add Wallet',
      'port-list': 'Asset Ownership List',
      'port-prog': 'Target Savings Progress',
      'btn-add-goal': '+ Create Target',
      'hist-title': 'Financial Recap',
      'btn-month': 'This Month',
      'btn-7days': 'Last 7 Days',
      'btn-custom': 'Custom Date',
      'lbl-from': 'From',
      'lbl-to': 'To',
      'txt-diff': 'Difference',
      'hist-cat': 'Category Details',
      'txt-total': 'Total',
      'hist-list': 'Transaction List',
      'btn-reset-filter': 'Reset Filter',
      'ph-hist-search': 'Search note, category, or amount...',
      'opt-all-acc': 'All Accounts',
      'opt-all-cat': 'All Categories',
      'nav-home': 'Home',
      'nav-cal': 'Calendar',
      'nav-port': 'Portfolio',
      'nav-hist': 'History',
      'nav-set': 'Settings'
    }
  };

  /* --------------------------------------------------------------------------
   * 3. DATE, NUMBER & APPLICATION STATE HELPERS
   * -------------------------------------------------------------------------- */
  const todayISO = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  const offsetDateISO = (daysOffset) => {
    const d = new Date();
    d.setDate(d.getDate() + daysOffset);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  /**
   * Parses DD/MM/YYYY (e.g. "21/11/2026 21:04:54") and YYYY-MM-DD (e.g. "2026-11-21 20:06")
   * accurately into ISO YYYY-MM-DD without swapping day/month.
   */
  function parseFlexibleDateToISO(rawVal) {
    if (!rawVal) return todayISO();
    if (rawVal instanceof Date && !isNaN(rawVal.getTime())) {
      return `${rawVal.getFullYear()}-${String(rawVal.getMonth() + 1).padStart(2, '0')}-${String(
        rawVal.getDate()
      ).padStart(2, '0')}`;
    }

    const str = String(rawVal).trim();

    // 1. YYYY-MM-DD or YYYY/MM/DD (with optional time)
    const isoMatch = str.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
    if (isoMatch) {
      const y = isoMatch[1];
      const m = String(parseInt(isoMatch[2], 10)).padStart(2, '0');
      const d = String(parseInt(isoMatch[3], 10)).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }

    // 2. DD/MM/YYYY or D/M/YYYY (Indonesian locale format in T_Transaksi)
    const dmyMatch = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
    if (dmyMatch) {
      const dayNum = parseInt(dmyMatch[1], 10);
      const monthNum = parseInt(dmyMatch[2], 10);
      const yearNum = dmyMatch[3];
      if (monthNum >= 1 && monthNum <= 12 && dayNum >= 1 && dayNum <= 31) {
        return `${yearNum}-${String(monthNum).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
      }
      if (dayNum >= 1 && dayNum <= 12 && monthNum >= 1 && monthNum <= 31) {
        return `${yearNum}-${String(dayNum).padStart(2, '0')}-${String(monthNum).padStart(2, '0')}`;
      }
    }

    const parsed = new Date(str);
    if (!isNaN(parsed.getTime())) {
      return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, '0')}-${String(
        parsed.getDate()
      ).padStart(2, '0')}`;
    }

    return todayISO();
  }

  function extractTimeFromRaw(rawVal) {
    if (!rawVal) return '';
    const str = String(rawVal).trim();
    const match = str.match(/(\d{1,2})[:.](\d{2})(?:[:.](\d{2}))?/);
    if (!match) return '';
    return `${String(match[1]).padStart(2, '0')}:${match[2]}`;
  }

  function resolveDueDateISO(rawDue) {
    if (!rawDue && rawDue !== 0) return '';
    const str = String(rawDue).trim();
    if (/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(str) || /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}/.test(str)) {
      return parseFlexibleDateToISO(str);
    }
    const dayNum = parseInt(str, 10);
    if (!isNaN(dayNum) && dayNum >= 1 && dayNum <= 31) {
      const now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth();
      if (dayNum < now.getDate()) {
        month += 1;
        if (month > 11) {
          month = 0;
          year += 1;
        }
      }
      const maxDay = new Date(year, month + 1, 0).getDate();
      const clamped = Math.min(dayNum, maxDay);
      return `${year}-${String(month + 1).padStart(2, '0')}-${String(clamped).padStart(2, '0')}`;
    }
    return '';
  }

  function normalizeUserLabel(rawUser) {
    const clean = (rawUser || '').toString().trim();
    const lower = clean.toLowerCase();
    if (lower.includes('indra')) return 'Dedek Indra';
    if (lower.includes('bayu')) return 'Bayu';
    return clean || 'Bayu';
  }

  function resolveEmailForUser(userLabel) {
    const norm = normalizeUserLabel(userLabel);
    if (USER_PROFILES[norm]) return USER_PROFILES[norm].email;
    return 'bayubt62@gmail.com';
  }

  function getDefaultState() {
    const savedActive = normalizeUserLabel(localStorage.getItem(ACTIVE_USER_KEY) || 'Bayu');
    return {
      version: '3.0.2',
      activeUser: savedActive,
      users: ['Bayu', 'Dedek Indra'],
      accounts: [],
      transactions: [],
      recurring: [],
      debts: [],
      debtHistory: [],
      wallets: [],
      assets: [],
      goals: [],
      categories: {
        INFLOW: [
          'Gaji & Honor',
          'Pemberian',
          'Freelance & Project',
          'Dividen & Yield',
          'Tabungan & Investasi',
          'Transfer Masuk',
          'Mutasi Masuk',
          'Lainnya'
        ],
        OUTFLOW: [
          'Makanan',
          'Transportasi',
          'Tagihan',
          'Tagihan & Langganan',
          'Belanja',
          'Hiburan',
          'Tabungan & Investasi',
          'Kewajiban & Sosial',
          'Biaya Admin',
          'Transfer Keluar',
          'Mutasi Keluar',
          'Lainnya'
        ],
        TRANSFER: ['Transfer Antar Akun', 'Top Up E-Wallet', 'Tarik Tunai']
      }
    };
  }

  // Purge legacy dummy storage keys so stale data never reappears
  LEGACY_KEYS.forEach((k) => {
    try {
      localStorage.removeItem(k);
    } catch (e) {}
  });

  let state = loadState();
  let activePage = 'dashboard';
  let activeDeckIndex = 0;
  let dueBannerDismissed = false;

  // Runtime Modal Context Trackers
  let currentDetailAccountId = null;
  let currentDetailAssetId = null;
  let currentAssetDetailCurrency = 'IDR';
  let currentAssetChartFilter = '1M';
  let currentGoalActionId = null;
  let debtHistoryTab = 'ACTIVE';
  let advanceItemsMode = false;
  let selectedExportYear = new Date().getFullYear();

  // Calendar runtime state
  let calDate = new Date();
  let selectedCalDate = todayISO();

  // History runtime state
  let historyPeriod = 'month';
  let historyType = 'OUTFLOW';
  let historySearchQuery = '';
  let historyAccountFilter = 'ALL';
  let historyCategoryFilter = 'ALL';

  // Chart instances
  let portfolioChartInstance = null;
  let categoryChartInstance = null;
  let assetDetailChartInstance = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const fresh = getDefaultState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
        return fresh;
      }
      const parsed = JSON.parse(raw);
      const defaults = getDefaultState();
      if (!parsed || parsed.version !== defaults.version) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
        return defaults;
      }
      return {
        ...defaults,
        ...parsed,
        activeUser: normalizeUserLabel(parsed.activeUser || defaults.activeUser),
        categories: { ...defaults.categories, ...(parsed.categories || {}) }
      };
    } catch (err) {
      console.warn('[Fintrack] Resetting corrupted local state:', err);
      return getDefaultState();
    }
  }

  let syncDebounceTimer = null;
  function scheduleCloudSync() {
    if (syncDebounceTimer) clearTimeout(syncDebounceTimer);
    syncDebounceTimer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        console.warn('[Fintrack] State persistence notice:', e);
      }
    }, 250);
  }

  function saveState(skipCloud) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error('[Fintrack] Failed to persist state:', err);
    }
    if (!skipCloud) {
      scheduleCloudSync();
    }
  }

  /* --------------------------------------------------------------------------
   * 4. CURRENCY, PRIVACY, THEME & I18N HELPERS
   * -------------------------------------------------------------------------- */
  function getCurrency() {
    return localStorage.getItem(CURRENCY_KEY) || 'IDR';
  }

  function formatCurrency(amountIDR, overrideCurrency) {
    const code = overrideCurrency || getCurrency();
    const cfg = CURRENCY_CONFIG[code] || CURRENCY_CONFIG.IDR;
    const numeric = Number(amountIDR) || 0;
    const converted = numeric * cfg.rate;
    const formatted = new Intl.NumberFormat(cfg.locale, {
      minimumFractionDigits: cfg.decimals,
      maximumFractionDigits: cfg.decimals
    }).format(Math.abs(converted));
    const sign = numeric < 0 ? '-' : '';
    return `${sign}${cfg.symbol} ${formatted}`;
  }

  function setCurrency(code) {
    if (!CURRENCY_CONFIG[code]) return;
    localStorage.setItem(CURRENCY_KEY, code);
    renderCurrentPage();
    showToast(`Mata uang diubah ke ${code}`, 'success');
  }

  function isPrivacyEnabled() {
    return localStorage.getItem(PRIVACY_KEY) === 'true';
  }

  function togglePrivacy() {
    const next = !isPrivacyEnabled();
    localStorage.setItem(PRIVACY_KEY, String(next));
    applyPrivacyMask();
  }

  function applyPrivacyMask() {
    const masked = isPrivacyEnabled();
    document.querySelectorAll('.privacy-mask').forEach((el) => {
      if (!el.dataset.rawText && el.textContent && el.textContent !== '••••••••') {
        el.dataset.rawText = el.textContent;
      }
      if (masked) {
        el.textContent = '••••••••';
      } else if (el.dataset.rawText) {
        el.textContent = el.dataset.rawText;
      }
    });

    const icon = document.getElementById('privacy-icon');
    if (icon) {
      icon.innerHTML = masked
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>';
    }
  }

  function setMaskedValue(el, rawFormatted, numericVal) {
    if (!el) return;
    el.dataset.rawText = rawFormatted;
    if (typeof numericVal === 'number') {
      el.dataset.value = String(numericVal);
    }
    el.textContent = isPrivacyEnabled() ? '••••••••' : rawFormatted;
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
    updateThemeUI(isDark);
  }

  function toggleTheme() {
    const isDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    updateThemeUI(isDark);
    if (activePage === 'portfolio') renderPortfolioPage();
    if (activePage === 'history') renderHistoryPage();
    if (activePage === 'settings') renderSettingsPage();
  }

  function updateThemeUI(isDark) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.innerHTML = isDark
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
    }
  }

  function getLang() {
    return localStorage.getItem(LANG_KEY) || 'id';
  }

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
    renderCurrentPage();
  }

  function toggleLanguage() {
    const next = getLang() === 'id' ? 'en' : 'id';
    setLanguage(next);
    showToast(next === 'id' ? 'Bahasa: Indonesia' : 'Language: English', 'info');
  }

  function applyTranslations() {
    const lang = getLang();
    const dict = I18N[lang] || I18N.id;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', dict[key]);
      } else {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('.lang-custom').forEach((el) => {
      const txt = el.getAttribute(`data-${lang}`);
      if (txt) el.textContent = txt;
    });

    const btnId = document.getElementById('lang-btn-id');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnId && btnEn) {
      if (lang === 'id') {
        btnId.className =
          'px-2.5 py-1.5 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] shadow-sm transition-all duration-200';
        btnEn.className = 'px-2.5 py-1.5 rounded-full text-stone-500 dark:text-stone-400 transition-all duration-200';
      } else {
        btnEn.className =
          'px-2.5 py-1.5 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] shadow-sm transition-all duration-200';
        btnId.className = 'px-2.5 py-1.5 rounded-full text-stone-500 dark:text-stone-400 transition-all duration-200';
      }
    }
  }

  /* --------------------------------------------------------------------------
   * 5. TOAST NOTIFICATION SYSTEM
   * -------------------------------------------------------------------------- */
  function showToast(message, type = 'info') {
    const singleToast = document.getElementById('fintrack-toast');
    const singleText = document.getElementById('fintrack-toast-text');
    const singleIcon = document.getElementById('fintrack-toast-icon');

    if (singleToast && singleText) {
      singleText.textContent = message;
      if (singleIcon) {
        const dotColor =
          type === 'error'
            ? 'bg-red-400'
            : type === 'warning'
            ? 'bg-amber-400'
            : type === 'success'
            ? 'bg-emerald-400'
            : 'bg-sky-400';
        singleIcon.className = `w-2 h-2 rounded-full shrink-0 ${dotColor}`;
      }
      singleToast.classList.remove('opacity-0', '-translate-y-4');
      singleToast.classList.add('opacity-100', 'translate-y-0');
      clearTimeout(singleToast._hideTimer);
      singleToast._hideTimer = setTimeout(() => {
        singleToast.classList.remove('opacity-100', 'translate-y-0');
        singleToast.classList.add('opacity-0', '-translate-y-4');
      }, 2600);
      return;
    }

    let container = document.getElementById('fintrack-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'fintrack-toast-container';
      container.className =
        'fixed top-5 left-1/2 -translate-x-1/2 z-[120] flex flex-col items-center gap-2 pointer-events-none px-4 w-full max-w-sm';
      document.body.appendChild(container);
    }

    const colorMap = {
      success: 'bg-[#0F5132] text-white border-emerald-400/30',
      error: 'bg-red-600 text-white border-red-400/30',
      warning: 'bg-amber-600 text-white border-amber-300/30',
      info: 'bg-[#111613] text-white border-white/15'
    };

    const toast = document.createElement('div');
    toast.className = `${
      colorMap[type] || colorMap.info
    } px-4 py-2.5 rounded-full text-xs font-bold shadow-xl border backdrop-blur-md transition-all duration-300 opacity-0 -translate-y-2`;
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('opacity-0', '-translate-y-2');
    });

    setTimeout(() => {
      toast.classList.add('opacity-0', '-translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 2600);
  }

  /* --------------------------------------------------------------------------
   * 6. SPA ROUTER & NAVIGATION
   * -------------------------------------------------------------------------- */
  function getPageContainer() {
    return (
      document.getElementById('main-content') ||
      document.getElementById('app-content') ||
      document.getElementById('page-container') ||
      document.querySelector('main')
    );
  }

  async function navigateTo(page) {
    const validPages = ['dashboard', 'calendar', 'portfolio', 'history', 'settings'];
    const target = validPages.includes(page) ? page : 'dashboard';
    activePage = target;

    document.querySelectorAll('[data-page], .nav-btn').forEach((btn) => {
      const btnPage = btn.getAttribute('data-page') || (btn.id ? btn.id.replace('nav-', '') : null);
      if (!btnPage) return;
      const isActive = btnPage === target;
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('active-nav', isActive);
      if (isActive) {
        btn.classList.remove('text-stone-400', 'dark:text-stone-400');
      } else {
        btn.classList.add('text-stone-400');
      }
    });

    const container = getPageContainer();
    if (!container) return;

    const existingSection = document.getElementById(`page-${target}`);
    if (existingSection) {
      document.querySelectorAll('[id^="page-"]').forEach((sec) => sec.classList.add('hidden'));
      existingSection.classList.remove('hidden');
      renderCurrentPage();
      return;
    }

    if (target === 'settings') {
      container.innerHTML = buildFallbackSettingsHTML();
      applyTranslations();
      renderCurrentPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      const res = await fetch(`pages/${target}.html?v=3.0`);
      if (res.ok) {
        const html = await res.text();
        container.innerHTML = html;
      } else {
        container.innerHTML = buildFallbackPageHTML(target);
      }
    } catch (err) {
      container.innerHTML = buildFallbackPageHTML(target);
    }

    applyTranslations();
    renderCurrentPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function buildFallbackPageHTML(target) {
    if (target === 'settings') return buildFallbackSettingsHTML();
    return `<div class="p-6 text-center text-xs text-stone-500">Halaman ${escapeHTML(
      target
    )} tidak ditemukan. Pastikan folder <code>pages/${escapeHTML(target)}.html</code> tersedia.</div>`;
  }

  function renderCurrentPage() {
    updateHeaderUserUI();
    if (activePage === 'dashboard') renderDashboardPage();
    else if (activePage === 'calendar') renderCalendarPage();
    else if (activePage === 'portfolio') renderPortfolioPage();
    else if (activePage === 'history') renderHistoryPage();
    else if (activePage === 'settings') renderSettingsPage();
    applyPrivacyMask();
  }

  function evaluateFinancialLevel() {
    const cashTotal = getUserAccounts().reduce((s, a) => s + (Number(a.balance) || 0), 0);
    const walletCash = (state.wallets || []).reduce((s, w) => s + (Number(w.balance) || 0), 0);
    const assetValue = (state.assets || []).reduce(
      (s, a) => s + (Number(a.qty) || 0) * (Number(a.currentPrice) || Number(a.buyPrice) || 0),
      0
    );
    const totalAssets = cashTotal + walletCash + assetValue;

    const activeDebtTotal = (state.debts || [])
      .filter((d) => !d.settled && d.type === 'DEBT')
      .reduce((s, d) => s + Math.max(0, (Number(d.amount) || 0) - (Number(d.paid) || 0)), 0);

    const now = new Date();
    const ymPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const monthExp = (state.transactions || [])
      .filter((t) => t.type === 'OUTFLOW' && t.date && t.date.startsWith(ymPrefix))
      .reduce((s, t) => s + (Number(t.amount) || 0), 0);

    const monthlyBaseline = Math.max(monthExp, 1500000);
    const emergencyTarget = monthlyBaseline * 6;
    const fireTarget = monthlyBaseline * 12 * 25;

    if (activeDebtTotal > 0 && totalAssets < activeDebtTotal) return 1;
    if (cashTotal < emergencyTarget && totalAssets < 50000000) return 2;
    if (totalAssets < 50000000) return 3;
    if (totalAssets < 250000000) return 4;
    if (totalAssets < fireTarget) return 5;
    return 6;
  }

  function updateHeaderUserUI() {
    const userLabel = document.getElementById('active-user-name') || document.getElementById('user-display');
    if (userLabel) userLabel.textContent = `${state.activeUser || 'Bayu'}!`;

    const langBtn = document.getElementById('lang-btn-id')?.parentElement;
    const headerRight = langBtn?.parentElement;
    if (headerRight && !document.getElementById('btn-header-settings')) {
      const themeBtn = document.createElement('button');
      themeBtn.id = 'btn-header-theme';
      themeBtn.type = 'button';
      themeBtn.setAttribute('aria-label', 'Toggle Dark Mode');
      themeBtn.onclick = toggleTheme;
      themeBtn.className =
        'w-8 h-8 rounded-full bg-[#EFECE6] dark:bg-[#141A17] border border-stone-200/80 dark:border-stone-800 flex items-center justify-center text-stone-700 dark:text-emerald-300 hover:scale-105 active:scale-95 transition';
      themeBtn.innerHTML =
        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';

      const setBtn = document.createElement('button');
      setBtn.id = 'btn-header-settings';
      setBtn.type = 'button';
      setBtn.setAttribute('aria-label', 'Settings & Sync');
      setBtn.onclick = () => navigateTo(activePage === 'settings' ? 'dashboard' : 'settings');
      setBtn.className =
        'w-8 h-8 rounded-full bg-[#EFECE6] dark:bg-[#141A17] border border-stone-200/80 dark:border-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-200 hover:scale-105 active:scale-95 transition';
      setBtn.innerHTML =
        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>';

      headerRight.appendChild(themeBtn);
      headerRight.appendChild(setBtn);
    }

    const level = evaluateFinancialLevel();
    const levelNames = {
      1: 'Lv.1 Eliminasi Liabilitas',
      2: 'Lv.2 Proteksi Likuiditas',
      3: 'Lv.3 Akumulasi Kapital',
      4: 'Lv.4 Alokasi Portofolio',
      5: 'Lv.5 Maksimalisasi Ekuitas',
      6: 'Lv.6 Kemerdekaan Finansial'
    };

    const badge = document.getElementById('user-level-badge');
    const badgeIcon = document.getElementById('badge-icon');
    const badgeText = document.getElementById('badge-text');
    if (badge && badgeText) {
      badge.classList.remove('opacity-0', 'bg-stone-500');
      badge.classList.add('bg-[#0F5132]', 'dark:bg-emerald-600');
      if (badgeIcon) badgeIcon.textContent = level >= 4 ? '🏆' : '🌱';
      badgeText.textContent = levelNames[level] || levelNames[3];
    }

    for (let i = 1; i <= 6; i++) {
      const card = document.getElementById(`list-level-${i}`);
      if (!card) continue;
      if (i === level) {
        card.classList.remove('opacity-50');
        card.classList.add('opacity-100', 'ring-2', 'ring-[#0F5132]', 'dark:ring-emerald-400');
      } else {
        card.classList.add('opacity-50');
        card.classList.remove('opacity-100', 'ring-2', 'ring-[#0F5132]', 'dark:ring-emerald-400');
      }
    }
  }

  /* --------------------------------------------------------------------------
   * 7. DASHBOARD RENDERER & 3D STACKED SLIDING ACCOUNT CARDS
   * -------------------------------------------------------------------------- */
  function getUserAccounts() {
    if (!state.accounts || state.accounts.length === 0) return [];
    const activeEmail = getSessionEmail().toLowerCase().trim();
    const filtered = state.accounts.filter((a) => {
      if (!a.ownerEmail) return true;
      return a.ownerEmail.toLowerCase().trim() === activeEmail;
    });
    return filtered;
  }

  function renderDashboardPage() {
    const accounts = getUserAccounts();
    const totalBalance = accounts.reduce((sum, a) => sum + (Number(a.balance) || 0), 0);

    const now = new Date();
    const ymPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    let monthIn = 0;
    let monthOut = 0;

    state.transactions.forEach((t) => {
      if (t.date && t.date.startsWith(ymPrefix)) {
        if (t.type === 'INFLOW') monthIn += Number(t.amount) || 0;
        if (t.type === 'OUTFLOW') monthOut += Number(t.amount) || 0;
      }
    });

    setMaskedValue(document.getElementById('main-balance'), formatCurrency(totalBalance), totalBalance);
    setMaskedValue(document.getElementById('summary-income'), formatCurrency(monthIn), monthIn);
    setMaskedValue(document.getElementById('summary-expense'), formatCurrency(monthOut), monthOut);

    const badge = document.getElementById('dash-net-badge');
    if (badge) {
      const net = monthIn - monthOut;
      badge.classList.remove('hidden');
      badge.textContent = `${net >= 0 ? '+' : ''}${formatCurrency(net)}`;
    }

    renderDueAlerts();
    renderAccountsDeck();
    renderRecurringList();
    renderDebtsList();
  }

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
    const alerts = [];

    (state.recurring || []).forEach((r) => {
      if (r.active === false) return;
      const iso = resolveDueDateISO(r.dueDate);
      if (!iso) return;
      const due = new Date(iso + 'T00:00:00');
      if (isNaN(due.getTime())) return;
      const diffDays = Math.ceil((due - today) / 86400000);
      if (diffDays <= 5) {
        alerts.push({
          label: `${r.name} (${formatCurrency(r.amount)})`,
          days: diffDays
        });
      }
    });

    (state.debts || []).forEach((d) => {
      if (d.settled || !d.dueDate) return;
      const iso = resolveDueDateISO(d.dueDate);
      if (!iso) return;
      const due = new Date(iso + 'T00:00:00');
      if (isNaN(due.getTime())) return;
      const diffDays = Math.ceil((due - today) / 86400000);
      if (diffDays <= 5) {
        const rem = (Number(d.amount) || 0) - (Number(d.paid) || 0);
        alerts.push({
          label: `${d.type === 'DEBT' ? 'Hutang' : 'Piutang'}: ${d.person} (${formatCurrency(rem)})`,
          days: diffDays
        });
      }
    });

    if (alerts.length === 0) {
      banner.classList.add('hidden');
      return;
    }

    banner.classList.remove('hidden');
    itemsBox.innerHTML = alerts
      .map((a) => {
        const tag =
          a.days < 0
            ? `<span class="text-red-600 dark:text-red-400 font-extrabold">Terlambat ${Math.abs(a.days)}h</span>`
            : a.days === 0
            ? `<span class="text-amber-700 dark:text-amber-300 font-extrabold">Hari Ini</span>`
            : `<span class="text-amber-700 dark:text-amber-300 font-bold">H-${a.days}</span>`;
        return `<div class="flex items-center justify-between gap-2 text-[11px] text-amber-900 dark:text-amber-200">
          <span class="truncate font-medium">• ${escapeHTML(a.label)}</span>
          <span class="shrink-0">${tag}</span>
        </div>`;
      })
      .join('');
  }

  function dismissDueBanner() {
    dueBannerDismissed = true;
    const banner = document.getElementById('due-alert-banner');
    if (banner) banner.classList.add('hidden');
  }

  function renderAccountsDeck() {
    const stage = document.getElementById('accounts-list');
    const dotsEl = document.getElementById('accounts-deck-dots');
    const counterEl = document.getElementById('accounts-deck-counter');
    if (!stage) return;

    const accounts = getUserAccounts();
    if (accounts.length === 0) {
      stage.style.height = '130px';
      stage.innerHTML = `
        <div class="w-full h-full rounded-[24px] border border-dashed border-white/20 flex flex-col items-center justify-center text-center p-4">
          <p class="text-xs font-bold text-stone-300 mb-2">Belum ada akun terdaftar untuk ${escapeHTML(
            state.activeUser
          )}</p>
          <button type="button" onclick="openAccountModal()" class="text-[11px] font-bold px-3.5 py-1.5 rounded-full bg-emerald-500 text-[#070908]">+ Tambah Akun Pertama</button>
        </div>`;
      if (dotsEl) dotsEl.innerHTML = '';
      if (counterEl) counterEl.textContent = '0/0';
      return;
    }

    if (activeDeckIndex >= accounts.length) activeDeckIndex = 0;
    if (activeDeckIndex < 0) activeDeckIndex = accounts.length - 1;

    const visibleStack = Math.min(accounts.length, 3);
    stage.style.position = 'relative';
    stage.style.perspective = '1100px';
    stage.style.height = `${168 + (visibleStack - 1) * 16}px`;
    stage.style.touchAction = 'pan-y';

    stage.innerHTML = accounts
      .map((acc, idx) => {
        const rel = (idx - activeDeckIndex + accounts.length) % accounts.length;
        const theme = CARD_THEMES[acc.theme] || CARD_THEMES.emerald;
        const isFront = rel === 0;
        const isHidden = rel >= 3;

        const translateY = rel * 14;
        const scale = Math.max(0.86, 1 - rel * 0.055);
        const zIndex = 30 - rel;
        const opacity = isHidden ? 0 : Math.max(0.55, 1 - rel * 0.22);
        const brightness = isFront ? 'brightness(1)' : `brightness(${1 - rel * 0.14})`;

        return `
          <div
            data-deck-index="${idx}"
            onclick="${isFront ? `openAccountDetail('${acc.id}')` : `selectAccountCard(${idx})`}"
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
            class="rounded-[24px] p-5 text-white border border-white/15 shadow-[0_18px_36px_rgba(0,0,0,0.45)] flex flex-col justify-between select-none overflow-hidden ${
              isFront ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
            }"
          >
            <div class="absolute -right-10 -top-10 w-36 h-36 rounded-full opacity-20 pointer-events-none" style="background: radial-gradient(circle, ${theme.accent}, transparent 70%);"></div>

            <div class="flex items-start justify-between gap-2 relative z-10">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/12 text-white/90 border border-white/10">${escapeHTML(
                    acc.type || theme.badge
                  )}</span>
                  <span class="text-[11px] font-mono text-white/65 tracking-wider">${escapeHTML(
                    acc.number || '•••• 0000'
                  )}</span>
                </div>
                <h4 class="text-base font-extrabold tracking-tight text-white mt-1.5">${escapeHTML(acc.name)}</h4>
              </div>

              <div class="flex items-center gap-1.5">
                <button type="button" onclick="event.stopPropagation(); openAccountModal('${
                  acc.id
                }')" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition" title="Edit Akun">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                </button>
              </div>
            </div>

            <div class="flex items-end justify-between relative z-10">
              <div>
                <p class="text-[10px] font-bold uppercase tracking-wider text-white/60">Available Balance</p>
                <p class="text-xl font-black tracking-tight text-white privacy-mask mt-0.5" data-raw-text="${escapeHTML(
                  formatCurrency(acc.balance)
                )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(acc.balance))}</p>
              </div>
              <div class="w-9 h-6 rounded-md bg-gradient-to-br from-amber-200/80 to-amber-400/60 border border-amber-100/40 flex items-center justify-center opacity-85">
                <div class="w-5 h-3.5 border border-amber-900/30 rounded-xs"></div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    if (counterEl) {
      counterEl.textContent = `${activeDeckIndex + 1}/${accounts.length}`;
    }

    if (dotsEl) {
      dotsEl.innerHTML = accounts
        .map((_, idx) => {
          const active = idx === activeDeckIndex;
          return `<button type="button" onclick="selectAccountCard(${idx})" aria-label="Card ${
            idx + 1
          }" class="h-1.5 rounded-full transition-all duration-300 ${
            active ? 'w-5 bg-emerald-400' : 'w-1.5 bg-white/25 hover:bg-white/45'
          }"></button>`;
        })
        .join('');
    }

    bindAccountDeckSwipe(stage);
  }

  function bindAccountDeckSwipe(stage) {
    if (!stage || stage.dataset.swipeBound === 'true') return;
    stage.dataset.swipeBound = 'true';

    let startX = 0;
    let deltaX = 0;
    let isDragging = false;

    stage.addEventListener(
      'touchstart',
      (e) => {
        if (!e.touches || !e.touches[0]) return;
        startX = e.touches[0].clientX;
        deltaX = 0;
        isDragging = true;
      },
      { passive: true }
    );

    stage.addEventListener(
      'touchmove',
      (e) => {
        if (!isDragging || !e.touches || !e.touches[0]) return;
        deltaX = e.touches[0].clientX - startX;
      },
      { passive: true }
    );

    stage.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      if (Math.abs(deltaX) > 42) {
        slideAccountDeck(deltaX < 0 ? 1 : -1);
      }
      deltaX = 0;
    });
  }

  function slideAccountDeck(step) {
    const accounts = getUserAccounts();
    if (accounts.length <= 1) return;
    activeDeckIndex = (activeDeckIndex + step + accounts.length) % accounts.length;
    renderAccountsDeck();
  }

  function selectAccountCard(index) {
    const accounts = getUserAccounts();
    if (index < 0 || index >= accounts.length) return;
    activeDeckIndex = index;
    renderAccountsDeck();
  }

  function openAccountDetail(accountId) {
    const acc = state.accounts.find((a) => a.id === accountId);
    if (!acc) return;
    currentDetailAccountId = acc.id;

    const iconBox = document.getElementById('det-acc-icon-container');
    if (iconBox) {
      const logoFile = resolveBankLogo(acc.name);
      iconBox.innerHTML = logoFile
        ? `<img src="Logo_Bank/${logoFile}" alt="${escapeHTML(
            acc.name
          )}" class="h-12 object-contain" onerror="this.style.display='none'">`
        : `<div class="w-12 h-12 rounded-2xl bg-[#0F5132]/10 dark:bg-emerald-500/15 text-[#0F5132] dark:text-emerald-300 flex items-center justify-center font-black text-base">${escapeHTML(
            acc.name.slice(0, 2).toUpperCase()
          )}</div>`;
    }

    const nameEl = document.getElementById('det-acc-name');
    const holderEl = document.getElementById('det-acc-holder');
    const numEl = document.getElementById('det-acc-number');
    const balEl = document.getElementById('det-acc-balance');

    if (nameEl) nameEl.textContent = acc.name;
    if (holderEl) holderEl.textContent = acc.holder || state.activeUser || '-';
    if (numEl) numEl.textContent = acc.number || '-';
    setMaskedValue(balEl, formatCurrency(acc.balance), acc.balance);

    openModal('modal-account-detail');
  }

  function resolveBankLogo(name) {
    const lower = (name || '').toLowerCase();
    if (lower.includes('bni')) return 'BNI_Logo.png';
    if (lower.includes('bri')) return 'BRI_Logo.png';
    if (lower.includes('mandiri')) return 'MANDIRI_Logo.png';
    if (lower.includes('gopay')) return 'Gopay_Logo.png';
    if (lower.includes('ovo')) return 'OVO_Logo.png';
    if (lower.includes('dana')) return 'Dana_Logo.png';
    if (lower.includes('shopee')) return 'ShopeePay_Logo.png';
    if (lower.includes('link')) return 'Linkaja_Logo.png';
    if (lower.includes('tunai') || lower.includes('cash')) return 'Cash_Logo.png';
    return '';
  }

  function findAccountByIdOrName(idOrName) {
    if (!idOrName) return null;
    const clean = String(idOrName).trim().toLowerCase();
    return (
      state.accounts.find(
        (a) => a.id.toLowerCase() === clean || a.name.trim().toLowerCase() === clean
      ) || null
    );
  }

  function renderRecurringList() {
    const listEl = document.getElementById('recurring-list');
    if (!listEl) return;

    if (!state.recurring || state.recurring.length === 0) {
      listEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-4 bg-white/5 rounded-2xl border border-white/5">Belum ada tagihan rutin aktif</p>`;
      return;
    }

    listEl.innerHTML = state.recurring
      .map((item) => {
        const acc = findAccountByIdOrName(item.accountId);
        const dueLabel = resolveDueDateISO(item.dueDate) || `Tgl ${item.dueDate || '-'}`;
        return `
          <div onclick="openRecurringDetail('${item.id}')" class="cursor-pointer p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between gap-3 transition">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <p class="text-xs font-extrabold text-white truncate">${escapeHTML(item.name)}</p>
              </div>
              <p class="text-[10px] text-stone-400 mt-1">${escapeHTML(dueLabel)} • ${escapeHTML(
          acc ? acc.name : item.accountId || 'Akun Utama'
        )}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-extrabold text-emerald-300 privacy-mask" data-raw-text="${escapeHTML(
                formatCurrency(item.amount)
              )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(item.amount))}</span>
              <button type="button" onclick="event.stopPropagation(); payRecurringNow('${
                item.id
              }')" class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 border border-emerald-400/25 transition">Bayar</button>
              <button type="button" onclick="event.stopPropagation(); deleteRecurring('${
                item.id
              }')" class="text-stone-400 hover:text-red-400 p-1 transition" title="Hapus">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  function openRecurringDetail(recId) {
    const rec = (state.recurring || []).find((r) => r.id === recId);
    if (!rec) return;
    const acc = findAccountByIdOrName(rec.accountId);

    const idEl = document.getElementById('det-rec-id');
    const amtEl = document.getElementById('det-rec-amount');
    const nameEl = document.getElementById('det-rec-name');
    const freqEl = document.getElementById('det-rec-freq');
    const dateEl = document.getElementById('det-rec-date');
    const accEl = document.getElementById('det-rec-account');

    if (idEl) idEl.value = rec.id;
    setMaskedValue(amtEl, formatCurrency(rec.amount), rec.amount);
    if (nameEl) nameEl.textContent = rec.name;
    if (freqEl) freqEl.textContent = rec.cycle || 'Bulanan';
    if (dateEl) dateEl.textContent = `Tanggal ${rec.dueDate || '-'}`;
    if (accEl) accEl.textContent = acc ? acc.name : rec.accountId || 'Rekening Utama';

    openModal('modal-rec-detail');
  }

  function renderDebtsList() {
    const listEl = document.getElementById('debt-list');
    const outEl = document.getElementById('debt-out');
    const inEl = document.getElementById('debt-in');

    let totalDebtOut = 0;
    let totalDebtIn = 0;

    const activeDebts = (state.debts || []).filter((d) => !d.settled);
    activeDebts.forEach((d) => {
      const rem = Math.max(0, (Number(d.amount) || 0) - (Number(d.paid) || 0));
      if (d.type === 'DEBT') totalDebtOut += rem;
      else totalDebtIn += rem;
    });

    setMaskedValue(outEl, formatCurrency(totalDebtOut), totalDebtOut);
    setMaskedValue(inEl, formatCurrency(totalDebtIn), totalDebtIn);

    if (!listEl) return;
    if (activeDebts.length === 0) {
      listEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-3 bg-white/5 rounded-2xl border border-white/5">Tidak ada catatan hutang/piutang aktif</p>`;
      return;
    }

    listEl.innerHTML = activeDebts
      .map((d) => {
        const rem = Math.max(0, (Number(d.amount) || 0) - (Number(d.paid) || 0));
        const isDebt = d.type === 'DEBT';
        return `
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                  isDebt ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'
                }">${isDebt ? 'Hutang' : 'Piutang'}</span>
                <p class="text-xs font-extrabold text-white truncate">${escapeHTML(d.person)}</p>
              </div>
              <p class="text-[10px] text-stone-400 mt-1 truncate">Awal: ${escapeHTML(
                formatCurrency(d.amount)
              )} • Sisa: ${escapeHTML(formatCurrency(rem))}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-extrabold ${
                isDebt ? 'text-red-300' : 'text-emerald-300'
              } privacy-mask" data-raw-text="${escapeHTML(formatCurrency(rem))}">${
          isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(rem))
        }</span>
              <button type="button" onclick="openPayDebtModal('${
                d.id
              }')" class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-[#070908] text-white transition">Bayar</button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  /* --------------------------------------------------------------------------
   * 8. CALENDAR PAGE RENDERER
   * -------------------------------------------------------------------------- */
  function renderCalendarPage() {
    const grid = document.getElementById('calendar-grid');
    const titleEl = document.getElementById('calendar-month-year');
    if (!grid || !titleEl) return;

    const year = calDate.getFullYear();
    const month = calDate.getMonth();
    const locale = getLang() === 'id' ? 'id-ID' : 'en-US';
    titleEl.textContent = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(calDate);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayStr = todayISO();

    const dailyMap = {};
    state.transactions.forEach((t) => {
      if (!t.date) return;
      if (!dailyMap[t.date]) dailyMap[t.date] = { in: 0, out: 0 };
      if (t.type === 'INFLOW') dailyMap[t.date].in += Number(t.amount) || 0;
      if (t.type === 'OUTFLOW') dailyMap[t.date].out += Number(t.amount) || 0;
    });

    let cells = '';
    for (let i = 0; i < firstDay; i++) {
      cells += `<div class="h-12 rounded-2xl"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = iso === selectedCalDate;
      const isToday = iso === todayStr;
      const info = dailyMap[iso];

      cells += `
        <button
          type="button"
          onclick="selectCalendarDate('${iso}')"
          class="h-12 rounded-2xl flex flex-col items-center justify-center relative transition border ${
            isSelected
              ? 'bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] border-transparent shadow-md font-extrabold'
              : isToday
              ? 'bg-[#EDF5F0] dark:bg-emerald-500/15 text-[#0F5132] dark:text-emerald-300 border-[#0F5132]/30 dark:border-emerald-500/30 font-extrabold'
              : 'bg-[#FAF8F5] dark:bg-[#161D19] text-stone-700 dark:text-stone-200 border-transparent hover:border-stone-300 dark:hover:border-stone-700 font-bold'
          }"
        >
          <span class="text-xs leading-none">${day}</span>
          <div class="flex items-center gap-1 mt-1 h-1.5">
            ${
              info && info.in > 0
                ? `<span class="w-1.5 h-1.5 rounded-full ${
                    isSelected ? 'bg-white dark:bg-[#070908]' : 'bg-emerald-500'
                  }"></span>`
                : ''
            }
            ${
              info && info.out > 0
                ? `<span class="w-1.5 h-1.5 rounded-full ${
                    isSelected ? 'bg-amber-300 dark:bg-red-700' : 'bg-red-500'
                  }"></span>`
                : ''
            }
          </div>
        </button>
      `;
    }

    grid.innerHTML = cells;
    renderDailyTransactions(selectedCalDate);
  }

  function changeCalMonth(delta) {
    calDate = new Date(calDate.getFullYear(), calDate.getMonth() + delta, 1);
    renderCalendarPage();
  }

  function selectCalendarDate(iso) {
    selectedCalDate = iso;
    renderCalendarPage();
  }

  function renderDailyTransactions(iso) {
    const titleEl = document.getElementById('daily-detail-title');
    const listEl = document.getElementById('daily-transaction-list');
    if (!listEl) return;

    if (titleEl) {
      titleEl.textContent =
        iso === todayISO() ? (getLang() === 'id' ? 'Transaksi Hari Ini' : "Today's Transactions") : iso;
    }

    const items = state.transactions.filter((t) => t.date === iso);
    if (items.length === 0) {
      listEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-8 bg-white/5 rounded-2xl border border-white/5">Tidak ada transaksi pada tanggal ini</p>`;
      return;
    }

    listEl.innerHTML = items.map((t) => renderDarkSheetTransactionRow(t)).join('');
  }

  function renderDarkSheetTransactionRow(t) {
    const acc = findAccountByIdOrName(t.accountId);
    const isIn = t.type === 'INFLOW';
    const isTf = t.type === 'TRANSFER';
    const isNeutral = t.type === 'NEUTRAL';
    const colorClass = isIn
      ? 'text-emerald-400'
      : isTf
      ? 'text-sky-400'
      : isNeutral
      ? 'text-amber-300'
      : 'text-red-400';
    const sign = isIn ? '+' : isTf || isNeutral ? '' : '-';

    return `
      <div onclick="openTransactionDetail('${t.id}')" class="cursor-pointer p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between gap-3 transition">
        <div class="min-w-0">
          <p class="text-xs font-extrabold text-white truncate">${escapeHTML(t.note || t.category)}</p>
          <p class="text-[10px] text-stone-400 mt-0.5">${escapeHTML(t.category)} • ${escapeHTML(
      acc ? acc.name : t.accountId || '-'
    )}</p>
        </div>
        <div class="flex items-center gap-2.5 shrink-0">
          <span class="text-xs font-extrabold ${colorClass} privacy-mask" data-raw-text="${sign}${escapeHTML(
      formatCurrency(t.amount)
    )}">${isPrivacyEnabled() ? '••••••••' : `${sign}${escapeHTML(formatCurrency(t.amount))}`}</span>
          <button type="button" onclick="event.stopPropagation(); deleteTransaction('${
            t.id
          }')" class="text-stone-500 hover:text-red-400 p-1 transition" title="Hapus">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>
    `;
  }

  /* --------------------------------------------------------------------------
   * 9. PORTFOLIO PAGE RENDERER
   * -------------------------------------------------------------------------- */
  function renderPortfolioPage() {
    const cashTotal = getUserAccounts().reduce((s, a) => s + (Number(a.balance) || 0), 0);
    const walletCash = (state.wallets || []).reduce((s, w) => s + (Number(w.balance) || 0), 0);
    const assetValue = (state.assets || []).reduce(
      (s, a) => s + (Number(a.qty) || 0) * (Number(a.currentPrice) || Number(a.buyPrice) || 0),
      0
    );
    const netWorth = cashTotal + walletCash + assetValue;

    setMaskedValue(document.getElementById('porto-center-val'), formatCurrency(netWorth), netWorth);

    const walletListEl = document.getElementById('wallet-list');
    if (walletListEl) {
      if (!state.wallets || state.wallets.length === 0) {
        walletListEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-3">Belum ada dompet investasi</p>`;
      } else {
        walletListEl.innerHTML = state.wallets
          .map(
            (w) => `
              <div onclick="openWalletDetail('${w.id}')" class="cursor-pointer p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-[#161D19] hover:bg-[#EDF5F0] dark:hover:bg-[#1B241F] border border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between gap-3 transition">
                <div>
                  <p class="text-xs font-extrabold text-stone-900 dark:text-white">${escapeHTML(w.name)}</p>
                  <p class="text-[10px] font-semibold text-stone-400">${escapeHTML(w.platform || 'Investment')}</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-extrabold text-[#0F5132] dark:text-emerald-300 privacy-mask" data-raw-text="${escapeHTML(
                    formatCurrency(w.balance)
                  )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(w.balance))}</span>
                  <button type="button" onclick="event.stopPropagation(); deleteWallet('${
                    w.id
                  }')" class="text-stone-400 hover:text-red-500 p-1 transition">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              </div>
            `
          )
          .join('');
      }
    }

    const assetListEl = document.getElementById('asset-list');
    if (assetListEl) {
      if (!state.assets || state.assets.length === 0) {
        assetListEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-4 bg-white dark:bg-[#111613] rounded-2xl border border-stone-200/70 dark:border-stone-800">Belum ada aset terdaftar</p>`;
      } else {
        assetListEl.innerHTML = state.assets
          .map((a) => {
            const val = (Number(a.qty) || 0) * (Number(a.currentPrice) || Number(a.buyPrice) || 0);
            const cost = (Number(a.qty) || 0) * (Number(a.buyPrice) || 0);
            const pnl = val - cost;
            const pnlPct = cost > 0 ? ((pnl / cost) * 100).toFixed(1) : '0.0';
            const isPos = pnl >= 0;

            return `
              <div onclick="openAssetDetail('${a.id}')" class="cursor-pointer p-4 rounded-[22px] bg-white dark:bg-[#111613] hover:border-[#0F5132]/40 dark:hover:border-emerald-500/40 border border-stone-200/70 dark:border-stone-800/80 shadow-sm flex items-center justify-between gap-3 transition">
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#EDF5F0] dark:bg-emerald-500/15 text-[#0F5132] dark:text-emerald-300">${escapeHTML(
                      a.category || 'Asset'
                    )}</span>
                    <p class="text-xs font-extrabold text-stone-900 dark:text-white truncate">${escapeHTML(
                      a.name || a.symbol
                    )}</p>
                  </div>
                  <p class="text-[11px] text-stone-500 dark:text-stone-400 mt-1">${a.qty} unit • Avg ${escapeHTML(
              formatCurrency(a.buyPrice)
            )}</p>
                </div>
                <div class="text-right shrink-0">
                  <p class="text-xs font-extrabold text-stone-900 dark:text-white privacy-mask" data-raw-text="${escapeHTML(
                    formatCurrency(val)
                  )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(val))}</p>
                  <p class="text-[10px] font-bold ${
                    isPos ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
                  } mt-0.5">${isPos ? '+' : ''}${pnlPct}%</p>
                </div>
              </div>
            `;
          })
          .join('');
      }
    }

    const goalsEl = document.getElementById('porto-goals-list');
    if (goalsEl) {
      if (!state.goals || state.goals.length === 0) {
        goalsEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-4 bg-white/5 rounded-2xl border border-white/5">Belum ada target tabungan</p>`;
      } else {
        goalsEl.innerHTML = state.goals
          .map((g) => {
            const goalTitle = g.title || g.name || 'Target';
            const savedAmt = Number(g.saved !== undefined ? g.saved : g.current) || 0;
            const targetAmt = Math.max(1, Number(g.target) || 1);
            const pct = Math.min(100, Math.round((savedAmt / targetAmt) * 100));

            return `
              <div class="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <div class="flex items-center justify-between gap-2">
                  <div class="min-w-0">
                    <p class="text-xs font-extrabold text-white truncate">${escapeHTML(goalTitle)}</p>
                    <p class="text-[10px] text-stone-400 mt-0.5 privacy-mask" data-raw-text="${escapeHTML(
                      formatCurrency(savedAmt)
                    )} / ${escapeHTML(formatCurrency(targetAmt))}">${
              isPrivacyEnabled() ? '••••••••' : `${escapeHTML(formatCurrency(savedAmt))} / ${escapeHTML(formatCurrency(targetAmt))}`
            }</p>
                  </div>
                  <div class="flex items-center gap-1.5 shrink-0">
                    <span class="text-xs font-black text-emerald-400 mr-1">${pct}%</span>
                    <button type="button" onclick="openAddSavingsModal('${
                      g.id
                    }')" class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 border border-emerald-400/25">+ Nabung</button>
                    <button type="button" onclick="openWithdrawGoalModal('${
                      g.id
                    }')" class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 border border-white/10">Tarik</button>
                  </div>
                </div>
                <div class="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div class="h-full rounded-full bg-gradient-to-r from-[#0F5132] to-emerald-400 transition-all duration-500" style="width: ${pct}%"></div>
                </div>
              </div>
            `;
          })
          .join('');
      }
    }

    renderPortfolioDoughnut(cashTotal, walletCash, assetValue);
  }

  function renderPortfolioDoughnut(cashTotal, walletCash, assetValue) {
    const canvas = document.getElementById('portfolioChart');
    if (!canvas || typeof Chart === 'undefined') return;

    if (portfolioChartInstance) {
      portfolioChartInstance.destroy();
    }

    const isDark = document.documentElement.classList.contains('dark');
    const labels = ['Kas & Bank', 'Dompet Investasi', 'Aset Portofolio'];
    const data = [cashTotal, walletCash, assetValue];
    const hasData = data.some((v) => v > 0);

    portfolioChartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: hasData ? labels : ['Empty'],
        datasets: [
          {
            data: hasData ? data : [1],
            backgroundColor: hasData ? ['#0F5132', '#10B981', '#D97706'] : [isDark ? '#1E2722' : '#E7E5E4'],
            borderColor: isDark ? '#111613' : '#FFFFFF',
            borderWidth: 3,
            hoverOffset: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: hasData,
            callbacks: {
              label: (ctx) => `${ctx.label}: ${formatCurrency(ctx.parsed)}`
            }
          }
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 10. HISTORY PAGE RENDERER, FILTERS & CATEGORY DOUGHNUT
   * -------------------------------------------------------------------------- */
  function setHistoryFilter(period) {
    historyPeriod = period;
    ['month', '7days', 'custom'].forEach((p) => {
      const btn = document.getElementById(`filter-${p}`);
      if (!btn) return;
      const active = p === period;
      btn.className = active
        ? 'px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] shadow-md shadow-emerald-950/15 transition'
        : 'px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap bg-white dark:bg-[#111613] border border-stone-200/70 dark:border-stone-800 text-stone-600 dark:text-stone-300 shadow-sm transition hover:bg-[#FAF8F5] dark:hover:bg-[#18201C]';
    });

    const customBox = document.getElementById('custom-date-container');
    if (customBox) {
      if (period === 'custom') {
        customBox.classList.remove('hidden');
        customBox.classList.add('grid');
      } else {
        customBox.classList.add('hidden');
        customBox.classList.remove('grid');
      }
    }

    renderHistoryPage();
  }

  function setHistoryType(type) {
    historyType = type;
    ['INFLOW', 'OUTFLOW', 'TRANSFER'].forEach((t) => {
      const btn = document.getElementById(`toggle-${t.toLowerCase()}`);
      if (!btn) return;
      btn.classList.toggle('toggle-active', t === type);
    });
    renderHistoryPage();
  }

  function triggerHistoryRender() {
    renderHistoryPage();
  }

  function triggerHistoryFilterUpdate() {
    const searchEl = document.getElementById('hist-search-input');
    const accEl = document.getElementById('hist-filter-account');
    const catEl = document.getElementById('hist-filter-category');
    const clearBtn = document.getElementById('btn-clear-hist-search');
    const resetBtn = document.getElementById('btn-reset-hist-filter');

    historySearchQuery = searchEl ? searchEl.value.trim().toLowerCase() : '';
    historyAccountFilter = accEl ? accEl.value : 'ALL';
    historyCategoryFilter = catEl ? catEl.value : 'ALL';

    if (clearBtn) clearBtn.classList.toggle('hidden', !historySearchQuery);
    const hasFilter =
      Boolean(historySearchQuery) || historyAccountFilter !== 'ALL' || historyCategoryFilter !== 'ALL';
    if (resetBtn) resetBtn.classList.toggle('hidden', !hasFilter);

    renderHistoryPage();
  }

  function clearHistorySearch() {
    const searchEl = document.getElementById('hist-search-input');
    if (searchEl) searchEl.value = '';
    triggerHistoryFilterUpdate();
  }

  function resetHistoryFilters() {
    const searchEl = document.getElementById('hist-search-input');
    const accEl = document.getElementById('hist-filter-account');
    const catEl = document.getElementById('hist-filter-category');
    if (searchEl) searchEl.value = '';
    if (accEl) accEl.value = 'ALL';
    if (catEl) catEl.value = 'ALL';
    triggerHistoryFilterUpdate();
  }

  function getPeriodFilteredTransactions() {
    const now = new Date();
    const ymPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const sevenDaysAgo = offsetDateISO(-7);
    const startCustom = document.getElementById('date-start')?.value || '';
    const endCustom = document.getElementById('date-end')?.value || '';

    return state.transactions.filter((t) => {
      if (!t.date) return false;
      if (historyPeriod === 'month') return t.date.startsWith(ymPrefix);
      if (historyPeriod === '7days') return t.date >= sevenDaysAgo;
      if (historyPeriod === 'custom') {
        if (startCustom && t.date < startCustom) return false;
        if (endCustom && t.date > endCustom) return false;
        return true;
      }
      return true;
    });
  }

  function populateHistoryDropdowns() {
    const accEl = document.getElementById('hist-filter-account');
    const catEl = document.getElementById('hist-filter-category');

    if (accEl) {
      const current = accEl.value || 'ALL';
      const opts = [`<option value="ALL">${getLang() === 'id' ? 'Semua Akun' : 'All Accounts'}</option>`];
      getUserAccounts().forEach((a) => {
        opts.push(`<option value="${a.id}">${escapeHTML(a.name)}</option>`);
      });
      (state.wallets || []).forEach((w) => {
        opts.push(`<option value="${w.id}">${escapeHTML(w.name)}</option>`);
      });
      accEl.innerHTML = opts.join('');
      accEl.value = current;
    }

    if (catEl) {
      const current = catEl.value || 'ALL';
      const cats = new Set();
      state.transactions.forEach((t) => {
        if (t.category) cats.add(t.category);
      });
      const opts = [`<option value="ALL">${getLang() === 'id' ? 'Semua Kategori' : 'All Categories'}</option>`];
      Array.from(cats).forEach((c) => {
        opts.push(`<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`);
      });
      catEl.innerHTML = opts.join('');
      catEl.value = current;
    }
  }

  function renderHistoryPage() {
    populateHistoryDropdowns();

    const periodTrx = getPeriodFilteredTransactions();
    let totalIn = 0;
    let totalOut = 0;

    periodTrx.forEach((t) => {
      if (t.type === 'INFLOW') totalIn += Number(t.amount) || 0;
      if (t.type === 'OUTFLOW') totalOut += Number(t.amount) || 0;
    });

    const diff = totalIn - totalOut;
    setMaskedValue(document.getElementById('hist-sum-in'), formatCurrency(totalIn), totalIn);
    setMaskedValue(document.getElementById('hist-sum-out'), formatCurrency(totalOut), totalOut);
    setMaskedValue(
      document.getElementById('hist-sum-diff'),
      `${diff >= 0 ? '+' : ''}${formatCurrency(diff)}`,
      diff
    );

    const byCat = {};
    let typeTotal = 0;
    periodTrx
      .filter((t) => t.type === historyType)
      .forEach((t) => {
        const key = t.category || 'Lainnya';
        byCat[key] = (byCat[key] || 0) + (Number(t.amount) || 0);
        typeTotal += Number(t.amount) || 0;
      });

    setMaskedValue(document.getElementById('chart-center-val'), formatCurrency(typeTotal), typeTotal);
    renderCategoryDoughnut(byCat);
    renderCategoryBreakdownList(byCat, typeTotal);

    const filteredList = periodTrx
      .filter((t) => {
        if (historyAccountFilter !== 'ALL') {
          const accObj = findAccountByIdOrName(t.accountId);
          const filterAcc = findAccountByIdOrName(historyAccountFilter);
          const matchById = t.accountId === historyAccountFilter;
          const matchByName =
            accObj && filterAcc && accObj.name.toLowerCase() === filterAcc.name.toLowerCase();
          if (!matchById && !matchByName) return false;
        }
        if (historyCategoryFilter !== 'ALL' && t.category !== historyCategoryFilter) return false;
        if (historySearchQuery) {
          const hay = `${t.note || ''} ${t.category || ''} ${t.amount || ''} ${t.accountName || ''}`.toLowerCase();
          if (!hay.includes(historySearchQuery)) return false;
        }
        return true;
      })
      .sort((a, b) => {
        const keyA = `${a.date || ''} ${a.time || ''}`;
        const keyB = `${b.date || ''} ${b.time || ''}`;
        return keyB.localeCompare(keyA);
      });

    const badge = document.getElementById('hist-count-badge');
    if (badge) badge.textContent = String(filteredList.length);

    const listEl = document.getElementById('history-list');
    if (!listEl) return;

    if (filteredList.length === 0) {
      listEl.innerHTML = `<div class="p-8 text-center text-xs font-semibold text-stone-400">Tidak ada transaksi yang cocok dengan filter</div>`;
      return;
    }

    listEl.innerHTML = filteredList
      .map((t, idx) => {
        const acc = findAccountByIdOrName(t.accountId);
        const isIn = t.type === 'INFLOW';
        const isTf = t.type === 'TRANSFER';
        const isNeutral = t.type === 'NEUTRAL';
        const badgeBg = isIn
          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
          : isTf
          ? 'bg-sky-500/15 text-sky-700 dark:text-sky-300'
          : isNeutral
          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
          : 'bg-red-500/15 text-red-600 dark:text-red-400';
        const amountColor = isIn
          ? 'text-[#0F5132] dark:text-emerald-400'
          : isTf
          ? 'text-sky-600 dark:text-sky-400'
          : isNeutral
          ? 'text-amber-600 dark:text-amber-400'
          : 'text-red-600 dark:text-red-400';
        const sign = isIn ? '+' : isTf || isNeutral ? '' : '-';

        return `
          <div onclick="openTransactionDetail('${t.id}')" class="cursor-pointer p-4 flex items-center justify-between gap-3 ${
          idx > 0 ? 'border-t border-stone-100 dark:border-stone-800/70' : ''
        } hover:bg-[#FAF8F5] dark:hover:bg-[#161D19] transition">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${badgeBg}">${escapeHTML(
          t.category
        )}</span>
                <span class="text-[10px] font-semibold text-stone-400">${escapeHTML(t.date)}${
          t.time ? ` • ${escapeHTML(t.time)}` : ''
        }</span>
              </div>
              <p class="text-xs font-extrabold text-stone-900 dark:text-white truncate mt-1">${escapeHTML(
                t.note || t.category
              )}</p>
              <p class="text-[10px] text-stone-400 mt-0.5">${escapeHTML(
                acc ? acc.name : t.accountName || t.accountId || '-'
              )}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-extrabold ${amountColor} privacy-mask" data-raw-text="${sign}${escapeHTML(
          formatCurrency(t.amount)
        )}">${isPrivacyEnabled() ? '••••••••' : `${sign}${escapeHTML(formatCurrency(t.amount))}`}</span>
              <button type="button" onclick="event.stopPropagation(); deleteTransaction('${
                t.id
              }')" class="text-stone-400 hover:text-red-500 p-1 transition" title="Hapus">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  function renderCategoryDoughnut(byCat) {
    const canvas = document.getElementById('categoryChart');
    if (!canvas || typeof Chart === 'undefined') return;

    if (categoryChartInstance) {
      categoryChartInstance.destroy();
    }

    const isDark = document.documentElement.classList.contains('dark');
    const entries = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
    const hasData = entries.length > 0;

    categoryChartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: hasData ? entries.map((e) => e[0]) : ['Empty'],
        datasets: [
          {
            data: hasData ? entries.map((e) => e[1]) : [1],
            backgroundColor: hasData
              ? entries.map((_, i) => CHART_PALETTE[i % CHART_PALETTE.length])
              : [isDark ? '#1E2722' : '#E7E5E4'],
            borderColor: isDark ? '#111613' : '#FFFFFF',
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: hasData,
            callbacks: {
              label: (ctx) => `${ctx.label}: ${formatCurrency(ctx.parsed)}`
            }
          }
        }
      }
    });
  }

  function renderCategoryBreakdownList(byCat, total) {
    const listEl = document.getElementById('history-category-list');
    if (!listEl) return;

    const entries = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
    if (entries.length === 0) {
      listEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-2">Belum ada data kategori pada periode ini</p>`;
      return;
    }

    listEl.innerHTML = entries
      .map(([cat, amt], idx) => {
        const pct = total > 0 ? Math.round((amt / total) * 100) : 0;
        const color = CHART_PALETTE[idx % CHART_PALETTE.length];
        return `
          <div class="flex items-center justify-between py-2 px-3 rounded-xl bg-[#FAF8F5] dark:bg-[#161D19]">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${color}"></span>
              <span class="text-xs font-bold text-stone-800 dark:text-stone-200 truncate">${escapeHTML(cat)}</span>
              <span class="text-[10px] font-bold text-stone-400">${pct}%</span>
            </div>
            <span class="text-xs font-extrabold text-stone-900 dark:text-white privacy-mask shrink-0" data-raw-text="${escapeHTML(
              formatCurrency(amt)
            )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(amt))}</span>
          </div>
        `;
      })
      .join('');
  }

  /* --------------------------------------------------------------------------
   * 11. SETTINGS PAGE FALLBACK & RENDERER
   * -------------------------------------------------------------------------- */
  function buildFallbackSettingsHTML() {
    return `
      <div class="space-y-6 pb-24">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-extrabold tracking-tight text-stone-900 dark:text-white">Pengaturan & Sinkronisasi</h2>
            <p class="text-[11px] font-medium text-stone-500 dark:text-stone-400 mt-0.5">Profil pengguna, mata uang, cloud sync & backup</p>
          </div>
          <button type="button" onclick="navigateTo('dashboard')" class="px-3.5 py-2 rounded-full bg-white dark:bg-[#111613] border border-stone-200/70 dark:border-stone-800 text-xs font-bold text-[#0F5132] dark:text-emerald-400">Kembali</button>
        </div>

        <div class="bg-white dark:bg-[#111613] p-5 rounded-[28px] border border-stone-200/70 dark:border-stone-800/80 space-y-4">
          <h3 class="text-xs font-extrabold uppercase tracking-wider text-stone-500">Profil Pengguna Aktif</h3>
          <div class="grid grid-cols-2 gap-2.5" id="settings-user-switcher"></div>
        </div>

        <div class="bg-white dark:bg-[#111613] p-5 rounded-[28px] border border-stone-200/70 dark:border-stone-800/80 space-y-4">
          <h3 class="text-xs font-extrabold uppercase tracking-wider text-stone-500">Preferensi Mata Uang & Tampilan</h3>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-[10px] font-bold uppercase text-stone-400">Mata Uang</label>
              <select id="settings-currency-select" onchange="setCurrency(this.value)" class="w-full mt-1 p-2.5 rounded-xl border border-stone-200/70 dark:border-stone-800 bg-[#FAF8F5] dark:bg-[#161D19] text-xs font-bold dark:text-white">
                <option value="IDR">IDR (Rp)</option>
                <option value="USD">USD ($)</option>
                <option value="SGD">SGD (S$)</option>
                <option value="EUR">EUR (€)</option>
                <option value="JPY">JPY (¥)</option>
                <option value="MYR">MYR (RM)</option>
                <option value="AUD">AUD (A$)</option>
              </select>
            </div>
            <div>
              <label class="text-[10px] font-bold uppercase text-stone-400">Bahasa</label>
              <select id="settings-lang-select" onchange="setLanguage(this.value)" class="w-full mt-1 p-2.5 rounded-xl border border-stone-200/70 dark:border-stone-800 bg-[#FAF8F5] dark:bg-[#161D19] text-xs font-bold dark:text-white">
                <option value="id">Bahasa Indonesia</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          <button type="button" onclick="toggleTheme()" class="w-full py-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#161D19] border border-stone-200/70 dark:border-stone-800 text-xs font-bold text-stone-700 dark:text-stone-200">Ganti Mode Terang / Gelap</button>
        </div>

        <div class="bg-white dark:bg-[#111613] p-5 rounded-[28px] border border-stone-200/70 dark:border-stone-800/80 space-y-3">
          <h3 class="text-xs font-extrabold uppercase tracking-wider text-stone-500">Google Apps Script Cloud Sync</h3>
          <div>
            <label class="text-[10px] font-bold uppercase text-stone-400 mb-1 block">Email Akun Terdaftar (M_User / M_Akun)</label>
            <input type="email" id="settings-email-input" placeholder="bayubt62@gmail.com" class="w-full p-3 rounded-xl border border-stone-200/70 dark:border-stone-800 bg-[#FAF8F5] dark:bg-[#161D19] text-xs font-medium dark:text-white mb-2">
          </div>
          <div>
            <label class="text-[10px] font-bold uppercase text-stone-400 mb-1 block">URL Web App Deployment (exec)</label>
            <input type="url" id="gas-url-input" placeholder="https://script.google.com/macros/s/.../exec" class="w-full p-3 rounded-xl border border-stone-200/70 dark:border-stone-800 bg-[#FAF8F5] dark:bg-[#161D19] text-xs font-medium dark:text-white">
          </div>
          <div class="flex gap-2 pt-1">
            <button type="button" onclick="saveGasUrl()" class="flex-1 py-2.5 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] text-xs font-bold">Simpan & Sync</button>
            <button type="button" onclick="exportBackupJSON()" class="px-4 py-2.5 rounded-full bg-[#FAF8F5] dark:bg-[#161D19] border border-stone-200/70 dark:border-stone-800 text-xs font-bold dark:text-white">Backup JSON</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderSettingsPage() {
    const switcher = document.getElementById('settings-user-switcher');
    if (switcher) {
      switcher.innerHTML = (state.users || ['Bayu', 'Dedek Indra'])
        .map((u) => {
          const active = normalizeUserLabel(u) === normalizeUserLabel(state.activeUser);
          return `<button type="button" onclick="switchUser('${escapeHTML(u)}')" class="py-3 px-4 rounded-2xl text-xs font-extrabold border transition ${
            active
              ? 'bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] border-transparent shadow-md'
              : 'bg-[#FAF8F5] dark:bg-[#161D19] text-stone-700 dark:text-stone-300 border-stone-200/70 dark:border-stone-800'
          }">${escapeHTML(u)}</button>`;
        })
        .join('');
    }

    const emailInput = document.getElementById('settings-email-input');
    if (emailInput) emailInput.value = getSessionEmail();

    const currSel = document.getElementById('settings-currency-select');
    if (currSel) currSel.value = getCurrency();

    const langSel = document.getElementById('settings-lang-select');
    if (langSel) langSel.value = getLang();

    const gasInput = document.getElementById('gas-url-input');
    if (gasInput) gasInput.value = localStorage.getItem(GAS_URL_KEY) || DEFAULT_API_URL;
  }

  function switchUser(userName) {
    const normUser = normalizeUserLabel(userName);
    const targetEmail = resolveEmailForUser(normUser);

    state.activeUser = normUser;
    state.accounts = [];
    state.wallets = [];
    state.transactions = [];
    state.recurring = [];
    state.debts = [];
    state.debtHistory = [];
    state.goals = [];
    state.assets = [];

    localStorage.setItem(ACTIVE_USER_KEY, normUser);
    localStorage.setItem(SESSION_EMAIL_KEY, targetEmail);
    activeDeckIndex = 0;
    dueBannerDismissed = false;
    saveState(true);
    renderCurrentPage();
    showToast(`Memuat data ${normUser} (${targetEmail})...`, 'info');
    fetchAllData();
  }

  /* --------------------------------------------------------------------------
   * 12. MODALS & CRUD OPERATIONS
   * -------------------------------------------------------------------------- */
  function openModal(modalId, param) {
    if (modalId === 'modal-account' || modalId === 'modal-manage-account') {
      modalId = document.getElementById('modal-manage-account') ? 'modal-manage-account' : 'modal-account';
    }

    const modal = document.getElementById(modalId);
    if (!modal) {
      showToast(`Modal ${modalId} tidak ditemukan`, 'warning');
      return;
    }

    populateModalAccountSelects();

    if (modalId === 'modal-trx') {
      const rawType =
        param || document.getElementById('trx-type')?.value || document.getElementById('form-trx-tipe')?.value || 'OUTFLOW';
      const type = rawType.toUpperCase().includes('IN') || rawType === 'pemasukan' ? 'INFLOW' : 'OUTFLOW';

      const typeInput = document.getElementById('trx-type') || document.getElementById('form-trx-tipe');
      if (typeInput) typeInput.value = type;

      const titleEl = document.getElementById('modal-trx-title');
      if (titleEl) {
        titleEl.textContent = type === 'INFLOW' ? 'Pemasukan Baru' : 'Pengeluaran Baru';
      }

      const dateInput = document.getElementById('trx-date') || document.getElementById('form-trx-date');
      if (dateInput && !dateInput.value) dateInput.value = todayISO();

      const timeInput = document.getElementById('form-trx-time');
      if (timeInput && !timeInput.value) {
        const now = new Date();
        timeInput.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      }

      populateTrxCategories(type);
      validateTrxForm();
    }

    if (modalId === 'modal-debt-history') {
      renderDebtHistoryModal();
    }

    if (modalId === 'modal-export-pdf') {
      renderExportPdfModal();
    }

    modal.classList.remove('hidden', 'hidden-page');
    if (modal.id !== 'modal-level-info') {
      modal.classList.add('flex');
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    if (modal.id === 'modal-level-info') {
      modal.classList.add('hidden-page');
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  function closeAllModals() {
    document.querySelectorAll('[id^="modal-"]').forEach((m) => {
      if (m.id === 'modal-level-info') {
        m.classList.add('hidden-page');
      } else {
        m.classList.add('hidden');
        m.classList.remove('flex');
      }
    });
  }

  function populateModalAccountSelects() {
    const accounts = getUserAccounts();
    const accOptionsHtml = accounts
      .map((a) => `<option value="${a.id}">${escapeHTML(a.name)} (${formatCurrency(a.balance)})</option>`)
      .join('');

    [
      'trx-account',
      'form-trx-account',
      'tf-from',
      'form-tf-from',
      'tf-to',
      'form-tf-to',
      'rec-account',
      'form-rec-account',
      'form-rec-rek',
      'debt-account',
      'form-debt-rek',
      'form-cair-rek',
      'form-dividend-account',
      'form-topup-account',
      'form-pay-debt-account',
      'form-withdraw-account',
      'form-add-savings-account',
      'form-sell-asset-account'
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = accOptionsHtml;
    });

    const tfTo = document.getElementById('form-tf-to') || document.getElementById('tf-to');
    if (tfTo && accounts.length > 1) {
      tfTo.selectedIndex = 1;
    }

    const walletOptions = (state.wallets || [])
      .map((w) => `<option value="${w.id}">${escapeHTML(w.name)} (${formatCurrency(w.balance)})</option>`)
      .join('');

    ['asset-wallet', 'form-buy-asset-wallet', 'form-asset-wallet', 'form-asset-account'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = walletOptions + accOptionsHtml;
      }
    });
  }

  function populateTrxCategories(type) {
    const normType = type === 'pemasukan' ? 'INFLOW' : type === 'pengeluaran' ? 'OUTFLOW' : type;
    const catSelects = [document.getElementById('trx-category'), document.getElementById('form-trx-category')];
    const list = state.categories[normType] || state.categories.OUTFLOW;
    catSelects.forEach((catSelect) => {
      if (!catSelect) return;
      catSelect.innerHTML = list.map((c) => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
    });
  }

  function openTransactionDetail(trxId) {
    const trx = state.transactions.find((t) => t.id === trxId);
    if (!trx) return;
    const acc = findAccountByIdOrName(trx.accountId);
    const isIn = trx.type === 'INFLOW';

    const amtEl = document.getElementById('dtl-amount');
    const catEl = document.getElementById('dtl-kategori');
    const accEl = document.getElementById('dtl-akun');
    const dateEl = document.getElementById('dtl-tanggal');
    const noteEl = document.getElementById('dtl-keterangan');
    const itemsSec = document.getElementById('dtl-items-section');
    const itemsBox = document.getElementById('dtl-items-container');

    if (amtEl) {
      amtEl.textContent = `${isIn ? '+' : '-'}${formatCurrency(trx.amount)}`;
      amtEl.className = `text-3xl font-black tracking-tight ${
        isIn ? 'text-[#0F5132] dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
      }`;
    }
    if (catEl) catEl.textContent = trx.category || '-';
    if (accEl) accEl.textContent = acc ? acc.name : trx.accountName || trx.accountId || '-';
    if (dateEl) dateEl.textContent = trx.time ? `${trx.date} (${trx.time})` : trx.date || '-';
    if (noteEl) noteEl.textContent = trx.note || trx.category || '-';

    if (itemsSec && itemsBox) {
      if (Array.isArray(trx.items) && trx.items.length > 0) {
        itemsSec.classList.remove('hidden');
        itemsBox.innerHTML = trx.items
          .map(
            (it) =>
              `<div class="flex justify-between text-xs"><span>${escapeHTML(it.name)} x${it.qty || 1}</span><span class="font-bold">${escapeHTML(
                formatCurrency(it.price || 0)
              )}</span></div>`
          )
          .join('');
      } else {
        itemsSec.classList.add('hidden');
      }
    }

    openModal('modal-transaction-detail');
  }

  function toggleAdvanceMode() {
    advanceItemsMode = !advanceItemsMode;
    const btn = document.getElementById('btn-advance-mode');
    if (btn) {
      btn.textContent = advanceItemsMode ? 'Simple Mode' : 'Advance Mode';
    }
  }

  function openAccountModal(accountId) {
    const modal = document.getElementById('modal-manage-account') || document.getElementById('modal-account');
    if (!modal) return;

    const existing = accountId ? state.accounts.find((a) => a.id === accountId) : null;
    const titleEl = document.getElementById('mod-manage-acc-title');
    const modeEl = document.getElementById('form-acc-mode');
    const idEl = document.getElementById('form-acc-id') || document.getElementById('acc-id');
    const oldNameEl = document.getElementById('form-acc-old-name');
    const oldBalEl = document.getElementById('form-acc-old-bal');
    const typeEl = document.getElementById('form-acc-type');
    const nameEl = document.getElementById('form-acc-name') || document.getElementById('acc-name');
    const holderEl = document.getElementById('form-acc-holder');
    const numEl = document.getElementById('form-acc-number') || document.getElementById('acc-number');
    const balEl = document.getElementById('form-acc-balance') || document.getElementById('acc-balance');
    const balLblEl = document.getElementById('lbl-acc-balance-input');
    const reconcileSec = document.getElementById('acc-reconcile-section');
    const delBtn = document.getElementById('btn-delete-account');

    if (existing) {
      if (titleEl) titleEl.textContent = 'Edit Rekening';
      if (modeEl) modeEl.value = 'edit';
      if (idEl) idEl.value = existing.id;
      if (oldNameEl) oldNameEl.value = existing.name;
      if (oldBalEl) oldBalEl.value = String(existing.balance || 0);
      if (typeEl) {
        typeEl.value =
          existing.type === 'E-WALLET' ? 'E-Wallet' : existing.type === 'CASH' ? 'Tunai' : 'Bank';
      }
      if (nameEl) nameEl.value = existing.name;
      if (holderEl) holderEl.value = existing.holder || state.activeUser || '';
      if (numEl) numEl.value = existing.number || '';
      if (balEl) balEl.value = new Intl.NumberFormat('id-ID').format(existing.balance || 0);
      if (balLblEl) balLblEl.textContent = 'Saldo Saat Ini (Rp)';
      if (reconcileSec) reconcileSec.classList.remove('hidden');
      if (delBtn) delBtn.classList.remove('hidden');
    } else {
      if (titleEl) titleEl.textContent = 'Tambah Rekening';
      if (modeEl) modeEl.value = 'add';
      if (idEl) idEl.value = '';
      if (oldNameEl) oldNameEl.value = '';
      if (oldBalEl) oldBalEl.value = '0';
      if (typeEl) typeEl.value = 'Bank';
      if (nameEl) nameEl.value = '';
      if (holderEl) holderEl.value = USER_PROFILES[state.activeUser]?.fullName || state.activeUser || '';
      if (numEl) numEl.value = '';
      if (balEl) balEl.value = '';
      if (balLblEl) balLblEl.textContent = 'Saldo Awal (Rp)';
      if (reconcileSec) reconcileSec.classList.add('hidden');
      if (delBtn) delBtn.classList.add('hidden');
    }

    openModal(modal.id);
  }

  function detectCardTheme(name, type) {
    const lower = (name || '').toLowerCase();
    if (lower.includes('bca')) return 'bca';
    if (lower.includes('mandiri')) return 'mandiri';
    if (lower.includes('bni')) return 'bni';
    if (lower.includes('bri')) return 'bri';
    if (lower.includes('gold') || lower.includes('emas')) return 'gold';
    if (
      (type || '').toUpperCase().includes('WALLET') ||
      lower.includes('gopay') ||
      lower.includes('ovo') ||
      lower.includes('dana') ||
      lower.includes('shopee') ||
      lower.includes('link')
    ) {
      return 'ewallet';
    }
    return 'emerald';
  }

  function saveAccount(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const id = document.getElementById('form-acc-id')?.value || document.getElementById('acc-id')?.value || '';
    const name =
      document.getElementById('form-acc-name')?.value?.trim() ||
      document.getElementById('acc-name')?.value?.trim();
    const holder =
      document.getElementById('form-acc-holder')?.value?.trim() ||
      USER_PROFILES[state.activeUser]?.fullName ||
      state.activeUser ||
      'User';
    const number =
      document.getElementById('form-acc-number')?.value?.trim() ||
      document.getElementById('acc-number')?.value?.trim() ||
      '';
    const rawBal =
      document.getElementById('form-acc-balance')?.value ||
      document.getElementById('acc-balance')?.value ||
      '0';
    const balance = Number(String(rawBal).replace(/[^0-9]/g, '')) || 0;
    const type = document.getElementById('form-acc-type')?.value || 'Bank';
    const recordAdj = Boolean(document.getElementById('form-acc-record-adj')?.checked);
    const adjNote = document.getElementById('form-acc-adj-note')?.value?.trim() || '';

    if (!name) {
      showToast('Nama akun wajib diisi', 'warning');
      return;
    }

    const existing = id ? state.accounts.find((a) => a.id === id) : null;
    const oldName = existing ? existing.name : '';
    const oldBal = existing ? Number(existing.balance) || 0 : 0;
    const normType = type.toUpperCase().includes('WALLET')
      ? 'E-WALLET'
      : type.toUpperCase().includes('TUNAI') || type.toUpperCase().includes('CASH')
      ? 'CASH'
      : 'BANK';
    const theme = detectCardTheme(name, normType);

    if (existing) {
      existing.name = name;
      existing.holder = holder;
      existing.number = number;
      existing.balance = balance;
      existing.theme = theme;
      existing.type = normType;

      if (recordAdj && balance !== oldBal) {
        const diff = balance - oldBal;
        state.transactions.unshift({
          id: 'TRX-' + Date.now(),
          date: todayISO(),
          type: diff > 0 ? 'INFLOW' : 'OUTFLOW',
          category: 'Penyesuaian Saldo',
          amount: Math.abs(diff),
          accountId: existing.id,
          accountName: existing.name,
          note: adjNote || `Rekonsiliasi saldo ${name}`
        });
      }
    } else {
      state.accounts.push({
        id: 'ACC-' + Date.now(),
        name,
        type: normType,
        holder,
        number,
        balance,
        theme,
        owner: state.activeUser,
        ownerEmail: getSessionEmail()
      });
    }

    saveState();
    closeModal('modal-manage-account');
    closeModal('modal-account');
    renderCurrentPage();
    showToast('Data akun disimpan', 'success');

    if (existing) {
      apiPost({
        action: 'updateAccount',
        email: getSessionEmail(),
        idAkun: existing.id,
        oldNama: oldName,
        nama: name,
        tipe: type,
        atasNama: holder,
        noRek: number,
        saldo: balance,
        recordAdjustment: recordAdj,
        adjNote
      }).then(() => fetchAllData());
    } else {
      apiPost({
        action: 'addAccount',
        email: getSessionEmail(),
        nama: name,
        tipe: type,
        atasNama: holder,
        noRek: number,
        saldo: balance
      }).then(() => fetchAllData());
    }
  }

  function saveTransaction(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const rawType =
      document.getElementById('trx-type')?.value || document.getElementById('form-trx-tipe')?.value || 'OUTFLOW';
    const type = rawType.toUpperCase().includes('IN') || rawType === 'pemasukan' ? 'INFLOW' : 'OUTFLOW';
    const amountEl = document.getElementById('trx-amount') || document.getElementById('form-trx-amount');
    const rawAmount = amountEl?.value || '0';
    const amount = typeof rawAmount === 'number' ? rawAmount : Number(String(rawAmount).replace(/[^0-9]/g, '')) || 0;
    const rawAdmin = document.getElementById('form-trx-admin')?.value || '0';
    const adminFee = Number(String(rawAdmin).replace(/[^0-9]/g, '')) || 0;
    const category =
      document.getElementById('trx-category')?.value ||
      document.getElementById('form-trx-category')?.value ||
      'Lainnya';
    const accountId =
      document.getElementById('trx-account')?.value ||
      document.getElementById('form-trx-account')?.value ||
      getUserAccounts()[0]?.id;
    const date =
      document.getElementById('trx-date')?.value || document.getElementById('form-trx-date')?.value || todayISO();
    const time = document.getElementById('form-trx-time')?.value || '12:00';
    const note =
      document.getElementById('trx-note')?.value?.trim() ||
      document.getElementById('form-trx-desc')?.value?.trim() ||
      category;

    if (amount <= 0) {
      showToast('Nominal transaksi harus lebih dari 0', 'warning');
      return;
    }

    const totalDeduct = amount + adminFee;
    const acc = findAccountByIdOrName(accountId);
    if (acc) {
      if (type === 'INFLOW') acc.balance = (Number(acc.balance) || 0) + amount - adminFee;
      else if (type === 'OUTFLOW') acc.balance = (Number(acc.balance) || 0) - totalDeduct;
    }

    const newTrxId = 'TRX-' + Date.now();
    const accountName = acc ? acc.name : accountId;

    state.transactions.unshift({
      id: newTrxId,
      date,
      time,
      type,
      category,
      amount: type === 'OUTFLOW' ? totalDeduct : amount,
      accountId: acc ? acc.id : accountId,
      accountName,
      note: adminFee > 0 ? `${note} (Admin Rp ${new Intl.NumberFormat('id-ID').format(adminFee)})` : note,
      items: []
    });

    saveState();
    closeModal('modal-trx');
    if (amountEl) amountEl.value = '';
    const adminEl = document.getElementById('form-trx-admin');
    if (adminEl) adminEl.value = '';
    const noteEl = document.getElementById('trx-note') || document.getElementById('form-trx-desc');
    if (noteEl) noteEl.value = '';
    validateTrxForm();
    renderCurrentPage();
    showToast('Transaksi berhasil dicatat', 'success');

    apiPost({
      action: 'addTransaction',
      email: getSessionEmail(),
      idTransaksi: newTrxId,
      tanggal: `${date} ${time}`,
      tipe: type,
      akun: accountName,
      kategori: category,
      jumlah: type === 'OUTFLOW' ? totalDeduct : amount,
      keterangan: note
    }).then(() => fetchAllData());
  }

  function deleteTransaction(trxId) {
    const idx = state.transactions.findIndex((t) => t.id === trxId);
    if (idx === -1) return;
    const trx = state.transactions[idx];

    if (!confirm(`Hapus transaksi "${trx.note || trx.category}" (${formatCurrency(trx.amount)})?`)) {
      return;
    }

    const acc = findAccountByIdOrName(trx.accountId);
    if (acc && trx.type !== 'NEUTRAL') {
      if (trx.type === 'INFLOW') acc.balance = (Number(acc.balance) || 0) - (Number(trx.amount) || 0);
      else if (trx.type === 'OUTFLOW') acc.balance = (Number(acc.balance) || 0) + (Number(trx.amount) || 0);
    }

    state.transactions.splice(idx, 1);
    saveState();
    renderCurrentPage();
    showToast('Menghapus transaksi & menyinkronkan saldo...', 'info');

    apiPost({
      action: 'deleteTransaction',
      email: getSessionEmail(),
      idTransaksi: trx.id,
      jumlah: trx.amount,
      keterangan: trx.note
    }).then(() => fetchAllData());
  }

  function saveTransfer(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const fromId = document.getElementById('tf-from')?.value || document.getElementById('form-tf-from')?.value;
    const toId = document.getElementById('tf-to')?.value || document.getElementById('form-tf-to')?.value;
    const rawAmt = document.getElementById('tf-amount')?.value || document.getElementById('form-tf-amount')?.value || '0';
    const amount = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
    const rawFee = document.getElementById('tf-fee')?.value || document.getElementById('form-tf-admin')?.value || '0';
    const adminFee = Number(String(rawFee).replace(/[^0-9]/g, '')) || 0;
    const note =
      document.getElementById('tf-note')?.value?.trim() ||
      document.getElementById('form-tf-desc')?.value?.trim() ||
      'Transfer Antar Akun';

    if (!fromId || !toId || fromId === toId) {
      showToast('Pilih akun asal dan tujuan yang berbeda', 'warning');
      return;
    }
    if (amount <= 0) {
      showToast('Nominal transfer tidak valid', 'warning');
      return;
    }

    const fromAcc = findAccountByIdOrName(fromId);
    const toAcc = findAccountByIdOrName(toId);
    if (fromAcc) fromAcc.balance = (Number(fromAcc.balance) || 0) - (amount + adminFee);
    if (toAcc) toAcc.balance = (Number(toAcc.balance) || 0) + amount;

    state.transactions.unshift({
      id: 'TRX-' + Date.now(),
      date: todayISO(),
      type: 'TRANSFER',
      category: 'Transfer Antar Akun',
      amount,
      accountId: fromId,
      accountName: fromAcc?.name || fromId,
      note: `${note} (${fromAcc?.name || ''} → ${toAcc?.name || ''})`
    });

    saveState();
    closeModal('modal-transfer');
    const tfAmtEl = document.getElementById('form-tf-amount');
    if (tfAmtEl) tfAmtEl.value = '';
    renderCurrentPage();
    showToast('Transfer berhasil dicatat', 'success');

    const fromName = fromAcc ? fromAcc.name : fromId;
    const toName = toAcc ? toAcc.name : toId;
    const nowTime = `${todayISO()} 12:00`;

    apiPost({
      action: 'addTransaction',
      email: getSessionEmail(),
      tanggal: nowTime,
      tipe: 'OUTFLOW',
      akun: fromName,
      kategori: 'Transfer Keluar',
      jumlah: amount,
      keterangan: `${note} ke ${toName}`
    })
      .then(() => {
        if (adminFee > 0) {
          return apiPost({
            action: 'addTransaction',
            email: getSessionEmail(),
            tanggal: nowTime,
            tipe: 'OUTFLOW',
            akun: fromName,
            kategori: 'Biaya Admin',
            jumlah: adminFee,
            keterangan: `Admin tf ke ${toName}`
          });
        }
      })
      .then(() =>
        apiPost({
          action: 'addTransaction',
          email: getSessionEmail(),
          tanggal: nowTime,
          tipe: 'INFLOW',
          akun: toName,
          kategori: 'Transfer Masuk',
          jumlah: amount,
          keterangan: `${note} dari ${fromName}`
        })
      )
      .then(() => fetchAllData());
  }

  function saveRecurring(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const name =
      document.getElementById('form-rec-name')?.value?.trim() ||
      document.getElementById('rec-name')?.value?.trim();
    const rawAmt =
      document.getElementById('form-rec-amount')?.value ||
      document.getElementById('rec-amount')?.value ||
      '0';
    const amount = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
    const cycle = document.getElementById('form-rec-tipe')?.value || 'Bulanan';
    const dueDate =
      document.getElementById('form-rec-date')?.value ||
      document.getElementById('rec-date')?.value ||
      '1';
    const accountId =
      document.getElementById('form-rec-account')?.value ||
      document.getElementById('rec-account')?.value ||
      getUserAccounts()[0]?.id;

    if (!name || amount <= 0) {
      showToast('Lengkapi nama tagihan dan nominal', 'warning');
      return;
    }

    const acc = findAccountByIdOrName(accountId);
    state.recurring.push({
      id: 'REC-' + Date.now(),
      name,
      amount,
      cycle,
      dueDate,
      accountId: acc ? acc.name : accountId,
      category: 'Tagihan',
      active: true
    });

    saveState();
    closeModal('modal-recurring');
    renderCurrentPage();
    showToast('Tagihan rutin berhasil disimpan', 'success');

    apiPost({
      action: 'addRecurring',
      email: getSessionEmail(),
      nama: name,
      nominal: amount,
      frekuensi: cycle,
      tgl_tagihan: dueDate,
      akun: acc ? acc.name : accountId
    }).then(() => fetchAllData());
  }

  function payRecurringNow(recId) {
    const rec = state.recurring.find((r) => r.id === recId);
    if (!rec) return;

    const acc = findAccountByIdOrName(rec.accountId) || getUserAccounts()[0];
    if (acc) acc.balance = (Number(acc.balance) || 0) - (Number(rec.amount) || 0);

    state.transactions.unshift({
      id: 'TRX-' + Date.now(),
      date: todayISO(),
      type: 'OUTFLOW',
      category: rec.category || 'Tagihan',
      amount: Number(rec.amount) || 0,
      accountId: acc ? acc.id : '',
      accountName: acc ? acc.name : rec.accountId,
      note: `Pembayaran Rutin: ${rec.name}`
    });

    saveState();
    renderCurrentPage();
    showToast(`Tagihan ${rec.name} dibayar!`, 'success');

    apiPost({
      action: 'payRecurring',
      email: getSessionEmail(),
      idRec: rec.id,
      akun: acc ? acc.name : rec.accountId
    }).then(() => fetchAllData());
  }

  function deleteRecurring(recId) {
    const target = state.recurring.find((r) => r.id === recId);
    state.recurring = state.recurring.filter((r) => r.id !== recId);
    saveState();
    renderCurrentPage();
    showToast('Tagihan rutin dihapus', 'info');

    apiPost({
      action: 'deleteRecurring',
      email: getSessionEmail(),
      idRec: recId,
      nama: target ? target.name : ''
    }).then(() => fetchAllData());
  }

  function saveDebt(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const rawType =
      document.getElementById('form-debt-tipe')?.value ||
      document.getElementById('debt-type')?.value ||
      'UTANG';
    const type =
      rawType.toUpperCase().includes('UTANG') || rawType === 'DEBT' || rawType === 'PAYABLE'
        ? 'DEBT'
        : 'RECEIVABLE';
    const person =
      document.getElementById('form-debt-name')?.value?.trim() ||
      document.getElementById('debt-person')?.value?.trim();
    const rawAmt =
      document.getElementById('form-debt-amount')?.value ||
      document.getElementById('debt-amount')?.value ||
      '0';
    const amount = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
    const dueDate =
      document.getElementById('form-debt-jatuh-tempo')?.value ||
      document.getElementById('debt-due')?.value ||
      '';
    const note =
      document.getElementById('form-debt-desc')?.value?.trim() ||
      document.getElementById('debt-note')?.value?.trim() ||
      '';

    if (!person || amount <= 0) {
      showToast('Lengkapi nama pihak dan nominal', 'warning');
      return;
    }

    state.debts.push({
      id: 'DEBT-' + Date.now(),
      type,
      person,
      amount,
      paid: 0,
      dueDate,
      note,
      settled: false
    });

    saveState();
    closeModal('modal-debt');
    renderCurrentPage();
    showToast('Catatan hutang/piutang disimpan', 'success');

    apiPost({
      action: 'addDebt',
      email: getSessionEmail(),
      tipe: type === 'DEBT' ? 'UTANG' : 'PIUTANG',
      kontak: person,
      jumlah: amount
    }).then(() => fetchAllData());
  }

  function openPayDebtModal(debtId) {
    const debt = (state.debts || []).find((d) => d.id === debtId);
    if (!debt) return;
    const rem = Math.max(0, (Number(debt.amount) || 0) - (Number(debt.paid) || 0));

    const idEl = document.getElementById('form-pay-debt-id');
    const nameInputEl = document.getElementById('form-pay-debt-name');
    const tipeEl = document.getElementById('form-pay-debt-tipe');
    const maxEl = document.getElementById('form-pay-debt-max');
    const nameDisp = document.getElementById('pay-debt-name-display');
    const sisaDisp = document.getElementById('pay-debt-sisa-display');
    const amtEl = document.getElementById('form-pay-debt-amount');
    const descEl = document.getElementById('txt-pay-debt-desc');

    if (idEl) idEl.value = debt.id;
    if (nameInputEl) nameInputEl.value = debt.person;
    if (tipeEl) tipeEl.value = debt.type;
    if (maxEl) maxEl.value = String(rem);
    if (nameDisp) nameDisp.textContent = ` ${debt.person}`;
    if (sisaDisp) sisaDisp.textContent = formatCurrency(rem);
    if (amtEl) amtEl.value = new Intl.NumberFormat('id-ID').format(rem);
    if (descEl) {
      descEl.textContent =
        debt.type === 'DEBT' ? 'Membayar hutang kepada' : 'Menerima pelunasan piutang dari';
    }

    openModal('modal-pay-debt');
  }

  function settleDebt(debtId, customAmount, accountId) {
    const debt = state.debts.find((d) => d.id === debtId);
    if (!debt) return;
    const rem = Math.max(0, (Number(debt.amount) || 0) - (Number(debt.paid) || 0));
    const payAmt = customAmount !== undefined ? Math.min(rem, customAmount) : rem;
    if (payAmt <= 0) return;

    const payingAcc = findAccountByIdOrName(accountId) || getUserAccounts()[0];
    const isDebt = debt.type === 'DEBT';

    if (payingAcc) {
      payingAcc.balance = isDebt
        ? (Number(payingAcc.balance) || 0) - payAmt
        : (Number(payingAcc.balance) || 0) + payAmt;
    }

    debt.paid = (Number(debt.paid) || 0) + payAmt;
    if (debt.paid >= debt.amount) {
      debt.settled = true;
      debt.settledDate = todayISO();
    }

    state.transactions.unshift({
      id: 'TRX-' + Date.now(),
      date: todayISO(),
      type: isDebt ? 'OUTFLOW' : 'INFLOW',
      category: isDebt ? 'Kewajiban & Sosial' : 'Pelunasan Piutang',
      amount: payAmt,
      accountId: payingAcc ? payingAcc.id : '',
      accountName: payingAcc ? payingAcc.name : '',
      note: isDebt ? `Bayar hutang: ${debt.person}` : `Terima piutang: ${debt.person}`
    });

    saveState();
    renderCurrentPage();
    showToast(
      debt.settled ? `${debt.person} ditandai lunas` : `Cicilan ${formatCurrency(payAmt)} dicatat`,
      'success'
    );

    apiPost({
      action: 'payDebt',
      email: getSessionEmail(),
      idDebt: debtId,
      kontak: debt.person,
      nominal: payAmt,
      akun: payingAcc ? payingAcc.name : ''
    }).then(() => fetchAllData());
  }

  function toggleDebtHistoryTab(tab) {
    debtHistoryTab = tab === 'INACTIVE' ? 'INACTIVE' : 'ACTIVE';
    const activeBtn = document.getElementById('tab-debt-active');
    const inactiveBtn = document.getElementById('tab-debt-inactive');
    if (activeBtn) activeBtn.classList.toggle('toggle-active', debtHistoryTab === 'ACTIVE');
    if (inactiveBtn) inactiveBtn.classList.toggle('toggle-active', debtHistoryTab === 'INACTIVE');
    renderDebtHistoryModal();
  }

  function renderDebtHistoryModal() {
    const box =
      document.getElementById('debt-history-list-container') ||
      document.getElementById('debt-history-list');
    if (!box) return;

    const list =
      debtHistoryTab === 'ACTIVE'
        ? (state.debts || []).filter((d) => !d.settled)
        : (state.debts || []).filter((d) => d.settled);

    if (list.length === 0) {
      box.innerHTML = `<p class="text-xs text-stone-400 text-center py-6">Tidak ada data catatan pada tab ini</p>`;
      return;
    }

    box.innerHTML = list
      .map((h) => {
        const isDebt = h.type === 'DEBT';
        const rem = Math.max(0, (Number(h.amount) || 0) - (Number(h.paid) || 0));
        return `
          <div class="p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-[#161D19] border border-stone-200/70 dark:border-stone-800 flex justify-between items-center text-xs">
            <div>
              <div class="flex items-center gap-1.5">
                <span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                  isDebt ? 'bg-red-500/15 text-red-600 dark:text-red-400' : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                }">${isDebt ? 'Hutang' : 'Piutang'}</span>
                <p class="font-bold text-stone-900 dark:text-white">${escapeHTML(h.person)}</p>
              </div>
              <p class="text-[10px] text-stone-400 mt-1">${
                h.settled
                  ? `Status: ${escapeHTML(h.status || 'COMPLETED')}`
                  : `Sisa: ${escapeHTML(formatCurrency(rem))}`
              }</p>
            </div>
            <span class="font-extrabold text-emerald-600 dark:text-emerald-400">${escapeHTML(
              formatCurrency(h.amount)
            )}</span>
          </div>
        `;
      })
      .join('');
  }

  function openWalletDetail(walletId) {
    const wal = (state.wallets || []).find((w) => w.id === walletId);
    if (!wal) return;
    const nameEl = document.getElementById('det-wallet-name');
    const balEl = document.getElementById('det-wallet-bal');
    const delBtn = document.getElementById('btn-del-wallet-submit');
    if (nameEl) nameEl.textContent = wal.name;
    setMaskedValue(balEl, formatCurrency(wal.balance), wal.balance);
    if (delBtn) delBtn.dataset.walletId = wal.id;
    openModal('modal-wallet-detail');
  }

  function deleteWallet(id) {
    const wal = (state.wallets || []).find((w) => w.id === id);
    state.wallets = (state.wallets || []).filter((w) => w.id !== id);
    saveState();
    renderCurrentPage();
    showToast('Dompet dihapus', 'info');
    if (wal) {
      apiPost({
        action: 'deleteWallet',
        email: getSessionEmail(),
        idAkun: wal.id,
        nama: wal.name
      }).then(() => fetchAllData());
    }
  }

  function openAssetDetail(assetId) {
    const asset = (state.assets || []).find((a) => a.id === assetId);
    if (!asset) return;
    currentDetailAssetId = asset.id;
    renderAssetDetailModal();
    openModal('modal-asset-detail');
  }

  function setCurrencyFilter(code) {
    currentAssetDetailCurrency = code === 'USD' ? 'USD' : 'IDR';
    const btnIdr = document.getElementById('currency-btn-idr');
    const btnUsd = document.getElementById('currency-btn-usd');
    if (btnIdr && btnUsd) {
      if (currentAssetDetailCurrency === 'IDR') {
        btnIdr.className =
          'px-2.5 py-1 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] transition-all duration-200';
        btnUsd.className = 'px-2.5 py-1 rounded-full text-stone-400 dark:text-stone-500 transition-all duration-200';
      } else {
        btnUsd.className =
          'px-2.5 py-1 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] transition-all duration-200';
        btnIdr.className = 'px-2.5 py-1 rounded-full text-stone-400 dark:text-stone-500 transition-all duration-200';
      }
    }
    renderAssetDetailModal();
  }

  function setChartFilter(filter) {
    currentAssetChartFilter = filter || '1M';
    document.querySelectorAll('.time-filter-btn').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-filter') === currentAssetChartFilter);
    });
    renderAssetDetailModal();
  }

  function renderAssetDetailModal() {
    const asset = (state.assets || []).find((a) => a.id === currentDetailAssetId);
    if (!asset) return;

    const cur = currentAssetDetailCurrency;
    const qty = Number(asset.qty) || 0;
    const buyPrice = Number(asset.buyPrice) || 0;
    const livePrice = Number(asset.currentPrice) || buyPrice;
    const totalVal = qty * livePrice;
    const totalInvest = qty * buyPrice;
    const pnl = totalVal - totalInvest;
    const pct = totalInvest > 0 ? ((pnl / totalInvest) * 100).toFixed(2) : '0.00';

    const symEl = document.getElementById('det-aset-simbol');
    const liveEl = document.getElementById('det-aset-live');
    const chgEl = document.getElementById('det-aset-live-change');
    const lotEl = document.getElementById('det-aset-lot');
    const totEl = document.getElementById('det-aset-total');
    const avgEl = document.getElementById('det-aset-avg');
    const invEl = document.getElementById('det-aset-invest');
    const retEl = document.getElementById('det-aset-return');
    const divBtn = document.getElementById('btn-det-dividen');
    const sellBtn = document.getElementById('btn-det-jual');
    const buyBtn = document.getElementById('btn-det-beli');

    if (symEl) symEl.textContent = asset.symbol || asset.name;
    setMaskedValue(liveEl, formatCurrency(livePrice, cur), livePrice);
    if (chgEl) {
      chgEl.textContent = `${pnl >= 0 ? '+' : ''}${pct}%`;
      chgEl.className = `text-xs font-bold mt-1 ${
        pnl >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
      }`;
    }
    if (lotEl) lotEl.textContent = `${qty} Unit`;
    setMaskedValue(totEl, formatCurrency(totalVal, cur), totalVal);
    setMaskedValue(avgEl, formatCurrency(buyPrice, cur), buyPrice);
    setMaskedValue(invEl, formatCurrency(totalInvest, cur), totalInvest);
    if (retEl) {
      retEl.textContent = `${pnl >= 0 ? '+' : ''}${formatCurrency(pnl, cur)} (${pct}%)`;
      retEl.className = `text-xs font-bold privacy-mask ${
        pnl >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
      }`;
    }

    if (divBtn) {
      if ((asset.category || '').toLowerCase().includes('saham')) {
        divBtn.classList.remove('hidden');
        divBtn.onclick = () => {
          closeModal('modal-asset-detail');
          const disp = document.getElementById('dividend-asset-simbol-display');
          if (disp) disp.textContent = ` ${asset.symbol || asset.name}`;
          openModal('modal-dividend');
        };
      } else {
        divBtn.classList.add('hidden');
      }
    }

    if (sellBtn) {
      sellBtn.onclick = () => {
        closeModal('modal-asset-detail');
        openSellAssetModal(asset.id);
      };
    }

    if (buyBtn) {
      buyBtn.onclick = () => {
        closeModal('modal-asset-detail');
        const simInput = document.getElementById('form-asset-simbol');
        if (simInput) simInput.value = asset.symbol || '';
        openModal('modal-buy-asset');
      };
    }

    const canvas = document.getElementById('portoChart');
    if (canvas && typeof Chart !== 'undefined') {
      if (assetDetailChartInstance) assetDetailChartInstance.destroy();
      const points = [buyPrice, buyPrice * 0.99, (buyPrice + livePrice) / 2, livePrice * 0.995, livePrice];
      assetDetailChartInstance = new Chart(canvas, {
        type: 'line',
        data: {
          labels: ['T-4', 'T-3', 'T-2', 'T-1', 'Now'],
          datasets: [
            {
              data: points,
              borderColor: pnl >= 0 ? '#10B981' : '#EF4444',
              backgroundColor: pnl >= 0 ? 'rgba(16, 185, 129, 0.14)' : 'rgba(239, 68, 68, 0.14)',
              fill: true,
              tension: 0.35,
              pointRadius: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { x: { display: false }, y: { display: false } }
        }
      });
    }
  }

  function openSellAssetModal(assetId) {
    const asset = (state.assets || []).find((a) => a.id === assetId);
    if (!asset) return;
    const simDisp = document.getElementById('sell-asset-simbol-display');
    const maxDisp = document.getElementById('sell-asset-max-display');
    const idEl = document.getElementById('form-sell-asset-id');
    const simEl = document.getElementById('form-sell-asset-simbol');
    const qtyEl = document.getElementById('form-sell-asset-jumlah');
    const priceEl = document.getElementById('form-sell-asset-harga');

    if (simDisp) simDisp.textContent = asset.symbol || asset.name;
    if (maxDisp) maxDisp.textContent = String(asset.qty || 0);
    if (idEl) idEl.value = asset.id;
    if (simEl) simEl.value = asset.symbol || asset.name;
    if (qtyEl) qtyEl.value = String(asset.qty || 0);
    if (priceEl) {
      priceEl.value = new Intl.NumberFormat('id-ID').format(Math.round(asset.currentPrice || asset.buyPrice || 0));
    }

    openModal('modal-sell-asset');
  }

  function submitSellAsset(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const id = document.getElementById('form-sell-asset-id')?.value;
    const asset = (state.assets || []).find((a) => a.id === id);
    if (!asset) return;

    const sellQty =
      parseFloat(String(document.getElementById('form-sell-asset-jumlah')?.value || '0').replace(',', '.')) || 0;
    const rawPrice = document.getElementById('form-sell-asset-harga')?.value || '0';
    const sellPrice = Number(String(rawPrice).replace(/[^0-9]/g, '')) || 0;
    const rawAdmin = document.getElementById('form-sell-asset-admin')?.value || '0';
    const adminFee = Number(String(rawAdmin).replace(/[^0-9]/g, '')) || 0;
    const targetAccId = document.getElementById('form-sell-asset-account')?.value || getUserAccounts()[0]?.id;

    if (sellQty <= 0 || sellQty > (Number(asset.qty) || 0) || sellPrice <= 0) {
      showToast('Jumlah atau harga jual aset tidak valid', 'warning');
      return;
    }

    const netProceeds = Math.max(0, Math.round(sellQty * sellPrice - adminFee));
    asset.qty = Number(asset.qty) - sellQty;
    if (asset.qty <= 0.00000001) {
      state.assets = state.assets.filter((a) => a.id !== asset.id);
    }

    const acc = findAccountByIdOrName(targetAccId);
    if (acc) acc.balance = (Number(acc.balance) || 0) + netProceeds;

    state.transactions.unshift({
      id: 'TRX-' + Date.now(),
      date: todayISO(),
      type: 'INFLOW',
      category: 'Tabungan & Investasi',
      amount: netProceeds,
      accountId: acc ? acc.id : targetAccId,
      accountName: acc ? acc.name : targetAccId,
      note: `Jual Aset: ${asset.symbol || asset.name} (${sellQty} unit)`
    });

    saveState();
    closeModal('modal-sell-asset');
    renderCurrentPage();
    showToast(`Penjualan ${asset.symbol || asset.name} berhasil`, 'success');

    apiPost({
      action: 'sellAsset',
      email: getSessionEmail(),
      idAset: asset.id,
      simbol: asset.symbol || asset.name,
      jumlahJual: sellQty,
      akunTujuan: acc ? acc.name : '',
      totalDapat: netProceeds
    }).then(() => fetchAllData());
  }

  function openAddSavingsModal(goalId) {
    const goal = (state.goals || []).find((g) => g.id === goalId);
    if (!goal) return;
    currentGoalActionId = goal.id;
    const nameEl = document.getElementById('add-savings-goal-name');
    const amtEl = document.getElementById('form-add-savings-amount');
    if (nameEl) nameEl.textContent = ` ${goal.title || goal.name}`;
    if (amtEl) amtEl.value = '';
    openModal('modal-add-savings');
  }

  function openWithdrawGoalModal(goalId) {
    const goal = (state.goals || []).find((g) => g.id === goalId);
    if (!goal) return;
    currentGoalActionId = goal.id;
    const nameEl = document.getElementById('withdraw-goal-name-display');
    const amtEl = document.getElementById('form-withdraw-amount');
    const savedAmt = Number(goal.saved !== undefined ? goal.saved : goal.current) || 0;
    if (nameEl) nameEl.textContent = ` ${goal.title || goal.name}`;
    if (amtEl) amtEl.value = new Intl.NumberFormat('id-ID').format(savedAmt);
    openModal('modal-withdraw-goal');
  }

  function topupGoal(goalId) {
    openAddSavingsModal(goalId);
  }

  function renderExportPdfModal() {
    const accSel = document.getElementById('export-pdf-account');
    if (accSel) {
      const opts = [`<option value="ALL">Semua Rekening (${state.activeUser})</option>`];
      getUserAccounts().forEach((a) => {
        opts.push(`<option value="${a.id}">${escapeHTML(a.name)}</option>`);
      });
      accSel.innerHTML = opts.join('');
    }

    const yearsSet = new Set([new Date().getFullYear()]);
    state.transactions.forEach((t) => {
      if (t.date && t.date.length >= 4) {
        const y = parseInt(t.date.slice(0, 4), 10);
        if (!isNaN(y)) yearsSet.add(y);
      }
    });

    const yearBox = document.getElementById('export-year-container');
    if (yearBox) {
      yearBox.innerHTML = Array.from(yearsSet)
        .sort((a, b) => b - a)
        .map(
          (y) =>
            `<button type="button" onclick="selectExportYear(${y})" class="px-3.5 py-1.5 rounded-full text-xs font-bold border transition ${
              y === selectedExportYear
                ? 'bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] border-transparent'
                : 'bg-[#FAF8F5] dark:bg-[#161D19] text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-800'
            }">${y}</button>`
        )
        .join('');
    }

    const monthBox = document.getElementById('export-month-container');
    if (monthBox) {
      const monthNames = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ];
      monthBox.innerHTML = monthNames
        .map((mName, idx) => {
          const ym = `${selectedExportYear}-${String(idx + 1).padStart(2, '0')}`;
          const count = state.transactions.filter((t) => t.date && t.date.startsWith(ym)).length;
          return `
            <div onclick="generateStatementPDF('${ym}')" class="cursor-pointer p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-[#161D19] hover:bg-[#EDF5F0] dark:hover:bg-[#1B241F] border border-stone-200/70 dark:border-stone-800 flex items-center justify-between transition">
              <div>
                <p class="text-xs font-extrabold text-stone-900 dark:text-white">${mName} ${selectedExportYear}</p>
                <p class="text-[10px] text-stone-400">${count} transaksi tercatat</p>
              </div>
              <span class="text-[11px] font-bold text-[#0F5132] dark:text-emerald-400">Unduh PDF →</span>
            </div>
          `;
        })
        .join('');
    }
  }

  function selectExportYear(year) {
    selectedExportYear = year;
    renderExportPdfModal();
  }

  /* --------------------------------------------------------------------------
   * 13. RECEIPT SCANNER & PDF STATEMENT EXPORT
   * -------------------------------------------------------------------------- */
  function handleReceiptUpload(event) {
    const file = event?.target?.files?.[0];
    if (!file) return;

    const statusEl = document.getElementById('receipt-scan-status');
    const previewEl = document.getElementById('receipt-preview');
    if (statusEl) statusEl.textContent = 'Mengompresi struk...';

    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        const maxW = 900;
        const scale = Math.min(1, maxW / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.78);

        if (previewEl) {
          previewEl.src = compressedDataUrl;
          previewEl.classList.remove('hidden');
        }

        showToast('Menganalisis struk dengan Gemini AI...', 'info');
        if (statusEl) statusEl.textContent = 'Menganalisis dengan Gemini AI...';

        try {
          const url = getApiUrl();
          if (url) {
            const res = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: JSON.stringify({
                action: 'scanReceipt',
                email: getSessionEmail(),
                imageB64: compressedDataUrl
              })
            });
            if (res.ok) {
              const json = await res.json();
              if (json.status === 'success' && json.data) {
                const aiData = json.data;
                openModal('modal-trx', 'OUTFLOW');
                const amtEl =
                  document.getElementById('form-trx-amount') || document.getElementById('trx-amount');
                if (amtEl && aiData.total) {
                  amtEl.value = new Intl.NumberFormat('id-ID').format(aiData.total);
                }
                const descEl =
                  document.getElementById('form-trx-desc') || document.getElementById('trx-note');
                if (descEl && aiData.merchant) {
                  descEl.value = aiData.merchant;
                }
                const dateEl =
                  document.getElementById('form-trx-date') || document.getElementById('trx-date');
                if (dateEl && aiData.date) {
                  dateEl.value = parseFlexibleDateToISO(aiData.date);
                }
                validateTrxForm();
                showToast(`Struk terbaca: ${aiData.merchant || ''} (Rp ${aiData.total || 0})`, 'success');
                if (statusEl) statusEl.textContent = 'Struk berhasil dianalisis!';
                return;
              }
            }
          }
        } catch (e) {
          console.warn('AI receipt parsing error:', e);
        }

        openModal('modal-trx', 'OUTFLOW');
        if (statusEl) statusEl.textContent = 'Struk siap dilampirkan';
        showToast('Struk siap dicatat', 'info');
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  function generateStatementPDF(ymFilter) {
    const selectedAcc = document.getElementById('export-pdf-account')?.value || 'ALL';
    const list = (ymFilter
      ? state.transactions.filter((t) => t.date && t.date.startsWith(ymFilter))
      : getPeriodFilteredTransactions()
    ).filter((t) => selectedAcc === 'ALL' || t.accountId === selectedAcc);

    if (window.jspdf && window.jspdf.jsPDF) {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.setFillColor(15, 81, 50);
      doc.rect(14, 14, 182, 24, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.text('FINTRACK ENTERPRISE V3.0 — E-STATEMENT', 20, 25);
      doc.setFontSize(9);
      doc.text(`Pemilik: ${state.activeUser} | Periode: ${ymFilter || 'Filter Aktif'} | Dicetak: ${todayISO()}`, 20, 32);

      const rows = list.map((t) => [
        t.date || '-',
        t.category || '-',
        t.note || '-',
        `${t.type === 'INFLOW' ? '+' : '-'}${formatCurrency(t.amount)}`
      ]);

      if (typeof doc.autoTable === 'function') {
        doc.autoTable({
          startY: 44,
          head: [['Tanggal', 'Kategori', 'Keterangan', 'Nominal']],
          body: rows.length > 0 ? rows : [['-', '-', 'Tidak ada transaksi pada periode ini', '-']],
          headStyles: { fillColor: [15, 81, 50] }
        });
      }

      doc.save(`Fintrack_Statement_${state.activeUser}_${ymFilter || todayISO()}.pdf`);
      closeModal('modal-export-pdf');
      showToast('Laporan mutasi PDF diunduh', 'success');
      return;
    }

    const win = window.open('', '_blank', 'width=840,height=900');
    if (!win) {
      showToast('Izinkan pop-up browser untuk mencetak PDF', 'warning');
      return;
    }

    const rowsHtml = list
      .map(
        (t) => `
          <tr>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${escapeHTML(t.date)}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${escapeHTML(t.category)}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${escapeHTML(t.note || '-')}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:700;color:${
              t.type === 'INFLOW' ? '#0F5132' : '#DC2626'
            };">${t.type === 'INFLOW' ? '+' : '-'}${escapeHTML(formatCurrency(t.amount))}</td>
          </tr>`
      )
      .join('');

    win.document.write(`
      <html>
        <head><title>Fintrack Statement - ${escapeHTML(state.activeUser)}</title></head>
        <body style="font-family:Inter,Arial,sans-serif;padding:32px;color:#111827;">
          <div style="background:#0F5132;color:#fff;padding:20px 24px;border-radius:16px;margin-bottom:24px;">
            <h1 style="margin:0;font-size:20px;">FINTRACK V3.0 — E-STATEMENT</h1>
            <p style="margin:4px 0 0;font-size:12px;opacity:0.85;">Account Holder: ${escapeHTML(
              state.activeUser
            )} • Printed: ${todayISO()}</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:12px;">
            <thead>
              <tr style="background:#FAF8F5;text-align:left;">
                <th style="padding:10px 8px;">Tanggal</th>
                <th style="padding:10px 8px;">Kategori</th>
                <th style="padding:10px 8px;">Keterangan</th>
                <th style="padding:10px 8px;text-align:right;">Nominal</th>
              </tr>
            </thead>
            <tbody>${
              rowsHtml || '<tr><td colspan="4" style="padding:16px;text-align:center;">Tidak ada transaksi</td></tr>'
            }</tbody>
          </table>
          <script>window.onload = () => { window.print(); };</script>
        </body>
      </html>
    `);
    win.document.close();
    closeModal('modal-export-pdf');
  }

  /* --------------------------------------------------------------------------
   * 14. CLOUD SYNC (GOOGLE APPS SCRIPT KODE.GS) & JSON BACKUP
   * -------------------------------------------------------------------------- */
  function getApiUrl() {
    return localStorage.getItem(GAS_URL_KEY) || DEFAULT_API_URL;
  }

  function getSessionEmail() {
    let email = (localStorage.getItem(SESSION_EMAIL_KEY) || '').toLowerCase().trim();
    if (!email || !email.includes('@')) {
      email = resolveEmailForUser(state.activeUser);
      localStorage.setItem(SESSION_EMAIL_KEY, email);
    }
    return email;
  }

  function getProp(obj, ...possibleKeys) {
    if (!obj) return undefined;
    const keys = Object.keys(obj);
    for (const pk of possibleKeys) {
      const match = keys.find(
        (k) =>
          k.toString().replace(/[_ ]/g, '').toLowerCase() ===
          pk.toString().replace(/[_ ]/g, '').toLowerCase()
      );
      if (match && obj[match] !== undefined && obj[match] !== null && String(obj[match]).trim() !== '') {
        return obj[match];
      }
    }
    return undefined;
  }

  function extractNumber(val) {
    if (val === undefined || val === null || val === '') return 0;
    if (typeof val === 'number') return isFinite(val) ? val : 0;
    let str = val.toString().replace(/Rp/gi, '').trim();
    if (!str || str.startsWith('#')) return 0;

    // Both dot and comma present: determine which is decimal separator
    if (str.indexOf(',') > -1 && str.indexOf('.') > -1) {
      if (str.lastIndexOf(',') > str.lastIndexOf('.')) {
        // Indonesian format: 1.250.000,50
        str = str.replace(/\./g, '').replace(',', '.');
      } else {
        // US format: 1,250,000.50
        str = str.replace(/,/g, '');
      }
    } else if (str.indexOf(',') > -1) {
      // Only comma present (e.g., "0,007302044" or "5095678,159" in M_Portofolio)
      str = str.replace(',', '.');
    } else if (str.indexOf('.') > -1) {
      // Only dots present (e.g., "151.637" or "1.000.000" in M_Akun Rp format vs decimal float)
      const parts = str.split('.');
      const allThreeGroups = parts.slice(1).every((p) => p.length === 3);
      if (parts.length > 2 || (parts.length === 2 && allThreeGroups)) {
        str = str.replace(/\./g, '');
      }
    }

    str = str.replace(/[^0-9.-]/g, '');
    const parsed = parseFloat(str);
    return isFinite(parsed) ? parsed : 0;
  }

  async function apiPost(payload) {
    const url = getApiUrl();
    if (!url) return false;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const json = await res.json();
        return json.status === 'success';
      }
      return false;
    } catch (err) {
      console.warn('[Fintrack] Background cloud post skipped:', err);
      return false;
    }
  }

  async function fetchAllData() {
    const url = getApiUrl();
    const email = getSessionEmail();
    if (!url) return;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 16000);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'getData', email }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const text = await res.text();
        let json;
        try {
          json = JSON.parse(text);
        } catch (e) {
          console.error('[Fintrack] Response bukan JSON:', text);
          return;
        }

        if (json.status === 'success' && json.data) {
          parseBackendDataIntoState(json.data, email);
          saveState(true);
          renderCurrentPage();
          showToast(`Data ${state.activeUser} tersinkronisasi!`, 'success');
        }
      }
    } catch (err) {
      clearTimeout(timeoutId);
      console.warn('[Fintrack] Mode offline aktif:', err);
    }
  }

  function parseBackendDataIntoState(data, ownerEmail) {
    const resolvedEmail = (ownerEmail || getSessionEmail()).toLowerCase().trim();

    // 1. M_Akun -> state.accounts & state.wallets
    if (Array.isArray(data.M_Akun)) {
      const regularAccounts = [];
      const wallets = [];

      data.M_Akun.forEach((acc, i) => {
        const rawNama = getProp(acc, 'Nama_Akun', 'Nama Akun', 'nama') || 'Akun';
        const nama = String(rawNama).trim();
        const tipe = String(getProp(acc, 'Tipe_Akun', 'Tipe Akun', 'tipe') || 'Bank').trim();
        const atasNama = String(
          getProp(acc, 'Atas_Nama', 'Atas Nama') || USER_PROFILES[state.activeUser]?.fullName || state.activeUser
        ).trim();

        // Read Saldo_Realtime first; if cell is blank, fallback to Saldo_Awal (e.g., Bank BRI, GoPay, OVO, Indra Bank Mandiri)
        const valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime');
        const valAwal = getProp(acc, 'Saldo_Awal', 'Saldo Awal');
        const balance = valReal !== undefined ? extractNumber(valReal) : extractNumber(valAwal);

        const rawRek = getProp(acc, 'Nomor_Rekening', 'No Rekening', 'Rekening');
        const noRek = rawRek !== undefined ? String(rawRek).trim() : '';
        const rawId = getProp(acc, 'ID_Akun', 'ID Akun', 'id');
        const id = rawId ? String(rawId).trim() : `acc_${i}_${nama.toLowerCase().replace(/\s+/g, '_')}`;

        const lower = nama.toLowerCase();
        const theme = detectCardTheme(nama, tipe);

        if (
          tipe === 'Wallet Investasi' ||
          lower.includes('rdn') ||
          lower.includes('sekuritas') ||
          lower.includes('wallet')
        ) {
          wallets.push({
            id,
            name: nama,
            platform: nama,
            balance
          });
        } else {
          regularAccounts.push({
            id,
            name: nama,
            type: tipe.toUpperCase().includes('WALLET')
              ? 'E-WALLET'
              : tipe.toUpperCase().includes('CASH') || tipe.toUpperCase().includes('TUNAI')
              ? 'CASH'
              : 'BANK',
            holder: atasNama,
            number: noRek,
            balance,
            theme,
            owner: state.activeUser,
            ownerEmail: resolvedEmail
          });
        }
      });

      state.accounts = regularAccounts;
      state.wallets = wallets;
    }

    // 2. T_Transaksi_Detail -> Map by ID_Transaksi
    const detailByTrxId = {};
    if (Array.isArray(data.T_Transaksi_Detail)) {
      data.T_Transaksi_Detail.forEach((det) => {
        const trxKey = String(getProp(det, 'ID_Transaksi', 'ID_Trx', 'id') || '').trim();
        if (!trxKey) return;
        if (!detailByTrxId[trxKey]) detailByTrxId[trxKey] = [];
        detailByTrxId[trxKey].push({
          name: String(getProp(det, 'Nama_Item', 'Nama', 'item') || 'Item').trim(),
          qty: Number(getProp(det, 'Qty', 'qty')) || 1,
          price: extractNumber(getProp(det, 'Total_Harga', 'Harga', 'price'))
        });
      });
    }

    // 3. T_Transaksi -> state.transactions (handles both DD/MM/YYYY and YYYY-MM-DD)
    if (Array.isArray(data.T_Transaksi)) {
      state.transactions = data.T_Transaksi.map((t, i) => {
        const rawTipe = String(getProp(t, 'Tipe', 'tipe') || 'OUTFLOW').toUpperCase().trim();
        const type =
          rawTipe.includes('IN') || rawTipe === 'PEMASUKAN'
            ? 'INFLOW'
            : rawTipe.includes('TF') || rawTipe === 'TRANSFER'
            ? 'TRANSFER'
            : rawTipe === 'NEUTRAL'
            ? 'NEUTRAL'
            : 'OUTFLOW';

        const rawDate = getProp(t, 'Tanggal', 'tanggal');
        const dateStr = parseFlexibleDateToISO(rawDate);
        const timeStr = extractTimeFromRaw(rawDate);

        const rawAmt = getProp(t, 'Jumlah', 'jumlah', 'Nominal', 'nominal');
        const amount = extractNumber(rawAmt);
        const category = String(getProp(t, 'Kategori', 'kategori') || 'Lainnya').trim();
        const accountName = String(getProp(t, 'Akun', 'Nama_Akun', 'akun') || '').trim();
        const matchingAcc = findAccountByIdOrName(accountName);
        const accountId = matchingAcc ? matchingAcc.id : accountName;
        const note = String(getProp(t, 'Keterangan', 'keterangan') || category).trim();
        const idTrx = String(getProp(t, 'ID_Trx', 'ID_Transaksi', 'id') || `TRX-${i}`).trim();
        const refId = String(getProp(t, 'Ref_ID', 'RefID') || '').trim();
        const items = detailByTrxId[idTrx] || (refId ? detailByTrxId[refId] : []) || [];

        return {
          id: idTrx,
          date: dateStr,
          time: timeStr,
          type,
          category,
          amount,
          accountId,
          accountName,
          note,
          refId,
          items
        };
      });
    }

    // 4. M_Recurring -> state.recurring (matches ID_Rec, Tgl_Tagihan, Akun_Sumber)
    if (Array.isArray(data.M_Recurring)) {
      state.recurring = data.M_Recurring.map((r, i) => ({
        id: String(getProp(r, 'ID_Rec', 'ID_Recurring', 'ID', 'id') || `REC-${i}`).trim(),
        name: String(getProp(r, 'Nama', 'nama', 'Nama_Langganan') || 'Langganan').trim(),
        amount: extractNumber(getProp(r, 'Nominal', 'nominal', 'Jumlah')),
        cycle: String(getProp(r, 'Frekuensi', 'frekuensi') || 'Bulanan').trim(),
        dueDate: getProp(r, 'Tgl_Tagihan', 'Tanggal', 'tgl_tagihan') || 1,
        accountId: String(getProp(r, 'Akun_Sumber', 'Akun', 'akun', 'Rekening') || '').trim(),
        category: 'Tagihan',
        active: true
      }));
    }

    // 5. M_Debt -> state.debts (matches ID_Debt, Total_Awal, Sisa, Status COMPLETED/INACTIVE/ACTIVE)
    if (Array.isArray(data.M_Debt)) {
      state.debts = data.M_Debt.map((d, i) => {
        const rawTipe = String(getProp(d, 'Tipe', 'tipe') || 'UTANG').toLowerCase().trim();
        const type = rawTipe.includes('piutang') || rawTipe === 'receivable' ? 'RECEIVABLE' : 'DEBT';
        const person = String(getProp(d, 'Kontak', 'kontak', 'Nama', 'nama', 'Pihak') || 'Pihak Lain').trim();
        const awal = extractNumber(getProp(d, 'Total_Awal', 'Nominal_Awal', 'Nominal Awal', 'Nominal'));
        const sisa = extractNumber(getProp(d, 'Sisa', 'sisa'));
        const amount = awal || sisa || 0;
        const paid = awal > sisa ? awal - sisa : 0;
        const dueDate = getProp(d, 'Jatuh_Tempo', 'Jatuh Tempo', 'jatuhTempo') || '';
        const note = String(getProp(d, 'Keterangan', 'keterangan') || '').trim();
        const status = String(getProp(d, 'Status', 'status') || 'ACTIVE').toUpperCase().trim();
        const settled = status === 'COMPLETED' || status === 'INACTIVE' || (sisa === 0 && awal > 0);

        return {
          id: String(getProp(d, 'ID_Debt', 'ID', 'id') || `DEBT-${i}`).trim(),
          type,
          person,
          amount,
          paid,
          dueDate,
          note,
          status,
          settled
        };
      });
    }

    // 6. M_Goals -> state.goals (matches ID_Goal, Nama_Goal, Target, Terkumpul, Deadline, Status)
    if (Array.isArray(data.M_Goals)) {
      state.goals = data.M_Goals.filter(
        (g) => String(getProp(g, 'Status') || 'ACTIVE').toUpperCase().trim() !== 'COMPLETED'
      ).map((g, i) => {
        const goalTitle = String(getProp(g, 'Nama_Goal', 'Nama Goal', 'Nama', 'nama') || 'Target').trim();
        const target = extractNumber(getProp(g, 'Target', 'Target_Nominal', 'Target Nominal', 'target'));
        const saved = extractNumber(getProp(g, 'Terkumpul', 'terkumpul', 'Nominal'));
        const rawDeadline = getProp(g, 'Deadline', 'Tenggat_Waktu', 'Tenggat Waktu', 'Tenggat');
        const deadline = rawDeadline ? parseFlexibleDateToISO(rawDeadline) : '';

        return {
          id: String(getProp(g, 'ID_Goal', 'ID', 'id') || `GOAL-${i}`).trim(),
          title: goalTitle,
          target,
          saved,
          deadline
        };
      });
    }

    // 7. M_Portofolio -> state.assets (matches ID_Aset, Simbol, Jumlah, Harga_Beli, Harga_Saat_Ini, Jenis_Aset)
    if (Array.isArray(data.M_Portofolio)) {
      state.assets = data.M_Portofolio.map((p, i) => {
        const symbol = String(getProp(p, 'Simbol', 'simbol', 'Nama_Aset') || 'ASET').trim();
        const name = String(getProp(p, 'Nama_Aset', 'Nama Aset', 'Simbol') || symbol).trim();
        const category = String(getProp(p, 'Jenis_Aset', 'Jenis Aset', 'Jenis') || 'Saham Indonesia').trim();
        const qty = extractNumber(getProp(p, 'Jumlah', 'Unit', 'lot'));
        const buyPrice = extractNumber(getProp(p, 'Harga_Beli', 'Harga Beli', 'Harga'));
        const liveVal = extractNumber(getProp(p, 'Harga_Saat_Ini', 'Harga_Realtime', 'Harga Realtime'));
        const currentPrice = liveVal > 0 ? liveVal : buyPrice;
        const walletId = String(getProp(p, 'Wallet', 'wallet', 'Akun') || state.wallets[0]?.id || '').trim();

        return {
          id: String(getProp(p, 'ID_Aset', 'ID Aset', 'id') || `AST-${i}`).trim(),
          symbol,
          name: name === symbol ? symbol : `${name} (${symbol})`,
          category,
          qty,
          buyPrice,
          currentPrice,
          walletId
        };
      });
    }
  }

  function syncWithCloud() {
    fetchAllData();
  }

  function saveGasUrl() {
    const emailVal = document.getElementById('settings-email-input')?.value?.trim().toLowerCase() || '';
    if (emailVal) {
      localStorage.setItem(SESSION_EMAIL_KEY, emailVal);
      state.activeUser = normalizeUserLabel(emailVal);
      localStorage.setItem(ACTIVE_USER_KEY, state.activeUser);
    }
    const val = document.getElementById('gas-url-input')?.value?.trim() || '';
    if (val) {
      localStorage.setItem(GAS_URL_KEY, val);
      showToast('Pengaturan Cloud disimpan & menyinkronkan...', 'success');
    } else {
      localStorage.removeItem(GAS_URL_KEY);
      showToast('Menggunakan URL deployment default & menyinkronkan...', 'info');
    }
    fetchAllData();
  }

  function exportBackupJSON() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `fintrack-v3-backup-${state.activeUser.toLowerCase().replace(/\s+/g, '-')}-${todayISO()}.json`;
    a.click();
    showToast('File backup JSON diunduh', 'success');
  }

  let ptrStartY = 0,
    ptrCurrentY = 0,
    isPtrPulling = false,
    isPtrRefreshing = false;

  function initPTR() {
    const ptrEl = document.getElementById('ptr-indicator');
    if (!ptrEl) return;
    const coin = ptrEl.querySelector('.coin-spinner');

    document.addEventListener(
      'touchstart',
      (e) => {
        if (window.scrollY <= 0 && !isPtrRefreshing) {
          ptrStartY = e.touches[0].clientY;
          isPtrPulling = true;
          ptrEl.style.transition = 'none';
        }
      },
      { passive: true }
    );

    document.addEventListener(
      'touchmove',
      (e) => {
        if (!isPtrPulling || isPtrRefreshing) return;
        ptrCurrentY = e.touches[0].clientY;
        const pullDist = ptrCurrentY - ptrStartY;
        if (pullDist > 0 && window.scrollY <= 0) {
          const moveY = Math.min(pullDist * 0.4, 120);
          ptrEl.style.transform = `translateY(${moveY - 80}px)`;
          if (coin) {
            coin.style.animation = 'none';
            coin.style.transform = `rotateY(${pullDist * 3}deg)`;
          }
        } else if (pullDist < 0) {
          isPtrPulling = false;
        }
      },
      { passive: true }
    );

    document.addEventListener('touchend', async () => {
      if (!isPtrPulling || isPtrRefreshing) return;
      isPtrPulling = false;
      const pullDist = ptrCurrentY - ptrStartY;
      ptrEl.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      if (pullDist > 90 && window.scrollY <= 0) {
        isPtrRefreshing = true;
        ptrEl.style.transform = 'translateY(24px)';
        if (coin) coin.style.animation = 'flipCoin 1s infinite linear';
        await fetchAllData();
        ptrEl.style.transform = 'translateY(-80px)';
        setTimeout(() => {
          isPtrRefreshing = false;
        }, 300);
      } else {
        ptrEl.style.transform = 'translateY(-80px)';
      }
      ptrStartY = 0;
      ptrCurrentY = 0;
    });
  }

  /* --------------------------------------------------------------------------
   * 15. SECURITY SANITIZER, FORM ACTIONS & INITIALIZATION
   * -------------------------------------------------------------------------- */
  function escapeHTML(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function closeLoader() {
    const loader = document.getElementById('loading-overlay');
    if (loader) {
      loader.classList.remove('opacity-100');
      loader.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        loader.classList.add('hidden');
        loader.style.display = 'none';
      }, 350);
    }
    const splash = document.getElementById('fintrack-cold-splash');
    if (splash && sessionStorage.getItem('fintrack_cold_splash_shown')) {
      splash.style.display = 'none';
    }
  }

  function formatRupiahInput(inputElement) {
    if (!inputElement) return;
    const num = inputElement.value.replace(/[^0-9]/g, '');
    inputElement.value = num ? new Intl.NumberFormat('id-ID').format(num) : '';
    validateTrxForm();
  }

  function validateTrxForm() {
    const amountEl = document.getElementById('form-trx-amount') || document.getElementById('trx-amount');
    const btn = document.getElementById('form-trx-submit-btn');
    if (!btn) return;
    const val = amountEl ? Number(String(amountEl.value).replace(/[^0-9]/g, '')) : 0;
    if (val > 0) {
      btn.disabled = false;
      btn.classList.remove(
        'bg-stone-300',
        'dark:bg-stone-800',
        'text-stone-400',
        'dark:text-stone-500',
        'cursor-not-allowed',
        'shadow-none'
      );
      btn.classList.add(
        'bg-[#0F5132]',
        'hover:bg-[#0B3F27]',
        'dark:bg-emerald-500',
        'dark:hover:bg-emerald-400',
        'text-white',
        'dark:text-[#070908]',
        'shadow-lg',
        'shadow-emerald-950/20'
      );
    } else {
      btn.disabled = true;
      btn.classList.add(
        'bg-stone-300',
        'dark:bg-stone-800',
        'text-stone-400',
        'dark:text-stone-500',
        'cursor-not-allowed',
        'shadow-none'
      );
      btn.classList.remove(
        'bg-[#0F5132]',
        'hover:bg-[#0B3F27]',
        'dark:bg-emerald-500',
        'dark:hover:bg-emerald-400',
        'text-white',
        'dark:text-[#070908]',
        'shadow-lg',
        'shadow-emerald-950/20'
      );
    }
  }

  function quickAddAmount(val) {
    const el = document.getElementById('form-trx-amount') || document.getElementById('trx-amount');
    if (!el) return;
    const current = Number(String(el.value).replace(/[^0-9]/g, '')) || 0;
    el.value = new Intl.NumberFormat('id-ID').format(current + val);
    validateTrxForm();
  }

  async function handleLogin() {
    const emailInput = document.getElementById('login-email');
    const passInput = document.getElementById('login-password');
    const rawEmail = (emailInput?.value || '').trim().toLowerCase();
    const password = passInput?.value || '';

    if (!rawEmail) {
      showToast('Masukkan alamat email terdaftar', 'warning');
      return;
    }

    const email = rawEmail.includes('@') ? rawEmail : resolveEmailForUser(rawEmail);

    const btn = document.getElementById('btn-login');
    const origText = btn ? btn.textContent : '';
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Memverifikasi...';
    }

    try {
      const url = getApiUrl();
      if (url) {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'login', email, password })
        });
        if (res.ok) {
          const json = await res.json();
          if (json.status === 'success') {
            const label = normalizeUserLabel(json.name || email);
            state.activeUser = label;
            localStorage.setItem(ACTIVE_USER_KEY, label);
            localStorage.setItem(SESSION_EMAIL_KEY, (json.email || email).toLowerCase().trim());
            const loginPage = document.getElementById('login-page');
            if (loginPage) loginPage.classList.add('hidden-page');
            const appWrapper = document.getElementById('app-wrapper');
            if (appWrapper) appWrapper.classList.remove('hidden-page');
            closeLoader();
            renderCurrentPage();
            showToast(`Selamat datang, ${label}!`, 'success');
            await fetchAllData();
            if (btn) {
              btn.disabled = false;
              btn.textContent = origText;
            }
            return;
          } else if (json.message) {
            showToast(json.message, 'warning');
            if (btn) {
              btn.disabled = false;
              btn.textContent = origText;
            }
            return;
          }
        }
      }
    } catch (err) {
      console.warn('Login online failed, switching to offline fallback:', err);
    }

    const label = normalizeUserLabel(email);
    state.activeUser = label;
    localStorage.setItem(ACTIVE_USER_KEY, label);
    localStorage.setItem(SESSION_EMAIL_KEY, email);
    const loginPage = document.getElementById('login-page');
    if (loginPage) loginPage.classList.add('hidden-page');
    const appWrapper = document.getElementById('app-wrapper');
    if (appWrapper) appWrapper.classList.remove('hidden-page');
    closeLoader();
    renderCurrentPage();
    showToast(`Selamat datang, ${label}!`, 'info');
    fetchAllData();
    if (btn) {
      btn.disabled = false;
      btn.textContent = origText;
    }
  }

  function handleLogout() {
    localStorage.removeItem(ACTIVE_USER_KEY);
    localStorage.removeItem(SESSION_EMAIL_KEY);
    const loginPage = document.getElementById('login-page');
    if (loginPage) loginPage.classList.remove('hidden-page');
    const appWrapper = document.getElementById('app-wrapper');
    if (appWrapper) appWrapper.classList.add('hidden-page');
    showToast('Berhasil logout', 'info');
  }

  function submitAccountForm(e) {
    saveAccount(e);
  }

  function deleteAccountAction() {
    const id = document.getElementById('form-acc-id')?.value || document.getElementById('acc-id')?.value;
    if (!id) return;
    const acc = state.accounts.find((a) => a.id === id);
    if (!acc) return;
    if (confirm(`Yakin ingin menghapus rekening "${acc.name}"?`)) {
      state.accounts = state.accounts.filter((a) => a.id !== id);
      saveState();
      closeModal('modal-manage-account');
      closeModal('modal-account');
      renderCurrentPage();
      showToast('Akun berhasil dihapus', 'info');

      apiPost({
        action: 'deleteAccount',
        email: getSessionEmail(),
        idAkun: id,
        nama: acc.name
      }).then(() => fetchAllData());
    }
  }

  function openEditAccountFromDetail() {
    const id = currentDetailAccountId || getUserAccounts()[activeDeckIndex]?.id;
    closeModal('modal-account-detail');
    if (id) openAccountModal(id);
  }

  function copyAccountInfo() {
    const num = document.getElementById('det-acc-number')?.textContent || '';
    if (num && navigator.clipboard) {
      navigator.clipboard.writeText(num.replace(/[^0-9]/g, '') || num);
      showToast('Nomor rekening disalin!', 'success');
    }
  }

  function submitAddWallet(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const name = document.getElementById('form-wallet-name')?.value?.trim();
    const rawBal = document.getElementById('form-wallet-bal')?.value || '0';
    const balance = Number(String(rawBal).replace(/[^0-9]/g, '')) || 0;
    if (!name) {
      showToast('Nama dompet wajib diisi', 'warning');
      return;
    }
    state.wallets = state.wallets || [];
    state.wallets.push({
      id: 'ACC-' + Date.now(),
      name,
      platform: name,
      balance
    });
    saveState();
    closeModal('modal-add-wallet');
    renderCurrentPage();
    showToast('Dompet investasi berhasil ditambahkan', 'success');

    apiPost({
      action: 'addWallet',
      email: getSessionEmail(),
      nama: name,
      saldo: balance
    }).then(() => fetchAllData());
  }

  function submitBuyAsset(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const symbol =
      (
        document.getElementById('form-asset-simbol')?.value ||
        document.getElementById('form-buy-asset-simbol')?.value ||
        ''
      )
        .trim()
        .toUpperCase() || 'ASET';
    const type =
      document.getElementById('form-asset-jenis')?.value ||
      document.getElementById('form-buy-asset-tipe')?.value ||
      'Saham Indonesia';
    const rawPrice =
      document.getElementById('form-asset-harga')?.value ||
      document.getElementById('form-buy-asset-harga')?.value ||
      '0';
    const price = extractNumber(rawPrice);
    const units = extractNumber(
      document.getElementById('form-asset-jumlah')?.value ||
        document.getElementById('form-buy-asset-lot')?.value ||
        '0'
    );
    const rawAdmin = document.getElementById('form-buy-asset-admin')?.value || '0';
    const adminFee = Number(String(rawAdmin).replace(/[^0-9]/g, '')) || 0;
    const sourceId =
      document.getElementById('form-asset-account')?.value ||
      document.getElementById('form-buy-asset-wallet')?.value ||
      state.wallets?.[0]?.id ||
      getUserAccounts()[0]?.id;

    if (price <= 0 || units <= 0) {
      showToast('Harga dan unit aset tidak valid', 'warning');
      return;
    }

    const totalCost = Math.round(price * units + adminFee);
    const walletObj = (state.wallets || []).find((w) => w.id === sourceId);
    const accObj = findAccountByIdOrName(sourceId);
    if (walletObj) walletObj.balance = (Number(walletObj.balance) || 0) - totalCost;
    else if (accObj) accObj.balance = (Number(accObj.balance) || 0) - totalCost;

    state.assets = state.assets || [];
    state.assets.push({
      id: 'AST-' + Date.now(),
      symbol,
      name: symbol,
      category: type,
      qty: units,
      buyPrice: price,
      currentPrice: price,
      walletId: sourceId
    });

    const fundingName = walletObj ? walletObj.name : accObj ? accObj.name : '';
    state.transactions.unshift({
      id: 'TRX-' + Date.now(),
      date: todayISO(),
      type: 'OUTFLOW',
      category: 'Tabungan & Investasi',
      amount: totalCost,
      accountId: sourceId,
      accountName: fundingName,
      note: `Beli Aset: ${symbol} (${units} unit)`
    });

    saveState();
    closeModal('modal-buy-asset');
    renderCurrentPage();
    showToast(`Aset ${symbol} berhasil dicatat`, 'success');

    apiPost({
      action: 'buyAsset',
      email: getSessionEmail(),
      simbol: symbol,
      jumlah: units,
      harga: price,
      jenis: type,
      mataUang: 'IDR',
      totalHarga: totalCost,
      akun: fundingName
    }).then(() => fetchAllData());
  }

  function submitGoal(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const title =
      document.getElementById('form-goal-name')?.value?.trim() ||
      document.getElementById('goal-title')?.value?.trim();
    const rawTarget =
      document.getElementById('form-goal-amount')?.value ||
      document.getElementById('goal-target')?.value ||
      '0';
    const target = Number(String(rawTarget).replace(/[^0-9]/g, '')) || 0;
    const deadline =
      document.getElementById('form-goal-deadline')?.value ||
      document.getElementById('goal-deadline')?.value ||
      offsetDateISO(90);

    if (!title || target <= 0) {
      showToast('Nama target dan nominal target harus diisi', 'warning');
      return;
    }

    state.goals = state.goals || [];
    state.goals.push({
      id: 'GOAL-' + Date.now(),
      title,
      target,
      saved: 0,
      deadline
    });

    saveState();
    closeModal('modal-goal');
    renderCurrentPage();
    showToast('Target tabungan berhasil dibuat', 'success');

    apiPost({
      action: 'addGoal',
      email: getSessionEmail(),
      nama: title,
      target,
      saved: 0,
      deadline
    }).then(() => fetchAllData());
  }

  function submitPayDebt(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const debtId = document.getElementById('form-pay-debt-id')?.value;
    const rawAmt = document.getElementById('form-pay-debt-amount')?.value || '0';
    const amt = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
    const accId = document.getElementById('form-pay-debt-account')?.value;

    if (debtId && amt > 0) {
      settleDebt(debtId, amt, accId);
    }
    closeModal('modal-pay-debt');
  }

  function submitReceiveDividend(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const rawAmt = document.getElementById('form-dividend-amount')?.value || '0';
    const amount = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
    const accId = document.getElementById('form-dividend-account')?.value || getUserAccounts()[0]?.id;
    const sym = document.getElementById('dividend-asset-simbol-display')?.textContent?.trim() || 'Saham';

    if (amount <= 0) {
      showToast('Nominal dividen tidak valid', 'warning');
      return;
    }
    const acc = findAccountByIdOrName(accId);
    if (acc) acc.balance = (Number(acc.balance) || 0) + amount;
    state.transactions.unshift({
      id: 'TRX-' + Date.now(),
      date: todayISO(),
      type: 'INFLOW',
      category: 'Dividen & Yield',
      amount,
      accountId: acc ? acc.id : accId,
      accountName: acc ? acc.name : accId,
      note: `Penerimaan Dividen ${sym}`
    });
    saveState();
    closeModal('modal-dividend');
    renderCurrentPage();
    showToast('Dividen berhasil dicairkan', 'success');

    apiPost({
      action: 'addTransaction',
      email: getSessionEmail(),
      tanggal: `${todayISO()} 12:00`,
      tipe: 'INFLOW',
      akun: acc ? acc.name : '',
      kategori: 'Tabungan & Investasi',
      jumlah: amount,
      keterangan: `Penerimaan Dividen ${sym}`
    }).then(() => fetchAllData());
  }

  function deleteRecurringAction(id) {
    const targetId = id || document.getElementById('det-rec-id')?.value;
    if (!targetId) return;
    if (confirm('Hapus tagihan langganan ini?')) {
      deleteRecurring(targetId);
      closeModal('modal-rec-detail');
    }
  }

  function deleteWalletAction(id) {
    const targetId = id || document.getElementById('btn-del-wallet-submit')?.dataset.walletId;
    if (!targetId) return;
    const wal = (state.wallets || []).find((w) => w.id === targetId);
    if (!wal) return;
    if (confirm(`Hapus dompet investasi "${wal.name}"?`)) {
      deleteWallet(targetId);
      closeModal('modal-wallet-detail');
    }
  }

  function payRecurringNowAction(id) {
    const targetId = id || document.getElementById('det-rec-id')?.value;
    if (!targetId) return;
    payRecurringNow(targetId);
    closeModal('modal-rec-detail');
  }

  function processGoalAction(action, isDone) {
    const goalId = currentGoalActionId || document.getElementById('form-goal-action-id')?.value;
    if (!goalId) return;
    const goal = (state.goals || []).find((g) => g.id === goalId);
    if (!goal) return;

    const goalTitle = goal.title || goal.name || 'Target';
    const currentSaved = Number(goal.saved !== undefined ? goal.saved : goal.current) || 0;
    let nominalVal = 0;
    let selectedAcc = getUserAccounts()[0];

    if (action === 'withdraw') {
      const rawAmt = document.getElementById('form-withdraw-amount')?.value || '0';
      const amt = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
      const accId = document.getElementById('form-withdraw-account')?.value;
      if (accId) selectedAcc = findAccountByIdOrName(accId) || selectedAcc;

      nominalVal = amt;
      if (selectedAcc && amt > 0) {
        selectedAcc.balance = (Number(selectedAcc.balance) || 0) + amt;
      }

      if (isDone) {
        state.goals = state.goals.filter((g) => g.id !== goalId);
        showToast('Target selesai dicapai!', 'success');
      } else if (amt > 0) {
        goal.saved = Math.max(0, currentSaved - amt);
        showToast('Penarikan dana target berhasil', 'info');
      }

      if (amt > 0) {
        state.transactions.unshift({
          id: 'TRX-' + Date.now(),
          date: todayISO(),
          type: 'INFLOW',
          category: 'Tabungan & Investasi',
          amount: amt,
          accountId: selectedAcc ? selectedAcc.id : '',
          accountName: selectedAcc ? selectedAcc.name : '',
          note: `Pencairan Target: ${goalTitle}`
        });
      }
      closeModal('modal-withdraw-goal');
    } else if (action === 'add') {
      const rawAmt = document.getElementById('form-add-savings-amount')?.value || '0';
      const amt = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
      const accId = document.getElementById('form-add-savings-account')?.value;
      if (accId) selectedAcc = findAccountByIdOrName(accId) || selectedAcc;

      nominalVal = amt;
      if (amt > 0) {
        goal.saved = currentSaved + amt;
        if (selectedAcc) {
          selectedAcc.balance = (Number(selectedAcc.balance) || 0) - amt;
        }
        state.transactions.unshift({
          id: 'TRX-' + Date.now(),
          date: todayISO(),
          type: 'OUTFLOW',
          category: 'Tabungan & Investasi',
          amount: amt,
          accountId: selectedAcc ? selectedAcc.id : '',
          accountName: selectedAcc ? selectedAcc.name : '',
          note: `Nabung Target: ${goalTitle}`
        });
        showToast('Tabungan target bertambah', 'success');
      }
      closeModal('modal-add-savings');
    }

    saveState();
    renderCurrentPage();

    if (nominalVal > 0 || isDone) {
      apiPost({
        action: 'manageGoalFunds',
        email: getSessionEmail(),
        idGoal: goal.id,
        namaGoal: goalTitle,
        tipeAksi: action,
        nominal: nominalVal,
        akun: selectedAcc ? selectedAcc.name : '',
        isAchieved: Boolean(isDone)
      }).then(() => fetchAllData());
    }
  }

  let isAppInitialized = false;
  async function initApp() {
    if (isAppInitialized) return;
    isAppInitialized = true;

    initTheme();
    applyTranslations();

    const appWrapper = document.getElementById('app-wrapper');
    if (appWrapper) appWrapper.classList.remove('hidden-page');
    const loginPage = document.getElementById('login-page');
    if (loginPage) loginPage.classList.add('hidden-page');

    navigateTo(activePage || 'dashboard');
    initPTR();

    try {
      await fetchAllData();
    } catch (e) {
      console.warn('Initial cloud sync notice:', e);
    } finally {
      setTimeout(closeLoader, 250);
    }
  }

  // Expose global handlers synchronously for inline HTML attributes
  window.initApp = initApp;
  window.closeLoader = closeLoader;
  window.navigateTo = navigateTo;
  window.showPage = navigateTo;
  window.switchPage = navigateTo;
  window.formatRupiahInput = formatRupiahInput;
  window.validateTrxForm = validateTrxForm;
  window.quickAddAmount = quickAddAmount;
  window.handleLogin = handleLogin;
  window.handleLogout = handleLogout;
  window.toggleTheme = toggleTheme;
  window.toggleLanguage = toggleLanguage;
  window.setLanguage = setLanguage;
  window.setCurrency = setCurrency;
  window.togglePrivacy = togglePrivacy;
  window.dismissDueBanner = dismissDueBanner;
  window.slideAccountDeck = slideAccountDeck;
  window.selectAccountCard = selectAccountCard;
  window.openAccountDetail = openAccountDetail;
  window.openAccountModal = openAccountModal;
  window.saveAccount = saveAccount;
  window.submitAccountForm = submitAccountForm;
  window.deleteAccountAction = deleteAccountAction;
  window.openEditAccountFromDetail = openEditAccountFromDetail;
  window.copyAccountInfo = copyAccountInfo;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.closeAllModals = closeAllModals;
  window.openTransactionDetail = openTransactionDetail;
  window.toggleAdvanceMode = toggleAdvanceMode;
  window.saveTransaction = saveTransaction;
  window.submitTransaction = saveTransaction;
  window.deleteTransaction = deleteTransaction;
  window.saveTransfer = saveTransfer;
  window.submitTransfer = saveTransfer;
  window.openRecurringDetail = openRecurringDetail;
  window.saveRecurring = saveRecurring;
  window.submitRecurring = saveRecurring;
  window.payRecurringNow = payRecurringNow;
  window.payRecurringNowAction = payRecurringNowAction;
  window.deleteRecurring = deleteRecurring;
  window.deleteRecurringAction = deleteRecurringAction;
  window.saveDebt = saveDebt;
  window.submitDebt = saveDebt;
  window.openPayDebtModal = openPayDebtModal;
  window.settleDebt = settleDebt;
  window.submitPayDebt = submitPayDebt;
  window.toggleDebtHistoryTab = toggleDebtHistoryTab;
  window.openWalletDetail = openWalletDetail;
  window.submitAddWallet = submitAddWallet;
  window.deleteWallet = deleteWallet;
  window.deleteWalletAction = deleteWalletAction;
  window.openAssetDetail = openAssetDetail;
  window.setCurrencyFilter = setCurrencyFilter;
  window.setChartFilter = setChartFilter;
  window.openSellAssetModal = openSellAssetModal;
  window.submitSellAsset = submitSellAsset;
  window.submitBuyAsset = submitBuyAsset;
  window.submitReceiveDividend = submitReceiveDividend;
  window.submitGoal = submitGoal;
  window.openAddSavingsModal = openAddSavingsModal;
  window.openWithdrawGoalModal = openWithdrawGoalModal;
  window.topupGoal = topupGoal;
  window.processGoalAction = processGoalAction;
  window.changeCalMonth = changeCalMonth;
  window.selectCalendarDate = selectCalendarDate;
  window.setHistoryFilter = setHistoryFilter;
  window.setHistoryType = setHistoryType;
  window.triggerHistoryRender = triggerHistoryRender;
  window.triggerHistoryFilterUpdate = triggerHistoryFilterUpdate;
  window.clearHistorySearch = clearHistorySearch;
  window.resetHistoryFilters = resetHistoryFilters;
  window.handleReceiptUpload = handleReceiptUpload;
  window.processReceiptImage = handleReceiptUpload;
  window.selectExportYear = selectExportYear;
  window.generateStatementPDF = generateStatementPDF;
  window.exportPDFStatement = generateStatementPDF;
  window.syncWithCloud = syncWithCloud;
  window.saveGasUrl = saveGasUrl;
  window.exportBackupJSON = exportBackupJSON;
  window.switchUser = switchUser;
  window.showToast = showToast;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();