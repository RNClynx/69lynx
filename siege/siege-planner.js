// Sample Data for maps, operators, and bans
const maps = [
  {
    name: "Oregon",
    image: "images/oregon.avif", // placeholder image
    attacker_bans: ["Thermite", "Hibana", "Montagne"],
    defender_bans: ["Mute", "Jäger", "Bandit"],
    common_callouts: ["Kitchen", "Meeting", "Tower"],
    faq: ["What to do on Attack?", "Best entry points?"]
  },
  {
    name: "Bank",
    image: "images/bank.avif", // placeholder image
    attacker_bans: ["Ash", "Sledge"],
    defender_bans: ["Bandit", "Castle"],
    common_callouts: ["Lobby", "Vault", "Banking"],
    faq: ["Best operators for attack?", "How to hold on defense?"]
  },
  {
    name: "Consulate",
    image: "images/consulate.avif", // placeholder image
    attacker_bans: ["Thatcher", "IQ"],
    defender_bans: ["Jäger", "Mute"],
    common_callouts: ["Admin", "Garage", "Cafe"],
    faq: ["Best entry points?", "How to defend garage?"]
  },
  // Add other maps here following the same format
];

let selectedRole = "attacker";  // Default role
let selectedSites = [];

const roleButtons = document.querySelectorAll('.role-text');
const siteGrid = document.getElementById('site-spots');
const recommendedBans = document.getElementById('recommended-bans');
const banList = document.getElementById('ban-list');
const finalMapSection = document.getElementById('final-map-selection');
const mapGrid = document.querySelector('.map-grid');
const mapDetails = document.getElementById('map-details');
const mapNameDetails = document.getElementById('map-name-details');
const mapImage = document.getElementById('map-image');
const calloutsList = document.getElementById('callouts');
const faqList = document.getElementById('faq-list');

// Function to handle Attacker/Defender role selection
roleButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedRole = button.id === "attacker-text" ? "attacker" : "defender";
    showSiteSelection();
    showRecommendedBans();
  });
});

// Show site selection based on role
function showSiteSelection() {
  const siteSpots = Array(5).fill("Site");
  siteGrid.innerHTML = '';
  siteSpots.forEach((site, index) => {
    const spot = document.createElement('div');
    spot.classList.add('site-spot');
    spot.textContent = `Site ${index + 1}`;
    spot.addEventListener('click', () => selectSite(index));
    siteGrid.appendChild(spot);
  });

  document.getElementById('site-selection').classList.remove("hidden");
}

// Handle site selection
function selectSite(index) {
  selectedSites.push(`Site ${index + 1}`);
  const spot = siteGrid.children[index];
  spot.classList.add('selected');

  if (selectedSites.length === 5) {
    showFinalMapSelection();
  }
}

// Show recommended bans based on the selected role
function showRecommendedBans() {
  const selectedMap = maps[0];  // You can dynamically select the map later
  const bans = selectedRole === "attacker" ? selectedMap.attacker_bans : selectedMap.defender_bans;

  banList.innerHTML = ''; // Clear previous bans
  bans.forEach(ban => {
    const banItem = document.createElement('li');
    banItem.textContent = ban;
    banList.appendChild(banItem);
  });

  recommendedBans.classList.remove("hidden");
}

// Show final map selection with details
function showFinalMapSelection() {
  finalMapSection.classList.remove("hidden");

  maps.forEach((map, index) => {
    const mapButton = document.createElement('button');
    mapButton.textContent = map.name;
    mapButton.classList.add('map-button');
    mapButton.addEventListener('click', () => selectMap(index));
    mapGrid.appendChild(mapButton);
  });
}

// Handle map selection and display map details
function selectMap(index) {
  const selectedMap = maps[index];
  mapNameDetails.textContent = selectedMap.name;
  mapImage.src = selectedMap.image;
  
  // Clear previous callouts and FAQs
  calloutsList.innerHTML = '';
  faqList.innerHTML = '';

  // Populate callouts
  selectedMap.common_callouts.forEach(callout => {
    const calloutItem = document.createElement('li');
    calloutItem.textContent = callout;
    calloutsList.appendChild(calloutItem);
  });

  // Populate FAQs
  selectedMap.faq.forEach(faq => {
    const faqItem = document.createElement('li');
    faqItem.textContent = faq;
    faqList.appendChild(faqItem);
  });

  mapDetails.classList.remove("hidden");
}

// Initial setup to hide unnecessary sections
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('site-selection').classList.add("hidden");
  recommendedBans.classList.add("hidden");
  finalMapSection.classList.add("hidden");
  mapDetails.classList.add("hidden");
});
