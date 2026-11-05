import { Link, useParams, Navigate } from 'react-router-dom';
import { Phone, ChevronRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { shopInfo } from '../shopInfo';
import { answers } from '../answers';
import { TOPICS, type Topic } from '../answersData';
import { topicConfig } from '../answerTopics';

export function AnswerTopicPage() {
  const { topic } = useParams<{ topic: string }>();
  if (!(TOPICS as readonly string[]).includes(topic ?? '')) {
    return <Navigate to="/answers" replace />;
  }

  const t = topic as Topic;
  const config = topicConfig[t];
  const items = answers.filter((a) => a.topic === t);
  const Icon = config.icon;

  return (
    <Layout>
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-gray-500">
              <li>
                <Link to="/" className="hover:text-[#73BB44] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/answers" className="hover:text-[#73BB44] transition-colors">
                  Answers
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#144D3A] font-medium">
                {config.label}
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: config.color }}
            >
              <Icon className="w-7 h-7" style={{ color: config.iconColor }} aria-hidden="true" />
            </div>
            <div>
              <h1 className="font-montserrat text-4xl md:text-5xl font-extrabold text-[#144D3A]">
                {config.label}
              </h1>
              <p className="font-montserrat text-sm font-bold text-[#73BB44] mt-1">
                {items.length} question{items.length === 1 ? '' : 's'}
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-10">{config.tagline}</p>

          {items.length === 0 ? (
            <p className="text-gray-600 bg-gray-50 rounded-xl p-6">
              No questions in this topic yet — check back soon.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/answers/${a.slug}`}
                    className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-[#73BB44] hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-montserrat text-lg font-bold text-[#144D3A] group-hover:text-[#73BB44] transition-colors">
                          {a.title}
                        </p>
                        <p className="text-gray-600 mt-1 leading-relaxed">{a.answerSummary}</p>
                      </div>
                      <ChevronRight
                        className="w-6 h-6 text-gray-300 group-hover:text-[#73BB44] transition-colors flex-shrink-0 mt-1"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
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
