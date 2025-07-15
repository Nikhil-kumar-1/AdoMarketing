import React from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../About/About";
import Gallery from "../Gallery/Gallery";
import TestimonialAndContact from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";
import ServiceHome from "../Service/ServiceHome";

import ScrollServed from "../ScrollCompanyServed/ScrollServed";
import Scroll from "../Scroll/Scroll";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Adonomics Technologies </title>
        <meta
          name="keywords"
          content="Adonomics Technologies, Adonomics, digital marketing agency,  website development , digital marketing services in Patna, Patna,  digital marketing, SEO, social media marketing, PPC, content marketing, web development"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Welcome to our digital marketing agency. We offer a range of services to help your business grow online."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/" />
        <meta
          property="og:title"
          content="Adonomics Technologies - Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="Welcome to our digital marketing agency. We offer a range of services to help your business grow online."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Hero />
      <AboutSection />
      <Gallery />
      <ServiceHome />
      <ScrollServed />
      <TestimonialAndContact />
    </div>
  );
};

export default Home;
