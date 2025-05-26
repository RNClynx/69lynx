const siegeMaps = [
  {
    name: "Bank",
image: "https://via.placeholder.com/300x200.png?text=Bank+Map", // Replace with actual image path
    attackers: ["Ash", "Thermite", "Hibana", "Twitch", "IQ"],
    defenders: ["Jäger", "Mute", "Bandit", "Smoke", "Valkyrie"],
    favoredSide: "Attackers", // "Attackers" or "Defenders"
    description: "In competitive games, attackers often take control of key floors like the Lobby and Server Room. Control of the skylights and hatches allows vertical plays to cut off defender rotations. Defenders typically hold the Server Room and Open Area, but they must also contest the hatches and windows."
  },
  {
    name: "Clubhouse",
image: "https://via.placeholder.com/300x200.png?text=Clubhouse+Map", // Replace with actual image path
    attackers: ["Buck", "IQ", "Sledge", "Thermite", "Ash"],
    defenders: ["Valkyrie", "Bandit", "Jäger", "Mute", "Smoke"],
    favoredSide: "Defenders", // "Attackers" or "Defenders"
    description: "Attackers often focus on controlling the Basement and getting vertical control over the Church and Bar areas, with Thermite or Hibana playing a crucial role. Defenders, on the other hand, will roam and apply pressure on the attackers from above, making use of the many hatch and window opportunities."
  },
  {
    name: "Consulate",
image: "https://via.placeholder.com/300x200.png?text=Consulate+Map", // Replace with actual image path
    attackers: ["Sledge", "Twitch", "Thermite", "Montagne", "Ash"],
    defenders: ["Echo", "Castle", "Caveira", "Mute", "Jäger"],
    favoredSide: "Attackers", // "Attackers" or "Defenders"
    description: "Attackers usually aim to take control of the Admin and Garage areas, pushing towards the Lobby or Offices. Verticality is essential, as attackers look to open up hatches and walls to create sightlines. Defenders often use Castle barricades and roaming strategies to pressure attackers and delay their progress."
  },
  {
    name: "Coastline",
  image: "https://via.placeholder.com/300x200.png?text=Coastline+Map", // Replace with actual image path
    attackers: ["Sledge", "Twitch", "Buck", "Ash", "Thermite"],
    defenders: ["Valkyrie", "Mute", "Jäger", "Bandit", "Echo"],
    favoredSide: "Attackers", // "Attackers" or "Defenders"
    description: "In high-level play, attackers focus on the Hookah Lounge and Kitchen areas, using drones and breaching charges to control the map. Many attacks revolve around opening up windows and rooftops for sightlines. Defenders need to rely on vertical control and the use of roamers to disrupt attackers."
  },
  {
    name: "Kafe Dostoyevsky",
   image: "https://via.placeholder.com/300x200.png?text=Kafe+Map", // Replace with actual image path
    attackers: ["Sledge", "Ash", "Buck", "Thermite", "IQ"],
    defenders: ["Jäger", "Bandit", "Valkyrie", "Echo", "Maestro"],
    favoredSide: "Defenders", // "Attackers" or "Defenders"
    description: "Attackers typically try to control the top floor and push downwards, often breaching windows and opening hatches for vertical plays. The middle floor, especially the Site Room and Reading Room, often sees intense fighting. Defenders use heavy roaming and hold angles on key chokepoints like the Cocktail and Kitchen."
  },
  {
    name: "Oregon",
    image: "https://via.placeholder.com/300x200.png?text=Oregon+Map", // Replace with actual image path
    attackers: ["Thermite", "Sledge", "Buck", "Ash", "Hibana"],
    defenders: ["Jäger", "Mute", "Smoke", "Bandit", "Valkyrie"],
    favoredSide: "Defenders", // "Attackers" or "Defenders"
    description: "In Oregon, attackers focus on breaching the Basement or top floors, often using Thermite or Hibana to access critical walls. The key areas like the Kitchen and Laundry room must be cleared. Defenders commonly roam and hold critical areas like the Meeting Room and Basement entrances."
  },
  {
    name: "Chalet",
    image: "https://via.placeholder.com/300x200.png?text=Chalet+Map", // Replace with actual image path
    attackers: ["Sledge", "Ash", "Buck", "Thermite", "Hibana"],
    defenders: ["Jäger", "Valkyrie", "Bandit", "Mute", "Echo"],
    favoredSide: "Defenders", // "Attackers" or "Defenders"
    description: "Attackers in Chalet focus on controlling the Main Hall and Upper Floor, but also need to contest the Garage. With strong defensive positions like the Trophy Room, defenders can lock down key areas with vertical play. Attackers need to be fast to avoid being overwhelmed by roaming defenders."
  },
  {
    name: "Border",
    image: "https://via.placeholder.com/300x200.png?text=Border+Map", // Replace with actual image path
    attackers: ["Ash", "Sledge", "Buck", "Thermite", "IQ"],
    defenders: ["Bandit", "Mute", "Jäger", "Valkyrie", "Echo"],
    favoredSide: "Defenders", // "Attackers" or "Defenders"
    description: "Attackers usually push from the East and West sides, focusing on areas like the Archives and CCTV. Hard breachers need to open walls for sightlines and control. Defenders often use roamers and keep heavy presence on the top floor, while also holding key chokepoints like the Armory and Office."
  },
  {
    name: "Villa",
    image: "https://via.placeholder.com/300x200.png?text=Villa+Map", // Replace with actual image path
    attackers: ["Thermite", "Ash", "Sledge", "IQ", "Hibana"],
    defenders: ["Jäger", "Valkyrie", "Mute", "Echo", "Maestro"],
    favoredSide: "Attackers", // "Attackers" or "Defenders"
    description: "In Villa, attackers focus on controlling the top floor, while also ensuring they get control of key areas like the Trophy Room and Kitchen. The Basement and other areas often rely on strong vertical play. Defenders use roamers to apply pressure and slow down attackers, making use of anchored positions like the Library and Master Bedroom."
  }
];
// Add more maps as need
// Export the maps array for use in other modules
export default siegeMaps; 