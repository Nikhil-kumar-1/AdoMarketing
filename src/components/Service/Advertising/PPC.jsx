import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const PPC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Helmet>
        <title>PPC Advertising | Adonomics Technology</title>
        <meta
          name="description"
          content="Discover how PPC advertising can drive traffic and conversions for your business. Get started with Adonomics Technology today!"
        />
        <meta
          name="keywords"
          content="PPC, Pay-Per-Click, Advertising, Digital Marketing, Adonomics Technology"
        />
        <meta name="author" content="Adonomics Technology" />
        <link rel="canonical" href="https://adonomicstechnology.com/ppc" />
        <meta
          property="og:title"
          content="PPC Advertising | Adonomics Technology"
        />
        <meta
          property="og:description"
          content="Discover how PPC advertising can drive traffic and conversions for your business. Get started with Adonomics Technology today!"
        />
        <meta
          property="og:image"
          content="https://adonomicstechnology.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnology.com/ppc" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Digital Marketing"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              PPC Advertising
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              The Fast Track to More Clicks, Customers, and Conversions
            </p>
            <Link to="/contact">
              <button className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Let's be honest. Getting attention online these days is no small
            feat. Every brand is trying to grab the same eyeballs, and most
            people scroll past ads without a second thought. That's exactly why
            PPC advertising has become such a powerful tool.
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-12">
            <p className="text-yellow-700 font-medium">
              It doesn't just put your business in front of people. It puts you
              in front of the right people, at the right time, when they are
              actually looking for what you offer.
            </p>
          </div>
          <p className="text-lg md:text-xl text-gray-700">
            At Adonomics Technology, we look at PPC as more than just paid
            search. To us, it’s about creating smart, strategic campaigns that
            generate real, trackable results. Whether your goal is more clicks,
            more calls, or more conversions, we craft every campaign with one
            purpose—getting you noticed and bringing in business.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Makes PPC So Effective?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Pay Only for Results
              </h3>
              <p className="text-gray-600">
                PPC, or pay-per-click advertising, is exactly what it sounds
                like. You only pay when someone clicks on your ad. That means
                your budget goes toward actual leads, not just random
                impressions.
              </p>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Instant Visibility
              </h3>
              <p className="text-gray-600">
                For businesses that need results fast, PPC is a game-changer.
                You don’t need to wait six months for a search engine to pick up
                your content. Once your campaign is up and running, your ads can
                show up within minutes. That means you can start driving traffic
                and collecting leads almost immediately.
              </p>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Complete Control
              </h3>
              <p className="text-gray-600">
                And unlike many traditional forms of advertising, PPC gives you
                full control. You decide how much to spend, which keywords to
                target, where your ads show up, and even what times they appear.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Strategy"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Strategy Matters More Than Spend
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-red-700 font-medium">
                Now here’s where many companies go wrong. They think PPC is just
                about paying more than the next guy. But Adonomics knows better.
                It’s not just about who spends the most. It’s about who spends
                the smartest.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              We start every campaign by digging into research. We identify
              which search terms your audience is actually using, then build ad
              groups and messaging that speak directly to those needs.
            </p>
            <p className="text-gray-700 mb-4">
              We test everything—from headlines to landing pages—so we know what
              works and what doesn’t. Then we optimize. Constantly. That’s the
              Adonomics difference. We’re not interested in guesswork or generic
              templates. Every campaign is tailored to your brand, your goals,
              and your audience.
            </p>
          </div>
        </div>
      </div>

      {/* For Small Businesses Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            PPC Isn't Just for the Big Guys
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8">
              Some people assume that PPC is only for big corporations with huge
              budgets. That’s simply not true. At Adonomics, we’ve helped small
              businesses make a big splash with modest ad spends.
            </p>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg mb-8">
              <p className="text-black text-2xl font-bold italic">
                "You don't need a million-dollar budget. You need a sharp
                strategy, clear goals, and a team that knows how to get
                results."
              </p>
            </div>
            <p className="text-xl mb-8">
              Whether you’re a local service provider, an e-commerce store, or a
              startup trying to make your mark, PPC can level the playing field.
              It gives you a chance to compete with larger brands and win
              attention in competitive markets.
            </p>
          </div>
        </div>
      </div>

      {/* Transparency Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <img
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"
              alt="Transparency"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              We Make It Simple and Transparent
            </h2>
            <p className="text-gray-700 mb-4">
              One of the biggest challenges businesses face with digital ads is
              understanding what they’re paying for. With Adonomics, you’re
              never left in the dark. We provide regular reports, break down the
              numbers in plain English, and walk you through what’s working and
              what needs to change. We believe in transparency, clarity, and
              results. No fluff. No fancy talk. Just straightforward support and
              smart advertising.
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Regular performance reports
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Numbers explained in plain English
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Clear recommendations for improvement
                </span>
              </li>
            </ul>
            <p className="text-gray-700 font-semibold">
              No fluff. No fancy talk. Just straightforward support and smart
              advertising.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get More Clicks, Customers, and Conversions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's talk about how PPC advertising can grow your business.
            Schedule a free consultation today!
          </p>
          <Link to="/contact">
            <button className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105">
              Get Your Free Strategy Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PPC;
