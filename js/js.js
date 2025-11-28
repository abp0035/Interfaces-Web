const audio = document.querySelector('#audioAmbiente');
const boton = document.querySelector('#botonAudio');

if (audio && boton) {
    boton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            boton.textContent = '⏸ Pausar ';
        } else {
            audio.pause();
            boton.textContent = '▶ Música';
        }
    });
}

