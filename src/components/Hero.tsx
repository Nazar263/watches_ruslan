'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const watches = [
  {
    id: 1,
    name: 'Falcon',
    subtitle: 'Chronograph',
    tagline: 'Precision engineered for those who command the skies',
    image: '/images/wach1-3d.png',
    specs: [
      { icon: 'gear', label: 'Swiss Movement' },
      { icon: 'drop', label: '100m WR' },
      { icon: 'shield', label: 'Titanium Case' },
    ],
  },
  {
    id: 2,
    name: 'Navigator',
    subtitle: 'GMT',
    tagline: 'Two time zones. One uncompromising standard.',
    image: '/images/wach2-3d.png',
    specs: [
      { icon: 'compass', label: 'Dual Timezone' },
      { icon: 'diamond', label: 'Sapphire Crystal' },
      { icon: 'gauge', label: '72h Reserve' },
    ],
  },
  {
    id: 3,
    name: 'Heritage',
    subtitle: 'Pilot',
    tagline: 'Where aviation legacy meets Swiss craftsmanship',
    image: '/images/wach3-3d.png',
    specs: [
      { icon: 'compass', label: 'Aviation Scale' },
      { icon: 'shield', label: 'Steel 316L' },
      { icon: 'drop', label: '50m WR' },
    ],
  },
  {
    id: 4,
    name: 'Stealth',
    subtitle: 'Chrono',
    tagline: 'Understated power. Unmatched accuracy Mastery.',
    image: '/images/wach4-3d.png',
    specs: [
      { icon: 'gear', label: 'Automatic' },
      { icon: 'diamond', label: 'AR Coating' },
      { icon: 'gauge', label: '48h Reserve' },
    ],
  },
];

