import { createElement } from "../helpers/create-element";

export const createButtons = () => {
  const startQuizBtn = createElement({
    tagName: "button",
    className: ["btn", "btn__start"],
  });
  const manageQuizBtn = createElement({
    tagName: "button",
    className: ["btn", "btn__add"],
  });
  const submitQuizBtn = createElement({
    tagName: "button",
    className: ["btn", "btn__submit"],
  });
  const backToStart = createElement({
    tagName: "button",
    className: ["btn", "btn__toMain"],
  });
  startQuizBtn.innerText = "Начать тест";
  manageQuizBtn.innerText = "Добавить вопрос";
  submitQuizBtn.innerText = "Отправить";
  backToStart.innerText = "На главную";
  return {
    startQuizBtn,
    manageQuizBtn,
    submitQuizBtn,
    backToStart,
  };
};
