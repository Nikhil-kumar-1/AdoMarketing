import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const ServicesPage = () => {
  const services = [
    {
      category: "Social Media Marketing",
      link: "/smm",
      icon: "📱",
      services: [
        { name: "Facebook Marketing", link: "/fb" },
        { name: "Instagram Marketing", link: "/insta" },
        { name: "LinkedIn Marketing", link: "/linkedin" },
        { name: "Twitter Marketing", link: "/twitter" },
        { name: "Social Media Management", link: "/social-media-management" },
        { name: "Influencer Marketing", link: "/influencer-marketing" },
      ],
    },
    {
      category: "Search Engine Optimization",
      link: "/seo",
      icon: "🔍",
      services: [
        { name: "On-Page SEO", link: "/onpage" },
        { name: "Off-Page SEO", link: "/offpage" },
        { name: "Technical SEO", link: "/technical" },
        { name: "SEO Audits", link: "/seo-audits" },
      ],
    },
    {
      category: "PPC Advertising",
      link: "/ppc",
      icon: "💰",
      services: [
        { name: "Google Ads", link: "/google-ads" },
        { name: "Meta Ads (Facebook/Instagram)", link: "/meta-ads" },
        { name: "Display Advertising", link: "/display" },
      ],
    },
    {
      category: "Content Marketing",
      link: "/content",
      icon: "✍️",
      services: [
        { name: "Blog Writing", link: "/blog-writing" },
        { name: "Video Content", link: "/video-content" },
        { name: "Infographics", link: "/infographics" },
      ],
    },
    {
      category: "Analytics & Reporting",
      link: "/analytics",
      icon: "📊",
      services: [
        { name: "Google Analytics", link: "/google-analytics" },
        { name: "Conversion Tracking", link: "/conversion-tracking" },
        { name: "ROI Analysis", link: "/roi-analysis" },
      ],
    },
    {
      category: "Development",
      link: "/development",
      icon: "💻",
      services: [
        { name: "UI/UX Design", link: "/uiux" },
        { name: "App Development", link: "/app-development" },
      ],
    },
    {
      category: "Other Services",
      link: "/other-services",
      icon: "✨",
      services: [
        { name: "Branding & Identity", link: "/branding" },
        { name: "Email Marketing", link: "/email" },
        { name: "Paid Marketing", link: "/paid-marketing" },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Services | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Adonomics Technologies, digital marketing services, SEO, SMM, PPC, content marketing, analytics, web development"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Explore our comprehensive digital marketing services designed to elevate your brand's online presence and drive results."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/services"
        />
        <meta
          property="og:title"
          content="Adonomics Technologies - Digital Marketing Services"
        />
        <meta
          property="og:description"
          content="Explore our comprehensive digital marketing services designed to elevate your brand's online presence and drive results."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/services"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Digital Marketing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive solutions to grow your brand online. We combine
              strategy, creativity, and technology to deliver exceptional
              results.
            </p>
            <Link to="/contact">
              <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Service Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of digital marketing services to help your
            business thrive in the online world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.services.map((service, sIndex) => (
                    <li key={sIndex}>
                      <Link
                        to={service.link}
                        className="flex items-center py-2 px-3 rounded-lg hover:bg-emerald-50 group transition"
                      >
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 group-hover:text-emerald-600 transition">
                          {service.name}
                        </span>
                        <svg
                          className="w-4 h-4 ml-auto text-gray-400 group-hover:text-emerald-500 transition"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <Link
                  to={category.link}
                  className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center"
                >
                  View all {category.category} services
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Our team of experts is ready to help you achieve your business goals
            through strategic digital marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                Get a Free Consultation
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
