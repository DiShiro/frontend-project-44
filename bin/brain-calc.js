#!/usr/bin/env node

import { generationMathOperator, calcNums, generationNumber } from '../helpers/helpers.js';

const createCalcQuestion = () => {
  const num1 = generationNumber();
  const num2 = generationNumber();
  const mathOperator = generationMathOperator();

  const question = `${num1} ${mathOperator} ${num2}`;
  const correctAnswer = String(calcNums(num1, num2, mathOperator));

  return [question, correctAnswer];
};

const description = 'Calculate the result of the expression:';
runGame(description, createCalcQuestion);
