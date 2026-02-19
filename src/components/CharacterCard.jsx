import { calculateTotalXP, getLevelProgress } from '../utils/characterUtils'
import { character } from '../data/character'
import styles from './CharacterCard.module.css'

export default function CharacterCard({ compact = false }) {
  const xp = calculateTotalXP()
  const { percent, current, next, xpIntoLevel, xpNeeded } = getLevelProgress(xp)

  return (
    <div className={`${styles.card} ${compact ? styles.compact : ''} card-ornate`}>
      {/* Decorative rune background */}
      <div className={styles.runesBg} aria-hidden="true">
        <span className={styles.rune}>᚛</span>
        <span className={styles.rune}>ᚁ</span>
        <span className={styles.rune}>᚜</span>
      </div>

      <div className={styles.header}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>⚔️</div>
          <div className={styles.levelRing}>
            <span className={styles.levelNum}>{current.level}</span>
          </div>
        </div>

        <div className={styles.identity}>
          <p className={styles.eyebrow}>Character</p>
          <h2 className={styles.name}>{character.name}</h2>
          <p className={styles.classLine}>{character.class}</p>
          <div className={styles.titleBadge}>{current.title}</div>
        </div>
      </div>

      {/* XP progress */}
      <div className={styles.xpSection}>
        <div className={styles.xpRow}>
          <span className={styles.xpLabel}>Experience Points</span>
          <span className={styles.xpTotal}>{xp.toLocaleString()} XP</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill gold"
            style={{ width: `${percent}%` }}
          />
        </div>
        {next ? (
          <div className={styles.xpSubRow}>
            <span>{xpIntoLevel.toLocaleString()} / {xpNeeded.toLocaleString()} to {next.title}</span>
            <span>{percent}%</span>
          </div>
        ) : (
          <div className={styles.xpSubRow}><span>Max Level Achieved</span><span>100%</span></div>
        )}
      </div>

      {/* Stats */}
      {!compact && (
        <>
          <div className={styles.divider} />
          <div className={styles.stats}>
            {character.stats.map(stat => (
              <div key={stat.name} className={styles.statRow}>
                <span className={styles.statIcon}>{stat.icon}</span>
                <span className={styles.statName}>{stat.name}</span>
                <div className={styles.statBarWrap}>
                  <div className={styles.statBar}>
                    <div
                      className={styles.statFill}
                      style={{ width: `${(stat.value / 10) * 100}%` }}
                    />
                  </div>
                </div>
                <span className={styles.statVal}>{stat.value}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Bio */}
      {!compact && (
        <>
          <div className={styles.divider} />
          <p className={styles.bio}>{character.bio}</p>
        </>
      )}
    </div>
  )
}
