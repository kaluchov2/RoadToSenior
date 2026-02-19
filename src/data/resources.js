// ─── RESOURCES — SCROLLS OF WISDOM ──────────────────────────
// Save useful tweets, articles, videos, and quotes here.
// type: 'tweet' | 'article' | 'video' | 'book' | 'quote' | 'thread'

export const resources = [
  {
    id: 'res-gergely-senior',
    type: 'tweet',
    author: 'Gergely Orosz',
    handle: '@GergelyOrosz',
    content:
      'The difference between a senior and a non-senior engineer is rarely technical depth. It\'s the ability to break down problems, communicate trade-offs, and get things shipped in the face of uncertainty.',
    url: 'https://twitter.com/GergelyOrosz',
    tags: ['leadership', 'mindset', 'senior'],
    savedDate: '2025-01-05',
  },
  {
    id: 'res-fowler-arch',
    type: 'quote',
    author: 'Martin Fowler',
    content:
      'Architecture is the decisions that are hard to change. The goal of a good architect is to defer those decisions as long as possible.',
    url: 'https://martinfowler.com',
    tags: ['system-design', 'architecture'],
    savedDate: '2025-01-10',
  },
  {
    id: 'res-kelsey-complexity',
    type: 'tweet',
    author: 'Kelsey Hightower',
    handle: '@kelseyhightower',
    content:
      'Stop trying to make distributed systems simple. They are not simple. Make them understandable.',
    url: 'https://twitter.com/kelseyhightower',
    tags: ['system-design', 'mindset'],
    savedDate: '2025-01-15',
  },

  // ─── ADD RESOURCES BELOW ─────────────────────────────────
  // {
  //   id: 'res-unique-id',
  //   type: 'article',          // tweet | article | video | book | quote | thread
  //   author: 'Author Name',
  //   handle: '@twitterhandle', // optional, for tweets
  //   content: 'The quote or description of the resource.',
  //   url: 'https://...',
  //   tags: ['system-design', 'leadership'], // any tags
  //   savedDate: '2025-03-01',
  // },
]
