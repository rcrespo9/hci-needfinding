import React from "react";
import ISurveyResults from "../interfaces/ISurveyResults";
import SurveyResultsResponse from "./SurveyResultsResponse";

function SurveyResults({ header, responses, textOnlyAnswers }: ISurveyResults) {
  return (
    <>
      <h1>{header}</h1>
      {responses.map((response, idx) => (
        <SurveyResultsResponse question={response.question} answers={response.answers} textOnlyAnswers={textOnlyAnswers} key={idx} />
      ))}
    </>
  )
}

export default SurveyResults
