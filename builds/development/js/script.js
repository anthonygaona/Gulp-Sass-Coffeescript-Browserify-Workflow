var coffee;

coffee = document.getElementById('coffee');

coffee.innerHTML = "Coffeescript enabled!";

cupOfCoffee((function(_this) {
  return function() {
    return console.log("Coffeescript enabled");
  };
})(this));

var x = document.getElementById('depOne');

x.innerHTML = "depOne.js loaded";
var y = document.getElementById('depTwo');

y.innerHTML = "depTwo.js loaded";