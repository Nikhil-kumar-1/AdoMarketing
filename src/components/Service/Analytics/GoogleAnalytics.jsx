import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaChartBar, FaBolt, FaRocket, FaCogs } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const GoogleAnalytics = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Helmet>
        <title>Google Analytics Integration | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Google Analytics, Data Tracking, Website Performance, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Enhance your website's performance with Google Analytics integration. Track user behavior, optimize marketing strategies, and make data-driven decisions."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/google-analytics"
        />
        <meta
          property="og:title"
          content="Google Analytics Integration | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Enhance your website's performance with Google Analytics integration. Track user behavior, optimize marketing strategies, and make data-driven decisions."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/google-analytics"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-blue-900/60"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            <FaGoogle className="text-white text-6xl mx-auto mb-4" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Google Analytics Integration
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-6"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            Track, understand, and improve your website’s performance with our
            seamless Google Analytics setup.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeIn}
          >
            Get Started
          </motion.a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          Why Use Google Analytics?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaChartBar />,
              title: "Track Visitor Behavior",
              desc: "Understand how users interact with your website in real time.",
            },
            {
              icon: <FaBolt />,
              title: "Measure Performance",
              desc: "Monitor page load times, bounce rates, and key performance indicators.",
            },
            {
              icon: <FaRocket />,
              title: "Optimize Marketing",
              desc: "Identify top-performing campaigns and improve ROI.",
            },
            {
              icon: <FaCogs />,
              title: "Custom Reporting",
              desc: "Create detailed, tailored reports for stakeholders and decision-making.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg text-center"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeIn}
            >
              <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-blue-700 text-white px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          Let’s Set Up Google Analytics for You
        </motion.h2>
        <motion.p
          className="mb-6 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeIn}
        >
          Get deeper insights into your audience, improve user experience, and
          make data-driven decisions with ease.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeIn}
        >
          Talk to Our Team
        </motion.a>
      </section>
    </div>
  );
};

export default GoogleAnalytics;
