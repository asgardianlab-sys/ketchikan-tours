import { Tour } from '../types';

export const tours: Tour[] = [
  {
    slug: 'ketchikan-tongass-trolley-tour',
    title: '2.5 Hour Tour in Ketchikan on the Tongass Trolley',
    description: 'Experience the magic of Ketchikan from the comfort of our vintage-style trolley. We drive through historic downtown, Creek Street, and natural scenic viewpoints on this comprehensive 2.5 hour expedition.',
    duration: '2.5 hours',
    price: 85,
    featuredImage: '/trolley_tour.png',
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
    slug: 'wildlife-scenic-van-expedition',
    title: 'Wildlife & Scenic Van Expedition',
    description: 'Venture beyond the city limits in our comfortable vans. Discover black bears, bald eagles, and the lush Tongass National Forest.',
    duration: '3.5 hours',
    price: 89,
    featuredImage: '/van_tour.png',
    highlights: [
      'Tongass National Forest Exploration',
      'Herring Cove Wildlife Viewing',
      'Totem Bight State Historical Park',
      'Small group size (max 14)'
    ]
  }
];
