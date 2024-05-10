// Shopping List
shoppingItems = ["Broccoli", "Beer", "Cheese", "Mushrooms"];

// get element
list_element = document.getElementById("shopping_items");

// function to show items in the list
function displayItems() {
  for (let i = 0; i < 4; i++) {
    list_element.innerHTML += `<li id = ${
      "item" + i.toString()
    } onClick = "setDefaultChecked(this.id);">${shoppingItems[i]}</li>`;
  }
}

// css styling for marking first two items as bought
function setDefaultChecked(itemId) {
  item_element = document.getElementById(itemId);
  item_element.style.colour = "red";
}
