import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaCalendarAlt,
  FaPenFancy,
  FaThumbsUp,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const SocialMediaManagement = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Management | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Adonomics Technologies, Noida Delhi, Adonomics, digital marketing agency, website development , digital marketing services in Patna, Patna, digital marketing, SEO, social media marketing, PPC, content marketing, web development"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Welcome to our digital marketing agency. We offer a range of services to help your business grow online."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/smm" />
        <meta
          property="og:title"
          content="Social Media Management | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="We create, curate, and manage your social media presence to build your brand, engage your audience, and drive real business results."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/smm"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-50"
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Social Media Management"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Social Media Management by{" "}
              <span className="text-emerald-600">Adonomics Technologies</span>
            </h1>
            <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
              We create, curate, and manage your social media presence to build
              your brand, engage your audience, and drive real business results.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="/contact"
                className="inline-block bg-emerald-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-emerald-700 transition duration-300"
              >
                Get Started Today
              </a>
              <a
                href="#services"
                className="inline-block bg-transparent py-3 px-8 border border-white rounded-md text-base font-medium text-white hover:bg-white hover:text-gray-900 transition duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Platforms We Specialize In
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                We manage all major social media platforms to maximize your
                online presence
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              {[
                { icon: FaFacebook, name: "Facebook", color: "text-blue-600" },
                {
                  icon: FaInstagram,
                  name: "Instagram",
                  color: "text-pink-600",
                },
                { icon: FaTwitter, name: "Twitter", color: "text-blue-400" },
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
            <div className="lg:grid lg:grid-cols-1 lg:gap-12">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Social Media Marketing by{" "}
                  <span className="text-emerald-600">
                    Adonomics Technologies
                  </span>
                </h2>
                <div className="mt-6 space-y-6 text-lg text-gray-600">
                  <p>
                    In today's fast-paced digital world, your audience isn't
                    just browsing social media—they're living on it. From
                    Instagram stories to LinkedIn posts, your customers are
                    online, scrolling, and engaging with brands they love. If
                    you're not part of that conversation, you're missing out on
                    a massive opportunity. That's where Adonomics Technologies
                    steps in.
                  </p>
                  <p>
                    We don’t just "manage your socials." We design bold,
                    intelligent, and data-backed social media marketing
                    strategies that actually move the needle. Whether you're a
                    startup looking to gain traction or an established brand
                    wanting to scale, our approach ensures your message hits the
                    right audience at the right time—with the right impact.
                  </p>
                </div>
              </div>
              <div className="bg-emerald-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900">
                  Strategy Meets Creativity
                </h3>
                <div className="mt-4 space-y-4 text-gray-600">
                  <p>
                    At Adonomics Technologies, we believe in strategy-first
                    marketing. We start by digging deep into your brand
                    identity, audience behavior, and business goals. Then we
                    craft a custom content plan that aligns with your vision.
                    But we don’t stop there. Our creative team brings each
                    campaign to life with scroll-stopping visuals, magnetic
                    captions, and thumb-stopping videos that make people pause,
                    engage, and take action.
                  </p>
                  <p>
                    We work across all major platforms:{" "}
                    <strong>
                      Instagram, Facebook, LinkedIn, X (Twitter), Pinterest,
                      YouTube, Threads & emerging platforms.
                    </strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>Custom content strategies for each platform</li>
                    <li>Data-driven audience targeting</li>
                    <li>Continuous performance optimization</li>
                    <li>Social media audits and competitor analysis</li>
                    <li>Monthly content calendars and scheduling</li>
                    <li>Graphic and video content creation</li>
                    <li>Monthly analytics reports</li>
                    <li>Community management and DM replies</li>
                    <li>Ad campaigns (when you're ready to scale)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl text-left font-extrabold text-gray-900 sm:text-4xl">
                Real Engagement. Real Growth.
              </h2>
              <p className="mt-4 max-w-full text-xl text-left text-gray-600 mx-auto">
                Social media marketing isn’t just about likes and shares. It’s
                about building trust, driving conversations, and creating a
                loyal community around your brand. We measure success in actual
                growth—not vanity metrics. With Adonomics, you’ll see increased
                follower engagement, meaningful DMs and inquiries, boosted
                traffic to your website, real-time feedback from your audience,
                and a consistent, professional online presence.
              </p>
              <br></br>

              <h1 className="text-xl text-left font-extrabold text-gray-900 sm:text-2xl">
                With Adonomics, you’ll see{" "}
              </h1>
              <p className="mt-4 max-w-full text-xl text-left text-gray-600 mx-auto">
                <ul>
                  <li className="list-disc pl-2">
                    {" "}
                    Increased follower engagement
                  </li>
                  <li className="list-disc pl-2">
                    {" "}
                    Meaningful DMs and inquiries
                  </li>
                  <li className="list-disc pl-2">
                    {" "}
                    Boosted traffic to your website
                  </li>
                  <li className="list-disc pl-2">
                    {" "}
                    Real-time feedback from your audience
                  </li>
                  <li className="list-disc pl-2">
                    {" "}
                    A consistent, professional online presence
                  </li>
                </ul>
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Increased Engagement",
                  description:
                    "Meaningful interactions with your target audience",
                  stat: "200%+",
                },
                {
                  title: "Quality Inquiries",
                  description: "More DMs and messages from potential customers",
                  stat: "3-5x",
                },
                {
                  title: "Website Traffic",
                  description: "Boosted visits to your website or online store",
                  stat: "150%+",
                },
                {
                  title: "Brand Awareness",
                  description: "Expanded reach and professional presence",
                  stat: "300%+",
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

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl  font-extrabold text-gray-900 sm:text-4xl">
                Comprehensive Social Media Services
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                End-to-end solutions tailored to your business goals
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Content Creation",
                    description:
                      "Professional graphics, videos, and copywriting tailored to your brand voice.",
                    icon: FaPenFancy,
                    iconColor: "text-emerald-600 bg-emerald-50",
                  },
                  {
                    title: "Post Scheduling",
                    description:
                      "Strategic scheduling for optimal engagement times across all platforms.",
                    icon: FaCalendarAlt,
                    iconColor: "text-blue-600 bg-blue-50",
                  },
                  {
                    title: "Community Management",
                    description:
                      "Daily monitoring and engagement to build brand loyalty.",
                    icon: FaUsers,
                    iconColor: "text-purple-600 bg-purple-50",
                  },
                  {
                    title: "Paid Advertising",
                    description:
                      "Targeted social media ad campaigns to maximize ROI.",
                    icon: FaBullseye,
                    iconColor: "text-red-600 bg-red-50",
                  },
                  {
                    title: "Analytics & Reporting",
                    description:
                      "Monthly performance reports with actionable insights.",
                    icon: FaChartLine,
                    iconColor: "text-yellow-600 bg-yellow-50",
                  },
                  {
                    title: "Influencer Collaboration",
                    description:
                      "Strategic partnerships to expand your reach and credibility.",
                    icon: FaThumbsUp,
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
                      <p className="mt-2 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Proven 5-Step Process
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                A strategic approach to delivering consistent results
              </p>
            </div>

            <div className="mt-16">
              <div className="lg:flex lg:items-center lg:justify-between gap-12">
                <div className="lg:w-1/2">
                  <div className="space-y-8">
                    {[
                      {
                        number: "01",
                        title: "Discovery & Strategy",
                        description:
                          "We analyze your business, competitors, and audience to create a customized strategy.",
                      },
                      {
                        number: "02",
                        title: "Content Planning",
                        description:
                          "Monthly content calendars aligned with your marketing goals.",
                      },
                      {
                        number: "03",
                        title: "Creative Development",
                        description:
                          "Our team produces engaging, platform-optimized content.",
                      },
                      {
                        number: "04",
                        title: "Execution & Engagement",
                        description: "Daily posting and community interaction.",
                      },
                      {
                        number: "05",
                        title: "Analysis & Optimization",
                        description:
                          "Continuous performance tracking and refinement.",
                      },
                    ].map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 bg-emerald-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-1/2">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <img
                      className="w-full h-auto rounded-lg"
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="Social media team working"
                    />
                    <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-bold"> Why Our Process Works </h4>
                      <p className="mt-2 text-gray-600">
                        Our systematic approach ensures consistency, quality,
                        and measurable results for your social media presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                Why Businesses Trust Adonomics Technologies
              </h2>
              <p className="mt-4 text-left max-w-full text-xl text-gray-600 mx-auto">
                We’re not your average agency. Adonomics Technologies is built
                by real marketers, designers, and analysts who care about
                results. We work with businesses that want more than just
                "posting online." Our clients are looking to make real
                connections with their audience—and drive actual business
                outcomes. We’ve helped fashion brands grow their Instagram by
                over 200% in just 6 months. We’ve driven leads for B2B firms
                through targeted LinkedIn campaigns that resulted in thousands
                of dollars in sales overnight.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-600">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to transform your social media presence?
            </h2>
            <p className="mt-4 max-w-full text-xl text-emerald-100 mx-auto">
              Let us be your voice on social media. Whether you’re starting from
              scratch or tired of inconsistent posting and zero engagement,
              we’ll bring the spark your brand needs. Book a free discovery call
              with the team at Adonomics Technologies today—and let’s make your
              social media unstoppable.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50 transition duration-300"
              >
                Get Your Free Audit
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-700 transition duration-300"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialMediaManagement;
