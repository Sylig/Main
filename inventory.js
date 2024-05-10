///Create a class object with 5 instances ///
let myArray = [];

class Shoes {
  constructor(Name, productCode, Quantity, Currency, Value) {
    this.Name = Name;
    this.productCode = productCode;
    this.Quantity = Quantity;
    this.Currency = Currency;
    this.Value = Value;
  }
}

//create 5 object instances/objects using the shoe contructor
const shoe1 = new Shoes("Maia", 2345, 1, "£", "259");
const shoe2 = new Shoes("Slim", 78, 3, "£", "100");
const shoe3 = new Shoes("Runner", 909, 8, "£", "300");
const shoe4 = new Shoes("Odissey", 887, 2, "£", "350");
const shoe5 = new Shoes("Quantum", 555, 5, "£", "95");

//push the instances into a class
myArray.push(shoe1, shoe2, shoe3, shoe4, shoe5);
console.log(myArray);

/// 1.Function which looks for any shoe  ///
function findShoe(productCode) {
  const foundShoe = myArray.find((Shoe) => Shoe.productCode === productCode);
  if (foundShoe) {
    console.log("Shoe found:");
    console.log(foundShoe);
  } else {
    console.log("Shoe not found");
  }
}

findShoe(78);

/// 2.Function for lowest value ///
function lowestValue() {
  const sortedShoes = [...myArray].sort((a, b) => a.Value - b.Value);
  console.log("Shoe with the lowest Value:");
  console.log(sortedShoes[0]);
}

lowestValue();

///3. Function for highestValue ///
function highestValue() {
  const sortedShoes = [...myArray].sort((a, b) => b.Value - a.Value);
  console.log("Shoe with the highest Value:");
  console.log(sortedShoes[0]);
}

highestValue();

/// 4.Function to edit any aspect of an instance of the shoes class ///
function editProperties(Name, productCode, Quantity, Value) {
  const foundShoe = myArray.findIndex(
    (Shoe) => Shoe.productCode === productCode
  );
  if (foundShoe !== -1) {
    myArray[foundShoe].Name = Name;
    myArray[foundShoe].Quantity = Quantity;
    myArray[foundShoe].Value = Value;
    console.log("Shoe edited successfully.");
    console.log(myArray[foundShoe]);
  } else {
    console.log("Shoe not found.");
  }
}

editProperties("Fila", 2345, 2, "750");
editProperties("Vans", 78, 4, "150");
editProperties("Underground", 909, 5, "230");
editProperties("Adidas", 887, 10, "120");
editProperties("Converse", 555, 20, "70");

/// 5. Custom function for ascending order using sort method and based on Value ///
function ascendingOrder(myArray) {
  myArray.sort((a, b) => a.Value - b.Value);

  return myArray;
}

console.table(ascendingOrder(myArray));

// Comment: The edit function has been edited calling the function for each shoe
// I wanted to edit the properties, keeping the productCode invariable.
