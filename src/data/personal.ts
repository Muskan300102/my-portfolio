/**
 * Site-wide profile details.
 * Update the email, resume, photo, and site URL here — components read this file.
 */

import { publicUrl } from "../utils/publicUrl"

export const personal = {
  name: "Muskan Raghuvanshi",
  firstName: "Muskan",
  lastName: "Raghuvanshi",
  location: "Indore, Madhya Pradesh, India",
  shortLocation: "Indore, India",
  coordinates: "22.72° N · 75.86° E",
  /**
   * Add your email before sharing the site, for example "muskan@example.com".
   * Leave this empty and the contact section will point people to LinkedIn and GitHub.
   */
  email: "",
  /**
   * Set this after deployment, for example "https://your-domain.com".
   * Used for canonical and Open Graph URLs when present.
   */
  siteUrl: "",
  resumeUrl: publicUrl("/resume.pdf"),
  /** Portrait used in the hero. Swap the file in public/images if you update the photo. */
  profileImage: publicUrl("/images/profile.jpg"),
  profileAlt: "Portrait of Muskan Raghuvanshi",
  linkedin: "https://www.linkedin.com/in/muskan-raghuvanshi-47272127a/",
  github: "https://github.com/Muskan300102",
  roles: ["Software Engineer", "AI/ML Enthusiast", "Data Analytics Practitioner"],
  identities: [
    "Software Engineer",
    "AI/ML Enthusiast",
    "Data Analytics Practitioner",
    "Full-Stack Developer",
    "Generative AI Explorer",
  ],
  headline: "Building intelligent solutions through code, data & AI.",
  heroIntro:
    "I'm Muskan Raghuvanshi, a software engineer passionate about building intelligent applications, exploring Generative AI, transforming data into meaningful insights, and creating technology that solves real-world problems.",
}

export const about = {
  paragraphs: [
    "I am a computer science graduate with a postgraduate diploma in Big Data Analytics and AI. My professional journey has exposed me to software engineering, data analytics, healthcare technology, workflow automation, and AI-powered applications.",
    "I enjoy understanding how systems work, solving technical problems, building efficient data pipelines, and experimenting with AI tools to improve development workflows.",
  ],
  philosophy:
    "Understand the system, respect the data, and build the simplest thing that makes the next decision clearer.",
  interests: [
    "Artificial Intelligence and Machine Learning",
    "Generative AI and Large Language Models",
    "Full-Stack Web Development",
    "Data Engineering and Analytics",
    "Intelligent Automation",
    "Software Architecture",
    "Real-world SaaS product development",
  ],
  highlights: [
    {
      label: "Education",
      value: "B.Tech, Computer Science",
      detail: "Jawaharlal Institute of Technology, 2024",
    },
    {
      label: "Specialization",
      value: "Big Data Analytics & AI",
      detail: "C-DAC Hyderabad, 2025",
    },
    {
      label: "Currently",
      value: "Junior Software Engineer",
      detail: "Savoka System Pvt. Ltd.",
    },
  ],
}
