import type { LearningTopic } from "../types"

/**
 * Update `status` by hand: "Started" | "Practicing" | "Applying".
 * Leave `progress` as null unless you want to publish a percentage you chose yourself.
 * Add a `repository` URL when a public learning repo exists.
 */
export const learningTopics: LearningTopic[] = [
  {
    id: "python",
    title: "Advanced Python and problem-solving",
    detail: "Going deeper on the language and the kind of problems that show up in data and backend work.",
    status: "Practicing",
    progress: null,
  },
  {
    id: "fullstack",
    title: "Full-stack development",
    detail: "Building the interface, the API, and the data layer as one product instead of separate exercises.",
    status: "Started",
    progress: null,
  },
  {
    id: "ai-engineering",
    title: "AI engineering",
    detail: "How models, retrieval, evaluation, and application code fit into a system people can rely on.",
    status: "Practicing",
    progress: null,
  },
  {
    id: "generative-ai",
    title: "Generative AI and LLM applications",
    detail: "Designing applications around large language models, with attention to grounding and useful outputs.",
    status: "Practicing",
    progress: null,
  },
  {
    id: "sql",
    title: "Advanced SQL",
    detail: "Sharpening queries, window functions, and the modeling habits behind trustworthy reporting.",
    status: "Practicing",
    progress: null,
  },
  {
    id: "cloud",
    title: "Cloud technologies",
    detail: "Learning how to deploy, observe, and operate the systems I build beyond a local machine.",
    status: "Started",
    progress: null,
  },
  {
    id: "architecture",
    title: "Software architecture",
    detail: "Studying how to structure a system so it stays understandable as features and data grow.",
    status: "Started",
    progress: null,
  },
  {
    id: "saas",
    title: "AI-powered SaaS development",
    detail: "Turning product ideas into software with a clear workflow, and AI only where it earns its place.",
    status: "Started",
    progress: null,
  },
]

export const learningStages = ["Started", "Practicing", "Applying"] as const
