# 📊 Portafolio Profesional de Analista de Datos - Esteban

Un sitio web de portafolio profesional, interactivo y moderno desarrollado en **React + Vite + Tailwind CSS**, diseñado específicamente para presentar proyectos de análisis de datos, tableros en Power BI/Tableau, modelos predictivos y documentación embebida desde **Notion**.

---

## 🌟 Características Principales

- 🎨 **Diseño Minimalista & Elegante (Clean Minimalism)**: Paleta clara en tonos `slate-50` y `white`, con tipografía de alto contraste y componentes limpios.
- 🌙 **Modo Oscuro/Claro**: Toggle de tema con persistencia en `localStorage`.
- 📈 **Hero Section Interactivo**: Indicadores de estado en tiempo real, KPIs dinámicos construidos con `Recharts`.
- 🗂️ **3 Proyectos con Integración de Notion**: Modal emergente que embebe páginas públicas de Notion en un `<iframe>` interactivo.
- 🛠️ **Sección de Habilidades & Herramientas**: Badges categorizados para SQL, Power BI, Python, Excel, dbt y Notion.
- 💼 **Experiencia & Certificaciones**: Timeline profesional con logros medibles e impacto de negocio.
- 📬 **Formulario de Contacto & Redes**: Acceso rápido a correo, GitHub y LinkedIn.
- ⚙️ **Configurador de CV**: Modal para editar datos del portafolio en tiempo real.
- 🚀 **Optimizado para Vercel**: Listo para despliegue continuo en Vercel mediante GitHub.

---

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19 | UI Library |
| Vite | 6 | Build tool & dev server |
| Tailwind CSS | 4 | Estilos utility-first |
| Lucide React | 0.546 | Iconografía limpia |
| Recharts | 3.10 | Gráficos dinámicos |
| Motion | 12 | Animaciones fluidas |
| TypeScript | 5.8 | Tipado estático |

---

## 📁 Estructura del Proyecto

```text
/
├── index.html                      # Punto de entrada HTML con metadatos SEO
├── package.json                    # Dependencias y scripts
├── vite.config.ts                  # Configuración de Vite + Tailwind
├── tsconfig.json                   # Configuración de TypeScript
├── .gitignore                      # Archivos excluidos de Git
├── .env.example                    # Variables de entorno de ejemplo
├── metadata.json                   # Metadatos del proyecto
└── src/
    ├── main.tsx                    # Punto de entrada de React
    ├── App.tsx                     # Componente principal y routing
    ├── index.css                   # Configuración de Tailwind CSS + temas
    ├── components/
    │   ├── Navbar.tsx              # Barra de navegación superior (sticky)
    │   ├── HeroSection.tsx         # Sección de presentación + gráfica interactiva
    │   ├── ProjectsSection.tsx     # Grid de tarjetas de proyectos
    │   ├── ProjectCard.tsx         # Componente individual de proyecto
    │   ├── ProjectModal.tsx        # Visor modal con iframe de Notion
    │   ├── SkillsSection.tsx       # Herramientas y tecnologías
    │   ├── ExperienceSection.tsx   # Experiencia laboral y certificaciones
    │   ├── ContactSection.tsx      # Formulario e información de contacto
    │   ├── Footer.tsx              # Pie de página y enlaces
    │   ├── CVConfiguratorModal.tsx  # Modal para editar datos del CV
    │   └── VercelGuideModal.tsx    # Modal con instrucciones de despliegue
    ├── data/
    │   └── portfolioData.ts        # ⭐ ARCHIVO PRINCIPAL DE DATOS (edita aquí)
    └── types/
        └── portfolio.ts            # Definiciones de TypeScript
```

---

## 🔧 Lo que se Hizo para Preparar el Despliegue en Vercel

### Paso 1: Diagnóstico del proyecto
Se revisó el estado completo del repositorio y se encontró que:
- El repositorio en GitHub **solo tenía el commit inicial** (README vacío).
- Todo el código fuente estaba sin commitear (archivos "untracked").
- El `package.json` tenía dependencias innecesarias heredadas del template de Google AI Studio.
- El `index.html` tenía metadatos genéricos ("My Google AI Studio App").

### Paso 2: Limpieza de dependencias innecesarias
Se eliminaron del `package.json` las siguientes dependencias que **NO se usaban** en el código fuente:

| Dependencia eliminada | Motivo |
|----------------------|--------|
| `@google/genai` | API de Gemini, no se usa en el frontend |
| `express` | Servidor backend, no necesario para un sitio estático |
| `dotenv` | Carga de variables de entorno para Node.js, no se usa |
| `@types/express` | Tipos de TypeScript para Express, ya no necesario |

Esto redujo **121 paquetes** de `node_modules`.

