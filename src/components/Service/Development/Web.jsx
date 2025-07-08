import React from "react";
import { Helmet } from "react-helmet-async";

const Web = () => {
  return (
    <div className="font-sans text-gray-800">
      <Helmet>
        <title>
          Web Development Services | Modern, Responsive & Scalable Solutions
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
          content="Web Development Services | Modern, Responsive & Scalable Solutions"
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
        <meta name="robots" content="index, nofollow" />
        <meta name="googlebot" content="index, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            alt="Modern web development with code on screen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Web Development at Adonomics Technologies: More Than Just Code
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            We craft experiences that work just as hard as you do
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Let's Build Something Great
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
            You never get a second chance to make a first impression. And today,
            that first impression often happens on your website. At Adonomics
            Technologies, we know web development is more than putting together
            pages—it's about crafting an experience that works just as hard as
            you do.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              A website isn't just where people find you. It's how they judge
              you. That split-second reaction someone has when they land on your
              homepage? It matters. A lot. That's why our web development team
              goes beyond templates, trends, and tech buzzwords to build
              something that's genuinely useful—and undeniably you.
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think about how most people shop or research these days. They hear
            about a business, they grab their phone, and they Google it. Your
            website is likely the first thing they'll see—and it speaks volumes
            before you ever get the chance to. At Adonomics Technologies, we
            build websites that don't just sit there looking pretty. They do the
            job they were meant to do: connect, inform, and convert.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Comprehensive Development Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Progressive web apps
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Mobile-friendly websites
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  SEO-friendly architecture
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  JAMstack development
                </li>
              </ul>
            </div>

            {/* App Development */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">App Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Cross-platform apps
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Native app development
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Flutter development
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  React Native apps
                </li>
              </ul>
            </div>

            {/* UI/UX Design */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Human-centered design
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Wireframing and prototyping
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Accessibility design
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Figma workflows
                </li>
              </ul>
            </div>

            {/* Full Stack Development */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Full Stack Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Front-end development
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Back-end development
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  RESTful API design
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Serverless applications
                </li>
              </ul>
            </div>

            {/* Cloud & Scalable Architecture */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
                Cloud & Scalable Architecture
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Cloud-native development
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Microservices architecture
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Containerized deployment
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Load balancing
                </li>
              </ul>
            </div>

            {/* Responsive Design */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Design</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Adaptive web design
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Fluid grid layout
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Viewport optimization
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                  Cross-device compatibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* We Listen Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Start with the Heart of Your Business
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Before a single line of code gets written, we talk. Really talk.
              We want to know what your business stands for, who your audience
              is, and what your goals look like—not just today, but two years
              from now.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This isn't a one-size-fits-all service. We don't work from
              pre-made templates or recycled ideas. Everything we do is
              custom—because your business deserves more than the same old
              website everyone else has.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Team collaborating on design process"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Design and Tech Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Clean, Clear, and Built to Perform
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Function always comes first. A pretty site that's hard to use is
              just frustrating. So, we focus on creating clean, intuitive
              layouts that guide visitors exactly where they need to go—without
              making them think twice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our development team builds using modern, powerful frameworks like
              React, Vue.js, Laravel, Node.js, and Django. What does that mean
              for you? Fast load times. Rock-solid security. Scalability. And a
              smooth user experience across every device and screen size.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Modern technology stack with code and devices"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Engine Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Don't Just Build Websites. We Build Engines.
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Every feature on your site should serve a purpose. Whether it's a
            custom contact form, booking system, shopping cart, or blog, we make
            sure everything works seamlessly in the background—so your users
            don't even have to think about it.
          </p>
          <p className="text-xl max-w-4xl mx-auto">
            The goal isn't just to make your site look good. It's to make sure
            it runs like a well-oiled machine. That's the difference between a
            website that works—and one that actually works for you.
          </p>
        </div>
      </section>

      {/* Speed and SEO Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Performance + SEO: A Site That's Fast and Findable
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              If your website takes too long to load, you've already lost the
              sale. If search engines can't crawl your site properly, no one's
              going to find you in the first place.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              That's why we optimize every site we build for speed and
              visibility. From image compression and streamlined code to
              responsive design and SEO-friendly architecture, we think of
              everything—so you don't have to.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We lay a solid foundation that helps your site climb the search
              rankings organically, right from the start.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="SEO optimization with analytics dashboard"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Future Proof Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Future-Ready by Design
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We don't just think about where your business is now. We build for
              where you're headed. Want to add a membership portal down the
              road? Launch a new product line? Run a marketing campaign? No
              problem.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our web development process uses a modular approach, which means
              your site can grow, scale, and evolve as your needs change. You'll
              never have to tear it down and start over.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Future proof technology with growing graphs"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ongoing Support You Can Count On
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The launch of your site isn't the end. It's just the beginning. We
              stick with you after the site goes live, offering maintenance,
              updates, and enhancements whenever you need them. Whether it's
              squashing bugs, adding new features, or just keeping things
              running smoothly, our team is always just a message away.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              And no tech talk. No confusing reports. Just real answers, fast
              fixes, and solid advice from people who care about your success.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Team collaboration in office setting"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Adonomics Technologies?
          </h2>
          <p className="text-xl mb-6">
            We don't build websites for our portfolio. We build them for people.
            Real businesses with real stories, goals, and challenges.
          </p>
          <p className="text-xl mb-8">
            When you work with Adonomics Technologies, you're getting more than
            just a development team. You're getting a partner who listens,
            learns, and builds with purpose.
          </p>
          <p className="text-xl italic">
            We don't just hand you a website. We help you put your best foot
            forward online—and make sure your audience sees it.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something You're Proud Of
          </h2>
          <p className="text-xl mb-6">
            If your current website isn't cutting it—or if you're starting from
            scratch and want to do it right the first time—let's talk.
          </p>
          <p className="text-xl mb-8">
            We'll help you create something that actually moves the needle.
          </p>
          <p className="text-xl mb-8 font-bold">
            No buzzwords. No bloated timelines. Just sharp design, smart code,
            and a site that delivers results.
          </p>
          <p className="text-xl mb-8 italic">
            Adonomics Technologies. Web development done differently.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Web;
