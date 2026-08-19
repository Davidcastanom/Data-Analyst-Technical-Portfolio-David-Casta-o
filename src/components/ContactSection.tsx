import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UserProfile } from '../types/portfolio';
import { useLanguage } from '../i18n/LanguageContext';
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
  const { t } = useLanguage();
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(user.email);
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const phone = user.phone?.replace(/[^0-9]/g, '') || '';
    const msg = encodeURIComponent(t.contact.whatsappMsg);
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
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
                <span>{t.contact.availableNow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {t.contact.ctaTitle}
              </h2>
              <p className="text-sm text-white/80 max-w-lg">
                {t.contact.ctaDescription}
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
                <span>{t.contact.writeWhatsApp}</span>
              </motion.button>

              <motion.a
                href={`mailto:${user.email}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 text-white text-xs font-bold border border-white/25 hover:bg-white/25 transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-4 h-4" />
                <span>{t.contact.sendEmail}</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* ── Action Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">

          {/* WhatsApp */}
          <motion.button
            onClick={handleWhatsApp}
            className="p-5 rounded-xl glass-card border border-[var(--color-border)] flex flex-col items-center gap-3 text-center hover:border-green-500/30 transition-all group"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <span className="text-sm font-bold text-[var(--color-text)] block">{t.contact.whatsapp}</span>
              <span className="text-[10px] text-[var(--color-text-secondary)]">{user.phone}</span>
            </div>
          </motion.button>

          {/* Email */}
          <motion.button
            onClick={handleCopyEmail}
            className="p-5 rounded-xl glass-card border border-[var(--color-border)] flex flex-col items-center gap-3 text-center hover:border-[var(--color-primary)]/30 transition-all group"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
              <Mail className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <span className="text-sm font-bold text-[var(--color-text)] block">{t.contact.email}</span>
              <span className="text-[10px] text-[var(--color-text-secondary)]">{isEmailCopied ? t.contact.emailCopied : t.contact.emailCopyHint}</span>
            </div>
          </motion.button>

          {/* LinkedIn */}
          <motion.a
            href={user.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl glass-card border border-[var(--color-border)] flex flex-col items-center gap-3 text-center hover:border-blue-500/30 transition-all group"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <span className="text-sm font-bold text-[var(--color-text)] block">{t.contact.linkedin}</span>
              <span className="text-[10px] text-[var(--color-text-secondary)]">{t.contact.linkedinHint}</span>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={user.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl glass-card border border-[var(--color-border)] flex flex-col items-center gap-3 text-center hover:border-slate-500/30 transition-all group"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20">
              <Github className="w-6 h-6 text-[var(--color-text)]" />
            </div>
            <div>
              <span className="text-sm font-bold text-[var(--color-text)] block">{t.contact.github}</span>
              <span className="text-[10px] text-[var(--color-text-secondary)]">{t.contact.githubHint}</span>
            </div>
          </motion.a>

        </div>

        {/* ── Bottom Info Row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Location */}
          <div className="p-4 rounded-xl glass-card border border-[var(--color-border)] flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
            <div>
              <span className="text-xs font-bold text-[var(--color-text)] block">{user.location}</span>
              <span className="text-[10px] text-[var(--color-text-secondary)]">{t.contact.remoteOrOnsite}</span>
            </div>
          </div>

          {/* Availability */}
          <div className="p-4 rounded-xl glass-card border border-[var(--color-border)] flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-3 h-3 rounded-full bg-[var(--color-success)] animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[var(--color-success)] animate-ping opacity-50" />
            </div>
            <div>
              <span className="text-xs font-bold text-[var(--color-success)] block">{t.contact.available}</span>
              <span className="text-[10px] text-[var(--color-text-secondary)]">{t.contact.fullTimeFreelance}</span>
            </div>
          </div>

          {/* Response time */}
          <div className="p-4 rounded-xl glass-card border border-[var(--color-border)] flex items-center gap-3">
            <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
            <div>
              <span className="text-xs font-bold text-[var(--color-text)] block">{t.contact.fastResponse}</span>
              <span className="text-[10px] text-[var(--color-text-secondary)]">{t.contact.under24Hours}</span>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};
