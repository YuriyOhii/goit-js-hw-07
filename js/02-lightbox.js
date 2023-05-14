import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createItemsMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;
const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

function createItemsMarkup(arr) {
  return arr
    .map(
      (el) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${el.original}">
          <img
            class="gallery__image"
            src="${el.preview}"
            alt="${el.description}"
          />
        </a>
      </li>`
    )
    .join("");
}

