import ISurveyResponse from "./ISurveyResponse";

export default interface ISurveyResults {
  header: string,
  responses: ISurveyResponse[]
}
