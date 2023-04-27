import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const aboutGalleryRef = document.querySelector('.about__list-box');

let simpleLightbox = new SimpleLightbox('.about__list-box a', {
    overlayOpacity: 0.6,
    overlay: true,
    captionDelay: 250,
});

aboutGalleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    simpleLightbox();
  }