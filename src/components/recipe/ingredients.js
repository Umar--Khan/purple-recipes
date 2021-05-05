import Fraction from 'fraction.js';

class Ingredients {
  constructor(selector) {
    this.selector = selector;
    this.render();
  }

  get recipe() {
    const { recipes, currentRecipe } = window.State;

    return recipes[currentRecipe] ? recipes[currentRecipe] : null;
  }

  getQuantity(quantity) {
    const { servingSize } = window.State;
    const { servings } = this.recipe;

    const factorial = quantity * servings;

    if (!factorial) {
      return 0;
    }

    return new Fraction(servingSize * 4, factorial).toFraction(true);
  }

  render() {
    this.selector.innerHTML = `
    <h1>Ingredients</h1>
        <dl>
            ${this.recipe.ingredients
              .map(
                ({ unit, name, quantity }) => `
                <dt>${this.getQuantity(quantity)} ${unit}</dt>
                <dd>${name}</dd>
            `
              )
              .join('')}
        </dl>
    `;
  }
}

export default Ingredients;
