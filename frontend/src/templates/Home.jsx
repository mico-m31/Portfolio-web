import { motion } from "framer-motion";
import { FaUser, FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <section className="py-32 flex items-center justify-center px-4">
      <motion.div
        className="text-white rounded-2xl p-8 max-w-xl w-full shadow-[0_35px_60px_-15px_rgba(128,0,255,0.6)] border border-purple-900/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center mb-4">
          <FaUser className="text-purple-500 w-6 h-6 mr-2" />
          <h1 className="text-2xl font-bold text-white">Hi, I'm Mico Martin</h1>
        </div>

        <p className="text-gray-400 mb-6 leading-relaxed">
          I'm a passionate Backend Developer and Network Engineer Enthusiast with a focus on building secure and efficient systems. My journey in technology has been driven by a desire to connect people and ideas through robust network solutions and backend services.
        </p>

        <motion.a
          href="#about"
          whileHover={{ scale: 1.05, backgroundColor: "#9333ea" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg group"
        >
          Learn More About Me
          <motion.div
            className="ml-2"
            animate={{ x: [0, 4, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <FaArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Home;