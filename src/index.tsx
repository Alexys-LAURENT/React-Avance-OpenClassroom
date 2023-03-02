import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Survey from './Pages/Survey'
import Freelances from './Pages/Freelances/index'
import Results from './Pages/Results'
import ThemeProvider from './utils/context/'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Error from './Components/Error'
import GlobalStyle from './utils/style/GlobalStyle/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)
