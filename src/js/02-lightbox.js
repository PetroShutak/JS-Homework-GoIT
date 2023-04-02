import { galleryItems } from "./gallery-items.js";
// import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<li>
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`),
  ""
);

galleryContainer.insertAdjacentHTML("beforeend", markup);

// new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
// });
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
