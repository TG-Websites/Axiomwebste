import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-12 px-4 sm:py-16 bg-white/10 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/30 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 leading-snug">
            To keep up with the latest in competition law and policy, subscribe to our newsletter
          </h2>
          <button className="bg-euclid text-white font-medium py-3 px-6 w-full sm:w-auto rounded-md transition-colors">
            CLICK HERE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
