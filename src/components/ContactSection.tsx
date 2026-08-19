import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UserProfile } from '../types/portfolio';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  Check, 
  Copy, 
  MapPin, 
  MessageSquare, 
  Sparkles,
  Phone,
  Zap,
  Clock,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

interface ContactSectionProps {
  user: UserProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ user }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Build mailto with pre-filled subject and body
    const subject = encodeURIComponent(`Consulta de ${formData.name}${formData.company ? ` — ${formData.company}` : ''}`);
    const body = encodeURIComponent(
      `Hola David,\n\n${formData.message}\n\n---\nNombre: ${formData.name}\nCorreo: ${formData.email}${formData.company ? `\nEmpresa: ${formData.company}` : ''}\n\nEnviado desde tu portafolio profesional.`
    );
    const mailtoUrl = `mailto:${user.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(user.email);
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const phone = user.phone?.replace(/[^0-9]/g, '') || '';
    const msg = encodeURIComponent(`Hola David, me comunico desde tu portafolio profesional. Me gustaría conversar sobre una oportunidad.`);
    window.open(`https://wa.me/57${phone}?text=${msg}`, '_blank');
  };

  return (
    <motion.section
      id="contacto"
      className="py-20 relative border-t border-[var(--color-border)] transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-bg)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero CTA Banner ── */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16 p-8 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-purple-600 opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIi8+PC9zdmc+')] opacity-40" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/15 text-white/90 border border-white/20">
                <Zap className="w-3 h-3" />
                <span>Disponible Ahora</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ¿Listo para convertir tus datos<br className="hidden sm:block" /> en decisiones estratégicas?
              </h2>
              <p className="text-sm text-white/80 max-w-lg">
                Cada proyecto comienza con una conversación. Cuéntame tu desafío y diseño la solución analítica que tu negocio necesita.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <motion.button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] text-xs font-bold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escribir por WhatsApp</span>
              </motion.button>

              <motion.a
                href={`mailto:${user.email}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 text-white text-xs font-bold border border-white/25 hover:bg-white/25 transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-4 h-4" />
                <span>Enviar Correo</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Actions & Info */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Action Cards */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Acciones Rápidas
              </h3>

              {/* WhatsApp Card */}
              <motion.button
                onClick={handleWhatsApp}
                className="w-full p-4 rounded-xl glass-card border border-[var(--color-border)] flex items-center gap-4 text-left hover:border-green-500/30 transition-all group"
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-bold text-[var(--color-text)] block">WhatsApp Directo</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Respuesta inmediata · {user.phone}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-green-600 group-hover:translate-x-1 transition-all shrink-0" />
              </motion.button>

              {/* Email Card */}
              <motion.button
                onClick={handleCopyEmail}
                className="w-full p-4 rounded-xl glass-card border border-[var(--color-border)] flex items-center gap-4 text-left hover:border-[var(--color-primary)]/30 transition-all group"
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-3 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 shrink-0">
                  <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-bold text-[var(--color-text)] block">Correo Electrónico</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)] truncate block">{user.email}</span>
                </div>
                {isEmailCopied ? (
                  <Check className="w-4 h-4 text-[var(--color-success)] shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-all shrink-0" />
                )}
              </motion.button>

              {/* LinkedIn Card */}
              <motion.a
                href={user.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-xl glass-card border border-[var(--color-border)] flex items-center gap-4 text-left hover:border-blue-500/30 transition-all group"
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-bold text-[var(--color-text)] block">LinkedIn</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Conectemos profesionalmente</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
              </motion.a>

              {/* GitHub Card */}
              <motion.a
                href={user.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-xl glass-card border border-[var(--color-border)] flex items-center gap-4 text-left hover:border-slate-500/30 transition-all group"
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20 shrink-0">
                  <Github className="w-5 h-5 text-[var(--color-text)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-bold text-[var(--color-text)] block">GitHub</span>
                  <span className="text-[11px] text-[var(--color-text-secondary)]">Repositorios y código fuente</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] group-hover:translate-x-1 transition-all shrink-0" />
              </motion.a>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl bg-[var(--color-success)]/5 border border-[var(--color-success)]/15 flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-3 h-3 rounded-full bg-[var(--color-success)] animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-[var(--color-success)] animate-ping opacity-50" />
              </div>
              <div>
                <span className="text-xs font-bold text-[var(--color-success)] block">Disponible para nuevas oportunidades</span>
                <span className="text-[10px] text-[var(--color-text-secondary)]">{user.location} · Tiempo completo o freelance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 rounded-2xl space-y-5"
            >
              <div className="space-y-1 mb-2">
                <h3 className="text-lg font-bold text-[var(--color-text)] flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Send className="w-5 h-5 text-[var(--color-primary)]" />
                  <span>Envíame un Mensaje</span>
                </h3>
                <p className="text-[11px] text-[var(--color-text-secondary)]">
                  Completa el formulario y se abrirá tu cliente de correo con el mensaje prellenado.
                </p>
              </div>

              {status === 'success' && (
                <motion.div
                  className="p-4 rounded-xl bg-[var(--color-success)]/10 border border-[var(--color-success)]/20 text-[var(--color-success)] text-xs font-semibold flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="w-4 h-4 shrink-0" />
                  <span>¡Cliente de correo abierto! Revisa tu aplicación de email para enviar el mensaje.</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  className="space-y-1.5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <label className="text-xs font-semibold text-[var(--color-text-secondary)] block">
                    Tu Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Ana María"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-xs text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
                  />
                </motion.div>

                <motion.div
                  className="space-y-1.5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <label className="text-xs font-semibold text-[var(--color-text-secondary)] block">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-xs text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
                  />
                </motion.div>
              </div>

              <motion.div
                className="space-y-1.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <label className="text-xs font-semibold text-[var(--color-text-secondary)] block">
                  Empresa / Organización (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa o startup"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-xs text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
                />
              </motion.div>

              <motion.div
                className="space-y-1.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <label className="text-xs font-semibold text-[var(--color-text-secondary)] block">
                  Mensaje o Detalles del Proyecto <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto, las fuentes de datos que manejas o la vacante que deseas cubrir..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] text-xs text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 px-6 rounded-xl text-xs font-bold text-white bg-[var(--color-primary)] transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 hover:brightness-110"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'submitting' ? (
                  <span>Abriendo correo...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje por Correo</span>
                  </>
                )}
              </motion.button>

              <p className="text-center text-[10px] text-[var(--color-text-secondary)]">
                Se abrirá tu cliente de correo con el mensaje prellenado a <strong>{user.email}</strong>
              </p>

            </form>
          </div>

        </div>

      </div>
    </motion.section>
  );
};
