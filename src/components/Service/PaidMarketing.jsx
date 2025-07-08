import React from "react";
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaRocket,
  FaPenFancy,
  FaChartBar,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const PaidMarketingServices = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Paid Marketing Services | Adonomics Technologies</title>

        <meta
          name="description"
          content="Boost your business growth with expert paid marketing services at Adonomics Technologies. Get targeted ads, maximize ROI, and grow your brand effectively."
        />
        <meta
          name="keywords"
          content="Paid Marketing, PPC, Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, SEM, Paid Advertising, Online Advertising, Performance Marketing, Ad Campaigns, Display Ads, Search Ads, Social Media Ads, Remarketing, Conversion Optimization,Digital Marketing Company, Digital Marketing Services, Adonomics Technologies, Noida Delhi,"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/paid-marketing"
        />

        <meta
          property="og:title"
          content="Paid Marketing Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Boost your business growth with expert paid marketing services at Adonomics Technologies. Get targeted ads, maximize ROI, and grow your brand effectively."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/paid-marketing"
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/logo.webp"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Paid Marketing Services"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Paid Marketing Services by{" "}
            <span className="text-emerald-600">Adonomics Technologies</span>
          </h1>
          <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
            In business, visibility is everything—but visibility without
            strategy is just noise. We deliver laser-focused paid marketing
            strategies that turn your ad budget into measurable results.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-emerald-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-emerald-700 transition duration-300"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#services"
              className="inline-block bg-transparent py-3 px-8 border border-white rounded-md text-base font-medium text-white hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Platforms We Master
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We manage ads across leading platforms to ensure your message
              reaches the right audience.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: FaGoogle, name: "Google Ads", color: "text-green-600" },
              { icon: FaFacebook, name: "Facebook", color: "text-blue-600" },
              { icon: FaInstagram, name: "Instagram", color: "text-pink-600" },
              { icon: FaLinkedin, name: "LinkedIn", color: "text-blue-700" },
              { icon: FaYoutube, name: "YouTube", color: "text-red-600" },
            ].map((platform, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col items-center"
              >
                <div
                  className={`p-3 rounded-full bg-white shadow-md ${platform.color}`}
                >
                  <platform.icon className="h-8 w-8" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Paid Marketing by{" "}
                <span className="text-emerald-600">Adonomics Technologies</span>
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  In business, visibility is everything—but visibility without
                  strategy is just noise. That's why paid marketing isn't just
                  about throwing money at ads. It's about precision. It's about
                  making every dollar count. And that's exactly what we do at
                  Adonomics Technologies.
                </p>
                <p>
                  We help brands reach the right people at the right time using
                  laser-focused paid marketing strategies that actually generate
                  results. No fluff, no wasted budget—just clear, measurable
                  outcomes. Whether you're launching a new offer or scaling up
                  an existing product, we know how to get your message in front
                  of people who are ready to take action.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Marketing strategy meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-emerald-600 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold">
                  Targeted Ads That Drive Real Action
                </h3>
                <div className="mt-4 space-y-4">
                  <p>
                    A boosted post isn't a strategy. At Adonomics, we dig
                    deeper. Before we launch any ad, we get to know your brand
                    inside and out—what you sell, who you're speaking to, and
                    what your goals are. Then, we design a custom campaign
                    that's built for conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Performance Marketing That's Built to Scale
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              The beauty of paid marketing is speed. Within days, you'll start
              seeing data on what's working and where we can improve. We treat
              your ad budget like it's our own—no careless spending, no broad
              targeting, and no cookie-cutter campaigns.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Higher Conversion Rates",
                description:
                  "Optimized ads for better click-through and conversions",
                stat: "2x-5x",
              },
              {
                title: "Strategic Retargeting",
                description: "Re-engage warm audiences for higher ROI",
                stat: "150%+",
              },
              {
                title: "A/B Testing",
                description: "Refined messaging through continuous testing",
                stat: "100%+",
              },
              {
                title: "Funnel Optimization",
                description: "Seamless journey from ad click to sale",
                stat: "200%+",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-3xl font-bold text-emerald-600">
                  {item.stat}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mt-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="lg:w-1/2 w-full text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Targeted Ads That Drive Real Action
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                A boosted post isn’t a strategy. At Adonomics, we dig deeper.
                Before we launch any ad, we get to know your brand inside and
                out—what you sell, who you’re speaking to, and what your goals
                are. Then, we design a custom campaign that’s built for
                conversion.
              </p>
              <p className="mt-4 text-xl text-gray-600">
                Our media buying team is obsessed with results. We research,
                test, and optimize every step of the funnel—from the headline to
                the call to action. We don’t guess; we analyze. That means lower
                costs per click, better engagement, and higher returns.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  We manage ads across:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Google Search & Display Network</li>
                  <li>Meta (Facebook & Instagram)</li>
                  <li>LinkedIn Ads</li>
                  <li>YouTube Pre-Roll</li>
                  <li>Programmatic Display & Retargeting</li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 w-full h-96 lg:h-auto rounded-lg overflow-hidden shadow-md">
              <img
                src="https://media.istockphoto.com/id/469202236/photo/marketing-segmentation.jpg?s=612x612&w=0&k=20&c=Dv6EaRgUUbZrolIJR_A6TpYfXtvaAbPtliXmOGlwlsk="
                alt="Marketing strategy meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Done-for-You Campaigns With a Dedicated Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              When you partner with us, you get more than just ad setup. You get
              a full campaign built around your goals—everything you need to
              launch and grow.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Audience Research",
                  description:
                    "In-depth persona development to target the right customers.",
                  icon: FaUsers,
                  iconColor: "text-emerald-600 bg-emerald-50",
                },
                {
                  title: "Ad Creatives",
                  description:
                    "Banners, carousels, and video snippets designed to convert.",
                  icon: FaPenFancy,
                  iconColor: "text-blue-600 bg-blue-50",
                },
                {
                  title: "Campaign Setup",
                  description:
                    "Strategic setup, testing, and scaling for optimal results.",
                  icon: FaRocket,
                  iconColor: "text-purple-600 bg-purple-50",
                },
                {
                  title: "Conversion Tracking",
                  description:
                    "Pixel integration and tracking for measurable outcomes.",
                  icon: FaBullseye,
                  iconColor: "text-red-600 bg-red-50",
                },
                {
                  title: "Performance Insights",
                  description:
                    "Weekly insights and monthly deep dives into campaign performance.",
                  icon: FaChartBar,
                  iconColor: "text-yellow-600 bg-yellow-50",
                },
                {
                  title: "Funnel Optimization",
                  description: "End-to-end optimization from ad click to sale.",
                  icon: FaChartLine,
                  iconColor: "text-pink-600 bg-pink-50",
                },
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="h-full p-6 border border-gray-200 rounded-lg hover:border-emerald-500 transition duration-300">
                    <div
                      className={`inline-flex items-center justify-center p-3 rounded-lg ${service.iconColor}`}
                    >
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Real Results from Real Campaigns
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We've helped eCommerce brands triple their monthly revenue with
              smart retargeting ads. We've generated B2B leads for under $5 per
              qualified contact. And we've helped local businesses sell out
              product launches in less than 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Ecommerce growth"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">
                Ecommerce Growth
              </h3>
              <p className="mt-2 text-gray-600">
                Tripled monthly revenue for fashion brand through strategic
                retargeting
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="B2B leads"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">
                B2B Lead Generation
              </h3>
              <p className="mt-2 text-gray-600">
                Generated qualified leads for under $5 each through LinkedIn
                campaigns
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Product launch"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">
                Product Launch
              </h3>
              <p className="mt-2 text-gray-600">
                Sold out local business inventory in under 24 hours with
                targeted ads
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Marketing meeting"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Maximize Your Marketing ROI?
          </h2>
          <p className="mt-4 max-w-full text-xl text-emerald-100 mx-auto">
            If you're tired of wasting money on ads that don't convert—or if
            you've never tried paid marketing but know you need a push—this is
            your sign. Adonomics Technologies is here to turn your ad budget
            into a growth engine. Let's talk about what you want to achieve—and
            then let's make it happen.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50 transition duration-300"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-700 transition duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaidMarketingServices;
