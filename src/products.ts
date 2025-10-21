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
    imageUrl: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
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
    imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg',
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
    imageUrl: 'https://images.pexels.com/photos/7319274/pexels-photo-7319274.jpeg',
    highlightColor: '#F5E100'
  },
  {
    id: '4',
    name: 'Classic City Cruiser',
    category: 'City Bikes',
    price: '$899',
    description: 'Timeless style meets everyday practicality. Perfect for leisurely rides around town with vintage-inspired design.',
    features: [
      'Step-through frame for easy mounting',
      'Comfortable wide saddle',
      'Rear rack and basket compatible',
      '7-speed for versatile riding'
    ],
    imageUrl: 'https://images.pexels.com/photos/1571660/pexels-photo-1571660.jpeg',
    highlightColor: '#144D3A'
  },
  {
    id: '5',
    name: 'Performance Gravel Bike',
    category: 'Gravel Bikes',
    price: '$2,199',
    description: 'Adventure awaits on and off the pavement. This versatile gravel bike handles dirt roads, bike paths, and pavement with equal confidence.',
    features: [
      'Aluminum frame with carbon fork',
      'Wide tire clearance (up to 45mm)',
      'Multiple mounting points for gear',
      'Mechanical disc brakes'
    ],
    imageUrl: 'https://images.pexels.com/photos/8959279/pexels-photo-8959279.jpeg',
    highlightColor: '#F36E32'
  }
];
