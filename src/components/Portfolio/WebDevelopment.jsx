import { motion } from "framer-motion";
import { FiCheck, FiExternalLink, FiCode, FiLayers } from "react-icons/fi";
import { FaMobileAlt, FaSearch, FaChartLine, FaServer } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { BsShieldLock, BsSpeedometer2 } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const features = [
    {
      icon: <FiCode className="text-blue-500 text-3xl" />,
      title: "Custom Coding",
      description: "Handcrafted code tailored to your specific business needs for optimal performance.",
      color: "bg-blue-50"
    },
    {
      icon: <FaMobileAlt className="text-green-500 text-3xl" />,
      title: "Mobile Responsive",
      description: "Flawless display on all devices with our mobile-first development approach.",
      color: "bg-green-50"
    },
    {
      icon: <TbSeo className="text-blue-500 text-3xl" />,
      title: "SEO Optimized",
      description: "Built-in SEO foundations for better search engine visibility from day one.",
      color: "bg-blue-50"
    },
    {
      icon: <BsSpeedometer2 className="text-green-500 text-3xl" />,
      title: "Lightning Fast",
      description: "Optimized assets and code for blazing fast page load speeds.",
      color: "bg-green-50"
    },
    {
      icon: <BsShieldLock className="text-blue-500 text-3xl" />,
      title: "Secure",
      description: "Enterprise-grade security measures to protect your data and users.",
      color: "bg-blue-50"
    },
    {
      icon: <FaServer className="text-green-500 text-3xl" />,
      title: "Reliable Hosting",
      description: "High-performance hosting solutions with 99.9% uptime guarantee.",
      color: "bg-green-50"
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive development plan.",
      icon: <FiLayers className="text-blue-500" />
    },
    {
      title: "UI/UX Design",
      description: "Our designers create intuitive user interfaces and seamless user experiences that convert visitors into customers.",
      icon: <FiLayers className="text-blue-500" />
    },
    {
      title: "Development",
      description: "Our expert developers build your website using the latest technologies while following coding best practices.",
      icon: <FiCode className="text-blue-500" />
    },
    {
      title: "SEO Implementation",
      description: "We integrate technical SEO elements including schema markup, optimized URLs, and semantic HTML structure.",
      icon: <FaSearch className="text-blue-500" />
    },
    {
      title: "Testing",
      description: "Rigorous testing across devices, browsers, and performance metrics to ensure flawless functionality.",
      icon: <FaChartLine className="text-blue-500" />
    },
    {
      title: "Launch & Maintenance",
      description: "Smooth deployment followed by ongoing support, updates, and performance monitoring.",
      icon: <BsShieldLock className="text-blue-500" />
    }
  ];

  const technologies = [
    { name: "React.js", use: "For dynamic frontend interfaces" },
    { name: "Next.js", use: "For server-side rendering and SEO" },
    { name: "Node.js", use: "For scalable backend services" },
    { name: "MongoDB", use: "For flexible database solutions" },
    { name: "Tailwind CSS", use: "For rapid UI development" },
    { name: "GraphQL", use: "For efficient data fetching" },
    { name: "WordPress", use: "For CMS-based solutions" },
    { name: "Shopify", use: "For e-commerce platforms" }
  ];

  const portfolioExamples = [
    {
      title: "Healthcare Portal",
      description: "Developed a patient management system with appointment scheduling and telemedicine features.",
      features: ["Secure patient portal", "HIPAA compliant", "Integrated payment gateway"],
      link: "https://drjitendramohanjha.com",
      image: "dr.webp"
    },
    {
      title: "E-Learning Platform",
      description: "Built an interactive learning management system with course tracking and certification.",
      features: ["Video streaming", "Progress tracking", "Mobile app integration"],
      link: "https://truedreamsclasses.com",
      image: "truedreams.webp"
    },
    {
      title: "Mechanics Website",
      description: "Created a high-performance online store with inventory management and analytics.",
      features: ["Product configurator", "One-click checkout", "CRM integration"],
      link: "https://citymechanics.in",
      image: "golden.webp"
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Professional Website Development Services | Adonomics Technologies</title>
        <meta name="description" content="We build custom, SEO-optimized websites that drive results. From responsive design to technical SEO implementation, our websites are engineered for performance." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900/80 to-blue-600/80 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="block">Website Development</span>
              <span className="text-green-300">That Drives Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
              We build custom, high-performance websites optimized for search engines and designed to convert visitors into customers.
            </p>
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all"
            >
              Get Your Free Consultation
            </motion.button></Link>
          </motion.div>
        </div>
      </div>

      {/* SEO Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">SEO-First</span> Website Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unlike many developers who treat SEO as an afterthought, we engineer search engine optimization into every website from the ground up. Our development process incorporates:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <span className="text-gray-700">Semantic HTML5 markup for better crawlability</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <span className="text-gray-700">Lightning-fast page speeds (90+ Google PageSpeed scores)</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <span className="text-gray-700">Mobile-first responsive design (Google's preferred approach)</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <span className="text-gray-700">Structured data markup for rich snippets</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <span className="text-gray-700">Optimized URL structures and internal linking</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <span className="text-gray-700">SEO-friendly content management systems</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl border border-blue-100 mt-10 lg:mt-0"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Technical SEO Implementation</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Performance Optimization</h4>
                  <p className="text-gray-700">We implement code splitting, lazy loading, image optimization, and modern caching strategies to ensure your website loads in under 2 seconds.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Security Measures</h4>
                  <p className="text-gray-700">HTTPS encryption, CSP headers, and regular security audits protect your site and improve search rankings (HTTPS is a Google ranking factor).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Indexability Controls</h4>
                  <p className="text-gray-700">Proper robots.txt, meta robots tags, and canonical URLs ensure search engines index the right pages and avoid duplicate content issues.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Analytics Integration</h4>
                  <p className="text-gray-700">We set up Google Search Console, Google Analytics 4, and other tracking tools to monitor performance from launch.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Website <span className="text-blue-600">Development</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven marketing strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`${feature.color} p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow`}
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Development</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-blue-100 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:absolute lg:top-0 lg:h-full lg:w-16 lg:flex lg:items-center lg:justify-center ${index % 2 === 0 ? 'lg:left-1/2 lg:transform lg:-translate-x-1/2' : 'lg:left-1/2 lg:transform lg:-translate-x-1/2'}`}>
                    <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-xl z-10">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'} mb-8 lg:mb-0`}>
                    <h3 className="text-2xl font-bold text-blue-600 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className={`${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:text-right'}`}>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-700 mb-2">Key Deliverables</h4>
                      <ul className="space-y-2 text-gray-700">
                        {index === 0 && (
                          <>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Project roadmap</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>User personas</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Technical specifications</span>
                            </li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Wireframes</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>UI mockups</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Style guide</span>
                            </li>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Functional website</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Admin dashboard</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>API integrations</span>
                            </li>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Schema markup</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Optimized metadata</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>SEO audit report</span>
                            </li>
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Cross-browser testing</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Performance reports</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Security audit</span>
                            </li>
                          </>
                        )}
                        {index === 5 && (
                          <>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Hosting setup</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Training materials</span>
                            </li>
                            <li className="flex items-start">
                              <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span>Ongoing support plan</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Technology</span> Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the best tools for the job to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.use}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Examples */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Website</span> Development Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects delivering real business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioExamples.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    View Live Project <FiExternalLink className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your High-Performance Website?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's create a website that not only looks great but also ranks well and converts visitors.
          </p>
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 cursor-pointer hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all"
          >
            Start Your Project Today
          </motion.button></Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;