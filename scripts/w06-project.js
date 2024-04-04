 // w06-project.js
let incomes = [];
let expenses = [];
let totalIncome = 0;
let totalExpenses = 0;

const currencyConverterApiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key

function addIncome() {
  const amount = parseFloat(document.getElementById('income-amount').value);
  const category = document.getElementById('income-category').value.trim();

  if (isNaN(amount) || amount <= 0 || category === '') {
    alert('Please enter a valid amount and category for income.');
    return;
  }

  incomes.push({ amount, category });
  totalIncome += amount;

  displayIncome();
  updateSummary();
  convertCurrency(amount, 'USD', 'COP');
}

function addExpense() {
  const amount = parseFloat(document.getElementById('expense-amount').value);
  const category = document.getElementById('expense-category').value.trim();

  if (isNaN(amount) || amount <= 0 || category === '') {
    alert('Please enter a valid amount and category for expense.');
    return;
  }

  expenses.push({ amount, category });
  totalExpenses += amount;

  displayExpenses();
  updateSummary();
  convertCurrency(amount, 'USD', 'COP');
}

async function convertCurrency(amount, fromCurrency, toCurrency) {
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = amount * exchangeRate;
    alert(`${amount} ${fromCurrency} is approximately ${convertedAmount.toFixed(2)} ${toCurrency}`);
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    alert('Failed to convert currency. Please try again later.');
  }
}

function displayIncome() {
  const incomeList = incomes.map(income => `<li>${income.category}: $${income.amount.toFixed(2)}</li>`);
  document.getElementById('income-list').innerHTML = incomeList.join('');
}

function displayExpenses() {
  const expenseList = expenses.map(expense => `<li>${expense.category}: $${expense.amount.toFixed(2)}</li>`);
  document.getElementById('expense-list').innerHTML = expenseList.join('');
}

function updateSummary() {
  document.getElementById('total-income').textContent = `$${totalIncome.toFixed(2)}`;
  document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
  document.getElementById('total-balance').textContent = `$${(totalIncome - totalExpenses).toFixed(2)}`;
}