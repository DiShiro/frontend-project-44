#!/usr/bin/env node

import welcomeUser from '../src/cli.js';

console.log('Greetings from Brain Games!');

const userName = welcomeUser();

console.log(`Hello, ${userName}!`);
