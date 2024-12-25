document.title = "elowfi".toUpperCase();


const myElements = document.querySelectorAll('[data-reveal]')
const revealEle = function() {
    for(let j = 0 , len = myElements.length; j < len ; j++) {
        const element = myElements[j];
        element.getBoundingClientRect().top < window.innerHeight ? 
        element.classList.add('revealed') 
        : element.classList.remove('revealed');
    }
}

window.addEventListener('scroll', revealEle)
window.addEventListener('load', revealEle)