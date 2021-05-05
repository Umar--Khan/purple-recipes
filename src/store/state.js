export default class State {
  constructor(name, window) {
    this.recipes = {};
    this.currentRecipe = 1;
    this.servingSize = 1;
    this.offsetRange = 20;
  }

  setRecipes(recipes) {
    this.recipes = recipes;
  }

  setServingSize(size) {
    this.servingSize = size;
  }

  setCurrentRecipe(index) {
    this.currentRecipe = index;
  }

  setOffsetRange(range) {
    this.offsetRange = range;
  }
}
