import {
  FaSearch,
  FaChartLine,
  FaHandshake,
  FaBullseye,
  FaUsers,
  FaMoneyBillWave,
  FaHashtag,
} from "react-icons/fa";
import { IoMdRibbon } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const InfluencerMarketing = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Influencer Marketing Services | Adonomics Technologies</title>

        <meta
          name="description"
          content="Boost your brand’s reach and credibility with expert Influencer Marketing Services from Adonomics Technologies. Connect with top influencers to grow your audience."
        />
        <meta
          name="keywords"
          content="Influencer Marketing, Social Media Marketing, Brand Promotion, Adonomics Technologies Noida Delhi"
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/influencer-marketing"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Influencer Marketing Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Boost your brand’s reach and credibility with expert Influencer Marketing Services from Adonomics Technologies. Connect with top influencers to grow your audience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/influencer-marketing"
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.jpg"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gray-900 opacity-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://plus.unsplash.com/premium_photo-1665203450678-f225f576b509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5mbHVlbmNlciUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Influencer Marketing"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Power Your Brand with{" "}
            <span className="text-amber-400">Influencer Marketing</span>
          </h1>
          <p className="mt-6 text-xl text-amber-100 max-w-3xl mx-auto">
            Connect with the right influencers to authentically promote your
            brand and drive measurable results.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-amber-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-amber-700 transition duration-300"
            >
              Launch Your Campaign
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-amber-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "89%", label: "ROI from influencer marketing" },
              { value: "6x", label: "Higher engagement rates" },
              { value: "71%", label: "Purchase decisions influenced" },
              { value: "3x", label: "Faster brand awareness growth" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-amber-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Strategic Influencer Marketing Approach
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We don't just match brands with influencers - we create meaningful
              partnerships that deliver results
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FaSearch,
                title: "Influencer Discovery",
                description:
                  "We identify the perfect influencers for your brand using our proprietary vetting process analyzing engagement, audience quality, and brand alignment.",
                color: "text-amber-600",
              },
              {
                icon: FaHandshake,
                title: "Authentic Partnerships",
                description:
                  "We facilitate genuine relationships between brands and influencers to create organic content that resonates with target audiences.",
                color: "text-blue-600",
              },
              {
                icon: FaBullseye,
                title: "Campaign Strategy",
                description:
                  "Customized campaigns designed to meet specific objectives from awareness to conversions, with clear KPIs and benchmarks.",
                color: "text-red-600",
              },
              {
                icon: FaUsers,
                title: "Audience Analysis",
                description:
                  "Deep dive into influencer audiences to ensure alignment with your target demographics and psychographics.",
                color: "text-purple-600",
              },
              {
                icon: FaMoneyBillWave,
                title: "Budget Optimization",
                description:
                  "Maximize your investment by allocating budget to the highest performing influencers and content types.",
                color: "text-green-600",
              },
              {
                icon: FaChartLine,
                title: "Performance Tracking",
                description:
                  "Comprehensive analytics to measure ROI and optimize campaigns in real-time.",
                color: "text-indigo-600",
              },
            ].map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full border-l-4 border-amber-500">
                  <div className="-mt-6">
                    <div>
                      <span
                        className={`inline-flex items-center justify-center p-3 rounded-md shadow-lg ${feature.color} bg-white`}
                      >
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Influencer Tiers */}
      <div className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Influencer Network Tiers
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We work with influencers across all follower ranges to match your
              campaign goals
            </p>
          </div>

          <div className="mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {[
              {
                name: "Mega Influencers",
                followers: "1M+",
                description:
                  "Celebrities and industry leaders for mass awareness campaigns",
                bestFor: "Brand awareness, product launches",
                icon: IoMdRibbon,
              },
              {
                name: "Macro Influencers",
                followers: "100K - 1M",
                description:
                  "Established content creators with highly engaged audiences",
                bestFor: "Consideration, conversions",
                icon: BsGraphUp,
              },
              {
                name: "Micro/Nano Influencers",
                followers: "1K - 100K",
                description:
                  "Niche experts with loyal, hyper-engaged communities",
                bestFor: "Targeted campaigns, authentic engagement",
                icon: FaHashtag,
              },
            ].map((tier, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600 mx-auto`}
                >
                  <tier.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">
                  {tier.name}
                </h3>
                <p className="mt-2 text-3xl font-bold text-amber-600 text-center">
                  {tier.followers}
                </p>
                <p className="mt-4 text-gray-600">{tier.description}</p>
                <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-amber-800">
                    Best for:
                  </p>
                  <p className="mt-1 text-sm text-amber-700">{tier.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaign Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our 6-Step Influencer Campaign Process
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              A streamlined approach to effective influencer collaborations
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Goal Definition",
                  description:
                    "Align on campaign objectives, KPIs, and target audience",
                },
                {
                  step: "02",
                  title: "Influencer Identification",
                  description:
                    "Match with ideal influencers using our proprietary tools",
                },
                {
                  step: "03",
                  title: "Campaign Design",
                  description: "Develop creative briefs and content guidelines",
                },
                {
                  step: "04",
                  title: "Contracting & Onboarding",
                  description:
                    "Negotiate terms and align influencers with campaign goals",
                },
                {
                  step: "05",
                  title: "Content Creation & Approval",
                  description: "Manage content development and brand approvals",
                },
                {
                  step: "06",
                  title: "Launch & Optimization",
                  description:
                    "Execute campaign with real-time monitoring and adjustments",
                },
              ].map((process, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-1 -top-1 h-12 w-12 rounded-full bg-amber-100 opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <p className="text-amber-600 text-lg font-bold">
                      {process.step}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">
                      {process.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Influencer Marketing Success Stories
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Real campaigns delivering real results for brands like yours
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Beauty Brand Launch",
                result: "3.2M impressions, 48K clicks",
                description:
                  "Collaborated with 15 micro-influencers to launch a new skincare line",
                stat: "7.8%",
                statLabel: "Conversion rate",
              },
              {
                title: "Fitness App Growth",
                result: "12.5K app downloads",
                description:
                  "Macro-influencer campaign showcasing app features through tutorials",
                stat: "4.3x",
                statLabel: "ROI",
              },
              {
                title: "E-commerce Holiday Campaign",
                result: "$285K in direct sales",
                description:
                  "Multi-tier influencer strategy for seasonal product promotion",
                stat: "62%",
                statLabel: "New customers",
              },
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900">
                  {caseStudy.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-amber-600">
                  {caseStudy.result}
                </p>
                <p className="mt-4 text-gray-600">{caseStudy.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-3xl font-bold text-amber-600">
                    {caseStudy.stat}
                  </p>
                  <p className="text-sm text-gray-500">{caseStudy.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">
              Ready to harness the power of influencer marketing?
            </span>
            <span className="block text-amber-300">
              Let's create your custom strategy today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-amber-400 hover:bg-amber-500 transition duration-300"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-300"
              >
                See Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerMarketing;
