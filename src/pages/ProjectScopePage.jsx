// import React, { useState } from 'react';
// import './ProjectScopePage.css';
// import './ProjectScope.css';

// const ProjectScopePage = () => {
//   const [activeTab, setActiveTab] = useState('literature');
  
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="project-scope-page">
//       <section id="project-scope" className="section project-scope">
//         <div className="container">
//           <h2 className="section-title">Domain</h2>
          
//           <div className="scope-container">
//             <div className="scope-tabs">
//               <button 
//                 className={`scope-tab ${activeTab === 'literature' ? 'active' : ''}`} 
//                 onClick={() => handleTabClick('literature')}
//               >
//                 Literature Survey
//               </button>
//               <button 
//                 className={`scope-tab ${activeTab === 'gap' ? 'active' : ''}`} 
//                 onClick={() => handleTabClick('gap')}
//               >
//                 Research Gap
//               </button>
//               <button 
//                 className={`scope-tab ${activeTab === 'problem' ? 'active' : ''}`} 
//                 onClick={() => handleTabClick('problem')}
//               >
//                 Research Problem & Solution
//               </button>
//               <button 
//                 className={`scope-tab ${activeTab === 'objectives' ? 'active' : ''}`} 
//                 onClick={() => handleTabClick('objectives')}
//               >
//                 Research Objectives
//               </button>
//             </div>
            
//             <div className="scope-content">
//               <div className={`scope-panel ${activeTab === 'literature' ? 'active' : ''}`} id="literature">
//                 <h3>Literature Survey</h3>
//                 <p>
//                   The rapid advancement of Artificial Intelligence (AI) and Internet of Things (IoT) 
//                   technologies has paved the way for transforming the agricultural sector, driving 
//                   innovations in crop management, disease detection, and quality control.
//                 </p>
//                 <p>
//                   Smart agriculture aims to leverage digital technologies to create intelligent, 
//                   interconnected farming systems that enhance productivity and sustainability. AI 
//                   plays a crucial role in this area by enabling real-time data analysis, automated 
//                   monitoring, and decision-making support.
//                 </p>
//                 <p>
//                   Recent studies have highlighted various AI applications in agriculture, including 
//                   the optimization of crop management, early disease and pest detection, and yield 
//                   prediction. These advancements promise to transform farming practices, making them 
//                   more efficient and less resource dependent.
//                 </p>
//               </div>
              
//               <div className={`scope-panel ${activeTab === 'gap' ? 'active' : ''}`} id="gap">
//                 <h3>Research Gap</h3>
//                 <p>
//                   The reviewed literature highlights a significant gap in the application of AI 
//                   technologies for small-scale rice farming, particularly in the areas of integrated 
//                   pest management, disease detection, and quality control.
//                 </p>
//                 <p>
//                   While significant progress has been made in the field of smart agriculture, most of 
//                   these advancements have been tailored to large-scale commercial farming systems or 
//                   regions with robust infrastructure. As a result, the specific needs of small-scale 
//                   rice farmers in developing regions remain largely unmet.
//                 </p>
//                 <p>
//                   Many existing AI solutions require expensive equipment, stable internet connectivity, 
//                   and advanced technical knowledge, which are not readily available to farmers in rural 
//                   or resource limited areas.
//                 </p>
//               </div>
              
//               <div className={`scope-panel ${activeTab === 'problem' ? 'active' : ''}`} id="problem">
//                 <h3>Research Problem & Solution</h3>
//                 <h4>How to classify pests and diseases in rice crops and provide surveillance to farmers in real time?</h4>
//                 <p>
//                   Rice farming is a crucial component of Sri Lanka's agricultural sector and food security. 
//                   However, farmers face numerous challenges that impact productivity and sustainability. 
//                   These challenges include pest infestations, plant diseases, quality control issues, and 
//                   weed seed contamination.
//                 </p>
//                 <p>
//                   Our solution, Farmer Smart, uses mobile and web-based software to manage rice farming 
//                   challenges. Using Deep Learning techniques like Convolutional Neural Networks (CNN) for 
//                   feature extraction, we can identify diseases and pests accurately. Farmers will be able 
//                   to identify issues by capturing photographs of plants with symptoms.
//                 </p>
//                 <p>
//                   The location will be extracted by Geo Tags to gather anonymous data for future predictions. 
//                   Real-time notifications are sent whenever an infected plant is found, enabling researchers 
//                   and agricultural officers to take remedial actions quickly.
//                 </p>
//               </div>
              
