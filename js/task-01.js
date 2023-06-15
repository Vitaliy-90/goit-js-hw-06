const totalItems = document.querySelectorAll(".item");
const totalCategories = totalItems.length;
console.log("Number of categories:", totalCategories);
totalItems.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log("Category:", title);
  console.log("Elements: ", elements);
});
