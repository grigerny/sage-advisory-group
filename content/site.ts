export const site = {
  name: "The SAGE Advisory Group",
  shortName: "SAGE",
  description:
    "Restaurant and hospitality advisory for independent operators seeking stronger financial visibility, systems, and day-to-day execution.",
  email: "info@thesageadvisorygroup.com",
  contactUrl: "https://thesageadvisorygroup.hbportal.co/",
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
    { label: "Solutions", href: "/solutions/" },
    { label: "Blogs", href: "/blogs/" }
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
    eyebrow: "It’s Time to Invest",
    title: "in the Business Behind Your Restaurant",
    body:
      "SAGE works beside ownership and leadership teams to bring more order, consistency, accountability, and visibility to daily operations."
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
    title: "Restaurant Project Management",
    pageTitle: "Restaurant Project Management",
    image: "/images/service-project-management.jpg",
    summary:
      "Project oversight for restaurant openings, coordinating timelines, specialists, operating readiness, and the details that have to come together before launch.",
    details:
      "A single operating perspective for the moving pieces that turn a restaurant concept into an organized opening.",
    bullets: ["Opening roadmap", "Vendor and specialist coordination", "Pre-opening operating systems"]
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
