import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function History({ data }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="w-full mx-auto bg-primary relative">
            {/* Custom Navigation Arrows */}



            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                onInit={(swiper) => {
                    // Bind custom buttons
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="mySwiper"
            >
                {/* First Slide */}
                <SwiperSlide>
                    <div className="relative md:h-[650px] h-[720px] bg-black">
                        <img src={data[0].img} alt={data[0].title} className="absolute inset-0 w-full h-full object-cover z-9" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        <div className="relative z-10 mx-auto w-full max-w-6xl h-full flex md:grid md:grid-cols-2 flex-col px-4 py-10 md:py-20 items-center justify-between">
                            <div>
                                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-raleway py-5">
                                    {data[0].title}
                                </h3>
                                {data[0].paragraphs.map((para, index) => (
                                    <p key={index} className="text-para pt-4">
                                        {para}
                                    </p>
                                ))}
                            </div>
                            <div className='flex justify-self-end'>
                                <button
                                    ref={nextRef}
                                    className="text-red-600 p-3 flex items-center justify-center gap-2  md:text-2xl text-xl font-raleway font-bold hover: group  cursor-pointer"
                                >
                                    <span className='text-gray-400 group-hover:text-white'>Now</span><FaArrowRight size={50} />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Second Slide */}
                <SwiperSlide >
                    <div className="relative md:h-[650px] h-[720px] bg-black">
                        <img
                            src={data[1].img}
                            alt={data[1].title}
                            className="absolute inset-0 w-full h-full object-cover z-9"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        <div className="relative z-10 mx-auto w-full max-w-6xl h-full flex md:grid md:grid-cols-2 flex-col-reverse px-4 py-10 md:py-20 items-center justify-between">
                            <div>
                                <button
                                    ref={prevRef}
                                    className="text-red-600 p-3 flex items-center justify-center gap-2  md:text-2xl text-xl font-raleway font-bold leading-none hover: group cursor-pointer"
                                >
                                    <FaArrowLeft size={50} />
                                    <span className="text-gray-400 group-hover:text-white">2003</span>
                                </button>
                            </div>
                            <div>
                                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-raleway py-5">
                                    {data[1].title}
                                </h3>
                                {data[1].paragraphs.map((para, index) => (
                                    <p key={index} className="text-para pt-4">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default History;
