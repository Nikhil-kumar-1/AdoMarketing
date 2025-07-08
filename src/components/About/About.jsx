// AboutSection.jsx
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { FaChartLine, FaUsers, FaLightbulb, FaAward } from "react-icons/fa";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      value: "1+",
      label: "Years Experience",
      icon: <FaAward className="text-blue-600 text-2xl" />,
    },
    {
      value: "100+",
      label: "Clients Worldwide",
      icon: <FaUsers className="text-blue-600 text-2xl" />,
    },
    {
      value: "95%",
      label: "Client Retention",
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
    },
    {
      value: "10+",
      label: "Awards Won",
      icon: <FaLightbulb className="text-blue-600 text-2xl" />,
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image with Animation */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Digital marketing team working on strategy"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600/5"></div>
            </div>

            {/* Floating card animation */}
            <motion.div
              initial={{ y: -20, x: -20, rotate: -5 }}
              animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -right-8 bg-white p-5 rounded-lg shadow-sm border border-gray-200 max-w-xs"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <FaUsers className="text-blue-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    100+ Happy Clients
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">
                    Trusted by businesses worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                About Our Agency
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 mb-5"
            >
              We Combine Innovation With Proven Marketing Strategies
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-7 leading-relaxed"
            >
              Founded in 2025, we've grown from a small team of marketing
              enthusiasts to a full-service digital agency helping businesses
              transform their online presence. Our data-driven approach ensures
              measurable results for every client.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-1.5 rounded-full mr-3">
                  <FiCheck className="text-blue-600 text-sm" />
                </div>
                <p className="text-gray-700">
                  Comprehensive digital marketing solutions
                </p>
              </div>
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-1.5 rounded-full mr-3">
                  <FiCheck className="text-blue-600 text-sm" />
                </div>
                <p className="text-gray-700">
                  Transparent reporting and analytics
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-1.5 rounded-full mr-3">
                  <FiCheck className="text-blue-600 text-sm" />
                </div>
                <p className="text-gray-700">
                  Dedicated account managers
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="bg-white p-3 rounded-lg shadow-xs border border-gray-200 text-center"
                >
                  <div className="flex justify-center mb-1">{stat.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {stat.value}
                  </h2>
                  <p className="text-gray-600 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;