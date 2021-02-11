import React from "react";
import ISurveyAnswer from "../interfaces/ISurveyAnswer";

function SurveyResultsResponse({ text, answerOccurrences, answerOccurrencePercentage }: ISurveyAnswer) {
  if (answerOccurrences && answerOccurrencePercentage) {
    return (
      <li><strong>{answerOccurrencePercentage}</strong> of users ({answerOccurrences}) answered <strong>{text}</strong></li>
    )
  } else {
    return (<li>{text}</li>)
  }
}

export default SurveyResultsResponse
