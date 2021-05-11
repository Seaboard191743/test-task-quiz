import { dataObj } from "../constants/constants";

export const getQuestionArr = () => {
  const { questionArr } = dataObj;
  const questions =
    JSON.parse(localStorage.getItem("questionList")) || questionArr;
  return questions;
};
