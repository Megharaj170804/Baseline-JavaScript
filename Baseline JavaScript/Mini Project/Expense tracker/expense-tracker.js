// Expense Tracker Mini Project

document.addEventListener("DOMContentLoaded", function() {
    let entries = JSON.parse(localStorage.getItem("expenseEntries") || "[]");
    const entryForm = document.getElementById("entryForm");
    const descInput = document.getElementById("desc");
    const amountInput = document.getElementById("amount");
    const typeInput = document.getElementById("type");
    const entriesTable = document.getElementById("entriesTable");
    const totalIncome = document.getElementById("totalIncome");
    const totalExpense = document.getElementById("totalExpense");
    const balance = document.getElementById("balance");

    function updateSummary() {
        let income = 0, expense = 0;
        entries.forEach(e => {
            if (e.type === "income") income += e.amount;
            else expense += e.amount;
        });
        totalIncome.textContent = income;
        totalExpense.textContent = expense;
        balance.textContent = income - expense;
    }

    function renderTable() {
        entriesTable.innerHTML = "";
        entries.forEach((e, i) => {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${e.date}</td><td>${e.desc}</td><td>${e.amount}</td><td class="${e.type}">${e.type.charAt(0).toUpperCase() + e.type.slice(1)}</td><td><button class='btn btn-danger btn-sm' onclick='deleteEntry(${i})'>Delete</button></td>`;
            entriesTable.appendChild(row);
        });
    }

    window.deleteEntry = function(index) {
        entries.splice(index, 1);
        localStorage.setItem("expenseEntries", JSON.stringify(entries));
        renderTable();
        updateSummary();
    };

    entryForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const desc = descInput.value.trim();
        const amount = parseFloat(amountInput.value);
        const type = typeInput.value;
        if (!desc || isNaN(amount) || amount <= 0) return;
        const date = new Date().toLocaleDateString();
        entries.push({ date, desc, amount, type });
        localStorage.setItem("expenseEntries", JSON.stringify(entries));
        descInput.value = "";
        amountInput.value = "";
        typeInput.value = "income";
        renderTable();
        updateSummary();
    });

    renderTable();
    updateSummary();
});
