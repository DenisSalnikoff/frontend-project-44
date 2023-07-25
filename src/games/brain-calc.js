import {
  getRandomPositiveInt,
  runGame,
} from '../index.js';

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

const getQuestionAndAnswer = () => {
  // Parameters
  const maxNumberHard = 99;
  const maxNumberSimple = 9;
  const mathSigns = ['+', '-', '*'];

  // Algorithm
  const first = getRandomPositiveInt(maxNumberHard);
  const sign = mathSigns[getRandomPositiveInt(3) - 1];
  const second = (sign === '*') ? getRandomPositiveInt(maxNumberSimple) : getRandomPositiveInt(maxNumberHard);
  const question = `${first} ${sign} ${second}`;
  const correctAnswer = makeCalc(first, sign, second);
  return [question, correctAnswer];
};

export default () => {
  const condition = 'What is the result of the expression?';
  runGame(getQuestionAndAnswer, condition);
};
