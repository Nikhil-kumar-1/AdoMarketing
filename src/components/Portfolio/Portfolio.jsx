import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import {
  FaClinicMedical,
  FaChalkboardTeacher,
  FaShoppingBag,
  FaHome,
  FaUtensils,
  FaCar,
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
    // {
    //   category: "E-Commerce",
    //   title: "UrbanCraft Home Decor",
    //   description: "End-to-end ecommerce solution for handmade home furnishings",
    //   results: ["5x revenue growth in 6 months", "1.2M+ monthly visitors", "28% repeat customer rate"],
    //   image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    // },
    // {
    //   category: "Real Estate",
    //   title: "Prestige Developers",
    //   description: "Digital strategy for luxury apartment pre-launch campaign",
    //   results: ["90% unit sold in pre-booking", "1.4M video views", "2,500+ qualified leads"],
    //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    // },
    // {
    //   category: "Restaurants",
    //   title: "The Spice Route",
    //   description: "Social media marketing for fine-dining Indian restaurant chain",
    //   results: ["4.9/5 average rating", "80% table reservation rate", "3x Instagram engagement"],
    //   image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    // },
    {
      category: "Automotive",
      title: "City Mechanics",
      description: "Lead generation campaign for luxury car dealership",
      results: [
        "120 test drives/month",
        "35% conversion rate",
        "1.8M ad impressions",
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
      {/* Hero Section */}
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
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 md:h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-blue-300">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Transforming businesses across industries with measurable results
          </motion.p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Industries We <span className="text-blue-600">Serve</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${category.color} p-6 rounded-xl shadow-sm border border-gray-100 text-center`}
            >
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.count}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portfolio Showcase */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-4"
          >
            Success <span className="text-blue-600">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12"
          >
            Real projects delivering real business impact
          </motion.p>

          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {item.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={item.link}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-blue-600 font-medium"
                    >
                      View Website <FiArrowRight className="ml-2" />
                    </motion.button>
                  </Link>
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
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Let's create your success story together
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
          >
            Get Your Free Consultation
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
