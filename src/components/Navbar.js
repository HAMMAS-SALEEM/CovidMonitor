import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav.css';
import backIcon from '../images/icons/back-icon.png';
import micIcon from '../images/icons/mic-icon.png';
import settingIcon from '../images/icons/setting-icon.png';

const Navbar = () => (
  <header>
    <nav className="nav-container">
      <div className="back-container">
        <Link to="/"><img className="back-icon" src={backIcon} alt="back-icon" /></Link>
      </div>
      <div className="mic-setting-container">
        <Link to="/"><img className="mic-icon" src={micIcon} alt="microphone-icon" /></Link>
        <Link to="/"><img className="setting-icon" src={settingIcon} alt="setting-icon" /></Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
