import fs from 'node:fs';
import path from 'node:path';
import { parseServicePackages, type ServicePackage } from '../src/serviceData';

const SERVICE_PRICES_FILE = 'content/service-prices.json';

export function loadServicePackages(root: string = process.cwd()): ServicePackage[] {
  const filePath = path.join(root, SERVICE_PRICES_FILE);
  let raw: string;
  try {
    raw = fs.readFileSync(filePath, 'utf-8');
  } catch {
    throw new Error(`${SERVICE_PRICES_FILE}: file not found`);
  }
  return parseServicePackages(raw, SERVICE_PRICES_FILE);
}
