
const boxes = document.querySelectorAll('.title-for-animate'); 

var options = {
  root: document.querySelector("#scrollArea"), 
  rootMargin: '0px',
  threshold: 1.0 
}

var callback = function(entries, observer) {
  entries.forEach(entry => {
   
    if (entry.isIntersecting) {
      entry.target.classList.add('scale-up-center')
    }
    
  });
};

const observer = new IntersectionObserver(callback, options);

boxes.forEach((box) => observer.observe(box));
