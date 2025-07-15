import React from "react";
import {
  FaStar,
  FaSearch,
  FaChartLine,
  FaMapMarkerAlt,
  FaThumbsUp,
  FaGlobe,
  FaQuoteLeft,
  FaCheck,
} from "react-icons/fa";

const Dental = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Increase Your Practice's Visibility With a Dental SEO Agency
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a dental SEO marketing agency that specializes in using tried
            and tested optimization tactics. These tactics help maintain and
            improve your business's visibility on search engines. This helps
            potential patients find you when searching for dentists.
          </p>

          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <FaStar className="text-yellow-400 mr-2" />
              <span className="font-semibold">
                Rated 4.75/5 based on 2492 reviews.
              </span>
              <a href="#reviews" className="ml-2 text-blue-600 hover:underline">
                Check Reviews
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Request free website audit
            </h3>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your domain name"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              How Adonomics Technologies is the Best Dentist SEO Company
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Increase the Visibility of Your Dental Practice with Professional
              SEO Services from Adonomics Technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGlobe className="text-blue-600 text-3xl" />,
                title: "Decades of Expertise",
                desc: "For over 5 years, we have been aiding companies of all sizes and from various fields in growing their online presence. Through our experiences in different industries, we have developed highly effective orthodontic SEO tactics.",
              },
              {
                icon: <FaThumbsUp className="text-blue-600 text-3xl" />,
                title: "Award Winning Professionals",
                desc: "We have a team of highly skilled and experienced experts. We are dedicated to delivering exceptional results. Our goal is to help your dental practice reach its full potential online.",
              },
              {
                icon: <FaSearch className="text-blue-600 text-3xl" />,
                title: "Complete Transparency",
                desc: "At Adonomics Technologies, we believe that complete transparency is the foundation of a successful SEO partnership. From initial planning to implementation and beyond, we provide regular updates and communicate openly about our approach and progress.",
              },
              {
                icon: <FaChartLine className="text-blue-600 text-3xl" />,
                title: "Cost Effective",
                desc: "Our dentist SEO marketing packages are designed to accommodate dental practices of all sizes. Our team of experienced professionals provides the same excellent level of service to all our clients regardless of the package selected.",
              },
              {
                icon: <FaChartLine className="text-blue-600 text-3xl" />,
                title: "Detailed Analytics",
                desc: "Our SEO agency provides detailed analysis to track website performance, measure key performance indicators, and identify areas for improvement. Utilizing detailed analytics, we can uncover trends in website traffic.",
              },
              {
                icon: <FaMapMarkerAlt className="text-blue-600 text-3xl" />,
                title: "Result Sharing",
                desc: "Result sharing for dental SEO services allows dentists to track the success of their SEO campaigns. They can view keyword rankings, website traffic, and other metrics in real-time to see what is working.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            What are the benefits of using dental SEO for a dental practice?
          </h2>
          <p className="text-xl mb-8 max-w-4xl">
            As a dental business owner, it is important to invest in a dental
            marketing SEO strategy. This strategy will help to ensure that your
            website is at the top of the list for in-market patients.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8">
              Dental SEO Services for Dentists
            </h3>
            <h4 className="text-3xl font-bold mb-6">
              Outperform the Competition and Expand Your Patient Reach by 10
              Times!
            </h4>
            <p className="text-xl mb-8 max-w-4xl">
              Get ahead of the competition and attract more new patients with
              our SEO services. Nearly every patient turns to the top results on
              the first page of Google when searching for a dental practice.
              Attaining a high ranking on search engines can result in a
              significant increase in the acquisition of new patients. This
              ultimately leads to the flourishing of your dental practice.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-4 text-blue-900">
                  Minimizing Patient Acquisition Costs
                </h4>
                <p className="mb-4">
                  Affordable Dental SEO Solution: More Patients, Less Cost.
                  Nearly all patients searching for dental care utilize organic
                  search results to find the right provider.
                </p>
                <p>
                  By investing in dental SEO marketing, you can rank on the
                  first page of Google. This will help in generating organic
                  traffic to your website at a low cost. Research indicates that
                  for every dollar invested in dental SEO services, an average
                  return of $2.8 is generated.
                </p>
              </div>

              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-4 text-blue-900">
                  Optimizing Your Business for Google's Local 3-Pack and Local
                  SEO
                </h4>
                <p className="mb-4">
                  Are You Looking to Increase Your Local Patient Clientele?
                  Patients typically search for local dentists within a 5-mile
                  radius of their homes.
                </p>
                <p>
                  To appear on the Google local dentist search results page, you
                  need to optimize your Google My Business listing. This is done
                  with the help of a dental SEO expert. It will help you rank in
                  the Google Local 3-pack. Our experienced team for local SEO
                  for dentists can help you maximize your visibility on local
                  searches.
                </p>
              </div>

              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-4 text-blue-900">
                  Transform Search Queries into New Patients
                </h4>
                <p className="mb-4">
                  Maximizing Conversion Rates through Optimal Dental Website
                  Optimization. Website optimization is essential for the
                  success of your dental website SEO strategy.
                </p>
                <p>
                  We optimize your website to help it appear on the top Google
                  search results. This helps retain visitors' attention, boost
                  users' engagement, and encourage them to make appointments
                  with your dentists - all with website optimization.
                </p>
              </div>

              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-4 text-blue-900">
                  Optimizing GMB and Local Maps for Maximum Visibility
                </h4>
                <p>
                  Get More Dental Appointments with Our Proven Google My
                  Business and Google Map Optimization Strategies. Our team can
                  help your practice stand out in Google's local search results,
                  leading to increased foot traffic to your dental office with
                  the help of local dental SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
            Adonomics Technologies Infotech SEO Campaign Process
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            In the competitive world of internet marketing, strategy should
            never be an afterthought. That's why we have a detailed SEO Campaign
            Process planned for you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "STEP 1", title: "Website & Competitive Analysis" },
              { step: "STEP 2", title: "Keyword Research" },
              { step: "STEP 3", title: "Website On-Page Optimization" },
              { step: "STEP 4", title: "Manual Link building" },
              { step: "STEP 5", title: "Submissions to Trusted sites" },
              { step: "STEP 6", title: "Weekly Keyword Ranking Reports" },
              { step: "STEP 7", title: "Monthly SEO Performance Reports" },
              {
                step: "STEP 8",
                title: "Permanent Traffic, Leads, Income, ROI",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              >
                <span className="text-blue-600 font-bold">{item.step}</span>
                <h4 className="text-xl font-bold mt-2 text-blue-900">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-gray-600">
                Over 10K Patients Booked Last Quarter
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">12M+</div>
              <p className="text-gray-600">
                We Drive More Than 12 Million In Measurable Revenue Per Month
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">
                Practices Choose Adonomics Technologies
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">20K+</div>
              <p className="text-gray-600">
                Pozative Has Generated More Than 20K 5-Star Reviews!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Get Ready to Shine: Why Dental SEO Service is Essential for Your
            Dentist Practice
          </h2>
          <p className="text-xl mb-12 max-w-4xl">
            A successful digital marketing strategy for website optimization
            using SEO for dentists can help with the increase in patient
            acquisition. A higher volume of patients leads to appointments and
            revenue for your practice.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                value: "53%",
                text: "Studies have revealed that, on average, about 53% of website traffic is generated by organic search.",
              },
              {
                value: "80%",
                text: "Approximately 80% of adults conduct local searches for dentists before reaching out to one.",
              },
              {
                value: "10x",
                text: "With a well-planned dental SEO strategy, the search traffic conversions can increase by up to 10 times.",
              },
              {
                value: "71%",
                text: "Around 71% of patients decide on a dentist based on customer reviews rather than the recommendation of a dental professional.",
              },
              {
                value: "86%",
                text: "Approximately 86% of the website's traffic originates from its top-five organic keywords.",
              },
              {
                value: "61%",
                text: "Today, 61% of dentists are utilizing search engine optimization (SEO) strategies to boost their online visibility.",
              },
            ].map((stat, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-4">{stat.value}</div>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let's talk about your dental SEO strategy
          </h2>
          <p className="text-xl mb-8">
            A comprehensive dental SEO marketing strategy puts your website at
            the top of potential and in-market patients' choices.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Dental SEO Pricing & Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive dental SEO marketing strategy puts your website at
              the top of potential and in-market patients' choices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Local Basic
              </h3>
              <div className="text-4xl font-bold mb-4">
                $400 <span className="text-lg text-gray-500">/ Per Month</span>
              </div>
              <p className="text-gray-600 mb-6">
                For Lower Population Areas (Under 200k) And Low Competition
                Niches
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> 01 Targeted
                  Location
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> On-Page
                  Optimization
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Google Business
                  Profile Optimization
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Schema Markup
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Citation
                  Submission: 5
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Guest Posts: 1
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Map Stack: 1
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Choose Plan
              </button>
            </div>

            <div className="border-2 border-blue-500 rounded-lg p-8 shadow-lg transform scale-105 z-10 bg-white">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Local Intermediate
              </h3>
              <div className="text-4xl font-bold mb-4">
                $600 <span className="text-lg text-gray-500">/ Per Month</span>
              </div>
              <p className="text-gray-600 mb-6">
                For Medium Population Areas (Around 500k) And Mid Competition
                Niches
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Up to 2 Targeted
                  Locations
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> On-Page
                  Optimization
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Google Business
                  Profile Optimization
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Schema Markup
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Citation
                  Submission: 5
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Guest Posts: 2
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Map Stack: 2
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Choose Plan
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Local High-Level
              </h3>
              <div className="text-4xl font-bold mb-4">
                $1300 <span className="text-lg text-gray-500">/ Per Month</span>
              </div>
              <p className="text-gray-600 mb-6">
                Higher Population Areas (Around 500K to 2M) And Competitive
                Niches
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Up to 3 Targeted
                  Locations
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> On-Page
                  Optimization
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Google Business
                  Profile Optimization
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Schema Markup
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Citation
                  Submission: 10
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Guest Posts:3
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Map Stack: 3
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

     

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our clients are amazing!
            </h2>
            <p className="text-xl text-gray-600">
              We love to hear what they say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I am Philip Zemba from RISE MD and I highly recommend Adonomics Technologies. We have worked with the tons of different agencies and the two same problems kept cropping up is the issues with consistency in the content and issues with the communication. With Adonomics Technologies, both of those concerns were completely erased when we started working with them one and a half year ago.",
                name: "Philip Zemba",
                title: "Founder and CEO of RISE MD",
              },
              {
                quote:
                  "I'm Cristina, owner of Mrs. Property Solutions and has been associated with Adonomics Technologies since the beginning of 2020. Ishan and his team have been handling my two different websites. I'm very happy with the results. His team is very proactive in responding to all sorts of my queries and needs.",
                name: "Cristina",
                title: "Mrs. Property Solutions, USA",
              },
              {
                quote:
                  "A Quick Thank You to Adonomics Technologies and the team for the successful launch of our SEO campaign. We have long been avoiding getting into this but the results so far are very overwhelming for us. The team is very responsive, organized and available to answer all my concerns.",
                name: "Arno Markus",
                title: "CEO & Founder of iCareer Solutions",
              },
              {
                quote:
                  "Honestly, this was a trial project to determine if Adonomics Technologies can deliver. And I proudly conclude that they have done an incredible job. They adhere to white head SEO practices with an exceptional hold over project management.",
                name: "Prosper",
                title: "CEO of Live Long Social, Australia",
              },
              {
                quote:
                  "I am John from Design Me Marketing and I could not recommend Adonomics Technologies Enough! Dealing with Adonomics Technologies's team has always been a pleasure, They are phenomenal people who are always on top of all my client SEO and PPC projects.",
                name: "Johnny Ova",
                title: "Co-Founder of DesignMe",
              },
              {
                quote:
                  "The Adonomics Technologies team understands the problem and takes an initiative to sort it in a very involved and personal way. Even though Adonomics Technologies is a bit more expensive than other firms, the important point was that it isn't a very involved process from my end.",
                name: "Hursh Dodhia-Shah",
                title: "Director of Tradesign",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <FaQuoteLeft className="text-blue-400 text-2xl mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <h4 className="font-bold text-blue-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-900">
                Could you provide a definition of dental SEO?
              </h3>
              <p className="text-gray-600">
                Dental SEO is a process to optimize a dental practice's website.
                This optimization will help improve visibility and ranking in
                search engine results pages. It will also help the website show
                up for relevant keywords and phrases. This can include
                optimizing website content and structure, building backlinks,
                and creating local listings and citations. The goal of dental
                SEO is to improve visibility. This provides more potential
                patients and helps the practice grow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-900">
                What strategies can be adopted to achieve the best dental SEO
                rating for your website?
              </h3>
              <p className="text-gray-600">
                Our comprehensive approach includes thorough keyword research,
                on-page optimization, technical SEO improvements, content
                creation, local SEO strategies, link building, and regular
                performance tracking. We tailor our strategies to your specific
                practice needs and local market conditions to ensure maximum
                visibility and patient acquisition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-900">
                Can you use dental SEO strategies to rank for two different
                locations?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in multi-location SEO strategies that
                help dental practices with multiple offices rank effectively in
                each of their service areas. Our geo-targeted approach ensures
                each location gets proper visibility in local search results
                while maintaining a cohesive brand presence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-900">
                What is the importance of digital marketing from the best dental
                SEO companies for dentists?
              </h3>
              <p className="text-gray-600">
                In today's digital age, most patients search for dental services
                online before making an appointment. A strong digital marketing
                strategy ensures your practice appears when potential patients
                are actively searching. It builds trust, establishes authority,
                and helps you stand out from competitors. Our specialized dental
                SEO services focus on converting searchers into patients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-900">
                How long will it take for the dental SEO strategy to return
                results?
              </h3>
              <p className="text-gray-600">
                SEO is a long-term strategy, but we typically start seeing
                initial improvements within 3-6 months. Significant results
                usually appear between 6-12 months as your website gains
                authority. The timeline depends on factors like your current
                online presence, competition in your area, and the specific
                strategies we implement. We provide regular progress reports so
                you can track improvements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-900">
                Is it possible for patients to discover my service through
                Google Maps?
              </h3>
              <p className="text-gray-600">
                Yes! Google Maps is a crucial component of local SEO. We
                optimize your Google My Business profile and local citations to
                ensure your practice appears prominently in map searches. Many
                patients use "dentist near me" searches that display map
                results, making this an essential channel for attracting new
                patients to your practice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-blue-900">
                How many patients can I expect with your Dental SEO services?
              </h3>
              <p className="text-gray-600">
                While we can't guarantee specific numbers (no ethical SEO
                company should), our clients typically see a 3-5x increase in
                website traffic and a significant boost in appointment requests.
                The exact results depend on factors like your location,
                competition, services offered, and current online presence. We
                focus on attracting high-quality leads that are more likely to
                convert into long-term patients.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Dental;
