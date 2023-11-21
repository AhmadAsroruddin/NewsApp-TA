import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header-container">
        <h1 className="main-title">Welcome to the Latest News App!</h1>
        <p className="subtitle">Update your news about the world everyday.</p>
      </div>
      <div className="cta-container">
        <p className="ready-text">Ready to dive in?</p>
        <Link to="/news" className="explore-link">
          Explore  News
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
