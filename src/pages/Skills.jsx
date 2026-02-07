import { motion } from 'framer-motion';
import {
    FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaDocker, FaGitAlt
} from 'react-icons/fa';
import {
    SiFastapi, SiLangchain, SiPandas, SiNumpy, SiScikitlearn,
    SiKubernetes, SiPrometheus, SiGrafana, SiPytorch, SiTensorflow
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillGroups = [
        {
            title: "Languages",
            skills: [
                { name: "Python", icon: <FaPython color="#3776ab" /> },
                { name: "Java", icon: <FaJava color="#007396" /> },
                { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
                { name: "SQL", icon: <FaDatabase color="#336791" /> },
                { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
                { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
            ]
        },
        {
            title: "AI & Frameworks",
            skills: [
                { name: "LangChain", icon: <SiLangchain color="#1c3c3c" /> },
                { name: "FastAPI", icon: <SiFastapi color="#05998b" /> },
                { name: "LlamaIndex", icon: <FaBrain color="#ff4081" /> },
                { name: "Scikit-Learn", icon: <SiScikitlearn color="#f7931e" /> },
                { name: "Pandas", icon: <SiPandas color="#150458" /> },
                { name: "NumPy", icon: <SiNumpy color="#013243" /> },
            ]
        },
        {
            title: "Tools & DevOps",
            skills: [
                { name: "Docker", icon: <FaDocker color="#2496ed" /> },
                { name: "Kubernetes", icon: <SiKubernetes color="#326ce5" /> },
                { name: "Git", icon: <FaGitAlt color="#f05032" /> },
                { name: "Prometheus", icon: <SiPrometheus color="#e6522c" /> },
                { name: "Grafana", icon: <SiGrafana color="#f46800" /> },
                { name: "AstraDB", icon: <FaDatabase color="#008bb8" /> },
            ]
        }
    ];

    return (
        <div className="skills-page section animate-fade-in">
            <div className="container">
                <h2 className="heading-md text-center">Technical <span className="gradient-text">Proficiency</span></h2>

                <div className="skills-container">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            className="skill-group"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="group-title">{group.title}</h3>
                            <div className="skills-grid">
                                {group.skills.map((skill, i) => (
                                    <div key={i} className="skill-item glass-card">
                                        <div className="skill-icon">{skill.icon || <FaCode />}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Placeholder for missing icon
const FaBrain = ({ color }) => <div style={{ color }}>🧠</div>;
const FaCode = () => <div>💻</div>;

export default Skills;
