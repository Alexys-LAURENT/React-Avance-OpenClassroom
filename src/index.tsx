import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Pages/Home'
import Survey from './Pages/Survey'
import Header from './Components/Header'
import Error from './Components/Error'

import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Freelances from './Pages/Freelances/index'
import Results from './Pages/Results'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
