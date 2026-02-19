import { skillBranches } from '../data/skills'
import { character } from '../data/character'

export function calculateTotalXP() {
  let total = 0
  skillBranches.forEach(branch =>
    branch.categories.forEach(cat =>
      cat.skills.forEach(skill => { if (skill.completed) total += skill.xp })
    )
  )
  return total
}

export function getCharacterLevel(xp) {
  const thresholds = character.levelThresholds
  let current = thresholds[0]
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (xp >= thresholds[i].xp) { current = thresholds[i]; break }
  }
  return current
}

export function getNextLevel(xp) {
  const thresholds = character.levelThresholds
  for (const t of thresholds) {
    if (xp < t.xp) return t
  }
  return null
}

export function getLevelProgress(xp) {
  const current = getCharacterLevel(xp)
  const next = getNextLevel(xp)
  if (!next) return { percent: 100, current, next: null, xpIntoLevel: 0, xpNeeded: 0 }
  const xpIntoLevel = xp - current.xp
  const xpNeeded = next.xp - current.xp
  return { percent: Math.round((xpIntoLevel / xpNeeded) * 100), current, next, xpIntoLevel, xpNeeded }
}

export function getBranchProgress(branch) {
  let total = 0, completed = 0
  branch.categories.forEach(cat =>
    cat.skills.forEach(skill => { total++; if (skill.completed) completed++ })
  )
  return { total, completed, percent: total > 0 ? Math.round((completed / total) * 100) : 0 }
}

export function getCategoryProgress(category) {
  const total = category.skills.length
  const completed = category.skills.filter(s => s.completed).length
  return { total, completed, percent: total > 0 ? Math.round((completed / total) * 100) : 0 }
}

export function getOverallProgress() {
  let total = 0, completed = 0
  skillBranches.forEach(branch =>
    branch.categories.forEach(cat =>
      cat.skills.forEach(skill => { total++; if (skill.completed) completed++ })
    )
  )
  return { total, completed, percent: total > 0 ? Math.round((completed / total) * 100) : 0 }
}

export function getBranchXP(branch) {
  let earned = 0, max = 0
  branch.categories.forEach(cat =>
    cat.skills.forEach(skill => { max += skill.xp; if (skill.completed) earned += skill.xp })
  )
  return { earned, max }
}

export function getColorForTheme(themeClass) {
  const map = {
    blue:   { primary: '#4a78b5', glow: 'rgba(74,120,181,0.5)',   fill: 'blue' },
    gold:   { primary: '#d4a843', glow: 'rgba(212,168,67,0.5)',   fill: 'gold' },
    green:  { primary: '#4aad6b', glow: 'rgba(74,173,107,0.5)',   fill: 'green' },
    red:    { primary: '#c0392b', glow: 'rgba(192,57,43,0.5)',    fill: 'red' },
    purple: { primary: '#8b4ab8', glow: 'rgba(107,58,140,0.5)',   fill: 'purple' },
  }
  return map[themeClass] || map.blue
}
