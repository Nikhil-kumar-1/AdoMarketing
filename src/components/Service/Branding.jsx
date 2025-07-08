import React, { useEffect } from "react";
import {
  FaPalette,
  FaChessKnight,
  FaLightbulb,
  FaBuilding,
  FaSwatchbook,
  FaUsers,
  FaChartLine,
  FaCrown,
  FaHeart,
  FaSearch,
  FaPencilAlt,
  FaMagic,
  FaLayerGroup,
  FaQuestion,
  FaLightbulb as FaBulb,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

const BrandingServices = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        {/* Page title */}
        <title>Branding Services | Adonomics Technologies</title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Discover expert branding services at Adonomics Technologies. Build a strong brand identity and boost your market presence with our tailored solutions."
        />
        <meta
          name="keywords"
          content="Branding, Brand Identity, Brand Strategy, Brand Development, Corporate Branding, Personal Branding, Visual Identity, Logo Design, Brand Guidelines, Brand Positioning, Brand Awareness, Digital Branding, Creative Branding, Branding Agency, Adonomics Technologies, Noida Delhi"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/branding"
        />

        {/* Open Graph tags for social media */}
        <meta
          property="og:title"
          content="Branding Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Discover expert branding services at Adonomics Technologies. Build a strong brand identity and boost your market presence with our tailored solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adonomicstechnologies/branding"
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
      </Helmet>
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="relative bg-gray-900 overflow-hidden min-h-screen flex items-center"
      >
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Branding Services"
          />
        </div>
        <motion.div
          variants={fadeIn}
          className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Build Something <span className="text-emerald-400">Real</span>{" "}
            with <span className="text-green-400">Adonomics</span>
            <span className="text-green-400"> Technologies</span>
          </h1>
          <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
            Your brand isn't just a logo—it's what people feel when they think
            of your business. We help build brands that create trust and
            connection.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10"
          >
            <a
              href="/contact"
              className="inline-block bg-emerald-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-emerald-700 transition duration-300"
            >
              Start Your Brand Journey
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Intro Section */}
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Branding and Identity: Let's Build Something Real
            </h2>
            <div className="mt-8 max-w-8xl mx-auto text-lg text-gray-600 space-y-6 text-left">
              <motion.p variants={fadeIn}>
                You know what? Let's clear something up right away. Your brand
                isn't just a cool logo or some nice-looking colors on your
                website. And no, it's definitely not that tagline you spent
                weeks thinking about. Your real brand is what people feel when
                they think of your business. That gut reaction, that little
                voice in someone's head that says, "Oh, I know this company. I
                trust them." That's what matters. And that's what we help you
                build at Adonomics Technologies.
              </motion.p>
              <motion.p variants={fadeIn}>
                We're not just here to design graphics and hand you a logo.
                We're here to dig deep, figure out who you really are as a
                business, and build a brand that actually reflects that.
                Something that's solid. Something that sticks.
              </motion.p>
            </div>
          </motion.div>

          <div className="lg:flex lg:items-center lg:justify-between mt-16">
            <motion.div variants={fadeIn} className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Branding Is More Than a Fancy Logo — Let's Be Real
              </h2>
              <div className="mt-6 text-lg text-gray-600 space-y-6">
                <p>
                  Let's be honest—anyone with Photoshop can design you a
                  half-decent logo. But what good is that if it doesn't mean
                  anything?
                </p>
                <p>
                  A great brand makes people feel connected. It makes them trust
                  you before you even say a word. That's not something you can
                  fake. It comes from clarity, honesty, and a whole lot of
                  understanding your business inside out.
                </p>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    We ask the hard questions:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaQuestion className="flex-shrink-0 h-5 w-5 text-emerald-500 mt-0.5" />
                      <span className="ml-3 text-gray-700">Who are you?</span>
                    </li>
                    <li className="flex items-start">
                      <FaQuestion className="flex-shrink-0 h-5 w-5 text-emerald-500 mt-0.5" />
                      <span className="ml-3 text-gray-700">
                        What makes you different?
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaQuestion className="flex-shrink-0 h-5 w-5 text-emerald-500 mt-0.5" />
                      <span className="ml-3 text-gray-700">
                        Why should people care?
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FaQuestion className="flex-shrink-0 h-5 w-5 text-emerald-500 mt-0.5" />
                      <span className="ml-3 text-gray-700">
                        What do you want to be remembered for?
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    When you figure all that out, your brand pretty much starts
                    creating itself.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-12"
            >
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                className="w-full rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Branding process"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Our Approach Section */}
      <div className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Approach? It's Human. It's Personal. It's Honest.
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We don't do cookie-cutter. Every brand we help build starts from
              scratch.
            </p>
          </motion.div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg text-gray-600 max-w-3xl mx-auto"
            >
              <p>
                We don't do cookie-cutter. We don't use pre-made templates and
                call it "custom." Every brand we help build starts from scratch,
                right from where you are.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
            >
              {[
                {
                  icon: FaSearch,
                  title: "Brand Strategy",
                  description:
                    "We help you figure out the 'why' behind everything. What are your core values? Who do you serve? What do you want to be known for 5 years from now? That's where we start.",
                  color: "text-emerald-600",
                  bgColor: "bg-emerald-100",
                },
                {
                  icon: FaPalette,
                  title: "Visual Identity",
                  description:
                    "This is the fun part—colors, logos, fonts, patterns, and all that jazz. But it's not just about pretty things. We design visuals that say something, that help people remember you long after they've closed the tab.",
                  color: "text-green-600",
                  bgColor: "bg-green-100",
                },
                {
                  icon: FaPencilAlt,
                  title: "Voice & Messaging",
                  description:
                    "How you sound matters just as much as how you look. Whether you want a chill, friendly vibe or something more polished and professional, we'll help you shape a voice that's 100% yours.",
                  color: "text-teal-600",
                  bgColor: "bg-teal-100",
                },
                {
                  icon: FaLayerGroup,
                  title: "Brand Guidelines",
                  description:
                    "You've got your brand—great. But how do you keep it consistent everywhere? We put together easy-to-follow rules so whether it's your website, social post, or a business card, everything feels like you.",
                  color: "text-emerald-800",
                  bgColor: "bg-emerald-200",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="flex flex-col h-full bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg mb-4">
                    <div
                      className={`h-full w-full flex items-center justify-center ${item.bgColor} ${item.color} rounded-lg`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 flex-grow">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Adonomics?
            </h2>
            <div className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              <p>
                There's no shortage of branding agencies out there. Everyone
                claims to be "the best" at what they do. So what makes us
                different?
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: FaUsers,
                title: "We Actually Listen",
                description:
                  "We don't treat you like a project or a checklist. We get to know your business, your team, your goals—even the things you're scared of. Branding isn't just design. It's emotional. We respect that.",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                icon: FaMagic,
                title: "We Take Our Time",
                description:
                  "Good branding doesn't happen in a week. We're not into shortcuts or mass-producing logos. If we're going to build something together, we're going to do it right.",
                image:
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
              },
              {
                icon: FaHeart,
                title: "We Give a Damn",
                description:
                  "Your brand isn't just another job for us. It's your identity. And we're not letting anything second-rate represent you.",
                image:
                  "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-emerald-100 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="ml-4 text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Real Stories Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Real Stories. Real Brands. Real People.
              </h2>
              <div className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                <p>
                  We've worked with startups who had nothing but an idea and a
                  dream. We've helped growing businesses find their voice again
                  after years of blending in. And we've supported brands during
                  complete transformations.
                </p>
                <p className="mt-4">
                  Some of the work we're proudest of came from messy
                  beginnings—confused messaging, outdated looks, or just plain
                  brand burnout. But with a little digging and a lot of care, we
                  helped them find their magic again.
                </p>
                <p className="mt-4 font-medium">
                  Because sometimes the most powerful brands aren't the
                  flashiest ones. They're the honest ones.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What Strong Branding Delivers
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-emerald-100 mx-auto">
              Powerful branding creates measurable business results
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: FaChartLine,
                title: "Brand Recognition",
                description:
                  "Consistent, professional branding makes your business instantly recognizable.",
                stat: "80%",
                statLabel: "More memorable to consumers",
              },
              {
                icon: FaCrown,
                title: "Competitive Edge",
                description:
                  "Stand out in crowded markets with distinctive brand identity.",
                stat: "3x",
                statLabel: "Higher perceived value",
              },
              {
                icon: FaHeart,
                title: "Customer Loyalty",
                description:
                  "Strong brands build emotional connections that drive repeat business.",
                stat: "68%",
                statLabel: "Of customers stay loyal",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {item.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-3xl font-bold text-emerald-600">
                    {item.stat}
                  </p>
                  <p className="text-sm text-gray-500">{item.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-emerald-50 rounded-2xl px-6 py-16 sm:p-16"
          >
            <div className="max-w-xl mx-auto lg:max-w-none lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Thinking of Starting Fresh? Let's Talk.
                </h2>
                <div className="mt-4 text-lg text-gray-600">
                  <p>
                    If you've got that nagging feeling that your brand doesn't
                    quite "click" anymore—or if you're just starting out and
                    want to make sure you get it right from day one—reach out to
                    us. Seriously.
                  </p>
                  <p className="mt-4">
                    We're not salesy. We won't hit you with buzzwords. Just a
                    real conversation about where you are, where you want to go,
                    and how we can help you get there.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex rounded-md shadow"
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition duration-300"
                  >
                    Get in Touch
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">
                Ready to build a brand that matters?
              </span>
              <span className="block text-emerald-400">
                Let's create something remarkable together.
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex rounded-md shadow"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 transition duration-300"
              >
                Get Your Free Consultation
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 inline-flex rounded-md shadow"
            >
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition duration-300"
              >
                View Our Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BrandingServices;
