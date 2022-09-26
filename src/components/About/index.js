import React from 'react';
import '../../assets/css/components/About/style.css';
import PopOut from '../PopOut/index';
import { BsCaretRightFill } from 'react-icons/bs';

export default function About() {
  return (
    <section className="container-fluid about-us">
      <div className="row about-text-section">
        <div className="col-5 about-left-section">
          <div className="about-us-header">
            <img src="assets/images/mag-triangle-down.png"></img>

            <h1 className="section-header-sub">Who We Are?</h1>
          </div>

          <p className="about-text">
            Our Company Gökçek A.Ş which was established in 1968, has become a
            well known brand in Turkey with the basic principle of achieving
            quality in production, marketing and punctual and exact delivery of
            industrial rubber products…
          </p>
          <div className="read-more">
            <a href="/" className="section-header-sub">
              <div className="triangle-button">
                <BsCaretRightFill href="/" />
              </div>
              <p>Read More</p>
            </a>
          </div>
        </div>
        <div className="col-7 about-right-section">
          {' '}
          <PopOut />
        </div>
      </div>
    </section>
  );
}
