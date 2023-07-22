#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const getRandomPositiveInt = (max) => Math.floor(Math.random() * max) + 1;

const name = greeting();
const maxNumber = 1000;
let winCount = 0;
while (winCount < 3) {
  const number = getRandomPositiveInt(maxNumber);
  const correctAnswer = number % 2 ? 'no' : 'yes';
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toLocaleLowerCase() === correctAnswer) {
    console.log('Correct!');
    winCount += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    winCount = 0;
  }
}
console.log(`Congratulations, ${name}!`);
