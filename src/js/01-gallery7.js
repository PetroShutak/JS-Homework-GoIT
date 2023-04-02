import { galleryItems } from "./gallery-items.js";

// ========================================<witout ESC>==========================================
// const galleryContainer = document.querySelector(".gallery");
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

// galleryContainer.addEventListener("click", onImgClick);

// function createGalleryItemsMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
// }

// function onImgClick (event) {
//   event.preventDefault();
//   console.log(event.target);
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `<img src="${event.target.dataset.source}" width="800" height="600">`
//   );
//   instance.show();
// }
// ========================================</witout ESC>==========================================

// // ========================================<with team>==========================================
// const galleryRef = document.querySelector(".gallery");
// const createGalleryItemMarkup = ({ preview, original, description }) => {
//   return `
//     <li class="gallery__item">
//       <a
//         class="gallery__link"
//         href="${original}"
//       >
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </li>
//   `;
// };
// const galleryMarkup = galleryItems.reduce((acc, item) => {
//   return acc + createGalleryItemMarkup(item);
// }, "");
// // const galleryMarkup = galleryItems
// //   .map(createGalleryItemMarkup)
// //   .join('');

// galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

// galleryRef.addEventListener("click", lightBox);

// function lightBox(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const img = event.target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img src="${img}" width="800" height="600">
// `);

//   instance.show();

//   galleryRef.addEventListener("keydown", escClick);

//   function escClick(event) {
//     console.log(event.key, event.code);
//     if (event.key === "Escape") {
//       instance.close();
//       galleryRef.removeEventListener("keydown", escClick);
//     }
//   }
// }

// // ========================================</with team>==========================================

// ========================================approved==========================================
const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
galleryContainer.addEventListener("click", onImgClick);

// rendered items
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const instance = basicLightbox.create(
  `
  <img width="auto" height="auto" src="" style="max-width: 100%; max-height: 100%;">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKeyPress);
    },
  }
);

function onImgClick(e) {
  e.preventDefault();
  const clickedElement = e.target;
  if (clickedElement.nodeName !== "IMG") return;
  const imgSource = clickedElement.getAttribute("data-source");
  if (!imgSource) return;
  instance.element().querySelector("img").src = imgSource;
  instance.show();
}

function onEscKeyPress(e) {
  if (e.code !== "Escape") return;
  instance.close();
}

// ////////////////////////Second part of the task:////////////////////////////////////
// const instance = basicLightbox.create(
//   `
//   <img width="1280" height="auto" src="">`,
//   {
//     onShow: (instance) => {
//       window.addEventListener("keydown", onEscKeyPress);
//     },
//     onClose: (instance) => {
//       window.removeEventListener("keydown", onEscKeyPress);
//     },
//   }
// );

// function onImgClick(e) {
//   e.preventDefault();
//   const datasetSource = e.target.dataset.source;
//   if (!datasetSource) return;
//   instance.element().querySelector("img").src = datasetSource;
//   instance.show();
// }
// function onEscKeyPress(e) {
//   if (e.code !== "Escape") return;
//   instance.close();
// }
