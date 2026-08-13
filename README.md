# 📊 Portafolio Profesional de Analista de Datos - Esteban

Un sitio web de portafolio profesional, interactivo y moderno desarrollado en **React + Vite + Tailwind CSS**, diseñado específicamente para presentar proyectos de análisis de datos, tableros en Power BI/Tableau, modelos predictivos y documentación embebida desde **Notion**.

---

## 🌟 Características Principales

- 🎨 **Diseño Minimalista & Elegante (Clean Minimalism)**: Paleta clara en tonos `slate-50` y `white`, con tipografía de alto contraste y componentes limpios.
- border-b **Navbar Fija (Sticky Top)**: Navegación fluida por secciones (Inicio, Proyectos, Habilidades, Experiencia, Contacto).
- 📈 **Hero Section Interactivo**: Indicadores de estado en tiempo real, KPIs dinámicos construidos con `Recharts` y código SQL/Notion.
- 🗂️ **Sección de 3 Proyectos con Integración de Notion**: Modal emergente que embebe páginas públicas de Notion en un `<iframe>` interactivo sin salir del sitio.
- 🛠️ **Sección de Habilidades & Herramientas**: Badges categorizados para SQL, Power BI, Python, Excel, dbt y Notion.
- 💼 **Sección de Experiencia & Certificaciones**: Timeline profesional con logros medibles e impacto de negocio.
- 📬 **Formulario de Contacto & Redes**: Acceso rápido a correo (`Esteban7005808@gmail.com`), GitHub y LinkedIn.
- 🚀 **Optimizado para Vercel**: Listo para despliegue continuo en Vercel mediante GitHub.

---

## 📁 Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes modulares
│   │   ├── Navbar.tsx             # Barra de navegación superior
│   │   ├── HeroSection.tsx        # Sección de presentación y gráfica interactiva
│   │   ├── ProjectsSection.tsx    # Tarjetas de proyectos de datos
│   │   ├── ProjectCard.tsx        # Componente individual de proyecto
│   │   ├── ProjectModal.tsx       # Visor modal con iframe embebido de Notion
│   │   ├── SkillsSection.tsx      # Herramientas y tecnologías
│   │   ├── ExperienceSection.tsx  # Experiencia laboral y certificaciones
│   │   ├── ContactSection.tsx     # Formulario e información de contacto
│   │   ├── Footer.tsx             # Pie de página y enlaces
│   │   └── VercelGuideModal.tsx   # Modal de instrucciones de despliegue
│   ├── data/
│   │   └── portfolioData.ts       # ⭐ ARCHIVO PRINCIPAL DE DATOS (Edita aquí)
│   ├── types/
│   │   └── portfolio.ts           # Definiciones de TypeScript
│   ├── App.tsx                    # Componente principal
│   ├── main.tsx                   # Punto de entrada de React
│   └── index.css                  # Configuración de Tailwind CSS
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ✏️ Cómo Modificar Tu Información Internamente

Toda la información del sitio se encuentra centralizada en un solo archivo fácil de modificar:

📍 **`src/data/portfolioData.ts`**

### 1. Editar Tu Información Personal
Abre `src/data/portfolioData.ts` y modifica el objeto `user`:

```typescript
user: {
  name: 'Esteban',
  title: 'Analista de Datos',
  specialty: 'Business Intelligence, SQL & Analytics Predictivo',
  bio: 'Transformo datos complejos en decisiones estratégicas de negocio...',
  email: 'Esteban7005808@gmail.com',
  githubUrl: 'https://github.com/Esteban7005808',
  linkedinUrl: 'https://linkedin.com/in/esteban-data-analyst',
  // ...
}
```

### 2. Añadir o Editar Proyectos y Páginas de Notion
Cada proyecto en `projects` tiene las siguientes propiedades:

```typescript
{
  id: 'mi-nuevo-proyecto',
  title: 'Título del Proyecto',
  category: 'Business Intelligence',
  shortDescription: 'Resumen breve para la tarjeta...',
  fullDescription: 'Explicación detallada de la metodología...',
  businessImpact: 'Impacto cuantitativo o ahorro generado...',
  keyMetrics: [
    { label: 'Métrica 1', value: '95%' },
    { label: 'Métrica 2', value: '+20%' }
  ],
  tags: ['Power BI', 'SQL', 'Notion'],
  notionUrl: 'https://tu-usuario.notion.site/Tu-Pagina-Publica-123456',
  githubUrl: 'https://github.com/tu-usuario/repo',
  featured: true
}
```

---

## 🔗 Cómo Obtener la URL Pública de Notion para Embeber

Para que la documentación de tu proyecto se muestre dentro del visor de tu portafolio:

1. Abre tu página del proyecto en **Notion**.
2. Haz clic en el botón **"Share" (Compartir)** en la esquina superior derecha.
3. Activa la opción **"Share to web" (Compartir en la web)**.
4. Copia el enlace público generado (Ejemplo: `https://site-notion-demo.notion.site/Mi-Proyecto-123456`).
5. Pégalo en el campo `notionUrl` correspondiente dentro de `src/data/portfolioData.ts`.

---

## 💻 Ejecución y Pruebas Locales

Para ejecutar el proyecto en tu máquina local:

1. **Clonar o descargar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/mi-portafolio-datos.git
   cd mi-portafolio-datos
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:3000` (o el puerto indicado en la consola).

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

---

## 🌐 Guía Paso a Paso para Desplegar en Vercel

Desplegar este portafolio en Vercel es 100% gratuito y toma menos de 2 minutos:

### Paso 1: Subir tu Código a GitHub
Si aún no has subido tu repositorio a GitHub, ejecuta en tu terminal:

```bash
git init
git add .
git commit -m "Mi portafolio de Analista de Datos listo"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

### Paso 2: Importar el Proyecto en Vercel
1. Ingresa a [vercel.com/new](https://vercel.com/new) e inicia sesión con tu cuenta de GitHub.
2. Selecciona el repositorio de tu portafolio y haz clic en **"Import"**.
3. Vercel detectará automáticamente la configuración adecuada para **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Haz clic en **"Deploy"**.

### Paso 3: Actualizaciones Automáticas
Cada vez que realices un cambio en `src/data/portfolioData.ts` y hagas `git push origin main`, Vercel compilará y actualizará tu sitio web en vivo de forma totalmente automática.

---

## 🛠️ Tecnologías e Iconos

- **React 19**
- **Vite 6**
- **Tailwind CSS v4**
- **Lucide React** (iconografía limpia)
- **Recharts** (gráficos dinámicos)
- **Motion** (animaciones fluidas)

---

### 📩 Contacto
- **Propietario**: Esteban
- **Correo**: `Esteban7005808@gmail.com`
- **Especialidad**: Analista de Datos | Business Intelligence & SQL
