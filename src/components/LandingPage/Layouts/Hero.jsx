import { motion } from "framer-motion";

const Hero = ({ title, subtitle, image }) => (
  <section className="bg-blue-300/60 py-4 px-6 text-gray-900 h-screen flex items-center justify-center">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl">{subtitle}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <img src={image} alt="Hero Visual" className="w-full max-w-md rounded-xl shadow-lg" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
