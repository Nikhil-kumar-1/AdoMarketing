import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaBrain,
  FaEdit,
  FaBullhorn,
  FaQuestion,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const faqs = [
  {
    question: "What types of videos do you create?",
    answer:
      "We create explainer videos, product demos, social media content, testimonial videos, and more based on your goals.",
  },
  {
    question: "Can I provide my own script or voiceover?",
    answer:
      "Absolutely! We can work with your script or voiceover or create one from scratch based on your brief.",
  },
  {
    question: "Do you handle editing and post-production?",
    answer:
      "Yes, our service includes professional editing, sound mixing, and post-production effects.",
  },
  {
    question: "What is the typical turnaround time?",
    answer:
      "Depending on complexity, most video projects are delivered within 7–14 days.",
  },
];

const VideoContent = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">
      <Helmet>
        <title>Video Content Services | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Video Content, Video Marketing, Adonomics Technologies, Digital Marketing, digital marketing agency
digital marketing company
content marketing
digital marketing services"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Discover how Adonomics Technologies uses video content to simplify complex ideas, build trust and drive real engagement. Read more to learn."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/video-content"
        />
        <meta
          property="og:title"
          content="Video Content Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Transform your brand's message with our expert video content services. Engage your audience and boost conversions with high-quality videos."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/video-content"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1649783465020-1e0c6f9ced0e?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-50"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            <FaVideo className="text-6xl text-white mx-auto mb-6 drop-shadow-lg" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-6"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
          >
            Impactful Video Content That Tells Your Story
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInUp}
          >
            From concept to cut — our videos deliver your message with clarity,
            emotion, and intent.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeInUp}
          >
            Start Your Video Project
          </motion.a>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {[
          {
            icon: <FaBrain />,
            title: "Creative Planning",
            desc: "We brainstorm video ideas that match your goals and audience preferences.",
          },
          {
            icon: <FaEdit />,
            title: "Script & Storyboard",
            desc: "Our writers and designers craft compelling scripts and visual guides.",
          },
          {
            icon: <FaVideo />,
            title: "Filming & Animation",
            desc: "High-quality video shoots or animations — customized for every need.",
          },
          {
            icon: <FaBullhorn />,
            title: "Optimized for Reach",
            desc: "Videos are tailored for YouTube, Instagram, or your platform of choice.",
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
            <div className="text-blue-600 text-4xl mb-4">{item.icon}</div>
            <h4 className="text-xl font-bold mb-2 text-blue-800">
              {item.title}
            </h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="mt-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Why Choose Our Video Content Services?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🎬",
              title: "Professional Production",
              desc: "Studio-quality production and editing for polished results.",
            },
            {
              icon: "📊",
              title: "Marketing Focus",
              desc: "Every video is made to boost brand presence and conversions.",
            },
            {
              icon: "🎯",
              title: "Targeted Messaging",
              desc: "Videos tailored to your audience, voice, and platform.",
            },
            {
              icon: "🤝",
              title: "Collaborative Process",
              desc: "We involve you at each step to ensure it’s your vision brought to life.",
            },
            {
              icon: "📈",
              title: "Performance Tracking",
              desc: "We offer insights on how your video is performing across channels.",
            },
            {
              icon: "💡",
              title: "Versatile Formats",
              desc: "Vertical reels, explainer animations, interviews — all under one roof.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeInUp}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-blue-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16 px-6 md:px-12 shadow-xl">
        <div className="max-w-6xl mx-auto ">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-10"
          >
            Video Content: Why It Matters and How Adonomics Technologies Uses It
            to Drive Impact
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <img
              src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Video Marketing"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />

            <div className="text-blue-800 text-lg leading-relaxed">
              <p className="mb-4">
                In today’s digital-first world, attention is currency—and
                nothing captures it like video. Whether it's a product demo,
                explainer, or behind-the-scenes look, video content is one of
                the most powerful tools in Adonomics Technologies’ marketing
                toolkit. Why? Because people don’t just want to read about
                technology—they want to see it in action.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center w-full pt-4"
          >
            <div className="text-blue-800 text-lg leading-relaxed">
              <h3 className="text-2xl font-semibold mb-4">
                Why Video Content Works
              </h3>
              <p className="mb-4">
                Video isn’t just a “nice to have” anymore—it’s essential. Here’s
                why:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Retention is higher:</strong> Viewers remember 95% of
                  a message when they watch it, compared to just 10% when
                  reading it.
                </li>
                <li>
                  <strong>It builds trust faster:</strong> Faces, voices,
                  visuals—all of it creates a stronger human connection with
                  your brand.
                </li>
                <li>
                  <strong>It converts better:</strong> Landing pages with video
                  can increase conversions by up to 80%.
                </li>
                <li>
                  <strong>It dominates social and search:</strong> Algorithms
                  prioritize video, meaning better visibility across platforms.
                </li>
              </ul>
              <p>
                For a tech company like Adonomics, video helps us break down
                complex topics, showcase real results, and demonstrate the power
                of our platforms in a way text simply can’t.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=" Video Marketing"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          <div className="mt-12 space-y-8 text-blue-800 text-lg leading-relaxed">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                Types of Video Content We Create at Adonomics
              </h3>
              <p>
                We don’t do video just to check a box—we use it strategically.
                Here’s what we focus on:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Explainer Videos</strong>: We turn product features
                  and concepts into simple, engaging visuals. Whether we’re
                  showcasing our analytics dashboard or how our ad optimization
                  engine works, explainers make it click.
                </li>
                <li>
                  <strong>Case Study & Testimonial Videos</strong>: Real
                  clients. Real impact. Nothing builds credibility like a
                  2-minute clip of a customer talking about how Adonomics helped
                  them boost ROI or streamline campaign management.
                </li>
                <li>
                  <strong>Thought Leadership</strong>: We use short video
                  segments to share insights on market trends, AI in
                  advertising, data strategy, and more. These are perfect for
                  LinkedIn or YouTube—quick, smart, and scroll-stopping.
                </li>
                <li>
                  <strong>Tutorials & How-Tos</strong>: We support our users
                  with clear walkthroughs of our tools and systems. These videos
                  not only help with onboarding but also reduce support requests
                  by giving users what they need up front.
                </li>
                <li>
                  <strong>Culture & Behind-the-Scenes</strong>: People buy from
                  people. Our team, our story, our vibe—all of that matters. So
                  we show it. Culture videos help humanize our brand and attract
                  top-tier talent, too.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                Video as a Growth Lever
              </h3>
              <p>
                We treat video as a core part of our strategy—not just content.
                Every video is platform-optimized, purpose-driven, and
                analytics-backed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">Conclusion</h3>
              <p>
                Video gives Adonomics the clarity, energy, and visibility to
                stand out in a competitive market. We don’t just tell people
                what we do—we show them. And that’s where video wins.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Let’s Make Your Message Visual
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6 max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          Get in touch to explore video content that connects, educates, and
          converts.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          Request a Video Strategy
        </motion.a>
      </section>

      <div className="py-12"></div>
    </div>
  );
};

export default VideoContent;
