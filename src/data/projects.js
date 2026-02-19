// ─── PROJECTS ────────────────────────────────────────────────
// Showcase your legendary works here.
// status: 'active' | 'completed' | 'archived'

export const projects = [
  {
    id: 'road-to-senior',
    title: 'Road to Senior',
    subtitle: 'A Medieval Journey Tracker',
    description:
      'This very site — a personal skill tree and progress tracker themed as a medieval RPG adventure. Built to make the grind to senior engineer feel like a proper campaign.',
    tech: ['React', 'Vite', 'CSS3', 'GitHub Pages'],
    status: 'active',
    highlight: true,
    links: {
      github: 'https://github.com/yourusername/RoadToSenior',
      live: 'https://yourusername.github.io/RoadToSenior',
    },
    startDate: '2025-01-01',
    completedDate: null,
    highlights: [
      'Data-driven skill tree — all progress managed via JS config files',
      'Medieval RPG theme built entirely with CSS custom properties',
      'Auto-calculated character level from completed skills XP',
      'Deployed to GitHub Pages with one command',
    ],
    learnings: [
      'CSS custom properties for cohesive theming at scale',
      'React Router with HashRouter for static site compatibility',
    ],
  },

  // ─── ADD YOUR PROJECTS BELOW ────────────────────────────────
  // {
  //   id: 'my-project',
  //   title: 'Project Name',
  //   subtitle: 'One-line description',
  //   description: 'What it does, why you built it.',
  //   tech: ['Node.js', 'PostgreSQL', 'Docker'],
  //   status: 'completed',
  //   highlight: false,
  //   links: {
  //     github: 'https://github.com/...',
  //     live: 'https://...',   // optional
  //   },
  //   startDate: '2025-03-01',
  //   completedDate: '2025-04-15',
  //   highlights: ['What makes this project notable', 'Key feature or challenge'],
  //   learnings: ['What you learned from building it'],
  // },
]
