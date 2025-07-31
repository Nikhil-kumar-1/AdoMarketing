import { motion } from "framer-motion";
import { FaGoogle, FaChartBar, FaDatabase, FaSearchDollar, FaUserShield } from "react-icons/fa";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { BiAnalyse, BiData } from "react-icons/bi";
import { BsSpeedometer2, BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const AnalyticsService = () => {
  const tools = [
    {
      name: "Google Analytics 4",
      icon: <FaGoogle className="text-blue-500 text-4xl" />,
      features: [
        "Advanced event tracking setup",
        "Cross-device user journey mapping",
        "Predictive analytics and AI insights",
        "Custom funnel visualization",
        "Enhanced measurement with GTM integration"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Custom Business Intelligence",
      icon: <BiData className="text-indigo-500 text-4xl" />,
      features: [
        "Executive dashboards with real-time data",
        "Automated reporting and alerts",
        "Data warehouse integration",
        "Custom KPI scorecards",
        "ROI attribution modeling"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Heatmap & Session Recording",
      icon: <FaUserShield className="text-purple-500 text-4xl" />,
      features: [
        "Visual user behavior analysis",
        "Click/scroll/tap heatmaps",
        "Session replay technology",
        "Conversion funnel visualization",
        "UX issue identification"
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Data Audit & Strategy",
      description: "Comprehensive review of your current data infrastructure and tracking",
      tasks: [
        "Implementation review",
        "Data quality assessment",
        "KPI identification",
        "Tracking plan development"
      ],
      icon: <BiAnalyse className="text-blue-500 text-2xl" />
    },
    {
      step: "2",
      title: "Implementation",
      description: "Precise setup of tracking and measurement systems",
      tasks: [
        "GA4/GTM configuration",
        "Custom event tracking",
        "Conversion goal setup",
        "Data layer implementation"
      ],
      icon: <BsSpeedometer2 className="text-blue-500 text-2xl" />
    },
    {
      step: "3",
      title: "Dashboard Development",
      description: "Creation of actionable reporting interfaces",
      tasks: [
        "Executive dashboards",
        "Departmental views",
        "Automated reporting",
        "Real-time alerts"
      ],
      icon: <FaChartBar className="text-blue-500 text-2xl" />
    },
    {
      step: "4",
      title: "Ongoing Optimization",
      description: "Continuous improvement of your analytics practice",
      tasks: [
        "Monthly insights reports",
        "A/B test analysis",
        "Anomaly detection",
        "Strategic recommendations"
      ],
      icon: <BsGraphUp className="text-blue-500 text-2xl" />
    }
  ];

  const benefits = [
    {
      title: "Actionable Insights",
      description: "Move beyond vanity metrics to data that drives decisions",
      icon: <FaSearchDollar className="text-green-500 text-2xl" />
    },
    {
      title: "Cross-Channel Visibility",
      description: "Unified view of customer journeys across all touchpoints",
      icon: <FaChartBar className="text-green-500 text-2xl" />
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting of customer behavior and trends",
      icon: <BiAnalyse className="text-green-500 text-2xl" />
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Retailer",
      challenge: "Lacked visibility into customer journeys",
      solution: "Implemented GA4 with enhanced ecommerce tracking",
      results: [
        "Identified $120K in missed revenue opportunities",
        "Reduced cart abandonment by 28%",
        "Optimized ad spend with better attribution"
      ],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "SaaS Company",
      challenge: "No clear understanding of feature adoption",
      solution: "Custom analytics implementation with Mixpanel",
      results: [
        "40% increase in feature engagement",
        "Identified key onboarding drop-off points",
        "Improved retention by 22%"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-blue-400 py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5hbHl0aWNzfGVufDB8fDB8fHww')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Advanced Analytics That <span className="text-green-300">Power Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            Transform raw data into strategic business intelligence with our comprehensive analytics solutions
          </motion.p>
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-400 cursor-pointer hover:bg-green-500 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-xl transition-all"
          >
            Get Your Free Analytics Audit
          </motion.button></Link>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-indigo-600">Analytics</span> Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge tools to measure, analyze, and optimize your digital performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-50 p-3 rounded-full mr-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                </div>
                <ul className="space-y-3">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-indigo-600">Data-Driven</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to implementing actionable analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-start text-sm">
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

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-indigo-600">Business Value</span> of Advanced Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our analytics services transform your decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-indigo-50 p-8 rounded-xl border border-indigo-100"
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Analytics <span className="text-indigo-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of data-driven transformations
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
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Our Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-600 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock the Power of Your Data?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Transform your business with actionable insights and data-driven decision making
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default AnalyticsService;