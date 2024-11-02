import React from 'react';
import { Layout } from 'antd';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import VideoMontage from './components/VideoMontage';
import AppreciationNotes from './components/AppreciationNotes';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      
      <Content style={{ padding: '2rem 10%' }}>
        <HeroSection />
        <PhotoGallery />
        <VideoMontage />
        <AppreciationNotes />
        <Timeline />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
