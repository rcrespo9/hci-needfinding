import React from "react";
import ISurveyResults from "../interfaces/ISurveyResults";
import SurveyResultsResponse from "./SurveyResultsResponse";

function SurveyResults({ header, responses }: ISurveyResults) {
  return (
    <>
      <h1>{header}</h1>
      {responses.map((response, idx) => (
        <SurveyResultsResponse question={response.question} answers={response.answers} key={idx} />
      ))}
    </>
  )
}

export default SurveyResults
