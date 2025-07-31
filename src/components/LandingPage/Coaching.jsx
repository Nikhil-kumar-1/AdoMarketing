import React from 'react'
import SEOPageLayout from './Layouts/SEOPageLayout'
import { Helmet } from 'react-helmet-async'
function Coaching() {
  return (
    <>
    <Helmet>
      <title>Coaching SEO Services | Transform Your Coaching Business</title>
        <meta
        name="description"
        content="Attract more clients and grow your coaching services with our specialized SEO strategies. Get discovered by those seeking coaching expertise."
        />
        <meta
        name="keywords"
        content="Coaching SEO, Coaching Services SEO, Life Coach SEO, Business Coach SEO, Health Coach SEO, Coaching Marketing"
        />
        <meta
        property="og:title"
        content="Coaching SEO Services | Transform Your Coaching Business"
        />
        <meta
        property="og:description"
        content="Attract more clients and grow your coaching services with our specialized SEO strategies. Get discovered by those seeking coaching expertise."
        />
        <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com/edtech/coaching" />
        <meta property="og:type" content="website" />
    </Helmet>
    <SEOPageLayout
      industry="Coaching"
        hero={{
        title: "Transform Your Coaching Business with Expert SEO",
        subtitle: "Attract more clients and grow your coaching services with our specialized SEO strategies.",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        stats={[
            {
                icon: "search",
                title: "+500% Organic Traffic",
                subtitle: "for coaching websites",
            },
            {
                icon: "rocket",
                title: "Fast Ranking Boost",
                subtitle: "within 2 months average",
            },
            {
                icon: "bullhorn",
                title: "300+ Keywords Optimized",
                subtitle: "for coaching services and programs",
            },
        ]}
        comprehensive={{
            title: "Complete Coaching SEO Services",
            items: [
                "Keyword targeting for coaching terms",
                "SEO optimization for coaching services and programs",
                "Content optimization for coaching content",
                "Link building for coaching websites",
            ],
            image: "https://images.unsplash.com/photo-1635424239131-32dc44986b56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        benefits={[
            {
                icon: "search",
                title: "Coaching-Focused SEO",
                description:
                    "We understand the coaching buyer's intent and how to rank your services for it.",
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
                    "SEO strategies that resonate with potential clients and their needs.",
            },
        ]}
        faqs={[
            {
                question: "How long does it take to see results from SEO?",
                answer: "Typically, you can expect to see significant improvements in your search rankings and organic traffic within 2-3 months of implementing our SEO strategies.",
            },
            {
                question: "What types of coaching services do you specialize in?",
                answer: "We specialize in a wide range of coaching services, including life coaching, business coaching, health and wellness coaching, and more. Our strategies are tailored to your specific niche.",
            },
            {
                question: "Do you provide ongoing SEO support?",
                answer: "Yes, we offer ongoing SEO support and maintenance to ensure your website continues to perform well in search engines.",
            },
        ]}
        />
        </>
  )
}

export default Coaching