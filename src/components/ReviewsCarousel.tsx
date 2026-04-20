'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const reviews = [
  {
    name: 'Sarah M.',
    platform: 'TripAdvisor',
    content: "The Tongass Trolley was the absolute highlight of our Alaskan cruise! Tim and Luree treated us like VIPs from the moment we stepped off the ship."
  },
  {
    name: 'James & Emily T.',
    platform: 'TripAdvisor',
    content: "We booked a private van charter and got to see a side of Ketchikan most tourists miss. Incredibly comfortable, deep local knowledge, and pure fun."
  },
  {
    name: 'Robert K.',
    platform: 'TripAdvisor',
    content: "Skip the crowded cruise line excursions. Ketchikan Expeditions provides a truly first-class, luxury experience with genuine Alaskan hospitality."
  },
  {
    name: 'angela_mcs',
    platform: 'TripAdvisor',
    content: "Everything about the trip was really good. and Chris was a fantastic tour guide, so friendly and knowledgeable. We went to a lovely beach where you could buy cookies and salmon... All in all a great trip."
  },
  {
    name: 'Ivonne A',
    platform: 'TripAdvisor',
    content: "Our tour driver Christopher was amazing. He was so knowledgeable and very friendly. We were running a bit late to get to our meeting point and he went to get us. We had a great time in Ketchikan and would highly recommend Ketchikan Expeditions if you want a reliable excursion..."
  },
  {
    name: 'David D',
    platform: 'TripAdvisor',
    content: "Our tour was great, very good for people who can't walk far. Our guide Chris was amazing with assisting us in and out of the van and at sites. The tour is much more personal than the huge busses we saw. We highly recommend using this company."
  },
  {
    name: 'pslco60',
    platform: 'TripAdvisor',
    content: "We had an Outstanding day on the Ketchikan Trolley, gorgeous weather, no rain and Christoper was such a treat to tell us about the history of Ketchikan and of course some silly jokes!"
  },
  {
    name: 'bpw2022',
    platform: 'TripAdvisor',
    content: "The trolley was fun and comfortable, and Chris was fantastic. He kept us informed... He was even a bit disappointed about the wild bears not making an appearance, so we went back to check it out again and got to see one! Thank you for a great experience."
  },
  {
    name: 'Shea D',
    platform: 'TripAdvisor',
    content: "The tour operator was fabulous. He thoroughly explained everything. We got to see a bear too!! There is a stop for cookies, salmon, and tea too. I really enjoyed this."
  },
  {
    name: 'Adventure61978643682',
    platform: 'TripAdvisor',
    content: "I've been on quite a few excursions. And I have to say that Christopher made this trip extremely fun. His outgoing personality and willingness to share all of his knowledge of Alaska was amazing. There was no boredom on this trip."
  },
  {
    name: 'Gino S',
    platform: 'TripAdvisor',
    content: "Chris was great!! He was persistent that we see bears...and we did!! Chris was very knowledgeable and attentive to the guests. A++ Go Birds!!"
  }
];

export default function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Autoplay functionality natively implemented
  useEffect(() => {
    if (!emblaApi) return;
    let autoplay: NodeJS.Timeout;

    const startAutoplay = () => {
      clearInterval(autoplay);
      autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 2500); // 2.5 seconds per slide
    };

    const stopAutoplay = () => clearInterval(autoplay);

    // Initial start
    startAutoplay();

    // Pause functionality if the user decides to manually interact (drag/scroll)
    emblaApi.on('pointerDown', stopAutoplay);
    emblaApi.on('pointerUp', startAutoplay);

    return () => {
      stopAutoplay();
      emblaApi.off('pointerDown', stopAutoplay);
      emblaApi.off('pointerUp', startAutoplay);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden px-1" ref={emblaRef}>
        <div className="flex -ml-8">
          {reviews.map((review, idx) => (
            <div className="flex-none w-full md:w-1/2 lg:w-1/3 pl-8 pb-4" key={idx}>
              <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 text-center flex flex-col items-center h-full">
                <div className="flex gap-1 mb-6 text-obsidian">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-black text-lg leading-relaxed flex-grow">
                  "{review.content}"
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-6 pt-6 border-t border-silver/30 w-full">
                  {review.name} ({review.platform})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white border border-gray-100 hover:bg-gray-50 text-obsidian p-3 rounded-full shadow-lg transition-all z-10 hidden md:block"
        onClick={scrollPrev}
        aria-label="Previous reviews"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button 
        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white border border-gray-100 hover:bg-gray-50 text-obsidian p-3 rounded-full shadow-lg transition-all z-10 hidden md:block"
        onClick={scrollNext}
        aria-label="Next reviews"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
