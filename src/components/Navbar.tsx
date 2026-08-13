import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types/portfolio';
import { 
  BarChart2, 
  Github, 
  Linkedin, 
  Rocket, 
  Menu, 
  X,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  user: UserProfile;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  onOpenConfigurator: () => void;
  onOpenVercelGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  isDarkMode = false,
  onToggleDarkMode,
  onOpenConfigurator, 
  onOpenVercelGuide 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3' 
          : 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo & Name */}
        <a 
          href="#inicio" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 p-0.5 shadow-sm group-hover:bg-slate-800 dark:group-hover:bg-slate-700 transition-all duration-300">
            <div className="w-full h-full rounded-[10px] flex items-center justify-center text-white">
              <BarChart2 className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="font-bold text-slate-900 dark:text-white text-lg tracking-tight block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {user.name}
            </span>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {user.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all duration-200 shadow-none hover:shadow-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Toggle Button (Dark / Light) */}
          {onToggleDarkMode && (
            <button
              onClick={onToggleDarkMode}
              title={isDarkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
              aria-label="Cambiar Tema"
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl transition-all shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span className="text-amber-300">Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-700" />
                  <span>Oscuro</span>
                </>
              )}
            </button>
          )}

          {/* GitHub Link */}
          <a
            href={user.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Perfil de GitHub"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-colors shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn Link */}
          <a
            href={user.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Perfil de LinkedIn"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-colors shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Vercel Deploy & Modification Guide Button */}
          <button
            onClick={onOpenVercelGuide}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 border border-transparent dark:border-slate-700 rounded-xl transition-all shadow-sm"
          >
            <Rocket className="w-3.5 h-3.5 text-blue-400" />
            <span>Guía Despliegue</span>
          </button>
        </div>

        {/* Mobile menu hamburger button & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {onToggleDarkMode && (
            <button
              onClick={onToggleDarkMode}
              title={isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
              aria-label="Cambiar Tema"
              className="p-2 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3 animate-in slide-in-from-top-2 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Cambiar a Modo Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-slate-700" />
                    <span>Cambiar a Modo Oscuro</span>
                  </>
                )}
              </button>
            )}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenVercelGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 rounded-xl shadow-sm"
            >
              <Rocket className="w-4 h-4 text-blue-400" />
              <span>Guía Despliegue & Edición</span>
            </button>

            <div className="flex items-center justify-center gap-4 pt-2 text-slate-600 dark:text-slate-400">
              <a href={user.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1 text-xs">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 text-xs">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
