import React from "react";
import ISurveyResponse from "../interfaces/ISurveyResponse";
import SurveyResultsResponseAnswer from "./SurveyResultsResponseAnswer";

function SurveyResultsResponse({ question, answers, textOnlyAnswers }: ISurveyResponse) {
  const isTextOnlyAnswers = textOnlyAnswers?.includes(question)
  return (
    <>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, idx) => {
          if (isTextOnlyAnswers) {
            return (<SurveyResultsResponseAnswer text={answer.text} key={idx} />)
          } else {
            return (
              <SurveyResultsResponseAnswer text={answer.text} answerOccurrences={answer.answerOccurrences} answerOccurrencePercentage={answer.answerOccurrencePercentage} key={idx} />
            )
          }
        })}
      </ul>
    </>
  )
}

export default SurveyResultsResponse
