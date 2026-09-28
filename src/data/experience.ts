import type { TimelineEntry } from "../types"
import { publicUrl } from "../utils/publicUrl"

export const experience: TimelineEntry[] = [
  {
    id: "pie-infotech",
    order: 2,
    kind: "experience",
    title: "Data Analyst",
    organization: "Pie Infotech Pvt. Ltd.",
    location: "Lucknow, India",
    period: "June 2024 – January 2025",
    summary:
      "Analyzed structured datasets, supported ETL work, and used Python to take repetitive reporting off manual effort.",
    points: [
      "Performed exploratory data analysis to identify patterns and meaningful insights.",
      "Supported ETL processes involving data extraction, cleaning, and transformation.",
      "Used Python to automate reporting workflows and reduce repetitive manual tasks.",
      "Worked with structured datasets to support data-driven decision-making.",
    ],
    technologies: ["Python", "ETL", "Exploratory Data Analysis", "Reporting"],
    mark: "PI",
    logo: publicUrl("/logos/pie.svg"),
  },
  {
    id: "spinsci",
    order: 4,
    kind: "experience",
    title: "Trainee Software Engineer",
    organization: "SpinSci Health-Tech",
    location: "Hyderabad, India",
    period: "November 2025 – May 2026",
    summary:
      "Worked with healthcare technology workflows, operational logs, and the documentation that keeps integrations consistent.",
    points: [
      "Analyzed system interaction data streams and operational logs to identify data anomalies and performance bottlenecks.",
      "Structured workflow rules and data normalization processes to improve consistency across system integrations.",
      "Created technical documentation and knowledge-sharing resources for internal operational reporting.",
      "Gained exposure to healthcare technology workflows and enterprise software environments.",
    ],
    technologies: ["Data Analysis", "SQL", "Workflow Rules", "Technical Documentation"],
    mark: "SS",
    logo: publicUrl("/logos/spinsci.svg"),
  },
  {
    id: "savoka",
    order: 5,
    kind: "experience",
    title: "Junior Software Engineer",
    organization: "Savoka System Pvt. Ltd.",
    location: "Greater Noida, Uttar Pradesh (Remote)",
    period: "July 2026 – Present",
    current: true,
    summary:
      "My current role. Responsibilities and project details will be added here as the work develops.",
    points: [],
    technologies: [],
    mark: "SV",
    logo: publicUrl("/logos/savoka.svg"),
  },
]

export function getCurrentRole() {
  return experience.find((item) => item.current)
}
