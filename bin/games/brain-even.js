#!/usr/bin/env node
import { greeting, askQuestion } from '../../src/cli.js';
import { getRandomPositiveInt } from '../../src/math-utils.js';

const name = greeting();
const maxNumber = 999;
const winCount = 3;
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
let count;
for (count = 0; count < winCount; count += 1) {
  const randomNumber = getRandomPositiveInt(maxNumber);
  const correctAnswer = randomNumber % 2 ? 'no' : 'yes';
  if (!askQuestion(condition, randomNumber, correctAnswer, name)) break;
}
if (count === 3) console.log(`Congratulations, ${name}!`);
