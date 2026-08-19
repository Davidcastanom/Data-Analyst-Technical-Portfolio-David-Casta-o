export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Navbar
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
      darkMode: 'Oscuro',
      lightMode: 'Claro',
      toggleTheme: 'Cambiar Tema',
      mobileMenu: 'Menú',
    },

    // User Profile
    user: {
      title: 'Analista de Datos Junior',
      specialty: 'Gestión Administrativa · Automatización · IA',
      bio: 'Más de 10 años construyendo una base operativa sólida en producción, logística y control de inventarios — experiencia que hoy se traduce directamente en pensamiento analítico, disciplina en el manejo de procesos y capacidad de ejecución bajo estándares de calidad. Actualmente en formación activa en Análisis de Datos y Tecnología en Gestión Administrativa.',
      aboutLong: 'Profesional en transición estratégica hacia el análisis de datos y la gestión administrativa, con más de 10 años de trayectoria en entornos operativos exigentes. Combina esta base con formación activa en Tecnología en Gestión Administrativa, el programa Análisis de Datos Junior de Ruta Tech (iniciativa Estud-IA de la Alcaldía de Medellín) y proyectos propios de desarrollo web, automatización e Inteligencia Artificial aplicada. El resultado es un perfil híbrido: la rigurosidad de quien ya sabe controlar procesos críticos, sumada al manejo de herramientas digitales y datos para tomar mejores decisiones.',
      availability: 'Disponible para Proyectos & Tiempo Completo',
    },

    // Hero
    hero: {
      greeting: 'Hola, soy',
      activelyTraining: 'En formación activa',
      exploreProjects: 'Explorar Proyectos',
      contactMe: 'Contactar Conmigo',
      yearsExperience: 'Años',
      operationalExperience: 'Experiencia Operativa',
      technicalProjects: 'Proyectos Técnicos',
      inProgress: 'En Curso',
      dataAnalysisJunior: 'Análisis de Datos Junior',
      skills: {
        pythonExcel: 'Python & Excel Avanzado',
        sapInventory: 'SAP HANA & Control de Inventarios',
        webDev: 'HTML / CSS / JavaScript',
        aiAutomation: 'IA Generativa & Automatización',
      },
    },

    // Projects
    projects: {
      badge: 'Casos de Estudio & Documentación',
      title: 'Proyectos Destacados de Analítica',
      description: 'Selección de proyectos reales estructurados con la metodología CRISP-DM. Cada proyecto cuenta con su documentación técnica completa embebida directamente desde Notion.',
      all: 'Todos',
      viewInNotion: 'Ver en Notion',
      viewOnGitHub: 'Ver en GitHub',
      viewLiveDemo: 'Ver Demo en Vivo',
      businessImpact: 'Impacto en el Negocio:',
      featured: 'Destacado',
      video: 'Video',
      whyNotion: '¿Por qué documentar proyectos en Notion?',
      notionDescription: 'Notion permite presentar el ciclo de vida del dato: desde la definición del problema de negocio y diagramas ERD, hasta el código en Python/SQL y las conclusiones ejecutivas.',
      data: {
        'project-auditdata-ai': {
          shortDescription: 'Plataforma de limpieza y validación de calidad de datos con reportes académicos PDF e IA.',
          fullDescription: 'Herramienta diseñada para diagnosticar, documentar y preparar datasets antes de que sean utilizados en análisis, visualización o toma de decisiones. Motor de 28 categorías de problemas de calidad por columna, copiloto IA (Groq/Llama3.1), 10 acciones de limpieza documentadas con bitácora a nivel de celda, reportes PDF académicos de 10 secciones, autenticación Google OAuth e historial en la nube vía Supabase.',
          businessImpact: 'Automatiza el proceso de data cleaning que tradicionalmente toma horas manuales, generando trazabilidad completa desde la carga hasta el reporte final.',
          highlights: [
            'Motor de diagnóstico con 28 categorías de problemas, severidad, confianza y señal (CONFIRMADO / A_REVISAR).',
            'Copiloto IA con Groq/Llama3.1: chat interactivo por columna y análisis profundo con fila exacta del archivo.',
            'Reportes profesionales: PDF académico (10 secciones), Markdown, bitácora de cambios y exportación XLSX.',
            'Autenticación Google OAuth + historial en la nube con consentimiento y borrado propio.',
          ],
          datasetInfo: 'Herramienta generalista — funciona con cualquier dataset CSV.',
        },
        'project-credit-intelligence': {
          shortDescription: 'Sistema de consulta, comparación, simulación y seguimiento de tasas de interés bancarias y usura en Colombia.',
          fullDescription: 'Sistema completo que incluye comparador de tasas de 23 entidades financieras, calculadora de crédito (sistema francés), dashboard estadístico con gráficos Chart.js, alertas de proximidad al límite legal de usura, ETL automático desde datos.gov.co y panel administrativo protegido. Desplegado en Render con actualización mensual vía GitHub Actions.',
          businessImpact: 'Herramienta de referencia para ciudadanos colombianos que necesitan comparar tasas bancarias de forma transparente y evitar caer en tasas usurarias.',
          highlights: [
            'Pipeline ETL automatizado con extracción desde datos.gov.co (Socrata API), limpieza y validación estadística.',
            'Detección de anomalías: saltos anómalos >15% mes a mes bloquean el registro con log.',
            'Calculadora de crédito (sistema francés) con tabla de amortización y alerta de usura.',
            'Adapter automático PostgreSQL / SQLite sin cambios en el código.',
          ],
          datasetInfo: 'Datos abiertos del gobierno colombiano — Superintendencia Financiera de Colombia.',
        },
        'project-datalens': {
          shortDescription: 'Herramienta de diagnóstico de bases de datos con despliegue dual: escritorio local-first (Tauri v2) y servicio web SaaS.',
          fullDescription: 'Permite conectarse a bases de datos relacionales (PostgreSQL, MySQL, SQLite), explorar su esquema visualmente, perfilar automáticamente la calidad de los datos, detectar anomalías sin configuración previa, editar registros con trazabilidad completa y exportar un Data Health Report listo para presentar. Arquitectura con núcleo Rust compartido entre desktop y web.',
          businessImpact: 'Entender una base de datos desconocida en 5 minutos, sin escribir SQL y sin infraestructura cloud.',
          highlights: [
            'Núcleo Rust transport-agnostic: mismos handlers expuestos como Tauri Commands (desktop) y rutas Axum (web).',
            'Perfilado automático: estadísticas, histogramas, top valores y cardinalidad al abrir cualquier tabla.',
            'Audit log inmutable con hash SHA-256 encadenado y undo/redo operacional.',
            'Data Health Report exportable en PDF, Markdown y HTML con diagrama ER automático.',
          ],
          datasetInfo: 'Herramienta para cualquier base de datos relacional.',
        },
        'project-digital-passport': {
          shortDescription: 'Sistema de identidad digital y logística internacional con telemetría geoespacial y Google Maps.',
          fullDescription: 'Aplicación Streamlit que combina identidad digital, validación de datos en tiempo real (IBAN, email, IPv4, MAC, ISCO-08, DOI), telemetría con Google Maps Directions API, generación de datos, auditoría de seguridad y arquitectura ERD dinámica. Incluye 58 tests automatizados.',
          businessImpact: 'Prototipo funcional que demuestra capacidades en validación de datos, integración de APIs y desarrollo de aplicaciones completas.',
          highlights: [
            '9 validadores de datos: email, E.164, IPv4, MAC, IBAN, ISCO-08, DOI, HS Code, Incoterm.',
            'Telemetría geoespacial con Google Maps Directions API y fallback polyline.',
            'Tema oscuro unificado, landing glassmorphism, navegación agrupada en 3 categorías.',
          ],
          datasetInfo: 'Base de datos relacional Global_David.db con esquema relacional.',
        },
        'project-markflow-studio': {
          shortDescription: 'Conversor y editor universal de Markdown a HTML5 autocontenido y PDF profesional.',
          fullDescription: 'Suite web interactiva creada con React + TypeScript + Vite + Tailwind CSS que permite cargar, editar y convertir documentos Markdown en HTML5 autocontenidos con CSS embebido y archivos PDF profesionales con saltos de página inteligentes. Incluye 4 temas visuales, 6 fuentes, guía interactiva de Markdown y plantillas incorporadas.',
          businessImpact: 'Herramienta productiva que resuelve un problema real: convertir Markdown a PDF sin cortes accidentales.',
          highlights: [
            'Algoritmo de saltos de página inteligentes: inspecciona el DOM antes de imprimir para prevenir cortes.',
            'HTML5 autocontenido con CSS embebido — un solo archivo listo para enviar o publicar.',
            'MarkFlow Store con plantillas: Informes de Auditoría, Especificaciones de API, Hojas de Vida.',
          ],
          datasetInfo: 'Herramienta de productividad — no requiere dataset.',
        },
        'project-flujo-base': {
          shortDescription: 'Sitio web de servicios de transformación digital para emprendedores y pequeñas empresas.',
          fullDescription: 'Página web propia para un emprendimiento freelance enfocado en integrar Inteligencia Artificial, automatización y desarrollo web para optimizar procesos de emprendedores y pequeñas empresas. Incluye secciones de servicios, casos de éxito y contacto.',
          businessImpact: 'Evidencia directa de trabajo autónomo y entrega de resultados a clientes.',
          highlights: [
            'Servicios de IA, automatización y desarrollo web para emprendedores.',
            'Sección de casos de éxito y contacto directo.',
          ],
          datasetInfo: 'Sitio web estático.',
        },
        'project-multiplica': {
          shortDescription: 'Plataforma de inclusión social y tecnológica para jóvenes de la Comuna 3.',
          fullDescription: 'Proyecto de emprendimiento social dirigido a jóvenes de la Comuna 3 (Manrique Oriental, Medellín), que combina un módulo de tecnología móvil, tutorías entre pares y una agencia de servicios con IA. Refleja capacidad de estructurar y comunicar iniciativas con impacto social medible.',
          businessImpact: 'Inclusión social y tecnológica para jóvenes en situación de vulnerabilidad.',
          highlights: [
            'Módulo de tecnología móvil + tutorías entre pares + agencia de servicios con IA.',
            'Impacto social en Comuna 3, Medellín.',
          ],
          datasetInfo: 'Proyecto social.',
        },
        'project-palabras-vivas': {
          shortDescription: 'Plataforma educativa de aprendizaje de lectura para población infantil.',
          fullDescription: 'Actualización de una plataforma educativa orientada a fortalecer la lectura y la interpretación de palabras en población infantil, con lógica interactiva construida en JavaScript.',
          businessImpact: 'Herramienta educativa que apoya el desarrollo de lectura en niños.',
          highlights: [
            'Lógica interactiva en JavaScript para aprendizaje de lectura.',
            'Población objetivo: niños en edad escolar.',
          ],
          datasetInfo: 'Plataforma educativa.',
        },
        'project-huertana': {
          shortDescription: 'Herramienta para automatizar la facturación de pedidos de frutas y verduras vía WhatsApp.',
          fullDescription: 'Herramienta para automatizar la facturación de pedidos de frutas y verduras a través de WhatsApp, aplicando lógica de automatización de procesos a un caso real de comercio local.',
          businessImpact: 'Automatización de un proceso manual repetitivo para un negocio de comercio local.',
          highlights: [
            'Automatización de facturación por WhatsApp para comercio de frutas y verduras.',
            'Lógica de automatización de procesos aplicada a caso real.',
          ],
          datasetInfo: 'Datos de pedidos de comercio local.',
        },
      },
    },

    // Project Modal
    projectModal: {
      copyLink: 'Copiar',
      copied: 'Copiado',
      fullscreen: 'Pantalla Completa',
      restore: 'Restaurar',
      close: 'Cerrar',
      viewNotionDocs: 'Ver Documentación en Notion',
      viewGitHubCode: 'Ver Código en GitHub',
      viewLiveDemo: 'Ver Demo en Vivo',
      mainBusinessResult: 'Resultado Principal de Negocio',
      videoDemo: 'Video Demostración',
      videoFallback: 'Tu navegador no soporta la reproducción de videos.',
      fullDescription: 'Descripción General',
      keyMetrics: 'Indicadores Clave',
      highlights: 'Puntos Destacados',
      techStack: 'Stack Tecnológico',
      dataset: 'Dataset:',
    },

    // Skills
    skills: {
      badge: 'Stack Técnico & Herramientas de Análisis',
      title: 'Habilidades & Dominio de Herramientas',
      description: 'Especializado en el ecosistema completo de datos: desde la extracción y modelado dimensional en SQL, hasta la ciencia de datos en Python y la creación de tableros estratégicos en Power BI.',
      allAreas: 'Todas las Áreas',
      searchPlaceholder: 'Buscar herramienta (ej. SQL, DAX)...',
      categories: {
        'Datos y Tecnología': {
          description: 'Herramientas de análisis de datos, programación y desarrollo de software.',
          skills: {
            'Python (fundamentos)': 'Python (fundamentos)',
            'Excel Avanzado': 'Excel Avanzado',
            'Tablas y Gráficos Dinámicos': 'Tablas y Gráficos Dinámicos',
            'HTML / CSS / JavaScript': 'HTML / CSS / JavaScript',
            'Git / GitHub': 'Git / GitHub',
          },
        },
        'Inteligencia Artificial Aplicada': {
          description: 'IA generativa para productividad organizacional y automatización de procesos.',
          skills: {
            'IA Generativa (ChatGPT, Groq)': 'IA Generativa (ChatGPT, Groq)',
            'Automatización de Procesos': 'Automatización de Procesos',
            'Diseño de Soluciones con IA': 'Diseño de Soluciones con IA',
          },
        },
        'Gestión Administrativa': {
          description: 'Control de inventarios, gestión documental, procesos y herramientas ERP.',
          skills: {
            'SAP HANA': 'SAP HANA',
            'Control de Inventarios': 'Control de Inventarios',
            'Gestión Documental': 'Gestión Documental',
            'Facturación y Nómina': 'Facturación y Nómina',
            'Indicadores de Gestión': 'Indicadores de Gestión',
          },
        },
        'Competencias Transversales': {
          description: 'Habilidades blandas desarrolladas en más de 10 años de experiencia operativa.',
          skills: {
            'Resolución de Problemas': 'Resolución de Problemas',
            'Trabajo en Equipo': 'Trabajo en Equipo',
            'Orientación al Logro': 'Orientación al Logro',
            'Adaptación al Cambio': 'Adaptación al Cambio',
            'Autonomía y Ejecución': 'Autonomía y Ejecución',
          },
        },
      },
    },

    // Experience
    experience: {
      badge: 'Trayectoria Profesional & Logros',
      title: 'Experiencia Laboral & Certificaciones',
      description: 'Historial comprobado liderando iniciativas de Business Intelligence, diseño de data warehouses y desarrollo de soluciones analíticas de alto impacto.',
      relevantExperience: 'Experiencia Relevante',
      officialCertifications: 'Certificaciones Oficiales',
      continuousLearning: 'Formación Continua',
      continuousLearningDesc: 'Constantemente actualizándome en nuevas técnicas de ingeniería de datos, arquitectura cloud en AWS/GCP y modelos de lenguaje aplicados al análisis exploratorio.',
      data: {
        'exp-1': {
          role: 'Auxiliar Logístico y Administrativo',
          company: 'HACEB Whirlpool',
          location: 'Copacabana',
          period: 'Sep 2020 – Feb 2025',
          description: 'Administración y control de materias primas en SAP HANA, garantizando trazabilidad y disponibilidad oportuna de datos e insumos.',
          achievements: [
            'Detecté y corregí un error recurrente de nómina equivalente a 90 minutos semanales no autorizados por empleado, demostrando capacidad analítica para identificar inconsistencias en grandes volúmenes de información.',
            'Identifiqué y resolví inconsistencias en el consumo de materiales vía SAP HANA, fortaleciendo el control de inventario mediante análisis de datos operativos.',
            'Propuse e implementé mejoras en procesos de empaque, reduciendo tiempos operativos y aumentando la eficiencia de línea.',
          ],
        },
        'exp-2': {
          role: 'Auxiliar de Producción y Control de Procesos',
          company: 'HACEB (Jiro Empresa Temporal)',
          location: 'Copacabana',
          period: 'Abr 2019 – Abr 2020',
          description: 'Operación y supervisión de maquinaria de producción bajo estándares de calidad, desarrollando atención al detalle y seguimiento de indicadores.',
          achievements: [
            'Logré un aumento del 10% en eficiencia operativa al reducir tiempos de paro de máquina mediante optimización del proceso productivo.',
          ],
        },
        'exp-3': {
          role: 'Auxiliar de Inventarios y Servicio al Cliente',
          company: 'Almacenes Éxito',
          location: 'Medellín',
          period: 'Ago 2013 – Mar 2019',
          description: 'Administración de inventarios y gestión de pedidos con base en análisis de stock, evitando quiebres y sobrecostos.',
          achievements: [
            'Registré y actualicé información en sistema de gestión, garantizando precisión y trazabilidad.',
            'Calculé precios y ajusté promociones asegurando rentabilidad y reducción de riesgos.',
            'Fui reconocido por puntualidad, responsabilidad y dinamismo en la atención a clientes de alto volumen.',
          ],
        },
      },
      certifications: {
        'cert-0': { title: 'Técnico Laboral por Competencias — Asistente Administrativo', issuer: 'CESDE — Medellín', skills: ['Gestión Administrativa', 'Control Documental', 'Facturación', 'Atención al Cliente'] },
        'cert-1': { title: 'Curso ImpActo Maker — IA Generativa aplicada a proyectos de impacto', issuer: 'Estrategia País, AtlanttiCO y ASCOFADE (con apoyo de Google.org)', skills: ['IA Generativa', 'Proyectos de Impacto'] },
        'cert-2': { title: 'Fundamentos de Inteligencia Artificial para la Productividad Personal y Organizacional', issuer: 'CESDE / Comfama — Secretaría de Educación de Medellín', skills: ['Inteligencia Artificial', 'Productividad'] },
        'cert-3': { title: 'Administración 4.0: Adapta, Innova', issuer: 'CESDE', skills: ['Administración 4.0', 'Innovación'] },
        'cert-4': { title: 'Python — Fundamentos', issuer: 'CESDE', skills: ['Python', 'Programación'] },
        'cert-5': { title: 'Automatización de Información en Excel con Macros', issuer: 'CESDE Comfama — Secretaría de Educación de Medellín', skills: ['Excel', 'Macros', 'Automatización'] },
        'cert-6': { title: 'Excel desde Cero — Datos y Reportes', issuer: 'CESDE', skills: ['Excel', 'Datos', 'Reportes'] },
        'cert-7': { title: 'Tablas y Gráficos Dinámicos', issuer: 'CESDE', skills: ['Excel', 'Tablas Dinámicas', 'Gráficos'] },
        'cert-8': { title: 'Liderándote para la Vida', issuer: 'CESDE', skills: ['Liderazgo', 'Desarrollo Personal'] },
      },
    },

    // Contact
    contact: {
      availableNow: 'Disponible Ahora',
      ctaTitle: '¿Listo para convertir tus datos en decisiones estratégicas?',
      ctaDescription: 'Cada proyecto comienza con una conversación. Cuéntame tu desafío y diseño la solución analítica que tu negocio necesita.',
      writeWhatsApp: 'Escribir por WhatsApp',
      sendEmail: 'Enviar Correo',
      whatsapp: 'WhatsApp',
      email: 'Correo',
      emailCopied: '¡Copiado!',
      emailCopyHint: 'Click para copiar',
      linkedin: 'LinkedIn',
      linkedinHint: 'Conectemos',
      github: 'GitHub',
      githubHint: 'Repositorios',
      remoteOrOnsite: 'Remoto o presencial',
      available: 'Disponible',
      fullTimeFreelance: 'Tiempo completo & freelance',
      fastResponse: 'Respuesta rápida',
      under24Hours: 'Menos de 24 horas',
      whatsappMsg: 'Hola David, me comunico desde tu portafolio profesional. Me gustaría conversar sobre una oportunidad.',
    },

    // Footer
    footer: {
      bio: 'especializado en modelos analíticos, dashboards ejecutivos y toma de decisiones basada en evidencia.',
      navigation: 'Navegación',
      home: 'Inicio',
      dataProjects: 'Proyectos de Datos',
      technicalSkills: 'Habilidades Técnicas',
      workExperience: 'Experiencia Laboral',
      contact: 'Contacto',
      social: 'Redes',
      copyright: 'Portafolio de Analista de Datos.',
      backToTop: 'Volver arriba',
    },
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      darkMode: 'Dark',
      lightMode: 'Light',
      toggleTheme: 'Toggle Theme',
      mobileMenu: 'Menu',
    },

    // User Profile
    user: {
      title: 'Junior Data Analyst',
      specialty: 'Administrative Management · Automation · AI',
      bio: 'Over 10 years building a solid operational foundation in production, logistics, and inventory control — experience that now translates directly into analytical thinking, disciplined process management, and execution under quality standards. Currently in active training in Data Analysis and Administrative Management Technology.',
      aboutLong: 'Professional in strategic transition toward data analysis and administrative management, with over 10 years of experience in demanding operational environments. Combines this foundation with active training in Administrative Management Technology, the Junior Data Analyst program by Ruta Tech (Estud-IA initiative from Medellín City Hall), and personal projects in web development, automation, and applied Artificial Intelligence. The result is a hybrid profile: the rigor of someone who already knows how to manage critical processes, combined with digital tools and data proficiency for better decision-making.',
      availability: 'Available for Projects & Full-Time',
    },

    // Hero
    hero: {
      greeting: 'Hi, I\'m',
      activelyTraining: 'Actively Training',
      exploreProjects: 'Explore Projects',
      contactMe: 'Get in Touch',
      yearsExperience: 'Years',
      operationalExperience: 'Operational Experience',
      technicalProjects: 'Technical Projects',
      inProgress: 'In Progress',
      dataAnalysisJunior: 'Junior Data Analyst',
      skills: {
        pythonExcel: 'Python & Advanced Excel',
        sapInventory: 'SAP HANA & Inventory Control',
        webDev: 'HTML / CSS / JavaScript',
        aiAutomation: 'Generative AI & Automation',
      },
    },

    // Projects
    projects: {
      badge: 'Case Studies & Documentation',
      title: 'Featured Analytics Projects',
      description: 'A curated selection of real-world projects built with the CRISP-DM methodology. Each project includes full technical documentation embedded directly from Notion.',
      all: 'All',
      viewInNotion: 'View in Notion',
      viewOnGitHub: 'View on GitHub',
      viewLiveDemo: 'View Live Demo',
      businessImpact: 'Business Impact:',
      featured: 'Featured',
      video: 'Video',
      whyNotion: 'Why Document Projects in Notion?',
      notionDescription: 'Notion lets you present the full data lifecycle — from defining the business problem and ERD diagrams to Python/SQL code and executive conclusions.',
      data: {
        'project-auditdata-ai': {
          shortDescription: 'Data cleaning and quality validation platform with academic PDF reports and AI.',
          fullDescription: 'Tool designed to diagnose, document, and prepare datasets before they are used in analysis, visualization, or decision-making. Engine with 28 quality issue categories per column, AI copilot (Groq/Llama3.1), 10 documented cleaning actions with cell-level audit log, 10-section academic PDF reports, Google OAuth authentication, and cloud history via Supabase.',
          businessImpact: 'Automates the data cleaning process that traditionally takes hours of manual work, generating complete traceability from upload to final report.',
          highlights: [
            'Diagnostic engine with 28 issue categories, severity, confidence, and signal (CONFIRMED / TO_REVIEW).',
            'AI copilot with Groq/Llama3.1: interactive chat per column and deep analysis with exact file row.',
            'Professional reports: academic PDF (10 sections), Markdown, change log, and XLSX export.',
            'Google OAuth authentication + cloud history with consent and self-deletion.',
          ],
          datasetInfo: 'General-purpose tool — works with any CSV dataset.',
        },
        'project-credit-intelligence': {
          shortDescription: 'System for querying, comparing, simulating, and tracking bank interest rates and usury limits in Colombia.',
          fullDescription: 'Complete system including rate comparison for 23 financial entities, loan calculator (French system), statistical dashboard with Chart.js charts, legal usury limit proximity alerts, automated ETL from datos.gov.co, and protected admin panel. Deployed on Render with monthly updates via GitHub Actions.',
          businessImpact: 'Reference tool for Colombian citizens who need to compare bank rates transparently and avoid predatory lending rates.',
          highlights: [
            'Automated ETL pipeline extracting from datos.gov.co (Socrata API), with cleaning and statistical validation.',
            'Anomaly detection: month-over-month jumps >15% block registration with logging.',
            'Loan calculator (French system) with amortization table and usury alert.',
            'Automatic PostgreSQL / SQLite adapter with no code changes.',
          ],
          datasetInfo: 'Open data from the Colombian government — Superintendencia Financiera de Colombia.',
        },
        'project-datalens': {
          shortDescription: 'Database diagnostic tool with dual deployment: local-first desktop (Tauri v2) and SaaS web service.',
          fullDescription: 'Connects to relational databases (PostgreSQL, MySQL, SQLite), visually explores schemas, automatically profiles data quality, detects anomalies without prior configuration, edits records with full traceability, and exports a Data Health Report ready for presentation. Architecture with a shared Rust core between desktop and web.',
          businessImpact: 'Understand an unknown database in 5 minutes, without writing SQL and without cloud infrastructure.',
          highlights: [
            'Rust transport-agnostic core: same handlers exposed as Tauri Commands (desktop) and Axum routes (web).',
            'Automatic profiling: statistics, histograms, top values, and cardinality upon opening any table.',
            'Immutable audit log with chained SHA-256 hash and operational undo/redo.',
            'Exportable Data Health Report in PDF, Markdown, and HTML with automatic ER diagram.',
          ],
          datasetInfo: 'Tool for any relational database.',
        },
        'project-digital-passport': {
          shortDescription: 'Digital identity and international logistics system with geospatial telemetry and Google Maps.',
          fullDescription: 'Streamlit application combining digital identity, real-time data validation (IBAN, email, IPv4, MAC, ISCO-08, DOI), geospatial telemetry with Google Maps Directions API, data generation, security auditing, and dynamic ERD architecture. Includes 58 automated tests.',
          businessImpact: 'Functional prototype demonstrating capabilities in data validation, API integration, and full application development.',
          highlights: [
            '9 data validators: email, E.164, IPv4, MAC, IBAN, ISCO-08, DOI, HS Code, Incoterm.',
            'Geospatial telemetry with Google Maps Directions API and polyline fallback.',
            'Unified dark theme, glassmorphism landing, grouped navigation in 3 categories.',
          ],
          datasetInfo: 'Relational database Global_David.db with relational schema.',
        },
        'project-markflow-studio': {
          shortDescription: 'Universal Markdown-to-HTML5 and professional PDF converter and editor.',
          fullDescription: 'Interactive web suite built with React + TypeScript + Vite + Tailwind CSS that loads, edits, and converts Markdown documents into self-contained HTML5 with embedded CSS and professional PDF files with smart page breaks. Includes 4 visual themes, 6 fonts, interactive Markdown guide, and built-in templates.',
          businessImpact: 'Productivity tool that solves a real problem: converting Markdown to PDF without accidental cuts.',
          highlights: [
            'Smart page break algorithm: inspects the DOM before printing to prevent cuts.',
            'Self-contained HTML5 with embedded CSS — a single file ready to send or publish.',
            'MarkFlow Store with templates: Audit Reports, API Specifications, Resumes.',
          ],
          datasetInfo: 'Productivity tool — no dataset required.',
        },
        'project-flujo-base': {
          shortDescription: 'Digital transformation services website for entrepreneurs and small businesses.',
          fullDescription: 'Own website for a freelance venture focused on integrating Artificial Intelligence, automation, and web development to optimize processes for entrepreneurs and small businesses. Includes services, success stories, and contact sections.',
          businessImpact: 'Direct evidence of autonomous work and client result delivery.',
          highlights: [
            'AI, automation, and web development services for entrepreneurs.',
            'Success stories and direct contact section.',
          ],
          datasetInfo: 'Static website.',
        },
        'project-multiplica': {
          shortDescription: 'Social and technological inclusion platform for youth in Comuna 3.',
          fullDescription: 'Social entrepreneurship project targeting youth in Comuna 3 (Manrique Oriental, Medellín), combining a mobile technology module, peer tutoring, and an AI-powered services agency. Reflects the ability to structure and communicate initiatives with measurable social impact.',
          businessImpact: 'Social and technological inclusion for vulnerable youth.',
          highlights: [
            'Mobile technology module + peer tutoring + AI-powered services agency.',
            'Social impact in Comuna 3, Medellín.',
          ],
          datasetInfo: 'Social project.',
        },
        'project-palabras-vivas': {
          shortDescription: 'Educational reading platform for children.',
          fullDescription: 'Update of an educational platform aimed at strengthening reading and word interpretation in children, with interactive logic built in JavaScript.',
          businessImpact: 'Educational tool supporting reading development in children.',
          highlights: [
            'Interactive JavaScript logic for reading learning.',
            'Target audience: school-age children.',
          ],
          datasetInfo: 'Educational platform.',
        },
        'project-huertana': {
          shortDescription: 'Tool to automate fruit and vegetable order invoicing via WhatsApp.',
          fullDescription: 'Tool to automate fruit and vegetable order invoicing through WhatsApp, applying process automation logic to a real local commerce use case.',
          businessImpact: 'Automation of a repetitive manual process for a local business.',
          highlights: [
            'WhatsApp invoicing automation for fruit and vegetable commerce.',
            'Process automation logic applied to a real-world case.',
          ],
          datasetInfo: 'Local commerce order data.',
        },
      },
    },

    // Project Modal
    projectModal: {
      copyLink: 'Copy',
      copied: 'Copied',
      fullscreen: 'Fullscreen',
      restore: 'Restore',
      close: 'Close',
      viewNotionDocs: 'View Documentation in Notion',
      viewGitHubCode: 'View Code on GitHub',
      viewLiveDemo: 'View Live Demo',
      mainBusinessResult: 'Key Business Outcome',
      videoDemo: 'Video Demo',
      videoFallback: 'Your browser does not support video playback.',
      fullDescription: 'Full Description',
      keyMetrics: 'Key Metrics',
      highlights: 'Key Highlights',
      techStack: 'Technology Stack',
      dataset: 'Dataset:',
    },

    // Skills
    skills: {
      badge: 'Technical Stack & Analytics Tools',
      title: 'Skills & Toolset',
      description: 'Proficient across the full data ecosystem — from SQL extraction and dimensional modeling to Python data science and building strategic dashboards in Power BI.',
      allAreas: 'All Areas',
      searchPlaceholder: 'Search tool (e.g., SQL, DAX)...',
      categories: {
        'Datos y Tecnología': {
          title: 'Data & Technology',
          description: 'Data analysis, programming, and software development tools.',
          skills: {
            'Python (fundamentos)': 'Python (Fundamentals)',
            'Excel Avanzado': 'Advanced Excel',
            'Tablas y Gráficos Dinámicos': 'Pivot Tables & Charts',
            'HTML / CSS / JavaScript': 'HTML / CSS / JavaScript',
            'Git / GitHub': 'Git / GitHub',
          },
        },
        'Inteligencia Artificial Aplicada': {
          title: 'Applied Artificial Intelligence',
          description: 'Generative AI for organizational productivity and process automation.',
          skills: {
            'IA Generativa (ChatGPT, Groq)': 'Generative AI (ChatGPT, Groq)',
            'Automatización de Procesos': 'Process Automation',
            'Diseño de Soluciones con IA': 'AI Solution Design',
          },
        },
        'Gestión Administrativa': {
          title: 'Administrative Management',
          description: 'Inventory control, document management, processes, and ERP tools.',
          skills: {
            'SAP HANA': 'SAP HANA',
            'Control de Inventarios': 'Inventory Control',
            'Gestión Documental': 'Document Management',
            'Facturación y Nómina': 'Invoicing & Payroll',
            'Indicadores de Gestión': 'Performance Indicators',
          },
        },
        'Competencias Transversales': {
          title: 'Transferable Skills',
          description: 'Soft skills developed over 10+ years of operational experience.',
          skills: {
            'Resolución de Problemas': 'Problem Solving',
            'Trabajo en Equipo': 'Teamwork',
            'Orientación al Logro': 'Achievement Orientation',
            'Adaptación al Cambio': 'Adaptability',
            'Autonomía y Ejecución': 'Autonomy & Execution',
          },
        },
      },
    },

    // Experience
    experience: {
      badge: 'Professional Track Record & Achievements',
      title: 'Work Experience & Certifications',
      description: 'Proven track record leading Business Intelligence initiatives, designing data warehouses, and developing high-impact analytics solutions.',
      relevantExperience: 'Relevant Experience',
      officialCertifications: 'Official Certifications',
      continuousLearning: 'Continuous Learning',
      continuousLearningDesc: 'Constantly staying current with the latest data engineering techniques, cloud architecture on AWS/GCP, and language models applied to exploratory analysis.',
      data: {
        'exp-1': {
          role: 'Logistics & Administrative Assistant',
          company: 'HACEB Whirlpool',
          location: 'Copacabana',
          period: 'Sep 2020 – Feb 2025',
          description: 'Administration and control of raw materials in SAP HANA, ensuring traceability and timely availability of data and supplies.',
          achievements: [
            'Detected and corrected a recurring payroll error equivalent to 90 unauthorized minutes per employee per week, demonstrating analytical capability to identify inconsistencies in large volumes of information.',
            'Identified and resolved material consumption inconsistencies via SAP HANA, strengthening inventory control through operational data analysis.',
            'Proposed and implemented packaging process improvements, reducing operational times and increasing line efficiency.',
          ],
        },
        'exp-2': {
          role: 'Production & Process Control Assistant',
          company: 'HACEB (Jiro Temporary Agency)',
          location: 'Copacabana',
          period: 'Apr 2019 – Apr 2020',
          description: 'Operation and supervision of production machinery under quality standards, developing attention to detail and indicator tracking.',
          achievements: [
            'Achieved a 10% increase in operational efficiency by reducing machine downtime through production process optimization.',
          ],
        },
        'exp-3': {
          role: 'Inventory & Customer Service Assistant',
          company: 'Almacenes Éxito',
          location: 'Medellín',
          period: 'Aug 2013 – Mar 2019',
          description: 'Inventory management and order processing based on stock analysis, preventing stockouts and overcosts.',
          achievements: [
            'Registered and updated information in the management system, ensuring accuracy and traceability.',
            'Calculated prices and adjusted promotions ensuring profitability and risk reduction.',
            'Recognized for punctuality, responsibility, and dynamism in serving high-volume customers.',
          ],
        },
      },
      certifications: {
        'cert-0': { title: 'Technical Vocational Certificate — Administrative Assistant', issuer: 'CESDE — Medellín', skills: ['Administrative Management', 'Document Control', 'Invoicing', 'Customer Service'] },
        'cert-1': { title: 'ImpActo Maker Course — Generative AI for Impact Projects', issuer: 'Estrategia País, AtlanttiCO & ASCOFADE (supported by Google.org)', skills: ['Generative AI', 'Impact Projects'] },
        'cert-2': { title: 'AI Fundamentals for Personal and Organizational Productivity', issuer: 'CESDE / Comfama — Medellín Education Secretary', skills: ['Artificial Intelligence', 'Productivity'] },
        'cert-3': { title: 'Administration 4.0: Adapt, Innovate', issuer: 'CESDE', skills: ['Administration 4.0', 'Innovation'] },
        'cert-4': { title: 'Python — Fundamentals', issuer: 'CESDE', skills: ['Python', 'Programming'] },
        'cert-5': { title: 'Information Automation in Excel with Macros', issuer: 'CESDE Comfama — Medellín Education Secretary', skills: ['Excel', 'Macros', 'Automation'] },
        'cert-6': { title: 'Excel from Scratch — Data & Reports', issuer: 'CESDE', skills: ['Excel', 'Data', 'Reports'] },
        'cert-7': { title: 'Pivot Tables & Charts', issuer: 'CESDE', skills: ['Excel', 'Pivot Tables', 'Charts'] },
        'cert-8': { title: 'Leading Yourself for Life', issuer: 'CESDE', skills: ['Leadership', 'Personal Development'] },
      },
    },

    // Contact
    contact: {
      availableNow: 'Available Now',
      ctaTitle: 'Ready to turn your data\ninto strategic decisions?',
      ctaDescription: 'Every project starts with a conversation. Tell me about your challenge, and I\'ll design the analytics solution your business needs.',
      writeWhatsApp: 'Message on WhatsApp',
      sendEmail: 'Send Email',
      whatsapp: 'WhatsApp',
      email: 'Email',
      emailCopied: 'Copied!',
      emailCopyHint: 'Click to copy',
      linkedin: 'LinkedIn',
      linkedinHint: 'Let\'s connect',
      github: 'GitHub',
      githubHint: 'Repositories',
      remoteOrOnsite: 'Remote or On-site',
      available: 'Available',
      fullTimeFreelance: 'Full-time & Freelance',
      fastResponse: 'Fast Response',
      under24Hours: 'Under 24 hours',
      whatsappMsg: 'Hi David, I\'m reaching out from your professional portfolio. I\'d love to discuss an opportunity.',
    },

    // Footer
    footer: {
      bio: 'specializing in analytical models, executive dashboards, and evidence-based decision making.',
      navigation: 'Navigation',
      home: 'Home',
      dataProjects: 'Data Projects',
      technicalSkills: 'Technical Skills',
      workExperience: 'Work Experience',
      contact: 'Contact',
      social: 'Social',
      copyright: 'Data Analyst Portfolio.',
      backToTop: 'Back to top',
    },
  },
} as const;

export type TranslationKeys = typeof translations.es;
