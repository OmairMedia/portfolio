export interface PortfolioMetric {
  value: string
  label: string
  detail: string
}

export interface ProfileInfo {
  fullName: string
  role: string
  location: string
  phone: string
  email: string
  githubUrl: string
  summary: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface TimelineItem {
  period: string
  role: string
  context: string
  highlights: string[]
}

export interface EducationItem {
  title: string
  institution: string
  period: string
}

export interface LanguageItem {
  name: string
  proficiency: string
}

export interface MarketProfile {
  market: string
  headline: string
  points: string[]
}

export interface ProjectCaseStudy {
  slug: string
  title: string
  summary: string
  role: string
  stack: string[]
  problem: string
  approach: string
  outcomes: string[]
  highlights: string[]
  repoUrl?: string
  liveUrl?: string
}
