#!/usr/bin/env node
import { greeting, askQuestion, congratulations } from '../../src/cli.js';
import { getRandomPositiveInt, getProgressionArray } from '../../src/math-utils.js';

// Parametrs
const maxStartNumber = 50;
const maxStep = 10;
const minStepCount = 5;
const maxStepCount = 15;
const winCount = 3;
const condition = 'What number is missing in the progression?';

// Algorithm
const name = greeting();
let count;
for (count = 0; count < winCount; count += 1) {
  const startNumber = getRandomPositiveInt(maxStartNumber);
  const step = getRandomPositiveInt(maxStep);
  const stepCount = getRandomPositiveInt(maxStepCount - minStepCount + 1) + minStepCount - 1;
  const progressionArray = getProgressionArray(startNumber, step, stepCount);
  const deleteElementIndex = getRandomPositiveInt(stepCount) - 1;
  const correctAnswer = progressionArray[deleteElementIndex];
  progressionArray[deleteElementIndex] = '..';
  const question = progressionArray.join(' ');
  if (!askQuestion(condition, question, correctAnswer, name)) break;
}
if (count === winCount) congratulations(name);
