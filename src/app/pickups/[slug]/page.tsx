import { locations } from '@/data/locations';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const dynamicParams = false;

export function generateStaticParams() {
  return locations
    .filter((loc) => loc.isActive)
    .map((loc) => ({
      slug: loc.slug,
    }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find(l => l.slug === slug);
  
  // Extra safety net just in case, though dynamicParams = false should handle it
  if (!location || !location.isActive) return notFound();

  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <Link href="/" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors mb-8">
          <span>← Back Home</span>
        </Link>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded text-sm mb-4">
            Pickup Location
          </div>
          <h1 className="text-4xl font-black text-stone-900 mb-6">{location.name}</h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            {location.description}
          </p>
          
          <div className="bg-stone-50 p-6 rounded-xl mb-8 border border-stone-200">
            <h2 className="text-sm uppercase tracking-wider font-bold text-stone-500 mb-2">Address</h2>
            <p className="text-lg font-medium text-stone-900">
              {location.address || 'Address provided upon booking'}
            </p>
          </div>

          <div className="text-stone-500 text-sm">
            <p>Please arrive at your designated pickup location at least 15 minutes prior to your scheduled tour time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
