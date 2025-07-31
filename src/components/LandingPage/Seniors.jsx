import React from 'react'
import SEOPageLayout from './Layouts/SEOPageLayout'
import { Helmet } from 'react-helmet-async';
function Seniors() {
  return (
    <>
    <Helmet>
        <title>Seniors SEO Services | Boost Your Senior Care Business</title>
        <meta
        name="description"
        content="Elevate your senior care business with targeted SEO strategies. Reach more seniors and enhance your online presence."
        />
        <meta
        name="keywords"
        content="Seniors SEO, Senior Care SEO, Elderly Care SEO, Senior Services Marketing, Senior Living SEO"
        />
        <meta
        property="og:title"
        content="Seniors SEO Services | Boost Your Senior Care Business"
        />
        <meta
        property="og:description"
        content="Elevate your senior care business with targeted SEO strategies. Reach more seniors and enhance
your online presence."
        />
        <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com/healthcare/seniorcare" />
        <meta property="og:type" content="website" />
        </Helmet>
    <SEOPageLayout
      industry="Seniors"
      hero={{
        title: "Boost Your Online Presence for Seniors",
        subtitle: "Reach More Seniors with Tailored SEO Services",
        image: "https://images.unsplash.com/photo-1675179182818-e3518274be24?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
        stats={[
            {
            icon: "search",
            title: "+300% Organic Traffic",
            subtitle: "for senior care websites",
            },
            {
            icon: "rocket",
            title: "Fast Ranking Boost",
            subtitle: "within 2 months average",
            },
            {
            icon: "bullhorn",
            title: "500+ Keywords Optimized",
            subtitle: "for senior services and products",
            },
        ]}
        comprehensive={{
        title: "Complete Senior Care SEO Services",
        items: [
            "Keyword targeting for senior care terms",
            "Local SEO for senior services",
            "Content optimization for senior care blogs",
            "On-page and off-page optimization",
        ],
        image: "https://images.unsplash.com/photo-1507851191112-1bb853d191fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      benefits={[
        {
          icon: "search",
          title: "Senior-Focused SEO",
          description:
            "We understand the senior buyer's intent and how to rank your services for it.",
        },
        {
          icon: "rocket",
          title: "Quick Implementation",
          description:
            "Experience rapid improvements with low-lift, high-impact actions.",
        },
        {
          icon: "bullhorn",
          title: "Community Engagement",
          description:
            "SEO strategies that resonate with seniors and their families.",
        },
      ]}
        faqs={[
            { q: "Do you optimize for local senior services?", a: "Yes, we focus on local SEO to connect you with nearby families." },
            { q: "Can you help a new senior care service?", a: "Absolutely, we build SEO foundations from the ground up." },
            { q: "How do you measure results?", a: "We track keyword ranks, traffic, conversions, and client inquiries." },
        ]}
    />
    </>
  )
}

export default Seniors