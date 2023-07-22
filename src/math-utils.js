export const getRandomPositiveInt = (max) => Math.floor(Math.random() * max) + 1;

export const getRandomMathSign = () => {
  switch (getRandomPositiveInt(3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '!error';
  }
};
