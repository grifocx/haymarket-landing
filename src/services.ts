import { servicePackages } from './serviceIndex';
import type { ServicePackage } from './serviceData';

export interface Service {
  id: string;
  title: string;
  description: string;
  cost: string;
  highlightColor: string;
}

const CARD_COLORS = ['#73BB44', '#F5E100', '#144D3A', '#F36E32', '#CBD92A'];

export const bikeServices: Service[] = servicePackages.map((pkg: ServicePackage, i) => ({
  id: String(pkg.id),
  title: pkg.name,
  description: pkg.included,
  cost: pkg.price_note ? `$${pkg.price} ${pkg.price_note}` : `$${pkg.price}`,
  highlightColor: CARD_COLORS[i % CARD_COLORS.length],
}));
