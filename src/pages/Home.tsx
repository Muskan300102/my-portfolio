import { About } from "../components/About"
import { Achievements } from "../components/Achievements"
import { CareerTimeline } from "../components/CareerTimeline"
import { Contact } from "../components/Contact"
import { Hero } from "../components/Hero"
import { LearningLab } from "../components/LearningLab"
import { Projects } from "../components/Projects"
import { SiteShell } from "../components/SiteShell"
import { Skills } from "../components/Skills"
import { usePageMeta } from "../hooks/usePageMeta"

export function Home() {
  usePageMeta(
    "Muskan Raghuvanshi — Software Engineer",
    "Muskan Raghuvanshi is a software engineer in Indore, India, working across software development, data analytics, and artificial intelligence.",
  )

  return (
    <SiteShell>
      <Hero />
      <About />
      <CareerTimeline />
      <Skills />
      <Projects />
      <LearningLab />
      <Achievements />
      <Contact />
    </SiteShell>
  )
}
