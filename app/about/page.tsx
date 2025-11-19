'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Image from 'next/image';

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We begin by understanding your vision, site constraints, budget, and timeline. Site visits, stakeholder interviews, and market analysis inform our approach.',
  },
  {
    step: '02',
    title: 'Concept Development',
    description: 'Our team develops design concepts that balance aesthetic ambition with operational requirements. Mood boards, sketches, and 3D visualizations bring ideas to life.',
  },
  {
    step: '03',
    title: 'Design & Documentation',
    description: 'Detailed design development with material selection, spatial planning, and technical drawings. All documentation prepared for smooth permitting and construction.',
  },
  {
    step: '04',
    title: 'Procurement & Delivery',
    description: 'FF&E sourcing, vendor coordination, and quality control. We manage the entire supply chain to ensure timely delivery and installation within budget.',
  },
];

const clients = [
  'Taj Hotels',
  'The Oberoi Group',
  'ITC Hotels',
  'Leela Palaces',
  'Hyatt Regency',
  'Marriott International',
  'Private Residences',
  'Boutique Hospitality',
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Studio committed to craft, detail, and delivery"
        subtitle="Founded in 2018, H9Y Studio brings together architecture, interior design, and turnkey project management. We specialize in hospitality environments where design directly impacts guest experience and operational success."
        fullHeight
        backgroundUrl="/project-banners/about-banner.jpg"
      />

      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] bg-[var(--warm-stone)]"
            >
              <Image
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="H9Y Studio workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Our Story</p>
              <h2 className="mb-6">Minimal by design, crafted end-to-end</h2>
              <div className="space-y-4 text-[var(--charcoal)]/70">
                <p>
                  H9Y Studio was founded on the belief that exceptional hospitality design requires both creative vision and meticulous execution. We work at the intersection of architecture, interiors, and project delivery.
                </p>
                <p>
                  Our practice focuses on boutique hotels, restaurants, and high-end residential projects where every detail matters. From initial concept through final installation, we maintain creative control while delivering on time and within budget.
                </p>
                <p>
                  Based in Mumbai with projects across India and Southeast Asia, our team combines international design sensibilities with deep local knowledge of materials, craftsmanship, and regulatory requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Our Process</p>
            <h2>How We Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-[var(--warm-stone)] pt-6 space-y-4"
              >
                <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)]">{item.step}</p>
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="text-[var(--charcoal)]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[var(--charcoal)] text-[var(--off-white)]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Trusted Partners</p>
            <h2>Select Clients</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {clients.map((client, index) => (
              <div
                key={client}
                className="text-[var(--warm-stone)] text-sm uppercase tracking-wider border border-[var(--warm-stone)]/20 p-6 text-center flex items-center justify-center min-h-[100px]"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
