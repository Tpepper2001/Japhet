import React, { useState, useEffect } from 'react';
import { X, Download, FileText, ExternalLink, Printer, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'executive'>('pdf');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cvPdfPath = PORTFOLIO_DATA.profile.cvPdfPath;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + cvPdfPath);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-xs">
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-stone-50 dark:bg-stone-900 rounded-xl shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shrink-0">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            <div>
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">
                Curriculum Vitae & Academic Dossier
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {PORTFOLIO_DATA.profile.name} · Fisheries Commission, Ghana
              </p>
            </div>
          </div>

          {/* Mode Switcher & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center p-1 bg-stone-100 dark:bg-stone-800 rounded-md">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  viewMode === 'pdf'
                    ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                Official PDF Document
              </button>
              <button
                onClick={() => setViewMode('executive')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  viewMode === 'executive'
                    ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                Structured Dossier
              </button>
            </div>

            <a
              href={cvPdfPath}
              download="Japhet_Benefoh_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-stone-900 dark:bg-amber-600 rounded hover:bg-stone-800 dark:hover:bg-amber-500 transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-white rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-stone-100 dark:bg-stone-950">
          {viewMode === 'pdf' ? (
            <div className="h-full flex flex-col bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 overflow-hidden shadow-xs">
              <div className="p-3 bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between text-xs text-stone-600 dark:text-stone-400 gap-2">
                <span>Rendering authentic document: Japhet_Benefoh_CV_MAPP_36746372.pdf</span>
                <div className="flex items-center gap-3">
                  <a
                    href={cvPdfPath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    <span>Open in new window</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={cvPdfPath}
                    download="Japhet_Benefoh_CV.pdf"
                    className="inline-flex items-center gap-1 font-semibold text-stone-900 dark:text-stone-100 hover:underline"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download original</span>
                  </a>
                </div>
              </div>
              <div className="flex-1 min-h-[500px]">
                <object
                  data={cvPdfPath}
                  type="application/pdf"
                  className="w-full h-full min-h-[600px] border-0"
                >
                  <div className="p-8 text-center space-y-4">
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Your browser does not support inline PDF preview.
                    </p>
                    <a
                      href={cvPdfPath}
                      download="Japhet_Benefoh_CV.pdf"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 dark:bg-amber-600 rounded-md"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Japhet Benefoh's CV (PDF)</span>
                    </a>
                  </div>
                </object>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-8 shadow-xs space-y-8 font-sans-ui text-stone-800 dark:text-stone-200">
              {/* Document Header */}
              <div className="border-b border-stone-200 dark:border-stone-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h2 className="text-3xl font-serif text-stone-900 dark:text-stone-100">
                    JAPHET BENEFOH
                  </h2>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 flex flex-wrap gap-2">
                    <span>Accra, Ghana</span>
                    <span>·</span>
                    <span>+233538000121</span>
                    <span>·</span>
                    <span>japhet.benefoh@fishcom.gov.gh / jcanbenefoh10@gmail.com</span>
                  </div>
                  <div className="text-xs font-medium text-amber-800 dark:text-amber-400 mt-1.5">
                    Administrative Manager · BA. Political Science, University of Ghana – Second Class Upper (UK 2:1 Equivalent)
                  </div>
                </div>

                <a
                  href={cvPdfPath}
                  download="Japhet_Benefoh_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-stone-900 dark:bg-amber-600 rounded hover:bg-stone-800 transition-colors shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Professional Summary */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
                  Professional Summary
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {PORTFOLIO_DATA.profile.summary}
                </p>
              </div>

              {/* Proposed Research */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
                  Proposed Research
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  <strong className="text-stone-900 dark:text-stone-100">{PORTFOLIO_DATA.researchProposal.title}.</strong> {PORTFOLIO_DATA.researchProposal.executiveSummary}
                </p>
              </div>

              {/* Research Interests */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
                  Research Interests
                </h4>
                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed space-y-1">
                  {PORTFOLIO_DATA.researchInterests.map((r, i) => (
                    <div key={i}>
                      • <strong className="text-stone-900 dark:text-stone-100">{r.title}:</strong> {r.description}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
                  Education
                </h4>
                <div className="text-xs sm:text-sm">
                  <div className="flex justify-between font-semibold text-stone-900 dark:text-stone-100">
                    <span>{PORTFOLIO_DATA.education.institution} – {PORTFOLIO_DATA.education.degree.toUpperCase()}</span>
                    <span className="font-mono-numbers">{PORTFOLIO_DATA.education.period}</span>
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    {PORTFOLIO_DATA.education.division}
                  </div>
                  <div className="text-xs text-stone-600 dark:text-stone-300 mt-1">
                    <strong>Relevant Coursework:</strong> {PORTFOLIO_DATA.education.relevantCoursework.join(', ')}
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 border-b border-stone-200 dark:border-stone-800 pb-1 mb-3">
                  Professional Experience
                </h4>
                <div className="space-y-4">
                  {PORTFOLIO_DATA.experiences.map((exp) => (
                    <div key={exp.id} className="text-xs sm:text-sm">
                      <div className="flex flex-wrap justify-between font-semibold text-stone-900 dark:text-stone-100">
                        <span>{exp.role} | {exp.organization}, {exp.location}</span>
                        <span className="font-mono-numbers text-stone-500 dark:text-stone-400">{exp.period}</span>
                      </div>
                      <ul className="mt-1.5 space-y-1 pl-4 list-disc text-stone-600 dark:text-stone-300">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fellowships */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
                  Fellowships, International Training & Leadership
                </h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  {PORTFOLIO_DATA.fellowships.map((f, i) => (
                    <div key={i}>
                      <div className="flex justify-between font-semibold text-stone-900 dark:text-stone-100">
                        <span>{f.title} – {f.organization}</span>
                        <span className="font-mono-numbers text-stone-500 dark:text-stone-400">{f.period}</span>
                      </div>
                      <p className="text-stone-600 dark:text-stone-300 mt-0.5">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
                  Skills & Competencies
                </h4>
                <div className="text-xs space-y-1.5 text-stone-700 dark:text-stone-300">
                  <div><strong>Research & Policy:</strong> {PORTFOLIO_DATA.competencies.researchPolicy.join(' | ')}</div>
                  <div><strong>Technical:</strong> {PORTFOLIO_DATA.competencies.technical.join(' | ')}</div>
                  <div><strong>Languages:</strong> English (Native Proficiency) | Twi (Native) | Ga (Fieldwork Proficiency)</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
