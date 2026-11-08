import React, { useState } from 'react';
import { Download, FileText, ArrowRight, Check, Copy, MapPin, GraduationCap, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, onOpenContactModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const primaryEmail = PORTFOLIO_DATA.profile.emails[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(primaryEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <section id="overview" className="pt-8 pb-16 md:pt-12 md:pb-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split Screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typographic hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed breadcrumb metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400 mb-4 tracking-wide">
              <span>{PORTFOLIO_DATA.profile.institution}</span>
              <span aria-hidden="true">·</span>
              <span>{PORTFOLIO_DATA.profile.location}</span>
              <span aria-hidden="true">·</span>
              <span>Public Administration & Policy</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 dark:text-stone-50 leading-[1.12] mb-5">
              Japhet Benefoh
            </h1>

            {/* Subheading / Role */}
            <p className="text-xl sm:text-2xl font-serif italic text-amber-800 dark:text-amber-400 mb-6 leading-snug">
              Frontline Blue Economy Governance, Fisheries Policy & Gender Justice in West Africa
            </p>

            {/* Summary Lead Prose */}
            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-8 max-w-2xl">
              {PORTFOLIO_DATA.profile.summary}
            </p>

            {/* Quick Unboxed Academic / Institutional Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9 pt-4 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 dark:text-stone-100">BA. Political Science</span>
                  <div className="text-stone-500 dark:text-stone-400">University of Ghana, Legon · Second Class Upper (UK 2:1)</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900 dark:text-stone-100">Administrative Manager</span>
                  <div className="text-stone-500 dark:text-stone-400">Fisheries Commission, Accra · Feb 2022 – Present</div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={PORTFOLIO_DATA.profile.cvPdfPath}
                download="Japhet_Benefoh_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-stone-900 dark:bg-amber-600 rounded-md hover:bg-stone-800 dark:hover:bg-amber-500 transition-colors shadow-sm whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                <span>View Full Dossier</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-3 text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
                title="Copy official email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-400" />
                    <span>{primaryEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-stone-100 dark:bg-stone-900 rounded-lg p-2.5 border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="overflow-hidden rounded-md aspect-3/4 bg-stone-200 dark:bg-stone-800 relative">
                <img
                  src={PORTFOLIO_DATA.images.portrait}
                  alt="Japhet Benefoh in his policy research office overlooking coastal Accra"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
                
                {/* Overlay Badge at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-200 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Fisheries Commission · Accra, Ghana</span>
                  </div>
                  <p className="text-xs text-stone-300 font-normal leading-relaxed">
                    Spearheading 120+ vessel compliance & GESI data integration across Ghanaian artisanal landing beaches.
                  </p>
                </div>
              </div>

              {/* Discreet Caption */}
              <div className="mt-2.5 px-2 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                <span>Dossier: Blue Economy & Public Administration</span>
                <span className="font-mono-numbers">Accra, GH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 5-column Quantitative Impact Strip below the split */}
        <div className="mt-14 pt-10 border-t border-stone-200 dark:border-stone-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PORTFOLIO_DATA.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-white dark:bg-stone-900/60 border border-stone-200/90 dark:border-stone-800 transition-colors"
              >
                <div className="text-3xl lg:text-4xl font-normal font-mono-numbers tracking-tight text-amber-800 dark:text-amber-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-800 dark:text-stone-200 mb-1.5">
                  {metric.label}
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-snug">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
