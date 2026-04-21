import React from 'react';
import architectureImage from '../assets/images/image.png';
import './SystemArchitecture.css';

const SystemArchitecture = () => {
  return (
    <section id="architecture" className="section architecture">
      <div className="container">
        <h2 className="section-title">System Architecture</h2>
        
        <div className="architecture-content">
          <div className="architecture-description">
            <p>
              Our system employs a comprehensive architecture designed to efficiently process 
              data from image capture to actionable insights. The diagram below illustrates 
              the flow of information through our AI-powered rice farming management system.
            </p>
            <ul className="architecture-features">
              <li>
                <i className="fas fa-mobile-alt"></i>
                <span>Mobile application for farmers to capture and upload images</span>
              </li>
              <li>
                <i className="fas fa-cloud-upload-alt"></i>
                <span>Cloud-based processing and storage for scalability</span>
              </li>
              <li>
                <i className="fas fa-brain"></i>
                <span>Deep learning models for accurate detection and classification</span>
              </li>
              <li>
                <i className="fas fa-database"></i>
                <span>Comprehensive database for historical data and trend analysis</span>
              </li>
              <li>
                <i className="fas fa-bell"></i>
                <span>Real-time notification system for immediate action</span>
              </li>
            </ul>
          </div>
          
          <div className="architecture-image">
            <img src={architectureImage} alt="System Architecture Diagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture; 