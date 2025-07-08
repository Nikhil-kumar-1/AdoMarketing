import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

function UIUX() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <Helmet>
        <title>UI/UX Design | Adonomics Technologies</title>
        <meta
          name="description"
          content="Adonomics Technologies specializes in UI/UX design, creating intuitive and visually stunning digital experiences that are easy to use and tailored to your users' needs."
        />
        <meta
          name="keywords"
          content="UI/UX design, user experience design, user interface design, design services, digital experience, intuitive interface, visually stunning, easy to use, tailored to users"
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/uiux" />
        <meta
          property="og:title"
          content="UI/UX Design | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Adonomics Technologies specializes in UI/UX design, creating intuitive and visually stunning digital experiences that are easy to use and tailored to your users' needs."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/uiux"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80')",
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
            UX/UI Design: Creating Intuitive and Beautiful Experiences
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Design digital experiences that are easy to use, visually stunning,
            and tailored to your users’ needs — all with Adonomics Technologies.
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
            Get Started
          </motion.a>
        </div>
      </section>

      {/* UX/UI Design Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-indigo-50 to-white text-gray-800">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center text-indigo-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UX/UI Design: Great Design Isn’t Just Pretty—It’s Easy to Use
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Let’s be real. Most people don’t notice good design. But they
                definitely notice when it’s bad. Ever clicked on a website and
                instantly wanted to leave? Maybe it was confusing, too
                cluttered, or just plain slow. That’s where smart UX/UI design
                comes in—and that’s what we do at{" "}
                <span className="font-semibold text-indigo-700">
                  Adonomics Technologies
                </span>
                .
              </p>

              <p>
                We create digital experiences that are smooth, smart, and easy
                to love. Because a clean design isn’t about showing off—it’s
                about helping real people get what they came for, without all
                the extra noise.
              </p>

              <p className="font-semibold text-indigo-700 text-lg">
                So, What’s UX/UI Design Really All About?
              </p>

              <p>
                <span className="font-semibold text-indigo-700">
                  UX (User Experience)
                </span>{" "}
                is how someone feels when they’re using your app or website.{" "}
                <span className="font-semibold text-indigo-700">
                  UI (User Interface)
                </span>{" "}
                is how it looks. Put the two together, and you’ve got the
                perfect combo of function and beauty.
              </p>

              <p>
                At{" "}
                <span className="font-semibold text-indigo-700">Adonomics</span>
                , we focus on both. Because a good-looking site that’s hard to
                use isn’t helping anyone—and a super-functional site that looks
                outdated won’t keep people around.
              </p>
            </motion.div>
            <img
              src="https://images.unsplash.com/photo-1689267166689-795f4f536819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="UX/UI Design"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-6 py-12 items-center justify-center "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6">
              <h2 className="text-3xl font-bold text-indigo-700">
                What We Actually Do for You?
              </h2>
              <p className="text-gray-700">
                Whether you're building a brand-new app, launching your first
                website, or refreshing something that just feels… off—we’re here
                to help you do it right.
              </p>

              <ul className="space-y-5">
                <li>
                  <span className="font-semibold text-indigo-700">
                    📌 Research & Wireframes:
                  </span>{" "}
                  We dig into how your users think. We build rough wireframes to
                  plan the layout, keeping it simple and logical.
                </li>
                <li>
                  <span className="font-semibold text-indigo-700">
                    🎨 Custom UI Design:
                  </span>{" "}
                  We design clean, modern visuals that reflect your brand—no
                  templates or clutter.
                </li>
                <li>
                  <span className="font-semibold text-indigo-700">
                    📱 Mobile-First, Always:
                  </span>{" "}
                  We prioritize mobile responsiveness from the start so your app
                  looks great on all devices.
                </li>
                <li>
                  <span className="font-semibold text-indigo-700">
                    🧪 Interactive Prototypes:
                  </span>{" "}
                  Get to experience the product before we build the final
                  version.
                </li>
                <li>
                  <span className="font-semibold text-indigo-700">
                    🔍 User Testing & Feedback:
                  </span>{" "}
                  Real-world testing ensures intuitive navigation and bug-free
                  experiences.
                </li>
              </ul>
            </motion.div>

            <img
              src="https://images.unsplash.com/photo-1710799885122-428e63eff691?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="App Design Process"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-6 py-12 items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-2xl font-bold text-indigo-700">
                Why Work with Adonomics?
              </p>
              <p>
                Because we don’t just care about making things look good. We
                care about how they feel. We ask a lot of questions. We tweak
                and test. And we don’t hand over anything we wouldn’t use
                ourselves.
              </p>

              <p>
                We know{" "}
                <span className="font-semibold text-indigo-700">
                  design isn’t just art—it’s strategy
                </span>
                . Every button, every scroll, every screen matters. It’s about
                making your users happy so they stick around, trust you, and
                eventually become loyal customers.
              </p>

              <p>
                Plus, we’re a small team. You’ll never be just a project number
                to us. We work closely with you, listen to your ideas, and treat
                your product like it’s our own.
              </p>
            </motion.div>
            <img
              src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="App Design Process"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </motion.div>

          {/* Final Note */}
          <motion.div
            className="bg-indigo-100 p-8 rounded-2xl shadow-lg text-center space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-bold text-indigo-700">
              You Only Get One First Impression
            </p>
            <p>
              When someone lands on your website or opens your app, they make a
              snap decision. Do I trust this? Is this confusing? Do I want to
              keep going? With solid UX/UI design, we help you answer those
              questions the right way—fast.
            </p>

            <p>
              If your current design feels clunky or just doesn’t match your
              brand anymore, it might be time for a change. Or if you’re
              starting from scratch and want to get it right from day one, we’re
              here for that too.
            </p>

            <p className="font-semibold text-indigo-700 text-lg">
              Let’s make something great together. Something clean, intuitive,
              and easy to use—because that’s what your users deserve. Good UX/UI
              design doesn’t just impress people. It keeps them coming back.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default UIUX;
