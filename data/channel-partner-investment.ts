import type { TrustIndicatorItem } from "~/components/ui/TrustIndicatorsLayout.vue";

export const investmentHero = {
  badge: "Channel Partner · Authorised Reseller",
  title:
    'Grow with India’s <span class="text-gradient-brand">Tutoring</span> Partner Network',
  subtitle:
    '<span class="text-gradient-brand">Indian Mentors</span> - Investment & Revenue-Sharing Model',
  description:
    "Become an Authorised Channel Partner and operate a defined territory — earning from student enrollments and subscriptions, with access to our platform, brand, and national academic network.",
  supporting:
    "Through our structured investment and revenue-sharing model, partners gain access to the Indian Mentors digital platform, brand ecosystem, operational support, and national academic network.",
  caption:
    "Build a Local Education Business with the Strength of a National Academic Platform.",
  backgroundImage: "assets/img/hero/hero-1.png",
  contentClass: "",
  primaryCta: {
    label: "Apply to Become a Channel Partner",
    href: "#partner-investment-register",
  },
  secondaryCta: {
    label: "Download Partnership Details",
    href: "#territory-investment",
  },
};

export const investmentHeroStats: TrustIndicatorItem[] = [
  {
    value: "90%",
    label: "Partner  Share",
    icon: "solar:wallet-money-bold-duotone",
  },
  {
    value: "10% ",
    label: "Platform Share",
    icon: "solar:pie-chart-2-bold-duotone",
  },
  {
    value: "100%",
    label: "Deposit Refundable  ",
    icon: "solar:shield-check-bold-duotone",
  },
  {
    value: "1 Crore+",
    label: "Annual Revenue Potential",
    icon: "solar:chart-bold-duotone",
  },
];

export const investmentStructureSection = {
  kicker: "Investment Framework",
  title:
    'Channel Partner <span class="text-gradient-brand">Investment Structure</span>',
  classes: "!px-0 !py-0",
  description:
    "To ensure professional operations and long-term commitment, Indian Mentors operates with a structured investment framework for Authorised Resellers.",
  intro:
    "This structure enables partners to operate within a designated academic territory while accessing the Indian Mentors platform and operational ecosystem.",
  components: [
    {
      iconMdi: "solar:shield-check-bold-duotone",
      title: "Security Deposit",
      description:
        "A one-time refundable amount submitted to secure your authorised operational territory and demonstrate commitment to the Indian Mentors partnership framework.",
      tag: "One-time · Refundable",
      accent: "emerald",
    },
    {
      iconMdi: "solar:widget-5-bold-duotone",
      title: "Digital Platform Licensing Fee (ERP)",
      description:
        "Subscription access to the Indian Mentors digital platform and operational tools.",
      tag: "Subscription · ERP Access",
      accent: "blue",
    },
  ],
};

export const securityDepositSection = {
  kicker: "Security Deposit (Refundable)",
  title:
    'Secure Your Territory with <span class="text-gradient-brand">Confidence</span>',
  classes: "!px-0 !py-0",
  description:
    "The Security Deposit is a one-time refundable amount submitted by the Channel Partner to secure their authorised operational territory and demonstrate commitment to the Indian Mentors partnership framework.",
  body: "This deposit helps promote professional conduct, responsible platform usage, service quality, and compliance with the operational standards established by Indian Mentors.",
  note: "The deposit value depends on market potential, student population, and service demand.",
  featuresTitle: "Key Features",
  features: [
    {
      iconMdi: "mdi:cash-refund",
      title: "Fully Refundable",
      description:
        "Returned upon successful termination or completion of the partnership agreement, subject to applicable terms and conditions.",
    },
    {
      iconMdi: "mdi:map-marker-radius-outline",
      title: "Territory Security",
      description:
        "Supports the allocation of an exclusive or semi-exclusive operational territory, as defined in the partnership agreement.",
    },
    {
      iconMdi: "mdi:shield-check-outline",
      title: "Brand Protection",
      description:
        "Helps safeguard the reputation, professional image, and service standards of Indian Mentors.",
    },
    {
      iconMdi: "mdi:clipboard-check-outline",
      title: "Responsible Operations",
      description:
        "Encourages partners to follow approved operational procedures and maintain responsible use of the Indian Mentors ecosystem.",
    },
    {
      iconMdi: "mdi:handshake-outline",
      title: "Partnership Commitment",
      description:
        "Demonstrates the Channel Partner's commitment to actively developing and managing the assigned territory.",
    },
    {
      iconMdi: "mdi:account-check-outline",
      title: "Operational Accountability",
      description:
        "Ensures adherence to agreed policies, service standards, and partnership responsibilities.",
    },
  ],
  tableTitle: "Security Deposit Based on Territory Level",
  tableDescription:
    "Security deposits vary depending on the geographical scope of the operational territory.",
  tableColumns: [
    { key: "level", label: "Territory Level" },
    { key: "coverage", label: "Operational Coverage" },
  ],
  territoryLevels: [
    {
      level: "Pincode Territory",
      coverage: "Single locality",
      iconMdi: "mdi:map-marker-outline",
      scope: 1,
    },
    {
      level: "City Territory",
      coverage: "Entire city",
      iconMdi: "mdi:city-variant-outline",
      scope: 2,
    },
    {
      level: "District Territory",
      coverage: "Multi-city district",
      iconMdi: "mdi:map-outline",
      scope: 3,
    },
    {
      level: "Division Territory",
      coverage: "Regional coverage",
      iconMdi: "mdi:map-legend",
      scope: 4,
    },
    {
      level: "State Territory",
      coverage: "State-wide operations",
      iconMdi: "mdi:flag-outline",
      scope: 5,
    },
    {
      level: "Zone Territory",
      coverage: "Multi-state regional operations",
      iconMdi: "mdi:earth",
      scope: 6,
    },
  ],
};

