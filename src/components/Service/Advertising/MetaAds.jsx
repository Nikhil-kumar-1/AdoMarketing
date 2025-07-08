import { motion } from "framer-motion";
import { FaGlobe, FaRocket, FaBolt, FaBullseye } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const MetaAds = () => {
  const adFormats = [
    {
      name: "Dynamic Ads",
      desc: "Automatically promote your entire catalog to relevant audiences",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Carousel Ads",
      desc: "Show multiple images or videos in one ad",
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "Story Ads",
      desc: "Full-screen immersive experiences",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Reels Ads",
      desc: "Engage users with short-form videos",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Meta Ads | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Meta Ads, Facebook Ads, Instagram Ads, Social Media Marketing, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Unlock the power of Meta Ads with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/meta-ads"
        />
        <meta property="og:title" content="Meta Ads | Adonomics Technologies" />
        <meta
          property="og:description"
          content="Unlock the power of Meta Ads with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted ads and engaging content."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/meta-ads"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-indigo-900 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.pexels.com/photos/17614476/pexels-photo-17614476/free-photo-of-holding-a-smartphone-with-the-threads-app-with-the-meta-platforms-logo-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Meta Ads"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <SiMeta className="text-white text-5xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-200">
                Meta Ads
              </span>{" "}
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              We provide Smart, scalable advertising solutions across Facebook,
              Instagram, Messenger, and beyond.
            </p>
            <div className="mt-10 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <div className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    Launch Campaign
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { value: "3B+", label: "Active Meta Users", icon: <FaGlobe /> },
              {
                value: "10x",
                label: "ROI with Dynamic Ads",
                icon: <FaRocket />,
              },
              { value: "96%", label: "Ad Visibility", icon: <FaBolt /> },
              {
                value: "98%",
                label: "Audience Accuracy",
                icon: <FaBullseye />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-12 text-center"
              >
                <div className="flex justify-center text-indigo-600 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ad Types Section */}
      <div className="bg-gray-50 py-2 px-4">
        <section className="bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 py-20 px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-14"
            >
              Meta Ads: Reaching the Right Audience Where They Spend Time Most
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 items-center text-gray-700 text-lg leading-relaxed">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p>
                  If you’ve ever scrolled through Facebook or Instagram and
                  noticed an ad that felt almost{" "}
                  <span className="italic font-bold">too perfect</span> for you,
                  chances are it was powered by Meta Ads. These platforms have
                  become more than just places to connect with friends. They are
                  now major hubs where people discover new products, explore
                  services, and engage with brands. That’s exactly where your
                  business needs to be.
                </p>
                <p>
                  Meta Ads work because they let you meet people where they
                  already spend time. Whether they are scrolling their news
                  feed, watching Stories, or checking out Reels, your ad can
                  show up naturally in their flow. You’re not interrupting them.
                  You’re showing up in a way that feels familiar and relevant.
                </p>
                <p>
                  One of the strongest advantages of Meta Ads is the targeting
                  power. You can reach people based on age, location, interests,
                  behavior, and even their connections. Want to promote a yoga
                  studio to women aged 25 to 40 who follow health and wellness
                  pages and live within five miles of your business? Meta lets
                  you do exactly that. It’s this precise targeting that makes
                  Meta Ads so effective for both big brands and small
                  businesses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center space-y-4 w-full max-w-sm shadow-sky-300 transition-transform hover:scale-105 duration-300 hover:shadow-lg hover:shadow-lime-400">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.webp"
                    alt="Facebook Logo"
                    className="w-20 h-20 transition-transform hover:scale-105 duration-300"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.webp"
                    alt="Instagram Logo"
                    className="w-20 h-20 transition-transform hover:scale-105 duration-300"
                  />
                  <p className="text-center text-sm text-gray-500">
                    Connect with users on platforms they use most—Facebook &
                    Instagram.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="space-y-6">
                <p>
                  Meta also allows for creative flexibility. You can use images,
                  videos, carousels, and interactive content to tell your story.
                  This gives you a chance to make a real impression. You’re not
                  just advertising a product. You’re giving people a feel for
                  your brand and inviting them to engage.
                </p>
                <p>
                  At Adonomics Technology, we don’t just launch Meta Ads and
                  hope for the best. We take the time to understand your
                  audience, your goals, and your message. We design ads that
                  speak to your customers in a voice they trust. We test
                  different formats, track what’s working, and make adjustments
                  in real time. Every dollar you spend is treated like an
                  investment, not a gamble.
                </p>
                <p>
                  The best part is that you do not need a massive budget to make
                  Meta Ads work. You can start small, reach a focused audience,
                  and scale up once you see results. That kind of flexibility
                  makes it a smart move for businesses looking to grow
                  efficiently.
                </p>
                <p className="font-semibold text-blue-800">
                  If your customers are on Facebook or Instagram—and they
                  probably are—Meta Ads can help you get in front of them with
                  purpose and precision. With the right strategy, it’s one of
                  the easiest ways to build brand awareness and drive real
                  results.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80"
                alt="Social Media Advertising"
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 text-center mb-4"
          >
            Powerful <span className="text-indigo-600">Ad Formats</span> by Meta
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12"
          >
            Pick the right format to maximize engagement and results
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${format.color} h-2 w-full`}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {format.name}
                  </h3>
                  <p className="text-gray-600">{format.desc}</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="inline-flex items-center text-indigo-600 font-medium">
                    Learn more <span className="ml-1">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaAds;
