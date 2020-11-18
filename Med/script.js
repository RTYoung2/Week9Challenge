//ROB'S WAY -,-

// const sharePizza = cutPizzaSlices;

// function cutPizzaSlices(people) {
//   const slices = 8;
//   const slicePerPerson = slices / people;
//   //sharepizza= slicePerPerson
//   console.log(`Each person gets ${slicePerPerson} slices of pizza`);
// }

// sharePizza(2);
// sharePizza(3);

// var sharedPizza1 = cutPizzaSlices(2);
// cutPizzaSlices(8, 2);
// cutPizzaSlices(8, 3);
// var sharedPizza2 = cutPizzaSlices(8, 3);
// sharePizza(2);
//Var sharepizza =cutPizzaSlices  needs to go here?

//definition = where things are stored

//ACTUAL XD
var cutPizzaSlices = function (slices) {
  var pizzaMath = function (people) {
    console.log(`Each person gets ${slices / people} slices of pizza`);
  };
  return pizzaMath;
};

var sharePizza = cutPizzaSlices(8);
// sharePizza = pizzaMath
sharePizza(2);
sharePizza(3);

sharePizza(4);

cutPizzaSlices(8)(2);
cutPizzaSlices(8)(3);
