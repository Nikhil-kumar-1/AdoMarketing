import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const InfographicsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Helmet>
        <title>Infographics | Adonomics Technologies</title>
        <meta
          name="description"
          content="Adonomics Technologies uses infographics to turn complex data into clear, visual stories that drive action and decision-making. Read on now. "
        />
        <meta
          name="keywords"
          content="Infographics, Data Visualization, Adonomics Technologies   Noida Delhi, Digital Marketing, Digital Marketing Company in Patna "
        />
        <meta name="author" content="Adonomics Technologies" />
        <link rel="canonical" href="https://adonomics.com/infographics" />
        <meta
          property="og:title"
          content="Infographics | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Discover how Adonomics Technologies uses infographics to turn complex data into clear, actionable insights."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <meta property="og:url" content="https://adonomics.com/infographics" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section with Overlay Image */}
      <div className="relative bg-gray-900 text-white overflow-hidden h-96 md:h-screen max-h-[800px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Data visualization"
          className="w-full h-full object-cover"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="text-center px-4 max-w-4xl">
            <motion.h1
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Turning Data Into Decisions
            </motion.h1>
            <motion.p variants={slideUp} className="text-xl md:text-2xl mb-8">
              At Adonomics Technologies, we transform complex data into clear,
              memorable infographics that drive action.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
            >
              Explore Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Why Infographics Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto p-8 sm:p-12 lg:p-20 bg-white rounded-xl shadow-sm my-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            Infographics: Turning Data Into Decisions at Adonomics Technologies
          </h2>
          <p className="mt-5 max-w-full text-xl text-gray-700 mx-auto">
            In a world overwhelmed with data, the companies that win aren't just
            the ones who collect it—they're the ones who make it easy to
            understand. At Adonomics Technologies, we use infographics to do
            exactly that. Infographics help us turn technical insights, campaign
            metrics, and market trends into clear, visual stories that stick.
          </p>
        </div>
      </motion.div>

      {/* Why Infographics Work Section */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Infographics Work?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Let's face it: people don't always have time to read a detailed
              report. But they will glance at a well-designed infographic—and
              they'll remember it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "They simplify complexity",
                description:
                  "We break down things like ad performance, data pipelines, or customer journeys in seconds.",
                image:
                  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
                color: "from-blue-100 to-blue-200",
              },
              {
                title: "They boost engagement",
                description:
                  "Visual content gets shared more often on social and keeps people scrolling.",
                image:
                  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                color: "from-purple-100 to-purple-200",
              },
              {
                title: "They support decision-making",
                description:
                  "Infographics help stakeholders see the bigger picture and act faster.",
                image:
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                color: "from-indigo-100 to-indigo-200",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Use Infographics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="lg:text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How We Use Infographics?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Transforming data into actionable insights across multiple
              business functions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Client Reports",
                desc: "Turn analytics into visual summaries that are easy to digest and act on.",
                icon: "📊",
                color: "bg-blue-100 text-blue-800",
              },
              {
                title: "Sales Enablement",
                desc: "Use data visuals to support pitches and show the value of our solutions.",
                icon: "💼",
                color: "bg-purple-100 text-purple-800",
              },
              {
                title: "Product Education",
                desc: "Explain how our platforms work—step by step—in a clear, graphic format.",
                icon: "📚",
                color: "bg-indigo-100 text-indigo-800",
              },
              {
                title: "Social Media & Blogs",
                desc: "Enhance written content with visual takeaways that catch attention.",
                icon: "📱",
                color: "bg-pink-100 text-pink-800",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${item.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1`}
              >
                <div className="text-4xl mb-4 animate-bounce">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-current opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Designed With Purpose */}
      <div className="relative py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Designed With Purpose
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Every infographic we design is crafted for maximum impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Audience-first",
                description:
                  "Whether for marketers, C-suites, or developers, we tailor the message and format.",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                color: "border-blue-300",
              },
              {
                name: "Data-driven",
                description:
                  "We use real numbers, not filler, and back every graphic with insight.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
                color: "border-purple-300",
              },
              {
                name: "On-brand",
                description:
                  "Clean, consistent design that reflects the Adonomics voice and visual identity.",
                image:
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                color: "border-indigo-300",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-md overflow-hidden border-t-4 ${feature.color} hover:shadow-lg transition-all duration-300`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Conclusion with Infographic Example */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="overflow-hidden lg:flex lg:items-center lg:justify-between"
          >
            <div className=" lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
                Infographics aren't just eye candy
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                At Adonomics Technologies, they're a core part of how we
                communicate complex tech in simple, human ways. Because when
                your insights are easy to understand, they're easier to
                trust—and act on.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="  lg:w-1/2 flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Infographic example"
                className="rounded-lg shadow-2xl max-h-80 object-contain border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfographicsPage;
