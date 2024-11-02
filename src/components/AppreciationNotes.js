import React from 'react';
import { Carousel, Typography } from 'antd';

const { Paragraph } = Typography;
const notes = ["You are amazing", "Thank you for being you", "You light up my world"];

function AppreciationNotes() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--primary-color)', backgroundColor: 'var(--white)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '2rem 0' }}>
      <h2>Appreciation Notes</h2>
      <Carousel autoplay>
        {notes.map((note, index) => (
          <div key={index}>
            <Paragraph style={{ fontSize: '1.2rem', margin: 0 }}>{note}</Paragraph>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default AppreciationNotes;
