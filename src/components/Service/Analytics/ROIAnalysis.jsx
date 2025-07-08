// Keep your existing imports
import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaCalculator,
  FaSearchDollar,
  FaCheckCircle,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export const ROIAnalysis = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Helmet>
        <title>ROI Analysis | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="ROI Analysis, Return on Investment, Cost Performance, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Analyze your return on investment with our comprehensive ROI analysis tools. Make informed decisions based on detailed cost-performance insights."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/roi-analysis"
        />
        <meta
          property="og:title"
          content="ROI Analysis | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Analyze your return on investment with our comprehensive ROI analysis tools. Make informed decisions based on detailed cost-performance insights."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/roi-analysis"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593672755342-741a7f868732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-green-900/60"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            <FaCalculator className="text-white text-6xl mx-auto mb-4" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            ROI Analysis
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-6"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            Evaluate your return on investment with detailed cost-performance
            insights.
          </motion.p>
        </div>
      </section>

      {/* ROI Highlights */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          ROI Insights
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaChartLine />,
              title: "Performance Trends",
              desc: "Visualize investment growth and campaign effectiveness.",
            },
            {
              icon: <FaMoneyBillWave />,
              title: "Cost vs Revenue",
              desc: "See clear breakdowns of costs against returns.",
            },
            {
              icon: <FaCalculator />,
              title: "ROI Calculator",
              desc: "Live metrics to analyze investment profitability.",
            },
            {
              icon: <FaSearchDollar />,
              title: "Optimize Spend",
              desc: "Make smart decisions on where to allocate your budget.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-green-50 p-6 rounded-2xl shadow text-center"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeIn}
            >
              <div className="text-4xl text-green-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Breakdown Table */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          Detailed ROI Breakdown
        </motion.h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 text-left">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2">Campaign</th>
                <th className="px-4 py-2">Spend</th>
                <th className="px-4 py-2">Revenue</th>
                <th className="px-4 py-2">ROI (%)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  campaign: "Google Ads",
                  spend: "$5,000",
                  revenue: "$15,000",
                  roi: "200%",
                },
                {
                  campaign: "Facebook Campaign",
                  spend: "$3,500",
                  revenue: "$7,000",
                  roi: "100%",
                },
                {
                  campaign: "Email Marketing",
                  spend: "$1,000",
                  revenue: "$4,000",
                  roi: "300%",
                },
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3">{row.campaign}</td>
                  <td className="px-4 py-3">{row.spend}</td>
                  <td className="px-4 py-3">{row.revenue}</td>
                  <td className="px-4 py-3 text-green-700 font-semibold">
                    {row.roi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ROI Formula Explanation */}
      <section className="py-12 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-green-800 mb-4"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            How ROI is Calculated
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            ROI (%) = <strong>(Net Profit / Investment Cost) × 100</strong>
          </motion.p>
          <p className="text-sm text-gray-600 mt-2">
            For example, if you spent $1,000 and made $3,000 in revenue, your
            net profit is $2,000 and ROI is 200%.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          Real Results. Real ROI.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Doubled ROI in 3 months with targeted ad spend.",
            "Cut costs by 35% while increasing revenue 50%.",
            "Improved lead-to-sale conversion, boosting ROI by 120%.",
          ].map((story, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-white shadow border-l-4 border-green-500"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeIn}
            >
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-green-600 mr-2" />
                <h4 className="text-lg font-semibold text-green-800">
                  Success Story #{i + 1}
                </h4>
              </div>
              <p className="text-gray-700">{story}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
