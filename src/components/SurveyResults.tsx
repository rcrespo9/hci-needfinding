import React from "react";
import { Paper } from "@material-ui/core";
import ISurveyResults from "../interfaces/ISurveyResults";
import SurveyResultsResponse from "./SurveyResultsResponse";

function SurveyResults({ header, responses }: ISurveyResults) {
  return (
    <Paper>
      <h1>{header}</h1>
      {responses.map((response, idx) => (
        <SurveyResultsResponse question={response.question} answers={response.answers} />
      ))}
    </Paper>
  )
}

export default SurveyResults
