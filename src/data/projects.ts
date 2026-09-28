import type { Project } from "../types"

/**
 * Add a project by copying an object into this array.
 * Set githubUrl or demoUrl only when the link is real.
 * The home page and the detail route both read this file.
 */
export const projects: Project[] = [
  {
    slug: "telehealth-operational-analytics",
    title: "Telehealth Operational Analytics & Pipeline",
    summary:
      "An analytics pipeline that ingests, cleans, and normalizes multi-source healthcare log datasets for operational reporting.",
    visual: "healthcare",
    technologies: ["Python", "PostgreSQL", "SQL", "Pandas"],
    highlights: [
      "Reduced data ingestion errors by 25%.",
      "Wrote SQL with CTEs, window functions, and aggregations.",
      "Analyzed system performance, patient wait times, and call-routing efficiency.",
      "Built Python-based reporting and dashboard workflows.",
    ],
    problem:
      "Operational healthcare logs arrived from more than one source, with inconsistent structure and quality. That made it difficult to trust comparisons of system performance, wait times, and call routing.",
    solution:
      "I built a pipeline that ingests those logs, cleans them, and normalizes them into a consistent shape that reporting queries can rely on.",
    implementation: [
      "Ingested multi-source healthcare log datasets and standardized fields before analysis.",
      "Used PostgreSQL and SQL — including CTEs, window functions, and aggregations — to shape operational metrics.",
      "Used Python and Pandas for cleaning, transformation, and reporting workflows.",
      "Reviewed system performance, patient wait times, and call-routing efficiency from the normalized data.",
    ],
    outcome:
      "The pipeline reduced data ingestion errors by 25% and gave the reporting workflow a cleaner base for operational questions.",
    status: "completed",
    badge: "Analytics pipeline",
  },
  {
    slug: "g-scheme-bot",
    title: "G-Scheme Bot",
    summary:
      "A web-based retrieval-augmented generation application for querying structured datasets in natural language.",
    visual: "rag",
    technologies: ["Python", "RAG", "Ollama", "Embeddings"],
    highlights: [
      "Implemented a document and data retrieval workflow.",
      "Used embeddings and retrieval to improve information discovery.",
      "Recorded a 30% improvement in retrieval accuracy in project testing.",
    ],
    problem:
      "Useful answers were sitting inside structured datasets, but finding them still depended on knowing how to query the data directly.",
    solution:
      "I built a web application that retrieves relevant context and uses a local language model so someone can ask in everyday language.",
    implementation: [
      "Set up a retrieval workflow over documents and structured data.",
      "Generated embeddings and used them to fetch the passages most relevant to a question.",
      "Connected retrieval to Ollama so answers stayed grounded in the retrieved material.",
      "Tested retrieval quality against the earlier baseline for the project.",
    ],
    outcome:
      "In project testing, retrieval accuracy improved by 30%. The result is from that test setting, not a production deployment claim.",
    status: "completed",
    badge: "RAG application",
  },
  {
    slug: "ecommerce-anomaly-detector",
    title: "E-Commerce Transaction & Revenue Anomaly Detector",
    summary:
      "A machine learning project for spotting unusual transaction patterns and revenue anomalies in e-commerce data.",
    visual: "commerce",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    highlights: [
      "Processed and analyzed transaction datasets.",
      "Explored patterns in revenue and customer transactions.",
      "Applied machine learning techniques to identify anomalous behavior.",
      "Presented findings through visualizations.",
    ],
    problem:
      "Transaction and revenue data can hide unusual behavior. Averages stay calm while a subset of records is doing something the business should notice.",
    solution:
      "I processed e-commerce transaction data, explored revenue and customer patterns, and applied machine learning methods to flag anomalous behavior.",
    implementation: [
      "Cleaned and analyzed transaction datasets with Python and Pandas.",
      "Explored revenue and customer-transaction patterns before modeling.",
      "Used Scikit-learn to identify records that did not fit the usual pattern.",
      "Presented the findings with visualizations that made the anomalies readable.",
    ],
    outcome:
      "The project produced a clearer view of unusual transaction and revenue behavior, communicated through the analysis and its visualizations.",
    status: "completed",
    badge: "Machine learning",
  },
  {
    slug: "pharmacy-refill-assistant",
    title: "AI-Powered Pharmacy Refill Assistant",
    summary:
      "Conversational workflow and prompt design for a pharmacy refill assistant, including verification and prescription lookup checkpoints.",
    visual: "voice",
    technologies: ["Vapi", "AI Agents", "Prompt Engineering", "Healthcare Workflows"],
    highlights: [
      "Designed structured voice interaction flows.",
      "Integrated patient verification and prescription lookup checkpoints.",
      "Worked with conversational prompts and tool-based workflows.",
      "Focused on natural conversation, accurate information collection, and reliable handoffs.",
    ],
    problem:
      "A pharmacy refill conversation has to feel natural and still collect the right details, verify the patient, and hand off cleanly when the workflow needs a person or another system.",
    solution:
      "I designed the conversational flow: prompts, checkpoints, and tool-based steps for verification and prescription lookup.",
    implementation: [
      "Mapped the voice interaction from greeting through verification, lookup, and handoff.",
      "Wrote prompts that keep the conversation specific without sounding mechanical.",
      "Placed patient verification and prescription lookup as explicit checkpoints.",
      "Used Vapi and agent-style tool workflows to structure those steps.",
    ],
    outcome:
      "The result is a designed conversational workflow aimed at accurate information collection and reliable handoffs.",
    status: "completed",
    badge: "Workflow design",
    disclaimer:
      "This is a workflow and prompt-engineering project. It is not presented as a fully deployed healthcare product.",
  },
  {
    slug: "ai-saas-concepts",
    title: "AI-Powered SaaS Product Concepts",
    summary:
      "Product concepts I am exploring at the intersection of software, operations, and applied AI. These are ideas and work in progress, not launched products.",
    visual: "saas",
    technologies: ["Product Design", "AI Automation", "Full-Stack Concepts"],
    highlights: [
      "Campus recruitment and placement management.",
      "AI-powered educational assistants.",
      "Property handover and lifecycle management.",
      "Gym business websites, and school management platforms.",
    ],
    problem:
      "A lot of operational software is still generic. I am interested in products that fit a specific workflow, then use AI only where it removes a real step.",
    solution:
      "I am shaping a set of SaaS concepts and using them to practice product thinking alongside full-stack and AI engineering.",
    implementation: [
      "Defining who each product is for and which workflow it should simplify.",
      "Sketching the core screens and data before treating AI as a feature.",
      "Noting where automation, assistants, or retrieval would actually help.",
    ],
    outcome:
      "These concepts are a working map of products I want to build. None of them are presented here as completed commercial software.",
    status: "concept",
    badge: "In progress",
    disclaimer:
      "Product concepts and work in progress. Not completed commercial products.",
    concepts: [
      {
        title: "Campus recruitment and placement portal",
        summary:
          "A portal concept for coordinating student profiles, company drives, and placement workflows on a campus.",
      },
      {
        title: "AI-powered educational assistants",
        summary:
          "Assistants that help learners find course material and practice, grounded in the content they are actually studying.",
      },
      {
        title: "Real estate handover and property lifecycle",
        summary:
          "A concept for tracking a property from handover through the operational life of the asset.",
      },
      {
        title: "Gym business websites",
        summary:
          "Practical sites for independent gyms, including schedules, programs, and membership information.",
      },
      {
        title: "School management and ERP platforms",
        summary:
          "Longer-term interest in software that helps a school run daily academic and administrative work.",
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  }
}
