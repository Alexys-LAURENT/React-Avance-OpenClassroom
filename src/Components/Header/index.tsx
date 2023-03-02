import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import colors from '../../utils/style/colors'

import logo from '../../assets/logo.png'

interface StyledLinkProps {
  $isFullLink: boolean
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  with: 100%;
  height: 80px;
  padding: 10px 50px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-weight: 400;
    font-size: 38px;
  }

  img {
    height: 60px;
  }
`

const NavItems = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;

  ${({ $isFullLink }: StyledLinkProps) =>
    $isFullLink &&
    `color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
    padding: 10px 20px;
  `}
`

function Header() {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="shiny-logo"></img>
        <h1>Shiny</h1>
      </Logo>
      <NavItems>
        <StyledLink to={'/'}>Accueil</StyledLink>
        <StyledLink to={'/freelances'}>Profils</StyledLink>
        <StyledLink to={'/survey/1'} $isFullLink>
          Faire le test
        </StyledLink>
      </NavItems>
    </Nav>
  )
}

export default Header
