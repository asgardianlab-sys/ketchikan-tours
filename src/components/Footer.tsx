import Link from 'next/link';
import { locations } from '../data/locations';

export default function Footer() {
  const activeLocations = locations.filter(loc => loc.isActive);

  return (
    <footer className="bg-obsidian text-alabaster py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black mb-4">Ketchikan<span className="text-graphite">Expeditions</span></h2>
          <p className="text-alabaster/80 mb-6 max-w-sm">
            We are a small, locally owned business that provides first class, private excursions in Southeast Alaska that are customized based on your own interests.
          </p>
          <div className="text-sm text-alabaster/70 space-y-1">
            <p className="font-bold text-graphite mb-2">Open Now: 7:00 AM - 7:00 PM</p>
            <p><strong>KETCHIKAN EXPEDITIONS LLC</strong></p>
            <p>PO BOX 6452</p>
            <p>Ketchikan, Alaska 99901</p>
            <p className="mt-2">131 Front Street, Booth #12</p>
            <p>Ketchikan Visitors Center</p>
            <p className="mt-4 break-words">Phone: 1 (907) 617-7120</p>
            <p className="break-words">Email: info@KetchikanExpeditions.com</p>
            <p className="mt-2">www.KetchikanExpeditions.com</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4 text-silver">Pickup Locations</h3>
          <ul className="space-y-2">
            {activeLocations.map(loc => (
              <li key={loc.slug}>
                <Link href={`/pickups/${loc.slug}`} className="text-alabaster/80 hover:text-white transition-colors">
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-silver">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-alabaster/80 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/#tours" className="text-alabaster/80 hover:text-white transition-colors">Tours</Link></li>
            <li><Link href="/gallery" className="text-alabaster/80 hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/#about" className="text-alabaster/80 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/#faq" className="text-alabaster/80 hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/contact-us" className="text-alabaster/80 hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-alabaster/10 text-sm text-alabaster/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          &copy; 2026 Ketchikan Expeditions LLC. All rights reserved. Designed by <a href="https://asgardsforge.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Asgardian Labs</a>.
        </div>
        <div className="flex gap-4">
          <span>AK Dept. of Commerce: 1955144</span>
          <span>USDOT: 3394359</span>
        </div>
      </div>
    </footer>
  );
}
