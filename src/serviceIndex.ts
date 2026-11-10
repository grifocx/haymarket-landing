import { parseServicePackages, type ServicePackage } from './serviceData';

const modules = import.meta.glob('/content/service-prices.json', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const entries = Object.entries(modules);
if (entries.length === 0) {
  throw new Error('content/service-prices.json not found');
}

export const servicePackages: ServicePackage[] = parseServicePackages(
  entries[0][1],
  'content/service-prices.json'
);
