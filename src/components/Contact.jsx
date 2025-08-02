import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { useState } from "react";

const Contact = ({ isDarkTheme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <div
            className={`w-24 h-1 mx-auto mb-6 rounded-full ${
              isDarkTheme
                ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                : "bg-gradient-to-r from-blue-500 to-purple-600"
            }`}
          ></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkTheme ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to bring your ideas to life? Let's collaborate on something
            amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div
              className={`p-8 rounded-2xl border shadow-2xl backdrop-blur-sm transition-all duration-300 ${
                isDarkTheme
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 shadow-yellow-500/10"
                  : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 shadow-gray-200/50"
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-8 ${
                  isDarkTheme ? "text-yellow-400" : "text-blue-600"
                }`}
              >
                Let's Connect
              </h3>
              <p
                className={`mb-8 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm always excited to discuss new opportunities, interesting
                projects, or just chat about technology and innovation.
              </p>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center p-4 rounded-xl border transition-all duration-300 ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40"
                      : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                    }`}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Email
                    </p>
                    <p
                      className={
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      abdulrahmanismael992@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center p-4 rounded-xl border transition-all duration-300 ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40"
                      : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                    }`}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Phone
                    </p>
                    <p
                      className={
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      +1 (555) 123-4567
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center p-4 rounded-xl border transition-all duration-300 ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40"
                      : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                    }`}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Location
                    </p>
                    <p
                      className={
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      San Francisco, CA
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center p-4 rounded-xl border transition-all duration-300 ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40"
                      : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                    }`}
                  >
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Availability
                    </p>
                    <p
                      className={
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      Open to new opportunities
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div
                className={`mt-8 pt-8 border-t ${
                  isDarkTheme ? "border-yellow-500/20" : "border-gray-200"
                }`}
              >
                <h4
                  className={`text-lg font-semibold mb-4 ${
                    isDarkTheme ? "text-white" : "text-gray-900"
                  }`}
                >
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg ${
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
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg ${
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
                    href="mailto:abdulrahmanismael992@gmail.com"
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg ${
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
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
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDarkTheme ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full p-4 border rounded-xl transition-colors shadow-lg ${
                        isDarkTheme
                          ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-500"
                          : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none`}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        isDarkTheme ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={`w-full p-4 border rounded-xl transition-colors shadow-lg ${
                        isDarkTheme
                          ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-500"
                          : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none`}
                      required
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkTheme ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Collaboration"
                    className={`w-full p-4 border rounded-xl transition-colors shadow-lg ${
                      isDarkTheme
                        ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-500"
                        : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                    } focus:outline-none`}
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkTheme ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    rows={6}
                    className={`w-full p-4 border rounded-xl transition-colors resize-none shadow-lg ${
                      isDarkTheme
                        ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-500"
                        : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                    } focus:outline-none`}
                    required
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:from-yellow-600 hover:to-amber-700 shadow-yellow-500/25"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-blue-500/25"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
