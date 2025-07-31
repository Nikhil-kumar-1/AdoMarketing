import React from 'react'
import SEOPageLayout from './Layouts/SEOPageLayout'
import { Helmet } from 'react-helmet-async';
function Roofing() {
  return (
    <>
    <Helmet>
        <title>Roofing SEO Services | Boost Your Roofing Business</title>
        <meta
        name="description"
        content="Elevate your roofing business with targeted SEO strategies. Get more leads and grow your roofing services with our expert SEO strategies."
        />
        <meta
        name="keywords"
        content="Roofing SEO, Roofing Services SEO, Roofer SEO, Roofing Business Marketing, Roofing Website SEO"
        />
        <meta
        property="og:title"
        content="Roofing SEO Services | Boost Your Roofing Business"
        />
        <meta
        property="og:description"
        content="Elevate your roofing business with targeted SEO strategies. Get more leads and grow your
roofing services with our expert SEO strategies."

        />
        <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com/homeservices/roofing" />
        <meta property="og:type" content="website" />
    </Helmet>
    <SEOPageLayout
        industry="Roofing"
        hero={{
          title: "Elevate Your Roofing Business with Targeted SEO",
            subtitle: "Get more leads and grow your roofing services with our expert SEO strategies.",
            image: "https://images.unsplash.com/photo-1657262585548-b12220e644f0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        stats={[
            {
                icon: "search",
                title: "+300% Organic Traffic",
                subtitle: "for roofing websites",
            },
            {
                icon: "rocket",
                title: "Fast Ranking Boost",
                subtitle: "within 2 months average",
            },
            {
                icon: "bullhorn",
                title: "200+ Keywords Optimized",
                subtitle: "for roofing services and products",
            },
        ]}
        comprehensive={{
            title: "Complete Roofing SEO Services",
            items: [
                "Keyword targeting for roofing terms",
                "Optimized landing pages for roofing services",
                "Content marketing for roofing services",
                "Local SEO for roofing businesses",
            ],
            image: "https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        benefits={[
            {
                icon: "search",
                title: "Roofing-Focused SEO",
                description:
                    "We understand the roofing buyer's intent and how to rank your services for it.",
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
                    "SEO strategies that resonate with local communities and homeowners.",
            },
        ]}
        faqs={[
            { q: "Do you optimize for local searches?", a: "Yes, we focus on local SEO to attract nearby customers." },
            { q: "How long does it take to see results?", a: "Most clients see significant improvements within 2-3 months." },
            { q: "What types of roofing services do you cover?", a: "We cover all types of roofing services including residential, commercial, and specialized roofing." },
        ]}
        />
    </>
  )
}

export default Roofing