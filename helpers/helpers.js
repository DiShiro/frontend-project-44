export const calcNums = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null; 
  }
}

export const generationMathOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

export const isEven = (num) => num % 2 === 0;

export const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

export const generationNumber = () => Math.floor(Math.random() * 101);

export const generationArithmeticProgression = () => {
  const length = Math.floor(Math.random() * 16) + 5; 
  const step = Math.floor(Math.random() * 10) + 1; 
  const start = Math.floor(Math.random() * 100);
  
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  
  return progression;
}

export const replaceRandomWithDots = (arr) => {
  const position = Math.floor(Math.random() * arr.length);
  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (i === position) {
      newArr.push('..'); 
    } else {
      newArr.push(arr[i]);
    }
  }
  
  return [newArr, arr[position]];
}

export const isPrime = (num) => {
  if (num <= 1) return false; 
  if (num === 2) return true; 

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  
  return true;
}
