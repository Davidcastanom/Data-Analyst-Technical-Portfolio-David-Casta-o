import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile, Project } from '../types/portfolio';
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
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface HeroSectionProps {
  user: UserProfile;
  projects: Project[];
  onOpenConfigurator: () => void;
}

const sampleChartData = [
  { month: 'Ene', churnRate: 24, salesKPI: 42, efficiency: 55 },
  { month: 'Feb', churnRate: 22, salesKPI: 48, efficiency: 62 },
  { month: 'Mar', churnRate: 19, salesKPI: 58, efficiency: 70 },
  { month: 'Abr', churnRate: 16, salesKPI: 65, efficiency: 78 },
  { month: 'May', churnRate: 14, salesKPI: 76, efficiency: 85 },
  { month: 'Jun', churnRate: 11, salesKPI: 88, efficiency: 94 },
];

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
  const [activeTab, setActiveTab] = useState<'kpi' | 'sql' | 'notion'>('kpi');

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
              <span className="font-semibold text-[var(--color-success)]">{user.availability}</span>
              <span className="text-[var(--color-border)]">|</span>
              <span className="flex items-center gap-1 text-[var(--color-text-secondary)] font-medium">
                <MapPin className="w-3 h-3" />
                {user.location}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] tracking-tight leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Hola, soy <span className="text-[var(--color-primary)]">{user.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[var(--color-text)] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {user.title} <span className="text-[var(--color-border)] font-normal">|</span> <span className="text-[var(--color-text-secondary)] font-medium">{user.specialty}</span>
              </p>
            </motion.div>

            {/* Hero Bio */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-normal">
              {user.bio}
            </motion.p>

            {/* Key Data Skills Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
              {[
                { icon: <Database className="w-3.5 h-3.5 text-[var(--color-primary)]" />, text: 'SQL & PostgreSQL' },
                { icon: <BarChart3 className="w-3.5 h-3.5 text-[var(--color-accent)]" />, text: 'Power BI & DAX' },
                { icon: <Code2 className="w-3.5 h-3.5 text-[var(--color-text)]" />, text: 'Python (Pandas)' },
                { icon: <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />, text: 'Notion Docs' },
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
                <span>Explorar Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[var(--color-text)] glass-card hover:bg-[var(--color-card-hover)] transition-colors shadow-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span>Contactar Conmigo</span>
              </motion.a>
            </motion.div>

            {/* Metrics Quick Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 pt-6 border-t border-[var(--color-border)] max-w-xl">
              {[
                { value: `+${user.yearsOfExperience} Años`, label: 'Experiencia Analytics', color: 'var(--color-text)' },
                { value: `+${user.projectsCompleted}`, label: 'Proyectos Finalizados', color: 'var(--color-primary)' },
                { value: '$145K+', label: 'Ahorro & ROI Generado', color: 'var(--color-success)' },
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

          {/* Right Column: Interactive Live Data Preview Widget */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative rounded-2xl glass-card p-5 shadow-xl">
              
              {/* Header Widget */}
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-success)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                  <span className="text-xs font-mono text-[var(--color-text-secondary)] ml-2">live_data_analyst_dashboard.py</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 font-medium">
                  Real-time Insights
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="flex bg-[var(--color-muted)] p-1 rounded-xl mb-4 border border-[var(--color-border)] text-xs">
                {(['kpi', 'sql', 'notion'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="relative flex-1 py-1.5 rounded-lg font-semibold transition-colors"
                    style={{ 
                      color: activeTab === tab ? 'white' : 'var(--color-text-secondary)',
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-pill"
                        className="absolute inset-0 bg-[var(--color-primary)] rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">
                      {tab === 'kpi' ? 'KPIs & Tendencias' : tab === 'sql' ? 'Query SQL' : 'Notion Embed'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Tab Content with AnimatePresence */}
              <AnimatePresence mode="wait">
                {activeTab === 'kpi' && (
                  <motion.div
                    key="kpi"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                      <span className="flex items-center gap-1 font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-[var(--color-success)]" />
                        Optimización de Fuga de Clientes vs Eficiencia (%)
                      </span>
                      <span className="text-[var(--color-success)] font-bold">+38.5% Eficiencia</span>
                    </div>

                    <div className="h-48 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sampleChartData}>
                          <defs>
                            <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#1E40AF" stopOpacity={0.35}/>
                              <stop offset="95%" stopColor="#1E40AF" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorChurn" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#059669" stopOpacity={0.35}/>
                              <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} />
                          <XAxis dataKey="month" stroke="var(--color-text-secondary)" fontSize={10} />
                          <YAxis stroke="var(--color-text-secondary)" fontSize={10} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', borderRadius: '12px', fontSize: '12px', color: 'var(--color-text)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            itemStyle={{ color: 'var(--color-text-secondary)' }}
                          />
                          <Area type="monotone" dataKey="efficiency" stroke="#1E40AF" strokeWidth={2} fillOpacity={1} fill="url(#colorEfficiency)" name="Eficiencia BI" />
                          <Area type="monotone" dataKey="salesKPI" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#colorChurn)" name="Retención (%)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2.5 rounded-xl glass-card border border-[var(--color-border)]">
                        <span className="text-[var(--color-text-secondary)] block text-[10px] font-medium">Métrica Clave</span>
                        <span className="font-semibold text-[var(--color-text)]">Retención de Clientes</span>
                        <span className="text-[var(--color-success)] block font-bold text-sm">88.6% (+14%)</span>
                      </div>
                      <div className="p-2.5 rounded-xl glass-card border border-[var(--color-border)]">
                        <span className="text-[var(--color-text-secondary)] block text-[10px] font-medium">Modelo Predictivo</span>
                        <span className="font-semibold text-[var(--color-text)]">Precisión Random Forest</span>
                        <span className="text-[var(--color-primary)] block font-bold text-sm">ROC-AUC: 0.89</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'sql' && (
                  <motion.div
                    key="sql"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl text-xs font-mono text-slate-200 space-y-2 overflow-x-auto shadow-inner border border-slate-800"
                  >
                    <p className="text-slate-400">// Consulta SQL para segmentación de clientes RFM</p>
                    <p><span className="text-indigo-400">WITH</span> Customer_RFM <span className="text-indigo-400">AS</span> (</p>
                    <p className="pl-4">
                      <span className="text-indigo-400">SELECT</span> customer_id,
                    </p>
                    <p className="pl-8 text-amber-300">
                      <span className="text-cyan-300">NTILE</span>(5) <span className="text-cyan-300">OVER</span> (<span className="text-indigo-400">ORDER BY</span> <span className="text-cyan-300">MAX</span>(order_date) <span className="text-indigo-400">DESC</span>) <span className="text-indigo-400">AS</span> recency_score,
                    </p>
                    <p className="pl-8 text-amber-300">
                      <span className="text-cyan-300">NTILE</span>(5) <span className="text-cyan-300">OVER</span> (<span className="text-indigo-400">ORDER BY</span> <span className="text-cyan-300">COUNT</span>(order_id) <span className="text-indigo-400">DESC</span>) <span className="text-indigo-400">AS</span> frequency_score,
                    </p>
                    <p className="pl-8 text-amber-300">
                      <span className="text-cyan-300">NTILE</span>(5) <span className="text-cyan-300">OVER</span> (<span className="text-indigo-400">ORDER BY</span> <span className="text-cyan-300">SUM</span>(total_amount) <span className="text-indigo-400">DESC</span>) <span className="text-indigo-400">AS</span> monetary_score
                    </p>
                    <p className="pl-4"><span className="text-indigo-400">FROM</span> sales_transactions</p>
                    <p className="pl-4"><span className="text-indigo-400">GROUP BY</span> customer_id</p>
                    <p>)</p>
                    <p><span className="text-indigo-400">SELECT</span> * <span className="text-indigo-400">FROM</span> Customer_RFM;</p>
                  </motion.div>
                )}

                {activeTab === 'notion' && (
                  <motion.div
                    key="notion"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[var(--color-muted)] p-4 rounded-xl border border-[var(--color-border)] space-y-3 text-xs"
                  >
                    <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold">
                      <BookOpen className="w-4 h-4" />
                      <span>Integración Directa con Notion</span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      Cada proyecto del portafolio incluye una vista modal interactiva que embebe tu documentación técnica pública compartida en Notion mediante un <code className="glass-card px-1 py-0.5 rounded border border-[var(--color-border)] font-mono">&lt;iframe&gt;</code>.
                    </p>
                    <div className="p-3 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 rounded-lg text-purple-900 dark:text-purple-200">
                      <span className="font-bold block mb-1">Cómo funciona:</span>
                      Haz clic en "Ver Documentación en Notion" en cualquiera de los 3 proyectos para abrir el visor en tiempo real.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer status bar */}
              <div className="mt-4 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-text-secondary)]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)]" />
                  PostgreSQL & Power BI Conectados
                </span>
                <span className="font-mono text-[var(--color-text-secondary)]">v2.4.0</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
