export const MercenariesV6: Army = {
  name: 'Mercenaires',
  units: [
    {
      type: 'LORD',
      name: 'Seigneur mercenaire',
      minQuantity: 1,
      maxQuantity: 1,
      pointsByUnit: 205,
      costs: new Map<UnitType, number>([
        ['LORD', 1],
        ['HERO', 1],
      ]),
      options: [
        { name: 'Cauchemar', points: 12, type: 'SINGLE', subOption: { name: 'Carapaçon', points: 6 } },
        { name: 'Arme Lourde', points: 6, type: 'SINGLE' },
      ],
      allowedMagicObjects: [
        'Armes magiques',
        'Armures magiques',
        'Talismans',
        'Objects cabalistiques',
        'Object enchantés',
        'Bannières magiques',
      ],
      maxMagicObjectPoints: 100,
    },
    {
      type: 'HERO',
      name: 'Héros mercenaires',
      minQuantity: 1,
      maxQuantity: 1,
      pointsByUnit: 80,
      options: [{ name: 'Cauchemar', points: 8, type: 'SINGLE' }],
      costs: new Map<UnitType, number>([['HERO', 1]]),
      allowedMagicObjects: [
        'Armes magiques',
        'Armures magiques',
        'Talismans',
        'Objects cabalistiques',
        'Object enchantés',
        'Bannières magiques',
      ],
      maxMagicObjectPoints: 50,
    },
    {
      type: 'BASE',
      name: 'gruerrier mercenaire',
      minQuantity: 10,
      maxQuantity: 40,
      pointsByUnit: 6,
      costs: new Map<UnitType, number>([['BASE', 1]]),
      options: [
        { name: 'Porte-étendard', points: 10, type: 'SINGLE' },
        { name: 'Musicien', points: 5, type: 'SINGLE' },
      ],
      allowedMagicObjects: [],
      maxMagicObjectPoints: 0,
    },
    {
      type: 'BASE',
      name: 'archer mercenaire',
      minQuantity: 10,
      maxQuantity: 40,
      pointsByUnit: 8,
      costs: new Map<UnitType, number>([['BASE', 1]]),
      options: [
        { name: 'Capitaine Squelette', points: 10, type: 'SINGLE' },
        { name: 'Porte-étendard', points: 10, type: 'SINGLE' },
        { name: 'Musicien', points: 5, type: 'SINGLE' },
        { name: 'Armures légères', points: 2, type: 'BY_UNIT' },
        { name: 'Lances', points: 1, type: 'BY_UNIT' },
      ],
      allowedMagicObjects: [],
      maxMagicObjectPoints: 0,
    },
    {
      type: 'SPECIAL',
      name: 'Gardes mercenaire',
      minQuantity: 10,
      maxQuantity: 30,
      pointsByUnit: 12,
      costs: new Map<UnitType, number>([['SPECIAL', 1]]),
      options: [
        { name: 'Maître des Cryptes', points: 12, type: 'SINGLE' },
        { name: 'Porte-étendard', points: 12, type: 'SINGLE' },
        { name: 'Musicien', points: 6, type: 'SINGLE' },
        { name: 'Boucliers', points: 1, type: 'BY_UNIT' },
        { name: 'Hallebarde', points: 2, type: 'BY_UNIT' },
      ],
      allowedMagicObjects: ['Bannières magiques'],
      maxMagicObjectPoints: 50,
    },
    {
      type: 'RARE',
      name: 'Elite mercenaire',
      minQuantity: 1,
      maxQuantity: 1,
      costs: new Map<UnitType, number>([['RARE', 2]]),
      pointsByUnit: 200,
      options: [],
      allowedMagicObjects: [],
      maxMagicObjectPoints: 0,
    },
  ],
  magicObjects: [],
  otherMagicObjectName: '',
};