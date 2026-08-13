import React, { useState } from 'react';
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
  if (!isOpen) return null;

  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-900 dark:bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-400/30 text-blue-400">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Guía de Modificación Interna & Despliegue</h2>
              <p className="text-xs text-slate-300">Instrucciones para modificar tu portafolio y desplegarlo en Vercel.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs text-slate-700 dark:text-slate-300">
          
          {/* Step 0: How to edit internally */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-slate-900 dark:bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
              <span className="flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Edición de Datos Personales y Proyectos
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Toda la información de tu perfil (nombre, correo, biografía, redes, proyectos y URLs de Notion) se gestiona directamente en el archivo:
            </p>
            <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-[11px] text-slate-800 dark:text-slate-200 font-semibold">
              src/data/portfolioData.ts
            </div>
            <div className="p-3 bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> Vincular Páginas Públicas de Notion:
              </span>
              <p className="text-[11px] leading-relaxed">
                Abre tu página de Notion → Clic en <strong>Share</strong> (Compartir) → Activa <strong>"Share to web"</strong> → Copia el enlace y pégalo en la propiedad <code className="bg-white dark:bg-slate-900 px-1 py-0.5 rounded border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 font-bold">notionUrl</code> de tus proyectos.
              </p>
            </div>
          </div>

          {/* Step 1: Local testing & Git */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">2</span>
              <span>Probar localmente y guardar cambios en Git</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Prueba localmente ejecutando <code className="text-blue-700 dark:text-blue-400 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">npm run dev</code>. Una vez satisfecho, sube tus cambios a GitHub:
            </p>

            <div className="relative p-3 rounded-lg bg-slate-900 dark:bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-200">
              <button
                onClick={() => copyToClipboard('git add .\ngit commit -m "Actualizacion de mi portafolio"\ngit push origin main', 'git')}
                className="absolute right-2 top-2 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copiar comandos"
              >
                {copiedCmd === 'git' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <pre className="text-blue-300">
git add .
git commit -m "Actualización de mi portafolio"
git push origin main
              </pre>
            </div>
          </div>

          {/* Step 2: Import on Vercel */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">3</span>
              <span>Conectar con Vercel (Import Project)</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-slate-600 dark:text-slate-300 pl-1">
              <li>Ingresa a <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline">vercel.com/new</a> e inicia sesión con GitHub.</li>
              <li>Selecciona el repositorio de tu portafolio y haz clic en <strong>"Import"</strong>.</li>
              <li>Vercel detectará automáticamente que el Framework es <strong>Vite</strong>.</li>
            </ol>
          </div>

          {/* Step 3: Deployment settings */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">4</span>
              <span>Configuración de Build en Vercel</span>
            </div>
            <div className="grid grid-cols-2 gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-[11px]">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">Framework Preset:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Vite</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">Build Command:</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">npm run build</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">Output Directory:</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">dist</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">Install Command:</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">npm install</span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 pt-1">
              Haz clic en <strong>"Deploy"</strong>. Tu sitio estará en vivo con un dominio gratuito SSL (ej. <code className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-1 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 font-mono">esteban-data-portfolio.vercel.app</code>).
            </p>
          </div>

          {/* Ready status checklist */}
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-2">
            <span className="font-bold flex items-center gap-1.5 text-xs text-emerald-800 dark:text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Proyecto Optimizado para Vercel
            </span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[11px]">
              Cada vez que hagas <code className="bg-white dark:bg-slate-900 px-1 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 font-mono">git push</code> a GitHub, Vercel actualizará tu sitio web en tiempo real sin que tengas que volver a configurar nada.
            </p>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
          >
            <Globe className="w-4 h-4 text-blue-400 dark:text-blue-200" />
            <span>Ir a Vercel.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors shadow-sm"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
