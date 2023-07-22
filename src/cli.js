import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (condition, question, correctAnswer, name) => {
  console.log(condition);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = answer.trim().toLocaleLowerCase() === correctAnswer;
  if (correct) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  return correct;
};
