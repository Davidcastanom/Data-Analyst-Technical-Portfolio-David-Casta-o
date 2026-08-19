import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language, type TranslationKeys } from './translations';

interface LanguageContextType {
  language: Language;
  t: TranslationKeys;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const seoByLang = {
  es: {
    title: 'David Castaño — Analista de Datos Junior | Portafolio Profesional',
    description: 'Portafolio profesional de David Esteban Castaño Meneses, Analista de Datos Junior en Medellín, Colombia. Proyectos de Business Intelligence, Python, SQL, Power BI, SAP HANA, automatización e inteligencia artificial aplicada.',
    ogTitle: 'David Castaño — Analista de Datos Junior | Portafolio Profesional',
    ogDesc: 'Portafolio profesional de David Esteban Castaño Meneses. Proyectos de Business Intelligence, Python, SQL, Power BI y automatización. Disponible para proyectos y tiempo completo.',
  },
  en: {
    title: 'David Castaño — Junior Data Analyst | Professional Portfolio',
    description: 'Professional portfolio of David Esteban Castaño Meneses, Junior Data Analyst in Medellín, Colombia. Business Intelligence, Python, SQL, Power BI, SAP HANA, automation, and applied artificial intelligence projects.',
    ogTitle: 'David Castaño — Junior Data Analyst | Professional Portfolio',
    ogDesc: 'Professional portfolio of David Esteban Castaño Meneses. Business Intelligence, Python, SQL, Power BI, and automation projects. Available for projects and full-time.',
  },
};

function updateSEO(lang: Language) {
  const seo = seoByLang[lang];
  document.title = seo.title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', seo.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', seo.ogTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', seo.ogDesc);

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', seo.ogTitle);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', seo.ogDesc);

  document.documentElement.lang = lang;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('portfolio-language');
      return (stored === 'es' || stored === 'en') ? stored : 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      // localStorage not available
    }
    updateSEO(language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
