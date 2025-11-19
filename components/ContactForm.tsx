'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        timeline: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)] focus:border-[var(--muted-gold)] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)] focus:border-[var(--muted-gold)] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)] focus:border-[var(--muted-gold)] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)] focus:border-[var(--muted-gold)] focus:outline-none transition-colors"
          >
            <option value="">Select type</option>
            <option value="hospitality">Hospitality</option>
            <option value="residential">Residential</option>
            <option value="turnkey">Turnkey Solutions</option>
            <option value="consultation">Consultation</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium mb-2">
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)] focus:border-[var(--muted-gold)] focus:outline-none transition-colors"
        >
          <option value="">Select timeline</option>
          <option value="urgent">Urgent (1-2 months)</option>
          <option value="flexible">Flexible (3-6 months)</option>
          <option value="planning">Planning (6+ months)</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, site location, and specific requirements..."
          className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)] focus:border-[var(--muted-gold)] focus:outline-none transition-colors resize-none"
        />
      </div>

      <div>
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[var(--charcoal)] text-[var(--off-white)] px-8 py-4 hover:bg-[var(--muted-gold)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
        </motion.button>
      </div>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-700 text-sm"
        >
          Thank you for your inquiry. We'll get back to you within 24 hours.
        </motion.p>
      )}

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-700 text-sm"
        >
          Something went wrong. Please try again or email us directly at harain.designoltre@gmail.com.
        </motion.p>
      )}
    </form>
  );
}
