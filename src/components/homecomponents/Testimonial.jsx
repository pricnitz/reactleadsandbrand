import React from 'react';
import googlereviiew from '../../assets/svg/grating5star.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";

function Testimonial({ data }) {
  return (
    <div className='w-full mx-auto bg-primary'>
      <div className='max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4'>
        <h2 className='text-white text-3xl md:text-4xl font-raleway mb-6 text-center flex items-center justify-center gap-3'>
          Testimonials 
          <img className='h-12' src={googlereviiew} alt="Google Reviews" />
        </h2>

        <Swiper
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide className='flex flex-col items-center justify-center' key={index}>
              <div className="py-10 text-center flex flex-col items-center justify-center">
                <p className="text-para text-lg md:text-xl italic max-w-3xl mx-auto">
                  {item.text}
                </p>

                {item.stars && (
                  <div className="flex justify-center mt-4">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <span key={i} className=" text-yellow-400" aria-hidden="true">
                        <FaStar />
                      </span>
                    ))}
                  </div>
                )}

                <h6 className="text-white text-lg font-semibold mt-4">{item.name}</h6>
                {item.company && (
                  <p className="text-sm text-gray-300">{item.company}</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
