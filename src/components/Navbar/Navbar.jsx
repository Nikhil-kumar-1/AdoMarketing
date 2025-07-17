import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const location = useLocation();
  const navbarRef = useRef(null);

  // Close dropdowns when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [location]);

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: "/services",
      dropdown: [
        {
          name: "Social Media Marketing",
          link: "/smm",
          subItems: [
            { name: "Facebook Marketing", link: "/fb" },
            { name: "Instagram Marketing", link: "/insta" },
            { name: "LinkedIn Marketing", link: "/linkedin" },
            { name: "Twitter Marketing", link: "/twitter" },
            {
              name: "Social Media Management",
              link: "/social-media-management",
            },
            { name: "Influencer Marketing", link: "/influencer-marketing" },
          ],
        },
        {
          name: "Search Engine Optimization",
          link: "/seo",
          subItems: [
            { name: "On-Page SEO", link: "/onpage" },
            { name: "Off-Page SEO", link: "/offpage" },
            { name: "Technical SEO", link: "/technical" },
            { name: "SEO Audits", link: "/seo-audits" },
            { name: "Local SEO", link: "/local-seo" },
            { name: "AI SEO", link: "/ai-seo" },
          ],
        },
        {
          name: "PPC Advertising",
          link: "/ppc",
          subItems: [
            { name: "Google Ads", link: "/google-ads" },
            { name: "Meta Ads (Facebook/Instagram)", link: "/meta-ads" },
            { name: "Display Advertising", link: "/display" },
          ],
        },
        {
          name: "Content Marketing",
          link: "/content",
          subItems: [
            { name: "Blog Writing", link: "/blog-writing" },
            { name: "Video Content", link: "/video-content" },
            { name: "Infographics", link: "/infographics" },
          ],
        },
        {
          name: "Analytics & Reporting",
          link: "/analytics",
          subItems: [
            { name: "Google Analytics", link: "/google-analytics" },
            { name: "Conversion Tracking", link: "/conversion-tracking" },
            { name: "ROI Analysis", link: "/roi-analysis" },
          ],
        },
        {
          name: "Development",
          link: "/development",
          subItems: [
            { name: "UI/UX Design", link: "/uiux" },
            { name: "App Development", link: "/app-development" },
            { name: "Web Development", link: "/web-development" },
          ],
        },
        {
          name: "Other Services",
          link: "/others",
          subItems: [
            { name: "Branding & Identity", link: "/branding" },
            { name: "Email Marketing", link: "/email" },
            { name: "Paid Marketing", link: "/paid-marketing" },
          ],
        },
      ],
    },
    { name: "About Us", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    {
      name: "Blog",
      link: "https://adonomicstechnologies.com/blogs/",
      external: true,
    },
    { name: "Contact Us", link: "/contact" },
  ];

  // Desktop hover handlers
  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
    setActiveSubDropdown(null);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  // Mobile click handlers
  const handleDropdownClick = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(index);
      setActiveSubDropdown(null);
    }
  };

  const handleSubDropdownClick = (index) => {
    if (activeSubDropdown === index) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(index);
    }
  };

  const renderLink = (item) => {
    if (item.external) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-emerald-600 font-medium transition-colors relative group"
        >
          {item.name}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
        </a>
      );
    }
    return (
      <Link
        to={item.link}
        className="text-gray-800 hover:text-emerald-600 font-medium transition-colors relative group"
      >
        {item.name}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
      </Link>
    );
  };

  return (
    <header
      ref={navbarRef}
      className="w-full bg-white shadow-sm sticky top-0 z-50"
    >
      {/* Top bar with contact info */}
      <div className="bg-emerald-600 text-white hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-sm" />
              <span className="text-sm">9955669590</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-sm" />
              <span className="text-sm">info@adonomicstechnologies.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Follow Us:</span>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/15hUJ1J9ZD/"
                className="hover:text-emerald-300 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/itsAdonomics"
                className="hover:text-emerald-300 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/itsadonomics/"
                className="hover:text-emerald-300 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/adonomicstechnologies/"
                className="hover:text-emerald-300 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" aria-label="Home">
              <img
                src="/Logo.webp"
                alt="Adonomics Technologies Logo"
                className="h-10 w-auto"
                width={120}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center">
                    {item.dropdown ? (
                      <div className="relative">
                        <Link
                          to={item.link}
                          onClick={() => handleDropdownClick(index)}
                          className="text-gray-800 hover:text-emerald-600 font-medium transition-colors relative group flex items-center"
                        >
                          {item.name}
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
                          <FaChevronDown
                            size={14}
                            className={`ml-1 transition-transform ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </Link>

                        {/* Desktop Dropdown */}
                        {item.dropdown && activeDropdown === index && (
                          <div
                            className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100"
                            onMouseLeave={handleMouseLeave}
                          >
                            {item.dropdown.map((dropdownItem, dIndex) => (
                              <div key={dIndex} className="relative">
                                <div
                                  className="flex justify-between items-center hover:bg-emerald-50 px-4 py-2"
                                  onMouseEnter={() =>
                                    setActiveSubDropdown(dIndex)
                                  }
                                >
                                  <Link
                                    to={dropdownItem.link}
                                    className="text-gray-800 hover:text-emerald-600 w-full"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                  {dropdownItem.subItems && (
                                    <FaChevronRight
                                      size={12}
                                      className={`text-gray-400 transition-transform ${
                                        activeSubDropdown === dIndex
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                    />
                                  )}
                                </div>

                                {/* Desktop Sub-Dropdown */}
                                {dropdownItem.subItems &&
                                  activeSubDropdown === dIndex && (
                                    <div
                                      className="absolute left-full top-0 ml-0.5 w-64 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100"
                                      onMouseLeave={() =>
                                        setActiveSubDropdown(null)
                                      }
                                    >
                                      {dropdownItem.subItems.map(
                                        (subItem, sIndex) => (
                                          <Link
                                            key={sIndex}
                                            to={subItem.link}
                                            className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600"
                                          >
                                            {subItem.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      renderLink(item)
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 ml-6">
              <Link to="/explore">
                <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30">
                  Explore Pages
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              className="p-2 text-gray-600 hover:text-emerald-600 transition"
              aria-label="Search"
            >
              <FaSearch />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 focus:outline-none hover:text-emerald-600 transition"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-lg mt-2 py-4 px-4 border border-gray-100">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.dropdown ? (
                    <div className="mb-2">
                      <div
                        className="flex justify-between items-center py-2 text-gray-800 font-medium cursor-pointer"
                        onClick={() => handleDropdownClick(index)}
                      >
                        {item.external ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            to={item.link}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex-1"
                          >
                            {item.name}
                          </Link>
                        )}
                        <FaChevronDown
                          size={14}
                          className={`transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Mobile Dropdown */}
                      {activeDropdown === index && (
                        <div className="ml-4 mt-2 space-y-3">
                          {item.dropdown.map((dropdownItem, dIndex) => (
                            <div key={dIndex}>
                              <div
                                className="flex justify-between items-center py-2 text-gray-700 cursor-pointer"
                                onClick={() =>
                                  dropdownItem.subItems
                                    ? handleSubDropdownClick(dIndex)
                                    : null
                                }
                              >
                                <Link
                                  to={dropdownItem.link}
                                  onClick={(e) => {
                                    if (dropdownItem.subItems) {
                                      e.preventDefault();
                                    } else {
                                      setIsMenuOpen(false);
                                    }
                                  }}
                                  className="flex-1"
                                >
                                  {dropdownItem.name}
                                </Link>
                                {dropdownItem.subItems && (
                                  <FaChevronRight
                                    size={12}
                                    className={`transition-transform ${
                                      activeSubDropdown === dIndex
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                  />
                                )}
                              </div>

                              {/* Mobile Sub-Dropdown */}
                              {dropdownItem.subItems &&
                                activeSubDropdown === dIndex && (
                                  <div className="ml-4 space-y-2">
                                    {dropdownItem.subItems.map(
                                      (subItem, sIndex) => (
                                        <Link
                                          key={sIndex}
                                          to={subItem.link}
                                          className="block py-2 text-gray-600 hover:text-emerald-600"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {subItem.name}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.external ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-gray-800 hover:text-emerald-600 font-medium"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      className="block py-2 text-gray-800 hover:text-emerald-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition">
                    Get a Quote
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
