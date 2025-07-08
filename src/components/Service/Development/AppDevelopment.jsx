import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaServer,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
function AppDevelopment() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title>App Development Services | Adonomics Technologies</title>
        <meta
          name="description"
          content="Discover top-notch app development services at Adonomics Technologies. We create high-performance mobile and web applications tailored to your business needs."
        />
        <meta
          name="keywords"
          content="App Development, Mobile App Development, Web App Development, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/app-development"
        />
        <meta
          property="og:title"
          content="App Development Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Discover top-notch app development services at Adonomics Technologies. We create high-performance mobile and web applications tailored to your business needs."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/app-development"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
        <meta name="googlebot" content="index, nofollow" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1721955487745-a2c3aea86d1c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // New relevant image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-indigo-900/70"></div>
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.h1
            className="text-2xl sm:text-2xl lg:text-6xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            App Development: Crafting High-Performance Digital Solutions
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            We build powerful, scalable, and feature-rich mobile and web
            applications that drive business growth and engage your users.
            Partner with Adonomics Technologies to turn your ideas into reality.
          </motion.p>
          <motion.a
            href="/contact"
            className="mt-6 inline-block bg-white text-indigo-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </div>
      </section>
      {/* App Development Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-indigo-50 to-white text-gray-800">
        <div className="bg-white text-gray-800 font-sans px-6 py-16 max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-6 text-indigo-900 text-center"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            App Development by Adonomics Technologies
          </motion.h2>

          <motion.p
            className="text-lg max-w-3xl mx-auto mb-10 text-center text-gray-700"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            You don’t just need an app. You need a very good app. The one that
            users love, competitors notice, and your business benefits from. At
            Adonomics Technologies, we build apps that do more than
            function—they win hearts, simplify lives, and scale businesses.
          </motion.p>

          <motion.h3
            className="text-2xl font-semibold mb-4 text-indigo-800 text-center"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            From Sketch to Screen — We Build It All
          </motion.h3>

          <motion.p
            className="text-md max-w-3xl mx-auto mb-12 text-center text-gray-700"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeIn}
          >
            Whether it’s a sleek mobile app or a robust web app, our process is
            hands-on, fast-moving, and obsessively focused on quality. From
            initial ideation to App Store launch, our team handles design,
            development, testing, and deployment—while keeping you looped in
            every step of the way.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeIn}
          >
            <div className="flex items-start space-x-4 shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer hover:shadow-purple-300/50">
              <FaMobileAlt className="text-indigo-600 text-3xl mt-1" />
              <p>📱 iOS & Android development</p>
            </div>
            <div className="flex items-start space-x-4 shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer hover:shadow-purple-300/50">
              <FaLaptopCode className="text-indigo-600 text-3xl mt-1" />
              <p>🖥️ Web apps and PWAs</p>
            </div>
            <div className="flex items-start space-x-4 shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer hover:shadow-purple-300/50">
              <FaPalette className="text-indigo-600 text-3xl mt-1" />
              <p>🎨 UI/UX design with real users in mind</p>
            </div>
            <div className="flex items-start space-x-4 shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer hover:shadow-purple-300/50">
              <FaServer className="text-indigo-600 text-3xl mt-1" />
              <p>🔄 Backend API integration</p>
            </div>
            <div className="flex items-start space-x-4 shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer hover:shadow-purple-300/50">
              <FaShieldAlt className="text-indigo-600 text-3xl mt-1" />
              <p>🔐 Security & compliance built-in</p>
            </div>
            <div className="flex items-start space-x-4 shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer hover:shadow-purple-300/50">
              <FaRocket className="text-indigo-600 text-3xl mt-1" />
              <p>🚀 App launch and post-launch maintenance</p>
            </div>
          </motion.div>

          <motion.h3
            className="text-2xl font-semibold mb-4 text-indigo-800 text-center"
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeIn}
          >
            Apps That Aren’t Just Built—They’re Designed to Win
          </motion.h3>

          <motion.p
            className="text-md max-w-3xl mx-auto mb-12 text-center text-gray-700"
            initial="hidden"
            animate="visible"
            custom={6}
            variants={fadeIn}
          >
            We take performance seriously. Our apps are responsive, fast, and
            built to scale. We test on real devices, under real conditions, to
            ensure your users get the best experience—whether they’re on a 5G
            phone or a patchy Wi-Fi connection.
          </motion.p>

          <motion.h3
            className="text-2xl font-semibold mb-4 text-indigo-800 text-center"
            initial="hidden"
            animate="visible"
            custom={7}
            variants={fadeIn}
          >
            Why Adonomics Technologies?
          </motion.h3>

          <motion.ul
            className="list-none list-inside max-w-2xl mx-auto space-y-2 text-gray-700 text-lg"
            initial="hidden"
            animate="visible"
            custom={8}
            variants={fadeIn}
          >
            <li>✅ Cross-platform excellence</li>
            <li>✅ Agile development with real updates</li>
            <li>✅ Post-launch support and updates</li>
            <li>✅ Affordable packages for startups</li>
            <li>✅ Enterprise-grade quality for larger firms</li>
          </motion.ul>

          <motion.p
            className="mt-12 max-w-3xl mx-auto text-center text-gray-800 font-semibold"
            initial="hidden"
            animate="visible"
            custom={9}
            variants={fadeIn}
          >
            Your app deserves more than a freelancer’s patch job. Let Adonomics
            build you a product you’re proud to put your name on.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default AppDevelopment;
