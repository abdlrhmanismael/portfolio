import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Code2,
  FileCode,
  Palette,
  Database,
  Globe,
  Smartphone,
  Zap,
  Shield,
  GitBranch,
  Cloud,
} from "lucide-react";

const Skills = ({ isDarkTheme }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        {
          name: "JavaScript",
          icon: <Code2 className="w-12 h-12" />,
          color: "#F7DF1E",
        },
        {
          name: "TypeScript",
          icon: <FileCode className="w-12 h-12" />,
          color: "#3178C6",
        },
        {
          name: "React",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-2.494 1.043-4.722 2.63-6.532 4.669a12.133 12.133 0 0 0-3.792 6.48c-.338 1.803-.338 3.68 0 5.483.89 4.738 4.491 8.34 9.23 9.23 1.802.338 3.68.338 5.482 0 2.85-.534 5.448-2.042 7.47-4.244a12.13 12.13 0 0 0 3.792-6.48c.338-1.803.338-3.68 0-5.483-.89-4.738-4.491-8.34-9.23-9.23-1.802-.338-3.68-.338-5.482 0zm-1.324 1.5c1.547.29 2.955.89 4.2 1.8.5.36.96.76 1.38 1.2.42.44.8.92 1.14 1.44.34.52.64 1.08.9 1.68.26.6.46 1.24.6 1.92.14.68.2 1.4.2 2.16 0 .76-.06 1.48-.2 2.16-.14.68-.34 1.32-.6 1.92-.26.6-.56 1.16-.9 1.68-.34.52-.72 1-.1.44 1.44-.42.44-.88.84-1.38 1.2-1.245.91-2.653 1.51-4.2 1.8-1.547.29-3.155.29-4.702 0-1.547-.29-2.955-.89-4.2-1.8-.5-.36-.96-.76-1.38-1.2-.42-.44-.8-.92-1.14-1.44-.34-.52-.64-1.08-.9-1.68-.26-.6-.46-1.24-.6-1.92-.14-.68-.2-1.4-.2-2.16 0-.76.06-1.48.2-2.16.14-.68.34-1.32.6-1.92.26-.6.56-1.16.9-1.68.34-.52.72-1 1.14-1.44.42-.44.88-.84 1.38-1.2 1.245-.91 2.653-1.51 4.2-1.8 1.547-.29 3.155-.29 4.702 0z" />
            </svg>
          ),
          color: "#61DAFB",
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        {
          name: "Next.js",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 4.317 8.296 8.793 9.695.779.24 1.6.422 2.534.528.308.035.884.044 1.378.044.494 0 1.07-.009 1.378-.044a12.307 12.307 0 0 0 2.534-.528c4.476-1.399 8.141-5.189 8.793-9.695.096-.659.108-.854.108-1.748s-.012-1.089-.108-1.747c-.652-4.506-4.317-8.296-8.793-9.695a12.279 12.279 0 0 0-2.534-.528C11.87.009 11.748 0 11.572 0zm5.069 7.217c.323 0 .604.019.871.054.306.04.475.096.586.164a.722.722 0 0 1 .237.217c.058.073.088.158.088.257 0 .157-.058.304-.172.44-.114.136-.304.264-.568.384-.264.12-.704.24-1.32.36-.616.12-1.448.264-2.496.432-.064.016-.096.04-.096.072v3.12c0 .08.032.152.096.216.064.064.152.096.264.096h1.896c.08 0 .152.032.216.096.064.064.096.152.096.264v.744c0 .08-.032.152-.096.216a.312.312 0 0 1-.216.096h-4.8c-.08 0-.152-.032-.216-.096a.312.312 0 0 1-.096-.216v-.744c0-.08.032-.152.096-.216a.312.312 0 0 1 .216-.096h1.896c.08 0 .152-.032.216-.096.064-.064.096-.152.096-.264v-3.12c0-.032-.032-.056-.096-.072-1.048-.168-1.88-.312-2.496-.432-.616-.12-1.056-.24-1.32-.36-.264-.12-.454-.248-.568-.384-.114-.136-.172-.283-.172-.44 0-.099.03-.184.088-.257a.722.722 0 0 1 .237-.217c.111-.068.28-.124.586-.164.267-.035.548-.054.871-.054.323 0 .604.019.871.054.306.04.475.096.586.164a.722.722 0 0 1 .237.217c.058.073.088.158.088.257 0 .157-.058.304-.172.44-.114.136-.304.264-.568.384-.264.12-.704.24-1.32.36-.616.12-1.448.264-2.496.432-.064.016-.096.04-.096.072v3.12c0 .08.032.152.096.216.064.064.152.096.264.096h1.896c.08 0 .152-.032.216-.096.064-.064.096-.152.096-.264v.744c0 .08-.032.152-.096.216a.312.312 0 0 1-.216.096h-4.8c-.08 0-.152-.032-.216-.096a.312.312 0 0 1-.096-.216v-.744c0-.08.032-.152.096-.216a.312.312 0 0 1 .216-.096h1.896c.08 0 .152-.032.216-.096.064-.064.096-.152.096-.264v-3.12c0-.032-.032-.056-.096-.072-1.048-.168-1.88-.312-2.496-.432-.616-.12-1.056-.24-1.32-.36-.264-.12-.454-.248-.568-.384-.114-.136-.172-.283-.172-.44 0-.099.03-.184.088-.257a.722.722 0 0 1 .237-.217c.111-.068.28-.124.586-.164.267-.035.548-.054.871-.054z" />
            </svg>
          ),
          color: "#000000",
        },
        {
          name: "Vue.js",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 10.11l2.41-7.88h4.43L12 14.08z" />
            </svg>
          ),
          color: "#4FC08D",
        },
        {
          name: "Nuxt.js",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.914 17.71c-.557.945.138 2.13 1.251 2.13h12.614c1.113 0 1.809-1.185 1.251-2.13l-5.319-9.114a1.437 1.437 0 0 0-1.252-.709z" />
            </svg>
          ),
          color: "#00DC82",
        },
      ],
    },
    {
      category: "Styling & UI",
      skills: [
        {
          name: "Tailwind CSS",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
          ),
          color: "#06B6D4",
        },
        {
          name: "Bootstrap",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.77 15.305c1.113 0 1.96-.107 2.538-.32a2.638 2.638 0 0 0 1.46-1.018c.348-.465.522-1.05.522-1.755 0-.69-.174-1.26-.522-1.71-.348-.45-.84-.795-1.46-1.035-.6-.24-1.425-.36-2.48-.36H9.281V15.3h2.49zm.364-6.468c.66 0 1.156.045 1.488.135.332.09.58.225.744.405.164.18.246.405.246.675 0 .27-.082.495-.246.675-.164.18-.412.315-.744.405-.332.09-.828.135-1.488.135H9.281V8.837h2.853zM24 11.639V24H0V0h24v11.639zM1.881 22.119h20.238V1.881H1.881v20.238z" />
            </svg>
          ),
          color: "#7952B3",
        },
        {
          name: "Sass",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 17.568c-1.44 1.44-3.36 2.232-5.568 2.232s-4.128-.792-5.568-2.232c-1.44-1.44-2.232-3.36-2.232-5.568s.792-4.128 2.232-5.568c1.44-1.44 3.36-2.232 5.568-2.232s4.128.792 5.568 2.232c1.44 1.44 2.232 3.36 2.232 5.568s-.792 4.128-2.232 5.568zM12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
            </svg>
          ),
          color: "#CF649A",
        },
      ],
    },
  ];

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
                          <div
                            className="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
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
        ></motion.div>
      </div>
    </section>
  );
};

export default Skills;
