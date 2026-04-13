import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <header className="bg-glacier sticky top-0 z-50 border-b border-golden/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Ketchikan Expeditions Logo" 
            width={240} 
            height={60} 
            className="h-10 md:h-14 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/#tours" className="text-raven/80 hover:text-copper font-medium transition-colors">
            Tours
          </Link>
          <Link href="/#fleet" className="text-raven/80 hover:text-copper font-medium transition-colors hidden sm:block">
            Our Fleet
          </Link>
          <a href="#faq" className="text-raven/80 hover:text-copper font-medium transition-colors hidden md:block">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
