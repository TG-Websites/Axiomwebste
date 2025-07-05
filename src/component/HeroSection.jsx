import React from 'react';
import icon_1 from '../assets/icon_1.png';
import lawyer from '../assets/lawyer.jpg';

export default function HeroSection() {
    return (
        <div className="min-h-screen mt-5  px-4 sm:px-6 lg:px-8 navy-bg flex items-center py-12 sm:py-0">
            <div className="container sm:mx-20">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
                        <div className="relative w-full">
                            {/* Black box overlay */}
                            <div className="absolute inset-y-0 left-0 w-1/2 bg-black/30 rounded-lg z-0"></div>

                            {/* Text content */}
                            <div className="relative px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
                                    Clients First.
                                </h1>
                                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-euclid leading-tight">
                                    Quality Always.
                                </h2>
                            </div>
                        </div>

                        <div className="text-gray-300 space-y-2 sm:space-y-4">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-white leading-snug">
                                "The whole is greater than the part."
                            </h2>
                            <p className="text-sm sm:text-base text-euclid">— Euclid's 5th Axiom</p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                            <button className="bg-euclid  text-black font-semibold px-6 py-3 sm:px-5 sm:py-3 rounded-full transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto text-center">
                                CONTACT US
                            </button>

                            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                <img src={icon_1} alt="" className="w-8 sm:w-10" />
                                <div>
                                    <div className="text-euclid text-xl sm:text-2xl font-bold">7900</div>
                                    <div className="text-gray-300 text-xs sm:text-sm">Successful Cases</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0  sm:px-0">
                        <div className="absolute -left-3 sm:-left-6 -bottom-2 sm:-bottom-4 w-full h-full bg-black/30 rounded-xl z-0"></div>
                        <img
                            src={lawyer}
                            alt="Lawyer in court"
                            className="relative z-10 rounded-xl w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
