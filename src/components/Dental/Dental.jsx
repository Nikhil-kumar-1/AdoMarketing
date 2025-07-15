import React from "react";

const DentalSEOLandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-50 to-cyan-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Dental background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Grow Your Dental Practice with <span className="text-blue-600">Proven SEO</span> Strategies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get more patients searching for dentists in your area. Our specialized dental SEO services help you rank higher on Google and attract quality leads.
            </p>
            <div className="flex items-center mb-8">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-700">Rated 4.9/5 from 2,492+ dental practices</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg">
              <h3 className="font-bold text-lg mb-4">Get Your Free SEO Audit</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter your website URL"
                  className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition">
                  Analyze
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Dentist with patient" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* Trusted By Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-500 text-sm uppercase font-semibold tracking-wider mb-6">Trusted by dental practices worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img 
                key={i}
                src={`https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80&${i}`}
                alt={`Client logo ${i}`}
                className="h-12 object-contain opacity-70 hover:opacity-100 transition mx-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialized Dental SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of dental practices and deliver customized SEO solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local SEO Dominance",
                description: "Rank at the top of Google's local 3-pack for dental searches in your area.",
                icon: "📍"
              },
              {
                title: "Website Optimization",
                description: "Technical SEO improvements to make your site load faster and rank higher.",
                icon: "⚙️"
              },
              {
                title: "Content Marketing",
                description: "Educational blog posts that attract patients and establish your authority.",
                icon: "✍️"
              },
              {
                title: "Google My Business",
                description: "Complete optimization of your GMB profile to maximize local visibility.",
                icon: "📌"
              },
              {
                title: "Review Management",
                description: "Get more 5-star reviews and manage your online reputation effectively.",
                icon: "⭐"
              },
              {
                title: "Conversion Optimization",
                description: "Turn more website visitors into booked appointments with proven strategies.",
                icon: "📈"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition group">
                <div className="text-4xl mb-4 group-hover:text-blue-600 transition">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-grey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Proven Results for Dental Practices</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "25K+", label: "Patients Booked" },
              { value: "50K+", label: "5-Star Reviews" },
              { value: "1000+", label: "Happy Practices" },
              { value: "25M+", label: "Revenue Generated" }
            ].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            See Case Studies
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your practice size and growth goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$400",
                period: "/month",
                bestValue: false,
                description: "Perfect for new practices or low competition areas",
                features: [
                  "1 Location Targeting",
                  "Basic On-Page SEO",
                  "Google My Business Setup",
                  "5 Monthly Citations",
                  "1 Guest Post/Month",
                  "Weekly Reporting"
                ]
              },
              {
                name: "Growth",
                price: "$600",
                period: "/month",
                bestValue: true,
                description: "Our most popular plan for established practices",
                features: [
                  "2 Location Targeting",
                  "Advanced On-Page SEO",
                  "GMB Optimization",
                  "10 Monthly Citations",
                  "2 Guest Posts/Month",
                  "Local Link Building",
                  "Daily Monitoring"
                ]
              },
              {
                name: "Enterprise",
                price: "$1,300",
                period: "/month",
                bestValue: false,
                description: "For large practices in competitive markets",
                features: [
                  "3+ Location Targeting",
                  "Full Technical SEO Audit",
                  "Premium GMB Management",
                  "20+ Monthly Citations",
                  "3 Guest Posts/Month",
                  "Advanced Link Building",
                  "Competitor Analysis",
                  "Dedicated Account Manager"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl overflow-hidden shadow-lg ${plan.bestValue ? "border-2 border-blue-500 transform md:-translate-y-4" : "border border-gray-200"}`}
              >
                {plan.bestValue && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold ${plan.bestValue ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"} transition`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from dental practices we've helped grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                practice: "Bright Smile Dentistry",
                avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
                quote: "Our patient volume increased by 60% within 6 months of working with DentalSEOPro. Their local SEO strategies are unmatched in the dental industry.",
                rating: 5
              },
              {
                name: "Dr. Michael Chen",
                practice: "City Dental Group",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
                quote: "The team understood exactly what our multi-location practice needed. We're now ranking #1 for all our target keywords across all locations.",
                rating: 5
              },
              {
                name: "Dr. Emily Rodriguez",
                practice: "Family Dental Care",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
                quote: "From the first consultation to ongoing support, their transparency and expertise have been invaluable to our practice's growth.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.practice}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get More Patients?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how our dental SEO services can transform your practice.
          </p>
          <button className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Book Free Strategy Call
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our dental SEO services.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "How long does it take to see results from dental SEO?",
                answer: "Most practices start seeing improvements within 3-6 months, with significant results typically appearing between 6-12 months. The timeline depends on factors like your current website status, competition in your area, and the specific strategies we implement."
              },
              {
                question: "Do you work with dental practices outside the US?",
                answer: "Yes! We've successfully helped dental practices in Canada, the UK, Australia, and other countries. Our strategies are adapted to work with local search engines and directories specific to each region."
              },
              {
                question: "What makes dental SEO different from regular SEO?",
                answer: "Dental SEO requires specialized knowledge of healthcare marketing regulations, understanding of patient search behavior for dental services, and optimization for local search results where most dental patients originate. We also focus on conversion optimization specific to dental appointment booking."
              },
              {
                question: "How do you measure success?",
                answer: "We track multiple key performance indicators including keyword rankings, website traffic, lead conversions, and most importantly - the number of new patients attributed to our efforts. You'll receive detailed monthly reports showing all these metrics."
              },
              {
                question: "Can you help with our website design too?",
                answer: "Absolutely. While our primary focus is SEO, we offer website design services specifically optimized for dental practices. This includes mobile responsiveness, fast loading speeds, and conversion-focused design elements - all critical for SEO success."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="p-6 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default DentalSEOLandingPage;