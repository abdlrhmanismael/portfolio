import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ShoppingCart,
  Split,
  Package,
  MessageSquare,
  Receipt,
  LayoutDashboard,
} from "lucide-react";

const Projects = ({ isDarkTheme }) => {
  const projects = [
    {
      title: "International E-Commerce Platform ",
      description:
        "A global e-commerce website built with Nuxt.js that supports multiple languages and currencies. The platform follows a headless CMS architecture, enabling easy management of products, categories, banners, and static content through an intuitive admin interface. This decoupled approach ensures flexibility for content updates, localized campaigns, and region-specific shopping experiences.",
      image: <ShoppingCart className="w-16 h-16 mx-auto" />,
      tech: ["Nuxt.js", "TypeScript", "Bootstrap"],
      liveUrl: "https://testwebsite.masainternationalgroup.com/en/",
      githubUrl: "",
    },

    {
      title: "Order Splitter — Web Application for Bill Sharing",
      description:
        "A web application designed to split and calculate orders among friends, including taxes, service fees, and delivery charges, ensuring fair distribution of costs.",
      image: <Receipt className="w-16 h-16 mx-auto" />,
      tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      liveUrl: "https://split-check-frontend.onrender.com/",
      githubUrl: "https://github.com/abdlrhmanismael/split-check-frontend",
    },

    {
      title: "Juned Masa Trading — Import & Distribution Platform",
      description:
        "A responsive, bilingual website for a Syrian import and distribution company. Showcases Double A paper and ARISUN tires, with sections for services, articles, company profile, and contact. Focused on brand trust, product quality, and customer guidance.",
      image: <Package className="w-16 h-16 mx-auto" />,
      tech: ["Nutt.js", "TypeScript", "Bootstrap"],
      liveUrl: "https://junedmasa.com/en/",
      githubUrl: "",
    },
    {
      title: "Dashboard Of International E-Commerce",
      description:
        "A global Nuxt.js-based marketplace supporting multiple languages and currencies. Powered by a headless CMS, it enables easy product management, dynamic content updates, and localized shopping experiences for different region",
      image: <LayoutDashboard className="w-16 h-16 mx-auto" />,
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      liveUrl: "https://testcp.masainternationalgroup.com/login",
      githubUrl: "",
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
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-center mb-4">{project.image}</div>
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
                <div className="mt-auto pt-4">
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
                  {project.githubUrl ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${
                        isDarkTheme
                          ? "text-white hover:bg-gray-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </motion.a>
                  ) : (
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-lg ${
                        isDarkTheme ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      private
                    </span>
                  )}
                  </div>
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
