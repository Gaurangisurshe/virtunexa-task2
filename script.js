document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get input values
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
  
    // Validate input
    if (isNaN(income) || isNaN(expenses) || income < 0 || expenses < 0) {
      alert('Please enter valid positive numbers for income and expenses.');
      return;
    }
  
    // Calculate savings
    const savings = income - expenses;
  
    // Display result
    const savingsElement = document.getElementById('savings');
    if (savings < 0) {
      savingsElement.textContent = `You are overspending by $${Math.abs(savings)}!`;
      savingsElement.style.color = 'red';
    } else {
      savingsElement.textContent = `$${savings.toFixed(2)}`;
      savingsElement.style.color = 'green';
    }
  });
  