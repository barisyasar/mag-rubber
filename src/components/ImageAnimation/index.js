import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "../../assets/css/components/ImageAnimation/style.css"


export default function ImageAnimation() {
  // ..
AOS.init();
  return (
    <div className='container animation-container'> 
    <div className='row'>
    <div className='col'>
      <div className='fade-right'
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
      data-aos-anchor-placement="top-center">
      <img className='image-right'  src='/assets/images/about-01.png'/>
      </div>
   
   
   <div 
   className='fade-left'
   data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
      data-aos-anchor-placement="top-center">
      <img className='image-left' src='/assets/images/about-01.png'/>
    </div>
   </div>
   <div className='col'> <p>  Our Company Gökçek A.Ş which was established in 1968, has become a
              well known brand in Turkey with the basic principle of achieving
              quality in production, marketing and punctual and exact delivery
              of industrial rubber products…</p></div>
    </div>      
  
    
</div>
  )
}
