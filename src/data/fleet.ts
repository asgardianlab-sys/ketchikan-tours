import { FleetItem } from '../types';

export const fleet: FleetItem[] = [
  {
    id: 'trolley-1',
    type: 'trolley',
    name: 'MS. BETTY',
    capacity: 24,
    features: ['Panoramic Windows', 'Heated Cabin', 'Cushioned Wooden Seats', 'PA System'],
    imageUrl: '/trolley_tour.png' 
  },
  {
    id: 'trolley-2',
    type: 'trolley',
    name: 'MS. OLETA',
    capacity: 24,
    features: ['Open-Air Option on Nice Days', 'Heated Cabin', 'Cushioned Wooden Seats', 'PA System'],
    imageUrl: '/Oleta.png'
  },
  {
    id: 'van-1',
    type: 'van',
    name: 'VIP Van',
    capacity: 9,
    features: ['High-Roof Design', 'Air Conditioning', 'Individual Captains Chairs', 'USB Charging Ports'],
    imageUrl: '/van_tour.png'
  },
  {
    id: 'van-2',
    type: 'van',
    name: 'The Beast',
    capacity: 14,
    features: ['High-Roof Design', 'Air Conditioning', 'Privacy Glass', 'Extra Legroom'],
    imageUrl: '/van_tour.png'
  }
];
