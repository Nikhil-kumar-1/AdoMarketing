import React from 'react';
import { Helmet } from 'react-helmet-async';

const Bakery = () => {
  return (
    <>
      <Helmet>
        <title>FreshBake Artisan Bakery | Organic Breads & Pastries | [City]</title>
        <meta name="description" content="[City]'s premier organic bakery specializing in handcrafted breads, pastries and custom cakes. Fresh ingredients, traditional methods." />
        <meta name="keywords" content="organic bakery, fresh bread, artisanal pastries, custom cakes, [City] bakery" />
        <meta property="og:title" content="FreshBake Artisan Bakery - Organic & Delicious" />
        <meta property="og:description" content="Discover [City]'s favorite bakery for organic, handcrafted breads and pastries made fresh daily." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.freshbake.com" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="relative h-96 bg-gradient-to-r from-[#66BB44] to-[#0074CC] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1608190003443-86ab6a1d068e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">FreshBake Artisan Bakery</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">Organic breads & pastries made with love since 2012</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-[#0074CC] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
                View Menu
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
                Order Online
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0074CC] text-center mb-12">Why Customers Love Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#66BB44]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#66BB44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Certified Organic</h3>
                <p className="text-gray-600">All our ingredients are certified organic and sourced from local farmers.</p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#66BB44]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#66BB44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Baked Fresh Daily</h3>
                <p className="text-gray-600">We bake in small batches throughout the day for maximum freshness.</p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#66BB44]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#66BB44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Variety of Options</h3>
                <p className="text-gray-600">From gluten-free to vegan, we have options for every dietary need.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0074CC] mb-4">Our Signature Bakes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Handcrafted using traditional methods and the finest ingredients</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                    alt="Artisan sourdough bread" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#66BB44] text-white px-3 py-1 rounded-full text-xs font-bold">
                    BESTSELLER
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Country Sourdough</h3>
                  <p className="text-gray-600 mb-4">72-hour fermented sourdough with perfect crust and airy crumb.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#0074CC]">$8.50</span>
                    <button className="bg-[#0074CC] hover:bg-[#0062b3] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1989&q=80" 
                    alt="Chocolate fudge cake" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#0074CC] text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Chocolate Decadence</h3>
                  <p className="text-gray-600 mb-4">Triple-layer chocolate cake with ganache and fresh berries.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#0074CC]">$32.00</span>
                    <button className="bg-[#0074CC] hover:bg-[#0062b3] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Fresh croissants" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#66BB44] text-white px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Butter Croissants</h3>
                  <p className="text-gray-600 mb-4">Flaky, buttery layers made with premium European butter.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#0074CC]">$4.50</span>
                    <button className="bg-[#0074CC] hover:bg-[#0062b3] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-[#66BB44] hover:bg-[#5aa73d] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
                View Full Menu
              </button>
            </div>
          </div>
        </section>

        {/* Bakery Story */}
        <section className="py-20 bg-[#0074CC] text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="bg-white p-1 rounded-xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742059-47b93231f536?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8YmFrZXJ5fGVufDB8fDB8fHww" 
                    alt="Baker kneading dough at FreshBake" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Artisan Story</h2>
                <p className="text-white/90 mb-4">
                  Founded in 2012 by master baker Elena Rodriguez, FreshBake began as a small stall at the [City] farmers market. What started as a passion for traditional baking methods has grown into [City]'s favorite artisan bakery.
                </p>
                <p className="text-white/90 mb-6">
                  We believe in slow fermentation, organic ingredients, and baking with respect for both the craft and our environment. Every loaf tells a story of patience and care.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-[#0074CC] hover:bg-gray-100 font-semibold px-6 py-3 rounded-full shadow-lg transition-all">
                    Our Bakers
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full shadow-lg transition-all">
                    Our Process
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0074CC] text-center mb-12">Customer Reviews</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 mr-2">
                    ★★★★★
                  </div>
                  <span className="text-sm text-gray-600">1 week ago</span>
                </div>
                <p className="text-gray-700 italic mb-4">"The sourdough bread is absolutely phenomenal! I've been coming here every Saturday for the past year and it never disappoints."</p>
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/43.jpg" 
                    alt="Sarah J." 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Sarah J.</p>
                    <p className="text-sm text-gray-500">Local Food Blogger</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 mr-2">
                    ★★★★★
                  </div>
                  <span className="text-sm text-gray-600">2 weeks ago</span>
                </div>
                <p className="text-gray-700 italic mb-4">"Ordered a birthday cake for my daughter and it was both beautiful and delicious. The staff went above and beyond with the decoration."</p>
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Michael T." 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Michael T.</p>
                    <p className="text-sm text-gray-500">Regular Customer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 mr-2">
                    ★★★★★
                  </div>
                  <span className="text-sm text-gray-600">3 weeks ago</span>
                </div>
                <p className="text-gray-700 italic mb-4">"As someone with gluten sensitivity, I'm so grateful for their gluten-free options that actually taste amazing!"</p>
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg" 
                    alt="Priya K." 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Priya K.</p>
                    <p className="text-sm text-gray-500">New Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 bg-[#66BB44] text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="md:flex items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-6">Visit Our Bakery</h2>
                <p className="text-white/90 mb-6 text-lg">
                  Come experience the warmth of our oven and the aroma of freshly baked goods
                </p>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Baker Street, [City], [State] [ZIP]</span>
                  </p>
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(555) 123-4567</span>
                  </p>
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Monday - Saturday: 7AM - 6PM<br />Sunday: 8AM - 4PM</span>
                  </p>
                </div>
                <button className="mt-8 bg-white text-[#66BB44] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
                  Get Directions
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-1 rounded-xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D" 
                    alt="Map to FreshBake Bakery" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#0074CC] mb-4">Join Our Bakery Club</h2>
            <p className="text-gray-600 mb-8">Sign up for our newsletter and get 10% off your first order plus exclusive offers</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66BB44] focus:border-transparent"
              />
              <button className="bg-[#66BB44] hover:bg-[#5aa73d] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bakery;