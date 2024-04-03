import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = ({ onToggleMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    onToggleMenu(!menuOpen); 
  };

  return (
    <div className="hamburger-container">
      <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {menuOpen && (
        <div>
          <div className="menu-option" onClick={toggleMenu}>
            <Link to="/"><h2>Home</h2></Link>
          </div>
          <div className="menu-option" onClick={toggleMenu}>
            <Link to="/career-help"><h2>Career Help</h2></Link>
          </div>
          <div className="menu-option" onClick={toggleMenu}>
            <Link to="/jobs"><h2>Job Openings</h2></Link>
          </div>
          <div className="menu-option" onClick={toggleMenu}>
            <Link to="/resources"><h2>Other Resources</h2></Link>
          </div>
          <div className="menu-option" onClick={toggleMenu}>
            <Link to="/signin"><h2>Profile</h2></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
