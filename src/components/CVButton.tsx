import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CVButton = () => {
  const cvUrl = "http://itsali.site/wp-content/uploads/2025/11/ALI-ISHAQ-CV.pdf";

  return (
    <motion.a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      download
    >
      <div className="relative">
        {/* Pulsing background effect */}
        <motion.div
          className="absolute inset-0 bg-neon-blue rounded-full blur-lg opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Main button */}
        <div className="relative bg-gradient-to-br from-neon-blue to-neon-purple text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300">
          <Download className="w-6 h-6" />
        </div>

        {/* Hover tooltip */}
        <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-dark-300 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-lg">
            Download CV
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default CVButton;
