import siegeMaps from './siege-maps.js';  // Make sure this path is correct!

const mapSelect = document.getElementById('map-select');
const mapName = document.getElementById('map-name');
const mapImage = document.getElementById('map-image');
const operatorCount = document.getElementById('operator-count');
const operatorList = document.getElementById('operators');

// Populate the map dropdown dynamically
siegeMaps.forEach((map, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = map.name;
  mapSelect.appendChild(option);
});

// Display map details when selected
function displayMap(index) {
  const map = siegeMaps[index];
  mapName.textContent = map.name;
  mapImage.src = map.image;
  mapImage.alt = `${map.name} map image`;
  operatorCount.textContent = `Attackers: ${map.attackers.length} | Defenders: ${map.defenders.length}`;

  operatorList.innerHTML = '';

  map.attackers.forEach(op => {
    const li = document.createElement('li');
    li.textContent = `Attacker: ${op}`;
    operatorList.appendChild(li);
  });

  map.defenders.forEach(op => {
    const li = document.createElement('li');
    li.textContent = `Defender: ${op}`;
    operatorList.appendChild(li);
  });
  document.getElementById('map-description').textContent = map.description;
}

// Initial display
displayMap(0);

// Update display when a new map is selected
mapSelect.addEventListener('change', (e) => {
  displayMap(e.target.value);
});
