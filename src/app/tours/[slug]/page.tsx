import { tours } from '@/data/tours';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import BookingButton from '@/components/BookingButton';

// Re-build all slugs at runtime if missing
export const dynamicParams = true;

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find(t => t.slug === slug);
  
  if (!tour) return notFound();

  return (
    <div className="bg-alabaster min-h-screen pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image 
          src={tour.featuredImage}
          alt={tour.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-obsidian/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-center mt-12 text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-md text-alabaster">{tour.title}</h1>
            <p className="text-xl md:text-2xl font-bold text-silver drop-shadow-sm">{tour.duration} | From ${tour.price.toFixed(2)} {tour.priceSuffix === 'total' ? '' : tour.priceSuffix}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-t-[8px] border border-t-graphite border-silver/20">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black text-obsidian mb-6">About This Tour</h2>
              <p className="text-lg text-obsidian/80 leading-relaxed mb-8">
                {tour.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-obsidian mb-4 border-b border-silver/30 pb-2">Highlights</h3>
                  <ul className="space-y-3">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-obsidian/80">
                        <span className="text-gray-400 font-bold mr-3 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {tour.itinerary && tour.itinerary.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-obsidian mb-4 border-b border-silver/30 pb-2">Itinerary</h3>
                    <div className="space-y-4">
                      {tour.itinerary.map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-4 h-4 rounded-full border-2 ${item.isStart || item.isEnd ? 'border-graphite bg-graphite' : 'border-silver bg-white'} z-10 mt-1`}></div>
                            {idx !== tour.itinerary!.length - 1 && (
                              <div className="w-0.5 h-full bg-silver/30 -mt-2 mb-1"></div>
                            )}
                          </div>
                          <div className="pb-4">
                            <h4 className="font-bold text-obsidian leading-tight">{item.title}</h4>
                            {item.duration && (
                              <p className="text-sm text-graphite font-medium mt-1">Stop: {item.duration}</p>
                            )}
                            {item.admissionIncluded && (
                              <span className="inline-block mt-1 bg-alabaster border border-silver text-obsidian text-xs px-2 py-1 rounded">Admission Included</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {tour.interiorImages && tour.interiorImages.length > 0 && (
                <div className="mt-8 mb-4">
                  <h3 className="text-xl font-bold text-obsidian mb-6 border-b border-silver/30 pb-2">Vehicle Comfort</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {tour.interiorImages.map((img, idx) => (
                      <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-gray-100 group">
                        <Image 
                          src={img} 
                          alt={`${tour.title} Interior ${idx + 1}`} 
                          fill 
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-alabaster rounded-xl p-8 border border-silver/30 self-start sticky top-24 shadow-sm">
              <div className="text-center mb-6">
                <span className="block text-obsidian/60 uppercase tracking-widest text-sm font-bold mb-1">Price {tour.priceSuffix === 'total' ? '' : ` ${tour.priceSuffix}`}</span>
                <span className="text-5xl font-black text-obsidian">
                  <span className="text-2xl text-obsidian/60 mr-1">From</span>
                  ${tour.price.toFixed(2)}
                </span>
              </div>
              <div className="text-center mb-8 pb-8 border-b border-silver/20">
                <span className="block text-obsidian/60 uppercase tracking-widest text-sm font-bold mb-1">Duration</span>
                <span className="text-2xl font-bold text-graphite">{tour.duration}</span>
              </div>
              
              <div className="text-sm text-obsidian/80 mb-6 bg-white p-4 rounded border border-silver/20">
                <p className="flex items-center gap-2 mb-2">
                  <span className="text-graphite">⚠</span> Not wheelchair accessible
                </p>
                <p className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400">✓</span> Stroller accessible
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Service animals allowed
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <BookingButton text="Book This Tour" href={tour.bookingUrl} />
                <Link href="/" className="text-center font-bold text-graphite hover:text-charcoal transition-colors mt-2">
                  ← Back to all tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
