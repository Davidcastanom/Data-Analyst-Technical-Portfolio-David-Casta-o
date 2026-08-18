import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SkillCategory } from '../types/portfolio';
import {
  Database,
  BarChart3,
  Code2,
  Wrench,
  CheckCircle2,
  Sparkles,
  Layers,
  Search,
  Check
} from 'lucide-react';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5 text-[var(--color-primary)]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[var(--color-accent)]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[var(--color-secondary)]" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-[var(--color-accent)]" />;
    }
  };

  const filteredCategories = skillCategories.filter(cat => {
    if (selectedCategory !== 'all' && cat.title !== selectedCategory) return false;
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();
    const hasMatchingSkill = cat.skills.some(s => s.name.toLowerCase().includes(query));
    const hasMatchingCategory = cat.title.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);

    return hasMatchingSkill || hasMatchingCategory;
  });

  return (
    <section id="habilidades" className="py-20 bg-[var(--color-bg)] relative border-t border-[var(--color-border)] transition-colors duration-300">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-card text-[var(--color-text)] border border-[var(--color-border)] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span>Stack Técnico & Herramientas de Análisis</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Habilidades & Dominio de Herramientas
          </h2>
          <p className="text-base text-[var(--color-text-secondary)]">
            Especializado en el ecosistema completo de datos: desde la extracción y modelado dimensional en SQL, hasta la ciencia de datos en Python y la creación de tableros estratégicos en Power BI.
          </p>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 glass-card p-3 rounded-2xl border border-[var(--color-border)] shadow-sm">

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[var(--color-primary)] text-white shadow-sm'
                  : 'glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)]'
              }`}
            >
              Todas las Áreas
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.title
                    ? 'bg-[var(--color-primary)] text-white shadow-sm'
                    : 'glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)]'
                }`}
              >
                {cat.title.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Live Tool Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[var(--color-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar herramienta (ej. SQL, DAX)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl glass-card border border-[var(--color-border)] text-xs text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all"
            />
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="p-6 rounded-2xl glass-card border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 space-y-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-start gap-3 border-b border-[var(--color-border)] pb-3">
                <div className="p-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)]">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-[var(--color-text)] tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)]">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="px-3 py-2 rounded-xl text-xs font-semibold glass-card text-[var(--color-text)] border border-[var(--color-border)] flex items-center justify-between gap-3 transition-all"
                    whileHover={{ scale: 1.03 }}
                  >
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--color-muted)] border border-[var(--color-border)] text-[var(--color-text-secondary)]">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};
