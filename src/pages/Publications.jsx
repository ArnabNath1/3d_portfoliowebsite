import { motion } from 'framer-motion';
import { FaFileAlt, FaQuoteLeft, FaCalendarAlt, FaUserEdit, FaExternalLinkAlt } from 'react-icons/fa';
import './Publications.css';

const Publications = () => {
    const publications = [
        {
            title: "Comparative Analysis of Machine Learning Algorithms for Temperature Prediction in Lisbon, Portugal",
            status: "Present",
            authors: "Arnab Nath, Ayeeshique Ishaan, Biswadeep Bhattacharjee, Sayak Sarkar",
            publisher: "Preprint, Research Square, 2025. Manuscript submitted to journal",
            abstract: "A large-scale comparison of nine ML regression models for daily temperature forecasting using long-term meteorological data, highlighting the superior performance of nonlinear and ensemble methods through rigorous, leakage-aware evaluation.",
            link: "https://www.researchsquare.com/article/rs-8391655/latest"
        }
    ];

    return (
        <div className="publications-page section animate-fade-in">
            <div className="container">
                <h2 className="heading-md text-center">Recent <span className="gradient-text">Publications</span></h2>

                <div className="pub-list">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            className="glass-card pub-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="pub-status-badge">{pub.status}</div>
                            <h3>{pub.title}</h3>
                            <div className="pub-meta">
                                <div className="meta-item">
                                    <FaUserEdit className="meta-icon" />
                                    <span>{pub.authors}</span>
                                </div>
                                <div className="meta-item">
                                    <FaCalendarAlt className="meta-icon" />
                                    <span>2025</span>
                                </div>
                                <div className="meta-item">
                                    <FaFileAlt className="meta-icon" />
                                    <span>{pub.publisher}</span>
                                </div>
                            </div>
                            <div className="pub-abstract">
                                <FaQuoteLeft className="quote-icon" />
                                <p>{pub.abstract}</p>
                            </div>
                            {pub.link && (
                                <a 
                                    href={pub.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="pub-link-btn btn btn-primary"
                                >
                                    <FaExternalLinkAlt /> Read Publication
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Publications;
