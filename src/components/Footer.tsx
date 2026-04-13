import Link from 'next/link';
import { locations } from '../data/locations';

export default function Footer() {
  const activeLocations = locations.filter(loc => loc.isActive);

  return (
    <footer className="bg-raven text-glacier py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black mb-4">Ketchikan<span className="text-copper">Expeditions</span></h2>
          <p className="text-glacier/80 mb-6 max-w-sm">
            We are a small, locally owned business that provides first class, private excursions in Southeast Alaska that are customized based on your own interests.
          </p>
          <div className="text-sm text-glacier/70 space-y-1">
            <p className="font-bold text-copper mb-2">Open Now: 7:00 AM - 7:00 PM</p>
            <p><strong>KETCHIKAN EXPEDITIONS LLC</strong></p>
            <p>Ketchikan Visitors Center</p>
            <p>131 Front Street, Booth #5</p>
            <p>Ketchikan, Alaska 99901, US</p>
            <p className="mt-2">Phone: +1 (907) 617-7126</p>
            <p>Email: luree@ketchikanexpeditions.com</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4 text-golden">Pickup Locations</h3>
          <ul className="space-y-2">
            {activeLocations.map(loc => (
              <li key={loc.slug}>
                <Link href={`/pickups/${loc.slug}`} className="text-glacier/80 hover:text-white transition-colors">
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-golden">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-glacier/80 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/#tours" className="text-glacier/80 hover:text-white transition-colors">Tours</Link></li>
            <li><Link href="/#about" className="text-glacier/80 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/#faq" className="text-glacier/80 hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-glacier/10 text-sm text-glacier/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} Ketchikan Expeditions LLC. All rights reserved.
        </div>
        <div className="flex gap-4">
          <span>AK Dept. of Commerce: 1955144</span>
          <span>USDOT: 3394359</span>
        </div>
      </div>
    </footer>
  );
}
