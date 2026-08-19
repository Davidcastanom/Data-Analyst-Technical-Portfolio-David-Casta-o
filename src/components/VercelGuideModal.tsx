import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Rocket,
  Check,
  Copy,
  ExternalLink,
  Github,
  Terminal,
  Globe,
  CheckCircle2,
  FileCode,
  Sparkles,
  BookOpen,
  Server,
  Monitor,
  Cloud,
  Layers
} from 'lucide-react';

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const deploymentTools = [
  {
    tool: 'Vercel',
    icon: Globe,
    color: '#000000',
    description: 'Hosting estático + SPA con CDN global, previews por PR y despliegue automático desde GitHub.',
    projects: [
      {
        name: 'Portafolio Profesional',
        repo: 'Data-Analyst-Technical-Portfolio-David-Casta-o',
        stack: 'React 19 + Vite + Tailwind CSS + TypeScript',
        url: 'https://data-analyst-technical-portfolio-david-casta-9n3n78omo.vercel.app',
        notes: 'SPA estático. Auto-despliega en cada push a main. Sin variables de entorno.',
      },
      {
        name: 'MarkFlow Studio',
        repo: 'markflow-studio',
        stack: 'React + TypeScript + Vite + Tailwind CSS',
        url: 'https://conversor-mardawn.vercel.app',
        notes: 'Conversor Markdown→HTML/PDF. 100% client-side, sin backend.',
      },
    ],
  },
  {
    tool: 'GitHub Pages',
    icon: Github,
    color: '#6e40c9',
    description: 'Hosting estático gratuito directo desde repositorios GitHub. Ideal para sitios HTML/CSS/JS puros.',
    projects: [
      {
        name: 'Flujo Base',
        repo: 'freelancer',
        stack: 'HTML + CSS',
        url: 'https://davidcastanom.github.io/freelancer/index.html',
        notes: 'Sitio web de servicios freelance. Archivos estáticos sin build.',
      },
      {
        name: 'MULTIPLICA',
        repo: 'multiplica',
        stack: 'HTML',
        url: 'https://davidcastanom.github.io/multiplica/index.html',
        notes: 'Proyecto de impacto social. HTML estático, sin dependencias.',
      },
      {
        name: 'Palabras Vivas 2.0',
        repo: 'palabras-vivas-2.0',
        stack: 'JavaScript + HTML',
        url: 'https://davidcastanom.github.io/palabras-vivas-2.0/#/home',
        notes: 'Plataforma educativa. JavaScript vanilla con hash routing.',
      },
      {
        name: 'Huertana',
        repo: 'Huertana_facturas',
        stack: 'JavaScript + HTML + CSS',
        url: 'https://davidcastanom.github.io/Huertana_facturas/',
        notes: 'Gestor de pedidos WhatsApp. 100% en navegador, localStorage.',
      },
    ],
  },
  {
    tool: 'Render',
    icon: Server,
    color: '#46e3b7',
    description: 'Plataforma de hosting para apps con backend. Free tier con servicios web y PostgreSQL managed.',
    projects: [
      {
        name: 'AuditData AI',
        repo: 'auditdata-ai',
        stack: 'Python + FastAPI + Groq + Supabase',
        url: 'https://auditdata-ai-1.onrender.com',
        notes: 'Backend FastAPI + frontend React. PostgreSQL en Supabase. Google OAuth.',
      },
      {
        name: 'Credit Intelligence Colombia',
        repo: 'Credit_Intelligence_Colombia',
        stack: 'Python + Flask + PostgreSQL + Chart.js',
        url: 'https://credit-intelligence-colombia-1.onrender.com',
        notes: 'ETL automático desde datos.gov.co. Actualización mensual vía GitHub Actions.',
      },
    ],
  },
  {
    tool: 'Streamlit Cloud',
    icon: Layers,
    color: '#ff4f2b',
    description: 'Hosting gratuito para apps de datos en Python. Despliegue directo desde repositorios GitHub.',
    projects: [
      {
        name: 'Pasaporte Digital',
        repo: 'digital-passport',
        stack: 'Python + Streamlit + Google Maps API + SQLite',
        url: 'https://digital-passport-ujnzphfeblnhnw3qgw4enp.streamlit.app',
        notes: 'App de identidad digital con validadores, telemetría geoespacial y 58 tests.',
      },
    ],
  },
  {
    tool: 'Escritorio (Tauri)',
    icon: Monitor,
    color: '#ffc131',
    description: 'App de escritorio nativa multiplataforma. Binario <20MB, 100% offline, sin servidor.',
    projects: [
      {
        name: 'DataLens',
        repo: 'datalens',
        stack: 'Rust + Tauri v2 + React 19 + DuckDB',
        url: undefined,
        notes: 'En desarrollo (alpha v0.1.0). Se distribuye vía GitHub Releases (.msi, .dmg, .AppImage).',
      },
    ],
  },
];

