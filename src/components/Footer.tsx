import React from 'react';
import { motion } from 'motion/react';
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
    <footer className="glass-card border-t border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Bio (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white">
                <BarChart2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-[var(--color-text)] text-base tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{user.name}</span>
            </div>
            <p className="text-[var(--color-text-secondary)] max-w-sm leading-relaxed">
              {user.title} especializado en modelos analíticos, dashboards ejecutivos y toma de decisiones basada en evidencia.
            </p>
          </div>

          {/* Col 2: Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-[var(--color-text)] uppercase tracking-wider block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Navegación</span>
            <ul className="space-y-1.5 font-medium">
              <li><a href="#inicio" className="hover:text-[var(--color-primary)] transition-colors">Inicio</a></li>
              <li><a href="#proyectos" className="hover:text-[var(--color-primary)] transition-colors">Proyectos de Datos</a></li>
              <li><a href="#habilidades" className="hover:text-[var(--color-primary)] transition-colors">Habilidades Técnicas</a></li>
              <li><a href="#experiencia" className="hover:text-[var(--color-primary)] transition-colors">Experiencia Laboral</a></li>
              <li><a href="#contacto" className="hover:text-[var(--color-primary)] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Col 3: Social & Vercel Deploy (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold text-[var(--color-text)] uppercase tracking-wider block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Redes & Despliegue</span>
            <div className="flex items-center gap-3">
              <motion.a
                href={user.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                title="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={user.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                title="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>

              {user.notionPortfolioUrl && (
                <motion.a
                  href={user.notionPortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  title="Notion Workspace"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="w-4 h-4" />
                </motion.a>
              )}
            </div>

            <motion.button
              onClick={onOpenVercelGuide}
              className="w-full mt-2 py-2 px-3 rounded-xl bg-[var(--color-primary)] hover:opacity-90 border border-[var(--color-primary)] text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Desplegar este Portafolio en Vercel</span>
            </motion.button>
          </div>

        </div>

        {/* Bottom copyright & scroll to top */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[var(--color-text-secondary)] text-[11px]">
          <p>© {new Date().getFullYear()} {user.name}. Portafolio de Analista de Datos optimizado para React + Vite + Vercel.</p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};
