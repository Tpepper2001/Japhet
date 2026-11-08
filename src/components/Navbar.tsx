import React from 'react';
import { Download, Mail, Moon, Sun, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenCvModal,
  onOpenContactModal
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          {PORTFOLIO_DATA.profile.name}
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600 dark:text-stone-300">
          <a
            href="#overview"
            className="hover:text-stone-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-amber-600"
          >
            Overview
          </a>
          <a
            href="#research"
            className="hover:text-stone-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-amber-600"
          >
            Research Agenda
          </a>
          <a
            href="#operations"
            className="hover:text-stone-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-amber-600"
          >
            Field Operations
          </a>
          <a
            href="#experience"
            className="hover:text-stone-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-amber-600"
          >
            Career Trajectory
          </a>
          <a
            href="#skills"
            className="hover:text-stone-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-amber-600"
          >
            Skills & Competencies
          </a>
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-md border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 dark:text-stone-200 border border-stone-300 dark:border-stone-700 rounded-md hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
            <span>Inspect CV</span>
          </button>

          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 dark:bg-amber-600 rounded-md hover:bg-stone-800 dark:hover:bg-amber-500 transition-colors shadow-xs whitespace-nowrap shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
    </header>
  );
};
