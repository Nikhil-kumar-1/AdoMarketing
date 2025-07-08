import React from "react";
import { FaLinkedin, FaBriefcase, FaBuilding, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const LinkedIn = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white text-gray-800 overflow-hidden relative">
      <Helmet>
        <title>LinkedIn Marketing | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="LinkedIn Marketing, LinkedIn Ads, Social Media Marketing, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Unlock the power of LinkedIn Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/linkedin"
        />
        <meta
          property="og:title"
          content="LinkedIn Marketing | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Unlock the power of LinkedIn Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/linkedin"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <motion.div
        className="absolute top-20 left-10 text-blue-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaBriefcase />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-blue-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaBuilding />
      </motion.div>

      <section
        className="relative z-10 text-center px-6 py-24 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1616587224026-668840f26916?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaLinkedin className="text-6xl mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Elevate Your B2B Game with <br />
            LinkedIn Marketing
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Build authority. Generate leads. Grow your network.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Let's Connect
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="What is LinkedIn Marketing"
            className="rounded-xl shadow-lg md:h-[400px] object-cover mb-6 md:mb-0"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is LinkedIn Marketing?
            </h2>
            <p className="text-lg text-gray-700 leading-7">
              LinkedIn Marketing focuses on professional networking, B2B
              promotion, and authority-building content strategies to drive
              trust and high-quality leads.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-100 to-blue-50 py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Why LinkedIn Marketing?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 text-lg">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaUserTie className="text-3xl mb-4 text-blue-800" />
              <h4 className="font-bold mb-2">Professional Audience</h4>
              <p>Target decision-makers and professionals in your industry.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaBriefcase className="text-3xl mb-4 text-blue-800" />
              <h4 className="font-bold mb-2">B2B Lead Generation</h4>
              <p>Connect directly with potential clients and partners.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaBuilding className="text-3xl mb-4 text-blue-800" />
              <h4 className="font-bold mb-2">Brand Credibility</h4>
              <p>Establish yourself as a thought leader in your niche.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-blue-900 text-center">
          Our Strategy
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              💼 Profile & Page Optimization
            </h3>
            <p>
              We polish your profile and business page for professionalism and
              discovery.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              🧠 Thought Leadership Content
            </h3>
            <p>
              Share insights, case studies, and authority-building content
              regularly.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">🎯 Lead Funnels</h3>
            <p>Build LinkedIn funnels to turn impressions into warm leads.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📊 Analytics & Nurture
            </h3>
            <p>
              Track outreach, optimize posts, and nurture connections
              effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Why Work With Us?
          </h2>
          <ul className="list-disc pl-6 text-left text-lg text-gray-700 space-y-3 max-w-2xl mx-auto">
            <li>🎓 Industry-specific messaging that resonates</li>
            <li>📬 Smart outreach & lead qualification</li>
            <li>🏢 Company page growth & optimization</li>
            <li>📈 Long-term brand building strategies</li>
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-6 text-center bg-gradient-to-r from-blue-800 to-blue-700 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Grow Your Professional Network
          </h2>
          <p className="text-lg mb-6">
            Start making real B2B impact with LinkedIn.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get a Free Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default LinkedIn;
