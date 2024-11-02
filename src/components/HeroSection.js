import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-scroll';
import '../styles/HeroSection.css'; // Import the CSS file

const { Title, Paragraph } = Typography;

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Welcome, Beautiful!</h1>
      <Paragraph className="hero-paragraph">
        Here's a little appreciation for all the wonderful things you do.
      </Paragraph>
      <Link
        to="appreciation-section" // Target the last section's ID
        smooth={true}
        duration={3000} // Adjust duration for a slow scroll
      >
        <Button type="primary" size="large" className="hero-button">
          Scroll to See More
        </Button>
      </Link>
    </div>
  );
}

export default HeroSection;
