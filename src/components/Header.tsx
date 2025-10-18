'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900/80 backdrop-blur-md text-white p-3 md:p-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 md:space-x-3">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-gray-900 font-bold text-xs md:text-sm">C</span>
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-bold">cabbazar</h1>
            <p className="text-xs md:text-sm text-gray-300 hidden md:block">All India Cab Service</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/cabs" className="text-gray-300 hover:text-white transition-colors">
            Book Cab
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
