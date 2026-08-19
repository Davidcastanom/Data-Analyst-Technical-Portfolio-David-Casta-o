import React from 'react';
import { motion } from 'motion/react';
import { UserProfile, Project } from '../types/portfolio';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  BarChart3, 
  Database, 
  Code2, 
  TrendingUp, 
  Download, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  FileSpreadsheet,
  Sliders
} from 'lucide-react';

interface HeroSectionProps {
  user: UserProfile;
  projects: Project[];
  onOpenConfigurator: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  user, 
  projects, 
  onOpenConfigurator 
}) => {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[var(--color-bg)] transition-colors duration-300">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/5 rounded-full blur-3xl animate-gradient" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[var(--color-secondary)]/5 via-transparent to-[var(--color-primary)]/5 rounded-full blur-3xl animate-gradient" style={{ animationDelay: '4s' }} />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Availability Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs text-[var(--color-text-secondary)] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] -ml-4"></span>
              <span className="font-semibold text-[var(--color-success)]">{t.user.availability}</span>
              <span className="text-[var(--color-border)]">|</span>
              <span className="flex items-center gap-1 text-[var(--color-text-secondary)] font-medium">
                <MapPin className="w-3 h-3" />
                {user.location}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] tracking-tight leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {t.hero.greeting} <span className="text-[var(--color-primary)]">{user.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[var(--color-text)] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {t.user.title} <span className="text-[var(--color-border)] font-normal">|</span> <span className="text-[var(--color-text-secondary)] font-medium">{t.user.specialty}</span>
              </p>
            </motion.div>

            {/* Hero Bio */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-normal">
              {t.user.bio}
            </motion.p>

            {/* Key Data Skills Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
              {[
                { icon: <Database className="w-3.5 h-3.5 text-[var(--color-primary)]" />, text: t.hero.skills.pythonExcel },
                { icon: <BarChart3 className="w-3.5 h-3.5 text-[var(--color-accent)]" />, text: t.hero.skills.sapInventory },
                { icon: <Code2 className="w-3.5 h-3.5 text-[var(--color-text)]" />, text: t.hero.skills.webDev },
                { icon: <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />, text: t.hero.skills.aiAutomation },
              ].map((badge, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 rounded-lg text-xs font-semibold glass-card text-[var(--color-text-secondary)] shadow-sm flex items-center gap-1.5 cursor-default"
                >
                  {badge.icon}
                  {badge.text}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                href="#proyectos"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 shadow-lg hover:shadow-xl transition-shadow"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span>{t.hero.exploreProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[var(--color-text)] glass-card hover:bg-[var(--color-card-hover)] transition-colors shadow-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span>{t.hero.contactMe}</span>
              </motion.a>
            </motion.div>

            {/* Metrics Quick Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 pt-6 border-t border-[var(--color-border)] max-w-xl">
              {[
                { value: `+${user.yearsOfExperience}`, label: t.hero.operationalExperience, color: 'var(--color-text)' },
                { value: `${user.projectsCompleted}`, label: t.hero.technicalProjects, color: 'var(--color-primary)' },
                { value: t.hero.inProgress, label: t.hero.dataAnalysisJunior, color: 'var(--color-success)' },
              ].map((metric, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="glass-card p-3.5 rounded-xl shadow-sm"
                >
                  <div className="text-2xl font-bold font-mono" style={{ color: metric.color }}>{metric.value}</div>
                  <div className="text-xs text-[var(--color-text-secondary)] font-medium">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Profile Photo */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card shadow-2xl animate-float">
                <img 
                  src="https://res.cloudinary.com/unhl90nr/image/upload/v1787090577/foto-perfil_xlp1xx.jpg" 
                  alt={`David Castaño — ${t.user.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full glass-card border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-secondary)] shadow-lg">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  {t.hero.activelyTraining}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
