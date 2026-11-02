export const shopInfo = {
  name: 'Haymarket Bicycles',
  streetAddress: '4414 Costello Way',
  city: 'Haymarket',
  state: 'VA',
  zip: '20169',
  phoneDisplay: '(703) 754-1911',
  phoneHref: 'tel:7037541911',
  phoneE164: '+17037541911',
  email: 'info@haymarketbicycles.com',
  founded: '2007',
  hoursPlain: 'Tue-Sat: 11AM-6PM | Sun: 12PM-5PM',
  hoursMonday: 'Mon: Closed',
  social: {
    facebook: 'https://www.facebook.com/HaymarketBicycles/',
    instagram: 'https://www.instagram.com/haymarketbikes',
    tiktok: 'https://www.tiktok.com/@haymarketbicycles',
  },
} as const;

export const fullAddress = `${shopInfo.streetAddress}, ${shopInfo.city}, ${shopInfo.state} ${shopInfo.zip}`;
