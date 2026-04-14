import { Tour } from '../types';

export const tours: Tour[] = [
  {
    slug: 'ketchikan-tongass-trolley-tour',
    title: 'The Tongass Trolley Tour',
    description: 'Experience the magic of Ketchikan from the comfort of our vintage-style trolley. We drive through historic downtown, Creek Street, and natural scenic viewpoints on this comprehensive 2.5 hour expedition.',
    duration: '2.5 Hours',
    price: 85,
    priceSuffix: 'per adult',
    featuredImage: '/trolley_tour.png',
    bookingUrl: 'https://fareharbor.com/embeds/book/ketchikanexpeditions/items/209462/calendar/2026/04/?flow=343206',
    highlights: [
      'Historic Downtown Ketchikan',
      'Creek Street & The Salmon Ladder',
      'Herring Cove Wildlife Viewing',
      'Totem Heritage Center'
    ],
    itinerary: [
      { title: 'Ketchikan Visitors Bureau', isStart: true },
      { title: 'Herring Cove', duration: '30 minutes', admissionIncluded: true },
      { title: 'Creek Street', duration: '5 minutes' },
      { title: 'Salmon Ladder', duration: '15 minutes' },
      { title: 'Ketchikan', duration: '15 minutes' },
      { title: 'City Park of Ketchikan', duration: '10 minutes' },
      { title: 'Totem Heritage Center', duration: '30 minutes', admissionIncluded: true, isEnd: true }
    ]
  },
  {
    slug: 'your-tour-your-way',
    title: 'Your Tour, Your Way',
    description: 'Customize your own private Ketchikan expedition. Our 4-9 passenger van acts as a blank canvas allowing you to choose exactly where you want to go and what you want to see for an unforgettable local experience.',
    duration: '2-4 Hours',
    price: 400,
    priceSuffix: 'total',
    featuredImage: '/van_tour.png',
    bookingUrl: 'https://fareharbor.com/embeds/book/ketchikanexpeditions/items/209502/calendar',
    highlights: [
      'Fully customizable itinerary',
      'Dedicated private local guide',
      'Private 4-9 passenger van',
      'Perfect for families and small groups'
    ]
  }
];
