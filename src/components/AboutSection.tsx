import { profile } from '../data/profile'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <p className="mono section-eyebrow">$ cat ./about.md</p>
      <h2>About</h2>

      <div className="about-body">
        <div className="about-bio">
          <h3>{profile.name}</h3>
          <p className="about-role mono">{profile.role}</p>

          {profile.bio.map((paragraph, i) => (
            <p key={i} className="about-paragraph">
              {paragraph}
            </p>
          ))}

          <div className="about-links">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub →
            </a>
            <a href={`mailto:${profile.email}`}>Mail →</a>
          </div>
        </div>

        <div className="about-skills">
          {profile.skills.map((group) => (
            <div key={group.category} className="skill-group">
              <p className="skill-category mono">{group.category}</p>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection