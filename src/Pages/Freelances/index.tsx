import React from 'react'
import DefaultPicture from '../../assets/profile.png'
import Card from '../../Components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    color: ${colors.textColor};
    font-size: 28px;
  }

  h3 {
    margin-bottom: 54px;
    color ${colors.secondary};
  }
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 280px 400px;
  grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
  const freelanceProfiles = [
    {
      name: 'Jane Doe',
      jobTitle: 'Devops',
      picture: DefaultPicture,
    },
    {
      name: 'John Doe',
      jobTitle: 'Developpeur frontend',
      picture: DefaultPicture,
    },
    {
      name: 'Jeanne Biche',
      jobTitle: 'Développeuse Fullstack',
      picture: DefaultPicture,
    },
  ]

  return (
    <Wrapper>
      <h1>Trouvez votre prestataire</h1>
      <h3>Chez Shiny nous réunissons les meilleurs profils pour vous.</h3>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </Wrapper>
  )
}

export default Freelances
