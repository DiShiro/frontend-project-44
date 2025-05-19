#!/usr/bin/env node

import welcomeUser from '../src/cli.js';
import { gcd, generationNumber } from '../helpers/helpers.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = welcomeUser();

console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of the given numbers.');

let correctAnswers = 0;

for (let i = 0; i < 3; i += 1) {
  const firstNumber = generationNumber();
  const secondNumber = generationNumber();
  const correctGcd = gcd(firstNumber, secondNumber);

  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctGcd === Number(userAnswer)) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctGcd}'. Let's try again, ${userName}!`);
    break;
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${userName}!`);
}

