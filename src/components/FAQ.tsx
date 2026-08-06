'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Are your watches authentic / original?',
    a: 'Yes. Every timepiece we offer is 100% authentic and sourced through verified, authorized channels. Each watch comes with proof of authenticity.',
  },
  {
    q: 'Do you provide a warranty on your watches?',
    a: 'Yes, every watch is covered by an international warranty. Warranty terms and duration vary by brand and model — full details are shared with you during your WhatsApp consultation.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfer, major credit/debit cards, and cryptocurrency (BTC/USDT). Payment options are confirmed individually with our consultant via WhatsApp.',
  },
  {
    q: 'How does delivery work, and how long does it take?',
    a: 'We offer secure, insured worldwide shipping. Delivery typically takes 3–7 business days depending on your location, with full tracking provided.',
  },
  {
    q: 'Can I return or exchange a watch after purchase?',
    a: 'Yes, we offer a 14-day return window for unworn items in original condition with all documentation and packaging intact.',
  },
  {
    q: 'How do I place an order?',
    a: 'Simply click the "Order" button on any watch you like, and we\'ll guide you through the next steps to confirm your purchase.',
  },
];

function FAQItem({ faq, index, isLast }: { faq: typeof faqs[0]; index: number; isLast: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`group ${!isLast ? 'border-b border-white/30' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-6 sm:py-7 text-left group/btn"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Animated number */}
          <span className="text-rolex-green/30 font-heading text-sm font-bold tracking-wider flex-shrink-0 group-hover/btn:text-rolex-green/60 transition-colors duration-500">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-heading font-semibold text-base sm:text-lg transition-colors duration-300 ${open ? 'text-rolex-green' : 'text-text-primary group-hover/btn:text-rolex-green'}`}>
            {faq.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 ml-4"
        >
          <svg
            className="w-5 h-5 text-rolex-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-10 pb-6 sm:pb-7 pr-4">
              <div className="relative pl-4 border-l-2 border-rolex-green/20">
                <p className="text-text-secondary leading-relaxed text-sm sm:text-[0.95rem]">
                  {faq.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 sm:py-32 overflow-hidden">
      {/* === BACKGROUND === */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #f0f2f5 0%, #e6eaf0 25%, #dfe5ed 50%, #e8ecf1 75%, #f0f2f5 100%)',
      }} />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 55, -35, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 23, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-1/4 left-[8%] w-[480px] h-[480px] rounded-full blur-3xl opacity-45"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.1) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -40, 50, 0], y: [0, 35, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-1/3 right-[5%] w-[420px] h-[420px] rounded-full blur-3xl opacity-35"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.08) 0%, transparent 70%)' }}
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
        transition={{ duration: 58, repeat: Infinity, ease: 'linear' }}
        className="absolute top-16 right-[12%] w-20 h-20 border border-rolex-green/5 rounded-full opacity-25"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-[10%] w-14 h-14 border border-rolex-green/5 rounded-full opacity-20"
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-px bg-rolex-green/50 mx-auto mb-6"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-rolex-green text-xs tracking-[0.4em] uppercase font-medium block mb-6"
          >
            Support
          </motion.span>
          <h2 className="font-heading font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-text-primary"
            >
              Frequently Asked{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-gradient relative inline-block group cursor-default"
            >
              Questions
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-rolex-green to-rolex-green-light rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.span>
          </h2>
        </motion.div>

        {/* FAQ Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Glassmorphism container */}
          <div className="relative backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl px-6 sm:px-10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,96,57,0.08)] transition-shadow duration-700 overflow-hidden">
            {/* Gradient border overlay */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                border: '1.5px solid transparent',
                background: 'linear-gradient(135deg, rgba(0,96,57,0.2), transparent 40%, transparent 60%, rgba(0,96,57,0.1)) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(0,96,57,0.05) 0%, transparent 50%)',
              }}
            />

            <div className="relative">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} isLast={i === faqs.length - 1} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom hint */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-center"
        >
          <p className="text-text-tertiary text-sm tracking-wide">
            Have more questions? Contact us via{' '}
            <span className="text-rolex-green font-medium">WhatsApp</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
