const defenseOperators = {
  "fenrir": {
    "name": "Fenrir",
    "role": "Trapper",
    "gadget": "F-NATT Dread Mine",
    "counters": ["Twitch", "IQ", "Thatcher", "Flores"],
    "notes": "Vulnerable to EMP and Shock Drone shots."
  },
  "mira": {
    "name": "Mira",
    "role": "Intel/Anchor",
    "gadget": "Black Mirror",
    "counters": ["Thatcher", "Twitch", "Kali", "Zofia"],
    "notes": "Coordinate mirror placement with team."
  },
  "maestro": {
    "name": "Maestro",
    "role": "Intel/Anchor",
    "gadget": "Evil Eye",
    "counters": ["Twitch", "Thatcher", "IQ", "Kali"],
    "notes": "Weak to EMPs and explosive gadgets."
  },
  "mute": {
    "name": "Mute",
    "role": "Anti-Intel",
    "gadget": "Signal Disruptor",
    "counters": ["Thatcher", "Twitch", "IQ"],
    "notes": "Disruptors can be avoided or destroyed."
  },
  "bandit": {
    "name": "Bandit",
    "role": "Anti-Hard Breach",
    "gadget": "Shock Wire",
    "counters": ["Twitch", "Thatcher", "Kali"],
    "notes": "Can be counter-tricked by coordinated teams."
  },
  "valkyrie": {
    "name": "Valkyrie",
    "role": "Intel",
    "gadget": "Black Eye Cameras",
    "counters": ["IQ", "Twitch", "Thatcher"],
    "notes": "Cameras can be easily destroyed if found."
  },
  "lesion": {
    "name": "Lesion",
    "role": "Trapper",
    "gadget": "GU Mines",
    "counters": ["IQ", "Twitch", "Thatcher"],
    "notes": "GU Mines can be spotted or triggered."
  },
  "ela": {
    "name": "Ela",
    "role": "Trapper/Roamer",
    "gadget": "Grzmot Mine",
    "counters": ["IQ", "Twitch", "Zofia"],
    "notes": "Mines are easy to miss but avoidable."
  },
  "frost": {
    "name": "Frost",
    "role": "Trapper",
    "gadget": "Welcome Mat",
    "counters": ["IQ", "Thatcher"],
    "notes": "Traps are effective but can be spotted."
  },
  "smoke": {
    "name": "Smoke",
    "role": "Area Denial",
    "gadget": "Gas Grenade",
    "counters": ["Zofia", "Kali", "Thatcher"],
    "notes": "Effective for delaying pushes."
  },
  "jaeger": {
    "name": "Jäger",
    "role": "Anti-Gadget",
    "gadget": "ADS System",
    "counters": ["Thatcher", "IQ", "Twitch"],
    "notes": "Destroy throwable gadgets."
  },
  "rook": {
    "name": "Rook",
    "role": "Support",
    "gadget": "Armor Pack",
    "counters": ["N/A"],
    "notes": "Provides armor plates to team."
  },
  "doc": {
    "name": "Doc",
    "role": "Support",
    "gadget": "Stim Pistol",
    "counters": ["N/A"],
    "notes": "Can revive or overheal teammates."
  },
  "kapkan": {
    "name": "Kapkan",
    "role": "Trapper",
    "gadget": "Entry Denial Device",
    "counters": ["IQ", "Twitch"],
    "notes": "Can be spotted and shot."
  },
  "caveira": {
    "name": "Caveira",
    "role": "Intel/Roamer",
    "gadget": "Silent Step",
    "counters": ["Jackal", "Nomad"],
    "notes": "Dangerous in flanks, but needs stealth."
  },
  "echo": {
    "name": "Echo",
    "role": "Intel/Denial",
    "gadget": "Yokai Drone",
    "counters": ["Twitch", "IQ", "Thatcher"],
    "notes": "Drones must be well hidden."
  },
  "warden": {
    "name": "Warden",
    "role": "Anchor",
    "gadget": "Glance Smart Glasses",
    "counters": ["IQ", "Thatcher"],
    "notes": "Situational gadget."
  },
  "mozzie": {
    "name": "Mozzie",
    "role": "Intel Denial",
    "gadget": "Pest Launcher",
    "counters": ["Twitch", "Flores", "Thatcher"],
    "notes": "Can hijack drones."
  },
  "alibi": {
    "name": "Alibi",
    "role": "Intel/Bait",
    "gadget": "Prisma",
    "counters": ["IQ", "Twitch"],
    "notes": "Can confuse attackers briefly."
  },
  "clash": {
    "name": "Clash",
    "role": "Area Denial",
    "gadget": "CCE Shield",
    "counters": ["Zofia", "Thatcher", "Kali"],
    "notes": "Can hold choke points."
  },
  "oryx": {
    "name": "Oryx",
    "role": "Roamer",
    "gadget": "Remah Dash",
    "counters": ["Claymores", "Jackal"],
    "notes": "Highly mobile and can rotate quickly."
  },
  "melusi": {
    "name": "Melusi",
    "role": "Intel/Slow",
    "gadget": "Banshee Device",
    "counters": ["Zofia", "Ash", "Thatcher"],
    "notes": "Slows down attackers."
  },
  "thunderbird": {
    "name": "Thunderbird",
    "role": "Healer",
    "gadget": "Kona Station",
    "counters": ["IQ", "Thatcher"],
    "notes": "Healing stations can be used by both teams."
  },
  "thorn": {
    "name": "Thorn",
    "role": "Trapper",
    "gadget": "Razorbloom Shell",
    "counters": ["IQ", "Twitch"],
    "notes": "Effective for area denial."
  },
  "azami": {
    "name": "Azami",
    "role": "Area Denial",
    "gadget": "Kiba Barrier",
    "counters": ["Ash", "Zofia", "Thatcher"],
    "notes": "Can reshape site defense quickly."
  }
  // Add remaining if needed
};
