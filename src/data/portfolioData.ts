export interface ProfileData {
  name: string;
  role: string;
  institution: string;
  location: string;
  emails: string[];
  phone: string;
  cvPdfPath: string;
  portraitImage: string;
  degrees: string;
  summary: string;
}

export interface Metric {
  value: string;
  label: string;
  context: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  focusArea?: string;
  responsibilities: string[];
  keyOutcomes?: string[];
}

export interface ResearchProposal {
  title: string;
  subtitle: string;
  executiveSummary: string;
  coreProblems: {
    title: string;
    description: string;
  }[];
  methodologicalFramework: string[];
  comparativeDimension: string;
  policyImpactAreas: string[];
}

export interface FieldSite {
  id: string;
  name: string;
  region: string;
  focus: string;
  stakeholders: string;
  description: string;
  highlights: string[];
}

export interface Fellowship {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Japhet Benefoh",
    role: "Administrative Manager & Blue Economy Policy Specialist",
    institution: "Ghana's Fisheries Commission",
    location: "Accra, Ghana",
    emails: ["japhet.benefoh@fishcom.gov.gh", "jcanbenefoh10@gmail.com"],
    phone: "+233 538 000 121",
    cvPdfPath: "/assets/aistudio/Japhet_Benefoh_CV_MAPP_36746372.pdf",
    portraitImage: "/src/assets/images/japhet_benefoh_portrait_1794143581681.jpg",
    degrees: "BA. Political Science (Second Class Upper / UK 2:1 Equivalent)",
    summary:
      "Public administrator at Ghana's Fisheries Commission with 4 years at the frontline of blue economy governance. Overseeing regulatory compliance for 120+ fishing vessels and coordinating data verification across 15 landing sites, engaging 400+ fisherfolk and women processors. Research centers on state-citizen relations, artisanal food security, and GESI-designing gender-disaggregated data systems to redress women's exclusion from fisheries co-management."
  },

  images: {
    portrait: "/src/assets/images/japhet_benefoh_portrait_1794143581681.jpg",
    artisanalFisheries: "/src/assets/images/ghana_artisanal_fisheries_1794143583865.jpg",
    womenFishProcessors: "/src/assets/images/women_fish_processors_gesi_1794143583769.jpg",
    marineConservation: "/src/assets/images/marine_conservation_cleanup_1794143583746.jpg",
    cvPdf: "/assets/aistudio/Japhet_Benefoh_CV_MAPP_36746372.pdf"
  },

  metrics: [
    {
      value: "120+",
      label: "Fishing Vessels Audited",
      context: "Industrial & semi-industrial fleet licensing compliance managed annually"
    },
    {
      value: "15",
      label: "Artisanal Landing Sites",
      context: "Field monitoring, data verification, and community dialogues coordinated"
    },
    {
      value: "400+",
      label: "Stakeholders Engaged",
      context: "Direct consultation with fishers, women processors, and traditional chiefs"
    },
    {
      value: "24+",
      label: "Policy Reports / Year",
      context: "Analytical reports directly informing Ghana Fisheries Management Plan review"
    },
    {
      value: "60%",
      label: "Post-Harvest Labour",
      context: "Women's share in fisheries value chain addressed through GESI frameworks"
    }
  ],

  researchProposal: {
    title: "The Political Economy of the Blue Economy in Ghana: Sustainability, Food Security and Gender Justice",
    subtitle: "Investigating fisheries enforcement regimes, post-harvest informality, and GESI data architecture in West Africa",
    executiveSummary:
      "This proposed doctoral and policy research examines how national fisheries enforcement regimes in Ghana impact artisanal food security, and how historically gender-blind data systems exclude women—who comprise 60% of the post-harvest processing workforce—from institutional co-management. The study draws comparative governance lessons from the European Union Common Fisheries Policy (CFP) to strengthen ECOWAS regional maritime and blue economy governance.",
    coreProblems: [
      {
        title: "Artisanal Food Security & Closed-Season Enforcement",
        description:
          "Analyzing the socioeconomic shocks of regulatory closures on smallholder canoe operators and coastal fishing communities whose primary daily protein and income rely on artisanal catches."
      },
      {
        title: "Gender-Blind Data Architecture (The 60% Blindspot)",
        description:
          "Women represent 60% of the post-harvest fisheries workforce through smoking, salting, financing, and marketing, yet national regulatory registries and decision-making bodies systematically record only boat owners and gear captains."
      },
      {
        title: "State-Citizen Tensions & Regulatory De-escalation",
        description:
          "Evaluating communication bottlenecks where technical maritime statutory orders clash with customary tenure, and how multilingual mediation (Twi, Ga) fosters institutional trust."
      },
      {
        title: "ECOWAS Regional Policy Harmonization",
        description:
          "Drawing structural comparisons with the EU Common Fisheries Policy to propose an adaptive, gender-inclusive regional blue economy framework across the Gulf of Guinea."
      }
    ],
    methodologicalFramework: [
      "Mixed-methods qualitative fieldwork across 15 high-density landing beaches",
      "Semi-structured key-informant interviews with boat owners, chief fishermen, and Konkohemaa (Queen fishmongers)",
      "Stakeholder power mapping and institutional ethnography at the Fisheries Commission",
      "Comparative policy analysis of statutory acts versus customary fishing laws in West Africa"
    ],
    comparativeDimension:
      "Synthesizes institutional mechanisms from the EU Common Fisheries Policy (CFP)—particularly its regional advisory councils and socio-economic support schemes—to evaluate viability within the Economic Community of West African States (ECOWAS) framework.",
    policyImpactAreas: [
      "Ghana Fisheries Management Plan (2022–2026) review & monitoring",
      "Gender Equality and Social Inclusion (GESI) fisheries data registries",
      "Customary-statutory co-management charters for coastal traditional councils",
      "ECOWAS Integrated Maritime Strategy implementation"
    ]
  },

  researchInterests: [
    {
      title: "Political Economy of Development & Blue Economy Governance",
      description: "Examining distribution of maritime wealth, resource extraction, and state regulatory instruments along the West African coast."
    },
    {
      title: "Fisheries Policy, Food Security & Informality",
      description: "How artisanal value chains feed millions in West Africa and how formal top-down conservation impacts vulnerable fishing settlements."
    },
    {
      title: "Gender Equality & Social Inclusion (GESI) in Resource Governance",
      description: "Developing gender-disaggregated indicators to guarantee women processors a formalized seat in co-management boards."
    },
    {
      title: "Public Administration & State-Citizen Relations in West Africa",
      description: "Bureaucratic street-level policy implementation, conflict mediation, and indigenous governance translation."
    },
    {
      title: "Environmental Justice & Common-Pool Resources",
      description: "Elinor Ostrom's common-pool framework applied to tropical marine fisheries, ghost gear removal, and coastal plastic pollution."
    }
  ],

  experiences: [
    {
      id: "fishcom",
      role: "Administrative Manager",
      organization: "Fisheries Commission",
      location: "Accra, Ghana",
      period: "Feb 2022 – Present",
      badge: "Current Primary Post",
      focusArea: "Maritime Regulation, Vessel Licensing & Community Co-Management",
      responsibilities: [
        "Oversee regulatory documentation and licensing compliance for 120+ industrial and semi-industrial fishing vessels annually in strict adherence to Ghana's Fisheries Act (Act 625) and closed-season directives.",
        "Coordinate field monitoring and data verification across 15 artisanal landing sites; conduct semi-structured interviews and stakeholder mapping with fishers, women processors, and traditional chieftaincies.",
        "Prepare 24+ analytical and administrative policy briefs annually for executive leadership, directly informing the ongoing review of the Ghana Fisheries Management Plan (2022–2026).",
        "Facilitate 12+ multi-stakeholder dialogues annually between state regulators, naval patrols, and coastal fishing communities, translating complex maritime statutes into Twi and Ga to de-escalate enforcement conflicts."
      ],
      keyOutcomes: [
        "100% on-time processing of annual industrial vessel fleet safety and compliance dossiers.",
        "Piloted gender-sensitive landing data capture sheets across Central Region landing beaches.",
        "Mediated high-stakes closed-season compliance forums resulting in zero community confrontations."
      ]
    },
    {
      id: "agrihouse",
      role: "Program Assistant — Climate-Smart Agriculture & Rural Livelihoods",
      organization: "Agrihouse Foundation",
      location: "Accra, Ghana",
      period: "June 2019 – Dec 2021",
      badge: "Rural Development",
      focusArea: "Climate-Smart Agribusiness, Market Linkages & Women Farmers",
      responsibilities: [
        "Supported design and field delivery of climate-smart agriculture and market linkage initiatives reaching 350+ smallholder farmers across Greater Accra, Eastern, and Central regions.",
        "Co-facilitated 15 farmer field schools focused on post-harvest value addition, soil preservation, and drought-resistant agronomic practices.",
        "Drafted 10+ field evaluation reports and diagnostic needs assessments highlighting structural barriers faced by female smallholders in accessing agricultural extension services and micro-credit."
      ],
      keyOutcomes: [
        "Expanded female farmer participation in agribusiness exhibitions and value-addition field workshops by 42%.",
        "Formulated tailored training modules linking smallholder produce to formal institutional food buyers."
      ]
    },
    {
      id: "bechem",
      role: "Teacher — Government & Social Studies",
      organization: "Bechem Business College",
      location: "Ahafo Region, Ghana",
      period: "June 2016 – May 2018",
      badge: "Civic Education",
      focusArea: "State-Citizen Interaction, Governance Curriculum & Mentorship",
      responsibilities: [
        "Taught governance, constitutionalism, civic rights, and public administration to 150+ senior high school students annually.",
        "Developed custom instructional modules linking formal local government structures (District Assemblies) to everyday citizen realities.",
        "Mentored 40 WASSCE candidates in analytical essay writing and political history, achieving high pass distinctions."
      ],
      keyOutcomes: [
        "Pioneered school civic debate club examining Ghana's Fourth Republican institutional reforms."
      ]
    },
    {
      id: "ssnit",
      role: "National Service Personnel",
      organization: "Social Security and National Insurance Trust (SSNIT)",
      location: "Accra, Ghana",
      period: "Sept 2014 – Sept 2015",
      badge: "Public Service",
      focusArea: "Social Protection, Pension Record Verification & Citizen Services",
      responsibilities: [
        "Supported documentation, archiving, and verification of social security and retirement pension records for formal and informal sector contributors.",
        "Assisted contributors, senior citizens, and retirees with benefit claims, identity verification, and dispute resolution at front-desk service desks.",
        "Gained deep foundational insight into Ghana's statutory social protection architecture and administrative hurdles in state welfare disbursement."
      ],
      keyOutcomes: [
        "Reconciled over 1,200 member record files during national database digitisation transition."
      ]
    }
  ],

  education: {
    institution: "University of Ghana, Legon",
    degree: "Bachelor of Arts in Political Science",
    division: "Second Class Upper Division (CGPA: 3.20/4.0 — Scholaro Equivalent, UK 2:1 Equivalent)",
    period: "Sept 2010 – June 2014",
    location: "Accra, Ghana",
    relevantCoursework: [
      "Public Administration",
      "Public Policy Analysis",
      "Political Economy of Development",
      "Comparative Politics",
      "Social Science Research Methods",
      "Public Finance & Fiscal Governance",
      "Government, Leadership & Constitutional Law"
    ]
  },

  fellowships: [
    {
      title: "KOICA Youth Leaders Program",
      organization: "Government of the Republic of Korea / KOICA",
      period: "Aug 2 – 15, 2026",
      description:
        "Competitively selected among only 25 Ghanaian youth leaders nationwide for intensive residential training in the Republic of Korea. Focus on Sustainable Development Goals (SDGs), South-South global cooperation, and Korea's post-war public development trajectory.",
      highlights: [
        "Delivered knowledge-sharing synthesis for 20+ colleagues at the Fisheries Commission on translating SDG 14 (Life Below Water) and youth stewardship into maritime enforcement.",
        "Examined Korean coastal cooperative models and institutional fisheries modernization frameworks."
      ]
    },
    {
      title: "GESI Step-Down Training",
      organization: "Fisheries Commission — Regional Directorate",
      period: "Sept 2025",
      description:
        "Selected participant for high-level Regional Gender Equality and Social Inclusion (GESI) Training. Designed to mainstream social vulnerability metrics into coastal regulatory compliance.",
      highlights: [
        "Applied GESI principles to author and pilot gender-sensitive data collection tools for artisanal fisheries monitoring across Central Region beaches.",
        "Created field protocol for capturing post-harvest market margins controlled by women fish processors."
      ]
    }
  ],

  fieldEngagement: [
    {
      organization: "Plastic Punch & Ghana Youth Environmental Movement (GYEM)",
      role: "Volunteer Researcher & Community Organizer",
      period: "June 2018 – Nov 2018",
      summary:
        "Conducted 15 coastal field observations and community clean-ups across Jamestown, Laboma, and Chorkor. Safely removed 500+ kg of ocean plastic waste and discarded ghost fishing nets; mobilized 200+ local youth and artisanal fishers on marine pollution, microplastics in fish stock, and coastal climate justice."
    },
    {
      organization: "Foundation for Animal Rights and Indigenous Development (FARIAD)",
      role: "Volunteer Field Officer",
      period: "Jan 2019 – May 2019",
      summary:
        "Supported sustainable livelihood sensitization and environmental protection campaigns reaching 100+ vulnerable rural and coastal households."
    }
  ],

  coastalSites: [
    {
      id: "jamestown",
      name: "Jamestown Landing Beach",
      region: "Greater Accra Region",
      focus: "Artisanal Fleet Licensing & Historic Harbor Interface",
      stakeholders: "Ga Traditional Council, Chief Fishermen, Canoe Owners",
      description: "High-density canoe landing site with over 180 wooden vessels. Center for closed-season monitoring and community regulatory translation.",
      highlights: ["Ga language dialogue forums", "Ghost net retrieval campaigns", "Vessel registration verification"]
    },
    {
      id: "chorkor",
      name: "Chorkor Fish Processing Hub",
      region: "Greater Accra Region",
      focus: "Post-Harvest Value Chain & Smoked Fish Technology",
      stakeholders: "Women Fish Processors, Smoker Associations, Market Queens",
      description: "Origin site of the famed Chorkor Smoker kiln. Crucial point of field inquiry on gender-disaggregated data and fuel-efficient processing.",
      highlights: ["60% post-harvest labour hub", "GESI interview data collection", "Food safety & hygiene protocols"]
    },
    {
      id: "laboma",
      name: "Laboma Coastal Front",
      region: "Greater Accra Region",
      focus: "Marine Debris & Youth Environmental Stewardship",
      stakeholders: "Youth Fisherfolk, Beach Operators, Environmental NGOs",
      description: "Site of multi-stakeholder shoreline cleanups, waste audit documentation, and informal fisher engagement.",
      highlights: ["500+ kg plastic waste diverted", "Microplastic risk sensitization", "Community shoreline audits"]
    },
    {
      id: "elmina-central",
      name: "Central Region Artisanal Corridor",
      region: "Central Region (Elmina / Winneba / Cape Coast)",
      focus: "GESI Step-Down Pilot & Closed-Season Enforcement",
      stakeholders: "Artisanal Cooperatives, Marine Police, Traditional Priestesses",
      description: "Major artisanal fishing hub in Ghana where gender-sensitive data collection tools were first piloted to gauge post-harvest household resilience.",
      highlights: ["GESI field toolkit pilot", "Closed-season socio-economic survey", "Twi language consensus building"]
    }
  ],

  competencies: {
    researchPolicy: [
      "Qualitative Fieldwork & Multi-Site Ethnography",
      "Semi-Structured Key-Informant Interviewing",
      "Stakeholder Power Mapping & Consensus Building",
      "Policy Brief Analysis & Executive Drafting",
      "Gender-Disaggregated Data Collection (GESI)",
      "Regulatory Compliance & Statute Interpretation",
      "Common-Pool Resource Governance Models"
    ],
    technical: [
      "Vessel Licensing & Regulatory Systems",
      "Data Verification & Electronic Registry Filing",
      "MS Office Advanced (Excel Modeling, Executive Word Reports, PowerPoint)",
      "Google Workspace Collaboration Architecture",
      "Basic SPSS Statistical Data Processing",
      "Field GPS & Landing Site Point Geocoding"
    ],
    languages: [
      { name: "English", level: "Native / Bilingual Proficiency", usage: "Official statutory reports, executive policy briefs, international scholarship" },
      { name: "Twi", level: "Native Proficiency", usage: "Artisanal stakeholder mediation across Akan coastal and inland farming communities" },
      { name: "Ga", level: "Fieldwork Proficiency", usage: "Community dialogue and regulatory translation across Greater Accra landing beaches" }
    ]
  }
};
