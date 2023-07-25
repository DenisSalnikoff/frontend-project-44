import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const askQuestion = (condition, question, correctAnswer, name) => {
  console.log(condition);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = answer.trim().toLocaleLowerCase() === correctAnswer.toString();
  if (correct) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  return correct;
};

export const getRandomPositiveInt = (max) => Math.floor(Math.random() * max) + 1;

export const runGame = (getQuestionAndAnswer, condition) => {
  const winCount = 3;
  const name = greeting();
  let question;
  let correctAnswer;
  for (let count = 0; count < winCount; count += 1) {
    [question, correctAnswer] = getQuestionAndAnswer();
    if (!askQuestion(condition, question, correctAnswer, name)) return;
  }
  console.log(`Congratulations, ${name}!`);
};
