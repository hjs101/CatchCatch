import "../../CSS/UI/inGameUI.css";
import { CharSpaceOn } from "./char-space.js";

let _timerTxt = document.createElement("div");
let _minute = 0;
let _second = 0;

<<<<<<< HEAD
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

=======
>>>>>>> 785eea8 (#1 :sparkles: 튜토리얼 중간 완료 및 쿨타임 UI 수정)
export default function ingameUi() {
  const fairy = [wizard, reaper, ninja, slime, witch];
  const fairyName = ["wizard", "reaper", "ninja", "slime", "witch"];
  const fairyActive = [
    "wizardActive",
    "reaperActive",
    "ninjaActive",
    "slimeActive",
    "witchActive",
  ];
  const fairyBack = [
    "wizardBack",
    "reaperBack",
    "ninjaBack",
    "slimeBack",
    "witchBack",
  ];
  const gameContainer = document.querySelector("#game-container");
  // const progress = document.createElement("progress");

<<<<<<< HEAD
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

=======
>>>>>>> 785eea8 (#1 :sparkles: 튜토리얼 중간 완료 및 쿨타임 UI 수정)
  _timerTxt.setAttribute("class", "Timer");
  gameContainer.appendChild(_timerTxt);
  _minute = 0;
  _second = 0;

  _timerTxt.textContent = `${_minute}:${_second}`;

  // 쿨타임
  const coolContainer = document.createElement("div");
  coolContainer.setAttribute("class", "coolContainer");
  const html = document.querySelector("html");
  fairy.map((el, idx) => {
    html.style.setProperty(`--${fairyName[idx]}`, fairy[idx].skillCD / 60);
    const div = document.createElement("div");
    div.setAttribute("class", "fairy");
    const img = document.createElement("img");
    img.src = `images/ui/Icon/char/fairy${idx + 1}.png`;
    div.classList.add(`${fairyName[idx]}`);
    img.classList.add(`${fairyActive[idx]}`);
    img.innerText = "요정";
    div.appendChild(img);
    const back = document.createElement("div");
    back.setAttribute("class", `${fairyBack[idx]}`);
    back.classList.add(`back`);
    div.appendChild(back);
    coolContainer.appendChild(div);
  });

  if (isTutorial) {
    const img = document.createElement("img");
    img.setAttribute("class", "tutorialKey");
    img.src = "images/ui/tutorial/tutorial_keyboard.png";
    const mouse = document.createElement("img");
    mouse.setAttribute("class", "tutorialMouse");
    mouse.src = "images/ui/tutorial/tutorial_mouse.png";
    gameContainer.appendChild(img);
    gameContainer.appendChild(mouse);

    const skill = document.createElement("img");
    skill.setAttribute("class", "tutorialNumber");
    skill.src = "images/ui/tutorial/tutorial_number.png";
    const space = document.createElement("img");
    space.setAttribute("class", "tutorialSpace");
    space.src = "images/ui/tutorial/tutorial_spacebar.png";
    gameContainer.appendChild(space);
    gameContainer.appendChild(skill);

    const stat = document.createElement("img");
    stat.setAttribute("class", "tutorialStat");
    stat.src = "images/ui/tutorial/tutorial_shift.png";
    gameContainer.appendChild(stat);

    setTimeout(() => {
      gameContainer.removeChild(img);
      gameContainer.removeChild(space);
      gameContainer.removeChild(skill);
      gameContainer.removeChild(mouse);
      gameContainer.removeChild(stat);
    }, 10000);
  }
  gameContainer.appendChild(coolContainer);
}

<<<<<<< HEAD
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
=======
>>>>>>> 785eea8 (#1 :sparkles: 튜토리얼 중간 완료 및 쿨타임 UI 수정)
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

export function GoHome() {
  window.location.reload();
}

<<<<<<< HEAD
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

=======
>>>>>>> 785eea8 (#1 :sparkles: 튜토리얼 중간 완료 및 쿨타임 UI 수정)
export function useSkill(num) {
  const fairy = [wizard, reaper, ninja, slime, witch];
  const fairyName = ["wizard", "reaper", "ninja", "slime", "witch"];
  const fairyActive = [
    "wizardActive",
    "reaperActive",
    "ninjaActive",
    "slimeActive",
    "witchActive",
  ];
  const fairyBack = [
    "wizardBack",
    "reaperBack",
    "ninjaBack",
    "slimeBack",
    "witchBack",
  ];
  const div = document.querySelector(`${fairyName[num]}`);
  const html = document.querySelector("html");
  // html.style.setProperty(`--${fairyName[num]}`, `${fairy[num].skillCD a/ 60}s`);
  const back = document.querySelector(`.${fairyBack[num]}`);

  back.style.background = "rgba(255,0,0,0.7)";
  back.style.top = `${(fairy[num].timer * 100) / fairy[num].skillCD}%`;
  back.style.display = "block";
  // if (div.classList.length === 3) {
  //   div.classList.remove(`${fairyActive[num]}`);
  // }
}

export function canSkill(num) {
  const fairyActive = [
    "wizardActive",
    "reaperActive",
    "ninjaActive",
    "slimeActive",
    "witchActive",
  ];
  const fairyName = ["wizard", "reaper", "ninja", "slime", "witch"];
  const coolContainer = document.querySelector(".coolContainer");
  const div = document.querySelector(`.${fairyName[num]}`);
  // if (div.childNodes.length !== 3) {
  //   div.style.background = "";
  //   div.classList.add(`${fairyActive[num]}`);

  //   coolContainer.replaceChild(coolContainer.childNodes[num], div);
  // }
}

export function messageBoss(boss) {
  const gameContainer = document.querySelector("#game-container");
  const div = document.createElement("div");
  div.setAttribute("class", "bossMessage");
  console.log(boss);
  if (boss === "슬라임 킹") {
    div.innerHTML = `<p style="color: red">${boss} 보스가 등장합니다.</p>`;
  } else if (boss === "골렘") {
    div.innerHTML = `<p style="color: red">${boss} 보스가 등장합니다.</p>`;
  } else if (boss === "불거인") {
    div.innerHTML = `<p style="color: red">${boss} 보스가 등장합니다.</p>`;
  } else {
    div.innerHTML = `<p style="color: red">${boss}가 몰려옵니다.</p>`;
  }
  gameContainer.appendChild(div);
  setTimeout(() => {
    div.innerHTML = "";
    console.log(123);
  }, 10000);
}

function ChangeWeapon() {
  const gameContainer = document.querySelector("#game-container");
  const img = document.createElement("img");
  img.setAttribute("class", "tutorialNumber");
  img.src = "images/ui/tutorial/tutorial_number.png";
  const space = document.createElement("img");
  space.setAttribute("class", "tutorialSpace");
  space.src = "images/ui/tutorial/tutorial_spacebar.png";
  gameContainer.appendChild(space);
  gameContainer.appendChild(img);

  setTimeout(() => {
    gameContainer.removeChild(img);
    gameContainer.removeChild(space);
    // ShowUI();
  }, 5000);
}

// function ShowUI() {
//   const gameContainer = document.querySelector("#game-container");
//   const level = document.createElement("img");
//   const hp = document.createElement("img");
//   const coin = document.createElement("img");

//   level.src = "images/ui/tutorial/tutorial_level.png";
//   hp.src = "images/ui/tutorial/tutorial_hp.png";
//   coin.src = "images/ui/tutorial/tutorial_coin.png";

//   level.setAttribute("class", "tutorialLevel");
//   hp.setAttribute("class", "tutorialHp");
//   coin.setAttribute("class", "tutorialCoin");

//   gameContainer.appendChild(level);
//   gameContainer.appendChild(hp);
//   gameContainer.appendChild(coin);
// }
