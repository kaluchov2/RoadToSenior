# ⚔️ Road to Senior

A medieval RPG-themed personal site to track the journey from apprentice to senior software engineer.

## Quick Start

```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build
npm run deploy    # deploy to GitHub Pages
```

## Updating Your Progress

All content lives in `src/data/`. Edit these files and redeploy:

| File | What it controls |
|------|-----------------|
| `src/data/character.js` | Your name, class, stats, level thresholds |
| `src/data/skills.js` | Skill tree — set `completed: true` as you learn |
| `src/data/blog.js` | Chronicle entries (your learning journal) |
| `src/data/projects.js` | Projects showcase |
| `src/data/resources.js` | Saved tweets, articles, quotes |

### Marking a skill complete

In `src/data/skills.js`, find the skill and set `completed: true`:

```js
{
  id: 'cap-theorem',
  title: 'CAP Theorem',
  completed: true,  // ← change this
  xp: 100,
  resources: [...],
  notes: 'My notes here',
}
```

Your character level and XP update automatically.

### Adding a Chronicle entry

Paste at the **top** of the `blogPosts` array in `src/data/blog.js`:

```js
{
  id: 'my-post-id',         // unique, kebab-case
  title: 'Post Title',
  date: '2025-03-15',
  tags: ['system-design'],
  excerpt: 'One sentence summary.',
  content: `<p>Your content here. HTML is supported.</p>`,
  relatedSkills: [],
},
```

## Deploying to GitHub Pages

1. Create a repo named `RoadToSenior` on GitHub
2. In `vite.config.js`, confirm `base: '/RoadToSenior/'` matches your repo name
3. In `package.json`, the `deploy` script uses `gh-pages`
4. Run:

```bash
git init
git remote add origin https://github.com/yourusername/RoadToSenior.git
npm run deploy
```

5. In GitHub → Settings → Pages → set source to `gh-pages` branch
6. Your site will be live at `https://yourusername.github.io/RoadToSenior/`

## Tech Stack

- **React 18** + **Vite 5** — fast dev server, optimized builds
- **React Router** (HashRouter) — works on GitHub Pages without server config
- **CSS Modules** — scoped styles per component
- **No backend** — pure static, everything is in JS data files
- **Google Fonts** — Cinzel Decorative, Cinzel, IM Fell English
