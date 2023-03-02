import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import homeIllustration from '../../assets/home-illustration.svg'
import colors from '../../utils/style/colors'

interface StyledLinkProps {
  $isFullLink: boolean
}

const Wrapper = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  margin-top: 80px;
`

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100vh - 130px - 80px);
  // background-color: green;
`
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  // background-color: red;
  margin-left: 100px;

  h3 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    max-width: 500px;
    line-height: 1.6;
    color: ${colors.textColor};
  }
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  // background-color: blue;
  margin-right: 100px;
  img {
    min-width: 400px;
    width: 70%;
  }
`

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;

  ${({ $isFullLink }: StyledLinkProps) =>
    $isFullLink &&
    `color: white;
    width: fit-content;
    border-radius: 30px;
    background-color: ${colors.primary};
    padding: 10px 40px;
  `}
`

function Home() {
  return (
    <Wrapper>
      <HomeContainer>
        <LeftColumn>
          <h3>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </h3>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftColumn>
        <RightColumn>
          <img src={homeIllustration} alt="homeIllustration"></img>
        </RightColumn>
      </HomeContainer>
    </Wrapper>
  )
}

export default Home
