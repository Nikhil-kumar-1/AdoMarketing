import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaLightbulb, FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const fadeInUp = (delay = 0.1) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const AISEO = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title>AI SEO Services | Adonomics Technologies</title>
        <meta
          name="description"
          content="Transform your SEO strategy with AI-powered insights. Smarter content, better keywords, real results. Discover AI SEO with Adonomics Technologies."
        />
        <meta
          name="keywords"
          content="AI SEO, Artificial Intelligence SEO, Smart SEO Tools, SEO Optimization, Content Automation"
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/ai-seo" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Adonomics Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="AI SEO Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Transform your SEO strategy with AI-powered insights. Smarter content, better keywords, real results. Discover AI SEO with Adonomics Technologies."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/images/ai-seo.jpg"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/ai-seo"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center text-white py-20 px-6 text-center min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-80"></div>
        <motion.div
          className="relative max-w-4xl mx-auto z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.1)}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI SEO: Taking Your Search Engine Optimization Further
          </h1>
          <p className="text-lg md:text-xl">
            Smarter, faster, and more effective—AI is transforming SEO by
            turning raw data into strategic insights. Let AI elevate your
            visibility and performance online.
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6 space-y-24 max-w-6xl mx-auto">
        {/* Section 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.2)}
        >
          <img
            src="https://images.pexels.com/photos/8849282/pexels-photo-8849282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="AI SEO Explained"
            className="rounded-lg shadow-lg order-1 md:order-2"
          />
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <FaRobot className="text-purple-600" /> What is AI SEO?
            </h2>
            <p>
              SEO has always been about helping your website get noticed—not
              just by search engines, but by the people actually searching for
              what you offer. But things are changing quickly. AI SEO is shaking
              up how we approach SEO, making it smarter, faster, and more
              effective than ever before.
            </p>
            <p>
              So, what exactly is AI SEO? Simply put, it means using artificial
              intelligence to boost your SEO efforts. Instead of guessing which
              keywords or strategies will work, AI tools analyze huge amounts of
              data to spot patterns, discover opportunities, and help you create
              content that appeals both to search engines and real people.
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
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="AI SEO Benefits"
            className="rounded-lg shadow-lg order-1 md:order-2"
          />
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <FaChartLine className="text-purple-600" /> Why AI SEO Matters
              More Than Ever
            </h2>
            <p>
              The internet keeps growing, and search engines are getting better
              at understanding what users want. Their mission is to deliver the
              most useful, relevant results possible. Because of this, the old
              tricks of SEO just don’t cut it anymore.
            </p>
            <p>
              AI SEO helps you keep up by digging into what your audience really
              needs. It picks up on the intent behind searches, identifies
              trends as they happen, and can even suggest tweaks to your site’s
              structure or content. The result? Better rankings, more traffic,
              and most importantly, more customers.
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
            src="https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="AI Assistant SEO"
            className="rounded-lg shadow-lg order-1 md:order-2"
          />
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <FaLightbulb className="text-purple-600" /> How AI SEO Makes
              Things Easier
            </h2>
            <p>
              Think of AI SEO as a dedicated assistant who’s always on the job,
              analyzing your site and checking out your competitors. It points
              out where your strategy needs work and tells you exactly what to
              improve. Whether that means finding the right keywords, crafting
              new content, checking backlinks, or tracking performance—AI tools
              help make your SEO efforts smoother and more precise.
            </p>
            <p>
              Even better, AI helps you write content that feels natural and
              engaging but still fits perfectly with what search engines want.
              So, you connect with your audience in a genuine way without
              sounding robotic.
            </p>
          </div>
        </motion.div>

        {/* Section 4 - CTA */}
        <motion.div
          className="space-y-4 bg-purple-50 p-8 rounded-lg shadow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.5)}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-purple-700">
            <FaBullhorn className="text-purple-600" /> Is AI SEO Right for You?{" "}
          </h2>
          <p>
            If you want to rise above the noise online, AI SEO can be a real
            game-changer. It saves you time, cuts out guesswork, and lets you
            focus on what truly matters: growing a strong presence that attracts
            the right audience.
          </p>
          <p>
            At Adonomics Technologies, we combine smart AI tools with real human
            insight to build SEO strategies that work. Interested in seeing how
            AI can boost your SEO?
          </p>
          <Link
            to="/contact"
            className="btn btn-primary text-white bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg inline-flex items-center"
          >
            Let’s Talk
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AISEO;
