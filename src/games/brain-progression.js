import {
  greeting,
  askQuestion,
  congratulations,
  getRandomPositiveInt,
} from '../index.js';

const getProgressionArray = (startNumber, step, stepCount) => {
  const result = [startNumber];
  for (let i = 1; i < stepCount; i += 1) {
    result.push(result.at(-1) + step);
  }
  return result;
};
export default () => {
  // Parametrs
  const maxStartNumber = 50;
  const maxStep = 10;
  const minStepsCount = 5;
  const maxStepsCount = 15;
  const winCount = 3;
  const condition = 'What number is missing in the progression?';

  // Algorithm
  const name = greeting();
  let count;
  for (count = 0; count < winCount; count += 1) {
    const startNumber = getRandomPositiveInt(maxStartNumber);
    const step = getRandomPositiveInt(maxStep);
    const stepsCount = getRandomPositiveInt(maxStepsCount - minStepsCount + 1) + minStepsCount - 1;
    const progressionArray = getProgressionArray(startNumber, step, stepsCount);
    const deleteElementIndex = getRandomPositiveInt(stepsCount) - 1;
    const correctAnswer = progressionArray[deleteElementIndex];
    progressionArray[deleteElementIndex] = '..';
    const question = progressionArray.join(' ');
    if (!askQuestion(condition, question, correctAnswer, name)) break;
  }
  if (count === winCount) congratulations(name);
};
