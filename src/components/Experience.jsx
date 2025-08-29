import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = ({ isDarkTheme }) => {
  const experiences = [
    {
      title: "Front-end Developer",
      company: "Masa International Group",
      period: "July 2024 - Current",
      location: "Malaysia",
      description:
        "Establishing software products using latest technologies and frameworks, focusing on modern frontend.",
      achievements: [
        "Developing scalable web applications using Nuxt.js Vue.js And Next",
        "Implementing responsive designs with modern CSS frameworks",
        "Collaborating with cross-functional teams to deliver high-quality products",
        "Optimizing application performance and user experience",
        "Working with latest frontend technologies and best practices",
        "Contributing to software architecture and technical decisions",
      ],
    },
  ];

  return (
    <section
      id="experience"
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
            Work Experience
          </h2>
          <div
            className={`w-24 h-1 mx-auto mb-6 rounded-full ${
              isDarkTheme
                ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                : "bg-gradient-to-r from-blue-500 to-purple-600"
            }`}
          ></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-2xl border shadow-2xl backdrop-blur-sm transition-all duration-300 cursor-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${
                isDarkTheme ? "%23fbbf24" : "%233b82f6"
              }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>'),_pointer] hover:cursor-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${
                isDarkTheme ? "%23f59e0b" : "%232563eb"
              }" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>'),_pointer] ${
                isDarkTheme
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 shadow-yellow-500/10 hover:border-yellow-500/50 hover:shadow-yellow-500/20"
                  : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 shadow-gray-200/50 hover:border-blue-300 hover:shadow-blue-200/50"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                    }`}
                  >
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {experience.title}
                    </h3>
                    <p
                      className={`text-lg ${
                        isDarkTheme ? "text-yellow-400" : "text-blue-600"
                      }`}
                    >
                      {experience.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:text-right gap-2">
                  <div
                    className={`flex items-center gap-2 ${
                      isDarkTheme ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      isDarkTheme ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
              </div>

              <p
                className={`mb-6 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {experience.description}
              </p>

              <div className="space-y-3">
                <h4
                  className={`font-semibold ${
                    isDarkTheme ? "text-yellow-400" : "text-blue-600"
                  }`}
                >
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: achievementIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className={`flex items-start gap-3 ${
                          isDarkTheme ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            isDarkTheme
                              ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                              : "bg-gradient-to-r from-blue-500 to-purple-600"
                          }`}
                        ></div>
                        <span className="text-sm">{achievement}</span>
                      </motion.li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
