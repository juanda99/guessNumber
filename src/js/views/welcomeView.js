import { renderGame } from './gameView.js';

export function renderWelcome() {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome to the Number Guessing Game!</h1>
    <input type="text"  placeholder="Enter your name" id="userName" />
    <button class="btn" id="startGame">Start Game</button>
  `;

  // Añadir listener al botón
  document.querySelector('#startGame').addEventListener('click', () => {
    // recoger el nombre del usuario y si no está vació, iniciar el juego
    const userName = document.querySelector('#userName').value;
    if (userName.trim() !== '') {
      renderGame();
    }
  });
}
