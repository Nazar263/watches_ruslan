'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, margin: '-50px' });

  useEffect(() => {
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
    return unsub;
  }, [rounded, suffix]);

  useEffect(() => {
    if (!isInView) return;
    count.set(0);
    const controls = animate(count, target, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [isInView, count, target]);

  return <div ref={wrapperRef}><span ref={ref}>0{suffix}</span></div>;
}

const stats = [
  { value: 1000, suffix: '+', label: 'Satisfied Clients', icon: 'users' },
  { value: 5, suffix: '', label: 'Years on Market', icon: 'calendar' },
  { value: 12, suffix: '', label: 'Months Warranty', icon: 'shield' },
];

const features = [
  {
    icon: 'shield',
    title: 'Warranty',
    desc: '12 months international warranty included',
  },
  {
    icon: 'box',
    title: 'Premium Packaging',
    desc: 'Firm gift case included with every watch',
  },
];

function FeatureIcon({ name }: { name: string }) {
  const cls = 'w-6 h-6';
  if (name === 'shield') return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function StatIcon({ name }: { name: string }) {
  const cls = 'w-5 h-5';
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
  return (
    <section id="about" className="relative py-16 sm:py-28 lg:py-32 overflow-hidden">
      {/* === BACKGROUND === */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #f0f2f5 0%, #e6eaf0 25%, #dfe5ed 50%, #e8ecf1 75%, #f0f2f5 100%)',
      }} />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 35, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-1/4 left-[8%] w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.12) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -45, 55, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-1/4 right-[5%] w-[450px] h-[450px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.08) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, 30, -25, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
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
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-16 right-[15%] w-24 h-24 border border-rolex-green/5 rounded-full opacity-30 hidden md:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-[12%] w-16 h-16 border border-rolex-green/5 rounded-full opacity-20 hidden md:block"
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - full width */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-px bg-rolex-green/50 mb-6"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-rolex-green text-xs tracking-[0.4em] uppercase font-medium block mb-6"
          >
            Our Heritage
          </motion.span>

          <h2 className="font-heading font-bold whitespace-nowrap" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-text-primary"
            >
              Crafted with{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-gradient relative inline-block group cursor-default"
            >
              Purpose
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-rolex-green to-rolex-green-light rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-text-secondary text-base sm:text-lg leading-relaxed"
              >
                Ruslan Aviation is a company specializing in the sale of quality wristwatches,
                combining modern design, reliability, and affordable prices. We offer a carefully
                curated selection of models for various styles and needs.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-text-secondary text-base sm:text-lg leading-relaxed"
              >
                With high-quality service and fast delivery, we have helped many customers find
                the watch that perfectly complements their style. Positive reviews confirm the
                trust in our brand.
              </motion.p>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
                className="relative group text-center p-5 sm:p-6 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,96,57,0.12)] hover:border-rolex-green/25 transition-all duration-500"
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
                    background: 'radial-gradient(circle at 50% 50%, rgba(0,96,57,0.08) 0%, transparent 70%)',
                  }}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * i, type: 'spring', stiffness: 200 }}
                  className="w-10 h-10 mx-auto mb-3 rounded-xl bg-rolex-green/8 flex items-center justify-center group-hover:bg-rolex-green/15 transition-colors duration-500"
                >
                  <div className="text-rolex-green">
                    <StatIcon name={stat.icon} />
                  </div>
                </motion.div>

                <div className="font-heading text-[1.75rem] sm:text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-tertiary text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] uppercase leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features row */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
              className="relative group p-7 sm:p-8 rounded-2xl backdrop-blur-xl bg-white/45 border border-white/60 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,96,57,0.1)] hover:border-rolex-green/25 transition-all duration-500"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '1.5px solid transparent',
                  background: 'linear-gradient(135deg, rgba(0,96,57,0.3), transparent 40%, transparent 60%, rgba(0,96,57,0.15)) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(0,96,57,0.06) 0%, transparent 60%)',
                }}
              />

              <div className="relative flex items-start gap-5">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-xl bg-rolex-green/8 flex items-center justify-center flex-shrink-0 group-hover:bg-rolex-green/15 transition-colors duration-500"
                >
                  <div className="text-rolex-green">
                    <FeatureIcon name={f.icon} />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-text-primary font-semibold text-lg mb-1.5">{f.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
