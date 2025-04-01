import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll behavior to add shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tech-solutions', label: 'Tech Solutions' },
    { path: '/talent-solutions', label: 'Talent Solutions' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a1225]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* Logo */}
            <img
              src="/images/teknismart_logo.png" // Ensure the correct path to your logo
              alt="Teknismart Logo"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-105"
            />
            {/* Company Name */}
            <span className="text-2xl font-extrabold text-blue-500 tracking-wide hover:brightness-110 transition-all">
              TEKNISMART
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group ${
                  location.pathname === link.path ? 'text-blue-400' : ''
                }`}
              >
                <span className="text-gray-300 hover:text-blue-400 transition-colors">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/login"
              className="relative group overflow-hidden rounded-full bg-blue-500 px-6 py-2 text-white font-semibold hover:brightness-110 transition-all"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#0a1225]/95 backdrop-blur-md rounded-b-2xl border-t border-blue-500/10"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-colors ${
                      location.pathname === link.path
                        ? 'text-blue-400 bg-blue-500/10'
                        : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Link
                    to="/login"
                    className="block w-full text-center bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:brightness-110 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
