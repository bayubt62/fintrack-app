/**
 * ============================================================================
 * FINTRACK V3.0 FUSION — CORE APPLICATION ENGINE (js/app.js)
 * Theme: Warm Cream (#FAF8F5) / Deep Forest Emerald (#0F5132) / Pitch Obsidian (#070908)
 * Features:
 * - 3D Stacked Sliding Account Cards Deck (Touch Swipe, Click-to-Front, Keyboard & Dots)
 * - Multi-Page SPA Router (dashboard, calendar, portfolio, history, settings)
 * - Offline-First State Engine + Google Apps Script (GAS) Cloud Sync
 * - Multi-User Profile Support (Bayu & Dedek Indra) + Multi-Currency Forex Formatter
 * - Live Portfolio Valuation (Harga_Saat_Ini + USD/IDR Forex) & Same-Symbol Merging
 * - Chart.js Wealth Distribution & Category Analytics (Emerald & Obsidian Palette)
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. GLOBAL CONFIGURATION & STORAGE KEYS
   * -------------------------------------------------------------------------- */
  const STORAGE_KEY = 'fintrack_v3_state';
  const THEME_KEY = 'fintrack_theme';
  const LANG_KEY = 'fintrack_lang';
  const CURRENCY_KEY = 'fintrack_currency';
  const PRIVACY_KEY = 'fintrack_privacy';
  const GAS_URL_KEY = 'fintrack_gas_url';
  const ACTIVE_USER_KEY = 'fintrack_active_user';

  const DEFAULT_API_URL =
    'https://script.google.com/macros/s/AKfycbz9a9kYr2cwtxxHZBewNNMdvE-43HPX1Vx6H7uoct8yFaluTj-vKzaQp1ehD21fTehNlg/exec';

  const CURRENCY_CONFIG = {
    IDR: { symbol: 'Rp', locale: 'id-ID', rate: 1, decimals: 0 },
    USD: { symbol: '$', locale: 'en-US', rate: 0.0000615, decimals: 2 },
    SGD: { symbol: 'S$', locale: 'en-SG', rate: 0.000083, decimals: 2 },
    EUR: { symbol: '€', locale: 'de-DE', rate: 0.000057, decimals: 2 },
    JPY: { symbol: '¥', locale: 'ja-JP', rate: 0.0095, decimals: 0 },
    MYR: { symbol: 'RM', locale: 'ms-MY', rate: 0.00027, decimals: 2 },
    AUD: { symbol: 'A$', locale: 'en-AU', rate: 0.000095, decimals: 2 }
  };

  window.usdExchangeRate = window.usdExchangeRate || 16250;
  window.currentActiveCurrency = window.currentActiveCurrency || 'IDR';
  window.currentActiveFilter = window.currentActiveFilter || '1H';
  window.lastAssetData = window.lastAssetData || null;

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
   * 3. DATE & NUMERIC PARSING HELPERS
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

  function toLocalISODate(rawDate) {
    if (!rawDate) return todayISO();
    const str = String(rawDate).trim();
    const isoMatch = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (isoMatch) {
      return `${isoMatch[1]}-${isoMatch[2].padStart(2, '0')}-${isoMatch[3].padStart(2, '0')}`;
    }
    const dmyMatch = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
    if (dmyMatch) {
      return `${dmyMatch[3]}-${dmyMatch[2].padStart(2, '0')}-${dmyMatch[1].padStart(2, '0')}`;
    }
    const d = new Date(str);
    if (!isNaN(d.getTime())) {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    }
    return todayISO();
  }

  function extractNumber(val) {
    if (val === undefined || val === null || val === '') return 0;
    if (typeof val === 'number') return isNaN(val) ? 0 : val;
    let str = val.toString().replace(/Rp|USD|\$/gi, '').trim();
    if (str.indexOf(',') > -1 && str.indexOf('.') !== -1 && str.lastIndexOf(',') > str.lastIndexOf('.')) {
      str = str.replace(/\./g, '').replace(',', '.');
    } else if (str.indexOf(',') > -1 && str.indexOf('.') === -1) {
      const parts = str.split(',');
      str = parts[1] && parts[1].length === 3 ? str.replace(/,/g, '') : str.replace(',', '.');
    } else if (str.indexOf(',') > -1) {
      str = str.replace(/,/g, '');
    } else if (str.indexOf('.') > -1 && str.split('.').length > 2) {
      str = str.replace(/\./g, '');
    } else if (str.indexOf('.') > -1) {
      const parts = str.split('.');
      if (parts[0] !== '0' && parts[0] !== '-0' && parts[1] && parts[1].length === 3) {
        str = str.replace(/\./g, '');
      }
    }
    const num = parseFloat(str);
    return isNaN(num) ? 0 : num;
  }

  function extractPriceNumber(val, currency = 'IDR') {
    if (val === undefined || val === null || val === '') return 0;
    if (typeof val === 'number') return isNaN(val) ? 0 : val;
    const curr = String(currency || 'IDR').toUpperCase().trim();
    if (curr !== 'IDR') {
      let str = val.toString().replace(/Rp|USD|\$/gi, '').trim();
      if (str.indexOf(',') > -1 && str.indexOf('.') > -1) {
        if (str.lastIndexOf(',') > str.lastIndexOf('.')) {
          str = str.replace(/\./g, '').replace(',', '.');
        } else {
          str = str.replace(/,/g, '');
        }
      } else if (str.indexOf(',') > -1) {
        str = str.replace(',', '.');
      }
      const parsed = parseFloat(str);
      return isNaN(parsed) ? 0 : parsed;
    }
    return extractNumber(val);
  }

  function normalizeTrxType(t) {
    if (!t) return 'OUTFLOW';
    const raw = String(t.type || t.Tipe || t.tipe || '')
      .trim()
      .toUpperCase();
    const cat = String(t.category || t.Kategori || t.kategori || '')
      .trim()
      .toLowerCase();

    if (raw === 'NEUTRAL' || raw === 'NETRAL') return 'NEUTRAL';
    if (
      raw.includes('TF') ||
      raw.includes('TRANSFER') ||
      cat === 'transfer masuk' ||
      cat === 'transfer keluar' ||
      cat === 'transfer antar akun' ||
      cat === 'transfer'
    ) {
      return 'TRANSFER';
    }
    if (
      raw === 'INFLOW' ||
      raw === 'INCOME' ||
      raw === 'PEMASUKAN' ||
      raw === 'MASUK' ||
      raw === 'CREDIT' ||
      raw === 'KREDIT'
    ) {
      return 'INFLOW';
    }
    return 'OUTFLOW';
  }

  // Fetch live USD -> IDR exchange rate for foreign-currency portfolio assets
  function refreshForexRate() {
    if (window._fintrackForexLoading) return;
    window._fintrackForexLoading = true;
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates && data.rates.IDR) {
          window.usdExchangeRate = Number(data.rates.IDR) || 16250;
          CURRENCY_CONFIG.USD.rate = 1 / window.usdExchangeRate;
          if (activePage === 'portfolio') renderPortfolioPage();
        }
      })
      .catch(() => {
        // Fallback rate remains active
      })
      .finally(() => {
        window._fintrackForexLoading = false;
      });
  }

  /* --------------------------------------------------------------------------
   * 4. APPLICATION STATE & DEFAULT SEED DATA
   * -------------------------------------------------------------------------- */
  function getDefaultState() {
    return {
      version: '3.0.0',
      activeUser: localStorage.getItem(ACTIVE_USER_KEY) || 'Bayu',
      users: ['Bayu', 'Dedek Indra'],
      accounts: [
        {
          id: 'acc_bca',
          name: 'BCA Tahapan',
          type: 'BANK',
          number: '•••• 4821',
          balance: 14850000,
          theme: 'emerald',
          owner: 'Bayu'
        },
        {
          id: 'acc_mandiri',
          name: 'Mandiri Livin',
          type: 'BANK',
          number: '•••• 9034',
          balance: 8420000,
          theme: 'obsidian',
          owner: 'Bayu'
        },
        {
          id: 'acc_gopay',
          name: 'GoPay & Cash',
          type: 'E-WALLET',
          number: '•••• 7712',
          balance: 1950000,
          theme: 'ewallet',
          owner: 'Bayu'
        }
      ],
      transactions: [
        {
          id: 'trx_1',
          date: todayISO(),
          type: 'INFLOW',
          category: 'Freelance & Project',
          amount: 4500000,
          accountId: 'acc_bca',
          note: 'Client Visual & UI Delivery',
          receipt: ''
        },
        {
          id: 'trx_2',
          date: todayISO(),
          type: 'OUTFLOW',
          category: 'Makan & Kopi',
          amount: 85000,
          accountId: 'acc_gopay',
          note: 'Kopi Susu & Makan Siang',
          receipt: ''
        },
        {
          id: 'trx_3',
          date: offsetDateISO(-1),
          type: 'OUTFLOW',
          category: 'Transport & BBM',
          amount: 150000,
          accountId: 'acc_gopay',
          note: 'Pertamax Full Tank',
          receipt: ''
        },
        {
          id: 'trx_4',
          date: offsetDateISO(-2),
          type: 'INFLOW',
          category: 'Dividen & Yield',
          amount: 1250000,
          accountId: 'acc_mandiri',
          note: 'Imbal Hasil Portofolio',
          receipt: ''
        },
        {
          id: 'trx_5',
          date: offsetDateISO(-3),
          type: 'OUTFLOW',
          category: 'Software & Cloud',
          amount: 249000,
          accountId: 'acc_bca',
          note: 'Domain & Cloud Hosting',
          receipt: ''
        }
      ],
      recurring: [
        {
          id: 'rec_1',
          name: 'iCloud+ & Adobe CC',
          amount: 169000,
          cycle: 'Monthly',
          dueDate: offsetDateISO(2),
          accountId: 'acc_bca',
          category: 'Software & Cloud',
          active: true
        },
        {
          id: 'rec_2',
          name: 'Gym & Fitness Membership',
          amount: 350000,
          cycle: 'Monthly',
          dueDate: offsetDateISO(5),
          accountId: 'acc_mandiri',
          category: 'Kesehatan & Gym',
          active: true
        }
      ],
      debts: [
        {
          id: 'debt_1',
          type: 'RECEIVABLE',
          person: 'Raka Studio',
          amount: 1200000,
          paid: 0,
          dueDate: offsetDateISO(3),
          note: 'Pelunasan Render 3D',
          settled: false
        }
      ],
      debtHistory: [],
      wallets: [
        {
          id: 'wal_1',
          name: 'Ajaib Sekuritas & Kripto',
          platform: 'Ajaib',
          balance: 6500000
        },
        {
          id: 'wal_2',
          name: 'Phantom Web3 Vault',
          platform: 'Solana',
          balance: 4200000
        }
      ],
      assets: [
        {
          id: 'ast_1',
          symbol: 'ADRO',
          name: 'Adaro Energy',
          category: 'Saham IDX',
          currency: 'IDR',
          qty: 1500,
          buyPrice: 3650,
          currentPrice: 3920,
          walletId: 'wal_1'
        },
        {
          id: 'ast_2',
          symbol: 'SOL',
          name: 'Solana',
          category: 'Crypto',
          currency: 'IDR',
          qty: 2.5,
          buyPrice: 2100000,
          currentPrice: 2480000,
          walletId: 'wal_2'
        },
        {
          id: 'ast_3',
          symbol: 'GOLD',
          name: 'Emas Antam Digital',
          category: 'Emas',
          currency: 'IDR',
          qty: 5,
          buyPrice: 1380000,
          currentPrice: 1510000,
          walletId: 'wal_1'
        }
      ],
      goals: [
        {
          id: 'goal_1',
          title: 'Dana Darurat 12 Bulan',
          target: 50000000,
          saved: 25220000,
          deadline: '2026-12-31'
        },
        {
          id: 'goal_2',
          title: 'Custom Garage & Workstation',
          target: 35000000,
          saved: 14800000,
          deadline: '2027-06-30'
        }
      ],
      categories: {
        INFLOW: ['Gaji & Honor', 'Freelance & Project', 'Dividen & Yield', 'Bonus', 'Lainnya'],
        OUTFLOW: [
          'Makan & Kopi',
          'Transport & BBM',
          'Tagihan & Utilitas',
          'Software & Cloud',
          'Kesehatan & Gym',
          'Belanja',
          'Hiburan',
          'Lainnya'
        ],
        TRANSFER: ['Transfer Antar Akun', 'Top Up E-Wallet', 'Deposit Investasi']
      }
    };
  }

  let state = loadState();
  let rawBackendData = {};
  let activePage = 'dashboard';
  let activeDeckIndex = 0;
  let dueBannerDismissed = false;

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
  let assetDetailLineChartInstance = null;
  let exportSelectedYear = new Date().getFullYear();

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
      return {
        ...defaults,
        ...parsed,
        categories: { ...defaults.categories, ...(parsed.categories || {}) }
      };
    } catch (err) {
      console.warn('[Fintrack] Resetting corrupted local state:', err);
      return getDefaultState();
    }
  }

  let cloudSyncTimer = null;
  function scheduleCloudSync() {
    if (cloudSyncTimer) clearTimeout(cloudSyncTimer);
    cloudSyncTimer = setTimeout(() => {
      // Background persistence hook ready
    }, 1000);
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
   * 5. CURRENCY, PRIVACY, THEME & I18N HELPERS
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

  function formatNativeAssetPrice(amount, currency = 'IDR') {
    const curr = String(currency || 'IDR').toUpperCase().trim();
    const num = Number(amount) || 0;
    if (curr === 'IDR') {
      return formatCurrency(num, 'IDR');
    }
    const decimals = num > 0 && num < 0.01 ? 6 : num < 1 ? 4 : 2;
    const prefix = curr === 'USD' ? '$' : `${curr} `;
    return (
      prefix +
      new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: decimals
      }).format(num)
    );
  }

  function formatUnitQty(qty) {
    const num = Number(qty) || 0;
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 6
    });
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
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('.lang-custom').forEach((el) => {
      const txt = el.getAttribute(`data-${lang}`);
      if (txt) el.textContent = txt;
    });

    const langBadge = document.getElementById('lang-label');
    if (langBadge) langBadge.textContent = lang.toUpperCase();

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

  function getAssetAvatarHtml(symbol) {
    const s = String(symbol || 'AS').toUpperCase().trim();
    const base = s.replace(/USD$|IDR$/i, '').toLowerCase();
    const coinUrl = `https://assets.coincap.io/assets/icons/${base}@2x.png`;
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      s.substring(0, 4)
    )}&background=0F5132&color=fff&rounded=true&bold=true`;
    return `<img src="${coinUrl}" onerror="this.onerror=null;this.src='${fallbackUrl}';" alt="${escapeHTML(
      s
    )}" class="w-10 h-10 object-contain rounded-full bg-[#FAF8F5] dark:bg-[#161D19] border border-stone-200/70 dark:border-stone-800 p-1 shrink-0">`;
  }

  /* --------------------------------------------------------------------------
   * 6. TOAST NOTIFICATION SYSTEM
   * -------------------------------------------------------------------------- */
  function showToast(message, type = 'info') {
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
   * 7. SPA ROUTER & NAVIGATION
   * -------------------------------------------------------------------------- */
  function getPageContainer() {
    return (
      document.getElementById('app-content') ||
      document.getElementById('main-content') ||
      document.getElementById('page-container') ||
      document.querySelector('main')
    );
  }

  async function navigateTo(page) {
    const validPages = ['dashboard', 'calendar', 'portfolio', 'history', 'settings'];
    const target = validPages.includes(page) ? page : 'dashboard';
    activePage = target;

    document.querySelectorAll('[data-page], .nav-btn, .nav-item').forEach((btn) => {
      const btnPage = btn.getAttribute('data-page') || (btn.id ? btn.id.replace('nav-', '') : null);
      if (!btnPage) return;
      const isActive = btnPage === target;
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('active-nav', isActive);
      btn.classList.toggle('nav-active', isActive);
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

    try {
      const res = await fetch(`pages/${target}.html?v=3.0`);
      if (res.ok) {
        const html = await res.text();
        container.innerHTML = html;
      } else if (target === 'settings') {
        container.innerHTML = buildFallbackSettingsHTML();
      }
    } catch (err) {
      if (target === 'settings') {
        container.innerHTML = buildFallbackSettingsHTML();
      }
    }

    applyTranslations();
    renderCurrentPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  function updateHeaderUserUI() {
    const userLabel = document.getElementById('active-user-name') || document.getElementById('user-display');
    if (userLabel) userLabel.textContent = `${state.activeUser || 'Bayu'}!`;
    const userAvatar = document.getElementById('active-user-initial');
    if (userAvatar) userAvatar.textContent = (state.activeUser || 'B').charAt(0).toUpperCase();

    const badge = document.getElementById('user-level-badge');
    const badgeText = document.getElementById('badge-text');
    if (badge && badgeText) {
      badge.classList.remove('opacity-0');
      badge.classList.remove('bg-stone-500');
      badge.classList.add('bg-emerald-600', 'dark:bg-emerald-500');
      badgeText.textContent = 'Fase Akumulasi Aset';
    }
  }

  /* --------------------------------------------------------------------------
   * 8. DASHBOARD RENDERER & 3D STACKED SLIDING ACCOUNT CARDS
   * -------------------------------------------------------------------------- */
  function getUserAccounts() {
    if (!state.accounts || state.accounts.length === 0) return [];
    const active = (state.activeUser || '').toLowerCase().trim();
    const sessionEmail = (getSessionEmail() || '').toLowerCase().trim();
    const filtered = state.accounts.filter((a) => {
      if (!a.owner) return true;
      const own = a.owner.toLowerCase().trim();
      return (
        own === active ||
        own === sessionEmail ||
        own === active.replace(/@.*$/, '') ||
        sessionEmail.startsWith(own) ||
        own === 'all'
      );
    });
    return filtered.length > 0 ? filtered : state.accounts;
  }

  function renderDashboardPage() {
    const accounts = getUserAccounts();
    const totalBalance = accounts.reduce((sum, a) => sum + (Number(a.balance) || 0), 0);

    const now = new Date();
    const ymPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    let monthIn = 0;
    let monthOut = 0;

    (state.transactions || []).forEach((t) => {
      const dateStr = toLocalISODate(t.date);
      if (dateStr && dateStr.startsWith(ymPrefix)) {
        const normType = normalizeTrxType(t);
        if (normType === 'INFLOW') monthIn += Number(t.amount) || 0;
        else if (normType === 'OUTFLOW') monthOut += Number(t.amount) || 0;
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
      if (!r.active || !r.dueDate) return;
      const dueStr = String(r.dueDate);
      if (!dueStr.includes('-')) return;
      const due = new Date(dueStr + 'T00:00:00');
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
      const dueStr = String(d.dueDate);
      if (!dueStr.includes('-')) return;
      const due = new Date(dueStr + 'T00:00:00');
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
          <p class="text-xs font-bold text-stone-300 mb-2">Belum ada akun terdaftar</p>
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
            onclick="${isFront ? '' : `selectAccountCard(${idx})`}"
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
                <button type="button" onclick="event.stopPropagation(); openAccountModal('${acc.id}')" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition" title="Edit Akun">
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

  function renderRecurringList() {
    const listEl = document.getElementById('recurring-list');
    if (!listEl) return;

    if (!state.recurring || state.recurring.length === 0) {
      listEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-4 bg-white/5 rounded-2xl border border-white/5">Belum ada tagihan rutin aktif</p>`;
      return;
    }

    listEl.innerHTML = state.recurring
      .map((item) => {
        const acc = state.accounts.find((a) => a.id === item.accountId || a.name === item.accountId);
        return `
          <div class="p-3.5 rounded-2xl bg-white/5 hover:bg-white/8 border border-white/10 flex items-center justify-between gap-3 transition">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                <p class="text-xs font-extrabold text-white truncate">${escapeHTML(item.name)}</p>
              </div>
              <p class="text-[10px] text-stone-400 mt-1">Tgl ${escapeHTML(String(item.dueDate || '-'))} • ${escapeHTML(
          acc ? acc.name : item.accountId || 'Akun Utama'
        )}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-extrabold text-emerald-300 privacy-mask" data-raw-text="${escapeHTML(
                formatCurrency(item.amount)
              )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(item.amount))}</span>
              <button type="button" onclick="payRecurringNow('${
                item.id
              }')" class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 border border-emerald-400/25 transition">Bayar</button>
              <button type="button" onclick="deleteRecurring('${
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
              <p class="text-[10px] text-stone-400 mt-1 truncate">${escapeHTML(d.note || '-')} • JT: ${escapeHTML(
          d.dueDate || '-'
        )}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-extrabold ${
                isDebt ? 'text-red-300' : 'text-emerald-300'
              } privacy-mask" data-raw-text="${escapeHTML(formatCurrency(rem))}">${
          isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(rem))
        }</span>
              <button type="button" onclick="settleDebt('${
                d.id
              }')" class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-[#070908] text-white transition">Lunas</button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  /* --------------------------------------------------------------------------
   * 9. CALENDAR PAGE RENDERER
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
    (state.transactions || []).forEach((t) => {
      if (!t.date) return;
      const iso = toLocalISODate(t.date);
      if (!dailyMap[iso]) dailyMap[iso] = { in: 0, out: 0 };
      const normType = normalizeTrxType(t);
      if (normType === 'INFLOW') dailyMap[iso].in += Number(t.amount) || 0;
      else if (normType === 'OUTFLOW') dailyMap[iso].out += Number(t.amount) || 0;
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
                ? `<span class="w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white dark:bg-[#070908]' : 'bg-emerald-500'}"></span>`
                : ''
            }
            ${
              info && info.out > 0
                ? `<span class="w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-amber-300 dark:bg-red-700' : 'bg-red-500'}"></span>`
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

    const items = (state.transactions || []).filter((t) => toLocalISODate(t.date) === iso);
    if (items.length === 0) {
      listEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-8 bg-white/5 rounded-2xl border border-white/5">Tidak ada transaksi pada tanggal ini</p>`;
      return;
    }

    listEl.innerHTML = items.map((t) => renderDarkSheetTransactionRow(t)).join('');
  }

  function renderDarkSheetTransactionRow(t) {
    const acc = state.accounts.find((a) => a.id === t.accountId || a.name === t.accountId);
    const normType = normalizeTrxType(t);
    const isIn = normType === 'INFLOW';
    const isTf = normType === 'TRANSFER';
    const colorClass = isIn ? 'text-emerald-400' : isTf ? 'text-sky-400' : 'text-red-400';
    const sign = isIn ? '+' : isTf ? '' : '-';

    return `
      <div class="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between gap-3 transition">
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
          <button type="button" onclick="deleteTransaction('${
            t.id
          }')" class="text-stone-500 hover:text-red-400 p-1 transition" title="Hapus">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>
    `;
  }

  /* --------------------------------------------------------------------------
   * 10. PORTFOLIO PAGE RENDERER (LIVE VALUATION + SAME-SYMBOL MERGING)
   * -------------------------------------------------------------------------- */
  function getAssetFxRateToIDR(currency) {
    const curr = String(currency || 'IDR').toUpperCase().trim();
    if (curr === 'IDR') return 1;
    if (curr === 'USD') return Number(window.usdExchangeRate) || 16250;
    const cfg = CURRENCY_CONFIG[curr];
    return cfg && cfg.rate > 0 ? 1 / cfg.rate : Number(window.usdExchangeRate) || 16250;
  }

  function aggregatePortfolioAssets(assetsList) {
    const grouped = {};

    (assetsList || []).forEach((raw) => {
      const rawName = String(raw.name || '').trim();
      const parenMatch = rawName.match(/^(.+?)\s*\(([A-Za-z0-9._-]+)\)$/);
      const symbol = String(raw.symbol || (parenMatch ? parenMatch[2] : rawName) || 'ASET')
        .trim()
        .toUpperCase();
      const cleanName = String(parenMatch ? parenMatch[1] : rawName || symbol).trim();
      const category = String(raw.category || 'Saham').trim();
      const currency = String(raw.currency || 'IDR').trim().toUpperCase();
      const qty = Number(raw.qty) || 0;
      const buyPrice = Number(raw.buyPrice) || 0;
      const currentPrice = Number(raw.currentPrice) > 0 ? Number(raw.currentPrice) : buyPrice;

      if (qty <= 0) return;

      const groupKey = `${symbol}__${currency}`;
      if (!grouped[groupKey]) {
        grouped[groupKey] = {
          id: raw.id,
          symbol,
          name: cleanName,
          category,
          currency,
          totalQty: 0,
          totalInvestedNative: 0,
          livePriceNative: currentPrice,
          walletId: raw.walletId || '',
          lotCount: 0
        };
      }

      grouped[groupKey].totalQty += qty;
      grouped[groupKey].totalInvestedNative += qty * buyPrice;
      if (currentPrice > 0) grouped[groupKey].livePriceNative = currentPrice;
      if (cleanName && cleanName.toUpperCase() !== symbol) {
        grouped[groupKey].name = cleanName;
      }
      grouped[groupKey].lotCount += 1;
    });

    return Object.values(grouped).map((item) => {
      const avgBuyPriceNative = item.totalQty > 0 ? item.totalInvestedNative / item.totalQty : 0;
      const livePriceNative = item.livePriceNative > 0 ? item.livePriceNative : avgBuyPriceNative;
      const totalLiveValueNative = item.totalQty * livePriceNative;
      const pnlNative = totalLiveValueNative - item.totalInvestedNative;
      const pnlPct = item.totalInvestedNative > 0 ? (pnlNative / item.totalInvestedNative) * 100 : 0;
      const fxRate = getAssetFxRateToIDR(item.currency);
      const totalLiveValueIDR = totalLiveValueNative * fxRate;
      const totalInvestedIDR = item.totalInvestedNative * fxRate;
      const pnlIDR = totalLiveValueIDR - totalInvestedIDR;

      return {
        ...item,
        avgBuyPriceNative,
        livePriceNative,
        totalLiveValueNative,
        pnlNative,
        pnlPct,
        fxRate,
        totalLiveValueIDR,
        totalInvestedIDR,
        pnlIDR
      };
    });
  }

  function renderPortfolioPage() {
    const walletCash = (state.wallets || []).reduce((s, w) => s + (Number(w.balance) || 0), 0);
    const mergedAssets = aggregatePortfolioAssets(state.assets || []);
    const regularAssets = mergedAssets.filter((a) => a.category !== 'Valuta Asing');
    const valasAssets = mergedAssets.filter((a) => a.category === 'Valuta Asing');

    const assetsLiveTotalIDR = mergedAssets.reduce((s, a) => s + (Number(a.totalLiveValueIDR) || 0), 0);
    const goalsSavedTotal = (state.goals || [])
      .filter((g) => g.status !== 'COMPLETED')
      .reduce((s, g) => s + (Number(g.saved ?? g.current) || 0), 0);

    // Live Total Net Asset = Live Market Value of All Portfolio Assets + Investment Wallets + Target Savings
    const netWorth = assetsLiveTotalIDR + walletCash + goalsSavedTotal;

    setMaskedValue(document.getElementById('porto-center-val'), formatCurrency(netWorth), netWorth);

    // Render Investment Wallets (+ Valuta Asing Wallets)
    const walletListEl = document.getElementById('wallet-list');
    if (walletListEl) {
      const walletCards = (state.wallets || []).map(
        (w) => `
          <div onclick="openWalletDetailModal('${escapeHTML(w.name)}', ${Number(w.balance) || 0})" class="cursor-pointer p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-[#161D19] hover:bg-[#EDF5F0]/70 dark:hover:bg-[#1B241F] border border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between gap-3 transition">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-9 h-9 rounded-xl bg-[#0F5132]/10 dark:bg-emerald-500/15 text-[#0F5132] dark:text-emerald-300 font-extrabold text-xs flex items-center justify-center shrink-0">
                ${escapeHTML((w.name || 'WL').substring(0, 2).toUpperCase())}
              </div>
              <div class="min-w-0">
                <p class="text-xs font-extrabold text-stone-900 dark:text-white truncate">${escapeHTML(w.name)}</p>
                <p class="text-[10px] font-semibold text-stone-400">${escapeHTML(w.platform || 'Investment')}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-extrabold text-[#0F5132] dark:text-emerald-300 privacy-mask" data-raw-text="${escapeHTML(
                formatCurrency(w.balance)
              )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(w.balance))}</span>
              <button type="button" onclick="event.stopPropagation(); deleteWallet('${
                w.id
              }')" class="text-stone-400 hover:text-red-500 p-1 transition" title="Hapus Dompet">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>
        `
      );

      valasAssets.forEach((v) => {
        const isPos = v.pnlIDR >= 0;
        walletCards.push(`
          <div onclick="openAssetDetailModal('${v.id}', '${escapeHTML(v.symbol)}', '${escapeHTML(v.category)}', ${
          v.totalQty
        }, ${v.avgBuyPriceNative * v.fxRate}, ${v.totalInvestedIDR}, ${v.livePriceNative * v.fxRate}, ${
          v.totalLiveValueIDR
        }, ${v.pnlIDR}, ${v.pnlPct})" class="cursor-pointer p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-[#161D19] border border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between gap-3 transition">
            <div class="flex items-center gap-3 min-w-0">
              ${getAssetAvatarHtml(v.symbol)}
              <div class="min-w-0">
                <p class="text-xs font-extrabold text-stone-900 dark:text-white truncate">${escapeHTML(v.symbol)} Wallet</p>
                <p class="text-[10px] font-semibold text-stone-400">${formatUnitQty(v.totalQty)} unit • Live: ${escapeHTML(
          formatCurrency(v.livePriceNative * v.fxRate)
        )}</p>
              </div>
            </div>
            <div class="text-right shrink-0">
              <p class="text-xs font-extrabold text-[#0F5132] dark:text-emerald-300 privacy-mask" data-raw-text="${escapeHTML(
                formatCurrency(v.totalLiveValueIDR)
              )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(formatCurrency(v.totalLiveValueIDR))}</p>
              <p class="text-[10px] font-bold ${isPos ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}">${
          isPos ? '+' : ''
        }${v.pnlPct.toFixed(1)}%</p>
            </div>
          </div>
        `);
      });

      walletListEl.innerHTML =
        walletCards.length === 0
          ? `<p class="text-xs text-stone-400 text-center py-3">Belum ada dompet investasi</p>`
          : walletCards.join('');
    }

    // Render Merged Asset Ownership List
    const assetListEl = document.getElementById('asset-list');
    if (assetListEl) {
      if (regularAssets.length === 0) {
        assetListEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-4 bg-white dark:bg-[#111613] rounded-2xl border border-stone-200/70 dark:border-stone-800">Belum ada aset terdaftar</p>`;
      } else {
        const sortedAssets = [...regularAssets].sort((a, b) => b.totalLiveValueIDR - a.totalLiveValueIDR);
        assetListEl.innerHTML = sortedAssets
          .map((a) => {
            const isPos = a.pnlNative >= 0;
            const hasDistinctName = a.name && a.name.toUpperCase() !== a.symbol.toUpperCase();
            const headingLabel = hasDistinctName ? `${a.name} (${a.symbol})` : a.symbol;
            const nativeTotalStr = formatNativeAssetPrice(a.totalLiveValueNative, a.currency);
            const idrSubStr = a.currency !== 'IDR' ? `≈ ${formatCurrency(a.totalLiveValueIDR)}` : '';
            const avgStr = formatNativeAssetPrice(a.avgBuyPriceNative, a.currency);
            const liveStr = formatNativeAssetPrice(a.livePriceNative, a.currency);

            return `
              <div onclick="openAssetDetailModal('${a.id}', '${escapeHTML(a.symbol)}', '${escapeHTML(
              a.category
            )}', ${a.totalQty}, ${a.avgBuyPriceNative * a.fxRate}, ${a.totalInvestedIDR}, ${
              a.livePriceNative * a.fxRate
            }, ${a.totalLiveValueIDR}, ${a.pnlIDR}, ${
              a.pnlPct
            })" class="cursor-pointer p-4 rounded-[22px] bg-white dark:bg-[#111613] hover:border-[#0F5132]/40 dark:hover:border-emerald-500/40 border border-stone-200/70 dark:border-stone-800/80 shadow-sm flex items-center justify-between gap-3 transition active:scale-[0.99]">
                <div class="flex items-center gap-3 min-w-0">
                  ${getAssetAvatarHtml(a.symbol)}
                  <div class="min-w-0">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#EDF5F0] dark:bg-emerald-500/15 text-[#0F5132] dark:text-emerald-300">${escapeHTML(
                        a.category || 'Asset'
                      )}</span>
                      ${
                        a.currency !== 'IDR'
                          ? `<span class="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">${escapeHTML(
                              a.currency
                            )}</span>`
                          : ''
                      }
                      ${
                        a.lotCount > 1
                          ? `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">${a.lotCount}x posisi</span>`
                          : ''
                      }
                    </div>
                    <p class="text-xs font-extrabold text-stone-900 dark:text-white truncate mt-1">${escapeHTML(
                      headingLabel
                    )}</p>
                    <p class="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5 truncate">${formatUnitQty(
                      a.totalQty
                    )} unit • Avg ${escapeHTML(avgStr)}</p>
                    <p class="text-[10px] font-semibold text-[#0F5132] dark:text-emerald-400 mt-0.5 truncate">Live: ${escapeHTML(
                      liveStr
                    )}</p>
                  </div>
                </div>
                <div class="text-right shrink-0">
                  <p class="text-xs font-extrabold text-stone-900 dark:text-white privacy-mask" data-raw-text="${escapeHTML(
                    nativeTotalStr
                  )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(nativeTotalStr)}</p>
                  ${
                    idrSubStr
                      ? `<p class="text-[10px] font-semibold text-stone-400 dark:text-stone-500 privacy-mask mt-0.5" data-raw-text="${escapeHTML(
                          idrSubStr
                        )}">${isPrivacyEnabled() ? '••••••••' : escapeHTML(idrSubStr)}</p>`
                      : ''
                  }
                  <p class="text-[10px] font-bold ${
                    isPos ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
                  } mt-0.5">${isPos ? '+' : ''}${a.pnlPct.toFixed(2)}%</p>
                </div>
              </div>
            `;
          })
          .join('');
      }
    }

    // Render Target Savings Goals
    const goalsEl = document.getElementById('porto-goals-list');
    if (goalsEl) {
      const activeGoals = (state.goals || []).filter((g) => g.status !== 'COMPLETED');
      if (activeGoals.length === 0) {
        goalsEl.innerHTML = `<p class="text-xs text-stone-400 text-center py-4 bg-white/5 rounded-2xl border border-white/5">Belum ada target tabungan</p>`;
      } else {
        goalsEl.innerHTML = activeGoals
          .map((g) => {
            const title = g.title || g.name || 'Target';
            const savedVal = Number(g.saved ?? g.current) || 0;
            const targetVal = Math.max(1, Number(g.target) || 1);
            const pct = Math.min(100, Math.round((savedVal / targetVal) * 100));
            return `
              <div class="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <div class="flex items-center justify-between gap-2">
                  <div>
                    <p class="text-xs font-extrabold text-white">${escapeHTML(title)}</p>
                    <p class="text-[10px] text-stone-400 mt-0.5 privacy-mask" data-raw-text="${escapeHTML(
                      formatCurrency(savedVal)
                    )} / ${escapeHTML(formatCurrency(targetVal))}">${
              isPrivacyEnabled() ? '••••••••' : `${escapeHTML(formatCurrency(savedVal))} / ${escapeHTML(formatCurrency(targetVal))}`
            }</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-black text-emerald-400">${pct}%</span>
                    <button type="button" onclick="topupGoal('${
                      g.id
                    }')" class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 border border-emerald-400/25">+ Nabung</button>
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

    renderPortfolioDoughnut(mergedAssets, walletCash, goalsSavedTotal);
  }

  function renderPortfolioDoughnut(mergedAssets, walletCash, goalsSavedTotal) {
    const canvas = document.getElementById('portfolioChart');
    if (!canvas || typeof Chart === 'undefined') return;

    if (portfolioChartInstance) {
      portfolioChartInstance.destroy();
    }

    const isDark = document.documentElement.classList.contains('dark');
    const labels = [];
    const data = [];

    if (goalsSavedTotal > 0) {
      labels.push('Tabungan Target');
      data.push(goalsSavedTotal);
    }
    if (walletCash > 0) {
      labels.push('Dompet Investasi');
      data.push(walletCash);
    }
    (mergedAssets || [])
      .filter((a) => a.totalLiveValueIDR > 0)
      .sort((a, b) => b.totalLiveValueIDR - a.totalLiveValueIDR)
      .forEach((a) => {
        labels.push(a.symbol);
        data.push(a.totalLiveValueIDR);
      });

    const hasData = data.some((v) => v > 0);

    portfolioChartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: hasData ? labels : ['Empty'],
        datasets: [
          {
            data: hasData ? data : [1],
            backgroundColor: hasData
              ? labels.map((_, i) => CHART_PALETTE[i % CHART_PALETTE.length])
              : [isDark ? '#1E2722' : '#E7E5E4'],
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
   * 11. HISTORY PAGE RENDERER, FILTERS & CATEGORY DOUGHNUT
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

  function updateHistoryTogglePills() {
    ['INFLOW', 'OUTFLOW', 'TRANSFER'].forEach((t) => {
      const btn = document.getElementById(`toggle-${t.toLowerCase()}`);
      if (!btn) return;
      const isActive = t === historyType;
      btn.className = isActive
        ? 'flex-1 py-2 rounded-full text-xs font-bold bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] shadow-sm transition-all toggle-active toggle-btn'
        : 'flex-1 py-2 rounded-full text-xs font-bold text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-all toggle-btn';
    });
  }

  function setHistoryType(type) {
    historyType = String(type || 'OUTFLOW').toUpperCase();
    updateHistoryTogglePills();
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

    return (state.transactions || []).filter((t) => {
      if (!t.date) return false;
      const normType = normalizeTrxType(t);
      if (normType === 'NEUTRAL') return false;
      const dateStr = toLocalISODate(t.date);
      if (historyPeriod === 'month') return dateStr.startsWith(ymPrefix);
      if (historyPeriod === '7days') return dateStr >= sevenDaysAgo;
      if (historyPeriod === 'custom') {
        if (startCustom && dateStr < startCustom) return false;
        if (endCustom && dateStr > endCustom) return false;
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
        opts.push(`<option value="${escapeHTML(a.id)}">${escapeHTML(a.name)}</option>`);
      });
      accEl.innerHTML = opts.join('');
      accEl.value = Array.from(accEl.options).some((o) => o.value === current) ? current : 'ALL';
    }

    if (catEl) {
      const current = catEl.value || 'ALL';
      const cats = new Set();
      (state.transactions || []).forEach((t) => {
        if (t.category) cats.add(t.category);
      });
      const opts = [`<option value="ALL">${getLang() === 'id' ? 'Semua Kategori' : 'All Categories'}</option>`];
      Array.from(cats).forEach((c) => {
        opts.push(`<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`);
      });
      catEl.innerHTML = opts.join('');
      catEl.value = Array.from(catEl.options).some((o) => o.value === current) ? current : 'ALL';
    }
  }

  function renderHistoryPage() {
    updateHistoryTogglePills();
    populateHistoryDropdowns();

    const periodTrx = getPeriodFilteredTransactions();
    let totalIn = 0;
    let totalOut = 0;

    periodTrx.forEach((t) => {
      const normType = normalizeTrxType(t);
      const amt = Number(t.amount) || extractNumber(t.Jumlah) || 0;
      if (normType === 'INFLOW') totalIn += amt;
      else if (normType === 'OUTFLOW') totalOut += amt;
    });

    const diff = totalIn - totalOut;
    setMaskedValue(document.getElementById('hist-sum-in'), formatCurrency(totalIn), totalIn);
    setMaskedValue(document.getElementById('hist-sum-out'), formatCurrency(totalOut), totalOut);
    setMaskedValue(
      document.getElementById('hist-sum-diff'),
      `${diff >= 0 ? '+' : ''}${formatCurrency(diff)}`,
      diff
    );

    // Category breakdown & Doughnut Chart for active historyType (INFLOW / OUTFLOW / TRANSFER)
    const byCat = {};
    const countByCat = {};
    let typeTotal = 0;

    periodTrx
      .filter((t) => {
        const normType = normalizeTrxType(t);
        if (historyType === 'TRANSFER') {
          if (normType !== 'TRANSFER') return false;
          const catLow = String(t.category || '').toLowerCase();
          // Avoid double-counting paired Transfer Keluar + Transfer Masuk in doughnut total
          if (catLow === 'transfer keluar') return false;
          return true;
        }
        return normType === historyType;
      })
      .forEach((t) => {
        const amt = Number(t.amount) || extractNumber(t.Jumlah) || 0;
        const accObj = state.accounts.find((a) => a.id === t.accountId || a.name === t.accountId);
        const key =
          historyType === 'TRANSFER'
            ? accObj
              ? accObj.name
              : t.accountId || t.category || 'Transfer'
            : t.category || 'Lainnya';
        byCat[key] = (byCat[key] || 0) + amt;
        countByCat[key] = (countByCat[key] || 0) + 1;
        typeTotal += amt;
      });

    setMaskedValue(document.getElementById('chart-center-val'), formatCurrency(typeTotal), typeTotal);
    renderCategoryDoughnut(byCat);
    renderCategoryBreakdownList(byCat, countByCat, typeTotal);

    // Apply search + account + category filters for bottom transaction list
    const filteredList = periodTrx
      .filter((t) => {
        if (historyAccountFilter !== 'ALL') {
          const matchingAcc = state.accounts.find((a) => a.id === historyAccountFilter);
          const matchesId = t.accountId === historyAccountFilter;
          const matchesName = matchingAcc && t.accountId === matchingAcc.name;
          if (!matchesId && !matchesName) return false;
        }
        if (historyCategoryFilter !== 'ALL' && t.category !== historyCategoryFilter) return false;
        if (historySearchQuery) {
          const hay = `${t.note || ''} ${t.category || ''} ${t.amount || ''}`.toLowerCase();
          if (!hay.includes(historySearchQuery)) return false;
        }
        return true;
      })
      .sort((a, b) => toLocalISODate(b.date).localeCompare(toLocalISODate(a.date)));

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
        const acc = state.accounts.find((a) => a.id === t.accountId || a.name === t.accountId);
        const normType = normalizeTrxType(t);
        const rawDir = String(t.rawTipe || t.type || '').toUpperCase();
        const catLow = String(t.category || '').toLowerCase();
        const isIn = normType === 'INFLOW';
        const isTf = normType === 'TRANSFER';
        const isOutDir = !isIn && (!isTf || catLow.includes('keluar') || rawDir === 'OUTFLOW');

        const badgeBg = isIn
          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
          : isTf
          ? 'bg-sky-500/15 text-sky-700 dark:text-sky-300'
          : 'bg-red-500/15 text-red-600 dark:text-red-400';
        const amountColor = isIn
          ? 'text-[#0F5132] dark:text-emerald-400'
          : isTf
          ? 'text-sky-600 dark:text-sky-400'
          : 'text-red-600 dark:text-red-400';
        const sign = isIn ? '+' : isTf ? (catLow.includes('masuk') ? '+' : '-') : isOutDir ? '-' : '';
        const dateLabel = toLocalISODate(t.date);

        return `
          <div class="p-4 flex items-center justify-between gap-3 ${
            idx > 0 ? 'border-t border-stone-100 dark:border-stone-800/70' : ''
          } hover:bg-[#FAF8F5] dark:hover:bg-[#161D19] transition">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${badgeBg}">${escapeHTML(
          t.category
        )}</span>
                <span class="text-[10px] font-semibold text-stone-400">${escapeHTML(dateLabel)}</span>
              </div>
              <p class="text-xs font-extrabold text-stone-900 dark:text-white truncate mt-1">${escapeHTML(
                t.note || t.category
              )}</p>
              <p class="text-[10px] text-stone-400 mt-0.5">${escapeHTML(acc ? acc.name : t.accountId || '-')}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-extrabold ${amountColor} privacy-mask" data-raw-text="${sign}${escapeHTML(
          formatCurrency(t.amount)
        )}">${isPrivacyEnabled() ? '••••••••' : `${sign}${escapeHTML(formatCurrency(t.amount))}`}</span>
              <button type="button" onclick="deleteTransaction('${
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
    const hasData = entries.length > 0 && entries.some((e) => e[1] > 0);

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
            borderWidth: 3,
            hoverOffset: 5
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

  function renderCategoryBreakdownList(byCat, countByCat, total) {
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
        const count = countByCat[cat] || 1;
        const color = CHART_PALETTE[idx % CHART_PALETTE.length];
        return `
          <div class="flex items-center justify-between py-2.5 px-3 rounded-xl bg-[#FAF8F5] dark:bg-[#161D19]">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${color}"></span>
              <div class="min-w-0">
                <p class="text-xs font-bold text-stone-800 dark:text-stone-200 truncate">${escapeHTML(cat)}</p>
                <p class="text-[10px] text-stone-400">${count} transaksi • ${pct}%</p>
              </div>
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
   * 12. SETTINGS PAGE FALLBACK & RENDERER
   * -------------------------------------------------------------------------- */
  function buildFallbackSettingsHTML() {
    return `
      <div class="space-y-6 pb-24">
        <div>
          <h2 class="text-xl font-extrabold tracking-tight text-stone-900 dark:text-white">Pengaturan & Sinkronisasi</h2>
          <p class="text-[11px] font-medium text-stone-500 dark:text-stone-400 mt-0.5">Profil pengguna, mata uang, cloud sync & backup</p>
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
          const active = u === state.activeUser;
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
    state.activeUser = userName;
    localStorage.setItem(ACTIVE_USER_KEY, userName);
    activeDeckIndex = 0;
    saveState(true);
    renderCurrentPage();
    showToast(`Profil aktif: ${userName}`, 'success');
  }

  /* --------------------------------------------------------------------------
   * 13. MODALS & CRUD OPERATIONS
   * -------------------------------------------------------------------------- */
  function openModal(modalId, param) {
    if (modalId === 'modal-account' || modalId === 'modal-manage-account') {
      modalId = document.getElementById('modal-manage-account') ? 'modal-manage-account' : 'modal-account';
    }

    const modal = document.getElementById(modalId);
    if (!modal) {
      showToast(`Modal ${modalId} siap digunakan`, 'info');
      return;
    }

    populateModalAccountSelects();

    if (modalId === 'modal-trx') {
      const rawType =
        param ||
        document.getElementById('trx-type')?.value ||
        document.getElementById('form-trx-tipe')?.value ||
        'OUTFLOW';
      const type = rawType.toUpperCase().includes('IN') || rawType === 'pemasukan' ? 'INFLOW' : 'OUTFLOW';

      const typeInput = document.getElementById('trx-type') || document.getElementById('form-trx-tipe');
      if (typeInput) typeInput.value = type;

      const titleEl = document.getElementById('modal-trx-title');
      if (titleEl) {
        titleEl.textContent = type === 'INFLOW' ? 'Pemasukan Baru' : 'Pengeluaran Baru';
      }

      const dateInput = document.getElementById('trx-date') || document.getElementById('form-trx-date');
      if (dateInput && !dateInput.value) dateInput.value = todayISO();

      populateTrxCategories(type);
      validateTrxForm();
    }

    if (modalId === 'modal-debt-history') {
      renderDebtHistoryModal();
    }

    if (modalId === 'modal-export-pdf') {
      renderExportModal();
    }

    modal.classList.remove('hidden', 'hidden-page');
    modal.classList.add('flex');
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  function closeAllModals() {
    document.querySelectorAll('[id^="modal-"]').forEach((m) => {
      m.classList.add('hidden');
      m.classList.remove('flex');
    });
  }

  function populateModalAccountSelects() {
    const accounts = getUserAccounts();
    const html = accounts
      .map((a) => `<option value="${escapeHTML(a.id)}">${escapeHTML(a.name)} (${formatCurrency(a.balance)})</option>`)
      .join('');
    [
      'trx-account',
      'form-trx-account',
      'tf-from',
      'form-tf-from',
      'tf-to',
      'form-tf-to',
      'rec-account',
      'form-rec-rek',
      'debt-account',
      'form-debt-rek',
      'form-cair-rek',
      'form-dividend-account',
      'form-topup-account',
      'form-pay-debt-account'
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    });

    const walletEl =
      document.getElementById('asset-wallet') ||
      document.getElementById('form-buy-asset-wallet') ||
      document.getElementById('form-asset-wallet') ||
      document.getElementById('form-asset-account');
    if (walletEl) {
      const walletOpts = (state.wallets || []).map(
        (w) => `<option value="${escapeHTML(w.id)}">${escapeHTML(w.name)}</option>`
      );
      const accOpts = accounts.map((a) => `<option value="${escapeHTML(a.id)}">${escapeHTML(a.name)}</option>`);
      walletEl.innerHTML = [...walletOpts, ...accOpts].join('');
    }

    const exportAccEl = document.getElementById('export-pdf-account');
    if (exportAccEl) {
      const opts = ['<option value="ALL">SEMUA REKENING</option>'];
      accounts.forEach((a) => opts.push(`<option value="${escapeHTML(a.name)}">${escapeHTML(a.name)}</option>`));
      exportAccEl.innerHTML = opts.join('');
    }
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

  function openAccountModal(accountId) {
    const modal = document.getElementById('modal-manage-account') || document.getElementById('modal-account');
    if (!modal) {
      const name = prompt('Nama Akun / Bank / E-Wallet:');
      if (!name) return;
      const bal = Number(prompt('Saldo Awal (Rp):', '0')) || 0;
      state.accounts.push({
        id: 'acc_' + Date.now(),
        name: name.trim(),
        type: 'BANK',
        number: '•••• ' + Math.floor(1000 + Math.random() * 9000),
        balance: bal,
        theme: 'emerald',
        owner: state.activeUser
      });
      saveState();
      renderCurrentPage();
      showToast('Akun baru ditambahkan', 'success');
      return;
    }

    const existing = accountId ? state.accounts.find((a) => a.id === accountId) : null;
    const titleEl = document.getElementById('mod-manage-acc-title');
    const modeEl = document.getElementById('form-acc-mode');
    const idEl = document.getElementById('form-acc-id') || document.getElementById('acc-id');
    const nameEl = document.getElementById('form-acc-name') || document.getElementById('acc-name');
    const numEl = document.getElementById('form-acc-number') || document.getElementById('acc-number');
    const balEl = document.getElementById('form-acc-balance') || document.getElementById('acc-balance');
    const delBtn = document.getElementById('btn-delete-account');

    if (existing) {
      if (titleEl) titleEl.textContent = 'Edit Rekening';
      if (modeEl) modeEl.value = 'edit';
      if (idEl) idEl.value = existing.id;
      if (nameEl) nameEl.value = existing.name;
      if (numEl) numEl.value = existing.number || '';
      if (balEl) balEl.value = new Intl.NumberFormat('id-ID').format(existing.balance || 0);
      if (delBtn) delBtn.classList.remove('hidden');
    } else {
      if (titleEl) titleEl.textContent = 'Tambah Rekening';
      if (modeEl) modeEl.value = 'add';
      if (idEl) idEl.value = '';
      if (nameEl) nameEl.value = '';
      if (numEl) numEl.value = '';
      if (balEl) balEl.value = '';
      if (delBtn) delBtn.classList.add('hidden');
    }

    openModal(modal.id);
  }

  function saveAccount(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const id = document.getElementById('form-acc-id')?.value || document.getElementById('acc-id')?.value || '';
    const name =
      document.getElementById('form-acc-name')?.value?.trim() || document.getElementById('acc-name')?.value?.trim();
    const number =
      document.getElementById('form-acc-number')?.value?.trim() ||
      document.getElementById('acc-number')?.value?.trim() ||
      '•••• 8899';
    const rawBal =
      document.getElementById('form-acc-balance')?.value || document.getElementById('acc-balance')?.value || '0';
    const balance = Number(String(rawBal).replace(/[^0-9]/g, '')) || 0;
    const type = document.getElementById('form-acc-type')?.value || 'Bank';
    const theme =
      document.getElementById('acc-theme')?.value || (type.toUpperCase().includes('WALLET') ? 'ewallet' : 'emerald');

    if (!name) {
      showToast('Nama akun wajib diisi', 'warning');
      return;
    }

    const existing = id ? state.accounts.find((a) => a.id === id) : null;
    const oldName = existing ? existing.name : '';

    if (existing) {
      existing.name = name;
      existing.number = number;
      existing.balance = balance;
      existing.theme = theme;
      existing.type = type.toUpperCase().includes('WALLET')
        ? 'E-WALLET'
        : type.toUpperCase().includes('TUNAI') || type.toUpperCase().includes('CASH')
        ? 'CASH'
        : 'BANK';
    } else {
      state.accounts.push({
        id: 'acc_' + Date.now(),
        name,
        type: type.toUpperCase().includes('WALLET')
          ? 'E-WALLET'
          : type.toUpperCase().includes('TUNAI') || type.toUpperCase().includes('CASH')
          ? 'CASH'
          : 'BANK',
        number,
        balance,
        theme,
        owner: state.activeUser
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
        idAkun: id,
        oldNama: oldName,
        nama: name,
        tipe: type,
        atasNama: name,
        noRek: number,
        saldo: balance,
        recordAdjustment: false
      }).then(() => fetchAllData());
    } else {
      apiPost({
        action: 'addAccount',
        email: getSessionEmail(),
        nama: name,
        tipe: type,
        atasNama: name,
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
    const amount =
      typeof rawAmount === 'number' ? rawAmount : Number(String(rawAmount).replace(/[^0-9]/g, '')) || 0;
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
    const note =
      document.getElementById('trx-note')?.value?.trim() ||
      document.getElementById('form-trx-desc')?.value?.trim() ||
      category;

    if (amount <= 0) {
      showToast('Nominal transaksi harus lebih dari 0', 'warning');
      return;
    }

    const acc = state.accounts.find((a) => a.id === accountId || a.name === accountId);
    if (acc) {
      if (type === 'INFLOW') acc.balance = (Number(acc.balance) || 0) + amount;
      else if (type === 'OUTFLOW') acc.balance = (Number(acc.balance) || 0) - amount;
    }

    state.transactions.unshift({
      id: 'trx_' + Date.now(),
      date: toLocalISODate(date),
      type,
      category,
      amount,
      accountId: acc ? acc.id : accountId,
      note,
      receipt: ''
    });

    saveState();
    closeModal('modal-trx');
    if (amountEl) amountEl.value = '';
    const noteEl = document.getElementById('trx-note') || document.getElementById('form-trx-desc');
    if (noteEl) noteEl.value = '';
    validateTrxForm();
    renderCurrentPage();
    showToast('Transaksi berhasil dicatat', 'success');

    const accountName = acc ? acc.name : accountId;
    apiPost({
      action: 'addTransaction',
      email: getSessionEmail(),
      tanggal: `${toLocalISODate(date)} 12:00`,
      tipe: type,
      akun: accountName,
      kategori: category,
      jumlah: amount,
      keterangan: note
    });
  }

  function deleteTransaction(trxId) {
    const idx = state.transactions.findIndex((t) => t.id === trxId);
    if (idx === -1) return;
    const trx = state.transactions[idx];

    const acc = state.accounts.find((a) => a.id === trx.accountId || a.name === trx.accountId);
    if (acc) {
      const normType = normalizeTrxType(trx);
      if (normType === 'INFLOW') acc.balance = (Number(acc.balance) || 0) - (Number(trx.amount) || 0);
      else if (normType === 'OUTFLOW') acc.balance = (Number(acc.balance) || 0) + (Number(trx.amount) || 0);
    }

    state.transactions.splice(idx, 1);
    saveState();
    renderCurrentPage();
    showToast('Transaksi dihapus & saldo disesuaikan', 'info');
  }

  function saveTransfer(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const fromId = document.getElementById('tf-from')?.value || document.getElementById('form-tf-from')?.value;
    const toId = document.getElementById('tf-to')?.value || document.getElementById('form-tf-to')?.value;
    const rawAmt =
      document.getElementById('tf-amount')?.value || document.getElementById('form-tf-amount')?.value || '0';
    const amount = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
    const rawFee =
      document.getElementById('tf-fee')?.value || document.getElementById('form-tf-admin')?.value || '0';
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

    const fromAcc = state.accounts.find((a) => a.id === fromId || a.name === fromId);
    const toAcc = state.accounts.find((a) => a.id === toId || a.name === toId);
    if (fromAcc) fromAcc.balance = (Number(fromAcc.balance) || 0) - (amount + adminFee);
    if (toAcc) toAcc.balance = (Number(toAcc.balance) || 0) + amount;

    state.transactions.unshift({
      id: 'trx_' + Date.now(),
      date: todayISO(),
      type: 'TRANSFER',
      category: 'Transfer Antar Akun',
      amount,
      accountId: fromAcc ? fromAcc.id : fromId,
      note: `${note} (${fromAcc?.name || ''} → ${toAcc?.name || ''})`
    });

    saveState();
    closeModal('modal-transfer');
    renderCurrentPage();
    showToast('Transfer berhasil dicatat', 'success');

    const fromName = fromAcc ? fromAcc.name : fromId;
    const toName = toAcc ? toAcc.name : toId;
    apiPost({
      action: 'addTransaction',
      email: getSessionEmail(),
      tanggal: `${todayISO()} 12:00`,
      tipe: 'OUTFLOW',
      akun: fromName,
      kategori: 'Transfer Keluar',
      jumlah: amount + adminFee,
      keterangan: `Transfer ke ${toName}`
    });
    apiPost({
      action: 'addTransaction',
      email: getSessionEmail(),
      tanggal: `${todayISO()} 12:00`,
      tipe: 'INFLOW',
      akun: toName,
      kategori: 'Transfer Masuk',
      jumlah: amount,
      keterangan: `Transfer dari ${fromName}`
    });
  }

  function saveRecurring(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const name =
      document.getElementById('form-rec-name')?.value?.trim() ||
      document.getElementById('rec-name')?.value?.trim() ||
      document.getElementById('form-rec-nama')?.value?.trim();
    const rawAmt =
      document.getElementById('form-rec-amount')?.value || document.getElementById('rec-amount')?.value || '0';
    const amount = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
    const dueDate =
      document.getElementById('form-rec-date')?.value ||
      document.getElementById('rec-date')?.value ||
      document.getElementById('form-rec-tgl')?.value ||
      '1';
    const accountId =
      document.getElementById('form-rec-account')?.value ||
      document.getElementById('rec-account')?.value ||
      document.getElementById('form-rec-rek')?.value ||
      getUserAccounts()[0]?.id;

    if (!name || amount <= 0) {
      showToast('Lengkapi nama tagihan dan nominal', 'warning');
      return;
    }

    state.recurring.push({
      id: 'rec_' + Date.now(),
      name,
      amount,
      cycle: 'Monthly',
      dueDate,
      accountId,
      category: 'Tagihan & Utilitas',
      active: true
    });

    saveState();
    closeModal('modal-recurring');
    renderCurrentPage();
    showToast('Tagihan rutin berhasil disimpan', 'success');

    const acc = state.accounts.find((a) => a.id === accountId || a.name === accountId);
    apiPost({
      action: 'addRecurring',
      email: getSessionEmail(),
      nama: name,
      nominal: amount,
      frekuensi: 'Bulanan',
      tgl_tagihan: dueDate,
      akun: acc ? acc.name : accountId
    });
  }

  function payRecurringNow(recId) {
    const rec = state.recurring.find((r) => r.id === recId);
    if (!rec) return;

    const acc = state.accounts.find((a) => a.id === rec.accountId || a.name === rec.accountId) || getUserAccounts()[0];
    if (acc) acc.balance = (Number(acc.balance) || 0) - (Number(rec.amount) || 0);

    state.transactions.unshift({
      id: 'trx_' + Date.now(),
      date: todayISO(),
      type: 'OUTFLOW',
      category: rec.category || 'Tagihan & Utilitas',
      amount: Number(rec.amount) || 0,
      accountId: acc ? acc.id : '',
      note: `Pembayaran Rutin: ${rec.name}`
    });

    if (String(rec.dueDate || '').includes('-')) {
      const nextDue = new Date(rec.dueDate + 'T00:00:00');
      if (!isNaN(nextDue.getTime())) {
        nextDue.setMonth(nextDue.getMonth() + 1);
        rec.dueDate = `${nextDue.getFullYear()}-${String(nextDue.getMonth() + 1).padStart(2, '0')}-${String(
          nextDue.getDate()
        ).padStart(2, '0')}`;
      }
    }

    saveState();
    renderCurrentPage();
    showToast(`Tagihan ${rec.name} dibayar!`, 'success');
  }

  function deleteRecurring(recId) {
    state.recurring = state.recurring.filter((r) => r.id !== recId);
    saveState();
    renderCurrentPage();
    showToast('Tagihan rutin dihapus', 'info');

    apiPost({
      action: 'deleteRecurring',
      email: getSessionEmail(),
      idRec: recId
    }).then(() => fetchAllData());
  }

  function saveDebt(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const rawType =
      document.getElementById('form-debt-tipe')?.value || document.getElementById('debt-type')?.value || 'DEBT';
    const type =
      rawType.toUpperCase().includes('UTANG') || rawType === 'DEBT' || rawType === 'PAYABLE' ? 'DEBT' : 'RECEIVABLE';
    const person =
      document.getElementById('form-debt-name')?.value?.trim() ||
      document.getElementById('debt-person')?.value?.trim() ||
      document.getElementById('form-debt-nama')?.value?.trim();
    const rawAmt =
      document.getElementById('form-debt-amount')?.value || document.getElementById('debt-amount')?.value || '0';
    const amount = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
    const dueDate =
      document.getElementById('form-debt-jatuh-tempo')?.value ||
      document.getElementById('debt-due')?.value ||
      offsetDateISO(7);
    const note =
      document.getElementById('form-debt-desc')?.value?.trim() ||
      document.getElementById('debt-note')?.value?.trim() ||
      '';

    if (!person || amount <= 0) {
      showToast('Lengkapi nama pihak dan nominal', 'warning');
      return;
    }

    state.debts.push({
      id: 'debt_' + Date.now(),
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

  function settleDebt(debtId) {
    const debt = state.debts.find((d) => d.id === debtId);
    if (!debt) return;
    const payingAcc = getUserAccounts()[0];
    debt.paid = debt.amount;
    debt.settled = true;
    debt.settledDate = todayISO();
    state.debtHistory = state.debtHistory || [];
    state.debtHistory.unshift({ ...debt });
    saveState();
    renderCurrentPage();
    showToast(`${debt.person} ditandai lunas`, 'success');

    apiPost({
      action: 'payDebt',
      email: getSessionEmail(),
      idDebt: debtId,
      nominal: debt.amount,
      akun: payingAcc ? payingAcc.name : ''
    }).then(() => fetchAllData());
  }

  function renderDebtHistoryModal() {
    const box = document.getElementById('debt-history-list') || document.getElementById('debt-history-list-container');
    if (!box) return;
    const hist = state.debtHistory || [];
    if (hist.length === 0) {
      box.innerHTML = `<p class="text-xs text-stone-400 text-center py-6">Belum ada riwayat pelunasan</p>`;
      return;
    }
    box.innerHTML = hist
      .map(
        (h) => `
          <div class="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#161D19] flex justify-between items-center text-xs">
            <div>
              <p class="font-bold text-stone-900 dark:text-white">${escapeHTML(h.person)}</p>
              <p class="text-[10px] text-stone-400">Lunas: ${escapeHTML(h.settledDate || '-')}</p>
            </div>
            <span class="font-extrabold text-emerald-600 dark:text-emerald-400">${escapeHTML(
              formatCurrency(h.amount)
            )}</span>
          </div>
        `
      )
      .join('');
  }

  function saveWallet(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('wallet-name')?.value?.trim();
    const platform = document.getElementById('wallet-platform')?.value?.trim() || 'Broker';
    const balance = Number(document.getElementById('wallet-balance')?.value) || 0;
    if (!name) return;

    state.wallets.push({ id: 'wal_' + Date.now(), name, platform, balance });
    saveState();
    closeModal('modal-add-wallet');
    renderCurrentPage();
    showToast('Dompet investasi ditambahkan', 'success');
  }

  function deleteWallet(id) {
    state.wallets = state.wallets.filter((w) => w.id !== id);
    saveState();
    renderCurrentPage();
    showToast('Dompet dihapus', 'info');
  }

  function saveAsset(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('asset-name')?.value?.trim();
    const symbol = (document.getElementById('asset-symbol')?.value || name || 'ASET').trim().toUpperCase();
    const category = document.getElementById('asset-category')?.value || 'Saham';
    const qty = Number(document.getElementById('asset-qty')?.value) || 0;
    const buyPrice = Number(document.getElementById('asset-price')?.value) || 0;
    const currentPrice = Number(document.getElementById('asset-current-price')?.value) || buyPrice;
    const walletId = document.getElementById('asset-wallet')?.value || '';

    if (!name || qty <= 0 || buyPrice <= 0) {
      showToast('Lengkapi detail pembelian aset', 'warning');
      return;
    }

    state.assets.push({
      id: 'ast_' + Date.now(),
      symbol,
      name,
      category,
      currency: 'IDR',
      qty,
      buyPrice,
      currentPrice,
      walletId
    });

    saveState();
    closeModal('modal-buy-asset');
    renderCurrentPage();
    showToast('Aset berhasil ditambahkan ke portofolio', 'success');
  }

  function saveGoal(e) {
    if (e) e.preventDefault();
    const title = document.getElementById('goal-title')?.value?.trim();
    const target = Number(document.getElementById('goal-target')?.value) || 0;
    const saved = Number(document.getElementById('goal-saved')?.value) || 0;
    const deadline = document.getElementById('goal-deadline')?.value || '';

    if (!title || target <= 0) {
      showToast('Lengkapi nama target dan nominal', 'warning');
      return;
    }

    state.goals.push({
      id: 'goal_' + Date.now(),
      title,
      target,
      saved,
      deadline
    });

    saveState();
    closeModal('modal-goal');
    renderCurrentPage();
    showToast('Target tabungan dibuat', 'success');
  }

  function topupGoal(goalId) {
    const goal = state.goals.find((g) => g.id === goalId);
    if (!goal) return;
    const label = goal.title || goal.name || 'Target';
    const add = Number(prompt(`Tambah tabungan untuk "${label}" (Rp):`, '500000')) || 0;
    if (add <= 0) return;
    goal.saved = (Number(goal.saved ?? goal.current) || 0) + add;
    goal.current = goal.saved;
    saveState();
    renderCurrentPage();
    showToast(`+${formatCurrency(add)} ditambahkan ke ${label}`, 'success');
  }

  /* --------------------------------------------------------------------------
   * 14. RECEIPT SCANNER & PDF STATEMENT EXPORT
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
                const amtEl = document.getElementById('form-trx-amount') || document.getElementById('trx-amount');
                if (amtEl && aiData.total) {
                  amtEl.value = new Intl.NumberFormat('id-ID').format(aiData.total);
                }
                const descEl = document.getElementById('form-trx-desc') || document.getElementById('trx-note');
                if (descEl && aiData.merchant) {
                  descEl.value = aiData.merchant;
                }
                const dateEl = document.getElementById('form-trx-date') || document.getElementById('trx-date');
                if (dateEl && aiData.date) {
                  dateEl.value = aiData.date;
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
        showToast('Gambar struk tersimpan', 'success');
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  function renderExportModal() {
    const trxs = state.transactions || [];
    const years = new Set();
    trxs.forEach((t) => {
      if (t.date) years.add(new Date(toLocalISODate(t.date) + 'T00:00:00').getFullYear());
    });
    if (years.size === 0) years.add(new Date().getFullYear());
    const sortedYears = Array.from(years).sort((a, b) => b - a);
    if (!sortedYears.includes(exportSelectedYear)) exportSelectedYear = sortedYears[0];

    const yearContainer = document.getElementById('export-year-container');
    if (yearContainer) {
      yearContainer.innerHTML = sortedYears
        .map((year) => {
          const isActive = year === exportSelectedYear;
          return `<button type="button" onclick="setExportYear(${year})" class="px-5 py-2 text-sm font-bold rounded-full whitespace-nowrap border transition-all ${
            isActive
              ? 'bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] border-transparent shadow-md'
              : 'bg-white dark:bg-[#161D19] text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-800'
          }">${year}</button>`;
        })
        .join('');
    }

    const monthContainer = document.getElementById('export-month-container');
    if (monthContainer) {
      const monthNames =
        getLang() === 'id'
          ? ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
          : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const activeMonths = new Set();
      trxs.forEach((t) => {
        if (!t.date) return;
        const d = new Date(toLocalISODate(t.date) + 'T00:00:00');
        if (d.getFullYear() === exportSelectedYear) activeMonths.add(d.getMonth());
      });
      if (activeMonths.size === 0) activeMonths.add(new Date().getMonth());

      const rows = [];
      for (let m = 11; m >= 0; m--) {
        if (activeMonths.has(m)) {
          rows.push(
            `<button type="button" onclick="generateStatementPDF(${m}, ${exportSelectedYear})" class="w-full bg-[#FAF8F5] dark:bg-[#161D19] p-4 rounded-2xl border border-stone-200/70 dark:border-stone-800 flex justify-between items-center hover:bg-[#EDF5F0] dark:hover:bg-[#1D2722] transition"><span class="font-bold text-xs text-stone-800 dark:text-stone-200">${monthNames[m]} ${exportSelectedYear}</span><svg class="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>`
          );
        }
      }
      monthContainer.innerHTML = rows.join('');
    }
  }

  function setExportYear(year) {
    exportSelectedYear = year;
    renderExportModal();
  }

  function generateStatementPDF(monthIdx, year) {
    const periodTrx =
      typeof monthIdx === 'number' && typeof year === 'number'
        ? (state.transactions || []).filter((t) => {
            const d = new Date(toLocalISODate(t.date) + 'T00:00:00');
            return d.getMonth() === monthIdx && d.getFullYear() === year;
          })
        : getPeriodFilteredTransactions();

    const win = window.open('', '_blank', 'width=840,height=900');
    if (!win) {
      showToast('Izinkan pop-up browser untuk mencetak PDF', 'warning');
      return;
    }

    const rows = periodTrx
      .map((t) => {
        const normType = normalizeTrxType(t);
        return `
          <tr>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${escapeHTML(toLocalISODate(t.date))}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${escapeHTML(t.category)}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${escapeHTML(t.note || '-')}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:700;color:${
              normType === 'INFLOW' ? '#0F5132' : '#DC2626'
            };">${normType === 'INFLOW' ? '+' : '-'}${escapeHTML(formatCurrency(t.amount))}</td>
          </tr>
        `;
      })
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
            <tbody>${rows || '<tr><td colspan="4" style="padding:16px;text-align:center;">Tidak ada transaksi</td></tr>'}</tbody>
          </table>
          <script>window.onload = () => { window.print(); };</script>
        </body>
      </html>
    `);
    win.document.close();
    closeModal('modal-export-pdf');
  }

  /* --------------------------------------------------------------------------
   * 15. CLOUD SYNC (GOOGLE APPS SCRIPT KODE.GS) & JSON BACKUP
   * -------------------------------------------------------------------------- */
  function getApiUrl() {
    return localStorage.getItem(GAS_URL_KEY) || DEFAULT_API_URL;
  }

  function getSessionEmail() {
    let email = localStorage.getItem('fintrack_session_email') || localStorage.getItem(ACTIVE_USER_KEY) || '';
    if (!email) {
      email = state.activeUser || 'bayubt62@gmail.com';
    }
    if (!email.includes('@')) {
      email = email + '@gmail.com';
    }
    return email.toLowerCase().trim();
  }

  function getProp(obj, ...possibleKeys) {
    if (!obj) return undefined;
    const keys = Object.keys(obj);
    for (const pk of possibleKeys) {
      const target = pk.toString().replace(/[_ ]/g, '').toLowerCase();
      const match = keys.find((k) => k.toString().replace(/[_ ]/g, '').toLowerCase() === target);
      if (match && obj[match] !== undefined && obj[match] !== '') return obj[match];
    }
    return undefined;
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
    if (!url) {
      showToast('URL Google Apps Script belum disetel', 'warning');
      return;
    }

    refreshForexRate();
    showToast('Menyinkronkan data dari Google Sheets...', 'info');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 16000);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'getData', email: email }),
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
          if (text.includes('GANTI_DENGAN_ID_SPREADSHEET_ANDA') || text.includes('Illegal spreadsheet id')) {
            showToast('ID Spreadsheet di Kode.gs belum diganti!', 'warning');
          } else {
            showToast('Koneksi Apps Script error, cek Kode.gs', 'warning');
          }
          return;
        }

        if (json.status === 'success' && json.data) {
          rawBackendData = json.data;
          parseBackendDataIntoState(json.data);
          saveState(true);
          renderCurrentPage();
          showToast('Data Google Sheets berhasil disinkronkan!', 'success');
          return;
        } else if (json.message) {
          showToast(json.message, 'warning');
        }
      } else {
        showToast(`Server Apps Script: Status ${res.status}`, 'warning');
      }
    } catch (err) {
      clearTimeout(timeoutId);
      console.warn('[Fintrack] fetchAllData failed:', err);
      showToast('Mode offline aktif — menggunakan data lokal', 'info');
    }
  }

  function parseBackendDataIntoState(data) {
    // 1. M_Akun -> state.accounts & state.wallets
    if (Array.isArray(data.M_Akun)) {
      const regularAccounts = [];
      const wallets = [];

      data.M_Akun.forEach((acc, i) => {
        const nama = getProp(acc, 'Nama_Akun', 'Nama Akun', 'nama') || 'Akun';
        const tipe = getProp(acc, 'Tipe_Akun', 'Tipe Akun', 'tipe') || 'BANK';
        const valReal = getProp(acc, 'Saldo_Realtime', 'Saldo Realtime', 'Saldo_Awal', 'Saldo Awal');
        const balance = extractNumber(valReal);
        const noRek = getProp(acc, 'Nomor_Rekening', 'No Rekening', 'Rekening') || '•••• ' + (4000 + i);
        const id = getProp(acc, 'ID_Akun', 'ID Akun', 'id') || 'acc_' + i;

        let theme = 'emerald';
        const lower = nama.toLowerCase();
        if (lower.includes('bca')) theme = 'bca';
        else if (lower.includes('mandiri')) theme = 'mandiri';
        else if (lower.includes('bni')) theme = 'bni';
        else if (
          lower.includes('gopay') ||
          lower.includes('ovo') ||
          lower.includes('dana') ||
          lower.includes('shopee')
        ) {
          theme = 'ewallet';
        } else if (lower.includes('gold') || lower.includes('emas')) {
          theme = 'gold';
        } else {
          theme = i % 2 === 0 ? 'emerald' : 'obsidian';
        }

        if (tipe === 'Wallet Investasi' || lower.includes('rdn') || lower.includes('sekuritas') || lower.includes('wallet')) {
          wallets.push({
            id: id,
            name: nama,
            platform: nama,
            balance: balance
          });
        } else {
          regularAccounts.push({
            id: id,
            name: nama,
            type: tipe.toUpperCase().includes('WALLET')
              ? 'E-WALLET'
              : tipe.toUpperCase().includes('CASH') || tipe.toUpperCase().includes('TUNAI')
              ? 'CASH'
              : 'BANK',
            number: noRek,
            balance: balance,
            theme: theme,
            owner: state.activeUser
          });
        }
      });

      if (regularAccounts.length > 0) state.accounts = regularAccounts;
      if (wallets.length > 0) state.wallets = wallets;
    }

    // 2. T_Transaksi -> state.transactions
    if (Array.isArray(data.T_Transaksi)) {
      state.transactions = data.T_Transaksi.map((t, i) => {
        const rawTipe = (getProp(t, 'Tipe', 'tipe', 'Type') || 'OUTFLOW').toString().trim().toUpperCase();
        const category = (getProp(t, 'Kategori', 'kategori', 'Category') || 'Lainnya').toString().trim();
        const rawDate = getProp(t, 'Tanggal', 'tanggal', 'Date') || todayISO();
        const dateStr = toLocalISODate(rawDate);
        const rawAmt = getProp(t, 'Jumlah', 'jumlah', 'Nominal', 'nominal', 'Amount');
        const amount = extractNumber(rawAmt);
        const accountName = getProp(t, 'Nama_Akun', 'Akun', 'akun', 'Account') || '';
        const matchingAcc = state.accounts.find((a) => a.name === accountName || a.id === accountName);
        const accountId = matchingAcc ? matchingAcc.id : accountName;
        const note = getProp(t, 'Keterangan', 'keterangan', 'Description') || category;

        const normType = normalizeTrxType({ type: rawTipe, category });

        return {
          id: getProp(t, 'ID_Transaksi', 'ID Trx', 'ID Transaksi', 'id') || 'trx_' + i,
          date: dateStr,
          rawDate: String(rawDate),
          type: normType,
          rawTipe: rawTipe,
          category: category,
          amount: amount,
          accountId: accountId,
          note: note,
          receipt: ''
        };
      });
    }

    // 3. M_Recurring -> state.recurring
    if (Array.isArray(data.M_Recurring)) {
      state.recurring = data.M_Recurring.map((r, i) => {
        const name = getProp(r, 'Nama', 'nama', 'Nama_Langganan') || 'Langganan';
        const amount = extractNumber(getProp(r, 'Nominal', 'nominal', 'Jumlah'));
        const dueDate = getProp(r, 'Tgl_Tagihan', 'Tanggal', 'tgl_tagihan') || 1;
        const frek = getProp(r, 'Frekuensi', 'frekuensi') || 'Monthly';
        const accName = getProp(r, 'Akun_Sumber', 'Akun', 'akun', 'Rekening') || '';

        return {
          id: getProp(r, 'ID_Recurring', 'ID', 'id') || 'rec_' + i,
          name: name,
          amount: amount,
          cycle: frek,
          dueDate: dueDate,
          accountId: accName,
          category: 'Tagihan & Utilitas',
          active: true
        };
      });
    }

    // 4. M_Debt -> state.debts
    if (Array.isArray(data.M_Debt)) {
      state.debts = data.M_Debt.map((d, i) => {
        const rawTipe = (getProp(d, 'Tipe', 'tipe') || 'Hutang').toLowerCase();
        const type = rawTipe.includes('piutang') || rawTipe === 'receivable' ? 'RECEIVABLE' : 'DEBT';
        const person = getProp(d, 'Kontak', 'kontak', 'Nama', 'nama', 'Pihak') || 'Pihak Lain';
        const awal = extractNumber(getProp(d, 'Nominal_Awal', 'Nominal Awal', 'Jumlah_Awal', 'Nominal', 'nominal'));
        const sisa = extractNumber(getProp(d, 'Sisa', 'Sisa_Saldo', 'sisa'));
        const amount = awal || sisa || 0;
        const paid = awal > sisa ? awal - sisa : 0;
        const dueDate = getProp(d, 'Jatuh_Tempo', 'Jatuh Tempo', 'jatuhTempo') || offsetDateISO(7);
        const note = getProp(d, 'Keterangan', 'keterangan') || '';
        const status = (getProp(d, 'Status', 'status') || '').toUpperCase();
        const settled = status === 'COMPLETED' || (sisa === 0 && awal > 0);

        return {
          id: getProp(d, 'ID_Debt', 'ID Debt', 'ID', 'id') || 'debt_' + i,
          type: type,
          person: person,
          amount: amount,
          paid: paid,
          dueDate: dueDate,
          note: note,
          settled: settled
        };
      });
    }

    // 5. M_Goals -> state.goals
    if (Array.isArray(data.M_Goals)) {
      state.goals = data.M_Goals.map((g, i) => {
        const name = getProp(g, 'Nama_Goal', 'Nama Goal', 'Nama', 'nama') || 'Target';
        const target = extractNumber(getProp(g, 'Target_Nominal', 'Target Nominal', 'Target', 'target'));
        const current = extractNumber(getProp(g, 'Terkumpul', 'terkumpul', 'Nominal'));
        const deadline = getProp(g, 'Tenggat_Waktu', 'Tenggat Waktu', 'Tenggat') || offsetDateISO(90);
        const status = (getProp(g, 'Status', 'status') || 'ACTIVE').toUpperCase();

        return {
          id: getProp(g, 'ID_Goal', 'ID', 'id') || 'goal_' + i,
          title: name,
          name: name,
          target: target,
          saved: current,
          current: current,
          deadline: deadline,
          status: status
        };
      });
    }

    // 6. M_Portofolio -> state.assets (Reads live price from Harga_Saat_Ini / Harga_Realtime + currency)
    if (Array.isArray(data.M_Portofolio)) {
      state.assets = data.M_Portofolio.map((p, i) => {
        const symbol = String(getProp(p, 'Simbol', 'simbol', 'Nama_Aset') || 'ASET')
          .trim()
          .toUpperCase();
        const rawName = String(getProp(p, 'Nama_Aset', 'Nama Aset', 'Simbol') || symbol).trim();
        const category = String(getProp(p, 'Jenis_Aset', 'Jenis Aset', 'Jenis') || 'Saham').trim();
        const currency = String(getProp(p, 'Mata_Uang', 'Mata Uang', 'Currency') || 'IDR')
          .trim()
          .toUpperCase();
        const qtyRaw = String(getProp(p, 'Jumlah', 'Unit', 'lot') || '0').replace(',', '.');
        const qty = parseFloat(qtyRaw) || 0;
        const buyPrice = extractPriceNumber(getProp(p, 'Harga_Beli', 'Harga Beli', 'Harga'), currency);
        const liveRaw = getProp(
          p,
          'Harga_Saat_Ini',
          'Harga Saat Ini',
          'Harga_Realtime',
          'Harga Realtime',
          'Current_Price'
        );
        const parsedLive = extractPriceNumber(liveRaw, currency);
        const currentPrice = parsedLive > 0 ? parsedLive : buyPrice;
        const walletId = getProp(p, 'Wallet', 'wallet', 'Akun') || state.wallets[0]?.id || 'wal_1';

        return {
          id: getProp(p, 'ID_Aset', 'ID Aset', 'id') || 'ast_' + i,
          symbol: symbol,
          name: rawName,
          category: category,
          currency: currency,
          qty: qty,
          buyPrice: buyPrice,
          currentPrice: currentPrice,
          walletId: walletId
        };
      });
    }
  }

  function syncWithCloud() {
    fetchAllData();
  }

  function saveGasUrl() {
    const emailVal = document.getElementById('settings-email-input')?.value?.trim() || '';
    if (emailVal) {
      localStorage.setItem('fintrack_session_email', emailVal);
    }
    const val = document.getElementById('gas-url-input')?.value?.trim() || '';
    if (val) {
      localStorage.setItem(GAS_URL_KEY, val);
      showToast('Pengaturan Cloud disimpan & menyinkronkan...', 'success');
      fetchAllData();
    } else {
      localStorage.removeItem(GAS_URL_KEY);
      showToast('Menggunakan URL deployment default & menyinkronkan...', 'info');
      fetchAllData();
    }
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
   * 16. SECURITY SANITIZER, MODAL HANDLERS & INITIALIZATION
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
      }, 400);
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

  function formatDecimalInput(el) {
    if (!el) return;
    let val = el.value.replace(/[^0-9.]/g, '');
    if ((val.match(/\./g) || []).length > 1) {
      val = val.substring(0, val.lastIndexOf('.'));
    }
    el.value = val;
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
    const email = (emailInput?.value || '').trim();
    const password = passInput?.value || '';

    if (!email) {
      showToast('Masukkan alamat email terdaftar', 'warning');
      return;
    }

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
          body: JSON.stringify({ action: 'login', email: email, password: password })
        });
        if (res.ok) {
          const json = await res.json();
          if (json.status === 'success') {
            state.activeUser = json.name || email.split('@')[0];
            localStorage.setItem(ACTIVE_USER_KEY, state.activeUser);
            localStorage.setItem('fintrack_session_email', json.email || email);
            const loginPage = document.getElementById('login-page');
            if (loginPage) loginPage.classList.add('hidden-page');
            const appWrapper = document.getElementById('app-wrapper');
            if (appWrapper) appWrapper.classList.remove('hidden-page');
            closeLoader();
            renderCurrentPage();
            showToast(`Selamat datang, ${state.activeUser}!`, 'success');
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

    state.activeUser = email.split('@')[0] || 'Bayu';
    localStorage.setItem(ACTIVE_USER_KEY, state.activeUser);
    localStorage.setItem('fintrack_session_email', email.includes('@') ? email : email + '@gmail.com');
    const loginPage = document.getElementById('login-page');
    if (loginPage) loginPage.classList.add('hidden-page');
    const appWrapper = document.getElementById('app-wrapper');
    if (appWrapper) appWrapper.classList.remove('hidden-page');
    closeLoader();
    renderCurrentPage();
    showToast(`Selamat datang, ${state.activeUser}!`, 'info');
    fetchAllData();
    if (btn) {
      btn.disabled = false;
      btn.textContent = origText;
    }
  }

  function handleLogout() {
    localStorage.removeItem(ACTIVE_USER_KEY);
    localStorage.removeItem('fintrack_session_email');
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
    const id = document.getElementById('det-acc-id')?.value;
    closeModal('modal-account-detail');
    openAccountModal(id);
  }

  function copyAccountInfo() {
    const num = document.getElementById('det-acc-number')?.textContent || '';
    if (num && navigator.clipboard) {
      navigator.clipboard.writeText(num.replace(/[^0-9]/g, ''));
      showToast('Nomor rekening disalin!', 'success');
    }
  }

  function openWalletDetailModal(name, balance) {
    const nameEl = document.getElementById('det-wallet-name');
    if (nameEl) nameEl.textContent = name;
    const balEl = document.getElementById('det-wallet-bal');
    if (balEl) {
      setMaskedValue(balEl, formatCurrency(balance), Number(balance) || 0);
    }
    const modal = document.getElementById('modal-wallet-detail');
    if (modal) openModal('modal-wallet-detail');
  }

  function submitAddWallet(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const name = document.getElementById('form-wallet-name')?.value?.trim() || prompt('Nama Dompet Investasi:');
    const rawBal = document.getElementById('form-wallet-bal')?.value || '0';
    const balance = Number(String(rawBal).replace(/[^0-9]/g, '')) || 0;
    if (!name) return;
    state.wallets = state.wallets || [];
    state.wallets.push({
      id: 'wal_' + Date.now(),
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

  function handleBuyAssetAccountChange() {
    const acc = document.getElementById('form-asset-account')?.value || '';
    const priceLabel = document.getElementById('lbl-buy-price');
    const priceInput = document.getElementById('form-asset-harga');
    if (!priceInput) return;

    if (acc.startsWith('VALAS_')) {
      const curr = acc.replace('VALAS_', '');
      if (priceLabel) priceLabel.textContent = getLang() === 'id' ? `Harga Satuan (${curr})` : `Price per Unit (${curr})`;
      priceInput.oninput = function () {
        formatDecimalInput(this);
      };
      priceInput.placeholder = '0.00';
    } else {
      if (priceLabel) priceLabel.textContent = getLang() === 'id' ? 'Harga Satuan (Rp)' : 'Price per Unit (Rp)';
      priceInput.oninput = function () {
        formatRupiahInput(this);
      };
      priceInput.placeholder = '0';
    }
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
    const name = (
      document.getElementById('form-asset-nama')?.value ||
      document.getElementById('form-buy-asset-nama')?.value ||
      symbol
    ).trim();
    const type =
      document.getElementById('form-asset-jenis')?.value ||
      document.getElementById('form-buy-asset-tipe')?.value ||
      'Saham Indonesia';
    const rawPrice =
      document.getElementById('form-asset-harga')?.value ||
      document.getElementById('form-buy-asset-harga')?.value ||
      '0';
    const price = extractPriceNumber(rawPrice, 'IDR');
    const units =
      parseFloat(
        String(
          document.getElementById('form-asset-jumlah')?.value ||
            document.getElementById('form-buy-asset-lot')?.value ||
            '1'
        ).replace(',', '.')
      ) || 1;
    const walletId =
      document.getElementById('form-asset-account')?.value ||
      document.getElementById('form-buy-asset-wallet')?.value ||
      (state.wallets && state.wallets[0]?.id) ||
      'wal_1';
    const walletObj =
      (state.wallets || []).find((w) => w.id === walletId || w.name === walletId) ||
      state.accounts.find((a) => a.id === walletId || a.name === walletId) ||
      getUserAccounts()[0];

    if (price <= 0 || units <= 0) {
      showToast('Harga dan unit aset tidak valid', 'warning');
      return;
    }

    state.assets = state.assets || [];
    state.assets.push({
      id: 'ast_' + Date.now(),
      symbol: symbol,
      name: name,
      category: type,
      currency: 'IDR',
      qty: units,
      buyPrice: price,
      currentPrice: price,
      walletId
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
      totalHarga: price * units,
      akun: walletObj ? walletObj.name : ''
    }).then(() => fetchAllData());
  }

  function submitSellAsset(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const idAset = document.getElementById('form-sell-asset-id')?.value || '';
    const simbol = document.getElementById('form-sell-asset-simbol')?.value || '';
    const unitDijual =
      parseFloat(String(document.getElementById('form-sell-asset-jumlah')?.value || '0').replace(',', '.')) || 0;
    const hargaJual = extractNumber(document.getElementById('form-sell-asset-harga')?.value);
    const akunTujuan = document.getElementById('form-sell-asset-account')?.value || '';

    if (unitDijual <= 0 || hargaJual <= 0 || !akunTujuan) {
      showToast('Lengkapi detail penjualan aset', 'warning');
      return;
    }

    const targetAcc =
      state.accounts.find((a) => a.id === akunTujuan || a.name === akunTujuan) ||
      state.wallets.find((w) => w.id === akunTujuan || w.name === akunTujuan);

    apiPost({
      action: 'sellAsset',
      email: getSessionEmail(),
      idAset: idAset,
      simbol: simbol,
      jumlahJual: unitDijual,
      totalDapat: unitDijual * hargaJual,
      akunTujuan: targetAcc ? targetAcc.name : akunTujuan
    }).then(() => fetchAllData());

    closeModal('modal-sell-asset');
    showToast(`Penjualan ${simbol} diproses`, 'success');
  }

  function openAssetDetailModal(
    idAset,
    simbol,
    jenisAset,
    lot,
    avgHargaIDR,
    investasiIDR,
    liveHargaIDR,
    totalValIDR,
    nominalReturnIDR,
    pnlPercent
  ) {
    window.lastAssetData = {
      idAset,
      simbol,
      jenisAset,
      lot,
      avgHarga: avgHargaIDR,
      investasi: investasiIDR,
      liveHarga: liveHargaIDR,
      totalVal: totalValIDR,
      nominalReturn: nominalReturnIDR,
      pnlPercent
    };

    const modal = document.getElementById('modal-asset-detail');
    if (!modal) return;

    const simbolEl = document.getElementById('det-aset-simbol');
    if (simbolEl) simbolEl.textContent = simbol;
    const logoEl = document.getElementById('det-aset-logo');
    if (logoEl) logoEl.innerHTML = getAssetAvatarHtml(simbol);

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
        if (displaySimbol) displaySimbol.textContent = simbol;
        const displayMax = document.getElementById('sell-asset-max-display');
        if (displayMax) {
          displayMax.textContent = formatUnitQty(lot);
          displayMax.setAttribute('data-raw', String(lot));
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
          prepareReceiveDividend(simbol);
        };
      } else {
        btnDividen.classList.add('hidden');
      }
    }

    updateAssetDetailCurrencyView();
    openModal('modal-asset-detail');
  }

  function setAssetDetailCurrency(curr) {
    window.currentActiveCurrency = curr;
    updateAssetDetailCurrencyView();
  }

  function updateAssetDetailCurrencyView() {
    if (!window.lastAssetData) return;
    const { simbol, lot, avgHarga, investasi, liveHarga, totalVal, nominalReturn, pnlPercent } =
      window.lastAssetData;
    const curr = window.currentActiveCurrency || 'IDR';
    const rate = Number(window.usdExchangeRate) || 16250;
    const mask = isPrivacyEnabled();

    const fmt = (numIDR) =>
      curr === 'IDR'
        ? formatCurrency(numIDR, 'IDR')
        : '$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numIDR / rate);

    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setTxt('det-aset-live', mask ? '••••••••' : fmt(liveHarga));
    setTxt('det-aset-lot', `${formatUnitQty(lot)} Unit`);
    setTxt('det-aset-avg', mask ? '••••••••' : fmt(avgHarga));
    setTxt('det-aset-invest', mask ? '••••••••' : fmt(investasi));
    setTxt('det-aset-total', mask ? '••••••••' : fmt(totalVal));

    const pnlSign = nominalReturn > 0 ? '+' : '';
    const pnlColor =
      nominalReturn >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400';
    const retStr = `${pnlSign}${fmt(Math.abs(nominalReturn))} (${pnlSign}${Number(pnlPercent || 0).toFixed(2)}%)`;

    const retEl = document.getElementById('det-aset-return');
    if (retEl) {
      retEl.textContent = retStr;
      retEl.className = `text-xs font-bold text-right ${pnlColor}`;
    }
    const liveChgEl = document.getElementById('det-aset-live-change');
    if (liveChgEl) {
      liveChgEl.textContent = retStr;
      liveChgEl.className = `text-xs font-bold mt-1 ${pnlColor}`;
    }

    const btnIdr = document.getElementById('currency-btn-idr');
    const btnUsd = document.getElementById('currency-btn-usd');
    if (btnIdr && btnUsd) {
      if (curr === 'IDR') {
        btnIdr.className = 'px-2.5 py-1 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] transition-all';
        btnUsd.className = 'px-2.5 py-1 rounded-full text-stone-400 transition-all';
      } else {
        btnUsd.className = 'px-2.5 py-1 rounded-full bg-[#0F5132] dark:bg-emerald-500 text-white dark:text-[#070908] transition-all';
        btnIdr.className = 'px-2.5 py-1 rounded-full text-stone-400 transition-all';
      }
    }

    const canvas = document.getElementById('portoChart');
    if (canvas && typeof Chart !== 'undefined') {
      if (assetDetailLineChartInstance) assetDetailLineChartInstance.destroy();
      const ctx = canvas.getContext('2d');
      const points = 16;
      const series = [];
      let p = liveHarga;
      for (let i = 0; i < points; i++) {
        p = p * (1 + (Math.random() - 0.48) * 0.025);
        series.unshift(p);
      }
      series[points - 1] = liveHarga;
      assetDetailLineChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: series.map((_, i) => String(i)),
          datasets: [
            {
              data: series,
              borderColor: '#10B981',
              borderWidth: 2,
              fill: true,
              backgroundColor: 'rgba(16, 185, 129, 0.14)',
              tension: 0.4,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: { x: { display: false }, y: { display: false } }
        }
      });
    }
  }

  function setChartFilter(filter) {
    window.currentActiveFilter = filter;
    document.querySelectorAll('.time-filter-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });
    if (window.lastAssetData) updateAssetDetailCurrencyView();
  }

  function prepareReceiveDividend(simbol) {
    const disp = document.getElementById('dividend-asset-simbol-display');
    if (disp) disp.textContent = simbol;
    openModal('modal-dividend');
  }

  function submitGoal(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const name =
      document.getElementById('form-goal-name')?.value?.trim() ||
      document.getElementById('form-goal-nama')?.value?.trim() ||
      document.getElementById('goal-title')?.value?.trim();
    const rawTarget =
      document.getElementById('form-goal-amount')?.value || document.getElementById('goal-target')?.value || '0';
    const target = Number(String(rawTarget).replace(/[^0-9]/g, '')) || 0;

    if (!name || target <= 0) {
      showToast('Nama target dan nominal target harus diisi', 'warning');
      return;
    }

    state.goals = state.goals || [];
    state.goals.push({
      id: 'goal_' + Date.now(),
      title: name,
      name,
      target,
      saved: 0,
      current: 0,
      deadline: offsetDateISO(90)
    });

    saveState();
    closeModal('modal-goal');
    renderCurrentPage();
    showToast('Target tabungan berhasil dibuat', 'success');

    apiPost({
      action: 'addGoal',
      email: getSessionEmail(),
      nama: name,
      target: target
    }).then(() => fetchAllData());
  }

  function submitPayDebt(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const debtId = document.getElementById('form-pay-debt-id')?.value;
    if (debtId) settleDebt(debtId);
    closeModal('modal-pay-debt');
  }

  function submitReceiveDividend(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const rawAmt = document.getElementById('form-dividend-amount')?.value || '0';
    const amount = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
    const accId = document.getElementById('form-dividend-account')?.value || getUserAccounts()[0]?.id;
    if (amount <= 0) {
      showToast('Nominal dividen tidak valid', 'warning');
      return;
    }
    const acc = state.accounts.find((a) => a.id === accId || a.name === accId);
    if (acc) acc.balance = (Number(acc.balance) || 0) + amount;
    state.transactions.unshift({
      id: 'trx_' + Date.now(),
      date: todayISO(),
      type: 'INFLOW',
      category: 'Dividen',
      amount,
      accountId: acc ? acc.id : accId,
      note: 'Penerimaan Dividen Saham'
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
      akun: acc ? acc.name : accId,
      kategori: 'Dividen',
      jumlah: amount,
      keterangan: 'Penerimaan Dividen Saham'
    }).then(() => fetchAllData());
  }

  function deleteRecurringAction(id) {
    const recId = id || document.getElementById('det-rec-id')?.value;
    if (!recId) return;
    if (confirm('Hapus tagihan langganan ini?')) {
      deleteRecurring(recId);
      closeModal('modal-rec-detail');
    }
  }

  function deleteWalletAction(id) {
    const wal = id
      ? (state.wallets || []).find((w) => w.id === id)
      : (state.wallets || []).find((w) => w.name === document.getElementById('det-wallet-name')?.textContent);
    if (!wal) return;
    if (confirm(`Hapus dompet investasi "${wal.name}"?`)) {
      state.wallets = state.wallets.filter((w) => w.id !== wal.id);
      saveState();
      closeModal('modal-wallet-detail');
      renderCurrentPage();
      showToast('Dompet investasi dihapus', 'info');

      apiPost({
        action: 'deleteWallet',
        email: getSessionEmail(),
        nama: wal.name
      }).then(() => fetchAllData());
    }
  }

  function payRecurringNowAction(id) {
    if (!id) return;
    payRecurringNow(id);
    closeModal('modal-rec-detail');
  }

  function processGoalAction(action, isDone) {
    const goalId = document.getElementById('form-goal-action-id')?.value;
    if (!goalId) return;
    const goal = (state.goals || []).find((g) => g.id === goalId);
    if (!goal) return;

    let nominalVal = 0;
    const payingAcc = getUserAccounts()[0];

    if (action === 'withdraw') {
      const rawAmt = document.getElementById('form-withdraw-amount')?.value || '0';
      const amt = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
      nominalVal = amt;
      if (isDone) {
        goal.saved = 0;
        goal.current = 0;
        showToast('Target selesai dicapai!', 'success');
      } else if (amt > 0) {
        goal.saved = Math.max(0, (Number(goal.saved ?? goal.current) || 0) - amt);
        goal.current = goal.saved;
        showToast('Penarikan dana target berhasil', 'info');
      }
      closeModal('modal-withdraw-goal');
    } else if (action === 'add') {
      const rawAmt = document.getElementById('form-add-savings-amount')?.value || '0';
      const amt = Number(String(rawAmt).replace(/[^0-9]/g, '')) || 0;
      nominalVal = amt;
      if (amt > 0) {
        goal.saved = (Number(goal.saved ?? goal.current) || 0) + amt;
        goal.current = goal.saved;
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
        namaGoal: goal.title || goal.name,
        tipeAksi: action,
        nominal: nominalVal,
        akun: payingAcc ? payingAcc.name : '',
        isAchieved: !!isDone
      }).then(() => fetchAllData());
    }
  }

  let isAppInitialized = false;
  async function initApp() {
    if (isAppInitialized) return;
    isAppInitialized = true;

    initTheme();
    applyTranslations();
    refreshForexRate();

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
      setTimeout(closeLoader, 300);
    }
  }

  // Expose global handlers for inline HTML attributes
  window.initApp = initApp;
  window.closeLoader = closeLoader;
  window.navigateTo = navigateTo;
  window.showPage = navigateTo;
  window.switchPage = navigateTo;
  window.formatRupiahInput = formatRupiahInput;
  window.formatDecimalInput = formatDecimalInput;
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
  window.openAccountModal = openAccountModal;
  window.saveAccount = saveAccount;
  window.submitAccountForm = submitAccountForm;
  window.deleteAccountAction = deleteAccountAction;
  window.openEditAccountFromDetail = openEditAccountFromDetail;
  window.copyAccountInfo = copyAccountInfo;
  window.openWalletDetailModal = openWalletDetailModal;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.closeAllModals = closeAllModals;
  window.saveTransaction = saveTransaction;
  window.submitTransaction = saveTransaction;
  window.deleteTransaction = deleteTransaction;
  window.saveTransfer = saveTransfer;
  window.submitTransfer = saveTransfer;
  window.saveRecurring = saveRecurring;
  window.submitRecurring = saveRecurring;
  window.payRecurringNow = payRecurringNow;
  window.payRecurringNowAction = payRecurringNowAction;
  window.deleteRecurring = deleteRecurring;
  window.deleteRecurringAction = deleteRecurringAction;
  window.saveDebt = saveDebt;
  window.submitDebt = saveDebt;
  window.settleDebt = settleDebt;
  window.submitPayDebt = submitPayDebt;
  window.saveWallet = saveWallet;
  window.submitAddWallet = submitAddWallet;
  window.deleteWallet = deleteWallet;
  window.deleteWalletAction = deleteWalletAction;
  window.saveAsset = saveAsset;
  window.submitBuyAsset = submitBuyAsset;
  window.submitSellAsset = submitSellAsset;
  window.handleBuyAssetAccountChange = handleBuyAssetAccountChange;
  window.openAssetDetailModal = openAssetDetailModal;
  window.setAssetDetailCurrency = setAssetDetailCurrency;
  window.updateAssetDetailCurrencyView = updateAssetDetailCurrencyView;
  window.setChartFilter = setChartFilter;
  window.prepareReceiveDividend = prepareReceiveDividend;
  window.submitReceiveDividend = submitReceiveDividend;
  window.saveGoal = saveGoal;
  window.submitGoal = submitGoal;
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
  window.generateStatementPDF = generateStatementPDF;
  window.exportPDFStatement = generateStatementPDF;
  window.generatePDF = generateStatementPDF;
  window.setExportYear = setExportYear;
  window.syncWithCloud = syncWithCloud;
  window.saveGasUrl = saveGasUrl;
  window.exportBackupJSON = exportBackupJSON;
  window.switchUser = switchUser;
  window.showToast = showToast;

  document.addEventListener('DOMContentLoaded', () => {
    initApp();
  });
})();