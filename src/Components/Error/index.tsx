/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import errorImage from '../../assets/404.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  min-height: calc(100vh - 130px - 30px);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundLight};
  margin-top: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande';
  font-weight: 700;
  font-size: 20px;

  img {
    width: 100%;
    max-width: 800px;
    margin-bottom: 50px;
    margin-top: 50px;
  }
`
function Error() {
  return (
    <Wrapper>
      <span>Oups...</span>
      <img src={errorImage} alt="404"></img>
      <p>Il semblerait qu'il y ait un problème</p>
    </Wrapper>
  )
}

export default Error
