import React from "react";
import {
  FaFacebookF,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Fb = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white text-gray-800 overflow-hidden relative">
      <Helmet>
        <title>Facebook Marketing | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Facebook Marketing, Facebook Ads, Social Media Marketing, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Unlock the power of Facebook Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/fb" />
        <meta
          property="og:title"
          content="Facebook Marketing | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Unlock the power of Facebook Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/fb"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-blue-300 text-5xl z-0"
        {...floatAnimation}
      >
        <FaBullhorn />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-blue-300 text-5xl z-0"
        {...floatAnimation}
      >
        <FaUsers />
      </motion.div>

      {/* Hero Section */}
      <section
        className="relative z-10 text-center px-6 py-24 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1636114673156-052a83459fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaFacebookF className="text-6xl mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Skyrocket Your Business with <br />
            Facebook Marketing
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Maximize reach. Target smarter. Convert faster.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* What is Facebook Marketing */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1683402693577-035defb30159?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="What is Facebook Marketing"
            className="rounded-xl shadow-lg md:h-[400px] object-cover mb-6 md:mb-0"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is Facebook Marketing?
            </h2>
            <p className="text-lg text-gray-700 leading-7">
              Facebook Marketing is the use of Facebook's powerful platform to
              promote your business through paid ads, content, and community
              engagement. It enables precise audience targeting, retargeting,
              and measurable ROI – all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Why Facebook Marketing */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-50 py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Why Facebook Marketing?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 text-lg">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaChartLine className="text-3xl mb-4 text-blue-600" />
              <h4 className="font-bold mb-2">Massive User Base</h4>
              <p>
                Reach billions of potential customers on the most active social
                platform.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaCogs className="text-3xl mb-4 text-blue-600" />
              <h4 className="font-bold mb-2">Advanced Targeting</h4>
              <p>
                Target users based on interests, behavior, location, and more.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaUsers className="text-3xl mb-4 text-blue-600" />
              <h4 className="font-bold mb-2">Engaged Communities</h4>
              <p>Build loyal followers and drive word-of-mouth marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-blue-800 text-center">
          Our Facebook Strategy
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📄 Page Setup & Branding
            </h3>
            <p>
              We design a high-converting Facebook business page aligned with
              your brand identity.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              🖼️ Engaging Content Strategy
            </h3>
            <p>
              We create scroll-stopping graphics, reels, and posts to engage
              your audience.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">📢 Paid Ad Campaigns</h3>
            <p>
              We run goal-oriented ads (traffic, leads, or conversions) and
              constantly optimize performance.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">📊 Data & Analytics</h3>
            <p>
              We provide reports on reach, conversions, and cost per result, and
              adjust campaigns accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Why Choose Us?
          </h2>
          <ul className="list-none pl-6 text-left text-lg text-gray-700 space-y-3 max-w-2xl mx-auto">
            <li>💡 Innovative & ROI-focused strategies</li>
            <li>📈 Transparent performance tracking</li>
            <li>🎯 Certified Facebook Ad experts</li>
            <li>📞 Ongoing support & campaign tweaks</li>
          </ul>
        </div>
      </section>

      {/* Final Call To Action */}
      <section
        id="contact"
        className="py-16 px-6 text-center bg-gradient-to-r from-blue-700 to-blue-600 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Scale Your Business with Facebook
          </h2>
          <p className="text-lg mb-6">
            Book a free consultation with our marketing team and start growing
            today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Schedule a Free Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Fb;
