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
                      <p>Data from IoT wearables, mobile surveys, clinical records, and mutation datasets is cleaned and standardized. Missing values are handled, outliers removed, and relevant features selected for analysis.</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Model Development</h4>
                      <p>Gradient Boosting models are used for behavioral risk and drug resistance prediction. A CNN model is used for tuberculosis detection from chest X-ray images. Hyperparameter tuning improves accuracy</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Model Training & Validation</h4>
                      <p>Models are trained using stratified five-fold cross-validation. SMOTE is applied for class imbalance. Performance is measured using accuracy, precision, recall, F1-score, and ROC-AUC</p>
                    </div>
                  </div>
                  
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Integration Pipeline</h4>
                      <p>All components are combined into a single pipeline. IoT, behavioral, and clinical data are processed together to generate clinical recommendations for decision support</p>
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
                    <span>XGBoost / Scikit-learn / Random Forest</span>
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
                    <span>Firebase</span>
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