export const platformLicenseSection = {
  kicker: "Platform License Duration Options",
  title:
    'Choose a License Term That Fits Your <span class="text-gradient-brand">Growth Plans</span>',
  classes: "!px-0 !py-0",
  feeKicker: "Digital Platform Licensing Fee",
  feeTitle:
    'Access the Technology That Powers Your <span class="text-gradient-brand">Partnership</span>',
  feeDescription:
    "The Digital Platform Licensing Fee provides Channel Partners with authorised access to the Indian Mentors digital ecosystem, designed to support efficient management of student enquiries, enrollments, tutor coordination, subscriptions, communication, and academic operations.",
  feeBody:
    "The platform enables Channel Partners to operate their designated territory through a structured, technology-enabled environment while benefiting from the systems and infrastructure developed by Indian Mentors.",
  feeFeaturesTitle: "Key Features",
  feeFeatures: [
    {
      iconMdi: "mdi:account-school-outline",
      title: "Student Management",
      description:
        "Manage student profiles, enquiries, enrollment information, and service requirements through a centralised platform.",
    },
    {
      iconMdi: "mdi:account-group-outline",
      title: "Tutor Coordination",
      description:
        "Support tutor discovery, allocation, coordination, and tracking through structured digital workflows.",
    },
    {
      iconMdi: "mdi:card-account-details-outline",
      title: "Subscription Management",
      description:
        "Monitor student subscription plans, activation status, renewals, and related service information.",
    },
    {
      iconMdi: "mdi:chart-timeline-variant",
      title: "CRM & Lead Management",
      description:
        "Capture, organise, and track leads, enquiries, follow-ups, and communication activities.",
    },
    {
      iconMdi: "mdi:cash-multiple",
      title: "Payment & Revenue Tracking",
      description:
        "Access relevant payment information, transaction records, and partner revenue reports as applicable.",
    },
    {
      iconMdi: "mdi:notebook-outline",
      title: "Academic Operations",
      description:
        "Support the coordination and monitoring of tutoring sessions, schedules, attendance, and academic activities.",
    },
    {
      iconMdi: "mdi:view-dashboard-outline",
      title: "Operational Dashboard",
      description:
        "Access centralised dashboards and reporting tools to monitor territory-level activities and performance.",
    },
    {
      iconMdi: "mdi:cloud-sync-outline",
      title: "Technology & Platform Support",
      description:
        "Benefit from ongoing platform improvements, technical infrastructure, and designated support mechanisms.",
    },
  ],
  feeNoteTitle: "Important Note",
  feeNote:
    "The Digital Platform Licensing Fee is separate from the Security Deposit and any applicable territory or partnership investment. The applicable licensing fee may vary based on the territory size, operational scope, platform access level, and partnership model selected by the Channel Partner.",
  description:
    "Flexible Digital Platform License terms tailored to your partnership goals, investment preferences, and territory growth plans.",
  body: "Partners subscribe to the Digital Platform License to access this ecosystem.",
  note: "Platform license duration, renewal terms, territory rights, platform access, and applicable fees are subject to the Channel Partner Agreement and selected partnership model.",
  overviewTitle: "At a Glance",
  overviewColumns: [
    { key: "plan", label: "Platform License" },
    { key: "duration", label: "Duration" },
    { key: "suited", label: "Best Suited For" },
  ],
  overviewRows: [
    {
      plan: "Starter Plan",
      duration: "1 Year",
      suited: "New partners testing and establishing their territory",
    },
    {
      plan: "Growth Plan",
      duration: "2 Years",
      suited: "Partners focused on building a stable and expanding operation",
      highlight: true,
    },
    {
      plan: "Strategic Plan",
      duration: "5 Years",
      suited: "Long-term partners committed to sustained territory development",
    },
  ],
  plansTitle: "License Duration Options",
  plans: [
    {
      id: "starter",
      number: "01",
      name: "Starter Plan",
      duration: "1 Year",
      licenseLabel: "1-Year Platform License",
      iconMdi: "mdi:rocket-launch-outline",
      tagline:
        "Ideal for partners testing a territory with a flexible, low-commitment entry.",
      description:
        "A flexible entry-level option for new Channel Partners looking to establish their operations, understand the market, and build their initial student and tutor network.",
      benefitsTitle: "Key Benefits",
      benefits: [
        {
          title: "Low-Commitment Entry",
          description:
            "Start your partnership journey with a shorter license duration.",
        },
        {
          title: "Market Validation",
          description:
            "Evaluate the demand for personalised tutoring services within your territory.",
        },
        {
          title: "Structured Launch Support",
          description:
            "Access the platform and operational ecosystem required to begin your activities.",
        },
        {
          title: "Build Your Network",
          description:
            "Develop relationships with parents, students, tutors, and local education communities.",
        },
        {
          title: "Growth Assessment",
          description:
            "Review your territory performance and future expansion potential before renewing.",
        },
      ],
      idealFor:
        "New entrepreneurs and first-time partners exploring a territory.",
      visionLabel: "Start & Explore",
    },
    {
      id: "growth",
      number: "02",
      name: "Growth Plan",
      duration: "2 Years",
      licenseLabel: "2-Year Platform License",
      iconMdi: "mdi:trending-up",
      popular: true,
      tagline:
        "Best balance of value and runway to build enrollment and recurring revenue.",
      description:
        "Designed for Channel Partners who want sufficient time to establish a strong local presence, expand their student base, and develop a sustainable tutoring operation.",
      benefitsTitle: "Key Benefits",
      benefits: [
        {
          title: "Extended Growth Period",
          description:
            "More time to build and strengthen your territory operations.",
        },
        {
          title: "Student Base Development",
          description:
            "Focus on increasing student enrollments and recurring subscriptions.",
        },
        {
          title: "Tutor Network Expansion",
          description:
            "Develop a wider network of qualified tutors within your operational territory.",
        },
        {
          title: "Stronger Market Presence",
          description:
            "Build greater visibility and recognition for personalised tutoring services.",
        },
        {
          title: "Long-Term Planning",
          description:
            "Create structured strategies for territory growth, customer retention, and operational expansion.",
        },
      ],
      idealFor:
        "Growing partners and education professionals with expansion goals.",
      visionLabel: "Build & Grow",
    },
    {
      id: "strategic",
      number: "03",
      name: "Strategic Plan",
      duration: "5 Years",
      licenseLabel: "5-Year Platform License",
      iconMdi: "mdi:crown-outline",
      tagline:
        "Long-term license for partners scaling across city, district, or regional coverage.",
      description:
        "A long-term partnership option for ambitious Channel Partners committed to developing a significant and sustainable personalised education business within their designated territory.",
      benefitsTitle: "Key Benefits",
      benefits: [
        {
          title: "Long-Term Territory Development",
          description:
            "Build a sustainable presence with a multi-year growth vision.",
        },
        {
          title: "Strategic Business Expansion",
          description:
            "Develop and scale your student, tutor, and operational network over an extended period.",
        },
        {
          title: "Sustained Revenue Opportunity",
          description:
            "Build a recurring subscription-based revenue stream through continued student growth and retention.",
        },
        {
          title: "Strong Brand Positioning",
          description:
            "Establish a stronger presence within your local education market over time.",
        },
        {
          title: "Scalable Growth Strategy",
          description:
            "Plan city, district, or regional expansion with a long-term operational roadmap.",
        }
      ],
      idealFor:
        "Experienced partners and investors seeking long-term growth.",
      visionLabel: "Scale & Lead",
    },
  ],
  vision: {
    title: "Find the Right License for Your Vision",
    items: [
      { duration: "1 Year", label: "Start & Explore" },
      { duration: "2 Years", label: "Build & Grow" },
      { duration: "5 Years", label: "Scale & Lead" },
    ],
  },
  accessTitle: "Platform Access Includes",
  accessPageHref: "/channel-partner/platform-access",
  accessIncludes: [
    {
      id: "academic-dashboard",
      label: "Academic Dashboard",
      iconMdi: "solar:notebook-bold",
    },
    {
      id: "student-enrollment",
      label: "Student Enrollment Management",
      iconMdi: "solar:user-plus-bold",
    },
    {
      id: "recruitment-training",
      label: "Recruitment & Training Support",
      iconMdi: "solar:diploma-bold",
    },
    {
      id: "tutor-allocation",
      label: "Tutor Allocation & Tracking",
      iconMdi: "solar:users-group-two-rounded-bold",
    },
    {
      id: "subscription-plans",
      label: "Subscription Plan Management",
      iconMdi: "solar:card-2-bold",
    },
    {
      id: "payment-reports",
      label: "Payment Reports & Revenue Tracking",
      iconMdi: "solar:chart-2-bold",
    },
    {
      id: "crm-communication",
      label: "CRM & Communication Tools",
      iconMdi: "solar:chat-round-line-bold",
    },
    {
      id: "marketing-branding",
      label: "Marketing & Branding Support",
      iconMdi: "solar:presentation-graph-bold",
    },
  ],
};

