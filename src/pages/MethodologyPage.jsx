import React from 'react';
import './MethodologyPage.css';
import './Methodology.css';

const MethodologyPage = () => {
  return (
    <div className="methodology-page">
      <section id="methodology" className="section methodology">
        <div className="container">
          <h2 className="section-title">Our Methodology</h2>
          
          <div className="methodology-content">
            <div className="methodology-image">
              <div className="architecture-diagram">
                <h3>System Architecture</h3>
                <div className="diagram-placeholder">
                  <div className="diagram-layer user-layer">
                    <div className="diagram-component">
                      <i className="fas fa-mobile-alt"></i>
                      <span>Mobile App</span>
                    </div>
                  </div>
                  
                  <div className="diagram-arrow"></div>
                  
                  <div className="diagram-layer cloud-layer">
                    <div className="diagram-component">
                      <i className="fas fa-cloud"></i>
                      <span>Cloud Services</span>
                    </div>
                  </div>
                  
                  <div className="diagram-arrow"></div>
                  
                  <div className="diagram-layer ai-layer">
                    <div className="diagram-component">
                      <i className="fas fa-brain"></i>
                      <span>AI Models</span>
                    </div>
                    <div className="diagram-component">
                      <i className="fas fa-database"></i>
                      <span>Data Storage</span>
                    </div>
                  </div>
                  
                  <div className="diagram-arrow"></div>
                  
                  <div className="diagram-layer notification-layer">
                    <div className="diagram-component">
                      <i className="fas fa-bell"></i>
                      <span>Notifications</span>
                    </div>
                    <div className="diagram-component">
                      <i className="fas fa-chart-line"></i>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="methodology-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Data Collection</h3>
                  <p>
                    Collection of rice plant images showing various pests, diseases, 
                    quality issues, and weed seeds. Data is gathered through field 
                    visits and collaboration with agricultural institutions.
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Data Processing</h3>
                  <p>
                    Images are preprocessed using techniques like normalization, 
                    augmentation, and segmentation to enhance model training 
                    effectiveness.
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Model Development</h3>
                  <p>
                    Deep learning models using Convolutional Neural Networks (CNNs) 
                    are trained to identify pests, diseases, assess quality, and 
                    detect weed seeds in rice.
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Mobile Application</h3>
                  <p>
                    Development of a user-friendly mobile app that allows farmers to 
                    capture images, receive real-time analysis, and get actionable 
                    recommendations.
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Testing & Validation</h3>
                  <p>
                    Rigorous testing with real-world data to ensure accuracy and 
                    reliability of the system under various conditions and scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="technologies">
            <h3>Technologies Used</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <div className="tech-icon">
                  <i className="fab fa-python"></i>
                </div>
                <span>Python</span>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <span>TensorFlow</span>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon">
                  <i className="fab fa-react"></i>
                </div>
                <span>React Native</span>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon">
                  <i className="fas fa-database"></i>
                </div>
                <span>MongoDB</span>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon">
                  <i className="fab fa-java"></i>
                </div>
                <span>Spring Boot</span>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon">
                  <i className="fas fa-server"></i>
                </div>
                <span>Heroku</span>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon">
                  <i className="fas fa-fire"></i>
                </div>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodologyPage; 