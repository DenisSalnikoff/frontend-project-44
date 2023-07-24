import {
  greeting, askQuestion, congratulations, getRandomPositiveInt,
} from '../index.js';

const euclideanAlgorithm = (a, b) => {
  if (!b) return a;
  return euclideanAlgorithm(b, a % b);
};

const getGCD = (x, y) => ((x >= y) ? euclideanAlgorithm(x, y) : euclideanAlgorithm(y, x));

export default () => {
  // Parametrs
  const maxQuestionNumber = 99;
  const winCount = 3;
  const condition = 'Find the greatest common divisor of given numbers.';

  // Algorithm
  const name = greeting();
  let count;
  for (count = 0; count < winCount; count += 1) {
    const firstNumber = getRandomPositiveInt(maxQuestionNumber);
    const secondNumber = getRandomPositiveInt(maxQuestionNumber);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getGCD(firstNumber, secondNumber);
    if (!askQuestion(condition, question, correctAnswer, name)) return;
  }
  congratulations(name);
};
