import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
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
    emailjs
      .sendForm(
        "service_qy56rhi",
        "template_frdq98g",
        e.target,
        "sn-1NVMEL9d-jfHrj"
      )
      .then(
        () => {
          alert("Thank you for your message! We will contact you soon.");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Contact, Adonomics Technologies, digital marketing agency, Patna, Bihar, India"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Get in touch with Adonomics Technologies. We are here to help you with your digital marketing needs."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/contact"
        />
        <meta
          property="og:title"
          content="Contact Us | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Get in touch with Adonomics Technologies. We are here to help you with your digital marketing needs."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-500 py-20"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-6 relative z-10 mt-10">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white text-center mb-4"
            >
              Contact <span className="text-yellow-300">Adonomics</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-white text-center max-w-2xl mx-auto"
            >
              Let's build something amazing together
            </motion.p>
          </div>
        </motion.div>

        {/* Contact Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-800">
                Get in touch with Adonomics
              </h2>
              <p className="text-lg text-gray-600">
                We'd love to hear from you! Whether you have questions, need
                support, or want to discuss a project, feel free to reach out.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Phone number
                    </h3>
                    <p className="text-gray-600">9955669590</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Email address
                    </h3>
                    <p className="text-gray-600">
                      info@adonomicstechnologies.com
                    </p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      3rd Floor, H-61, Sector-63 ,Noida 201301
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Let's Collaborate Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
                <p className="mb-6">
                  Ready to take your business to the next level? Let's work
                  together to create something extraordinary.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="tel:9955669590"
                    className="bg-white text-emerald-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition inline-block"
                  >
                    Schedule Call
                  </a>
                  <a
                    href="mailto:info@adonomicstechnologies.com"
                    className="border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black cursor-pointer hover:bg-opacity-20 transition inline-block"
                  >
                    📨 Send an Email
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone No
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition flex items-center justify-center space-x-2"
                >
                  <span>Submit Message</span>
                  <FiSend className="text-lg" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 pb-16"
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <iframe
              title="Adonomics Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3597.830170240013!2d85.057102!3d25.610559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57000128084f%3A0x114cc0e9c5f09acf!2sRN%20tower!5e0!3m2!1sen!2sin!4v1747911973435!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;
