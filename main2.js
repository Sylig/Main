// Array to store shopping list items
let items = [];

// Function to display the shopping list
function displayItems() {
  // Clear the current list
  document.getElementById("itemList").innerHTML = "";

  // Iterate through the items array and add them to the list
  for (let i = 0; i < items.length; i++) {
    // Create a list item element
    let listItem = document.createElement("li");

    // Create a span element with a close class
    let span = document.createElement("span");
    span.className = "delete";
    span.innerHTML = "\u00D7";

    // Add the span element to the list item
    listItem.appendChild(span);

    // Add the item text to the list item
    listItem.appendChild(document.createTextNode(items[i]));

    // Add the list item to the shopping list
    document.getElementById("itemList").appendChild(listItem);
  }

  // Add a click event listener to the delete elements
  let deleteElements = document.getElementsByClassName("delete");
  for (let i = 0; i < deleteElements.length; i++) {
    deleteElements[i].addEventListener("click", deleteItem);
  }
}

// Function to add a new item to the list
function addItem() {
  // Get the value of the input field
  let item = document.getElementById("inputField").value;

  // If the input field is empty, display an alert
  if (item === "") {
    alert("Please enter an item to add to the list");
  } else {
    // Add the item to the array and reset the input field
    items.push(item);
    document.getElementById("inputField").value = "";
  }

  // Display the updated list
  displayItems();
}

// Function to delete an item from the list
function deleteItem(event) {
  // Get the index of the item to delete
  let index = event.target.parentElement.index;

  // Remove the item from the array and update the list display
  items.splice(index, 1);
  displayItems();
}

// Add a click event listener to the item list
document.getElementById("itemList").addEventListener("click", function (event) {
  // If the event target is a list item, toggle the checked class
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

// Add a keyup event listener to the input field
document
  .getElementById("inputField")
  .addEventListener("keyup", function (event) {
    // If the keycode is 13 (Enter key), trigger the add button's click event
    if (event.keyCode === 13) {
      document.getElementById("addButton").click();
    }
  });
