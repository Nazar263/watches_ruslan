'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Catalog', href: '#catalog' },
  { label: 'Craftsmanship', href: '#about' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacts', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#catalog');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { threshold: [0.1, 0.3, 0.5], rootMargin: '-80px 0px -30% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = useCallback(
    (href: string) => activeSection === href,
    [activeSection]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-white/80 backdrop-blur-xl border-b ${
        scrolled
          ? 'border-border-light py-3 shadow-[0_2px_24px_rgba(0,0,0,0.08)]'
          : 'border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/images/logo-na-prozoromu-1.png"
            alt="Ruslan Aviation"
            width={40}
            height={40}
            className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
          />
          <span className="font-heading text-lg tracking-wider text-charcoal">
            RUSLAN AVIATION
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  active
                    ? 'text-rolex-green font-semibold bg-rolex-green/10'
                    : 'text-charcoal/60 hover:text-charcoal hover:bg-black/5'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-rolex-green transition-all duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    active ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="#contacts"
          className="hidden lg:inline-flex items-center gap-2.5 bg-rolex-green text-white px-5 py-2.5 rounded-full text-sm tracking-wider transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-rolex-green-light active:scale-95 shadow-[0_4px_16px_rgba(0,96,57,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Message Manager
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-charcoal transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-charcoal transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-charcoal transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white backdrop-blur-xl mt-2 mx-4 rounded-2xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-border-light">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`relative flex items-center gap-3 text-sm tracking-widest uppercase py-3 px-4 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    active
                      ? 'text-rolex-green font-semibold bg-rolex-green/10'
                      : 'text-charcoal/60 hover:text-charcoal hover:bg-black/5'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                      active ? 'bg-rolex-green scale-100' : 'bg-transparent scale-0'
                    }`}
                  />
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contacts"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-rolex-green text-white px-5 py-3.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-rolex-green-light active:scale-95 shadow-[0_4px_16px_rgba(0,96,57,0.3)]"
            >
              Message Manager
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}