export const root = document.querySelector("#root");
export const statusMessages = {
  status_cc1: "Вы не ввели текст вопроса. Попробуйте добавить вопрос заново.",
  status_cc3:
    "Вы не ввели правильные ответы. Попробуйте добавить вопрос заново.",
  status_cc4:
    "Все вопросы должны иметь хотя бы один выбранный вариант ответа. Проверьте правильность заполнения.",
  status_cc6:
    "Поле может содержать только уникальные значения '1,2,3,4', разделенные запятой. Попробуйте добавить вопрос заново.",
};
export const promptMessages = [
  "Введите текст вопроса:",
  "Введите номера правильных ответов через запятую. Нумерация начинается с 1.",
];
export const dataObj = {
  questionBlock: { question: "", answers: [], correctAnswers: "" },
  questionArr: [
    {
      question: "Как в JS можно создать неизменяемую переменную.",
      answers: ["const", "let", "var", "int"],
      correctAnswers: "1",
      attempt: "",
    },
    {
      question: "Что из перечисленного можно отнести к типам данных в js.",
      answers: ["null", "Boolean", "object", "BigInt"],
      correctAnswers: "1,2,3,4",
    },
    {
      question: "Выберите ответы, которые являются методами массивов в JS.",
      answers: ["join", "slice", "parseInt", "reverse"],
      correctAnswers: "2,4",
    },
    {
      question: "Какие из нижеприведенных методов возвращают новый массив.",
      answers: ["splice", "reverse", "forEach", "map"],
      correctAnswers: "4",
    },
    {
      question: "Выберите методы, которыми обладает Set в JS.",
      answers: ["set", "add", "has", "length"],
      correctAnswers: "2,3",
    },
  ],
};