function getIcon(name: string) {
  const cls = 'w-4 h-4 text-rolex-green/50';
  const icons: Record<string, React.ReactNode> = {
    gear: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      </svg>
    ),
    drop: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    shield: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    diamond: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M2 9h20" />
        <path d="M10 3l-4 6 6 13 6-13-4-6" />
      </svg>
    ),
    gauge: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    compass: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % watches.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovering]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: yPos * -8, y: x * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const el = imageRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    el?.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el?.removeEventListener('mousemove', handleMouseMove);
      el?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const current = watches[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24"
    >
      {/* === BACKGROUND === */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #f0f2f5 0%, #e6eaf0 25%, #dfe5ed 50%, #e8ecf1 75%, #f0f2f5 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 75% 50%, rgba(0,96,57,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 20% 60%, rgba(0,96,57,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 50, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-1/3 left-[15%] w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.12) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -35, 45, 0], y: [0, 35, -25, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-1/4 right-[10%] w-[450px] h-[450px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.09) 0%, transparent 70%)' }}
      />

      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,96,57,0.6) 40px, rgba(0,96,57,0.6) 41px)',
        }}
      />

      {/* === MAIN CONTENT === */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-4 lg:gap-12 items-center"
      >
        {/* LEFT: TEXT */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="hidden sm:inline-block text-[0.65rem] tracking-[0.35em] uppercase mb-5 border px-5 py-2 rounded-full border-rolex-green/30 text-rolex-green font-medium">
              Premium Timepieces
            </span>
          </motion.div>

          {/* Dynamic heading + tagline */}
          <div className="relative h-[220px] sm:h-[280px] lg:h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.96 }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <h1 className="font-heading leading-[0.9] mb-3 sm:mb-6">
                  <span
                    className="block text-text-primary font-black"
                    style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', letterSpacing: '-0.02em' }}
                  >
                    {current.name}
                  </span>
                  <span
                    className="block text-rolex-green font-black"
                    style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.01em' }}
                  >
                    {current.subtitle}
                  </span>
                </h1>

                <p
                  className="text-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed"
                  style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)' }}
                >
                  {current.tagline}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="h-[3px] rounded-full bg-gradient-to-r from-rolex-green to-rolex-green-light mt-5 sm:mt-6 lg:mx-0 mx-auto"
                />

                <div className="flex gap-3 sm:gap-5 mt-3 sm:mt-6 lg:justify-start justify-center">
                  {current.specs.map((spec, i) => (
                    <motion.div
                      key={`${current.id}-${i}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                      className="flex items-center gap-2 text-text-secondary/60"
                    >
                      {getIcon(spec.icon)}
                      <span className="text-xs tracking-wider uppercase whitespace-nowrap">{spec.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTAs outside AnimatePresence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4 sm:mt-6 lg:mt-8"
          >
            <a
              href="#contacts"
              className="group inline-flex items-center justify-center gap-2.5 bg-rolex-green text-white px-12 py-5 sm:px-9 sm:py-4 rounded-full text-base sm:text-sm font-semibold tracking-wider transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-rolex-green-light hover:scale-[1.03] hover:shadow-[0_8px_35px_rgba(0,96,57,0.4)] active:scale-95"
            >
              <svg className="w-5 h-5 sm:w-4 sm:h-4 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Order via WhatsApp
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center justify-center gap-2 border-2 border-rolex-green/25 text-rolex-green px-12 py-5 sm:px-9 sm:py-4 rounded-full text-base sm:text-sm font-medium tracking-wider transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-rolex-green/5 hover:border-rolex-green/40 hover:shadow-[0_4px_20px_rgba(0,96,57,0.1)]"
            >
              Explore Collection
            </a>
          </motion.div>


        </div>

        {/* RIGHT: WATCH 3D CARD */}
        <motion.div
          style={{ scale }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Outer glow */}
          <div
            className="absolute -inset-10 rounded-[3rem] blur-3xl transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,96,57,0.15) 0%, transparent 70%)',
              opacity: isHovering ? 0.7 : 0.35,
            }}
          />

          {/* FLOAT WRAPPER */}
          <motion.div
            ref={imageRef}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ perspective: '1500px' }}
            className="relative"
          >
            {/* TILT INNER WRAPPER */}
            <motion.div
              animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                rotateZ: isHovering ? tilt.y * 0.15 : 0,
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 25 }}
              style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
            >
              {/* Main card */}
              <div
                className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[460px] lg:w-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden transition-shadow duration-500"
                style={{
                  background: 'linear-gradient(155deg, #0a1628 0%, #0d1f3c 30%, #152a48 60%, #0f1d32 100%)',
                  boxShadow: isHovering
                    ? '0 35px 110px rgba(10,22,40,0.75), 0 0 90px rgba(0,96,57,0.18), inset 0 1px 0 rgba(255,255,255,0.1)'
                    : '0 25px 80px rgba(10,22,40,0.6), 0 0 60px rgba(0,96,57,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                {/* Gradient border */}
                <div
                  className="absolute inset-0 rounded-[2rem] pointer-events-none z-20"
                  style={{
                    border: '1.5px solid transparent',
                    background: 'linear-gradient(135deg, rgba(0,96,57,0.35), transparent 40%, transparent 60%, rgba(0,96,57,0.2)) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                {/* Inner glow orb */}
                <div
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full opacity-50"
                  style={{
                    background: 'radial-gradient(circle, rgba(30,58,95,0.9) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Watch image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 flex flex-col justify-end"
                  >
                    <Image
                      src={current.image}
                      alt={`Ruslan Aviation ${current.name} ${current.subtitle}`}
                      fill
                      className="object-contain relative z-10 p-6 sm:p-8"
                      style={{
                        filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.55)) drop-shadow(0 8px 20px rgba(0,0,0,0.3))',
                      }}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom reflection */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-[2px] rounded-full opacity-50"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.5), transparent)',
                    filter: 'blur(3px)',
                  }}
                />

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-[1.5px] border-t-[1.5px] border-rolex-green/25 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-[1.5px] border-t-[1.5px] border-rolex-green/25 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-[1.5px] border-b-[1.5px] border-rolex-green/25 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-[1.5px] border-b-[1.5px] border-rolex-green/25 rounded-br-lg" />
              </div>
            </motion.div>

            {/* PLATFORM under card */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[85%] pointer-events-none hidden sm:block">
              <div
                className="w-full h-8 rounded-[50%] mx-auto"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(10,22,40,0.25) 0%, transparent 70%)',
                  filter: 'blur(12px)',
                }}
              />
              <div
                className="w-full h-[3px] rounded-full mx-auto mt-1"
                style={{
                  background: 'linear-gradient(90deg, transparent 5%, rgba(0,96,57,0.15) 30%, rgba(0,96,57,0.25) 50%, rgba(0,96,57,0.15) 70%, transparent 95%)',
                  filter: 'blur(1px)',
                }}
              />
            </div>

            {/* Model badge */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-white/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-rolex-green/10"
                >
                  <p className="text-xs tracking-widest uppercase text-text-tertiary">Model</p>
                  <p className="text-sm font-semibold text-rolex-green tracking-wider">
                    {current.name} {current.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll arrow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-rolex-green/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
