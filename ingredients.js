var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var x = 0;
// Write a while loop that prints out the contents of ingredients:
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++;
}

// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}