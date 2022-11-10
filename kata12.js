function ingredientCheck(recipe, bakeryAll) {
  let recipeFlag = 0;
  for (let i = 0; i < bakeryAll.length; i++) {
    if (recipe === bakeryAll[i]) {
      recipeFlag = 1;
    } 
  }
  return recipeFlag;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let flag = 0;
  let iCheck = 0;
  let bakeryAll = [].concat(bakeryA, bakeryB); //merge both bakeries
  let recipe = Object.keys(recipes); //convert objects into arrays
  
  for (let recipe of recipes) {  //loop through objects
    flag = 0;
    for (let j = 0; j < recipe["ingredients"].length; j++) {
      //iCheck = ingredientCheck(recipe["ingredients"][j], bakeryAll); //check if current ingredient is present in both bakeries
      //if (iCheck == 1) flag ++; // if yes, add flag
      if (bakeryAll.includes(recipe["ingredients"][j])) flag++;
    }
    
    if (flag == recipe["ingredients"].length) { //flag should equal the same number of ingredients as the recipe
      return(recipe["name"]);
      break;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
