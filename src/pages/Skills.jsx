import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SkillBranchOverview from '../components/SkillBranchOverview'
import SkillBranchDetail from '../components/SkillBranchDetail'
import { skillBranches } from '../data/skills'
import { getOverallProgress, getBranchProgress } from '../utils/characterUtils'
import styles from './Skills.module.css'

export default function Skills() {
  const location = useLocation()
  const overall = getOverallProgress()

  // Scroll to branch anchor on load
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [location.hash])

  return (
    <div className={styles.page}>
      <div className="page-header">
        <p className="eyebrow">The Ancient Tree</p>
        <h1>Skill Tree</h1>
        <p className={styles.headerSub}>
          {overall.completed} skills mastered · {overall.total - overall.completed} remaining ·{' '}
          {overall.percent}% complete
        </p>
      </div>

      {/* Overview cards — quick nav */}
      <div className={styles.overviewGrid + ' reveal'}>
        {skillBranches.map((branch, i) => (
          <SkillBranchOverview key={branch.id} branch={branch} index={i} />
        ))}
      </div>

      <div className="divider" />

      {/* Detailed skill trees */}
      <div className={styles.details}>
        <div className="section-title">Domain Details</div>
        {skillBranches.map(branch => (
          <SkillBranchDetail key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  )
}
