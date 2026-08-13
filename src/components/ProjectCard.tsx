import React from 'react';
import { Project } from '../types/portfolio';
import { 
  BookOpen, 
  Github, 
  ExternalLink, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Database,
  BarChart2
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

/**
 * COMPONENTE ProjectCard:
 * Estructura de tarjeta para proyectos de datos.
 * Incluye badge de categoría, impacto en negocio, tags de tecnologías (SQL, Python, Power BI, Notion)
 * y botón para abrir el modal con el iframe de Notion.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-md flex flex-col justify-between overflow-hidden">
      
      {/* Decorative Top Accent Line */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.imageBgGradient || 'from-blue-600 to-indigo-600'}`} />

      <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
        
        {/* Top Metadata: Category & Featured Pill */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-slate-500 dark:text-slate-400" />
              {project.category}
            </span>
            
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> Destacado
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Short Summary */}
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Business Impact Box */}
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <TrendingUp className="w-4 h-4 shrink-0" />
            <span>Impacto en el Negocio:</span>
          </div>
          <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-normal">
            {project.businessImpact}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {project.keyMetrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 text-left">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">{metric.label}</span>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">{metric.value}</span>
            </div>
          ))}
        </div>

        {/* Technologies Tags */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Card Actions Footer */}
      <div className="p-4 bg-slate-50/80 dark:bg-slate-950/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
        
        {/* BOTÓN PRINCIPAL: Abrir Modal con iframe de Notion */}
        <button
          onClick={() => onOpenModal(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-sm group/btn"
        >
          <BookOpen className="w-4 h-4 text-purple-300 group-hover/btn:scale-110 transition-transform" />
          <span>Ver en Notion</span>
        </button>

        {/* GitHub Repository Secondary Action */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Código fuente en GitHub"
            className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-colors shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>
        )}

        {/* Demo Link if available */}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Dashboard en Vivo"
            className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-colors shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

      </div>
    </div>
  );
};
