'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Let's create something exceptional"
        subtitle="Whether you're planning a boutique hotel, restaurant, or residential project, we'd love to hear from you."
        fullHeight={false}
        backgroundUrl="/project-banners/contact-banner.jpg"
      />

      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Get in Touch</p>
              <h2 className="mb-8">Start a Project</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-medium mb-8">Contact Information</h3>
                <div className="mb-6">
                  <p className="text-lg font-medium">Design Oltre Orizzonte</p>
                  <p className="text-[var(--charcoal)]/70">Hospitality, Interior Design and Turnkey Solutions</p>
                  <p className="text-[var(--charcoal)]/80 mt-2">Harain Murthy — Principal Designer (Milan, Italy)</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[var(--muted-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--charcoal)]/60 mb-2">Email</p>
                      <a
                        href="mailto:harain.designoltre@gmail.com"
                        className="hover:text-[var(--muted-gold)] transition-colors"
                      >
                        harain.designoltre@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[var(--muted-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--charcoal)]/60 mb-2">Phone</p>
                      <div className="space-y-1">
                        <a href="tel:+919590194154" className="hover:text-[var(--muted-gold)] transition-colors">+91 95901 94154</a>
                        <br />
                        <a href="tel:+919986820912" className="hover:text-[var(--muted-gold)] transition-colors">+91 99868 20912</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[var(--muted-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--charcoal)]/60 mb-2">Studio</p>
                      <p className="text-[var(--charcoal)]/80">
                        # Survey No. 37/03, Munikempanna Layout
                        <br />
                        1st Cross, Dasarahalli Main Road,
                        <br />
                        Hebbal, Bangalore 560 024
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center border border-[var(--warm-stone)] hover:border-[var(--muted-gold)] hover:bg-[var(--muted-gold)] hover:text-[var(--off-white)] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://in.linkedin.com/in/harain-murthy-b5669944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-[var(--warm-stone)] hover:border-[var(--muted-gold)] hover:bg-[var(--muted-gold)] hover:text-[var(--off-white)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="border-t border-[var(--warm-stone)] pt-8">
                <h3 className="text-xl font-medium mb-4">Press & Collaborations</h3>
                <p className="text-[var(--charcoal)]/70 mb-4">
                  For media inquiries, speaking engagements, or collaboration opportunities:
                </p>
                <a
                  href="mailto:harain.designoltre@gmail.com"
                  className="text-[var(--muted-gold)] hover:underline"
                >
                  harain.designoltre@gmail.com
                </a>
              </div>

              <div className="border-t border-[var(--warm-stone)] pt-8">
                <h3 className="text-xl font-medium mb-4">Newsletter</h3>
                <p className="text-[var(--charcoal)]/70 mb-4">
                  Subscribe to receive project updates, design insights, and studio news.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 bg-transparent border border-[var(--warm-stone)] focus:border-[var(--muted-gold)] focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[var(--charcoal)] text-[var(--off-white)] hover:bg-[var(--muted-gold)] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-[var(--warm-stone)]/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Location</p>
            <h2 className="mb-8">Visit Our Studio</h2>
            <div className="aspect-[21/9] bg-[var(--warm-stone)] flex items-center justify-center">
              <p className="text-[var(--charcoal)]/40">Map placeholder - Lower Parel, Mumbai</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
