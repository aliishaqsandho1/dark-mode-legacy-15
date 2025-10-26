import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "923164324014"; // Your WhatsApp number
  const message = "Hello! I'd like to discuss a project with you.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Pulsing background effect */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50"
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
        <div className="relative bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300">
          <img 
            src="http://iqfalseceilings.site/wp-content/uploads/2025/10/whatsapp.png" 
            alt="WhatsApp" 
            className="w-6 h-6"
          />
          <span className="font-semibold text-sm whitespace-nowrap">
            WhatsApp Me
          </span>
        </div>

        {/* Hover tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-dark-300 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-lg">
            Let's chat on WhatsApp!
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
