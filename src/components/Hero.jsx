import { motion } from "framer-motion";
import { User, Download, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = ({ scrollToSection, isDarkTheme }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          y: particle.y - particle.speed,
          x: particle.x + (Math.random() - 0.5) * 0.5,
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
        isDarkTheme
          ? "bg-gradient-to-br from-black via-gray-900 via-gray-800 to-black"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${
              isDarkTheme
                ? "bg-gradient-to-r from-yellow-400 to-amber-500"
                : "bg-gradient-to-r from-blue-400 to-purple-500"
            }`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [
                particle.opacity,
                particle.opacity * 0.5,
                particle.opacity,
              ],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute top-20 left-20 w-32 h-32 border rounded-full opacity-20 ${
          isDarkTheme ? "border-yellow-500/20" : "border-blue-500/20"
        }`}
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute top-40 right-20 w-24 h-24 border rounded-full opacity-15 ${
          isDarkTheme ? "border-amber-500/20" : "border-purple-500/20"
        }`}
      />
      <motion.div
        animate={{ rotate: 180, scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-20 left-1/4 w-20 h-20 border rounded-full opacity-10 ${
          isDarkTheme ? "border-yellow-400/20" : "border-blue-400/20"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 relative"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center shadow-2xl ${
            isDarkTheme
              ? "bg-gradient-to-r from-yellow-500 to-amber-600 shadow-yellow-500/20"
              : "bg-gradient-to-r from-blue-500 to-purple-600 shadow-blue-500/20"
          }`}
        >
          <User
            className={`w-16 h-16 ${isDarkTheme ? "text-black" : "text-white"}`}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span
            className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDarkTheme
                ? "from-yellow-400 to-amber-500"
                : "from-blue-600 to-purple-600"
            }`}
          >
            John Doe
          </span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`text-2xl md:text-3xl mb-8 ${
            isDarkTheme ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Senior Frontend Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={`text-lg max-w-2xl mx-auto mb-12 ${
            isDarkTheme ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Crafting exceptional digital experiences with modern technologies.
          Passionate about clean code, beautiful design, and user-centric
          solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg ${
              isDarkTheme
                ? "bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black shadow-yellow-500/25"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-blue-500/25"
            }`}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className={`px-8 py-3 border rounded-full font-semibold hover:bg-opacity-10 transition-colors ${
              isDarkTheme
                ? "border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
                : "border-blue-500 text-blue-600 hover:bg-blue-500/10"
            }`}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`absolute top-20 left-10 w-4 h-4 rounded-full opacity-50 shadow-lg ${
          isDarkTheme
            ? "bg-yellow-500 shadow-yellow-500/50"
            : "bg-blue-500 shadow-blue-500/50"
        }`}
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`absolute top-40 right-20 w-6 h-6 rounded-full opacity-30 shadow-lg ${
          isDarkTheme
            ? "bg-amber-500 shadow-amber-500/50"
            : "bg-purple-500 shadow-purple-500/50"
        }`}
      />
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className={`absolute bottom-20 left-20 w-8 h-8 border rounded-full opacity-30 shadow-lg ${
          isDarkTheme
            ? "border-yellow-500 shadow-yellow-500/30"
            : "border-blue-500 shadow-blue-500/30"
        }`}
      />
    </section>
  );
};

export default Hero;
