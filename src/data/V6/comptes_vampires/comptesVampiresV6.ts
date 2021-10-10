export const ComptesVampiresV6: Army = {
  name: 'Comptes Vampires',
  units: [
    {
      type: 'LORD',
      name: 'Compte Vampire',
      minQuantity: 1,
      maxQuantity: 1,
      pointsByUnit: 205,
      options: new Set<Option>([
        { name: 'Cauchemar', points: 12, type: 'SINGLE', subOption: { name: 'Carapaçon', points: 6, type: 'SINGLE' } },
        { name: 'Arme Lourde', points: 6, type: 'SINGLE' },
      ]),
    },
    {
      type: 'HERO',
      name: 'Compte Nouveau-né',
      minQuantity: 1,
      maxQuantity: 1,
      pointsByUnit: 80,
      options: new Set<Option>([{ name: 'Cauchemar', points: 8, type: 'SINGLE' }]),
    },
    {
      type: 'BASE',
      name: 'Zombies',
      minQuantity: 10,
      maxQuantity: 40,
      pointsByUnit: 6,
      options: new Set<Option>([{ name: 'Musicien', points: 6, type: 'SINGLE' }]),
    },
    {
      type: 'SPECIAL',
      name: 'Garde des cryptes',
      minQuantity: 10,
      maxQuantity: 30,
      pointsByUnit: 12,
      options: new Set<Option>([
        { name: 'Champion', points: 12, type: 'SINGLE' },
        { name: 'Boucliers', points: 1, type: 'BY_UNIT' },
        { name: 'Hallebarde', points: 2, type: 'BY_UNIT' },
      ]),
    },
    {
      type: 'RARE',
      name: 'Carosse Noir',
      minQuantity: 1,
      maxQuantity: 1,
      pointsByUnit: 200,
      options: new Set<Option>(),
    },
  ],
};
