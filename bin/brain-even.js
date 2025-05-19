#!/usr/bin/env node

import { isEven, generationNumber } from '../helpers/helpers.js';
import runGame from '../src/runGame.js';

const createEvenCheckQuestion = () => {
  const number = generationNumber();
  const answer = isEven(number) ? 'yes' : 'no';

  const question = `${number}`;

  return [question, answer];
};

const description = 'Respond with "yes" if the number is even, otherwise answer "no".';
runGame(description, createEvenCheckQuestion);
