import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

interface Props {
  project: Project
}

function ProjectCard({ project }: Props) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <span className={`status-badge status-${project.status}`}>
          {project.status === 'done' ? 'done' : 'wip'}
        </span>
      </div>

      <p className="project-card-desc">{project.description}</p>

      <ul className="project-card-tech">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </Link>
  )
}

export default ProjectCard