import ISurveyAnswer from "./ISurveyAnswer";

export default interface ISurveyResponse {
  question: string
  answers: ISurveyAnswer[]
}
