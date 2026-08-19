import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types/portfolio';
import { useLanguage } from '../i18n/LanguageContext';
import {
  X,
  BookOpen,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Database,
  Github,
  Play
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { t } = useLanguage();
  const [isCopied, setIsCopied] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const handleCopyLink = () => {
    const url = project.notionUrl || project.githubUrl || '';
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 glass"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`relative w-full glass-card shadow-2xl overflow-hidden flex flex-col rounded-2xl border border-[var(--color-border)] transition-all duration-300 ${
            isFullscreen
              ? 'h-full max-w-none rounded-none border-0'
              : 'max-w-4xl max-h-[92vh]'
          }`}
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-5 border-b border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3" style={{ backgroundColor: 'var(--color-card)' }}>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight mt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--color-text)' }}>
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Top Right Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                title={t.projectModal.copyLink}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium glass-card hover:opacity-80 transition-colors rounded-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--color-success)' }} />
                    <span style={{ color: 'var(--color-success)' }} className="font-semibold">{t.projectModal.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t.projectModal.copyLink}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? t.projectModal.restore : t.projectModal.fullscreen}
                className="p-2 glass-card hover:opacity-80 transition-colors rounded-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                title={t.projectModal.close}
                className="p-2 glass-card hover:opacity-80 transition-colors rounded-lg ml-1"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links Bar */}
          <div className="px-4 py-3 border-b border-[var(--color-border)] flex flex-wrap gap-2" style={{ backgroundColor: 'var(--color-bg)' }}>
            {project.notionUrl && (
              <a
                href={project.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm"
                style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t.projectModal.viewNotionDocs}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold glass-card border border-[var(--color-border)] transition-all shadow-sm"
                style={{ color: 'var(--color-text)' }}
              >
                <Github className="w-3.5 h-3.5" />
                {t.projectModal.viewGitHubCode}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold glass-card border border-[var(--color-border)] transition-all shadow-sm"
                style={{ color: 'var(--color-text)' }}
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
                {t.projectModal.viewLiveDemo}
              </a>
            )}
          </div>

          {/* Modal Body Content */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6" style={{ backgroundColor: 'var(--color-bg)' }}>
            {/* Business Impact Banner */}
            <div className="p-4 rounded-xl bg-[var(--color-success)]/5 border border-[var(--color-success)]/15 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm" style={{ color: 'var(--color-success)' }}>
                <TrendingUp className="w-5 h-5" />
                <span>{t.projectModal.mainBusinessResult}</span>
              </div>
              <p className="text-base font-semibold" style={{ color: 'var(--color-text)', fontFamily: "'Space Grotesk', sans-serif" }}>
                {project.businessImpact}
              </p>
            </div>

            {/* Video Demo */}
            {project.videoUrl && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-text-secondary)' }}>
                  {t.projectModal.videoDemo}
                </h4>
                <div className="relative rounded-xl overflow-hidden border border-[var(--color-border)] shadow-lg bg-black">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full aspect-video object-contain"
                    poster=""
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    {t.projectModal.videoFallback}
                  </video>
                </div>
              </div>
            )}

            {/* Full Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-text-secondary)' }}>
                {t.projectModal.fullDescription}
              </h4>
              <p className="leading-relaxed p-4 rounded-xl border border-[var(--color-border)] shadow-sm text-sm" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-text-secondary)' }}>
                {project.fullDescription}
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-text-secondary)' }}>
                {t.projectModal.keyMetrics}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.keyMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-[var(--color-border)] text-center shadow-sm" style={{ backgroundColor: 'var(--color-card)' }}>
                    <span className="text-xs block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>{metric.label}</span>
                    <span className="text-lg font-extrabold font-mono" style={{ color: 'var(--color-accent)' }}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-text-secondary)' }}>
                {t.projectModal.highlights}
              </h4>
              <div className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl text-xs shadow-sm border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-text)' }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-text-secondary)' }}>
                {t.projectModal.techStack}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-semibold glass-card border border-[var(--color-border)]" style={{ color: 'var(--color-text)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dataset Info */}
            {project.datasetInfo && (
              <div className="p-3 rounded-xl text-xs flex items-center gap-2 shadow-sm border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                <Database className="w-4 h-4 shrink-0" style={{ color: 'var(--color-accent)' }} />
                <span className="font-medium" style={{ color: 'var(--color-text-secondary)' }}>{t.projectModal.dataset}</span>
                <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{project.datasetInfo}</span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
