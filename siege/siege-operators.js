// Sample Data for maps, operators, and bans
const maps = [
  {
    name: "Oregon",
    image: "images/oregon.avif", // placeholder
    attacker_bans: ["Thermite", "Hibana", "Montagne"],
    defender_bans: ["Mute", "Jäger", "Bandit"],
    common_callouts: ["Kitchen", "Meeting", "Tower"],
    faq: ["What to do on Attack?", "Best entry points?"]
  },
  {
    name: "Bank",
    image: "images/bank.avif", // placeholder
    attacker_bans: ["Ash", "Sledge"],
    defender_bans: ["Bandit", "Castle"],
    common_callouts: ["Lobby", "Vault", "Banking"],
    faq: ["Best operators for attack?", "How to hold on defense?"]
  }
  // Add more maps here as needed
];

let selectedRole = "attacker";  // Default role
let selectedSites = [];

const roleButtons = document.querySelectorAll('.role-btn');
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
    selectedRole = button.id === "attacker-btn" ? "attacker" : "defender";
    selectedSites = []; // Reset selected sites when changing roles
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

  // Only display the site selection if role is selected
  document.getElementById('site-selection').style.display = "block";
  recommendedBans.style.display = "none"; // Hide the bans section initially
}

// Handle site selection
function selectSite(index) {
  selectedSites.push(`Site ${index + 1}`);
  if (selectedSites.length === 5) {
    showFinalMapSelection();
  }
}

// Show recommended bans based on the selected role
function showRecommendedBans() {
  const selectedMap = maps[0];  // Assuming 1st map for simplicity, can change later
  const bans = selectedRole === "attacker" ? selectedMap.attacker_bans : selectedMap.defender_bans;

  banList.innerHTML = '';  // Clear previous bans
  bans.forEach(ban => {
    const banItem = document.createElement('li');
    banItem.textContent = ban;
    banList.appendChild(banItem);
  });

  recommendedBans.style.display = "block"; // Show the bans section
}

// Show the final map selection after site selection
function showFinalMapSelection() {
  finalMapSection.style.display = "block";  // Show map selection section

  maps.forEach((map, index) => {
    const mapButton = document.createElement('button');
    mapButton.textContent = map.name;
    mapButton.addEventListener('click', () => selectMap(index));
    mapGrid.appendChild(mapButton);
  });
}

// Handle map selection and display map details
function selectMap(index) {
  const selectedMap = maps[index];
  mapNameDetails.textContent = selectedMap.name;
  mapImage.src = selectedMap.image;
  calloutsList.innerHTML = selectedMap.common_callouts.map(callout => `<li>${callout}</li>`).join('');
  faqList.innerHTML = selectedMap.faq.map(faq => `<li>${faq}</li>`).join('');

  // Show map details and hide unnecessary sections
  mapDetails.style.display = "block";
  faqList.style.display = "block";
  calloutsList.style.display = "block";
}

// Initial setup to hide sections
function hideAllSections() {
  document.getElementById('site-selection').style.display = "none";   
  recommendedBans.style.display = "none";
  finalMapSection.style.display = "none";
  mapDetails.style.display = "none";
  faqList.style.display = "none"; 
  calloutsList.style.display = "none";  
  banList.style.display = "none";
}
