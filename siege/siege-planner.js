import operators from './siege-operators.js';
import maps, { getMapByName } from './siege-maps.js';

document.addEventListener('DOMContentLoaded', () => {
  const operatorSelect = document.getElementById('operator-select');
  const countersDiv = document.getElementById('counters');
  
  const mapSelect = document.getElementById('map-select');
  const mapDetailsDiv = document.getElementById('map-details');

  // Populate operators dropdown
  operators.forEach(operator => {
    const option = document.createElement('option');
    option.value = operator.name;
    option.textContent = operator.name;
    operatorSelect.appendChild(option);
  });

  // Populate maps dropdown
  maps.forEach(map => {
    const option = document.createElement('option');
    option.value = map.name;
    option.textContent = map.name;
    mapSelect.appendChild(option);
  });

  // Operator selection handler
  operatorSelect.addEventListener('change', (event) => {
    const selectedOperator = event.target.value;
    if (selectedOperator) {
      const operator = operators.find(op => op.name === selectedOperator);
      countersDiv.innerHTML = `<h3>${operator.name} Counters:</h3><ul>${operator.counters.map(counter => `<li>${counter}</li>`).join('')}</ul>`;
    } else {
      countersDiv.innerHTML = 'Choose an operator to see counters.';
    }
  });

  // Map selection handler
  mapSelect.addEventListener('change', (event) => {
    const selectedMap = event.target.value;
    if (selectedMap) {
      const map = getMapByName(selectedMap);
      mapDetailsDiv.innerHTML = `
        <h3>${map.name}</h3>
        <p>${map.description}</p>
        <h4>Common Ranked Strategies:</h4>
        <ul>${map.commonStrats.map(strat => `<li>${strat}</li>`).join('')}</ul>
      `;
    } else {
      mapDetailsDiv.innerHTML = 'Choose a map to see details.';
    }
  });
});
