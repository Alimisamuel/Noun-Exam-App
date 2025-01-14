import React from 'react'
import QuizComponent from '../QuizComponents'
import { questionsAndAnswers } from './data'

const Programming = () => {
  return (
<>

{
  questionsAndAnswers && (

<QuizComponent title={"CIT237 - Programming"} data={questionsAndAnswers} />
  )
}
</>
  )
}

export default Programming