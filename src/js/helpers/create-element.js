//Create DOM Element helper
export const createElement = ({ tagName, className = [], attributes = {} }) => {
  const element = document.createElement(tagName);
  if (className.length > 0) {
    const classNames = className.filter((item) => item);
    element.classList.add(...classNames);
  }
  Object.keys(attributes).forEach((key) =>
    element.setAttribute(key, attributes[key])
  );
  return element;
};
