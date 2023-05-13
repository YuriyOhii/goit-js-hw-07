import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createItemsMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;
galleryRef.addEventListener('click', onUlGalleryClick);

function onUlGalleryClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') return;
    console.log(e.target.dataset.source)
}

function createItemsMarkup(arr) {
    return arr.map(el => 
        `<li class="gallery__item">
        <a class="gallery__link" href="${el.original}">
          <img
            class="gallery__image"
            src="${el.preview}"
            data-source="${el.original}"
            alt="${el.description}"
          />
        </a>
      </li>`
    ).join('');
}


