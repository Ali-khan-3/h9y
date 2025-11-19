'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Interior Design',
    description: 'Full-service interior design from concept through construction documentation. We create spaces that balance aesthetic vision with operational requirements.',
    deliverables: [
      'Concept development & mood boards',
      'Space planning & layouts',
      'Material & finishes selection',
      'Custom furniture design',
      'Lighting design',
      '3D visualization & renderings',
      'Construction documentation',
      'On-site supervision',
    ],
  },
  {
    title: 'FF&E Procurement',
    description: 'Comprehensive furniture, fixtures, and equipment sourcing and management. We handle the entire procurement process from specification to installation.',
    deliverables: [
      'FF&E specifications & budgeting',
      'Vendor sourcing & negotiations',
      'Custom fabrication oversight',
      'Quality control & inspections',
      'Logistics coordination',
      'Installation management',
      'Warranty documentation',
      'Post-installation support',
    ],
  },
  {
    title: 'Turnkey Project Management',
    description: 'End-to-end project delivery managing all aspects from design through final installation. Single point of contact for seamless execution.',
    deliverables: [
      'Project planning & scheduling',
      'Budget management & tracking',
      'Contractor coordination',
      'Permitting & compliance',
      'Site supervision',
      'Quality assurance',
      'Timeline management',
      'Final handover & documentation',
    ],
  },
  {
    title: 'Design Consultation',
    description: 'Strategic design guidance for projects at any stage. We provide expert advice on spatial planning, materials, and design direction.',
    deliverables: [
      'Site analysis & feasibility studies',
      'Design direction & strategy',
      'Material recommendations',
      'Vendor referrals',
      'Design review & feedback',
      'Value engineering',
      'Technical problem-solving',
      'Design documentation review',
    ],
  },
];

const process = [
  {
    number: '01',
    title: 'Initial Consultation',
    duration: '1-2 weeks',
    description: 'We begin with detailed discovery to understand your vision, site constraints, budget parameters, and timeline requirements.',
  },
  {
    number: '02',
    title: 'Proposal & Agreement',
    duration: '1 week',
    description: 'Comprehensive scope of work, fee structure, and project timeline. Clear documentation ensures alignment before we begin.',
  },
  {
    number: '03',
    title: 'Design Development',
    duration: '4-8 weeks',
    description: 'Concept development, space planning, material selection, and detailed design. Regular check-ins ensure the design meets your goals.',
  },
  {
    number: '04',
    title: 'Documentation & Approval',
    duration: '2-4 weeks',
    description: 'Technical drawings, specifications, and procurement documentation. All materials prepared for permits and construction.',
  },
  {
    number: '05',
    title: 'Procurement & Construction',
    duration: '8-16 weeks',
    description: 'FF&E ordering, contractor coordination, and site supervision. Regular progress updates and quality control throughout.',
  },
  {
    number: '06',
    title: 'Installation & Handover',
    duration: '2-3 weeks',
    description: 'Final installation, styling, and documentation. Complete handover with maintenance guides and warranty information.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Services"
        subtitle="Comprehensive design and delivery services for hospitality and residential projects. From initial concept to final installation."
        fullHeight={false}
        backgroundUrl="/project-banners/services-banner.avif"
      />

      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">What We Offer</p>
            <h2 className="mb-6">Design & Delivery Services</h2>
            <p className="text-[var(--charcoal)]/70 text-lg">
              We provide end-to-end solutions for hospitality and residential projects. Whether you need design direction, full FF&E procurement, or complete turnkey delivery, we tailor our services to your needs.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-[var(--warm-stone)] pt-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-medium mb-4">{service.title}</h3>
                    <p className="text-[var(--charcoal)]/70 text-lg">{service.description}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-6">Key Deliverables</p>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[var(--muted-gold)] flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--charcoal)]/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[var(--warm-stone)]/20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Our Process</p>
            <h2>How We Deliver</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--off-white)] border border-[var(--warm-stone)] p-8 space-y-4"
              >
                <p className="text-3xl font-light text-[var(--muted-gold)]">{step.number}</p>
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-xs uppercase tracking-wider text-[var(--charcoal)]/60">{step.duration}</p>
                <p className="text-[var(--charcoal)]/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6">Ready to start your project?</h2>
            <p className="text-[var(--charcoal)]/70 text-lg mb-10 max-w-2xl mx-auto">
              Tell us about your project requirements, timeline, and budget. We'll schedule a consultation to discuss how we can help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--charcoal)] text-[var(--off-white)] px-8 py-4 hover:bg-[var(--muted-gold)] transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
