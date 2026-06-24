/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // 1. Navigation with offset prevention (accounting for fixed header size)
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 76; // header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 2. Scroll spying to automatically update active header indicators on manual scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset anchor

      for (const sect of sections) {
        const element = document.getElementById(sect);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-gray-900 bg-gray-50 selection:bg-brand-teal/20 selection:text-white">
      
      {/* 1. Fixed Header Section */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 2. Main Page Sections Assembly */}
      <main className="flex-1">
        
        {/* Home/Introduction Hero */}
        <Hero onNavigate={handleNavigate} />

        {/* Detailed Services list with custom modals */}
        <Services onNavigate={handleNavigate} />

        {/* Dynamic Project Portfolio Grid */}
        <Portfolio />



        {/* Vision/Mission context & Frequently Answered Questions (FAQ) */}
        <About />

        {/* Contact form desk accompanied by custom vector roadmap */}
        <Contact />

      </main>

      {/* 3. Site Sitemap and Legal Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
