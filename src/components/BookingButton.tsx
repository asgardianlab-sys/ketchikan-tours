'use client';
import React from 'react';

interface BookingButtonProps {
  text?: string;
  href?: string;
}

declare global {
  interface Window {
    FH?: {
      open: (options: { src: string }) => void;
    };
  }
}

export default function BookingButton({ 
  text = "Book Now", 
  href = "https://fareharbor.com/embeds/book/ketchikanexpeditions/items/?flow=343206" 
}: BookingButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.FH && window.FH.open) {
      e.preventDefault();
      window.FH.open({ src: href });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="bg-copper hover:bg-copper/90 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 inline-block text-center w-full md:w-auto"
    >
      {text}
    </a>
  );
}
