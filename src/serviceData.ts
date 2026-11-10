const REQUIRED_FIELDS = ['id', 'name', 'price', 'included'] as const;

export interface ServicePackage {
  id: number;
  name: string;
  price: number;
  /** e.g. "from", "plus parts"; empty string = exact price */
  price_note: string;
  included: string;
  /** optional; empty string = use page-level turnaround statement */
  turnaround: string;
}

export function parseServicePackages(raw: string, file: string): ServicePackage[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(`${file}: not valid JSON — ${(err as Error).message}`);
  }
  if (!Array.isArray(parsed)) {
    throw new Error(`${file}: top level must be an array of service packages`);
  }
  if (parsed.length === 0) {
    throw new Error(`${file}: array is empty`);
  }

  const seenIds = new Set<number>();
  const seenNames = new Set<string>();
  return parsed.map((entry, i) => {
    const label = `${file}[${i}]`;
    if (typeof entry !== 'object' || entry === null) {
      throw new Error(`${label}: must be an object`);
    }
    const obj = entry as Record<string, unknown>;

    for (const field of REQUIRED_FIELDS) {
      if (!(field in obj) || obj[field] === undefined || obj[field] === null) {
        throw new Error(`${label}: missing required field "${field}"`);
      }
    }
    const id = obj.id;
    if (typeof id !== 'number' || Number.isNaN(id)) {
      throw new Error(`${label}: "id" must be a number`);
    }
    if (seenIds.has(id)) {
      throw new Error(`${label}: duplicate id ${id}`);
    }
    seenIds.add(id);

    const name = obj.name;
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error(`${label}: "name" must be a non-empty string`);
    }
    if (seenNames.has(name)) {
      throw new Error(`${label}: duplicate name "${name}"`);
    }
    seenNames.add(name);

    const price = obj.price;
    if (typeof price !== 'number' || Number.isNaN(price) || price <= 0) {
      throw new Error(`${label}: "price" must be a number > 0`);
    }

    const price_note = obj.price_note === undefined ? '' : obj.price_note;
    if (typeof price_note !== 'string') {
      throw new Error(`${label}: "price_note" must be a string if present`);
    }

    const included = obj.included;
    if (typeof included !== 'string' || included.trim() === '') {
      throw new Error(`${label}: "included" must be a non-empty string`);
    }

    const turnaround = obj.turnaround === undefined ? '' : obj.turnaround;
    if (typeof turnaround !== 'string') {
      throw new Error(`${label}: "turnaround" must be a string if present`);
    }

    return { id, name, price, price_note, included, turnaround };
  });
}
