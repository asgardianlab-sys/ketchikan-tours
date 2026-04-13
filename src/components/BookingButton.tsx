'use client';
import React from 'react';

// FareHarbor global type definition
declare global {
  interface Window {
    FH?: {
      open: (options: { shortname: string; fallback: string; fullItems: string }) => void;
    };
  }
}

export default function BookingButton({ text = "Book Now", shortname = "ketchikantours" }: { text?: string, shortname?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.FH && window.FH.open) {
      window.FH.open({
        shortname: shortname,
        fallback: 'simple',
        fullItems: 'yes'
      });
    } else {
      // Fallback in case script didn't load or mobile restriction
      window.location.href = `https://fareharbor.com/embeds/book/${shortname}/`;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-copper hover:bg-copper/90 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
      {text}
    </button>
  );
}
