
import React from 'react';
import {
  Database,
  Cpu,
  Globe,
  Layers,
  Terminal,
  Code2,
  Cloud,
  BarChart3,
  ShieldCheck,
  Flame,
  GitBranch,
  Box,
  Server,
  Zap,
  Sparkles,
  Brain,
  Layout,
  Link as LinkIcon,
  Search,
  Activity,
  Bot,
  Coffee,
  FileCode,
  Binary,
  HardDrive,
  Gauge,
  Network
} from 'lucide-react';
import { Project, Experience, SkillCategory, Publication } from './types';

export const PROJECTS: Project[] = [
  {
    title: "AI Study Abroad Counsellor",
    tech: ["Python", "Generative AI", "Next.js", "FastAPI", "Groq", "Supabase"],
    period: "February 2026",
    description: [
      "Built an AI counseling platform using Llama 3.3 for personalized university recommendations.",
      "Developed an AI CV Parser to extract academic data from PDF resumes.",
      "Created a dark-themed UI with Next.js 15 and Framer Motion."
    ],
    link: "https://arnab-uni-guide.vercel.app/",
    github: "https://github.com/ArnabNath1/ArnabUniGuide"
  },
  {
    title: "Flipkart Product Recommendation System",
    tech: ["Python", "Flask", "LangChain", "AstraDB", "TF-IDF"],
    period: "December 2025",
    description: [
      "Built a lightweight RAG-powered product recommendation system using TF-IDF and AstraDB vector search.",
      "Developed a Flask web app with a clean UI and containerized it via Docker.",
      "Added Prometheus and Grafana monitoring to track API latency and recommendation performance."
    ],
    github: "https://github.com/ArnabNath1/CONTENT-BASED-PRODUCT-RECOMMENDER-SYSTEM"
  },
  {
    title: "AI-Assisted Health Information Web Application",
    tech: ["TypeScript", "Gemini Pro", "React", "Node.js"],
    period: "December 2025",
    description: [
      "Built a TypeScript-based web application with Gemini models to deliver structured, context-aware health information.",
      "Focused on responsible AI usage by restricting outputs to non-diagnostic, educational content.",
      "Designed an interactive UI for seamless user consultation."
    ],
    link: "https://curalink-sage.vercel.app/",
    github: "https://github.com/ArnabNath1/Curalink"
  },
  {
    title: "Travel Planner",
    tech: ["Python", "LangChain", "Streamlit", "Folium", "Mistral-7B"],
    period: "June 2024",
    description: [
      "Developed an End to End Travel Planner using Langchain framework.",
      "Built the front-end using Streamlit and used Folium and GeoPy for interactive maps."
    ],
    link: "https://huggingface.co/spaces/arnabbumba077/TravelPlanner.AI",
    github: "https://github.com/ArnabNath1/Travel-Planner"
  },
  {
    title: "Movie Recommendation System",
    tech: ["Python", "Machine Learning", "Streamlit"],
    period: "2024",
    description: [
      "A content-based movie recommendation system that suggests films based on user preferences.",
      "Deployed on Streamlit for easy accessibility and real-time interaction."
    ],
    link: "https://moviereckai.streamlit.app/",
    github: "https://github.com/ArnabNath1/Movie-Recommendation-System"
  },
  {
    title: "Multi Language Invoice Extractor",
    tech: ["Python", "Gemini Pro Vision", "Streamlit"],
    period: "2024",
    description: [
      "AI-based web app for extracting data from invoices in various languages.",
      "Leverages Google Gemini Pro Vision model for high-accuracy OCR and data parsing."
    ],
    link: "https://huggingface.co/spaces/arnabbumba077/MultiLanguageInvoiceExtractor",
    github: "https://github.com/ArnabNath1/Multi-Language-Invoice-Extractor-App"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "LTIMindtree",
    location: "Kolkata, India",
    period: "October 2024 – December 2025",
    achievements: [
      "Architected GenAI-powered code translation engine that modernized 500+ legacy applications 3x faster than manual approach.",
      "Created GenAI-driven risk simulation engine that flagged project risks 6 weeks in advance, improving on-time delivery from 64% to 89%.",
      "Built LLM-powered resume screening tool that processed 10K+ applications with 85% time reduction, increasing hiring manager acceptance to 92%.",
      "Pioneered GenAI documentation system that auto-generated 80% of technical specs from source code, reclaiming 400 hours/month."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <Terminal size={18} /> },
      { name: "Java", icon: <Coffee size={18} /> },
      { name: "TypeScript", icon: <Code2 size={18} /> },
      { name: "JavaScript", icon: <FileCode size={18} /> },
      { name: "SQL", icon: <Database size={18} /> },
      { name: "HTML/CSS", icon: <Globe size={18} /> }
    ]
  },
  {
    category: "AI & ML Frameworks",
    skills: [
      { name: "LangChain", icon: <LinkIcon size={18} /> },
      { name: "LlamaIndex", icon: <Search size={18} /> },
      { name: "PyTorch", icon: <Activity size={18} /> },
      { name: "TensorFlow", icon: <Brain size={18} /> },
      { name: "Scikit-Learn", icon: <Binary size={18} /> },
      { name: "Generative AI", icon: <Sparkles size={18} /> }
    ]
  },
  {
    category: "Databases & Vector Stores",
    skills: [
      { name: "PostgreSQL", icon: <Database size={18} /> },
      { name: "MySQL", icon: <Database size={18} /> },
      { name: "AstraDB", icon: <HardDrive size={18} /> },
      { name: "Pinecone", icon: <Box size={18} /> },
      { name: "FAISS", icon: <Search size={18} /> }
    ]
  },
  {
    category: "Cloud & Dev Tools",
    skills: [
      { name: "Docker", icon: <Box size={18} /> },
      { name: "Kubernetes", icon: <Network size={18} /> },
      { name: "Prometheus", icon: <Gauge size={18} /> },
      { name: "Grafana", icon: <BarChart3 size={18} /> },
      { name: "Git", icon: <GitBranch size={18} /> },
      { name: "Azure", icon: <Cloud size={18} /> }
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Comparative Analysis of Machine Learning Algorithms for Temperature Prediction in Lisbon, Portugal",
    authors: "Arnab Nath, Ayeeshique Ishaan, Biswadeep Bhattacharjee, Sayak Sarkar",
    publisher: "Preprint, Research Square",
    year: "2025",
    description: "Presents a large-scale comparison of nine ML regression models for daily temperature forecasting using long-term meteorological data, highlighting the superior performance of nonlinear and ensemble methods through rigorous evaluation.",
    link: "https://www.researchsquare.com/article/rs-8391655/latest"
  }
];

export const RESEARCH_INTERESTS = [
  "Time-Series Forecasting and Spatio-temporal Data Analysis",
  "Explainable AI and Model Interpretability",
  "Integration of Simulation, Imaging, and Data in XR",
  "Human–Computer Interaction in XR Environments",
  "Machine Learning for Imaging and Sensing Systems",
  "Machine Learning for Interactive and Immersive Systems",
  "Responsible and Explainable Machine Learning in XR Applications",
  "Multimodal Data Fusion for Imaging and XR Systems"
];

export const CONTACT_CONFIG = {
  serviceId: 'service_8e3ebby',
  templateId: 'template_i2kcp9j',
  publicKey: 'KrwlwLVykyrQcoala'
};
