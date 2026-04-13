import { FleetItem } from '../types';

export const fleet: FleetItem[] = [
  {
    id: 'trolley-1',
    type: 'trolley',
    name: 'The Misty Fjord Trolley',
    capacity: 24,
    features: ['Panoramic Windows', 'Heated Cabin', 'Vintage Wooden Seating', 'PA System'],
    imageUrl: '/trolley_tour.png' 
  },
  {
    id: 'trolley-2',
    type: 'trolley',
    name: 'The Totem Trolley',
    capacity: 24,
    features: ['Panoramic Windows', 'Heated Cabin', 'Classic Design', 'PA System'],
    imageUrl: '/trolley_tour.png'
  },
  {
    id: 'van-1',
    type: 'van',
    name: 'Explorer Van One',
    capacity: 14,
    features: ['High-Roof Design', 'Air Conditioning', 'Individual Captains Chairs', 'USB Charging Ports'],
    imageUrl: '/van_tour.png'
  },
  {
    id: 'van-2',
    type: 'van',
    name: 'Explorer Van Two',
    capacity: 14,
    features: ['High-Roof Design', 'Air Conditioning', 'Privacy Glass', 'Extra Legroom'],
    imageUrl: '/van_tour.png'
  }
];
