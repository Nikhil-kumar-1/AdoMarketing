import React from 'react'
import SEOPageLayout from './Layouts/SEOPageLayout'
import { Helmet } from 'react-helmet-async';
function Investment() {
  return (
    <>
    <Helmet>
        <title>Investment Firm SEO Services | Boost Your Investment Firm</title>
        <meta 
        name="description"
        content="Elevate your investment firm with targeted SEO strategies. Attract high-net-worth clients and enhance your online presence."
        />
        <meta
        name="keywords"
        content="Investment Firm SEO, Financial Services SEO, Banking SEO, Investment Firm Marketing, Online Banking SEO"
        />
        <meta
        property="og:title"
        content="Investment Firm SEO Services | Boost Your Investment Firm"
        />
        <meta
        property="og:description"
        content="Elevate your investment firm with targeted SEO strategies. Attract high-net-worth clients and enhance your online presence."
        />
        <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com/finance/investment-firms" />
        <meta property="og:type" content="website" />
    </Helmet>

    <SEOPageLayout
        industry="Investment Firm"
        hero={{
          title: "Maximize Your Investment Firm's Online Visibility",
            subtitle: "Attract high-net-worth clients with our specialized SEO strategies.",
            image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        stats={[
            {
                icon: "search",
                title: "+600% Organic Traffic",
                subtitle: "for investment firms",
            },
            {
                icon: "rocket",
                title: "Fast Ranking Boost",
                subtitle: "within 3 months average",
            },
            {
                icon: "bullhorn",
                title: "700+ Keywords Optimized",
                subtitle: "for investment services and products",
            },
        ]}
        comprehensive={{
            title: "Complete Investment Firm SEO Services",
            items: [
                "Keyword targeting for investment terms",
                "Detailed analysis of your competitors",
                "Detailed analysis of your competitors",
                "Content optimization for investment services",
                "Link building for investment websites",
            ],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        benefits={[
            {
                icon: "search",
                title: "Investment-Focused SEO",
                description:
                    "We understand the investment buyer's intent and how to rank your services for it.",
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
                    "SEO strategies that resonate with high-net-worth individuals and their communities.",
            },
        ]}
        faqs={[
            { q: "Do you optimize for local searches?", a: "Yes, we focus on local SEO to attract nearby clients." },
            { q: "How long does it take to see results?", a: "Most clients see significant improvements within 3 months." },
            { q: "What types of content do you create?", a: "We create high-quality, informative content that resonates with your target audience." },
        ]}
        />
    </>
  )
}

export default Investment