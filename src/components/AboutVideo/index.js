import React from 'react'
import video from '../../assets/css/video/aboutVideo.mp4'; 
import '../../assets/css/components/AboutVideo/style.css';



export default function AboutVideo
() {
  return (
    <div className='about-video-section '>
 <video  autoPlay={true} loop muted >
     <source src={video} type='video/mp4' />
    
    </video>
   </div>
  )
}
