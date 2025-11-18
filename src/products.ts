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
    name: 'Velocity Pro Carbon Road Bike',
    category: 'Road Bikes',
    price: '$3,299',
    description: 'Experience the perfect blend of speed and comfort with our flagship carbon road bike. Built for serious cyclists who demand performance.',
    features: [
      'Lightweight carbon fiber frame',
      'Shimano 105 groupset',
      '700c wheels with tubeless ready tires',
      'Hydraulic disc brakes'
    ],
    imageUrl: '/images/velocity-pro-carbon-road-bike.jpeg',
    highlightColor: '#F36E32'
  },
  {
    id: '2',
    name: 'TrailBlazer Elite Mountain Bike',
    category: 'Mountain Bikes',
    price: '$2,899',
    description: 'Conquer any terrain with confidence. Full suspension design and aggressive geometry make this bike ready for the toughest trails.',
    features: [
      '29" wheels with aggressive tread',
      '130mm front and rear suspension',
      'Dropper post for technical descents',
      '1x12 drivetrain for simplicity'
    ],
    imageUrl: '/images/trailblazer-elite-mountain-bike.jpeg',
    highlightColor: '#73BB44'
  },
  {
    id: '3',
    name: 'Urban E-Commuter',
    category: 'Electric Bikes',
    price: '$2,499',
    description: 'Transform your daily commute with pedal-assist technology. Arrive refreshed with up to 50 miles of battery range.',
    features: [
      '500W rear hub motor',
      'Integrated battery (removable)',
      'Built-in lights and fenders',
      'Upright comfortable geometry'
    ],
    imageUrl: '/images/urban-e-commuter.jpeg',
    highlightColor: '#F5E100'
  }
];
