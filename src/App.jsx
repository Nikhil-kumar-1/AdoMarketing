import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SmoothScrollToTop from './components/ScrollOnTop';

const Home = lazy(() => import('./components/Home/Home'));
const AboutUs = lazy(() => import('./components/About/AboutUs'));
const ContactPage = lazy(() => import('./components/Contact/Contact'));
const NotFoundPage = lazy(() => import('./components/NotFound/NotFound'));
const OnPageSEO = lazy(() => import('./components/Service/SEO/OnPage'));
const OffPageSEO = lazy(() => import('./components/Service/SEO/OffPage'));
const TechnicalSEO = lazy(() => import('./components/Service/SEO/Technical'));
const SeoServicesPage = lazy(() => import('./components/Service/SEO/SEO'));
const AISEO = lazy(() => import('./components/Service/SEO/AISEO'));
const LocalSeo = lazy(() => import('./components/Service/SEO/LocalSeo'));
const SEOPage = lazy(() => import('./components/Service/SEO/SeoAudits'));

const PPCAdvertising = lazy(() => import('./components/Service/Advertising/PPC'));
const DisplayAdvertising = lazy(() => import('./components/Service/Advertising/DisplayAd'));
const GoogleAdsPage = lazy(() => import('./components/Service/Advertising/GoogleAds'));
const MetaAds = lazy(() => import('./components/Service/Advertising/MetaAds'));

const SMM = lazy(() => import('./components/Service/SMM'));
const Fb = lazy(() => import('./components/Service/SMM/Fb'));
const Insta = lazy(() => import('./components/Service/SMM/Insta'));
const Twitter = lazy(() => import('./components/Service/SMM/Twitter'));
const LinkedIn = lazy(() => import('./components/Service/SMM/LinkedIn'));
const SocialMediaManagement = lazy(() => import('./components/Service/SMM/SMM'));
const InfluencerMarketing = lazy(() => import('./components/Service/SMM/Influencer'));

const Content = lazy(() => import('./components/Service/Content/Content'));
const BlogWriting = lazy(() => import('./components/Service/Content/BlogWriting'));
const VideoContent = lazy(() => import('./components/Service/Content/VideoContent'));
const Infographics = lazy(() => import('./components/Service/Content/Infographics'));

const Email = lazy(() => import('./components/Service/Email'));
const Analytics = lazy(() => import('./components/Service/Analytics/Analytics'));
const GoogleAnalytics = lazy(() => import('./components/Service/Analytics/GoogleAnalytics'));
const ConversionTracking = lazy(() => import('./components/Service/Analytics/ConversionTracking'));
const ROIAnalysis = lazy(() => import('./components/Service/Analytics/ROIAnalysis'));

const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Development = lazy(() => import('./components/Service/Development'));
const Web = lazy(() => import('./components/Service/Development/Web'));
const UIUX = lazy(() => import('./components/Service/Development/UIUX'));
const AppDevelopment = lazy(() => import('./components/Service/Development/AppDevelopment'));

const Team = lazy(() => import('./components/Team/Team'));
const BrandingServices = lazy(() => import('./components/Service/Branding'));
const Privacy = lazy(() => import('./components/Others/Privacy'));
const Terms = lazy(() => import('./components/Others/Terms'));
const PaidMarketingServices = lazy(() => import('./components/Service/PaidMarketing'));
const ServicesPage = lazy(() => import('./components/Service/Service'));

const QuoteWizard = lazy(() => import('./components/Quote'));
const StrategyPage = lazy(() => import('./components/Strategy'));

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/onpage" element={<OnPageSEO />} />
            <Route path="/offpage" element={<OffPageSEO />} />
            <Route path="/technical" element={<TechnicalSEO />} />
            <Route path="/seo" element={<SeoServicesPage />} />
            <Route path="/ai-seo" element={<AISEO />} />
            <Route path="/local-seo" element={<LocalSeo />} />
            <Route path="/seo-audits" element={<SEOPage />} />
            <Route path="/ppc" element={<PPCAdvertising />} />
            <Route path="/display" element={<DisplayAdvertising />} />
            <Route path="/google-ads" element={<GoogleAdsPage />} />
            <Route path="/meta-ads" element={<MetaAds />} />
            <Route path="/smm" element={<SMM />} />
            <Route path="/fb" element={<Fb />} />
            <Route path="/insta" element={<Insta />} />
            <Route path="/twitter" element={<Twitter />} />
            <Route path="/linkedin" element={<LinkedIn />} />
            <Route path="/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/content" element={<Content />} />
            <Route path="/blog-writing" element={<BlogWriting />} />
            <Route path="/video-content" element={<VideoContent />} />
            <Route path="/infographics" element={<Infographics />} />
            <Route path="/email" element={<Email />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/google-analytics" element={<GoogleAnalytics />} />
            <Route path="/conversion-tracking" element={<ConversionTracking />} />
            <Route path="/roi-analysis" element={<ROIAnalysis />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/development" element={<Development />} />
            <Route path="/web-development" element={<Web />} />
            <Route path="/uiux" element={<UIUX />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/teams" element={<Team />} />
            <Route path="/branding" element={<BrandingServices />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/paid-marketing" element={<PaidMarketingServices />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/quote" element={<QuoteWizard />} />
            <Route path="/strategy" element={<StrategyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;