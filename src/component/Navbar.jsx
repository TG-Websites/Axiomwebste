import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo_1 from '../assets/logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ['who we are', 'what we do', 'how we work', 'insights', 'opportunities'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-lg transition-all duration-300">
            <div className="mx-4 lg:mx-20 px-4 lg:px-6">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo - Left */}
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo_1} alt="Company Logo" className="h-6 sm:h-8 lg:h-10" />
                    </div>

                    {/* Desktop Navigation - Center */}
                    <div className="hidden lg:flex flex-1 justify-center items-center">
                        <div className="flex space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.replace(' ', '-')}`}
                                    className="relative text-sm font-medium uppercase tracking-wider transition-all duration-200 text-black text-hover-euclid group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Free Consultation Button - Right */}
                    <div className="hidden lg:flex items-center flex-shrink-0">
                        <button className="px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider cursor-pointer transition-all text-white bg-euclid hover:shadow-lg">
                            Free Consultation
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="py-6 space-y-4 bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-xl">
                        <div className="flex flex-col items-center space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.replace(' ', '-')}`}
                                    className="block px-6 py-2 text-gray-700 hover:text-purple-600 font-medium uppercase tracking-wider transition-colors text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="px-6 pt-4 flex justify-center">
                            <button className="bg-euclid text-black py-3 px-8 rounded-full font-medium text-sm uppercase tracking-wider">
                                Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;