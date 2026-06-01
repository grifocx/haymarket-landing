export interface Review {
  id: string;
  name: string;
  date: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Darren Bernard',
    date: 'April 27, 2026',
    text: 'Best local bike shop, hands-down. Excellent customer service, knowledgeable service staff. Excellent selection of high-quality bicycles and accessories.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Durham',
    date: 'April 25, 2026',
    text: "Great selection, fantastic service, and knowledgeable staff. I've bought three bikes from these folks, and I recommend anyone shopping for a bicycle at any age or skill level to make Haymarket Bicycles your first stop.",
    rating: 5,
  },
  {
    id: '3',
    name: 'John Morris',
    date: 'May 21, 2026',
    text: 'Friendly, knowledgeable, professional staff. Low key atmosphere with a high intensity focus on quality service.',
    rating: 5,
  },
  {
    id: '4',
    name: 'J.H.',
    date: 'May 10, 2026',
    text: 'Knowledgeable staff helped me decide on a bike for my wife. Guided me through questions to narrow down the best options and were friendly during the process. Will return for all future bike needs.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Demarcus Wright',
    date: 'May 8, 2026',
    text: 'Great service from Jared and Forrest. Diagnosed my bike efficiently and got it back to me quickly.',
    rating: 5,
  },
  {
    id: '6',
    name: 'J.M.',
    date: 'May 17, 2026',
    text: 'Anytime we come into the shop, the staff is eager to help and unbelievably kind. Their prices are great and attention to detail to ensure the bikes are taken care of is great. I will only have bikes repaired here.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Loisa Mcclanahan',
    date: 'May 28, 2026',
    text: 'Very friendly and knowledgeable staff. Sensible prices!',
    rating: 5,
  },
  {
    id: '8',
    name: 'J.E.',
    date: 'May 18, 2026',
    text: "Very friendly and knowledgeable. Have bought my wife and kids bikes here and will always be back!",
    rating: 5,
  },
  {
    id: '9',
    name: 'D.T.',
    date: 'May 3, 2026',
    text: "The price was great to put together my son's birthday present bike. Was told close to 2 weeks and was ready way before then! Will definitely be back for anything bike related.",
    rating: 5,
  },
];

export const totalReviewCount = 1097;
