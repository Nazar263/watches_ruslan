'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from 'framer-motion';

const features = [
  {
    title: 'Precision Engineering',
    desc: 'Advanced specifications and rigorous testing',
  },
  {
    title: 'Premium Craftsmanship',
    desc: 'Handcrafted with finest materials',
  },
  {
    title: 'Built for Reliability',
    desc: 'Engineered to perform for years to come',
  },
  {
    title: '6-Year International Warranty',
    desc: 'Our confidence in every timepiece',
  },
];

const callouts = [
  { label: 'Precision Engineering', side: 'top-left' as const },
  { label: 'Premium Materials', side: 'top-right' as const },
  { label: 'Sapphire Crystal', side: 'bottom-right' as const },
  { label: 'Reliable Performance', side: 'bottom-left' as const },
];

function BlueprintGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-grid)" />
    </svg>
  );
}

function EngineeringLines() {
  const lines = [
    { x1: '50%', y1: '50%', x2: '10%', y2: '10%' },
    { x1: '50%', y1: '50%', x2: '90%', y2: '10%' },
    { x1: '50%', y1: '50%', x2: '90%', y2: '90%' },
    { x1: '50%', y1: '50%', x2: '10%', y2: '90%' },
    { x1: '50%', y1: '50%', x2: '5%', y2: '50%' },
    { x1: '50%', y1: '50%', x2: '95%', y2: '50%' },
    { x1: '50%', y1: '50%', x2: '50%', y2: '5%' },
    { x1: '50%', y1: '50%', x2: '50%', y2: '95%' },
  ];
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke="rgba(0,0,0,0.07)"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      ))}
    </svg>
  );
}

function CalloutLine({
  label,
  side,
  containerSize,
}: {
  label: string;
  side: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  containerSize: number;
}) {
  const cx = containerSize / 2;
  const cy = containerSize / 2;
  const offset = containerSize * 0.36;
  const textOffset = containerSize * 0.10;

  let endX: number, endY: number, textX: number, textY: number, textAnchor: 'start' | 'end';

  switch (side) {
    case 'top-left':
      endX = cx - offset; endY = cy - offset;
      textX = endX - textOffset; textY = endY - textOffset; textAnchor = 'end';
      break;
    case 'top-right':
      endX = cx + offset; endY = cy - offset;
      textX = endX + textOffset; textY = endY - textOffset; textAnchor = 'start';
      break;
    case 'bottom-right':
      endX = cx + offset; endY = cy + offset;
      textX = endX + textOffset; textY = endY + textOffset; textAnchor = 'start';
      break;
    case 'bottom-left':
      endX = cx - offset; endY = cy + offset;
      textX = endX - textOffset; textY = endY + textOffset; textAnchor = 'end';
      break;
  }

  return (
    <g className="group cursor-default transition-all duration-300">
      <line
        x1={cx} y1={cy} x2={endX} y2={endY}
        stroke="rgba(0,96,57,0.25)"
        strokeWidth="1"
        className="transition-all duration-300 group-hover:stroke-[#D4AF37] group-hover:stroke-[1.5]"
      />
      <circle
        cx={endX} cy={endY} r="2.5"
        fill="rgba(0,96,57,0.4)"
        className="transition-all duration-300 group-hover:fill-[#D4AF37]"
      />
      <circle
        cx={cx} cy={cy} r="3"
        fill="rgba(0,96,57,0.3)"
      />
      <text
        x={textX} y={textY}
        textAnchor={textAnchor}
        fill="#888888"
        fontSize="11"
        fontFamily="Inter, sans-serif"
        className="transition-all duration-300 group-hover:fill-[#D4AF37]"
      >
        {label}
      </text>
    </g>
  );
}

