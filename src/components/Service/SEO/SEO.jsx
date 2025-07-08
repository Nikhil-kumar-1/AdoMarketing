import { motion } from "framer-motion";
import { FaSearch, FaRocket, FaChartLine, FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const SeoServicesPage = () => {
  const seoFeatures = [
    {
      icon: <FaSearch className="text-green-700 text-2xl" />,
      text: "They research the exact terms your customers are searching for",
    },
    {
      icon: <FaRocket className="text-green-700 text-2xl" />,
      text: "They fix broken links, clean up messy code, and speed up your site",
    },
    {
      icon: <FaChartLine className="text-green-700 text-2xl" />,
      text: "They write content that actually answers questions people are asking",
    },
    {
      icon: <FaUsers className="text-green-700 text-2xl" />,
      text: "They help build backlinks that show your site is worth trusting",
    },
  ];

  return (
    <>
      <Helmet>
        <title>SEO Services | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="SEO, Search Engine Optimization, Adonomics Technologies, SEO Services, Digital Marketing, Online Visibility"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Discover our SEO services that help improve your website's visibility and ranking on search engines. Get started with Adonomics Technologies today!"
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/seo" />
        <meta
          property="og:title"
          content="SEO Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Discover our SEO services that help improve your website's visibility and ranking on search engines. Get started with Adonomics Technologies today!"
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/seo"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40 z-0" />
          <div className="container mx-auto px-4 py-24 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              Get Top Google Rankings & Grow Your Business!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              We deliver proven SEO strategies to increase traffic, leads, and
              sales.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
            >
              Get a Free SEO Audit
            </motion.button>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="bg-gray-100 py-16 px-4 md:px-10">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                Search Engine Optimisation with Adonomics Technology
              </h2>
              <p className="text-lg leading-relaxed">
                Let’s be honest. Just having a website isn’t cutting it anymore.
                You can spend a fortune on a good-looking design, pay for
                top-quality photos, and write all the right things about your
                product or service. But if no one is finding you online, what’s
                the point? This is where Search Engine Optimisation, or SEO,
                comes in. And if you want it done right without wasting time or
                money, Adonomics Technology is the name to know.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.img
                src="https://images.pexels.com/photos/7119258/pexels-photo-7119258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SEO strategy"
                className="rounded-xl shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  What Is SEO and Why Should You Care?
                </h3>
                <p className="mb-2 text-gray-700">
                  SEO is basically the method of getting your website to show up
                  on search engines when people are looking for something you
                  offer. Imagine someone searching for a service or product you
                  provide. You want to be right there on the first page of
                  Google, not buried somewhere they’ll never scroll to.
                </p>
                <p className="text-gray-700">
                  Adonomics doesn’t rely on tricks or shortcuts. They dig deep
                  into what your audience wants, check out what your competitors
                  are doing, and build a custom plan that actually works.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-green-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Why Is SEO Still a Big Deal?
              </h3>
              <p className="text-gray-700 mb-2">
                Think about how often you search for something online. Whether
                it's a place to eat, a service you need, or just something
                you’re curious about — the first place you go is usually Google.
              </p>
              <p className="text-gray-700">
                If you’re not showing up there, you’re probably missing out on a
                ton of potential business. Adonomics focuses on building a
                strong base that search engines trust and users find helpful.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  What Adonomics Technology Does Differently?
                </h3>
                <ul className="space-y-3 text-gray-800">
                  {seoFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div>{feature.icon}</div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.img
                src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team working on SEO"
                className="rounded-xl shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-white p-6 md:p-10 rounded-xl shadow"
            >
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                It’s Not Just About Rankings, It’s About Results
              </h3>
              <p className="text-gray-700 mb-2">
                Everyone wants to see their website climb to the top of search
                results. But what matters more is what happens after people land
                on your site.
              </p>
              <p className="text-gray-700">
                Adonomics gets you the kind of traffic that converts — more
                calls, more inquiries, more orders. Real people choosing your
                business over competitors.
              </p>
            </motion.div>

            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-green-800 mb-6">
                Conclusion
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                SEO isn’t just a nice extra anymore. It’s something your
                business absolutely needs if you want to stay visible and
                competitive online. With Adonomics Technology, you’re not just
                getting a service. You’re getting a partner who genuinely wants
                your business to win.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SeoServicesPage;
