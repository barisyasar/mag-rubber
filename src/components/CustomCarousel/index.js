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
    name: 'SPHERICAL ROLLER BEARINGS ',
    image: '1.svg',
  },
  {
    id: 2,
    name: 'PULLEYS    ',
    image: 'customCarousel2.jpeg',
  },
  {
    id: 3,
    name: 'PRE-CLEANER GROUP ASSEMBLIES    ',
    image: 'customCarousel3.jpeg',
  },
  {
    id: 4,
    name: 'OPERATOR SEATS     ',
    image: 'customCarousel4.jpeg',
  },
  {
    id: 5,
    name: 'SEALS',
    image: 'customCarousel5.jpeg',
  },
  {
    id: 6,
    name: 'DAMPER',
    image: 'customCarousel6.jpeg',
  },
  {
    id: 7,
    name: 'MOUNTS     ',
    image: 'customCarousel7.jpeg',
  },
  {
    id: 8,
    name: 'FUEL CAPS    ',
    image: 'customCarousel8.jpeg',
  },
  {
    id: 9,
    name: 'PIN SEALS    ',
    image: 'customCarousel9.jpeg',
  },
  {
    id: 10,
    name: 'VIBRATION MOUNTS',
    image: 'customCarousel10.jpeg',
  },
  {
    id: 11,
    name: 'MOTOR GRADERS INSERTS    ',
    image: 'customCarousel11.jpeg',
  },
  {
    id: 12,
    name: 'ENGINE GASKETS    ',
    image: 'customCarousel12.jpeg',
  },
  {
    id: 13,
    name: 'BUSHINGS    ',
    image: 'customCarousel13.jpeg',
  },
  {
    id: 14,
    name: 'KITS    ',
    image: 'customCarousel14.jpeg',
  },
  {
    id: 15,
    name: 'PUMPS    ',
    image: 'customCarousel15.jpeg',
  },
  {
    id: 16,
    name: 'FANS    ',
    image: 'customCarousel16.jpeg',
  },
];

function CustomCarousel() {
  const items2 = carouselItems.map((item) => (
    <div
      className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
      data-bs-interval={10000}
    >
      {/* img tagi src '/sadfasdf.svg' */}
      <a
        alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
        href="prodotti\monoblocchi-cetop.html"
      >
        <div className="icon">
          <img src="/assets/images/1.svg"/>
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
            <div
              id="home-categories-carousel"
              className="categories-carousel owl-carousel owl-theme filterable-items"
            >
              {items2}
            </div>
           <div className='owl-button-next'>
           <div>
			<span class="m_scroll_arrows next-one"></span>
			<span class="m_scroll_arrows next-two"></span>
			<span class="m_scroll_arrows next-three"></span>
		 </div>
           </div>
         </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CustomCarousel;
