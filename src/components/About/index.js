import React from "react";
import "../../assets/css/components/about.css";

export default function About() {
  return (
    <section className="container-fluid about-section">
      <div className="row">
        <div className="col-5">
          <div className="about-img">
            <img className="width-80" src="/assets/images/about-01.png" />
          </div>
        </div>
        <div className="col-1">
          {" "}
          <div className="about-img">
            <img
              className="large-img"
              src="/assets/images/mag-triangle-right.png"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="about-text">
            <p>
              Our Company Gökçek A.Ş which was established in 1968, has become a
              well known brand in Turkey with the basic principle of achieving
              quality in production, marketing and punctual and exact delivery
              of industrial rubber products…
            </p>
          </div>
          <div className="about-button">
            <button type="button" class="btn btn-outline">
              Learn More
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
