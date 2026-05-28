export type ExperienceType = "Trabajo" | "Educacion" | "Personal" | "Voluntario";

export interface Project {
  slug: string;
  title: string;
  titleJob: string;
  briefDescription: string;
  description: string;
  objective: string;
  startDate: string;
  endDate: string;
  tags: string[];
  logo: string;
  media?: string[];
  links?: {
    website?: string;
    codeRepository?: string;
    downloads?: string[];
    documentation?: string;
  };
  team?: {
    contributors?: { name: string; role: string }[];
    externalCollaborators?: { name: string; role: string }[];
  };
  developmentProcess?: {
    methodology?: string;
    timeline?: string;
  };
  company?: string;
}

export interface Certificate {
  slug: string;
  title: string;
  provider: string;
  description: string;
  date: string;
  tags: string[];
  logo: string;
  media: string[];
  certificateUrl?: string;
  credentials?: string;
}

export interface Experience {
  id: number;
  slug: string;
  title: string;
  provider?: string;
  briefDescription: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  tags: string[];
  logo?: string;
  media?: string[];
  type: ExperienceType;
  skills?: string[];
  certificateUrl?: string[];
  projectUrl?: string[];
  companyUrl?: string;
  companyLinkLabel?: string;
  highlights?: string[];
  responsibilities?: string[];
}
