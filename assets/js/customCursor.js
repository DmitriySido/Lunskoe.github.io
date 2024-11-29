const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (event) => {
  // Устанавливаем позицию курсора относительно окна
  cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

// Инициализация плеера
const audio = document.getElementById('background-music');
const playPauseBtn = document.getElementById('playPauseBtn');

// Изначально музыка выключена
audio.muted = true;

// Обработчик для включения/выключения музыки
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.muted = false;  // Включаем звук
    audio.play();         // Запускаем музыку
    playPauseBtn.classList.add('play')
    playPauseBtn.classList.remove('paused')
  } else {
    audio.pause();        // Останавливаем музыку
    playPauseBtn.classList.add('paused')
    playPauseBtn.classList.remove('play')
  }
});