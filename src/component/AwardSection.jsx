// AwardsSection.jsx
import React from 'react';
import asialaw from '../assets/asialaw.png';
import benchmark from '../assets/benchmark-litigation.png';
import gcr from '../assets/gcr-logo.png';
import wwl from '../assets/WWL.png';
import asia from '../assets/asia.png'
import global from '../assets/global.png'
import rsg from '../assets/rsg.png'

const logos = [
    asialaw,
    benchmark,
    wwl,
    asia,
    rsg,
    global,
    gcr,
];

const AwardsSection = () => {
    return (
        <section className="navy-bg py-8">
             <h1 className="text-4xl sm:text-4xl font-bold text-center mb-10 text-white">
                Achievements
           <div className="w-16 h-0.5 bg-euclid mx-auto mt-3"></div>
        </h1>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`logo-${index}`}
                            className="h-16 w-35 object-contain grayscale hover:grayscale-0 transition"
                        />

                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
