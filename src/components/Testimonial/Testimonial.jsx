import React,{ useState} from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const TestimonialAndContact = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "This service transformed our business! Our online visibility increased by 300% in just 3 months.",
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      quote:
        "The most professional team we've worked with. They delivered beyond our expectations.",
      name: "Michael Chen",
      role: "CEO, GreenStart",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      quote:
        "Our social media engagement skyrocketed after implementing their strategies. Highly recommended!",
      name: "Emma Rodriguez",
      role: "Brand Manager, StyleHub",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];
  const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      message: "",
      subject:""
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    emailjs.sendForm('service_mcwrpxo', 'template_kgwrfqe', e.target, 'YvKuhnTIxk7h_qqYN')
      .then(() => {
        alert("Thank you for your message! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "", subject:"" }); 
      }, (error) => {
        console.log('Error:', error.text);
      });
  };

  return (
    <section className="py-16 bg-grey-500">
      <div className="container mx-auto px-4">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center  mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-green-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-green-300"
                  />
                  <div>
                    <h4 className="font-bold text-green-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-green-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="bg-green-600 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-green-100 text-lg max-w-2xl mx-auto">
                Get in touch with our team to discuss how we can help you
                achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Form - Left Side */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-green-100 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-green-700 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-green-100 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-green-700 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-green-100 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-green-700 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-green-100 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-green-700 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-green-100 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-green-700 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    className="cursor-pointer bg-white text-green-600 px-8 py-3 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all w-full md:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>

              {/* Map - Right Side */}
              <div className="h-full w-full rounded-xl overflow-hidden shadow-lg bg-green-700 border border-green-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.830170240013!2d85.057102!3d25.610559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57000128084f%3A0x114cc0e9c5f09acf!2sRN%20tower!5e0!3m2!1sen!2sin!4v1747911973435!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  className="min-h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAndContact;