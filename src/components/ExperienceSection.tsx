import React from 'react';
import { motion } from 'motion/react';
import { ExperienceItem, Certification } from '../types/portfolio';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
  certifications: Certification[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  experience, 
  certifications 
}) => {
  return (
    <section id="experiencia" className="py-20 relative border-t border-[var(--color-border)] transition-colors duration-300" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-card" style={{ color: 'var(--color-text-secondary)' }}>
            <Briefcase className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
            <span>Trayectoria Profesional & Logros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--color-text)' }}>
            Experiencia Laboral & Certificaciones
          </h2>
          <p className="text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Historial comprobado liderando iniciativas de Business Intelligence, diseño de data warehouses y desarrollo de soluciones analíticas de alto impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience Timeline (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold flex items-center gap-2 border-b pb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--color-text)', borderColor: 'var(--color-border)' }}
            >
              <Briefcase className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
              <span>Experiencia Relevante</span>
            </motion.h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5" style={{ '--tw-before-bg': 'var(--color-border)' } as React.CSSProperties}>
              <div className="absolute left-3.5 top-0 bottom-0 w-0.5" style={{ background: 'var(--color-border)' }} />
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-9 group"
                >
                  
                  {/* Timeline Node Dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 dark:border-[var(--color-secondary)] border-[var(--color-primary)]" style={{ background: 'var(--color-bg)' }} />

                  {/* Experience Card */}
                  <div className="p-6 rounded-2xl glass-card border border-[var(--color-border)] hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3">
                    
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold transition-colors group-hover:text-[var(--color-primary)]" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--color-text)' }}>
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold block" style={{ color: 'var(--color-primary)' }}>
                          {exp.company}
                        </span>
                      </div>

                      <div className="text-right space-y-1">
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1 border" style={{ background: 'var(--color-muted)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
                          <Calendar className="w-3 h-3" style={{ color: 'var(--color-primary)' }} />
                          {exp.period}
                        </span>
                        <span className="text-[11px] flex items-center justify-end gap-1" style={{ color: 'var(--color-muted)' }}>
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {exp.description}
                    </p>

                    {/* Key Achievements Bullet points */}
                    <div className="space-y-1.5 pt-1">
                      {exp.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono border"
                          style={{ background: 'var(--color-muted)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Certifications & Education (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold flex items-center gap-2 border-b pb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--color-text)', borderColor: 'var(--color-border)' }}
            >
              <Award className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
              <span>Certificaciones Oficiales</span>
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-2xl glass-card border border-[var(--color-border)] hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl border" style={{ background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', color: 'var(--color-accent)' }}>
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--color-text)' }}>
                          {cert.title}
                        </h4>
                        <span className="text-xs font-medium block mt-0.5" style={{ color: 'var(--color-muted)' }}>
                          {cert.issuer} • <span className="font-mono font-semibold" style={{ color: 'var(--color-accent)' }}>{cert.date}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border"
                        style={{ background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', color: 'var(--color-accent)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </motion.div>
              ))}
            </div>

            {/* Continuous Learning Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-5 rounded-2xl glass-card border border-[var(--color-border)] space-y-2"
            >
              <span className="text-xs font-bold flex items-center gap-1" style={{ color: 'var(--color-primary)' }}>
                <Sparkles className="w-4 h-4" /> Formación Continua
              </span>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Constantemente actualizándome en nuevas técnicas de ingeniería de datos, arquitectura cloud en AWS/GCP y modelos de lenguaje aplicados al análisis exploratorio.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
