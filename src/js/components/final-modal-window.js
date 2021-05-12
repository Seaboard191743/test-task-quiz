import { createButtons } from "./buttons";
import { createElement } from "../helpers/create-element";
import { createStartPage } from "./start-page";

const createModal = ({ questionCount, count, mistakes }) => {
  const { backToStart } = createButtons();
  const layer = createElement({ tagName: "div", className: ["layer"] });
  const status = createElement({ tagName: "h2", className: ["layer__status"] });
  status.innerText = mistakes.length
    ? "Вы неправильно ответили на вопросы:"
    : `Ваш результат: ${count} из ${questionCount}. Вы молодец!`;
  const mistakesList = `
      <div class = "mistakes">
        ${mistakes
          .map(
            ({ num, title }) => `<p class = "mistake">${num + 1}. ${title}</p>`
          )
          .join("")}
        <h3 class = "mistakes__subTitle">Ваш результат: ${count} из ${questionCount}</h3>
      </div>
    `;
  return {
    layer,
    status,
    mistakesList,
    backToStart,
  };
};

export const showFinalModal = (result) => {
  root.innerHTML = "";
  const { layer, status, mistakesList, backToStart } = createModal(result);
  layer.appendChild(status);
  result.mistakes.length
    ? layer.insertAdjacentHTML("beforeend", mistakesList)
    : layer.classList.add("layer__success");

  layer.appendChild(backToStart);
  document.body.appendChild(layer);
  backToStart.addEventListener("click", () => {
    createStartPage();
    layer.style.display = "none";
  });
};
