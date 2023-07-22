#!/usr/bin/env node
import { greeting, askQuestion } from '../../src/cli.js';
import { getRandomPositiveInt, getRandomMathSign} from '../../src/math-utils.js';

const name = greeting();
const maxNumberHard = 99;
const maxNumberSimple = 9;
const winCount = 3;
const condition = 'What is the result of the expression?';
let count;
for (count = 0; count < winCount; count += 1) {
  const first = getRandomPositiveInt(maxNumberHard);
  const sign = getRandomMathSign();
  const second = (sign === '*') ? getRandomPositiveInt(maxNumberSimple) : getRandomPositiveInt(maxNumberHard);
  const question = `${first} ${sign} ${second}`;
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = (first + second).toString();
      break;
    case '-':
      correctAnswer = (first - second).toString();
      break;
    case '*':
      correctAnswer = (first * second).toString();
      break;
    default:
      correctAnswer = '!error';
  }
  if (!askQuestion(condition, question, correctAnswer, name)) break;
}
if (count === 3) console.log(`Congratulations, ${name}!`);
