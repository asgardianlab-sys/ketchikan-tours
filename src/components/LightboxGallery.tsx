'use client';

import { useState } from 'react';
import Image from 'next/image';

const DEFAULT_IMAGES = [
  '/gallery/bear catching sockeye.jpg',
  '/gallery/vangrouplaughing.jpeg',
  '/gallery/eagle2.jpg',
  '/gallery/eagle3.jpg',
  '/gallery/groupconnelllake.jpeg',
  '/gallery/grouprainforest.jpeg',
  '/gallery/timgrouprobkimwaterfall.jpeg',
  '/gallery/baby bear.jpg',
  '/gallery/bear in creek.jpg',
  '/gallery/mother-with-cubs-crossing-street-RE-1200x799.jpg',
  '/gallery/seal.jpg',
  '/gallery/seals4.jpg',
  '/gallery/just fishing.jpg',
  '/gallery/herring cove.jpg',
  '/gallery/American Legion.jpg',
  '/gallery/Harley RIders memorial.jpg',
  '/gallery/Harley riders kissing.jpg',
  '/gallery/alaska-zodiac-tours-ketchikan-1.jpg',
  '/gallery/ketchikan-expeditions.jpg',
  '/gallery/ketchikan-expeditions (1).jpg',
  '/gallery/caption.jpg',
  '/gallery/caption (1).jpg',
  '/gallery/d4fef143-4814-4193-a9da-a7908b1268fb~1.jpg',
  '/gallery/39.jpg'
];

export default function LightboxGallery({ images = DEFAULT_IMAGES }: { images?: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 border border-silver/20"
            onClick={() => openLightbox(idx)}
          >
            <div className="relative w-full" style={{ paddingBottom: `${(idx % 3 === 0 ? 120 : idx % 2 === 0 ? 80 : 100)}%` }}>
              <Image 
                src={img} 
                alt={`Gallery image ${idx + 1}`}
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/20 transition-colors duration-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50 bg-black/20 hover:bg-black/50 rounded-full"
            onClick={showPrev}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50 bg-black/20 hover:bg-black/50 rounded-full"
            onClick={showNext}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div 
            className="relative w-full h-full max-w-7xl max-h-screen flex items-center justify-center pointer-events-none"
          >
            <Image 
              src={images[selectedIndex]}
              alt={`Expanded gallery view ${selectedIndex + 1}`}
              fill
              className="object-contain pointer-events-auto"
              sizes="100vw"
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
