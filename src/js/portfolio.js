import { galleryItems } from './gallery-item';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryRef = document.querySelector('.gallary__fotos');
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
    
    //simpleLightbox.open();

  }


