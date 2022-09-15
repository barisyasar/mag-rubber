import React from 'react';
import "./slider.css";


export default function Slider() {
   
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators mag-rubber-carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active rounded-circle  circle-button"  aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="rounded-circle circle-button" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="rounded-circle circle-button "  aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="rounded-circle  circle-button "  aria-label="Slide 4"></button>
    <p className='slide-text'>SCROLL DOWN </p>
    <div className="mouse_scroll">
    <div class="mouse">
			<div class="wheel"></div>
		</div>
    <div>
        <a href="#to">
        <span class="m_scroll_arrows one"></span>
			<span class="m_scroll_arrows two"></span>
			<span class="m_scroll_arrows three"></span>
        </a>
			
		</div>
        </div>
       
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/assets/images/slider1.jpg" className="d-block w-100" alt="..."/>
      <div className="  carousel-caption d-none d-md-block">
        <h1 className='title'>“Experience Leads <br></br>
To Excellence”</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/slider2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='title'>“Experience Leads <br></br>
To Excellence”</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/slider3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='title'>“Experience Leads <br></br>
To Excellence”</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/assets/images/slider4.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='title'>“Experience Leads <br></br>
To Excellence”</h1>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon  mag-rubber-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon mag-rubber-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='to' id='to'>
  
</div>
    </div>
    
  )
  
}


