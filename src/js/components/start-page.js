import { createElement } from "../helpers/create-element";
import { createButtons } from "./buttons";

export const createStartPage = () => {
  root.innerHTML = "";
  const { startQuizBtn, manageQuizBtn } = createButtons();
  const heading = createElement({ tagName: "h1", className: ["heading"] });
  const btns = createElement({ tagName: "div", className: ["btns-container"] });
  const desc = createElement({ tagName: "p", className: ["par__description"] });
  heading.innerText = "Quiz";
  desc.innerText =
    "Проходите тест. Создавайте новые вопросы и добавляйте в тест";
  btns.append(startQuizBtn, manageQuizBtn);
  root.append(heading, desc, btns);
};
