import React from 'react';
import './DocumentsPage.css';

const DocumentsPage = () => {
  // Completed documents with their Google Drive links
  const completedDocs = [
    {
      title: "Charter Document",
      description: "Initial approved topic assessment form documenting research problem, scope, stakeholder context, objectives, novelty, and high-level solution requirements for the End-to-End Predictive and Prescriptive HIV System",
      link: "https://drive.google.com/drive/u/2/folders/1AfvZ51NqCLuN5_srvktAYCk76Pf84Pdi",
      type: "PDF",
      status: "completed"
    },
    {
      title: "Proposal Document",
      description: "Detailed project proposal including problem statement, research objectives, methodology, and timeline for an end-to-end predictive and prescriptive HIV system focusing on behavioral risk identification and personalized intervention sequencing",
      link: "https://drive.google.com/drive/u/2/folders/1wy2Riu4LC6mMmtkS73NecP1Ay0DuHWr3",
      type: "PDF",
      status: "completed"
    },
    {
      title: "Completed Checklist Documents",
      description: "Project checklist and compliance verification documents including literature review tracking sheet and methodology compliance verification for research assessment milestones",
      link: "https://drive.google.com/drive/u/2/folders/1GqvJN4sCmQpCQ_8O93dFYtambZ6rZA9F",
      type: "PDF, Excel",
      status: "completed"
    },
    {
      title: "Draft Thesis Documents",
      description: "Draft dissertation document presenting complete research on end-to-end predictive and prescriptive HIV system, including introduction, methodology, results, discussion, and conclusions",
      link: "https://drive.google.com/drive/u/2/folders/1Wsl0vMXTZNGmzM_Lrob0nCtlAgBvUmh4",
      type: "PDF",
      status: "completed"
    }
  ];

  // Pending documents
  const pendingDocs = [
   {
      title: "Pending Checklist Documents",
      description: "Project ethical compliance checklist (data privacy, security, bias, transparency, stakeholder impact) and technical implementation checklist (data pipeline, model development, integration, deployment) for research assessment milestones",
      status: "pending",
      expectedDate: "30 April 2026",
      link: null
    },
    {
      title: "Final Thesis Document",
      description: "Final group thesis and individual summary reports documenting the complete HIV risk assessment and personalized intervention research",
      status: "Pending",
      expectedDate: "13 May 2026",
      link: null
    },
    {
      title: "Logbook Submission",
      description: "Project logbook documenting weekly progress, supervisor meetings, task completion, and research activities from proposal to final submission",
      status: "Pending",
      expectedDate: "6 May 2026",
      link: null
    },
    {
      title: "Research Paper Submission",
      description: "Final research paper summarizing the complete end-to-end predictive and prescriptive HIV system including problem statement, methodology, results, clinical validation, and conclusions for academic publication",
      status: "Pending",
      expectedDate: "8 May 2026",
      link: null
    },
  ];

  return (
    <div className="documents-page">
      <section id="documents" className="section documents-section">
        <div className="container">
          <h2 className="section-title">Documents</h2>
          
          <div className="documents-container">
            {/* Completed Documents Section */}
            <div className="documents-completed">
              <h3>Completed Documents</h3>
              <div className="documents-grid">
                {completedDocs.map((doc, index) => (
                  <div key={index} className="document-card completed">
                    <div className="document-icon">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <div className="document-info">
                      <h4>{doc.title}</h4>
                      <p>{doc.description}</p>
                      <div className="document-meta">
                        <span className="doc-type">{doc.type}</span>
                        <a href={doc.link} target="_blank" rel="noopener noreferrer" className="doc-link">
                          View Document <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Documents Section */}
            <div className="documents-pending">
              <h3>Pending Documents</h3>
              <div className="documents-grid">
                {pendingDocs.map((doc, index) => (
                  <div key={index} className="document-card pending">
                    <div className="document-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="document-info">
                      <h4>{doc.title}</h4>
                      <p>{doc.description}</p>
                      <div className="document-meta">
                        <span className="doc-status">{doc.status}</span>
                        <span className="doc-expected">Expected: {doc.expectedDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note about documents */}
            <div className="documents-note">
              <i className="fas fa-info-circle"></i>
              <p>All completed documents are available for View. Pending documents will be uploaded upon completion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentsPage;