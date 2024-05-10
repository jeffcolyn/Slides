let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let listContainer = document.querySelector('.container');
let listItems = listContainer.querySelectorAll('.List-item');
let thumbnailContainer = document.querySelector('.container .thumb');
let thumbnailItems = thumbnailContainer.querySelectorAll('.thumb-item');

btnNext.addEventListener('click', () => moveItemsOnClick('next'));
btnBack.addEventListener('click', () => moveItemsOnClick('back'));

function moveItemsOnClick(type) {
    let listItems = listContainer.querySelectorAll('.List-item');
    let thumbnailItems = thumbnailContainer.querySelectorAll('.thumb-item');

    if (!listContainer || !listItems || !thumbnailContainer || !thumbnailItems) {
        console.error('Elements not found');
        return;
    }

    if (type === 'next') {
        listContainer.classList.add('next');
        listContainer.appendChild(listItems[0]);
        thumbnailContainer.appendChild(thumbnailItems[0]);
    } else {
        listContainer.classList.add('back');
        listContainer.prepend(listItems[listItems.length - 1]);
        thumbnailContainer.prepend(thumbnailItems[thumbnailItems.length - 1]);
    }

    setTimeout(() => {
        listContainer.classList.remove('next');
        listContainer.classList.remove('back');
    }, 3000);
}