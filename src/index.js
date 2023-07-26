import readlineSync from 'readline-sync';

export default (getQuestionAndAnswer, condition) => {
  // rounds count
  const winCount = 3;

  // greeting and ask for the name
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // game
  for (let count = 0; count < winCount; count += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(condition);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.trim().toLowerCase() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  // congratulations
  console.log(`Congratulations, ${name}!`);
};