### Paso 3: Actualización de metadatos SEO
Se actualizó `index.html` reemplazando los metadatos genéricos:

```diff
- <title>My Google AI Studio App</title>
- <meta name="description" content="An application built with Google AI Studio." />
- <meta property="og:title" content="My Google AI Studio App" />
- <meta property="og:description" content="An application built with Google AI Studio." />
+ <title>Portafolio Analista de Datos - Esteban</title>
+ <meta name="description" content="Portafolio profesional de Analista de Datos. Proyectos de Business Intelligence, SQL, Python y dashboards interactivos." />
+ <meta property="og:title" content="Portafolio Analista de Datos - Esteban" />
+ <meta property="og:description" content="Portafolio profesional de Analista de Datos. Proyectos de Business Intelligence, SQL, Python y dashboards interactivos." />
```

### Paso 4: Actualización del nombre del paquete
Se cambió el nombre en `package.json` de `react-example` a `portafolio-analista-datos-esteban`.

### Paso 5: Verificación del build
Se ejecutó `npm run build` confirmando que el proyecto compila exitosamente:
```
✓ 2273 modules transformed
✓ built in 7.57s
```

Archivos generados:
- `dist/index.html` — 0.95 KB
- `dist/assets/index-*.css` — 56.84 KB
- `dist/assets/index-*.js` — 675.58 KB

### Paso 6: Commit y push a GitHub
Se subió todo el código fuente al repositorio:
```bash
git add .
git commit -m "feat: portafolio completo listo para despliegue en Vercel"
git push origin main
```

**Resultado**: 26 archivos subidos, 7,161 líneas de código agregadas.

---

## 💻 Ejecución Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Davidcastanom/Data-Analyst-Technical-Portfolio-David-Casta-o.git
cd Data-Analyst-Technical-Portfolio-David-Casta-o

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

---

## 🌐 Despliegue en Vercel (Paso a Paso)

### Paso 1: Crear cuenta en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"**
3. Elige **"Continue with GitHub"** y autoriza el acceso

### Paso 2: Importar el proyecto
1. Ve a [vercel.com/new](https://vercel.com/new)
2. Busca y selecciona el repositorio **`Data-Analyst-Technical-Portfolio-David-Casta-o`**
3. Haz clic en **"Import"**

### Paso 3: Verificar configuración
Vercel detectará automáticamente que es un proyecto Vite:

| Campo | Valor |
|-------|-------|
| **Framework Preset** | `Vite` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

> **Nota**: No se necesitan variables de entorno. El proyecto no usa APIs externas ni backend.

### Paso 4: Desplegar
1. Haz clic en **"Deploy"**
2. Espera ~1-2 minutos
3. Vercel te dará una URL pública, por ejemplo:
   `https://data-analyst-technical-portfolio-david-casta-o.vercel.app`

### Paso 5: Actualizaciones automáticas
Cada vez que hagas `git push origin main`, Vercel reconstruirá y actualizará tu sitio automáticamente.

---

## ✏️ Cómo Modificar Tu Información

Toda la información del sitio está centralizada en:
📍 **`src/data/portfolioData.ts`**

### Editar información personal
```typescript
user: {
  name: 'Esteban',
  title: 'Analista de Datos',
  specialty: 'Business Intelligence, SQL & Analytics Predictivo',
  bio: 'Transformo datos complejos en decisiones estratégicas...',
  email: 'Esteban7005808@gmail.com',
  githubUrl: 'https://github.com/Esteban7005808',
  linkedinUrl: 'https://linkedin.com/in/esteban-data-analyst',
}
```

### Añadir o editar proyectos
```typescript
{
  id: 'mi-nuevo-proyecto',
  title: 'Título del Proyecto',
  category: 'Business Intelligence',
  shortDescription: 'Resumen breve...',
  fullDescription: 'Explicación detallada...',
  businessImpact: 'Impacto cuantitativo...',
  keyMetrics: [
    { label: 'Métrica 1', value: '95%' },
    { label: 'Métrica 2', value: '+20%' }
  ],
  tags: ['Power BI', 'SQL', 'Notion'],
  notionUrl: 'https://tu-usuario.notion.site/Tu-Pagina-123456',
  githubUrl: 'https://github.com/tu-usuario/repo',
  featured: true
}
```

---

## 🔗 Cómo Obtener la URL Pública de Notion

1. Abre tu página del proyecto en **Notion**
2. Haz clic en **"Share"** (esquina superior derecha)
3. Activa **"Share to web"**
4. Copia el enlace público generado
5. Pégalo en el campo `notionUrl` en `src/data/portfolioData.ts`

---

## 📩 Contacto
- **Propietario**: Esteban
- **Correo**: `Esteban7005808@gmail.com`
- **Especialidad**: Analista de Datos | Business Intelligence & SQL
