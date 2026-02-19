// ─── THE CHRONICLE — BLOG POSTS ──────────────────────────────
// Add new entries to the TOP of this array (newest first).
//
// content: supports basic HTML tags for formatting.
// tags: used for filtering. Match skill IDs or use custom tags.
// relatedSkills: array of skill IDs shown as links.

export const blogPosts = [
  {
    id: 'welcome-to-the-chronicle',
    title: 'The Beginning of the Chronicle',
    date: '2025-01-01',
    tags: ['meta', 'motivation'],
    excerpt:
      'Every great journey begins with a single step. Here begins mine — the road from artisan to Senior Knight.',
    content: `
<h2>Why This Chronicle?</h2>
<p>
  Every great hero has an origin story. Mine starts not in a dragon's cave, but at a
  keyboard — staring at a terminal, wondering what truly separates a
  <em>good developer</em> from a <strong>senior engineer</strong>.
</p>
<p>
  After much reflection, I've concluded it's not just technical knowledge.
  It's a combination of <strong>deep systems thinking</strong>, the ability to
  <strong>lead and multiply others</strong>, and the wisdom that only comes from
  shipping real things under real constraints.
</p>

<h2>The Skill Tree</h2>
<p>
  I've designed four great domains to master on this journey:
</p>
<ul>
  <li><strong>System Design</strong> — How to architect systems that scale</li>
  <li><strong>Leadership</strong> — How to grow from IC to technical leader</li>
  <li><strong>Full Stack Mastery</strong> — Excellence at every layer of the stack</li>
  <li><strong>Legendary Projects</strong> — Things built in the real world</li>
</ul>
<p>
  This isn't a sprint. It's a campaign. The chronicle will track every skill
  earned, every lesson learned, every curious thing discovered along the way.
</p>

<h2>The Rules</h2>
<p>
  One rule above all: <strong>no passive learning counts</strong>. Reading an
  article is fine, but a skill is only marked complete when I can explain it,
  apply it, or teach it to someone else. The forge requires fire.
</p>
<p>Let the adventure begin. ⚔️</p>
    `,
    relatedSkills: [],
  },
]

// ─── HOW TO ADD A NEW POST ───────────────────────────────────
// Copy this template and paste it at the TOP of blogPosts array:
//
// {
//   id: 'unique-post-id',           // kebab-case, no spaces
//   title: 'Post Title',
//   date: '2025-03-15',             // YYYY-MM-DD
//   tags: ['system-design', 'til'], // any tags you want
//   excerpt: 'One sentence summary shown on the listing page.',
//   content: `
//     <p>Your content here. You can use HTML tags.</p>
//     <h2>A section heading</h2>
//     <p>More content...</p>
//   `,
//   relatedSkills: ['cap-theorem', 'redis'], // optional skill IDs
// },
