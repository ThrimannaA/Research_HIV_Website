import React from 'react';
import './TeamPage.css';
import './Team.css';
import anujiImage from '../assets/images/anuji.png';
import deesaraImage from '../assets/images/deesara.png';
import viharaImage from '../assets/images/vihara.png';
import msThamaliImage from '../assets/images/MsThamali.png';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Ms. Thamali Dassanayake',
      role: 'Supervisor',
      department: 'Computer Science',
      institution: 'Sri Lanka Institute of Information Technology',
      hasRealImage: true,
      image: msThamaliImage,
      imageClass: 'ms-thamali-image',
      social: {
        email: 'thamali.d@sliit.lk',
        linkedin: '#',
        scholar: '#'
      }
    },
    {
      name: 'R. A. D. N. Rupasinghe',
      role: 'Team Leader',
      department: 'Computer Science',
      institution: 'Sri Lanka Institute of Information Technology',
      hasRealImage: true,
      image: deesaraImage,
      imageClass: 'deesara-image',
      social: {
        email: 'deesararupasinghe2001@gmail.com ',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'A. Thrimanna',
      role: 'Team Member',
      department: 'Computer Science',
      institution: 'Sri Lanka Institute of Information Technology',
      hasRealImage: true,
      image: anujiImage,
      imageClass: 'anuji-image',
      social: {
        email: 'anuji.thrimanna@gmail.com',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'J. V. D. Jayarathna',
      role: 'Team Member',
      department: 'Computer Science',
      institution: 'Sri Lanka Institute of Information Technology',
      hasRealImage: true,
      image: viharaImage,
      imageClass: 'vihara-image',
      social: {
        email: 'vihara.diwyanjalee@gmail.com ',
        linkedin: '#',
        github: '#'
      }
    },
  ];

  return (
    <div className="team-page">
      <section id="team" className="section team">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="member-image">
                  {member.hasRealImage ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className={`real-image ${member.imageClass}`}
                    />
                  ) : (
                    <div className="image-placeholder">
                      <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  )}
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.department}</p>
                  <p>{member.institution}</p>
                  <div className="social-links">
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} title="Email">
                        <i className="fas fa-envelope"></i>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {member.social.scholar && (
                      <a href={member.social.scholar} target="_blank" rel="noopener noreferrer" title="Google Scholar">
                        <i className="fas fa-graduation-cap"></i>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
   
        </div>
      </section>
    </div>
  );
};

export default TeamPage; 