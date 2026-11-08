import React, { useState } from 'react';
import { BookOpen, Compass, Scale, Users, ChevronRight, FileCheck, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ResearchSpotlight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'thesis' | 'gesi' | 'ecowas' | 'methodology'>('thesis');
  const [copiedCitation, setCopiedCitation] = useState(false);
  const proposal = PORTFOLIO_DATA.researchProposal;

  const handleCopyCitation = async () => {
    const citation = `Benefoh, J. (Proposed Research). "The Political Economy of the Blue Economy in Ghana: Sustainability, Food Security and Gender Justice." Fisheries Commission, Accra, Ghana.`;
    try {
      await navigator.clipboard.writeText(citation);
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="research" className="py-16 md:py-24 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
            <span>Proposed Doctoral & Policy Research</span>
            <span aria-hidden="true">·</span>
            <span>Blue Economy Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50 leading-tight mb-4">
            {proposal.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
            {proposal.executiveSummary}
          </p>
        </div>

        {/* 2-Column Split: Visual & Tabbed Argument */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Documentary Evidence & Key Fact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-100 dark:bg-stone-900 rounded-lg p-2.5 border border-stone-200 dark:border-stone-800">
              <div className="relative rounded-md overflow-hidden aspect-4/3 bg-stone-200 dark:bg-stone-800">
                <img
                  src={PORTFOLIO_DATA.images.womenFishProcessors}
                  alt="Ghanaian women fish processors in coastal community working on post-harvest smoking and inspection"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-amber-300 mb-1">
                    The 60% Post-Harvest Reality
                  </div>
                  <p className="text-xs text-stone-200 leading-snug">
                    Women carry 60% of Ghana's fisheries workforce through processing, cold-chain financing, and distribution, yet remain unrecorded on statutory vessel rosters.
                  </p>
                </div>
              </div>
              <div className="mt-2.5 px-2 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                <span>Fieldwork: Chorkor & Central Region Hubs</span>
                <span className="font-mono-numbers">GESI Framework</span>
              </div>
            </div>

            {/* Quick Policy Citation Card */}
            <div className="p-5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                  Dossier Citation Format
                </span>
                <button
                  onClick={handleCopyCitation}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 hover:text-amber-800 font-medium"
                >
                  {copiedCitation ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>
              </div>
              <p className="font-mono text-xs text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-950 p-3 rounded border border-stone-200 dark:border-stone-800 leading-relaxed select-all">
                Benefoh, J. (2026). The Political Economy of the Blue Economy in Ghana: Sustainability, Food Security and Gender Justice. Accra: Fisheries Commission.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Research Deep Dive */}
          <div className="lg:col-span-7">
            {/* Functional segmented buttons for tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/70 dark:bg-stone-900 rounded-lg mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('thesis')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === 'thesis'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                Core Thesis & Problems
              </button>
              <button
                onClick={() => setActiveTab('gesi')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === 'gesi'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                The 60% GESI Blindspot
              </button>
              <button
                onClick={() => setActiveTab('ecowas')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === 'ecowas'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                EU CFP & ECOWAS Policy
              </button>
              <button
                onClick={() => setActiveTab('methodology')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === 'methodology'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                Methodology & Field Tools
              </button>
            </div>

            {/* Tab 1: Core Thesis */}
            {activeTab === 'thesis' && (
              <div className="space-y-4">
                {proposal.coreProblems.map((prob, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-semibold text-amber-700 dark:text-amber-400 shrink-0 mt-0.5">
                        0{idx + 1}.
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1.5">
                          {prob.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                          {prob.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: The 60% GESI Blindspot */}
            {activeTab === 'gesi' && (
              <div className="p-6 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-5">
                <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                  <h4 className="text-lg font-serif text-stone-900 dark:text-stone-100 mb-2">
                    Redressing Structural Exclusion in Maritime Co-Management
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    While men predominantly operate marine fishing vessels and handle offshore harvesting, women dominate post-harvest processing (smoking, salting, drying), storage, and coastal marketing across Ghana’s 550-kilometer coastline.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                    <div className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-1">
                      Statutory Exclusion
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      Statutory registers (such as vessel licensing records) focus exclusively on vessel owners and gear captains, rendering women processors legally invisible in formal co-management councils.
                    </p>
                  </div>
                  <div className="p-4 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                    <div className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-1">
                      GESI Data Reform
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      Japhet’s ongoing field work pilots gender-disaggregated data collection across Central Region landing beaches, creating audit trails that substantiate women’s economic capital and decision-making rights.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs text-stone-500 dark:text-stone-400">
                  <span className="font-semibold text-stone-800 dark:text-stone-200">Field Benchmark:</span> Piloted with women processor associations across Winneba, Elmina, and Jamestown under the GESI Step-Down Training Framework.
                </div>
              </div>
            )}

            {/* Tab 3: EU CFP vs ECOWAS */}
            {activeTab === 'ecowas' && (
              <div className="p-6 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-5">
                <div>
                  <h4 className="text-lg font-serif text-stone-900 dark:text-stone-100 mb-2">
                    Comparative Institutional Analysis: EU Common Fisheries Policy & ECOWAS
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                    {proposal.comparativeDimension}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                    <Scale className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                        Regional Advisory Councils (RACs)
                      </div>
                      <div className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                        Assessing how the EU's stakeholder co-management councils can be localized into ECOWAS coastal governance bodies that include artisanal leaders and queen fishmongers (Konkohemaa).
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                    <Compass className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                        Closed-Season Transition Protections
                      </div>
                      <div className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                        Examining structural fund models to support vulnerable artisanal families during state-mandated biological recovery closed seasons in Ghana and Côte d'Ivoire.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Methodology & Field Tools */}
            {activeTab === 'methodology' && (
              <div className="p-6 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
                <h4 className="text-lg font-serif text-stone-900 dark:text-stone-100 mb-1">
                  Qualitative & Grounded Fieldwork Protocol
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  Rooted in 4 years of daily administrative management and field interviews across Ghana’s artisanal coast.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {proposal.methodologicalFramework.map((method, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex items-start gap-2.5"
                    >
                      <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-700 dark:text-stone-300 font-medium">
                        {method}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-stone-800">
                  <div className="text-xs font-semibold text-stone-800 dark:text-stone-200 mb-1.5">
                    Primary Target Applications
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-stone-600 dark:text-stone-400">
                    {proposal.policyImpactAreas.map((area, idx) => (
                      <span key={idx} className="flex items-center gap-1.5">
                        <span className="text-amber-700">·</span>
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Research Interests Matrix */}
        <div className="mt-16 pt-12 border-t border-stone-200 dark:border-stone-800">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-normal text-stone-900 dark:text-stone-50 mb-2">
              Core Research Pillars & Scholarly Interests
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
              Theoretical and practical domains anchored at the intersection of political science, public administration, and natural resource governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO_DATA.researchInterests.map((interest, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-400/80 transition-colors"
              >
                <div className="font-mono text-xs text-amber-700 dark:text-amber-400 mb-1.5">
                  0{idx + 1}. Focus
                </div>
                <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                  {interest.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
