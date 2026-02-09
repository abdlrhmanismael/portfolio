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
      image: "https://i.postimg.cc/cL7DqBXq/Whats-App-Image-2026-02-09-at-5-24-59-AM.jpg", // Replace with actual project image
      tech: ["Next.js", "TypeScript", "Tailwind" ,'Shadcn'],
      liveUrl: "https://testwebsite.dawatoora.com/en/",
      githubUrl: "",
      stats: {
        value: "60+",
        label: "Countries Supported"
      }
    },

    {
      title: "Order Splitter — Web Application for Bill Sharing",
      description:
        "A web application designed to split and calculate orders among friends, including taxes, service fees, and delivery charges, ensuring fair distribution of costs.",
      image: "https://i.postimg.cc/QCWbfQFh/Whats-App-Image-2026-02-09-at-5-25-52-AM.jpg", // Replace with actual project image
      tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      liveUrl: "https://split-check-frontend.onrender.com/",
      githubUrl: "https://github.com/abdlrhmanismael/split-check-frontend",
      stats: {
        value: "1K+",
        label: "Active Users"
      }
    },

    {
      title: "Juned Masa Trading — Import & Distribution Platform",
      description:
        "A responsive, bilingual website for a Syrian import and distribution company. Showcases Double A paper and ARISUN tires, with sections for services, articles, company profile, and contact. Focused on brand trust, product quality, and customer guidance.",
      image: "https://i.postimg.cc/PxC9k8C1/Whats-App-Image-2026-02-09-at-5-27-19-AM.jpg", // Replace with actual project image
      tech: ["Next.js", "TypeScript", "Tailwind" ,'Shadcn'],
      liveUrl: "https://junedmasa.com/en/",
      githubUrl: "",
      stats: {
        value: "50+",
        label: "Products Listed"
      }
    },
    {
      title: "Dashboard Of International E-Commerce",
      description:
        "A global Nuxt.js-based marketplace supporting multiple languages and currencies. Powered by a headless CMS, it enables easy product management, dynamic content updates, and localized shopping experiences for different region",
      image: "https://i.postimg.cc/MKn28NjN/Whats-App-Image-2026-02-09-at-5-20-41-AM.jpg", // Replace with actual project image
      tech: ["Next.js", "TypeScript", "Tailwind" ,'Shadcn'],
      liveUrl: "",
      githubUrl: "",
      stats: {
        value: "100%",
        label: "Client Satisfaction"
      }
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
              whileHover={{ y: -5, scale: 1.02 }}
              className={`rounded-2xl border shadow-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                isDarkTheme
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 shadow-yellow-500/10"
                  : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 shadow-gray-200/50"
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${project.title}/400/250.jpg`;
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDarkTheme ? 'from-gray-900/80' : 'from-gray-900/60'
                } to-transparent`}></div>
                
                {/* Stats Badge */}
              
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDarkTheme ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 text-sm line-clamp-3 ${
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
                  {project.liveUrl || project.githubUrl ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium text-center transition-all duration-300 ${
                        isDarkTheme
                          ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:from-yellow-600 hover:to-amber-700"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      {project.liveUrl ? "Live Demo" : "View Code"}
                    </motion.a>
                  ) : (
                    <span
                      className={`flex-1 py-2 px-4 rounded-lg font-medium text-center ${
                        isDarkTheme
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      Private
                    </span>
                  )}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
