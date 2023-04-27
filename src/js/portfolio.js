import { galleryItems } from './gallery-item';
import { galleryWoman } from './gallery-woman';
import { galleryMan } from './gallery-man';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallary__fotos');
const galleryWomanRef = document.querySelector('.gallary__menu-button--woman')
const galleryManRef = document.querySelector('.gallary__menu-button--man')

const markup = createGallaryMarkup(galleryItems);
galleryRef.innerHTML = markup;

let simpleLightbox = new SimpleLightbox('.gallary__fotos a', {
    overlayOpacity: 0.6,
    overlay: true,
    captionDelay: 250,
});

function createGallaryMarkup(image) {
    return image.map(({ preview, original, description }) => {
        return `
       <li class="gallary__img"><a href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}"/>
       </a></li>
        `
    }).join('');
};

galleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
  }

galleryWomanRef.addEventListener('click', onWomanClick)

function onWomanClick(ev) {
    ev.preventDefault();
    const markupWoman = createGallaryMarkup(galleryWoman);
    galleryRef.innerHTML = markupWoman;
    simpleLightbox.refresh()
}

galleryManRef.addEventListener('click', onManClick)

function onManClick(ev) {
    ev.preventDefault();
    const markupMan = createGallaryMarkup(galleryMan);
    galleryRef.innerHTML = markupMan;
    simpleLightbox.refresh()
}