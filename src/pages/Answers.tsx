import { Link } from 'react-router-dom';
import { MessageCircleQuestion, ChevronRight, Phone } from 'lucide-react';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { shopInfo } from '../shopInfo';
import { answers } from '../answers';
import { TOPICS, TOPIC_LABELS } from '../answersData';

export function Answers() {
  const byTopic = TOPICS.map((topic) => ({
    topic,
    label: TOPIC_LABELS[topic],
    items: answers.filter((a) => a.topic === topic),
  })).filter((group) => group.items.length > 0);

  return (
    <Layout>
      <section className="pt-32 pb-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-[#73BB44]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircleQuestion className="w-9 h-9 text-[#73BB44]" aria-hidden="true" />
          </div>
          <h1 className="font-montserrat text-5xl md:text-6xl font-extrabold text-[#144D3A] mb-6">
            Answers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Straight answers to the questions we hear at the counter — organized by topic, written
            by the shop.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {byTopic.length === 0 ? (
            <p className="text-gray-600 text-center py-16">
              Answers are coming soon — check back shortly.
            </p>
          ) : (
            <div className="space-y-12">
              {byTopic.map(({ topic, label, items }) => (
                <section key={topic} aria-labelledby={`topic-${topic}`}>
                  <h2
                    id={`topic-${topic}`}
                    className="font-montserrat text-2xl font-bold text-[#144D3A] mb-6 pb-2 border-b-2 border-[#73BB44]"
                  >
                    {label}
                  </h2>
                  <ul className="space-y-4">
                    {items.map((answer) => (
                      <li key={answer.slug}>
                        <Link
                          to={`/answers/${answer.slug}`}
                          className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-[#73BB44] hover:shadow-md transition-all"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="font-montserrat text-lg font-bold text-[#144D3A] group-hover:text-[#73BB44] transition-colors">
                                {answer.title}
                              </p>
                              <p className="text-gray-600 mt-1">{answer.description}</p>
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
                </section>
              ))}
            </div>
          )}

          <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
            <h2 className="font-montserrat text-xl font-bold text-[#144D3A] mb-3">
              Don't see your question?
            </h2>
            <p className="text-gray-600 mb-6">
              Call the shop at{' '}
              <a
                href={shopInfo.phoneHref}
                className="text-[#144D3A] font-bold hover:text-[#73BB44] transition-colors"
              >
                {shopInfo.phoneDisplay}
              </a>{' '}
              — we're happy to help.
            </p>
            <Phone className="w-8 h-8 text-[#F36E32] mx-auto" aria-hidden="true" />
          </div>
        </div>
      </section>

      <BackToTop />
    </Layout>
  );
}
