import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <a className="nav-content">
          <span>About</span>
        </a>
        <a className="nav-content">
          <span>Project</span>
        </a>
        <a className="nav-content">
          <span>Contact Me</span>
        </a>

      </nav>
    </div>
  );
}

export default Nav;