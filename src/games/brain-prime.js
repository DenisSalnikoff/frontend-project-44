import {
  getRandomPositiveInt,
  runGame,
} from '../index.js';

const isPrimeNumber = (number) => {
  if (number < 2) return false;
  const halfNumber = Math.floor(number / 2);
  for (let i = 2; i <= halfNumber; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  // Parameters
  const maxQuestionNumber = 99;

  // Algorithm
  const question = getRandomPositiveInt(maxQuestionNumber);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(getQuestionAndAnswer, condition);
};
