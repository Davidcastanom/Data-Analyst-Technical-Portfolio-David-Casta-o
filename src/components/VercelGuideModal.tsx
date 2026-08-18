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
  BookOpen
} from 'lucide-react';

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
                  <h2 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Guía de Modificación Interna & Despliegue</h2>
                  <p className="text-xs text-white/70">Instrucciones para modificar tu portafolio y desplegarlo en Vercel.</p>
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

              {/* Step 0: How to edit internally */}
              <div className="p-4 rounded-xl space-y-3 border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                <div className="flex items-center gap-2 font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                  <span className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--color-primary)' }}>1</span>
                  <span className="flex items-center gap-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <FileCode className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                    Edición de Datos Personales y Proyectos
                  </span>
                </div>
                <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  Toda la información de tu perfil (nombre, correo, biografía, redes, proyectos y URLs de Notion) se gestiona directamente en el archivo:
                </p>
                <div className="p-2.5 rounded-lg font-mono text-[11px] font-semibold border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-text)' }}>
                  src/data/portfolioData.ts
                </div>
                <div className="p-3 rounded-lg border border-[var(--color-primary)]/15 space-y-1" style={{ backgroundColor: 'var(--color-primary)', backgroundOpacity: 0.05 }}>
                  <span className="font-bold flex items-center gap-1" style={{ color: 'var(--color-primary)' }}>
                    <BookOpen className="w-3.5 h-3.5" /> Vincular Páginas Públicas de Notion:
                  </span>
                  <p className="text-[11px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    Abre tu página de Notion → Clic en <strong>Share</strong> (Compartir) → Activa <strong>"Share to web"</strong> → Copia el enlace y pégalo en la propiedad <code className="px-1 py-0.5 rounded border border-[var(--color-border)] font-bold" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-primary)' }}>notionUrl</code> de tus proyectos.
                  </p>
                </div>
              </div>

              {/* Step 1: Local testing & Git */}
              <div className="p-4 rounded-xl space-y-3 border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                <div className="flex items-center gap-2 font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                  <span className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--color-primary)' }}>2</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Probar localmente y guardar cambios en Git</span>
                </div>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Prueba localmente ejecutando <code className="px-1 py-0.5 rounded font-mono" style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-muted)' }}>npm run dev</code>. Una vez satisfecho, sube tus cambios a GitHub:
                </p>

                <div className="relative p-3 rounded-lg border border-[var(--color-border)] font-mono text-[11px]" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-text-secondary)' }}>
                  <button
                    onClick={() => copyToClipboard('git add .\ngit commit -m "Actualizacion de mi portafolio"\ngit push origin main', 'git')}
                    className="absolute right-2 top-2 p-1.5 rounded transition-colors"
                    style={{ backgroundColor: 'var(--color-muted)', color: 'var(--color-text-secondary)' }}
                    title="Copiar comandos"
                  >
                    {copiedCmd === 'git' ? <Check className="w-3.5 h-3.5" style={{ color: 'var(--color-success)' }} /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <pre className="text-[var(--color-accent)]">
git add .
git commit -m "Actualización de mi portafolio"
git push origin main
                  </pre>
                </div>
              </div>

              {/* Step 2: Import on Vercel */}
              <div className="p-4 rounded-xl space-y-3 border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                <div className="flex items-center gap-2 font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                  <span className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--color-primary)' }}>3</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Conectar con Vercel (Import Project)</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 pl-1" style={{ color: 'var(--color-text-secondary)' }}>
                  <li>Ingresa a <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: 'var(--color-primary)' }}>vercel.com/new</a> e inicia sesión con GitHub.</li>
                  <li>Selecciona el repositorio de tu portafolio y haz clic en <strong>"Import"</strong>.</li>
                  <li>Vercel detectará automáticamente que el Framework es <strong>Vite</strong>.</li>
                </ol>
              </div>

              {/* Step 3: Deployment settings */}
              <div className="p-4 rounded-xl space-y-3 border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                <div className="flex items-center gap-2 font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                  <span className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--color-success)' }}>4</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Configuración de Build en Vercel</span>
                </div>
                <div className="grid grid-cols-2 gap-2 p-3 rounded-lg border border-[var(--color-border)] font-mono text-[11px]" style={{ backgroundColor: 'var(--color-card)' }}>
                  <div>
                    <span className="block" style={{ color: 'var(--color-text-secondary)' }}>Framework Preset:</span>
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
                  Haz clic en <strong>"Deploy"</strong>. Tu sitio estará en vivo con un dominio gratuito SSL (ej. <code className="px-1 py-0.5 rounded border border-[var(--color-success)]/20 font-mono" style={{ backgroundColor: 'var(--color-success)', backgroundOpacity: 0.1, color: 'var(--color-success)' }}>esteban-data-portfolio.vercel.app</code>).
                </p>
              </div>

              {/* Ready status checklist */}
              <div className="p-4 rounded-xl space-y-2 border border-[var(--color-success)]/15" style={{ backgroundColor: 'var(--color-success)', backgroundOpacity: 0.05, color: 'var(--color-text)' }}>
                <span className="font-bold flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-success)' }}>
                  <CheckCircle2 className="w-4 h-4" /> Proyecto Optimizado para Vercel
                </span>
                <p className="leading-relaxed text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>
                  Cada vez que hagas <code className="px-1 py-0.5 rounded border border-[var(--color-success)]/20 font-mono" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-success)' }}>git push</code> a GitHub, Vercel actualizará tu sitio web en tiempo real sin que tengas que volver a configurar nada.
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
