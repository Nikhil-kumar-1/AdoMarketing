import React from "react";
import {Link} from "react-router-dom";

const Ecom = () => {

  const ecommerceServices = [
    {
      title: "Apparels",
      description:
        "Boost your fashion brand's online presence with SEO strategies tailored for apparel businesses.",
      image:
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/ecommerce/apparel",
      color: "text-pink-600",
      bg: "bg-pink-100",
    },
    {
      title: "Beauty",
      description:
        "Grow your beauty brand with digital marketing strategies designed to drive traffic and sales.",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/ecommerce/beauty",
      color: "text-rose-600",
      bg: "bg-rose-100",
    },
    {
      title: "Fitness",
      description:
        "Rank higher and attract fitness enthusiasts with our targeted SEO services for fitness products.",
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/ecommerce/fitness",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      title: "Petshop",
      description:
        "Reach pet owners with our marketing strategies focused on pet care, food, and accessories.",
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=870&auto=format&fit=crop",
      link: "/ecommerce/petshop",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      title: "Homegoods",
      description:
        "Promote your home décor and essentials brand with customized ecommerce SEO solutions.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop",
      link: "/ecommerce/homegoods",
      color: "text-green-600",
      bg: "bg-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ecommerce Niches We Empower
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we help various ecommerce categories thrive online through proven SEO and marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ecommerceServices.map((service, index) => (
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

export default Ecom;
