import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav>
      <Link to={'/'}>Accueil</Link>
      <Link to={'/survey/1'}>Questionnaires</Link>
      <Link to={'/freelances'}>Freelances</Link>
    </nav>
  )
}

export default Header
