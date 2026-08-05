/**
 * ODINCORE - Core Application Engine
 * Unified Full-Stack Banking Logic
 */

const App = (() => {
  const KEYS = {
    USERS: 'odin_users',
    CURRENT_USER: 'odin_current_user',
    TRANSACTIONS: 'odin_transactions',
    MESSAGES: 'odin_messages',
    LANG: 'odin_lang'
  };

  const STATUSES = {
    PROCESSING: 'Processing',
    UNDER_REVIEW: 'Under Review',
    PENDING_VERIFICATION: 'Pending Verification',
    COMPLETED: 'Completed',
    DECLINED: 'Declined',
    VISIT_BRANCH: 'Visit Nearest Branch'
  };

  const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
  const setStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

  // Initialize System State
  const init = () => {
    if (!localStorage.getItem(KEYS.USERS)) setStorage(KEYS.USERS, []);
    if (!localStorage.getItem(KEYS.TRANSACTIONS)) setStorage(KEYS.TRANSACTIONS, []);
    if (!localStorage.getItem(KEYS.MESSAGES)) setStorage(KEYS.MESSAGES, []);
    autoDetectLanguage();
    bindMobileSidebar();
  };

  const autoDetectLanguage = () => {
    if (!localStorage.getItem(KEYS.LANG)) {
      const userLang = (navigator.language || 'en').substring(0, 2);
      localStorage.setItem(KEYS.LANG, userLang);
    }
  };

  const bindMobileSidebar = () => {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.onclick = () => sidebar.classList.toggle('active');
    }
  };

  // User Management & Authentication
  const registerUser = (userData) => {
    const users = getStorage(KEYS.USERS);
    if (users.some(u => u.email === userData.email)) {
      throw new Error('An account with this email address already exists.');
    }
    const newUser = {
      accountNumber: 'ACC' + Math.floor(10000000 + Math.random() * 90000000),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      pin: userData.pin || '1234',
      initialBalance: parseFloat(userData.initialBalance || 0),
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    setStorage(KEYS.USERS, users);
    return newUser;
  };

  const login = (email, password) => {
    const users = getStorage(KEYS.USERS);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error('Invalid email or password.');
    setStorage(KEYS.CURRENT_USER, user);
    return user;
  };

  const logout = () => {
    localStorage.removeItem(KEYS.CURRENT_USER);
    window.location.href = 'login.html';
  };

  const getCurrentUser = () => JSON.parse(localStorage.getItem(KEYS.CURRENT_USER));

  // Ledger & Financial Calculation Engine
  const calculateBalance = (accountNumber) => {
    const users = getStorage(KEYS.USERS);
    const user = users.find(u => u.accountNumber === accountNumber);
    let balance = user ? parseFloat(user.initialBalance || 0) : 0;

    const txs = getStorage(KEYS.TRANSACTIONS);
    txs.forEach(tx => {
      // Balance is strictly updated ONLY for Completed transactions
      if (tx.status === STATUSES.COMPLETED) {
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

  const initiateTransfer = ({ toAccount, amount, pin }) => {
    const user = getCurrentUser();
    if (!user) throw new Error('Session expired. Please log in again.');

    if (user.pin !== pin) {
      throw new Error('Incorrect Security Transfer PIN.');
    }

    const transferAmt = parseFloat(amount);
    if (isNaN(transferAmt) || transferAmt <= 0) {
      throw new Error('Invalid transfer amount.');
    }

    const currentBal = calculateBalance(user.accountNumber);
    if (currentBal < transferAmt) {
      throw new Error('Insufficient available balance for this transfer.');
    }

    const txs = getStorage(KEYS.TRANSACTIONS);
    
    // Duplicate transaction detection (5-second window lock)
    const duplicate = txs.some(t => 
      t.fromAccount === user.accountNumber &&
      t.toAccount === toAccount &&
      parseFloat(t.amount) === transferAmt &&
      (Date.now() - new Date(t.timestamp).getTime()) < 5000
    );

    if (duplicate) {
      throw new Error('Duplicate transaction detected. Please wait a moment.');
    }

    const newTx = {
      id: 'TX' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      fromAccount: user.accountNumber,
      toAccount,
      amount: transferAmt,
      status: STATUSES.PROCESSING,
      timestamp: new Date().toISOString()
    };

    txs.push(newTx);
    setStorage(KEYS.TRANSACTIONS, txs);
    return newTx;
  };

  // Support Desk Messaging
  const sendMessage = (sender, message) => {
    const msgs = getStorage(KEYS.MESSAGES);
    const newMsg = {
      id: 'MSG' + Date.now(),
      sender,
      message,
      timestamp: new Date().toISOString(),
      reply: null
    };
    msgs.push(newMsg);
    setStorage(KEYS.MESSAGES, msgs);
    return newMsg;
  };

  const replyMessage = (msgId, replyText) => {
    const msgs = getStorage(KEYS.MESSAGES);
    const target = msgs.find(m => m.id === msgId);
    if (target) {
      target.reply = replyText;
      target.replyTimestamp = new Date().toISOString();
      setStorage(KEYS.MESSAGES, msgs);
    }
  };

  return {
    init,
    registerUser,
    login,
    logout,
    getCurrentUser,
    calculateBalance,
    initiateTransfer,
    sendMessage,
    replyMessage,
    getStorage,
    setStorage,
    KEYS,
    STATUSES
  };
})();

// Assign to Global Window Object (Fixes "App is not defined" error)
window.App = App;
window.app = App;

document.addEventListener('DOMContentLoaded', App.init);
