import { motion } from "framer-motion";
import { Download, MessageCircle, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import meImage from "../assets/me.jpg";

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
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 pt-16 sm:pt-20 lg:pt-24 ${
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
        className={`absolute top-8 sm:top-20 left-8 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 border rounded-full opacity-20 ${
          isDarkTheme ? "border-yellow-500/20" : "border-blue-500/20"
        }`}
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute top-16 sm:top-40 right-8 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 border rounded-full opacity-15 ${
          isDarkTheme ? "border-amber-500/20" : "border-purple-500/20"
        }`}
      />
      <motion.div
        animate={{ rotate: 180, scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-8 sm:bottom-20 left-1/4 w-10 h-10 sm:w-20 sm:h-20 border rounded-full opacity-10 ${
          isDarkTheme ? "border-yellow-400/20" : "border-blue-400/20"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10 relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`w-64 h-64 lg:w-72 lg:h-72 mx-auto lg:mx-0 mb-8 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden border-2 ${
                isDarkTheme
                  ? "border-yellow-500/40 shadow-yellow-500/30 bg-gradient-to-br from-gray-800/20 to-gray-900/20"
                  : "border-blue-500/40 shadow-blue-500/30 bg-gradient-to-br from-white/20 to-gray-50/20"
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={meImage}
                  alt="Abdulrahman Ismael"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div
                  className={`absolute inset-0 rounded-2xl border ${
                    isDarkTheme
                      ? "border-yellow-500/20 shadow-inner"
                      : "border-blue-500/20 shadow-inner"
                  }`}
                ></div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  isDarkTheme
                    ? "from-yellow-400 to-amber-500"
                    : "from-blue-600 to-purple-600"
                }`}
              >
                Abdulrahman Ismael
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`text-2xl md:text-2xl mb-8 ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Frontend Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`text-lg max-w-2xl mx-auto lg:mx-0 mb-12 ${
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="https://drive.google.com/file/d/12B82VDC9aHtN7jmMmlweHeETnUxQlPey/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
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
              </motion.a>
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

          {/* Right Column - Who I Am (Large Screens Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div
              className={`relative p-8 rounded-3xl border shadow-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                isDarkTheme
                  ? "bg-gradient-to-br from-gray-800/95 via-gray-900/90 to-black/95 border-yellow-500/30 shadow-yellow-500/20"
                  : "bg-gradient-to-br from-white/95 via-gray-50/90 to-blue-50/95 border-blue-500/30 shadow-blue-500/20"
              }`}
            >
              {/* Luxury decorative elements */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                  isDarkTheme
                    ? "from-yellow-400 via-amber-500 to-yellow-400"
                    : "from-blue-400 via-purple-500 to-blue-400"
                }`}
              ></div>

              <div
                className={`absolute top-4 right-4 w-8 h-8 border-2 rounded-full ${
                  isDarkTheme ? "border-yellow-500/40" : "border-blue-500/40"
                }`}
              ></div>

              <div
                className={`absolute bottom-4 left-4 w-6 h-6 border ${
                  isDarkTheme ? "border-yellow-500/30" : "border-blue-500/30"
                }`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-1 h-8 rounded-full mr-4 ${
                      isDarkTheme
                        ? "bg-gradient-to-b from-yellow-400 to-amber-500"
                        : "bg-gradient-to-b from-blue-500 to-purple-600"
                    }`}
                  ></div>
                  <h3
                    className={`text-2xl font-bold tracking-wide ${
                      isDarkTheme ? "text-yellow-400" : "text-blue-600"
                    }`}
                  >
                    Who I Am
                  </h3>
                </div>

                <div className="space-y-6">
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkTheme ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    I'm a passionate{" "}
                    <span
                      className={`font-semibold ${
                        isDarkTheme ? "text-yellow-400" : "text-blue-600"
                      }`}
                    >
                      Frontend Developer
                    </span>{" "}
                    with over 1 year of experience crafting exceptional digital
                    experiences. I specialize in modern web technologies and
                    love turning complex problems into simple, beautiful
                    solutions.
                  </p>

                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkTheme ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-600/20">
                  <p
                    className={`text-sm font-medium mb-4 ${
                      isDarkTheme ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Connect with me
                  </p>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.linkedin.com/in/abdlrhmanismael"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-lg ${
                        isDarkTheme
                          ? "bg-gradient-to-br from-gray-700 to-gray-800 border-yellow-500/40 hover:border-yellow-500/80 hover:shadow-yellow-500/25"
                          : "bg-gradient-to-br from-gray-100 to-white border-blue-500/40 hover:border-blue-500/80 hover:shadow-blue-500/25"
                      }`}
                    >
                      <Linkedin
                        className={`w-6 h-6 ${
                          isDarkTheme ? "text-yellow-400" : "text-blue-600"
                        }`}
                      />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/abdlrhmanismael"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-lg ${
                        isDarkTheme
                          ? "bg-gradient-to-br from-gray-700 to-gray-800 border-yellow-500/40 hover:border-yellow-500/80 hover:shadow-yellow-500/25"
                          : "bg-gradient-to-br from-gray-100 to-white border-blue-500/40 hover:border-blue-500/80 hover:shadow-blue-500/25"
                      }`}
                    >
                      <Github
                        className={`w-6 h-6 ${
                          isDarkTheme ? "text-yellow-400" : "text-blue-600"
                        }`}
                      />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:abdulrahmanismael992@gmail.com"
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-lg ${
                        isDarkTheme
                          ? "bg-gradient-to-br from-gray-700 to-gray-800 border-yellow-500/40 hover:border-yellow-500/80 hover:shadow-yellow-500/25"
                          : "bg-gradient-to-br from-gray-100 to-white border-blue-500/40 hover:border-blue-500/80 hover:shadow-blue-500/25"
                      }`}
                    >
                      <Mail
                        className={`w-6 h-6 ${
                          isDarkTheme ? "text-yellow-400" : "text-blue-600"
                        }`}
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`absolute top-8 sm:top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full opacity-50 shadow-lg ${
          isDarkTheme
            ? "bg-yellow-500 shadow-yellow-500/50"
            : "bg-blue-500 shadow-blue-500/50"
        }`}
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`absolute top-16 sm:top-40 right-8 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 rounded-full opacity-30 shadow-lg ${
          isDarkTheme
            ? "bg-amber-500 shadow-amber-500/50"
            : "bg-purple-500 shadow-purple-500/50"
        }`}
      />
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className={`absolute bottom-8 sm:bottom-20 left-8 sm:left-20 w-6 h-6 sm:w-8 sm:h-8 border rounded-full opacity-30 shadow-lg ${
          isDarkTheme
            ? "border-yellow-500 shadow-yellow-500/30"
            : "border-blue-500 shadow-blue-500/30"
        }`}
      />
    </section>
  );
};

export default Hero;
