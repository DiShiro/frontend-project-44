#!/usr/bin/env node

import { generationArithmeticProgression, replaceRandomWithDots } from '../src/helpers/helpers.js';
import runGame from '../src/runGame.js';

const generateProgressionQuestion = () => {
  const progression = generationArithmeticProgression();
  const [modifiedProgression, missingNumber] = replaceRandomWithDots(progression);

  const question = modifiedProgression.join(' '); 

  return [question, String(missingNumber)]; 
};

const description = 'What number is missing in the progression?';
runGame(description, generateProgressionQuestion);
