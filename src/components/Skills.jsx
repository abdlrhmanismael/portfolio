import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Skills = ({ isDarkTheme }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", logo: "⚛️" },
        { name: "TypeScript", logo: "📘" },
        { name: "Next.js", logo: "▲" },
        { name: "Vue.js", logo: "💚" },
        { name: "TailwindCSS", logo: "🎨" },
        { name: "Sass", logo: "💎" },
      ],
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "Node.js", logo: "🟢" },
        { name: "GraphQL", logo: "🔵" },
        { name: "REST APIs", logo: "🌐" },
        { name: "Git", logo: "📝" },
        { name: "Docker", logo: "🐳" },
        { name: "AWS", logo: "☁️" },
      ],
    },
    {
      category: "Design & Testing",
      skills: [
        { name: "Figma", logo: "🎨" },
        { name: "Jest", logo: "🟡" },
        { name: "Cypress", logo: "🌲" },
        { name: "Storybook", logo: "📚" },
        { name: "Framer Motion", logo: "✨" },
        { name: "Three.js", logo: "🎯" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [skillCategories.length]);

  return (
    <section
      id="skills"
      className={`py-20 px-4 transition-colors duration-300 ${
        isDarkTheme
          ? "bg-gradient-to-br from-black via-gray-900 to-black"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDarkTheme ? "text-white" : "text-gray-900"
            }`}
          >
            Skills & Technologies
          </h2>
          <div
            className={`w-24 h-1 mx-auto mb-6 rounded-full ${
              isDarkTheme
                ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                : "bg-gradient-to-r from-blue-500 to-purple-600"
            }`}
          ></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="w-full flex-shrink-0 px-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl border shadow-2xl backdrop-blur-sm transition-all duration-300 ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 shadow-yellow-500/10"
                      : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 shadow-gray-200/50"
                  }`}
                >
                  <h3
                    className={`text-3xl font-semibold mb-8 text-center ${
                      isDarkTheme ? "text-yellow-400" : "text-blue-600"
                    }`}
                  >
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className={`p-6 rounded-xl border transition-all duration-300 group ${
                          isDarkTheme
                            ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40"
                            : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                            {skill.logo}
                          </div>
                          <h4
                            className={`text-lg font-semibold ${
                              isDarkTheme ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {skill.name}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {skillCategories.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? isDarkTheme
                      ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                      : "bg-gradient-to-r from-blue-500 to-purple-600"
                    : isDarkTheme
                    ? "bg-gray-600 hover:bg-gray-500"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0
                  ? skillCategories.length - 1
                  : currentSlide - 1
              )
            }
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center transition-colors shadow-lg ${
              isDarkTheme
                ? "bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-yellow-500/30 text-yellow-400 hover:text-yellow-300"
                : "bg-gradient-to-r from-white/90 to-gray-50/90 border-gray-300 text-blue-600 hover:text-blue-500"
            }`}
          >
            ←
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              setCurrentSlide((currentSlide + 1) % skillCategories.length)
            }
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center transition-colors shadow-lg ${
              isDarkTheme
                ? "bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-yellow-500/30 text-yellow-400 hover:text-yellow-300"
                : "bg-gradient-to-r from-white/90 to-gray-50/90 border-gray-300 text-blue-600 hover:text-blue-500"
            }`}
          >
            →
          </motion.button>
        </div>

        {/* Auto-play indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-6"
        >
          <p className={isDarkTheme ? "text-gray-400" : "text-gray-500"}>
            Auto-advancing every 4 seconds • Click to navigate
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
