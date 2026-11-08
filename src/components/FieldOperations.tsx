import React, { useState } from 'react';
import { Anchor, ShieldCheck, MessageSquare, Waves, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, FieldSite } from '../data/portfolioData';

export const FieldOperations: React.FC = () => {
  const [selectedSiteId, setSelectedSiteId] = useState<string>('jamestown');
  const sites = PORTFOLIO_DATA.coastalSites;
  const currentSite = sites.find((s) => s.id === selectedSiteId) || sites[0];

  return (
    <section id="operations" className="py-16 md:py-24 border-b border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
            <span>Operational Frontline</span>
            <span aria-hidden="true">·</span>
            <span>Accra & Central Region Coastline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50 leading-tight mb-4">
            Field Monitoring, Vessel Compliance & Community Co-Management
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Bridging statutory regulatory directives with artisanal reality across 15 landing sites. Coordinating compliance documentation for 120+ vessels, multilingual dialogue facilitation in Twi and Ga, and coastal conservation actions.
          </p>
        </div>

        {/* 2 Photographic Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Card 1: Artisanal Fleet & Licensing */}
          <div className="bg-white dark:bg-stone-900 rounded-lg p-3 border border-stone-200 dark:border-stone-800 shadow-xs">
            <div className="relative rounded-md overflow-hidden aspect-16/9 bg-stone-200 dark:bg-stone-800">
              <img
                src={PORTFOLIO_DATA.images.artisanalFisheries}
                alt="Colorful Ghanaian artisanal fishing canoes on the Atlantic shore at Jamestown"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  120+ Vessels & 15 Landing Sites
                </div>
                <p className="text-xs text-stone-200 leading-snug">
                  Regulatory documentation, safety inspections, and closed-season directives enforced under Ghana's Fisheries Act (Act 625).
                </p>
              </div>
            </div>
            <div className="p-3 text-xs text-stone-600 dark:text-stone-300 flex items-center justify-between">
              <span>Jamestown & Western/Central Corridor</span>
              <span className="font-mono-numbers">Statutory Compliance</span>
            </div>
          </div>

          {/* Card 2: Coastal Cleanup & Marine Conservation */}
          <div className="bg-white dark:bg-stone-900 rounded-lg p-3 border border-stone-200 dark:border-stone-800 shadow-xs">
            <div className="relative rounded-md overflow-hidden aspect-16/9 bg-stone-200 dark:bg-stone-800">
              <img
                src={PORTFOLIO_DATA.images.marineConservation}
                alt="Community volunteers removing ghost nets and plastic debris on Accra coastline"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  500+ kg Waste & Ghost Gear Diverted
                </div>
                <p className="text-xs text-stone-200 leading-snug">
                  15 field observations with Plastic Punch & GYEM tackling marine debris and abandoned fishing gear along Jamestown, Laboma, and Chorkor.
                </p>
              </div>
            </div>
            <div className="p-3 text-xs text-stone-600 dark:text-stone-300 flex items-center justify-between">
              <span>Community Environmental Action</span>
              <span className="font-mono-numbers">Ghost Gear Recovery</span>
            </div>
          </div>
        </div>

        {/* Interactive Landing Site Explorer */}
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800 mb-6">
            <div>
              <h3 className="text-xl font-normal text-stone-900 dark:text-stone-100">
                Coastal Monitoring Sites & Dialogue Fronts
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Select a key operational sector along the Gulf of Guinea coast to review stakeholder networks and field outcomes.
              </p>
            </div>

            {/* Segmented Site Switcher */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-md">
              {sites.map((site) => (
                <button
                  key={site.id}
                  onClick={() => setSelectedSiteId(site.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                    selectedSiteId === site.id
                      ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  {site.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Site Detail Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-400">
                <MapPin className="w-4 h-4" />
                <span>{currentSite.region}</span>
              </div>
              <h4 className="text-2xl font-serif text-stone-900 dark:text-stone-100">
                {currentSite.name}
              </h4>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {currentSite.description}
              </p>

              <div className="pt-2 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Key Field Protocols & Milestones
                </div>
                <div className="space-y-2">
                  {currentSite.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-50 dark:bg-stone-950 p-5 rounded-lg border border-stone-200 dark:border-stone-800 space-y-4">
              <div>
                <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">Primary Mandate</div>
                <div className="text-sm font-semibold text-stone-900 dark:text-stone-100 mt-0.5">
                  {currentSite.focus}
                </div>
              </div>

              <div>
                <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">Key Stakeholder Coalitions</div>
                <div className="text-xs text-stone-700 dark:text-stone-300 mt-0.5 leading-relaxed">
                  {currentSite.stakeholders}
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                <span>Language Mediation</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">Ga & Twi Facilitation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
