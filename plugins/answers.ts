import fs from 'node:fs';
import path from 'node:path';
import { parseAnswer, validateAnswerSet, type Answer } from '../src/answersData';

const ANSWERS_DIR = 'content/answers';

export function loadAnswers(root: string = process.cwd()): Answer[] {
  const dir = path.join(root, ANSWERS_DIR);
  if (!fs.existsSync(dir)) {
    throw new Error(`${ANSWERS_DIR}/ directory not found`);
  }

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort();

  const answers = files.map((fileName) => {
    const file = `${ANSWERS_DIR}/${fileName}`;
    const raw = fs.readFileSync(path.join(dir, fileName), 'utf-8');
    return parseAnswer(raw, file);
  });

  validateAnswerSet(answers);
  return answers;
}
