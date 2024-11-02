import React from 'react';
import { Carousel } from 'antd';
import video1 from '../assets/';
import video2 from './assets/videos/video2.mp4';
import video3 from './assets/videos/video3.mp4';


const videos = [/* Array of video URLs */];

function VideoMontage() {
  return (
    <div style={{ padding: '2rem 0', backgroundColor: 'var(--background-color)', borderRadius: '10px', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--primary-color)' }}>Video Montage</h2>
      <Carousel autoplay>
        {videos.map((video, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <video controls src={video} style={{ width: '80%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default VideoMontage;
