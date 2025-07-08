import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Display = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Helmet>
        <title>Display Advertising | Adonomics Technology</title>
        <meta
          name="description"
          content="Discover the power of display advertising with Adonomics Technology. Catch eyes and build brands across the web."
        />
        <meta
          name="keywords"
          content="Display Advertising, Digital Marketing, Adonomics Technology, Online Ads, Brand Recognition"
        />
        <meta name="author" content="Adonomics Technology" />
        <link
          rel="canonical"
          href="https://adonomicstechnology.com/display"
        />
        <meta
          property="og:title"
          content="Display Advertising | Adonomics Technology"
        />
        <meta
          property="og:description"
          content="Discover the power of display advertising with Adonomics Technology. Catch eyes and build brands across the web."
        />
        <meta property="og:image" content="Logo.webp" />
        <meta
          property="og:url"
          content="https://adonomicstechnology.com/display"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Digital Billboards"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Display Advertising
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Catching Eyes and Building Brands Across the Web
            </p>
            <Link to="/contact">
              <button className=" cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Boost Your Visibility
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Let's be honest—most people aren't jumping online with their wallets
            open. They're reading articles, scrolling through social media,
            watching videos, or checking their inbox. They're not always in a
            buying mood, but that doesn't mean they're not paying attention. And
            that's exactly why display advertising matters.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Digital Ads"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl text-gray-700">
                You've seen these ads before—banners, visuals, short videos that
                pop up on websites or apps you visit every day. They're not
                waiting for you to type something into a search bar. Instead,
                they quietly keep a brand in view while you go about your online
                routine. That kind of consistent presence builds familiarity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Targeting Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Precision Targeting That Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl border border-blue-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-300">
                Reach the Right People
              </h3>
              <p className="text-blue-900">
                What makes display ads powerful isn't just how many people they
                can reach—but how precisely they can reach the right people.
                Tools like Google's Display Network let businesses target by
                location, age, interests, or even the kind of content someone's
                been browsing.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl border border-blue-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-300">
                Contextual Placement
              </h3>
              <p className="text-blue-900">
                Planning a trip? You might spot a travel ad on a blog. Into
                health and wellness? A fitness brand might show up while you're
                reading about meal prep or workouts. We match your ads with
                relevant content to increase engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Recognition Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Building Lasting Recognition
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800 font-medium">
                Display advertising isn't just about getting someone to click
                right away. Sure, clicks are great—but recognition is what
                sticks.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              When an ad looks clean, professional, and well-placed, people take
              note. Then, when they're ready to make a decision down the road,
              your brand's already in the running.
            </p>
            <p className="text-gray-700">
              That's exactly the kind of strategy we focus on at Adonomics
              Technology. We're not in the business of just "running ads." We
              create visuals that grab attention without being pushy.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Brand Recognition"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Display Advertising Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Relatable Messaging</h3>
              <p className="text-gray-600">
                We write clear, relatable messages that feel like they're
                speaking to the right people.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Strategic Placement</h3>
              <p className="text-gray-600">
                We carefully pick where those ads show up—because where your
                brand appears says a lot about your business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Retargeting</h3>
              <p className="text-gray-600">
                If someone visits your website but doesn't take action, we use
                smart display ads to remind them of what they saw.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Retargeting Focus Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Retargeting"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Power of Retargeting
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-blue-800 font-medium">
                One thing we're big on? Retargeting. If someone visits your
                website but doesn't take action, we don't let them forget you.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              Instead, we use smart display ads to remind them of what they saw.
              Sometimes, that second (or third) look is what turns a curious
              visitor into a paying customer.
            </p>
            <p className="text-gray-700">
              Online attention is limited—and competition is everywhere. But
              when done right, display advertising keeps your brand from getting
              lost in the noise. It helps you stay visible, build trust, and
              grow in a way that feels natural and lasting.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Brand Unforgettable?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create display ads that don't just get seen—they get
            remembered.
          </p>
          <Link to="/contact">
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105">
              Start Your Display Campaign
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Display;
