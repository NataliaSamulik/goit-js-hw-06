const navEl = document.querySelector('#categories');
const navItemEl = navEl.querySelectorAll('.item');

console.log(`Number of categories: ${navItemEl.length}`);

for (let i = 0; i < navItemEl.length; i += 1) {
  console.log(`Category: ${navItemEl[i].querySelector('h2').textContent}`);
  console.log(`Elements: ${navItemEl[i].querySelectorAll('li').length}`);
}
