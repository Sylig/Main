// Function to sum an array of integers //

function findSum(num1, num2, num3) {
  return sum;
}

// Function to subtract two numbers //

function subtractNumbers(num1, num2) {
  return num2 - num1;
}

// Function to multiply two numbers //

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

// Function to divide numbers //

function divideNumbers(num1, num2) {
  //Check if the second number is equal to 0, if it is a message of Error will be displayed
  if (num2 === 0) {
    throw new Error("Error, division by 0 si not allowed.");
  }

  return num1 / num2;
}

// Array with three integers //

findSum(4, 8, 12);

function findSum(num1, num2, num3) {
  console.log(`The result is: ${num1 + num2 + num3}`);

  let sum = num1 + num2 + num3;

  return sum;
}

// Function to subtract two numbers from the array //

subtractNumbers(4, 8);

function subtractNumbers(num1, num2) {
  console.log(`The result is: ${num2 - num1}`);

  let subtract = num2 - num1;

  return subtract;
}

// Function to multiply two numbers of the Array //

multiplyNumbers(4, 8, 12);

function multiplyNumbers(num3, num1) {
  console.log(`The result is ${num3 * num1}`);

  let multiplication = num3 * num1;

  return multiplication;
}

// Function for division //

divideNumbers(24, 12);

function divideNumbers(sum, num3) {
  console.log(`The result is ${sum / num3}`);

  let division = sum / num3;

  return division;
}
