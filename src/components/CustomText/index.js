import React from "react";
import "../../assets/css/components/customText.css";

export default function CustomText() {


  return (
    
    <section className="services-section">
      <div className="faded-text light">
        <div className="f-text">
       <marquee id="my-text" className="marquee " scrollamount="15" behavior= "alternate"> Time to Discover Mag Rubber</marquee>
        </div>
      </div>
     {/*  <div className="auto-container">
        <div className="sec-title light">
          <div className="sub-title">
            <h2>Rubber</h2>
          </div>
        </div>
      </div> */}
     
    </section>
  );
}

