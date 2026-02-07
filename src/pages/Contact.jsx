import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Note: Replace these with actual EmailJS credentials
    emailjs.sendForm(
      'service_8e3ebby',
      'template_i2kcp9j',
      formRef.current,
      'KrwlwLVykyrQcoala'
    )
      .then((result) => {
        setLoading(false);
        setStatus('success');
        formRef.current.reset();
      }, (error) => {
      }, (error) => {
        setLoading(false);
        setStatus('error');
        console.log(error.text);
      });
  };

  return (
    <div className="contact-page section animate-fade-in">
      <div className="container">
        <h2 className="heading-md text-center">Let's <span className="gradient-text">Connect</span></h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="section-title">Get in touch</h3>
            <p>I'm always open to discussing research collaborations, AI engineering roles, or innovative projects.</p>

            <div className="info-items">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>arnabbumba077@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>

            <div className="social-cta">
              <h4>Social Profiles</h4>
              <div className="social-btns">
                <a href="https://github.com/ArnabNath1" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/arnabnath07" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="user_name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="user_email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'} <FaPaperPlane className="btn-icon" />
              </button>

              {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
              {status === 'error' && <p className="status-msg error">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;