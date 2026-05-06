import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 6000);
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setFormStatus('error');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setFormStatus('error');
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>
                Have questions about our IoT and AI-based HIV decision support research or interested in collaboration? 
                Feel free to reach out to us.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>hivsmartcare@gmail.com</span>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+94 11 754 4801</span>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    Faculty of Computing,<br />
                    Sri Lanka Institute of Information Technology,<br />
                    New Kandy Road, Malabe
                  </span>
                </div>
              </div>
              
              <div className="social-media">
                <div className="social-link" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="social-link" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="social-link" title="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="social-link" title="GitHub">
                  <i className="fab fa-github"></i>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Get in Touch</h3>
              {formStatus === 'success' ? (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  <p>Thank you for your message! We will get back to you soon. A confirmation has been sent to your email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formStatus === 'loading'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formStatus === 'loading'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={formStatus === 'loading'}
                      required
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="form-error">
                      <i className="fas fa-exclamation-circle"></i>
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button type="submit" className="btn" disabled={formStatus === 'loading'}>
                    {formStatus === 'loading' ? (
                      <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} HIVSmartCare. All Rights Reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer; 