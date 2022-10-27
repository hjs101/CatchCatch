const propertyArr = ["common", "wizard", "reaper", "ninja", "slime", "witch"];
const commonArr = ["health", "dmgmul", "heal", "speed"];
export default function levelup() {
  const property = {
    common: {
      name: "공통",
      health: { level: player.healthLevel, text: "최대 체력 증가" },
      dmgmul: { level: player.dmgmulLevel, text: "공격력 증가" },
      heal: { level: player.healLevel, text: "회복력 증가" },
      speed: { level: player.speedLevel, text: "이동속도 증가" },
    },
    wizard: { name: "위저드", fairy: wizard, text: ["ㅇ", "", "", ""] },
    reaper: { name: "사신", fairy: reaper, text: ["ㄹ", "", "", ""] },
    ninja: { name: "닌자", fairy: ninja, text: ["ㅇ", "", "", ""] },
    slime: { name: "슬라임", fairy: slime, text: ["ㅇ", "", "", ""] },
    witch: { name: "마녀", fairy: witch, text: ["ㅇ", "", "", ""] },
  };
  let randomIndexArray = [];
  for (let i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random() * 6);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  console.log(randomIndexArray);
  const gameContainer = document.querySelector("#game-container");

  // const levelupContainer = document.createElement("div");
  // levelupContainer.setAttribute("class", "levelupContainer");
  $this.pause();
  const levelupContainer = document.createElement("div");
  levelupContainer.style.backgroundImage =
    'url("../images/ui/levelup/Base.png")';
  levelupContainer.style.backgroundPosition = "center";
  levelupContainer.style.backgroundRepeat = "no-repeat";
  levelupContainer.style.backgroundSize = "cotain";
  levelupContainer.setAttribute("class", "levelupContainer");
  const randomCommon = Math.floor(Math.random() * 4);
  for (let i = 0; i < 3; i++) {
    const levelupContent = document.createElement("div");
    const levelupImg = document.createElement("div");
    const levelupText = document.createElement("div");
    levelupContent.setAttribute("class", "levelupContent");
    levelupContent.setAttribute("id", `${propertyArr[randomIndexArray[i]]}`);
    levelupImg.setAttribute("class", "levelupImg");
    levelupText.setAttribute("class", "levelupText");
    const levelImgandNameBox = document.createElement("div");
    levelImgandNameBox.setAttribute("class", "levelImgandNameBox");
    const levelupName = document.createElement("div");
    levelupName.setAttribute("class", "levelupName");

    if (propertyArr[randomIndexArray[i]] !== "common") {
      levelupText.innerText = `${
        property[propertyArr[randomIndexArray[i]]].text[
          property[propertyArr[randomIndexArray[i]]].fairy.level - 1
        ]
      }`;
      levelupContent.style.backgroundImage =
        'url("../images/ui/levelup/fairyupgrade_addName.png")';
      // 설명인데..
      levelupName.innerHTML = `[${
        property[propertyArr[randomIndexArray[i]]].name
      }] <br> Lv. ${property[propertyArr[randomIndexArray[i]]].fairy.level}`;
      // levelupName.textContent += "Lv. 1";
    } else {
      levelupContent.style.backgroundImage =
        'url("../images/ui/levelup/commonupgrade_addName.png")';

      levelupText.innerText =
        property.common[commonArr[randomCommon]].level +
        property.common[commonArr[randomCommon]].text;
      levelupName.innerHTML = `[공통] <br> Lv. ${
        property.common[commonArr[randomCommon]].level
      }`;
      // levelupName.textContent += "Lv. 1";
    }
    levelupContent.style.backgroundRepeat = "no-repeat";
    levelupContent.style.backgroundPosition = "center";
    levelupContent.style.backgroundSize = "contain";

    //스킬 아이콘
    levelupImg.style.backgroundImage = 'url("../images/ui/Icon/sample.png")';

    levelupImg.style.backgroundRepeat = "no-repeat";
    levelupImg.style.backgroundPosition = "center";
    levelupImg.style.backgroundSize = "contain";

    levelImgandNameBox.appendChild(levelupImg);
    levelImgandNameBox.appendChild(levelupName);
    levelupContent.appendChild(levelImgandNameBox);
    levelupContent.appendChild(levelupText);
    levelupContainer.appendChild(levelupContent);
  }

  gameContainer.appendChild(levelupContainer);
  const contents = document.querySelectorAll(".levelupContent");
  // const levelupContainer = document.querySelector(".levelupContainer");
  const removeContainer = document.querySelector(".levelupContainer");
  for (let i = 0; i < 3; i++) {
    contents[i].addEventListener("click", () => {
      if (contents[i].id === "wizard") {
        wizard.level++;
        console.log(wizard);
      } else if (contents[i].id === "reaper") {
        reaper.level++;
        console.log(reaper);
      } else if (contents[i].id === "ninja") {
        ninja.level++;
        console.log(ninja);
      } else if (contents[i].id === "slime") {
        slime.level++;
        console.log(slime);
      } else if (contents[i].id === "witch") {
        witch.level++;
        console.log(witch);
      } else {
        player[`${commonArr[randomCommon]}Level`] += 1;
      }

      $this.resume();
      gameContainer.removeChild(removeContainer);
    });
  }
}
