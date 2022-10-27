const navEl = document.querySelector("#categories");
const navItems = navEl.querySelectorAll(".item");

console.log(`Number of categories: ${navItems.length}`);

for (const navItem of navItems) {
  console.log(`Category: ${navItem.querySelector("h2").textContent}`);
  console.log(`Elements: ${navItem.querySelectorAll("li").length}`);
}


