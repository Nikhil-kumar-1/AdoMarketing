import { motion, useAnimation } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaArrowDown,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Team = () => {
  const controls = useAnimation();

  // Hero section animation
  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0 });
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { repeat: Infinity, duration: 3 },
      });
    };
    sequence();
  }, [controls]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const directors = [
    {
      name: "Aditya Singh",
      role: "Director of Operations",
      bio: "10+ years in digital strategy and business scaling. Expert in operational efficiency and team leadership.",
      img: "Aditya.webp",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "aditya@adonomics.com",
      },
    },
    {
      name: "Prince Dwivedi",
      role: "Director of Finance",
      bio: "Financial strategist specializing in tech startups. Focused on sustainable growth and investment strategies.",
      img: "Prince.webp",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "prince@adonomics.com",
      },
    },
    {
      name: "Vidya Niwas",
      role: "Director of Administration",
      bio: "Operations expert focused on process optimization and creating efficient workflows.",
      img: "Vidya.webp",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "vidya@adonomics.com",
      },
    },
    {
      name: "Avinash Singh",
      role: "Director of Business Development",
      bio: "Partnership specialist with global network. Connects businesses with growth opportunities.",
      img: "Avinash.webp",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "avinash@adonomics.com",
      },
    },
  ];

  const teamMembers = [
    {
      name: "Sakshi Rani",
      role: "Digital Marketing Executive",
      expertise: "SEO | PPC | Google Analytics",
      icon: "S",
      color: "bg-emerald-600",
      social: {
        linkedin: "linkedin.com/in/sakshi-rani-042920249",
        github: "#",
        email: "",
      },
    },
    {
      name: "Nikhil Kumar",
      role: "Full Stack Developer",
      expertise: "React | Node.js | MongoDB",
      icon: "N",
      color: "bg-amber-600",
      social: {
        linkedin: "https://www.linkedin.com/in/nikhil-kumar-9b15b31b6/",
        github: "#",
        email: "",
      },
    },
    {
      name: "Ankur",
      role: "Full Stack Developer",
      expertise: "React | Node.js | MongoDB",
      icon: "A",
      color: "bg-rose-600",
      social: {
        linkedin: "https://www.linkedin.com/in/ankuraaryan5/",
        github: "#",
        email: "",
      },
    },
    {
      name: "Sumit Kumar Singh",
      role: "Social Media Manager",
      expertise: "Content Strategy | Engagement | Analytics",
      icon: "S",
      color: "bg-purple-600",
      social: {
        linkedin: "",
        github: "#",
        email: "",
      },
    },
    {
      name: "Satyam Kumar",
      role: "Graphic Designer",
      expertise: "Figma | Photoshop | Illustrator",
      icon: "S",
      color: "bg-sky-600",
      social: {
        linkedin: "",
        github: "#",
        email: "",
      },
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Helmet>
        <title>Team | Adonomics Technologies</title>
        <meta
          name="description"
          content="Adonomics Technologies is a leading digital marketing and IT services company. Our team of experts provides a range of services to help businesses grow and succeed online."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/team" />
        <meta
          property="og:title"
          content="Adonomics Technologies - Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="Adonomics Technologies is a leading digital marketing and IT services company. Our team of experts provides a range of services to help businesses grow and succeed online."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.webp"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-white">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-200 blur-3xl opacity-40"
            animate={{
              scale: [1, 1.2, 1],
              x: [-50, 50, -50],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-teal-200 blur-3xl opacity-40"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -100, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="text-emerald-500 text-6xl mb-4">👋</div>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Meet Our <span className="text-emerald-600">Team</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The brilliant minds and creative souls who make the magic happen
            every day at Adonomics
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.a
              href="#team-section"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white animate-bounce"
              whileHover={{ scale: 1.1, backgroundColor: "#059669" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowDown />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section id="team-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders guiding our strategic direction with expertise
              and passion
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {directors.map((director, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group relative"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                  <img
                    src={director.img}
                    alt={director.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {director.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-4">
                    {director.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{director.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href={director.social.linkedin}
                      className="text-gray-400 hover:text-emerald-600 transition-colors"
                      aria-label={`${director.name} LinkedIn`}
                      whileHover={{ y: -2 }}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={`https://twitter.com/${director.social.twitter}`}
                      className="text-gray-400 hover:text-emerald-600 transition-colors"
                      aria-label={`${director.name} Twitter`}
                      whileHover={{ y: -2 }}
                    >
                      <FaTwitter className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${director.social.email}`}
                      className="text-gray-400 hover:text-emerald-600 transition-colors"
                      aria-label={`Email ${director.name}`}
                      whileHover={{ y: -2 }}
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented professionals executing our vision with dedication
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-48 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className={`w-32 h-32 rounded-full ${member.color} flex items-center justify-center text-white text-4xl font-bold`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {member.icon}
                  </motion.div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                  <div className="mt-4 flex justify-center space-x-3">
                    {member.social && (
                      <motion.a
                        href={`https://${member.social.linkedin}`}
                        className="text-gray-400 hover:text-emerald-600"
                        whileHover={{ y: -2 }}
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </motion.a>
                    )}

                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-emerald-600"
                      whileHover={{ y: -2 }}
                    >
                      <FaGithub className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-emerald-600"
                      whileHover={{ y: -2 }}
                    >
                      <FaEnvelope className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-emerald-100">Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-emerald-100">Years Combined Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-emerald-100">Dedication</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Join Our <span className="text-emerald-300">Team</span>?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing
              family of innovators and creators.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://www.linkedin.com/company/adonomicstechnologies/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 bg-white text-emerald-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
                >
                  View Open Positions
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-emerald-700 transition-all duration-300"
              >
                Contact Our HR Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
