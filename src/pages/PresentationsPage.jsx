import React, { useState } from 'react';
import './PresentationsPage.css';
import './Presentations.css';

const PresentationsPage = () => {
  const [selectedPresentation, setSelectedPresentation] = useState('proposal');

  const presentations = {
    proposal: {
      title: "Proposal Presentation",
      date: "November 2024",
      status: "Available",
      description: "Initial project proposal presentation covering research problem, objectives, methodology, and expected outcomes for IoT and AI-based HIV Decision Support System.",
      slidesCount: 25,
      link: "https://drive.google.com/drive/folders/18mfPfm5OQrih3oTA6GXaSCcSIBZuTQ7H?usp=drive_link"
    },
    progress1: {
      title: "Progress Presentation 1",
      date: "January 2025",
      status: "Available",
      description: "First progress presentation demonstrating literature review, system architecture design, and preliminary implementation of core components including IoT data collection and behavioral risk assessment.",
      slidesCount: 30,
      link: "https://drive.google.com/drive/folders/18mfPfm5OQrih3oTA6GXaSCcSIBZuTQ7H?usp=drive_link"
    },
    progress2: {
      title: "Progress Presentation 2",
      date: "March 2025",
      status: "Available",
      description: "Second progress presentation showcasing model development, prototype implementation, and initial validation results for behavioral risk prediction and drug resistance classification.",
      slidesCount: 28,
      link: "https://drive.google.com/drive/folders/18mfPfm5OQrih3oTA6GXaSCcSIBZuTQ7H?usp=drive_link"
    },
    final: {
      title: "Final Presentation",
      date: "July 2025",
      status: "Upcoming",
      description: "Final project presentation demonstrating complete system implementation, comprehensive evaluation results, and project contributions to HIV care management.",
      slidesCount: 35,
      link: null
    }
  };

  return (
    <div className="presentations-page">
      <section id="presentations" className="section presentations-section">
        <div className="container">
          <h2 className="section-title">Presentations (Slides)</h2>
          
          <div className="presentations-container">
            <div className="presentations-dropdown">
              <label htmlFor="presentation-select">Select Presentation:</label>
              <select 
                id="presentation-select"
                value={selectedPresentation}
                onChange={(e) => setSelectedPresentation(e.target.value)}
                className="presentation-dropdown"
              >
                <option value="proposal">Proposal Presentation</option>
                <option value="progress1">Progress Presentation 1</option>
                <option value="progress2">Progress Presentation 2</option>
                <option value="final">Final Presentation</option>
              </select>
            </div>

            <div className="presentation-card">
              <div className="presentation-header">
                <div className="presentation-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>{presentations[selectedPresentation].title}</h3>
                <span className={`status-badge ${presentations[selectedPresentation].status === 'Available' ? 'available' : 'upcoming'}`}>
                  {presentations[selectedPresentation].status}
                </span>
              </div>
              
              <div className="presentation-details">
                <div className="presentation-info">
                  <div className="info-item">
                    <i className="fas fa-calendar-alt"></i>
                    <strong>Date:</strong>
                    <span>{presentations[selectedPresentation].date}</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-file-powerpoint"></i>
                    <strong>Slides:</strong>
                    <span>{presentations[selectedPresentation].slidesCount} slides</span>
                  </div>
                </div>
                
                <div className="presentation-description">
                  <strong>Description:</strong>
                  <p>{presentations[selectedPresentation].description}</p>
                </div>

                {presentations[selectedPresentation].link ? (
                  <a href={presentations[selectedPresentation].link} target="_blank" rel="noopener noreferrer" className="presentation-link">
                    <i className="fas fa-download"></i>
                    Download Presentation Slides
                  </a>
                ) : (
                  <div className="presentation-upcoming">
                    <i className="fas fa-hourglass-half"></i>
                    <span>Slides will be available after the presentation</span>
                  </div>
                )}
              </div>
            </div>

            <div className="presentations-timeline">
              <h3>Presentation Timeline</h3>
              <div className="timeline-presentations">
                <div className="timeline-item-pres">
                  <div className="timeline-icon">
                    <i className="fas fa-file-powerpoint"></i>
                  </div>
                  <div className="timeline-content-pres">
                    <h4>Proposal Presentation</h4>
                    <span>November 2024</span>
                    <p>Project proposal and research plan defense</p>
                  </div>
                </div>
                
                <div className="timeline-item-pres">
                  <div className="timeline-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="timeline-content-pres">
                    <h4>Progress Presentation 1</h4>
                    <span>January 2025</span>
                    <p>Initial implementation and architecture review</p>
                  </div>
                </div>
                
                <div className="timeline-item-pres">
                  <div className="timeline-icon">
                    <i className="fas fa-microchip"></i>
                  </div>
                  <div className="timeline-content-pres">
                    <h4>Progress Presentation 2</h4>
                    <span>March 2025</span>
                    <p>Model development and validation results</p>
                  </div>
                </div>
                
                <div className="timeline-item-pres">
                  <div className="timeline-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="timeline-content-pres">
                    <h4>Final Presentation</h4>
                    <span>July 2025</span>
                    <p>Complete system demonstration and final defense</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future presentations provision */}
            <div className="future-presentations">
              <h3>Future Presentations</h3>
              <div className="future-card">
                <i className="fas fa-calendar-plus"></i>
                <div className="future-info">
                  <h4>Additional Presentations</h4>
                  <p>Provisions are kept for future presentations including research symposiums, conferences, and additional progress reviews as required by the academic calendar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PresentationsPage;