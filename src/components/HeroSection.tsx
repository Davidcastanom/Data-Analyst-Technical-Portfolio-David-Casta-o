import React, { useState } from 'react';
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

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  user, 
  projects, 
  onOpenConfigurator 
}) => {
  const [activeTab, setActiveTab] = useState<'kpi' | 'sql' | 'notion'>('kpi');

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Decorative Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{user.availability}</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium">
                <MapPin className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                {user.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hola, soy <span className="text-blue-600 dark:text-blue-400">{user.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
                {user.title} <span className="text-slate-300 dark:text-slate-700 font-normal">|</span> <span className="text-slate-600 dark:text-slate-400 font-medium">{user.specialty}</span>
              </p>
            </div>

            {/* Hero Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {user.bio}
            </p>

            {/* Key Data Skills Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> SQL & PostgreSQL
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Power BI & DAX
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" /> Python (Pandas)
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Notion Docs
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Explorar Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
              >
                <span>Contactar Conmigo</span>
              </a>
            </div>

            {/* Metrics Quick Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800 max-w-xl">
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">+{user.yearsOfExperience} Años</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Experiencia Analytics</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono">+{user.projectsCompleted}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Proyectos Finalizados</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">$145K+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Ahorro & ROI Generado</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live Data Preview Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
              
              {/* Header Widget */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">live_data_analyst_dashboard.py</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 font-medium">
                  Real-time Insights
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl mb-4 border border-slate-200/60 dark:border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('kpi')}
                  className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                    activeTab === 'kpi' 
                      ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  KPIs & Tendencias
                </button>
                <button
                  onClick={() => setActiveTab('sql')}
                  className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                    activeTab === 'sql' 
                      ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Query SQL
                </button>
                <button
                  onClick={() => setActiveTab('notion')}
                  className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                    activeTab === 'notion' 
                      ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Notion Embed
                </button>
              </div>

              {/* Tab 1: Recharts KPI Visualizer */}
              {activeTab === 'kpi' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1 font-medium">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      Optimización de Fuga de Clientes vs Eficiencia (%)
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">+38.5% Eficiencia</span>
                  </div>

                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={sampleChartData}>
                        <defs>
                          <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35}/>
                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorChurn" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#059669" stopOpacity={0.35}/>
                            <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                        <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} />
                        <YAxis stroke="#94a3b8" fontSize={10} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px', color: '#f8fafc', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                          itemStyle={{ color: '#e2e8f0' }}
                        />
                        <Area type="monotone" dataKey="efficiency" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorEfficiency)" name="Eficiencia BI" />
                        <Area type="monotone" dataKey="salesKPI" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#colorChurn)" name="Retención (%)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] font-medium">Métrica Clave</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Retención de Clientes</span>
                      <span className="text-emerald-600 dark:text-emerald-400 block font-bold text-sm">88.6% (+14%)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400 block text-[10px] font-medium">Modelo Predictivo</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Precisión Random Forest</span>
                      <span className="text-blue-600 dark:text-blue-400 block font-bold text-sm">ROC-AUC: 0.89</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: SQL Snippet Preview */}
              {activeTab === 'sql' && (
                <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl text-xs font-mono text-slate-200 space-y-2 overflow-x-auto shadow-inner border border-slate-800">
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
                </div>
              )}

              {/* Tab 3: Notion Embed Demo Info */}
              {activeTab === 'notion' && (
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold">
                    <BookOpen className="w-4 h-4" />
                    <span>Integración Directa con Notion</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Cada proyecto del portafolio incluye una vista modal interactiva que embebe tu documentación técnica pública compartida en Notion mediante un <code className="bg-white dark:bg-slate-900 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono">&lt;iframe&gt;</code>.
                  </p>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 rounded-lg text-purple-900 dark:text-purple-200">
                    <span className="font-bold block mb-1">💡 ¿Cómo funciona?</span>
                    Haz clic en "Ver Documentación en Notion" en cualquiera de los 3 proyectos para abrir el visor en tiempo real.
                  </div>
                </div>
              )}

              {/* Footer status bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  PostgreSQL & Power BI Conectados
                </span>
                <span className="font-mono text-slate-400 dark:text-slate-500">v2.4.0</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
