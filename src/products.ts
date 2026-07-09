export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  imageUrl: string;
  highlightColor: string;
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Trek Domane SL 7 Gen 4',
    category: 'Road Bikes',
    price: '$6,799',
    description: 'Experience the perfect blend of speed and comfort with this flagship carbon road bike. Built for serious cyclists who demand performance.',
    features: [
      'Lightweight carbon fiber frame',
      'Shimano 12s DI2 groupset',
      '700c wheels with tubeless ready tires',
      'Hydraulic disc brakes'
    ],
    imageUrl: 'trek-domane.png',
    highlightColor: '#F36E32'
  },
  {
    id: '2',
    name: 'Trek Fuel EX 9.8 XT DI2 Gen 7',
    category: 'Mountain Bikes',
    price: '$6,499',
    description: 'Conquer any terrain with confidence. Full suspension design and aggressive geometry make this bike ready for the toughest trails.',
    features: [
      '29" wheels with aggressive tread',
      '130mm front and rear suspension',
      'Dropper post for technical descents',
      '1x12 drivetrain for simplicity'
    ],
    imageUrl: 'trek-fuel.png',
    highlightColor: '#73BB44'
  },
  {
    id: '3',
    name: 'Aventon Level 3',
    category: 'Electric Bikes',
    price: '$1,899',
    description: 'Take your commutes to the next LEVEL. The all new Level 3 comes fully equipped with everything you need to trade your daily drives for daily rides. A rear rack and fenders ensures you can carry necessities while staying clean and dry during your rides.',
    features: [
      '500W rear hub motor',
      'Integrated battery (removable)',
      'Built-in lights and fenders',
      'Upright comfortable geometry'
    ],
    imageUrl: 'aventon-level3.png',
    highlightColor: '#F5E100'
  },
  {
    id: '4',
    name: 'Trek FX',
    category: 'City Bikes',
    price: '$899',
    description: 'Exercise, commute, or ride for fun with the wide range of speeds, reliable disc brakes that let you stop on a dime, and loads of mounts for accessories.',
    features: [
      'Lightweight aluminum frame',
      'Comfortable wide saddle',
      'Rear rack and basket compatible',
      '9-speed for versatile riding'
    ],
    imageUrl: 'trek-fx.png',
    highlightColor: '#144D3A'
  },
  {
    id: '5',
    name: 'Time ADHX Shimano GRX',
    category: 'Gravel Bikes',
    price: '$6,290',
    description: 'The ADHX 45 is smooth, stable, and uncommonly durable; when asked, it rips. Meticulously crafted to be perfect inside and out.',
    features: [
      'Bespoke carbon frameset',
      'Wide tire clearance (up to 45mm)',
      'World-class geometry',
      'European heritage'
    ],
    imageUrl: 'time-gravel.png',
    highlightColor: '#F36E32'
  }
];
