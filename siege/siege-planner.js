import siegeMaps from './siege-maps.js';  // Ensure the path is correct!

const mapSelect = document.getElementById('map-select');
const mapName = document.getElementById('map-name');
const mapImage = document.getElementById('map-image');
const operatorCount = document.getElementById('operator-count');
const operatorList = document.getElementById('operators');
const mapDescription = document.getElementById('map-description'); // Add this to capture description

// Attack and Defender Button Logic
document.getElementById("attack-button").addEventListener("click", function () {
  localStorage.setItem("selectedSide", "Attackers");
  window.location.href = "map-selection.html";  // Redirect to map selection
});

document.getElementById("defend-button").addEventListener("click", function () {
  localStorage.setItem("selectedSide", "Defenders");
  window.location.href = "map-selection.html";  // Redirect to map selection
});

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

  // Clear the operator list
  operatorList.innerHTML = '';

  // Add attackers to the list
  map.attackers.forEach(op => {
    const li = document.createElement('li');
    li.textContent = `Attacker: ${op}`;
    operatorList.appendChild(li);
  });

  // Add defenders to the list
  map.defenders.forEach(op => {
    const li = document.createElement('li');
    li.textContent = `Defender: ${op}`;
    operatorList.appendChild(li);
  });

  // Add map description
  mapDescription.textContent = map.description;
}

// Initial display when the page loads
displayMap(0);

// Update display when a new map is selected
mapSelect.addEventListener('change', (e) => {
  displayMap(e.target.value);
});
