import React from 'react';

const MissionSection = () => {
  return (
    <section className="h-fit bg-white text-black py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        {/* Section Title */}
        <h1 className="text-4xl sm:text-4xl font-bold text-center mb-10 text-[#1a1a1a]">
           <span className='text-euclid'>Our</span> Mission
           <div className="w-16 h-0.5 bg-euclid mx-auto mt-3"></div>
        </h1>
        

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug mb-6 sm:mb-8">
          Axiom5 is a boutique law practice that provides the full range of<br className="hidden sm:block" />
          legal representation and thought leadership on competition law<br className="hidden sm:block" />
          and policy issues in India
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8 sm:mb-10">
          We believe it is vital to examine antitrust issues as part of a broader regulatory paradigm that includes
          issues of governance, market dynamics, and economic policy. We provide holistic, thoughtful, and strategically
          valuable competition law advice, always with the aim to find solutions that help our clients navigate the
          evolving Indian competition law landscape.
        </p>

        {/* Button */}
        <div className="text-start">
          <button className="bg-[#d2a679] text-white rounded-md font-semibold px-4 sm:px-5 py-2.5 sm:py-3 hover:opacity-90 transition">
            WHO WE ARE
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
