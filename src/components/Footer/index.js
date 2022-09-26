import React from 'react';
import '../../assets/css/components/Footer/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="mx-5 ">
        <div className="text-end mb-5 text-white">
          <a href="#carouselExampleCaptions">Back To Top</a>
        </div>
        <div className="row list">
          <div className="col-2 px-5">
            {' '}
            <p className="page-title">Models</p>
            <ul>
              <li>
                <a href="x">valves</a>
              </li>
            </ul>
          </div>
          <div className="col-2 mx-4 px-5">
            {' '}
            <p className="page-title">PRODUCTS</p>
            <ul>
              <li>
                <a href="x">valves</a>
              </li>
              <li>
                <a href="x">vibration-couplings</a>
              </li>
              <li>
                <a href="x">couplings</a>
              </li>
              <li>
                <a href="x">vibration-couplings</a>
              </li>
              <li>
                <a href="x">couplings</a>
              </li>
            </ul>
          </div>
          <div className="col-2 mx-4 px-5">
            {' '}
            <p className="page-title">MAG</p>
            <ul>
              <li>
                <a href="x">valves</a>
              </li>
              <li>
                <a href="x">vibration-couplings</a>
              </li>
              <li>
                <a href="x">couplings</a>
              </li>
              <li>
                <a href="x">vibration-couplings</a>
              </li>
              <li>
                <a href="x">couplings</a>
              </li>
              <li>
                <a href="x">vibration-couplings</a>
              </li>
              <li>
                <a href="x">couplings</a>
              </li>
            </ul>
          </div>
          <div className="col-2 mx-4 px-5">
            {' '}
            <p className="page-title">PRODUCTS</p>
            <ul>
              <li>
                <a href="x">valves</a>
              </li>
              <li>
                <a href="x">vibration-couplings</a>
              </li>
              <li>
                <a href="x">couplings</a>
              </li>
              <li>
                <a href="x">vibration-couplings</a>
              </li>
              <li>
                <a href="x">couplings</a>
              </li>
            </ul>
          </div>
          <div
            className="col-2 mx-4 px-5 d-flex flex-column justify-content-around"
            style={{ height: '45vh' }}
          >
            <img
              src="/assets/images/magstore-shine.gif"
              alt="mag-shine"
              className="align-self-center"
              width="75%"
            />
            <div className="d-flex justify-content-center align-items-center icons ">
              <img
                src="/assets/images/facebook.png"
                alt="facebook"
                width="45"
              />
              <img
                src="/assets/images/instagram.png"
                alt="instagram"
                width="45"
              />
              <img
                src="/assets/images/linkedin.png"
                alt="linkedin"
                width="45"
              />
            </div>
          </div>
        </div>
        <div className="divider mb-2"></div>
        <i>
          <h6 className="copy-rights">
            &copy; 2022 All rights reserved. This website made with{' '}
            <a href="https://osireklamajansi.com/">OSİ Crew</a>.
          </h6>
        </i>
      </div>
    </footer>
  );
}
