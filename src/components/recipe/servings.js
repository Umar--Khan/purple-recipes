class Servings {
  constructor(selector) {
    this.selector = selector;
    this.render();
  }

  get recipe() {
    const { recipes, currentRecipe } = window.State;
    return recipes[currentRecipe];
  }

  render() {
    this.selector.innerHTML = `
        <h1>${this.recipe.name}</h1>
        <form id="submit-form">
          <div class="input-container">
              <label class="screen-reader" for="servings-number">Number of servings</label>
              <input type="number" id="servings-number" class="servings-number" name="servingsNumber" placeholder="Enter Number of Servings" required="required"/>
              <p class="servings-cooking-time">Cooking Time: 10 mins</p>
          </div>
          <button type="submit" id="btn-calculate" class="btn-calculate">Calculate</button>
        </form>
    `;
  }
}

export default Servings;
