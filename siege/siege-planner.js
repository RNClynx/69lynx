document.addEventListener('DOMContentLoaded', () => {
  const operatorSelect = document.getElementById('operator-select');
  const countersDiv = document.getElementById('counters');

  // Populate the operator select dropdown
  operators.forEach(operator => {
    const option = document.createElement('option');
    option.value = operator.name;
    option.textContent = operator.name;
    operatorSelect.appendChild(option);
  });

  // Event listener for operator selection
  operatorSelect.addEventListener('change', (event) => {
    const selectedOperator = event.target.value;
    if (selectedOperator) {
      const operator = operators.find(op => op.name === selectedOperator);
      countersDiv.innerHTML = `<h3>${operator.name} Counters:</h3><ul>${operator.counters.map(counter => `<li>${counter}</li>`).join('')}</ul>`;
    } else {
      countersDiv.innerHTML = 'Choose an operator to see counters.';
    }
  });
});
