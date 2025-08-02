import { motion } from "framer-motion";

const Navigation = ({ activeSection, scrollToSection, isDarkTheme }) => {
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
