#!/usr/bin/env node
import { greeting, askQuestion, congratulations } from '../../src/cli.js';
import { getRandomPositiveInt, isPrimeNumber } from '../../src/math-utils.js';

// Parametrs
const maxNumber = 99;
const winCount = 3;
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Algorithm
const name = greeting();
let count;
for (count = 0; count < winCount; count += 1) {
  const randomNumber = getRandomPositiveInt(maxNumber);
  const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  if (!askQuestion(condition, randomNumber, correctAnswer, name)) break;
}
if (count === 3) congratulations(name);
