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
  Phone
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
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(user.email);
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  return (
    <motion.section
      id="contacto"
      className="py-20 bg-[var(--color-bg)] relative border-t border-[var(--color-border)] transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-border)] shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span>Contacto Directo & Colaboración</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Tienes un Proyecto o Vacante de Datos?
          </h2>
          <p className="text-base text-[var(--color-text-secondary)]">
            Estoy disponible para roles de tiempo completo, consultorías en BI y proyectos de analytics freelance. Escríbeme y hablemos de cómo optimizar tus datos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-[var(--color-text)] flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
                <span>Información de Contacto</span>
              </h3>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] space-y-2">
                <span className="text-xs text-[var(--color-text-secondary)] block font-medium">Correo Electrónico Directo</span>
                <div className="flex items-center justify-between gap-2">
                  <a 
                    href={`mailto:${user.email}`} 
                    className="text-sm font-semibold text-[var(--color-primary)] hover:underline truncate"
                  >
                    {user.email}
                  </a>
                  <motion.button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors shrink-0 shadow-sm"
                    title="Copiar correo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isEmailCopied ? <Check className="w-4 h-4 text-[var(--color-success)]" /> : <Copy className="w-4 h-4" />}
                  </motion.button>
                </div>
              </div>

              {/* Phone & Location */}
              <div className="space-y-3 text-xs text-[var(--color-text)]">
                {user.phone && (
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Phone className="w-4 h-4 text-[var(--color-success)] shrink-0" />
                    <div>
                      <span className="text-[var(--color-text-secondary)] block text-[10px]">Teléfono / WhatsApp</span>
                      <span className="font-semibold text-[var(--color-text)]">{user.phone}</span>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)]"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <div>
                    <span className="text-[var(--color-text-secondary)] block text-[10px]">Ubicación & Modalidad</span>
                    <span className="font-semibold text-[var(--color-text)]">{user.location}</span>
                  </div>
                </motion.div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2 border-t border-[var(--color-border)] space-y-2">
                <span className="text-xs text-[var(--color-text-secondary)] font-medium block">Redes Profesionales:</span>
                <div className="flex gap-2">
                  <motion.a
                    href={user.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl glass-card text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] flex items-center justify-center gap-2 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Linkedin className="w-4 h-4 text-[var(--color-primary)]" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href={user.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl glass-card text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] flex items-center justify-center gap-2 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github className="w-4 h-4 text-[var(--color-text)]" />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 rounded-2xl space-y-5"
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Enviar un Mensaje Directo
              </h3>

              {status === 'success' && (
                <motion.div
                  className="p-4 rounded-xl bg-[var(--color-success)]/10 border border-[var(--color-success)]/20 text-[var(--color-success)] text-xs font-semibold flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="w-4 h-4 shrink-0" />
                  <span>¡Mensaje enviado con éxito! Me pondré en contacto contigo a la brevedad.</span>
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
                className="w-full py-3 px-6 rounded-xl text-xs font-bold text-white bg-[var(--color-primary)] transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'submitting' ? (
                  <span>Enviando mensaje...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </motion.button>

            </form>
          </div>

        </div>

      </div>
    </motion.section>
  );
};
