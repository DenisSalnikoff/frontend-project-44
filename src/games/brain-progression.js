import runGame from '../index.js';
import getRandomPositiveInt from '../getRandomPositiveInt.js';

const getQuestionAndAnswer = () => {
  // Parameters
  const maxStartNumber = 50;
  const maxStep = 10;
  const minStepsCount = 5;
  const maxStepsCount = 15;

  // Algorithm
  const startNumber = getRandomPositiveInt(maxStartNumber);
  const step = getRandomPositiveInt(maxStep);
  const stepsCount = getRandomPositiveInt(maxStepsCount - minStepsCount + 1) + minStepsCount - 1;
  const progressionArray = [startNumber];
  for (let i = 1; i < stepsCount; i += 1) {
    progressionArray.push(progressionArray.at(-1) + step);
  }
  const deletingElementIndex = getRandomPositiveInt(stepsCount) - 1;
  const correctAnswer = progressionArray[deletingElementIndex];
  progressionArray[deletingElementIndex] = '..';
  const question = progressionArray.join(' ');
  return [question, correctAnswer];
};

export default () => {
  const condition = 'What number is missing in the progression?';
  runGame(getQuestionAndAnswer, condition);
};
