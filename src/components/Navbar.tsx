import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  const navLinks = [
    { path: '/tech-solutions', label: 'Tech Solutions' },
    { path: '/talent-solutions', label: 'Talent Solutions' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 py-2 md:py-3 ${
        isScrolled
          ? 'bg-[#0a1225]/90 backdrop-blur-md shadow-lg border-b border-blue-500/10'
          : 'bg-[#0a1225]/70 backdrop-blur-md'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo + Branding */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="/images/teknismart_logo.png"
              alt="Teknismart Logo"
              className="w-10 h-10 rounded transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-[0_0_8px_rgba(0,191,255,0.6)]">
                TEKNISMART
              </span>
              <span className="text-xs sm:text-sm tracking-widest text-cyan-400 mt-0.5">
                SOLUTIONS INC
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group text-sm text-cyan-300 hover:text-white font-medium transition-all"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_6px_cyan]" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
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
                    <X className="h-6 w-6 text-cyan-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-cyan-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#0a1225]/95 backdrop-blur-md rounded-b-2xl border-t border-cyan-500/10"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 text-cyan-300 hover:bg-cyan-500/10 hover:text-white transition-colors ${
                      location.pathname === link.path
                        ? 'text-white bg-cyan-500/10'
                        : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
