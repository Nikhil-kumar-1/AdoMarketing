import { motion } from "framer-motion";
import { FaShopify, FaWordpress, FaMobileAlt, FaShoppingCart, FaSearchDollar, FaChartLine, FaShippingFast } from "react-icons/fa";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { BsCreditCard, BsShieldLock, BsGraphUp } from "react-icons/bs";
import { BiAnalyse, BiCustomize } from "react-icons/bi";
import { Link } from "react-router-dom";

const EcommerceService = () => {
  const solutions = [
    {
      title: "Shopify Store Development",
      icon: <FaShopify className="text-blue-500 text-4xl" />,
      features: [
        "Custom theme development tailored to your brand",
        "Strategic app integrations (reviews, upsells, loyalty)",
        "Checkout optimization for higher conversions",
        "Mobile-first responsive design",
        "SEO-optimized product pages"
      ],
      results: [
        "35-70% increase in conversion rates",
        "50% faster page load speeds",
        "20% higher average order value"
      ]
    },
    {
      title: "WooCommerce Solutions",
      icon: <FaWordpress className="text-blue-700 text-4xl" />,
      features: [
        "Custom plugin development",
        "High-performance hosting setup",
        "Multi-payment gateway integration",
        "Advanced inventory management",
        "Custom checkout flows"
      ],
      results: [
        "40% reduction in cart abandonment",
        "30% improvement in site speed",
        "Scalable infrastructure for growth"
      ]
    }
  ];

  const optimizations = [
    { 
      title: "Product Page Optimization", 
      icon: <FaShoppingCart className="text-blue-500 text-2xl" />,
      details: [
        "A/B testing of layouts, images, and copy",
        "Strategic placement of trust badges",
        "Video demonstrations and 360° product views",
        "AI-powered recommendations"
      ]
    },
    { 
      title: "Mobile-First Design", 
      icon: <FaMobileAlt className="text-blue-500 text-2xl" />,
      details: [
        "95+ Google Mobile Performance score",
        "Thumb-friendly navigation",
        "Accelerated Mobile Pages (AMP)",
        "Progressive Web App (PWA) capabilities"
      ]
    },
    { 
      title: "Search & Discovery", 
      icon: <FaSearchDollar className="text-blue-500 text-2xl" />,
      details: [
        "Advanced faceted search",
        "AI-powered product recommendations",
        "Visual search capabilities",
        "Personalized search results"
      ]
    },
    { 
      title: "Checkout Optimization", 
      icon: <BsCreditCard className="text-blue-500 text-2xl" />,
      details: [
        "One-page checkout flows",
        "Guest checkout options",
        "Multiple payment methods",
        "Exit-intent offers"
      ]
    }
  ];

  const services = [
    {
      title: "Performance Analytics",
      icon: <BiAnalyse className="text-green-500 text-2xl" />,
      description: "Comprehensive tracking of customer journeys and conversion funnels"
    },
    {
      title: "Custom Development",
      icon: <BiCustomize className="text-green-500 text-2xl" />,
      description: "Tailored solutions for unique business requirements"
    },
    {
      title: "Security & Compliance",
      icon: <BsShieldLock className="text-green-500 text-2xl" />,
      description: "PCI compliance, fraud prevention, and data protection"
    },
    {
      title: "Omnichannel Integration",
      icon: <FaShippingFast className="text-green-500 text-2xl" />,
      description: "Seamless connection between online and physical stores"
    }
  ];

  const caseStudies = [
    {
      title: "Fashion Retailer",
      result: "Increased conversions by 65%",
      metrics: [
        "Mobile conversion rate: 4.2%",
        "Average order value: $125",
        "ROI on ad spend: 8:1"
      ]
    },
    {
      title: "Electronics Store",
      result: "Reduced cart abandonment by 45%",
      metrics: [
        "Checkout completion rate: 78%",
        "Customer retention: 35%",
        "Upsell conversion: 22%"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-green-600 py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            E-Commerce Solutions That <span className="text-yellow-300">Drive Revenue</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            End-to-end online store development and optimization to maximize your sales
          </motion.p>
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-xl transition-all"
          >
            Get Your Free E-commerce Audit
          </motion.button></Link>
        </div>
      </div>

      {/* Solutions */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">E-Commerce</span> Platform Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom-built online stores designed to convert visitors into customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Typical Results:</h4>
                <ul className="space-y-2">
                  {solution.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optimizations */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conversion Rate <span className="text-blue-600">Optimizations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven improvements to maximize your store's performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {optimizations.map((optimization, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {optimization.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{optimization.title}</h3>
                <ul className="space-y-2">
                  {optimization.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-green-600">E-Commerce</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, grow, and optimize your online store
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-Commerce <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results we've achieved for online stores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-lg text-blue-600 font-medium mb-6">{study.result}</p>
                <ul className="space-y-3">
                  {study.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-green-600 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your High-Converting Online Store?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's create an e-commerce experience that drives sales and grows your business
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default EcommerceService;