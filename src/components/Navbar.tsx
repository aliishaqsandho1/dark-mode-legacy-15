
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappUrl = "https://wa.me/923164324014?text=Hello! I'd like to discuss a project with you.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 glass-panel shadow-[0_8px_32px_0_rgba(0,255,255,0.1)] border-b border-neon-blue/10"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-dark-300 p-2 rounded-lg border border-neon-blue/30">
                <Code2 size={24} className="text-neon-blue" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient flex items-center gap-2">
                Ali Ishaq
                <Sparkles size={16} className="text-neon-purple animate-pulse" />
              </span>
              <span className="text-xs text-gray-400">WordPress & React Developer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    location.pathname === link.path
                      ? "text-neon-blue"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg border border-neon-blue/30"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}

            {/* WhatsApp Button in Header */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300">
                <img 
                  src="http://iqfalseceilings.site/wp-content/uploads/2025/10/whatsapp.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5"
                />
                <span className="text-white font-medium text-sm">Chat</span>
              </div>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2 rounded-lg bg-dark-300/50 border border-white/10 hover:border-neon-blue/30 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X size={24} className="text-neon-blue" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 glass-panel shadow-lg border border-neon-blue/20 rounded-xl overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-neon-blue bg-neon-blue/10 border border-neon-blue/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile WhatsApp Button */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-gradient-to-br from-green-400 to-green-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <img 
                  src="http://iqfalseceilings.site/wp-content/uploads/2025/10/whatsapp.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5"
                />
                <span className="font-medium">WhatsApp Me</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
