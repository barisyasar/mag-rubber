import React from "react";
import "../../assets/css/components/TriangleSlider/triangleSlider.css";
import Carousel from "react-multi-carousel";

export default function ContinuousImprovement() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="continuous-improvement">
      <h2 className="heading text-center">Continuous Improvement</h2>
      <img
        src="/assets/images/time-to-discover-mag-rubber.jpg"
        alt="time-to-discover-mag-rubber"
        className="time-to-discover-mag-rubber"
      />
    </section>
  );
}
