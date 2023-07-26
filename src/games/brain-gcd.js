import runGame from '../index.js';
import getRandomPositiveInt from '../getRandomPositiveInt.js';

const getGCD = (a, b) => {
  if (!b) return a;
  return getGCD(b, a % b);
};

const getQuestionAndAnswer = () => {
  // Parameters
  const maxQuestionNumber = 99;

  // Algorithm
  const first = getRandomPositiveInt(maxQuestionNumber);
  const second = getRandomPositiveInt(maxQuestionNumber);
  const question = `${first} ${second}`;
  const correctAnswer = (first >= second) ? getGCD(first, second) : getGCD(second, first);
  return [question, correctAnswer];
};

export default () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  runGame(getQuestionAndAnswer, condition);
};
