import React from "react";
import { Helmet } from "react-helmet-async";
import {Link} from "react-router-dom";

const Explore = () => {
  const services = [
    {
      title: "Care & Wellness",
      description:
        "Drive patient engagement with tailored SEO strategies for healthcare professionals and clinics.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/healthcare",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Digital Marketplace",
      description:
        "Boost online sales with ecommerce-focused SEO and digital marketing solutions.",
      image:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/ecommerce",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Home Assistance",
      description:
        "Improve visibility for local businesses offering plumbing, electrical, cleaning and more.",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/homeservices",
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      title: "Money Management",
      description:
        "Attract clients with trust-building SEO and content strategies for finance firms and advisors.",
      image:
        "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/finance",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      title: "Smart Learning",
      description:
        "Grow your educational platform with strategies that rank you high and bring conversions.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/edtech",
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Explore Our Services</title>
        <meta
          name="description"
          content="Discover our comprehensive dental SEO services and content strategy solutions to grow your practice."
        />
        <meta
          name="keywords"
          content="dental SEO, content strategy, dental marketing, SEO services"
        />
        <meta property="og:title" content="Explore Our Dental SEO Services" />
        <meta
          property="og:description"
          content="Professional SEO solutions for dental practices"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adonomicstechnologies/explore"
        />
      </Helmet>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Want to grow your business online?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact us today and let our experts manage the SEO of your website
            to boost visibility, traffic, and conversions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
            >
              <Link to={service.link} className="block">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} SEO Services`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`${service.bg} p-3 rounded-xl mr-4`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${service.color}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-2 0v4a1 1 0 002 0V7zm-1 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                        clipRule="evenodd"
                      />

                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div
                  className={`flex items-center font-medium ${service.color} group-hover:underline`}
                  >
                  <span>Learn More</span>
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
                </div>
              </div>
          </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Explore;
