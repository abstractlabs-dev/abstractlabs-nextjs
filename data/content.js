// data/content.js — all site copy in one place

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Process', href: '/process' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blogs', href: '/blogs' },
];

export const solutions = [
  {
    id: 'web',
    icon: '◈',
    title: 'Web Platforms',
    subtitle: 'High-performance websites and modern web applications.',
    description:
      'We design and build fast, scalable websites and web applications that help companies communicate their brand, showcase products, and engage customers online.',
    technologies: ['WordPress', 'React', 'Custom CSS', 'Modern frontend frameworks'],
    useCases: [
      'Product showcase websites',
      'Corporate websites',
      'Marketing platforms',
      'Tool-based web applications',
    ],
  },
  {
    id: 'ai',
    icon: '⬡',
    title: 'AI & Custom Technology Solutions',
    subtitle: 'Intelligent systems built for real-world problems.',
    description:
      'Abstract Labs develops custom AI systems and automation tools designed to process data, detect patterns, and make intelligent decisions at scale.',
    technologies: ['Python', 'Machine Learning', 'AI models', 'Data analytics systems'],
    useCases: [
      'Automation systems',
      'Trading engines',
      'Data analytics platforms',
      'AI-powered tools',
    ],
  },
];

export const webProjects = [
  {
    name: 'Blueprint 3D Studios',
    description:
      'Product showcase website for an architectural visualization studio working across Canada and the United States. Presents architectural renders, project portfolios, and studio capabilities with a focus on visual clarity and project storytelling.',
    tech: ['WordPress', 'Custom CSS'],
    url: 'https://www.blueprint3dstudios.com/',
  },
  {
    name: 'Prime Consultancy Services',
    description:
      'Corporate product showcase website for an infrastructure and chemical solutions company. Communicates certifications, services, manufacturing capabilities, and client trust indicators.',
    tech: ['WordPress', 'Custom CSS'],
    url: 'https://pcs.org.in/',
  },
  {
    name: 'Star Porselano',
    description:
      'Product showcase website for a tile manufacturing brand inspired by Italian design. Highlights tile collections, product catalogs, and design inspiration for architects and designers worldwide.',
    tech: ['React', 'Custom CSS'],
    url: 'https://starporselano.com/',
  },
  {
    name: 'AmarKrupa Exims LLP',
    description:
      'Corporate website for a global baby-care products manufacturer focused on premium diapers. Communicates product quality, manufacturing capabilities, and brand vision.',
    tech: ['React', 'Custom CSS'],
    url: 'https://amar-krupa-exims.vercel.app/',
  },
  {
    name: 'Medical Report Analyzer',
    description:
      'A web-based tool that allows users to upload medical reports and receive simplified explanations and insights. Converts complex medical data into understandable information for users.',
    tech: ['React', 'Custom CSS'],
    url: 'https://medical-report-analyzer-u939.onrender.com/',
  },
];

export const aiProjects = [
  {
    name: 'Advanced High-Frequency Trading System',
    description:
      'An automated trading engine designed to execute trades in real-time using intelligent algorithms. Continuously monitors market conditions, analyzes volatility, and executes optimized trade entries faster than manual traders.',
    capabilities: [
      'Real-time market scanning',
      'Automated order execution',
      'Risk management logic',
      'Continuous trading operation',
    ],
    tech: ['Python', 'AI models', 'Algorithmic trading systems'],
  },
  {
    name: 'DeepReach SaaS Platform',
    description:
      'A data intelligence platform designed to identify growth signals from social media at scale. Analyzes thousands of social media accounts, engagement patterns, and content performance metrics to detect emerging trends.',
    capabilities: [
      'Large-scale social media analysis',
      'Trend detection algorithms',
      'Engagement pattern analysis',
      'Real-time analytics dashboard',
    ],
    tech: ['Python', 'AI analytics systems', 'Data processing pipelines'],
  },
];

export const techStack = [
  {
    category: 'AI & Data',
    color: '#4f8ef7',
    items: ['Python', 'Machine Learning', 'AI Systems', 'Data Analytics'],
  },
  {
    category: 'Web',
    color: '#22c55e',
    items: ['React', 'WordPress', 'JavaScript', 'CSS'],
  },
  {
    category: 'Infrastructure',
    color: '#a855f7',
    items: ['Cloud Platforms', 'Modern Deployment', 'CI/CD', 'Scalable Systems'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Research',
    description:
      'We deeply understand your business, users, and the competitive landscape through stakeholder interviews, user research, and market analysis.',
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'We map out the technical architecture, design systems, and product structure — making sure every decision is built on a solid, scalable foundation.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Our engineers build your product with clean, tested, production-ready code. We prioritise speed without sacrificing maintainability.',
  },
  {
    number: '04',
    title: 'Deployment',
    description:
      "We ship with CI/CD pipelines, monitoring, and zero-downtime releases — so your product lands in users' hands without disruption.",
  },
  {
    number: '05',
    title: 'Optimization',
    description:
      'Post-launch, we support, iterate, and optimize based on real user data — making your product smarter with every release.',
  },
];
