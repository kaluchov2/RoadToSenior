import { useState } from 'react'
import { resources } from '../data/resources'
import styles from './Resources.module.css'

const TYPE_CONFIG = {
  tweet:   { icon: '🐦', label: 'Tweet',   class: 'badge-blue'   },
  article: { icon: '📄', label: 'Article', class: 'badge-gold'   },
  video:   { icon: '▶️',  label: 'Video',   class: 'badge-red'    },
  book:    { icon: '📚', label: 'Book',    class: 'badge-green'  },
  quote:   { icon: '❝',  label: 'Quote',   class: 'badge-purple' },
  thread:  { icon: '🧵', label: 'Thread',  class: 'badge-blue'   },
}

function ResourceCard({ resource }) {
  const config = TYPE_CONFIG[resource.type] || TYPE_CONFIG.article

  return (
    <article className={`${styles.card} card`}>
      <div className={styles.cardTop}>
        <div className={styles.typeRow}>
          <span className={`badge ${config.class}`}>{config.icon} {config.label}</span>
          <span className={styles.date}>{resource.savedDate}</span>
        </div>

        <div className={styles.authorRow}>
          <span className={styles.author}>{resource.author}</span>
          {resource.handle && <span className={styles.handle}>{resource.handle}</span>}
        </div>

        {resource.title && <div className={styles.resourceTitle}>{resource.title}</div>}
      </div>

      <blockquote className={styles.content}>{resource.content}</blockquote>

      <div className={styles.footer}>
        <div className={styles.tagList}>
          {resource.tags.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        {resource.url && resource.url !== '#' && (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            ✦ Source
          </a>
        )}
      </div>
    </article>
  )
}

export default function Resources() {
  const [activeType, setActiveType] = useState(null)
  const [activeTag, setActiveTag] = useState(null)

  const allTypes = [...new Set(resources.map(r => r.type))]
  const allTags  = [...new Set(resources.flatMap(r => r.tags))].sort()

  const filtered = resources.filter(r => {
    if (activeType && r.type !== activeType) return false
    if (activeTag  && !r.tags.includes(activeTag)) return false
    return true
  })

  return (
    <div className={styles.page}>
      <div className="page-header">
        <p className="eyebrow">Scrolls of Wisdom</p>
        <h1>Resources</h1>
      </div>

      <p className={styles.intro}>
        Tweets, articles, quotes, and threads worth keeping. The collective wisdom
        of those who've walked this road before — curated for the journey ahead.
      </p>

      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Type:</span>
          <button
            className={`${styles.filterBtn} ${!activeType ? styles.filterActive : ''}`}
            onClick={() => setActiveType(null)}
          >All</button>
          {allTypes.map(type => {
            const conf = TYPE_CONFIG[type] || TYPE_CONFIG.article
            return (
              <button
                key={type}
                className={`${styles.filterBtn} ${activeType === type ? styles.filterActive : ''}`}
                onClick={() => setActiveType(activeType === type ? null : type)}
              >
                {conf.icon} {conf.label}
              </button>
            )
          })}
        </div>

        {allTags.length > 0 && (
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Topic:</span>
            <button
              className={`${styles.filterBtn} ${!activeTag ? styles.filterActive : ''}`}
              onClick={() => setActiveTag(null)}
            >All</button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`${styles.filterBtn} ${activeTag === tag ? styles.filterActive : ''}`}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>📜</div>
          <h3 className={styles.emptyTitle}>The Scrolls Await</h3>
          <p className={styles.emptyMsg}>
            Add resources in <code>src/data/resources.js</code>
          </p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((resource, i) => (
            <div key={resource.id} style={{ animationDelay: `${i * 0.05}s` }} className="reveal">
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
