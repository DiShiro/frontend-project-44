export const calcNums = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

export const generationMathOperator = () => {
  const num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return '+';
    case 1:
      return '-';
    default:
      return '*';
  }
}

export const isEven = (num) => num % 2 === 0;

export const gcd = (a, b) => {
  if (a === 0) return Math.abs(b);
  if (b === 0) return Math.abs(a);
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export const generationNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generationArithmeticProgression = () => {
  const lengthProgression = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  const stepProgression = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const start = Math.floor(Math.random() * 100);
  let current = start;

  const newArr = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    newArr.push(current);
    current += stepProgression;
  }

  return newArr;
}

export const replaceRandomWithDots = (arr) => {
  const positionPoints = Math.floor(Math.random() * arr.length); // Возможно изменить логику, если не допускается изменение края массива
  const newArr = arr.map((item, index) => (index !== positionPoints ? item : '..'));

  return [newArr, arr[positionPoints]];
}

export const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

