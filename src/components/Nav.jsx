import { NavLink, useLocation } from 'react-router-dom'
import { calculateTotalXP, getCharacterLevel, getLevelProgress } from '../utils/characterUtils'
import { character } from '../data/character'
import styles from './Nav.module.css'

const NAV_ITEMS = [
  { to: '/',               label: 'The Keep',      icon: '🏰', desc: 'Home' },
  { to: '/skills',         label: 'Skill Tree',    icon: '🌳', desc: 'Skills' },
  { to: '/chronicle',      label: 'The Chronicle', icon: '📖', desc: 'Blog' },
  { to: '/projects',       label: 'Legendary Works', icon: '🏆', desc: 'Projects' },
  { to: '/resources',      label: 'Scrolls',       icon: '📜', desc: 'Resources' },
  { to: '/character-sheet',label: 'Character Sheet', icon: '⚔️', desc: 'Resume' },
]

export default function Nav() {
  const xp = calculateTotalXP()
  const levelData = getCharacterLevel(xp)
  const progress = getLevelProgress(xp)

  return (
    <>
      {/* Mobile top bar */}
      <div className={styles.mobileBar}>
        <span className={styles.mobileLogo}>⚔️ Road to Senior</span>
        <span className={styles.mobileLevel}>Lv.{levelData.level}</span>
      </div>

      <nav className={styles.nav}>
        {/* ── Character mini-card ── */}
        <div className={styles.charCard}>
          <div className={styles.charAvatar}>⚔️</div>
          <div className={styles.charInfo}>
            <div className={styles.charName}>{character.name}</div>
            <div className={styles.charClass}>{character.class}</div>
          </div>
          <div className={styles.levelBadge}>
            <span className={styles.levelNum}>{levelData.level}</span>
            <span className={styles.levelLabel}>LVL</span>
          </div>
        </div>

        {/* XP bar */}
        <div className={styles.xpSection}>
          <div className={styles.xpLabels}>
            <span className={styles.xpTitle}>{levelData.title}</span>
            <span className={styles.xpCount}>{xp.toLocaleString()} XP</span>
          </div>
          <div className={styles.xpBar}>
            <div
              className={styles.xpFill}
              style={{ width: `${progress.percent}%` }}
            />
          </div>
          {progress.next && (
            <div className={styles.xpNext}>
              {progress.xpIntoLevel} / {progress.xpNeeded} → {progress.next.title}
            </div>
          )}
        </div>

        <div className={styles.divider} />

        {/* ── Navigation links ── */}
        <ul className={styles.navList}>
          {NAV_ITEMS.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ''}`
                }
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.divider} />

        {/* ── Footer ── */}
        <div className={styles.navFooter}>
          <a href={character.links.github} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            GitHub
          </a>
          <span className={styles.footerDot}>·</span>
          <a href={character.links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            LinkedIn
          </a>
        </div>
      </nav>
    </>
  )
}