function BlueprintComposition({ parallaxY }: { parallaxY: MotionValue<number> }) {
  const containerSize = 440;

  return (
    <motion.div
      style={{ y: parallaxY }}
      className="relative w-full max-w-[440px] mx-auto aspect-square"
    >
      <div className="relative w-full h-full">
        {/* Glow pulse background */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 55%, rgba(0,96,57,0.04) 0%, transparent 50%)',
          }}
        />
        <BlueprintGrid />
        <EngineeringLines />

        {/* Animated decorative circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[92%] h-[92%] rounded-full" style={{ border: '2px solid rgba(0,0,0,0.12)' }} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[72%] h-[72%] rounded-full" style={{ border: '1.5px dashed rgba(0,0,0,0.10)' }} />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[55%] h-[55%] rounded-full" style={{ border: '1.5px solid rgba(0,0,0,0.08)' }} />
        </motion.div>

        {/* SVG callouts with overflow visible */}
        <svg
          className="absolute inset-0 w-full h-full hidden sm:block"
          viewBox={`0 0 ${containerSize} ${containerSize}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          {callouts.map((c) => (
            <CalloutLine
              key={c.side}
              label={c.label}
              side={c.side}
              containerSize={containerSize}
            />
          ))}
        </svg>

        {/* Watch image + animated float + glow */}
        <div className="absolute inset-0 flex items-end justify-center pb-[12%] pointer-events-none">
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[68%] h-[68%] flex items-center justify-center"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: '0 0 100px rgba(0,96,57,0.10), 0 0 50px rgba(0,96,57,0.05)',
              }}
            />
            <img
              src="/images/wach1-3d.png"
              alt="Ruslan Aviation Watch"
              className="relative w-full h-full object-contain"
              style={{ filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.10))' }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-[700px] max-h-[85vh] overflow-y-auto rounded-lg"
            style={{ backgroundColor: '#121212', padding: '40px', border: '1px solid #006039' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-text-tertiary hover:text-rolex-green transition-colors duration-300"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2
              className="font-heading font-bold text-white mb-6"
              style={{ fontSize: 'clamp(28px, 5vw, 36px)', lineHeight: 1.3 }}
            >
              Our Story
            </h2>

            <div className="space-y-4 mb-8" style={{ color: '#B0B0B0', fontSize: '15px', lineHeight: 1.8, fontFamily: 'Inter, sans-serif' }}>
              <p>
                Ruslan Aviation is more than a watch company. We design and develop advanced
                drone systems, premium aviation components, and luxury aviation-inspired
                timepieces. Our experience in aviation engineering influences every product
                we create.
              </p>
              <p>
                The same commitment to precision, reliability, and innovation that guides the
                development of our aviation technology also inspires every Ruslan Aviation
                Luxury Watch.
              </p>
              <p>
                Our timepieces are designed for those who appreciate exceptional craftsmanship,
                refined design, and dependable performance. Every watch is carefully created
                using premium materials and meticulous attention to detail, reflecting the
                standards expected in the aviation industry.
              </p>
              <p>
                Inspired by the world of flight, our watches represent confidence, performance,
                and the pursuit of excellence. Every genuine Ruslan Aviation Luxury Watch is
                backed by our 6-Year International Warranty, demonstrating our confidence in
                every timepiece we produce.
              </p>
              <p>
                As Ruslan Aviation continues to grow, we remain dedicated to advancing drone
                technology, manufacturing premium aviation components, and creating luxury
                watches that embody the precision and spirit of aviation.
              </p>
            </div>

            <div className="border-t border-rolex-green/30 pt-6 mt-8">
              <p style={{ color: '#B0B0B0', fontSize: '14px', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
                The Founder
              </p>
              <p className="font-semibold text-rolex-green" style={{ fontSize: '20px', fontFamily: 'Montserrat, sans-serif' }}>
                Ruslan Krupchenko
              </p>
              <p style={{ color: '#999999', fontSize: '13px', marginBottom: '16px', fontFamily: 'Inter, sans-serif' }}>
                Founder &amp; Chief Executive Officer
              </p>
              <p className="italic" style={{ color: '#B0B0B0', fontSize: '16px', lineHeight: 1.6, fontFamily: 'Playfair Display, serif' }}>
                &ldquo;Engineering the Future of Aviation. Crafting the Future of Time.&rdquo;
              </p>
            </div>

            <div className="border-t border-rolex-green/30 mt-8 pt-6 text-center">
              <p
                className="font-heading font-bold"
                style={{ color: '#006039', fontSize: '18px', lineHeight: 1.5 }}
              >
                Inspired by Aviation. Engineered for Precision.<br />Crafted for Life.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const stats = [
  { value: '1,000+', label: 'Satisfied Clients', icon: 'users' },
  { value: '5', label: 'Years on Market', icon: 'calendar' },
  { value: '6', label: 'Year Warranty', icon: 'shield' },
];

function StatIcon({ name }: { name: string }) {
  const cls = 'w-6 h-6';
  if (name === 'users') return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
  if (name === 'calendar') return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{ backgroundColor: '#F8F7F4' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(0,96,57,0.03) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-7 lg:px-10 py-16 sm:py-20 lg:py-[80px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-start">
            {/* LEFT: Text block */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[55%]"
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, letterSpacing: '8px' }}
                whileInView={{ opacity: 1, letterSpacing: '2px' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="uppercase"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  color: '#006039',
                  marginBottom: '12px',
                }}
              >
                Ruslan Aviation Watches
              </motion.p>

              {/* Heading — word by word */}
              <h2
                className="font-heading font-bold"
                style={{
                  color: '#1A1A1A',
                  fontSize: 'clamp(32px, 4.5vw, 52px)',
                  lineHeight: 1.2,
                  marginBottom: '24px',
                }}
              >
                {['Precision.', 'Innovation.', 'Built', 'for', 'the', 'Future.'].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>

              {/* Paragraphs with stagger */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{ color: '#4A4A4A', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}
              >
                At Ruslan Aviation Watches, every timepiece is designed with precision
                engineering, premium materials, and exceptional craftsmanship. We proudly
                stand behind the quality of every genuine Ruslan Aviation Watch with a
                6-Year International Warranty, reflecting our confidence in the durability
                and reliability of our products.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.45 }}
                style={{ color: '#4A4A4A', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}
              >
                Every watch undergoes rigorous quality inspection and performance testing
                before it reaches your wrist.
              </motion.p>

              {/* Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" style={{ marginBottom: '16px' }}>
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + 0.1 * i }}
                    whileHover={{ x: 4 }}
                    className="border-l-[3px] border-rolex-green relative group"
                    style={{ padding: '16px 0 16px 16px' }}
                  >
                    <div className="absolute left-0 top-0 w-[3px] h-0 bg-rolex-green group-hover:h-full transition-all duration-500" />
                    <p
                      className="font-semibold"
                      style={{ color: '#1A1A1A', fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.5, marginBottom: '4px' }}
                    >
                      {f.title}
                    </p>
                    <p style={{ color: '#6B6B6B', fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.6 }}>
                      {f.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: Blueprint composition */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full lg:w-[45%] flex items-center justify-center"
            >
              <BlueprintComposition parallaxY={parallaxY} />
            </motion.div>
          </div>

          {/* Statistics — full width */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-[900px] mx-auto"
            style={{ marginTop: '16px', marginBottom: '32px' }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
                className="relative group text-center p-6 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,96,57,0.12)] hover:border-rolex-green/25 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: '1.5px solid transparent',
                    background: 'linear-gradient(135deg, rgba(0,96,57,0.35), transparent 40%, transparent 60%, rgba(0,96,57,0.2)) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0,96,57,0.08) 0%, transparent 70%)',
                  }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * i, type: 'spring', stiffness: 200 }}
                  className="w-12 h-12 mx-auto mb-4 rounded-xl bg-rolex-green/8 flex items-center justify-center group-hover:bg-rolex-green/15 transition-colors duration-500"
                >
                  <div className="text-rolex-green">
                    <StatIcon name={s.icon} />
                  </div>
                </motion.div>
                <p
                  className="font-heading font-bold text-rolex-green mb-1"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.2 }}
                >
                  {s.value}
                </p>
                <p style={{ color: '#6B6B6B', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button — full width centered */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setModalOpen(true)}
              className="rounded cursor-pointer transition-all duration-300"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                padding: '12px 32px',
                border: '1px solid #006039',
                background: 'transparent',
                color: '#006039',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#006039';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,96,57,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#006039';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
