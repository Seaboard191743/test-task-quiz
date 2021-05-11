//Pipe functional composition helper
export const pipe =
  (...fns) =>
  (arg) => {
    return fns.reduce((val, fn) => {
      return fn(val);
    }, arg);
  };
