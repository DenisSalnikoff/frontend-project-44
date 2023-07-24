import {
  greeting,
  askQuestion,
  congratulations,
  getRandomPositiveInt,
} from '../index.js';

const getRandomMathSign = () => {
  switch (getRandomPositiveInt(3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '!error';
  }
};

const makeCalc = (first, sign, second) => {
  switch (sign) {
    case '+':
      return (first + second);
    case '-':
      return (first - second);
    case '*':
      return (first * second);
    default:
      return '!error';
  }
};

export default () => {
  // Parametrs
  const maxNumberHard = 99;
  const maxNumberSimple = 9;
  const winCount = 3;
  const condition = 'What is the result of the expression?';

  // Algorithm
  const name = greeting();
  let count;
  for (count = 0; count < winCount; count += 1) {
    const first = getRandomPositiveInt(maxNumberHard);
    const sign = getRandomMathSign();
    const second = (sign === '*') ? getRandomPositiveInt(maxNumberSimple) : getRandomPositiveInt(maxNumberHard);
    const question = `${first} ${sign} ${second}`;
    const correctAnswer = makeCalc(first, sign, second);
    if (!askQuestion(condition, question, correctAnswer, name)) break;
  }
  if (count === 3) congratulations(name);
};
