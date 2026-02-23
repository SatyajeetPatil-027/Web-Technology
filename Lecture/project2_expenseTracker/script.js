// Select Elements
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");

// Load from localStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Save to localStorage
function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function updateValues() {
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0);
    const incomeTotal = amounts
        .filter(item => item > 0) //income
        .reduce((acc, item) => acc + item, 0);

    const expenseTotal = amounts
        .filter(item => item < 0) //expense
        .reduce((acc, item) => acc + item, 0);
    balance.textContent = `₹${total.toFixed(2)}`;
    income.textContent = `₹${incomeTotal.toFixed(2)}`;
    expense.textContent = `₹${Math.abs(expenseTotal).toFixed(2)}`;
}

// Add Transaction to DOM
function addTransactionDOM(transaction) {
    const li = document.createElement("li");
    li.classList.add(transaction.amount > 0 ? "plus" : "minus");

    li.innerHTML = `
        ${transaction.text}
        <span>
            ₹${transaction.amount}
            <button class="delete-btn" onclick="removeTransaction(${transaction.id})">
                Delete
            </button>
        </span>
    `;
    list.appendChild(li);
}

// Generate Unique ID
function generateID() {
    return Math.floor(Math.random() * 1000000);
}
// Add Transaction
function addTransaction() {
    if (text.value.trim() === "" || amount.value.trim() === "") {
        alert("Please enter description and amount");
        return;
    }
    const transaction = {
        id: generateID(),
        text: text.value,
        amount: +amount.value
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    saveTransactions();
    text.value = "";
    amount.value = "";
}

// Remove Transaction
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    saveTransactions();
    init();
}

// Initialize App
function init() {
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValues();
}

// Button Click
addBtn.addEventListener("click", addTransaction);

// Enter Key Support
amount.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTransaction();
    }
});

text.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTransaction();
    }
});

// Start App
init();
