import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
function Successstory({ data }) {
    const [activeTab, setActiveTab] = useState(data[0].id); // default to first item

    return (
        <div>
            <div className="max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-raleway font-bold text-center">
                    Success Stories
                </h2>

                {/* Content */}
                <div className="grid gap-4  pt-10 md:py-20">
                    {data.map(
                        (story) =>
                            activeTab === story.id && (
                                <div key={story.id} className="grid md:grid-cols-2 gap-8 items-start justify-center align-middle">
                                    {/* Left Column */}
                                    <div>
                                        <h3 className="text-sm md:text-xl font-semibold">{story.title}</h3>
                                        <p className="text-sm text-gray-300">{story.subtitle}</p>
                                        <div className="space-y-4 mt-4">
                                            {story.description.map((para, idx) => (
                                                <p key={idx} className="text-gray-400">
                                                    {para}
                                                </p>
                                            ))}
                                        </div>

                                        {story.link?.url && (
                                            <a
                                                href={story.link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 underline mt-4 inline-block"
                                            >
                                                {story.link.text}
                                            </a>
                                        )}
                                    </div>

                                    {/* Right Column - Metrics */}
                                    <div className="space-y-4">
                                        {story.metrics.map((metric, idx) => (
                                            <div
                                                key={idx}
                                                className="flex justify-between items-center border-b border-gray-700 pb-2 px-2"
                                            >
                                                <span className='md:w-50 w-30 md:text-2xl text-md'>{metric.label}</span>
                                                <div className="grid grid-cols-4 gap-2">
                                                    <span className='min-w-15'>{metric.from}</span>
                                                    <span className='min-w-10 text-red-600'> <FaArrowRight /> </span>
                                                    <span className='min-w-15'>{metric.to}</span>
                                                    <span
                                                        className={
                                                            metric.change.startsWith('-')
                                                                ? 'text-red-400'
                                                                : 'text-green-400'
                                                        }
                                                    >
                                                        {metric.change}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                    )}
                </div>


                <div className="max-w-4xl mt-4 mx-auto grid md:grid-cols-4 grid-cols-2 gap-1 ">
                    {data.map((story) => (
                        <button
                            key={story.id}
                            onClick={() => setActiveTab(story.id)}
                            className={` rounded-lg hover:grayscale-0 transition delay-300 cursor-pointer ${activeTab === story.id ? 'grayscale-0' : 'grayscale '
                                }`}
                        >
                            <img
                                src={story.logo}
                                alt={story.title}
                                className="w-full object-contain"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Successstory;
