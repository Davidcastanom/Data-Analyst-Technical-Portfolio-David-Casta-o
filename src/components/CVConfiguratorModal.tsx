import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioConfig } from '../types/portfolio';
import {
  X,
  SlidersHorizontal,
  Save,
  Copy,
  Check,
  FileText,
  Sparkles,
  BookOpen,
  Link2,
  User,
  Briefcase,
  Upload
} from 'lucide-react';

interface CVConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PortfolioConfig;
  onSaveConfig: (newConfig: PortfolioConfig) => void;
}

export const CVConfiguratorModal: React.FC<CVConfiguratorModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const [formData, setFormData] = useState<PortfolioConfig>(config);
  const [copiedJson, setCopiedJson] = useState(false);
  const [rawCvText, setRawCvText] = useState('');
  const [isParsingCv, setIsParsingCv] = useState(false);
  const [parseSuccess, setParseSuccess] = useState(false);

  const handleSave = () => {
    onSaveConfig(formData);
    onClose();
  };

  const handleCopyJson = () => {
    const code = `import { PortfolioConfig } from '../types/portfolio';\n\nexport const initialPortfolioConfig: PortfolioConfig = ${JSON.stringify(formData, null, 2)};`;
    navigator.clipboard.writeText(code);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2500);
  };

  const handleParseCvText = () => {
    if (!rawCvText.trim()) return;
    setIsParsingCv(true);

    setTimeout(() => {
      const lines = rawCvText.split('\n').map(l => l.trim()).filter(Boolean);
      const updatedUser = { ...formData.user };

      if (lines.length > 0 && lines[0].length < 40) {
        updatedUser.name = lines[0];
      }

      const emailMatch = rawCvText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      if (emailMatch) updatedUser.email = emailMatch[0];

      const phoneMatch = rawCvText.match(/\+?\d[\d\s-]{7,}\d/);
      if (phoneMatch) updatedUser.phone = phoneMatch[0];

      const linkedinMatch = rawCvText.match(/https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+/);
      if (linkedinMatch) updatedUser.linkedinUrl = linkedinMatch[0];

      const githubMatch = rawCvText.match(/https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+/);
      if (githubMatch) updatedUser.githubUrl = githubMatch[0];

      setFormData({
        ...formData,
        user: updatedUser
      });

      setIsParsingCv(false);
      setParseSuccess(true);
      setTimeout(() => setParseSuccess(false), 3000);
    }, 600);
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
            className="relative w-full max-w-4xl max-h-[90vh] glass-card shadow-2xl overflow-hidden flex flex-col rounded-2xl border border-[var(--color-border)]"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[var(--color-border)] flex items-center justify-between" style={{ backgroundColor: 'var(--color-card)' }}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)]">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--color-text)' }}>Personalizar Datos de Tu CV</h2>
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Modifica tus datos o pega tu Hoja de Vida para adaptar el portafolio al instante.</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 glass-card hover:opacity-80 transition-colors rounded-xl"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs" style={{ color: 'var(--color-text-secondary)' }}>

              {/* OPTION A: Paste Raw CV Text */}
              <div className="p-4 rounded-xl space-y-3 border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-card)' }}>
                <div className="flex items-center justify-between">
                  <span className="font-bold flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-primary)' }}>
                    <Upload className="w-4 h-4" /> Importar Pegando Texto de CV
                  </span>
                  {parseSuccess && (
                    <span className="font-semibold flex items-center gap-1" style={{ color: 'var(--color-success)' }}>
                      <Check className="w-3.5 h-3.5" /> Datos extraídos e integrados
                    </span>
                  )}
                </div>

                <textarea
                  rows={3}
                  placeholder="Pega aquí el texto completo de tu Hoja de Vida (Nombre, Correo, LinkedIn, Experiencia...) para auto-completar los campos principales..."
                  value={rawCvText}
                  onChange={(e) => setRawCvText(e.target.value)}
                  className="w-full p-3 rounded-xl text-xs focus:outline-none placeholder-[var(--color-muted)]"
                  style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                />

                <button
                  onClick={handleParseCvText}
                  disabled={isParsingCv || !rawCvText.trim()}
                  className="px-4 py-2 rounded-xl text-white font-semibold transition-colors disabled:opacity-50 shadow-sm"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {isParsingCv ? 'Analizando texto...' : 'Extraer & Auto-Completar'}
                </button>
              </div>

              {/* User Basic Info Fields */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm pb-2 flex items-center gap-2 border-b border-[var(--color-border)]" style={{ color: 'var(--color-text)', fontFamily: "'Space Grotesk', sans-serif" }}>
                  <User className="w-4 h-4" style={{ color: 'var(--color-accent)' }} /> Datos Personales del Analista
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>Nombre Completo</label>
                    <input
                      type="text"
                      value={formData.user.name}
                      onChange={(e) => setFormData({
                        ...formData,
                        user: { ...formData.user, name: e.target.value }
                      })}
                      className="w-full p-2.5 rounded-xl text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>Título / Rol Principal</label>
                    <input
                      type="text"
                      value={formData.user.title}
                      onChange={(e) => setFormData({
                        ...formData,
                        user: { ...formData.user, title: e.target.value }
                      })}
                      className="w-full p-2.5 rounded-xl text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>Especialidad</label>
                    <input
                      type="text"
                      value={formData.user.specialty}
                      onChange={(e) => setFormData({
                        ...formData,
                        user: { ...formData.user, specialty: e.target.value }
                      })}
                      className="w-full p-2.5 rounded-xl text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>Correo Electrónico</label>
                    <input
                      type="email"
                      value={formData.user.email}
                      onChange={(e) => setFormData({
                        ...formData,
                        user: { ...formData.user, email: e.target.value }
                      })}
                      className="w-full p-2.5 rounded-xl text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>Ubicación</label>
                    <input
                      type="text"
                      value={formData.user.location}
                      onChange={(e) => setFormData({
                        ...formData,
                        user: { ...formData.user, location: e.target.value }
                      })}
                      className="w-full p-2.5 rounded-xl text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>LinkedIn URL</label>
                    <input
                      type="text"
                      value={formData.user.linkedinUrl}
                      onChange={(e) => setFormData({
                        ...formData,
                        user: { ...formData.user, linkedinUrl: e.target.value }
                      })}
                      className="w-full p-2.5 rounded-xl text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>GitHub URL</label>
                    <input
                      type="text"
                      value={formData.user.githubUrl}
                      onChange={(e) => setFormData({
                        ...formData,
                        user: { ...formData.user, githubUrl: e.target.value }
                      })}
                      className="w-full p-2.5 rounded-xl text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>Resumen Profesional (Bio Breve)</label>
                  <textarea
                    rows={2}
                    value={formData.user.bio}
                    onChange={(e) => setFormData({
                      ...formData,
                      user: { ...formData.user, bio: e.target.value }
                    })}
                    className="w-full p-2.5 rounded-xl text-sm focus:outline-none focus:border-[var(--color-primary)]"
                    style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                  />
                </div>
              </div>

              {/* Notion Shared URLs for the 3 Projects */}
              <div className="space-y-3 pt-2">
                <h3 className="font-bold text-sm pb-2 flex items-center gap-2 border-b border-[var(--color-border)]" style={{ color: 'var(--color-text)', fontFamily: "'Space Grotesk', sans-serif" }}>
                  <BookOpen className="w-4 h-4" style={{ color: 'var(--color-primary)' }} /> URLs de Notion para tus 3 Proyectos
                </h3>

                <div className="space-y-3">
                  {formData.projects.map((proj, idx) => (
                    <div key={proj.id} className="p-3 rounded-xl border border-[var(--color-border)] space-y-2" style={{ backgroundColor: 'var(--color-card)' }}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold" style={{ color: 'var(--color-text)' }}>Proyecto {idx + 1}: {proj.title}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-medium" style={{ color: 'var(--color-text-secondary)' }}>Título del Proyecto</label>
                          <input
                            type="text"
                            value={proj.title}
                            onChange={(e) => {
                              const newProjects = [...formData.projects];
                              newProjects[idx].title = e.target.value;
                              setFormData({ ...formData, projects: newProjects });
                            }}
                            className="w-full p-2 rounded-lg text-sm focus:outline-none focus:border-[var(--color-primary)]"
                            style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold" style={{ color: 'var(--color-primary)' }}>URL Pública de Notion</label>
                          <input
                            type="text"
                            placeholder="https://tu-usuario.notion.site/..."
                            value={proj.notionUrl}
                            onChange={(e) => {
                              const newProjects = [...formData.projects];
                              newProjects[idx].notionUrl = e.target.value;
                              setFormData({ ...formData, projects: newProjects });
                            }}
                            className="w-full p-2 rounded-lg font-mono text-[11px] focus:outline-none focus:border-[var(--color-primary)]"
                            style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-primary)', color: 'var(--color-text)' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3" style={{ backgroundColor: 'var(--color-card)' }}>
              <button
                onClick={handleCopyJson}
                className="px-4 py-2.5 rounded-xl glass-card hover:opacity-80 text-xs font-semibold flex items-center gap-2 transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {copiedJson ? <Check className="w-4 h-4" style={{ color: 'var(--color-success)' }} /> : <Copy className="w-4 h-4" />}
                <span>{copiedJson ? '¡JSON de Configuración Copiado!' : 'Copiar Configuración en JSON'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl glass-card hover:opacity-80 text-xs font-semibold shadow-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Cancelar
                </button>

                <button
                  onClick={handleSave}
                  className="px-5 py-2.5 rounded-xl text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <Save className="w-4 h-4" />
                  <span>Guardar & Aplicar al Portafolio</span>
                </button>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
