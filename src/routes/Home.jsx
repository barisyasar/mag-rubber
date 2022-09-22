import React from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import CustomCarousel from "../components/CustomCarousel";
import About from "../components/About";
import CardList from "../components/CardList";
import PopOut from "../components/PopOut";
import ImageAnimation from "../components/ImageAnimation";
import ContinuousImprovement from "../components/ContinuousImprovement";
import History from "../components/History";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <CustomCarousel />
      <About />
      <PopOut />
      <CardList />
      <History />
      <ImageAnimation />
      <ContinuousImprovement />
    </Layout>
  );
}
