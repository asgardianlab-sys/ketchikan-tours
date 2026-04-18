import Image from 'next/image';
import Link from 'next/link';
import { tours } from '../data/tours';
import { fleet } from '../data/fleet';
import { faqs } from '../data/faq';
import BookingButton from '../components/BookingButton';
import FleetCarousel from '../components/FleetCarousel';
import ReviewsCarousel from '../components/ReviewsCarousel';

export default function Home() {

  return (
    <div className="bg-alabaster">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": "Ketchikan Expeditions",
        "description": "Luxury small group tours in Ketchikan, Alaska.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "124"
        }
      }) }} />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-obsidian overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image 
            src="/hero_landscape.png" 
            alt="Ketchikan Alaska Landscape" 
            fill 
            sizes="100vw"
            className="object-cover blur-[2px] scale-[1.02]"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-white mb-6 drop-shadow-lg tracking-tight">
            Discover the Real Ketchikan
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-alabaster mb-10 drop-shadow-md max-w-2xl mx-auto">
            ELEVATE YOUR ALASKA EXPERIENCE.
          </p>
          <div className="flex gap-4 justify-center">
            <BookingButton text="Book Your Adventure" />
            <Link href="#tours" className="bg-transparent border border-white text-white hover:bg-white/20 transition-colors font-bold py-3 px-8 rounded-lg">
              Explore Tours
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-obsidian mb-6">About Ketchikan <span className="text-graphite">Expeditions</span></h2>
          <p className="text-xl text-obsidian/80 leading-relaxed font-medium mb-4">
            We are a locally owned and operated, first class tour company where fun is at the heart of every adventure. Proudly rooted in the community, we bring a personal touch to every experience, combining expert knowledge with genuine hospitality.
          </p>
          <p className="text-lg text-obsidian/70 leading-relaxed max-w-3xl mx-auto">
            Whether you’re exploring iconic sights or hidden gems, our team is dedicated to creating memorable, laughter-filled journeys that go beyond the ordinary. With a passion for excellence and a focus on enjoyment, we turn every tour into an unforgettable experience. First and foremost, we provide fun! We recognize that our guests are on vacation and providing a memorable experience is our focus.
          </p>
        </div>

        {/* Owners / Fearless Leaders */}
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Luree */}
          <div className="flex flex-col">
            <div className="w-1/2 md:w-[50%] mx-auto aspect-[4/5] bg-gray-100 rounded-2xl mb-8 flex items-center justify-center border border-gray-200 shadow-inner relative overflow-hidden group">
              <Image src="/luree.png" alt="Luree LeBrock" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-obsidian mb-6">Fearless Leader 1 - Luree LeBrock</h3>
            <div className="space-y-4 text-obsidian/80 text-lg leading-relaxed">
              <blockquote className="italic border-l-4 border-graphite bg-alabaster p-6 rounded-r-xl mb-8 text-obsidian font-medium">
                “Our motivation is to provide a unique experience rather than a standard excursion. We’re a small, family-owned business with a passion for what we do—and we have a lot of fun doing it.”
                <span className="block mt-4 font-bold not-italic font-sans tracking-wide">– Luree</span>
              </blockquote>
              <p>As a proud third-generation Ketchikanite, Luree grew up the way locals do—immersed in the outdoors and rarely indoors for long. From hiking and hunting to fishing, camping, seaplane flying, and kayaking, she’s done it all.</p>
              <p>Born and raised in Ketchikan, Luree has witnessed the community evolve over the years, giving her a deep understanding of its history, character, and hidden gems. Whether you’re curious about local stories or the best off-the-beaten-path spots, she’s a go-to resource.</p>
              <p>With a lifelong love of island living and the outdoors, Luree founded Ketchikan Expeditions to share that passion with others. Her goal is simple: help visitors experience her hometown the way locals do—authentic, adventurous, and always unforgettable.</p>
              <p>As the heart of daily operations and guest experiences, Luree ensures every outing feels personal, not packaged.</p>
            </div>
          </div>

          {/* Tim */}
          <div className="flex flex-col">
            <div className="w-1/2 md:w-[50%] mx-auto aspect-[4/5] bg-gray-100 rounded-2xl mb-8 flex items-center justify-center border border-gray-200 shadow-inner relative overflow-hidden group">
               <Image src="/tim.png" alt="Tim Cash" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-obsidian mb-6">Fearless Leader 2 - Tim Cash <span className="text-xl text-graphite font-normal inline-block align-middle ml-2">(AKA "Tour Daddy")</span></h3>
            <div className="space-y-4 text-obsidian/80 text-lg leading-relaxed">
              <blockquote className="italic border-l-4 border-graphite bg-alabaster p-6 rounded-r-xl mb-8 text-obsidian font-medium">
                “If you’re not laughing, you’re not doing it right!”
                <span className="block mt-4 font-bold not-italic font-sans tracking-wide">– Tim Cash</span>
              </blockquote>
              <p>Tim arrived in Ketchikan as a Florida “pretty boy” in search of adventure—and found far more than he bargained for on our wild, remote island. While the good looks may have helped him blend in, it’s his grit, Marine Corps background, and genuine passion for the outdoors that truly define him.</p>
              <p>What started as a one-summer stint—just to say he experienced Alaska—quickly turned into something permanent. As Ketchikan often does, it worked its magic, and Tim realized he had found his forever home. Fifteen years ago, he officially traded in seasonal status for full-time “resident wild man.”</p>
              <p>Tim quickly embraced the tight-knit community and the rugged, outdoorsy lifestyle that makes this place so special. After gaining experience in the tour industry, he felt inspired to create something of his own—something more personal, more authentic. He brought the idea to Luree, and just like that, Ketchikan Expeditions, LLC was born.</p>
              <p>Today, Tim helps lead the charge in making every trip memorable, with a focus on fun, connection, and real adventure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-alabaster border-y border-silver/20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-white border border-gray-200 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-obsidian">Small Groups</h3>
            <p className="text-obsidian/70">Escape the cruise ship crowds. Our maximum capacity is 24 on trolleys and 14 in vans.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-white border border-gray-200 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-obsidian">Local Guides</h3>
            <p className="text-obsidian/70">Passionate, knowledgeable Alaskan residents leading every tour with authentic stories.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-white border border-gray-200 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-obsidian">Guaranteed Return</h3>
            <p className="text-obsidian/70">We align meticulously with your ship's schedule to ensure you are back in plenty of time.</p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-obsidian mb-4">Our Premium Tours</h2>
            <p className="text-lg text-obsidian/70 max-w-2xl mx-auto">Select the perfect Ketchikan experience. From historical city trolley rides to deep forest van expeditions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tours.map(tour => (
              <div key={tour.slug} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full hover:border-gray-200">
                <div className="relative h-72">
                  <Image src={tour.featuredImage} alt={tour.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-4 mb-4 text-sm font-bold text-graphite uppercase tracking-wider justify-between">
                    <span>⏱ {tour.duration}</span>
                    <span className="text-graphite text-sm tracking-widest text-right">From ${tour.price.toFixed(2)}{tour.priceSuffix === 'total' ? '' : ` / ${tour.priceSuffix}`}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-obsidian mb-3">{tour.title}</h3>
                  <p className="text-obsidian/80 mb-6 flex-grow">{tour.description}</p>
                  
                  <div className="flex gap-4 mt-auto">
                    <Link href={`/tours/${tour.slug}`} className="flex-1 bg-transparent border border-black text-black hover:bg-gray-50 transition-colors font-bold py-3 px-6 rounded-lg text-center">
                      View Details
                    </Link>
                    <div className="flex-1">
                      <BookingButton text="Book" href={tour.bookingUrl} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-obsidian text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-medium mb-4"><span className="text-graphite">Meet Our</span> Fleet</h2>
            <p className="text-alabaster/80 max-w-2xl mx-auto">Ride in comfort and style. We maintain two gorgeous vintage trolleys and two modern exploration vans.</p>
          </div>
          
          <FleetCarousel fleet={fleet} />
        </div>
      </section>

      {/* Homepage Gallery Preview */}
      <section className="py-20 bg-obsidian border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-serif font-medium text-alabaster mb-4">The Ketchikan <span className="text-graphite">Experience</span></h2>
              <p className="text-lg text-alabaster/70 max-w-xl">A glimpse into the memories we create every day on the wild trails and historic streets of Alaska.</p>
            </div>
            <Link href="/gallery" className="bg-transparent border border-white text-white hover:bg-white hover:text-obsidian transition-colors font-bold py-3 px-8 rounded-lg shrink-0">
              View Full Gallery
            </Link>
          </div>

          {/* 6-Photo Rigid Asymmetrical Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {[
              { src: '/hero_landscape.png', spanCS: 'col-span-2 row-span-2' },
              { src: '/trolley_tour.png', spanCS: 'col-span-2 row-span-1' },
              { src: '/Interiorvan.png', spanCS: 'col-span-1 row-span-1' },
              { src: '/Betty inside.png', spanCS: 'col-span-1 row-span-1' },
              { src: '/luree.png', spanCS: 'col-span-2 md:col-span-1 row-span-1' },
              { src: '/tim.png', spanCS: 'col-span-2 md:col-span-3 row-span-1' },
            ].map((img, idx) => (
              <Link href="/gallery" key={idx} className={`relative rounded-xl overflow-hidden group ${img.spanCS}`}>
                <Image 
                  src={img.src} 
                  alt={`Gallery Preview ${idx + 1}`} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-white border-b border-silver/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-obsidian mb-4">Guest Experiences</h2>
            <p className="text-lg text-obsidian/70 max-w-2xl mx-auto">Don't just take our word for it. See what our guests are saying about their five-star Alaskan adventures.</p>
          </div>
          
          <ReviewsCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-alabaster">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-obsidian mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-obsidian/80 max-w-4xl mx-auto leading-relaxed">
              Below are our most frequently asked questions. If there is anything else you wish to inquire about, please contact us at 1 (907) 617-7120, email us with your questions at info@KetchikanExpeditions.com or <Link href="/contact-us" className="text-graphite font-bold underline hover:text-charcoal transition-colors">fill in the contact form here</Link> and one of our customer service representatives will respond within 24 hours or less.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-[6px] border border-l-graphite border-silver/20">
                <h3 className="text-lg font-bold text-obsidian mb-2">{faq.question}</h3>
                <p className="text-obsidian/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
