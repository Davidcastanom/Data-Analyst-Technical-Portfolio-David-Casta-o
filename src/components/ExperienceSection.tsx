import React from 'react';
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
    <section id="experiencia" className="py-20 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Trayectoria Profesional & Logros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experiencia Laboral & Certificaciones
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Historial comprobado liderando iniciativas de Business Intelligence, diseño de data warehouses y desarrollo de soluciones analíticas de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience Timeline (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Experiencia Relevante</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-9 group">
                  
                  {/* Timeline Node Dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-blue-400 group-hover:scale-125 transition-transform duration-200" />

                  {/* Experience Card */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3 shadow-sm">
                    
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block">
                          {exp.company}
                        </span>
                      </div>

                      <div className="text-right space-y-1">
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          {exp.period}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-end gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements Bullet points */}
                    <div className="space-y-1.5 pt-1">
                      {exp.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Certifications & Education (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>Certificaciones Oficiales</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                          {cert.title}
                        </h4>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mt-0.5">
                          {cert.issuer} • <span className="text-amber-700 dark:text-amber-400 font-mono font-semibold">{cert.date}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-800/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>

            {/* Continuous Learning Badge */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> Formación Continua
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Constantemente actualizándome en nuevas técnicas de ingeniería de datos, arquitectura cloud en AWS/GCP y modelos de lenguaje aplicados al análisis exploratorio.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
