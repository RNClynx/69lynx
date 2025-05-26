// Sample data for maps and operators
const maps = {
  "Bank": {
    name: "Bank",
    image: "images/bank.avif", // Update with your actual image path
    operators: ["Ash", "Thermite", "Hibana", "Bandit", "Jäger"]
  },
  "Consulate": {
    name: "Consulate",
    image: "images/consulate.avif", // Update with your actual image path
    operators: ["Sledge", "Thatcher", "Twitch", "Mute", "Smoke"]
  },
  "Clubhouse": {
    name: "Clubhouse",
    image: "images/clubhouse.avif", // Update with your actual image path
    operators: ["Buck", "IQ", "Castle", "Echo", "Valkyrie"]
  }
};

let currentSide = 'attack'; // Default side is attack

// Elements
const mapSelectButtons = document.querySelectorAll('.map-btn');
const mapDisplayName = document.getElementById('map-name');
const mapImage = document.getElementById('map-image');
const operatorCount = document.getElementById('operator-count');
const operatorList = document.getElementById('operators');
const attackBtn = document.getElementById('attack-btn');
const defenseBtn = document.getElementById('defense-btn');

// Handle map selection
mapSelectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mapName = button.getAttribute('data-map');
    displayMap(mapName);
  });
});

// Display selected map and operators
function displayMap(mapName) {
  const map = maps[mapName];
  mapDisplayName.textContent = map.name;
  mapImage.src = map.image;
  operatorCount.textContent = `Operators: ${map.operators.length}`;

  // Display operator list
  operatorList.innerHTML = ''; // Clear previous operators
  map.operators.forEach(op => {
    const li = document.createElement('li');
    li.textContent = op;
    operatorList.appendChild(li);
  });
}

// Handle side selection (attack vs defense)
attackBtn.addEventListener('click', () => {
  currentSide = 'attack';
  attackBtn.style.backgroundColor = '#007bff'; // Blue color for attackers
  defenseBtn.style.backgroundColor = '#ccc'; // Reset defenders
});

defenseBtn.addEventListener('click', () => {
  currentSide = 'defense';
  defenseBtn.style.backgroundColor = '#007bff'; // Blue color for defenders
  attackBtn.style.backgroundColor = '#ccc'; // Reset attackers
});

// Initial display (default map and operators)
displayMap('Bank');
