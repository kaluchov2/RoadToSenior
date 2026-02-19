import { useState } from 'react'
import { blogPosts } from '../data/blog'
import styles from './Chronicle.module.css'

function PostFull({ post, onClose }) {
  return (
    <div className={styles.postFull}>
      <button className={styles.backBtn} onClick={onClose}>← Back to Chronicle</button>
      <div className={styles.postHeader}>
        <div className={styles.postMeta}>
          <span className={styles.postDate}>{post.date}</span>
          <div className={styles.postTags}>
            {post.tags.map(t => <span key={t} className="badge badge-gold">{t}</span>)}
          </div>
        </div>
        <h1 className={styles.postFullTitle}>{post.title}</h1>
      </div>
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

function PostCard({ post, onClick }) {
  return (
    <article
      id={post.id}
      className={styles.postCard}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <div className={styles.postMeta}>
        <span className={styles.postDate}>{post.date}</span>
        <div className={styles.postTags}>
          {post.tags.slice(0,4).map(t => <span key={t} className="badge badge-gold">{t}</span>)}
        </div>
      </div>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <p className={styles.postExcerpt}>{post.excerpt}</p>
      <span className={styles.readMore}>Read entry →</span>
    </article>
  )
}

export default function Chronicle() {
  const [activePost, setActivePost] = useState(null)
  const [activeTag, setActiveTag] = useState(null)

  const allTags = [...new Set(blogPosts.flatMap(p => p.tags))].sort()

  const filtered = activeTag
    ? blogPosts.filter(p => p.tags.includes(activeTag))
    : blogPosts

  if (activePost) {
    return (
      <div className={styles.page}>
        <PostFull post={activePost} onClose={() => setActivePost(null)} />
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className="page-header">
        <p className="eyebrow">Learning Journal</p>
        <h1>The Chronicle</h1>
      </div>

      <p className={styles.intro}>
        A record of every lesson learned, every discovery made, every curious thing encountered
        on the road to senior engineer. Updated manually as the journey unfolds.
      </p>

      {/* Tag filter */}
      {allTags.length > 0 && (
        <div className={styles.tagFilter}>
          <button
            className={`${styles.tagBtn} ${!activeTag ? styles.tagActive : ''}`}
            onClick={() => setActiveTag(null)}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`${styles.tagBtn} ${activeTag === tag ? styles.tagActive : ''}`}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>📜</div>
          <h3 className={styles.emptyTitle}>The Chronicle Awaits</h3>
          <p className={styles.emptyMsg}>
            No entries yet. Add your first post in <code>src/data/blog.js</code>
          </p>
        </div>
      ) : (
        <div className={styles.postList}>
          {filtered.map(post => (
            <PostCard key={post.id} post={post} onClick={() => setActivePost(post)} />
          ))}
        </div>
      )}
    </div>
  )
}
