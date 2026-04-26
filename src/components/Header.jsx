// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Close menu when clicking outside
//   useEffect(() => {
//     const closeMenu = (e) => {
//       if (menuOpen && !e.target.closest('.nav-menu') && !e.target.closest('.mobile-menu-btn')) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener('click', closeMenu);
//     return () => {
//       document.removeEventListener('click', closeMenu);
//     };
//   }, [menuOpen]);

//   return (
//     <header className={`header ${scrolled ? 'scrolled' : ''}`}>
//       <div className="container header-container">
//         <div className="logo">
//           <Link to="/">
//             <h1>HIV Smart Care</h1>
//           </Link>
//         </div>
//         <div className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
//           <ul>
//             <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
//             <li><a href="#domain" onClick={() => setMenuOpen(false)}>Domain</a></li>
//             <li><a href="#milestones" onClick={() => setMenuOpen(false)}>Milestones</a></li>
//             <li><a href="#documents" onClick={() => setMenuOpen(false)}>Documents</a></li>            
//             <li><a href="#presentations" onClick={() => setMenuOpen(false)}>Presentations</a></li>
//             <li><a href="#team" onClick={() => setMenuOpen(false)}>About Us</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header; 

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle scrolling when hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without causing page reload
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuOpen && !e.target.closest('.nav-menu') && !e.target.closest('.mobile-menu-btn')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', '#home');
          }}>
            <h1>HIV Smart Care</h1>
          </Link>
        </div>
        <div className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#domain" onClick={(e) => handleNavClick(e, 'domain')}>Domain</a></li>
            <li><a href="#milestones" onClick={(e) => handleNavClick(e, 'milestones')}>Milestones</a></li>
            <li><a href="#documents" onClick={(e) => handleNavClick(e, 'documents')}>Documents</a></li>
            <li><a href="#presentations" onClick={(e) => handleNavClick(e, 'presentations')}>Presentations</a></li>
            <li><a href="#team" onClick={(e) => handleNavClick(e, 'team')}>About Us</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;