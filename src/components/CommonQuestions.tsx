import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircleQuestion } from 'lucide-react';
import { answers } from '../answers';
import type { Answer } from '../answersData';

interface CommonQuestionsProps {
  /** Answer topics to pull questions from, in priority order. */
  topics: string[];
  /** Optional heading override. */
  heading?: string;
}

export function CommonQuestions({ topics, heading = 'Common questions' }: CommonQuestionsProps) {
  const items: Answer[] = [];
  for (const topic of topics) {
    if (topic === 'featured') {
      // curated picks: the answers marked featured: true in their frontmatter
      for (const a of answers) {
        if (a.featured && !items.some((i) => i.slug === a.slug)) {
          items.push(a);
        }
      }
      continue;
    }
    for (const a of answers) {
      if (a.topic === topic && !items.some((i) => i.slug === a.slug)) {
        items.push(a);
      }
    }
  }
  const shown = items.slice(0, 5);
  if (shown.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-gray-50" aria-label={heading}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#73BB44]/10 w-10 h-10 rounded-xl flex items-center justify-center">
              <MessageCircleQuestion className="w-5 h-5 text-[#73BB44]" aria-hidden="true" />
            </div>
            <p className="font-montserrat text-sm font-bold uppercase tracking-wide text-[#73BB44]">
              From the shop
            </p>
          </div>
          <h2 className="font-montserrat text-3xl font-bold text-[#144D3A] mb-2">{heading}</h2>
          <p className="text-gray-600">
            Straight answers to the questions we hear most about this.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((a) => (
            <li key={a.slug}>
              <Link
                to={`/answers/${a.slug}`}
                className="group h-full flex flex-col bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#73BB44] hover:shadow-lg transition-all"
              >
                <p className="font-montserrat text-lg font-bold text-[#144D3A] group-hover:text-[#73BB44] transition-colors mb-2">
                  {a.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{a.answerSummary}</p>
                <span className="font-montserrat text-sm font-bold text-[#73BB44] mt-4 inline-flex items-center gap-1">
                  Read the answer
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <Link
            to="/answers"
            className="font-montserrat inline-block bg-white border-2 border-[#144D3A] text-[#144D3A] px-8 py-3 rounded-full hover:bg-[#144D3A] hover:text-white transition-all font-bold"
          >
            Browse all answers
          </Link>
        </div>
      </div>
    </section>
  );
}
