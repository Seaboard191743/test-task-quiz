import { dataObj } from "../constants/constants";

//Return initital questions data if localStorage is empty
export const getQuestionArr = () => {
  const { questionArr } = dataObj;
  const questions =
    JSON.parse(localStorage.getItem("questionList")) || questionArr;
  return questions;
};
