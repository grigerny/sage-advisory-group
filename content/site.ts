export const contactUrl =
  "https://thesageadvisorygroup.hbportal.co/public/68d2b7d43948bd0037790b2e";

export const site = {
  name: "The SAGE Advisory Group",
  shortName: "SAGE",
  description:
    "Restaurant and hospitality advisory for independent operators seeking stronger financial visibility, systems, and day-to-day execution.",
  email: "info@thesageadvisorygroup.com",
  contactUrl,
  socials: {
    facebook: "https://www.facebook.com/people/The-SAGE-Advisory-Group/61582707025681/",
    instagram: "https://www.instagram.com/thesageadvisorygroup/",
    linkedin: "https://www.linkedin.com/in/michael-balsamo-baa04b4/"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
    { label: "Solutions", href: "/solutions/" },
    { label: "Blogs", href: "/blogs/" },
    { label: "Contact", href: contactUrl, external: true as const }
  ]
};

/** Local copies of production assets from thesageadvisorygroup.com */
export const images = {
  logo: "/images/logo.png",
  footerLogo: "/images/footer-logo.png",
  favicon: "/favicon.png",
  heroHome: "/images/hero-home.jpg",
  heroLogo: "/images/hero-logo.png",
  aboutKitchen: "/images/about-kitchen.jpg",
  aboutApproach: "/images/about-approach.jpg",
  whyFood: "/images/why-food.png",
  whyPos: "/images/why-pos.png",
  partnerBg: "/images/partner-bg.jpg",
  innerBanner: "/images/inner-banner.jpg",
  mission: "/images/mission.jpg",
  founder: "/images/founder-michael-balsamo.jpg"
};

export const home = {
  hero: {
    eyebrow: "Restaurant & Hospitality Advisory",
    title: "Clarity for the Business Behind Your Restaurant",
    body:
      "Hands-on advisory for independent restaurant owners who want stronger systems, better visibility, and measurable operating progress.",
    primaryCta: "Get Started",
    secondaryCta: "Explore Solutions"
  },
  about: {
    kicker: "Built for restaurant owners who understand the work",
    title: "About Us",
    body: [
      "SAGE works with independent restaurant owners to connect everyday operations with the numbers that determine long-term performance.",
      "The work is practical and execution-focused: financial visibility, operating systems, accountability, and support for owners managing complex hospitality businesses."
    ]
  },
  investment: {
    eyebrow: "It’s Time to",
    title: "Invest in the Business Behind Your Restaurant",
    body:
      "We’re not here to take over — we’re here to stand with you. Our team brings experience, systems, and follow-through to help your operation run smoother and smarter. Our work brings order, calm, and progress that sticks."
  },
  why: {
    eyebrow: "Why SAGE?",
    title: "A Partner in Progress",
    body:
      "The approach is grounded in real hospitality operations experience and focuses on systems that connect the floor, the back office, and financial performance.",
    features: [
      "25+ years of restaurant industry experience",
      "More time and better cost visibility",
      "Solutions built around the individual operation",
      "Hospitality-focused operating experience"
    ]
  }
};

