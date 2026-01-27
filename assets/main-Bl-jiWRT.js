/* empty css                          */(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(){document.querySelector("#app").innerHTML=`
    <header>
      <h1>${a}, guess My Number!</h1>
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
  `;const d=30,c=100;let o,r,e;const t=document.querySelector(".check"),u=document.querySelector(".guess"),s=document.querySelector(".message"),n=document.querySelector(".number"),i=document.querySelector(".score"),m=document.querySelector(".highscore"),f=document.querySelector(".again"),g=document.querySelector(".between");t.addEventListener("click",function(){const l=Number(u.value);l?l===e?(s.textContent="🎉 Correct Number!",n.style.fontSize="9rem",n.style.backgroundColor="#ffff00",n.style.width="22rem",document.body.style.backgroundColor="#60b347",o>=r&&(r=o,m.textContent=r,s.textContent="🎉 Correct Number! Record!",localStorage.setItem("highscore",r))):l>=e?(o===1?(s.textContent="📈 Too high! Game over!",t.disabled=!0,document.body.style.backgroundColor="#bb4949",n.textContent="X"):s.textContent="📈 Too high!",o--,i.textContent=o):l<e&&(o===1?(s.textContent="📈 Too low! Game over!",t.disabled=!0,document.body.style.backgroundColor="#bb4949",n.textContent="X"):s.textContent="📈 Too low!",o--,i.textContent=o):s.textContent="⛔️ No number!"}),f.addEventListener("click",b);function b(){t.disabled=!1,o=d,i.textContent=o,s.textContent="Start guessing...",n.textContent="?",n.style.fontSize="6rem",n.style.backgroundColor="#fff",n.style.width="15rem",document.body.style.backgroundColor="#222",u.value="",g.textContent=`(Between 1 and ${c})`,e=Math.floor(Math.random()*c+1),n.textContent=e,r=Number(localStorage.getItem("highscore"))||0,m.textContent=r}b()}let a;function p(){document.querySelector("#app").innerHTML=`
    <h1>Welcome to the Number Guessing Game!</h1>
    <input type="text"  placeholder="Enter your name" id="userName" />
    <button class="btn" id="startGame">Start Game</button>
  `,document.querySelector("#startGame").addEventListener("click",()=>{a=document.querySelector("#userName").value,a.trim()!==""&&h()})}p();
