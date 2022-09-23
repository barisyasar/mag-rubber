import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import '../../assets/css/components/CustomCarousel/style.css';

const carouselItems = [
  {
    id: 1,
    name: 'SPHERICAL ROLLER BEARINGS',
    image: '1.svg',
  },
  {
    id: 2,
    name: 'PULLEYS',
    image: '2.svg',
  },
  {
    id: 3,
    name: 'PRE-CLEANER GROUP ASSEMBLIES',
    image: '3.svg',
  },
  {
    id: 4,
    name: 'OPERATOR SEATS',
    image: '4.svg',
  },
  {
    id: 5,
    name: 'SEALS',
    image: '5.svg',
  },
  {
    id: 6,
    name: 'DAMPER',
    image: '6.svg',
  },
  {
    id: 7,
    name: 'MOUNTS',
    image: '7.svg',
  },
  {
    id: 8,
    name: 'FUEL CAPS',
    image: '8.svg',
  },
  {
    id: 9,
    name: 'PIN SEALS',
    image: '9.svg',
  },
  {
    id: 10,
    name: 'VIBRATION MOUNTS',
    image: '10.svg',
  },
  {
    id: 11,
    name: 'MOTOR GRADERS INSERTS',
    image: '11.svg',
  },
  {
    id: 12,
    name: 'ENGINE GASKETS',
    image: '12.svg',
  },
  {
    id: 13,
    name: 'BUSHINGS',
    image: '13.svg',
  },
  {
    id: 14,
    name: 'KITS',
    image: '14.svg',
  },
  {
    id: 15,
    name: 'PUMPS',
    image: '15.svg',
  },
  {
    id: 16,
    name: 'FANS',
    image: '16.svg',
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
          <img src={`/assets/images/${item.image}`} alt={item.image} />
        </div>

        <div className="item-position-container position-relative">
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
    <div id="custom-carousel" className="custom-carousel-wrapper">
      <img src="/assets/images/mag-rubber.gif" alt="mag-rubber-gif" />
      <div className="custom-carousel text-center">
        <h2 className="section-header">Product Range</h2>
        <h6 className="section-header-sub">
          the best solution for heavy machines
        </h6>
        <br />
        <br />
        <div className="content_page overflow-hidden index_content">
          <section id="home_categories">
            <div
              id="home-categories-carousel"
              className="categories-carousel owl-carousel owl-theme filterable-items"
            >
              {items2}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CustomCarousel;
