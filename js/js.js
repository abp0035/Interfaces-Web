const audio = document.querySelector('#audioAmbiente');
const boton = document.querySelector('#botonAudio');

boton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        boton.textContent = '⏸ Pausar ';
    } else {
        audio.pause();
        boton.textContent = '▶ Música';
    }
});


const slider = document.querySelector('.slider');
const slidesContainer = slider.querySelector('.slides');
const slides = slider.querySelectorAll('.slide');

let index = 0;
function actualizarSlide() {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

function siguienteSlide() {
    index = (index + 1) % slides.length;
    actualizarSlide();
}

window.addEventListener('load', actualizarSlide);

// Para que no se rompa al redimensionar la ventana
window.addEventListener('resize', actualizarSlide);

// Cambio de slider cada 4s
setInterval(siguienteSlide, 4000);
