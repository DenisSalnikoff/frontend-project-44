import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (condition, question, correctAnswer, name) => {
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

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const getRandomPositiveInt = (max) => Math.floor(Math.random() * max) + 1;
