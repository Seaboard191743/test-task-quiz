import { pipe } from "./js/helpers/pipe-composition";
import { getQuestionArr } from "./js/helpers/get-question-arr";
import { createStartPage } from "./js/components/start-page";
import {
  createQuestion,
  createAnswers,
  createCorrectAnswers,
} from "./js/components/questions";
import { createQuizPage } from "./js/components/quiz-page";
import { showFinalModal } from "./js/components/final-modal-window";
import { dataObj } from "./js/constants/constants";
import { statusMessages } from "./js/constants/constants";

import "./css/style.css";

const { status_cc4 } = statusMessages;

const calculateResult = (answers) => {
  const questions = getQuestionArr();
  const result = {
    questionCount: null,
    count: 0,
    mistakes: [],
  };
  questions.forEach((item, i) => {
    const correctAnswer = item.correctAnswers === answers[i].join();
    if (correctAnswer) result.count += 1;
    if (!correctAnswer) result.mistakes.push({ num: i, title: item.question });
  });
  result.questionCount = questions.length;
  showFinalModal(result);
};

const checkQuizAnswers = () => {
  const questionBlocks = document.querySelectorAll(".quiz__item");
  const answerAttempts = [];
  questionBlocks.forEach((block) => {
    const checkBoxes = block.querySelectorAll("input[type='checkbox']");
    const blockArr = [];
    checkBoxes.forEach((input, i) => {
      if (input.hasAttribute("checked")) {
        blockArr.push(i + 1);
      }
    });
    answerAttempts.push(blockArr);
  });
  answerAttempts.every((item) => item.length > 0)
    ? calculateResult(answerAttempts)
    : alert(status_cc4);
};

const handleClick = (e) => {
  const target = e.target;
  if (target.matches(".btn__start")) {
    createQuizPage();
  }
  if (target.matches(".btn__add")) {
    let { questionBlock, questionArr } = dataObj;
    const doPipe = pipe(createQuestion, createAnswers, createCorrectAnswers);
    const question = doPipe(questionBlock);
    question ? questionArr.push(question) : null;
    localStorage.setItem("questionList", JSON.stringify(questionArr));
  }
  if (target.matches(".btn__submit")) {
    checkQuizAnswers();
  }
};

const handleChange = (e) => {
  const target = e.target;
  if (target.matches("input[type='checkbox']")) {
    target.checked
      ? target.setAttribute("checked", true)
      : target.removeAttribute("checked");
  }
};

document.body.addEventListener("click", (e) => {
  handleClick(e);
  handleChange(e);
});
window.addEventListener("DOMContentLoaded", createStartPage);
