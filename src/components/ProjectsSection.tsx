import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { 
  FolderKanban, 
  Sparkles, 
  Layers, 
  BookOpen,
  Filter
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Análisis Predictivo', 'Business Intelligence', 'Segmentación & Marketing'];

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-20 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Casos de Estudio & Documentación Notion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proyectos Destacados de Analítica
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Selección de proyectos reales estructurados con la metodología CRISP-DM. Cada proyecto cuenta con su documentación técnica completa embebida directamente desde Notion.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

        {/* Bottom Callout about Notion Embeds */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white text-sm block">
                ¿Por qué documentar proyectos en Notion?
              </span>
              <p className="text-slate-600 dark:text-slate-300">
                Notion permite presentar el ciclo de vida del dato: desde la definición del problema de negocio y diagramas ERD, hasta el código en Python/SQL y las conclusiones ejecutivas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
