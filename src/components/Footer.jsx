import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>
                Have questions about our IoT and AI-based HIV decision supportresearch or interested in collaboration? 
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
                <a href="#" className="social-link" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-link" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Get in Touch</h3>
              {formSubmitted ? (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  <p>Thank you for your message! We will get back to you soon.</p>
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
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn">Send Message</button>
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