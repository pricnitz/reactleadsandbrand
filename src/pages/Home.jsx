import React from 'react'
import Hero from '../components/homecomponents/Hero'
import Whatwedo from '../components/homecomponents/Whatwedo'
import Allservices from '../components/homecomponents/Allservices';
import Coreteam from '../components/homecomponents/Coreteam';
import Successstory from '../components/homecomponents/Successstory';
import History from '../components/homecomponents/History';
import Testimonial from '../components/homecomponents/Testimonial';
import { Whatwedodata, Allservicesdata , successStoriesdata , teamMembersdata , historyData , testimonialsdata } from '../../data';
import successtoryimg from '../assets/banners/1.jpeg'


function Home() {
  return (
    <div className='w-full'>
      <Hero />
      <Whatwedo data={Whatwedodata} />
      <Allservices data={Allservicesdata} />
      <div className="bg-cover bg-top h-auto w-full" style={{ backgroundImage: `url(${successtoryimg})` }}>
        <Successstory data={successStoriesdata} />
      </div>
      <Coreteam data={teamMembersdata} />
      <History data={historyData} />
      <Testimonial data={testimonialsdata} />
    </div>
  )
}

export default Home