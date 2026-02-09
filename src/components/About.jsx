import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const About = ({ isDarkTheme }) => {
  return (
    <section
      id="about"
      className={`py-20 px-4 transition-colors duration-300 ${
        isDarkTheme
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
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
            About Me
          </h2>
          <div
            className={`w-24 h-1 mx-auto mb-6 rounded-full ${
              isDarkTheme
                ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                : "bg-gradient-to-r from-blue-500 to-purple-600"
            }`}
          ></div>
        </motion.div>

        {/* Who I Am Section - Mobile Only */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:hidden mb-12"
        >
          <div
            className={`p-8 rounded-2xl border shadow-2xl backdrop-blur-sm transition-all duration-300 ${
              isDarkTheme
                ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 shadow-yellow-500/10"
                : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 shadow-gray-200/50"
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                isDarkTheme ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              Who I Am
            </h3>
            <p
              className={`mb-6 ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm a passionate Frontend Developer with over 2 years of
              experience crafting exceptional digital experiences. I specialize
              in modern web technologies and love turning complex problems into
              simple, beautiful solutions.
            </p>
            <p
              className={`mb-6 ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg interactive ${
                  isDarkTheme
                    ? "bg-gradient-to-br from-gray-700 to-gray-800 border-yellow-500/30 hover:border-yellow-500/60"
                    : "bg-gradient-to-br from-gray-100 to-white border-gray-300 hover:border-blue-400"
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg interactive ${
                  isDarkTheme
                    ? "bg-gradient-to-br from-gray-700 to-gray-800 border-yellow-500/30 hover:border-yellow-500/60"
                    : "bg-gradient-to-br from-gray-100 to-white border-gray-300 hover:border-blue-400"
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
                href="mailto:contact@abdulrahmanismael.com"
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg interactive ${
                  isDarkTheme
                    ? "bg-gradient-to-br from-gray-700 to-gray-800 border-yellow-500/30 hover:border-yellow-500/60"
                    : "bg-gradient-to-br from-gray-100 to-white border-gray-300 hover:border-blue-400"
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
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl border transition-all duration-300 interactive ${
              isDarkTheme
                ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 hover:border-yellow-500/50"
                : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 hover:border-blue-300"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-3 ${
                isDarkTheme ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              Frontend Development
            </h4>
            <p className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
              Skilled in React, Vue.js, Nuxt 3, Next, TypeScript, and modern
              CSS. I build responsive, accessible, and high-performance user
              interfaces that delight users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl border transition-all duration-300 interactive ${
              isDarkTheme
                ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 hover:border-yellow-500/50"
                : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 hover:border-blue-300"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-3 ${
                isDarkTheme ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              UI/UX Design
            </h4>
            <p className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
              Passionate about creating intuitive and beautiful user experiences
              that delight users and drive business results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl border transition-all duration-300 interactive ${
              isDarkTheme
                ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 hover:border-yellow-500/50"
                : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 hover:border-blue-300"
            }`}
          >
            <h4
              className={`text-xl font-semibold mb-3 ${
                isDarkTheme ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              Work &amp; Team Collaboration
            </h4>
            <p className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
              Experienced in collaborating with cross-functional teams,
              conducting code reviews, and coordinating agile workflows to
              deliver high-quality products on time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
