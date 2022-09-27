// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<a class="gallery__link gallery__item" href="${original}"
  ><img class="gallery__image" src="${preview}" alt="${description}"
/></a>`;
    })
    .join('');
}
// console.log(galleryContainer);

new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionDelay: 250,
  captionsData: 'alt',
  fadeSpeed: 250,
  doubleTapZoom: 2,
});
