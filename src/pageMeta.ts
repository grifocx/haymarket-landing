export const BASE_URL = 'https://www.haymarketbicycles.com';

export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
}

export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Haymarket Bicycles | Premier Bike Shop in Haymarket, VA Since 2007',
    description:
      "Haymarket Bicycles - Northern Virginia's trusted bike shop since 2007. Expert repairs, quality bikes, custom builds & fitting services in Haymarket, VA. Visit us today!",
    canonicalPath: '/',
  },
  '/catalog': {
    title: 'Featured Bikes Catalog | Haymarket Bicycles | Quality Bikes in Haymarket, VA',
    description:
      'Browse our curated selection of premium bicycles at Haymarket Bicycles. Featuring road bikes, mountain bikes, electric bikes, and more. Expert guidance to help you find the perfect bike for your riding style in Northern Virginia.',
    canonicalPath: '/catalog',
  },
  '/services': {
    title: 'Bike Repair & Service | Haymarket Bicycles | Expert Bicycle Maintenance in VA',
    description:
      'Professional bicycle repair and maintenance services in Haymarket, VA. From tune-ups to complete overhauls, wheel building, custom builds, and professional fitting. Certified mechanics serving Northern Virginia since 2007.',
    canonicalPath: '/services',
  },
  '/about': {
    title: 'About Us | Haymarket Bicycles | Locally Owned Bike Shop Since 2007',
    description:
      "Learn about Haymarket Bicycles — an independent, locally owned bike shop in Haymarket, VA since 2007. Carrying Trek, Aventon, and Time. Serving Haymarket, Gainesville, and Northern Virginia.",
    canonicalPath: '/about',
  },
  '/answers': {
    title: 'Bike Answers & FAQs | Haymarket Bicycles',
    description:
      'Straight answers from Haymarket Bicycles about bike service and repair, e-bikes, buying a bike, bike fit, and riding locally in Haymarket, VA.',
    canonicalPath: '/answers',
  },
};

export function getPageMeta(route: string): PageMeta {
  const key = route.startsWith('/') ? route : `/${route}`;
  if (pageMeta[key]) return pageMeta[key];
  return pageMeta['/'];
}
