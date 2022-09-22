import React from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import CustomCarousel from "../components/CustomCarousel";
import About from "../components/About";
import CardList from "../components/CardList";
import PopOut from "../components/PopOut";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <CustomCarousel />
      <About />
      <CardList /> 
      <PopOut/>
    </Layout>
  );
}
