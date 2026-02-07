import { motion } from 'framer-motion';
import { FaGraduationCap, FaMicroscope, FaBrain } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const researchInterests = [
    "Time-Series Forecasting and Spatio-temporal Data Analysis",
    "Explainable AI and Model Interpretability",
    "Integration of Simulation, Imaging, and Data in XR",
    "Human–Computer Interaction in XR Environments",
    "Machine Learning for Imaging and Sensing Systems",
    "Machine Learning for Interactive and Immersive Systems",
    "Responsible and Explainable Machine Learning in XR Applications",
    "Multimodal Data Fusion for Imaging and XR Systems"
  ];

  return (
    <div className="home-page animate-fade-in">
      <section className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-lg">
              Engineering <span className="gradient-text">Intelligence</span><br />
              Shaping the Future.
            </h1>
            <p className="hero-subtext">
              I am <span className="highlight">Arnab Nath</span>, a Software Engineer specializing in GenAI,
              LLM Orchestration, and RAG systems. Based in Kolkata, I build scalable AI solutions
              that bridge the gap between research and production.
            </p>
            <div className="hero-btns">
              <a href="/projects" className="btn btn-primary">View My Work</a>
              <a href="https://github.com/ArnabNath1" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
              <a href="https://www.linkedin.com/in/arnabnath07" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about section bg-alt">
        <div className="container grid grid-cols-2">
          <div className="about-content">
            <h2 className="heading-md">About Me</h2>
            <p>
              Computer Science graduate specializing in AI and Machine Learning with strong research experience in climate and environmental modeling.
              Skilled in comparative evaluation of ML models, time-series forecasting, and explainable AI.
            </p>
            <p>
              My expertise lies in building reproducible ML pipelines and GenAI systems in production environments.
              I am passionate about creating tools that empower developers and businesses to leverage the full potential of Artificial Intelligence.
            </p>
            <div className="edu-item">
              <FaGraduationCap className="edu-icon" />
              <div>
                <h4>Bachelor of Technology</h4>
                <p>Haldia Institute of Technology | 2020 - 2024</p>
                <p className="text-muted">CGPA: 9.02</p>
              </div>
            </div>
          </div>
          <div className="research-box glass-card">
            <h3 className="flex-center">
              <FaMicroscope className="icon-margin" /> Research Interests
            </h3>
            <ul className="interest-list">
              {researchInterests.map((interest, index) => (
                <li key={index} className="interest-item">
                  <FaBrain className="bullet-icon" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;