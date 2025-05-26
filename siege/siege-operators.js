const operators = {
  attacker: [
    {
      name: 'Ash',
      difficulty: 'medium',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['oregon', 'coastline', 'border'],
      description: 'Fast entry fragger with ranged breaching capability.',
      counters: ['Jäger', 'Mira']
    },
    {
      name: 'Thermite',
      difficulty: 'hard',
      playstyles: ['balanced'],
      mapsStrong: ['bank', 'consulate', 'clubhouse'],
      description: 'Essential hard breacher for reinforced walls.',
      counters: ['Bandit', 'Kaid']
    },
    {
      name: 'Sledge',
      difficulty: 'easy',
      playstyles: ['aggressive', 'passive'],
      mapsStrong: ['villa', 'skyscraper'],
      description: 'Versatile with melee breaching, good for quick entries.',
      counters: ['Lesion']
    },
    {
      name: 'Zofia',
      difficulty: 'medium',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['border', 'coastline'],
      description: 'Flexible attacker with concussion grenades and ranged impact.',
      counters: ['Wamai', 'Echo']
    },
    {
      name: 'Twitch',
      difficulty: 'hard',
      playstyles: ['aggressive'],
      mapsStrong: ['bank', 'consulate'],
      description: 'Drone operator for disabling gadgets and intel gathering.',
      counters: ['Mute', 'Kaid']
    },
    {
      name: 'Montagne',
      difficulty: 'medium',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Shield bearer for strong site holding and support.',
      counters: ['Capitao', 'Finka']
    },
    {
      name: 'Glaz',
      difficulty: 'medium',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['skyscraper', 'coastline'],
      description: 'Sniper with thermal scope for long range control.',
      counters: ['Smoke', 'Jäger']
    },
    {
      name: 'Buck',
      difficulty: 'medium',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['border', 'oregon'],
      description: 'Shotgun under-barrel for vertical play and fast entry.',
      counters: ['Lesion', 'Ela']
    },
    {
      name: 'Capitao',
      difficulty: 'medium',
      playstyles: ['balanced', 'passive'],
      mapsStrong: ['villa', 'consulate'],
      description: 'Crossbow utility for area denial and vision blocking.',
      counters: ['Wamai', 'Jäger']
    },
    {
      name: 'Blackbeard',
      difficulty: 'hard',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['bank', 'border'],
      description: 'Shielded rifle for safe long-range engagements.',
      counters: ['Grenade', 'IQ']
    },
    {
      name: 'Hibana',
      difficulty: 'hard',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Hard breacher with ranged explosive pellets.',
      counters: ['Bandit', 'Kaid']
    },
    {
      name: 'Jackal',
      difficulty: 'medium',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['border', 'coastline'],
      description: 'Tracker operator who can find roaming defenders.',
      counters: ['Valkyrie', 'Lesion']
    },
    {
      name: 'Ying',
      difficulty: 'hard',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['villa', 'skyscraper'],
      description: 'Flashbang expert with cluster charges for entry.',
      counters: ['Jäger', 'Wamai']
    },
    {
      name: 'Dokkaebi',
      difficulty: 'hard',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Hacker that disrupts defender electronics and calls phones.',
      counters: ['Mute', 'Kapkan']
    },
    {
      name: 'Finka',
      difficulty: 'medium',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['villa', 'skyscraper'],
      description: 'Boosts teammates\' health and recoil control.',
      counters: ['Smoke', 'Lesion']
    },
    {
      name: 'Lion',
      difficulty: 'hard',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['bank', 'coastline'],
      description: 'Global scan to detect moving defenders.',
      counters: ['Mute', 'Mozzie']
    },
    {
      name: 'Maverick',
      difficulty: 'hard',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Small breacher with blowtorch for precise wall openings.',
      counters: ['Bandit', 'Kaid']
    },
    {
      name: 'Nomad',
      difficulty: 'medium',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['border', 'villa'],
      description: 'Airjab launcher to deter flanks and roamers.',
      counters: ['Lesion', 'Jackal']
    },
    {
      name: 'Gridlock',
      difficulty: 'easy',
      playstyles: ['balanced', 'passive'],
      mapsStrong: ['oregon', 'coastline'],
      description: 'Trap setter with spiked mats to slow enemy advances.',
      counters: ['IQ', 'Thatcher']
    },
    {
      name: 'Nøkk',
      difficulty: 'hard',
      playstyles: ['aggressive'],
      mapsStrong: ['skyscraper', 'border'],
      description: 'Stealth operator that silences movement and cameras.',
      counters: ['Valkyrie', 'Jackal']
    },
    {
      name: 'Amaru',
      difficulty: 'hard',
      playstyles: ['aggressive'],
      mapsStrong: ['villa', 'oregon'],
      description: 'Grappling hook for quick vertical or flank entries.',
      counters: ['Mute', 'Lesion']
    },
    {
      name: 'Kali',
      difficulty: 'hard',
      playstyles: ['balanced', 'passive'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Sniper with a powerful rifle and breaching launcher.',
      counters: ['Smoke', 'Jäger']
    },
    {
      name: 'Iana',
      difficulty: 'hard',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['border', 'consulate'],
      description: 'Illusion drone for intel and distraction.',
      counters: ['Mute', 'Kapkan']
    },
    {
      name: 'Ace',
      difficulty: 'hard',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Hard breacher with throwable gadgets for reinforced walls.',
      counters: ['Bandit', 'Kaid']
    },
    {
      name: 'Zero (Sam Fisher)',
      difficulty: 'hard',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['skyscraper', 'coastline'],
      description: 'Camera operator with hacking and intel disruption.',
      counters: ['Mute', 'Jäger']
    }
  ],
  
  defender: [
    {
      name: 'Jäger',
      difficulty: 'medium',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['bank', 'skyscraper'],
      description: 'Active defense with anti-grenade ADS devices.',
      counters: ['IQ']
    },
    {
      name: 'Smoke',
      difficulty: 'medium',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['clubhouse', 'consulate'],
      description: 'Area denial with toxic gas grenades to stall attackers.',
      counters: ['Twitch', 'IQ']
    },
    {
      name: 'Mira',
      difficulty: 'hard',
      playstyles: ['passive'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Black mirror windows for intel and choke control.',
      counters: ['Thermite', 'Zofia']
    },
    {
      name: 'Rook',
      difficulty: 'easy',
      playstyles: ['passive'],
      mapsStrong: ['villa', 'skyscraper'],
      description: 'Provides armor plates to boost team survivability.',
      counters: []
    },
    {
      name: 'Maestro',
      difficulty: 'hard',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['coastline', 'villa'],
      description: 'Armored turret with intel and firepower.',
      counters: ['IQ', 'Twitch']
    },
    {
      name: 'Bandit',
      difficulty: 'hard',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Electric fences deny breachers and gadgets.',
      counters: ['Thermite', 'Hibana']
    },
    {
      name: 'Kapkan',
      difficulty: 'easy',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['border', 'oregon'],
      description: 'Entry denial with explosive traps on doors/windows.',
      counters: ['Thatcher', 'IQ']
    },
    {
      name: 'Frost',
      difficulty: 'medium',
      playstyles: ['passive'],
      mapsStrong: ['skyscraper', 'villa'],
      description: 'Traps with welcome mats to immobilize attackers.',
      counters: ['IQ', 'Thatcher']
    },
    {
      name: 'Valkyrie',
      difficulty: 'medium',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['border', 'coastline'],
      description: 'Deployable cameras for team intel and roaming support.',
      counters: ['Jackal', 'IQ']
    },
    {
      name: 'Castle',
      difficulty: 'easy',
      playstyles: ['passive'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Reinforced barricades to block attacker paths.',
      counters: ['Buck', 'Sledge']
    },
    {
      name: 'Pulse',
      difficulty: 'medium',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['oregon', 'border'],
      description: 'Heartbeat sensor for intel on attacker positions.',
      counters: ['Twitch', 'IQ']
    },
    {
      name: 'Doc',
      difficulty: 'easy',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['villa', 'skyscraper'],
      description: 'Healing and reviving teammates with stim pistol.',
      counters: []
    },
    {
      name: 'Rook',
      difficulty: 'easy',
      playstyles: ['passive'],
      mapsStrong: ['villa', 'skyscraper'],
      description: 'Provides armor plates to boost team survivability.',
      counters: []
    },
    {
      name: 'Echo',
      difficulty: 'hard',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Disruptive drone that can disable attacker gadgets.',
      counters: ['Twitch', 'IQ']
    },
    {
      name: 'Caveira',
      difficulty: 'hard',
      playstyles: ['aggressive'],
      mapsStrong: ['villa', 'border'],
      description: 'Silent roaming interrogator with stealth capabilities.',
      counters: ['Jackal', 'IQ']
    },
    {
      name: 'Lesion',
      difficulty: 'medium',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['border', 'oregon'],
      description: 'Deployable mines that slow and damage attackers.',
      counters: ['Thatcher', 'IQ']
    },
    {
      name: 'Ela',
      difficulty: 'medium',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['border', 'coastline'],
      description: 'Fast-moving with concussion mines for crowd control.',
      counters: ['Thatcher', 'IQ']
    },
    {
      name: 'Vigil',
      difficulty: 'hard',
      playstyles: ['aggressive'],
      mapsStrong: ['skyscraper', 'villa'],
      description: 'Cloaking device that hides from drones and cams.',
      counters: ['Jackal', 'IQ']
    },
    {
      name: 'Maestro',
      difficulty: 'hard',
      playstyles: ['balanced', 'aggressive'],
      mapsStrong: ['coastline', 'villa'],
      description: 'Armored turret with intel and firepower.',
      counters: ['IQ', 'Twitch']
    },
    {
      name: 'Alibi',
      difficulty: 'medium',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Deployable holograms to confuse attackers.',
      counters: ['IQ', 'Twitch']
    },
    {
      name: 'Clash',
      difficulty: 'hard',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Shield operator with taser to slow enemies.',
      counters: ['Thatcher', 'IQ']
    },
    {
      name: 'Kaid',
      difficulty: 'hard',
      playstyles: ['balanced', 'passive'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Electrifies reinforced walls and hatches.',
      counters: ['Thermite', 'Hibana']
    },
    {
      name: 'Mozzie',
      difficulty: 'hard',
      playstyles: ['aggressive', 'balanced'],
      mapsStrong: ['border', 'coastline'],
      description: 'Hacks attacker drones and gathers intel.',
      counters: ['Lion', 'Dokkaebi']
    },
    {
      name: 'Wamai',
      difficulty: 'hard',
      playstyles: ['balanced', 'passive'],
      mapsStrong: ['border', 'coastline'],
      description: 'Active defense with magnetic gadget interception.',
      counters: ['Thatcher', 'Twitch']
    },
    {
      name: 'Goyo',
      difficulty: 'medium',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['villa', 'skyscraper'],
      description: 'Deploys fire traps that create area denial.',
      counters: ['Thatcher', 'IQ']
    },
    {
      name: 'Warden',
      difficulty: 'medium',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Thermal goggles to see through smoke and dark rooms.',
      counters: ['Smoke', 'Mira']
    },
    {
      name: 'Oryx',
      difficulty: 'hard',
      playstyles: ['aggressive'],
      mapsStrong: ['villa', 'skyscraper'],
      description: 'Can dash through walls and climb hatches for flanking.',
      counters: ['Lesion', 'Mute']
    },
    {
      name: 'Melusi',
      difficulty: 'medium',
      playstyles: ['passive'],
      mapsStrong: ['border', 'coastline'],
      description: 'Deployable sonic deterrents that slow attackers.',
      counters: ['Thatcher', 'IQ']
    },
    {
      name: 'Aruni',
      difficulty: 'hard',
      playstyles: ['passive', 'balanced'],
      mapsStrong: ['bank', 'clubhouse'],
      description: 'Deploys laser grids to deny entry and reinforce positions.',
      counters: ['Thatcher', 'Twitch']
    }
  ]
};

// Helper to rank operators for a given side, map, playstyle, groupSize, noviceMode
function getStrat(side, mapId, playstyle, groupSize, noviceMode) {
  const sideOps = operators[side] || [];

  // Filter operators that fit playstyle and map
  let filteredOps = sideOps.filter(op => 
    op.playstyles.includes(playstyle) && 
    (op.mapsStrong.includes(mapId) || op.mapsStrong.length === 0) // 0 means all maps
  );

  if (noviceMode) {
    // Remove hard difficulty operators for novice
    filteredOps = filteredOps.filter(op => op.difficulty !== 'hard');
  }

  // Sort operators by how strongly they fit the map (map in mapsStrong) first
  filteredOps.sort((a,b) => {
    const aFav = a.mapsStrong.includes(mapId) ? 1 : 0;
    const bFav = b.mapsStrong.includes(mapId) ? 1 : 0;
    return bFav - aFav;
  });

  // Determine how many operators based on group size
  const groupCounts = {
    solo: 1,
    duo: 2,
    trio: 3,
    four: 4,
    full: 5
  };
  const count = groupCounts[groupSize] || 5;

  const chosenOps = filteredOps.slice(0, count);

  // Compose a descriptive string with counters and difficulty
  const description = chosenOps.map(op => 
    `${op.name} (${op.difficulty}) - ${op.description} ` +
    (op.counters.length ? `Counters: ${op.counters.join(', ')}.` : '')
  ).join(' | ');

  return {
    operators: chosenOps.map(o => o.name),
    playstyle: playstyle.charAt(0).toUpperCase() + playstyle.slice(1),
    description: description || 'No specific recommendations for this selection.'
  };
}
