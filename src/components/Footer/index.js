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
              <svg viewBox="0 0 32 32" width="24px" height="24px">
                <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
              </svg>
              <svg viewBox="0 0 32 32" width="24px" height="24px">
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
              </svg>

              <svg viewBox="0 0 32 32" width="20px" height="20px">
                <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z" />
              </svg>
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
