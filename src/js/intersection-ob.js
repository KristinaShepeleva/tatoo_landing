
const boxes = document.querySelectorAll('.title-for-animate'); // элементы за которыми будет следить обсервер



var options = {
  root: document.querySelector("#scrollArea"), // объект, который скроллится
  rootMargin: '0px',
  threshold: 1.0 // Параметр threshold со значением 1.0 означает что функция будет вызвана при 100% пересечении объекта (за которым мы следим) с объектом root
}

var callback = function(entries, observer) {
  entries.forEach(entry => {
    /**
     * Если объект виден, добавляем класс с анимацией, иначе убираем
     */

    if (entry.isIntersecting) {
      entry.target.classList.add('scale-up-center')
    }
    // entry.isIntersecting ? entry.target.classList.add('animate') :
    //   entry.target.classList.remove('animate');
  });
};

const observer = new IntersectionObserver(callback, options);

boxes.forEach((box) => observer.observe(box));



// window.onscroll = function () { scrollFunction(); };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }






// let animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
// }
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('active-animate');
//             } else {
//                 if (!animItem.classList.contains('_anim-no-hide')) {
//                     animItem.classList.remove('active-animate');
//                 }
                
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//             scrollTop = window.scrollY || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//     }