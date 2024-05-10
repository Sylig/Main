///Create a higher order function///

//Array of words, argument of myFilterFunction
const wordArray = [
  "jazzer",
  "fezzed",
  "mozzle",
  "also",
  "too",
  "absolutely",
  "clearly",
  "indeed",
  "besides",
  "unlike",
];

//callback as callback function and a second argument
let myFilterFunction = (arr) => (callback) => {
  //to create a new empty array
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    //to return the new array and a boolean I use push
    callback(arr[i]) &&
      newArray.push(arr[i]) &&
      newArray.push(callback(arr[i]));
  }

  return newArray;
};

const printNewArray = myFilterFunction(wordArray)((word) => word.length === 6);

//to call the function and log the result in the console
console.log(printNewArray);
