import React from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="pokemon-header-container">
      <div className="phc-logo">
        <p onClick={() => navigate("/")}>Pokemon App</p>
      </div>
      <div className="phc-nav-menu">
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/about")}>About</p>
        <p onClick={() => navigate("/contact")}>Contact</p>
      </div>
    </div>
  );
}

export default Header