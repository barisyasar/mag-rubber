import React from 'react';
import '../../assets/css/components/About/style.css';
import PopOut from '../PopOut/index';
import { BsCaretRightFill } from 'react-icons/bs';
import AboutVideo from '../AboutVideo';

export default function About() {
  return (
    <section className="about-us">
      <div className="container about-text-section">
        <div className="row" style={{ padding: '100px 0' }}>
          <div className="col-4 about-left-section">
            <div className="about-us-header">
              <img src="assets/images/mag-triangle-down.png"></img>

              <h1 className="section-header-sub">Who We Are?</h1>
            </div>

            <p className="about-text">
              Our Company Gökçek A.Ş which was established in 1968, has become a
              well known brand in Turkey with the basic principle of achieving
              quality in production, marketing and punctual and exact delivery
              of industrial rubber products…
            </p>
            <div className="read-more">
              <a href="/" className="section-header-sub">
                <div className="animation-button">
                  <button>
                    <BsCaretRightFill className="arrow1" />
                  </button>
                </div>
                <p>Read More</p>
              </a>
            </div>
            <PopOut />
          </div>
          <div className="col-8 about-right-section ">
            <div className="about-video ">
              <AboutVideo />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
