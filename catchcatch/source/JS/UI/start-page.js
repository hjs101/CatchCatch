import "../../CSS/UI/StartPage.css";
import "./char-space.js";
<<<<<<< HEAD
<<<<<<< HEAD
import CharPageInit, { CharSpaceOn, CodeStart, GoStage } from "./char-space.js";
import Stage from "./stage.js";
<<<<<<< HEAD
=======
import CharPageInit, {CharSpaceOn} from "./char-space.js";
=======
import CharPageInit, {CharSpaceOn, CodeStart} from "./char-space.js";
>>>>>>> 3e8e776 (#7 :bug: 코딩모드 병합과정에서의 버그 수정)
import {setSound} from "../SOUND/sound";
import {attack} from "../GAME/code.js";
=======
import { setSound } from "../SOUND/sound";
>>>>>>> 5f102b8 (#1 :sparkles: UI 랭킹 시스템 구현)

>>>>>>> a218e28 (#1 #2 #3 :rocket: 소리 추가 1)
let _mode = true;
<<<<<<< HEAD

global.IsStarted = false;
global.PinNumber = "";
global.socket = "";
global.IsRunning = false;

=======
let _RankingList;
>>>>>>> 5f102b8 (#1 :sparkles: UI 랭킹 시스템 구현)
const _StartPage = document.createElement("div");
const _app = document.getElementById("app");
_StartPage.className = "StartPage";
_StartPage.style.display = "none";
_app.appendChild(_StartPage);

const StartPageInit = () => {
  _app.removeChild(_StartPage);
  _app.appendChild(_StartPage);
  _StartPage.innerHTML = "";
  _app.style.background = "url('images/ui/Background.gif')";
  _app.style.backgroundPosition = "center";
  _app.style.backgroundRepeat = "no-repeat";
  _app.style.backgroundSize = "cover";
  // 로고 생성=======================================
  const _Logo = document.createElement("div");
  _Logo.className = "Logo";

  let LogoImg = document.createElement("img");
  LogoImg.src = "images/ui/Logo.png";

  LogoImg.width = 1000;
  LogoImg.height = 300;
  _Logo.appendChild(LogoImg);
  _Logo.addEventListener("click", () => {
    _mode = !_mode;
    StartPageInit();
    if(!_mode){
      socket = new WebSocket("ws://k7c106.p.ssafy.io:8080");

      socket.onopen = function () {
        IsStarted = false;
        PinNumber = null;
    
        var Data = {
          action: "exeClientInit",
        };
        socket.send(JSON.stringify(Data));
      };
    
      socket.onmessage = function (data) {
        var msg = JSON.parse(data.data.toString());
      
        if (msg.action === "PinNumber") {
          PinNumber = msg.pinnumber;
          console.log(`당신의 Pin번호는 "${PinNumber}" 입니다.`);
        }
        // 게임 시작시 1초 마다 서버에게 데이터를 보내는걸 시작한다.
        else if (msg.action === "StartGame") {
          IsStarted = true;
          IsRunning = false;
          codeScene.scene.resume();
        }
        // 1번의 cycle이 끝나면 보낸다.
        else if (msg.action === "codeData") {
          //여기서 바뀐 정보를 전달 받는다.
          attack(msg.attack,msg.angle,msg.type);
          IsRunning = false;
        }
      };
    }
  });

  _StartPage.appendChild(_Logo); // 로고 추가
  //==============================================

  // 모든 버튼 div
  const _AllBtn = document.createElement("div");
  _AllBtn.className = "AllBtnList";
  _AllBtn.id = "AllBtnList";
  _StartPage.appendChild(_AllBtn);

  // 시작 버튼 div
  const _StartBtn = document.createElement("div");
  _StartBtn.className = "StartBtnList";

  _AllBtn.appendChild(_StartBtn);
  // 시작하기 버튼 ====================================
  const _GoSelectChar = document.createElement("div");
  _GoSelectChar.className = "GoSelectCharId";
  let Btn = document.createElement("button");
  Btn.className = "StartBtn";
  Btn.textContent = "GameStart";

  //이벤트 리스너 추가------------
  if (_mode === true) {
    Btn.addEventListener("click", GoSelectChar);
  } else {
    Btn.addEventListener("click", () => {
      console.log("코딩모드 시작");
      //   CodeStart();
      GoStage();
      Stage();
    });
  }
  //-------------------------

  _GoSelectChar.appendChild(Btn);

  _StartBtn.appendChild(_GoSelectChar); //시작하기 버튼 추가;
  //================================================

  // 랭킹 ============================================
  if (_mode === false) {
    //랭킹 리스트 화면 생성 --------------------------------
    _RankingList = document.createElement("div");
    _RankingList.className = "RankingList";
    _StartPage.appendChild(_RankingList);
    _RankingList.style.display = "none";

    //랭킹 리스트 생성

    //-----------------------------------------------

    const _Ranked = document.createElement("div");
    _Ranked.className = "RankedId";
    let Btn = document.createElement("button");
    Btn.className = "StartBtn";
    Btn.textContent = "Ranking";
    Btn.addEventListener("click", RankingListOn);
    _Ranked.appendChild(Btn);

    _StartBtn.appendChild(_Ranked); //랭킹 버튼 추가;
  } else {
    const _Ranked = document.createElement("div");
    _Ranked.className = "RankedId";
    _Ranked.style.height = "70px";
    _StartBtn.appendChild(_Ranked);
    CharPageInit();
  }
  //=================================================
  StartPageOn();
};
export default StartPageInit;

export const StartBtnOn = () => {
  const StartBtnClassList = document.querySelector(".StartBtnList");
  StartBtnClassList.style.display = "flex";

  // document.querySelectorAll(".StartBtn");
  // for (let i = 0; i < StartBtnClassList.length; ++i) {
  //   StartBtnClassList[i].style.display = "block";
  // }
};

export const StartBtnOff = () => {
  const StartBtnClassList = document.querySelector(".StartBtnList");
  StartBtnClassList.style.display = "none";
  // const StartBtnClassList = document.querySelectorAll(".StartBtn");

  // for (let i = 0; i < StartBtnClassList.length; ++i) {
  //   StartBtnClassList[i].style.display = "none";
  // }
};

export const StartPageOn = () => {
  StartBtnOn();
  _StartPage.style.display = "flex";
};

export const StartPageOff = () => {
  _StartPage.style.display = "none";
};

// 캐릭터 선택 버튼 클릭 이벤트 리스너
function GoSelectChar() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  StartBtnOff();
  CharSpaceOn();
=======
=======
    setSound.playSE(1);
>>>>>>> 3337d21 (#1 :sparkles: 공격 시 사운드)
    setSound.setBGM(0);
    StartBtnOff();
    CharSpaceOn();
>>>>>>> a218e28 (#1 #2 #3 :rocket: 소리 추가 1)
=======
  setSound.playSE(1);
  setSound.setBGM(0);
  StartBtnOff();
  CharSpaceOn();
}

function RankingListOn() {
  _RankingList.style.display = "flex";
}

function RankingListOff() {
  _RankingList.style.display = "none";
>>>>>>> 5f102b8 (#1 :sparkles: UI 랭킹 시스템 구현)
}
