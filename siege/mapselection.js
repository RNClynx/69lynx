// Array of available maps (images and names for placeholders)
const maps = [
  { name: "Bank", image: "images/bank.avif" },
  { name: "Clubhouse", image: "images/clubhouse.avif" },
  { name: "Consulate", image: "images/consulate.avif" },
  { name: "Coastline", image: "images/coastline.avif" },
  { name: "Kafe", image: "images/kafe.avif" },
  { name: "Oregon", image: "images/oregon.avif" },
  { name: "Hereford", image: "images/hereford.avif" },
  { name: "Chalet", image: "images/chalet.avif" },
  { name: "Border", image: "images/border.avif" },
  { name: "Villa", image: "images/villa.avif" }
];

// Fetch the selected side (Attackers or Defenders)
const selectedSide = localStorage.getItem("selectedSide");

const mapListContainer = document.getElementById("map-list");

maps.forEach((map, index) => {
  const mapItem = document.createElement("div");
  mapItem.classList.add("map-item");

  const mapImage = document.createElement("img");
  mapImage.src = map.image;
  mapImage.alt = `${map.name} map`;

  const mapLabel = document.createElement("label");
  mapLabel.textContent = map.name;

  const mapCheckbox = document.createElement("input");
  mapCheckbox.type = "checkbox";
  mapCheckbox.id = map.name;
  mapCheckbox.value = map.name;

  mapItem.appendChild(mapImage);
  mapItem.appendChild(mapLabel);
  mapItem.appendChild(mapCheckbox);

  mapListContainer.appendChild(mapItem);
});

// Handle map pool submission
document.getElementById("submit-button").addEventListener("click", () => {
  const selectedMaps = [];
  
  // Collect all selected maps
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
    selectedMaps.push(checkbox.value);
  });

  // Ensure that only up to 5 maps are selected
  if (selectedMaps.length <= 5) {
    localStorage.setItem("selectedMaps", JSON.stringify(selectedMaps)); // Store selected maps in localStorage
    alert("Maps selected: " + selectedMaps.join(", "));
    // Redirect to another page or process further (e.g., show bans or strategy tips)
    window.location.href = "bans-and-strats.html"; // Redirect to next page
  } else {
    alert("You can select up to 5 maps only.");
  }
});
