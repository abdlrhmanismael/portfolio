import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navigation = ({ activeSection, scrollToSection, isDarkTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isDarkTheme
          ? "bg-black/90 border-yellow-500/20"
          : "bg-white/90 border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
              isDarkTheme
                ? "from-yellow-400 to-amber-500"
                : "from-gray-800 to-gray-900"
            }`}
          >
            Abdulrahman Ismael
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? isDarkTheme
                      ? "text-yellow-400"
                      : "text-blue-600"
                    : isDarkTheme
                    ? "text-gray-300 hover:text-yellow-400"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {section}
              </motion.button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            className="md:hidden relative z-50 p-2"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isDarkTheme ? "bg-yellow-400" : "bg-gray-800"
                }`}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-6 h-0.5 rounded-full mt-1.5 transition-all duration-300 ${
                  isDarkTheme ? "bg-yellow-400" : "bg-gray-800"
                }`}
              />
              <motion.span
                animate={
                  isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className={`w-6 h-0.5 rounded-full mt-1.5 transition-all duration-300 ${
                  isDarkTheme ? "bg-yellow-400" : "bg-gray-800"
                }`}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40"
            onClick={toggleMenu}
          >
            <div
              className={`fixed inset-0 ${
                isDarkTheme ? "bg-black/80" : "bg-white/80"
              } backdrop-blur-md`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`md:hidden fixed top-0 right-0 h-screen w-80 z-50 ${
              isDarkTheme
                ? "bg-gradient-to-b from-gray-900/95 to-black/95 border-l border-yellow-500/20"
                : "bg-gradient-to-b from-white/95 to-gray-50/95 border-l border-gray-200"
            } backdrop-blur-xl shadow-2xl`}
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-opacity-20 border-current">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`text-lg font-semibold ${
                    isDarkTheme ? "text-yellow-400" : "text-gray-800"
                  }`}
                >
                  Menu
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className={`p-2 rounded-full ${
                    isDarkTheme
                      ? "hover:bg-yellow-400/20 text-yellow-400"
                      : "hover:bg-gray-200 text-gray-600"
                  } transition-colors`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 flex flex-col px-6 py-8">
                <div className="space-y-4">
                  {sections.map((section, index) => (
                    <motion.button
                      key={section}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSectionClick(section)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                        activeSection === section
                          ? isDarkTheme
                            ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                            : "bg-blue-100 text-blue-600 border border-blue-200"
                          : isDarkTheme
                          ? "text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 border border-transparent hover:border-yellow-400/20"
                          : "text-gray-600 hover:bg-gray-100 hover:text-blue-600 border border-transparent hover:border-blue-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="capitalize font-medium text-lg">
                          {section}
                        </span>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index + 0.5 }}
                          className={`w-2 h-2 rounded-full ${
                            activeSection === section
                              ? isDarkTheme
                                ? "bg-yellow-400"
                                : "bg-blue-600"
                              : isDarkTheme
                              ? "bg-yellow-400/30 group-hover:bg-yellow-400/60"
                              : "bg-blue-400/30 group-hover:bg-blue-400/60"
                          } transition-colors`}
                        />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Menu Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className={`p-6 border-t border-opacity-20 border-current ${
                  isDarkTheme ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <div className="text-sm text-center">
                  Navigate through my portfolio
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