export const territoryInvestmentSection = {
  kicker: "Partner Investment Overview",
  title:
    'Sample Partnership  <span class="text-gradient-brand">Investment Structure </span>',
  classes: "!px-0 !py-0",
  description:
    "Below is an illustrative example of the investment structure for different operational territories.",
  note: "Actual pricing may vary based on city category and population size.",
  closing:
    "This tiered investment model ensures scalability, allowing partners to start locally and expand their territory over time.",
  columns: [
    { key: "territory", label: "Territory" },
    { key: "coverage", label: "Coverage" },
    { key: "deposit", label: "Security Deposit", sub: "Refundable" },
    { key: "license1", label: "License (1Y)" },
    { key: "license2", label: "License (2Y)" },
    { key: "license5", label: "License (5Y)", sub: "Best Value", accent: true },
  ],
  rows: [
    {
      level: "Pincode",
      iconMdi: "mdi:mailbox-outline",
      coverage: "Single locality",
      deposit: "₹25,000",
      license1: "₹15,000",
      license2: "₹25,000",
      license5: "₹50,000",
    },
    {
      level: "City",
      iconMdi: "mdi:city-variant-outline",
      coverage: "Full city operations",
      deposit: "₹1,00,000",
      license1: "₹50,000",
      license2: "₹85,000",
      license5: "₹2,00,000",
      highlight: true,
    },
    {
      level: "District",
      iconMdi: "mdi:map-marker-radius-outline",
      coverage: "Multiple cities",
      deposit: "₹2,50,000",
      license1: "₹1,00,000",
      license2: "₹1,75,000",
      license5: "₹4,00,000",
    },
    {
      level: "Division",
      iconMdi: "mdi:view-grid-outline",
      coverage: "Regional cluster",
      deposit: "₹5,00,000",
      license1: "₹2,00,000",
      license2: "₹3,50,000",
      license5: "₹8,00,000",
    },
    {
      level: "State",
      iconMdi: "mdi:map-outline",
      coverage: "Statewide operations",
      deposit: "₹10,00,000",
      license1: "₹4,00,000",
      license2: "₹7,00,000",
      license5: "₹15,00,000",
    },
    {
      level: "Zone",
      iconMdi: "mdi:map-legend",
      coverage: "Multi-state region",
      deposit: "₹25,00,000",
      license1: "₹8,00,000",
      license2: "₹14,00,000",
      license5: "₹30,00,000",
    },
  ],
};

