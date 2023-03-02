/* eslint-disable react/prop-types */
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

function GlobalStyle() {
  const StyledGlobalStyle = createGlobalStyle`
* {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
}

body {
    /* Ici cette syntaxe revient au même que
    background-color: ${({ isDarkMode }: any) =>
      isDarkMode ? '#2F2E41' : 'white'};
    */
    background-color: ${({ isDarkMode }: any) =>
      isDarkMode ? 'black' : 'white'};
    margin: 0;  
}
`

  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