//               <div className={`scope-panel ${activeTab === 'objectives' ? 'active' : ''}`} id="objectives">
//                 <h3>Research Objectives</h3>
//                 <div className="objective-card">
//                   <div className="objective-icon">1</div>
//                   <div className="objective-content">
//                     <h4>Pest Detection & Classification</h4>
//                     <p>Develop an AI system to accurately identify and classify common rice pests using image recognition technology.</p>
//                   </div>
//                 </div>
                
//                 <div className="objective-card">
//                   <div className="objective-icon">2</div>
//                   <div className="objective-content">
//                     <h4>Disease Diagnosis</h4>
//                     <p>Create a deep learning model to diagnose rice plant diseases at early stages to prevent crop damage.</p>
//                   </div>
//                 </div>
                
//                 <div className="objective-card">
//                   <div className="objective-icon">3</div>
//                   <div className="objective-content">
//                     <h4>Quality Assessment</h4>
//                     <p>Design an automated system for evaluating rice quality based on visual characteristics.</p>
//                   </div>
//                 </div>
                
//                 <div className="objective-card">
//                   <div className="objective-icon">4</div>
//                   <div className="objective-content">
//                     <h4>Weed Seed Detection</h4>
//                     <p>Implement computer vision algorithms to identify and count weed seeds in rice samples.</p>
//                   </div>
//                 </div>
                
//                 <div className="objective-card">
//                   <div className="objective-icon">5</div>
//                   <div className="objective-content">
//                     <h4>Real-time Information Sharing</h4>
//                     <p>Develop a mobile application for farmers to receive real-time alerts and recommendations.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProjectScopePage;


