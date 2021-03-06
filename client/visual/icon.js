import React from 'react'

const rpgIcons = new Set([
	'acid',
	'acorn',
	'alien-fire',
	'all-for-one',
	'alligator-clip',
	'ammo-bag',
	'anchor',
	'angel-wings',
	'ankh',
	'anvil',
	'apple',
	'aquarius',
	'arcane-mask',
	'archer',
	'archery-target',
	'arena',
	'aries',
	'arrow-cluster',
	'arrow-flights',
	'arson',
	'aura',
	'aware',
	'axe',
	'axe-swing',
	'ball',
	'barbed-arrow',
	'barrier',
	'bat-sword',
	'battered-axe',
	'batteries',
	'battery-0',
	'battery-100',
	'battery-25',
	'battery-50',
	'battery-75',
	'battery-black',
	'battery-negative',
	'battery-positive',
	'battery-white',
	'batwings',
	'beam-wake',
	'bear-trap',
	'beer',
	'beetle',
	'bell',
	'biohazard',
	'bird-claw',
	'bird-mask',
	'blade-bite',
	'blast',
	'blaster',
	'bleeding-eye',
	'bleeding-hearts',
	'bolt-shield',
	'bomb-explosion',
	'bombs',
	'bone-bite',
	'bone-knife',
	'book',
	'boomerang',
	'boot-stomp',
	'bottle-vapors',
	'bottled-bolt',
	'bottom-right',
	'bowie-knife',
	'bowling-pin',
	'brain-freeze',
	'brandy-bottle',
	'bridge',
	'broadhead-arrow',
	'broken-bone',
	'broken-bottle',
	'broken-shield',
	'broken-skull',
	'bubbling-potion',
	'bullets',
	'burning-book',
	'burning-embers',
	'burning-eye',
	'burning-meteor',
	'burst-blob',
	'butterfly',
	'campfire',
	'cancel',
	'cancer',
	'candle',
	'candle-fire',
	'cannon-shot',
	'capitol',
	'capricorn',
	'carrot',
	'castle-emblem',
	'castle-flag',
	'cat',
	'chain',
	'cheese',
	'chemical-arrow',
	'chessboard',
	'chicken-leg',
	'circle-of-circles',
	'circular-saw',
	'circular-shield',
	'clockwork',
	'clover',
	'clovers',
	'clovers-card',
	'cluster-bomb',
	'coffee-mug',
	'cog',
	'cog-wheel',
	'cold-heart',
	'compass',
	'corked-tube',
	'crab-claw',
	'cracked-helm',
	'cracked-shield',
	'croc-sword',
	'crossbow',
	'crossed-axes',
	'crossed-bones',
	'crossed-pistols',
	'crossed-sabers',
	'crossed-swords',
	'crown',
	'crown-of-thorns',
	'crowned-heart',
	'crush',
	'crystal-ball',
	'crystal-cluster',
	'crystal-wand',
	'crystals',
	'cubes',
	'cut-palm',
	'cycle',
	'daggers',
	'daisy',
	'dead-tree',
	'death-skull',
	'decapitation',
	'defibrilate',
	'demolish',
	'dervish-swords',
	'desert-skull',
	'diamond',
	'diamonds',
	'diamonds-card',
	'dice-five',
	'dice-four',
	'dice-one',
	'dice-six',
	'dice-three',
	'dice-two',
	'dinosaur',
	'divert',
	'diving-dagger',
	'double-team',
	'doubled',
	'dragon',
	'dragon-breath',
	'dragon-wing',
	'dragonfly',
	'drill',
	'dripping-blade',
	'dripping-knife',
	'dripping-sword',
	'droplet',
	'droplet-splash',
	'duel',
	'egg',
	'egg-pod',
	'eggplant',
	'emerald',
	'energise',
	'explosion',
	'explosive-materials',
	'eye-monster',
	'eye-shield',
	'eyeball',
	'fairy',
	'fairy-wand',
	'fall-down',
	'falling',
	'fast-ship',
	'feather-wing',
	'feathered-wing',
	'fedora',
	'fire',
	'fire-bomb',
	'fire-breath',
	'fire-ring',
	'fire-shield',
	'fire-symbol',
	'fireball-sword',
	'fish',
	'fizzing-flask',
	'flame-symbol',
	'flaming-arrow',
	'flaming-claw',
	'flaming-trident',
	'flask',
	'flat-hammer',
	'flower',
	'flowers',
	'fluffy-swirl',
	'focused-lightning',
	'food-chain',
	'footprint',
	'forging',
	'forward',
	'fox',
	'frost-emblem',
	'frostfire',
	'frozen-arrow',
	'gamepad-cross',
	'gavel',
	'gear-hammer',
	'gear-heart',
	'gears',
	'gecko',
	'gem',
	'gem-pendant',
	'gemini',
	'glass-heart',
	'gloop',
	'gold-bar',
	'grappling-hook',
	'grass',
	'grass-patch',
	'grenade',
	'groundbreaker',
	'guarded-tower',
	'guillotine',
	'halberd',
	'hammer',
	'hammer-drop',
	'hand',
	'hand-emblem',
	'hand-saw',
	'harpoon-trident',
	'health',
	'health-decrease',
	'health-increase',
	'heart-bottle',
	'heart-tower',
	'heartburn',
	'hearts',
	'hearts-card',
	'heavy-fall',
	'heavy-shield',
	'helmet',
	'help',
	'hive-emblem',
	'hole-ladder',
	'honeycomb',
	'hood',
	'horn-call',
	'horns',
	'horseshoe',
	'hospital-cross',
	'hot-surface',
	'hourglass',
	'hydra',
	'hydra-shot',
	'ice-cube',
	'implosion',
	'incense',
	'insect-jaws',
	'interdiction',
	'jetpack',
	'jigsaw-piece',
	'kaleidoscope',
	'kettlebell',
	'key',
	'key-basic',
	'kitchen-knives',
	'knife',
	'knife-fork',
	'knight-helmet',
	'kunai',
	'lantern-flame',
	'large-hammer',
	'laser-blast',
	'laser-site',
	'lava',
	'leaf',
	'leo',
	'level-four',
	'level-four-advanced',
	'level-three',
	'level-three-advanced',
	'level-two',
	'level-two-advanced',
	'lever',
	'libra',
	'light-bulb',
	'lighthouse',
	'lightning',
	'lightning-bolt',
	'lightning-storm',
	'lightning-sword',
	'lightning-trio',
	'lion',
	'lit-candelabra',
	'load',
	'locked-fortress',
	'love-howl',
	'maggot',
	'magnet',
	'mass-driver',
	'match',
	'meat',
	'meat-hook',
	'medical-pack',
	'metal-gate',
	'microphone',
	'mine-wagon',
	'mining-diamonds',
	'mirror',
	'monster-skull',
	'moon-sun',
	'mountains',
	'mp5',
	'muscle-fat',
	'muscle-up',
	'musket',
	'nails',
	'nodular',
	'noose',
	'nuclear',
	'ocarina',
	'ocean-emblem',
	'octopus',
	'omega',
	'on-target',
	'ophiuchus',
	'overhead',
	'overmind',
	'palm-tree',
	'pawn',
	'pawprint',
	'perspective-dice-five',
	'perspective-dice-four',
	'perspective-dice-one',
	'perspective-dice-random',
	'perspective-dice-six',
	'perspective-dice-three',
	'perspective-dice-two',
	'pill',
	'pills',
	'pine-tree',
	'ping-pong',
	'pisces',
	'plain-dagger',
	'player',
	'player-despair',
	'player-dodge',
	'player-king',
	'player-lift',
	'player-pain',
	'player-pyromaniac',
	'player-shot',
	'player-teleport',
	'player-thunder-struck',
	'podium',
	'poison-cloud',
	'potion',
	'pyramids',
	'queen-crown',
	'quill-ink',
	'rabbit',
	'radar-dish',
	'radial-balance',
	'radioactive',
	'raven',
	'reactor',
	'recycle',
	'regeneration',
	'relic-blade',
	'repair',
	'reverse',
	'revolver',
	'rifle',
	'ringing-bell',
	'roast-chicken',
	'robot-arm',
	'round-bottom-flask',
	'round-shield',
	'rss',
	'rune-stone',
	'sagittarius',
	'sapphire',
	'sattelite',
	'save',
	'scorpio',
	'scroll-unfurled',
	'scythe',
	'sea-serpent',
	'seagull',
	'shark',
	'sheep',
	'sherif',
	'shield',
	'ship-emblem',
	'shoe-prints',
	'shot-through-the-heart',
	'shotgun-shell',
	'shovel',
	'shuriken',
	'sickle',
	'sideswipe',
	'site',
	'skull',
	'skull-trophy',
	'slash-ring',
	'small-fire',
	'snail',
	'snake',
	'snorkel',
	'snowflake',
	'soccer-ball',
	'spades',
	'spades-card',
	'spawn-node',
	'spear-head',
	'speech-bubble',
	'speech-bubbles',
	'spider-face',
	'spikeball',
	'spiked-mace',
	'spiked-tentacle',
	'spinning-sword',
	'spiral-shell',
	'splash',
	'spray',
	'sprout',
	'sprout-emblem',
	'stopwatch',
	'suckered-tentacle',
	'suits',
	'sun',
	'sun-symbol',
	'sunbeams',
	'super-mushroom',
	'supersonic-arrow',
	'surveillance-camera',
	'sword',
	'syringe',
	'target-arrows',
	'target-laser',
	'targeted',
	'taurus',
	'telescope',
	'tentacle',
	'tesla',
	'thorn-arrow',
	'thorny-vine',
	'three-keys',
	'tic-tac-toe',
	'toast',
	'tombstone',
	'tooth',
	'torch',
	'tower',
	'trail',
	'trefoil-lily',
	'trident',
	'triforce',
	'trophy',
	'turd',
	'two-dragons',
	'two-hearts',
	'uncertainty',
	'underhand',
	'unplugged',
	'vail',
	'vase',
	'venomous-snake',
	'vest',
	'vine-whip',
	'virgo',
	'water-drop',
	'wifi',
	'wireless-signal',
	'wolf-head',
	'wolf-howl',
	'wooden-sign',
	'wrench',
	'wyvern',
	'x-mark',
	'zebra-shield',
	'zigzag-leaf',
])

const Icon = ({ icon, className = '' }) => {
	const prefix = rpgIcons.has(icon) ? 'ra' : 'fa'

	return <i className={`${prefix} ${prefix}-${icon} ${className}`} />
}

export default Icon
