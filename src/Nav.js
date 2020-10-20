import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li className="nav-content">
            {/* <span>About</span> */}
            <Link className="list-link" to="/about">About</Link>
          </li>
          <li className="nav-content">
            {/* <span>Project</span> */}
            <Link className="list-link" to="/project">Project</Link>
          </li>
          <li className="nav-content">
            {/* <span>Contact Me</span> */}
            <Link className="list-link" to="/contact-me">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;