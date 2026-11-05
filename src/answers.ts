import { parseAnswer, validateAnswerSet, type Answer } from './answersData';

const modules = import.meta.glob('/content/answers/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function fileNameOf(path: string): string {
  return path.split('/').pop() ?? path;
}

export const answers: Answer[] = Object.entries(modules)
  .map(([path, raw]) => parseAnswer(raw, fileNameOf(path)))
  .sort((a, b) => a.sourceFile.localeCompare(b.sourceFile));

validateAnswerSet(answers);

export function getAnswerBySlug(slug: string | undefined): Answer | undefined {
  return answers.find((a) => a.slug === slug);
}

export function getRelatedAnswers(answer: Answer): Answer[] {
  return answer.related
    .map((slug) => getAnswerBySlug(slug))
    .filter((a): a is Answer => Boolean(a));
}

export const featuredAnswers: Answer[] = answers.filter((a) => a.featured);
