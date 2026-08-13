import React, { useState } from 'react';
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
  if (!isOpen) return null;

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

  // Quick parser if user pastes raw CV text
  const handleParseCvText = () => {
    if (!rawCvText.trim()) return;
    setIsParsingCv(true);

    setTimeout(() => {
      // Basic heuristic extractor to help auto-populate
      const lines = rawCvText.split('\n').map(l => l.trim()).filter(Boolean);
      const updatedUser = { ...formData.user };

      if (lines.length > 0 && lines[0].length < 40) {
        updatedUser.name = lines[0];
      }

      // Find email
      const emailMatch = rawCvText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      if (emailMatch) updatedUser.email = emailMatch[0];

      // Find phone
      const phoneMatch = rawCvText.match(/\+?\d[\d\s-]{7,}\d/);
      if (phoneMatch) updatedUser.phone = phoneMatch[0];

      // Find LinkedIn
      const linkedinMatch = rawCvText.match(/https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+/);
      if (linkedinMatch) updatedUser.linkedinUrl = linkedinMatch[0];

      // Find GitHub
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Personalizar Datos de Tu CV</h2>
              <p className="text-xs text-slate-500">Modifica tus datos o pega tu Hoja de Vida para adaptar el portafolio al instante.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs text-slate-700">
          
          {/* OPTION A: Paste Raw CV Text */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-700 flex items-center gap-1.5 text-xs">
                <Upload className="w-4 h-4" /> Importar Pegando Texto de CV
              </span>
              {parseSuccess && (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Datos extraídos e integrados
                </span>
              )}
            </div>
            
            <textarea
              rows={3}
              placeholder="Pega aquí el texto completo de tu Hoja de Vida (Nombre, Correo, LinkedIn, Experiencia...) para auto-completar los campos principales..."
              value={rawCvText}
              onChange={(e) => setRawCvText(e.target.value)}
              className="w-full p-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-slate-400 placeholder-slate-400"
            />

            <button
              onClick={handleParseCvText}
              disabled={isParsingCv || !rawCvText.trim()}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors disabled:opacity-50 shadow-sm"
            >
              {isParsingCv ? 'Analizando texto...' : 'Extraer & Auto-Completar'}
            </button>
          </div>

          {/* User Basic Info Fields */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-600" /> Datos Personales del Analista
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-600 mb-1 font-medium">Nombre Completo</label>
                <input
                  type="text"
                  value={formData.user.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    user: { ...formData.user, name: e.target.value }
                  })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">Título / Rol Principal</label>
                <input
                  type="text"
                  value={formData.user.title}
                  onChange={(e) => setFormData({
                    ...formData,
                    user: { ...formData.user, title: e.target.value }
                  })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">Especialidad</label>
                <input
                  type="text"
                  value={formData.user.specialty}
                  onChange={(e) => setFormData({
                    ...formData,
                    user: { ...formData.user, specialty: e.target.value }
                  })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">Correo Electrónico</label>
                <input
                  type="email"
                  value={formData.user.email}
                  onChange={(e) => setFormData({
                    ...formData,
                    user: { ...formData.user, email: e.target.value }
                  })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">Ubicación</label>
                <input
                  type="text"
                  value={formData.user.location}
                  onChange={(e) => setFormData({
                    ...formData,
                    user: { ...formData.user, location: e.target.value }
                  })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">LinkedIn URL</label>
                <input
                  type="text"
                  value={formData.user.linkedinUrl}
                  onChange={(e) => setFormData({
                    ...formData,
                    user: { ...formData.user, linkedinUrl: e.target.value }
                  })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">GitHub URL</label>
                <input
                  type="text"
                  value={formData.user.githubUrl}
                  onChange={(e) => setFormData({
                    ...formData,
                    user: { ...formData.user, githubUrl: e.target.value }
                  })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-600 mb-1 font-medium">Resumen Profesional (Bio Breve)</label>
              <textarea
                rows={2}
                value={formData.user.bio}
                onChange={(e) => setFormData({
                  ...formData,
                  user: { ...formData.user, bio: e.target.value }
                })}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-400"
              />
            </div>
          </div>

          {/* Notion Shared URLs for the 3 Projects */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" /> URLs de Notion para tus 3 Proyectos
            </h3>

            <div className="space-y-3">
              {formData.projects.map((proj, idx) => (
                <div key={proj.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Proyecto {idx + 1}: {proj.title}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] text-slate-600 font-medium">Título del Proyecto</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const newProjects = [...formData.projects];
                          newProjects[idx].title = e.target.value;
                          setFormData({ ...formData, projects: newProjects });
                        }}
                        className="w-full p-2 rounded-lg bg-white border border-slate-200 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-purple-700 font-semibold">URL Pública de Notion</label>
                      <input
                        type="text"
                        placeholder="https://tu-usuario.notion.site/..."
                        value={proj.notionUrl}
                        onChange={(e) => {
                          const newProjects = [...formData.projects];
                          newProjects[idx].notionUrl = e.target.value;
                          setFormData({ ...formData, projects: newProjects });
                        }}
                        className="w-full p-2 rounded-lg bg-white border border-purple-300 text-purple-900 font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyJson}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-2 transition-colors shadow-sm"
          >
            {copiedJson ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copiedJson ? '¡JSON de Configuración Copiado!' : 'Copiar Configuración en JSON'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
            >
              Cancelar
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Guardar & Aplicar al Portafolio</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
