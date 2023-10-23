export const delay = (ms: number, cb: Function) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, ms);
  });
};