import React from 'react';
import { Timeline } from 'antd';

const events = [
  { date: "2023-02-14", description: "First date" },
  { date: "2023-04-20", description: "Weekend getaway" },
  { date: "2023-07-30", description: "Celebrated her birthday" },
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
