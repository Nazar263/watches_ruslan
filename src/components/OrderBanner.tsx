'use client';

import { motion } from 'framer-motion';

export default function OrderBanner() {
  return (
    <section id="contacts" className="relative py-28 sm:py-32 overflow-hidden">
      {/* === BACKGROUND === */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #f0f2f5 0%, #e6eaf0 25%, #dfe5ed 50%, #e8ecf1 75%, #f0f2f5 100%)',
      }} />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 55, -35, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-1/4 left-[8%] w-[500px] h-[500px] rounded-full blur-3xl opacity-45"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.11) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -40, 50, 0], y: [0, 35, -25, 0] }}
        transition={{ duration: 27, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-1/4 right-[5%] w-[450px] h-[450px] rounded-full blur-3xl opacity-35"
        style={{ background: 'radial-gradient(circle, rgba(0,96,57,0.08) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, 30, -25, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
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
        className="absolute top-16 right-[12%] w-20 h-20 border border-rolex-green/5 rounded-full opacity-25 hidden md:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-[10%] w-14 h-14 border border-rolex-green/5 rounded-full opacity-20 hidden md:block"
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            Get in Touch
          </motion.span>
          <h2 className="font-heading font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-text-primary"
            >
              Ready to Find Your{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-gradient relative inline-block group cursor-default"
            >
              Perfect Watch
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-rolex-green to-rolex-green-light rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-text-primary"
            >
              ?
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto mb-12"
          >
            Contact our manager directly via WhatsApp, Instagram, or Facebook.
            We&apos;ll help you choose the perfect timepiece.
          </motion.p>
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="https://wa.me/18602054435"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-shadow duration-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </motion.a>
          <motion.a
            href="https://www.instagram.com/ruslan_helicopters?igsh=YXo4bW1sYmx2bGVy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider hover:shadow-[0_8px_30px_rgba(253,29,29,0.3)] transition-shadow duration-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </motion.a>
          <motion.a
            href="https://www.facebook.com/share/g/1Bgu7mx7YP/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center justify-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider hover:shadow-[0_8px_30px_rgba(24,119,242,0.35)] transition-shadow duration-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </motion.a>
        </motion.div>

        {/* Phone Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="tel:+18602054435"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative group inline-flex items-center gap-3 backdrop-blur-xl bg-white/50 border border-white/60 px-7 py-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_50px_rgba(0,96,57,0.1)] hover:border-rolex-green/25 transition-all duration-500"
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                border: '1.5px solid transparent',
                background: 'linear-gradient(135deg, rgba(0,96,57,0.3), transparent 40%, transparent 60%, rgba(0,96,57,0.15)) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <svg className="w-5 h-5 text-rolex-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-text-secondary text-sm font-medium">
              +1 (860) 205-4435
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
