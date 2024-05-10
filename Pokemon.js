let data = [];
//to get data from Charizard
fetch("https://pokeapi.co/api/v2/pokemon/charizard/")
  //to transfer the object into a text value I sue json
  .then((response) => response.json())
  .then((result) => {
    data = result;

    //to select the only properties I am interested in
    console.log("Name: " + data.name);
    console.log("Weight: " + data.weight);
    console.log(data.abilities);
  });

(error) => {
  console.log(error);
};
