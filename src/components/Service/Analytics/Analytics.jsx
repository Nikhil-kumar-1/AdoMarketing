import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaChartLine, FaCogs, FaLightbulb } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">
      <Helmet>
        <title>Analytics Reporting | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Analytics Reporting, Data Analysis, Business Intelligence, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Unlock the power of data with Adonomics Technologies. Our analytics reporting services provide actionable insights to drive your business forward."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/analytics"
        />
        <meta
          property="og:title"
          content="Analytics Reporting | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Unlock the power of data with Adonomics Technologies. Our analytics reporting services provide actionable insights to drive your business forward."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/analytics"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-40"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            <FaChartLine className="text-6xl text-white mx-auto mb-6 drop-shadow-lg" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-6"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
          >
            Actionable Insights with Advanced Analytics
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInUp}
          >
            Empower your business decisions with real-time data tracking,
            performance analysis, and strategic forecasting.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeInUp}
          >
            Let's Analyze Together
          </motion.a>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {[
          {
            icon: <FaDatabase />,
            title: "Data Collection",
            desc: "We gather data from multiple sources including web, CRM, and social channels.",
          },
          {
            icon: <FaCogs />,
            title: "Data Processing",
            desc: "We clean, normalize, and transform your data for deeper analysis.",
          },
          {
            icon: <FaChartLine />,
            title: "Insight Generation",
            desc: "Uncover trends, behaviors, and KPIs with cutting-edge tools and techniques.",
          },
          {
            icon: <FaLightbulb />,
            title: "Decision Support",
            desc: "Get dashboards and reports that help make smart, data-driven decisions.",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={fadeInUp}
          >
            <div className="text-blue-600 text-4xl mb-4">{step.icon}</div>
            <h4 className="text-xl font-bold mb-2 text-blue-800">
              {step.title}
            </h4>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Adonomics Analytics Content */}
      <section className="max-w-5xl mx-auto mt-24 px-6">
        {[
          {
            heading: "Advanced Analytics Reporting by Adonomics Technologies",
            content:
              "When you’re running a business, it’s not just about data—it’s about the story behind the numbers. At Adonomics Technologies, our analytics reporting services are built to uncover the why, the what now, and the how to grow. We don’t overwhelm you with charts. We deliver insights that change the game.",
          },
          {
            content:
              "Whether you're marketing, selling, or scaling, you need to know what’s working—and what’s draining your budget. That’s where our team shines.",
          },
          {
            heading: "Beyond Spreadsheets: Clarity, Not Confusion",
            content:
              "Most businesses collect data. Few actually know how to read it. We turn raw data into visual, digestible reports that tell you exactly what’s going on across your platforms. Whether it's Google Analytics, Meta Ads, Shopify, or your CRM, we consolidate everything into one crystal-clear report that you can actually use.",
          },
          {
            heading: "What We Deliver:",
            content:
              "📊 Weekly & monthly reporting dashboards\n📈 Real-time KPIs & trends\n🔍 Funnel analysis and audience behavior insights\n📍 Geo, device, and platform-specific performance\n📂 Custom reports based on your goals",
          },
          {
            heading: "Tailored Reports for Real-World Decisions",
            content:
              "We know that every business is different. Our team takes the time to understand what metrics matter most to you—leads, conversions, ROAS, lifetime value—and then we build custom reports that track those outcomes. You don’t get cookie-cutter dashboards. You get intelligence built for your brand.",
          },
          {
            heading: "Turn Data Into Action",
            content:
              "At Adonomics Technologies, analytics reporting isn’t just a numbers game. It’s how we help our clients make bold, confident decisions. Want to know if your Facebook ad is bringing ROI? Wondering which product is your top performer by location? Trying to lower bounce rate or increase lead quality?\n\nWe give you the answers—backed by clean, verified data and explained in plain English.",
          },
          {
            heading: "The Adonomics Advantage",
            content:
              "✅ Custom-built dashboards\n✅ Transparent and simple reports\n✅ Weekly data reviews\n✅ Clear explanations (not jargon)\n✅ Strategic guidance based on findings\n\nStop guessing and start growing. With Adonomics Technologies, you’ll finally understand your digital performance—and what to do next.",
          },
        ].map((block, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate="visible"
            custom={i}
            variants={fadeInUp}
            className="mb-10"
          >
            {block.heading && (
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
                {block.heading}
              </h3>
            )}
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {block.content}
            </p>
          </motion.div>
        ))}
      </section>

      <div className="py-12"></div>
    </div>
  );
};

export default Analytics;
