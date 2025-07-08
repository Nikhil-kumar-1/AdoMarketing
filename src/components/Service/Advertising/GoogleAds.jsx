import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const GoogleAds = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Google Ads | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Google Ads, PPC Advertising, Digital Marketing, Adonomics Technologies Noida Delhi, Paid Search Marketing, SEM, PPC Campaign Management, Google Ads Optimization, Display Advertising, Google Shopping Ads, YouTube Ads, Performance Marketing, Retargeting, Remarketing, Conversion Rate Optimization, eCommerce PPC Services, Local PPC Services, B2B PPC Marketing, Lead Generation Ads, Mobile Advertising, PPC for SaaS Companies, App Install Campaigns, Digital Advertising, Online Advertising, Internet Marketing Services, Social Media Advertising, Facebook Ads, Instagram Ads, LinkedIn Ads, Programmatic Advertising, Google Analytics Integration, Google Tag Manager, A/B Testing, Keyword Research, Campaign Tracking, ROAS, Ad Performance Reporting, Adonomics Digital Solutions, Adonomics Marketing Experts, Growth Marketing Agency, Full Funnel Marketing, ROI-Driven Campaigns, Custom Marketing Strategy, Scalable Ad Campaigns
"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Maximize your ROI with our expert Google Ads services. Drive targeted traffic and increase conversions with our tailored PPC strategies."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/google-ads"
        />
        <meta
          property="og:title"
          content="Google Ads | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Maximize your ROI with our expert Google Ads services. Drive targeted traffic and increase conversions with our tailored PPC strategies."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/google-ads"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="flex items-center bg-white p-4 rounded-lg shadow-lg mb-8">
                <img
                  src="https://img.freepik.com/premium-vector/google-icon_1273375-1240.jpg?ga=GA1.1.2042548242.1742870541&semt=ais_hybrid&w=740"
                  alt="Google Ads Logo"
                  className="h-16"
                />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                Google Ads
              </span>{" "}
              Mastery
            </h1>

            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Dominate search results and reach customers at the perfect moment
              with precision-targeted campaigns.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                    Start Your Campaign
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <div className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-lg text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300">
                    Get Free Audit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6">
                Google Ads: Getting Found by the Right People at the Right
                Moment
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/281/281769.webp"
                      alt="Google Ads Click Icon"
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">
                    Intent-Based Targeting
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When people need something these days, they almost always head
                  to Google first. Whether they are looking for a product, a
                  local service, or just doing research before making a
                  decision, Google is often the starting point. That is what
                  makes Google Ads such a powerful tool for businesses of all
                  sizes. It allows you to show up right when someone is actively
                  searching for what you offer.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Google Ads runs on a pay-per-click model. You are not spending
                  money just for your ad to appear. You only pay when someone
                  actually clicks on it. This means every dollar you spend is
                  tied to actual interest, not just vague visibility. You are
                  reaching people who are already in the mindset to learn more
                  or even make a purchase.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828884.webp"
                      alt="Location Targeting"
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">
                    Precision Targeting
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The beauty of Google Ads lies in the intent behind the search.
                  When someone types in something like “emergency plumber near
                  me” or “affordable web design,” they are not just browsing.
                  They have a clear need. If your business appears at the top of
                  those search results, you are meeting them at the perfect
                  moment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You also get a high level of control. You can choose who sees
                  your ads based on location, time, device, age, and even search
                  behavior. Want to reach people in Los Angeles using mobile
                  phones between 6 and 10 in the evening? Google Ads makes that
                  possible. You can set your budget, pause your campaigns
                  whenever needed, and fine-tune your approach as you go.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3463/3463640.webp"
                      alt="Analytics and Conversion"
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">
                    Data-Driven Optimization
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  What truly makes Google Ads valuable is the data it provides.
                  You get access to real insights. You can see which search
                  terms triggered your ads, what messages led to the most
                  clicks, and which keywords resulted in conversions. That kind
                  of information allows you to improve your campaigns over time
                  and maximize your return.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At Adonomics Technology, we help businesses use Google Ads
                  effectively by doing more than just launching a campaign. We
                  focus on smart keyword research, writing ad copy that speaks
                  to your audience, and managing the process with constant
                  optimization. It is not about getting traffic just for the
                  sake of it. The goal is to attract the right kind of traffic
                  and turn visitors into paying customers.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3500/3500833.webp"
                      alt="Growth with Ads"
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">
                    Measurable Growth
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With the right strategy, Google Ads can be a game changer. It
                  puts your business in front of the right people at the right
                  time and gives you the tools to grow quickly and efficiently.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-blue-800 font-medium">
                    It's not about getting traffic just for the sake of it. The
                    goal is to attract the right kind of traffic and turn
                    visitors into paying customers.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-900">
              Why Google Ads Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Proven results that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-blue-800 mb-2">91%</h3>
              <p className="text-gray-600">
                of internet users discover brands through search
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-blue-800 mb-2">8x</h3>
              <p className="text-gray-600">
                Higher conversion rates than organic search
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-blue-800 mb-2">200%</h3>
              <p className="text-gray-600">
                Average ROI for Google Ads campaigns
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-white mb-6"
          >
            Ready to Dominate Google Search?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Our certified Google Ads specialists will build campaigns that
            convert.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-lg text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300"
              >
                Get Your Free Strategy Session
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </Link>

            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg shadow-lg text-white bg-transparent hover:bg-white hover:bg-opacity-10 hover:text-black transition-all duration-300"
              >
                Request Free Audit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAds;
