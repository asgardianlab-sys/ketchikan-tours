'use client';

import { useState } from 'react';
import Image from 'next/image';

const DEFAULT_IMAGES = [
  '/hero_landscape.png',
  '/trolley_tour.png',
  '/van_tour.png',
  '/Interiorvan.png',
  '/Betty inside.png',
  '/altviewvan.png',
  '/luree.png',
  '/tim.png'
];

export default function LightboxGallery({ images = DEFAULT_IMAGES }: { images?: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imgUrl: string) => {
    setSelectedImage(imgUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 border border-silver/20"
            onClick={() => openLightbox(img)}
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

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 opacity-0 animate-in fade-in duration-300"
          onClick={closeLightbox}
          style={{ animationFillMode: 'forwards' }}
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
          
          <div 
            className="relative w-full h-full max-w-7xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage}
              alt="Expanded gallery view"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
