import { Tour } from '../types';

export const tours: Tour[] = [
  {
    slug: 'ketchikan-tongass-trolley-tour',
    title: 'The Tongass Trolley',
    description: 'Experience the magic of Ketchikan from the comfort of our vintage-style trolleys, "MS. BETTY" and "MS. OLETA". MS. OLETA features an open-air option on nice days, and all wooden seats have cushions for extra comfort. Entry fees are included.',
    duration: '2.5 Hours',
    price: 85,
    priceSuffix: 'per adult',
    featuredImage: '/trolley_tour.png',
    interiorImages: ['/Betty inside.png', '/inside-Oleta'],
    bookingUrl: 'https://fareharbor.com/embeds/book/ketchikanexpeditions/items/209462/calendar/2026/04/?flow=343206',
    highlights: [
      'City Highlights & City Park',
      'Tongass Heritage Center',
      'Herring Cove for Wildlife',
      'Rainbow Falls – waterfall photo ops',
      'Historic Creek Street – drop off for shopping'
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
    slug: 'tongass-city-van-tour',
    title: 'The Tongass City Van Tour',
    description: 'Experience our comprehensive scenic city tour from the enhanced comfort of our modern exploration vans. Enjoy an intimate small-group experience (maximum 14 seats) while following the exact same spectacular route as our classic Trolley Tour.',
    duration: '2.5 Hours',
    price: 125,
    priceSuffix: 'per adult',
    featuredImage: '/van_tour.png',
    interiorImages: ['/Interiorvan.png', '/altviewvan.png'],
    bookingUrl: 'https://fareharbor.com/embeds/book/ketchikanexpeditions/items/?flow=343206',
    highlights: [
      'City Highlights & City Park',
      'Tongass Heritage Center',
      'Herring Cove for Wildlife',
      'Rainbow Falls – waterfall photo ops',
      'Historic Creek Street – drop off for shopping'
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
    title: 'Custom Charter - Your Tour. Your Way.',
    description: 'Design your perfect Ketchikan adventure—your tour, your way. With a fully private tour for your group, there’s no waiting on strangers, no rigid schedules, and no wasted time in port. Just a seamless, personalized experience built entirely around what you want to see and do. Whether you’re interested in sightseeing, wildlife viewing, beachcombing, exploring Native culture, or strolling through the historic red-light district, the choice is yours. We’re here to make it happen. Our team will work with you to create a one-of-a-kind excursion that’s as memorable as it is meaningful. Your adventure begins at the Ketchikan Visitor’s Center (Berth 2), where you’ll meet your friendly local guide. From there, you’ll collaborate on an itinerary tailored to your interests and the day’s conditions—because the best plans are flexible. Once everything is set, it’s time to head out and experience Ketchikan like a local. This small town is rich in Native heritage, abundant wildlife, authentic totem poles, and colorful history. With scenic trails, incredible sightseeing, whale watching, and world-famous salmon (after all, we are the Salmon Capital of the World), there’s something here for everyone in your group. Ketchikan is truly something special—and it’s even better when experienced together, in comfort, and on your own terms. We look forward to sharing our home with you.',
    duration: '4 Hour Minimum',
    price: 1000,
    priceSuffix: 'per hour',
    featuredImage: '/van_tour.png',
    interiorImages: ['/Interiorvan.png', '/altviewvan.png'],
    bookingUrl: 'https://fareharbor.com/embeds/book/ketchikanexpeditions/items/209502/calendar',
    highlights: [
      'Fully private customized charter',
      'Seats up to 14 in your group',
      'Flexible itinerary based on your interests',
      'Sightseeing, wildlife, and Native culture',
      'Meet your local guide at Ketchikan Visitor’s Center (Berth 2)'
    ]
  }
];
