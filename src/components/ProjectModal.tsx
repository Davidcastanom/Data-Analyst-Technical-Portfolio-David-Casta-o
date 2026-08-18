import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types/portfolio';
import {
  X,
  BookOpen,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Sparkles,
  Info,
  Code,
  CheckCircle2,
  TrendingUp,
  Database,
  RefreshCw
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'iframe' | 'summary' | 'config'>('iframe');
  const [isCopied, setIsCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const getEmbeddableNotionUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('notion.so/embed/')) return url;
    return url;
  };

  const notionEmbedUrl = getEmbeddableNotionUrl(project.notionUrl);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.notionUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const tabs = [
    { id: 'iframe' as const, label: 'Documentación Notion (Embebida)', icon: BookOpen },
    { id: 'summary' as const, label: 'Resumen Técnico & Impacto', icon: TrendingUp },
    { id: 'config' as const, label: '¿Cómo cambiar la URL de Notion?', icon: Code },
  ];

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
              : 'max-w-5xl max-h-[92vh]'
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
                  <span className="text-xs font-mono hidden sm:inline-block" style={{ color: 'var(--color-muted)' }}>
                    id: {project.id}
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
                title="Copiar Enlace de Notion"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium glass-card hover:opacity-80 transition-colors rounded-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" style={{ color: 'var(--color-success)' }} />
                    <span style={{ color: 'var(--color-success)' }} className="font-semibold">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copiar Link</span>
                  </>
                )}
              </button>

              <a
                href={project.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir página en Notion"
                className="p-2 glass-card hover:opacity-80 transition-colors rounded-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? 'Restaurar' : 'Pantalla Completa'}
                className="p-2 glass-card hover:opacity-80 transition-colors rounded-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                title="Cerrar modal"
                className="p-2 glass-card hover:opacity-80 transition-colors rounded-lg ml-1"
                style={{ color: 'var(--color-muted)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex px-4 pt-2 border-b border-[var(--color-border)] gap-2 text-xs font-medium" style={{ backgroundColor: 'var(--color-bg)' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-4 py-2.5 rounded-t-lg flex items-center gap-2 transition-colors"
                style={{
                  color: activeTab === tab.id ? 'var(--color-text)' : 'var(--color-muted)',
                }}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="modal-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Modal Body Content */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6" style={{ backgroundColor: 'var(--color-bg)' }}>
            <AnimatePresence mode="wait">
              {activeTab === 'iframe' && (
                <motion.div
                  key="iframe"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Informative Notice Box */}
                  <div className="p-3.5 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/15 text-xs flex items-start gap-3" style={{ color: 'var(--color-text-secondary)' }}>
                    <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                    <div className="space-y-1">
                      <p className="font-semibold" style={{ color: 'var(--color-text)' }}>
                        Visor en vivo de la documentación compartida en Notion
                      </p>
                      <p className="leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                        Si la vista previa no carga directamente dentro del iFrame debido a permisos de seguridad de Notion, haz clic en el botón <span className="font-semibold" style={{ color: 'var(--color-text)' }}>"Abrir en Notion"</span> superior para ver el documento completo en una nueva pestaña.
                      </p>
                    </div>
                  </div>

                  {/* Iframe Container */}
                  <div className="relative rounded-xl border border-[var(--color-border)] overflow-hidden shadow-inner min-h-[500px]" style={{ backgroundColor: 'var(--color-card)' }}>
                    {!iframeLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3 z-10" style={{ backgroundColor: 'var(--color-card)' }}>
                        <RefreshCw className="w-8 h-8 animate-spin" style={{ color: 'var(--color-primary)' }} />
                        <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>Cargando documento de Notion...</p>
                        <p className="text-xs max-w-md" style={{ color: 'var(--color-muted)' }}>
                          Conectando con {project.notionUrl}
                        </p>
                      </div>
                    )}

                    <iframe
                      src={notionEmbedUrl}
                      title={`Documentación en Notion: ${project.title}`}
                      className="w-full h-[550px] sm:h-[620px] border-0"
                      onLoad={() => setIframeLoaded(true)}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Fallback Direct Button */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl text-xs shadow-sm border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>¿Deseas editar o duplicar este proyecto en tu propia cuenta de Notion?</span>
                    <a
                      href={project.notionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg text-white font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Ver Página Oficial en Notion
                    </a>
                  </div>
                </motion.div>
              )}

              {activeTab === 'summary' && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {/* Business Impact Banner */}
                  <div className="p-4 rounded-xl bg-[var(--color-success)]/5 border border-[var(--color-success)]/15 space-y-1">
                    <div className="flex items-center gap-2 font-bold" style={{ color: 'var(--color-success)' }}>
                      <TrendingUp className="w-5 h-5" />
                      <span>Resultado Principal de Negocio</span>
                    </div>
                    <p className="text-base font-semibold" style={{ color: 'var(--color-text)', fontFamily: "'Space Grotesk', sans-serif" }}>
                      {project.businessImpact}
                    </p>
                  </div>

                  {/* Full Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
                      Descripción General del Análisis
                    </h4>
                    <p className="leading-relaxed p-4 rounded-xl border border-[var(--color-border)] shadow-sm" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-text-secondary)' }}>
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
                      Indicadores Clave de Rendimiento (KPIs)
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {project.keyMetrics.map((metric, idx) => (
                        <div key={idx} className="p-3 rounded-xl border border-[var(--color-border)] text-center shadow-sm" style={{ backgroundColor: 'var(--color-card)' }}>
                          <span className="text-xs block mb-1 font-medium" style={{ color: 'var(--color-muted)' }}>{metric.label}</span>
                          <span className="text-lg font-extrabold font-mono" style={{ color: 'var(--color-accent)' }}>{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
                      Puntos Destacados & Metodología Crisp-DM
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

                  {/* Dataset Info */}
                  {project.datasetInfo && (
                    <div className="p-3 rounded-xl text-xs flex items-center gap-2 shadow-sm border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                      <Database className="w-4 h-4 shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span className="font-medium" style={{ color: 'var(--color-muted)' }}>Información del Dataset:</span>
                      <span className="font-mono font-semibold" style={{ color: 'var(--color-text)' }}>{project.datasetInfo}</span>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'config' && (
                <motion.div
                  key="config"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5 text-xs"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  <div className="p-4 rounded-xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15 space-y-2" style={{ color: 'var(--color-text)' }}>
                    <h4 className="font-bold flex items-center gap-1.5 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      <Sparkles className="w-4 h-4" style={{ color: 'var(--color-accent)' }} /> Guía para insertar tus propias páginas de Notion
                    </h4>
                    <p className="leading-relaxed">
                      Para vincular tu propio portafolio de Notion a este componente, sigue estos 3 sencillos pasos:
                    </p>
                  </div>

                  <ol className="space-y-3 list-decimal list-inside">
                    <li className="p-3.5 rounded-xl border border-[var(--color-border)] space-y-1 shadow-sm" style={{ backgroundColor: 'var(--color-card)' }}>
                      <span className="font-bold" style={{ color: 'var(--color-text)' }}>1. Publica tu página en Notion:</span>
                      <p className="pl-4" style={{ color: 'var(--color-muted)' }}>En Notion, abre la página de tu proyecto → Clic en el botón <strong>"Share"</strong> (Compartir) en la esquina superior derecha → Activa la opción <strong>"Share to web"</strong>.</p>
                    </li>

                    <li className="p-3.5 rounded-xl border border-[var(--color-border)] space-y-1 shadow-sm" style={{ backgroundColor: 'var(--color-card)' }}>
                      <span className="font-bold" style={{ color: 'var(--color-text)' }}>2. Copia la URL pública:</span>
                      <p className="pl-4" style={{ color: 'var(--color-muted)' }}>Haz clic en <strong>"Copy web link"</strong>. La URL lucirá similar a: <code className="px-1 py-0.5 rounded font-mono" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-bg)' }}>https://tu-usuario.notion.site/Mi-Proyecto-123456</code>.</p>
                    </li>

                    <li className="p-3.5 rounded-xl border border-[var(--color-border)] space-y-1 shadow-sm" style={{ backgroundColor: 'var(--color-card)' }}>
                      <span className="font-bold" style={{ color: 'var(--color-text)' }}>3. Reemplaza la propiedad `notionUrl` en el archivo de datos:</span>
                      <p className="pl-4" style={{ color: 'var(--color-muted)' }}>Abre <code className="px-1 py-0.5 rounded font-mono" style={{ color: 'var(--color-accent)', backgroundColor: 'var(--color-bg)' }}>src/data/portfolioData.ts</code> directamente en el código fuente.</p>
                    </li>
                  </ol>

                  {/* Code Snippet Box */}
                  <div className="space-y-2">
                    <span className="font-bold" style={{ color: 'var(--color-muted)' }}>Ejemplo de código en `src/data/portfolioData.ts`:</span>
                    <pre className="p-4 rounded-xl border font-mono text-xs overflow-x-auto" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
{`{
  id: '${project.id}',
  title: '${project.title}',
  category: '${project.category}',
  // ...
  // INSERTA AQUÍ TU URL PÚBLICA DE NOTION:
  notionUrl: '${project.notionUrl}',
}`}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
