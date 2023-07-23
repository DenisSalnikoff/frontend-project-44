#!/usr/bin/env node
import { greeting, askQuestion, congratulations } from '../../src/cli.js';
import { getRandomPositiveInt, getGCD } from '../../src/math-utils.js';

const name = greeting();
const maxNumber = 99;
const winCount = 3;
const condition = 'Find the greatest common divisor of given numbers.';
let count;
for (count = 0; count < winCount; count += 1) {
  const first = getRandomPositiveInt(maxNumber);
  const second = getRandomPositiveInt(maxNumber);
  const question = `${first} ${second}`;
  const correctAnswer = getGCD(first, second);
  if (!askQuestion(condition, question, correctAnswer.toString(), name)) break;
}
if (count === winCount) congratulations();
