import './styles/index.scss';

import NavBar from '~/components/layout/navBar';
import Breadcrumbs from '~/components/breadcrumbs';
import Servings from '~/components/recipe/servings';
import Ingredients from '~/components/recipe/ingredients';
import Description from '~/components/recipe/description';
import Navigation from '~/components/navigation';
import State from '~/store/state';
import { getRecipes } from '~/service/getRecipes';

if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}

class App {
  constructor() {
    this.state = new State('recipe-app', window);
    this.dom = {
      navbar: document.querySelector('.nav-bar'),
      servings: document.querySelector('.servings'),
      ingredients: document.querySelector('.ingredients'),
      description: document.querySelector('.description'),
      breadcrumbs: document.querySelector('.breadcrumbs'),
      navigation: document.querySelector('.navigation'),
    };
    window.State = this.state;

    this.renderStaticComponents();
    this.fetchRecipesAndRender();
  }

  async fetchRecipesAndRender(data = {}) {
    const resp = await getRecipes(data);
    this.state.setRecipes(resp);
    this.renderAll();
    this.bindSubmitEvent();
    this.bindNavigation();
  }

  bindSubmitEvent() {
    document
      .querySelector('#submit-form')
      .addEventListener('submit', this.submitForm.bind(this));
  }

  bindNavigation() {
    document
      .querySelector('.next-btn')
      .addEventListener('click', this.nextRecipe.bind(this));

    document
      .querySelector('.prev-btn')
      .addEventListener('click', this.previousRecipe.bind(this));
  }

  submitForm(event) {
    event.preventDefault();

    const servingsNumber = event.target.elements.servingsNumber.value;
    const servingsNumberInput = document.getElementById('servings-number');

    if (servingsNumber >= 1) {
      this.state.setServingSize(parseInt(servingsNumber, 10));
      this.renderIngredients();
      servingsNumberInput.value = '';
      servingsNumberInput.focus();
    }
    return false;
  }

  nextRecipe() {
    if (this.state.currentRecipe + 1 > this.state.offsetRange) {
      this.state.setCurrentRecipe(this.state.currentRecipe + 1);
      this.state.setOffsetRange(this.state.offsetRange + 20);

      const formData = new FormData();
      formData.append('offset', this.state.offsetRange);
      const data = new URLSearchParams(formData);

      this.fetchRecipesAndRender(data);
      return;
    }

    this.state.setCurrentRecipe(this.state.currentRecipe + 1);
    this.renderDynamicComponents();
    this.bindSubmitEvent();
  }

  previousRecipe() {
    if (this.state.currentRecipe - 1 <= 0) return;
    this.state.setCurrentRecipe(this.state.currentRecipe - 1);
    this.renderDynamicComponents();
    this.bindSubmitEvent();
  }

  renderStaticComponents() {
    new NavBar(this.dom.navbar);
  }

  renderBreadcrumbs() {
    new Breadcrumbs(this.dom.breadcrumbs);
  }

  renderServings() {
    new Servings(this.dom.servings);
  }

  renderIngredients() {
    new Ingredients(this.dom.ingredients);
  }

  renderDescription() {
    new Description(this.dom.description);
  }

  renderNavigation() {
    new Navigation(this.dom.navigation);
  }

  renderDynamicComponents() {
    this.renderServings();
    this.renderDescription();
    this.renderIngredients();
  }

  renderAll() {
    this.renderBreadcrumbs();
    this.renderNavigation();
    this.renderServings();
    this.renderIngredients();
    this.renderDescription();
  }
}

new App();
