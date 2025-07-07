import React, { useState, useEffect } from 'react';
import {
  Facebook,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronUp
} from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navigationLinks = [
    { name: 'who we are', href: '#who-we-are' },
    { name: 'what we do', href: '#what-we-do' },
    { name: 'how we work', href: '#how-we-work' },
    { name: 'insights', href: '#insights' },
    { name: 'opportunities', href: '#opportunities' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Phone, href: 'tel:+91-9999999999', label: 'Phone', color: 'hover:text-green-400' },
    { icon: Mail, href: 'mailto:info@axiom5.com', label: 'Email', color: 'hover:text-red-400' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 text-center lg:text-left">
            {/* Logo & Company Info */}
            <div className="lg:col-span-1 space-y-6 flex flex-col items-center lg:items-start">
              <div className="group cursor-pointer">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                  <img src={logo} alt="" />
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Delivering excellence in legal services with innovation, integrity, and unwavering commitment to our clients' success.
              </p>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
              <h4 className="text-lg font-semibold mb-6 text-gray-100">Quick Links</h4>
              <div className="space-y-3 w-full max-w-xs">
                {navigationLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center justify-center lg:justify-start space-x-3 py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <ArrowRight
                      size={16}
                      className={`transition-all duration-300 ${
                        hoveredLink === index ? 'text-blue-400 translate-x-1' : 'text-gray-500'
                      }`}
                    />
                    <span className="text-sm font-medium uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
              <h4 className="text-lg font-semibold mb-6 text-gray-100">Connect With Us</h4>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300">
                  <Phone size={16} className="text-blue-400" />
                  <span className="text-sm">+91-9999999999</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300">
                  <Mail size={16} className="text-blue-400" />
                  <span className="text-sm">info@axiom5.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`group relative p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />

                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Axiom5 Law Chambers LLP. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>

            {/* <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Designed by</span>
              <span className="text-white bg-clip-text text-transparent font-semibold">
                Thundergits
              </span>
            </div> */}
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-euclid text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default Footer;
