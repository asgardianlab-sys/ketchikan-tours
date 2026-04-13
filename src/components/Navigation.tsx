'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-glacier sticky top-0 z-50 border-b border-golden/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative z-20">
        <Link 
          href="/" 
          className={`flex items-center transition-all duration-300 ${isOpen ? 'blur-[2px] opacity-60' : ''}`} 
          onClick={() => setIsOpen(false)}
        >
          <Image 
            src="/logo.png" 
            alt="Ketchikan Expeditions Logo" 
            width={240} 
            height={60} 
            className="h-10 md:h-14 w-auto object-contain"
            priority
          />
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-raven hover:text-copper focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-raven/20 backdrop-blur-sm -z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 bg-glacier border-b border-golden/20 shadow-xl z-10 
                          md:w-64 md:border md:border-t-0 md:rounded-bl-xl md:left-auto md:right-0">
            <nav className="flex flex-col py-2">
              <Link 
                href="/" 
                className="px-6 py-4 text-raven font-bold hover:bg-raven/5 hover:text-copper transition-colors border-b border-golden/10 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/#tours" 
                className="px-6 py-4 text-raven font-bold hover:bg-raven/5 hover:text-copper transition-colors border-b border-golden/10 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                Tours
              </Link>
              <Link 
                href="/#about" 
                className="px-6 py-4 text-raven font-bold hover:bg-raven/5 hover:text-copper transition-colors border-b border-golden/10 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/#faq" 
                className="px-6 py-4 text-raven font-bold hover:bg-raven/5 hover:text-copper transition-colors border-b border-golden/10 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
