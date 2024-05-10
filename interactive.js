//to create a variable to store a reference to the timer
let intervalID;

//to set the starting number for the timer
let counter = 0;

let startCounter = function () {
  //To initialize the variable
  intervalID = setInterval(() => {
    // to set an increasing number
    console.log(counter++);
  }, 1000);
};

function stopCounter() {
  //To stop the interval I pass the intervalID to clearInterval
  clearInterval(intervalID);
}

//to pass the informations to html
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

//I use .addEventListener to make it interactive
startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);
