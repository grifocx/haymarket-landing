import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone, ChevronRight, MessageCircleQuestion, X } from 'lucide-react';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { shopInfo } from '../shopInfo';
import { answers } from '../answers';
import { TOPICS, type Topic } from '../answersData';
import { topicConfig } from '../answerTopics';

function QuestionCard({ slug, title, summary }: { slug: string; title: string; summary: string }) {
  return (
    <Link
      to={`/answers/${slug}`}
      className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-[#73BB44] hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-montserrat text-lg font-bold text-[#144D3A] group-hover:text-[#73BB44] transition-colors">
            {title}
          </p>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">{summary}</p>
        </div>
        <ChevronRight
          className="w-6 h-6 text-gray-300 group-hover:text-[#73BB44] transition-colors flex-shrink-0 mt-1"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

export function Answers() {
  const [query, setQuery] = useState('');
  const trimmed = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!trimmed) return null;
    return answers.filter(
      (a) =>
        a.title.toLowerCase().includes(trimmed) ||
        a.answerSummary.toLowerCase().includes(trimmed) ||
        topicConfig[a.topic].label.toLowerCase().includes(trimmed)
    );
  }, [trimmed]);

  const groups = TOPICS.map((topic: Topic) => ({
    topic,
    items: answers.filter((a) => a.topic === topic),
  })).filter((g) => g.items.length > 0);

  return (
    <Layout>
      <section className="pt-32 pb-10 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-[#73BB44]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircleQuestion className="w-9 h-9 text-[#73BB44]" aria-hidden="true" />
          </div>
          <h1 className="font-montserrat text-5xl md:text-6xl font-extrabold text-[#144D3A] mb-4">
            Answers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Straight answers to the questions we hear at the counter — organized by topic, written
            by the shop.
          </p>

          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions — try &ldquo;tune-up&rdquo; or &ldquo;e-bike&rdquo;"
                aria-label="Search answers"
                className="w-full bg-white border-2 border-gray-200 rounded-full pl-12 pr-12 py-4 text-lg text-[#144D3A] placeholder:text-gray-400 focus:outline-none focus:border-[#73BB44] shadow-sm transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#144D3A] transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {results ? (
            <div>
              <h2 className="font-montserrat text-2xl font-bold text-[#144D3A] mb-6">
                {results.length > 0
                  ? `${results.length} answer${results.length === 1 ? '' : 's'} matching &ldquo;${query.trim()}&rdquo;`
                  : 'No answers match your search'}
              </h2>
              {results.length > 0 ? (
                <ul className="space-y-4">
                  {results.map((a) => (
                    <li key={a.slug}>
                      <QuestionCard slug={a.slug} title={a.title} summary={a.answerSummary} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 bg-gray-50 rounded-xl p-6">
                  Try a different word, or call the shop — we're happy to help.
                </p>
              )}
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                {groups.map(({ topic, items }) => {
                  const config = topicConfig[topic];
                  const Icon = config.icon;
                  return (
                    <Link
                      key={topic}
                      to={`/answers/topic/${topic}`}
                      className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#73BB44] hover:shadow-lg transition-all"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: config.color }}
                      >
                        <Icon className="w-6 h-6" style={{ color: config.iconColor }} aria-hidden="true" />
                      </div>
                      <h3 className="font-montserrat text-lg font-bold text-[#144D3A] mb-1">
                        {config.label}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{config.tagline}</p>
                      <p className="font-montserrat text-sm font-bold text-[#73BB44]">
                        {items.length} question{items.length === 1 ? '' : 's'}
                      </p>
                    </Link>
                  );
                })}
              </div>

              <div className="space-y-12">
                {groups.map(({ topic, items }) => (
                  <section key={topic} aria-labelledby={`topic-${topic}`}>
                    <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-[#73BB44]">
                      <h2 id={`topic-${topic}`} className="font-montserrat text-2xl font-bold text-[#144D3A]">
                        {topicConfig[topic].label}
                      </h2>
                      <Link
                        to={`/answers/topic/${topic}`}
                        className="font-montserrat text-sm font-bold text-[#73BB44] hover:text-[#144D3A] transition-colors flex-shrink-0"
                      >
                        View topic
                      </Link>
                    </div>
                    <ul className="space-y-4">
                      {items.map((a) => (
                        <li key={a.slug}>
                          <QuestionCard slug={a.slug} title={a.title} summary={a.answerSummary} />
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </>
          )}

          <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
            <h2 className="font-montserrat text-xl font-bold text-[#144D3A] mb-3">
              Can't find your answer? Call or text us
            </h2>
            <a
              href={shopInfo.phoneHref}
              className="font-montserrat inline-flex items-center gap-2 mt-2 bg-[#F36E32] text-white px-8 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold shadow-lg min-h-[3rem]"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {shopInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <BackToTop />
    </Layout>
  );
}
