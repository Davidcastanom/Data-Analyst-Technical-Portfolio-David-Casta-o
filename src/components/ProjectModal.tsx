import React, { useState } from 'react';
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

/**
 * COMPONENTE ProjectModal:
 * Renderiza una ventana emergente que incluye un <iframe> para mostrar
 * la página pública compartida de Notion del proyecto.
 * Incluye pestañas para ver la vista embebida, el resumen ejecutivo y las
 * instrucciones de personalización de URL.
 */
export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'iframe' | 'summary' | 'config'>('iframe');
  const [isCopied, setIsCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Convierte URL de Notion si es necesario o asegura formato embebido
  const getEmbeddableNotionUrl = (url: string) => {
    if (!url) return '';
    // Si la URL ya contiene embed o Notion site público
    if (url.includes('notion.so/embed/')) return url;
    return url;
  };

  const notionEmbedUrl = getEmbeddableNotionUrl(project.notionUrl);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.notionUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className={`w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 ${
          isFullscreen 
            ? 'h-full max-w-none rounded-none border-0' 
            : 'max-w-5xl max-h-[92vh]'
        }`}
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-mono hidden sm:inline-block">
                  id: {project.id}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Top Right Controls */}
          <div className="flex items-center gap-2">
            
            {/* Copiar Enlace Notion */}
            <button
              onClick={handleCopyLink}
              title="Copiar Enlace de Notion"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors shadow-sm"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copiar Link</span>
                </>
              )}
            </button>

            {/* Abrir directamente en Notion en nueva pestaña */}
            <a
              href={project.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir página en Notion"
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Toggle Pantalla Completa */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Restaurar' : 'Pantalla Completa'}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors shadow-sm"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Cerrar Modal */}
            <button
              onClick={onClose}
              title="Cerrar modal"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors ml-1 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex bg-slate-100 dark:bg-slate-950 px-4 pt-2 border-b border-slate-200 dark:border-slate-800 gap-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('iframe')}
            className={`px-4 py-2.5 rounded-t-lg border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'iframe'
                ? 'border-purple-600 text-purple-900 dark:text-purple-300 bg-white dark:bg-slate-900 font-bold'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Documentación Notion (Embebida)</span>
          </button>

          <button
            onClick={() => setActiveTab('summary')}
            className={`px-4 py-2.5 rounded-t-lg border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'summary'
                ? 'border-blue-600 text-blue-900 dark:text-blue-300 bg-white dark:bg-slate-900 font-bold'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Resumen Técnico & Impacto</span>
          </button>

          <button
            onClick={() => setActiveTab('config')}
            className={`px-4 py-2.5 rounded-t-lg border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'config'
                ? 'border-amber-600 text-amber-900 dark:text-amber-300 bg-white dark:bg-slate-900 font-bold'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>¿Cómo cambiar la URL de Notion?</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 bg-slate-50/50 dark:bg-slate-900/50">
          
          {/* TAB 1: NOTION IFRAME EMBED */}
          {activeTab === 'iframe' && (
            <div className="space-y-4">
              
              {/* Informative Notice Box */}
              <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs text-purple-900 dark:text-purple-200 flex items-start gap-3">
                <Info className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-purple-950 dark:text-purple-200">
                    Visor en vivo de la documentación compartida en Notion
                  </p>
                  <p className="text-purple-800 dark:text-purple-300 leading-relaxed">
                    Si la vista previa no carga directamente dentro del iFrame debido a permisos de seguridad de Notion, haz clic en el botón <span className="font-semibold text-slate-900 dark:text-white">"Abrir en Notion"</span> superior para ver el documento completo en una nueva pestaña.
                  </p>
                </div>
              </div>

              {/* Iframe Container */}
              <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-inner min-h-[500px]">
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-white dark:bg-slate-900 z-10">
                    <RefreshCw className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-spin" />
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Cargando documento de Notion...</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
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
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs shadow-sm">
                <span className="text-slate-600 dark:text-slate-300">¿Deseas editar o duplicar este proyecto en tu propia cuenta de Notion?</span>
                <a
                  href={project.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Ver Página Oficial en Notion
                </a>
              </div>

            </div>
          )}

          {/* TAB 2: TECHNICAL SUMMARY & METRICS */}
          {activeTab === 'summary' && (
            <div className="space-y-6 text-slate-700 dark:text-slate-300 text-sm">
              
              {/* Business Impact Banner */}
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold">
                  <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Resultado Principal de Negocio</span>
                </div>
                <p className="text-base text-slate-900 dark:text-white font-semibold">
                  {project.businessImpact}
                </p>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Descripción General del Análisis
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  {project.fullDescription}
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Indicadores Clave de Rendimiento (KPIs)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.keyMetrics.map((metric, idx) => (
                    <div key={idx} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-sm">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1 font-medium">{metric.label}</span>
                      <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400 font-mono">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Bullet Points */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Puntos Destacados & Metodología Crisp-DM
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dataset Info */}
              {project.datasetInfo && (
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs flex items-center gap-2 shadow-sm">
                  <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Información del Dataset:</span>
                  <span className="text-slate-900 dark:text-slate-200 font-mono font-semibold">{project.datasetInfo}</span>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: CONFIGURATION INSTRUCTIONS */}
          {activeTab === 'config' && (
            <div className="space-y-5 text-xs text-slate-700 dark:text-slate-300">
              
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 space-y-2">
                <h4 className="font-bold text-amber-950 dark:text-amber-100 flex items-center gap-1.5 text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Guía para insertar tus propias páginas de Notion
                </h4>
                <p className="leading-relaxed">
                  Para vincular tu propio portafolio de Notion a este componente, sigue estos 3 sencillos pasos:
                </p>
              </div>

              <ol className="space-y-3 list-decimal list-inside text-slate-700 dark:text-slate-300">
                <li className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
                  <span className="font-bold text-slate-900 dark:text-white">1. Publica tu página en Notion:</span>
                  <p className="text-slate-600 dark:text-slate-400 pl-4">En Notion, abre la página de tu proyecto → Clic en el botón <strong>"Share"</strong> (Compartir) en la esquina superior derecha → Activa la opción <strong>"Share to web"</strong>.</p>
                </li>
                
                <li className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
                  <span className="font-bold text-slate-900 dark:text-white">2. Copia la URL pública:</span>
                  <p className="text-slate-600 dark:text-slate-400 pl-4">Haz clic en <strong>"Copy web link"</strong>. La URL lucirá similar a: <code className="text-purple-700 dark:text-purple-400 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">https://tu-usuario.notion.site/Mi-Proyecto-123456</code>.</p>
                </li>

                <li className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
                  <span className="font-bold text-slate-900 dark:text-white">3. Reemplaza la propiedad `notionUrl` en el archivo de datos:</span>
                  <p className="text-slate-600 dark:text-slate-400 pl-4">Abre <code className="text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">src/data/portfolioData.ts</code> directamente en el código fuente.</p>
                </li>
              </ol>

              {/* Code Snippet Box */}
              <div className="space-y-2">
                <span className="font-bold text-slate-500 dark:text-slate-400">Ejemplo de código en `src/data/portfolioData.ts`:</span>
                <pre className="p-4 rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
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

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
