import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export function SEO({
  title = 'Haymarket Bicycles | Premier Bike Shop in Haymarket, VA Since 2007',
  description = 'Haymarket Bicycles - Northern Virginia\'s trusted bike shop since 2007. Expert repairs, quality bikes, custom builds & fitting services in Haymarket, VA. Visit us today!',
  ogImage = 'https://www.haymarketbicycles.com/og-image.png',
  canonicalUrl = 'https://www.haymarketbicycles.com',
  noindex = false,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
