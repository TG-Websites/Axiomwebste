import React from 'react';
import {
    Scale,
    DollarSign,
    Cpu,
    Gavel,
    ClipboardList,
    ArrowRight
} from "lucide-react";

const AboutSection= () => {
    const practiceData = [
        {
            id: 1,
            icon: Scale,
            title: "Law",
            subtitle: "Justice",
            isSpecial: false
        },
        {
            id: 2,
            icon: DollarSign,
            title: "Economics",
            subtitle: "Analysis",
            isSpecial: false
        },
        {
            id: 3,
            icon: Cpu,
            title: "Technology",
            subtitle: "Innovation",
            isSpecial: false
        },
        {
            id: 4,
            icon: Gavel,
            title: "Litigation",
            subtitle: "Disputes",
            isSpecial: false
        },
        {
            id: 5,
            icon: ClipboardList,
            title: "Policy",
            subtitle: "Reforms",
            isSpecial: false
        },
    ];

    const PracticeCard = ({ icon: Icon, title, subtitle, isSpecial }) => {
        const baseClasses = "group relative rounded-2xl px-4 py-8 h-64 w-full max-w-[250px] mx-auto cursor-pointer transition-all duration-300 hover:-translate-y-2";



        return (
            <div className={`${baseClasses} bg-white hover:shadow-2xl hover:shadow-gray-300/50`}>
                <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="mb-4 text-euclid transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-12 h-12" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm font-semibold text-gray-600">{subtitle}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen darknavy-bg py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Areas of <span className="text-euclid">Practice</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        <span className='text-euclid'>Axiom5</span> is a boutique law practice focused on competition law and policy in India.
                    </p>
                    <div className="w-16 h-0.5 bg-euclid mx-auto mt-8"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {practiceData.map((item) => (
                        <PracticeCard
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            subtitle={item.subtitle}
                            isSpecial={item.isSpecial}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
