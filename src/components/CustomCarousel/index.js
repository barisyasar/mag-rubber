import React from "react";

import "react-multi-carousel/lib/styles.css";
import "../../assets/css/components/customCarousel.css";

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
                   <p>Product Range</p>
                 
                </div>
              </div>
            </div>
            <div
              id="home-categories-carousel"
              className="categories-carousel owl-carousel owl-theme filterable-items"
            >
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel1.jpeg" />
                  </div>

                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici SPHERICAL ROLLER BEARINGS FOR ALL HEAVY MACHINERY
"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel2.jpeg" />
                  </div>

                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel3.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel4.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel5.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel6.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel7.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel8.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel9.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel10.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel11.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel12.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel13.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel14.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
              <div
                className="category-carousel-item owl-carousel-item filterable-item oleodinamica_2mp"
                data-bs-interval={10000}
              >
                <a
                  alt="Visualizza prodotti oleodinamici MONOBLOCCHI CETOP"
                  href="prodotti\monoblocchi-cetop.html"
                >
                  <div className="icon">
                    <img src="/assets/images/customCarousel15.jpeg" />
                  </div>

                  <div className="d-flex flex-column align-items-center upper-name red_shape"></div>
                  <div className="item-position-container mt-3 mb-3 position-relative">
                    <div className="item-position">
                      <svg viewBox="210 300 80 80">
                        <polygon
                          points="250,60 100,400 400,400"
                          class="triangle"
                        />
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
                    <span className="text">MONOBLOCCHI CETOP</span>
                  </h4>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CustomCarousel;