export type TerritoryModelLevel = {
  id: string;
  label: string;
  subtitle: string;
  iconMdi: string;
  description: string;
  responsibilitiesTitle?: string;
  responsibilities?: string[];
  majorZonesTitle?: string;
  majorZones?: string[];
  closing?: string;
  connectsTitle?: string;
  connects?: string[];
  example?: string;
};

export const territoryModelSection = {
  kicker: "Territory Model",
  title:
    'Channel Partner <span class="text-gradient-brand">Territory Model</span>',
  classes: "!px-0 !py-0",
  description:
    "A structured multi-level geographical hierarchy for partners to operate within clearly defined service territories — from pincode micro-coverage to the national tutoring network.",
  levels: [
    {
      id: "pincode",
      label: "Pincode",
      subtitle: "Micro Service Coverage",
      iconMdi: "mdi:map-marker-outline",
      description:
        "The Pincode is the smallest serviceable unit within the Indian Mentors partner network. It identifies the exact location of a student enquiry and enables channel partners to connect students and families with nearby verified tutors.",
      responsibilitiesTitle: "Partner Role at Pincode Level",
      responsibilities: [
        "Capture local student enquiries",
        "Identify and coordinate with nearby tutors",
        "Match students with suitable subject and board-specific tutors",
        "Coordinate demo sessions",
        "Support local parent communication",
      ],
      example: "560034 – Koramangala, Bengaluru",
    },

    {
      id: "city",
      label: "City / Town",
      subtitle: "Primary Partner Territory",
      iconMdi: "mdi:city-variant-outline",
      description:
        "Cities represent the primary operational territory for most Indian Mentors Channel Partners. Each city consists of multiple pincodes, localities, residential communities, schools, and student clusters.",
      responsibilitiesTitle: "Partner Responsibilities",
      responsibilities: [
        "Student counselling and admissions",
        "Tutor recruitment and onboarding",
        "Demo class coordination",
        "Parent relationship management",
        "Student–tutor matching",
        "Local marketing and business development",
      ],
      example: "Bengaluru, Karnataka",
    },
    {
      id: "district",
      label: "District",
      subtitle: "Multi-City / Regional Service Coverage",
      iconMdi: "mdi:map-marker-radius-outline",
      description:
        "A District-level territory includes the designated city and surrounding towns, localities, and service areas. Larger Channel Partners may operate at the district level to manage broader tutoring operations and expand the Indian Mentors network.",
      responsibilitiesTitle: "Partner Responsibilities",
      responsibilities: [
        "Expand tutoring services across multiple cities and towns within the district",
        "Develop a strong regional tutor network",
        "Coordinate student admissions across multiple service locations",
        "Support city-level operations",
        "Manage tutor recruitment and onboarding at scale",
        "Coordinate operations across multiple localities and cities",
      ],
      example: "Bengaluru Urban District, Karnataka",
    },
    {
      id: "division",
      label: "Division",
      subtitle: "Regional Operations Management",
      iconMdi: "mdi:view-grid-outline",
      description:
        "A Division groups multiple districts into a broader administrative and operational territory. This level is typically suitable for regional partners or master channel partners responsible for coordinating multiple district-level operations.",
      responsibilitiesTitle: "Partner Responsibilities",
      responsibilities: [
        "Manage multi-district tutoring networks",
        "Support city and district-level Channel Partners",
        "Coordinate regional tutor recruitment and supply",
        "Monitor service quality across multiple territories",
        "Facilitate regional business development",
      ],
      example: "Bengaluru Division / Bengaluru Region",
    },
    {
      id: "state",
      label: "State / Union Territory",
      subtitle: "State-Level Partnership",
      iconMdi: "mdi:map-outline",
      description:
        "A State-level partnership enables larger Channel Partners to manage Indian Mentors operations across multiple districts and regional territories within a state.",
      responsibilitiesTitle: "Partner Responsibilities",
      responsibilities: [
        "State-wide business development",
        "Tutor network expansion",
        "Recruitment and onboarding of tutors at scale",
        "Regional marketing and brand representation",
        "Coordination of state-level operational growth",
      ],
      example: "Karnataka",
    },
    {
      id: "zone",
      label: "Zone",
      subtitle: "National Regional Partnership",
      iconMdi: "mdi:map-legend",
      description:
        "India is divided into major operational zones to support the large-scale expansion and structured management of Indian Mentors tutoring services.",
      closing:
        "Zone-level partners or Master Channel Partners may coordinate multi-state operations, support state-level partners, and drive regional expansion strategies.",
      responsibilitiesTitle: "Partner Responsibilities",
      responsibilities: [
        "Manage multi-state tutoring operations",
        "Support state-level Channel Partners",
        "Coordinate regional tutor supply",
        "Develop large-scale tutor recruitment networks",
        "Monitor business growth across multiple states",
      ],
      example: "South Zone",
    },
    {
      id: "country",
      label: "Country",
      subtitle: "National Tutoring Network",
      iconMdi: "mdi:earth",
      description:
        "At the National Level, Indian Mentors operates a centralised tutoring platform that connects and coordinates students, parents, tutors, channel partners, institutional clients, and educational organisations.",
      connectsTitle: "National network connects",
      connects: [
        "Students",
        "Parents",
        "Tutors",
        "Channel Partners",
        "Institutional Clients",
        "Educational Organisations",
      ],
      example: "India",
    },
  ] satisfies TerritoryModelLevel[],
};

