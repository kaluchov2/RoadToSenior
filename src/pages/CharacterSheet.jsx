import CharacterCard from '../components/CharacterCard'
import { skillBranches } from '../data/skills'
import { projects } from '../data/projects'
import { character } from '../data/character'
import { getBranchProgress, calculateTotalXP, getLevelProgress } from '../utils/characterUtils'
import styles from './CharacterSheet.module.css'

// Auto-generated resume-style page from your skill data
export default function CharacterSheet() {
  const xp = calculateTotalXP()
  const { current } = getLevelProgress(xp)

  return (
    <div className={styles.page}>
      <div className="page-header">
        <p className="eyebrow">Official Record</p>
        <h1>Character Sheet</h1>
      </div>

      <p className={styles.intro}>
        Auto-generated from skill data. Updates automatically as you complete skills.
        Print this page or share the URL as a living resume.
      </p>

      <div className={styles.layout}>
        {/* ── Left column ── */}
        <aside className={styles.sidebar}>
          <CharacterCard />

          <div className={styles.sideSection}>
            <div className="section-title" style={{ marginBottom: '0.75rem' }}>Contact</div>
            <div className={styles.contactList}>
              {character.links.github && (
                <a href={character.links.github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  ⚙️ GitHub
                </a>
              )}
              {character.links.linkedin && (
                <a href={character.links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  🔗 LinkedIn
                </a>
              )}
              {character.links.email && (
                <a href={`mailto:${character.links.email}`} className={styles.contactLink}>
                  ✉️ {character.links.email}
                </a>
              )}
            </div>
          </div>
        </aside>

        {/* ── Right column ── */}
        <main className={styles.main}>

          {/* Bio */}
          <section className={styles.section}>
            <div className="section-title">Background</div>
            <p className={styles.bio}>{character.bio}</p>
          </section>

          {/* Skill domains progress */}
          <section className={styles.section}>
            <div className="section-title">Skill Domains</div>
            <div className={styles.domainList}>
              {skillBranches.map(branch => {
                const { completed, total, percent } = getBranchProgress(branch)
                return (
                  <div key={branch.id} className={styles.domainRow}>
                    <div className={styles.domainHeader}>
                      <span className={styles.domainIcon}>{branch.icon}</span>
                      <div className={styles.domainInfo}>
                        <span className={styles.domainName}>{branch.title}</span>
                        <span className={styles.domainSub}>{branch.subtitle}</span>
                      </div>
                      <span className={styles.domainPct}>{percent}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${branch.themeClass}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className={styles.domainSkillCount}>{completed} / {total} skills</div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Completed skills per branch */}
          {skillBranches.map(branch => {
            const completedSkills = branch.categories.flatMap(cat =>
              cat.skills.filter(s => s.completed).map(s => ({ ...s, category: cat.title }))
            )
            if (completedSkills.length === 0) return null
            return (
              <section key={branch.id} className={styles.section}>
                <div className="section-title">{branch.icon} {branch.title} — Mastered</div>
                <div className={styles.skillGrid}>
                  {completedSkills.map(skill => (
                    <div key={skill.id} className={styles.skillChip}>
                      <span className={styles.skillChipCheck}>✓</span>
                      <span className={styles.skillChipName}>{skill.title}</span>
                      <span className={styles.skillChipCat}>{skill.category}</span>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}

          {/* Projects */}
          {projects.length > 0 && (
            <section className={styles.section}>
              <div className="section-title">Legendary Works</div>
              <div className={styles.projectList}>
                {projects.map(project => (
                  <div key={project.id} className={styles.projectItem}>
                    <div className={styles.projectHeader}>
                      <div>
                        <span className={styles.projectName}>{project.title}</span>
                        <span className={styles.projectStatus}>— {project.status}</span>
                      </div>
                      <div className={styles.projectTech}>
                        {project.tech.map(t => (
                          <span key={t} className={styles.techTag}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <p className={styles.projectDesc}>{project.description}</p>
                    <div className={styles.projectLinks}>
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="resource-link">
                          ⚙️ GitHub
                        </a>
                      )}
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="resource-link">
                          ✦ Live
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}
