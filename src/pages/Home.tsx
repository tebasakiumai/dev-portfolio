import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'

function Home() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <div>
      <section className="hero">
        <h1 style={{ fontSize: 'var(--fs-hero)', marginTop: '0.5rem' }}>
          Build Log
        </h1>
      </section>

      <ProjectsSection />
      <AboutSection />
    </div>
  )
}

export default Home