const euclideanAlgorithm = (a, b) => {
  if (!b) return a;
  return euclideanAlgorithm(b, a % b);
};

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

export const getGCD = (x, y) => ((x >= y) ? euclideanAlgorithm(x, y) : euclideanAlgorithm(y, x));

export const getProgressionArray = (startNumber, step, stepCount) => {
  const result = [startNumber];
  for (let i = 1; i < stepCount; i += 1) {
    result.push(result.at(-1) + step);
  }
  return result;
};

export const isPrimeNumber = (number) => {
  if (number < 2) return false;
  const halfNumber = Math.floor(number / 2);
  for (let i = 2; i <= halfNumber; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
