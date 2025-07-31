import { motion } from "framer-motion";
import { FiArrowRight, FiCheck, FiExternalLink } from "react-icons/fi";
import {
  FaClinicMedical,
  FaChalkboardTeacher,
  FaShoppingBag,
  FaHome,
  FaUtensils,
  FaCar,
  FaGlobe,
  FaChartLine,
  FaMobileAlt,
  FaSearch,
  FaAd,
  FaPenNib
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  const categories = [
    {
      name: "Healthcare",
      icon: <FaClinicMedical className="text-blue-500 text-3xl" />,
      count: "12+ Projects",
      color: "bg-blue-50",
    },
    {
      name: "Education",
      icon: <FaChalkboardTeacher className="text-purple-500 text-3xl" />,
      count: "8+ Projects",
      color: "bg-purple-50",
    },
    {
      name: "E-Commerce",
      icon: <FaShoppingBag className="text-green-500 text-3xl" />,
      count: "15+ Projects",
      color: "bg-green-50",
    },
    {
      name: "Real Estate",
      icon: <FaHome className="text-orange-500 text-3xl" />,
      count: "7+ Projects",
      color: "bg-orange-50",
    },
    {
      name: "Restaurants",
      icon: <FaUtensils className="text-red-500 text-3xl" />,
      count: "9+ Projects",
      color: "bg-red-50",
    },
    {
      name: "Automotive",
      icon: <FaCar className="text-indigo-500 text-3xl" />,
      count: "5+ Projects",
      color: "bg-indigo-50",
    },
  ];

  const services = [
    {
      name: "Website Development",
      icon: <FaGlobe />,
      color: "text-blue-500",
      slug: "portfolio/webdevelopment",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Custom website solutions tailored to your business needs.",
    },
    {
      name: "SEO",
      icon: <FaSearch />,
      color: "text-green-500",
      slug: "portfolio/searchengine",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Improve your search rankings and organic traffic.",
    },
    {
      name: "PPC",
      icon: <FaAd />,
      color: "text-red-500",
      slug: "portfolio/pageperclick",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Targeted advertising campaigns for maximum ROI.",
    },
    {
      name: "Social Media Marketing",
      icon: <FaMobileAlt />,
      color: "text-purple-500",
      slug: "portfolio/socialmedia",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Engage your audience across social platforms.",
    },
    {
      name: "E-commerce",
      icon: <FaShoppingBag />,
      color: "text-amber-500",
      slug: "portfolio/ecommerceservice",
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Boost your online store performance and sales.",
    },
    {
      name: "Analytics",
      icon: <FaChartLine />,
      color: "text-indigo-500",
      slug: "portfolio/analyticsservice",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Data-driven insights to optimize your digital strategy.",
    },
    {
    name: "Graphic Designing",
    icon: <FaPenNib />,
    color: "text-pink-500",
    slug: "portfolio/graphicdesignservice",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Create eye-catching visuals for your brand identity.",
  },
  {
    name: "Content Marketing",
    icon: <FaPenNib />,
    color: "text-yellow-600",
    slug: "portfolio/contentmarketing",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Enhance existing content to rank higher and provide more value to users.",
  },
  ];

  const portfolioItems = [
    {
      category: "Healthcare",
      title: "Dr. Jitendra Mohan Jha",
      description:
        "Complete digital marketing solution for a leading heart specialist.",
      results: [
        "300% increase in appointments",
        "25% reduction in CAC",
        "Top 3 rankings for 15+ keywords",
      ],
      image: "dr.webp",
      link: "https://drjitendramohanjha.com",
    },
    {
      category: "Education",
      title: "True Dreams Classes",
      description:
        "Handling consultations and admissions for a leading educational institute.",
      results: [
        "2.5x increase in enquiries",
        "40% lower cost per lead",
        "200+ student admissions",
      ],
      image: "truedreams.webp",
      link: "https://truedreamsclasses.com",
    },
    {
      category: "Automotive",
      title: "City Mechanics",
      description: "Lead generation campaign for luxury car dealership",
      results: [
        "120 test drives/month",
        "35% conversion rate",
        "1k ad impressions",
      ],
      image: "cityM.webp",
      link: "https://citymechanics.in",
    },
    {
      category: "Events",
      title: "Golden Storm",
      description: "Digital strategy for a leading event management company",
      results: [
        "50% increase in event bookings",
        "30% reduction in CAC",
        "Top 3 rankings for 10+ keywords",
      ],
      image: "golden.webp",
      link: "https://goldenstorm.in/",
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Portfolio | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Portfolio, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Transforming businesses across industries with measurable results"
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/portfolio"
        />
        <meta
          property="og:title"
          content="Portfolio | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Transforming businesses across industries with measurable results"
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/portfolio"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <div className="relative bg-gray-900  flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Digital marketing"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-1200/80 to-blue-600/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            Our <span className="text-blue-300">Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10"
          >
            Transforming businesses across industries with measurable results.
            Driving innovation, efficiency, and growth through data-driven strategies and smart solutions
          </motion.p>
<Link to="/services">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block cursor-pointer bg-white text-blue-700 font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Explore Our Work
          </motion.div></Link>
        </div>
      </div>

      {/* Services We Offer with Floating Icons */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services We <span className="text-blue-600">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link to={`/${service.slug}`} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className={`text-4xl mb-4 ${service.color}`}
                  >
                    {service.icon}
                  </motion.div>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:scale-105 transition duration-300"
                  />

                  <h3 className="text-lg font-medium text-gray-800 text-center">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We <span className="text-blue-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results across multiple sectors
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${category.color} p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow`}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="flex justify-center mb-6"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Showcase */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects delivering real business impact
            </p>
          </motion.div>

          <div className="space-y-20">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {item.results.map((result, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                        <span className="text-gray-700 text-lg">{result}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-blue-600 font-bold text-lg"
                  >
                    Visit Website <FiExternalLink className="ml-3" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-10"
          >
            Let's create your success story together
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-10 py-5 border border-transparent text-xl font-bold rounded-lg shadow-xl text-blue-700 bg-white hover:bg-blue-50 transition-colors"
          >
            Get Your Free Consultation
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
