import React, { useState } from 'react';
import './ProjectScopePage.css';
import './ProjectScope.css';

const ProjectScopePage = () => {
  const [activeTab, setActiveTab] = useState('literature');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="project-scope-page">
      <section id="project-scope" className="section project-scope">
        <div className="container">
          <h2 className="section-title">Project Scope</h2>
          
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
                Research Problem & Solution
              </button>
              <button 
                className={`scope-tab ${activeTab === 'objectives' ? 'active' : ''}`} 
                onClick={() => handleTabClick('objectives')}
              >
                Research Objectives
              </button>
            </div>
            
            <div className="scope-content">
              <div className={`scope-panel ${activeTab === 'literature' ? 'active' : ''}`} id="literature">
                <h3>Literature Survey</h3>
                <p>
                  The rapid advancement of Artificial Intelligence (AI) and Internet of Things (IoT) 
                  technologies has paved the way for transforming the agricultural sector, driving 
                  innovations in crop management, disease detection, and quality control.
                </p>
                <p>
                  Smart agriculture aims to leverage digital technologies to create intelligent, 
                  interconnected farming systems that enhance productivity and sustainability. AI 
                  plays a crucial role in this area by enabling real-time data analysis, automated 
                  monitoring, and decision-making support.
                </p>
                <p>
                  Recent studies have highlighted various AI applications in agriculture, including 
                  the optimization of crop management, early disease and pest detection, and yield 
                  prediction. These advancements promise to transform farming practices, making them 
                  more efficient and less resource dependent.
                </p>
              </div>
              
              <div className={`scope-panel ${activeTab === 'gap' ? 'active' : ''}`} id="gap">
                <h3>Research Gap</h3>
                <p>
                  The reviewed literature highlights a significant gap in the application of AI 
                  technologies for small-scale rice farming, particularly in the areas of integrated 
                  pest management, disease detection, and quality control.
                </p>
                <p>
                  While significant progress has been made in the field of smart agriculture, most of 
                  these advancements have been tailored to large-scale commercial farming systems or 
                  regions with robust infrastructure. As a result, the specific needs of small-scale 
                  rice farmers in developing regions remain largely unmet.
                </p>
                <p>
                  Many existing AI solutions require expensive equipment, stable internet connectivity, 
                  and advanced technical knowledge, which are not readily available to farmers in rural 
                  or resource limited areas.
                </p>
              </div>
              
              <div className={`scope-panel ${activeTab === 'problem' ? 'active' : ''}`} id="problem">
                <h3>Research Problem & Solution</h3>
                <h4>How to classify pests and diseases in rice crops and provide surveillance to farmers in real time?</h4>
                <p>
                  Rice farming is a crucial component of Sri Lanka's agricultural sector and food security. 
                  However, farmers face numerous challenges that impact productivity and sustainability. 
                  These challenges include pest infestations, plant diseases, quality control issues, and 
                  weed seed contamination.
                </p>
                <p>
                  Our solution, Farmer Smart, uses mobile and web-based software to manage rice farming 
                  challenges. Using Deep Learning techniques like Convolutional Neural Networks (CNN) for 
                  feature extraction, we can identify diseases and pests accurately. Farmers will be able 
                  to identify issues by capturing photographs of plants with symptoms.
                </p>
                <p>
                  The location will be extracted by Geo Tags to gather anonymous data for future predictions. 
                  Real-time notifications are sent whenever an infected plant is found, enabling researchers 
                  and agricultural officers to take remedial actions quickly.
                </p>
              </div>
              
              <div className={`scope-panel ${activeTab === 'objectives' ? 'active' : ''}`} id="objectives">
                <h3>Research Objectives</h3>
                <div className="objective-card">
                  <div className="objective-icon">1</div>
                  <div className="objective-content">
                    <h4>Pest Detection & Classification</h4>
                    <p>Develop an AI system to accurately identify and classify common rice pests using image recognition technology.</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">2</div>
                  <div className="objective-content">
                    <h4>Disease Diagnosis</h4>
                    <p>Create a deep learning model to diagnose rice plant diseases at early stages to prevent crop damage.</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">3</div>
                  <div className="objective-content">
                    <h4>Quality Assessment</h4>
                    <p>Design an automated system for evaluating rice quality based on visual characteristics.</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">4</div>
                  <div className="objective-content">
                    <h4>Weed Seed Detection</h4>
                    <p>Implement computer vision algorithms to identify and count weed seeds in rice samples.</p>
                  </div>
                </div>
                
                <div className="objective-card">
                  <div className="objective-icon">5</div>
                  <div className="objective-content">
                    <h4>Real-time Information Sharing</h4>
                    <p>Develop a mobile application for farmers to receive real-time alerts and recommendations.</p>
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

export default ProjectScopePage; 