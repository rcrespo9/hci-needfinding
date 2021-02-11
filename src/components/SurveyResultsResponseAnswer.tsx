import React from "react";
import ISurveyAnswer from "../interfaces/ISurveyAnswer";

function SurveyResultsResponse({ text, answerOccurrences, answerOccurrencePercentage }: ISurveyAnswer) {
  if (answerOccurrences && answerOccurrencePercentage) {
    return (
      <li>{answerOccurrencePercentage} of users ({answerOccurrences}) answered {text}</li>
    )
  } else {
    return (<li>{text}</li>)
  }
}

export default SurveyResultsResponse
