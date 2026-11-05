export const TOPICS = ['service-repair', 'e-bikes', 'buying', 'bike-fit', 'riding-local'] as const;
export type Topic = (typeof TOPICS)[number];

export const TOPIC_LABELS: Record<Topic, string> = {
  'service-repair': 'Service and repair',
  'e-bikes': 'E-bikes',
  buying: 'Buying a bike',
  'bike-fit': 'Bike fit',
  'riding-local': 'Riding locally',
};

export interface Answer {
  title: string;
  slug: string;
  description: string;
  answerSummary: string;
  updated: string;
  related: string[];
  topic: Topic;
  featured: boolean;
  body: string;
  sourceFile: string;
}

const REQUIRED_FIELDS = ['title', 'slug', 'description', 'answer_summary', 'updated', 'related', 'topic'] as const;

export function parseFrontmatter(raw: string, file: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${file}: missing frontmatter block (must start with --- and end with ---)`);
  }
  const [, frontmatter, body] = match;
  const data: Record<string, string> = {};
  for (const line of frontmatter.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const idx = line.indexOf(':');
    if (idx === -1) {
      throw new Error(`${file}: frontmatter line "${line.trim()}" is not a key: value pair`);
    }
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body };
}

function parseRelated(raw: string, file: string): string[] {
  if (!raw.startsWith('[') || !raw.endsWith(']')) {
    throw new Error(`${file}: related must be a list like [slug-one, slug-two]`);
  }
  return raw
    .slice(1, -1)
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function parseUpdated(value: string, file: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(value))) {
    throw new Error(`${file}: updated must be a date in YYYY-MM-DD format (got "${value}")`);
  }
  return value;
}

function validate(data: Record<string, string>, file: string): void {
  const missing = REQUIRED_FIELDS.filter((f) => !data[f] || !data[f].trim());
  if (missing.length > 0) {
    throw new Error(`${file}: missing required frontmatter field(s): ${missing.join(', ')}`);
  }

  if (data.description.length > 155) {
    throw new Error(
      `${file}: description is ${data.description.length} characters (max 155): "${data.description}"`
    );
  }

  parseUpdated(data.updated, file);

  const topics = TOPICS as readonly string[];
  if (!topics.includes(data.topic)) {
    throw new Error(`${file}: topic "${data.topic}" is not one of: ${TOPICS.join(', ')}`);
  }

  if (data.featured !== undefined && data.featured !== 'true' && data.featured !== 'false') {
    throw new Error(`${file}: featured must be true or false (got "${data.featured}")`);
  }
}

export function parseAnswer(raw: string, file: string): Answer {
  const { data, body } = parseFrontmatter(raw, file);
  validate(data, file);

  return {
    title: data.title,
    slug: data.slug,
    description: data.description,
    answerSummary: data.answer_summary,
    updated: parseUpdated(data.updated, file),
    related: parseRelated(data.related, file),
    topic: data.topic as Topic,
    featured: data.featured === 'true',
    body: body.trim(),
    sourceFile: file,
  };
}

export function validateAnswerSet(answers: Answer[]): void {
  const slugs = new Set<string>();
  for (const answer of answers) {
    if (slugs.has(answer.slug)) {
      throw new Error(`${answer.sourceFile}: duplicate slug "${answer.slug}"`);
    }
    slugs.add(answer.slug);
  }
  for (const answer of answers) {
    for (const rel of answer.related) {
      if (!slugs.has(rel)) {
        throw new Error(`${answer.sourceFile}: related slug "${rel}" does not match any answer file`);
      }
    }
  }
}

export function getTopicLabel(topic: string): string {
  return TOPIC_LABELS[topic as Topic] ?? topic;
}
