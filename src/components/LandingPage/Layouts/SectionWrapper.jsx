import { motion } from "framer-motion";

const SectionWrapper = ({ children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`py-12 px-6 ${className} max-w-7xl mx-auto`}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
