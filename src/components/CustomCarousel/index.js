import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CustomCarousel() {
  return (
    <div>
      <Carousel responsive={responsive} draggable={false}  centerMode={false}>
        <div>
          <img src="/assets/images/customCarousel1.jpeg"/>
        </div>
        <div>
          <img src="/assets/images/customCarousel2.jpeg"/>
        </div>
        <div>
          <img src="/assets/images/customCarousel3.jpeg"/>
        </div>
        <div>
          <img src="/assets/images/customCarousel4.jpeg"/>
        </div>
        <div>
          <img src="/assets/images/customCarousel5.jpeg"/>
        </div>
        <div>
          <img src="/assets/images/customCarousel6.jpeg"/>
        </div>
        <div>
          <img src="/assets/images/customCarousel7.jpeg"/>
        </div>
        <div>
          <img src="/assets/images/customCarousel8.jpeg"/>
        </div>
        <div>
          <img src="/assets/images/customCarousel9.jpeg"/>
        </div>
        <div>
          <img src="/assets/images/customCarousel10.jpeg"/>
        </div>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
