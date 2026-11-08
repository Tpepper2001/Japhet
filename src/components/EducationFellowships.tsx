import React from 'react';
import { GraduationCap, Award, Globe, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationFellowships: React.FC = () => {
  const edu = PORTFOLIO_DATA.education;
  const fellowships = PORTFOLIO_DATA.fellowships;
  const engagements = PORTFOLIO_DATA.fieldEngagement;

  return (
    <section className="py-16 md:py-24 border-b border-stone-200 dark:border-stone-800 bg-stone-100/40 dark:bg-stone-900/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
            <span>Scholarship & Global Engagement</span>
            <span aria-hidden="true">·</span>
            <span>Accreditation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50 leading-tight mb-4">
            Academic Background, International Fellowships & Community Leadership
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Rigorous foundations in political science and public policy analysis paired with competitive international leadership training and grassroots coastal mobilization.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education & Fellowships */}
          <div className="lg:col-span-7 space-y-8">
            {/* Degree Card */}
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 md:p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 dark:bg-amber-950/60 rounded-md text-amber-800 dark:text-amber-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-1">
                    <span>{edu.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-numbers">{edu.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{edu.location}</span>
                  </div>

                  <h3 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-1">
                    {edu.degree}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-amber-800 dark:text-amber-400 mb-4">
                    {edu.division}
                  </p>

                  <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2.5">
                      Relevant Curricular Foundations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCoursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* International Fellowships */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                <span>Fellowships & Advanced International Training</span>
              </h3>

              {fellowships.map((fel, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-amber-800 dark:text-amber-400">
                      {fel.organization}
                    </span>
                    <span className="text-xs font-mono-numbers text-stone-500 dark:text-stone-400">
                      {fel.period}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-stone-900 dark:text-stone-100 mb-2">
                    {fel.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                    {fel.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-stone-100 dark:border-stone-800">
                    {fel.highlights.map((hl, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Grassroots Community Engagement & Environmental Justice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
                <HeartHandshake className="w-4 h-4" />
                <span>Field Research & Civic Stewardship</span>
              </div>
              <h3 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-4">
                Community Engagement & Marine Justice
              </h3>

              <div className="space-y-6">
                {engagements.map((eng, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-md bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                      <span className="font-semibold text-stone-900 dark:text-stone-100">
                        {eng.role}
                      </span>
                      <span className="font-mono-numbers">{eng.period}</span>
                    </div>

                    <div className="text-xs font-medium text-amber-800 dark:text-amber-400">
                      {eng.organization}
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {eng.summary}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ostrom Common Pool Quote */}
              <div className="mt-6 pt-5 border-t border-stone-200 dark:border-stone-800">
                <blockquote className="text-xs italic text-stone-600 dark:text-stone-400 leading-relaxed">
                  "Sustainable marine governance cannot be achieved through top-down policing alone. It demands legitimate institutional translation between customary fishing councils and statutory state bodies."
                </blockquote>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-2 font-medium">
                  — Japhet Benefoh, Research Note on Ghana Blue Economy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
