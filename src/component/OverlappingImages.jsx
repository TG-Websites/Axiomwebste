import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import mobile from '../assets/mobile.jpg';
import game from '../assets/game.jpg';
import covid from '../assets/covid.jpg';
import climate from '../assets/climate.jpg';

// Custom hook to detect mobile view
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

// Card Component (shared between both versions)
function CardContent({ title, category, categoryColor, description, image, isMobile }) {
  const colorMap = {
    purple: { text: "text-purple-600", border: "border-purple-500" },
    orange: { text: "text-orange-600", border: "border-orange-500" },
    pink: { text: "text-pink-600", border: "border-pink-500" },
    blue: { text: "text-blue-600", border: "border-blue-500" },
    red: { text: "text-red-600", border: "border-red-500" },
    green: { text: "text-green-600", border: "border-green-500" }
  };

  return (
    <div className={`bg-white p-3 ${isMobile ? "h-85" : "h-[520px]"} flex flex-col justify-between border-1 shadow-md `}>
      <div>
        <div className={`inline-block border-2 ${colorMap[categoryColor].text} ${colorMap[categoryColor].border} px-3 py-1 rounded mb-2 text-sm font-semibold tracking-wide`}>
          {category}
        </div>
        <h3 className={`${isMobile ? "text-md" : "text-lg"} font-bold mb-2 line-clamp-2`}>{title}</h3>
        <p className={`text-gray-800 leading-snug ${isMobile ? "text-xs line-clamp-3" : "text-base"}`}>
          {description}
        </p>
      </div>
      <img
        src={image}
        alt={title}
        className={`w-full ${isMobile ? "h-40" : "h-80"} object-cover rounded`}
      />
    </div>
  );
}