import React, { useState } from 'react';
import './ProjectScope.css';

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
                  The management of Human Immunodeficiency Virus (HIV) remains a global healthcare concern, 
                  especially in areas with scarce resources, where constant monitoring, behavioral risk 
                  evaluation, and improvement in treatment protocols are often restricted.
                </p>
                <p>
                  Traditional HIV monitoring uses lab-based indicators such as viral load and CD4 cell count. 
                  These tests offer important clinical data relating to disease progression and immune system 
                  function. However, these tests can only be carried out during scheduled medical consultations, 
                  limiting timely data access.
                </p>
                <p>
                  Studies have investigated the potential of digital technologies in promoting HIV prevention, 
                  monitoring, and treatment. Machine learning techniques have been applied to HIV-related 
                  datasets to predict disease progression. Mobile health technology has shown promising 
                  potential in patient engagement and treatment compliance.
                </p>
                <p>
                  Recent research has developed large databases of HIV drug resistance mutations, which can 
                  be used for predictive modelling of drug response by machine learning algorithms. Despite 
                  these advances, current solutions address only isolated aspects of HIV care.
                </p>
              </div>
              
              <div className={`scope-panel ${activeTab === 'gap' ? 'active' : ''}`} id="gap">
                <h3>Research Gap</h3>
                <p>
                  Previous studies have shown the benefits of individual digital interventions, yet the field 
                  of HIV care technologies remains fragmented. No existing solution integrates continuous 
                  physiological monitoring, behavioral risk assessment, personalized interventions, and 
                  drug resistance prediction within a single framework.
                </p>
                <p>
                  While significant progress has been made in digital health for HIV management, most systems 
                  focus on single aspects - some designed for physiological monitoring, some for behavioral 
                  interventions, and some for predicting treatment outcomes.
                </p>
                <p>
                  There is a critical need for a system that can integrate all these features into a unified 
                  decision support system. This research addresses that gap by presenting the design and 
                  prototype evaluation of a comprehensive, multi-component decision support system for HIV care.
                </p>
              </div>
              
              <div className={`scope-panel ${activeTab === 'problem' ? 'active' : ''}`} id="problem">
                <h3>Research Problem & Solution</h3>
                <h4>How to provide integrated IoT and AI-based decision support for HIV care?</h4>
                <p>
                  HIV remains a pandemic, infecting millions worldwide, and is still regarded as one of the 
                  most serious health issues globally. Health organizations worldwide stress the need for 
                  early diagnosis, regular monitoring, and proper treatment to reduce mortality rates and 
                  improve quality of life.
                </p>
                <p>
                  Our solution proposes a framework for physiological monitoring, behavioral risk identification, 
                  and treatment optimization through IoT technology and AI. The framework has the potential 
                  to assist both patients and healthcare providers through real-time health insights.
                </p>
                <p>
                  The system includes IoT-based physiological monitoring using wearable sensors, behavioral 
                  risk assessment through a mobile application, and machine learning-based treatment prediction 
                  using clinical and mutation data. This integrated approach provides continuous monitoring, 
                  personalized interventions, and predictive clinical decision support.
                </p>
              </div>
              
              <div className={`scope-panel ${activeTab === 'objectives' ? 'active' : ''}`} id="objectives">
                <h3>Research Objectives</h3>
                <div className="objective-card">
                  <div className="objective-icon">1</div>
                  <div className="objective-content">
                    <h4>IoT-Based Physiological Monitoring</h4>
                    <p>Develop continuous patient monitoring using wearable sensors to track heart rate, blood oxygen saturation, body temperature, and physical activity levels in real-time.</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">2</div>
                  <div className="objective-content">
                    <h4>Tuberculosis Screening System</h4>
                    <p>Create a microphone-based cough pattern monitoring system with deep learning analysis of chest X-rays for early TB detection in HIV patients.</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">3</div>
                  <div className="objective-content">
                    <h4>Behavioral Risk Identification</h4>
                    <p>Design a mobile application with rule-based clinical scoring and machine learning models to assess behavioral risk factors and generate personalized intervention plans.</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">4</div>
                  <div className="objective-content">
                    <h4>Drug Resistance Prediction</h4>
                    <p>Implement machine learning algorithms to predict antiretroviral drug resistance using clinical data, treatment history, and viral mutation counts.</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">5</div>
                  <div className="objective-content">
                    <h4>Integrated Decision Support</h4>
                    <p>Develop a unified mobile-based platform that integrates all components for continuous monitoring, risk assessment, and treatment optimization.</p>
                  </div>
                </div>
              </div>

              <div className={`scope-panel ${activeTab === 'methodology' ? 'active' : ''}`} id="methodology">
                <h3>Methodology</h3>
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
                      <p>Physiological signals from IoT wearables, behavioral responses, clinical data, and mutation data are cleaned, normalized, and prepared for analysis. Missing values are handled, outliers removed, and features selected using correlation analysis.</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Model Development</h4>
                      <p>Gradient boosting models for behavioral risk prediction and drug resistance classification. Deep learning CNN for tuberculosis detection from chest X-rays. Hyperparameter tuning using grid search and cross-validation.</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Model Training & Validation</h4>
                      <p>Stratified five-fold cross-validation with SMOTE sampling for class imbalance. Performance evaluation using accuracy, precision, recall, F1-score, and ROC AUC metrics.</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Integration Pipeline</h4>
                      <p>Unified pipeline processing wearable data, behavioral data analysis, and treatment prediction on clinician request. Decision support logic converts model outputs into clinical recommendations.</p>
                    </div>
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
                    <span>TensorFlow / PyTorch</span>
                  </div>
                  
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <span>XGBoost / Scikit-learn</span>
                  </div>
                  
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-microchip"></i>
                    </div>
                    <span>IoT Sensors</span>
                  </div>
                  
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-cloud"></i>
                    </div>
                    <span>Cloud Platform</span>
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
                    <span>MongoDB / Firebase</span>
                  </div>
                  
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-chart-bar"></i>
                    </div>
                    <span>Analytics Dashboard</span>
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