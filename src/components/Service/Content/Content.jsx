import React from "react";
import { FaPenFancy, FaBookOpen, FaFeatherAlt } from "react-icons/fa";
import {
  FaBlog,
  FaVideo,
  FaPodcast,
  FaChartBar,
  FaShareAlt,
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Content = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white text-gray-800 overflow-hidden relative">
      <Helmet>
        <title>Content Marketing | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Content Marketing, SEO, Blogging, Digital Marketing, Adonomics Technologies, digital marketing
content manager
digital marketing agency
digital marketing company
digital marketing services"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Discover why content marketing works, how to do it right and how to build trust and visibility without pushing sales. Read to find out more"
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/content"
        />
        <meta
          property="og:title"
          content="Content Marketing | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Unlock the power of Content Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted content strategies."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/content"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <motion.div
        className="absolute top-20 left-10 text-purple-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaFeatherAlt />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-purple-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaBookOpen />
      </motion.div>

      <section
        className="relative z-10 text-center px-6 py-24 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaPenFancy className="text-6xl mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Authority through Words <br />
            Content Marketing
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Attract, inform, and inspire with powerful storytelling.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Craft Your Content Plan
          </a>
        </div>
      </section>

      <section className="px-4 md:px-20 py-16  text-gray-800 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4 py-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
              Content Marketing: Why It Works and How to Do It Right?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://images.pexels.com/photos/7563680/pexels-photo-7563680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Content Marketing Visual"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="text-gray-700 text-lg leading-relaxed">
                <p className="mb-6">
                  Let’s be real—most of us are done with ads. We skip them, mute
                  them, block them, ignore them. It’s not that advertising is
                  dead, but people’s tolerance for being sold to is way lower
                  than it used to be. So how do you actually get someone to pay
                  attention to your brand without annoying them?
                </p>
                <p>
                  Simple: you stop selling and start providing value. That’s
                  what content marketing is all about. It’s not just another
                  marketing fad. It’s a real, long-term strategy that works
                  because it focuses on helping people first. Whether it’s
                  teaching them something, entertaining them, or answering their
                  questions— content marketing earns attention instead of buying
                  it.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
                Why Content Marketing Works (When Done Right)?
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="space-y-5 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Think about it—when was the last time you searched for
                    something like “how to unclog a drain” or “best productivity
                    apps”? Did you click an ad? Probably not. You likely found a
                    blog, a video, or a Reddit thread that gave you what you
                    needed.
                  </p>
                  <p className="text-lg leading-relaxed">
                    That’s content marketing. It’s not pushy. It doesn’t scream
                    “buy now.” It says, “Hey, here’s something useful.” And
                    that’s why it works. Because when you show up in people’s
                    lives with real answers or fresh ideas, they remember you.
                    Trust builds naturally. And when they’re ready to buy?
                    You’re already on their radar—in a good way.
                  </p>
                </div>

                {/* Image */}
                <motion.img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Content marketing"
                  className="w-full rounded-2xl shadow-lg object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>

            <h3 className="text-2xl font-semibold mt-10 mb-4">
              What Kind of Content Should You Make?
            </h3>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              <li className="flex items-start gap-3  p-4 rounded-xl shadow shadow-xl transition-shadow duration-300 hover:shadow-2xl shadow-gray-300 hover:scale-105 hover:shadow-gray-400 ">
                <FaBlog className="text-2xl text-blue-500 w-10 h-10" />
                <span>
                  Blog posts – Great for showing up on Google and sharing your
                  voice and knowledge.
                </span>
              </li>
              <li className="flex items-start gap-3  p-4 rounded-xl shadow shadow-xl transition-shadow duration-300 hover:shadow-2xl shadow-gray-300 hover:scale-105 hover:shadow-gray-400">
                <FaVideo className="text-2xl text-red-500 w-10 h-10" />
                <span>
                  Videos – Ideal for quick how-tos, product demos, or
                  behind-the-scenes stuff.
                </span>
              </li>
              <li className="flex items-start gap-3  p-4 rounded-xl shadow shadow-xl transition-shadow duration-300 hover:shadow-2xl shadow-gray-300 hover:scale-105 hover:shadow-gray-400">
                <FaPodcast className="text-2xl text-purple-500 w-10 h-10" />
                <span>
                  Podcasts – Awesome if you want to build a loyal following with
                  deeper, longer-form conversations.
                </span>
              </li>
              <li className="flex items-start gap-3  p-4 rounded-xl shadow shadow-xl transition-shadow duration-300 hover:shadow-2xl shadow-gray-300 hover:scale-105 hover:shadow-gray-400">
                <FaChartBar className="text-2xl text-green-500 w-10 h-10" />
                <span>
                  Infographics – If you’ve got data or complex info, visuals can
                  make it easier to digest.
                </span>
              </li>
              <li className="flex items-start gap-3  p-4 rounded-xl shadow shadow-xl transition-shadow duration-300 hover:shadow-2xl shadow-gray-300 hover:scale-105 hover:shadow-gray-400">
                <FaShareAlt className="text-2xl text-cyan-500 w-10 h-10" />
                <span>
                  Social media posts – Perfect for staying top-of-mind and
                  sparking quick engagement.
                </span>
              </li>
              <li className="flex items-start gap-3  p-4 rounded-xl shadow shadow-xl transition-shadow duration-300 hover:shadow-2xl shadow-gray-300 hover:scale-105 hover:shadow-gray-400">
                <FaFileAlt className="text-2xl text-yellow-500 w-10 h-10" />
                <span>
                  Ebooks or whitepapers – Best for when you want to really dive
                  deep into a subject and build authority.
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="contact"
        className="py-16 px-6 text-center bg-gradient-to-r from-purple-700 to-purple-600 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Create Compelling Stories
          </h2>
          <p className="text-lg mb-6">
            Ready to attract your ideal audience through content?
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book a Content Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Content;
