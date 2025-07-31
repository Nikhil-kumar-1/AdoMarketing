import { motion } from "framer-motion";
import { FaPalette, FaBrush, FaVectorSquare, FaPhotoVideo, FaMobileAlt } from "react-icons/fa";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { BsGrid1X2, BsCameraVideo } from "react-icons/bs";
import { MdBrandingWatermark, MdAnimation } from "react-icons/md";
import { Link } from "react-router-dom";

const GraphicDesignService = () => {
  const services = [
    {
      name: "Brand Identity Design",
      icon: <MdBrandingWatermark className="text-blue-500 text-4xl" />,
      features: [
        "Logo design & visual identity systems",
        "Brand style guides (color, typography, imagery)",
        "Business stationery design",
        "Brand collateral templates",
        "Brand asset libraries"
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Digital & Print Design",
      icon: <BsGrid1X2 className="text-indigo-500 text-4xl" />,
      features: [
        "Social media graphics & templates",
        "Presentation design",
        "Brochures & catalogs",
        "Packaging design",
        "Infographics & data visualization"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "UI/UX Design",
      icon: <FaMobileAlt className="text-purple-500 text-4xl" />,
      features: [
        "Website & app interface design",
        "User experience wireframing",
        "Interactive prototypes",
        "Design systems",
        "Mobile-responsive layouts"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Research",
      description: "Understanding your brand, audience and objectives",
      tasks: [
        "Brand audit & competitor analysis",
        "Target audience research",
        "Creative brief development",
        "Mood board creation"
      ],
      icon: <FaPalette className="text-blue-500 text-2xl" />
    },
    {
      step: "2",
      title: "Concept Development",
      description: "Creating initial design directions",
      tasks: [
        "Sketching & ideation",
        "Concept presentations",
        "Typography exploration",
        "Color palette development"
      ],
      icon: <FaBrush className="text-blue-500 text-2xl" />
    },
    {
      step: "3",
      title: "Design Refinement",
      description: "Iterative design improvements",
      tasks: [
        "Client feedback implementation",
        "Multiple design revisions",
        "Accessibility testing",
        "Cross-platform optimization"
      ],
      icon: <FaVectorSquare className="text-blue-500 text-2xl" />
    },
    {
      step: "4",
      title: "Delivery & Support",
      description: "Finalizing and handing off design assets",
      tasks: [
        "File preparation & organization",
        "Style guide documentation",
        "Asset handoff",
        "Post-project support"
      ],
      icon: <FaPhotoVideo className="text-blue-500 text-2xl" />
    }
  ];

  const benefits = [
    {
      title: "Strategic Design",
      description: "Visual solutions that align with business objectives",
      icon: <MdBrandingWatermark className="text-green-500 text-2xl" />
    },
    {
      title: "Brand Consistency",
      description: "Cohesive visual identity across all platforms",
      icon: <BsGrid1X2 className="text-green-500 text-2xl" />
    },
    {
      title: "User-Centered Approach",
      description: "Designs focused on audience needs and behaviors",
      icon: <FaMobileAlt className="text-green-500 text-2xl" />
    }
  ];

  const caseStudies = [
    {
      title: "Tech Startup Rebrand",
      challenge: "Outdated visual identity failing to attract investors",
      solution: "Complete brand redesign including logo, website and pitch materials",
      results: [
        "300% increase in investor meeting conversions",
        "Won 2 industry design awards",
        "Established as market leader in their niche"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "E-commerce Packaging",
      challenge: "Generic packaging hurting repeat purchases",
      solution: "Custom packaging design with premium unboxing experience",
      results: [
        "45% increase in social shares of product",
        "22% higher repeat purchase rate",
        "Featured in design industry publications"
      ],
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-300 py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFkb2JlfGVufDB8fDB8fHww')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Transform Your Brand With <span className="text-yellow-300">Strategic Design</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            Professional graphic design services that elevate your visual identity and customer experience
          </motion.p>
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-xl transition-all"
          >
            Get Your Free Design Consultation
          </motion.button></Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Design</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive design solutions tailored to your brand's needs
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
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
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
              Our <span className="text-blue-600">Design</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to creating impactful visual solutions
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
                  <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
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
              Why <span className="text-blue-600">Professional Design</span> Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The strategic advantages of investing in quality design
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
                className="bg-blue-50 p-8 rounded-xl border border-blue-100"
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
              Design <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of design transformations
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
      <div className="bg-gradient-to-r from-blue-700 to-indigo-600 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Visual Identity?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's create designs that make your brand unforgettable
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignService;