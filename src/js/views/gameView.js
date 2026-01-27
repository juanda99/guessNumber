import { userName } from './welcomeView.js';

export function renderGame() {
  document.querySelector('#app').innerHTML = `
    <header>
      <h1>${userName}, guess My Number!</h1>
      <p class="between">(Between 1 and 20)</p>
      <button class="btn again">Again!</button>
      <div class="number">?</div>
    </header>
    <main>
      <section class="left">
        <input type="number" class="guess" />
        <button class="btn check">Check!</button>
      </section>
      <section class="right">
        <p class="message">Start guessing...</p>
        <p class="label-score">💯 Score: <span class="score">20</span></p>
        <p class="label-highscore">
          🥇 Highscore: <span class="highscore">0</span>
        </p>
      </section>
    </main>
  `;

  // DEFINIR MIS CONSTANTES Y VARIABLES -> EL ESTADO DE MI APP
  const INIT_SCORE = 30;
  const MAX_NUMBER = 100;
  let score;
  let highscore;
  let secretNumber;

  // SELECCIONAR ELEMENTOS DEL DOM
  const btnCheck = document.querySelector('.check');
  const inputNumber = document.querySelector('.guess');
  const message = document.querySelector('.message');
  const number = document.querySelector('.number');
  const scoreLabel = document.querySelector('.score');
  const spanHighscore = document.querySelector('.highscore');
  const btnAgain = document.querySelector('.again');
  const pBetween = document.querySelector('.between');

  // EVENTOS DEL CÓDIGO

  // si yo pulso el boton btnCheck saco un mensaje por consola
  btnCheck.addEventListener('click', function () {
    // obtengo el valor del inputNumber
    const guessNumber = Number(inputNumber.value);
    // si no han introducido nada, muestro un mensaje
    if (!guessNumber) {
      message.textContent = '⛔️ No number!';
    } else if (guessNumber === secretNumber) {
      message.textContent = '🎉 Correct Number!';
      number.style.fontSize = '9rem';
      number.style.backgroundColor = '#ffff00';
      number.style.width = '22rem';
      document.body.style.backgroundColor = '#60b347';
      if (score >= highscore) {
        highscore = score;
        spanHighscore.textContent = highscore;
        message.textContent = '🎉 Correct Number! Record!';
        // lo guardo en localStorage
        localStorage.setItem('highscore', highscore);
      }
    } else if (guessNumber >= secretNumber) {
      if (score === 1) {
        message.textContent = '📈 Too high! Game over!';
        btnCheck.disabled = true;
        document.body.style.backgroundColor = '#bb4949';
        number.textContent = 'X';
      } else {
        message.textContent = '📈 Too high!';
      }
      score--;
      scoreLabel.textContent = score;
    } else if (guessNumber < secretNumber) {
      if (score === 1) {
        message.textContent = '📈 Too low! Game over!';
        btnCheck.disabled = true;
        document.body.style.backgroundColor = '#bb4949';
        number.textContent = 'X';
      } else {
        message.textContent = '📈 Too low!';
      }
      score--;
      scoreLabel.textContent = score;
    }
  });

  btnAgain.addEventListener('click', initGame);

  function initGame() {
    btnCheck.disabled = false;
    score = INIT_SCORE;
    scoreLabel.textContent = score;
    message.textContent = 'Start guessing...';
    number.textContent = '?';
    number.style.fontSize = '6rem';
    number.style.backgroundColor = '#fff';
    number.style.width = '15rem';
    document.body.style.backgroundColor = '#222';
    inputNumber.value = '';
    pBetween.textContent = `(Between 1 and ${MAX_NUMBER})`;

    // genero número aleatorio entre 1 y MAX_NUMBER
    secretNumber = Math.floor(Math.random() * MAX_NUMBER + 1);
    number.textContent = secretNumber;
    // obtener el highscore del localStorage
    highscore = Number(localStorage.getItem('highscore')) || 0;
    spanHighscore.textContent = highscore;
  }

  initGame();
}
