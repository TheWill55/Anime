document.querySelector('.hamburger').addEventListener('click', () => {
    const nav = document.querySelector('.nav-bar');
    const search = document.querySelector('.search-container');
    nav.classList.toggle('active');
    search.classList.toggle('activate');
});

let slideIndex = 0;
const slide = document.querySelectorAll('.carrossel-item');

function mostrarSlide(){
    slides.forEach(slide => slide.classList.remove ('ativo'));
    slideIndex =(slideIndex + 1) % slide.length;
    setTimeout(mostrarSlide, 5000);
}

if (slides.length > 0){
    slides[0].classList.add('ativo');
    setTimeout(mostrarSlide, 5000);
}