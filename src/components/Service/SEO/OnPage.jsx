import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const OnPageSEO = () => {
  return (
    <>
      <Helmet>
        <title>On-Page SEO | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="On-Page SEO, SEO optimization, website optimization, digital marketing, search engine optimization, Adonomics Technologies Noida Delhi"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="On-Page SEO is the foundation of your search engine visibility. Learn how to optimize your website for better rankings."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/onpage" />
        <meta
          property="og:title"
          content="On-Page SEO | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="On-Page SEO is the foundation of your search engine visibility. Learn how to optimize your website for better rankings."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/onpage"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="SEO optimization"
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                On-Page SEO
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-indigo-300 mb-8">
                Where Real Optimization Begins
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                The foundation of your search engine visibility starts with
                what's on your page
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why On-Page SEO Matters
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    If you’ve ever wondered why some websites show up at the top
                    of Google while others don’t, on-page SEO is often the
                    secret sauce. This isn’t some mysterious, behind-the-scenes
                    trickery—it’s a structured, strategic approach to optimizing
                    the elements of your website that both users and search
                    engines can see, understand, and interact with. From the
                    content and keywords to meta data, image tags, internal
                    links, and page speed, on-page SEO is about ensuring your
                    site is fully optimized to rank better and deliver value.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="SEO analysis"
                className="rounded-xl shadow-xl w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-stretch">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Content is King
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    At the heart of any successful on-page SEO strategy is
                    quality content. Start by asking yourself: Is this content
                    genuinely helpful? Does it answer the questions my target
                    audience is searching for? Google's algorithm is designed to
                    prioritize pages that offer clear, relevant, and original
                    information. Gone are the days of keyword stuffing. Today,
                    it's all about using natural language, writing for people
                    first, and weaving in relevant keywords in a thoughtful and
                    contextually appropriate way. Use a logical structure with
                    clear headings — your main title should be wrapped in an h1
                    tag, followed by subsections with h2, h3, and so on. This
                    not only makes your content easier to read but also helps
                    search engines understand your page's hierarchy and
                    relevance.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Content creation"
                className="rounded-xl shadow-xl w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Meta Tags: Your First Impression in Search Results
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    While meta titles and descriptions don’t appear directly on
                    the page, they are crucial in influencing how your website
                    appears in search engine results. A compelling meta title
                    that includes your primary keyword can dramatically improve
                    your click-through rate (CTR). The meta description, on the
                    other hand, acts like a short advertisement for your page.
                    It should be clear, concise, and persuasive, summarizing
                    what users will gain by visiting your site.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Meta tags illustration"
                className="rounded-xl shadow-xl w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-stretch">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Internal Linking: Creating a Web of Relevance
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    Then there's your site's internal linking. Are you
                    connecting relevant pages together? A well-structured
                    internal linking strategy helps users discover more of your
                    content while giving search engines a map of how your pages
                    are connected. For instance, linking a blog post to a
                    related service page not only improves navigation but also
                    passes link equity, which can improve rankings across your
                    site. Think of it this way: the easier it is for both users
                    and crawlers to find important pages, the more likely those
                    pages are to rank well.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Website linking structure"
                className="rounded-xl shadow-xl w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white p-8 rounded-xl  flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Image Optimization: Visibility Beyond Text
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    Images can do more than enhance visual appeal—they also play
                    a role in SEO. Use descriptive alt attributes that not only
                    assist visually impaired users but also help your images
                    appear in Google Image Search. Compress images for faster
                    loading, use modern formats like WebP, and make sure
                    filenames are descriptive (e.g., digital-marketing-team.jpg
                    instead of IMG12345.jpg).
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://plus.unsplash.com/premium_photo-1683288537078-a04cc87545f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3B0aW1pemF0aW9ufGVufDB8fDB8fHww"
                alt="Image optimization"
                className="rounded-xl shadow-xl w-full max-h-[300px]  object-cover "
              />
            </div>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-stretch">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Technical Details That Matter
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>
                        <strong>URL structure:</strong> Keep URLs clean,
                        readable, and keyword-rich.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>
                        <strong>Mobile responsiveness:</strong> Ensure your
                        website looks and works great on all devices.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>
                        <strong>Page speed:</strong> Slow sites hurt both
                        rankings and user experience.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>
                        <strong>Schema markup:</strong> Use structured data to
                        help Google understand your content.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-3 mt-1">
                        •
                      </span>
                      <span>
                        <strong>Secure connection (HTTPS):</strong> Security is
                        a ranking signal.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Technical SEO"
                className="rounded-xl shadow-xl w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Adonomics Technology: Your Partner in On-Page Excellence
              </h2>
              <div className="text-left prose prose-lg text-indigo-100">
                <p>
                  Adonomics Technology excels at this. They don’t just update a
                  few words and call it a day. Their approach goes far deeper.
                  They begin by understanding your audience’s needs, search
                  intent, and the goals of your business. Then, they craft and
                  structure your content to resonate with users while aligning
                  perfectly with SEO best practices. From analyzing user
                  behavior and refining the content layout, to optimizing
                  technical elements like schema, meta tags, and page speed,
                  every part of your site is polished for maximum impact. They
                  ensure your website delivers a seamless experience from the
                  headline to the footer. The result? Higher visibility, better
                  user engagement, and increased conversions.
                </p>
              </div>
              <br></br>
              <Link to="/contact">
                <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in delay-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnPageSEO;