export const revenueSharingOverview = {
  kicker: "Revenue Sharing",
  title: 'Revenue Sharing <span class="text-gradient-brand">Model</span>',
  classes: "!px-0 !py-0",
  description:
    "Indian Mentors offers a balanced and sustainable revenue-sharing framework between the platform and the local Channel Partner.",
  sourcesTitle: "Partners earn revenue from:",
  sources: [
    {
      no: "01",
      iconMdi: "mdi:account-school-outline",
      title: "Student Enrollment Fees",
      description:
        "Commission on every student enrollment generated within your territory.",
    },
    {
      no: "02",
      iconMdi: "mdi:calendar-sync-outline",
      title: "Subscription-Based Tutoring Services",
      description:
        "Recurring earnings from home, online, and hybrid tutoring subscriptions.",
    },
  ],
};

export const enrollmentFeeShareSection = {
  kicker: "Enrollment Fee",
  title:
    'Revenue Sharing on <span class="text-gradient-brand">Enrollment Fee</span>',
  classes: "!px-0 !py-0",
  description:
    "When a student enrolls through the platform within the partner’s territory, the Enrollment Fee is shared between the Channel Partner and Indian Mentors.",
  partnerShare: {
    label: "Channel Partner",
    percent: 10,
    detail: "Commission per enrollment in your territory",
    iconMdi: "mdi:handshake-outline",
  },
  platformShare: {
    label: "Indian Mentors",
    percent: 90,
    detail: "Supports onboarding and platform operations",
    iconMdi: "mdi:office-building-outline",
  },
  purposeTitle: "Purpose of Enrollment Fee",
  purposeIntro: "The enrollment fee supports:",
  purposes: [
    { label: "Student onboarding", iconMdi: "mdi:account-school-outline" },
    { label: "Academic assessment", iconMdi: "mdi:clipboard-text-outline" },
    { label: "Tutor matching", iconMdi: "mdi:account-search-outline" },
    { label: "Administrative services", iconMdi: "mdi:briefcase-outline" },
    { label: "Platform operations", iconMdi: "mdi:cog-outline" },
  ],
  note: "Partners receive 10% commission for each enrollment generated within their territory.",
};

export const subscriptionShareSection = {
  kicker: "Subscription Revenue",
  title:
    'Keep <span class="text-gradient-brand">90%</span> of Every Subscription',
  classes: "!px-0 !py-0",
  description:
    "Personalised tutoring subscriptions in your territory create ongoing income. You retain 90% of eligible subscription revenue; Indian Mentors keeps 10% for platform and academic infrastructure.",
  descriptionSecondary: "",
  model: {
    title: "How the Revenue Model Works",
    columns: [
      { key: "component", label: "Revenue Component" },
      { key: "amount", label: "Indicative Amount" },
      { key: "partnerShare", label: "Partner Share" },
      { key: "platformShare", label: "Platform Share" },
    ],
    rows: [
      {
        component: "Student Enrollment Fee",
        amount: "₹1,200 / Student",
        partnerShare: "Not Applicable",
        platformShare: "100% Platform",
        highlight: false,
      },
      {
        component: "Tutor Registration Fee",
        amount: "₹1,000 / Tutor",
        partnerShare: "Not Applicable",
        platformShare: "100% Platform ",
        highlight: false,
      },
      {
        component: "Subscription Fee",
        amount: "Average ₹8,000 / Student*",
        partnerShare: "90% Partner ",
        platformShare: "10% Platform ",
        highlight: true,
      },
    ],
    note: "The average subscription value is indicative and may vary based on the selected tutoring plan, number of subjects, class level, board, session frequency, service type, and other applicable factors.",
  },
  structure: {
    kicker: "Partner-First Split",
    title: "Built to Maximise Partner Earnings",
    description:
      "A transparent 90:10 revenue split on personalised tutoring subscriptions — designed so most of the value stays with the Channel Partner.",
  },
  partnerShare: {
    label: "Channel Partner",
    percent: 90,
    detail: "Subscription Revenue",
  },
  platformShare: {
    label: "Indian Mentors",
    percent: 10,
    detail: "Platform Fee",
  },
  closing:
    "<b>Compound value over time</b> — grow enrollments in your territory and turn each subscription into predictable, long-term partner income.",
  highlights: [
    {
      iconMdi: "mdi:wallet-outline",
      title: "Recurring Income, Territory by Territory",
      description:
        "Earn from home, online, and hybrid tutoring subscriptions as your local student base grows.",
    },
    {
      iconMdi: "mdi:shield-check-outline",
      title: "Clear Split. No Hidden Cuts.",
      description:
        "90% of eligible subscription revenue goes to the Channel Partner; 10% covers the platform.",
    },
    {
      iconMdi: "mdi:rocket-launch-outline",
      title: "You Grow the Market. We Run the Stack.",
      description:
        "Indian Mentors handles technology, academics, support, and operations — so you can focus on enrollment and relationships.",
    },
  ],
};

