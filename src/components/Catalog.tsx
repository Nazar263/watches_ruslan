'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Watch {
  id: number;
  name: string;
  tagline: string;
  image: string;
  image3d: string;
  imageScale: number;
  description: string;
  bgColor: string;
  bgGradient: string;
  glowColor: string;
  shadowColor: string;
  textColor: string;
  headingGradient: string;
  taglineColor: string;
  discoverColor: string;
  causticColor1: string;
  causticColor2: string;
  causticColor3: string;
  flowColor1: string;
  flowColor2: string;
  flowColor3: string;
  lightSweepColor: string;
  specs: {
    movement: string;
    case: string;
    glass: string;
    waterResistance: string;
    diameter: string;
    functions: string;
  };
}

const watches: Watch[] = [
  {
    id: 1,
    name: 'Falcon Chronograph',
    tagline: 'Precision in every detail',
    image: '/images/wach1.png',
    image3d: '/images/wach1-3d.png',
    imageScale: 1,
    description: 'Aviation chronograph style with metal bracelet and deep blue-black dial.',
    bgColor: '#1a2a3a',
    bgGradient: 'linear-gradient(135deg, #1a2a3a 0%, #0f1e2e 40%, #162838 100%)',
    glowColor: 'rgba(195, 175, 130, 0.25)',
    shadowColor: 'rgba(0,0,0,0.3)',
    textColor: 'text-white',
    headingGradient: 'linear-gradient(135deg, #ffffff 0%, #b4a87a 100%)',
    taglineColor: 'text-amber-200/80',
    discoverColor: 'text-white/90 hover:text-white',
    causticColor1: 'rgba(180,200,220,0.4)',
    causticColor2: 'rgba(120,160,200,0.3)',
    causticColor3: 'rgba(200,210,230,0.25)',
    flowColor1: 'rgba(255,255,255,0.15)',
    flowColor2: 'rgba(160,190,220,0.12)',
    flowColor3: 'rgba(255,255,255,0.08)',
    lightSweepColor: 'rgba(255,255,255,0.08)',
    specs: {
      movement: 'Quartz (High Precision)',
      case: 'Stainless Steel 316L',
      glass: 'Hardened Mineral',
      waterResistance: '3 ATM (30m)',
      diameter: '42mm',
      functions: 'Chronograph, Date Display',
    },
  },
  {
    id: 2,
    name: 'Navigator GMT',
    tagline: 'Two time zones, one bold statement',
    image: '/images/wach2.png',
    image3d: '/images/wach2-3d.png',
    imageScale: 1,
    description: 'GMT function with dual-timezone display, luminous indices and robust steel bracelet.',
    bgColor: '#0a1830',
    bgGradient: 'linear-gradient(135deg, #0e2240 0%, #0a1830 50%, #061222 100%)',
    glowColor: 'rgba(30, 80, 200, 0.3)',
    shadowColor: 'rgba(0,0,0,0.35)',
    textColor: 'text-white',
    headingGradient: 'linear-gradient(135deg, #ffffff 0%, #5BA3D9 100%)',
    taglineColor: 'text-blue-200/90',
    discoverColor: 'text-white/90 hover:text-white',
    causticColor1: 'rgba(20,60,140,0.5)',
    causticColor2: 'rgba(30,80,180,0.4)',
    causticColor3: 'rgba(10,40,120,0.3)',
    flowColor1: 'rgba(60,120,220,0.15)',
    flowColor2: 'rgba(20,50,130,0.12)',
    flowColor3: 'rgba(80,140,240,0.08)',
    lightSweepColor: 'rgba(100,170,255,0.06)',
    specs: {
      movement: 'Automatic (Self-Winding)',
      case: 'Stainless Steel 316L',
      glass: 'Sapphire Crystal',
      waterResistance: '5 ATM (50m)',
      diameter: '40mm',
      functions: 'GMT, Date Display',
    },
  },
  {
    id: 3,
    name: 'Heritage Pilot',
    tagline: 'Classic aviation, redefined',
    image: '/images/wach3.png',
    image3d: '/images/wach3-3d.png',
    imageScale: 1,
    description: 'Pilot watch with clean white dial, bold numerals and premium leather strap.',
    bgColor: '#b8c8d8',
    bgGradient: 'linear-gradient(135deg, #c0d0e0 0%, #b8c8d8 40%, #a8bcd0 100%)',
    glowColor: 'rgba(25, 70, 180, 0.2)',
    shadowColor: 'rgba(0,0,0,0.15)',
    textColor: 'text-gray-800',
    headingGradient: 'linear-gradient(135deg, #1a3050 0%, #2a5580 50%, #1a3050 100%)',
    taglineColor: 'text-gray-900/80',
    discoverColor: 'text-gray-900 hover:text-black',
    causticColor1: 'rgba(100,160,220,0.4)',
    causticColor2: 'rgba(180,210,240,0.35)',
    causticColor3: 'rgba(140,190,230,0.3)',
    flowColor1: 'rgba(200,225,250,0.2)',
    flowColor2: 'rgba(120,175,235,0.15)',
    flowColor3: 'rgba(220,235,255,0.1)',
    lightSweepColor: 'rgba(255,255,255,0.15)',
    specs: {
      movement: 'Quartz (High Precision)',
      case: 'Stainless Steel 316L',
      glass: 'Hardened Mineral',
      waterResistance: '3 ATM (30m)',
      diameter: '44mm',
      functions: 'Analog Display, Date',
    },
  },
  {
    id: 4,
    name: 'Stealth Chrono',
    tagline: 'Bold by design',
    image: '/images/wach4.png',
    image3d: '/images/wach4-3d.png',
    imageScale: 1,
    description: 'Matte black chronograph with green accent details and sporty functionality.',
    bgColor: '#080e1a',
    bgGradient: 'linear-gradient(135deg, #0c1422 0%, #080e1a 50%, #050a14 100%)',
    glowColor: 'rgba(20, 60, 170, 0.3)',
    shadowColor: 'rgba(0,0,0,0.4)',
    textColor: 'text-white',
    headingGradient: 'linear-gradient(135deg, #ffffff 0%, #4488CC 100%)',
    taglineColor: 'text-blue-200/90',
    discoverColor: 'text-white/90 hover:text-white',
    causticColor1: 'rgba(10,30,80,0.5)',
    causticColor2: 'rgba(15,40,100,0.4)',
    causticColor3: 'rgba(5,20,70,0.3)',
    flowColor1: 'rgba(30,70,150,0.12)',
    flowColor2: 'rgba(10,25,65,0.1)',
    flowColor3: 'rgba(40,80,170,0.06)',
    lightSweepColor: 'rgba(80,140,220,0.05)',
    specs: {
      movement: 'Quartz (Chronograph)',
      case: 'Stainless Steel 316L (PVD Black)',
      glass: 'Hardened Mineral',
      waterResistance: '5 ATM (50m)',
      diameter: '43mm',
      functions: 'Chronograph, Tachymeter, Date',
    },
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function Catalog() {
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (selectedWatch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedWatch]);

  return (
    <section id="catalog">
      <div className="relative">
        {watches.map((watch, i) => (
          <div
            key={watch.id}
            className="relative h-screen w-full overflow-hidden"
          >
            {/* Layer 1: Base gradient */}
            <div
              className="absolute inset-0"
              style={{ background: watch.bgGradient }}
            />

            {/* Layer 2: Animated orb 1 — large, slow, primary color */}
            <div
              className="absolute water-orb-1 pointer-events-none"
              style={{
                top: '-20%',
                left: '-10%',
                width: '70%',
                height: '120%',
                borderRadius: '40%',
                background: `radial-gradient(ellipse at center, ${watch.causticColor1} 0%, transparent 70%)`,
                filter: 'blur(60px)',
                opacity: 0.7,
              }}
            />

            {/* Layer 3: Animated orb 2 — medium, secondary color */}
            <div
              className="absolute water-orb-2 pointer-events-none"
              style={{
                top: '10%',
                right: '-15%',
                width: '65%',
                height: '110%',
                borderRadius: '45%',
                background: `radial-gradient(ellipse at center, ${watch.causticColor2} 0%, transparent 70%)`,
                filter: 'blur(55px)',
                opacity: 0.6,
              }}
            />

            {/* Layer 4: Animated orb 3 — accent color, different rhythm */}
            <div
              className="absolute water-orb-3 pointer-events-none"
              style={{
                bottom: '-25%',
                left: '10%',
                width: '60%',
                height: '100%',
                borderRadius: '50%',
                background: `radial-gradient(ellipse at center, ${watch.causticColor3} 0%, transparent 70%)`,
                filter: 'blur(65px)',
                opacity: 0.5,
              }}
            />

            {/* Layer 5: Animated orb 4 — highlight / light streaks */}
            <div
              className="absolute water-orb-4 pointer-events-none"
              style={{
                top: '5%',
                left: '30%',
                width: '50%',
                height: '90%',
                borderRadius: '45%',
                background: `radial-gradient(ellipse at center, ${watch.flowColor1} 0%, transparent 65%)`,
                filter: 'blur(50px)',
                opacity: 0.4,
              }}
            />

            {/* Layer 6: Radial glow centered on watch */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 50% 50% at 55% 45%, ${watch.glowColor} 0%, transparent 70%)`,
              }}
            />

            {/* Layer 7: Shimmer / caustic light overlay */}
            <div className="absolute inset-0 water-shimmer-anim pointer-events-none">
              <div
                className="absolute inset-0 water-caustic-anim"
                style={{
                  background: `
                    radial-gradient(ellipse 30% 25% at 20% 30%, rgba(255,255,255,0.12) 0%, transparent 70%),
                    radial-gradient(ellipse 25% 30% at 70% 60%, rgba(255,255,255,0.1) 0%, transparent 70%),
                    radial-gradient(ellipse 35% 20% at 50% 80%, rgba(255,255,255,0.08) 0%, transparent 70%)
                  `,
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="relative w-[100vw] h-[100vw] sm:w-[50vw] sm:h-[50vw] lg:w-[45vw] lg:h-[45vw] max-w-[900px] max-h-[900px]"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 72%)',
                  maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 72%)',
                }}
              >
                <Image
                  src={watch.image}
                  alt={watch.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 60vw"
                />
              </div>
            </motion.div>

            {/* Layer 4: Shadow beneath watch */}
            <div
              className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[35%] h-6 rounded-full"
              style={{
                background: `radial-gradient(ellipse, ${watch.shadowColor} 0%, transparent 70%)`,
                filter: 'blur(20px)',
              }}
            />

            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2
                  className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-3"
                  style={{
                    background: watch.headingGradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {watch.name}
                </h2>
                <p className={`${watch.taglineColor} text-lg sm:text-xl mb-6 max-w-md`}>
                  {watch.tagline}
                </p>
                <button
                  onClick={() => setSelectedWatch(watch)}
                  className={`inline-flex items-center gap-2 ${watch.discoverColor} font-medium text-sm tracking-wide hover:gap-4 transition-all duration-300 group`}
                >
                  <span>Discover more</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
              <span className={`${watch.textColor} opacity-50 text-xs tracking-[0.4em] uppercase`}>
                {String(i + 1).padStart(2, '0')} / {String(watches.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedWatch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            style={{ background: 'rgba(15,23,42,0.6)' }}
            onClick={() => setSelectedWatch(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl rounded-3xl overflow-y-auto max-h-[85vh] shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >


              {/* Water orbs - behind everything */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute water-orb-1" style={{ top: '-20%', left: '-10%', width: '70%', height: '120%', borderRadius: '40%', background: `radial-gradient(ellipse at center, ${selectedWatch.causticColor1} 0%, transparent 70%)`, filter: 'blur(60px)', opacity: 0.7 }} />
                <div className="absolute water-orb-2" style={{ top: '10%', right: '-15%', width: '65%', height: '110%', borderRadius: '45%', background: `radial-gradient(ellipse at center, ${selectedWatch.causticColor2} 0%, transparent 70%)`, filter: 'blur(55px)', opacity: 0.6 }} />
                <div className="absolute water-orb-3" style={{ bottom: '-25%', left: '10%', width: '60%', height: '100%', borderRadius: '50%', background: `radial-gradient(ellipse at center, ${selectedWatch.causticColor3} 0%, transparent 70%)`, filter: 'blur(65px)', opacity: 0.5 }} />
                <div className="absolute water-orb-4" style={{ top: '5%', left: '30%', width: '50%', height: '90%', borderRadius: '45%', background: `radial-gradient(ellipse at center, ${selectedWatch.flowColor1} 0%, transparent 65%)`, filter: 'blur(50px)', opacity: 0.4 }} />
              </div>

              {/* Radial glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 50% 50% at 55% 45%, ${selectedWatch.glowColor} 0%, transparent 70%)` }} />

              {/* Shimmer overlay */}
              <div className="absolute inset-0 water-shimmer-anim pointer-events-none">
                <div className="absolute inset-0 water-caustic-anim" style={{ background: `radial-gradient(ellipse 30% 25% at 20% 30%, rgba(255,255,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 25% 30% at 70% 60%, rgba(255,255,255,0.1) 0%, transparent 70%), radial-gradient(ellipse 35% 20% at 50% 80%, rgba(255,255,255,0.08) 0%, transparent 70%)` }} />
              </div>

              {/* Close button */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => setSelectedWatch(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 z-30 w-11 h-11 rounded-full backdrop-blur-md bg-white/15 border border-white/25 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 md:bg-gray-800/10 md:border-gray-800/15 md:text-gray-800/60 md:hover:text-gray-900 md:hover:bg-gray-800/15 md:hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="relative grid md:grid-cols-2 gap-0 overflow-hidden w-full max-w-full">
                {/* 3D Model Area */}
                <div className="relative min-h-[280px] sm:aspect-square flex items-center justify-center p-4 sm:p-0 overflow-visible">
                  <motion.div
                    animate={isMobile ? {} : { y: [0, -8, 0] }}
                    transition={isMobile ? {} : { duration: 5, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={selectedWatch.image3d}
                      alt={selectedWatch.name}
                      width={250}
                      height={250}
                      className="object-contain translate-y-4 sm:translate-y-8"
                      style={{
                        filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4)) drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                      }}
                    />
                  </motion.div>
                </div>

                {/* Info Panel */}
                <div className="p-4 sm:p-8 flex flex-col justify-center bg-white/90 backdrop-blur-xl md:border-l border-t md:border-t-0 border-border-light/50 overflow-hidden">
                  {/* Tagline */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-px w-8 bg-rolex-green/40 flex-shrink-0" />
                      <span className="text-rolex-green text-[0.6rem] sm:text-[0.65rem] tracking-[0.25em] sm:tracking-[0.35em] uppercase font-medium">
                        {selectedWatch.tagline}
                      </span>
                    </div>
                  </motion.div>

                  {/* Name */}
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-heading font-bold mb-2"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                  >
                    <span className="text-gradient">{selectedWatch.name}</span>
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="text-text-secondary leading-relaxed mb-4 text-[0.8rem] sm:text-[0.85rem] break-words overflow-hidden"
                  >
                    {selectedWatch.description}
                  </motion.p>

                  {/* Specs */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-0 mb-5"
                  >
                    {Object.entries(selectedWatch.specs).map(([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 border-b border-rolex-green/8 hover:bg-rolex-green/[0.03] px-2 -mx-2 rounded-lg transition-colors duration-300"
                      >
                        <span className="text-text-tertiary text-xs sm:text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-text-primary text-xs sm:text-sm font-semibold sm:text-right">
                          {value}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Order Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <a
                      href="https://wa.me/18602054435"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-2.5 w-full bg-rolex-green text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider transition-all duration-500 hover:shadow-[0_8px_35px_rgba(0,96,57,0.5)] hover:scale-[1.02] active:scale-95"
                    >
                      <svg className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Order Now
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
