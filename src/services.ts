export interface Service {
  id: string;
  title: string;
  description: string;
  cost: string;
  highlightColor: string;
}

export const bikeServices: Service[] = [
  {
    id: '1',
    title: 'Level 1 Tune-Up',
    description: 'Complete safety check, gear adjustment, brake adjustment, tire inspection, and basic cleaning.',
    cost: '$99',
    highlightColor: '#F36E32'
  },
  {
    id: '2',
    title: 'Bike Assembly',
    description: 'Professional assembly of new bikes from the box, including safety checks and adjustments.',
    cost: '$89.99',
    highlightColor: '#73BB44'
  },
  {
    id: '3',
    title: 'Level 2 Tune-Up',
    description: 'Comprehensive service including full drivetrain cleaning, brake bleeding, wheel truing, and complete bike inspection.',
    cost: '$149',
    highlightColor: '#F5E100'
  },
  {
    id: '4',
    title: 'Flat Tire Repair',
    description: 'Quick tube replacement or patch, including tire inspection and proper inflation.',
    cost: '$25',
    highlightColor: '#144D3A'
  },
  {
    id: '5',
    title: 'Brake Service',
    description: 'Complete brake adjustment, pad replacement, and cable or hydraulic system service.',
    cost: '$45',
    highlightColor: '#F36E32'
  },
  {
    id: '6',
    title: 'E-bike Service Level 1',
    description: 'Adjust all systems and software.',
    cost: '$129',
    highlightColor: '#73BB44'
  },
  {
    id: '7',
    title: 'Level 3 Tune-Up',
    description: 'Level 1+2 Plus Deep cleaning and lubrication of chain, cassette, and derailleurs for optimal shifting performance.',
    cost: '$325',
    highlightColor: '#F5E100'
  },
  {
    id: '8',
    title: 'Suspension Service',
    description: 'Fork and shock service including seal replacement, oil change, and adjustment for mountain bikes.',
    cost: '$125',
    highlightColor: '#144D3A'
  },
  {
    id: '9',
    title: 'Custom Bike Fitting',
    description: 'Professional fitting session to optimize comfort, efficiency, and injury prevention using motion capture technology',
    cost: '$250',
    highlightColor: '#F36E32'
  }
];
