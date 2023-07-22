#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../../src/cli.js';

const getRandomPositiveInt = (max) => Math.floor(Math.random() * max) + 1;

const name = greeting();
const maxNumber = 1000;
const winCount = 3;
let count = 0;
while (count < winCount) {
  const number = getRandomPositiveInt(maxNumber);
  const correctAnswer = number % 2 ? 'no' : 'yes';
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toLocaleLowerCase() === correctAnswer) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
if (count === 3) console.log(`Congratulations, ${name}!`);
