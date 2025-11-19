'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';

const categories = ['All', 'Hospitality', 'Residential', 'Turnkey'];

const projects = [
  {
    slug: 'akash-inn-hotel',
    title: 'Akash Inn Hotel',
    category: 'Hospitality',
    location: 'India',
    image: '/h9y/Akash%20Inn%20Hotel/akash 1.jpg',
  },
  {
    slug: 'halcyon-hotel-residential',
    title: 'Halcyon Hotel (Residential)',
    category: 'Residential',
    location: 'India',
    image: '/h9y/Halcyon%20Hotel%20Residenstiol/gl_22.jpg',
  },
  {
    slug: 'la-sara-hotel',
    title: 'La Sara Hotel',
    category: 'Hospitality',
    location: 'Bengaluru, India',
    image: '/h9y/La%20Sara%20Hotel/breakfast%20area.jpg',
  },
  {
    slug: 'nandhana-palace-restaurant',
    title: 'Nandhana Palace Restaurant',
    category: 'Hospitality',
    location: 'India',
    image: '/h9y/Nandhana%20Palace%20Restorant/01444210-ea29-4e0f-8d65-e292a3859c20.JPG',
  },
  {
    slug: 'windflower-varca-goa',
    title: 'The Windflower Resort & Spa, Varca (Goa)',
    category: 'Hospitality',
    location: 'Goa, India',
    image: '/h9y/THE%20WINDFLOWER%20Resort%20%26%20Spa%20Varca%20Goa/home.jpg',
  },
  {
    slug: 'iconiqa',
    title: 'ICONIQA Hotel and Resort',
    category: 'Turnkey',
    location: 'Mumbai, India',
    image: '/h9y/iconiqa/iconiqa 1.png',
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <Hero
        title="Portfolio"
        subtitle="A selection of hospitality, residential, and turnkey projects crafted with attention to detail and delivered on time."
        fullHeight={false}
      />

      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-16 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors ${
                  activeCategory === category
                    ? 'bg-[var(--charcoal)] text-[var(--off-white)]'
                    : 'border border-[var(--warm-stone)] text-[var(--charcoal)] hover:border-[var(--charcoal)]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} {...project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-[var(--charcoal)]/60">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
