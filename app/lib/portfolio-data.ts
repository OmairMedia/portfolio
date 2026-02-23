import type {
  EducationItem,
  LanguageItem,
  MarketProfile,
  PortfolioMetric,
  ProfileInfo,
  SkillGroup,
  TimelineItem,
} from '@/types/portfolio'

export const profileInfo: ProfileInfo = {
  fullName: 'M. Omair Sohail',
  role: 'Frontend Developer',
  location: 'Karachi, Pakistan',
  phone: '03243280234',
  email: 'omairmedia2020@gmail.com',
  githubUrl: 'https://github.com/OmairMedia',
  summary:
    'Frontend developer with 3+ years of experience building scalable Vue.js and Nuxt.js applications with clean architecture, responsive UI, and performance-focused implementation.',
}

export const portfolioMetrics: PortfolioMetric[] = [
  {
    value: '3+ Years',
    label: 'Frontend Experience',
    detail: 'Professional experience delivering Vue.js and Nuxt.js products.',
  },
  {
    value: '3 Companies',
    label: 'Production Teams',
    detail: 'Worked across Stabilityy, Yaseo, and 4Slash in cross-functional teams.',
  },
  {
    value: '4 Core Projects',
    label: 'Case Studies',
    detail: 'Portfolio includes project management, healthcare, logistics, and CRM apps.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Technologies',
    items: ['Vue.js', 'Nuxt.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend and Tools',
    items: ['Node.js', 'Express.js', 'Firebase', 'REST APIs'],
  },
  {
    title: 'Delivery and Workflow',
    items: ['Git', 'GitHub', 'Responsive Design', 'UI/UX implementation', 'Agile development'],
  },
]

export const timeline: TimelineItem[] = [
  {
    period: 'Nov 2023 - Present',
    role: 'Frontend Developer',
    context: 'Stabilityy',
    highlights: [
      'Delivered production Vue.js and Nuxt.js modules for core business workflows.',
      'Built reusable UI components that reduced repeated implementation effort across screens.',
      'Integrated frontend modules with backend services in a cross-functional agile setup.',
    ],
  },
  {
    period: 'Nov 2022 - Nov 2023',
    role: 'Frontend Developer',
    context: 'Yaseo',
    highlights: [
      'Designed responsive interfaces using Vue.js and Tailwind CSS for customer-facing pages.',
      'Improved performance and SEO quality across high-traffic routes.',
      'Integrated REST APIs to power dynamic, interactive product experiences.',
    ],
  },
  {
    period: 'Nov 2020 - Nov 2022',
    role: 'Frontend Developer',
    context: '4Slash',
    highlights: [
      'Built responsive web applications with maintainable frontend architecture patterns.',
      'Ensured cross-browser compatibility and reliable UI behavior in production.',
      'Resolved frontend bugs and improved rendering performance for shipped features.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    title: 'Diploma',
    institution: 'Aptech Computer Education, Karachi',
    period: '2014 - 2016',
  },
  {
    title: 'Intermediate',
    institution: 'Bahria College Karsaz, Karachi',
    period: '2014 - 2016',
  },
  {
    title: 'Matriculation',
    institution: 'Army Public School, Karachi',
    period: '2003 - 2014',
  },
]

export const languages: LanguageItem[] = [
  {
    name: 'English',
    proficiency: 'Fluent',
  },
  {
    name: 'Urdu',
    proficiency: 'Native',
  },
]

export const marketProfiles: MarketProfile[] = [
  {
    market: 'UAE / Gulf Recruiters',
    headline: 'Reliable frontend delivery for fast-moving business products.',
    points: [
      'Hands-on Vue.js and Nuxt.js implementation across real production use cases.',
      'Strong focus on responsive UI quality, speed, and cross-team collaboration.',
      'Comfortable with both onsite collaboration and remote execution.',
    ],
  },
  {
    market: 'EU / Remote Product Teams',
    headline: 'Maintainable architecture and clear technical communication.',
    points: [
      'Type-safe frontend development with reusable components and clean structure.',
      'Performance and accessibility mindset for long-term product quality.',
      'Async-friendly communication and documentation habits for distributed teams.',
    ],
  },
  {
    market: 'US Startup Frontend Roles',
    headline: 'Pragmatic builder who ships quickly without sacrificing code quality.',
    points: [
      'Comfortable owning features from UI design handoff to production delivery.',
      'Experienced with rapid iteration, API integration, and product-driven tradeoffs.',
      'Focus on measurable impact, fast feedback loops, and maintainable scaling.',
    ],
  },
]
