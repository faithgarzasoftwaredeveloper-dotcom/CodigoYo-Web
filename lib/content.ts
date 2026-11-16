export const content = {
  language: {
    english: "EN",
    spanish: "ES",
    comingSoon: "Spanish is coming soon. This site is currently in English.",
    label: "Language",
  },
  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  nav: {
    items: [
      { label: "Products", href: "/#ecosystem" },
      { label: "Learn", href: "/#learn" },
      { label: "Work", href: "/#work" },
      { label: "Build", href: "/#build" },
      { label: "Resources", href: "/#resources" },
      { label: "Company", href: "/#about" },
    ],
    signIn: "Sign In",
    getStarted: "Get Started",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Empowering what comes next",
    title: ["Learn", "Work", "Build"] as const,
    support:
      "CodigoYo creates technology that helps people learn valuable skills, find career opportunities, and build businesses and digital products.",
    primary: "Start Learning",
    secondary: "Explore CodigoYo",
    visualLabel:
      "CodigoYo connects three product directions. Learn with SkillSprint through interactive, hands-on practice. Work with CodigoYo Careers, in development, to turn skills toward opportunity. Build with CodigoYo Studio, in development, to create products and businesses.",
  },
  ecosystemCards: {
    learn: {
      label: "Learn",
      detail: "Build practical skills through interactive, hands-on learning.",
    },
    work: {
      label: "Work",
      detail: "Turn what you know into opportunities.",
    },
    build: {
      label: "Build",
      detail: "Turn ideas into products, businesses and possibilities.",
    },
    preview: "Preview",
  },
  value: [
    {
      title: "Practical Skills",
      detail: "Real projects. Real experience. Real capability.",
    },
    {
      title: "Career Opportunities",
      detail: "Connect what you learn to where you want to go.",
    },
    {
      title: "Tools to Build",
      detail: "Turn ideas into products, businesses and possibilities.",
    },
    {
      title: "Supportive Community",
      detail: "Learn, build and grow alongside others.",
    },
  ],
  products: {
    eyebrow: "The ecosystem",
    title: "One ecosystem. More ways forward.",
    support:
      "CodigoYo connects learning, opportunity, and creation, so education, career growth, and entrepreneurship do not have to stay separate journeys.",
    learn: {
      kicker: "Learn",
      name: "SkillSprint",
      status: "Available",
      body: "SkillSprint is practical technology education. You practice the skill, build with it, and leave with experience you can point to.",
      points: [
        "Hands-on learning instead of passive watching",
        "Projects that become real experience",
        "Interactive technical practice",
        "Progression you can follow",
        "Room for game-based learning",
      ],
      cta: "Explore SkillSprint",
      note: "SkillSprint is its own application. This site introduces it. It does not replace it.",
    },
    work: {
      kicker: "Work",
      name: "CodigoYo Careers",
      status: "In development",
      body: "Learning should not end with a certificate. Careers is being built so people can see where a skill can take them next.",
      points: [
        "Skill matching",
        "Opportunity discovery",
        "Career paths",
        "A clearer picture of what to learn next",
      ],
      ctaLive: "Open CodigoYo Careers",
      ctaSoon: "See where it leads",
      note: "Careers is not a live job board. There is no application flow and no job database on this site.",
    },
    build: {
      kicker: "Build",
      name: "CodigoYo Studio",
      status: "In development",
      body: "Studio is the creation side of CodigoYo. The direction is technology that helps people create, automate, and grow what they are building.",
      points: [
        "AI tools for content and creation",
        "Automation for repeatable work",
        "Websites and digital products",
        "Analytics for what is working",
      ],
      ctaLive: "Open CodigoYo Studio",
      ctaSoon: "See where it leads",
      note: "Studio is not available to use yet. The interface shown here is a preview of the direction, not a working product.",
    },
  },
  journey: {
    eyebrow: "The path",
    title: "A skill can go more than one place.",
    support:
      "Learn something useful. Turn it into experience. Then step toward a role, or toward something of your own. Both outcomes belong here.",
    steps: [
      {
        index: "01",
        title: "Learn a skill",
        detail: "Practice something valuable until you can actually use it.",
      },
      {
        index: "02",
        title: "Build experience",
        detail: "Turn that skill into a project, a portfolio piece, or proof of work.",
      },
      {
        index: "03",
        title: "Discover opportunities",
        detail: "See the roles, paths, and gaps that skill can connect to.",
      },
    ],
    forkLabel: "Then choose a direction",
    outcomes: [
      {
        title: "Get hired",
        detail: "Take the experience into a role and keep growing from there.",
      },
      {
        title: "Build your own",
        detail: "Use it to launch a product, a service, or a business.",
      },
    ],
  },
  why: {
    eyebrow: "Why CodigoYo",
    title: "Learning is more useful when it has somewhere to go.",
    items: [
      {
        title: "Learn by doing",
        detail: "Technology skills should be practiced, not merely watched.",
      },
      {
        title: "Connect skills to opportunity",
        detail: "Learning becomes more valuable when people can see where it might lead.",
      },
      {
        title: "Build something real",
        detail: "Projects create experience, a portfolio, and confidence.",
      },
      {
        title: "Choose your direction",
        detail:
          "A skill can lead to a job, freelance work, a company, or something not named yet.",
      },
    ],
  },
  featured: {
    eyebrow: "Experiences",
    title: "What you can step into.",
    support:
      "These are the experiences CodigoYo is organizing. SkillSprint is the one you can open today. The others are named so the direction is clear. They are not open for enrollment.",
    items: [
      {
        category: "Learn",
        title: "SkillSprint",
        summary: "Practical technology learning you can start now.",
        status: "Available" as const,
        live: true,
      },
      {
        category: "Learn",
        title: "Skills Accelerators",
        summary: "Focused paths from a concept to a finished project.",
        status: "In development" as const,
        live: false,
      },
      {
        category: "Learn",
        title: "Interactive Learning",
        summary: "Exercises and environments where the skill is practiced.",
        status: "In development" as const,
        live: false,
      },
      {
        category: "Work",
        title: "Career Intelligence",
        summary: "A future way to see how skills line up with opportunities.",
        status: "In development" as const,
        live: false,
      },
      {
        category: "Build",
        title: "Builder Tools",
        summary: "Future tools for creating, automating, and growing an idea.",
        status: "In development" as const,
        live: false,
      },
    ],
  },
  early: {
    eyebrow: "Early, on purpose",
    title: "We’re building what we wanted to exist.",
    body: "CodigoYo is early, and that is stated plainly. The idea is simple: learning technology should lead somewhere — toward skills, opportunities, products, and possibilities.",
    nowTitle: "Here now",
    now: ["This company site", "SkillSprint, the learning product"],
    nextTitle: "In development",
    next: ["CodigoYo Careers", "CodigoYo Studio", "Spanish, resources, and updates"],
    close:
      "There are no invented customer counts, logos, or testimonials on this page. If you want to begin, start learning. If you want to watch the rest take shape, you are in the right place.",
  },
  final: {
    title: "Your next chapter starts with what you learn today.",
    support:
      "Learn the skill. Use it. Then move toward a job, a business, or a direction you define yourself.",
    primary: "Start Learning",
    secondary: "Explore CodigoYo",
  },
  footer: {
    blurb: "Learn. Work. Build.",
    products: "Products",
    learn: "Learn",
    company: "Company",
    resources: "Resources",
    soon: "Coming soon",
    privacy: "Privacy",
    terms: "Terms",
    rights: "CodigoYo. All rights reserved.",
    learnItems: ["Courses", "Skills Accelerators", "Interactive Learning"],
    companyItems: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: null },
    ],
    resourceItems: [
      { label: "Resources", href: "/#resources" },
      { label: "Updates", href: null },
    ],
  },
  notFound: {
    title: "This page is not part of the map.",
    body: "The link does not lead anywhere on CodigoYo yet. Head back to the main story.",
    cta: "Back to CodigoYo",
  },
} as const;
