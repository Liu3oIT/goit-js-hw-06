
const categoriesElAll = document.querySelectorAll(".item");
console.log(`Number of categories ${categoriesElAll.length}`);
categoriesElAll.forEach((el) => {
  const category = el.childNodes[1];
  console.log(`Category: ${category.textContent}`);
  const elementsCategory = el.childNodes[3].children;
  console.log(`Elements: ${elementsCategory.length}`);
});
// const categoriesList = document.getElementById("categories");
// const categoryItems = categoriesList.getElementsByClassName("item");

// // Counting and outputting the number of categories
// const categoryCount = categoryItems.length;
// console.log(`Number of categories: ${categoryCount}`);


// Array.from(categoryItems).forEach((categoryItem) => {
//   const titleElement = categoryItem.querySelector("h2");
//   const categoryTitle = titleElement.textContent.trim();

//   const categoryElements = categoryItem.querySelectorAll("ul > li");
//   console.log(categoryElements);
//   const categoryElementCount = categoryElements.length;

//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Number of elements: ${categoryElementCount}`);
// });