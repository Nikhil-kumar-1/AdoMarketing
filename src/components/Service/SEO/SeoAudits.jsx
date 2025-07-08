import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SEOAudits = () => {
  return (
    <>
      <Helmet>
        <title>SEO Audits | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="SEO audits, website analysis, SEO strategy, digital marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Discover the importance of SEO audits for your website's performance. Learn how Adonomics Technologies can help you identify issues and optimize your site for better search engine rankings."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/seo-audits"
        />
        <meta
          property="og:title"
          content="SEO Audits | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Discover the importance of SEO audits for your website's performance. Learn how Adonomics Technologies can help you identify issues and optimize your site for better search engine rankings."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/seo-audits"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-50"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="SEO Audit background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 mix-blend-multiply"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                SEO Audits
              </h1>
              <h2 className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-blue-200 font-medium">
                The First Step to Doing SEO Right
              </h2>
              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Your roadmap to higher rankings begins with a comprehensive
                website analysis
              </p>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Free Audit
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Diagnostic Check Section */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="SEO diagnostic check"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why You Can't Skip an SEO Audit
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Let's be honest—trying to improve your website's search
                  ranking without a proper audit is like fixing a car in the
                  dark. You can't improve what you can't see. Before you start
                  tweaking keywords or writing more blog posts, you need to know
                  exactly where your site stands. That's where an SEO audit
                  becomes your best friend.
                </p>
                <p className="mt-4">
                  Think of an audit as a complete diagnostic check. It's not
                  just about finding what's broken—it's about getting a full
                  snapshot of your site's health. From your content strategy to
                  your technical framework, it takes a hard look at what's
                  helping your rankings and what's dragging them down. Skipping
                  this step? That's like heading into a marathon without
                  checking if your shoes fit.
                </p>
              </div>
            </div>
          </div>

          {/* Four Pillars Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 sm:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🔍 The Four Pillars of a Comprehensive SEO Audit
                </h3>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    A well-done SEO audit typically looks at four major areas
                    that determine your search visibility:
                  </p>
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        1. On-Page SEO
                      </h4>
                      <p>
                        Content quality, keyword optimization, meta tags, header
                        structure, and internal linking.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        2. Technical SEO
                      </h4>
                      <p>
                        Site speed, mobile-friendliness, crawlability,
                        indexation, and security (HTTPS).
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        3. Off-Page SEO
                      </h4>
                      <p>
                        Backlink profile, domain authority, and social signals.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        4. User Experience
                      </h4>
                      <p>
                        Navigation, readability, mobile responsiveness, and
                        engagement metrics.
                      </p>
                    </div>
                  </div>
                  <p className="mt-6">
                    Each of these plays a critical role in how Google sees your
                    site. If just one piece is out of whack, your visibility can
                    take a hit. For example, your content might be excellent,
                    but if your site loads too slowly or doesn't work well on
                    mobile, people will bounce—and so will your rankings.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-8">
                <img
                  className="w-full h-auto max-w-md"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="SEO audit components"
                />
              </div>
            </div>
          </div>

          {/* Problems & Wins Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-red-600 p-4">
                <h3 className="text-xl font-bold text-white">
                  ❗ Common Audit Findings
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                      •
                    </span>
                    <span>Broken links (both internal and external)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                      •
                    </span>
                    <span>Duplicate content issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                      •
                    </span>
                    <span>Missing or duplicate meta tags</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                      •
                    </span>
                    <span>Poor mobile experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                      •
                    </span>
                    <span>Slow page load times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                      •
                    </span>
                    <span>Thin or outdated content</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-600 p-4">
                <h3 className="text-xl font-bold text-white">
                  ✅ Hidden Opportunities
                </h3>
              </div>
              <div className="p-6">
                <div className="prose text-gray-700">
                  <p>
                    But here's something a lot of people miss: an SEO audit
                    doesn't just highlight problems. It also uncovers your wins:
                  </p>
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>
                        Content that's already ranking well (opportunity to
                        expand)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>Strong internal linking structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>Underutilized keywords with high potential</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>Existing backlinks from authoritative sites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>
                        Technical elements already properly configured
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    Knowing what's working gives you a solid foundation to build
                    on, rather than reinventing the wheel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Adonomics Approach */}
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Adonomics Technology Difference
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  This is exactly where Adonomics Technology shines. Their
                  approach to SEO audits isn't just about running a few tools
                  and dumping data into a spreadsheet. They dig deep. They
                  explain the findings in a way that makes sense—no tech-speak,
                  no jargon overload.
                </p>
                <p className="mt-4">
                  Whether it's broken internal links, unoptimized images, or
                  missed opportunities with structured data, they help you see
                  the full picture and lay out a plan to fix it. What really
                  sets them apart is the human touch. You're not left scratching
                  your head trying to figure out what "duplicate canonical tags"
                  means.
                </p>
                <p className="mt-4">
                  They walk you through it all and make it clear what steps come
                  next, so you can actually move forward with confidence. Their
                  audits include:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Customized checklist based on your business goals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Competitor benchmarking analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Priority-based action plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Ongoing support during implementation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Adonomics SEO audit process"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your SEO Foundation?
            </h2>
            <div className="prose prose-lg text-blue-100 max-w-3xl mx-auto">
              <p>
                The bottom line? An SEO audit isn't just a nice-to-have. It's
                the launchpad for everything else. If you're trying to boost
                traffic, improve conversions, or climb the rankings, this is
                where it all begins. Skipping this step is like building a house
                without checking the foundation. But with a proper audit, you're
                no longer guessing—you're making smart, informed decisions that
                put your website in a position to win.
              </p>
              <p className="mt-6 font-semibold">
                Adonomics Technology provides comprehensive audits that go
                beyond surface-level checks to deliver actionable insights
                tailored to your specific business objectives.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Audit Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SEOAudits;
