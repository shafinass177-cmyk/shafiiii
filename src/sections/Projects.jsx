import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, FolderGit2, Layers } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Creative Agency & Motion', 'Fullstack Platform', 'Web Application & Data', 'Fintech & Web3 UI'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="PORTFOLIO HIGHLIGHTS"
          title="SELECTED WORKS & EXPERIMENTS"
          subtitle="A curation of web platforms, design systems, and creative motion interfaces engineered with clean code."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-orange text-white shadow-orange-glow scale-105'
                  : 'glass-panel text-zinc-700 dark:text-zinc-300 hover:text-brand-orange dark:hover:text-brand-amber'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt & Custom Cursor Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={10}
                  data-cursor="view"
                  className="group h-full rounded-3xl glass-panel flex flex-col justify-between border border-zinc-200 dark:border-zinc-800 hover:border-brand-orange/50 transition-colors duration-300 shadow-sm hover:shadow-xl"
                >
                  <div>
                    {/* Project Preview Image with Zoom & Overlay */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl bg-zinc-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Gradient Backdrop on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                      {/* Top Category Badge */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-zinc-200 border border-white/20">
                        {project.category}
                      </div>

                      {/* Featured Indicator */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-brand-orange transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-brand-orange dark:hover:text-brand-amber transition-colors"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white hover:bg-brand-orange-dark shadow-sm hover:shadow-orange-glow transition-all duration-300"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom GitHub Archive Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 px-6 rounded-2xl glass-panel">
            <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <FolderGit2 className="w-4 h-4 text-brand-orange" />
              <span>Looking for more experiments, scripts & open-source tools?</span>
            </div>
            <MagneticButton
              href="https://github.com/shafi-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-brand-orange dark:hover:bg-brand-orange dark:hover:text-white transition-colors"
            >
              <span>Explore GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </MagneticButton>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

