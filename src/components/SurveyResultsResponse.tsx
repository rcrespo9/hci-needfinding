import React from "react";
import ISurveyResponse from "../interfaces/ISurveyResponse";
import SurveyResultsResponseAnswer from "./SurveyResultsResponseAnswer";

function SurveyResultsResponse({ question, answers }: ISurveyResponse) {
  return (
    <>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, idx) => (
          <SurveyResultsResponseAnswer text={answer.text} answerOccurrences={answer.answerOccurrences} answerOccurrencePercentage={answer.answerOccurrencePercentage} key={idx} />
        ))}
      </ul>
    </>
  )
}

export default SurveyResultsResponse
