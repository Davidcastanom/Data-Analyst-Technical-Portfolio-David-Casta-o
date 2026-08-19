import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types/portfolio';
import { useLanguage } from '../i18n/LanguageContext';
import {
  BookOpen,
  Github,
  ExternalLink,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Layers,
  Database,
  BarChart2,
  Play
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const { t } = useLanguage();
  return (
    <motion.div
      className="group relative rounded-2xl glass-card border border-[var(--color-border)] transition-all duration-300 hover:shadow-md flex flex-col justify-between overflow-hidden"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Decorative Top Accent Line */}
      <div className={`h-1.5 w-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-purple-600`} />

      <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">

        {/* Top Metadata: Category & Featured Pill */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-semibold glass-card border border-[var(--color-border)] text-[var(--color-text-secondary)] flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-[var(--color-text-secondary)]" />
              {project.category}
            </span>

            {project.videoUrl && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1">
                <Play className="w-3 h-3 text-emerald-600 fill-current" /> {t.projects.video}
              </span>
            )}
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[var(--color-accent)]" /> {t.projects.featured}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3
            className="text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.title}
          </h3>

          {/* Short Summary */}
          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Business Impact Box */}
        <div className="p-3.5 rounded-xl glass-card border border-[var(--color-border)] space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-success)]">
            <TrendingUp className="w-4 h-4 shrink-0" />
            <span>{t.projects.businessImpact}</span>
          </div>
          <p className="text-xs text-[var(--color-text)] font-medium leading-normal">
            {project.businessImpact}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {project.keyMetrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="p-2.5 rounded-lg glass-card border border-[var(--color-border)] text-left">
              <span className="text-[10px] text-[var(--color-text-secondary)] block truncate">{metric.label}</span>
              <span className="text-xs font-bold text-[var(--color-primary)] font-mono">{metric.value}</span>
            </div>
          ))}
        </div>

        {/* Technologies Tags */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono text-[var(--color-text-secondary)] glass-card border border-[var(--color-border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Card Actions Footer */}
      <div className="p-4 glass-card border-t border-[var(--color-border)] flex items-center justify-between gap-2">

        {/* BOTÓN PRINCIPAL: Abrir Modal con iframe de Notion */}
        <motion.button
          onClick={() => onOpenModal(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[var(--color-primary)] hover:brightness-110 transition-all shadow-sm group/btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <BookOpen className="w-4 h-4 text-purple-300 group-hover/btn:scale-110 transition-transform" />
          <span>{t.projects.viewInNotion}</span>
        </motion.button>

        {/* GitHub Repository Secondary Action */}
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Código fuente en GitHub"
            className="p-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] glass-card border border-[var(--color-border)] rounded-xl transition-colors shadow-sm"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
          </motion.a>
        )}

        {/* Demo Link if available */}
        {project.demoUrl && (
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Dashboard en Vivo"
            className="p-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] glass-card border border-[var(--color-border)] rounded-xl transition-colors shadow-sm"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        )}

      </div>
    </motion.div>
  );
};
