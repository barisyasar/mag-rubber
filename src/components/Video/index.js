import React from 'react'
import video from '../../assets/css/video/video.mp4'; 
import "../../assets/css/components/Video/style.css";



export default function Video
() {
  return (
    <div className='video-section container-fluid'>
 <video  autoPlay={true} loop muted >
     <source src={video} type='video/mp4' />
    
    </video>
   </div>
  )
}
