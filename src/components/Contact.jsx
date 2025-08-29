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
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDarkTheme
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${
              isDarkTheme ? "text-white" : "text-gray-900"
            }`}
          >
            Get In Touch
          </h2>
          <div
            className={`w-16 sm:w-20 lg:w-24 h-1 mx-auto mb-4 sm:mb-6 rounded-full ${
              isDarkTheme
                ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                : "bg-gradient-to-r from-blue-500 to-purple-600"
            }`}
          ></div>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto px-4 ${
              isDarkTheme ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to bring your ideas to life? Let's collaborate on something
            amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div
              className={`p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border shadow-xl sm:shadow-2xl backdrop-blur-sm transition-all duration-300 ${
                isDarkTheme
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 shadow-yellow-500/10"
                  : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 shadow-gray-200/50"
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 lg:mb-8 ${
                  isDarkTheme ? "text-yellow-400" : "text-blue-600"
                }`}
              >
                Let's Connect
              </h3>
              <p
                className={`mb-6 sm:mb-8 text-sm sm:text-base ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm always excited to discuss new opportunities, interesting
                projects, or just chat about technology and innovation.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div
                  className={`flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40"
                      : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                    }`}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-semibold text-sm sm:text-base ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Email
                    </p>
                    <p
                      className={`text-xs sm:text-sm ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      abdulrahmanismael992@gmail.com
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40"
                      : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                    }`}
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-semibold text-sm sm:text-base ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Phone
                    </p>
                    <p
                      className={`text-xs sm:text-sm ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      +201069422092
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40"
                      : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                    }`}
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-semibold text-sm sm:text-base ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Location
                    </p>
                    <p
                      className={`text-xs sm:text-sm ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Egypt, Cairo
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                    isDarkTheme
                      ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/20 hover:border-yellow-500/40"
                      : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
                    }`}
                  >
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-semibold text-sm sm:text-base ${
                        isDarkTheme ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Availability
                    </p>
                    <p
                      className={`text-xs sm:text-sm ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Open to new opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className={`mt-6 sm:mt-8 pt-6 sm:pt-8 border-t ${
                  isDarkTheme ? "border-yellow-500/20" : "border-gray-200"
                }`}
              >
                <h4
                  className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                    isDarkTheme ? "text-white" : "text-gray-900"
                  }`}
                >
                  Follow Me
                </h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href="https://www.linkedin.com/in/abdlrhmanismael"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg ${
                      isDarkTheme
                        ? "bg-gradient-to-br from-gray-700 to-gray-800 border-yellow-500/30 hover:border-yellow-500/60"
                        : "bg-gradient-to-br from-gray-100 to-white border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    <Linkedin
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        isDarkTheme ? "text-yellow-400" : "text-blue-600"
                      }`}
                    />
                  </a>
                  <a
                    href="https://github.com/abdlrhmanismael"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg ${
                      isDarkTheme
                        ? "bg-gradient-to-br from-gray-700 to-gray-800 border-yellow-500/30 hover:border-yellow-500/60"
                        : "bg-gradient-to-br from-gray-100 to-white border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    <Github
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        isDarkTheme ? "text-yellow-400" : "text-blue-600"
                      }`}
                    />
                  </a>
                  <a
                    href="mailto:abdulrahmanismael992@gmail.com"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-lg ${
                      isDarkTheme
                        ? "bg-gradient-to-br from-gray-700 to-gray-800 border-yellow-500/30 hover:border-yellow-500/60"
                        : "bg-gradient-to-br from-gray-100 to-white border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    <Mail
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        isDarkTheme ? "text-yellow-400" : "text-blue-600"
                      }`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div
              className={`p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border shadow-xl sm:shadow-2xl backdrop-blur-sm transition-all duration-300 ${
                isDarkTheme
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-yellow-500/30 shadow-yellow-500/10"
                  : "bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200 shadow-gray-200/50"
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${
                  isDarkTheme ? "text-yellow-400" : "text-blue-600"
                }`}
              >
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
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
                      className={`w-full p-3 sm:p-4 border rounded-lg sm:rounded-xl transition-colors shadow-lg text-sm sm:text-base ${
                        isDarkTheme
                          ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-500"
                          : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none`}
                      required
                    />
                  </div>
                  <div>
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
                      className={`w-full p-3 sm:p-4 border rounded-lg sm:rounded-xl transition-colors shadow-lg text-sm sm:text-base ${
                        isDarkTheme
                          ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-500"
                          : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none`}
                      required
                    />
                  </div>
                </div>
                <div>
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
                    className={`w-full p-3 sm:p-4 border rounded-lg sm:rounded-xl transition-colors shadow-lg text-sm sm:text-base ${
                      isDarkTheme
                        ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-500"
                        : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                    } focus:outline-none`}
                    required
                  />
                </div>
                <div>
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
                    rows={4}
                    className={`w-full p-3 sm:p-4 border rounded-lg sm:rounded-xl transition-colors resize-none shadow-lg text-sm sm:text-base ${
                      isDarkTheme
                        ? "bg-gradient-to-br from-gray-700/50 to-gray-800/50 border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-500"
                        : "bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                    } focus:outline-none`}
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-sm sm:text-base ${
                      isDarkTheme
                        ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:from-yellow-600 hover:to-amber-700 shadow-yellow-500/25"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-blue-500/25"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