export const solutions = [
  {
    slug: "Financial-Management",
    title: "Financial Management",
    pageTitle: "Restaurant Financial Management",
    image: "/images/service-financial.jpg",
    summary:
      "Daily tracking and reporting systems designed to give owners clearer visibility into sales, food cost, prime cost, purchasing, and margin.",
    details:
      "A structured operating view of the numbers behind the restaurant, designed to help ownership understand performance before the month-end P&L arrives.",
    bullets: ["Financial reporting", "Accounts payable & receivable", "Payroll administration support"]
  },
  {
    slug: "Operations-and-Field-Advisory",
    title: "Operations and Field Advisory",
    pageTitle: "Operations and Field Advisory",
    image: "/images/service-operations.jpg",
    summary:
      "On-site support for SOPs, accountability routines, service standards, workflows, and consistent execution across BOH and FOH.",
    details:
      "The engagement focuses on how work actually moves through the restaurant, then builds repeatable operating systems around the team and concept.",
    bullets: ["SOP development", "Opening and closing routines", "Training and accountability systems"]
  },
  {
    slug: "Restaurant-Project-Management",
    title: "Project Management",
    pageTitle: "Restaurant Project Management",
    image: "/images/service-project-management.jpg",
    summary:
      "We manage the full restaurant opening process alongside you — handling every detail and timeline so you can focus on leading your team, not chasing permits and contractors.",
    details: "",
    bullets: [],
    services: [
      {
        title: "Evaluate Start-Up Costs & Requirements",
        description:
          "Analyze capital requirements, buildout costs, equipment budgets, and working capital needs so you launch with a clear financial picture — not surprises."
      },
      {
        title: "Develop a Strategic Business Plan",
        description:
          "Build a data-backed business plan with realistic revenue projections, food and labor cost targets, and a clear path to profitability."
      },
      {
        title: "Optimize Cost Structure",
        description:
          "Identify where your buildout and operating costs can be tightened before you open — aligning spending with the margins you need to hit."
      },
      {
        title: "Select & Secure the Right Location",
        description:
          "Evaluate locations for operational fit — kitchen capacity, utility infrastructure, zoning, foot traffic, demographics, and lease terms that actually work for a restaurant."
      },
      {
        title: "Navigate Permitting & Licensing",
        description:
          "Manage the full permitting and licensing process — DOH, SLA, DOB, fire, and all local and state approvals — so nothing holds up your opening."
      },
      {
        title: "Collaborate with Architects & Designers",
        description:
          "Work alongside your architect and designer to ensure the kitchen layout, equipment plan, and floor design support both your concept and your operational workflow."
      },
      {
        title: "Maximize Seating & Flow",
        description:
          "Plan your seating layout and service flow to maximize covers and revenue without compromising guest experience."
      },
      {
        title: "Permits & Compliance",
        description:
          "Build the documentation, systems, and staff training needed to be fully compliant from day one — health code, food safety, labor, and fire safety."
      },
      {
        title: "Build the Right Team",
        description:
          "Recruit and hire key leadership — kitchen lead, FOH management, bar — and build the onboarding and training systems they need to execute from opening day."
      },
      {
        title: "Select Food & Beverage Partners",
        description:
          "Establish reliable vendor relationships for quality, pricing, and consistency."
      },
      {
        title: "Implement Smart Technology Systems",
        description:
          "Choose and integrate POS, scheduling, and financial tools that streamline daily operations."
      },
      {
        title: "Design Payroll & HR Infrastructure",
        description:
          "Construct scalable payroll procedures and compliance frameworks."
      },
      {
        title: "Launch a Marketing & Brand Strategy",
        description:
          "Create awareness and ROI through targeted marketing and digital positioning."
      }
    ]
  },
  {
    slug: "11-Coaching-for-Restaurant-Owners-Operators",
    title: "1:1 Coaching for Restaurant Owners & Operators",
    pageTitle: "1:1 Coaching for Restaurant Owners & Operators",
    image: "/images/service-coaching.jpg",
    summary:
      "Individual advisory for owners and operators who want an experienced thinking partner, clearer priorities, and consistent accountability.",
    details:
      "Structured conversations centered on current operating challenges, leadership, decision-making, delegation, and the owner's most important priorities.",
    bullets: ["Leadership", "Decision support", "Accountability"]
  }
];

export const resources = [
  {
    href: "/permits/",
    title: "Permits, Licenses and Insurance",
    body:
      "Connections to hospitality-focused specialists who can support restaurant licensing, permits, compliance, and insurance needs."
  },
  {
    href: "/capital/",
    title: "Human Capital Mgt Resources",
    body:
      "People-operations resources spanning HR systems, recruiting, onboarding, workforce management, compliance, compensation, and benefits."
  },
  {
    href: "/crm/",
    title: "CRM Design & Build",
    body:
      "Technology partners who can build customer and workflow systems tailored to hospitality owners and operators."
  },
  {
    href: "/legal/",
    title: "Legal",
    body:
      "Access to professionals familiar with restaurant entities, contracts, leases, and ongoing business obligations."
  }
];

export const reviews: { quote: string; name: string }[] = [];
// When ready, add approved testimonials here and restore Reviews in site.nav.

export const founder = {
  name: "Michael Balsamo",
  role: "Founder & Managing Principal",
  intro:
    "SAGE is built around decades of hands-on restaurant and hospitality operations experience.",
  body: [
    "The founder story centers on a career spent inside restaurants, leading teams, opening concepts, and working across the operational realities owners face every day.",
    "For production, replace this paraphrased placeholder with the client-approved founder biography and original photography."
  ]
};

export const legalPage = {
  intro:
    "© 2026 SAGE Advisory Group, a division of Ballzy Enterprises LLC. All rights reserved. SAGE provides advisory and operational support services for hospitality and restaurant businesses. Information shared through this website is for general guidance only and should not be considered legal, financial, or tax advice.",
  financialDisclaimer: {
    title: "Financial Administration Disclaimer",
    body:
      "© 2025 SAGE Advisory Group, a division of Ballzy Enterprises LLC. All rights reserved, provides financial administration and reporting support for restaurant and hospitality businesses. We are not a CPA firm and do not offer tax preparation, audit, or attestation services. All reports and analyses are prepared for internal management purposes only. Clients remain responsible for the accuracy of their financial data and for consulting licensed professionals regarding accounting, tax, or compliance matters. SAGE assumes no liability for actions or decisions made based on the information provided."
  },
  closing:
    "At SAGE, we have long-standing relationships with legal professionals who understand the needs of owners and operators in the restaurant industry. Whether it’s entity setup, contract review, lease guidance, or navigating ongoing obligations, these relationships give owners and operators access to clear, reliable legal support. This helps reduce risk, strengthen decision-making, and protect the long-term stability of the business."
};
