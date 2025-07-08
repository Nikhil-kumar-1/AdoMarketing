import React from "react";
import { FiShield, FiMail, FiDatabase, FiUser } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy | Adonomics Technologies</title>
        <meta
          name="description"
          content="Discover how Adonomics Technologies uses infographics to turn complex data into clear, actionable insights."
        />
        <meta
          name="keywords"
          content="Privacy Policy, Adonomics Technologies, Bihar, Patna, Digital Marketing, Digital Marketing Company in Patna"
        />
        <meta name="author" content="Adonomics Technologies" />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/privacy"
        />
        <meta
          property="og:title"
          content="Privacy Policy | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Discover how Adonomics Technologies uses infographics to turn complex data into clear, actionable insights."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/privacy"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
        <div className="text-center mb-10">
          <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <FiShield className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-700 mb-6">
            At Adonomics, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiUser className="mr-2 text-blue-500" />
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name, job title
              </li>
              <li>
                <strong>Business Information:</strong> Marketing goals, budget,
                current strategies
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device information, cookies
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent, click
                patterns
              </li>
              <li>
                <strong>Marketing Data:</strong> Campaign performance,
                conversion rates, ROI metrics
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiDatabase className="mr-2 text-blue-500" />
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide and improve our digital marketing services</li>
              <li>Develop personalized marketing strategies</li>
              <li>Communicate with you about our services</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Measure campaign effectiveness and ROI</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiMail className="mr-2 text-blue-500" />
              3. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Service providers (Google Analytics, CRM platforms, email
                marketing tools)
              </li>
              <li>
                Advertising platforms (Google Ads, Facebook Ads, LinkedIn Ads)
              </li>
              <li>Business partners for co-marketing initiatives</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We never sell your personal information to third parties.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Track user behavior on our website</li>
              <li>Remember user preferences</li>
              <li>Deliver targeted advertisements</li>
              <li>Analyze campaign performance</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can control cookies through your browser settings.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-700">
              We implement industry-standard security measures including
              encryption, access controls, and regular security audits to
              protect your data.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent</li>
              <li>Lodge a complaint with authorities</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this policy periodically. We will notify you of
              significant changes through our website or email.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-700">
              For privacy-related inquiries, please contact our Data Protection
              Officer at:
              <br />
              <a
                href="mailto:info@adonomicstechnologies.com"
                className="text-blue-600 hover:underline"
              >
                info@adonomicstechnologies.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
