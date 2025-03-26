import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GameMode from './components/GameMode.jsx'
import Home from './components/Home.jsx'
import CommingSoon from './components/CommingSoon.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/GameMode" element={<GameMode />} />
      <Route path="/App" element={<App />} />
      <Route path="/commingsoon" element={<CommingSoon />} />
    </Routes>
  </Router>
)
