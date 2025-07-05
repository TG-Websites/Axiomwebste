// ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "technology",
      description: "We're obsessed with technology and what goes on in the tech world. This helps us better understand our clients' products, businesses, and target markets."
    },
    {
      title: "litigation",
      description: "We are as comfortable in courtrooms as we are in corporate boardrooms. We prefer win-win solutions over bitter battles, but are always prepared to defend our position."
    },
    {
      title: "policy",
      description: "Our experience in competition law, litigation, economics, and our love of technology helps us foresee policy developments and make meaningful contributions to competition policy."
    }
  ];

  return (
    <section id="what-we-do" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">WHAT WE DO</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-4 capitalize">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;