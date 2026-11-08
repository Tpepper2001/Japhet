/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchSpotlight } from './components/ResearchSpotlight';
import { FieldOperations } from './components/FieldOperations';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationFellowships } from './components/EducationFellowships';
import { CompetenciesSection } from './components/CompetenciesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check initial dark mode preference or system setting
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setDarkMode(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors selection:bg-amber-100 selection:text-stone-900 dark:selection:bg-amber-900 dark:selection:text-amber-100">
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenContactModal={scrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenContactModal={scrollToContact}
        />

        <ResearchSpotlight />

        <FieldOperations />

        <ExperienceSection />

        <EducationFellowships />

        <CompetenciesSection />

        <ContactSection onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* CV & Academic Dossier Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
