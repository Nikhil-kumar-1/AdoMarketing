import { motion } from "framer-motion";
import { FiCheck,  FiSearch,   FiLayers, FiMonitor, FiGlobe } from "react-icons/fi";
import { FaMobileAlt,  FaPenNib, FaLink, FaChartLine } from "react-icons/fa";
import { BsShieldLock, BsSpeedometer2,  } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Searchengine = () => {
  const seoProcess = [
    {
      step: "1",
      title: "Technical SEO Audit",
      description: "We analyze your website's infrastructure, speed, mobile-friendliness, and indexability to identify technical barriers.",
      icon: <FiMonitor className="text-blue-500 text-2xl" />,
      tasks: [
        "Crawlability analysis",
        "Site speed evaluation",
        "Mobile responsiveness check",
        "Structured data validation"
      ]
    },
    {
      step: "2",
      title: "Keyword Research",
      description: "Identifying high-value keywords with optimal search volume and competition levels for your industry.",
      icon: <FiSearch className="text-blue-500 text-2xl" />,
      tasks: [
        "Competitor keyword analysis",
        "Search intent mapping",
        "Long-tail keyword identification",
        "Local SEO keywords (if applicable)"
      ]
    },
    {
      step: "3",
      title: "On-Page Optimization",
      description: "Optimizing every page element for both users and search engines.",
      icon: <FiLayers className="text-blue-500 text-2xl" />,
      tasks: [
        "Title tag & meta description optimization",
        "Header tag structure",
        "Content optimization with semantic keywords",
        "Image alt text optimization"
      ]
    },
    {
      step: "4",
      title: "Content Strategy",
      description: "Developing authoritative content that ranks and converts.",
      icon: <FaPenNib className="text-blue-500 text-2xl" />,
      tasks: [
        "Content gap analysis",
        "Blog calendar creation",
        "SEO-optimized copywriting",
        "Content refresh for outdated pages"
      ]
    },
    {
      step: "5",
      title: "Off-Page SEO",
      description: "Building your site's authority through quality backlinks.",
      icon: <FiGlobe className="text-blue-500 text-2xl" />,
      tasks: [
        "Guest posting outreach",
        "Broken link building",
        "Local citations (for local businesses)",
        "Brand mention acquisition"
      ]
    },
    {
      step: "6",
      title: "Monitoring & Reporting",
      description: "Tracking performance and adjusting strategies monthly.",
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
      tasks: [
        "Rank tracking for 100+ keywords",
        "Google Analytics & Search Console analysis",
        "Monthly performance reports",
        "Algorithm update adjustments"
      ]
    }
  ];

  const seoTools = [
    { name: "Ahrefs", purpose: "Backlink analysis & competitor research" },
    { name: "SEMrush", purpose: "Keyword tracking & site audits" },
    { name: "Google Search Console", purpose: "Index coverage & performance data" },
    { name: "Screaming Frog", purpose: "Technical SEO crawler" },
    { name: "Moz Pro", purpose: "Domain authority tracking" },
    { name: "Google Analytics 4", purpose: "Traffic behavior analysis" },
    { name: "SurferSEO", purpose: "Content optimization" },
    { name: "BrightLocal", purpose: "Local SEO management" }
  ];

  const results = [
    { metric: "300%+", description: "Increase in organic traffic for healthcare clients" },
    { metric: "25-50", description: "Average keyword rankings improved per month" },
    { metric: "85%", description: "Clients achieve first-page rankings within 6 months" },
    { metric: "40%", description: "Reduction in bounce rate through UX improvements" }
  ];

  const caseStudies = [
    {
      title: "Healthcare Clinic",
      challenge: "Ranking for competitive medical keywords",
      solution: "Technical SEO overhaul + content hub strategy",
      results: [
        "1st page for 22 high-value keywords",
        "400% more appointment requests",
        "Domain Authority increased from 18 to 42"
      ],
      link: "https://drjitendramohanjha.com"
    },
    {
      title: "E-Learning Platform",
      challenge: "Low organic visibility for courses",
      solution: "Keyword clustering + video SEO optimization",
      results: [
        "Top 3 rankings for 15+ course keywords",
        "2.5x increase in course enrollments",
        "Featured snippets for 8 key queries"
      ],
      link: "https://truedreamsclasses.com"
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Professional SEO Services | Adonomics Technologies</title>
        <meta name="description" content="Data-driven SEO strategies that increase organic traffic and conversions. Technical audits, keyword research, and content optimization tailored to your business." />
        <meta name="keywords" content="SEO services, search engine optimization, organic traffic growth" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden py-32 px-4 text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1674027001834-719c347d1eca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VvfGVufDB8fDB8fHww')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="block">SEO Services That</span>
            <span className="text-green-300">Drive Real Traffic</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 mb-10"
          >
            Data-driven strategies to increase your search visibility, organic traffic, and conversions
          </motion.p>
          <Link  to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all"
          >
            Get Your Free SEO Audit
          </motion.button></Link>
        </div>
      </div>

      {/* SEO Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">6-Step</span> SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to sustainable search engine rankings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.tasks.map((task, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical SEO Deep Dive */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Technical SEO</span> Optimization
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We fix the foundational elements that search engines use to crawl, index, and rank your website:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BsSpeedometer2 className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Page Speed Optimization</h4>
                    <p className="text-gray-600">Implement lazy loading, image compression, code minification, and caching to achieve 90+ Google PageSpeed scores.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMobileAlt className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Mobile-First Indexing</h4>
                    <p className="text-gray-600">Ensure perfect responsiveness across all devices with accelerated mobile pages (AMP) where beneficial.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BsShieldLock className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Security Enhancements</h4>
                    <p className="text-gray-600">HTTPS implementation, CSP headers, and vulnerability patches to meet Google's security standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaLink className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Internal Linking</h4>
                    <p className="text-gray-600">Strategic anchor text distribution and silo structure to improve crawl efficiency and page authority.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Technical SEO Checklist</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>XML Sitemap:</strong> Properly formatted and submitted to search engines</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Robots.txt:</strong> Correctly configured to control crawling</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Canonical Tags:</strong> Implemented to prevent duplicate content</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Structured Data:</strong> Schema markup for rich snippets</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>URL Structure:</strong> Clean, keyword-optimized URLs</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Index Coverage:</strong> Monitoring via Google Search Console</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Core Web Vitals:</strong> Optimized LCP, FID, and CLS scores</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content & Off-Page SEO */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Content & <span className="text-blue-600">Off-Page</span> SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating valuable content and building authority signals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Content SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <FaPenNib className="text-blue-500 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Content SEO Strategy</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Keyword Mapping</h4>
                    <p className="text-gray-600">Strategic placement of primary and secondary keywords throughout content</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Content Clusters</h4>
                    <p className="text-gray-600">Building topic clusters around pillar content for topical authority</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Semantic SEO</h4>
                    <p className="text-gray-600">Incorporating related terms and entities for comprehensive coverage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Content Refresh</h4>
                    <p className="text-gray-600">Regularly updating existing content to maintain freshness signals</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Off-Page SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-xl border border-green-100"
            >
              <div className="flex items-center mb-6">
                <FiGlobe className="text-green-500 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Off-Page SEO Strategy</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Backlinks</h4>
                    <p className="text-gray-600">Earning links from authoritative sites in your industry</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Guest Posting</h4>
                    <p className="text-gray-600">Publishing expert articles on reputable industry sites</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Citations</h4>
                    <p className="text-gray-600">Consistent NAP (Name, Address, Phone) across directories</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Brand Mentions</h4>
                    <p className="text-gray-600">Converting unlinked brand mentions into backlinks</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tools We Use */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Professional</span> SEO Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade tools we use to deliver exceptional results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {seoTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.purpose}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SEO <span className="text-blue-600">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects delivering measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Results Achieved:</h4>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  View Live Project <FiExternalLink className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's audit your website and create a customized SEO strategy
          </p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Searchengine;