export const VercelGuideModal: React.FC<VercelGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
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
            className="relative w-full max-w-3xl max-h-[90vh] glass-card shadow-2xl overflow-hidden flex flex-col rounded-2xl border border-[var(--color-border)]"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 text-white flex items-center justify-between border-b border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-primary)' }}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Guía de Edición & Despliegue</h2>
                  <p className="text-xs text-white/70">Modificar tu portafolio y entender cada plataforma de despliegue.</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white bg-white/10 border border-white/20 rounded-xl transition-colors hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs" style={{ color: 'var(--color-text-secondary)' }}>

              {/* ── SECTION A: HOW TO EDIT ── */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  <FileCode className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                  Cómo Editar Tu Portafolio
                </h3>

                <div className="p-4 rounded-xl space-y-3 border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    Toda la información de tu perfil se gestiona en un solo archivo:
                  </p>
                  <div className="p-2.5 rounded-lg font-mono text-[11px] font-semibold border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-text)' }}>
                    src/data/portfolioData.ts
                  </div>
                  <div className="p-3 rounded-lg border border-[var(--color-primary)]/15 space-y-1" style={{ backgroundColor: 'var(--color-primary)', backgroundOpacity: 0.05 }}>
                    <span className="font-bold flex items-center gap-1" style={{ color: 'var(--color-primary)' }}>
                      <BookOpen className="w-3.5 h-3.5" /> Vincular Páginas de Notion:
                    </span>
                    <p className="text-[11px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      Share → "Share to web" → Copia enlace → Pega en <code className="px-1 py-0.5 rounded border border-[var(--color-border)] font-bold" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-primary)' }}>notionUrl</code>
                    </p>
                  </div>
                </div>
              </div>

              {/* ── SECTION B: LOCAL + GIT ── */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  <Terminal className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                  Probar y Subir Cambios
                </h3>

                <div className="p-4 rounded-xl space-y-3 border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    Prueba local con <code className="px-1 py-0.5 rounded font-mono" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-muted)' }}>npm run dev</code>, luego sube:
                  </p>
                  <div className="relative p-3 rounded-lg border border-[var(--color-border)] font-mono text-[11px]" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-text-secondary)' }}>
                    <button
                      onClick={() => copyToClipboard('git add .\ngit commit -m "feat: actualización del portafolio"\ngit push origin main', 'git')}
                      className="absolute right-2 top-2 p-1.5 rounded transition-colors"
                      style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-text-secondary)' }}
                      title="Copiar comandos"
                    >
                      {copiedCmd === 'git' ? <Check className="w-3.5 h-3.5" style={{ color: 'var(--color-success)' }} /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <pre className="text-[var(--color-accent)]">
{`git add .
git commit -m "feat: actualización del portafolio"
git push origin main`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* ── SECTION C: VERCEL DEPLOY (this portfolio) ── */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  <Globe className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                  Despliegue de Este Portafolio en Vercel
                </h3>

                <div className="p-4 rounded-xl space-y-3 border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1" style={{ color: 'var(--color-text-secondary)' }}>
                    <li>Ingresa a <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: 'var(--color-primary)' }}>vercel.com/new</a> → inicia sesión con GitHub.</li>
                    <li>Selecciona el repositorio y haz clic en <strong>"Import"</strong>.</li>
                    <li>Vercel detecta automáticamente Vite como framework.</li>
                  </ol>

                  <div className="grid grid-cols-2 gap-2 p-3 rounded-lg border border-[var(--color-border)] font-mono text-[11px]" style={{ backgroundColor: 'var(--color-card)' }}>
                    <div>
                      <span className="block" style={{ color: 'var(--color-text-secondary)' }}>Framework:</span>
                      <span className="font-bold" style={{ color: 'var(--color-success)' }}>Vite</span>
                    </div>
                    <div>
                      <span className="block" style={{ color: 'var(--color-text-secondary)' }}>Build Command:</span>
                      <span className="font-semibold" style={{ color: 'var(--color-text)' }}>npm run build</span>
                    </div>
                    <div>
                      <span className="block" style={{ color: 'var(--color-text-secondary)' }}>Output Directory:</span>
                      <span className="font-semibold" style={{ color: 'var(--color-text)' }}>dist</span>
                    </div>
                    <div>
                      <span className="block" style={{ color: 'var(--color-text-secondary)' }}>Install Command:</span>
                      <span className="font-semibold" style={{ color: 'var(--color-text)' }}>npm install</span>
                    </div>
                  </div>

                  <p className="pt-1" style={{ color: 'var(--color-text-secondary)' }}>
                    Haz clic en <strong>"Deploy"</strong>. Tu sitio queda en vivo con SSL gratuito. Cada <code className="px-1 py-0.5 rounded font-mono" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-muted)' }}>git push</code> actualiza automáticamente.
                  </p>
                </div>
              </div>

              {/* ── SECTION D: ALL DEPLOYMENT TOOLS ── */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  <Cloud className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} />
                  Herramientas de Despliegue por Proyecto
                </h3>

                <div className="space-y-4">
                  {deploymentTools.map((tool, tIdx) => {
                    const Icon = tool.icon;
                    return (
                      <div key={tIdx} className="rounded-xl border border-[var(--color-border)] overflow-hidden" style={{ backgroundColor: 'var(--color-card)' }}>
                        {/* Tool header */}
                        <div className="p-3 flex items-center gap-2.5 border-b border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-muted)' }}>
                          <div className="p-1.5 rounded-lg" style={{ backgroundColor: tool.color + '15', border: `1px solid ${tool.color}30` }}>
                            <Icon className="w-4 h-4" style={{ color: tool.color }} />
                          </div>
                          <div>
                            <span className="font-bold text-xs" style={{ color: 'var(--color-text)' }}>{tool.tool}</span>
                            <p className="text-[10px] leading-tight" style={{ color: 'var(--color-text-secondary)' }}>{tool.description}</p>
                          </div>
                        </div>

                        {/* Projects list */}
                        <div className="divide-y divide-[var(--color-border)]">
                          {tool.projects.map((proj, pIdx) => (
                            <div key={pIdx} className="p-3 space-y-1.5">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-bold text-xs" style={{ color: 'var(--color-text)' }}>{proj.name}</span>
                                {proj.url ? (
                                  <a
                                    href={proj.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full transition-colors"
                                    style={{ backgroundColor: tool.color + '12', color: tool.color, border: `1px solid ${tool.color}25` }}
                                  >
                                    <ExternalLink className="w-2.5 h-2.5" />
                                    Ver demo
                                  </a>
                                ) : (
                                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-text-secondary)' }}>
                                    En desarrollo
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                {proj.stack}
                              </p>
                              <p className="text-[10px] leading-relaxed italic" style={{ color: 'var(--color-text-secondary)', opacity: 0.8 }}>
                                {proj.notes}
                              </p>
                              <div className="flex items-center gap-1 text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>
                                <Github className="w-2.5 h-2.5" />
                                <span className="font-mono">{proj.repo}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Ready status */}
              <div className="p-4 rounded-xl space-y-2 border border-[var(--color-success)]/15" style={{ backgroundColor: 'var(--color-success)', backgroundOpacity: 0.05, color: 'var(--color-text)' }}>
                <span className="font-bold flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-success)' }}>
                  <CheckCircle2 className="w-4 h-4" /> Todo Optimizado para Despliegue Automático
                </span>
                <p className="leading-relaxed text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>
                  Cada push a GitHub actualiza Vercel (portafolio + MarkFlow). Render, Streamlit Cloud y GitHub Pages también despliegan automáticamente desde sus respectivos repos.
                </p>
              </div>

            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 border-t border-[var(--color-border)] flex items-center justify-between" style={{ backgroundColor: 'var(--color-card)' }}>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Globe className="w-4 h-4" />
                <span>Ir a Vercel.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl glass-card hover:opacity-80 font-bold text-xs transition-colors shadow-sm"
                style={{ color: 'var(--color-text)' }}
              >
                Entendido
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
