import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiDollarSign, FiTarget, FiPieChart, FiTrendingUp } from "react-icons/fi";
import { FaGoogle, FaFacebook, FaLinkedin, FaTwitter, FaShoppingBag } from "react-icons/fa";
import { BsGraphUp, BsPhone, BsCalendarCheck, BsFillLightningFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PagePerClick = () => {
  const platforms = [
    {
      name: "Google Ads",
      icon: <FaGoogle className="text-blue-500 text-3xl" />,
      description: "Comprehensive campaigns across Search, Display, Shopping, and YouTube networks",
      details: [
        "Search Ads: Appear at the top of Google search results for targeted keywords",
        "Display Ads: Visual banners across millions of websites and apps",
        "Shopping Ads: Product listings directly in Google search",
        "YouTube Ads: Video ads targeting specific viewer demographics"
      ],
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Facebook/Instagram",
      icon: <FaFacebook className="text-blue-600 text-3xl" />,
      description: "Precision social media advertising with advanced audience targeting",
      details: [
        "News Feed Ads: Native ads in Facebook/Instagram feeds",
        "Story Ads: Full-screen vertical ads between stories",
        "Carousel Ads: Multiple images/videos in a single ad",
        "Lead Ads: Instant lead generation without leaving the app"
      ],
      image: "https://images.unsplash.com/photo-1662070479020-73f77887c87c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2Vib29rJTIwSW50YWdhcmFtfGVufDB8fDB8fHww"
    },
    {
      name: "X (Twitter) Ads",
      icon: <FaTwitter className="text-blue-400 text-3xl" />,
      description: "Real-time engagement and trend-based advertising",
      details: [
        "Promoted Tweets: Amplify your best content",
        "Trend Takeovers: Capitalize on viral moments",
        "Conversation Ads: Drive engagement through threads",
        "Follower Ads: Grow your audience strategically"
      ],
      image: "https://images.unsplash.com/photo-1690138871287-02b2fc3b87c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "LinkedIn Ads",
      icon: <FaLinkedin className="text-blue-700 text-3xl" />,
      description: "B2B lead generation and professional network targeting",
      details: [
        "Sponsored Content: Native ads in LinkedIn feeds",
        "Message Ads: Direct outreach to decision-makers",
        "Dynamic Ads: Personalized based on user profile data",
        "Lead Gen Forms: Pre-filled forms for higher conversions"
      ],
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW58ZW58MHx8MHx8fDA%3D"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Strategy Development",
      icon: <FiTarget className="text-blue-500" />,
      description: "We conduct in-depth analysis of your business objectives, competitive landscape, and target audience to develop a customized PPC strategy tailored to your KPIs.",
      details: [
        "Competitor ad analysis using SEMrush and SpyFu",
        "Customer journey mapping for optimal touchpoints",
        "Budget allocation based on channel potential",
        "Conversion goal setting (leads, sales, awareness)"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      step: "2",
      title: "Campaign Architecture",
      icon: <FiDollarSign className="text-blue-500" />,
      description: "We build high-converting campaigns with strategic structure, compelling creatives, and precision targeting.",
      details: [
        "Ad group structuring for optimal Quality Scores",
        "Keyword research and negative keyword lists",
        "Custom audience creation (retargeting, lookalikes)",
        "Landing page optimization for maximum conversions"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      step: "3",
      title: "Launch & Optimization",
      icon: <FiTrendingUp className="text-blue-500" />,
      description: "We continuously monitor and refine campaigns through data-driven optimization strategies.",
      details: [
        "Daily bid adjustments based on performance",
        "A/B testing of ad copy and creatives",
        "Conversion rate optimization (CRO) techniques",
        "Monthly comprehensive performance reporting"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const benefits = [
    {
      icon: <BsGraphUp className="text-green-500 text-2xl" />,
      title: "Immediate Traffic",
      description: "Unlike SEO which takes months, PPC delivers targeted visitors within hours of campaign launch"
    },
    {
      icon: <FiTarget className="text-green-500 text-2xl" />,
      title: "Granular Targeting",
      description: "Reach users by demographics, interests, behaviors, search intent, and even life events"
    },
    {
      icon: <FiPieChart className="text-green-500 text-2xl" />,
      title: "Complete Transparency",
      description: "Real-time dashboards show exactly where every dollar is spent and what results it generates"
    },
    {
      icon: <BsPhone className="text-green-500 text-2xl" />,
      title: "Mobile-First Approach",
      description: "Ads optimized for smartphone users who make up 60%+ of digital traffic"
    },
    {
      icon: <FaShoppingBag className="text-green-500 text-2xl" />,
      title: "E-Commerce Integration",
      description: "Direct product feeds, dynamic remarketing, and shopping campaigns for online stores"
    },
    {
      icon: <BsFillLightningFill className="text-green-500 text-2xl" />,
      title: "Rapid Iteration",
      description: "Quickly test and scale what works while pausing underperforming elements"
    }
  ];

  const caseStudies = [
    {
      title: "Healthcare Clinic",
      challenge: "Needed more patient appointments in competitive metro area",
      solution: "Google Search Ads with geo-targeting + Facebook retargeting",
      results: [
        "300% increase in booked appointments",
        "40% lower cost per lead than industry average",
        "5:1 return on ad spend (ROAS)"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://drjitendramohanjha.com"
    },
    {
      title: "E-Learning Platform",
      challenge: "Low enrollment rates for premium courses",
      solution: "Facebook Lookalike Audiences + YouTube demo videos",
      results: [
        "2.5x more course enrollments",
        "35% lower cost per acquisition (CPA)",
        "12% higher course completion rate"
      ],
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://truedreamsclasses.com"
    },
    {
      title: "E-Commerce Store",
      challenge: "Struggling to compete with larger retailers",
      solution: "Google Shopping Ads + Instagram influencer collaborations",
      results: [
        "5x return on ad spend (ROAS)",
        "3x higher average order value",
        "22% repeat customer rate"
      ],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://citymechanics.in"
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Professional PPC Management Services | Adonomics Technologies</title>
        <meta name="description" content="Maximize your ad spend with our data-driven PPC campaigns. Google Ads, Facebook Ads, Twitter/X Ads, and LinkedIn advertising tailored to your business goals." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden py-32 px-4 text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1629904888780-8de0c7aeed28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpY2t8ZW58MHx8MHx8fDA%3D')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="block">Pay-Per-Click Advertising</span>
            <span className="text-green-300">That Drives Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 mb-10"
          >
            Data-driven PPC campaigns that deliver measurable ROI through strategic platform management
          </motion.p>
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 cursor-pointer hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all"
          >
            Get Your Free PPC Strategy Session
          </motion.button></Link>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Advertising Platforms</span> We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive campaign management across all major PPC networks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={platform.image} 
                    alt={platform.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {platform.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{platform.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {platform.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">PPC Management</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A meticulous approach to maximizing your advertising ROI
            </p>
          </div>

          <div className="space-y-20">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="rounded-xl overflow-hidden shadow-lg h-96">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Facebook/X Advertising Deep Dive */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Social Media</span> Advertising Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized strategies for Facebook, Instagram, and X (Twitter) platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Facebook/Instagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <FaFacebook className="text-blue-600 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Facebook & Instagram Ads</h3>
              </div>
              <p className="text-gray-700 mb-6">
                We leverage Meta's powerful targeting capabilities to reach your ideal customers where they spend hours daily:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Audience Building</h4>
                    <p className="text-gray-600">Custom audiences (website visitors, email lists), lookalike audiences, and detailed targeting by interests, behaviors, and demographics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Creative Optimization</h4>
                    <p className="text-gray-600">A/B testing of carousel vs video ads, different CTAs, and messaging variations to determine what resonates best</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Conversion Tracking</h4>
                    <p className="text-gray-600">Pixel implementation to track purchases, lead forms, and other valuable actions across devices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Retargeting Strategies</h4>
                    <p className="text-gray-600">Sequential messaging to move cold audiences through the sales funnel with tailored content at each stage</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Twitter/X */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <FaTwitter className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">X (Twitter) Advertising</h3>
              </div>
              <p className="text-gray-700 mb-6">
                We capitalize on real-time conversations and trending topics to position your brand:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Trend Targeting</h4>
                    <p className="text-gray-600">Identify and capitalize on trending hashtags and topics relevant to your industry</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Conversation Ads</h4>
                    <p className="text-gray-600">Engage users through interactive tweet threads that tell a brand story</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Event Targeting</h4>
                    <p className="text-gray-600">Align campaigns with major industry events, conferences, and cultural moments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Influencer Amplification</h4>
                    <p className="text-gray-600">Leverage verified accounts in your niche to boost credibility and reach</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our <span className="text-blue-600">PPC Management</span> Delivers Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The competitive advantages of our approach to paid advertising
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PPC <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results we've delivered for clients across industries
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
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Our Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={study.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 text-sm"
                  >
                    View Case Study Details <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Advertising Results?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a free PPC audit and customized strategy for your business
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default PagePerClick;