// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"

var sharePizza = pizzaSlices(8)

function pizzaSlices(totalSlices) {
    return function(numPeople) {
      const slicesPerPerson = totalSlices / numPeople;
      return `Each person gets ${slicesPerPerson} slices of pizza`;
    }
  }
console.log(sharePizza(2));
console.log(sharePizza(3));


