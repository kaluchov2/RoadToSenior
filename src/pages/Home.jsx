import { Link } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import SkillBranchOverview from '../components/SkillBranchOverview'
import { skillBranches } from '../data/skills'
import { blogPosts } from '../data/blog'
import { getOverallProgress, calculateTotalXP, getLevelProgress } from '../utils/characterUtils'
import { character } from '../data/character'
import styles from './Home.module.css'

export default function Home() {
  const overall = getOverallProgress()
  const xp = calculateTotalXP()
  const { current } = getLevelProgress(xp)

  // How many days since journey start
  const startDate = new Date(character.startDate)
  const now = new Date()
  const daysOnQuest = Math.floor((now - startDate) / (1000 * 60 * 60 * 24))

  const recentPosts = blogPosts.slice(0, 2)

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.heroPretitle}>The Road Begins Here</p>
          <h1 className={styles.heroTitle}>
            Road to
            <span className="shimmer-text"> Senior</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A living chronicle of the journey from apprentice to senior engineer —
            forged one skill at a time in the fires of real-world challenges.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{current.level}</span>
              <span className={styles.heroStatLabel}>Level</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{overall.completed}</span>
              <span className={styles.heroStatLabel}>Skills Mastered</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{daysOnQuest}</span>
              <span className={styles.heroStatLabel}>Days on Quest</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{xp.toLocaleString()}</span>
              <span className={styles.heroStatLabel}>XP Earned</span>
            </div>
          </div>

          <div className={styles.heroCta}>
            <Link to="/skills" className="btn">Explore Skill Tree</Link>
            <Link to="/chronicle" className="btn btn-ghost">Read the Chronicle</Link>
          </div>
        </div>

        <div className={styles.heroCard + ' reveal reveal-3'}>
          <CharacterCard />
        </div>
      </section>

      {/* ── Overall progress ── */}
      <div className={styles.overallProgress}>
        <div className={styles.overallLabels}>
          <span className={styles.overallLabel}>Overall Progress to Senior Knight</span>
          <span className={styles.overallPct}>{overall.percent}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill gold" style={{ width: `${overall.percent}%` }} />
        </div>
        <div className={styles.overallSub}>
          {overall.completed} of {overall.total} skills completed across all domains
        </div>
      </div>

      <div className="divider" />

      {/* ── Skill branches overview ── */}
      <section className={styles.section}>
        <div className="section-title">The Four Domains</div>
        <div className={styles.branchGrid}>
          {skillBranches.map((branch, i) => (
            <SkillBranchOverview key={branch.id} branch={branch} index={i} />
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── Recent Chronicle ── */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div className="section-title" style={{ marginBottom: 0 }}>Recent Chronicle</div>
          <Link to="/chronicle" className="btn btn-ghost" style={{ fontSize: '0.7rem' }}>
            View All →
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <p className={styles.emptyMsg}>No entries yet. Add your first post in src/data/blog.js</p>
        ) : (
          <div className={styles.postList}>
            {recentPosts.map((post, i) => (
              <Link key={post.id} to={`/chronicle#${post.id}`} className={styles.postCard}>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>{post.date}</span>
                  <div className={styles.postTags}>
                    {post.tags.slice(0,3).map(t => (
                      <span key={t} className="badge badge-gold">{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <span className={styles.postLink}>Continue reading →</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ── Quote ── */}
      <div className={styles.quoteBlock}>
        <div className={styles.quoteGlyph}>❝</div>
        <blockquote className={styles.quote}>
          The difference between a senior and a non-senior engineer is rarely
          technical depth. It's the ability to break down problems, communicate
          trade-offs, and get things shipped in the face of uncertainty.
        </blockquote>
        <div className={styles.quoteAuthor}>— Gergely Orosz</div>
      </div>
    </div>
  )
}
