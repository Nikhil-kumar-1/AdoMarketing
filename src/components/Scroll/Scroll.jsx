import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Scroll() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Technology data
  const technologies = [
    {
      name: "WordPress",
      type: "CMS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      color: "from-[#21759b] to-[#1e8cbe]",
    },
    {
      name: "Shopify",
      type: "E-commerce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      color: "from-[#7ab55c] to-[#95bf47]",
    },
    {
      name: "Magento",
      type: "E-commerce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Magento_Logo.svg",
      color: "from-[#f46f25] to-[#ee6723]",
    },
    {
      name: "Google Ads",
      type: "Advertising",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Google_Ads_Logo.svg",
      color: "from-[#4285F4] to-[#34A853]",
    },
    {
      name: "Facebook Ads",
      type: "Advertising",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      color: "from-[#1877F2] to-[#0A7CFF]",
    },
    {
      name: "Instagram",
      type: "Advertising",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
      color: "from-[#f09433] via-[#e6683c] to-[#dc2743]",
    },
    {
      name: "Bing Ads",
      type: "Advertising",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Microsoft_Bing_logo_%282020%29.svg",
      color: "from-[#008373] to-[#00A4EF]",
    },
    {
      name: "SEO",
      type: "Marketing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
      color: "from-[#4285F4] to-[#EA4335]",
    },
    {
      name: "Email Marketing",
      type: "Marketing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle-icons-mail.svg",
      color: "from-[#EA4335] to-[#FBBC05]",
    },
    {
      name: "Content Marketing",
      type: "Marketing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Document_icon.svg",
      color: "from-[#34A853] to-[#4285F4]",
    },
    {
      name: "Social Media",
      type: "Marketing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Social_media_logo.svg",
      color: "from-[#8a3ab9] to-[#fbad50]",
    },
    {
      name: "Analytics",
      type: "Data",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Google_Analytics_logo.svg",
      color: "from-[#F57C00] to-[#EA4335]",
    },
  ];

  // Calculate total width of all cards with gaps
  const cardWidth = 240; // width of each card
  const gap = 32; // gap between cards
  const totalWidth = technologies.length * (cardWidth + gap);

  return (
    <div className="relative py-16 bg-gradient-to-b from-green-950 to-blue-950 overflow-hidden border-t border-emerald-800/50">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-500/20"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100, 0],
              x: [0, (Math.random() - 0.5) * 80, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
            We leverage industry-leading platforms to deliver exceptional results
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative h-52 overflow-hidden">
          {/* First track */}
          <motion.div
            className="absolute top-0 left-0 flex items-center h-full gap-8"
            animate={{ 
              x: [0, -totalWidth],
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {technologies.map((tech, index) => (
              <TechCard key={`first-${index}`} tech={tech} />
            ))}
            {/* Duplicate for seamless loop */}
            {technologies.map((tech, index) => (
              <TechCard key={`first-duplicate-${index}`} tech={tech} />
            ))}
          </motion.div>

          {/* Second track with offset */}
          <motion.div
            className="absolute top-0 left-0 flex items-center h-full gap-8"
            style={{ left: `${totalWidth}px` }}
            animate={{ 
              x: [0, -totalWidth * 2],
            }}
            transition={{ 
              duration: 60, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {technologies.map((tech, index) => (
              <TechCard key={`second-${index}`} tech={tech} />
            ))}
            {/* Duplicate for seamless loop */}
            {technologies.map((tech, index) => (
              <TechCard key={`second-duplicate-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Edge fade */}
        <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-950 to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0  bg-gradient-to-l from-emerald-950 to-transparent z-20"></div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="/services"
            className="inline-flex items-center px-8 py-4 border-2 border-emerald-400 text-lg font-bold rounded-xl text-white bg-emerald-800/50 hover:bg-emerald-700/70 backdrop-blur-sm shadow-lg hover:shadow-emerald-500/30 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Explore Our Digital Solutions
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

// Card Component
function TechCard({ tech }) {
  return (
    <motion.div
      className="flex-shrink-0 p-5 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 hover:border-emerald-400/70 flex flex-col items-center justify-center shadow-lg backdrop-blur-sm transition-all"
      style={{ width: "240px", height: "180px" }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(6, 95, 70, 0.7)",
        boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white/20 rounded-lg p-2">
        <img
          src={tech.logo}
          alt={tech.name}
          className="max-h-12 max-w-12 object-contain brightness-125"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%234ade80'/%3E%3Ctext x='50%' y='50%' font-family='sans-serif' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3E" +
              tech.name.charAt(0) +
              "%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-1">{tech.name}</h3>
      <span className="text-sm text-emerald-200 font-medium px-3 py-1 rounded-full bg-emerald-800/50">
        {tech.type}
      </span>
    </motion.div>
  );
}

export default Scroll;