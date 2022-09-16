import React from "react";
import Layout from "../components/Layout";

import Slider from "../components/Slider";
import CustomCarousel from "../components/CustomCarousel";
import CustomText from "../components/CustomText";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <CustomCarousel />
      <CustomText />
    </Layout>
  );
}
