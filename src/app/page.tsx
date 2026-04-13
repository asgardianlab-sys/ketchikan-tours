import Image from 'next/image';
import Link from 'next/link';
import { tours } from '../data/tours';
import { fleet } from '../data/fleet';
import { faqs } from '../data/faq';
import BookingButton from '../components/BookingButton';
import ImageCarousel from '../components/ImageCarousel';

export default function Home() {
  const fleetImages = fleet.map(f => f.imageUrl);

  return (
    <div className="bg-glacier">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-raven overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image 
            src="/hero_landscape.png" 
            alt="Ketchikan Alaska Landscape" 
            fill 
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
            Discover the Real <span className="text-copper">Ketchikan</span>
          </h1>
          <p className="text-xl md:text-2xl text-glacier mb-10 drop-shadow-md font-medium max-w-2xl mx-auto">
            Small group tours showcasing the spectacular nature, deep history, and vibrant culture of Alaska's First City.
          </p>
          <div className="flex gap-4 justify-center">
            <BookingButton text="Book Your Adventure" />
            <Link href="#tours" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-golden/50 font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Explore Tours
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-raven mb-6">About Ketchikan <span className="text-copper">Expeditions</span></h2>
          <p className="text-xl text-raven/80 leading-relaxed font-medium">
            We are a small, locally owned business that provides first class, private excursions in Southeast Alaska that are customized based on your own interests. It is our desire to enrich your vacation experience by offering a unique, and memorable adventure designed just for you. You will love where we take you!
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-glacier border-y border-golden/20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-white border border-golden text-copper rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-raven">Small Groups</h3>
            <p className="text-raven/70">Escape the cruise ship crowds. Our maximum capacity is 24 on trolleys and 14 in vans.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-white border border-golden text-copper rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-raven">Local Guides</h3>
            <p className="text-raven/70">Passionate, knowledgeable Alaskan residents leading every tour with authentic stories.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-white border border-golden text-copper rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-raven">Guaranteed Return</h3>
            <p className="text-raven/70">We align meticulously with your ship's schedule to ensure you are back in plenty of time.</p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-raven mb-4">Our Premium Tours</h2>
            <p className="text-lg text-raven/70 max-w-2xl mx-auto">Select the perfect Ketchikan experience. From historical city trolley rides to deep forest van expeditions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tours.map(tour => (
              <div key={tour.slug} className="bg-glacier rounded-2xl shadow-lg border border-golden/20 overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full border hover:border-copper/50">
                <div className="relative h-72">
                  <Image src={tour.featuredImage} alt={tour.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute top-4 right-4 bg-raven/90 backdrop-blur text-golden font-bold px-4 py-2 rounded-lg shadow-sm border border-golden/30">
                    <span className="text-sm font-normal text-glacier pr-1">From</span>${tour.price.toFixed(2)} <span className="text-sm font-normal text-glacier">/ adult</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-4 mb-4 text-sm font-bold text-copper uppercase tracking-wider">
                    <span>⏱ {tour.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-raven mb-3">{tour.title}</h3>
                  <p className="text-raven/80 mb-6 flex-grow">{tour.description}</p>
                  
                  <div className="flex gap-4 mt-auto">
                    <Link href={`/tours/${tour.slug}`} className="flex-1 bg-white hover:bg-glacier border border-golden text-raven font-bold py-3 px-6 rounded-lg text-center transition-colors">
                      View Details
                    </Link>
                    <div className="flex-1">
                      <BookingButton text="Book" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-raven text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4"><span className="text-copper">Meet Our</span> Fleet</h2>
            <p className="text-glacier/80 max-w-2xl mx-auto">Ride in comfort and style. We maintain two gorgeous vintage trolleys and two modern exploration vans.</p>
          </div>
          
          <div className="mb-12">
            <ImageCarousel images={fleetImages} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {fleet.map((item) => (
              <div key={item.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-golden/30 border-l-[6px] border-l-copper">
                <h3 className="text-xl font-bold mb-2 text-golden">{item.name}</h3>
                <div className="flex text-glacier text-sm mb-4">
                  <span className="bg-black/40 px-2 py-1 rounded mr-2">Capacity: {item.capacity}</span>
                  <span className="bg-black/40 px-2 py-1 rounded capitalize">{item.type}</span>
                </div>
                <ul className="text-glacier/90 space-y-1">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <span className="text-copper font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-glacier">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-raven mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-[6px] border border-l-copper border-golden/20">
                <h3 className="text-lg font-bold text-raven mb-2">{faq.question}</h3>
                <p className="text-raven/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
