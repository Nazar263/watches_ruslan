'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const deliveryItems = [
  {
    icon: 'globe',
    title: 'Worldwide Shipping',
    desc: 'Secure, insured worldwide delivery with full tracking provided.',
  },
  {
    icon: 'payment',
    title: 'Flexible Payment',
    desc: 'Bank transfer, credit/debit cards, or cryptocurrency (BTC/USDT).',
  },
  {
    icon: 'returns',
    title: '14-Day Returns',
    desc: 'Return window for unworn items in original condition with documentation.',
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 80,
    rotateX: 12,
    scale: 0.85,
    filter: 'blur(8px)',
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.4,
      delay: 0.15 + i * 0.18,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      filter: { duration: 1.0, delay: 0.15 + i * 0.18 },
    },
  }),
};

function DeliveryIcon({ name }: { name: string }) {
  const cls = 'w-7 h-7';
  if (name === 'globe') return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  if (name === 'payment') return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function Delivery() {
  return (
    <section id="delivery" className="relative py-28 sm:py-32 overflow-hidden">
      {/* === BACKGROUND === */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #f0f2f5 0%, #e6eaf0 25%, #dfe5ed 50%, #e8ecf1 75%, #f0f2f5 100%)',
      }} />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 50, -35, 0], y: [0, -45, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-1/3 right-[10%] w-[450px] h-[450px] rounded-full blur-3xl opacity-45"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.11) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -40, 50, 0], y: [0, 35, -25, 0] }}
        transition={{ duration: 27, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full blur-3xl opacity-35"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.08) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, 25, -30, 0], y: [0, -15, 35, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.06) 0%, transparent 70%)' }}
      />

      {/* Diagonal lines */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,96,57,0.6) 40px, rgba(0,96,57,0.6) 41px)',
      }} />

      {/* Decorative accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rolex-green/25 to-transparent origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rolex-green/20 to-transparent origin-right"
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-[12%] w-20 h-20 border border-rolex-green/5 rounded-full opacity-25 hidden md:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-16 right-[15%] w-14 h-14 border border-rolex-green/5 rounded-full opacity-20 hidden md:block"
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" style={{ perspective: '1000px' }}>
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-px bg-rolex-green/50 mx-auto mb-6"
            />
            <motion.span
              initial={{ opacity: 0, y: 20, letterSpacing: '0.8em' }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: '0.4em' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-rolex-green text-xs uppercase font-medium block mb-6"
            >
              Shipping & Payment
            </motion.span>
            <h2 className="font-heading font-bold" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
              <motion.span
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-text-primary inline-block"
                style={{ transformOrigin: 'bottom center' }}
              >
                Express{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient relative inline-block group cursor-default"
                style={{ transformOrigin: 'bottom center' }}
              >
                Delivery
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-rolex-green to-rolex-green-light rounded-full origin-left"
                />
              </motion.span>
            </h2>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8" style={{ perspective: '1200px' }}>
          {deliveryItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -12, rotateX: -3, scale: 1.02, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
              className="relative group text-center p-8 sm:p-10 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,96,57,0.12)] hover:border-rolex-green/25 transition-shadow duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '1.5px solid transparent',
                  background: 'linear-gradient(135deg, rgba(0,96,57,0.35), transparent 40%, transparent 60%, rgba(0,96,57,0.2)) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 30%, rgba(0,96,57,0.08) 0%, transparent 60%)',
                }}
              />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.18, type: 'spring', stiffness: 180, damping: 12 }}
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="w-16 h-16 rounded-2xl bg-rolex-green/8 flex items-center justify-center mx-auto mb-6 text-rolex-green group-hover:bg-rolex-green/15 transition-colors duration-500"
              >
                <DeliveryIcon name={item.icon} />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-xl font-semibold text-text-primary mb-3"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="text-text-secondary text-sm leading-relaxed max-w-[280px] mx-auto"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-center"
        >
          <p className="text-text-tertiary text-sm tracking-wide">
            Delivery cost and payment details are confirmed individually with our consultant via{' '}
            <span className="text-rolex-green font-medium">WhatsApp</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
