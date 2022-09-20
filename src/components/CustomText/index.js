import React from "react";
import "../../assets/css/components/customText.css";

export default function CustomText() {


  return (
    
    <section className="services-section">
      <div className="faded-text light">
        <div className="f-text">
       <marquee id="my-text" className="marquee " scrollamount="8" behavior= "alternate"> Time to Discover</marquee>
        </div>
      </div>
       <div className="auto-container">
        <div className="sec-title light">
          <div className="sub-title">
            <h2>Mag Rubber</h2>
          </div>
        </div>
      </div>  
     
    </section>
  );
}

