import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile } from '../types/portfolio';
import { 
  BarChart2, 
  Github, 
  Linkedin, 
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
}

export const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  isDarkMode = false,
  onToggleDarkMode,
  onOpenConfigurator
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['inicio', 'proyectos', 'habilidades', 'experiencia', 'contacto'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Habilidades', href: '#habilidades', id: 'habilidades' },
    { name: 'Experiencia', href: '#experiencia', id: 'experiencia' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-lg py-3' 
          : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-[var(--color-border)] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo & Name */}
        <motion.a 
          href="#inicio" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded-lg p-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] p-0.5 shadow-md group-hover:shadow-lg transition-all duration-300">
            <div className="w-full h-full rounded-[10px] flex items-center justify-center text-white bg-[var(--color-primary)]">
              <BarChart2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="font-bold text-[var(--color-text)] text-lg tracking-tight block group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {user.name}
            </span>
            <span className="text-xs text-[var(--color-primary)] font-medium tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] animate-pulse"></span>
              {user.title}
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[var(--color-muted)] p-1.5 rounded-full border border-[var(--color-border)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200"
              style={{ 
                color: activeSection === link.id 
                  ? 'white' 
                  : 'var(--color-text-secondary)',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-[var(--color-primary)] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {onToggleDarkMode && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleDarkMode}
              title={isDarkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
              aria-label="Cambiar Tema"
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl transition-all glass-card text-[var(--color-text)] hover:bg-[var(--color-card-hover)]"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-[var(--color-accent)]">Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-[var(--color-text-secondary)]" />
                  <span>Oscuro</span>
                </>
              )}
            </motion.button>
          )}

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={user.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Perfil de GitHub"
            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] glass-card rounded-xl transition-colors"
          >
            <Github className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={user.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Perfil de LinkedIn"
            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] glass-card rounded-xl transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Mobile menu hamburger button & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {onToggleDarkMode && (
            <button
              onClick={onToggleDarkMode}
              title={isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
              aria-label="Cambiar Tema"
              className="p-2 text-[var(--color-text)] glass-card rounded-lg"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[var(--color-accent)]" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[var(--color-text)] glass-card rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden glass border-t border-[var(--color-border)] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-card-hover)] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-[var(--color-border)] flex flex-col gap-2">
                {onToggleDarkMode && (
                  <button
                    onClick={onToggleDarkMode}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl glass-card text-[var(--color-text)]"
                  >
                    {isDarkMode ? (
                      <>
                        <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                        <span>Cambiar a Modo Claro</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4" />
                        <span>Cambiar a Modo Oscuro</span>
                      </>
                    )}
                  </button>
                )}

                <div className="flex items-center justify-center gap-4 pt-2 text-[var(--color-text-secondary)]">
                  <a href={user.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] flex items-center gap-1 text-xs">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] flex items-center gap-1 text-xs">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