export const earningsIllustrationSection = {
  kicker: "Earnings Example",
  title:
    'Partner Earnings <span class="text-gradient-brand">Illustration</span>',
  classes: "!px-0 !py-0",
  description:
    "A simple look at earning potential from a typical city-level tutoring scenario.",
  scenarioBadge: "City Level · 50 · ₹8,000/mo",
  annual: {
    title: "Annual partner earnings",
    value: "₹43.2L",
    subtitle: "90% of ₹48L total annual revenue",
  },
  monthlyBreakdown: {
    title: "Monthly Breakdown",
    totalLabel: "Total Subscription Revenue",
    formula: "50 × ₹8,000",
    total: "₹4L",
    rows: [
      { label: "Channel Partner (90%)", value: "₹3.6L", highlight: true },
      { label: "Indian Mentors (10%)", value: "₹40,000" },
    ],
  },
  annualProjection: {
    title: "Annual Projection",
    totalLabel: "Total Annual Revenue",
    total: "₹48L",
    rows: [
      { label: "Your Annual Earnings", value: "₹43.2L", highlight: true },
      { label: "Indian Mentors Annual", value: "₹4.8L" },
    ],
  },
  scaleTitle: "Earnings grow with your student base",
  scaleTabs: [
    { id: "monthly" as const, label: "Monthly" },
    { id: "quarterly" as const, label: "Quarterly" },
    { id: "halfYearly" as const, label: "Half Yearly" },
    { id: "annual" as const, label: "Annually" },
  ],
  scaleSubtitles: {
    monthly: "Partner monthly earnings · 90% share",
    quarterly: "Partner quarterly earnings · 90% share",
    halfYearly: "Partner half-yearly earnings · 90% share",
    annual: "Partner annual earnings · 90% share",
  },
  scale: [
    {
      students: 50,
      monthly: "₹3.6L",
      monthlyShort: "₹3.6L",
      quarterly: "₹10.8L",
      quarterlyShort: "₹10.8L",
      halfYearly: "₹21.6L",
      halfYearlyShort: "₹21.6L",
      annual: "₹43.2L",
      annualShort: "₹43.2L",
      percent: 22,
      highlight: true,
    },
    {
      students: 100,
      monthly: "₹7.2L",
      monthlyShort: "₹7.2L",
      quarterly: "₹21.6L",
      quarterlyShort: "₹21.6L",
      halfYearly: "₹43.2L",
      halfYearlyShort: "₹43.2L",
      annual: "₹86.4L",
      annualShort: "₹86.4L",
      percent: 32,
    },
    {
      students: 500,
      monthly: "₹36L",
      monthlyShort: "₹36L",
      quarterly: "₹1.08Cr",
      quarterlyShort: "₹1.08Cr",
      halfYearly: "₹2.16Cr",
      halfYearlyShort: "₹2.16Cr",
      annual: "₹4.32Cr",
      annualShort: "₹4.32Cr",
      percent: 71,
    },
    {
      students: 1000,
      monthly: "₹72L",
      monthlyShort: "₹72L",
      quarterly: "₹2.16Cr",
      quarterlyShort: "₹2.16Cr",
      halfYearly: "₹4.32Cr",
      halfYearlyShort: "₹4.32Cr",
      annual: "₹8.64Cr",
      annualShort: "₹8.64Cr",
      percent: 100,
    },
  ],
  growthTip: {
    title: "Growing Base = Growing Income",
    description:
      "As your student base grows, your earnings scale proportionally. A territory that starts with 50 students can grow to 500+ within 2–3 years.",
  },
  closing:
    "Subscription revenue is recurring — as your student base grows, partner earnings scale with it.",
};

export const revenueCalculatorSection = {
  kicker: "Earnings Potential",
  title: 'Revenue <span class="text-gradient-brand">Calculator</span>',
  classes: "!px-0 !py-0",
  description:
    "Explore your potential earnings as a Channel Partner. Adjust the parameters to see projected subscription revenue.",
  configureTitle: "Configure Parameters",
  students: {
    label: "Number of Students",
    iconMdi: "mdi:account-school",
    min: 10,
    max: 5000,
    /** Step must divide (max - min) so the slider can reach max (HTML range quirk). */
    step: 10,
    default: 50,
  },
  subscriptionFee: {
    label: "Avg. Monthly Subscription Fee",
    iconMdi: "mdi:currency-inr",
    min: 2000,
    max: 100000,
    step: 500,
    default: 8000,
  },
  periodTabs: [
    { id: "monthly" as const, label: "Monthly" },
    { id: "quarterly" as const, label: "Quarterly" },
    { id: "halfYearly" as const, label: "Half Yearly" },
    { id: "annual" as const, label: "Annually" },
  ],
  /** Partner share of subscription revenue */
  subscriptionPartnerShare: 90,
  note: "Estimates assume the standard partner share: 90% of subscription revenue. Actual earnings may vary by territory and plan mix.",
};

