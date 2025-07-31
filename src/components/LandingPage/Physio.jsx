import React from 'react'
import SEOPageLayout from './Layouts/SEOPageLayout'
import { Helmet } from 'react-helmet-async';
function Physio() {
  return (
    <>
    <Helmet>
        <title>Physio SEO Services | Boost Your Physio Practice</title>
        <meta 
        name="description"
        content="Elevate your physio practice with targeted SEO strategies. Attract more patients and grow your practice with specialized search strategies."
        />
        <meta
        name="keywords"
        content="Physio SEO, Physiotherapy SEO, Physio Clinic SEO, Physio Practice
        Marketing, Physiotherapy Marketing"
        />
        <meta
        property="og:title"
        content="Physio SEO Services | Boost Your Physio Practice"
        />
        <meta
        property="og:description"
        content="Elevate your physio practice with targeted SEO strategies. Attract more patients and grow your practice with specialized search strategies."
        />
        <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com/healthcare/physio" />
        <meta property="og:type" content="website" />
    </Helmet>
    <SEOPageLayout
        industry="Physio"
        hero={{
          title: "Transform Your Physio Practice with Targeted SEO",
            subtitle: "Attract more patients and grow your practice with specialized search strategies.",
            image: "https://images.unsplash.com/photo-1645005512942-a17817fb7c11?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        stats={[
            {
                icon: "search",
                title: "+400% Organic Traffic",
                subtitle: "for physio clinics",
            },
            {
                icon: "rocket",
                title: "Fast Ranking Boost",
                subtitle: "within 3 months average",
            },
            {
                icon: "bullhorn",
                title: "300+ Keywords Optimized",
                subtitle: "for physiotherapy services",
            },
        ]}
        comprehensive={{
            title: "Complete Physio SEO Services",
            items: [
                "Keyword targeting for physio terms",
                "Optimized landing pages for physio services",
                "SEO-friendly content for physio clinics",
                "Local SEO for physiotherapy practices",
            ],
            image: "https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        benefits={[
            {
                icon: "search",
                title: "Physio-Focused SEO",
                description:
                    "We understand the physio buyer's intent and how to rank your services for it.",
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
                    "SEO strategies that resonate with patients and their families.",
            },
        ]}
        faqs={[
            { q: "Do you optimize for local searches?", a: "Yes, we focus on local SEO to attract nearby patients." },
            { q: "Can you help a new physio clinic?", a: "Absolutely, we build SEO foundations from the ground up." },
            { q: "How do you measure results?", a: "We track keyword ranks, traffic, conversions, and patient inquiries." },
        ]}
    />
    </>
  )
}

export default Physio