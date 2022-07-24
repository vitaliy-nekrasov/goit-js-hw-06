const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

for (const itemEl of categoriesEl) {
  console.log('Category:', itemEl.firstElementChild.textContent);
  console.log('Elements:', itemEl.querySelectorAll('li').length);
}
