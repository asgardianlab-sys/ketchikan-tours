import { FleetItem } from '../types';

export const fleet: FleetItem[] = [
  {
    id: 'trolley-1',
    type: 'trolley',
    name: 'The Misty Fjord Trolley',
    capacity: 24,
    features: ['Panoramic Windows', 'Heated Cabin', 'Vintage Wooden Seating', 'PA System'],
    imageUrl: 'https://images.unsplash.com/photo-1520638515091-fe6d9ca43c08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Using substitute image
  },
  {
    id: 'trolley-2',
    type: 'trolley',
    name: 'The Totem Trolley',
    capacity: 24,
    features: ['Panoramic Windows', 'Heated Cabin', 'Classic Design', 'PA System'],
    imageUrl: 'https://images.unsplash.com/photo-1466099516641-fcaca46f04c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'van-1',
    type: 'van',
    name: 'Explorer Van One',
    capacity: 14,
    features: ['High-Roof Design', 'Air Conditioning', 'Individual Captains Chairs', 'USB Charging Ports'],
    imageUrl: 'https://images.unsplash.com/photo-1616870535354-9ed3c17ffcd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'van-2',
    type: 'van',
    name: 'Explorer Van Two',
    capacity: 14,
    features: ['High-Roof Design', 'Air Conditioning', 'Privacy Glass', 'Extra Legroom'],
    imageUrl: 'https://images.unsplash.com/photo-1594982604212-9c3f39385b08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
