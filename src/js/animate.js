// const boxes = document.querySelectorAll('.advantages__item'); // элементы за которыми будет следить обсервер

// var options = {
//   root: document, // объект, который скроллится
//   rootMargin: '60px',
//   threshold: 1.0 // Параметр threshold со значением 1.0 означает что функция будет вызвана при 100% пересечении объекта (за которым мы следим) с объектом root
// }

// var callback = function(entries, observer) {
//   entries.forEach(entry => {
//     /**
//      * Если объект виден, добавляем класс с анимацией, иначе убираем
//      */
//     entry.isIntersecting ? entry.target.classList.add('scale-up-center') :
//       entry.target.classList.remove('scale-up-center');
//   });
// };

// const observer = new IntersectionObserver(callback, options);

// boxes.forEach((box) => observer.observe(box));
