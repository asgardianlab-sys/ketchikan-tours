import { Location } from '../types';

export const locations: Location[] = [
  {
    slug: 'downtown-ketchikan',
    name: 'Downtown Ketchikan (Berths 1-3)',
    description: 'Our primary meeting spot right outside the Ketchikan Visitors Bureau. Perfect for most cruise ship passengers docking at downtown berths.',
    isActive: true,
    address: '131 Front St, Ketchikan, AK 99901'
  },
  {
    slug: 'ward-cove',
    name: 'The Mill at Ward Cove',
    description: 'A newly developed docking facility for larger Norwegian Cruise Line (NCL) ships. We offer dedicated pickups here.',
    isActive: false,  // This feature flag will keep the route hidden!
    address: '7100 N Tongass Hwy, Ketchikan, AK 99901'
  }
];
