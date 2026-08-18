import { PortfolioConfig } from '../types/portfolio';

/**
 * ==============================================================================
 * CONFIGURACIÓN PRINCIPAL DEL PORTAFOLIO DE ANALISTA DE DATOS
 * ==============================================================================
 * Instrucciones de personalización para el usuario:
 * 1. Modifica la sección `user` con tu información personal, correo y redes.
 * 2. En `projects`, cambia los objetos por tus proyectos reales y coloca tu URL pública de Notion.
 * 3. Para obtener tu URL de Notion compartida pública:
 *    - Abre tu página en Notion -> Clic en "Share" (Compartir) -> Activa "Share to web".
 *    - Copia el enlace público (Ejemplo: https://tu-usuario.notion.site/Mi-Proyecto-123456).
 *    - Puedes usar directamente ese enlace en `notionUrl`.
 * ==============================================================================
 */

export const initialPortfolioConfig: PortfolioConfig = {
  user: {
    name: 'David Castaño',
    title: 'Analista de Datos Junior',
    specialty: 'Business Intelligence, Vibe Coding',
    bio: 'Transformo datos complejos en decisiones estratégicas de negocio. Especializado en modelado de datos, tableros interactivos y automatización de análisis con vibe coding.',
    aboutLong: 'Con experiencia analizando grandes volúmenes de datos en sectores clave. Apasionado por descubrir insights ocultos, optimizar procesos de negocio y construir dashboards intuitivos que capaciten a los líderes para tomar decisiones informadas basadas en evidencia.',
    email: 'Esteban7005808@gmail.com',
    phone: '+57 301 684 4364',
    location: 'Colombia (Disponible Remoto)',
    availability: 'Disponible para Proyectos & Tiempo Completo',
    yearsOfExperience: 1,
    projectsCompleted: 3,
    githubUrl: 'https://github.com/Esteban7005808',
    linkedinUrl: 'https://linkedin.com/in/esteban-data-analyst',
    notionPortfolioUrl: 'https://notion.so/esteban-data-portfolio',
    kaggleUrl: 'https://kaggle.com',
    mediumUrl: 'https://medium.com',
    cvPdfUrl: '#',
  },

  projects: [
    {
      id: 'proyecto-1-AuditdataAI-Dataclinig report',
      title: 'AuditdataAI-Data cleaning Report',
      category: 'Limpieza de datos',
      shortDescription: 'Herra',
      fullDescription: 'Este proyecto analiza una base de más de 10,000 clientes telefónicos utilizando SQL para la extracción y limpieza, y Python (Pandas y Scikit-Learn) para el análisis exploratorio (EDA) y entrenamiento de un modelo Random Forest de clasificación.',
      businessImpact: 'Ahorro estimado de $145K USD anuales al reducir la fuga de clientes de mayor valor en un 18.5%.',
      keyMetrics: [
        { label: 'Accuracy Modelo', value: '86.4%' },
        { label: 'ROC-AUC Score', value: '0.89' },
        { label: 'Reducción Fuga', value: '-18.5%' },
        { label: 'Clientes Analizados', value: '10,500+' }
      ],
      tags: ['Python', 'SQL', 'Scikit-Learn', 'Power BI', 'Notion', 'Pandas'],
      // URL de ejemplo de Notion (el usuario la reemplaza por la suya)
      notionUrl: 'https://site-notion-demo.notion.site/Proyecto-Analisis-de-Churn-Telecom-1972834b',
      githubUrl: 'https://github.com/carlosmendez-data/telecom-churn-prediction',
      demoUrl: 'https://app.powerbi.com',
      featured: true,
      imageBgGradient: 'from-blue-600 via-indigo-600 to-violet-700',
      highlights: [
        'Limpieza y tratamiento de valores nulos e imputación de variables categóricas en SQL PostgreSQL.',
        'Análisis de importancia de variables: la antigüedad del contrato y la tarifa mensual resultaron ser los mayores predictores de abandono.',
        'Documentación completa de la metodología Crisp-DM publicada en Notion con código y visualizaciones.'
      ],
      datasetInfo: 'Dataset anonimizado de telecomunicaciones con 21 variables demográficas y de consumo.'
    },
    {
      id: 'proyecto-2-dashboard-comercial',
      title: 'Dashboard de Performance Comercial & Ventas Multi-Canal',
      category: 'Business Intelligence',
      shortDescription: 'Solución integral de BI en Power BI que consolidó 4 fuentes de datos dispersas para medir KPIs de ingresos, margen y cumplimiento de metas.',
      fullDescription: 'Construcción de un modelo de datos en estrella (Star Schema) combinando SQL Server, ventas en Shopify y datos presupuestales en Excel. Implementación de métricas avanzadas en DAX para análisis Year-Over-Year (YoY) y cohortes de clientes.',
      businessImpact: 'Automatización del reporte gerencial reduciendo el tiempo de preparación de 4 horas diarias a actualización instantánea en tiempo real.',
      keyMetrics: [
        { label: 'Fuentes Integradas', value: '4 Sistemas' },
        { label: 'Tiempo Ahorrado', value: '20 hrs/sem' },
        { label: 'Crecimiento Margen', value: '+14.2%' },
        { label: 'Usuarios Activos', value: '35 Líderes' }
      ],
      tags: ['Power BI', 'DAX', 'SQL Server', 'Power Query', 'Excel Avanzado', 'Notion'],
      notionUrl: 'https://site-notion-demo.notion.site/Proyecto-Dashboard-Comercial-Multi-Canal-1972834c',
      githubUrl: 'https://github.com/carlosmendez-data/commercial-sales-powerbi',
      demoUrl: 'https://app.powerbi.com',
      featured: true,
      imageBgGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      highlights: [
        'Diseño de arquitectura de datos escalable con modelo estrella y tabla de calendario personalizada.',
        'Creación de 40+ medidas en DAX incluyendo Time Intelligence (YTD, MTD, SAMEPERIODLASTYEAR).',
        'Filtros de seguridad a nivel de fila (RLS) para adaptar la vista según la región geográfica del gerente.'
      ],
      datasetInfo: '3.2 Millones de transacciones históricas de ventas retail de 2021 a 2025.'
    },
    {
      id: 'proyecto-3-segmentacion-rfm',
      title: 'Segmentación RFM y Comportamiento e-Commerce',
      category: 'Segmentación & Marketing',
      shortDescription: 'Agrupación de clientes basada en Recencia, Frecuencia y Valor Monetario (RFM) mediante clustering K-Means para campañas dirigidas.',
      fullDescription: 'Análisis de comportamiento de compra en tienda en línea para categorizar a la base de clientes en segmentos accionables: Campeones, Leales, En Riesgo y Perdidos. Generación de recomendaciones personalizadas por segmento.',
      businessImpact: 'Aumento del 22% en tasa de conversión y retorno de inversión en marketing (ROAS) de 3.8x.',
      keyMetrics: [
        { label: 'Segmentos Creados', value: '6 Clústeres' },
        { label: 'Aumento ROAS', value: '3.8x' },
        { label: 'Mejora Conversión', value: '+22%' },
        { label: 'Base Clientes', value: '48,000' }
      ],
      tags: ['PostgreSQL', 'Python', 'K-Means', 'Looker Studio', 'Notion', 'Seaborn'],
      notionUrl: 'https://site-notion-demo.notion.site/Proyecto-Segmentacion-RFM-eCommerce-1972834d',
      githubUrl: 'https://github.com/carlosmendez-data/rfm-customer-segmentation',
      featured: true,
      imageBgGradient: 'from-amber-600 via-orange-600 to-red-600',
      highlights: [
        'Cálculo de puntuaciones RFM (1 a 5) directamente mediante consultas complejas en PostgreSQL con funciones de ventana (NTILE).',
        'Validación del número óptimo de clústeres mediante el método del codo (Elbow Method) y Coeficiente de Silueta en Python.',
        'Tablero interactivo conectado a Looker Studio para que el equipo de Growth ejecute campañas automatizadas.'
      ],
      datasetInfo: 'Datos e-Commerce con 48,000 clientes y registro de transacciones de 2 años.'
    }
  ],

  skills: [
    {
      title: 'Bases de Datos & SQL',
      description: 'Consultas complejas, optimización de queries, modelado de bases de datos y creación de vistas analíticas.',
      iconName: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 'Avanzado', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
        { name: 'MySQL', level: 'Avanzado', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
        { name: 'BigQuery', level: 'Intermedio', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
        { name: 'SQL Server (T-SQL)', level: 'Avanzado', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
        { name: 'Snowflake', level: 'Intermedio', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
      ]
    },
    {
      title: 'Visualización & Business Intelligence',
      description: 'Diseño de tableros ejecutivos, UX analítico, cálculo de KPIs y storytelling de datos.',
      iconName: 'BarChart3',
      skills: [
        { name: 'Power BI & DAX', level: 'Experto', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
        { name: 'Tableau', level: 'Avanzado', color: 'bg-blue-600/10 text-blue-300 border-blue-600/20' },
        { name: 'Excel Avanzado (Power Query, VBA)', level: 'Experto', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
        { name: 'Looker Studio', level: 'Avanzado', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
      ]
    },
    {
      title: 'Programación & Análisis Estadístico',
      description: 'Limpieza de datos (Data Wrangling), pruebas de hipótesis, modelos predictivos y scripts de automatización.',
      iconName: 'Code2',
      skills: [
        { name: 'Python (Pandas, NumPy)', level: 'Avanzado', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
        { name: 'Scikit-Learn (ML)', level: 'Intermedio', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
        { name: 'Seaborn / Matplotlib', level: 'Avanzado', color: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
        { name: 'Lenguaje R', level: 'Intermedio', color: 'bg-blue-400/10 text-blue-300 border-blue-400/20' },
      ]
    },
    {
      title: 'Herramientas, Documentación & Documentos',
      description: 'Gestión de proyectos de datos, control de versiones y documentación en Notion.',
      iconName: 'Wrench',
      skills: [
        { name: 'Notion (Documentación & Embeds)', level: 'Experto', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
        { name: 'Git & GitHub', level: 'Avanzado', color: 'bg-slate-500/10 text-slate-300 border-slate-500/20' },
        { name: 'dbt (data build tool)', level: 'Intermedio', color: 'bg-orange-600/10 text-orange-400 border-orange-600/20' },
        { name: 'Google Analytics 4', level: 'Avanzado', color: 'bg-amber-600/10 text-amber-300 border-amber-600/20' },
      ]
    }
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Senior Data Analyst & BI Specialist',
      company: 'TechData Global Solutions',
      location: 'Bogotá, Colombia (Híbrido)',
      period: '2023 - Presente',
      description: 'Liderazgo del diseño e implementación de la arquitectura de reportes ejecutivos para más de 50 partes interesadas interdepartamentales.',
      achievements: [
        'Construcción de 12 tableros interactivos en Power BI conectados a data warehouse en BigQuery.',
        'Liderazgo en la migración de consultas manuales a modelos automatizados en dbt, reduciendo errores humanos en un 95%.',
        'Capacitación a más de 30 analistas junior en mejores prácticas de SQL y modelado dimensional.'
      ],
      technologies: ['Power BI', 'SQL Server', 'BigQuery', 'Python', 'dbt', 'Notion']
    },
    {
      id: 'exp-2',
      role: 'Analista de Datos y BI',
      company: 'Retail Growth Analytics',
      location: 'Remoto',
      period: '2021 - 2023',
      description: 'Análisis de rendimiento de ventas e-commerce, comportamiento de usuarios y optimización de precios.',
      achievements: [
        'Desarrollo del modelo de atribución de marketing multi-canal incrementando el retorno publicitario en un 25%.',
        'Creación de scripts en Python para extracción automática de datos de APIs e integración con MySQL.',
        'Elaboración de reportes semanales de KPI para el equipo directivo C-Level.'
      ],
      technologies: ['Python', 'MySQL', 'Looker Studio', 'Excel Avanzado', 'Pandas']
    }
  ],

  certifications: [
    {
      id: 'cert-1',
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google (Coursera)',
      date: '2023',
      skills: ['SQL', 'R', 'Tableau', 'Limpieza de Datos', 'Data Storytelling']
    },
    {
      id: 'cert-2',
      title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
      issuer: 'Microsoft',
      date: '2023',
      skills: ['DAX', 'Power Query', 'Data Modeling', 'Power BI Service']
    },
    {
      id: 'cert-3',
      title: 'Advanced SQL for Data Scientists',
      issuer: 'DataCamp',
      date: '2022',
      skills: ['PostgreSQL', 'Window Functions', 'Query Optimization', 'CTEs']
    }
  ]
};
