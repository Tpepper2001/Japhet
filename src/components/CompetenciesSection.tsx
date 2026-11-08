import React from 'react';
import { Layers, Database, Languages, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CompetenciesSection: React.FC = () => {
  const comp = PORTFOLIO_DATA.competencies;

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
            <span>Methodological Toolkit</span>
            <span aria-hidden="true">·</span>
            <span>Skill Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50 leading-tight mb-4">
            Research, Technical & Linguistic Competencies
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            A combined capability set bridging qualitative fieldwork rigor, statutory data administration, and native multilingual communication essential for West African natural resource policy.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Research & Policy */}
          <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 shadow-xs">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-4">
              <Layers className="w-4 h-4" />
              <span>Research & Policy</span>
            </div>

            <div className="space-y-3">
              {comp.researchPolicy.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <Check className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Technical & Systems */}
          <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 shadow-xs">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-4">
              <Database className="w-4 h-4" />
              <span>Technical & Systems</span>
            </div>

            <div className="space-y-3">
              {comp.technical.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <Check className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Languages & Multilingual Dialogue */}
          <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-4">
                <Languages className="w-4 h-4" />
                <span>Linguistic Field Capacity</span>
              </div>

              <div className="space-y-4">
                {comp.languages.map((lang, idx) => (
                  <div key={idx} className="p-3.5 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                        {lang.name}
                      </span>
                      <span className="text-xs font-medium text-amber-800 dark:text-amber-400">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                      {lang.usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 leading-normal">
              Essential for de-escalating maritime closed-season conflicts with chief fishermen and traditional authorities along the Accra-Central coast.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
