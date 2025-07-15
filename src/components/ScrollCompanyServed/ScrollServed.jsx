import React, { useEffect, useRef } from "react";
import {
  FaHeartbeat,
  FaCar,
  FaBolt,
  FaTv,
  FaBuilding,
  FaGlobe,
  FaGraduationCap,
  FaShoppingCart,
  FaLeaf,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const ScrollServed = () => {
  const scrollRef = useRef(null);

  const industries = [
    { title: "Healthcare Services", icon: <FaHeartbeat className="text-4xl" /> },
    { title: "Automotive Services", icon: <FaCar className="text-4xl" /> },
    { title: "IT/Software Services", icon: <FaComputer className="text-4xl" /> },
    { title: "Energy", icon: <FaBolt className="text-4xl" /> },
    { title: "Media and Entertainment", icon: <FaTv className="text-4xl" /> },
    { title: "Real Estate", icon: <FaBuilding className="text-4xl" /> },
    { title: "Education", icon: <FaGraduationCap className="text-4xl" /> },
    { title: "E-commerce", icon: <FaShoppingCart className="text-4xl" /> },
    { title: "Environment", icon: <FaLeaf className="text-4xl" /> },
    { title: "Telecommunication", icon: <FaGlobe className="text-4xl" /> },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });

        // Reset scroll when end is reached
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
      }
    }, 50); // Adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#ffffff] py-12 text-black text-center">
      <h2 className="text-3xl font-bold mb-10">INDUSTRY WE SERVED</h2>
      <div ref={scrollRef} className="overflow-hidden">
        <div className="flex gap-8 px-6 w-max">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[140px] gap-2"
            >
              {industry.icon}
              <span className="text-sm font-medium text-center">
                {industry.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollServed;
