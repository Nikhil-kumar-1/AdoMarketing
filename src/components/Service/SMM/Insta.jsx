import React from "react";
import { FaInstagram, FaEye, FaHeart, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Insta = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white text-gray-800 overflow-hidden relative">
      <Helmet>
        <title>Instagram Marketing | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Instagram Marketing, Instagram Ads, Social Media Marketing, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Unlock the power of Instagram Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/insta" />
        <meta
          property="og:title"
          content="Instagram Marketing | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Unlock the power of Instagram Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/insta"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <motion.div
        className="absolute top-20 left-10 text-pink-300 text-5xl z-0"
        {...floatAnimation}
      >
        <FaEye />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-pink-300 text-5xl z-0"
        {...floatAnimation}
      >
        <FaHeart />
      </motion.div>

      <section
        className="relative z-10 text-center px-6 py-24 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaInstagram className="text-6xl mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Grow Your Brand with <br />
            Instagram Marketing
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Visually connect. Drive engagement. Build loyalty.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-pink-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started Now
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="What is Insta Marketing"
            className="rounded-xl shadow-lg md:h-[400px] object-cover mb-6 md:mb-0"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is Instagram Marketing?
            </h2>
            <p className="text-lg text-gray-700 leading-7">
              Instagram Marketing involves sharing visually compelling content,
              stories, and paid promotions to grow your brand and drive customer
              engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pink-100 to-pink-50 py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-900 mb-10 text-center">
            Why Instagram Marketing?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 text-lg">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaUsers className="text-3xl mb-4 text-pink-600" />
              <h4 className="font-bold mb-2">Active Audience</h4>
              <p>Engage millions of users who interact with brands daily.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaEye className="text-3xl mb-4 text-pink-600" />
              <h4 className="font-bold mb-2">High Visual Appeal</h4>
              <p>Showcase your brand through photos, reels, and stories.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaHeart className="text-3xl mb-4 text-pink-600" />
              <h4 className="font-bold mb-2">Stronger Engagement</h4>
              <p>Build deeper emotional connections with followers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-pink-800 text-center">
          Our Strategy
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📄 Profile Optimization
            </h3>
            <p>
              We craft a profile that speaks your brand voice and is optimized
              for conversions.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              🎥 Reels & Visual Posts
            </h3>
            <p>
              Creative short-form content that resonates with your audience and
              algorithm.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📢 Targeted Promotions
            </h3>
            <p>
              Run paid campaigns to boost visibility, traffic, and conversions.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📊 Analytics & Insights
            </h3>
            <p>
              Track key metrics and refine strategies for consistent growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pink-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-pink-800">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-left text-lg text-gray-700 space-y-3 max-w-2xl mx-auto">
            <li>🎨 Eye-catching design and content</li>
            <li>🚀 Data-driven promotional strategies</li>
            <li>🤝 Influencer & hashtag collaborations</li>
            <li>📱 Real-time content management</li>
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-6 text-center bg-gradient-to-r from-pink-600 to-pink-500 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Dominate Instagram?
          </h2>
          <p className="text-lg mb-6">
            Let’s craft a visual story that connects and converts.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Schedule a Free Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Insta;
