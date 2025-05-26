const maps = [
  {
    name: "Lair",
    description: "A newer map featuring tight corridors and vertical play. Ranked play here focuses on map control with drone intel and vertical utility usage.",
    commonStrats: [
      "Use roamers to control mid and deny push through main hallways.",
      "Defenders often hold high ground to stop attackers from breaking in.",
      "Watch out for vertical play from attackers using soft floors."
    ]
  },
  {
    name: "Nighthaven Labs",
    description: "A laboratory-themed map with complex layouts. Ranked games emphasize utility denial and drone control.",
    commonStrats: [
      "Use mute jammers to block attacker drones early.",
      "Set traps near common entry points.",
      "Defend bomb sites aggressively using crossfires."
    ]
  },
  {
    name: "Emerald Plains",
    description: "An outdoor-heavy map that favors long sightlines and careful positioning.",
    commonStrats: [
      "Use operators with long-range utility like smoke or lesion.",
      "Control key outdoor areas to prevent flanking.",
      "Coordinate crossfires on open areas."
    ]
  },
  {
    name: "Bank",
    description: "Classic ranked map with multiple bomb sites and vertical play. Ranked play focuses on site anchoring and intel gathering.",
    commonStrats: [
      "Roamers control the parking garage and staff room.",
      "Use reinforcements to slow down attacker pushes.",
      "Watch for vertical play from CEO office and open area."
    ]
  },
  {
    name: "Border",
    description: "Medium-sized map with emphasis on drone control and site denial.",
    commonStrats: [
      "Control the ventilation shaft and customs office.",
      "Use deployable shields to block entrances.",
      "Aggressively deny attackers drone intel."
    ]
  },
  {
    name: "Chalet",
    description: "Large map with vertical gameplay and outdoor areas.",
    commonStrats: [
      "Anchor bomb sites with operators like Mira and Smoke.",
      "Use roamers to control wine cellar and basement stairs.",
      "Be aware of vertical play between floors."
    ]
  },
  {
    name: "Clubhouse",
    description: "Popular map with narrow hallways and tight bomb sites.",
    commonStrats: [
      "Control the garage and church area to deny attackers.",
      "Use mute and bandit to block hard breachers.",
      "Coordinate crossfires in small corridors."
    ]
  },
  {
    name: "Coastline",
    description: "Map with large open areas and verticality.",
    commonStrats: [
      "Use roamers to control hookah and penthouse.",
      "Set traps near the aquarium.",
      "Anchor bomb sites with smoke and other delay operators."
    ]
  },
  {
    name: "Consulate",
    description: "Map with multiple entry points and a mix of vertical and horizontal play.",
    commonStrats: [
      "Control ventilation and garage early.",
      "Use roamers to contest the basement and admin areas.",
      "Use utility to slow attacker pushes."
    ]
  },
  {
    name: "Kafe Dostoyevsky",
    description: "Classic map with strong vertical play and multiple angles.",
    commonStrats: [
      "Use Mira windows to control sightlines.",
      "Anchor bomb sites with smoke and lesion.",
      "Roam in piano and bakery to delay pushes."
    ]
  },
  {
    name: "Kanal",
    description: "Map with strong vertical play and long corridors.",
    commonStrats: [
      "Control the boat and warehouse areas.",
      "Use roamers to contest garage and stairs.",
      "Deny vertical play from control room."
    ]
  },
  {
    name: "Oregon",
    description: "One of the most played maps with tight bomb sites and common roam spots.",
    commonStrats: [
      "Control dorms and kids dorms early.",
      "Use mute and bandit to deny hard breachers.",
      "Roam on first floor to delay site push."
    ]
  },
  {
    name: "Outback",
    description: "Map with open outdoor areas and a strong vertical component.",
    commonStrats: [
      "Control outdoor flank routes.",
      "Use roamers to contest cellar and main building.",
      "Anchor bomb sites with utility."
    ]
  },
  {
    name: "Skyscraper",
    description: "Vertical map with multiple floors and tight bomb sites.",
    commonStrats: [
      "Roam to control skylight and terrace.",
      "Anchor bomb sites with Mira and smoke.",
      "Watch for vertical pushes from above."
    ]
  },
  {
    name: "Theme Park",
    description: "Newer map with narrow corridors and complex site layouts.",
    commonStrats: [
      "Control main hallways and entrance points.",
      "Use roamers to delay attackers.",
      "Anchor bomb sites with utility traps."
    ]
  },
  {
    name: "Villa",
    description: "Large map with multiple bomb sites and outdoor areas.",
    commonStrats: [
      "Control main hall and piano room.",
      "Use roamers to contest east and west sides.",
      "Anchor bomb sites with strong utility."
    ]
  }
];

export default maps;
export { maps as siegeMaps };
export const getMapByName = (name) => {
  return maps.find(map => map.name.toLowerCase() === name.toLowerCase());
};