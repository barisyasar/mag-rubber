import React from "react";
import "../../assets/css/components/About/style.css";


export default function About() {
  return (
    <section className="container-fluid about-section">
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div >
            <img className="left-image" src="/assets/images/about-01.png" />
          </div>
        </div>
      <div className="col-xl-8 col-md-4">
          <div className="about-text">
            <p>
              Our Company Gökçek A.Ş which was established in 1968, has become a
              well known brand in Turkey with the basic principle of achieving
              quality in production, marketing and punctual and exact delivery
              of industrial rubber products…
            </p>
          </div>
          <div className="primary-button">
            <button type="button" >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
