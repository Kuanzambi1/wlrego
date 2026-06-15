import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, Calculator } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'simulator', label: 'Simulador' },
    { id: 'about', label: 'Sobre Nós' },
    { id: 'contact', label: 'Contacto' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <div
              className="cursor-pointer flex items-center transition-transform hover:scale-102"
              onClick={() => onNavigate('home')}
            >
              {/* Display a small compact version on navbar */}
              <Logo className="h-20 sm:h-12" />
              <div className="ml-2 hidden sm:block">
                <span className="text-[10px] block font-semibold text-brand-teal tracking-wider uppercase">
                  W. REGO Lda
                </span>
                <span className="text-[8px] block text-gray-400 tracking-widest font-bold">
                  COMÉRCIO GERAL & SERVIÇOS
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-md ${
                      isActive
                        ? 'text-brand-teal font-semibold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-teal"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => handleLinkClick('simulator')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-brand-teal hover:bg-brand-teal hover:text-white border border-brand-teal/40 rounded-lg transition-all uppercase tracking-wide"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Simular Orçamento</span>
              </button>
              
              <button
                onClick={() => handleLinkClick('contact')}
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-black bg-brand-teal hover:bg-brand-green rounded-lg shadow-md transition-all uppercase tracking-wider"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contactar</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => handleLinkClick('simulator')}
                className="p-1.5 text-brand-teal hover:bg-black/5 rounded-lg transition-colors"
                title="Simular Orçamento"
              >
                <Calculator className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-gray-600 hover:bg-black/5 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Slide-over */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
            />

            {/* Drawer menu sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 max-w-sm bg-white border-l border-gray-200 shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-gray-100">
                <div className="flex items-center">
                  <Logo className="h-7" />
                  <span className="ml-2 font-display font-bold text-gray-900 text-sm">
                    W. REGO Lda
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 hover:bg-black/10 rounded-full transition-colors text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links inside drawer */}
              <div className="flex-1 py-4 overflow-y-auto px-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-teal/10 text-brand-teal font-extrabold border-l-4 border-brand-teal'
                          : 'text-gray-600 hover:bg-black/5 hover:text-gray-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />}
                    </button>
                  );
                })}
              </div>

              {/* Action indicators at bottom of drawer */}
              <div className="p-4 border-t border-gray-200 space-y-2 bg-gray-100">
                <button
                  onClick={() => handleLinkClick('simulator')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-teal/10 hover:bg-brand-teal/20 text-brand-teal text-xs font-semibold rounded-xl transition-all"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Simulador de Orçamento</span>
                </button>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-teal text-black hover:bg-brand-green text-xs font-extrabold rounded-xl shadow-md transition-all"
                >
                  <PhoneCall className="w-4 h-4 animate-pulse" />
                  <span>Contactar Equipa</span>
                </button>
                <div className="text-center mt-3 animate-pulse">
                  <span className="text-[10px] text-gray-400 font-mono">Luanda, Angola</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
