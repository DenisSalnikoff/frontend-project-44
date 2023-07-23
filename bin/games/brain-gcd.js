#!/usr/bin/env node
import { greeting, askQuestion, congratulations } from '../../src/cli.js';
import { getRandomPositiveInt, getGCD } from '../../src/math-utils.js';

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
  if (!askQuestion(condition, question, correctAnswer, name)) break;
}
if (count === winCount) congratulations(name);
