'use client';

import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-stone-100 border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-black text-2xl uppercase">
          Granite <span className="bg-lime-300 border-2 border-black px-2">Studio</span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-black text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HugeiconsIcon icon={Cancel01Icon} size={32} /> : <HugeiconsIcon icon={Menu01Icon} size={32} />}
        </button>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#services" className="font-black uppercase text-sm hover:underline">Services</a>
          <a href="#how" className="font-black uppercase text-sm hover:underline">How it works</a>
          <a href="#results" className="font-black uppercase text-sm hover:underline">Results</a>
          <a href="#reviews" className="font-black uppercase text-sm hover:underline">Reviews</a>
          <a href="#faq" className="font-black uppercase text-sm hover:underline">FAQ</a>
          <a
            href="#cta"
            className="bg-lime-300 border-2 border-black px-6 py-2 font-black uppercase text-sm transition-all hover:translate-x-1 hover:translate-y-1"
            style={{ boxShadow: '4px 4px 0 #000' }}
          >
            Book a free strategy call
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t-4 border-black bg-white">
          <a href="#services" onClick={() => setMenuOpen(false)} className="block px-6 py-3 font-black uppercase text-sm border-b-2 border-black hover:bg-lime-100">Services</a>
          <a href="#how" onClick={() => setMenuOpen(false)} className="block px-6 py-3 font-black uppercase text-sm border-b-2 border-black hover:bg-lime-100">How it works</a>
          <a href="#results" onClick={() => setMenuOpen(false)} className="block px-6 py-3 font-black uppercase text-sm border-b-2 border-black hover:bg-lime-100">Results</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="block px-6 py-3 font-black uppercase text-sm border-b-2 border-black hover:bg-lime-100">Reviews</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="block px-6 py-3 font-black uppercase text-sm border-b-2 border-black hover:bg-lime-100">FAQ</a>
          <a href="#cta" onClick={() => setMenuOpen(false)} className="block px-6 py-3 font-black uppercase text-sm bg-lime-300 border-b-2 border-black hover:bg-lime-200">Book a free strategy call</a>
        </div>
      )}
    </nav>
  );
}
