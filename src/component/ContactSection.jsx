import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, User, Linkedin } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div className="navy-bg min-h-fit py-15">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-4xl font-bold text-center mb-10 text-white">
                    <span className='text-euclid'>Contact</span> Us
                    <div className="w-16 h-0.5 bg-euclid mx-auto mt-3"></div>
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Contact Cards */}
                    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Phone, title: "Call Us" },
                            { icon: MapPin, title: "Our Location" },
                            { icon: Mail, title: "Email Us" },
                            { icon: Clock, title: "Working Hours" },
                            { icon: Linkedin, title: "Linked In" },
                            { icon: User, title: "Be Our Lawyer" },
                        ].map(({ icon: Icon, title }, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-2xl cursor-pointer p-8 text-center hover:bg-white/20 transition-all duration-300 shadow-md border border-white/20"
                            >
                                <Icon className="w-8 h-8 text-euclid mx-auto mb-4" />
                                <h3 className="text-white text-lg font-semibold">{title}</h3>
                            </div>
                        ))}
                    </div>



                    {/* Right Side - Contact Form */}
                    <div className="bg-gray-800 rounded-xl mx-2 p-6 sm:p-8 border border-euclid">
                        <h2 className="text-euclid text-xl sm:text-2xl font-bold mb-6">Free Consultation</h2>
                        <div className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-euclid focus:ring-1 focus:ring-yellow-400"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-euclid focus:ring-1 focus:ring-yellow-400"
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Describe your case here ..."
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="6"
                                className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-euclid focus:ring-1 focus:ring-yellow-400 resize-none"
                            ></textarea>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="bg-euclid text-gray-900 font-semibold px-6 py-3 rounded-full transition"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}