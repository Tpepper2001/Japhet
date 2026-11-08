import React from 'react';
import { ArrowUp, Download, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-100 dark:border-stone-900">
          <div>
            <div className="text-base font-semibold text-stone-900 dark:text-stone-100">
              {PORTFOLIO_DATA.profile.name}
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Administrative Manager · Fisheries Commission, Ministry of Fisheries and Aquaculture Development, Ghana
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a
              href="#overview"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Overview
            </a>
            <a
              href="#research"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Research Agenda
            </a>
            <a
              href="#operations"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Field Operations
            </a>
            <a
              href="#experience"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Experience
            </a>
            <button
              onClick={onOpenCvModal}
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Curriculum Vitae
            </button>
            <a
              href="#contact"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Japhet Benefoh. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Accra, Ghana</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.cvPdfPath}
              download="Japhet_Benefoh_CV.pdf"
              className="inline-flex items-center gap-1 hover:text-stone-900 dark:hover:text-stone-300"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-stone-900 dark:hover:text-stone-300 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
