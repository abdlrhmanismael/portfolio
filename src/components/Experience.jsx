import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = ({ isDarkTheme }) => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices for scalable React applications.",
      achievements: [
        "Led development of 3 major web applications serving 100K+ users",
        "Improved application performance by 40% through code optimization",
        "Mentored 5 junior developers and conducted 50+ code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      location: "New York, NY",
      description:
        "Developed responsive web applications using React and TypeScript, collaborated with design and backend teams to deliver high-quality products.",
      achievements: [
        "Built 10+ responsive web applications with React and TypeScript",
        "Collaborated with UX designers to implement pixel-perfect designs",
        "Reduced bundle size by 30% through code splitting and optimization",
        "Participated in agile development with 2-week sprint cycles",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      location: "Austin, TX",
      description:
        "Started career in web development, learned modern frameworks and best practices while contributing to various client projects.",
      achievements: [
        "Developed 5 client websites using HTML, CSS, and JavaScript",
        "Learned React and modern frontend development practices",
        "Contributed to open-source projects and community events",
        "Completed 3 professional certifications in web development",
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
              className={`p-8 rounded-2xl border shadow-2xl backdrop-blur-sm transition-all duration-300 ${
                isDarkTheme
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 shadow-yellow-500/10"
                  : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 shadow-gray-200/50"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
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
                <div className="text-right">
                  <div
                    className={`flex items-center gap-2 mb-1 ${
                      isDarkTheme ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      isDarkTheme ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
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
