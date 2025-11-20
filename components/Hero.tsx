'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    href: string;
  };
  fullHeight?: boolean;
  backgroundUrl?: string;
}

export default function Hero({ title, subtitle, cta, fullHeight = true, backgroundUrl }: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        fullHeight ? 'min-h-screen' : 'min-h-[70vh]'
      } px-6 lg:px-8`}
    >
      {backgroundUrl && (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${backgroundUrl})` }}
          />
          <div className="absolute inset-0 bg-[var(--charcoal)]/60 backdrop-blur-[2px]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/60" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-4xl text-center px-2 sm:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight ${backgroundUrl ? 'text-[var(--off-white)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]' : ''}`}>
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className={`mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${
              backgroundUrl ? 'text-[var(--off-white)]/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]' : 'text-[var(--charcoal)]/70'
            }`}
          >
            {subtitle}
          </motion.p>
        )}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-10"
          >
            <Link
              href={cta.href}
              className={`inline-flex items-center gap-2 px-8 py-4 transition-colors duration-300 ${
                backgroundUrl
                  ? 'bg-[var(--off-white)] text-[var(--charcoal)] hover:bg-[var(--muted-gold)] hover:text-[var(--off-white)]'
                  : 'bg-[var(--charcoal)] text-[var(--off-white)] hover:bg-[var(--muted-gold)]'
              }`}
            >
              {cta.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
