import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Development = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, performant websites built with React, Vue.js, and other cutting-edge technologies. From simple landing pages to complex web applications.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      items: [
        "Progressive web apps",
        "Mobile-friendly websites",
        "SEO-friendly websites",
        "JAMstack development",
        "Cost-effective development",
      ],
    },
    {
      title: "App Development",
      description:
        "Custom mobile applications tailored to your business needs with native performance and seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      items: [
        "Cross-platform apps",
        "Native app development",
        "Hybrid app development",
        "Flutter development",
        "React Native apps",
      ],
    },
    {
      title: "Responsive Design",
      description:
        "Websites that look and function perfectly on any device, from desktop to smartphone.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      items: [
        "Adaptive web design",
        "Fluid grid layout",
        "Viewport optimization",
        "Cross-device compatibility",
        "UI consistency across devices",
      ],
    },
    {
      title: "Full Stack Development",
      description:
        "End-to-end solutions covering both front-end and back-end development for complete digital products.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      items: [
        "Front-end development",
        "Back-end development",
        "Database architecture",
        "Authentication systems",
        "Payment integrations",
      ],
    },
    {
      title: "Mobile Development",
      description:
        "Specialized solutions for iOS and Android platforms with platform-specific optimizations.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      items: [
        "Android & iOS development",
        "Platform-specific APIs",
        "Touch-friendly interface",
        "App store optimization",
        "Offline functionality",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with your users in mind, following best practices.",
      image:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      items: [
        "Human-centered design",
        "Wireframing and prototyping",
        "Usability testing",
        "Accessibility design",
        "Figma workflows",
      ],
    },
    {
      title: "Cloud & Scalable Architecture",
      description:
        "Future-proof solutions that grow with your business and handle increasing loads effortlessly.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      items: [
        "Cloud-native development",
        "Serverless applications",
        "Microservices architecture",
        "Containerized deployment",
        "Load balancing",
      ],
    },
    {
      title: "API Development",
      description:
        "Robust, secure APIs that power your applications and enable third-party integrations.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      items: [
        "RESTful API design",
        "GraphQL implementation",
        "Authentication systems",
        "Rate limiting",
        "Documentation",
      ],
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      <Helmet>
        <title>
          Development Services | Modern, Responsive & Scalable Solutions
        </title>
        <meta
          name="description"
          content="Explore our Web development services for modern, responsive, and scalable web and app solutions. Contact us to start your project today! by Adonomics Technologies Patna Bihar"
        />
        <meta
          name="keywords"
          content="Web development, App development, Responsive design, Scalable architecture, Cross-platform apps, UI/UX design, Full stack development, Front-end development, Back-end development, Mobile app development, Android & iOS development, Native app development, Hybrid app development, Progressive web apps, Flutter development, React Native apps, Mobile-friendly websites, Adaptive web design, Fluid grid layout, Viewport optimization, Cloud-native development, RESTful API design, Serverless applications, Microservices architecture, Containerized deployment, Cross-device compatibility, Platform-specific APIs, Unified codebase, Human-centered design, Wireframing and prototyping, Usability testing, Accessibility design, Figma workflows, Modular architecture, Load balancing, Time-to-market reduction, Intuitive interface design, SEO-friendly websites, Cost-effective development, Touch-friendly interface, UI consistency across devices, Interaction design, Design systems, JAMstack development"
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/web-development"
        />
        <meta
          property="og:title"
          content="Development Services | Modern, Responsive & Scalable Solutions"
        />
        <meta
          property="og:description"
          content="Explore our development services for modern, responsive, and scalable web and app solutions. Contact us to start your project today!"
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/web-development"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            alt="Development services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-white flex flex-col justify-center items-center h-full text-center px-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Comprehensive Development Solutions by Adonomics Technologies
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            End-to-end development services covering web, mobile, cloud and
            everything in between
          </p>
          <Link to="/contact">
            <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:-translate-y-1">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete suite of development services to bring your
              digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Approach Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unified Development Approach
              </h2>
              <p className="mb-4 text-lg">
                Our methodology combines cutting-edge technologies with proven
                practices to deliver exceptional results across all platforms.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Scalable Architecture</h4>
                    <p className="text-gray-600">
                      Build for today with tomorrow in mind using modular
                      architecture and cloud-native principles
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Cross-Platform Excellence</h4>
                    <p className="text-gray-600">
                      Single codebase solutions with platform-specific
                      optimizations for maximum reach and efficiency
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Design Systems</h4>
                    <p className="text-gray-600">
                      Consistent, accessible interfaces with reusable components
                      for faster development and unified branding
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Our Technology Stack
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        React
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        Vue.js
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        Angular
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        Flutter
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        React Native
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        Node.js
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        Django
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        Laravel
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        Ruby on Rails
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        .NET Core
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Mobile</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        Swift
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        Kotlin
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        Flutter
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        React Native
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Cloud & DevOps
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                        AWS
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                        Azure
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                        Google Cloud
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                        Docker
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                        Kubernetes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver more than just code - we create solutions that drive
              business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reduced Time-to-Market</h3>
              <p className="text-gray-600">
                Our streamlined processes and reusable components accelerate
                development without compromising quality.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Cloud-Native Architecture
              </h3>
              <p className="text-gray-600">
                Scalable solutions designed for the cloud with containerization
                and microservices for future growth.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Cross-Device Compatibility
              </h3>
              <p className="text-gray-600">
                Flawless performance across all devices and screen sizes with
                responsive and adaptive techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you need a web application, mobile app, or complete digital
            transformation, we have the expertise to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="cursor-pointer bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300">
                Strat Your Project
              </button>
            </Link>
            <Link to="/contact">
              <button className="cursor-pointer bg-transparent border-1 border-white hover:bg-blue-700 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development;
