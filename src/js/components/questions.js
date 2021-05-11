import { statusMessages } from "../constants/constants";
import { promptMessages } from "../constants/constants";

const { status_cc1, status_cc3, status_cc6 } = statusMessages;
const [prompt_mess1, prompt_mess2] = promptMessages;

export const createCorrectAnswers = (obj) => {
  if (!obj) return;
  let newQuestion = { ...obj };
  let answer = prompt(prompt_mess2);
  if (!answer) {
    alert(status_cc3);
    return;
  }
  const reg = /^([1]?)((,?)[2]?)((,?)[3]?)(,:?[4]?)*$/;

  answer = answer.trim().split(",").join();
  const regTrigger = answer.match(reg) && !answer.endsWith(",");
  if (!regTrigger) {
    alert(status_cc6);
    return;
  }
  return { ...newQuestion, correctAnswers: answer };
};

export const createAnswers = (obj) => {
  let newQuestion = { ...obj };
  const { answers } = newQuestion;
  if (!answers) return;
  let newAnswers = [...answers];
  for (let i = 1; i <= 4; i += 1) {
    const answer = prompt(`Введите текст ${i} варианта ответа`);
    if (!answer) {
      alert(
        `Вы не ввели текст ${i} варианта ответа. Попробуйте добавить вопрос заново.`
      );
      return;
    }
    newAnswers = [...newAnswers, answer];
  }
  newQuestion = { ...newQuestion, answers: newAnswers };
  return newQuestion;
};

export const createQuestion = (obj) => {
  let question = prompt(prompt_mess1);
  while (!question) {
    if (!question) {
      alert(status_cc1);
      return;
    }
    question = prompt(prompt_mess1);
  }
  const newQuestion = Object.assign({}, obj, { question });
  return newQuestion;
};
