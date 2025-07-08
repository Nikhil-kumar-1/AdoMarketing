// LocalSEOLandingPage.jsx

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaSearchLocation,
  FaGoogle,
  FaBullhorn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const fadeInUp = (delay = 0.1) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const LocalSEO = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title>Local SEO Services | Adonomics Technologies</title>
        <meta
          name="description"
          content="Boost your local business visibility with our expert Local SEO services. Get found by customers in your area when they search for your products or services."
        />
        <meta
          name="keywords"
          content="Local SEO, Local Search Optimization, Local Business SEO, Google My Business, Local Listings, Local Search Marketing"
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/local-seo"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Adonomics Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Local SEO Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Boost your local business visibility with our expert Local SEO services. Get found by customers in your area when they search for your products or services."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/images/local-seo.jpg"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/local-seo"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section with Overlay */}
      <section className="relative bg-[url('https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center text-white py-20 px-6 text-center min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-80"></div>
        <motion.div
          className="relative max-w-4xl mx-auto z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.1)}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Local SEO: Getting Your Business Seen Where It Matters Most
          </h1>
          <p className="text-lg md:text-xl">
            If you run a business that depends on customers nearby, Local SEO is
            your secret weapon. It’s all about making sure your business shows
            up when people in your area search for the products or services you
            offer. Think of it as your online storefront — but for the local
            community.
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6 space-y-24 max-w-6xl mx-auto">
        {/* Section 1 */}
        <motion.div
          className="grid md:grid-cols-2  gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.2)}
        >
          <img
            src="https://images.pexels.com/photos/2882652/pexels-photo-2882652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Local Search"
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <FaSearchLocation className="text-blue-600" /> Why Local SEO Is
              Essential for Your Business?
            </h2>
            <p>
              People today often look online first when they need something
              close to home — whether it’s a coffee shop, plumber, or boutique.
              If your business isn’t showing up in those local searches, you’re
              missing out on a lot of potential customers.
            </p>
            <p>
              Local SEO helps search engines understand exactly where you are
              and what you do, so they can put your business front and center
              for nearby searches. It’s a way to connect with people who are
              ready to buy — right around the corner.
            </p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.3)}
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="SEO Strategy"
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <FaGoogle className="text-blue-600" /> How Local SEO Works
            </h2>
            <p>
              It’s not just about stuffing your website with location names.
              Local SEO involves optimizing your Google My Business profile,
              gathering genuine reviews, building local citations, and making
              sure your website clearly shows your location and services.
            </p>
            <p>
              When done right, it gets you appearing in “near me” searches,
              local map packs, and even voice searches on smart devices. It’s
              about making it easy for locals to find, trust, and choose you
              over the competition.
            </p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.4)}
        >
          <img
            src="https://images.pexels.com/photos/6005478/pexels-photo-6005478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Local Business"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "500px",
              maxHeight: "400px",
              objectFit: "cover",
            }}
            className="rounded-lg shadow-lg "
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" /> Why You Can’t Ignore
              Local SEO?
            </h2>
            <p>
              Online searches for “near me” or location-specific queries keep
              growing. If you want your business to thrive in your community,
              local SEO isn’t optional — it’s necessary. It helps you stand out
              in a crowded marketplace and builds trust with people who want to
              support local businesses.
            </p>
          </div>
        </motion.div>

        {/* Section 4 - CTA */}
        <motion.div
          className="space-y-4 bg-blue-50 p-8 rounded-lg shadow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.5)}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-blue-700">
            <FaBullhorn className="text-blue-600" /> Ready to Boost Your Local
            Reach?
          </h2>
          <p>
            At Adonomics Technologies, we know how to make local SEO work for
            you. From optimizing your online listings to creating content that
            speaks to your community, we help you get noticed by the people who
            matter most — your neighbors and local customers.
          </p>
          <p>
            Want to see your business pop up on local searches and maps? Let’s
            chat and get started.
          </p>
          <Link
            to="/contact"
            className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg inline-flex items-center"
          >
            Chat Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default LocalSEO;
