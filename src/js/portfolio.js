import { galleryItems } from './gallery-item';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryRef = document.querySelector('.gallary__fotos');
const prev = document.querySelector('.prev-arrow');
const next = document.querySelector('.next-arrow');
const allTatoo = document.querySelector('.all-tatoo');
const galleryWomanRef = document.querySelector('.gallary__menu-button--woman')
const galleryManRef = document.querySelector('.gallary__menu-button--man')


let markup = createGallaryMarkup(galleryItems);
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

let thisPage = 1;
let limit = 8;

let list = document.querySelectorAll('.gallary__fotos .gallary__img');
let count = Math.ceil(list.length / limit);


function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }
            else {
            item.style.display = 'none';
        }
    })
}

loadItem();

prev.setAttribute("disabled", true);

prev.addEventListener("click", () => {
    thisPage -= 1;
    next.removeAttribute("disabled");
    loadItem(); 
   
    if (thisPage === 1) {
        prev.setAttribute("disabled", true);
    }            
});   

next.addEventListener("click", () => {
    thisPage += 1;
    prev.removeAttribute("disabled");
    loadItem();
     
    if (thisPage === count) {
    next.setAttribute("disabled", true);
    }
});






// galleryWomanRef.addEventListener('click', onWomanClick)

// function onWomanClick(ev) {
//     ev.preventDefault();
//     thisPage = 1;
//       markup = createGallaryMarkup(galleryItems.filter(item => item.description.includes('girl')));
//     galleryRef.innerHTML = markup;
//     list = document.querySelectorAll('.gallary__fotos .gallary__img');
//     count = Math.ceil(list.length / limit);
//     loadItem();
//     pageControls();
//     simpleLightbox.refresh()
// }

