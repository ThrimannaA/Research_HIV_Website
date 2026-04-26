import React, { useState } from 'react';
import './ProjectScope.css';
import systemDiagram from '../assets/images/system-diagram.png';

const DomainPage = () => {
  const [activeTab, setActiveTab] = useState('literature');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="project-scope-page">
      <section id="domain" className="section project-scope">
        <div className="container">
          <h2 className="section-title">Domain</h2>
          
          <div className="scope-container">
            <div className="scope-tabs">
              <button 
                className={`scope-tab ${activeTab === 'literature' ? 'active' : ''}`} 
                onClick={() => handleTabClick('literature')}
              >
                Literature Survey
              </button>
              <button 
                className={`scope-tab ${activeTab === 'gap' ? 'active' : ''}`} 
                onClick={() => handleTabClick('gap')}
              >
                Research Gap
              </button>
              <button 
                className={`scope-tab ${activeTab === 'problem' ? 'active' : ''}`} 
                onClick={() => handleTabClick('problem')}
              >
                Research Problem
              </button>
              <button 
                className={`scope-tab ${activeTab === 'objectives' ? 'active' : ''}`} 
                onClick={() => handleTabClick('objectives')}
              >
                Research Objectives
              </button>
              <button 
                className={`scope-tab ${activeTab === 'methodology' ? 'active' : ''}`} 
                onClick={() => handleTabClick('methodology')}
              >
                Methodology
              </button>
              <button 
                className={`scope-tab ${activeTab === 'technologies' ? 'active' : ''}`} 
                onClick={() => handleTabClick('technologies')}
              >
                Technologies Used
              </button>
            </div>
            
            <div className="scope-content">
              <div className={`scope-panel ${activeTab === 'literature' ? 'active' : ''}`} id="literature">
                <h3>Literature Survey</h3>
                <p>
                  The management of Human Immunodeficiency Virus (HIV) remains a major global healthcare challenge, particularly in resource-limited settings where continuous monitoring, behavioral assessment, and timely treatment adjustments are difficult to maintain. Traditional HIV care relies mainly on laboratory-based indicators such as viral load and CD4 cell count, which provide important information about disease progression and immune system status. However, these tests are typically performed only during scheduled clinical visits, which limits real-time access to patient health data and delays early detection of potential complications.
                </p>
                <p>
                  Recent research has explored the use of digital health technologies to overcome these limitations. Internet of Things (IoT) systems enable continuous physiological monitoring through wearable sensors, allowing healthcare providers to track patient health conditions outside clinical environments. In addition, mobile health applications support behavioral data collection and patient engagement, helping to identify risk-related behaviors and improve adherence to treatment. These technologies have shown potential in improving patient monitoring and supporting more proactive healthcare delivery.
                </p>
                <p>
                  Machine learning techniques have also been widely applied in HIV-related research. Predictive models are used to analyze clinical, behavioral, and physiological data to estimate disease progression and identify high-risk patients. Furthermore, research in computational biology has developed extensive databases of HIV drug resistance mutations, which support the development of machine learning models to predict the effectiveness of antiretroviral drugs. These approaches help clinicians make more informed treatment decisions based on data-driven insights.
                </p>
                <p>
                  Despite these advancements, most existing solutions focus on isolated aspects of HIV care such as monitoring, behavioral analysis, or treatment prediction. There is still a lack of integrated systems that combine these components into a unified decision support framework. This gap highlights the need for a comprehensive approach that integrates IoT-based monitoring, behavioral risk assessment, and predictive treatment optimization to support continuous and personalized HIV care.
                </p>
              </div>
              
              <div className={`scope-panel ${activeTab === 'gap' ? 'active' : ''}`} id="gap">
                <h3>Research Gap</h3>
                <p>
                  Although significant progress has been made in digital health technologies for HIV management, existing solutions remain fragmented. Most current systems focus on isolated components such as physiological monitoring, behavioral risk analysis, or treatment outcome prediction, rather than addressing HIV care in a holistic manner
                </p>
                <p>
                  Previous studies have demonstrated the effectiveness of individual approaches, including IoT-based patient monitoring systems, mobile health applications for behavioral interventions, and machine learning models for disease progression and drug resistance prediction. However, these systems operate independently and do not share an integrated decision-making framework.
                </p>
                <p>
                  There is a clear lack of a unified system that combines continuous physiological monitoring, behavioral risk assessment, personalized intervention strategies, and predictive drug resistance analysis within a single platform. This separation limits the ability to provide comprehensive, real-time, and personalized HIV care.
                </p>
                <p>
                  Therefore, this research addresses this gap by proposing and implementing an integrated IoT and AI-based decision support system that combines all three aspects into a unified framework for improved HIV management and clinical decision support.
                </p>
              </div>
              
              <div className={`scope-panel ${activeTab === 'problem' ? 'active' : ''}`} id="problem">
                <h3>Research Problem & Solution</h3>
                <h4>How to provide integrated IoT and AI-based decision support for HIV care?</h4>
                <p>
                  Human Immunodeficiency Virus (HIV) continues to be a major global health challenge, affecting millions of individuals worldwide. Despite significant advances in treatment, effective management of HIV still depends on continuous monitoring, behavioral risk assessment, and timely treatment optimization. However, in most healthcare systems, these aspects are handled separately and are largely dependent on periodic clinical visits. This creates delays in identifying health deterioration, assessing patient risk behavior, and adjusting treatment strategies.
                </p>
                <p>
                  Existing HIV management approaches are fragmented. Physiological monitoring is typically limited to hospital-based laboratory tests such as viral load and CD4 count, while behavioral risk evaluation is often conducted through manual assessments or separate mobile applications. Similarly, treatment prediction and drug resistance analysis are performed independently using clinical or genetic data without integration with real-time patient monitoring systems. This lack of integration reduces the ability of healthcare providers to make timely and data-driven decisions.
                </p>
                <p>
                  To address this gap, this research proposes an integrated IoT and AI-based decision support system for HIV care. The proposed solution combines three core components: IoT-based physiological monitoring using wearable sensors, AI-driven behavioral risk assessment through a mobile application, and machine learning-based drug resistance prediction using clinical and mutation data. These components work together within a unified framework to provide continuous monitoring, personalized intervention strategies, and predictive treatment recommendations.
                </p>
                <p>
                  The proposed system aims to improve HIV management by enabling real-time health insights for both patients and healthcare providers. By integrating multiple data sources into a single decision support platform, the system supports proactive healthcare delivery, enhances treatment accuracy, and improves overall patient outcomes.
                </p>
              </div>
              
              <div className={`scope-panel ${activeTab === 'objectives' ? 'active' : ''}`} id="objectives">
                <h3>Research Objectives</h3>
                <div className="objective-card">
                  <div className="objective-icon">1</div>
                  <div className="objective-content">
                    <h4>IoT-Based Physiological Monitoring</h4>
                    <p>To develop a continuous patient monitoring system using IoT-based wearable sensors to capture physiological parameters such as heart rate, blood oxygen saturation, body temperature, and physical activity levels in real time</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">2</div>
                  <div className="objective-content">
                    <h4>Tuberculosis Screening System</h4>
                    <p>To design an automated tuberculosis screening module using cough pattern analysis and deep learning-based chest X-ray image classification for early detection of TB in HIV patients</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">3</div>
                  <div className="objective-content">
                    <h4>Behavioral Risk Identification</h4>
                    <p>To develop a mobile-based behavioral risk assessment system using rule-based clinical scoring and machine learning techniques to identify high-risk behaviors and generate personalized intervention strategies</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">4</div>
                  <div className="objective-content">
                    <h4>Drug Resistance Prediction</h4>
                    <p>To implement a machine learning-based predictive model for antiretroviral drug resistance using clinical data, treatment history, and viral mutation profiles</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">5</div>
                  <div className="objective-content">
                    <h4>Integrated Decision Support</h4>
                    <p>To develop a unified decision support platform that integrates IoT monitoring, behavioral analysis, and drug resistance prediction to support continuous monitoring and treatment optimization for HIV patients</p>
                  </div>
                </div>
              </div>

              <div className={`scope-panel ${activeTab === 'methodology' ? 'active' : ''}`} id="methodology">
                <h3>Methodology</h3>

                <div className="methodology-layout">

                  {/* LEFT SIDE - TEXT */}
                  <div className="methodology-text">
                    <p>
                      The proposed system follows a structured data science approach with data preprocessing, 
                      model building, validation, and decision integration. The methodology incorporates 
                      physiological monitoring, behavioral assessment, and treatment prediction components.
                    </p>

                    <div className="methodology-steps">
                      <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <h4>Data Preprocessing</h4>
                          <p>Data from IoT wearables, mobile surveys, clinical records, and mutation datasets is cleaned and standardized.</p>
                        </div>
                      </div>

                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h4>Model Development</h4>
                          <p>Machine learning and deep learning models are used for prediction and classification tasks.</p>
                        </div>
                      </div>

                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h4>Training & Validation</h4>
                          <p>Models are trained using cross-validation and evaluated using standard performance metrics.</p>
                        </div>
                      </div>

                      <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                          <h4>Integration Pipeline</h4>
                          <p>All components are combined into a unified decision support system.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE - IMAGE */}
                  <div className="methodology-image">

                    <h4 className="image-title">
                      System Architecture of HIV Smart Care
                    </h4>

                    <img src={systemDiagram} alt="System Architecture Diagram" />

                    <p className="image-description">
                      <p>The HIV Smart Care system integrates IoT, mobile health, and machine learning into a unified decision support platform. It collects physiological, behavioral, and clinical data and processes them through a backend system to generate real-time insights for patients and healthcare providers.</p>
                      <p>The system has three main components. The IoT module monitors vital signs and supports early disease screening, including respiratory anomalies and tuberculosis detection. The behavioral module assesses user responses to identify HIV risk levels and provides personalized intervention plans. The clinical module predicts antiretroviral drug resistance and supports treatment optimization using machine learning models.</p>
                      <p>All processed information is displayed through a secure interface for healthcare providers and patients. Data security is maintained through encryption and role-based access control to ensure patient privacy.</p>
                    </p>

                  </div>

                </div>
              </div>

              <div className={`scope-panel ${activeTab === 'technologies' ? 'active' : ''}`} id="technologies">
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
                    <span>TensorFlow / Keras (Deep Learning)</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <span>Scikit-learn / XGBoost / Random Forest</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-dna"></i>
                    </div>
                    <span>Mutation Data Analysis</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-microchip"></i>
                    </div>
                    <span>IoT Wearable Sensors</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-microphone"></i>
                    </div>
                    <span>Cough Detection Sensors</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-x-ray"></i>
                    </div>
                    <span>Chest X-ray Imaging (TB Detection)</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-cloud"></i>
                    </div>
                    <span>Cloud Computing (Data Storage & Processing)</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <span>Flutter Mobile App</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-database"></i>
                    </div>
                    <span>Firebase / Cloud Database</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-chart-bar"></i>
                    </div>
                    <span>Data Analytics Dashboard</span>
                  </div>

                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-lock"></i>
                    </div>
                    <span>Security (Encryption & Authentication)</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomainPage;