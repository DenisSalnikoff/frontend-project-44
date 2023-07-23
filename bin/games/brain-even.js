#!/usr/bin/env node
import { greeting, askQuestion, congratulations } from '../../src/cli.js';
import { getRandomPositiveInt } from '../../src/math-utils.js';

// Parametrs
const maxNumber = 999;
const winCount = 3;
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

// Algorithm
const name = greeting();
let count;
for (count = 0; count < winCount; count += 1) {
  const randomNumber = getRandomPositiveInt(maxNumber);
  const correctAnswer = randomNumber % 2 ? 'no' : 'yes';
  if (!askQuestion(condition, randomNumber, correctAnswer, name)) break;
}
if (count === 3) congratulations(name);
