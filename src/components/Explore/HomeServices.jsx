import React from "react";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const homeServices = [
    {
      title: "Plumbing",
      description:
        "Get discovered locally with optimized SEO strategies tailored for plumbing businesses.",
      image:
        "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/homeservices/plumbing",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Roofing",
      description:
        "Improve your roofing company’s online presence and get more service calls through local SEO.",
      image:
        "https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/homeservices/roofing",
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      title: "Pest-Control",
      description:
        "Reach homeowners needing pest solutions with targeted SEO for pest-control providers.",
      image:
        "https://images.unsplash.com/photo-1652535874463-47bb9bdfbe57?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/homeservices/pest-control",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Landscaping",
      description:
        "Grow your landscaping business by ranking higher on local searches and Google Maps.",
      image:
        "https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/homeservices/landscaping",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Home Services We Help Grow
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get more leads and clients for your local business with our
            specialized SEO strategies tailored for home service professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {homeServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
            >
              <Link to={service.link} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title}`}
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
                    <span>Coming Soon</span>
                    {/* <svg
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
                    </svg> */}
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

export default HomeServices;
