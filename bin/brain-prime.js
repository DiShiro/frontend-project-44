#!/usr/bin/env node

import { generationNumber, isPrime } from '../src/helpers/helpers.js';
import runGame from '../src/runGame.js';

const generatePrimeQuestion = () => {
  const number = generationNumber();
  const isNumberPrime = isPrime(number);
  const question = `${number}`;
  const correctAnswer = isNumberPrime ? 'yes' : 'no';
  
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the given number is prime. Otherwise answer "no".';
runGame(description, generatePrimeQuestion);
