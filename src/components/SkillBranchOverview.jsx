import { Link } from 'react-router-dom'
import { getBranchProgress, getColorForTheme } from '../utils/characterUtils'
import styles from './SkillBranchOverview.module.css'

export default function SkillBranchOverview({ branch, index }) {
  const { total, completed, percent } = getBranchProgress(branch)
  const { primary } = getColorForTheme(branch.themeClass)

  return (
    <Link
      to={`/skills#${branch.id}`}
      className={styles.card}
      style={{ '--branch-color': primary, animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow orb behind icon */}
      <div className={styles.glowOrb} style={{ background: primary }} />

      <div className={styles.inner}>
        <div className={styles.iconRow}>
          <span className={styles.icon}>{branch.icon}</span>
          <div className={styles.progressCircle}>
            <svg viewBox="0 0 36 36" className={styles.svg}>
              <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                stroke={primary}
                strokeWidth="2"
                strokeDasharray={`${(percent / 100) * 94.2} 94.2`}
                strokeDashoffset="23.55"
                strokeLinecap="round"
                style={{ filter: `drop-shadow(0 0 4px ${primary})` }}
              />
            </svg>
            <span className={styles.circlePercent}>{percent}%</span>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.subtitle}>{branch.subtitle}</div>
          <h3 className={styles.title}>{branch.title}</h3>
          <p className={styles.description}>{branch.description}</p>
        </div>

        <div className={styles.footer}>
          <div className={styles.progressBar}>
            <div
              className={`${styles.progressFill} progress-fill ${branch.themeClass}`}
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className={styles.stats}>
            <span className={styles.statLabel}>{completed} / {total} skills</span>
            <span className={styles.viewLink}>Explore →</span>
          </div>
        </div>
      </div>

      {/* Corner runes */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />
    </Link>
  )
}
