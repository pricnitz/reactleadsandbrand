import React from 'react'
import Marquee from "react-fast-marquee";

function Header({ title }) {
  return (
    <div className='bg-secondary w-full '>
      <Marquee className='max-w-4xl mx-auto'>
        <h1 className='p-1'>{title}</h1>
      </Marquee>
    </div>
  )
}

export default Header