import React from 'react'
import QuizComponent from '../QuizComponents'
import { questionsAndAnswers } from './data'

const Philosophy = () => {
  return (
<>
{
  questionsAndAnswers && (

<QuizComponent title={"GST203 - Philosophy"} data={questionsAndAnswers} />
  )
}
</>
  )
}

export default Philosophy