// Desktop Version
function DesktopVersion() {
  const containerRef = React.useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const card2Y = useTransform(scrollYProgress, [0.1, 0.3], [0, -350]);
  const card4Y = useTransform(scrollYProgress, [0.3, 0.5], [0, -350]);
  const card6Y = useTransform(scrollYProgress, [0.5, 0.8], [0, -350]);

  return (
    <div ref={containerRef} className="h-[400vh] w-full relative">
      <h1 className="text-4xl font-bold ml-5 sticky top-0 text-black pt-5 bg-white z-10">
        <span className="text-euclid">OUR</span> SUCCESS STORIES
        <div className="w-18 h-0.5 bg-euclid ml-1 mt-2"></div>
      </h1>

      <div className="grid grid-cols-3 h-screen w-full sticky top-0 py-10">
        {/* Column 1 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg mt-10">
            <CardContent
              category="FINTECH"
              categoryColor="purple"
              title="Securing a payment aggregator authorization"
              description="Case Study: We helped a leading financial institution secure a coveted payment aggregator authorization, enabling them to operate at scale, enhance customer trust, and streamline digital transactions nationwide."
              image={mobile}
              isMobile={false}
            />
          </div>
          <motion.div className="w-full max-w-lg" style={{ y: card2Y }}>
            <CardContent
              category="ARTIFICIAL INTELLIGENCE"
              categoryColor="orange"
              title="Advising Microsoft on a COVID-19 information tool"
              description="Case Study: Our AI-driven solution empowered Microsoft to build a real-time COVID-19 information tool, crowdsourcing data from across the globe and providing critical updates to millions during the pandemic."
              image={covid}
              isMobile={false}
            />
          </motion.div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg mt-10">
            <CardContent
              category="DIGITAL GAMING"
              categoryColor="pink"
              title="Unpacking a billion-dollar industry"
              description="Case Study: Digital games and sports in India. We're redefining entertainment by designing mobile games that adapt difficulty and narrative in real-time using machine learning."
              image={game}
              isMobile={false}
            />
          </div>
          <motion.div className="w-full max-w-lg" style={{ y: card4Y }}>
            <CardContent
              category="AEROSPACE & AVIATION"
              categoryColor="blue"
              title="Launching India's first remote sensing satellites"
              description="Case Study: Our work in aerospace technology helped launch India's first remote sensing satellites, revolutionizing data collection and analysis for climate and terrain monitoring."
              image={climate}
              isMobile={false}
            />
          </motion.div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg mt-10">
            <CardContent
              category="COVID-19"
              categoryColor="red"
              title="Global pandemic response solutions"
              description="Case Study: We developed rapid response systems for COVID-19 tracking, vaccine distribution, and public health information dissemination during critical phases of the pandemic."
              image={covid}
              isMobile={false}
            />
          </div>
          <motion.div className="w-full max-w-lg" style={{ y: card6Y }}>
            <CardContent
              category="CLIMATE TECH"
              categoryColor="green"
              title="Environmental monitoring systems"
              description="Case Study: Through IoT sensors and AI-based tracking, our platform helps cities monitor air quality, predict emission spikes, and strategize actionable climate interventions effectively."
              image={climate}
              isMobile={false}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
// Mobile Version
function MobileVersion() {
  const containerRef = React.useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Raw transform values
  const cardPair1Y = useTransform(scrollYProgress, [0.0, 0.5], [0, -200]);
  const cardPair2Y = useTransform(scrollYProgress, [0.4, 0.9], [50, -400]);

 

  return (
    <div ref={containerRef} className="h-[140vh] w-full">
      <h1 className="text-3xl font-bold ml-5 sticky top-0 text-black pt-5 bg-white z-10">
        <span className="text-euclid">OUR</span> SUCCESS STORIES
        <div className="w-18 h-0.5 bg-euclid ml-1 mt-2"></div>
      </h1>

      <div className="grid grid-cols-2 h-fit w-full top-0 pt-20 px-4 gap-4">
        {/* First pair of cards (static) */}
        <div className="col-span-1">
          <CardContent
            category="FINTECH"
            categoryColor="purple"
            title="Payment aggregator authorization"
            description="Case Study: We helped a financial institution secure payment aggregator authorization."
            image={mobile}
            isMobile={true}
          />
        </div>
        <div className="col-span-1">
          <CardContent
            category="DIGITAL GAMING"
            categoryColor="pink"
            title="Billion-dollar gaming industry"
            description="Case Study: Redefining entertainment with adaptive mobile games."
            image={game}
            isMobile={true}
          />
        </div>

        {/* Second pair of cards (animated) */}
        <motion.div className="col-span-1" style={{ y: cardPair1Y }}>
          <CardContent
            category="AI SOLUTION"
            categoryColor="orange"
            title="Microsoft COVID-19 tool"
            description="Case Study: AI-driven COVID-19 information platform for Microsoft."
            image={covid}
            isMobile={true}
          />
        </motion.div>
        <motion.div className="col-span-1" style={{ y: cardPair1Y }}>
          <CardContent
            category="AEROSPACE"
            categoryColor="blue"
            title="Remote sensing satellites"
            description="Case Study: India's first remote sensing satellites launch."
            image={climate}
            isMobile={true}
          />
        </motion.div>

        {/* Third pair of cards (animated) */}
        <motion.div className="col-span-1" style={{ y: cardPair2Y }}>
          <CardContent
            category="COVID-19"
            categoryColor="red"
            title="Pandemic response systems"
            description="Case Study: COVID-19 tracking and response solutions."
            image={covid}
            isMobile={true}
          />
        </motion.div>
        <motion.div className="col-span-1" style={{ y: cardPair2Y }}>
          <CardContent
            category="CLIMATE TECH"
            categoryColor="green"
            title="Environmental monitoring"
            description="Case Study: IoT sensors for climate interventions."
            image={climate}
            isMobile={true}
          />
        </motion.div>
      </div>
    </div>
  );
}

// Main Component
function OverlappingImages() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </>
  );
}

export default OverlappingImages;