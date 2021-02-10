import React from "react";
import ISurveyAnswer from "../interfaces/ISurveyAnswer";

function SurveyResultsResponse({ text, answerOccurrences, answerOccurrencePercentage }: ISurveyAnswer) {
  return (
    <li>{answerOccurrences} users ({answerOccurrencePercentage}) answered {text}</li>
  )
}

export default SurveyResultsResponse
