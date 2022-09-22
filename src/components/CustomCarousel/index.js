import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import '../../assets/css/components/CustomCarousel/style.css';

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

const carouselItems = [
  {
    id: 1,
    name: 'product 1',
    image: 'customCarousel1.jpeg',
  },
  {
    id: 2,
    name: 'product 2',
    image: 'customCarousel2.jpeg',
  },
  {
    id: 3,
    name: 'product 3',
    image: 'customCarousel3.jpeg',
  },
  {
    id: 4,
    name: 'product 4',
    image: 'customCarousel4.jpeg',
  },
  {
    id: 5,
    name: 'product 5',
    image: 'customCarousel5.jpeg',
  },
  {
    id: 6,
    name: 'product 6',
    image: 'customCarousel6.jpeg',
  },
  {
    id: 7,
    name: 'product 7',
    image: 'customCarousel7.jpeg',
  },
  {
    id: 8,
    name: 'product 8',
    image: 'customCarousel8.jpeg',
  },
  {
    id: 9,
    name: 'product 9',
    image: 'customCarousel9.jpeg',
  },
  {
    id: 10,
    name: 'product 10',
    image: 'customCarousel10.jpeg',
  },
  {
    id: 11,
    name: 'product 11',
    image: 'customCarousel11.jpeg',
  },
  {
    id: 12,
    name: 'product 12',
    image: 'customCarousel12.jpeg',
  },
  {
    id: 13,
    name: 'product 13',
    image: 'customCarousel13.jpeg',
  },
  {
    id: 14,
    name: 'product 14',
    image: 'customCarousel14.jpeg',
  },
  {
    id: 15,
    name: 'product 15',
    image: 'customCarousel15.jpeg',
  },
  {
    id: 16,
    name: 'product 16',
    image: 'customCarousel16.jpeg',
  },
];

function CustomCarousel() {
  const items2 = carouselItems.map((item) => (
    <div
      className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
      data-bs-interval={10000}
    >
      <a
        alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
        href="prodotti\monoblocchi-cetop.html"
      >
        <div className="icon">
          <img src={'/assets/images/' + item.image} />
        </div>

        <div className="item-position-container mt-3 mb-3 position-relative">
          <div className="item-position">
            <svg viewBox="210 300 80 80">
              <polygon points="250,60 100,400 400,400" class="triangle" />
            </svg>
          </div>
          <svg
            viewBox="0 0 100 1"
            className="item-line position-absolute top-0 bottom-0 m-auto"
          >
            <line x1={0} y1={0} x2={100} y2={0} stroke="black" />
          </svg>
        </div>
        <h4 className="item-lower-name mt-2 text-center">
          <span className="text">{item.name}</span>
        </h4>
      </a>
    </div>
  ));
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="content_page overflow-hidden index_content">
          <section id="home_categories">
            <div className="services-div">
              <div className="faded-text light">
                <div className="f-text">
                  <marquee
                    id="my-text"
                    className="marquee"
                    scrollamount="8"
                    behavior="alternate"
                  >
                    Time to Discover
                  </marquee>
                </div>
                <div className="product-triangle">
                  <img
                    className="triangle-img"
                    src="/assets/images/mag-triangle-down.png"
                  />
                  <h2 className="margin-60">Product Range</h2>
                </div>
              </div>
            </div>
            <div
              id="home-categories-carousel"
              className="categories-carousel owl-carousel owl-theme filterable-items"
            >
              {items2}
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CustomCarousel;
