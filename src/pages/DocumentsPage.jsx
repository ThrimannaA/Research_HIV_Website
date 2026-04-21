import React from 'react';
import './DocumentsPage.css';

const DocumentsPage = () => {
  // Completed documents with their Google Drive links
  const completedDocs = [
    {
      title: "Project Charter",
      description: "Initial project charter document outlining scope, stakeholders, and high-level requirements for HIV Smart Care system",
      link: "https://mysliit.sharepoint.com/sites/CDAPSubmissionCloud/2526JCloud/Forms/AllItems.aspx?id=%2Fsites%2FCDAPSubmissionCloud%2F2526JCloud%2F25%2D26J%2D147%2DStudents&viewid=b6c5e95e%2Dd054%2D4e72%2Dbb46%2D33a9940141f2",
      type: "PDF",
      status: "completed"
    },
    {
      title: "Proposal Document",
      description: "Detailed project proposal including problem statement, research objectives, methodology, and timeline for IoT/AI-based HIV decision support",
      link: "https://mysliit.sharepoint.com/sites/CDAPSubmissionCloud/2526JCloud/Forms/AllItems.aspx?id=%2Fsites%2FCDAPSubmissionCloud%2F2526JCloud%2F25%2D26J%2D147%2DStudents%2F1%2E%20Project%20Proposal&viewid=b6c5e95e%2Dd054%2D4e72%2Dbb46%2D33a9940141f2",
      type: "PDF",
      status: "completed"
    },
    {
      title: "Checklist Documents",
      description: "Project checklist and compliance verification documents for all assessment milestones",
      link: "https://mysliit.sharepoint.com/sites/CDAPSubmissionCloud/2526JCloud/Forms/AllItems.aspx?id=%2Fsites%2FCDAPSubmissionCloud%2F2526JCloud%2F25%2D26J%2D147%2DStudents%2F6%2E%20CheckList%20Documents&viewid=b6c5e95e%2Dd054%2D4e72%2Dbb46%2D33a9940141f2",
      type: "ZIP",
      status: "completed"
    }
  ];

  // Pending documents
  const pendingDocs = [
    {
      title: "Final Document - Part 1",
      description: "Final thesis document - Introduction, Literature Review, and Research Gap Analysis",
      status: "Pending",
      expectedDate: "May 2025",
      link: null
    },
    {
      title: "Final Document - Part 2",
      description: "Final thesis document - System Architecture and Methodology",
      status: "Pending",
      expectedDate: "May 2025",
      link: null
    },
    {
      title: "Final Document - Part 3",
      description: "Final thesis document - Implementation and Results Analysis",
      status: "Pending",
      expectedDate: "June 2025",
      link: null
    },
    {
      title: "Final Document - Part 4",
      description: "Final thesis document - Discussion, Conclusion, and References",
      status: "Pending",
      expectedDate: "June 2025",
      link: null
    }
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
              <p>All completed documents are available for download. Pending documents will be uploaded upon completion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentsPage;