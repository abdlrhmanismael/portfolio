import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = ({ isDarkTheme }) => {
  return (
    <footer
      className={`py-8 px-4 transition-colors duration-300 ${
        isDarkTheme
          ? "bg-gradient-to-br from-black via-gray-900 to-black border-t border-yellow-500/20"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 border-t border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`flex items-center justify-center gap-2 mb-4 ${
            isDarkTheme ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span>Made with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart
              className={`w-5 h-5 ${
                isDarkTheme ? "text-yellow-400" : "text-blue-600"
              }`}
            />
          </motion.div>
          <span>by John Doe</span>
        </motion.div>
        <p
          className={`text-sm ${
            isDarkTheme ? "text-gray-400" : "text-gray-500"
          }`}
        >
          © 2024 All rights reserved. Built with React, TailwindCSS, and Framer
          Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
