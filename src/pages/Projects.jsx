import { projects } from '../data/projects'
import styles from './Projects.module.css'

const STATUS_CONFIG = {
  active:    { label: 'Active',    class: 'badge-green' },
  completed: { label: 'Completed', class: 'badge-gold'  },
  archived:  { label: 'Archived',  class: 'badge-purple' },
}

function ProjectCard({ project, index }) {
  const status = STATUS_CONFIG[project.status] || STATUS_CONFIG.completed

  return (
    <article
      className={`${styles.card} card card-ornate ${project.highlight ? styles.highlight : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {project.highlight && <div className={styles.highlightBadge}>⭐ Featured</div>}

      <div className={styles.cardTop}>
        <div className={styles.titleRow}>
          <div>
            <div className={styles.subtitle}>{project.subtitle}</div>
            <h2 className={styles.title}>{project.title}</h2>
          </div>
          <span className={`badge ${status.class}`}>{status.label}</span>
        </div>
        <p className={styles.description}>{project.description}</p>
      </div>

      {/* Tech stack */}
      <div className={styles.techList}>
        {project.tech.map(t => (
          <span key={t} className={styles.techTag}>{t}</span>
        ))}
      </div>

      <div className="divider-sm" />

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className={styles.highlights}>
          <div className={styles.sectionLabel}>✦ What was built</div>
          <ul className={styles.bulletList}>
            {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      )}

      {/* Learnings */}
      {project.learnings && project.learnings.length > 0 && (
        <div className={styles.learnings}>
          <div className={styles.sectionLabel}>📜 What was learned</div>
          <ul className={styles.bulletList}>
            {project.learnings.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className={styles.links}>
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="resource-link">
            ⚙️ GitHub
          </a>
        )}
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="resource-link">
            ✦ Live Site
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className="page-header">
        <p className="eyebrow">Great Deeds</p>
        <h1>Legendary Works</h1>
      </div>

      <p className={styles.intro}>
        Every project is a battle won — a proof of concept forged in the fires of real constraints.
        Not tutorials. Not clones. Things that required making real decisions under pressure.
      </p>

      {projects.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🏰</div>
          <h3 className={styles.emptyTitle}>The Hall of Deeds Awaits</h3>
          <p className={styles.emptyMsg}>
            Add your projects in <code>src/data/projects.js</code>
          </p>
        </div>
      ) : (
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
