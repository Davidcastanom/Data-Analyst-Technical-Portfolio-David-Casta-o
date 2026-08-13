import React from 'react';
import { UserProfile } from '../types/portfolio';
import { 
  BarChart2, 
  Github, 
  Linkedin, 
  BookOpen, 
  Globe, 
  ArrowUp, 
  Heart,
  Rocket
} from 'lucide-react';

interface FooterProps {
  user: UserProfile;
  onOpenVercelGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ user, onOpenVercelGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Bio (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-blue-600 flex items-center justify-center text-white">
                <BarChart2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight">{user.name}</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              {user.title} especializado en modelos analíticos, dashboards ejecutivos y toma de decisiones basada en evidencia.
            </p>
          </div>

          {/* Col 2: Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">Navegación</span>
            <ul className="space-y-1.5 font-medium">
              <li><a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#proyectos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Proyectos de Datos</a></li>
              <li><a href="#habilidades" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Habilidades Técnicas</a></li>
              <li><a href="#experiencia" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experiencia Laboral</a></li>
              <li><a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Col 3: Social & Vercel Deploy (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">Redes & Despliegue</span>
            <div className="flex items-center gap-3">
              <a
                href={user.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={user.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {user.notionPortfolioUrl && (
                <a
                  href={user.notionPortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                  title="Notion Workspace"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              onClick={onOpenVercelGuide}
              className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 border border-slate-900 dark:border-blue-600 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Rocket className="w-3.5 h-3.5 text-blue-400 dark:text-blue-200" />
              <span>Desplegar este Portafolio en Vercel</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright & scroll to top */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 dark:text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} {user.name}. Portafolio de Analista de Datos optimizado para React + Vite + Vercel.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
