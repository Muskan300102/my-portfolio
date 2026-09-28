import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { ProjectDetails } from "./pages/ProjectDetails"
import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const node = document.getElementById(hash.slice(1))
      if (node) {
        node.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
