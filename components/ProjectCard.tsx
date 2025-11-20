'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  location?: string;
  image: string;
  index: number;
}

export default function ProjectCard({ slug, title, category, location, image, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--warm-stone)] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[var(--charcoal)]/0 group-hover:bg-[var(--charcoal)]/20 transition-colors duration-300" />
        </div>
        <div className="mt-4 space-y-1">
          <p className="text-xs uppercase tracking-wider text-[var(--muted-gold)]">{category}</p>
          <h3 className="text-lg md:text-xl font-medium">{title}</h3>
          {location && <p className="text-sm text-[var(--charcoal)]/60">{location}</p>}
        </div>
      </Link>
    </motion.div>
  );
}
