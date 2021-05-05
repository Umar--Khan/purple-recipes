export const getRecipes = (data = {}) =>
  fetch('http://18.130.116.85/recipes', {
    method: 'POST',
    body: data,
  })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(e => console.error(e));
