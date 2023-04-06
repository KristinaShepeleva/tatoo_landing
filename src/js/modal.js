
const ESCAPE_BTN_CODE = 'Escape';

const buttonRef = document.querySelector('[data-modal-open]');
const closeButtonRef = document.querySelector('[data-modal-close]');
const modalRef = document.querySelector('[data-modal]');

//console.log(modalRef);

buttonRef.addEventListener("click", openModal);
closeButtonRef.addEventListener("click", closeModal);

modalRef.addEventListener('click', (e) => {
  if (e.currentTarget === e.target) {
     closeModal();
   }
 });


function openModal() {
  console.log(modalRef)
   modalRef.classList.remove("is-hidden");
   document.addEventListener('keydown', closeModalByEscape);
}
 
function closeModal() {
  modalRef.classList.add("is-hidden");
  document.removeEventListener('keydown', closeModalByEscape);
}

function closeModalByEscape(e) {
  if (e.code === ESCAPE_BTN_CODE) {
    closeModal();
  }
}

