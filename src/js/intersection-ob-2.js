 // элементы за которыми будет следить обсервер
const advansts = document.querySelectorAll('.scale')


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
      entry.target.classList.add('scale-in-center')
    }
    // entry.isIntersecting ? entry.target.classList.add('animate') :
    //   entry.target.classList.remove('animate');
  });
};

const observer = new IntersectionObserver(callback, options);


advansts.forEach((advanst) => observer.observe(advanst));
