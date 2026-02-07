import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "Software Engineer",
            company: "LTIMindtree",
            location: "Kolkata, India",
            period: "October 2024 – December 2025",
            description: [
                "Architected GenAI-powered code translation engine that modernized 500+ legacy applications 3x faster than manual approach, enabling client to sunset technical debt 18 months ahead of schedule.",
                "Created GenAI-driven risk simulation engine that flagged project risks 6 weeks in advance, and improving on-time delivery from 64% to 89%.",
                "Built LLM-powered resume screening tool that processed 10K+ applications with 85% time reduction, increasing hiring manager acceptance to 92% and enabling 2,400 HR hours to be reallocated to strategic initiatives.",
                "Pioneered GenAI documentation system that auto-generated 80% of technical specs from source code, reclaiming 400 hours/month and achieving 90% reduction in compliance violations."
            ]
        }
    ];

    return (
        <div className="experience-page section animate-fade-in">
            <div className="container">
                <h2 className="heading-md text-center">Work <span className="gradient-text">Experience</span></h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="timeline-dot">
                                <FaBriefcase />
                            </div>
                            <div className="glass-card exp-card">
                                <div className="exp-header">
                                    <h3>{exp.role}</h3>
                                    <div className="exp-meta">
                                        <span className="badge"><FaCalendarAlt /> {exp.period}</span>
                                        <span className="badge"><FaMapMarkerAlt /> {exp.location}</span>
                                    </div>
                                </div>
                                <h4 className="company-name">{exp.company}</h4>
                                <ul className="exp-list">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
