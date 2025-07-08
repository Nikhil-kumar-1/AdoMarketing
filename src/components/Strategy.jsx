import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet-async";
const Strategy = () => {
  const [activeTab, setActiveTab] = useState("analysis");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const tabs = [
    {
      id: "analysis",
      title: "Deep Analysis",
      icon: "🔍",
      content:
        "We conduct comprehensive market research and competitor analysis to identify unique opportunities for your business.",
    },
    {
      id: "strategy",
      title: "Custom Strategy",
      icon: "🎯",
      content:
        "Tailored digital marketing roadmap designed specifically for your business goals and target audience.",
    },
    {
      id: "implementation",
      title: "Precision Execution",
      icon: "⚡",
      content:
        "Our expert team implements the strategy with meticulous attention to detail and continuous optimization.",
    },
    {
      id: "results",
      title: "Measurable Results",
      icon: "📈",
      content:
        "Regular reporting and analytics to track performance and demonstrate ROI on your marketing investment.",
    },
  ];

  const features = [
    {
      title: "Data-Driven Approach",
      description: "Leveraging analytics to make informed decisions",
      icon: "📊",
    },
    {
      title: "Omnichannel Strategy",
      description: "Seamless integration across all digital platforms",
      icon: "🔄",
    },
    {
      title: "Continuous Optimization",
      description: "Regular testing and refinement for maximum impact",
      icon: "🛠️",
    },
    {
      title: "Transparent Reporting",
      description: "Clear metrics that show your marketing performance",
      icon: "📋",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Custom Digital Marketing Strategy | Tailored Solutions</title>
        <meta
          name="description"
          content="Discover our personalized digital marketing strategies designed to maximize your business growth. Get a free consultation today!"
        />
        <meta
          name="keywords"
          content="digital marketing, custom strategy, business growth, personalized marketing, free consultation"
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/strategy"
        />
        <meta
          property="og:title"
          content="Custom Digital Marketing Strategy | Tailored Solutions"
        />
        <meta
          property="og:description"
          content="Discover our personalized digital marketing strategies designed to maximize your business growth. Get a free consultation today!"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/strategy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adonomicstechnologies.com/Logo.webp" />
        <meta name='robots' content='index, nofollow' />
        <meta name="googlebot" content="index, nofollow" />
      </Helmet>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={container}
        className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div variants={item} className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
                Tailored Digital Strategies
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We don't believe in one-size-fits-all solutions. Every business
              gets a completely customized marketing strategy designed for
              maximum growth.
            </motion.p>
          </motion.div>

          {/* Process Section */}
          <motion.div variants={item} className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our 4-Step Personalization Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white shadow-lg border-2 border-teal-500"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-3xl mb-3">{tab.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {tab.title}
                  </h3>
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto border-t-4 border-teal-500"
            >
              <div className="flex items-start">
                <span className="text-4xl mr-4">
                  {tabs.find((t) => t.id === activeTab)?.icon}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {tabs.find((t) => t.id === activeTab)?.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {tabs.find((t) => t.id === activeTab)?.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={item} className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What Makes Our Approach Unique
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-2 border-teal-400"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Study Section */}
          <motion.div
            variants={item}
            className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative"
          >
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                Real Results: E-commerce Case Study
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-black opacity-20 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2">217%</div>
                  <p>Increase in organic traffic</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-black opacity-20 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2">3.8x</div>
                  <p>Higher conversion rate</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-black opacity-20 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2">42%</div>
                  <p>Reduction in customer acquisition cost</p>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg mb-6 max-w-3xl"
              >
                Our personalized strategy transformed an online fashion retailer
                from a struggling startup to a market leader in just 9 months.
              </motion.p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white opacity-10" />
            <div className="absolute -left-10 -bottom-10 w-80 h-80 rounded-full bg-white opacity-10" />
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={item} className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready for Your Custom Strategy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Let's analyze your business and create a marketing plan tailored
              to your specific goals and challenges.
            </p>

            <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold shadow-lg hover:bg-teal-700 transition-colors"
                >
                  Get Your Free Strategy Session
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
                >
                  See More Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Strategy;
