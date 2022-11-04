import "../../CSS/UI/inGameUI.css";
import { CharSpaceOn } from "./char-space.js";

let _timerTxt = document.createElement("div");
let _minute = 0;
let _second = 0;

<<<<<<< HEAD
<<<<<<< HEAD
export let _catcoin;

export default function inGameUI() {
  const gameContainer = document.querySelector("#game-container");
  // const progress = document.createElement("progress");
<<<<<<< HEAD
  const holeHP = document.createElement("div");
  holeHP.setAttribute("class", "holeHP");
  const hp = document.createElement("div");
  hp.setAttribute("class", "hp");
  hp.innerText = hole.hp;
  holeHP.appendChild(hp);
  gameContainer.appendChild(holeHP);
<<<<<<< HEAD
  const _catcoin = document.createElement("div");
=======
=======
>>>>>>> 719d19d (#1 :bug: 체력 갱신)

  _catcoin = document.createElement("div");
>>>>>>> ae21595 (#1 :sparkles: 클리어, 인게임 UI 수정)
  _catcoin.setAttribute("class", "catcoin");
  _catcoin.setAttribute("id", "catcoin");
  _catcoin.textContent = global.coin + " Coin";
=======
let catCoin;
=======
let _catCoin;
>>>>>>> e17e0a1 (#6 :bug: UI 코드 수정)

export default function ingameUi() {
  const fairy = [wizard, reaper, ninja, slime, witch];
  const gameContainer = document.querySelector("#game-container");
  // const progress = document.createElement("progress");

  const holeHp = document.createElement("div");
  holeHp.setAttribute("class", "holeHp");
  const hp = document.createElement("div");
  hp.setAttribute("class", "hp");
  hp.innerText = hole.hp;
  holeHp.appendChild(hp);
  gameContainer.appendChild(holeHp);

<<<<<<< HEAD
<<<<<<< HEAD
    catCoin = document.createElement("div");
    catCoin.setAttribute("class", "catCoin");
    catCoin.setAttribute("id", "catCoin");
    catCoin.textContent = global.coin + " Coin";
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
=======
    _catCoin = document.createElement("div");
    _catCoin.setAttribute("class", "catCoin");
    _catCoin.setAttribute("id", "catCoin");
    _catCoin.textContent = global.coin + " Coin";
>>>>>>> e17e0a1 (#6 :bug: UI 코드 수정)
=======
  _catCoin = document.createElement("div");
  _catCoin.setAttribute("class", "catCoin");
  _catCoin.setAttribute("id", "catCoin");
  _catCoin.textContent = player.coin + " Coin";
>>>>>>> d16b408 (#1 :sparkles: 타워 업그레이드 코인 소모)

  const stats = document.createElement("div");
  const heal = document.createElement("div");
  const healTxt = document.createElement("div");

  const dmgMul = document.createElement("div");
  const dmgMulTxt = document.createElement("div");

  const speed = document.createElement("div");
  const speedTxt = document.createElement("div");

  _timerTxt.setAttribute("class", "Timer");
  gameContainer.appendChild(_timerTxt);
  _minute = 0;
  _second = 0;

  _timerTxt.textContent = `${_minute}:${_second}`;

  // progress.setAttribute("id", "progress");
  // progress.setAttribute("value", player.exp);
  // progress.setAttribute("max", 100);
  stats.setAttribute("class", "stats");
  heal.setAttribute("class", "stat");
  healTxt.setAttribute("class", "healTxt");

  dmgMul.setAttribute("class", "stat");
  dmgMulTxt.setAttribute("class", "dmgMulTxt");

  speed.setAttribute("class", "stat");
  speedTxt.setAttribute("class", "speedTxt");

  heal.setAttribute("id", "heal");
  heal.style.backgroundImage = "url('images/ui/Icon/sample.png')";
  heal.style.backgroundPosition = "center";
  heal.style.backgroundRepeat = "no-repeat";
  heal.style.backgroundSize = "contain";

  dmgMul.setAttribute("id", "dmgMul");
  dmgMul.style.backgroundImage = "url('images/ui/Icon/sample.png')";
  dmgMul.style.backgroundPosition = "center";
  dmgMul.style.backgroundRepeat = "no-repeat";
  dmgMul.style.backgroundSize = "contain";

  speed.setAttribute("id", "speed");
  speed.style.backgroundImage = "url('images/ui/Icon/sample.png')";
  speed.style.backgroundPosition = "center";
  speed.style.backgroundRepeat = "no-repeat";
  speed.style.backgroundSize = "contain";

  healTxt.innerText = `Lv.${player.healLevel}`;
  heal.appendChild(healTxt);
  dmgMulTxt.innerText = `Lv.${player.dmgMulLevel}`;
  dmgMul.appendChild(dmgMulTxt);
  speedTxt.innerText = `Lv.${player.speedLevel}`;
  speed.appendChild(speedTxt);

  stats.appendChild(_catCoin);
  stats.appendChild(heal);
  stats.appendChild(dmgMul);
  stats.appendChild(speed);
  // gameContainer.appendChild(progress);

  // 쿨타임
  const coolContainer = document.createElement("div");
  coolContainer.setAttribute("class", "coolContainer");

  gameContainer.appendChild(stats);
}

export function updateExp() {
  // const progress = document.querySelector("#progress");
  const heal = document.querySelector(".healTxt");
  const dmgMul = document.querySelector(".dmgMulTxt");
  const speed = document.querySelector(".speedTxt");
  heal.innerText = `Lv.${player.healLevel}`;
  dmgMul.innerText = `Lv.${player.dmgMulLevel}`;
  speed.innerText = `Lv.${player.speedLevel} `;
  // progress.setAttribute("value", player.exp);
}

<<<<<<< HEAD
export function updateHP() {
  // console.log(hole.hp);
  const holeHp = document.querySelector(".holeHp");
  const hp = document.querySelector(".hp");
  hp.innerText = hole.hp;
}

<<<<<<< HEAD
export function gameover() {
  const gameContainer = document.querySelector("#game-container");
  const gameoverContainer = document.createElement("div");
  gameoverContainer.setAttribute("class", "gameoverContainer");
  const gameover = document.createElement("div");
  gameover.setAttribute("class", "gameover");
  gameover.innerText = "GAME OVER";
  const again = document.createElement("div");
  again.innerText = "다시하기";
  again.setAttribute("class", "again");
  again.addEventListener("click", () => {
    // gameContainer.innerHTML = "";
    // gameContainer.style.display = "none";
    // const startPage = document.querySelector(".StartPage");
    // startPage.style.display = "flex";
    // gameContainer.removeChild(gameoverContainer);
    // CharSpaceOn();
    // $this.restart();
    window.location.reload();
  });
  gameoverContainer.appendChild(gameover);
  gameoverContainer.appendChild(again);
  gameContainer.appendChild(gameoverContainer);
=======
export function Updatetimer() {
  if (global.gameTimer != 0 && global.gameTimer % 60 === 0) {
    ++Second;
    if (Second === 60) {
      ++Minute;
      Second = 0;
=======
export function GameOver() {
  const gameContainer = document.querySelector("#game-container");
  const gameOverContainer = document.createElement("div");
  gameOverContainer.setAttribute("class", "gameOverContainer");
  const gameOver = document.createElement("div");
  gameOver.setAttribute("class", "gameOver");
  gameOver.innerText = "GAME OVER";
  const again = document.createElement("div");
  again.innerText = "다시하기";
  again.setAttribute("class", "again");
  again.addEventListener("click", () => {
    // gameContainer.innerHTML = "";
    // gameContainer.style.display = "none";
    // const startPage = document.querySelector(".StartPage");
    // startPage.style.display = "flex";
    // gameContainer.removeChild(gameoverContainer);
    // CharSpaceOn();
    // $this.restart();
    window.location.reload();
  });
  gameOverContainer.appendChild(gameOver);
  gameOverContainer.appendChild(again);
  gameContainer.appendChild(gameOverContainer);
}

export function UpdateTimer() {
<<<<<<< HEAD
    if (global.gameTimer !== 0 && global.gameTimer % 60 === 0) {
        ++_second;
        if (_second === 60) {
            ++_minute;
            _second = 0;
        }
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
=======
  if (global.gameTimer !== 0 && global.gameTimer % 60 === 0) {
    ++_second;
    if (_second === 60) {
      ++_minute;
      _second = 0;
>>>>>>> d16b408 (#1 :sparkles: 타워 업그레이드 코인 소모)
    }
  }
  if (_second < 10) {
    if (_minute < 10) _timerTxt.textContent = `0${_minute}:0${_second}`;
    else _timerTxt.textContent = `${_minute}:0${_second}`;
  } else if (_minute < 10) {
    if (_second < 10) _timerTxt.textContent = `0${_minute}:0${_second}`;
    else _timerTxt.textContent = `0${_minute}:${_second}`;
  } else _timerTxt.textContent = `w${_minute}:${_second}`;

  if (_minute === 20) {
    $this.pause();
    GameClear();
    //게임클리어
  }
}

function GameClear() {
  // 게임 중지
  const gameContainer = document.querySelector("#game-container");

  const GameClearSpace = document.createElement("div");
  GameClearSpace.setAttribute("class", "GameClearSpace");

  const ClearText = document.createElement("div");
  ClearText.setAttribute("class", "ClearText");
  ClearText.textContent = "GameClear!";

  GameClearSpace.appendChild(ClearText);

  const GoHomeBtn = document.createElement("button");
  GoHomeBtn.setAttribute("class", "GoHomeBtn");
  GoHomeBtn.textContent = "홈으로";

  GoHomeBtn.addEventListener("click", GoHome);

  GameClearSpace.appendChild(GoHomeBtn);

  gameContainer.appendChild(GameClearSpace);
}

function GoHome() {
  window.location.reload();
}

export function UpdateCatCoin() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  _catcoin.textContent = global.coin + " Coin";
>>>>>>> ae21595 (#1 :sparkles: 클리어, 인게임 UI 수정)
=======
    catCoin.textContent = global.coin + " Coin";
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
=======
    _catCoin.textContent = global.coin + " Coin";
>>>>>>> e17e0a1 (#6 :bug: UI 코드 수정)
=======
  _catCoin.textContent = player.coin + " Coin";
>>>>>>> d16b408 (#1 :sparkles: 타워 업그레이드 코인 소모)
}
