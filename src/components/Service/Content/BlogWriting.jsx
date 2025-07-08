import React from "react";
import { motion } from "framer-motion";
import { FaPenFancy, FaLightbulb, FaUserEdit, FaFileAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const BlogWriting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 text-gray-800">
      <Helmet>
        <title>Blog Writing Services | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Blog Writing,Blog Writing Formate, Content Writing, Content Marketing, SEO Blogs, Adonomics Technologies Noida Delhi, Blog Writing Services, Professional Blog Writing, Content Creation, Digital Marketing"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Transform your brand's voice with our expert blog writing services. Engage your audience and boost SEO with high-quality content."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/blog-writing"
        />
        <meta
          property="og:title"
          content="Blog Writing Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Transform your brand's voice with our expert blog writing services. Engage your audience and boost SEO with high-quality content."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/blog-writing"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Header Section with background image and overlay */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-30 "></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            <FaPenFancy className="text-6xl text-white mx-auto mb-6 drop-shadow-lg" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-6"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
          >
            Masterful Blog Writing That Converts
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInUp}
          >
            From catchy headlines to in-depth storytelling — our blogs captivate
            readers and inspire action. Perfectly tailored for your audience and
            brand voice.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeInUp}
          >
            Get Your Blog Strategy
          </motion.a>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {[
          {
            icon: <FaLightbulb />,
            title: "Topic Ideation",
            desc: "We brainstorm trending and SEO-rich topics your audience wants to read.",
          },
          {
            icon: <FaUserEdit />,
            title: "Engaging Writing",
            desc: "Every article is crafted to inform, entertain, and convert — no fluff, just value.",
          },
          {
            icon: <FaFileAlt />,
            title: "Optimized Structure",
            desc: "SEO-friendly formatting, scannable headings, and CTA placement built-in.",
          },
          {
            icon: <FaPenFancy />,
            title: "Consistent Voice",
            desc: "We ensure your brand tone is maintained across all blogs, building trust.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={fadeInUp}
          >
            <div className="text-purple-600 text-4xl mb-4">{item.icon}</div>
            <h4 className="text-xl font-bold mb-2 text-purple-800">
              {item.title}
            </h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="bg-gradient-to-br from-white via-purple-50 to-white py-16 px-6 md:px-12 shadow-xl rounded-3xl max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-8 text-center">
            Blog Writing for Adonomics Technologies
          </h2>
          <h3 className="text-lg leading-relaxed text-purple-600 text-center max-w-3xl mx-auto mb-12">
            Turning Expertise Into Impact
          </h3>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <img
              src="https://images.pexels.com/photos/2882507/pexels-photo-2882507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Blog strategy visual"
              className="rounded-2xl shadow-lg"
            />
            <h5 className="text-lg italic text-purple-600 mb-4">
              In the fast-moving world of digital innovation, staying visible
              isn’t just about having the best tech—it’s about showing you
              understand it better than anyone else. That’s where blog writing
              comes in. At Adonomics Technologies, our edge isn’t just in
              building smart solutions—it’s in how we communicate their value.
              And a well-written blog is one of the most effective tools for
              doing just that.
            </h5>
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                Why Blog Writing Matters for Tech Companies
              </h3>
              <p className="text-purple-600 text-md leading-relaxed mb-2">
                Let’s be honest—technology can be complex. Your audience might
                be decision-makers, developers, or business owners who don’t
                have time to decode jargon. A good blog bridges that gap. It
                turns deep technical know-how into useful, engaging content that
                informs and builds trust.
              </p>
              <p className="text-purple-600 text-md leading-relaxed mb-2">
                For Adonomics, blog writing isn’t just content—it’s a strategic
                move. It helps us:
              </p>

              <ul className="list-disc pl-5 text-purple-600 space-y-1">
                <li>
                  Showcases expertise in adtech, analytics, and automation
                </li>
                <li>Breaks down industry trends for business understanding</li>
                <li>Attracts organic traffic via SEO-rich topics</li>
                <li>Generates leads by solving real problems</li>
                <li>Builds trust and long-term brand recall</li>
              </ul>
            </div>
            <img
              src="https://images.pexels.com/photos/5068302/pexels-photo-5068302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Blog writing"
              className="rounded-2xl shadow-lg mt-6"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                What Makes a Great Tech Blog?
              </h3>
              <ul className="text-purple-600 list-decimal pl-5 space-y-3">
                <li>
                  <strong>Relevance:</strong> Every post addresses real client
                  issues—from ad campaigns to data.
                </li>
                <li>
                  <strong>Depth (Without the Fluff):</strong> Thought leadership
                  content that’s both deep and readable.
                </li>
                <li>
                  <strong>Actionable Insights:</strong> Readers gain tips,
                  strategies, or tools they can apply.
                </li>
              </ul>
            </div>
            <img
              src="https://images.pexels.com/photos/28347996/pexels-photo-28347996/free-photo-of-laptop-empty-tablet-screen-mockup-top-view-office-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Content creation process"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white  text-purple-600"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Our Blog Strategy at Adonomics
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Topic Selection:</strong> Based on real-time trends and
                SEO intent.
              </li>
              <li>
                <strong>Voice:</strong> Authoritative yet approachable—clear,
                confident, human.
              </li>
              <li>
                <strong>Value-Driven:</strong> Blogs naturally connect with our
                tools and services.
              </li>
            </ul>
          </motion.div>

          <p className="text-purple-600 text-md leading-relaxed mt-8 font-semibold italic">
            Blogging isn’t just part of our marketing—it’s how we lead. Whether
            it’s machine learning in ad optimization or how-to guides for ROAS
            improvement, we craft content that informs, solves, and sticks.
            Because in tech, communication is key.
          </p>
        </motion.div>
      </section>
      {/* Call to Action */}
      <section className="mt-24 text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-purple-800 mb-4"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Ready to Blog with Impact?
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6 max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          Let's plan your editorial calendar and create content that drives
          results.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-800 transition"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          Start Blogging Today
        </motion.a>
      </section>
      <div className="py-12"></div>
    </div>
  );
};

export default BlogWriting;
