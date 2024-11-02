import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-scroll';

const { Title, Paragraph } = Typography;

function HeroSection() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: 'var(--secondary-color)', borderRadius: '10px', marginBottom: '2rem' }}>
      <Title level={1} style={{ color: 'var(--primary-color)' }}>Welcome, Beautiful!</Title>
      <Paragraph style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>
        Here's a little appreciation for all the wonderful things you do.
      </Paragraph>
      <Link
        to="appreciation-section" // Target the last section's ID
        smooth={true}
        duration={3000} // Adjust duration for a slow scroll
      >
        <Button type="primary" size="large" style={{ padding: '0.5rem 2rem' }}>
          Scroll to See More
        </Button>
      </Link>
    </div>
  );
}

export default HeroSection;
