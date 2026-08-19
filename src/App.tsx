import React, { useState, useEffect } from 'react';
import { initialPortfolioConfig } from './data/portfolioData';
import { PortfolioConfig, Project } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVConfiguratorModal } from './components/CVConfiguratorModal';

export default function App() {
  const [portfolioConfig, setPortfolioConfig] = useState<PortfolioConfig>(initialPortfolioConfig);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);

  // Dark Mode state with localStorage persistence
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-slate-900 dark:selection:bg-blue-600 selection:text-white antialiased transition-colors duration-300">
      
      {/* Sticky Top Navigation */}
      <Navbar 
        user={portfolioConfig.user}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenConfigurator={() => setIsConfiguratorOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          user={portfolioConfig.user}
          projects={portfolioConfig.projects}
          onOpenConfigurator={() => setIsConfiguratorOpen(true)}
        />

        {/* 3 Projects Section with Notion Modal Trigger */}
        <ProjectsSection 
          projects={portfolioConfig.projects}
          onOpenModal={(proj) => setSelectedProject(proj)}
        />

        {/* Skills Section with Tools Icons */}
        <SkillsSection 
          skillCategories={portfolioConfig.skills}
        />

        {/* Experience & Certifications Section */}
        <ExperienceSection 
          experience={portfolioConfig.experience}
          certifications={portfolioConfig.certifications}
        />

        {/* Contact Section */}
        <ContactSection 
          user={portfolioConfig.user}
        />
      </main>

      {/* Footer */}
      <Footer 
        user={portfolioConfig.user}
      />

      {/* Notion Iframe Modal Component */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* CV Data Configurator Modal */}
      <CVConfiguratorModal 
        isOpen={isConfiguratorOpen}
        onClose={() => setIsConfiguratorOpen(false)}
        config={portfolioConfig}
        onSaveConfig={(newConfig) => setPortfolioConfig(newConfig)}
      />

    </div>
  );
}
