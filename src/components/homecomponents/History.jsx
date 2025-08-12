import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function History({ data }) {
    return (
        <div className="w-full mx-auto bg-primary">
            <Swiper>
                {/* First Slide */}
                <SwiperSlide>
                    <div className="relative h-[650px] bg-black">
                        {/* Background Image */}
                        <img
                            src={data[0].img}
                            alt={data[0].title}
                            className="absolute inset-0 w-full h-full object-cover z-9 "
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        {/* Content */}
                        <div className="relative z-10 mx-auto w-full max-w-6xl h-full grid md:grid-cols-2 grid-cols-1 px-4 py-10 md:py-20 items-center">
                            <div>
                                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-raleway py-5">
                                    {data[0].title}
                                </h3>
                                {data[0].paragraphs.map((para, index) => (
                                    <p key={index} className="text-para pt-4">{para}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Second Slide */}
                <SwiperSlide>
                    <div className="relative h-[650px] bg-black">
                        <img
                            src={data[1].img}
                            alt={data[1].title}
                            className="absolute inset-0 w-full h-full object-cover z-9 "
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        <div className="relative z-10 mx-auto w-full max-w-6xl h-full grid md:grid-cols-2 grid-cols-1 px-4 py-10 md:py-20 items-center">
                            <div></div>
                            <div>
                                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-raleway py-5">
                                    {data[1].title}
                                </h3>
                                {data[1].paragraphs.map((para, index) => (
                                    <p key={index} className="text-para pt-4">{para}</p>
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
