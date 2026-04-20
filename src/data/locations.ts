import { Location } from '../types';

export const locations: Location[] = [
  {
    slug: 'downtown-ketchikan',
    name: 'Ketchikan Berth 2 (Main Pickup)',
    description: 'Our primary meeting spot. We are located at Berth 2 right outside the Ketchikan Visitors Bureau. You will find us stationed directly next to "The Rock" statue and the famous Ketchikan sign.',
    isActive: true,
    address: 'Ketchikan Visitors Bureau (Berth 2), Ketchikan, AK 99901',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=55.34116198206242,-131.6471031983671'
  },
  {
    slug: 'ward-cove',
    name: 'The Mill at Ward Cove',
    description: 'A newly developed docking facility for larger Norwegian Cruise Line (NCL) ships. We offer dedicated pickups here exclusively for the VIP Van tours.',
    isActive: true,
    address: '7100 N Tongass Hwy, Ketchikan, AK 99901',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=55.407941,-131.732441'
  }
];
