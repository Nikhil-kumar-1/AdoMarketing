import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Edtech = () => {
  const edtechServices = [
    {
      title: "Educator",
      description:
        "Empower educators to reach students globally with strategic SEO and content marketing solutions tailored for e-learning platforms.",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/edtech/educator",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      title: "Coaching",
      description:
        "Promote coaching institutes with digital strategies focused on visibility, lead generation, and community engagement.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/edtech/coaching",
      color: "text-teal-600",
      bg: "bg-teal-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <Helmet>
        <title>EdTech Services | Adonomics Technologies </title>
        <meta
          name="description"
          content="Explore our EdTech services designed to empower educators and coaching institutes with strategic SEO and digital marketing solutions."
        />
        <meta
          name="keywords"
          content="EdTech, Educator, Coaching, SEO, Digital Marketing, Adonomics Technologies"
        />
        <meta
          property="og:title"
          content="EdTech Services | Adonomics Technologies "
        />
        <meta
          property="og:description"
          content="Explore our EdTech services designed to empower educators and coaching institutes with strategic SEO and digital marketing solutions."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com/edtech" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            EdTech Categories We Support
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From individual educators to large coaching platforms, we help you scale your reach and impact through smart digital strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {edtechServices.map((service, index) => (
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

export default Edtech;
