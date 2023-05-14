import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createItemsMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;
galleryRef.addEventListener("click", onUlGalleryClick);
let modalWithBigImage;

function onUlGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  modalWithBigImage = createLightBox(e);
  modalWithBigImage.show();
  window.addEventListener("keydown", onEscapeClose);
}

function createItemsMarkup(arr) {
  return arr
    .map(
      (el) =>
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
    )
    .join("");
}
function createLightBox(event) {
  return basicLightbox.create(`<img
    src="${event.target.dataset.source}"
    width="1280"
  /> 
    `);
}
function onEscapeClose(e) {
  if (e.code !== "Escape") return;
  modalWithBigImage.close();
  window.removeEventListener("keydown", onEscapeClose);
}
