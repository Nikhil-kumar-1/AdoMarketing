import { motion } from "framer-motion";
import { FaPenAlt, FaSearch, FaChartLine, FaHashtag, FaEnvelopeOpenText } from "react-icons/fa";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { BsFileText, BsCameraVideo } from "react-icons/bs";
import { MdOutlineAnalytics, MdContentPaste } from "react-icons/md";
import { Link } from "react-router-dom";

const ContentMarketing = () => {
  const services = [
    {
      name: "Content Strategy",
      icon: <MdOutlineAnalytics className="text-green-500 text-4xl" />,
      features: [
        "Audience research & persona development",
        "Content audit & gap analysis",
        "Editorial calendar planning",
        "Content performance measurement",
        "Omnichannel distribution strategy"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Content Creation",
      icon: <FaPenAlt className="text-teal-500 text-4xl" />,
      features: [
        "SEO-optimized blog articles",
        "Whitepapers & case studies",
        "Email marketing campaigns",
        "Video scripts & storyboards",
        "Social media content"
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Content Optimization",
      icon: <FaSearch className="text-blue-500 text-4xl" />,
      features: [
        "SEO content enhancements",
        "Conversion rate optimization",
        "Content repurposing strategy",
        "A/B testing for content",
        "Performance analytics reporting"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Research & Planning",
      description: "Laying the foundation for effective content",
      tasks: [
        "Audience research",
        "Competitor analysis",
        "Keyword research",
        "Content calendar development"
      ],
      icon: <MdOutlineAnalytics className="text-green-500 text-2xl" />
    },
    {
      step: "2",
      title: "Content Development",
      description: "Creating high-quality, engaging content",
      tasks: [
        "Topic ideation",
        "Draft creation",
        "SEO optimization",
        "Visual content planning"
      ],
      icon: <FaPenAlt className="text-green-500 text-2xl" />
    },
    {
      step: "3",
      title: "Production & Editing",
      description: "Refining and finalizing content assets",
      tasks: [
        "Editorial review",
        "Fact-checking",
        "Design integration",
        "Multimedia production"
      ],
      icon: <BsFileText className="text-green-500 text-2xl" />
    },
    {
      step: "4",
      title: "Distribution & Promotion",
      description: "Getting your content seen by the right audience",
      tasks: [
        "Channel distribution",
        "Social media promotion",
        "Email marketing",
        "Performance tracking"
      ],
      icon: <FaHashtag className="text-green-500 text-2xl" />
    }
  ];

  const benefits = [
    {
      title: "Increased Visibility",
      description: "Higher search rankings and social engagement",
      icon: <FaSearch className="text-teal-500 text-2xl" />
    },
    {
      title: "Lead Generation",
      description: "Content that converts visitors into customers",
      icon: <FaEnvelopeOpenText className="text-teal-500 text-2xl" />
    },
    {
      title: "Brand Authority",
      description: "Establishing thought leadership in your industry",
      icon: <FaChartLine className="text-teal-500 text-2xl" />
    }
  ];

  const caseStudies = [
    {
      title: "B2B Software Company",
      challenge: "Low organic traffic and lead generation",
      solution: "Comprehensive content marketing strategy with SEO focus",
      results: [
        "350% increase in organic traffic",
        "120% more qualified leads",
        "40% reduction in customer acquisition cost"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "E-commerce Brand",
      challenge: "Poor product page conversions",
      solution: "Content optimization and educational blog strategy",
      results: [
        "28% increase in conversion rate",
        "60% longer time-on-site",
        "3x more social shares"
      ],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-teal-600 py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://plus.unsplash.com/premium_photo-1683540450469-bacd12a1843f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudHxlbnwwfHwwfHx8MA%3D%3D')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Content That <span className="text-yellow-300">Engages & Converts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            Strategic content marketing solutions that drive growth and build brand authority
          </motion.p>
          <Link to="/contact">
           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-xl transition-all"
          >
            Get Your Free Content Audit
          </motion.button></Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Content Marketing</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end content solutions tailored to your business goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
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
              Our <span className="text-green-600">Content</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A data-driven approach to creating high-performing content
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
                  <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <FiCheck className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
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
              The <span className="text-green-600">Business Value</span> of Content Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How strategic content drives measurable business results
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
                className="bg-green-50 p-8 rounded-xl border border-green-100"
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
              Content Marketing <span className="text-green-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of content-driven business growth
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
                          <FiCheck className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
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
      <div className="bg-gradient-to-r from-green-700 to-teal-600 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Let's create content that drives real business results
          </p>
    
        </div>
      </div>
    </div>
  );
};

export default ContentMarketing;