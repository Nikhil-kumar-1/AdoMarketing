import React from "react";
import { FaTwitter, FaChartLine, FaHashtag, FaBullhorn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Twitter = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white text-gray-800 overflow-hidden relative">
      <Helmet>
        <title>Twitter Marketing | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Twitter Marketing, Twitter Ads, Social Media Marketing, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Unlock the power of Twitter Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/twitter"
        />
        <meta
          property="og:title"
          content="Twitter Marketing | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Unlock the power of Twitter Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/twitter"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <motion.div
        className="absolute top-20 left-10 text-blue-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaChartLine />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-blue-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaHashtag />
      </motion.div>

      <section
        className="relative z-10 text-center px-6 py-24 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559526324-593bc073d938')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaTwitter className="text-6xl mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Real-Time Impact with <br />
            Twitter/X Marketing
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Engage. Trend. Influence. One tweet at a time.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Start Tweeting Smarter
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1616469829167-0bd76a80c913?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="What is Twitter Marketing"
            className="rounded-xl shadow-lg md:h-[400px] object-cover mb-6 md:mb-0"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is Twitter/X Marketing?
            </h2>
            <p className="text-lg text-gray-700 leading-7">
              Twitter Marketing focuses on short-form content, trending topics,
              and real-time engagement to promote brands, connect with users,
              and drive website traffic.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-100 to-blue-50 py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Why Twitter/X Marketing?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 text-lg">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaChartLine className="text-3xl mb-4 text-blue-600" />
              <h4 className="font-bold mb-2">Real-Time Trends</h4>
              <p>Leverage trending hashtags and events to stay relevant.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaHashtag className="text-3xl mb-4 text-blue-600" />
              <h4 className="font-bold mb-2">Hashtag Campaigns</h4>
              <p>Drive traffic and engagement with smart hashtag strategies.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaBullhorn className="text-3xl mb-4 text-blue-600" />
              <h4 className="font-bold mb-2">Brand Voice Amplified</h4>
              <p>
                Establish your tone and interact directly with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-blue-800 text-center">
          Our Strategy
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              🧠 Profile Optimization
            </h3>
            <p>
              We build a profile that is professional, engaging, and
              SEO-optimized.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              🔥 Viral Tweet Campaigns
            </h3>
            <p>Creative, concise, and clever tweets that spark conversation.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">🎯 Paid Twitter Ads</h3>
            <p>Strategic ad targeting to maximize impressions and CTR.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📈 Real-Time Analytics
            </h3>
            <p>Monitor engagement, trends, and performance in real time.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-left text-lg text-gray-700 space-y-3 max-w-2xl mx-auto">
            <li>📢 Strategic tweet planning & scheduling</li>
            <li>⚡️ Real-time engagement with trending topics</li>
            <li>👥 Influencer outreach & brand mentions</li>
            <li>📊 Weekly performance insights & optimization</li>
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Make Your Brand Trend
          </h2>
          <p className="text-lg mb-6">Ready to go viral on X?</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Twitter;
