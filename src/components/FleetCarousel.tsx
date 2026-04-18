'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { FleetItem } from '../types';

interface FleetCarouselProps {
  fleet: FleetItem[];
}

export default function FleetCarousel({ fleet }: FleetCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!fleet || fleet.length === 0) return null;

  const currentItem = fleet[selectedIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-100 mb-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {fleet.map((item, index) => (
              <div className="flex-[0_0_100%] min-w-0 relative h-64 md:h-96" key={index}>
                <Image 
                  src={item.imageUrl} 
                  alt={item.name} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        
        {fleet.length > 1 && (
          <>
            <button 
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all z-10"
              onClick={scrollPrev}
              aria-label="Previous vehicle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button 
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all z-10"
              onClick={scrollNext}
              aria-label="Next vehicle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {fleet.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === selectedIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
          <h3 className="text-2xl md:text-3xl font-bold text-obsidian">{currentItem.name}</h3>
          <div className="flex gap-2">
            <span className="bg-gray-100 text-obsidian px-3 py-1.5 text-sm font-bold rounded-lg border border-gray-200">
              Capacity: {currentItem.capacity}
            </span>
            <span className="bg-gray-100 text-obsidian px-3 py-1.5 text-sm font-bold rounded-lg capitalize border border-gray-200">
              {currentItem.type}
            </span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-widest text-obsidian/60 font-bold mb-3">Vehicle Features</h4>
          <ul className="grid sm:grid-cols-2 gap-3 text-obsidian/90">
            {currentItem.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-lg border-none">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
