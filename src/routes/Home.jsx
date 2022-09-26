import React from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import CustomCarousel from '../components/CustomCarousel';
import About from '../components/About';
import CardList from '../components/CardList';
import ImageAnimation from '../components/ImageAnimation';
import ContinuousImprovement from '../components/ContinuousImprovement';
import History from '../components/History';
import AbleToDo from '../components/AbleToDo';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <CustomCarousel />
      <About />
      <CardList />
      <History />
      <ImageAnimation />
      <ContinuousImprovement />
      <AbleToDo />
    </Layout>
  );
}
