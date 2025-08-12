import React from 'react'
import herovideo from '../../assets/banners/v-main.mp4'

function Hero() {
  return (
    <div className=''>
      <video src={herovideo} autoPlay loop muted className='w-full h-[770px] object-cover'>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Hero