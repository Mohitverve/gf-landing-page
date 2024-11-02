import React from 'react';
import { Row, Col, Card } from 'antd';
import photo1 from '../assets/k3.jpg';
import photo2 from '../assets/WhatsApp Image 2024-11-02 at 22.48.25_8064f317.jpg';
import photo3 from '../assets/k0.jpg';

const photos = [photo1, photo2, photo3];

function PhotoGallery() {
  return (
    <div style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--primary-color)' }}>Photo Gallery</h2>
      <Row gutter={[24, 24]}>
        {photos.map((photo, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={<img alt="Her moments" src={photo} style={{ borderRadius: '8px' }} />}
              style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <Card.Meta description="A beautiful memory" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PhotoGallery;
