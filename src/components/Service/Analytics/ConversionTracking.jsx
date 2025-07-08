import React from "react";
import { motion } from "framer-motion";
import {
  FaExchangeAlt,
  FaMousePointer,
  FaCheckCircle,
  FaFunnelDollar,
  FaBullseye,
  FaTools,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export const ConversionTracking = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Helmet>
        <title>Conversion Tracking | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Conversion Tracking, Analytics, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Optimize your marketing efforts with precise conversion tracking. Understand user behavior and improve ROI."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/conversion-tracking"
        />
        <meta
          property="og:title"
          content="Conversion Tracking | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Optimize your marketing efforts with precise conversion tracking. Understand user behavior and improve ROI."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/conversion-tracking"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1670213989466-3c4bb75cf5ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-indigo-900/60"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            <FaFunnelDollar className="text-white text-6xl mx-auto mb-4" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Conversion Tracking
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-6"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            Gain detailed insights on your lead and sales funnel through precise
            conversion tracking.
          </motion.p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          Key Conversion Metrics
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaMousePointer />,
              title: "Click-through Tracking",
              desc: "Monitor where users are clicking and how often.",
            },
            {
              icon: <FaExchangeAlt />,
              title: "Lead Conversions",
              desc: "Track contact form submissions, downloads, and signups.",
            },
            {
              icon: <FaCheckCircle />,
              title: "Sales Conversions",
              desc: "Understand which marketing actions result in sales.",
            },
            {
              icon: <FaFunnelDollar />,
              title: "Funnel Optimization",
              desc: "Visualize and optimize drop-off points in your funnel.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-indigo-50 p-6 rounded-2xl shadow text-center"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeIn}
            >
              <div className="text-4xl text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-indigo-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            Why Conversion Tracking Matters
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Conversion tracking helps you understand user behavior, determine
            which channels are most effective, and ultimately optimize your
            marketing spend to boost ROI. It's not just about numbers—it's about
            actionable insights.
          </motion.p>
        </div>
      </section>

      {/* Tools & Techniques */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          Tools & Techniques
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
            className="flex items-start gap-4"
          >
            <FaBullseye className="text-4xl text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                Goal Setting
              </h3>
              <p className="text-gray-700">
                Define clear KPIs for every funnel stage to measure what matters
                most.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
            className="flex items-start gap-4"
          >
            <FaTools className="text-4xl text-indigo-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                Analytics Tools
              </h3>
              <p className="text-gray-700">
                Use tools like Google Analytics, Meta Pixel, and Hotjar to
                capture detailed tracking data.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-800 py-16 text-white text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Tracking What Truly Matters
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Don’t let valuable user behavior go unnoticed. Set up conversion
            tracking and start optimizing today.
          </p>
          <button className="bg-white text-indigo-800 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Get Started
          </button>
        </motion.div>
      </section>
    </div>
  );
};
