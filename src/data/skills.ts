import type { SkillGroup, SkillLevel } from "../types"

/**
 * Levels:
 * - core: used regularly in professional work or shipped project work
 * - working: studied or applied, and something I can work with
 * - exploring: actively learning, not a claimed strength yet
 *
 * Move a skill between levels as your practice changes. Do not add percentages.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming languages",
    summary: "Languages I write in, from daily Python and SQL to Java and JavaScript.",
    skills: [
      { name: "Python", level: "core" },
      { name: "SQL", level: "core" },
      { name: "Java", level: "working" },
      { name: "JavaScript", level: "working" },
    ],
  },
  {
    id: "ai",
    title: "AI, machine learning & generative AI",
    summary: "Models, retrieval, and the workflow around useful AI systems.",
    skills: [
      { name: "Artificial Intelligence", level: "working" },
      { name: "Machine Learning", level: "working" },
      { name: "Generative AI", level: "working" },
      { name: "Large Language Models", level: "working" },
      { name: "Prompt Engineering", level: "working" },
      { name: "Model Evaluation", level: "working" },
      { name: "Feature Engineering", level: "working" },
      { name: "Retrieval-Augmented Generation", level: "working" },
      { name: "Embeddings", level: "working" },
      { name: "Multi-Agent Systems", level: "exploring" },
      { name: "AI Workflow Automation", level: "working" },
    ],
  },
  {
    id: "analytics",
    title: "Data analytics & processing",
    summary: "The practical work of turning raw data into something a team can use.",
    skills: [
      { name: "Pandas", level: "core" },
      { name: "NumPy", level: "working" },
      { name: "Scikit-learn", level: "working" },
      { name: "Exploratory Data Analysis", level: "core" },
      { name: "ETL Pipelines", level: "core" },
      { name: "Data Cleaning", level: "core" },
      { name: "Data Normalization", level: "core" },
      { name: "Data Visualization", level: "working" },
      { name: "KPI Reporting", level: "working" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    summary: "Relational and document stores I have worked with or studied.",
    skills: [
      { name: "PostgreSQL", level: "working" },
      { name: "MySQL", level: "working" },
      { name: "MongoDB", level: "working" },
    ],
  },
  {
    id: "big-data",
    title: "Big data",
    summary: "Platforms from my postgraduate focus on large-scale data processing.",
    skills: [
      { name: "Hadoop", level: "working" },
      { name: "Apache Spark", level: "working" },
      { name: "Hive", level: "working" },
    ],
  },
  {
    id: "tools",
    title: "Development & tools",
    summary: "Version control, APIs, containers, and the AI tools I use while building.",
    skills: [
      { name: "Git", level: "core" },
      { name: "GitHub", level: "core" },
      { name: "Docker", level: "working" },
      { name: "Cursor AI", level: "working" },
      { name: "ChatGPT", level: "working" },
      { name: "GitHub Copilot", level: "working" },
      { name: "REST APIs", level: "working" },
      { name: "JSON", level: "working" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & platforms",
    summary: "Cloud tools I have used, plus platforms I am still getting to know.",
    skills: [
      { name: "AWS QuickSight", level: "working" },
      { name: "Azure", level: "working" },
      { name: "Google Cloud Platform", level: "exploring" },
    ],
  },
  {
    id: "platforms",
    title: "AI platforms & frameworks",
    summary: "Tools behind retrieval apps, local models, and conversational workflows.",
    skills: [
      { name: "Vapi", level: "working" },
      { name: "Ollama", level: "working" },
      { name: "RAG Applications", level: "working" },
      { name: "AI Agents", level: "working" },
    ],
  },
]

export const skillLevelMeta: Record<
  SkillLevel,
  { label: string; description: string }
> = {
  core: {
    label: "Core skill",
    description: "Used regularly in my work and projects.",
  },
  working: {
    label: "Working knowledge",
    description: "Studied or applied, and something I can work with.",
  },
  exploring: {
    label: "Currently exploring",
    description: "An area I am learning and not treating as a strength yet.",
  },
}
