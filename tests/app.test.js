const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function createHarness() {
  const storage = {};
  const document = {
    readyState: 'complete',
    body: {
      appendChild() {},
      addEventListener() {},
      classList: { toggle() {}, add() {}, remove() {} },
      style: {}
    },
    documentElement: { lang: 'en' },
    addEventListener() {},
    querySelectorAll() { return []; },
    getElementById() { return null; },
    createElement() {
      return {
        className: '',
        innerHTML: '',
        textContent: '',
        value: '',
        style: {},
        setAttribute() {},
        appendChild() {},
        addEventListener() {}
      };
    },
    createTextNode() { return {}; }
  };

  const localStorage = {
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(storage, key) ? storage[key] : null;
    },
    setItem(key, value) {
      storage[key] = String(value);
    },
    removeItem(key) {
      delete storage[key];
    }
  };

  const window = {
    document,
    localStorage,
    navigator: { languages: ['en-US'], language: 'en-US' },
    location: { href: '' },
    addEventListener() {},
    dispatchEvent() {},
    setTimeout,
    clearTimeout,
    Event: class Event {
      constructor(type) {
        this.type = type;
      }
    }
  };

  window.window = window;
  window.global = window;

  const context = vm.createContext(window);
  context.window = window;
  context.document = document;
  context.localStorage = localStorage;
  context.navigator = window.navigator;
  context.console = console;

  return { context, window };
}

test('completeTransferRequest debits the sender balance and stores a completed transfer history entry', () => {
  const { context, window } = createHarness();
  const source = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  vm.runInContext(source, context);

  const user = {
    id: 'user-1',
    name: 'Test User',
    email: 'test@example.com',
    balance: 1000,
    passwordHash: 'h1',
    registrationStatus: 'Active',
    transactionPin: ''
  };

  window.localStorage.setItem('odinAdminUsers', JSON.stringify([user]));
  window.localStorage.setItem('odinUser', 'test@example.com');

  const transfer = {
    id: 'tx-1',
    senderId: 'user-1',
    beneficiary: 'Recipient',
    amount: 250,
    status: 'Processing',
    createdAt: '2024-01-01T00:00:00.000Z'
  };

  const completed = window.odinApp.completeTransferRequest(transfer, 'Completed', '2024-01-15', '09:30');

  assert.equal(completed.transfer.status, 'Completed');
  const users = JSON.parse(window.localStorage.getItem('odinAdminUsers'));
  assert.equal(users[0].balance, 750);
  const transactions = JSON.parse(window.localStorage.getItem('odinTransactions'));
  assert.equal(transactions[0].type, 'transfer');
  assert.equal(transactions[0].status, 'Completed');
  assert.equal(transactions[0].amount, 250);
});

test('creditAccount adds funds to the existing balance and preserves the chosen timestamp', () => {
  const { context, window } = createHarness();
  const source = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  vm.runInContext(source, context);

  const user = {
    id: 'user-2',
    name: 'Funded User',
    email: 'funded@example.com',
    balance: 500,
    passwordHash: 'h1',
    registrationStatus: 'Active',
    transactionPin: ''
  };

  window.localStorage.setItem('odinAdminUsers', JSON.stringify([user]));

  const entry = window.odinApp.creditAccount('user-2', 300, '2024-02-01', '14:45');

  const users = JSON.parse(window.localStorage.getItem('odinAdminUsers'));
  assert.equal(users[0].balance, 800);
  assert.equal(entry.type, 'funding');
  assert.equal(entry.amount, 300);
  assert.equal(entry.adminDate, '2024-02-01');
  assert.equal(entry.adminTime, '14:45');
});
