import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Chronicle from './pages/Chronicle'
import Projects from './pages/Projects'
import Resources from './pages/Resources'
import CharacterSheet from './pages/CharacterSheet'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/chronicle" element={<Chronicle />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/character-sheet" element={<CharacterSheet />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
