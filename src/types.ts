export type TimelineKind = "education" | "experience"

export type TimelineEntry = {
  id: string
  order: number
  kind: TimelineKind
  title: string
  organization: string
  location: string
  period: string
  current?: boolean
  summary: string
  points: string[]
  technologies: string[]
  mark: string
  /** Optional image in /public, for example "/logos/spinsci.svg". */
  logo?: string
}

export type SkillLevel = "core" | "working" | "exploring"

export type Skill = {
  name: string
  level: SkillLevel
}

export type SkillGroup = {
  id: string
  title: string
  summary: string
  skills: Skill[]
}

export type ProjectStatus = "completed" | "concept" | "in-progress"

export type ProjectVisual = "healthcare" | "rag" | "commerce" | "voice" | "saas"

export type ProjectConcept = {
  title: string
  summary: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  visual: ProjectVisual
  technologies: string[]
  highlights: string[]
  problem: string
  solution: string
  implementation: string[]
  outcome: string
  status: ProjectStatus
  badge: string
  /** Public repository. Leave unset until the link is real. */
  githubUrl?: string
  /** Deployed demo. Leave unset until the link is real. */
  demoUrl?: string
  concepts?: ProjectConcept[]
  disclaimer?: string
}

export type LearningStatus = "Started" | "Practicing" | "Applying"

export type LearningTopic = {
  id: string
  title: string
  detail: string
  status: LearningStatus
  /**
   * Optional 0–100 marker you set yourself.
   * Leave null to show only the status label.
   */
  progress: number | null
  /** Public learning repository. Leave empty until you publish one. */
  repository?: string
}

export type Achievement = {
  id: string
  title: string
  detail: string
  year?: string
}
