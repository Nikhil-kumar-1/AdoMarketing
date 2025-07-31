import React from 'react'
import SEOPageLayout from './Layouts/SEOPageLayout'
import { Helmet } from 'react-helmet-async';
function Wellness() {
  return (
    <>
    <Helmet>
        <title>Wellness SEO Services | Boost Your Wellness Brand</title>
        <meta
        name="description"
        content="Elevate your wellness brand with targeted SEO strategies. Get your wellness brand discovered by
health enthusiasts and increase your online visibility."
        />
        <meta
        name="keywords"
        content="Wellness SEO, Health and Wellness SEO, Wellness Products SEO, eCommerce SEO, Wellness Marketing"
        />
        <meta
        property="og:title"
        content="Wellness SEO Services | Boost Your Wellness Brand"
        />
        <meta
        property="og:description"
        content="Elevate your wellness brand with targeted SEO strategies. Get your wellness brand discovered by health enthusiasts and increase your online visibility."
        />
        <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
        property="og:url"
        content="https://adonomicstechnologies.com/healthcare/wellness-centre"
        />
        <meta
        property="og:type"
        content="website"
        />
    </Helmet>
    <SEOPageLayout
        industry="Wellness"
        hero={{
          title: "Elevate Your Wellness Brand with Targeted SEO",
            subtitle: "Get your wellness brand discovered by health enthusiasts with our expert SEO strategies.",
            image: "https://images.unsplash.com/photo-1602827114685-efbb2717da9f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        stats={[
            {
                icon: "search",
                title: "+500% Organic Traffic",
                subtitle: "for wellness brands",
            },
            {
                icon: "rocket",
                title: "Fast Ranking Boost",
                subtitle: "within 3 months average",
            },
            {
                icon: "bullhorn",
                title: "400+ Keywords Optimized",
                subtitle: "for wellness products and services",
            },
        ]}
        comprehensive={{
            title: "Complete Wellness SEO Services",
            items: [
                "Keyword targeting for wellness terms",
                "Content optimization for wellness content",
                "On-page optimization for wellness websites",
                "Link building for wellness websites",
            ],
            image: "https://images.unsplash.com/photo-1643682661119-28da0685be2c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        benefits={[
            {
                icon: "search",
                title: "Wellness-Focused SEO",
                description:
                    "We understand the wellness buyer's intent and how to rank your services for it.",
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
                    "SEO strategies that resonate with health enthusiasts and their communities.",
            },
        ]}
        faqs={[
            { q: "Do you optimize for local wellness searches?", a: "Yes, we focus on local SEO to attract nearby clients." },
            { q: "Can you help a new wellness brand?", a: "Absolutely, we build SEO foundations from the ground up." },
            { q: "How do you measure results?", a: "We track keyword ranks, traffic, conversions, and revenue." },
        ]}
    />
    </>
  )
}

export default Wellness