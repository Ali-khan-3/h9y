'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, Users, Zap } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

const featuredProjects = [
  {
    slug: 'iconiqa',
    title: 'ICONIQA Hotel and Resort',
    category: 'Turnkey',
    location: 'Mumbai, India',
    image: '/h9y/iconiqa/iconiqa 1.png',
  },
  {
    slug: 'windflower-varca-goa',
    title: 'The Windflower Resort & Spa, Varca (Goa)',
    category: 'Hospitality',
    location: 'Goa, India',
    image: '/h9y/THE%20WINDFLOWER%20Resort%20%26%20Spa%20Varca%20Goa/home.jpg',
  },
  {
    slug: 'la-sara-hotel',
    title: 'La Sara Hotel',
    category: 'Hospitality',
    location: 'Bengaluru, India',
    image: '/h9y/La%20Sara%20Hotel/breakfast%20area.jpg',
  },
];

const services = [
  {
    icon: Users,
    title: 'Interior Design',
    description: 'Full-service design from concept to construction documentation.',
  },
  {
    icon: Zap,
    title: 'FF&E Procurement',
    description: 'Curated furniture, fixtures, and equipment sourcing and management.',
  },
  {
    icon: Award,
    title: 'Turnkey Delivery',
    description: 'End-to-end project management from design through installation.',
  },
];

const awards = [
  { title: 'Best Hospitality Design', year: '2024', publication: 'Design Excellence Awards' },
  { title: 'Interior of the Year', year: '2023', publication: 'Architecture Digest India' },
  { title: 'Emerging Studio', year: '2023', publication: 'Dezeen' },
];

export default function Home() {
  return (
    <>
      <section className="relative flex items-center justify-center min-h-screen px-6 lg:px-8 pt-20 overflow-hidden">
        {/* Background image and overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url(/h9y/iconiqa/iconiqa%2011.jpg)" }}
        />
        <div className="absolute inset-0 bg-[var(--charcoal)]/60 backdrop-blur-[2px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-balance text-[var(--off-white)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Hospitality, Interiors &<br />Turnkey Delivery
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-8 text-lg md:text-xl text-[var(--off-white)]/90 max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
          >
            H9Y Studio — Design-led hospitality and turnkey delivery. Minimal by design, crafted end-to-end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-[var(--charcoal)] text-[var(--off-white)] px-8 py-4 hover:bg-[var(--muted-gold)] transition-colors duration-300 rounded-full"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[var(--charcoal)] text-[var(--charcoal)] px-8 py-4 hover:bg-[var(--charcoal)] hover:text-[var(--off-white)] transition-colors duration-300 rounded-full"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--charcoal)]/50 to-transparent" />
        </motion.div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[var(--off-white)]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Featured Work</p>
            <h2>Selected Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} {...project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[var(--charcoal)] hover:text-[var(--muted-gold)] transition-colors group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[var(--warm-stone)]/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center mx-auto"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Services</p>
            <h2>What We Do</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-[var(--charcoal)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium">{service.title}</h3>
                  <p className="text-[var(--charcoal)]/70">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--charcoal)] hover:text-[var(--muted-gold)] transition-colors group"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--off-white)]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center mx-auto"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Expertise</p>
            <h2>Service Highlights</h2>
            <p className="text-[var(--charcoal)]/70 text-lg mt-4">
              Specialized services designed to transform hospitality spaces into exceptional guest experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hospitality Design',
                description: 'Complete interior design solutions for hotels, restaurants, and boutique hospitality spaces.',
                features: ['Concept Development', 'Space Planning', 'FF&E Selection', 'Brand Integration']
              },
              {
                title: 'Interior Architecture',
                description: 'Structural and architectural interventions that enhance the guest experience.',
                features: ['Layout Optimization', 'Custom Millwork', 'Lighting Design', 'Material Specification']
              },
              {
                title: 'Turnkey Delivery',
                description: 'End-to-end project management from concept to completion.',
                features: ['Project Management', 'Quality Control', 'Timeline Coordination', 'Budget Management']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--warm-stone)]/20 p-8 space-y-4"
              >
                <h3 className="text-2xl font-medium">{service.title}</h3>
                <p className="text-[var(--charcoal)]/70">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[var(--charcoal)]/60">
                      <div className="w-1 h-1 bg-[var(--muted-gold)] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--warm-stone)]/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center mx-auto"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Process</p>
            <h2>Our Design Process</h2>
            <p className="text-[var(--charcoal)]/70 text-lg mt-4">
              A systematic approach to deliver exceptional hospitality spaces on time and within budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: '01',
                title: 'Discovery',
                description: 'Understanding your vision, brand identity, and operational requirements.',
                duration: '1-2 weeks'
              },
              {
                phase: '02',
                title: 'Design',
                description: 'Creating concepts, mood boards, and detailed design documentation.',
                duration: '3-4 weeks'
              },
              {
                phase: '03',
                title: 'Development',
                description: 'Technical drawings, material selection, and vendor coordination.',
                duration: '4-6 weeks'
              },
              {
                phase: '04',
                title: 'Delivery',
                description: 'Installation supervision, styling, and final handover.',
                duration: '2-3 weeks'
              }
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="text-4xl font-light text-[var(--muted-gold)]">{step.phase}</div>
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-sm text-[var(--charcoal)]/60">{step.description}</p>
                <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)]">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--off-white)]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center mx-auto"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Testimonials</p>
            <h2>Client Success Stories</h2>
            <p className="text-[var(--charcoal)]/70 text-lg mt-4">
              Hear what our clients say about working with us on their hospitality projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "H9Y Studio transformed our boutique hotel into a destination. Their attention to detail and understanding of guest experience is unmatched.",
                client: 'Rajesh Kumar',
                project: 'Akash Inn Hotel',
                location: 'Bangalore'
              },
              {
                quote: "The turnkey delivery was seamless. From concept to completion, they managed every aspect with professionalism and creativity.",
                client: 'Priya Sharma',
                project: 'Iconiqa Restaurant',
                location: 'Mumbai'
              },
              {
                quote: "Their design approach perfectly balanced aesthetics with operational efficiency. Our restaurant has seen increased guest satisfaction.",
                client: 'Michael Chen',
                project: 'Fine Dining Restaurant',
                location: 'Delhi'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--warm-stone)]/20 p-8 space-y-4"
              >
                <div className="text-2xl text-[var(--muted-gold)]">"</div>
                <p className="text-[var(--charcoal)]/80 italic">{testimonial.quote}</p>
                <div className="border-t border-[var(--warm-stone)] pt-4">
                  <p className="font-medium">{testimonial.client}</p>
                  <p className="text-sm text-[var(--charcoal)]/60">{testimonial.project}</p>
                  <p className="text-xs text-[var(--muted-gold)]">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
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
            className="mb-16 text-center mx-auto"
          >
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">Recognition</p>
            <h2>Awards & Press</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-[var(--warm-stone)] p-8 space-y-2"
              >
                <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)]">{award.year}</p>
                <h3 className="text-xl font-medium">{award.title}</h3>
                <p className="text-sm text-[var(--charcoal)]/60">{award.publication}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-8 bg-[var(--charcoal)] text-[var(--off-white)]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              Start a project with us
            </h2>
            <p className="mt-6 text-lg text-[var(--warm-stone)]">
              Tell us about your site, timeline and budget. Let's create something exceptional together.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--off-white)] text-[var(--charcoal)] px-8 py-4 hover:bg-[var(--muted-gold)] hover:text-[var(--off-white)] transition-colors duration-300"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
