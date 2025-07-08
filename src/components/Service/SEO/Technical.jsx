import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TechnicalSEO = () => {
  return (
    <>
      <Helmet>
        <title>Technical SEO | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Technical SEO, Adonomics Technologies, SEO services, website optimization, search engine visibility"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Discover the importance of Technical SEO for your website. Learn how to optimize your site for better search engine visibility and performance."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/technical"
        />
        <meta
          property="og:title"
          content="Technical SEO | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Discover the importance of Technical SEO for your website. Learn how to optimize your site for better search engine visibility and performance."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/technical"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-50"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Technical SEO background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-700 mix-blend-multiply"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Technical SEO
              </h1>
              <h2 className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-indigo-200 font-medium">
                Making Your Website Search-Engine Friendly
              </h2>
              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                The invisible foundation that helps search engines discover,
                crawl, and rank your content effectively
              </p>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Optimize Your Site
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Intro Section */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Technical SEO foundation"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Backbone of Your Online Visibility
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Technical SEO may sound intimidating, but it's essential if
                  you want your website to be found, crawled, and indexed
                  properly by search engines like Google. Think of it as the
                  foundation of your site—the part that users don't always see,
                  but search engines closely evaluate. Without a strong
                  technical structure, even the most compelling content might
                  not reach its intended audience.
                </p>
              </div>
            </div>
          </div>

          {/* Website Speed Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 sm:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ⚡ Lightning-Fast Performance
                </h3>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    One of the most critical aspects of technical SEO is website
                    speed. A slow-loading website not only frustrates users but
                    also leads to higher bounce rates, which can negatively
                    impact your search rankings. Optimizing image sizes,
                    minimizing unnecessary scripts, enabling browser caching,
                    and using a fast hosting provider can all help improve load
                    times significantly.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Website speed optimization"
                />
              </div>
            </div>
          </div>

          {/* Mobile & Crawlability Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Mobile friendly website"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  📱 Mobile-First Experience
                </h3>
                <div className="prose text-gray-700">
                  <p>
                    With a majority of users browsing on mobile devices, your
                    website must be fully responsive. A mobile-optimized design
                    ensures a smooth user experience, which in turn boosts SEO
                    performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                alt="Crawl errors fixing"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🕷️ Crawlability Matters
                </h3>
                <div className="prose text-gray-700">
                  <p>
                    Fixing crawl errors is another key element. If search
                    engines can't properly access your site's content due to
                    broken links, incorrect redirects, or server issues, it can
                    harm your visibility in search results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* URL & Security Section */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Structure & Security Essentials
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    🔗 Clean URL Structure
                  </h4>
                  <p className="text-gray-700">
                    URL structure plays an important role. Clean, descriptive,
                    and logical URLs make it easier for both users and search
                    engines to understand the content of a page. For example, a
                    URL like yourwebsite.com/services/seo-audit is much more
                    effective than yourwebsite.com/page?id=123.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    🔒 HTTPS Security
                  </h4>
                  <p className="text-gray-700">
                    Security is no longer optional. A secure website running on
                    HTTPS not only protects your users' data but also earns a
                    ranking boost from Google. Sites without HTTPS are flagged
                    as "Not Secure" in browsers, which can damage your
                    credibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Website security"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Adonomics Section */}
          <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Adonomics Technology: Technical SEO Experts
              </h2>
              <div className="prose prose-lg text-indigo-100">
                <p>
                  At Adonomics Technology, we dive deep into every technical
                  aspect of your website. From optimizing page speed and mobile
                  usability to implementing structured data, XML sitemaps,
                  canonical tags, and schema markup—we ensure your site meets
                  all the technical requirements for higher visibility and
                  better performance in search engines.
                </p>
                <p className="mt-4">
                  Investing in technical SEO today means building a strong,
                  scalable foundation for tomorrow's growth. Let Adonomics
                  Technology help you make your website technically sound,
                  user-friendly, and search-engine ready.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Technical SEO Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalSEO;
