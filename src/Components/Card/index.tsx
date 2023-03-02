import React from 'react'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 18px;
  letter-spacing: 0.6px;
  position: absolute;
  top: 20px;
  left: 30px;
`
const CardImage = styled.img`
  height: 50%;
  width: 50%;
  border-radius: 50%;
  margin-top: 50px;
  margin-bottom: 50px;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 250px;
  height: 250px;
  transition: 200ms;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
const Title = styled.span`
  color: ${colors.textColor};
  font-size: 22px;
`

interface CardProps {
  label?: string
  picture?: string
  title?: string
}

function Card({ label = '', picture = DefaultPicture, title = '' }: CardProps) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <Title>{title}</Title>
    </CardWrapper>
  )
}

export default Card
