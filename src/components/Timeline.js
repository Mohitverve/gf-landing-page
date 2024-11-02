import React from 'react';
import { Timeline } from 'antd';

const events = [
  { date: "2024-01-23", description: "Our Beginning" },
  { date: "2024-03-06", description: "Your Birthday" },
  { date: "2024-07-23", description: "Celebrated 6 Months of our relationship" },
];

function TimelineSection() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'var(--secondary-color)', color: 'white' }}>
      <h2>Our Journey</h2>
      <Timeline>
        {events.map((event, index) => (
          <Timeline.Item key={index}>
            <strong>{event.date}</strong> - {event.description}
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

export default TimelineSection;
