import React, { useState } from 'react';
import './MilestonesPage.css';

const MilestonesPage = () => {
  const [selectedAssessment, setSelectedAssessment] = useState('proposal');

  const milestones = {
    proposal: {
      title: "Project Proposal",
      date: "November 2024",
      marks: "10%",
      description: "Initial project proposal document outlining the research problem, objectives, methodology, and expected outcomes for the IoT and AI-based HIV Decision Support System."
    },
    progress1: {
      title: "Progress Presentation 1",
      date: "January 2025",
      marks: "15%",
      description: "First progress presentation demonstrating initial literature review, system architecture design, and preliminary implementation of core components including IoT data collection."
    },
    progress2: {
      title: "Progress Presentation 2",
      date: "March 2025",
      marks: "15%",
      description: "Second progress presentation showcasing model development, prototype implementation, and initial validation results for behavioral risk assessment and treatment prediction."
    },
    final: {
      title: "Final Assessment",
      date: "June 2025",
      marks: "50%",
      description: "Final assessment including complete system demonstration, comprehensive evaluation results, thesis submission, and final presentation."
    },
    viva: {
      title: "Viva",
      date: "July 2025",
      marks: "10%",
      description: "Oral examination to defend the research findings, methodology, and contributions of the HIV Smart Care system."
    }
  };

  return (
    <div className="milestones-page">
      <section id="milestones" className="section milestones-section">
        <div className="container">
          <h2 className="section-title">Milestones</h2>
          
          <div className="milestones-container">
            <div className="milestones-dropdown">
              <label htmlFor="assessment-select">Select Assessment:</label>
              <select 
                id="assessment-select"
                value={selectedAssessment}
                onChange={(e) => setSelectedAssessment(e.target.value)}
                className="assessment-dropdown"
              >
                <option value="proposal">Project Proposal</option>
                <option value="progress1">Progress Presentation 1</option>
                <option value="progress2">Progress Presentation 2</option>
                <option value="final">Final Assessment</option>
                <option value="viva">Viva</option>
              </select>
            </div>

            <div className="milestones-card">
              <div className="milestones-header">
                <h3>{milestones[selectedAssessment].title}</h3>
              </div>
              <div className="milestones-details">
                <div className="milestone-date">
                  <strong>Date:</strong> {milestones[selectedAssessment].date}
                </div>
                <div className="milestone-marks">
                  <strong>Marks Allocated:</strong> {milestones[selectedAssessment].marks}
                </div>
                <div className="milestone-description">
                  <strong>Description:</strong>
                  <p>{milestones[selectedAssessment].description}</p>
                </div>
              </div>
            </div>

            <div className="milestones-timeline">
              <h3>Project Timeline</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Project Proposal</h4>
                    <span>Nov 2024 (10%)</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Progress Presentation 1</h4>
                    <span>Jan 2025 (15%)</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Progress Presentation 2</h4>
                    <span>Mar 2025 (15%)</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Final Assessment</h4>
                    <span>Jun 2025 (50%)</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Viva</h4>
                    <span>Jul 2025 (10%)</span>
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

export default MilestonesPage;