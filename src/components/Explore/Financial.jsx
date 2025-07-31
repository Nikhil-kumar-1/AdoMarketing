import React from "react";
import { Link } from "react-router-dom";

const Financial = () => {
  const financialServices = [
    {
      title: "Crypto",
      description:
        "Expand your blockchain or crypto project's visibility with data-driven SEO and digital marketing strategies.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/finance/crypto",
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      title: "Fintech",
      description:
        "Drive sign-ups and app usage through strategic digital marketing tailored to fintech startups and platforms.",
      image:
        "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/finance/fintech",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Investment Firms",
      description:
        "Build trust and attract serious investors with premium SEO and digital branding for your investment firm.",
      image:
        "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
      link: "/finance/investment-firms",
      color: "text-green-600",
      bg: "bg-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Financial Categories We Support
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our marketing solutions are crafted to help financial services grow visibility, leads, and customer trust online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {financialServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
            >
              <Link to={service.link} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
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
                    <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
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

export default Financial;