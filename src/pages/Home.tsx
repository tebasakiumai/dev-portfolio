import ProjectsSection from '../components/ProjectsSection'
import NotesSection from '../components/NotesSection'

function Home() {
  return (
    <div>
      <section className="hero">
        <p className="mono" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
          $ whoami
        </p>
        <h1 style={{ fontSize: 'var(--fs-hero)', marginTop: '0.5rem' }}>
          Build Log
        </h1>
        <p style={{ color: 'var(--color-accent)', marginTop: '1rem' }}>
          ティール主体、ピンクはアクセント。これでOK?
        </p>
      </section>

      <ProjectsSection />
      <NotesSection />
    </div>
  )
}

export default Home