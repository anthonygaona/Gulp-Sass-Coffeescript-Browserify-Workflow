var coffee;

coffee = document.getElementById('coffee');

coffee.innerHTML = "Coffeescript enabled!";

cupOfCoffee((function(_this) {
  return function() {
    return console.log("Coffeescript enabled");
  };
})(this));
