// When page loads, populate dropdown with defense operators from siegeOperators
window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('operator-select');
  const countersContainer = document.getElementById('counters-container');

  // Fill select options
  siegeOperators.forEach(op => {
    const option = document.createElement('option');
    option.value = op.name;
    option.textContent = op.name;
    select.appendChild(option);
  });

  // When user picks an operator
  select.addEventListener('change', () => {
    const selectedName = select.value;
    countersContainer.innerHTML = ''; // clear previous counters

    if (!selectedName) return;

    const operator = siegeOperators.find(op => op.name === selectedName);

    if (!operator || operator.counters.length === 0) {
      countersContainer.textContent = 'No counters found.';
      return;
    }

    operator.counters.forEach(counterName => {
      const div = document.createElement('div');
      div.className = 'counter-operator';
      div.textContent = counterName;
      countersContainer.appendChild(div);
    });
  });
});
