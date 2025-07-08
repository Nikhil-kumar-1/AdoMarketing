import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-500 py-20"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 mt-20">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white text-center mb-4"
          >
            Page <span className="text-yellow-300">Not Found</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white text-center max-w-2xl mx-auto"
          >
            <p>The page you're looking for doesn't exist.</p>
            <p>
              <em>"Let’s get you back on track."</em>
            </p>
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className=" mt-20 flex-grow flex items-center justify-center bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-8">
                <img
                  src="https://images.unsplash.com/photo-1609743522653-52354461eb27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NDA0fGVufDB8fDB8fHww"
                  alt="404 illustration"
                  className="w-full h-auto max-w-xs"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h1 className="text-5xl font-bold text-green-600 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  Oops! Page Not Found
                </h2>
                <p className="text-gray-600 mb-6">
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col space-y-3">
                  <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
                  >
                    Go Back
                  </button>
                  <Link
                    to="/"
                    className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-center font-medium"
                  >
                    Return Home
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 mb-3">Need help?</p>
                  <Link
                    to="/contact"
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    Contact our support team →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} EcoBrand. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;
