'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download, Calendar, MapPin, DollarSign } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    title: string;
    category: string;
    location: string;
    year: string;
    scope: string;
    budget: string;
    timeline: string;
    description: string;
    challenge: string;
    solution: string;
    cover?: string;
    images: string[];
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--charcoal)]/60 hover:text-[var(--charcoal)] mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)] mb-4">{project.category}</p>
            <h1>{project.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-16">
          <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[16/9] bg-[var(--warm-stone)] mb-8"
          >
            <Image
              src={project.cover ?? project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mt-8 lg:mt-16">
            <div className="lg:col-span-2 space-y-8 lg:space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl mb-6">Overview</h2>
                <p className="text-[var(--charcoal)]/70 text-lg leading-relaxed">{project.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl mb-4">Challenge</h3>
                <p className="text-[var(--charcoal)]/70 leading-relaxed">{project.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl mb-4">Solution</h3>
                <p className="text-[var(--charcoal)]/70 leading-relaxed">{project.solution}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="border border-[var(--warm-stone)] p-8 space-y-6">
                <h3 className="text-lg font-medium uppercase tracking-wider">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--muted-gold)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--charcoal)]/60 mb-1">Location</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[var(--muted-gold)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--charcoal)]/60 mb-1">Year</p>
                      <p className="font-medium">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[var(--muted-gold)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--charcoal)]/60 mb-1">Timeline</p>
                      <p className="font-medium">{project.timeline}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-16"
          >
            {project.images.slice(1).map((image: string, index: number) => (
              <div key={index} className="relative aspect-[4/3] bg-[var(--warm-stone)]">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[var(--warm-stone)]/20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Interested in working together?</h2>
            <p className="text-[var(--charcoal)]/70 mb-8">
              Let's discuss your project requirements and how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--charcoal)] text-[var(--off-white)] px-8 py-4 hover:bg-[var(--muted-gold)] transition-colors duration-300"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
