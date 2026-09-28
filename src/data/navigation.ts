export const navigation = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "learning", label: "Learning" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
] as const

export const sectionIds = navigation.map((item) => item.id)
