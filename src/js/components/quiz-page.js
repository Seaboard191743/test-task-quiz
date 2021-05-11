import { getQuestionArr } from "../helpers/get-question-arr";
import { createElement } from "../helpers/create-element";
import { createButtons } from "./buttons";
import { createStartPage } from "./start-page";

const createQuizItem = (quizContainer) => {
  const questions = getQuestionArr();
  questions.forEach((item) => {
    const template = `
          <div class = "quiz__item">
            <p class = "question">${item.question}</p>
            ${item.answers
              .map((answer) => {
                return `<input type = "checkbox"><label = "input-Label">${answer}</label><br>`;
              })
              .join("")}
          </div>
      `;
    quizContainer.insertAdjacentHTML("beforeend", template);
  });
};

export const createQuizPage = () => {
  const { submitQuizBtn } = createButtons();
  const backToMain = createElement({ tagName: "p", className: ["backToMain"] });
  backToMain.innerText = "На Главную";
  backToMain.addEventListener("click", createStartPage);
  const quizContainer = createElement({ tagName: "div", className: ["quiz"] });
  setTimeout(() => {
    root.innerHTML = "";
    createQuizItem(quizContainer);
    quizContainer.appendChild(submitQuizBtn);
    root.append(backToMain, quizContainer);
  }, 300);
};
