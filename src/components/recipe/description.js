class Description {
  constructor(selector) {
    this.selector = selector;
    this.render();
  }

  get recipeInstructions() {
    const { recipes, currentRecipe } = window.State;

    const selectedRecipe = recipes[currentRecipe];

    if (selectedRecipe) {
      return Object.values(selectedRecipe.instructions);
    }
    return null;
  }

  render() {
    this.selector.innerHTML = `
        <article class="container">
           <header>Method</header>
            <ol>${this.recipeInstructions
              ?.map(({ text }) => `<li>${text}</li>`)
              .join('')}
            </ol>
        </article>
    `;
  }
}

export default Description;
