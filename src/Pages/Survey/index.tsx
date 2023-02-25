import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberAsNumber = Number(questionNumber)

  const prevQuestionNumber =
    questionNumberAsNumber === 1 ? 1 : questionNumberAsNumber - 1

  return (
    <div>
      <h2>Page de questionnaires</h2>
      <h2>Question n°{questionNumber}</h2>

      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {questionNumberAsNumber < 10 ? (
        <Link to={`/survey/${questionNumberAsNumber + 1}`}>Suivant</Link>
      ) : (
        <Link to="/results">Résultats</Link>
      )}
    </div>
  )
}

export default Survey
