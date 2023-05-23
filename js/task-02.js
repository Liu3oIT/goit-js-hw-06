const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const classLiEl = document.createElement("li");
classLiEl.className = "item";
const titleCategoryIngredients = document.createElement("h2");
titleCategoryIngredients.textContent = "Ingredients";
const categoriesIngredients = document.createElement("ul");
classLiEl.append(titleCategoryIngredients, categoriesIngredients);

ingredients.map((el) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = el;
  categoriesIngredients.append(ingredientsEl);
});

const elCategoryList = document.getElementById("ingredients");
elCategoryList.append(classLiEl);

// const ingredientList = document.getElementById("ingredients");

// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ingredientList.appendChild(li);
// });