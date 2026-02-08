
// Import React to provide access to the React namespace for types like React.ReactNode
import React from 'react';

export interface Project {
  title: string;
  tech: string[];
  period: string;
  description: string[];
  github?: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: React.ReactNode }[];
}

export interface Publication {
  title: string;
  authors: string;
  publisher: string;
  year: string;
  description: string;
  link: string;
}
