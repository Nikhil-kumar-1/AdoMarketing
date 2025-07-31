import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaTiktok, FaChartLine, FaHashtag, FaRegLightbulb } from "react-icons/fa";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { BsFillPeopleFill, BsMegaphone, BsCurrencyDollar, BsGraphUp, BsChatSquareQuote } from "react-icons/bs";
import { BiAnalyse, BiTrendingUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const SocialMediaService = () => {
  const platforms = [
    { 
      name: "Facebook & Instagram", 
      icon: <FaFacebook className="text-blue-600 text-4xl" />,
      strategy: [
        "Content calendars with optimal posting times",
        "Stories/Reels strategy for maximum reach",
        "Shoppable posts for e-commerce brands",
        "Precision-targeted ad campaigns"
      ],
      results: [
        "3-5x increase in engagement rates",
        "40% reduction in cost-per-lead",
        "20-30% higher conversion rates"
      ]
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin className="text-blue-700 text-4xl" />,
      strategy: [
        "B2B lead generation funnels",
        "Sponsored content for thought leadership",
        "Employee advocacy programs",
        "LinkedIn Live sessions"
      ],
      results: [
        "50+ qualified leads/month for B2B",
        "35% increase in profile views",
        "3x more connection requests"
      ]
    },
    { 
      name: "YouTube & TikTok", 
      icon: <FaTiktok className="text-black text-4xl" />,
      strategy: [
        "Short-form video content strategy",
        "Influencer collaborations",
        "Trend-jacking with branded content",
        "YouTube SEO optimization"
      ],
      results: [
        "10M+ monthly views for viral campaigns",
        "5-8% average engagement rate",
        "2x increase in follower growth"
      ]
    }
  ];

  const process = [
    {
      title: "Audit & Strategy",
      icon: <BiAnalyse className="text-purple-500 text-3xl" />,
      steps: [
        "Competitor analysis and benchmarking",
        "Content gap assessment",
        "Platform-specific KPIs setup",
        "Tone-of-voice development"
      ],
      description: "We analyze your current presence and build a customized roadmap for success"
    },
    {
      title: "Content Creation",
      icon: <BsChatSquareQuote className="text-purple-500 text-3xl" />,
      steps: [
        "Professional video/photo shoots",
        "On-brand graphic design",
        "Engaging copywriting",
        "Platform-optimized content formats"
      ],
      description: "Our creative team produces scroll-stopping content tailored to each platform"
    },
    {
      title: "Community Management",
      icon: <BsFillPeopleFill className="text-purple-500 text-3xl" />,
      steps: [
        "Daily engagement with followers",
        "Crisis management protocols",
        "User-generated content curation",
        "Influencer relationship building"
      ],
      description: "We build authentic relationships with your audience 24/7"
    },
    {
      title: "Performance Analysis",
      icon: <FaChartLine className="text-purple-500 text-3xl" />,
      steps: [
        "Monthly analytics reports",
        "A/B testing of content types",
        "ROI measurement",
        "Strategy refinement"
      ],
      description: "Data-driven optimizations to continuously improve results"
    }
  ];

  const strategies = [
    {
      title: "Hashtag Strategy",
      icon: <FaHashtag className="text-pink-500" />,
      description: "Research and implementation of trending and niche hashtags to maximize discoverability"
    },
    {
      title: "Influencer Marketing",
      icon: <BsMegaphone className="text-pink-500" />,
      description: "Strategic partnerships with micro and macro influencers in your industry"
    },
    {
      title: "Paid Advertising",
      icon: <BsCurrencyDollar className="text-pink-500" />,
      description: "Precisely targeted social ads with conversion tracking and optimization"
    },
    {
      title: "Trend Analysis",
      icon: <BiTrendingUp className="text-pink-500" />,
      description: "Real-time monitoring and capitalizing on viral trends and memes"
    },
    {
      title: "Content Repurposing",
      icon: <FaRegLightbulb className="text-pink-500" />,
      description: "Maximizing content value by adapting across multiple platforms and formats"
    },
    {
      title: "Engagement Boosting",
      icon: <BsGraphUp className="text-pink-500" />,
      description: "Proven tactics to increase comments, shares, and saves algorithmically"
    }
  ];

  const caseStudies = [
    {
      title: "Fashion Brand",
      result: "Increased Instagram followers by 250% in 6 months",
      metrics: [
        "Engagement rate: 8.7% (industry avg: 2.5%)",
        "Website traffic from social: +300%",
        "ROI on influencer collabs: 5:1"
      ]
    },
    {
      title: "B2B SaaS Company",
      result: "Generated 80 qualified leads/month via LinkedIn",
      metrics: [
        "Cost per lead: $22 (industry avg: $45)",
        "Demo request conversion: 12%",
        "Content downloads: 1,200/month"
      ]
    },
    {
      title: "Restaurant Chain",
      result: "1M+ views on TikTok campaign",
      metrics: [
        "User-generated content: 850+ posts",
        "Foot traffic increase: 40%",
        "Hashtag reach: 5.2M"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-300 py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1683721003111-070bcc053d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Social Media Marketing That <span className="text-yellow-300">Grows Your Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            Data-driven strategies to increase engagement, build communities, and drive conversions across all platforms
          </motion.p>
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg shadow-xl transition-all"
          >
            Get Your Free Social Media Audit
          </motion.button></Link>
        </div>
      </div>

      {/* Platform Strategies */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Platform-Specific <span className="text-purple-600">Strategies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customized approaches for each social network's unique algorithm and audience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-50 p-3 rounded-full mr-4">
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Our Strategy:</h4>
                <ul className="space-y-2">
                  {platform.strategy.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Typical Results:</h4>
                <ul className="space-y-2">
                  {platform.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">4-Phase</span> Social Media Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to building and maintaining a powerful social presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-purple-500 mb-4">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.steps.map((step, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Strategies */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">Advanced</span> Social Media Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tactics that give our clients a competitive advantage
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 p-2 rounded-full mr-4">
                    {strategy.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{strategy.title}</h3>
                </div>
                <p className="text-gray-600">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Social Media <span className="text-purple-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results we've achieved for clients across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-lg text-purple-600 font-medium mb-6">{study.result}</p>
                <ul className="space-y-3">
                  {study.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Let's create a customized strategy that delivers real business results
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default SocialMediaService;