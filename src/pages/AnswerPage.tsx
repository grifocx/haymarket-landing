import { Link, useParams, Navigate } from 'react-router-dom';
import { Phone, MapPin, ArrowLeft, ChevronRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { shopInfo, fullAddress } from '../shopInfo';
import { getAnswerBySlug, getRelatedAnswers, answers } from '../answers';
import { topicConfig } from '../answerTopics';
import { renderMarkdownBody } from '../utils/markdown';

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function TopicQuestionList({ current, topic }: { current: string; topic: string }) {
  const siblings = answers.filter((a) => a.topic === topic);
  const others = siblings.filter((a) => a.slug !== current);
  if (siblings.length === 0) return null;

  return (
    <nav aria-label="More in this topic">
      <p className="font-montserrat text-sm font-bold uppercase tracking-wide text-gray-500 mb-4">
        {topicConfig[topic as 'service-repair'].label}
      </p>
      <ul className="space-y-1">
        {siblings.map((a) =>
          a.slug === current ? (
            <li
              key={a.slug}
              aria-current="page"
              className="font-montserrat font-bold text-[#144D3A] bg-[#73BB44]/10 border-l-4 border-[#73BB44] rounded-r-lg px-4 py-2.5 text-sm"
            >
              {a.title}
            </li>
          ) : (
            <li key={a.slug}>
              <Link
                to={`/answers/${a.slug}`}
                className="group flex items-start justify-between gap-2 rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#144D3A] transition-colors"
              >
                <span>{a.title}</span>
                <ChevronRight
                  className="w-4 h-4 text-gray-300 group-hover:text-[#73BB44] transition-colors flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          )
        )}
      </ul>
      {others.length === 0 && null}
    </nav>
  );
}

export function AnswerPage() {
  const { slug } = useParams<{ slug: string }>();
  const answer = getAnswerBySlug(slug);

  if (!answer) {
    return <Navigate to="/answers" replace />;
  }

  const related = getRelatedAnswers(answer);
  const config = topicConfig[answer.topic];
  const CtaIcon = config.cta.icon;

  const ctaButton =
    config.cta.kind === 'call' ? (
      <a
        href={shopInfo.phoneHref}
        className="font-montserrat inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#F36E32] text-white px-8 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold text-lg shadow-lg min-h-[3rem]"
      >
        <CtaIcon className="w-5 h-5" aria-hidden="true" />
        {config.cta.label}
      </a>
    ) : (
      <Link
        to={config.cta.to ?? '/services'}
        className="font-montserrat inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#F36E32] text-white px-8 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold text-lg shadow-lg min-h-[3rem]"
      >
        <CtaIcon className="w-5 h-5" aria-hidden="true" />
        {config.cta.label}
      </Link>
    );

  return (
    <Layout>
      <article className="pt-28 pb-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
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
                {answer.title}
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-[1fr_18rem] gap-10 lg:gap-14">
            <div className="min-w-0">
              <p
                className="font-montserrat text-sm font-bold uppercase tracking-wide mb-3"
                style={{ color: config.color === '#F5E100' || config.color === '#CBD92A' ? '#144D3A' : config.color }}
              >
                {config.label}
              </p>
              <h1 className="font-montserrat text-4xl md:text-5xl font-extrabold text-[#144D3A] leading-tight mb-6">
                {answer.title}
              </h1>

              <div className="bg-[#73BB44]/10 border-l-4 border-[#73BB44] rounded-r-2xl p-6 mb-8">
                <p className="text-lg text-[#144D3A] leading-relaxed font-medium">
                  {answer.answerSummary}
                </p>
              </div>

              <div className="lg:hidden mb-8">
                {ctaButton}
              </div>

              <div>{renderMarkdownBody(answer.body)}</div>

              <p className="text-gray-500 text-sm mt-10 pt-6 border-t border-gray-200">
                Last updated: {formatDate(answer.updated)}
              </p>

              <div className="mt-6 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                <h2 className="font-montserrat text-xl font-bold text-[#144D3A] mb-4">
                  {shopInfo.name}
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F36E32] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{fullAddress}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#F36E32] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <a href={shopInfo.phoneHref} className="hover:text-[#73BB44] transition-colors">
                      {shopInfo.phoneDisplay}
                    </a>
                  </li>
                </ul>
                <div className="mt-6">{ctaButton}</div>
              </div>

              {related.length > 0 && (
                <section className="mt-12">
                  <h2 className="font-montserrat text-2xl font-bold text-[#144D3A] mb-6">
                    Related answers
                  </h2>
                  <ul className="space-y-4">
                    {related.map((rel) => (
                      <li key={rel.slug}>
                        <Link
                          to={`/answers/${rel.slug}`}
                          className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-[#73BB44] hover:shadow-md transition-all"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="font-montserrat font-bold text-[#144D3A] group-hover:text-[#73BB44] transition-colors">
                                {rel.title}
                              </p>
                              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                {rel.answerSummary}
                            </p>
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
              )}
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <TopicQuestionList current={answer.slug} topic={answer.topic} />
              </div>
            </aside>
          </div>

          <section className="lg:hidden mt-12 pt-10 border-t border-gray-200">
            <TopicQuestionList current={answer.slug} topic={answer.topic} />
          </section>

          <div className="mt-12">
            <Link
              to="/answers"
              className="font-montserrat inline-flex items-center gap-2 text-[#144D3A] hover:text-[#73BB44] transition-colors font-bold"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Back to all answers
            </Link>
          </div>
        </div>
      </article>

      <BackToTop />
    </Layout>
  );
}
