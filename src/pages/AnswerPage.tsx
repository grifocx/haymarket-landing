import { Link, useParams, Navigate } from 'react-router-dom';
import { Phone, MapPin, Wrench, ArrowLeft } from 'lucide-react';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { shopInfo, fullAddress } from '../shopInfo';
import { getAnswerBySlug, getRelatedAnswers } from '../answers';
import { getTopicLabel } from '../answersData';
import { renderMarkdownBody } from '../utils/markdown';

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function AnswerPage() {
  const { slug } = useParams<{ slug: string }>();
  const answer = getAnswerBySlug(slug);

  if (!answer) {
    return <Navigate to="/answers" replace />;
  }

  const related = getRelatedAnswers(answer);

  return (
    <Layout>
      <article className="pt-32 pb-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
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

          <p className="font-montserrat text-sm font-bold uppercase tracking-wide text-[#73BB44] mb-3">
            {getTopicLabel(answer.topic)}
          </p>
          <h1 className="font-montserrat text-4xl md:text-5xl font-extrabold text-[#144D3A] leading-tight mb-8">
            {answer.title}
          </h1>

          <p className="text-xl text-gray-800 leading-relaxed mb-10 font-medium">
            {answer.answerSummary}
          </p>

          <div>{renderMarkdownBody(answer.body)}</div>

          <p className="text-gray-500 text-sm mt-10 pt-6 border-t border-gray-200">
            Last updated: {formatDate(answer.updated)}
          </p>

          <div className="mt-8 bg-gray-50 rounded-2xl p-8 border border-gray-200">
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
            <Link
              to="/services"
              className="font-montserrat mt-6 inline-flex items-center gap-2 bg-[#F36E32] text-white px-8 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold shadow-lg min-h-[3rem]"
            >
              <Wrench className="w-5 h-5" aria-hidden="true" />
              Book service
            </Link>
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
                      className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-[#73BB44] hover:shadow-md transition-all"
                    >
                      <p className="font-montserrat font-bold text-[#144D3A]">{rel.title}</p>
                      <p className="text-gray-600 text-sm mt-1">{rel.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

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
