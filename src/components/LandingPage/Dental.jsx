import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaSearch,
  FaPenFancy,
  FaMapMarkerAlt,
  FaCheck,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dental = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSeoFaq, setActiveSeoFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleSeoFaq = (index) => {
    setActiveSeoFaq(activeSeoFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to see results from SEO content?",
      answer:
        "While some improvements can be seen in 2-3 months, substantial results typically appear in 6-12 months. SEO is a long-term strategy that builds momentum over time as your content gains authority and backlinks.",
    },
    {
      question: "What types of content work best for dental practices?",
      answer:
        "The most effective content types include: service pages for each treatment, patient education articles, FAQs about common concerns, 'what to expect' guides, before-and-after case studies, and blog posts answering patient questions.",
    },
  ];

  const seoContentFaqs = [
    {
      question: "Is SEO and content strategy good?",
      answer: "Yes. Content strategy for SEO is good.",
    },
    {
      question: "What is SEO content strategy?",
      answer:
        "It is a planned approach to creating and organizing content that helps websites rank higher in search engines.",
    },
    {
      question: "Can anybody follow SEO strategy?",
      answer: "Yes",
    },
  ];

  const seoContentSteps = [
    {
      title: "Begin with Comprehensive Research",
      content:
        "Every project worth pursuing starts with evidence. Investigate your subject thoroughly. Use research tools, feedback loops, and analytics platforms. Discover what questions people ask and what lies behind those topics. Exploration should include behavior patterns, competitor performance, and overlooked niches. That is where opportunity hides. Support ideas using verified information. Content rooted in data establishes trust.",
    },
    {
      title: "Understand Who You're Writing For",
      content:
        "Awareness of your target audience transforms your writing style. It informs word choice, topic depth, and structure. Do readers seek introductory overviews or advanced insights? Are they looking to learn or to buy? Develop personas when helpful. Identify their challenges, objectives, and preferred formats. A genuine <strong> SEO strategy <strong> centers on understanding readers rather than following algorithms. Content that connects resonates more deeply.",
    },
    {
      title: "Create a Structured SEO Content Strategy",
      content:
        "Now assemble your framework. Your SEO content strategy needs clearly defined objectives for both short-term traction and long-term brand building. Select priority keywords and organize them by purpose—such as learning, buying, or browsing. Align each term to content formats like how-tos, product pages, or essays. Schedule publication dates and distribution channels. Clarify how each piece moves your audience closer to goals. By planning in this way, your SEO strategy avoids chaos and yields measurable progress.",
    },
    {
      title: "Write Strong, Optimized Headlines",
      content:
        "Your headline determines whether people click. A lackluster headline wastes opportunity. It needs clarity, energy, and the main phrase placed comfortably. Include strong verbs to spark interest. Ask compelling questions or offer a clear solution. A headline that promises value increases engagement and dwell time.",
    },
    {
      title: "Hook with a Powerful Introduction",
      content:
        "Once someone clicks, the introduction must earn their attention. Start with empathy, a surprising fact, or relevant issue. Clearly state what follows and why it matters. Answer the silent question readers have: Is this worth my time? Provide that assurance quickly. A confident start makes them stay.",
    },
    {
      title: "Use Clear Subheadings and Structure",
      content:
        "Well-structured articles are easy to follow. Use H2 and H3 tags to segment your text. Make each heading descriptive about the upcoming content. Subheadings help users skim and understand your message. They also assist search engines in interpreting page layout. Smart SEO strategy includes thoughtful formatting that enhances readability and indexing.",
    },
    {
      title: "Offer Fresh, Valuable Insights",
      content:
        "Recycling common advice leads to forgettable content. Share real examples or behind-the-scenes details. Add data points or client stories. Show how methods work in practice. Readers appreciate when authors reveal genuine experience. A smart SEO strategy highlights authenticity and sets you apart.",
    },
    {
      title: "Keep Language Clear and Concise",
      content:
        "Readability matters. Avoid complex sentences. Eliminate filler words. Communicate clearly in plain terms. Split paragraphs into digestible pieces. Use formatting like bullets or bold to highlight key ideas. Simple writing connects faster.",
    },
    {
      title: "Use Keywords Naturally and Strategically",
      content:
        "Balancing keywords is essential. Spread SEO content strategy across your text without forcing it. Maintain natural rhythm and context. Do not overoptimize it like the one given below: This SEO content strategy raises search relevance. This SEO content strategy boosts indexing potential. This SEO content strategy builds thematic authority. This SEO content strategy optimizes internal linking. This SEO content strategy aligns with user questions. This SEO content strategy guides snippet placement. This SEO content strategy enhances visual content relevance. This SEO content strategy improves site architecture. This SEO content strategy encourages visitor engagement.",
    },
    {
      title: "Add Relevant Visuals",
      content:
        "Visual elements boost reader interest. Use charts to display numbers. Include infographics to simplify complex ideas. Insert screenshots for tutorials. Optimized images with descriptive alt text and file names improve both reader experience and SEO content strategy signals.",
    },
    {
      title: "Optimize for Featured Snippets",
      content:
        "To appear in answer boxes, provide direct replies. Use numbers, bullet lists, or definitions. Format clearly so search engines can extract content easily. Adding a 'What is...' or 'How to...' section helps. That SEO content strategy aims for top-of-page visibility.",
    },
    {
      title: "Link Internally and Externally",
      content:
        "Your content network should support each piece. Link to related posts with descriptive anchor text. Connect articles to form cohesive clusters. Reference external authorities when appropriate. That builds credibility and resourcefulness. Maintain link integrity, making sure all URLs work correctly.",
    },
    {
      title: "Enhance Readability",
      content:
        "Read your text aloud to test flow. Use tools to track reading level. Replace complex phrases with simpler ones. Highlight important sentences and add whitespace. This improves comprehension and retention.",
    },
    {
      title: "Design for Mobile Users",
      content:
        "Most visits come from phones. Ensure your layout resets gracefully on smaller screens. Verify images resize correctly. Check that buttons remain tappable. Mobile functionality affects indexing and user satisfaction. A complete SEO strategy includes mobile-first design.",
    },
    {
      title: "Improve Loading Speed",
      content:
        "Delay in page loads drives visitors away. Choose lightweight templates. Compress assets and reduce unnecessary scripts. Test performance using speed audit tools. Faster pages support better user experiences and SEO outcomes.",
    },
    {
      title: "Include a Clear Call-to-Action",
      content:
        "Guide readers to take the next step. Invite them to comment, download, or subscribe. Connect your content to a relevant action. Well-placed prompts foster interaction that indirectly supports SEO success. Purposeful SEO strategy always includes conversion direction.",
    },
    {
      title: "Track and Analyze Results",
      content:
        "Publishing is only the start. Use analytics to evaluate behavior. Monitor visits, engagement, and rankings. Identify what works and what does not. Adapt based on real-world performance. A flexible SEO strategy changes with insight and trend shifts.",
    },
    {
      title: "Refresh Old Content Regularly",
      content:
        "Topics and data evolve over time. Revisit existing pages and update content. Remove outdated links and refresh examples. This ensures your material remains relevant and continues earning visibility. A refreshed SEO strategy treats content as a living library, not static assets.",
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800">
      <Helmet>
        <title>Dental SEO Content Strategy | Adonomics Technologies</title>
        <meta
          name="description"
          content="Meta Description: There are various ways through which you can build a very good and convincing SEO content strategy in the USA. Curious to know it? Delve deep then!"
        />
        <meta
          name="keywords"
          content="Dental SEO, Content Strategy, SEO Content, Dental Marketing, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <link rel="canonical" href="https://adonomicstechnologies.com/dental" />
        <meta
          property="og:title"
          content="Dental SEO Content Strategy | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Learn how to create a powerful SEO content strategy for dental practices that attracts patients and builds trust."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-[#0074CC] py-20 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Smart <span className="text-[#FFC107]">Dental SEO</span> Content
              Strategy That Attracts Patients
            </h1>
            <p className="text-xl text-blue-100 mb-5">
              Creating material without a clear aim feels like wandering without
              direction. You may stumble across something useful, yet you will
              likely miss the mark. A well thought-out <strong> SEO content strategy </strong>
              provides guidance. It offers structure, relevance, and impact.
              Rather than guesswork, your content reflects search intent,
              audience desires, and brand values.
            </p>
            <p className="text-xl text-blue-100 mb-8">
              A strong <strong> SEO strategy </strong> goes further than chasing top positions. It
              earns respect, solves problems, and fosters interaction. This
              article explains steps required to construct an approach that
              truly delivers results
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-[#FFC107] hover:bg-amber-500 text-gray-800 font-bold py-3 px-8 rounded-lg text-center transition duration-300"
              >
                Get Your Free Audit
              </Link>
              <Link
                to="/services"
                className="bg-white hover:bg-gray-100 text-[#0074CC] font-bold py-3 px-8 rounded-lg text-center border border-white transition duration-300"
              >
                Learn SEO Strategy
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Dentist with patient"
              className="rounded-lg shadow-xl max-w-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-[#0074CC] mb-2">73%</div>
              <div className="text-gray-600">
                of patients research online before choosing a dentist
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-[#0074CC] mb-2">5x</div>
              <div className="text-gray-600">
                more likely to be clicked when ranking on page 1
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-[#0074CC] mb-2">89%</div>
              <div className="text-gray-600">
                of dental searches include local intent
              </div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-[#0074CC] mb-2">60%</div>
              <div className="text-gray-600">
                increase in consultations with optimized content
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Strategy Section */}
      <section id="seo-strategy" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Complete SEO Content Strategy Framework
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Effective content creation is deliberate and iterative. Careful
            planning, genuine insight, and ongoing refinement produce strong
            results.
          </p>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="space-y-12">
              {seoContentSteps.map((step, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-2xl font-bold text-[#0074CC] mb-4">
                    Step {index + 1}: {step.title}
                  </h3>
                  <div className="prose max-w-none text-gray-600">
                    <p>{step.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Conclusion</h3>
              <p className="text-gray-700">
                A solid SEO content strategy never stays the same. It grows with
                audience needs, industry trends, and engine updates. Apply these
                steps and watch your traffic and influence build steadily.
                Commit to writing with integrity and optimizing with care. Your
                digital presence will flourish based on confidence and strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Our Comprehensive Dental SEO Content Strategy
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We don't just create content - we build patient trust and practice
            authority through strategic content marketing.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Keyword research"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-[#0074CC] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                  <FaSearch className="text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Targeted Keyword Research
                </h3>
                <p className="text-gray-600">
                  We identify the exact phrases potential patients use when
                  searching for dental services in your area.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Content creation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-[#0074CC] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                  <FaPenFancy className="text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Patient-Focused Content
                </h3>
                <p className="text-gray-600">
                  Educational articles, FAQs, and service pages that address
                  patient concerns while showcasing your expertise.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Local SEO"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-[#0074CC] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Local SEO Optimization
                </h3>
                <p className="text-gray-600">
                  Location-specific content that helps you dominate search
                  results in your community and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Dental Practices Need a Content Strategy
          </h2>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Dentist consultation"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-[#0074CC]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-800">
                      Establish Trust Before First Contact
                    </h3>
                    <p className="text-gray-600">
                      Patients research extensively before choosing a dentist.
                      Quality content positions you as the expert.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-[#0074CC]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-800">
                      Answer Common Patient Questions
                    </h3>
                    <p className="text-gray-600">
                      Address concerns about procedures, costs, and dental
                      anxiety to convert more website visitors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-[#0074CC]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-800">
                      Differentiate Your Practice
                    </h3>
                    <p className="text-gray-600">
                      Showcase what makes your approach unique in a competitive
                      dental market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-[#0074CC]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-800">
                      Improve Online Visibility
                    </h3>
                    <p className="text-gray-600">
                      Rank higher for both general dental terms and specialized
                      services you offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Our 6-Step Dental Content Strategy Process
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            A systematic approach to creating content that actually works for
            your practice
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-[#0074CC] mb-2">
                  1. Comprehensive Research
                </h3>
                <p className="text-gray-600">
                  We analyze your local market, competitors, and patient search
                  behavior to identify content opportunities.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start">
                <div className="bg-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center border-4 border-blue-100">
                  <span className="text-2xl font-bold text-[#0074CC]">1</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 order-2 md:order-1 md:pr-12 flex justify-center md:justify-end">
                <div className="bg-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center border-4 border-blue-100">
                  <span className="text-2xl font-bold text-[#0074CC]">2</span>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 md:pl-12 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-[#0074CC] mb-2">
                  2. Strategy Development
                </h3>
                <p className="text-gray-600">
                  We create a customized content calendar targeting high-value
                  keywords and patient concerns.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-[#0074CC] mb-2">
                  3. Content Creation
                </h3>
                <p className="text-gray-600">
                  Our dental writers craft engaging, accurate content that
                  showcases your expertise and practice values.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start">
                <div className="bg-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center border-4 border-blue-100">
                  <span className="text-2xl font-bold text-[#0074CC]">3</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 order-2 md:order-1 md:pr-12 flex justify-center md:justify-end">
                <div className="bg-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center border-4 border-blue-100">
                  <span className="text-2xl font-bold text-[#0074CC]">4</span>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 md:pl-12 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-[#0074CC] mb-2">
                  4. On-page Optimization
                </h3>
                <p className="text-gray-600">
                  Each page is optimized for search engines while maintaining
                  natural readability for patients.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold text-[#0074CC] mb-2">
                  5. Visual Enhancement
                </h3>
                <p className="text-gray-600">
                  We add professional images, infographics, and videos to
                  improve engagement and understanding.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start">
                <div className="bg-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center border-4 border-blue-100">
                  <span className="text-2xl font-bold text-[#0074CC]">5</span>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 order-2 md:order-1 md:pr-12 flex justify-center md:justify-end">
                <div className="bg-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center border-4 border-blue-100">
                  <span className="text-2xl font-bold text-[#0074CC]">6</span>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 md:pl-12 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-[#0074CC] mb-2">
                  6. Performance Tracking
                </h3>
                <p className="text-gray-600">
                  We monitor results and continuously refine the strategy based
                  on data and patient behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0074CC] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Attract More Patients Through SEO Content?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free content strategy assessment for your dental practice
            website.
          </p>
          <Link
            to="/contact"
            className="bg-[#FFC107] hover:bg-amber-500 text-gray-800 font-bold py-3 px-8 rounded-lg inline-block transition duration-300"
          >
            Request Free Audit
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Dental SEO Content Strategy FAQs
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                  <FaChevronDown
                    className={`text-[#0074CC] transition-transform duration-300 ${
                      activeFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 pb-6 pt-0 ${
                    activeFaq === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            SEO Content Strategy FAQs
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {seoContentFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleSeoFaq(index)}
                >
                  <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                  <FaChevronDown
                    className={`text-[#0074CC] transition-transform duration-300 ${
                      activeSeoFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 pb-6 pt-0 ${
                    activeSeoFaq === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-[#0074CC] text-white p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">
                  Get Your Free Content Strategy Assessment
                </h2>
                <p className="mb-6">
                  Complete the form and we'll analyze your current dental
                  website content and provide actionable recommendations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 p-2 rounded-full mr-4">
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="font-bold">Call Us</h3>
                      <p>(+91) 9955669590</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 p-2 rounded-full mr-4">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <p>info@adonomicstechnologies.com</p>
                    </div>
                  </div>
                  <Link to="/contact" className="inline-block">
                    <button className="bg-[#FFC107] hover:bg-amber-500 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300">
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex items-center justify-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VvfGVufDB8fDB8fHww"
                  alt="Contact us"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dental;