export interface Tour {
  slug: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  featuredImage: string;
  highlights: string[];
  itinerary?: TourItineraryItem[];
}

export interface TourItineraryItem {
  title: string;
  duration?: string;
  admissionIncluded?: boolean;
  isStart?: boolean;
  isEnd?: boolean;
}

export interface Location {
  slug: string;
  name: string;
  description: string;
  isActive: boolean;
  address?: string;
  mapEmbedUrl?: string;
}

export interface FleetItem {
  id: string;
  type: 'trolley' | 'van';
  name: string;
  capacity: number;
  features: string[];
  imageUrl: string;
}

export interface Faq {
  question: string;
  answer: string;
}
