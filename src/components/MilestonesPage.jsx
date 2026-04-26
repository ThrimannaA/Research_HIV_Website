import React, { useState } from 'react';
import './MilestonesPage.css';

const MilestonesPage = () => {
  const [selectedAssessment, setSelectedAssessment] = useState('proposal');

  const milestones = {
    proposal: {
      title: "Project Proposal",
      date: "25 November 2025",
      marks: "6%",
      description: "Initial project proposal document outlining the research problem, objectives, methodology, and expected outcomes for an end-to-end predictive and prescriptive HIV system that integrates risk assessment, behavioral detection, and personalized intervention sequencing"
    },
    progress1: {
      title: "Progress Presentation 1",
      date: "9 January 2026",
      marks: "5%",
      description: "First progress presentation demonstrating three core subsystems: IoT-based physiological monitoring with CD4 estimation (prototype phase), HIV behavioral risk identification with personalized intervention sequencing, and machine learning-based drug resistance prediction for treatment optimization"
    },
    progress2: {
      title: "Progress Presentation 2",
      date: "12 March 2026",
      marks: "18%",
      description: "Second Progress presentation showcasing model development, prototype implementation of IoT monitoring, behavioral risk assessment system, ML-based treatment prediction, and initial clinical validation results"
    },
    final: {
      title: "Final Presentation",
      date: "6 May 2026",
      marks: "10%",
      description: "Final assessment presentation summarizing the complete end-to-end system implementation, including IoT monitoring, behavioral risk sequencing, drug resistance prediction, clinical validation results, and future improvements"
    },
    viva: {
      title: "Final Viva",
      date: "July 2026",
      marks: "10%",
      description: "Final viva voce examination assessing the student's knowledge of research gap, technical implementation, technology choices, and overall presentation effectiveness"
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
                <option value="final">Final Presentation</option>
                <option value="viva">Final Viva</option>
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
                    <span>Nov 2025 (6%)</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Progress Presentation 1</h4>
                    <span>Jan 2026 (15%)</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Progress Presentation 2</h4>
                    <span>Mar 2026 (18%)</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Final Presentation</h4>
                    <span>May 2026 (10%)</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Final Viva</h4>
                    <span>Jul 2026 (10%)</span>
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