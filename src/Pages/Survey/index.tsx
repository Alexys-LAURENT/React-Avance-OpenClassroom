import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loader } from '../../utils/Atoms'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

interface questions {
  [key: number]: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`

const QuestionNumber = styled.h2`
  text-decoration: underline;
  text-decoration-color: #5843e4;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  color: ${colors.textColor};
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;

  a {
    color: ${colors.textColor};
  }
`

const Error = styled.p`
  color: white;
  background-color: rgba(255, 0, 0, 0.7);
  padding: 10px;
  border-radius: 10px;
`

function Survey() {
  const [questions, setQuestions] = useState<questions>({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [ErrorFetch, setErrorFetch] = useState(false)
  const { questionNumber } = useParams()
  const questionNumberAsNumber = Number(questionNumber)
  const prevQuestionNumber =
    questionNumberAsNumber === 1 ? 1 : questionNumberAsNumber - 1

  useEffect(() => {
    setDataLoading(true)
    fetch('http://localhost:8000/survey')
      .then((response) => response.json())
      .then(({ surveyData }) => {
        setQuestions(surveyData)
        setDataLoading(false)
      })
      .catch((error) => {
        setErrorFetch(true)
      })
  }, [])

  return (
    <Wrapper>
      {ErrorFetch === true ? (
        <Error>Un problème est survenue</Error>
      ) : (
        <div>
          <QuestionNumber>Question n°{questionNumber}</QuestionNumber>
          {isDataLoading ? (
            <Loader />
          ) : (
            <p>{questions[questionNumberAsNumber]}</p>
          )}
          <LinksWrapper>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
            {questionNumberAsNumber < 10 ? (
              <Link to={`/survey/${questionNumberAsNumber + 1}`}>Suivant</Link>
            ) : (
              <Link to="/results">Résultats</Link>
            )}
          </LinksWrapper>
        </div>
      )}
    </Wrapper>
  )
}

export default Survey
