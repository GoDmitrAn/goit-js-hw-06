const categoriesEl = document.querySelector('#categories');

console.log(`Number Of Categories: ${categoriesEl.children.length} 
        ` );
const itemsCategories = categoriesEl.querySelectorAll('li.item')
itemsCategories.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}
        `)
})



