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
    title: 'Level 2 Tune-Up',
    description: 'Comprehensive service including full drivetrain cleaning, brake bleeding, wheel truing, and complete bike inspection.',
    cost: '$159',
    highlightColor: '#F5E100'
  },
    {
    id: '3',
    title: 'Level 3 Tune-Up',
    description: 'Level 1+2 Plus Deep cleaning and lubrication of chain, cassette, and derailleurs for optimal shifting performance. Huge value!',
    cost: '$349',
    highlightColor: '#F5E100'
  },
    {
    id: '4',
    title: 'Drivetrain Cleaning and Ultrasonic Bath',
    description: 'Professional level deep clean of all drivetrain parts to restore operational efficiency.',
    cost: '$150',
    highlightColor: '#144D3A'
  },
  {
    id: '5',
    title: 'Flat Tire Repair',
    description: 'Quick tube replacement or patch, including tire inspection and proper inflation.',
    cost: '$15',
    highlightColor: '#144D3A'
  },
    {
    id: '6',
    title: 'Tubeless Tire Setup',
    description: 'Install front and wheel tubeless tires on bike, charge with sealant, and check pressure.',
    cost: '$50',
    highlightColor: '#144D3A'
  },
    {
    id: '7',
    title: 'Suspension Service',
    description: 'Fork and shock service including seal replacement, oil change, and adjustment for mountain bikes.',
    cost: '$150',
    highlightColor: '#144D3A'
  },
  {
    id: '8',
    title: 'Bike Assembly',
    description: 'Professional assembly of new bikes from the box, including safety checks and adjustments.',
    cost: '$184.99',
    highlightColor: '#73BB44'
  },
    {
    id: '9',
    title: 'E-bike Tire and/or Tube Repair',
    description: 'Inspect and replace a tire or tube on e-bike.',
    cost: '$35',
    highlightColor: '#73BB44'
  },
  {
    id: '10',
    title: 'E-bike Service Level 1',
    description: 'Basic adjust all systems and software. Inspect all systems and components.',
    cost: '$149',
    highlightColor: '#73BB44'
  },
  {
    id: '11',
    title: 'E-Bike Assembly',
    description: 'Professional assembly of new e-bikes from the box, including safety checks and adjustments.',
    cost: '$384.99',
    highlightColor: '#73BB44'
  },
  {
    id: '12',
    title: 'Custom Bike Fitting',
    description: 'Professional fitting session to optimize comfort, efficiency, and injury prevention using motion capture technology',
    cost: '$250',
    highlightColor: '#F36E32'
  }
];
