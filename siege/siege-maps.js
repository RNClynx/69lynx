// Sample map data with side favored info and description

const maps = [
  {
    id: 'bank',
    name: 'Bank',
    sideFavored: 'defender',
    description: 'Classic defender favored map with strong hold spots.'
  },
  {
    id: 'oregon',
    name: 'Oregon',
    sideFavored: 'attacker',
    description: 'Attacker sided map, aggressive pushes work well here.'
  },
  {
    id: 'coastline',
    name: 'Coastline',
    sideFavored: 'attacker',
    description: 'Attacker favored, multiple plant spots and rotations.'
  },
  {
    id: 'consulate',
    name: 'Consulate',
    sideFavored: 'defender',
    description: 'Defender sided with tight choke points.'
  },
  {
    id: 'clubhouse',
    name: 'Clubhouse',
    sideFavored: 'defender',
    description: 'Strong defender map with vertical play.'
  },
  {
    id: 'border',
    name: 'Border',
    sideFavored: 'attacker',
    description: 'Attacker sided with fast rotates.'
  },
  {
    id: 'villa',
    name: 'Villa',
    sideFavored: null,
    description: 'Balanced map, no clear side advantage.'
  },
  {
    id: 'skyscraper',
    name: 'Skyscraper',
    sideFavored: 'defender',
    description: 'Defender favored with vertical sight lines.'
  }
];
console.log('Maps:', maps);
export default maps;  