export const revenueStreamsSection = {
  kicker: "Revenue Streams",
  title:
    'Channel Partner <span class="text-gradient-brand">Revenue Streams</span>',
  classes: "!px-0 !py-0",
  description:
    "Partners can generate revenue through multiple sources. This multi-layered revenue structure ensures long-term business growth within the education sector.",
  streams: [
    {
      iconMdi: "mdi:calendar-month-outline",
      title: "Monthly Subscription Plans",
    },
    { iconMdi: "mdi:domain", title: "Institutional Partnerships" },
  ],
  chartTitle: "Partner Earnings Advantage",
  chartDescription:
    "Subscription revenue stays with the local partner — the platform only takes a small fee.",
  chartAriaLabel: "Partner subscription revenue share versus platform fee",
  dataset: {
    theme: "light" as const,
    data: [
      {
        label: "Channel Partner",
        data: 90,
        bgColor: "bg-blue-500",
        detail: "Subscription revenue",
      },
      {
        label: "Indian Mentors",
        data: 10,
        bgColor: "bg-slate-400",
        detail: "Platform fee",
      },
    ],
  },
};

export const whyModelWorksSection = {
  kicker: "Why This Model Works",
  title: 'A Win-Win <span class="text-gradient-brand">Ecosystem</span>',
  classes: "!px-0 !py-0",
  description:
    "The Indian Mentors partnership framework is designed to create a win-win ecosystem for partners and the platform.",
  advantagesTitle: "Key Advantages",
  /** Two sides of the ecosystem shown in the central balance graphic */
  balance: {
    partner: {
      label: "Channel Partner",
      caption: "Runs the local business",
      iconMdi: "mdi:handshake-outline",
      points: [
        "Owns the territory",
        "Keeps 90% subscription revenue",
        "Local relationships",
      ],
    },
    platform: {
      label: "Indian Mentors",
      caption: "Powers the operation",
      iconMdi: "mdi:office-building-outline",
      points: ["Technology & ERP", "National brand", "Academic network"],
    },
    centerLabel: "Win-Win",
  },
  advantages: [
    {
      iconMdi: "mdi:home-outline",
      title: "Low infrastructure investment",
      description:
        "Start lean — no expensive setup, run operations from the digital platform.",
      accent: "blue",
    },
    {
      iconMdi: "mdi:chart-timeline-variant",
      title: "High recurring revenue potential",
      description:
        "Subscription-based tutoring builds predictable, compounding monthly income.",
      accent: "emerald",
    },
    {
      iconMdi: "mdi:map-marker-radius-outline",
      title: "Territory-based exclusivity",
      description:
        "Operate a protected area with room to grow from pincode to zone.",
      accent: "violet",
    },
    {
      iconMdi: "mdi:cloud-outline",
      title: "Centralised digital platform",
      description:
        "Manage students, tutors, payments and reports from one ERP dashboard.",
      accent: "sky",
    },
    {
      iconMdi: "mdi:shield-star-outline",
      title: "National brand <br/> credibility",
      description:
        "Win parents’ trust with the strength of a recognised national academic brand.",
      accent: "amber",
    },
    {
      iconMdi: "mdi:graphql",
      title: "Scalable tutoring network",
      description:
        "Add tutors and students continuously as demand in your territory grows.",
      accent: "rose",
    },
  ],
};

export const investmentFinalCta = {
  badge: "Become an Authorised Channel Partner",
  title: "Join the Growing Network of Authorised Resellers",
  description:
    "Join the growing network of Indian Mentors Authorised Resellers and help expand quality personalised tutoring services across India.",
  opportunities: [
    "Build a local education business",
    "Earn recurring subscription revenue",
    "Expand tutor and student networks",
    "Contribute to academic success nationwide",
  ],
  primaryCta: {
    label: "Apply for Channel Partnership",
    href: "#partner-investment-register",
  },
  secondaryCta: {
    label: "Schedule a Partnership Consultation",
    href: "tel:+917389563564",
  },
  tertiaryCta: {
    label: "Download Channel Partner Brochure",
    href: "#territory-investment",
  },
};

export type PlatformAccessFeature = {
  id: string;
  no: string;
  title: string;
  iconMdi: string;
  description: string;
  points: string[];
};

export const platformAccessHero = {
  badge: "Digital Platform · Channel Partner ERP",
  title: 'Platform Access <span class="text-gradient-brand">Includes</span>',
  subtitle:
    '<span class="text-gradient-brand">Indian Mentors</span> — Tools that power your tutoring territory',
  description:
    "Your Digital Platform License unlocks a complete operating system for enrollments, tutors, subscriptions, payments, CRM, academics, and local marketing — built for Channel Partners.",
  caption:
    "One platform. Eight capability areas. End-to-end territory operations.",
  backgroundImage: "assets/img/hero/hero-1.png",
  contentClass: "!px-0 !py-0 max-w-2xl lg:max-w-[46rem]",
  primaryCta: { label: "Explore Platform Modules", href: "#platform-features" },
  secondaryCta: {
    label: "View Investment Model",
    href: "/channel-partner/investment",
  },
};

