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
    <div className="bg-alabaster min-h-screen py-20 mt-[-80px] pt-[140px]">
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <Link href="/" className="inline-flex items-center text-graphite font-bold hover:text-obsidian transition-colors mb-8">
          <span>← Back Home</span>
        </Link>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
          <div className="inline-block bg-obsidian text-white font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6">
            Pickup Location
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-obsidian mb-6">{location.name}</h1>
          <p className="text-xl text-obsidian/80 mb-8 leading-relaxed">
            {location.description}
          </p>
          
          <div className="bg-alabaster p-6 rounded-xl mb-8 border border-silver/30">
            <h2 className="text-sm uppercase tracking-wider font-bold text-gray-500 mb-2">Address</h2>
            <div className="space-y-4">
              <p className="text-lg font-medium text-obsidian">
                {location.address || 'Address provided upon booking'}
              </p>
              {location.googleMapsUrl && (
                 <div>
                   <a 
                     href={location.googleMapsUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-block bg-transparent border-2 border-obsidian text-obsidian hover:bg-obsidian hover:text-white font-bold py-2 px-6 rounded transition-colors text-sm shadow-sm"
                   >
                     Get Directions (Google Maps)
                   </a>
                 </div>
              )}
            </div>
          </div>

          <div className="text-obsidian/60 text-sm border-t border-silver/30 pt-6">
            <p>Please arrive at your designated pickup location at least 15 minutes prior to your scheduled tour time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
