import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import SurveyResults from "./components/SurveyResults";
import ISurveyResponse from "./interfaces/ISurveyResponse";

function App() {
  const [surveyResponses, setSurveyResponses] = useState<ISurveyResponse[]>([])

  useEffect(() => {
    fetchSurveyResponses();
  }, [])

  const fetchSurveyResponses = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:5000/api/survey-results');
      const jsonData = await response.json();
      setSurveyResponses(jsonData)
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <>
      <CssBaseline />
      <Container>
        <SurveyResults header="Survey Responses" responses={surveyResponses} textOnlyAnswers={['Do you have any additional thoughts about Comixology\'s search feature?']} />
      </Container>
    </>
  );
}

export default App;
