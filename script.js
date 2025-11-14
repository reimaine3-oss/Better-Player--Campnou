// Seleciona os elementos da página
const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = '<i class="fas fa-play"></i>';
const pauseIcon = '<i class="fas fa-pause"></i>';
const volumeSlider = document.getElementById('volume-slider');

// 1. Função de Play/Pause
playPauseBtn.addEventListener('click', () => {
    // Verifica se a música está pausada
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = pauseIcon; // Muda o ícone para Pause
    } else {
        audio.pause();
        playPauseBtn.innerHTML = playIcon; // Muda o ícone para Play
    }
});

// 2. Função do Controle de Volume
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// 3. Opcional: Resetar o ícone quando a música terminar
audio.addEventListener('ended', () => {
    playPauseBtn.innerHTML = playIcon;
});