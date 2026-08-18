import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import {
  FolderKanban,
  Sparkles,
  Layers,
  BookOpen,
  Filter
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Análisis Predictivo', 'Business Intelligence', 'Segmentación & Marketing'];

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <motion.section
      id="proyectos"
      className="py-20 relative border-t border-[var(--color-border)] transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-bg)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-card border border-[var(--color-border)] shadow-sm text-[var(--color-text-secondary)]">
            <BookOpen className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Casos de Estudio & Documentación Notion</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Proyectos Destacados de Analítica
          </h2>
          <p className="text-base text-[var(--color-text-secondary)]">
            Selección de proyectos reales estructurados con la metodología CRISP-DM. Cada proyecto cuenta con su documentación técnica completa embebida directamente desde Notion.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[var(--color-primary)] text-white shadow-sm'
                  : 'glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)] shadow-sm'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ProjectCard
                  project={project}
                  onOpenModal={onOpenModal}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Callout about Notion Embeds */}
        <motion.div
          className="mt-12 p-6 rounded-2xl glass-card border border-[var(--color-border)] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-secondary)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span
                className="font-bold text-[var(--color-text)] text-sm block"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                ¿Por qué documentar proyectos en Notion?
              </span>
              <p className="text-[var(--color-text-secondary)]">
                Notion permite presentar el ciclo de vida del dato: desde la definición del problema de negocio y diagramas ERD, hasta el código en Python/SQL y las conclusiones ejecutivas.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};
