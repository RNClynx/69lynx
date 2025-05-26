// Sample data for maps, operators, and team sides
const maps = [
  { name: "Bank", image: "images/bank.avif", attackers: ["Ash", "Thermite", "Hibana"], defenders: ["Jäger", "Bandit", "Mute"] },
  { name: "Clubhouse", image: "images/clubhouse.avif", attackers: ["Buck", "IQ", "Sledge"], defenders: ["Valkyrie", "Bandit", "Mute"] },
  { name: "Consulate", image: "images/consulate.avif", attackers: ["Sledge", "Twitch", "Thermite"], defenders: ["Echo", "Castle", "Caveira"] },
  // Add more maps here
];

const sideButtons = document.querySelectorAll('.side-button');
const mapSelection = document.getElementById('map-selection');
const operatorSection = document.getElementById('operator-section');
let selectedSide = 'attackers'; // Default side

// Function to display maps
function displayMaps() {
  mapSelection.innerHTML = '';
  maps.forEach((map, index) => {
    const mapElement = document.createElement('div');
    mapElement.classList.add('map-item');
    mapElement.innerHTML = `
      <img src="${map.image}" alt="${map.name}">
      <p>${map.name}</p>
    `;
    mapElement.addEventListener('click', () => displayOperators(index));
    mapSelection.appendChild(mapElement);
  });
}

// Function to display operators for selected side
function displayOperators(mapIndex) {
  const map = maps[mapIndex];
  const operators = map[selectedSide]; // Either 'attackers' or 'defenders'
  
  operatorSection.innerHTML = `
    <h2>Operators for ${map.name}</h2>
    <div id="operator-list"></div>
  `;

  const operatorList = document.getElementById('operator-list');
  operators.forEach(op => {
    const operatorCard = document.createElement('div');
    operatorCard.classList.add('operator-card');
    operatorCard.innerHTML = `
      <img src="images/operators/${op.toLowerCase()}.avif" alt="${op}">
      <p>${op}</p>
    `;
    operatorList.appendChild(operatorCard);
  });
}

// Function to handle side selection (Attack/Defend)
sideButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    selectedSide = e.target.classList.contains('red') ? 'attackers' : 'defenders';
    displayMaps();
  });
});

// Initial setup
displayMaps();
