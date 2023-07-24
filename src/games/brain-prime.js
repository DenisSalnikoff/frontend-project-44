import {
  greeting,
  askQuestion,
  congratulations,
  getRandomPositiveInt,
} from '../index.js';

const isPrimeNumber = (number) => {
  if (number < 2) return false;
  const halfNumber = Math.floor(number / 2);
  for (let i = 2; i <= halfNumber; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export default () => {
  // Parametrs
  const maxQuestionNumber = 99;
  const winCount = 3;
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  // Algorithm
  const name = greeting();
  let count;
  for (count = 0; count < winCount; count += 1) {
    const question = getRandomPositiveInt(maxQuestionNumber);
    const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
    if (!askQuestion(condition, question, correctAnswer, name)) break;
  }
  if (count === 3) congratulations(name);
};
