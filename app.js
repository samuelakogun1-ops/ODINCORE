/**
 * ODINCORE Banking Software Engine - Production Standard
 */

const ODIN = (() => {
  // Core Banking Data Layer
  const STORAGE_KEYS = {
    USERS: 'odincore_users',
    CURRENT_USER: 'odincore_session_user',
    TRANSACTIONS: 'odincore_transactions',
    MESSAGES: 'odincore_messages',
    LANG: 'odincore_lang'
  };

  const BANKING_STATUSES = {
    PROCESSING: 'Processing',
    UNDER_REVIEW: 'Under Review',
    PENDING_VERIFICATION: 'Pending Verification',
    COMPLETED: 'Completed',
    DECLINED: 'Declined',
    VISIT_BRANCH: 'Visit Nearest Branch'
  };

  // Translations Dictionary
  const I18N = {
    en: { welcome: "Welcome", balance: "Available Balance", transfer: "Transfer Funds" },
    es: { welcome: "Bienvenido", balance: "Saldo Disponible", transfer: "Transferir Fondos" },
    fr: { welcome: "Bienvenue", balance: "Solde Disponible", transfer: "Transférer des Fonds" }
  };

  // Internal Helpers
  const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
  const setStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

  // Initialize System State
  const init = () => {
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
      setStorage(STORAGE_KEYS.USERS, []);
    }
    if (!localStorage.getItem(STORAGE_KEYS.TRANSACTIONS)) {
      setStorage(STORAGE_KEYS.TRANSACTIONS, []);
    }
    if (!localStorage.getItem(STORAGE_KEYS.MESSAGES)) {
      setStorage(STORAGE_KEYS.MESSAGES, []);
    }
    autoDetectLanguage();
  };

  // Automatic Language Detection
  const autoDetectLanguage = () => {
    const savedLang = localStorage.getItem(STORAGE_KEYS.LANG);
    if (savedLang) return savedLang;
    
    const navLang = (navigator.language || 'en').substring(0, 2);
    const selectedLang = I18N[navLang] ? navLang : 'en';
    localStorage.setItem(STORAGE_KEYS.LANG, selectedLang);
    return selectedLang;
  };

  // Session & Authentication Engine
  const login = (email, password) => {
    const users = getStorage(STORAGE_KEYS.USERS);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid login credentials.");
    
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    return user;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    window.location.href = 'login.html';
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER));
  };

  // Financial Ledger Math Engine
  const calculateBalance = (accountNumber) => {
    const transactions = getStorage(STORAGE_KEYS.TRANSACTIONS);
    const users = getStorage(STORAGE_KEYS.USERS);
    const user = users.find(u => u.accountNumber === accountNumber);
    
    let balance = user ? parseFloat(user.initialBalance || 0) : 0;

    transactions.forEach(tx => {
      if (tx.status === BANKING_STATUSES.COMPLETED) {
        if (tx.toAccount === accountNumber) {
          balance += parseFloat(tx.amount);
        }
        if (tx.fromAccount === accountNumber) {
          balance -= parseFloat(tx.amount);
        }
      }
    });

    return balance;
  };

  // Secure Transfer Dispatcher
  const initiateTransfer = (recipientAcc, amount, pin) => {
    const user = getCurrentUser();
    if (!user) throw new Error("Unauthorized session.");

    // Validate PIN
    if (user.pin !== pin) {
      throw new Error("Invalid Secure Payment PIN.");
    }

    const currentBalance = calculateBalance(user.accountNumber);
    const transferAmount = parseFloat(amount);

    if (isNaN(transferAmount) || transferAmount <= 0) {
      throw new Error("Invalid transfer amount.");
    }

    if (currentBalance < transferAmount) {
      throw new Error("Insufficient funds available.");
    }

    const transactions = getStorage(STORAGE_KEYS.TRANSACTIONS);
    
    // Prevent Duplicate Request Submission
    const isDuplicate = transactions.some(tx => 
      tx.fromAccount === user.accountNumber &&
      tx.amount === transferAmount &&
      tx.toAccount === recipientAcc &&
      (Date.now() - new Date(tx.timestamp).getTime()) < 5000
    );

    if (isDuplicate) {
      throw new Error("Duplicate transaction detected. Please wait.");
    }

    const newTx = {
      id: 'TX-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      fromAccount: user.accountNumber,
      toAccount: recipientAcc,
      amount: transferAmount,
      status: BANKING_STATUSES.PROCESSING,
      timestamp: new Date().toISOString()
    };

    transactions.push(newTx);
    setStorage(STORAGE_KEYS.TRANSACTIONS, transactions);
    return newTx;
  };

  return {
    init,
    login,
    logout,
    getCurrentUser,
    calculateBalance,
    initiateTransfer,
    STATUSES: BANKING_STATUSES,
    getStorage,
    setStorage,
    KEYS: STORAGE_KEYS
  };
})();

document.addEventListener('DOMContentLoaded', ODIN.init);
