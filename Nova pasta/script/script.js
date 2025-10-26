const menuButton = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-bar');
const search = document.querySelector('.search-container');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    search.classList.toggle('active');
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
});

let slideIndex = 0;
const slides = document.querySelectorAll('.carrossel-item');

function mostrarSlide(){
    if (!slides.length) return;
    slides.forEach(el => el.classList.remove('active'));
    slides[slideIndex].classList.add('active');
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(mostrarSlide, 5000);
}

if (slides.length > 0){
    slides[0].classList.add('active');
    setTimeout(mostrarSlide, 5000);
}