const rankedMaps = [
  {
    name: "Bank",
    description: "A multi-floor office building with lots of tight hallways, offices, and vault areas.",
    playstyles: {
      attackers: [
        "Use vertical play from the top floor to take control of open hatches.",
        "Focus on securing server room and garage for plant sites.",
        "Drone aggressively to locate roamers in offices and archives."
      ],
      defenders: [
        "Anchor in the server room and archives with reinforced walls.",
        "Utilize roamers in the top floor offices to delay attackers.",
        "Control garage and main lobby to cut off attacker push."
      ]
    }
  },
  {
    name: "Clubhouse",
    description: "A two-story biker clubhouse with a basement and destructible walls for vertical play.",
    playstyles: {
      attackers: [
        "Aggressive vertical play through hatches to control basement.",
        "Secure CCTV and cash room as primary attack points.",
        "Clear roamers from the basement and lockers early."
      ],
      defenders: [
        "Anchor in CCTV and cash room with reinforced walls.",
        "Use roamers in basement to slow push.",
        "Watch main garage and hookah for flank routes."
      ]
    }
  },
  {
    name: "Coastline",
    description: "A large resort with open rooftop areas and balconies that provide multiple entry points.",
    playstyles: {
      attackers: [
        "Control rooftop and balconies to apply pressure from multiple angles.",
        "Use vertical play from the skylight and hatches.",
        "Drone aggressively to find roamers on the first floor."
      ],
      defenders: [
        "Anchor on site with solid reinforcement on main plant areas.",
        "Use roamers to delay attackers on balconies and pool side.",
        "Play vertically to contest skylight and hatches."
      ]
    }
  },
  {
    name: "Consulate",
    description: "A government building with three floors, including a basement garage.",
    playstyles: {
      attackers: [
        "Focus on lobby and garage control for entry points.",
        "Use vertical play to disrupt defenders above.",
        "Clear roamers quickly from the top floor offices."
      ],
      defenders: [
        "Reinforce garage and admin office to protect bomb sites.",
        "Roam in offices and top floors to slow attackers.",
        "Control main lobby to prevent fast plant."
      ]
    }
  },
  {
    name: "Kafe Dostoyevsky",
    description: "A large bakery and café with multiple floors and vertical play opportunities.",
    playstyles: {
      attackers: [
        "Push piano and bakery for plant sites.",
        "Use vertical play through hatches and skylights.",
        "Drone aggressively to locate roamers in dining areas."
      ],
      defenders: [
        "Anchor in kitchen and piano room with solid reinforcements.",
        "Use roamers to delay on top floors and bakery.",
        "Control ventilation shafts and skylights."
      ]
    }
  },
  {
    name: "Oregon",
    description: "A farmhouse with a basement, multiple entry points, and destructible floors.",
    playstyles: {
      attackers: [
        "Focus on basement control via garage and blue stairs.",
        "Use vertical play from main floor hatches.",
        "Clear roamers in dorms and garage early."
      ],
      defenders: [
        "Anchor in basement with reinforced walls and hatches.",
        "Roam in dorms and workshop to slow attackers.",
        "Control main floor entrances with traps and gadgets."
      ]
    }
  },
  {
    name: "Outback",
    description: "A remote Australian compound with multiple buildings and outdoor spaces.",
    playstyles: {
      attackers: [
        "Secure exterior control to limit defender movement.",
        "Use long angles to control corridors.",
        "Drone to find roaming defenders around compound."
      ],
      defenders: [
        "Anchor in building strongholds with reinforced walls.",
        "Use roamers to pressure attackers outside.",
        "Use gadgets to delay outside pushes."
      ]
    }
  },
  {
    name: "Tower",
    description: "A large skyscraper with multiple floors, elevators, and vertical play.",
    playstyles: {
      attackers: [
        "Use vertical play to control upper floors.",
        "Push from main lobby and elevators.",
        "Drone to locate roamers on middle floors."
      ],
      defenders: [
        "Anchor on key floors with reinforcements.",
        "Roam to delay attacker entry through elevators and stairs.",
        "Use traps and gadgets to defend vertical hatches."
      ]
    }
  },
  {
    name: "Villa",
    description: "A luxurious Italian villa with tight corridors and multiple bomb sites.",
    playstyles: {
      attackers: [
        "Control the main staircases and piano room.",
        "Use vertical play through hatchways.",
        "Drone to find roamers in hallways and garage."
      ],
      defenders: [
        "Anchor on bomb sites with strong reinforcements.",
        "Roam in upstairs hallways to delay attackers.",
        "Control garage and main entrance for flanks."
      ]
    }
  },
  {
    name: "Theme Park",
    description: "An abandoned amusement park with outdoor and indoor sections.",
    playstyles: {
      attackers: [
        "Control outdoor areas to pressure inside sites.",
        "Use long angles to spot roamers.",
        "Drone carefully to avoid traps and ambushes."
      ],
      defenders: [
        "Anchor in fortified sites with reinforcements.",
        "Roam outdoors to delay and flank attackers.",
        "Use gadgets to secure open areas."
      ]
    }
  },
  {
    name: "House",
    description: "A small residential house with simple layout, ideal for quick engagements.",
    playstyles: {
      attackers: [
        "Use quick aggressive pushes through main entrances.",
        "Drone for roamers in bedrooms and garage.",
        "Control main floor for plant opportunities."
      ],
      defenders: [
        "Anchor in main bomb sites with reinforcements.",
        "Roam outside and garage to delay attackers.",
        "Use traps to slow pushes through entrances."
      ]
    }
  },
  {
    name: "Chalet",
    description: "A mountain chalet with multiple floors, fireplaces, and vertical play.",
    playstyles: {
      attackers: [
        "Control top floor for vertical pressure.",
        "Push from garage and main entrance.",
        "Drone to clear roamers in basement."
      ],
      defenders: [
        "Anchor in basement and main floor with reinforcements.",
        "Roam in upstairs bedrooms to delay attackers.",
        "Control main entrances with traps."
      ]
    }
  },
  {
    name: "Favela",
    description: "A densely packed favela with vertical tight spaces and many entry points.",
    playstyles: {
      attackers: [
        "Use aggressive roam clearing.",
        "Control top floor to cut off rotations.",
        "Push from multiple entry points simultaneously."
      ],
      defenders: [
        "Roam aggressively to leverage tight spaces.",
        "Anchor bomb sites with reinforcements.",
        "Use gadgets to delay and disrupt attackers."
      ]
    }
  },
  {
    name: "Fortress",
    description: "A fortified prison complex with tight corridors and limited entry points.",
    playstyles: {
      attackers: [
        "Control key chokepoints with grenades and drones.",
        "Push from main gate and tower entry points.",
        "Coordinate vertical plays from upper floors."
      ],
      defenders: [
        "Anchor with strong reinforcements on bomb sites.",
        "Roam corridors to delay attackers.",
        "Use traps and gadgets to control movement."
      ]
    }
  },
  {
    name: "Kanal",
    description: "A port facility with multiple large open areas and boat access.",
    playstyles: {
      attackers: [
        "Use vertical play on warehouse roofs.",
        "Push from docks and warehouses.",
        "Drone for roamers in shipping containers."
      ],
      defenders: [
        "Anchor on bomb sites with reinforcements.",
        "Roam docks and warehouse for flank opportunities.",
        "Control vertical hatches to contest attackers."
      ]
    }
  },
  {
    name: "Presidential Plane",
    description: "A plane interior with narrow corridors and high verticality.",
    playstyles: {
      attackers: [
        "Clear narrow corridors with grenades and flashbangs.",
        "Control cockpit and rear cabin.",
        "Drone carefully to avoid traps."
      ],
      defenders: [
        "Anchor in cockpit and main cabin.",
        "Use roamers to delay in narrow corridors.",
        "Place gadgets to cover flanks and entrances."
      ]
    }
  }
];

export default rankedMaps;