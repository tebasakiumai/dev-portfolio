import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="detail-page">
        <p className="mono section-eyebrow">$ cat ./projects/{id}</p>
        <h1>見つかりませんでした</h1>
        <p className="note-body">指定された制作物は存在しません。</p>
        <Link to="/" className="back-link">
          ← トップに戻る
        </Link>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">
        ← トップに戻る
      </Link>

      <p className="mono section-eyebrow" style={{ marginTop: 'var(--space-md)' }}>
        $ cat ./projects/{project.id}
      </p>

      <div className="detail-header">
        <h1>{project.title}</h1>
        <span className={`status-badge status-${project.status}`}>
          {project.status}
        </span>
      </div>

      <p className="note-body" style={{ fontSize: 'var(--fs-body)', margin: 'var(--space-sm) 0' }}>
        {project.description}
      </p>

      <ul className="project-card-tech" style={{ marginBottom: 'var(--space-md)' }}>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="project-card-links">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub →
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail