'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { value: '1,000+', label: 'Satisfied Clients' },
  { value: '5', label: 'Years on Market' },
  { value: '6', label: 'Year International Warranty' },
];

const story = [
  'Ruslan Aviation brings together experience in aviation engineering and a focus on precision, reliability, and innovation. That perspective informs the drone systems, aviation components, and timepieces we develop.',
  'Our watches are made for people who appreciate considered design, premium materials, and dependable performance. Every timepiece is carefully inspected and backed by a 6-Year International Warranty.',
];

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const hasPlus = value.includes('+');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setCount(numericValue);
      return;
    }

    let start = 0;
    let frame = 0;
    const duration = 1400;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 4)) * numericValue));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, numericValue, reducedMotion]);

  return <span ref={ref}>{count.toLocaleString()}{hasPlus ? '+' : ''}</span>;
}

function FounderStoryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(12, 18, 15, 0.68)', backdropFilter: 'blur(5px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[680px] max-h-[85vh] overflow-y-auto rounded-2xl border border-[#006039]/20 bg-[#FBFAF7] p-7 sm:p-10 shadow-[0_28px_100px_rgba(0,0,0,0.28)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#3F4943] transition-colors hover:bg-[#006039]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006039]"
              aria-label="Close story"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            </button>

            <p className="mb-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#006039]">The founder&apos;s story</p>
            <h3 className="mb-6 max-w-[520px] pr-8 font-heading text-3xl leading-tight text-[#1A1A1A] sm:text-4xl">Engineering the future of aviation. Crafting the future of time.</h3>
            <div className="space-y-4 text-[15px] leading-7 text-[#525A54]">
              <p>Ruslan Aviation is more than a watch company. We design and develop advanced drone systems, premium aviation components, and aviation-inspired timepieces. Our experience in aviation engineering influences every product we create.</p>
              <p>The same commitment to precision, reliability, and innovation that guides our aviation technology also inspires every Ruslan Aviation watch.</p>
              <p>Our timepieces are designed for people who value exceptional craftsmanship, refined design, and dependable performance. Every genuine Ruslan Aviation watch is backed by a 6-Year International Warranty.</p>
            </div>
            <div className="mt-8 border-t border-[#006039]/20 pt-5">
              <p className="font-heading text-xl text-[#006039]">Ruslan Krupchenko</p>
              <p className="mt-1 text-sm text-[#68716A]">Founder &amp; Chief Executive Officer</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="site-paper-atmosphere relative isolate overflow-hidden"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-12 h-[32rem] w-[32rem] rounded-full bg-[#006039]/[0.035] blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#D4AF37]/[0.035] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.86fr] lg:gap-20">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 flex items-center gap-3 font-montserrat text-[11px] font-semibold uppercase tracking-[0.24em] text-[#006039] sm:text-xs">
                <span className="h-px w-9 bg-[#006039]/50" /> A founder-led aviation company
              </p>
              <h2 className="max-w-[720px] font-heading text-[clamp(2.8rem,5vw,5.2rem)] font-bold leading-[0.98] tracking-[-0.035em] text-[#1A1A1A]">
                <span className="block">Built on a</span>
                <span className="block text-[#006039]">pilot&apos;s mindset.</span>
              </h2>
              <div className="mt-7 max-w-[650px] space-y-4 text-[15px] leading-[1.85] text-[#4C554F] sm:text-base">
                {story.map((paragraph, index) => (
                  <motion.p
                    key={paragraph}
                    initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: reducedMotion ? 0 : 0.12 + index * 0.12 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.blockquote
                initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.22 }}
                className="mt-8 border-l-2 border-[#006039] pl-5"
              >
                <p className="font-heading text-xl italic leading-snug text-[#27342C] sm:text-2xl">&ldquo;Engineering the Future of Aviation. Crafting the Future of Time.&rdquo;</p>
                <footer className="mt-3 font-montserrat text-[10px] font-semibold uppercase tracking-[0.2em] text-[#69736C]">Ruslan Krupchenko <span className="mx-1 text-[#006039]/50">/</span> Founder</footer>
              </motion.blockquote>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#006039]/15 pt-6 text-[13px] text-[#4C554F]">
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#006039]" />Precision inspected</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#006039]" />Premium materials</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#006039]" />6-year warranty</span>
              </div>
            </motion.div>

            <motion.figure
              initial={reducedMotion ? false : { opacity: 0, scale: 0.97, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[510px]"
            >
              <motion.div
                animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
                transition={reducedMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] border border-[#006039]/15 sm:-inset-6" />
                <div className="absolute -right-3 -top-3 z-10 hidden h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#F8F7F4] text-[#006039] shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:flex">
                  <svg width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <path d="M4 24.5 17.5 20 12 17l23-8-11 21-2.5-7-11 7L15 25z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#E7E6DF] shadow-[0_24px_65px_rgba(20,41,29,0.16)]">
                  <Image
                    src="/images/founder-portrait-4k.jpg"
                    alt="Ruslan Krupchenko, founder of Ruslan Aviation, beside an aircraft"
                    fill
                    priority={false}
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover object-[50%_42%]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0B1810]/75 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75">Aviation • Precision • Purpose</p>
                    <figcaption className="mt-2 flex items-end justify-between gap-3">
                      <span className="font-heading text-2xl leading-none text-white sm:text-3xl">Ruslan Krupchenko</span>
                      <span className="mb-0.5 whitespace-nowrap border-l border-white/40 pl-3 font-montserrat text-[9px] uppercase tracking-[0.15em] text-white/80">Founder</span>
                    </figcaption>
                  </div>
                </div>
              </motion.div>
              <p className="mt-5 text-center font-heading text-sm italic text-[#68716A]">Inspired by the world of flight.</p>
            </motion.figure>
          </div>

          <div className="mt-16 border-y border-[#006039]/15 py-7 sm:mt-20 sm:py-9">
            <div className="grid grid-cols-1 divide-y divide-[#006039]/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="flex items-center justify-between gap-5 px-1 py-5 sm:justify-center sm:px-6 sm:py-2"
                >
                  <span className="font-heading text-4xl font-semibold tracking-tight text-[#006039] sm:text-5xl"><AnimatedCounter value={stat.value} /></span>
                  <span className="max-w-[140px] font-montserrat text-[10px] font-medium uppercase leading-relaxed tracking-[0.14em] text-[#59635B] sm:text-xs">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full border border-[#006039]/50 px-6 py-3 font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-[#006039] transition-colors hover:bg-[#006039] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006039]"
            >
              Read our story
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      <FounderStoryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
