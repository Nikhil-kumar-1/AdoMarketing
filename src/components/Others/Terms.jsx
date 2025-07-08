import {
  FiFileText,
  FiDollarSign,
  FiAlertTriangle,
  FiTerminal,
} from "react-icons/fi";
import { Helmet } from "react-helmet-async";
const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Terms of Service | Adonomics Technologies</title>
        <meta
          name="description"
          content="Discover how Adonomics Technologies uses infographics to turn complex data into clear, actionable insights."
        />
        <meta
          name="keywords"
          content="Terms, Privacy Policy, Adonomics Technologies, Bihar, Patna, Digital Marketing, Digital Marketing Company in Patna"
        />
        <meta name="author" content="Adonomics Technologies" />
        <link rel="canonical" href="https://adonomicstechnologies.com/terms" />
        <meta property="og:title" content="Terms | Adonomics Technologies" />
        <meta
          property="og:description"
          content="Discover how Adonomics Technologies uses infographics to turn complex data into clear, actionable insights."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/terms"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
        <div className="text-center mb-10">
          <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <FiFileText className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-700 mb-6">
            These Terms of Service ("Terms") govern your access to and use of
            Adonomics Technologies's website and services. By accessing or using
            our services, you agree to be bound by these Terms.
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiFileText className="mr-2 text-blue-500" />
              1. Services Overview
            </h2>
            <p className="text-gray-700">
              We provide digital marketing services including but not limited
              to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Search Engine Optimization (SEO)</li>
              <li>Pay-Per-Click (PPC) Advertising</li>
              <li>Social Media Marketing</li>
              <li>Content Marketing</li>
              <li>Email Marketing</li>
              <li>Marketing Analytics</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiDollarSign className="mr-2 text-blue-500" />
              2. Fees and Payments
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Service Fees:</strong> Fees for our services will be
              outlined in your proposal or contract. We reserve the right to
              modify fees with 30 days notice.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Payment Terms:</strong> Payments are typically due net 15
              unless otherwise specified. Late payments may incur interest at
              1.5% per month.
            </p>
            <p className="text-gray-700">
              <strong>Third-Party Costs:</strong> Client is responsible for
              media buys, software subscriptions, and other third-party costs
              unless otherwise agreed.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiAlertTriangle className="mr-2 text-blue-500" />
              3. Client Responsibilities
            </h2>
            <p className="text-gray-700 mb-2">As our client, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Provide accurate and complete information about your business
              </li>
              <li>
                Grant necessary access to marketing accounts and analytics
              </li>
              <li>Approve marketing materials in a timely manner</li>
              <li>Make timely payments as agreed</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Performance Expectations
            </h2>
            <p className="text-gray-700 mb-4">
              While we employ industry best practices, we cannot guarantee
              specific marketing results including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Search engine rankings</li>
              <li>Lead generation numbers</li>
              <li>Conversion rates</li>
              <li>Return on investment (ROI)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Results may vary based on market conditions, competition, and
              other factors beyond our control.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Client Materials:</strong> You retain ownership of all
              materials you provide to us.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Agency Work Product:</strong> We retain ownership of our
              proprietary methodologies, tools, and templates.
            </p>
            <p className="text-gray-700">
              <strong>Deliverables:</strong> Upon full payment, you receive a
              license to use deliverables for your business purposes.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Confidentiality
            </h2>
            <p className="text-gray-700">
              Both parties agree to keep confidential information private and
              not disclose it to third parties without consent, except as
              required by law.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Termination
            </h2>
            <p className="text-gray-700 mb-2">
              Either party may terminate services with 30 days written notice.
              Early termination may incur fees for work completed.
            </p>
            <p className="text-gray-700">
              We may terminate immediately for non-payment or material breach of
              these Terms.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FiTerminal className="mr-2 text-blue-500" />
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              Our total liability for any claim related to our services is
              limited to the fees paid by you for the services giving rise to
              the claim. We are not liable for indirect, incidental, or
              consequential damages.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms shall be governed by the laws of [Your State/Country].
              Any disputes shall be resolved in the courts of [Your
              Jurisdiction].
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700">
              We may modify these Terms at any time. Continued use of our
              services constitutes acceptance of the modified Terms.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              11. Contact Information
            </h2>
            <p className="text-gray-700">
              For questions about these Terms, please contact us at:
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

export default Terms;
