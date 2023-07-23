#!/usr/bin/env node
import { greeting, askQuestion, congratulations } from '../../src/cli.js';
import { getRandomPositiveInt, isPrimeNumber } from '../../src/math-utils.js';

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
