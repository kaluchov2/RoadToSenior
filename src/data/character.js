// ─── YOUR CHARACTER ──────────────────────────────────────────
// Edit this file to update your character info, title, and stats.

export const character = {
  name: 'The Apprentice',      // Your name or alias
  title: 'Software Engineer',  // Current professional title
  class: 'Full-Stack Pilot',   // Your chosen class
  startDate: '2025-01-01',     // When the journey began

  bio: `Sync rate: rising. A pilot in training navigating the systems of modern software engineering —
architecture, leadership, full-stack development. The mission: achieve Senior rank.
The path is long. The terminal never sleeps.`,

  // ─── LEVELING ──────────────────────────────────────────────
  // Each completed skill grants XP. Level up automatically.
  levelThresholds: [
    { level: 1,  title: 'Squire',       xp: 0     },
    { level: 2,  title: 'Apprentice',   xp: 600   },
    { level: 3,  title: 'Journeyman',   xp: 1500  },
    { level: 4,  title: 'Craftsman',    xp: 3000  },
    { level: 5,  title: 'Artisan',      xp: 5500  },
    { level: 6,  title: 'Expert',       xp: 9000  },
    { level: 7,  title: 'Master',       xp: 13000 },
    { level: 8,  title: 'Grand Master', xp: 18000 },
    { level: 9,  title: 'Sage',         xp: 24000 },
    { level: 10, title: 'Senior Knight',xp: 31000 },
  ],

  // ─── STATS ─────────────────────────────────────────────────
  // Values from 1–10. Edit freely to reflect your self-assessment.
  stats: [
    { name: 'Intelligence', icon: '🧠', value: 8,  description: 'Technical depth & knowledge' },
    { name: 'Wisdom',       icon: '📜', value: 5,  description: 'System design & architecture' },
    { name: 'Agility',      icon: '⚡', value: 8,  description: 'Speed of development & iteration' },
    { name: 'Strength',     icon: '⚔️', value: 7,  description: 'Problem-solving & debugging' },
    { name: 'Charisma',     icon: '👑', value: 5,  description: 'Leadership & communication' },
    { name: 'Endurance',    icon: '🛡️', value: 7,  description: 'Shipping & project completion' },
  ],

  // ─── LINKS ─────────────────────────────────────────────────
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'you@example.com',
  },
}
