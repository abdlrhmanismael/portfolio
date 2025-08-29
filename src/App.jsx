import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && scrollPosition >= element.offsetTop) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkTheme
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Theme Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className={`fixed z-50 rounded-full shadow-xl transition-all duration-300 
          p-2 sm:p-3 md:p-4 
          bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 
          ${
            isDarkTheme
              ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:shadow-yellow-500/25"
              : "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-gray-800/25"
          }`}
      >
        {isDarkTheme ? (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        ) : (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        )}
      </motion.button>

      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDarkTheme={isDarkTheme}
      />
      <Hero scrollToSection={scrollToSection} isDarkTheme={isDarkTheme} />
      <About isDarkTheme={isDarkTheme} />
      <Skills isDarkTheme={isDarkTheme} />
      <Projects isDarkTheme={isDarkTheme} />
      <Experience isDarkTheme={isDarkTheme} />
      <Contact isDarkTheme={isDarkTheme} />
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default App;
