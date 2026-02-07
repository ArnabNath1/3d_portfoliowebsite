import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
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

  return (
    <div className="projects-page section animate-fade-in">
      <div className="container">
        <h2 className="heading-md text-center">Featured <span className="gradient-text">Projects</span></h2>

        <div className="projects-grid grid grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-icon-box">
                <FaCode className="project-icon" />
              </div>
              <h3>{project.title}</h3>
              <p className="project-period">{project.period}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <ul className="project-desc">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaGithub /> github
                  </a>
                )}
                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaExternalLinkAlt /> demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;