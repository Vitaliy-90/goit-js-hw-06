const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const makeIngredient = ingredients.map((ingredient) => {
  const createLi = document.createElement("li");
  createLi.textContent = ingredient;
  createLi.classList.add("item");
  return createLi;
});
listIngredients.append(...makeIngredient);
console.log(listIngredients);
