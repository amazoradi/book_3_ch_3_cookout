const hamburger = {
  name: 'Hamburger',
  type: 'beef',
  cooked: false,
}
const zucchini = {
  name: 'Zucchini',
  type: 'vegetable',
  cooked: false,
}
const chickenBreast = {
  name: 'Chicken Breast',
  type: 'chicken',
  cooked: false,
}
const corn = {
  name: 'Corn',
  type: 'vegetable',
  cooked: false,
}
const steak = {
  name: 'Steak',
  type: 'beef',
  cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];


function grill(currentObject) {
  currentObject.cooked = true;
  cookedFood.push(currentObject);
  if (currentObject.cooked === true) {
      uncookedFood.shift(currentObject);
    }
  };

for (let i = 0; i < uncookedFood.length; i++) {
  grill(uncookedFood[i]);
  i--;
};


console.log(cookedFood)
console.log(uncookedFood);