#!/usr/bin/env node

import welcomeUser from '../src/cli.js';
import { gcd, generationNumber } from '../helpers/helpers.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = welcomeUser();

console.log(`Hello, ${name}!`);

console.log('Find the greatest common divisor of given numbers.');

let count = 0;

for (let i = 0; i < 3; i = i + 1) {
  const num1 = generationNumber();
  const num2 = generationNumber();
  const peremGcd = gcd(num1, num2);

  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');

  if (peremGcd === Number(answer)) {
    console.log('Correct!');
    count = count + 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${peremGcd}.`, `Let's try again, ${name}!`);
    break;
  }
}

if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}
