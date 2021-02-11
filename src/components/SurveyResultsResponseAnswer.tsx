import React from "react";
import ISurveyAnswer from "../interfaces/ISurveyAnswer";

function SurveyResultsResponse({ text, answerOccurrences, answerOccurrencePercentage }: ISurveyAnswer) {
  return (
    <li>{answerOccurrencePercentage} of users ({answerOccurrences}) answered {text}</li>
  )
}

export default SurveyResultsResponse
