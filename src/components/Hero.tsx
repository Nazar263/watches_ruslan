'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches || connection?.saveData) return;

    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const updateVideoSource = () => {
      const source = mobileQuery.matches
        ? '/videos/hero-mobile.mp4'
        : '/videos/hero-desktop.mp4';

      if (video.getAttribute('src') !== source) {
        video.src = source;
        video.load();
        void video.play().catch(() => {});
      }
    };

    const startTimer = window.setTimeout(updateVideoSource, 900);
    mobileQuery.addEventListener('change', updateVideoSource);
    return () => {
      window.clearTimeout(startTimer);
      mobileQuery.removeEventListener('change', updateVideoSource);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* === FULLSCREEN VIDEO BACKGROUND === */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          preload="none"
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* === DARK OVERLAY === */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* === CONTENT === */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[0.65rem] sm:text-[0.7rem] tracking-[0.4em] uppercase mb-6 sm:mb-8 border border-white/20 px-5 py-2 rounded-full text-white/70 font-medium backdrop-blur-sm bg-white/5">
            premium watches
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
              Ruslan Aviation
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
              Watches
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#catalog"
            className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-3.5 rounded-full text-sm font-medium tracking-wider text-white/70 backdrop-blur-sm bg-white/5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/10 hover:border-white/35 hover:text-white hover:scale-105 active:scale-95"
          >
            Explore Collection
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10"
      >
        <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
