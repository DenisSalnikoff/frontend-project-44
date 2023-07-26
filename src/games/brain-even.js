import runGame from '../index.js';
import getRandomPositiveInt from '../getRandomPositiveInt.js';

const getQuestionAndAnswer = () => {
  // Parameters
  const maxQuestionNumber = 999;

  // Algorithm
  const question = getRandomPositiveInt(maxQuestionNumber);
  const correctAnswer = question % 2 ? 'no' : 'yes';
  return [question, correctAnswer];
};

export default () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(getQuestionAndAnswer, condition);
};
