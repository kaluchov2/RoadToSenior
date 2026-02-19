import { useState } from 'react'
import { getCategoryProgress, getColorForTheme } from '../utils/characterUtils'
import styles from './SkillBranchDetail.module.css'

function SkillItem({ skill, themeClass }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`${styles.skillItem} ${skill.completed ? styles.done : ''}`}>
      <div className={styles.skillHeader} onClick={() => setExpanded(e => !e)}>
        <div className={`skill-checkbox ${skill.completed ? 'done' : ''}`}>
          {skill.completed ? '✓' : ''}
        </div>
        <span className={styles.skillTitle}>{skill.title}</span>
        <span className={styles.skillXp}>+{skill.xp} XP</span>
        <span className={styles.expandIcon}>{expanded ? '▲' : '▼'}</span>
      </div>

      {expanded && (
        <div className={styles.skillBody}>
          <p className={styles.skillDesc}>{skill.description}</p>

          {skill.notes && (
            <div className={styles.notes}>
              <span className={styles.notesLabel}>📝 Notes</span>
              <p>{skill.notes}</p>
            </div>
          )}

          {skill.resources && skill.resources.length > 0 && (
            <div className={styles.resources}>
              <span className={styles.resourcesLabel}>📚 Resources</span>
              <div className={styles.resourceLinks}>
                {skill.resources.map((r, i) => (
                  <a
                    key={i}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    {r.type === 'github' ? '⚙️' :
                     r.type === 'video'  ? '▶' :
                     r.type === 'docs'   ? '📖' :
                     r.type === 'course' ? '🎓' : '✦'}
                    {r.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function CategorySection({ category, themeClass, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const { total, completed, percent } = getCategoryProgress(category)
  const { primary } = getColorForTheme(themeClass)

  return (
    <div className={styles.category}>
      <button className={styles.categoryHeader} onClick={() => setOpen(o => !o)}>
        <span className={styles.catIcon}>{category.icon}</span>
        <div className={styles.catTitles}>
          <span className={styles.catTitle}>{category.title}</span>
          <span className={styles.catDesc}>{category.description}</span>
        </div>
        <div className={styles.catMeta}>
          <span className={styles.catProgress} style={{ color: primary }}>
            {completed}/{total}
          </span>
          <div className={styles.catMiniBar}>
            <div
              className={`${styles.catMiniFill} progress-fill ${themeClass}`}
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
        <span className={styles.catChevron}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className={styles.skillsList}>
          {category.skills.length === 0 ? (
            <p className={styles.emptyMsg}>No skills yet — add some in src/data/skills.js</p>
          ) : (
            category.skills.map(skill => (
              <SkillItem key={skill.id} skill={skill} themeClass={themeClass} />
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default function SkillBranchDetail({ branch }) {
  const { primary } = getColorForTheme(branch.themeClass)

  return (
    <div id={branch.id} className={styles.branch}>
      {/* Branch header */}
      <div className={styles.branchHeader} style={{ '--branch-color': primary }}>
        <div className={styles.branchIconWrap}>
          <span className={styles.branchIcon}>{branch.icon}</span>
        </div>
        <div className={styles.branchTitles}>
          <div className={styles.branchSubtitle}>{branch.subtitle}</div>
          <h2 className={styles.branchTitle}>{branch.title}</h2>
          <p className={styles.branchDesc}>{branch.description}</p>
        </div>
      </div>

      {/* Categories */}
      <div className={styles.categories}>
        {branch.categories.map((cat, i) => (
          <CategorySection
            key={cat.id}
            category={cat}
            themeClass={branch.themeClass}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </div>
  )
}
