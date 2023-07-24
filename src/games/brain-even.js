import {
  greeting,
  askQuestion,
  congratulations,
  getRandomPositiveInt,
} from '../index.js';

export default () => {
  // Parametrs
  const maxQuestionNumber = 999;
  const winCount = 3;
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

  // Algorithm
  const name = greeting();
  let count;
  for (count = 0; count < winCount; count += 1) {
    const question = getRandomPositiveInt(maxQuestionNumber);
    const correctAnswer = question % 2 ? 'no' : 'yes';
    if (!askQuestion(condition, question, correctAnswer, name)) break;
  }
  if (count === 3) congratulations(name);
};
