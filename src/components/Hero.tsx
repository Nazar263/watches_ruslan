'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* === FULLSCREEN VIDEO BACKGROUND === */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:[filter:blur(0px)]"
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        </video>
      </div>

      {/* === DARK OVERLAY === */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* === CONTENT === */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="inline-block text-[0.65rem] sm:text-[0.7rem] tracking-[0.4em] uppercase mb-6 sm:mb-8 border border-white/20 px-5 py-2 rounded-full text-white/70 font-medium backdrop-blur-sm bg-white/5">
              Ruslan Aviation
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-heading leading-[1.2] mb-5 sm:mb-6">
            <span
              className="block text-white font-black"
              style={{
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 40px rgba(0,0,0,0.4)',
              }}
            >
             Precision
            </span>
            <span
              className="block font-black"
              style={{
                fontSize: 'clamp(2.4rem, 8vw, 5.5rem)',
                letterSpacing: '-0.01em',
                background: 'linear-gradient(135deg, #4ade80, #22c55e, #16a34a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 15px rgba(0,0,0,0.3))',
              }}
            >
Timepieces
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white/65 max-w-md mx-auto leading-relaxed mb-8 sm:mb-10"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            textShadow: '0 1px 10px rgba(0,0,0,0.3)',
          }}
        >
          Born in the sky. Built for the wrist.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacts"
            className="group inline-flex items-center justify-center gap-2.5 bg-rolex-green text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wider transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-rolex-green-light hover:scale-[1.03] hover:shadow-[0_8px_35px_rgba(0,96,57,0.4)] active:scale-95"
          >
            <svg className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.69 0-3.27-.46-4.62-1.26l-.33-.2-2.87.85.85-2.87-.2-.33A7.963 7.963 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            Order via WhatsApp
          </a>
          <a
            href="#catalog"
            className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-3.5 rounded-full text-sm font-medium tracking-wider text-white/70 backdrop-blur-sm bg-white/5 transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-white/10 hover:border-white/35 hover:text-white active:scale-95"
          >
            Explore Collection
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
