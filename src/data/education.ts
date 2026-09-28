import type { TimelineEntry } from "../types"

export const education: TimelineEntry[] = [
  {
    id: "btech-cse",
    order: 1,
    kind: "education",
    title: "Bachelor of Technology in Computer Science and Engineering",
    organization: "Jawaharlal Institute of Technology",
    location: "India",
    period: "2024",
    summary:
      "Undergraduate degree in computer science and engineering, the foundation for my work in software, data, and applied AI.",
    points: [],
    technologies: ["Computer Science"],
    mark: "JIT",
    logo: "/logos/jit.svg",
  },
  {
    id: "pg-diploma-cdac",
    order: 3,
    kind: "education",
    title: "PG Diploma in Big Data Analytics & AI",
    organization: "Centre for Development of Advanced Computing (C-DAC)",
    location: "Hyderabad, India",
    period: "2025",
    summary:
      "Postgraduate diploma focused on big data technologies, artificial intelligence, data processing, and analytics.",
    points: [
      "Studied big data technologies and data processing.",
      "Built on analytics and artificial intelligence fundamentals.",
    ],
    technologies: ["Big Data", "Artificial Intelligence", "Data Processing", "Analytics"],
    mark: "CD",
    logo: "/logos/cdac.svg",
  },
]
