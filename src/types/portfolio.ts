export interface Project {
  id: string;
  title: string;
  category: 'Análisis Predictivo' | 'Business Intelligence' | 'Segmentación & Marketing' | 'ETL & Analytics' | 'Limpieza de datos';
  shortDescription: string;
  fullDescription: string;
  businessImpact: string; // e.g., "Reducción de churn en un 18.5%"
  keyMetrics: { label: string; value: string }[];
  tags: string[]; // e.g., ["Python", "SQL", "Power BI", "Notion"]
  notionUrl: string; // Public Notion shared link or embed link
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  imageBgGradient?: string;
  highlights: string[];
  datasetInfo?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Avanzado' | 'Intermedio' | 'Experto';
    icon?: string;
    color: string;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export interface UserProfile {
  name: string;
  title: string;
  specialty: string;
  bio: string;
  aboutLong: string;
  email: string;
  phone?: string;
  location: string;
  availability: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  githubUrl: string;
  linkedinUrl: string;
  notionPortfolioUrl?: string;
  kaggleUrl?: string;
  mediumUrl?: string;
  cvPdfUrl?: string;
}

export interface PortfolioConfig {
  user: UserProfile;
  projects: Project[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  certifications: Certification[];
}
