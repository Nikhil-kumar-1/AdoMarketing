import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const floatingImage = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Unsplash image URLs
  const heroBgImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  const digitalMarketingImage = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80";

  return (
    <header className="relative bg-gradient-to-br from-green-700 to-emerald-700 overflow-hidden">
      {/* Background hero image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBgImage} 
          alt="Digital marketing background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 to-emerald-800/50"></div>
      </div>

      {/* Floating digital elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute w-8 h-8 bg-white rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40, 0],
              x: [0, (Math.random() - 0.5) * 30, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate={isMounted ? "show" : "hidden"}
          >
            <motion.div variants={item}>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-100 bg-emerald-800 bg-opacity-50 rounded-full mb-4">
                Digital Marketing Experts
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
              variants={item}
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
            >
              <span className="block">Grow Your Business</span>
              <span className="block text-emerald-200 bg-clip-text bg-gradient-to-r from-emerald-300 to-white">
                Beyond Expectations
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 max-w-lg mx-auto lg:mx-0 text-lg md:text-xl text-emerald-100"
              variants={item}
            >
              We craft data-driven digital marketing strategies that deliver measurable results. 
              From startups to enterprises, we help businesses thrive in the digital landscape.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={item}
            >
              <motion.a
                href="/contact"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-emerald-800 bg-white hover:bg-emerald-50 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Get Free Consultation
              </motion.a>
              <motion.a
                href="/services"
                className="flex items-center justify-center px-8 py-3 border-2 border-white text-base font-bold rounded-md text-white bg-transparent hover:bg-white hover:text-emerald-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
            initial="hidden"
            animate={isMounted ? "show" : "hidden"}
            variants={floatingImage}
          >
            <motion.img
              src={digitalMarketingImage}
              alt="Digital marketing illustration"
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl border-4 border-white border-opacity-20"
              animate="float"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-3 rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-emerald-600 text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </motion.div>
            <motion.div 
              className="absolute -top-6 -right-6 bg-white p-3 rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-emerald-600 text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Marketing Metrics Highlights */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: "150%+", label: "Average ROI Increase", icon: "📈" },
            { value: "100+", label: "Satisfied Clients", icon: "😊" },
            { value: "24/7", label: "Campaign Monitoring", icon: "👁️" },
            { value: "1M+", label: "Leads Generated", icon: "🔥" }
          ].map((metric, index) => (
            <motion.div 
              key={index}
              className="bg-emerald-600 bg-opacity-30 backdrop-blur-sm rounded-xl p-5 text-center border border-emerald-300 border-opacity-30 hover:border-opacity-50 transition-all"
              variants={item}
              whileHover={{ 
                y: -5,
                backgroundColor: "rgba(5, 150, 105, 0.4)"
              }}
            >
              <div className="text-2xl mb-2">{metric.icon}</div>
              <p className="text-3xl font-bold text-white">{metric.value}</p>
              <p className="text-emerald-100 mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        {/* Digital Divider */}
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2 border-dashed border-emerald-300 border-opacity-30"></div>
          </div>
          <div className="relative flex justify-center">
           <Link to="/strategy"> <motion.span 
              className="px-6 py-2 bg-emerald-600 text-white rounded-full flex items-center shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                boxShadow: ["0 4px 6px rgba(5, 150, 105, 0.3)", "0 10px 15px rgba(5, 150, 105, 0.4)", "0 4px 6px rgba(5, 150, 105, 0.3)"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            >
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Personalized Strategy for Every Business
            </motion.span></Link>
          </div>
        </motion.div>

        <motion.div 
          className="mt-10 pt-8  border-emerald-500 border-opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-center text-emerald-200 mb-6">Trusted by innovative businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80 hover:opacity-100 transition-opacity">
            {["CityMechanics", "GoldenStorm", "CAOnlineServices", "TrueDreamsClasses"].map((company, i) => (
              <motion.div
                key={i}
                className="text-white text-xl font-bold"
                whileHover={{ scale: 1.1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      
      

      {/* Animated scrolling elements at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute -left-16 bottom-4 w-8 h-8 bg-white rounded-full opacity-30"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              bottom: `${Math.random() * 30 + 10}px`
            }}
            animate={{
              x: "100vw",
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
      </div>
    </header>
  );
}

export default Hero;