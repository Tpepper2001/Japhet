import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('fishcom');
  const experiences = PORTFOLIO_DATA.experiences;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
            <span>Career History</span>
            <span aria-hidden="true">·</span>
            <span>Public Administration & Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50 leading-tight mb-4">
            Professional Trajectory & Institutional Leadership
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            A track record spanning maritime regulatory enforcement, rural climate-smart agriculture programs, civic education, and statutory social protection systems in Ghana.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 md:p-8 transition-all hover:border-amber-300 dark:hover:border-amber-700/60 shadow-xs"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    {/* Unboxed Metadata Header */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-2">
                      <span className="font-semibold text-amber-800 dark:text-amber-400">
                        0{index + 1}. {exp.organization}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        {exp.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 font-mono-numbers">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        {exp.period}
                      </span>
                      {exp.badge && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-stone-700 dark:text-stone-300 font-medium">{exp.badge}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-stone-900 dark:text-stone-100">
                      {exp.role}
                    </h3>

                    {exp.focusArea && (
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 italic">
                        {exp.focusArea}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>{isExpanded ? 'Hide Details' : 'View Responsibilities'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800 space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                        Key Responsibilities & Deliverables
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-700 dark:bg-amber-400 mt-2 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.keyOutcomes && exp.keyOutcomes.length > 0 && (
                      <div className="p-4 rounded-md bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
                          Quantifiable Impact & Milestones
                        </h4>
                        <div className="space-y-1.5">
                          {exp.keyOutcomes.map((outcome, j) => (
                            <div key={j} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-300">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
