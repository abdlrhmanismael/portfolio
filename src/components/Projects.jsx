import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = ({ isDarkTheme }) => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },

    {
      title: "Weather Dashboard",
      description:
        "A weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "🌤️",
      tech: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with message encryption, file sharing, and group chat functionality.",
      image: "💬",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div
            className={`w-24 h-1 mx-auto mb-6 rounded-full ${
              isDarkTheme
                ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                : "bg-gradient-to-r from-blue-500 to-purple-600"
            }`}
          ></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl border shadow-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                isDarkTheme
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 shadow-yellow-500/10"
                  : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 shadow-gray-200/50"
              }`}
            >
              <div className="p-6">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDarkTheme ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 text-sm ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkTheme
                          ? "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400"
                          : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-lg font-medium text-center transition-all duration-300 ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:from-yellow-600 hover:to-amber-700"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-4 rounded-lg font-medium text-center border transition-all duration-300 ${
                      isDarkTheme
                        ? "border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10"
                        : "border-blue-500/30 text-blue-600 hover:bg-blue-500/10"
                    }`}
                  >
                    <Github className="w-4 h-4 inline mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
