import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  const handleDentalClick = () => {
    navigate("/dental");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* SEO Section with React Helmet */}
      <Helmet>
        <title>Explore Our Services | Dental SEO & Content Strategy</title>
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Dental Service Card */}
          <div
            className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-gray-100"
            onClick={handleDentalClick}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dental SEO Services"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Dental SEO</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive SEO and content strategy tailored specifically for
                dental practices to attract more patients.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
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
          </div>

          {/* Medical SEO Card */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Medical SEO"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Medical SEO
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Specialized SEO solutions for medical practices to improve
                online visibility and patient acquisition.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <span>Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Local SEO Card */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Local SEO"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Local SEO</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Boost your local presence and attract nearby customers with our
                targeted local SEO strategies.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
          {/* Apparel SEO Card */}
          <div
            className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
            onClick={() => navigate("/apparel")}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Apparel SEO Services"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a1 1 0 011-1h3l1-2h6l1 2h3a1 1 0 011 1v2H4V6zm0 4h16v10a1 1 0 01-1 1H5a1 1 0 01-1-1V10z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Apparel SEO
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Boost your fashion brand's online visibility with SEO tailored
                for apparel eCommerce success.
              </p>
              <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors">
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
          </div>

          {/*Beauty SEO Card */}
          <div
            className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
            onClick={() => navigate("/beauty")}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=897&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Beauty SEO Services"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6h2V7zm0 8h-2v2h2v-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Beauty SEO</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Elevate your beauty brand's online presence with specialized SEO
                strategies for salons, spas, and beauty products.
              </p>
              <div className="flex items-center text-yellow-600 font-medium group-hover:text-yellow-700 transition-colors">
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
          </div>
          {/* Fitness SEO Card */}
          <div
            className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
            onClick={() => navigate("/fitness")}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fitness SEO Services"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6h2V7zm0 8h-2v2h2v-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Fitness SEO
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Boost your fitness brand's online presence with specialized SEO
                strategies for gyms, fitness centers, and fitness products.
              </p>
              <div className="flex items-center text-yellow-600 font-medium group-hover:text-yellow-700 transition-colors">
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
            
          </div>
          {/* Pet Shop SEO Card */}
          <div
            className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-
300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
            onClick={() => navigate("/petshop")}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1733451629760-d5fc1c818698?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pet Shop SEO Services"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6h2V7zm0 8h-2v2h2v-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Pet Shop SEO
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Boost your pet shop's online presence with specialized SEO
                strategies for pet products and services.
              </p>
              <div className="flex items-center text-yellow-600 font-medium group-hover:text-yellow-700 transition-colors">
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
          </div>

          {/* Home Care SEO Card */}
          <div
            className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-
300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
            onClick={() => navigate("/homegoods")}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1693051896613-44b268a984bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvbWUlMjBnb29kc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Home Care SEO Services"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6h2V7zm0 8h-2v2h2v-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Home Care SEO
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Boost your home care business's online presence with specialized
                SEO strategies for home care products and services.
              </p>
              <div className="flex items-center text-yellow-600 font-medium group-hover:text-yellow-700 transition-colors">
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
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Grow Your Practice?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our dental SEO experts are ready to help you attract more patients.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </button>
          <div className="mt-6 flex items-center justify-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>(+91) 9955669590</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
