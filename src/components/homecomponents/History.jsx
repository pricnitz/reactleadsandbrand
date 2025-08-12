import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function History({ data }) {
    return (
        <div className="w-full mx-auto bg-primary">
            <Swiper className="h-[550px]"> {/* Fixed height */}
                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${data[0].img})` }}
                    >
                        <div className='mx-auto left-0 top-0 w-full max-w-6xl h-full justify-between items-center grid md:grid-cols-2 grid-cols-1 px-4 py-10 md:py-20'>
                            <div>
                                <h3 className='text-white text-2xl md:text-3xl lg:text-4xl font-raleway py-5'>
                                    {data[0].title}
                                </h3>
                                {data[0].paragraphs.map((para, index) => (
                                    <p key={index} className='text-para pt-4'>{para}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${data[1].img})` }}
                    >
                        <div className='mx-auto left-0 top-0 w-full max-w-6xl h-full justify-between items-center grid md:grid-cols-2 grid-cols-1 px-4 py-10 md:py-20'>
                            <div></div>
                            <div>
                                <h3 className='text-white text-2xl md:text-3xl lg:text-4xl font-raleway py-5'>
                                    {data[1].title}
                                </h3>
                                {data[1].paragraphs.map((para, index) => (
                                    <p key={index} className='text-para pt-4'>{para}</p>
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
