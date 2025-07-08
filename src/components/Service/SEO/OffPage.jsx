import { motion } from "framer-motion";
import {
  FaLink,
  FaUsers,
  FaShareAlt,
  FaBullhorn,
  FaCheckCircle,
} from "react-icons/fa";
import { FiLink, FiUsers, FiMessageCircle, FiGlobe } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const OffPageSEO = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <Helmet>
        <title>Off-Page SEO | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Off-Page SEO, SEO optimization, website optimization, digital marketing, search engine optimization, Adonomics Technologies Noida Delhi"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Off-Page SEO services to enhance your website's authority and credibility. Build trust with search engines and improve your rankings."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/offpage"
        />
        <meta
          property="og:title"
          content="Off-Page SEO | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Off-Page SEO services to enhance your website's authority and credibility. Build trust with search engines and improve your rankings."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/offpage"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-emerald-600 to-cyan-500 py-20"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              <span className="text-lime-300">Off-Page</span> SEO Optimization
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-xl text-white max-w-2xl mx-auto"
            >
              Build authority and credibility signals that tell search engines
              your website deserves top rankings.
            </motion.p>
          </div>
        </motion.div>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto space-y-8 text-lg leading-relaxed text-gray-800">
            <h2 className="text-3xl font-semibold text-emerald-700 text-center">
              Off-Page SEO: Building Trust Beyond Your Website
            </h2>
            <motion.div
              className="w-full mx-auto p-6 space-y-8"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="flex w-full flex-col md:flex-row items-center space-x-4 bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow shadow-orange-300 "
                variants={item}
              >
                <FaLink className="w-10 h-10 text-blue-600" />
                <p className="w-11/12">
                  Here’s the thing most people miss about SEO—it’s not just
                  what’s on your website that counts. You could have flawless
                  content, stunning design, and lightning-fast load times, but
                  if nobody beyond your site is talking about you, search
                  engines take notice. And not in a good way.
                </p>
              </motion.div>

              <motion.div
                className="flex w-full flex-col md:flex-row items-center space-x-4 bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow shadow-blue-300"
                variants={item}
              >
                <FaUsers className="w-10 h-10 text-green-500" />
                <p className="w-11/12">
                  Off-page SEO is all about reputation. It’s the digital version
                  of word-of-mouth. You want other sites, especially the trusted
                  ones, to point back to you and say, “Hey, these folks know
                  what they’re doing.” That’s what builds real authority in
                  Google’s eyes.
                </p>
              </motion.div>

              <motion.div
                className="flex w-full flex-col md:flex-row items-center space-x-4 bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow shadow-purple-300"
                variants={item}
              >
                <FaLink className="w-10 h-10 text-purple-600" />
                <p className="w-11/12">
                  Let’s start with backlinks. These are links from other
                  websites that lead back to yours, and they’re kind of like
                  online recommendations. But—and this is important—not all
                  links are created equal. A few links from well-known, credible
                  sites will do way more for your rankings than hundreds of
                  links from sketchy directories or spammy blogs. Quality over
                  quantity, always.
                </p>
              </motion.div>

              <motion.div
                className="flex w-full flex-col md:flex-row items-center space-x-4 bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow shadow-red-300"
                variants={item}
              >
                <FaCheckCircle className="w-10 h-10 text-yellow-500" />
                <p className="w-11/12">
                  Imagine backlinks as votes. But instead of every vote being
                  equal, some come from respected experts and others come from…
                  well, let’s just say people you probably wouldn’t want
                  vouching for you. You want those expert votes—the ones that
                  carry weight.
                </p>
              </motion.div>

              <motion.div
                className="flex w-full flex-col md:flex-row items-center space-x-4 bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow shadow-teal-300"
                variants={item}
              >
                <FaShareAlt className="w-10 h-10 text-pink-500" />
                <p className="w-11/12">
                  Now, while social media doesn’t directly impact your Google
                  rankings, it still plays a role in off-page SEO. Every share,
                  comment, or post about your content helps get your name out
                  there. The more eyes on your work, the better the chance that
                  someone reputable will decide to link to it or mention it in
                  their own content. That’s how momentum builds.
                </p>
              </motion.div>

              <motion.div
                className="flex w-full flex-col md:flex-row items-center space-x-4 bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow shadow-green-300"
                variants={item}
              >
                <FaBullhorn className="w-10 h-10 text-red-500" />
                <p className="w-11/12">
                  And here’s something people often overlook: brand mentions.
                  Even without a link, just seeing your name pop up in the right
                  conversations—think news articles, forum threads, Reddit
                  discussions—tells Google that your brand is relevant and part
                  of the larger conversation in your industry. That matters.
                </p>
              </motion.div>

              <motion.div
                className="flex w-full flex-col md:flex-row items-center space-x-4 bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow shadow-yellow-300"
                variants={item}
              >
                <FaUsers className="w-10 h-10 text-indigo-600" />
                <p className="w-11/12">
                  Adonomics Technology takes off-page SEO seriously. They don’t
                  chase shortcuts. No link schemes. No shady exchanges. What
                  they do is build real, lasting relationships with publishers,
                  bloggers, and media outlets who actually want to share
                  valuable content. They help you create something worth linking
                  to—and then make sure the right people see it.
                </p>
              </motion.div>

              <motion.div
                className="flex w-full flex-col md:flex-row items-center space-x-4 bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow shadow-cyan-300"
                variants={item}
              >
                <FaCheckCircle className="w-10 h-10 text-teal-600" />
                <p className="w-11/12">
                  It’s not an overnight fix, but here’s the payoff: when the web
                  starts vouching for you, your whole SEO strategy levels up.
                  You stop being “just another website” and start becoming a
                  trusted name in your space.
                </p>
              </motion.div>

              <motion.div
                className="flex w-full flex-col md:flex-row items-center space-x-4 bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow shadow-pink-300"
                variants={item}
              >
                <FaUsers className="w-10 h-10 text-gray-600" />
                <p className="w-11/12">
                  And that kind of trust? You can’t fake it. You earn it.
                </p>
              </motion.div>
            </motion.div>

            {/* illustration row */}
            <div className="grid md:grid-cols-2 gap-10 items-start pt-4">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src="https://images.pexels.com/photos/8424456/pexels-photo-8424456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SEO illustration"
                className="rounded-2xl shadow-xl"
              />
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100 space-y-4"
              >
                <h3 className="text-xl font-semibold text-emerald-700">
                  Why Quality Backlinks Matter
                </h3>
                <p>
                  A handful of links from respected publications can outweigh
                  hundreds from low-quality sources. Focus on earning those
                  expert votes.
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-10 text-center">
              {[
                {
                  icon: FiLink,
                  color: "emerald-600",
                  title: "High-Quality Backlinks",
                  desc: "Trusted sites endorsing your content.",
                },
                {
                  icon: FiMessageCircle,
                  color: "cyan-600",
                  title: "Brand Mentions",
                  desc: "Name drops that prove relevance.",
                },
                {
                  icon: FiUsers,
                  color: "lime-600",
                  title: "Social Signals",
                  desc: "Shares & engagement fuel discovery.",
                },
                {
                  icon: FiGlobe,
                  color: "indigo-600",
                  title: "Reputation Building",
                  desc: "Real publisher relationships build trust.",
                },
              ].map(({ icon: Icon, color, title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-md rounded-2xl p-6 space-y-3 border border-emerald-100"
                >
                  <Icon className={`text-3xl text-${color} mx-auto`} />
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm">{desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="pt-10 text-xl text-center text-gray-700 font-medium">
              <span className="text-emerald-600 font-bold">
                Adonomics Technology
              </span>{" "}
              focuses on long-term results by building content worth linking to
              — and getting it in front of the right people. Because trust isn’t
              bought. It’s earned.
            </p>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default OffPageSEO;
