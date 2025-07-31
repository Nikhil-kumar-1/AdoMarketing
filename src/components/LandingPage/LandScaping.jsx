import React from 'react'
import SEOPageLayout from './Layouts/SEOPageLayout'
import { Helmet } from 'react-helmet-async';
function LandScaping() {
  return (
    <>
    <Helmet>
        <title>Landscaping SEO Services | Boost Your Landscaping Business</title>
        <meta
        name="description"
        content="Elevate your landscaping business with targeted SEO strategies. Attract more clients and grow
your landscaping services with our expert SEO strategies."
        />
        <meta
        name="keywords"
        content="Landscaping SEO, Gardening SEO, Landscape Design SEO, Lawn Care SEO, Landscaping Marketing"
        />
        <meta
        property="og:title"
        content="Landscaping SEO Services | Boost Your Landscaping Business"
        />
        <meta
        property="og:description"
        content="Elevate your landscaping business with targeted SEO strategies. Attract more clients and grow your landscaping services with our expert SEO strategies."
        />
        <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com/homeservices/landscaping" />
        <meta property="og:type" content="website" />
    </Helmet>
    <SEOPageLayout
        industry="Landscaping"
        hero={{
            title: "Transform Your Landscaping Business with Targeted SEO",
            subtitle: "Attract more clients and grow your landscaping services with our expert SEO strategies.",
            image: "https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        stats={[
            {
                icon: "search",
                title: "+300% Organic Traffic",
                subtitle: "for landscaping websites",
            },
            {
                icon: "rocket",
                title: "Fast Ranking Boost",
                subtitle: "within 2 months average",
            },
            {
                icon: "bullhorn",
                title: "200+ Keywords Optimized",
                subtitle: "for landscaping services and products",
            },
        ]}
        comprehensive={{
            title: "Complete Landscaping SEO Services",
            items: [
                "Keyword targeting for landscaping terms",
                "On-page optimization for SEO-friendly content",
                "Link building and backlink optimization",
                "Competitive analysis and keyword research",
                "Local SEO for landscaping businesses",
            ],
            image: "https://images.unsplash.com/photo-1458245201577-fc8a130b8829?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        benefits={[
            {
                icon: "rocket",
                title: "Fast Ranking Boost",
                subtitle: "within 2 months average",
            },
            {
                icon: "search",
                title: "+300% Organic Traffic",
                subtitle: "for landscaping websites",
            },
            {
                icon: "bullhorn",
                title: "200+ Keywords Optimized",
                subtitle: "for landscaping services and products",
            },
        ]}
        faqs={[
            { q: "Do you optimize for local searches?", a: "Yes, we focus on local SEO to attract nearby customers." },
            { q: "How long does it take to see results?", a: "Most clients see significant improvements within 2-3 months." },
            { q: "What types of landscaping services do you cover?", a: "We cover all types of landscaping services, including residential and commercial." },
        ]}
    />
    </>
  )
}

export default LandScaping