export const platformAccessHeroStats: TrustIndicatorItem[] = [
  {
    value: "08",
    label: "Core Modules",
    icon: "solar:widget-5-bold-duotone",
  },
  {
    value: "ERP",
    label: "Partner Dashboard",
    icon: "solar:monitor-smartphone-bold-duotone",
  },
  {
    value: "360°",
    label: "Territory Ops",
    icon: "solar:map-point-bold-duotone",
  },
  {
    value: "24×7",
    label: "Cloud Access",
    icon: "solar:cloud-bold-duotone",
  },
];

export const platformAccessSection = {
  kicker: "What Your License Unlocks",
  title:
    'Everything You Need to <span class="text-gradient-brand">Run Your Territory</span>',
  classes: "!px-0 !py-0",
  description:
    "From the first student enquiry to recurring subscriptions, tutor coordination, and local brand presence — explore each capability included with your Digital Platform License.",
  features: [
    {
      id: "academic-dashboard",
      no: "01",
      title: "Academic Dashboard",
      iconMdi: "solar:notebook-bold",
      description:
        "Monitor key academic and operational activities through a centralised dashboard.",
      points: [
        "View active student enrollments",
        "Monitor tutoring sessions and schedules",
        "Track attendance and academic activities",
        "Review student and tutor engagement",
        "Access relevant academic and operational insights",
      ],
    },
    {
      id: "tutor-allocation",
      no: "02",
      title: "Tutor Allocation & Tracking",
      iconMdi: "solar:users-group-two-rounded-bold",
      description:
        "Efficiently coordinate tutors with students based on academic requirements, availability, and service preferences.",
      points: [
        "Review suitable tutor profiles",
        "Coordinate tutor-student matching",
        "Track tutor allocation status",
        "Monitor tutor availability and engagement",
        "Support tutor replacement and coordination workflows",
      ],
    },
    {
      id: "crm-communication",
      no: "03",
      title: "CRM & Communication Tools",
      iconMdi: "solar:chat-round-line-bold",
      description:
        "Build stronger relationships with parents, students, tutors, and prospects through organised communication management.",
      points: [
        "Manage leads and enquiries",
        "Track follow-ups and customer interactions",
        "Maintain communication history",
        "Coordinate with students, parents, and tutors",
        "Improve lead conversion and relationship management",
      ],
    }, {
      id: "marketing-branding",
      no: "04",
      title: "Marketing & Branding Support",
      iconMdi: "solar:presentation-graph-bold",
      description:
        "Strengthen your local presence with access to the Indian Mentors brand ecosystem and marketing resources.",
      points: [
        "Use approved brand identity and communication guidelines",
        "Access marketing creatives and promotional materials",
        "Receive support for local promotional activities",
        "Leverage established Indian Mentors brand positioning",
        "Promote personalised tutoring services within your territory",
      ],
    },

    {
      id: "subscription-plans",
      no: "05",
      title: "Subscription Plan Management",
      iconMdi: "solar:card-2-bold",
      description:
        "Manage subscription-based tutoring services through a structured platform.",
      points: [
        "Access available tutoring plans and packages",
        "Manage student subscription details",
        "Track plan activation and renewal status",
        "Monitor subscription history",
        "Support upgrades, renewals, and service continuation",
      ],
    },
    {
      id: "recruitment-training",
      no: "06",
      title: "Recruitment & Training Support",
      iconMdi: "solar:diploma-bold",
      description:
        "Build a reliable tutor network with support from the Indian Mentors recruitment ecosystem.",
      points: [
        "Access tutor recruitment processes and guidelines",
        "Support tutor sourcing within your territory",
        "Follow structured screening and verification procedures",
        "Coordinate tutor onboarding and orientation",
        "Access recruitment and training resources",
      ],
    },

    {
      id: "student-enrollment",
      no: "07",
      title: "Student Enrollment Management",
      iconMdi: "solar:user-plus-bold",
      description:
        "Manage the complete student enrollment journey through a structured digital workflow.",
      points: [
        "Capture and manage student enquiries",
        "Maintain student and parent information",
        "Track counseling and enrollment status",
        "Manage service and subscription selections",
        "Monitor enrollment progress from inquiry to activation",
      ],
    },

    {
      id: "payment-reports",
      no: "08",
      title: "Payment Reports & Revenue Tracking",
      iconMdi: "solar:chart-2-bold",
      description:
        "Gain greater visibility into financial activity and partner revenue through organised reporting tools.",
      points: [
        "Monitor subscription payment status",
        "Track transaction records and payment activity",
        "Access revenue and earning reports",
        "Review partner revenue-sharing information",
        "Support financial reconciliation and reporting",
      ],
    },
  ] satisfies PlatformAccessFeature[],
};

export const platformAccessCta = {
  badge: "Ready to operate digitally?",
  title: "Get Full Platform Access with Your Partner License",
  description:
    "Apply to become an Authorised Channel Partner and unlock the Indian Mentors digital platform for your territory.",
  primaryCta: {
    label: "Apply for Channel Partnership",
    href: "/channel-partner/investment#partner-investment-register",
  },
  secondaryCta: {
    label: "Explore Investment & Revenue Model",
    href: "/channel-partner/investment",
  },
};
