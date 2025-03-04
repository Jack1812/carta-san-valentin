const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const containerLetter = document.querySelector('.container-letter');
const watchVideoButton = document.querySelector('#watch-video');
const videoContainer = document.querySelector('#video-container');
const closeVideoButton = document.querySelector('#close-video');

btnCloseElement.disabled = true;

// Abrir la carta
btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  containerLetter.classList.add('open');
});

// Cerrar la carta
btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;
  containerLetter.classList.remove('open');
});

// Mostrar el botón "Ver video" cuando se llegue al final del mensaje
const paperElement = document.querySelector('.paper');
paperElement.addEventListener('scroll', () => {
  const scrollBottom = paperElement.scrollHeight - paperElement.scrollTop - paperElement.clientHeight;
  if (scrollBottom < 10) { // Si el usuario llega al final del mensaje
    watchVideoButton.style.display = 'block'; // Mostrar el botón
  }
});

// Mostrar el video al hacer clic en "Ver video"
watchVideoButton.addEventListener('click', () => {
  videoContainer.style.display = 'flex'; // Mostrar el contenedor del video
});

// Cerrar el video al hacer clic en "Cerrar video"
closeVideoButton.addEventListener('click', () => {
  videoContainer.style.display = 'none'; // Ocultar el contenedor del video
});