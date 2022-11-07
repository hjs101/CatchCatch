<<<<<<< HEAD
import Fairy from "./GameObj/fairy.js";
import Magic from "./GameObj/magic.js";
import Player from "./GameObj/player.js";
import Enemy from "./GameObj/enemy.js";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import inGameUI, { gameover, updateExp, updateHP } from "../UI/inGameUI.js";
=======
import inGameUI, {updateExp} from "../UI/inGameUI.js";
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
import inGameUI, {gameover, updateExp, updateHP} from "../UI/inGameUI.js";
>>>>>>> ad327af (Update game.js)
=======
import inGameUI, {GameOver, updateExp, updateHP} from "../UI/inGameUI.js";
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
=======
import ingameUi, { GameOver, updateExp, updateHP } from "../UI/ingame-ui.js";
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
=======
import ingameUi, {GameOver, updateExp, updateHP} from "../UI/ingame-ui.js";
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
import levelup from "../UI/levelup.js";
import initUpgrade, {closeUpgrade} from "../UI/upgrade.js";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Chunk, Tile } from "./Entities.js";
<<<<<<< HEAD
=======
import Fairy from './GameObj/fairy.js';
import Magic from './GameObj/magic.js';
import Player from './GameObj/player.js';
import Enemy from './GameObj/enemy.js';
=======
import {Chunk, Tile} from "./Entities.js";
<<<<<<< HEAD
=======
import { Chunk, Tile } from "./Entities.js";
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
import CatTower from "./GameObj/cattower.js";
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
import Boss from './GameObj/boss.js';
<<<<<<< HEAD
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
=======
import CatTower from "./GameObj/cattower.js";
>>>>>>> bfa9489 (#6 :sparkles: 포탑 생성)
=======
=======
import { Chunk, Tile } from "./Entities.js";
=======
import {Chunk, Tile} from "./Entities.js";
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
import {Chunk, Tile} from "./Entities.js";
>>>>>>> ad327af (Update game.js)
import CatTower from "./GameObj/cattower.js";
=======
import CatTower from "./GameObj/catTower.js";
>>>>>>> 30550e6 (#6 :sparkles: 타워 코드 정리)
=======
import ingameUi, {GameOver, updateExp, updateHP} from "../UI/ingame-ui.js";
=======
import ingameUi, { GameOver, updateExp, updateHP } from "../UI/ingame-ui.js";
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
import ingameUi, {
  GameOver,
  updateExp,
  updateHP,
  useSkill,
  canSkill,
  messageBoss,
} from "../UI/ingame-ui.js";
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)
=======
import ingameUi, { GameOver, updateExp, updateHP } from "../UI/ingame-ui.js";
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
import ingameUi, {
    GameOver,
    updateExp,
    updateHP,
    useSkill,
    canSkill,
    messageBoss,
} from "../UI/ingame-ui.js";
>>>>>>> 89c00c0 (:bug: 파일덮어쓰기)
import levelup from "../UI/levelup.js";
import initUpgrade, { closeUpgrade } from "../UI/upgrade.js";

import { Chunk, Tile } from "./entities.js";
import CatTower from "./GameObj/cat-tower.js";
>>>>>>> f42389c (#1 #2 #3 :sparkles: 각종 코드 수정)
import Boss from "./GameObj/boss.js";
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
import Mine from "./GameObj/mine.js";
>>>>>>> 643016e (#6 :sparkles: 인게임 coin 생성)

import { UpdateTimer } from "../UI/ingame-ui.js";

export const config = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
>>>>>>> ad327af (Update game.js)
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    parent: "game-container",
    backgroundColor: "black",
    resolution: window.devicePixelRatio,
    pixelArt: true,
    roundPixels: true,
    scene: {
        //scene 제어에
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default: "arcade",
        arcade: {
<<<<<<< HEAD
<<<<<<< HEAD
            fps: 60,
<<<<<<< HEAD
            debug: true,
=======
            fps: 20,
            debug: false,
>>>>>>> 9565c37 (#6 :bug: Depth 수정)
            fixedStep: false,
        },
<<<<<<< HEAD
=======
=======
import { Chunk, Tile } from "./entities.js";
=======
import {Chunk, Tile} from "./entities.js";
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
import CatTower from "./GameObj/cat-tower.js";
import Boss from "./GameObj/boss.js";
import Mine from "./GameObj/mine.js";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {UpdateTimer} from "../UI/ingame-ui.js";
import {setSound} from "../SOUND/sound.js";
=======
import { UpdateTimer } from "../UI/ingame-ui.js";
import { setSound } from "../SOUND/sound.js";
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)

export const config = {
<<<<<<< HEAD
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  parent: "game-container",
  backgroundColor: "black",
<<<<<<< HEAD
=======
  resolution: window.devicePixelRatio,
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  pixelArt: true,
  roundPixels: true,
  scene: {
    //scene 제어에
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
<<<<<<< HEAD
      fps: 60,
      debug: false,
      fixedStep: false,
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
    },
  }
=======
=======
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
import { UpdateTimer } from "../UI/ingame-ui.js";
import { setSound } from "../SOUND/sound.js";

export const config = {
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  parent: "game-container",
  backgroundColor: "black",
  resolution: window.devicePixelRatio,
  pixelArt: true,
  roundPixels: true,
  audio: {
    disableWebAudio: true,
  },
  scene: {
    //scene 제어에
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      fps: 60,
      debug: false,
      fixedStep: false,
<<<<<<< HEAD
=======
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
=======
=======
            fps: 20,
<<<<<<< HEAD
>>>>>>> 6700b0c (#3 :sparkles: 요정 덜덜이 문제 해결)
            debug: false,
=======
            debug: true,
>>>>>>> 5998ce5 (#6 :sparkles: 타워 밸런스 수정)
            fixedStep: false,
        },
>>>>>>> ad327af (Update game.js)
=======
      fps: 20,
      debug: false,
      fixedStep: false,
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
    },
=======
      fps: 20,
=======
      fps: 60,
>>>>>>> c32c276 (:sparkles: mine 등장 시기 생성)
      debug: false,
      fixedStep: false,
    },
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  },
=======
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    parent: "game-container",
    backgroundColor: "black",
    resolution: window.devicePixelRatio,
    pixelArt: true,
    roundPixels: true,
    audio: {
        disableWebAudio: true
=======
      fps: 60,
      debug: false,
      fixedStep: false,
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
    },
<<<<<<< HEAD
    fps: {
      target: 2,
      min: 2,
      forceSetTimeOut: true,
    },
<<<<<<< HEAD
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
import {UpdateTimer} from "../UI/ingame-ui.js";
import {setSound} from "../SOUND/sound.js";
=======
import { UpdateTimer } from "../UI/ingame-ui.js";
import { setSound } from "../SOUND/sound.js";
>>>>>>> b36e339 (#7 codemode collider 처리)

export const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  parent: "game-container",
  backgroundColor: "black",
  resolution: window.devicePixelRatio,
  pixelArt: true,
  roundPixels: true,
  audio: {
    disableWebAudio: true,
  },
  scene: {
    //scene 제어에
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      debug: false,
      fixedStep: false,
    },
<<<<<<< HEAD
>>>>>>> 6734bfb (#3 :cat: 규냥)
=======
=======
>>>>>>> 89c00c0 (:bug: 파일덮어쓰기)
  },
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
import {UpdateTimer} from "../UI/ingame-ui.js";
import {setSound} from "../SOUND/sound.js";

export const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    parent: "game-container",
    backgroundColor: "black",
    resolution: window.devicePixelRatio,
    pixelArt: true,
    roundPixels: true,
    audio: {
        disableWebAudio: true,
    },
    scene: {
        //scene 제어에
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default: "arcade",
        arcade: {
            fps: 60,
            debug: false,
            fixedStep: false,
        },
    },
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
=======
  },
>>>>>>> b36e339 (#7 codemode collider 처리)
};
>>>>>>> b038195 (#1 :bug: 버그 수정)

// 난이도
let difficulty_spawn = 0;
let difficulty_vel = 0;
let difficulty_hp = 0;

//player start
// 고양이 json
let cats;
// 플레이어 객체
global.player = "";
// 타워
global.towerLU = "";
global.towerRU = "";
global.towerLD = "";
global.towerRD = "";
// 캐릭터 선택 시 변경될 변수
let catNumber = 0;
// 요정
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
let nowFairy = 0;
let fairySet = [, , , , ,];
let fairy;

// 공격 및 공격 딜레이 관련
let control = false;
let normalAttackTimer = 0;
let normalAttackAS = 20;
let magic;
let magics = [];
export let cursors;
let gameOver = false;
let scoreText;
// 마우스 포인터 관련
let input;
let mouse;
//player end

//gametimer
var gameTimer = 0;

//map start
let map;
export let mapSize = 16000;
let camera;
let backGroundLayer;
let portalLayer;
let wallLayer;
let stage1Layer;
let stage2Layer;
let stage3Layer;
let stage4Layer;
=======
var now_fairy = 0;
var fairys = [, , , , ,];
=======
var nowFairy = 0;
var fairySet = [, , , , ,];
>>>>>>> 52852dc (#3 :bug: 오타 및 컨벤션 수정)
var fairy;
=======
let nowFairy = 0;
let fairySet = [, , , , ,];
let fairy;
>>>>>>> aabc1ad (#3 :sparkles: 각종 코드 수정)
global.thisScene = "";
// 공격 및 공격 딜레이 관련
global.control = false;
global.normalAttackTimer = 0;
let normalAttackAS = 20;
let magic;
global.magics = "";
let hitTimer = 0;
let hitVisible = true;

export let cursors;
let gameOver = false;
let scoreText;
// 마우스 포인터 관련
export let input;
let mouse;
//player end

<<<<<<< HEAD
=======
//gametimer
global.gameTimer = 0;

>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
//map start
<<<<<<< HEAD
var map;
var chunks = [];
export var mapSize = 16000;
export var camera;
<<<<<<< HEAD
var backgroundLayer;
var portalLayer;
var wallLayer;
var stage1Layer;
var stage2Layer;
var stage3Layer;
var stage4Layer;
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
=======
>>>>>>> dbb8db6 (#6 :sparkles: 맵 동적 생성)
=======
let map;
let chunks = [];
export let mapSize = 16000;
export let camera;
<<<<<<< HEAD
>>>>>>> aabc1ad (#3 :sparkles: 각종 코드 수정)
let controls;
=======
>>>>>>> 0d9d680 (#1 #2 #3 :sparkles: 각종 코드 수정)
//map end
let frameTime = 0;
//navi start
let navi;
//navi end

//coin start
global.coin = 0;
//coin end

//enemy start

// 몬스터 변수 선언
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var aliens;
=======
export var aliens;
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
var alien;
var target;
var player;
<<<<<<< HEAD
var cursors;
var mon1_delay = 0;
var mon1_x;
var mon1_y;
var alien_count = 0;
var random_rocation;
=======
export var alienSet;
var alien;
var target;
var cursors;
var mon1Delay = 0;
var mon1X;
var mon1Y;
global.alienCount = 0;
var randomLocation;
>>>>>>> 52852dc (#3 :bug: 오타 및 컨벤션 수정)
var invincible = false;
var timer;
=======
var player;

var mon1_delay = 0;
var mon1_x;
var mon1_y;

global.alien_count = 0;
>>>>>>> dd93dae (#3 :sparkles: 요정, 공격 객체화)
=======
let alienSet;
let alien;
let target;
let mon1Delay = 0;
let mon1X;
let mon1Y;
global.alienCount = 0;
let randomLocation;
let invincible = false;
let timer;
>>>>>>> ec22f2e (#3 #2 :sparkles: 컨벤션 수정)
=======
export var monsterSet;
var monster;
export var bossSet;
export var bossMagicSet;
var fireGiantIndex;
=======
export let monsterSet;
let monster;
export let bossSet;
export let bossMagicSet;
let fireGiantIndex;
>>>>>>> aabc1ad (#3 :sparkles: 각종 코드 수정)

let monsterSpawn = 300;

// 1번 몬스터: alien
<<<<<<< HEAD
var alien;
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
=======
let alien;
>>>>>>> aabc1ad (#3 :sparkles: 각종 코드 수정)

// 2번 몬스터: worm
let worm;

// 3번 몬스터: sonic
let sonic;

// 4번 몬스터: turtle
let turtle;

// 5번 몬스터: alienPlus
let alienPlus;

// 6번 몬스터: wormPlus
let wormPlus;

// 보스
let slimeKing;
let golem;
let fireGiant;
let fireGiantAura;
// 보스 패턴
let pt;
// 보스 활성 확인
let bossActive;
let bossFireGiantActive;

let monX;
let monY;
global.monsterCount = 0;
let randomLocation = 0;
let timer;
let randomMonster = 0;

// 임시 구멍
global.hole = "";

// 몬스터 이미지

//enemy end

//tower start
// let towerLU;
// let towerRU;
// let towerLD;
// let towerRD;
global.towerAttacks = "";
global.towerSkillAttacks = "";
//tower end

//mine start
let mine;
let mineshowtime = 0;
let mineCount = [3, 15, 60, 120, 400, 500, 500, 550, 800, 1000];
let StartMineRangeX = [
<<<<<<< HEAD
  -200, -500, -1200, -5000, -7200, -15000, -32000, -45000, -52000, -72000,
];
let StartMineRangeY = [
  -200, -500, -1200, -5000, -7200, -15000, -32000, -45000, -52000, -72000,
=======
    -400, -500, -1200, -5000, -7200, -15000, -32000, -45000, -52000, -72000,
];
let StartMineRangeY = [
    -400, -500, -1200, -5000, -7200, -15000, -32000, -45000, -52000, -72000,
>>>>>>> 5cde85b (:sparkles: coin 수정)
];
let EndMineRangeX = [
  500, 1200, 5000, 7200, 15000, 32000, 45000, 52000, 72000, 100000,
];
let EndMineRangeY = [
  500, 1200, 5000, 7200, 15000, 32000, 45000, 52000, 72000, 100000,
];

global.mines = "";

//mine end

//exp bar start
let expBar;
let expBarBG;
global.UICam = "";
//exp bar end

//hp bar start
let hpBar;
let hpBarBG;

//hp bar end

function preload() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
>>>>>>> b36e339 (#7 codemode collider 처리)
  //map start
  this.load.image("sprWater", "images/map/sprWater.png");
  this.load.image("sprSand", "images/map/sprSand.png");
  this.load.image("sprGrass", "images/map/sprGrass.png");
  //map end
<<<<<<< HEAD
<<<<<<< HEAD

  //tower start

<<<<<<< HEAD
  this.load.spritesheet("catNone", "images/cattower/towerNone.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catThunder", "images/cattower/towerThunder.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catFire", "images/cattower/towerFire.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catWater", "images/cattower/towerWater.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catEarth", "images/cattower/towerEarth.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.image("can", "images/cattower/can.png");
  this.load.image("skill", "images/cattower/skill.png");
  //tower end
=======
    this.load.spritesheet("catNone", "images/cattower/towerNone.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.spritesheet("catThunder", "images/cattower/towerThunder.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.spritesheet("catFire", "images/cattower/towerFire.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.spritesheet("catWater", "images/cattower/towerWater.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.spritesheet("catEarth", "images/cattower/towerEarth.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.spritesheet("catFinal", "images/cattower/towerFinal.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.image("can", "images/cattower/can.png");
    this.load.image("skill", "images/cattower/skill.png");
    //tower end
>>>>>>> 5cde85b (:sparkles: coin 수정)

  //hole start
  this.load.spritesheet("new_hole", "images/hole/new_hole.png", {
    frameWidth: 100,
    frameHeight: 100,
  });
  //hole end

  //navi start
  this.load.image("navi", "images/navi/arrow.png");
  //navi end

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  //mine start
  this.load.image("minearrow", "images/mine/boxarrow.png");
  this.load.image("mine", "images/mine/mine.png");
  //mine end
<<<<<<< HEAD
<<<<<<< HEAD
=======
    //mine start
    this.load.image("mine", "images/mine/mine.png");
    //mine end
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
    //mine start
    this.load.spritesheet("mineani", "images/mine/coin.png", {
        frameWidth: 32,
        frameHeight: 32,
    });
    //mine end
>>>>>>> ad327af (Update game.js)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)

  //player start
  // 플레이어 스프라이트
  this.load.spritesheet("cat1", "images/cat/cat1.png", {
    frameWidth: 96,
    frameHeight: 100,
  });
  this.load.spritesheet("cat2", "images/cat/cat2.png", {
    frameWidth: 116,
    frameHeight: 112,
  });
  this.load.spritesheet("cat3", "images/cat/cat3.png", {
    frameWidth: 116,
    frameHeight: 112,
  });
  this.load.spritesheet("cat4", "images/cat/cat4.png", {
    frameWidth: 96,
    frameHeight: 100,
  });
  this.load.spritesheet("cat5", "images/cat/cat5.png", {
    frameWidth: 96,
    frameHeight: 100,
  });
  this.load.spritesheet("cat6", "images/cat/cat6.png", {
    frameWidth: 116,
    frameHeight: 112,
  });
  this.load.spritesheet("cat7", "images/cat/cat7.png", {
    frameWidth: 96,
    frameHeight: 100,
  });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
>>>>>>> ad327af (Update game.js)
    // 공격 스프라이트
    this.load.spritesheet(
        "magic1",
        "images/attack/weapon/16_sunburn_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
        }
    );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.load.spritesheet(
        "magic2",
<<<<<<< HEAD
        "images/attack/weapon/12_nebula_spritesheet.png",
=======
        "images/attack/weapon/7_firespin_spritesheet.png",
>>>>>>> 1389b7c (#1 :aquarius: 오류 수정)
        {
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
        }
    );
<<<<<<< HEAD
=======

    this.load.spritesheet(
        "magic2_1",
        "images/attack/weapon/19_freezing_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
        }
    );

>>>>>>> 1389b7c (#1 :aquarius: 오류 수정)
    this.load.spritesheet(
        "magic3",
        "images/attack/weapon/18_midnight_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
        }
    );
    this.load.spritesheet(
        "magic4",
        "images/attack/weapon/2_magic8_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
        }
    );
    this.load.spritesheet(
        "magic5",
        "images/attack/weapon/20_magicbubbles_spritesheet.png",
        {frameWidth: 100, frameHeight: 100, endFrame: 61}
    );
    // 요정 스프라이트
    this.load.spritesheet("fairy1", "images/fairy/fairy1.png", {
        frameWidth: 150,
        frameHeight: 142,
    });
    this.load.spritesheet("fairy2", "images/fairy/fairy2.png", {
        frameWidth: 230,
        frameHeight: 210,
    });
    this.load.spritesheet("fairy3", "images/fairy/fairy3.png", {
        frameWidth: 134,
        frameHeight: 158,
    });
    this.load.spritesheet("fairy4", "images/fairy/fairy4.png", {
        frameWidth: 136,
        frameHeight: 170,
    });
    this.load.spritesheet("fairy5", "images/fairy/fairy5.png", {
        frameWidth: 160,
        frameHeight: 190,
    });
    //player end
=======
=======
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  // 공격 스프라이트
  this.load.spritesheet(
    "magic1",
    "images/attack/weapon/16_sunburn_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
    }
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
>>>>>>> ad327af (Update game.js)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)

  this.load.spritesheet(
    "magic2",
    "images/attack/weapon/7_firespin_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
    }
  );

<<<<<<< HEAD
    this.load.spritesheet(
        "magic2_1",
        "images/attack/weapon/19_freezing_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
        }
    );
=======

  this.load.spritesheet(
    "magic2",
    "images/attack/weapon/7_firespin_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
=======
  this.load.spritesheet(
    "magic2_1",
    "images/attack/weapon/19_freezing_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
    }
  );

  this.load.spritesheet(
    "magic3",
    "images/attack/weapon/18_midnight_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
    }
  );

  this.load.spritesheet(
<<<<<<< HEAD
    "magic2_1",
    "images/attack/weapon/19_freezing_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
    }
  );
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  this.load.spritesheet(
    "magic3",
    "images/attack/weapon/18_midnight_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
    }
  );

  this.load.spritesheet(
    "magic4",
    "images/attack/weapon/2_magic8_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
    }
  );

  this.load.spritesheet(
    "magic5",
    "images/attack/weapon/8_protectioncircle_spritesheet.png",
    { frameWidth: 100, frameHeight: 100, endFrame: 61 }
  );

  this.load.spritesheet(
    "magic5_1",
    "images/attack/weapon/13_vortex_spritesheet.png",
    { frameWidth: 100, frameHeight: 100, endFrame: 61 }
  );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
    "magic4",
    "images/attack/weapon/2_magic8_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
    }
  );

  this.load.spritesheet(
    "magic5",
    "images/attack/weapon/8_protectioncircle_spritesheet.png",
    { frameWidth: 100, frameHeight: 100, endFrame: 61 }
  );

  this.load.spritesheet(
    "magic5_1",
    "images/attack/weapon/13_vortex_spritesheet.png",
    { frameWidth: 100, frameHeight: 100, endFrame: 61 }
  );

>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  // 스킬 스프라이트
  this.load.spritesheet(
    "skill1",
    "images/attack/weapon/17_felspell_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
    }
  );
  this.load.spritesheet(
    "skill2",
    "images/attack/weapon/15_loading_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
    }
  );
  this.load.spritesheet(
    "skill4",
    "images/attack/weapon/10_weaponhit_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
    }
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
=======
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  // 요정 스프라이트
  this.load.spritesheet("fairy1", "images/fairy/fairy1.png", {
    frameWidth: 150,
    frameHeight: 142,
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
>>>>>>> ad327af (Update game.js)
    // 스킬 스프라이트
    this.load.spritesheet(
        "skill1",
        "images/attack/weapon/17_felspell_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
        }
    );
    this.load.spritesheet(
        "skill2",
        "images/attack/weapon/15_loading_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
        }
    );
    this.load.spritesheet(
        "skill4",
        "images/attack/weapon/10_weaponhit_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
        }
    );
    // 요정 스프라이트
    this.load.spritesheet("fairy1", "images/fairy/fairy1.png", {
        frameWidth: 150,
        frameHeight: 142,
    });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
>>>>>>> ad327af (Update game.js)

<<<<<<< HEAD
<<<<<<< HEAD
    this.load.spritesheet("fairy2", "images/fairy/fairy2.png", {
        frameWidth: 230,
        frameHeight: 210,
    });

    this.load.spritesheet("fairy3", "images/fairy/fairy3.png", {
        frameWidth: 134,
        frameHeight: 158,
    });
=======
=======

>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
  this.load.spritesheet("fairy1_1", "images/fairy/fairy1_yellow.png", {
    frameWidth: 150,
    frameHeight: 142,
  });
<<<<<<< HEAD
=======
    this.load.spritesheet("fairy1_1", "images/fairy/fairy1_yellow.png", {
        frameWidth: 150,
        frameHeight: 142,
    });
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  this.load.spritesheet("fairy1_2", "images/fairy/fairy1_red.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy2", "images/fairy/fairy2.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy2_1", "images/fairy/fairy2_Red.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy2_2", "images/fairy/fairy2_black.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy3", "images/fairy/fairy3.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

  this.load.spritesheet("fairy3_1", "images/fairy/fairy3_Red.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======

  this.load.spritesheet("fairy1_1", "images/fairy/fairy1_yellow.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy1_2", "images/fairy/fairy1_red.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy2", "images/fairy/fairy2.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy2_1", "images/fairy/fairy2_Red.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy2_2", "images/fairy/fairy2_black.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy3", "images/fairy/fairy3.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

  this.load.spritesheet("fairy3_1", "images/fairy/fairy3_Red.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  this.load.spritesheet("fairy3_2", "images/fairy/fairy3_master.png", {
    frameWidth: 140,
    frameHeight: 140,
  });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3e6dfa6 (#3 :sparkles: player 기능 구현)
=======
    this.load.spritesheet("fairy3_2", "images/fairy/fairy3_master.png", {
        frameWidth: 140,
        frameHeight: 140,
    });
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)

  this.load.spritesheet("fairy4", "images/fairy/fairy4.png", {
    frameWidth: 136,
    frameHeight: 170,
  });
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.load.spritesheet("fairy5", "images/fairy/fairy5.png", {
        frameWidth: 160,
        frameHeight: 190,
    });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
  this.load.spritesheet("fairy4_1", "images/fairy/fairy4_blue.png", {
    frameWidth: 136,
    frameHeight: 170,
  });
<<<<<<< HEAD
=======
    this.load.spritesheet("fairy4_1", "images/fairy/fairy4_blue.png", {
        frameWidth: 136,
        frameHeight: 170,
    });
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  this.load.spritesheet("fairy4_2", "images/fairy/fairy4_green.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy5", "images/fairy/fairy5.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  this.load.spritesheet("fairy5_1", "images/fairy/fairy5_red.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  this.load.spritesheet("fairy5_2", "images/fairy/fairy5_black.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

<<<<<<< HEAD
>>>>>>> 3e6dfa6 (#3 :sparkles: player 기능 구현)
  //player end
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
=======
    //player end
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

<<<<<<< HEAD
  //enemy start
  this.load.spritesheet(
    "alien",
    "http://labs.phaser.io/assets/tests/invaders/invader1.png",
    { frameWidth: 32, frameHeight: 32 }
  );
  //enemy end
=======
    //enemy start
=======
  //player end

  //enemy start
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
    //player end

    //enemy start
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
    //player end

    //enemy start
>>>>>>> ad327af (Update game.js)
=======
  //player end

  //enemy start
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  // 몬스터
  this.load.spritesheet(
    "alien",
    "http://labs.phaser.io/assets/tests/invaders/invader1.png",
    { frameWidth: 32, frameHeight: 32 }
  );

  // 보스

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    //enemy end
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
=======
  //enemy end
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
}

function create() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    //map start
    this.cameras.main.setBounds(0, 0, mapSize, mapSize);
    this.physics.world.setBounds(0, 0, mapSize, mapSize);
    map = this.make.tilemap({key: "map"}); //map을 키로 가지는 JSON 파일 가져와 적용하기
    const tileset = map.addTilesetImage("Tiles", "tiles"); //그릴떄 사용할 타일 이미지 적용하기
    const tileset2 = map.addTilesetImage("tiles2", "tiles2"); //그릴떄 사용할 타일 이미지 적용하기
    backGroundLayer = map.createDynamicLayer("background", tileset); //레이어 화면에 뿌려주기
    portalLayer = map.createDynamicLayer("portal", tileset2); //레이어 화면에 뿌려주기
    wallLayer = map.createDynamicLayer("wall", tileset2);
    stage1Layer = map.createDynamicLayer("stage1", tileset2);
    stage2Layer = map.createDynamicLayer("stage2", tileset);
    stage3Layer = map.createDynamicLayer("stage3", tileset2);
    stage4Layer = map.createDynamicLayer("stage4", tileset2);
=======
=======
  inGameUI();
>>>>>>> 6fd22c6 (#1 :sparkles: merge 완료)
=======
>>>>>>> a774e3d (#1 :sparkles: levelup random 및 levelup시 수치 증가)
  thisScene = this;
  //map start
<<<<<<< HEAD
<<<<<<< HEAD
  this.cameras.main.setBounds(0, 0, mapSize, mapSize);
  this.physics.world.setBounds(0, 0, mapSize, mapSize);
  map = this.make.tilemap({ key: "map" }); //map을 키로 가지는 JSON 파일 가져와 적용하기
  const tileset = map.addTilesetImage("Tiles", "tiles"); //그릴떄 사용할 타일 이미지 적용하기
  const tileset2 = map.addTilesetImage("tiles2", "tiles2"); //그릴떄 사용할 타일 이미지 적용하기
  backgroundLayer = map.createDynamicLayer("background", tileset); //레이어 화면에 뿌려주기
  portalLayer = map.createDynamicLayer("portal", tileset2); //레이어 화면에 뿌려주기
  wallLayer = map.createDynamicLayer("wall", tileset2);
  stage1Layer = map.createDynamicLayer("stage1", tileset2);
  stage2Layer = map.createDynamicLayer("stage2", tileset);
  stage3Layer = map.createDynamicLayer("stage3", tileset2);
  stage4Layer = map.createDynamicLayer("stage4", tileset2);
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
=======
  this.chunkSize = 16;
=======
  this.chunkSize = 8;
<<<<<<< HEAD
>>>>>>> f7fa4a4 (#3 :sparkles: 플레이어 스킬 구현1)
  this.tileSize = 1024;
  this.cameraSpeed = 10;
>>>>>>> dbb8db6 (#6 :sparkles: 맵 동적 생성)
=======
  this.tileSize = 300;
  this.cameraSpeed = 1;
>>>>>>> 43845d2 (#6 :bug: 맵chunk 미생성 수정)
=======
=======
>>>>>>> 9ff3036 (#2 :sparkle: 코드 정리)
=======
    //enemy end
}

function create() {
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
    //enemy end
}

function create() {
>>>>>>> ad327af (Update game.js)
    thisScene = this;
    //map start
    this.chunkSize = 8;
    this.tileSize = 300;
    this.cameraSpeed = 1;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======
>>>>>>> 9ff3036 (#2 :sparkle: 코드 정리)
=======
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
=======
  //enemy end
}

function create() {
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======

  this.load.spritesheet("fairy4_1", "images/fairy/fairy4_blue.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy4_2", "images/fairy/fairy4_green.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy5", "images/fairy/fairy5.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  this.load.spritesheet("fairy5_1", "images/fairy/fairy5_red.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  this.load.spritesheet("fairy5_2", "images/fairy/fairy5_black.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  //player end

  //enemy start

  // 몬스터

  this.load.spritesheet("monster_die", "images/monster/monster_die2.png", {
    frameWidth: 64,
    frameHeight: 64,
  });

<<<<<<< HEAD
  this.load.spritesheet(
    "alien",
    "images/monster/alien.png",
    { frameWidth: 20, frameHeight: 20 }
  );

  this.load.spritesheet(
    "worm",
    "images/monster/worm.png",
    {
    frameWidth: 48,
    frameHeight: 48
})

  this.load.spritesheet(
    "sonic",
    "images/monster/sonic.png",
    {
    frameWidth: 32,
    frameHeight: 32
})

  this.load.spritesheet(
    "turtle",
    "images/monster/turtle.png",
    {
    frameWidth: 32,
    frameHeight: 32
})

  this.load.spritesheet(
    "slime",
    "images/monster/slime.png",
    {
    frameWidth: 16,
    frameHeight: 16
})

  this.load.spritesheet(
    "fly",
    "images/monster/fly.png",
    {
    frameWidth: 48,
    frameHeight: 48
})


this.load.spritesheet(
  "flyPlus",
  "images/monster/flyPlus.png",
  {
  frameWidth: 48,
  frameHeight: 48
})

  this.load.spritesheet(
    "alienPlus",
    "images/monster/alienPlus.png",
    {
=======
  this.load.spritesheet("alien", "images/monster/alien.png", {
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)
    frameWidth: 20,
    frameHeight: 20,
  });

  this.load.spritesheet("worm", "images/monster/worm.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  this.load.spritesheet("sonic", "images/monster/sonic.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("turtle", "images/monster/turtle.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("slime", "images/monster/slime.png", {
    frameWidth: 16,
    frameHeight: 16,
  });

  this.load.spritesheet("fly", "images/monster/fly.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  this.load.spritesheet("alienPlus", "images/monster/alienPlus.png", {
    frameWidth: 20,
    frameHeight: 20,
  });

  this.load.spritesheet("wormPlus", "images/monster/wormPlus.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  //   보스
  this.load.spritesheet("slimeKing", "images/boss/slimeKing.png", {
    frameWidth: 96,
    frameHeight: 96,
  });

  this.load.spritesheet("golem", "images/boss/golem.png", {
    frameWidth: 96,
    frameHeight: 96,
  });

  this.load.spritesheet("fireGiant", "images/boss/fireGiant.png", {
    frameWidth: 96,
    frameHeight: 96,
  });

<<<<<<< HEAD

this.load.spritesheet(
    "fireGiantAura",
    "images/boss/fireGiantAura.png",
    {
    frameWidth: 60,
    frameHeight: 60
})
=======
  this.load.spritesheet("fireGiantAura", "images/boss/fireGiantAura.png", {
    frameWidth: 96,
    frameHeight: 96,
  });
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)
  //enemy end
}

function create() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
=======
=======
  cursor: url("images/aimNone.png"), pointer;
>>>>>>> f259795 (:sparkles: cursor)
=======
  this.input.setDefaultCursor("url(/images/cursor/aimNone.png), pointer")
>>>>>>> 82799aa (hi)
=======
  this.input.setDefaultCursor("url(/images/cursor/aimNone.png), pointer");
<<<<<<< HEAD
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)
  setSound.setBGM(1);
>>>>>>> a218e28 (#1 #2 #3 :rocket: 소리 추가 1)
=======
  if(ChoiceCat === 4){
    setSound.setBGM(5);
  } else{
    setSound.setBGM(1);
  }

>>>>>>> bc08332 (#3 :cat2: 무냥 진냥)
  thisScene = this;
  //map start
  this.chunkSize = 8;
  this.tileSize = 300;
  this.cameraSpeed = 1;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)

<<<<<<< HEAD
<<<<<<< HEAD
  this.cameras.main.setZoom(1);
=======

>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
  UICam = this.cameras.add(
    player.x,
    player.y,
    this.cameras.main.worldView.width,
    this.cameras.main.worldView.height
  );
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  this.followPoint = new Phaser.Math.Vector2(
    this.cameras.main.worldView.x + this.cameras.main.worldView.width * 0.5,
    this.cameras.main.worldView.y + this.cameras.main.worldView.height * 0.5
  );
  // this.cameras.main.setBounds(0, 0, mapSize, mapSize);
  // this.physics.world.setBounds(0, 0, mapSize, mapSize);
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======
>>>>>>> 9ff3036 (#2 :sparkle: 코드 정리)
=======

=======

>>>>>>> ad327af (Update game.js)
    this.cameras.main.setZoom(1);
=======
    this.cameras.main.setZoom(0.8);
>>>>>>> 1d421fe (#5 #3 :sparkles: 카메라 줌 당기고 exp바 수정)
=======
>>>>>>> 2e09e3c (#3 :sparkles: camera zoom and exp bar patch)
=======
    UICam = this.cameras.add(player.x, player.y, this.cameras.main.worldView.width, this.cameras.main.worldView.height);
>>>>>>> e875625 (:bug: 리팩토링 오류 수정)
    this.followPoint = new Phaser.Math.Vector2(
        this.cameras.main.worldView.x + this.cameras.main.worldView.width * 0.5,
        this.cameras.main.worldView.y + this.cameras.main.worldView.height * 0.5
<<<<<<< HEAD
    );
    // this.cameras.main.setBounds(0, 0, mapSize, mapSize);
    // this.physics.world.setBounds(0, 0, mapSize, mapSize);

>>>>>>> d0fc426 (#2 :sparkles: 불거인)
    cursors = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
        slot1: Phaser.Input.Keyboard.KeyCodes.ONE,
        slot2: Phaser.Input.Keyboard.KeyCodes.TWO,
        slot3: Phaser.Input.Keyboard.KeyCodes.THREE,
        slot4: Phaser.Input.Keyboard.KeyCodes.FOUR,
        slot5: Phaser.Input.Keyboard.KeyCodes.FIVE,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    });
    // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true);
=======
=======
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
=======

>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  cursors = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D,
    slot1: Phaser.Input.Keyboard.KeyCodes.ONE,
    slot2: Phaser.Input.Keyboard.KeyCodes.TWO,
    slot3: Phaser.Input.Keyboard.KeyCodes.THREE,
    slot4: Phaser.Input.Keyboard.KeyCodes.FOUR,
    slot5: Phaser.Input.Keyboard.KeyCodes.FIVE,
    skill: Phaser.Input.Keyboard.KeyCodes.SPACE,
  });
  // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)

=======
=======
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  global.$this = this.scene;
  this.input.keyboard.on("keydown-" + "SHIFT", function (event) {
    initUpgrade();
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6fd22c6 (#1 :sparkles: merge 완료)
  //map end

  //player start
  cats = require("./jsons/cats.json");
  fairySet = require("./jsons/fairys.json");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(ChoiceCat);
=======
=======
  
>>>>>>> b192aa3 (#6 :sparkles: exp bar 추가)
=======
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)

>>>>>>> a774e3d (#1 :sparkles: levelup random 및 levelup시 수치 증가)
  player = cats[catNumber];
<<<<<<< HEAD
<<<<<<< HEAD
  player = new Player(this, 1, 100, 100, "cat"+(ChoiceCat+1));
  player.setDepth(1);
=======
  player = new Player(this, 1, 100, 100);
=======
  player = new Player(this, 1, 100, 100, "cat" + (ChoiceCat + 1));
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
  player.setDepth(2);
>>>>>>> 43845d2 (#6 :bug: 맵chunk 미생성 수정)
  inGameUI();
=======
=======
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
        skill: Phaser.Input.Keyboard.KeyCodes.SPACE,
    });
    // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true);
    global.$this = this.scene;
    this.input.keyboard.on("keydown-" + "SHIFT", function (event) {
        initUpgrade();
    });
    //map end
<<<<<<< HEAD
=======
  //map end
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
  //map end
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)

  //player start
  cats = require("./jsons/cats.json");
  fairySet = require("./jsons/fairys.json");
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
  //map end
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)

  //player start
  cats = require("./jsons/cats.json");
  fairySet = require("./jsons/fairys.json");

<<<<<<< HEAD
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
    player = cats[catNumber];
    player = new Player(this, 1, 100, 100, "cat" + (ChoiceCat + 1));
    player.setDepth(2);
    inGameUI();
<<<<<<< HEAD
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======
  player = cats[catNumber];
  player = new Player(this, 1, 100, 100, "cat" + (ChoiceCat + 1));
  player.setDepth(2);
  inGameUI();

  camera = this.cameras.main;
  input = this.input;
  mouse = input.mousePointer;
  this.input.on(
    "pointermove",
    function (pointer) {
      let cursor = pointer;
      let angle = Phaser.Math.Angle.Between(
        player.x,
        player.y,
        cursor.x + this.cameras.main.scrollX,
        cursor.y + this.cameras.main.scrollY
      );
    },
    this
  );
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)

  // 플레이어, 요정 로딩
  global.wizard = fairySet[0] = new Fairy(
    this,
    100,
    4,
    1,
    1,
    140,
    40,
    500,
    1,
    player
  );
  fairySet[0].initFairy1(0, 0);
  global.reaper = fairySet[1] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    70,
    10,
    160,
    2,
    player
  );
  global.ninja = fairySet[2] = new Fairy(
    this,
    100,
    0,
    1,
    3,
    80,
    10,
    300,
    3,
    player
  );
  fairySet[2].initFairy3(0, 10);
  global.slime = fairySet[3] = new Fairy(
    this,
    7200,
    10,
    1,
    3,
    90,
    10,
    400,
    4,
    player
  );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // 플레이어, 요정 로딩
    fairySet[0] = new Fairy(this, 100, 10, 1, 360, 60, 10, 100, 1, player);
    fairySet[1] = new Fairy(this, 100, 10, 1, 300, 70, 10, 20, 2, player);
    fairySet[2] = new Fairy(this, 100, 10, 1, 240, 80, 10, 300, 3, player);
    fairySet[3] = new Fairy(this, 100, 10, 1, 180, 90, 10, 400, 4, player);
    fairySet[4] = new Fairy(this, 100, 10, 1, 120, 100, 10, 500, 5, player);
    player.changeFairy(fairySet[0]);
    normalAttackAS = fairySet[0].as;
    // animation
    this.anims.create({
        key: "fairy1_idle",
        frames: this.anims.generateFrameNumbers("fairy1", {start: 12, end: 21}),
        frameRate: 8,
        repeat: -1,
    });
=======
  // 플레이어, 요정 로딩
  global.wizard = fairySet[0] = new Fairy(
    this,
    100,
    4,
    1,
    1,
    140,
    40,
    500,
    1,
    player
  );
<<<<<<< HEAD
  fairySet[0].initFairy1(2, 2);
<<<<<<< HEAD
  fairySet[1] = new Fairy(this, 100, 10, 1, 1, 70, 10, 160, 2, player);
  fairySet[2] = new Fairy(this, 100, 0, 1, 3, 80, 10, 300, 3, player);
  fairySet[3] = new Fairy(this, 100, 10, 1, 4, 90, 10, 400, 4, player);
  fairySet[3].initFairy3(1, 10);
  fairySet[4] = new Fairy(this, 100, 10, 1, 5, 100, 10, 500, 5, player);
=======
=======
  fairySet[0].initFairy1(0, 0);
>>>>>>> 8ab07ca (#3 :sparkles: 위치 폭탄)
  global.reaper = fairySet[1] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    70,
    10,
    160,
    2,
    player
  );
  global.ninja = fairySet[2] = new Fairy(
    this,
    100,
    0,
    1,
    3,
    80,
    10,
    300,
    3,
    player
  );
  fairySet[2].initFairy3(0, 10);
  global.slime = fairySet[3] = new Fairy(
    this,
    7200,
    10,
    1,
    3,
    90,
    10,
    400,
    4,
    player
  );

=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======

  player = cats[catNumber];
  player = new Player(this, 1, 20, 20, "cat" + (ChoiceCat + 1));
  player.setScale(0.7)
  player.setDepth(2);
  let hw = player.body.halfWidth;
  let hh = player.body.halfHeight;

  player.setCircle(hw, hh - hw, hh - hw);

  inGameUI();

  camera = this.cameras.main;
  input = this.input;
  mouse = input.mousePointer;
  this.input.on(
    "pointermove",
    function (pointer) {
      let cursor = pointer;
      let angle = Phaser.Math.Angle.Between(
        player.x,
        player.y,
        cursor.x + this.cameras.main.scrollX,
        cursor.y + this.cameras.main.scrollY
      );
    },
    this
  );

  // 플레이어, 요정 로딩
  global.wizard = fairySet[0] = new Fairy(
    this,
    100,
    4,
    1,
    1,
    140,
    40,
    500,
    1,
    player
  );
  fairySet[0].initFairy1(0, 0);
  global.reaper = fairySet[1] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    70,
    10,
    160,
    2,
    player
  );
  global.ninja = fairySet[2] = new Fairy(
    this,
    100,
    0,
    1,
    3,
    80,
    10,
    300,
    3,
    player
  );
  fairySet[2].initFairy3(0, 10);
  global.slime = fairySet[3] = new Fairy(
    this,
    7200,
    10,
    1,
    3,
    90,
    10,
    400,
    4,
    player
  );

>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
  global.witch = fairySet[4] = new Fairy(
    this,
    100,
    10,
    1,
    5,
    40,
    10,
    500,
    5,
    player
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a774e3d (#1 :sparkles: levelup random 및 levelup시 수치 증가)
=======
  fairySet[4].initFairy5(1, 1)
>>>>>>> 8ab07ca (#3 :sparkles: 위치 폭탄)
=======
  fairySet[4].initFairy5(1, 1);
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
  fairySet[4].initFairy5(1, 1);
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
  fairySet[4].initFairy5(1, 1);
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
  for (let i = 0; i < 5; i++) {
    fairySet[i].setDepth(2);
  }
  player.changeFairy(fairySet[0]);
  normalAttackAS = fairySet[0].as;
  // animation
  this.anims.create({
    key: "fairy1_idle",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
=======
    // 플레이어, 요정 로딩
    global.wizard = fairySet[0] = new Fairy(
        this,
        100,
        4,
        1,
        1,
        140,
        40,
        500,
        1,
        player,
        0.5,
        1
    );
    fairySet[0].initFairy1(0, 0);
    global.reaper = fairySet[1] = new Fairy(
        this,
        100,
        10,
        1,
        1,
        70,
        10,
        160,
        2,
        player,
        0.4,
        2
    );
    global.ninja = fairySet[2] = new Fairy(
        this,
        100,
        0,
        1,
        3,
        80,
        10,
        300,
        3,
        player,
        0.5,
        1
    );
    fairySet[2].initFairy3(0, 10);
    global.slime = fairySet[3] = new Fairy(
        this,
        7200,
        10,
        1,
        99999,
        90,
        10,
        400,
        4,
        player,
        0.5,
        1
    );

    global.witch = fairySet[4] = new Fairy(
        this,
        100,
        10,
        1,
        5,
        40,
        10,
        500,
        5,
        player,
        0.5,
        1
    );
    fairySet[4].initFairy5(1, 1)
    for (let i = 0; i < 5; i++) {
        fairySet[i].setDepth(1);
    }
    player.changeFairy(fairySet[0]);
    normalAttackAS = fairySet[0].as;
    // animation
    this.anims.create({
        key: "fairy1_idle",
        frames: this.anims.generateFrameNumbers("fairy1", {start: 12, end: 21}),
        frameRate: 8,
        repeat: -1,
    });
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======

  this.anims.create({
    key: "fairy1_attack",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 6, end: 10 }),
    frameRate: 12,
=======

  this.anims.create({
    key: "fairy1_attack",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_idle",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_attack",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 0, end: 8 }),
    frameRate: 14,
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
    repeat: 0,
  });

  this.anims.create({
<<<<<<< HEAD
    key: "fairy2_idle",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)

  this.anims.create({
    key: "fairy2_attack",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 0, end: 8 }),
=======
    key: "fairy3_idle",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 11, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_attack",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 0, end: 9 }),
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
<<<<<<< HEAD
    key: "fairy3_idle",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 11, end: 19 }),
=======
    key: "fairy4_idle",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 7, end: 14 }),
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
<<<<<<< HEAD
    key: "fairy3_attack",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 0, end: 9 }),
    frameRate: 14,
=======
    key: "fairy4_attack",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 0, end: 5 }),
    frameRate: 10,
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
    repeat: 0,
  });

  this.anims.create({
<<<<<<< HEAD
    key: "fairy4_idle",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 7, end: 14 }),
=======
    key: "fairy5_idle",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 15, end: 24 }),
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
<<<<<<< HEAD
    key: "fairy4_attack",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_idle",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_attack",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  // 공격 애니메이션
  this.anims.create({
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_1",
    frames: this.anims.generateFrameNumbers("magic5_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  fairySet[nowFairy].play("fairy" + (nowFairy + 1) + "_idle", true);

  //player end

<<<<<<< HEAD
<<<<<<< HEAD
=======
  //cointext start
  cointext = this.add
    .text(500, 10, "coin: 0", { font: "10px Arial Black", fill: "#000" })
    .setScrollFactor(0);
  cointext.setStroke("#fff", 1);
  cointext.setDepth(2);
  //cointext end
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)

  //enemy start

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // 공격 애니메이션
    this.anims.create({
        key: "magic1",
        frames: this.anims.generateFrameNumbers("magic1", {
            start: 0,
            end: 30,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic2",
        frames: this.anims.generateFrameNumbers("magic2", {
            start: 0,
            end: 30,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic3",
        frames: this.anims.generateFrameNumbers("magic3", {
            start: 0,
            end: 30,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic4",
        frames: this.anims.generateFrameNumbers("magic4", {
            start: 0,
            end: 30,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic5",
        frames: this.anims.generateFrameNumbers("magic5", {
            start: 0,
            end: 30,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });

    fairySet[nowFairy].play("fairy" + (nowFairy + 1) + "_idle", true);
=======
=======
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
  // 공격 애니메이션
  this.anims.create({
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_1",
    frames: this.anims.generateFrameNumbers("magic5_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
<<<<<<< HEAD
  fairys[now_fairy].play("fairy" + (now_fairy + 1) + "_idle", true);
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
=======
  fairySet[nowFairy].play("fairy" + (nowFairy + 1) + "_idle", true);
>>>>>>> 52852dc (#3 :bug: 오타 및 컨벤션 수정)
=======
    //player end
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

    //cointext start
    cointext = this.add.text(500, 10, 'coin: 0', {font: '10px Arial Black', fill: '#000'}).setScrollFactor(0);
    cointext.setStroke('#fff', 1);
    cointext.setDepth(2);
    //cointext end

<<<<<<< HEAD
    //enemy start
=======
  //cointext start
  cointext = this.add
    .text(500, 10, "coin: 0", { font: "10px Arial Black", fill: "#000" })
    .setScrollFactor(0);
  cointext.setStroke("#fff", 1);
  cointext.setDepth(2);
  //cointext end
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)

<<<<<<< HEAD
  //enemy start

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    alienSet = this.physics.add.group();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
    this.physics.add.overlap(player, aliens, hitplayer);

<<<<<<< HEAD
=======
  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
  this.physics.add.overlap(player, aliens, player.hitPlayer);
>>>>>>> 34516b7 (#2 :sparkles: 몬스터 객체화)
=======
    // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
    this.physics.add.overlap(player, alienSet, player.hitPlayer);
>>>>>>> ec22f2e (#3 #2 :sparkles: 컨벤션 수정)

=======
  aliens = this.physics.add.group();
=======
  monsterSet = this.physics.add.group();
>>>>>>> 43845d2 (#6 :bug: 맵chunk 미생성 수정)
  magics = this.physics.add.group();
  towerAttacks = this.physics.add.group();
  towerSkillAttacks = this.physics.add.group();
<<<<<<< HEAD
  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
  this.physics.add.collider(player, aliens, player.hitPlayer);
  thisScene.physics.add.overlap(magics, aliens, attack);
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
=======
  alienSet = this.physics.add.group();
=======
    // this.physics.add.overlap(player, portalLayer);

    player.setPosition(8000, 8000); //width, height
    this.physics.add.collider(player, stage3Layer);
    camera.startFollow(player, false);
    //map end

    //enemy start
<<<<<<< HEAD
  
  monsterSet = this.physics.add.group();
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
  magics = this.physics.add.group();
=======

=======
  mines = this.physics.add.group();
>>>>>>> 643016e (#6 :sparkles: 인게임 coin 생성)

    // 임시 구멍
    hole = this.physics.add.sprite(8000,8100,'fairy4')
    hole.hp = 100;
=======
=======
        skill: Phaser.Input.Keyboard.KeyCodes.SPACE,
    });
    // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true);
    global.$this = this.scene;
    this.input.keyboard.on("keydown-" + "SHIFT", function (event) {
        initUpgrade();
    });
    //map end
=======
  //map end
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)

  //player start
  cats = require("./jsons/cats.json");
  fairySet = require("./jsons/fairys.json");

  player = cats[catNumber];
  player = new Player(this, 1, 100, 100, "cat" + (ChoiceCat + 1));
  player.setDepth(2);

  camera = this.cameras.main;
  input = this.input;
  mouse = input.mousePointer;
  this.input.on(
    "pointermove",
    function (pointer) {
      let cursor = pointer;
      let angle = Phaser.Math.Angle.Between(
        player.x,
        player.y,
        cursor.x + this.cameras.main.scrollX,
        cursor.y + this.cameras.main.scrollY
      );
    },
    this
  );

  // 플레이어, 요정 로딩
  global.wizard = fairySet[0] = new Fairy(
    this,
    100,
    4,
    1,
    1,
    140,
    40,
    500,
    1,
<<<<<<< HEAD
    player
=======
    player,
    0.5,
    1
>>>>>>> b038195 (#1 :bug: 버그 수정)
  );
  fairySet[0].initFairy1(0, 0);
  global.reaper = fairySet[1] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    70,
    10,
    160,
    2,
<<<<<<< HEAD
    player
=======
    player,
    0.4,
    2
>>>>>>> b038195 (#1 :bug: 버그 수정)
  );
  global.ninja = fairySet[2] = new Fairy(
    this,
    100,
    0,
    1,
    3,
    80,
    10,
    300,
    3,
<<<<<<< HEAD
    player
=======
    player,
    0.5,
    1
>>>>>>> b038195 (#1 :bug: 버그 수정)
  );
  fairySet[2].initFairy3(0, 10);
  global.slime = fairySet[3] = new Fairy(
    this,
    7200,
    10,
    1,
    3,
    90,
    10,
    400,
    4,
<<<<<<< HEAD
    player
=======
    player,
    0.5,
    1
>>>>>>> b038195 (#1 :bug: 버그 수정)
  );

<<<<<<< HEAD
  global.witch = fairySet[4] = new Fairy(
    this,
    100,
    10,
    1,
    5,
    40,
    10,
    500,
    5,
    player
  );
  fairySet[4].initFairy5(1, 1);
  for (let i = 0; i < 5; i++) {
    fairySet[i].setDepth(2);
  }
  player.changeFairy(fairySet[0]);
  normalAttackAS = fairySet[0].as;
  // animation
  this.anims.create({
    key: "fairy1_idle",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

<<<<<<< HEAD
=======
=======
>>>>>>> 00d4ef8 (:bug: 사신 크기 버그 수정)
  global.witch = fairySet[4] = new Fairy(
    this,
    720,
    10,
    1,
    3,
    40,
    10,
    500,
    5,
    player,
    0.5,
    1
  );
  global.bombs = this.physics.add.group();
  fairySet[4].initFairy5(1, 1);
  for (let i = 0; i < 5; i++) {
    fairySet[i].setDepth(2);
  }
  player.changeFairy(fairySet[0]);
  normalAttackAS = fairySet[0].as;
  // animation
  this.anims.create({
    key: "fairy1_idle",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

>>>>>>> b038195 (#1 :bug: 버그 수정)
  this.anims.create({
    key: "fairy1_attack",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });
<<<<<<< HEAD

  this.anims.create({
    key: "fairy2_idle",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_attack",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_idle",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 11, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_attack",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 0, end: 9 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_idle",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_attack",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_idle",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_attack",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  // 공격 애니메이션
  this.anims.create({
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_1",
    frames: this.anims.generateFrameNumbers("magic5_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  fairySet[nowFairy].play("fairy" + (nowFairy + 1) + "_idle", true);

  //player end

  //cointext start
  cointext = this.add
    .text(500, 10, "coin: 0", { font: "10px Arial Black", fill: "#000" })
    .setScrollFactor(0);
  cointext.setStroke("#fff", 1);
  cointext.setDepth(2);
  //cointext end

  //enemy start

<<<<<<< HEAD
    //player end

    //cointext start
    // cointext = this.add.text(500, 20, 'coin: 0', {font: 'Bold 15px Arial', fill: '#fff', fontStyle: "strong"}).setScrollFactor(0);
    // cointext.setStroke('#000', 2);
    // cointext.setDepth(2);
    //cointext end

    //enemy start

>>>>>>> 9ff3036 (#2 :sparkle: 코드 정리)
    monsterSet = this.physics.add.group();
    magics = this.physics.add.group();
    towerAttacks = this.physics.add.group();
    towerSkillAttacks = this.physics.add.group();
    mines = this.physics.add.group();
=======
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
  monsterSet = this.physics.add.group();
  magics = this.physics.add.group();
  towerAttacks = this.physics.add.group();
  towerSkillAttacks = this.physics.add.group();
  mines = this.physics.add.group();
<<<<<<< HEAD
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)

<<<<<<< HEAD
    // 임시 구멍
    hole = this.physics.add.sprite(0, 0, 'fairy4')
    hole.hp = 100;
    hole.setDepth(1);
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======
  // 임시 구멍
  hole = this.physics.add.sprite(0, 0, "fairy4");
  hole.hp = 100;
  hole.setDepth(1);
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)

  // 그룹셋
  monsterSet = this.physics.add.group();
  bossSet = this.physics.add.group();
  magics = this.physics.add.group();

  this.physics.add.collider(player, bossSet, player.hitPlayer);
  this.physics.add.collider(bossSet, monsterSet);
  thisScene.physics.add.overlap(magics, bossSet, attack);

<<<<<<< HEAD
<<<<<<< HEAD
  this.physics.add.collider(player, bossSet, player.hitPlayer);
  this.physics.add.collider(bossSet, monsterSet);
  thisScene.physics.add.overlap(magics, bossSet, attack);
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)

  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
<<<<<<< HEAD
  this.physics.add.collider(player, alienSet, player.hitPlayer);
<<<<<<< HEAD
<<<<<<< HEAD
  thisScene.physics.add.overlap(magics, alienSet, attack);
>>>>>>> 52852dc (#3 :bug: 오타 및 컨벤션 수정)
=======
  thisScene.physics.add.overlap(magics,alienSet,attack);
=======
  thisScene.physics.add.overlap(magics, alienSet, attack);
>>>>>>> 457e4ef (#1 :sparkles: develop merge)
  //map start
=======
    this.physics.add.collider(player, bossSet, player.hitPlayer);
    this.physics.add.collider(bossSet, monsterSet);
    thisScene.physics.add.overlap(magics, bossSet, attack);
=======
  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
  this.physics.add.collider(player, monsterSet, player.hitPlayer);
  thisScene.physics.add.overlap(magics, monsterSet, attack);
  // 만약 몬스터와 구멍이 닿았다면 (hithole 함수 실행)
  thisScene.physics.add.overlap(hole, monsterSet, hithole);
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)

  //map start
  var snappedChunkX =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
  var snappedChunkY =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

<<<<<<< HEAD
    //map start
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
    var snappedChunkX =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
    var snappedChunkY =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));
=======
  snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
  snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)

  for (var x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
    for (var y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
      var existingChunk = getChunk(x, y);

      if (existingChunk == null) {
        var newChunk = new Chunk(this, x, y);
        chunks.push(newChunk);
      }
    }
  
=======

  this.anims.create({
    key: "fairy1_1_idle",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_1_attack",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy1_2_idle",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_2_attack",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_idle",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_attack",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_1_idle",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_1_attack",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_2_idle",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_2_attack",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_idle",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_attack",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_1_idle",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_1_attack",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_2_idle",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_2_attack",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });


  this.anims.create({
    key: "fairy4_idle",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_attack",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_1_idle",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_1_attack",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_2_idle",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_2_attack",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_idle",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_attack",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_1_idle",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_1_attack",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_2_idle",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_2_attack",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  // 공격 애니메이션
  this.anims.create({
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_1",
    frames: this.anims.generateFrameNumbers("magic2_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });

  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_1",
    frames: this.anims.generateFrameNumbers("magic5_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  fairySet[nowFairy].play(fairySet[nowFairy].idleKey, true);

  //player end

  //cointext start
  // cointext = this.add.text(500, 20, 'coin: 0', {font: 'Bold 15px Arial', fill: '#fff', fontStyle: "strong"}).setScrollFactor(0);
  // cointext.setStroke('#000', 2);
  // cointext.setDepth(2);
  //cointext end

  //enemy start

=======
    key: "fairy5_attack",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  // 공격 애니메이션
  this.anims.create({
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_1",
    frames: this.anims.generateFrameNumbers("magic5_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  fairySet[nowFairy].play("fairy" + (nowFairy + 1) + "_idle", true);

  //player end

  //cointext start
  cointext = this.add
    .text(500, 10, "coin: 0", { font: "10px Arial Black", fill: "#000" })
    .setScrollFactor(0);
  cointext.setStroke("#fff", 1);
  cointext.setDepth(2);
  //cointext end

  //enemy start

>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
  monsterSet = this.physics.add.group();
  magics = this.physics.add.group();
  towerAttacks = this.physics.add.group();
  towerSkillAttacks = this.physics.add.group();
  mines = this.physics.add.group();


  // 임시 구멍
<<<<<<< HEAD
  hole = this.physics.add.sprite(0, 0, "fairy4");
  hole.hp = 5;
=======
  hole = this.physics.add.sprite(0, 0, "magic1");
  hole.setScale(2.3);
  hw = hole.body.halfWidth;
  hh = hole.body.halfHeight;
  hole.setCircle(hw*0.7, hh - hw*0.7, hh - hw*0.7);
  hole.hp = 100;
>>>>>>> 3e6dfa6 (#3 :sparkles: player 기능 구현)
  hole.setDepth(1);
  inGameUI();
  // 그룹셋
  monsterSet = this.physics.add.group();
  bossSet = this.physics.add.group();
  magics = this.physics.add.group();

  this.physics.add.collider(player, bossSet, player.hitPlayer);
  this.physics.add.collider(bossSet, monsterSet);
  thisScene.physics.add.overlap(magics, bossSet, attack);

  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
  this.physics.add.collider(player, monsterSet, player.hitPlayer);
  thisScene.physics.add.overlap(magics, monsterSet, attack);
  // 만약 몬스터와 구멍이 닿았다면 (hithole 함수 실행)
  thisScene.physics.add.overlap(hole, monsterSet, hithole);
  thisScene.physics.add.overlap(hole, bossSet, destroyhole);
  //map start
  var snappedChunkX =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
  var snappedChunkY =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

  snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
  snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

  for (var x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
    for (var y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
      var existingChunk = getChunk(x, y);

      if (existingChunk == null) {
        var newChunk = new Chunk(this, x, y);
        chunks.push(newChunk);
      }
    }
  }
  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

>>>>>>> b038195 (#1 :bug: 버그 수정)
  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
    
    if (cursors.up.isDown && this.cameras.main.worldView.y > -1000) {
      this.followPoint.y -= this.cameraSpeed;
    }
    if (cursors.down.isDown && this.cameras.main.worldView.y < 1000) {
      this.followPoint.y += this.cameraSpeed;
    }
    if (cursors.left.isDown && this.cameras.main.worldView.x > -1000) {
      this.followPoint.x -= this.cameraSpeed;
    }
    if (cursors.right.isDown && this.cameras.main.worldView.x < 1000) {
      this.followPoint.x += this.cameraSpeed;
    }
    
  this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);
  //map enderlap(magics, alienSet, attack);
>>>>>>> dbb8db6 (#6 :sparkles: 맵 동적 생성)
=======
  this.physics.add.collider(player, monsterSet, player.hitPlayer);
  thisScene.physics.add.overlap(magics, monsterSet, attack);
  
  // 만약 몬스터와 구멍이 닿았다면 (hithole 함수 실행)
  thisScene.physics.add.overlap(hole,monsterSet,hithole)

  // 플레이어가 공격 맞은 후 일시 무적에 사용
      timer = this.time.addEvent({
        delay: 2000, callback: () => {
            player.invincible = false
        }, loop: true
    });

    // ============== 몬스터 스프라이트 애니메이션 목록 ==================
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
    this.anims.create({
        key: 'swarm',
        frames: this.anims.generateFrameNumbers('alien', {start: 0, end: 1}),
        frameRate: 2,
        repeat: -1
    })
  //enemy end

<<<<<<< HEAD
<<<<<<< HEAD
    // 공격 맞은 후 일시 무적에 사용
<<<<<<< HEAD
<<<<<<< HEAD
    timer = this.time.addEvent({delay:2000, callback:()=>{invincible=false}, loop: true});

<<<<<<< HEAD
=======
  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
<<<<<<< HEAD
  this.physics.add.overlap(player['sprite'], alien, hitplayer, null, this);
>>>>>>> 8aecbcf (#3 :sparkles: 플레이어 객체 설정)
=======
  this.physics.add.overlap(player, alien, player.hitPlayer,null, this);
>>>>>>> dd93dae (#3 :sparkles: 요정, 공격 객체화)
=======
    timer = this.time.addEvent({delay:2000, callback:()=>{player.invincible=false}, loop: true});    
>>>>>>> 34516b7 (#2 :sparkles: 몬스터 객체화)
=======
    timer = this.time.addEvent({
        delay: 2000, callback: () => {
            player.invincible = false
        }, loop: true
    });
>>>>>>> ec22f2e (#3 #2 :sparkles: 컨벤션 수정)
=======
  towerLU = new CatTower(this, -100, -100, "cat", "can", "skill");
  towerRU = new CatTower(this, 100, -100, "cat", "can", "skill");
  towerLD = new CatTower(this, -100, 100, "cat", "can", "skill");
  towerRD = new CatTower(this, 100, 100, "cat", "can", "skill");
  console.log(towerLU);
  towerLU.scale_Circle();
  towerRU.scale_Circle();
  towerLD.scale_Circle();
  towerRD.scale_Circle();
  towerLU.setDepth(1);
  towerRU.setDepth(1);
  towerLD.setDepth(1);
  towerRD.setDepth(1);
>>>>>>> 62a9587 (#6 :bug: 총알 늘리기 수정)

    //enemy end
=======
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
}
function update(time, delta) {
//map start
if (
  this.cameras.main.worldView.x > -1000 &&
  this.cameras.main.worldView.x < 1000 &&
  this.cameras.main.worldView.y > -1000 &&
  this.cameras.main.worldView.y < 1000
) {
  var snappedChunkX =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
  var snappedChunkY =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

  snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
  snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

  for (var x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
    for (var y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
      var existingChunk = getChunk(x, y);

      if (existingChunk == null) {
        var newChunk = new Chunk(this, x, y);
        chunks.push(newChunk);
      }
    }
  }
  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }
}
  
=======

>>>>>>> 457e4ef (#1 :sparkles: develop merge)
  if (cursors.up.isDown && this.cameras.main.worldView.y > -1000) {
    this.followPoint.y -= this.cameraSpeed;
  }
  if (cursors.down.isDown && this.cameras.main.worldView.y < 1000) {
    this.followPoint.y += this.cameraSpeed;
  }
  if (cursors.left.isDown && this.cameras.main.worldView.x > -1000) {
    this.followPoint.x -= this.cameraSpeed;
  }
  if (cursors.right.isDown && this.cameras.main.worldView.x < 1000) {
    this.followPoint.x += this.cameraSpeed;
  }
=======

>>>>>>> 43845d2 (#6 :bug: 맵chunk 미생성 수정)

<<<<<<< HEAD
  this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);
  //map enderlap(magics, alienSet, attack);
  this.anims.create({
    key: "swarm",
    frames: this.anims.generateFrameNumbers("alien", { start: 0, end: 1 }),
    frameRate: 2,
    repeat: -1,
  });
=======
    this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);
    //map enderlap(magics, monsterSet, attack);
    this.anims.create({
        key: "swarm",
        frames: this.anims.generateFrameNumbers("alien", {start: 0, end: 1}),
        frameRate: 2,
        repeat: -1,
    });
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======
  }

  this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);
  //map enderlap(magics, monsterSet, attack);
  this.anims.create({
    key: "swarm",
    frames: this.anims.generateFrameNumbers("alien", { start: 0, end: 1 }),
    frameRate: 2,
    repeat: -1,
  });

  // 공격 맞은 후 일시 무적에 사용
  timer = this.time.addEvent({
    delay: 2000,
    callback: () => {
      player.invincible = false;
    },
    loop: true,
  });
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)

  // ============== 몬스터 스프라이트 애니메이션 목록 ==================
  this.anims.create({
    key: "swarm",
    frames: this.anims.generateFrameNumbers("alien", { start: 0, end: 1 }),
    frameRate: 2,
    repeat: -1,
  });
  //enemy end

<<<<<<< HEAD
<<<<<<< HEAD
  //enemy end
<<<<<<< HEAD
<<<<<<< HEAD
=======

    // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##
    if  (!boss_active){
      slime_king = new Boss(this,200,80,player.x+300,player.y+300,'slime_king','swarm',5,1,'boss')
      slime_king.anime()
      boss_active = true
      bossSet.add(slime_king)
    }
>>>>>>> 54e99e5 (#2 :sparkle: 슬라임 패턴 구현)
=======

=======
    // ============== 몬스터 스프라이트 애니메이션 목록 ==================
    this.anims.create({
        key: 'swarm',
        frames: this.anims.generateFrameNumbers('alien', {start: 0, end: 1}),
        frameRate: 2,
        repeat: -1
    })
    //enemy end
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
=======
  //tower start
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)

  towerLU = new CatTower(this, -100, -100, "cat", "can", "skill");
  towerRU = new CatTower(this, 100, -100, "cat", "can", "skill");
  towerLD = new CatTower(this, -100, 100, "cat", "can", "skill");
  towerRD = new CatTower(this, 100, 100, "cat", "can", "skill");
  towerLU.scale_Circle();
  towerRU.scale_Circle();
  towerLD.scale_Circle();
  towerRD.scale_Circle();
  towerLU.setDepth(1);
  towerRU.setDepth(1);
  towerLD.setDepth(1);
  towerRD.setDepth(1);

  //tower end

<<<<<<< HEAD
<<<<<<< HEAD
  towerLU = new CatTower(this, -100, -100, "cat", "can", "skill");
  towerRU = new CatTower(this, 100, -100, "cat", "can", "skill");
  towerLD = new CatTower(this, -100, 100, "cat", "can", "skill");
  towerRD = new CatTower(this, 100, 100, "cat", "can", "skill");
  towerLU.scale_Circle();
  towerRU.scale_Circle();
  towerLD.scale_Circle();
  towerRD.scale_Circle();
towerLU.setDepth(1);
towerRU.setDepth(1);
towerLD.setDepth(1);
towerRD.setDepth(1);
  
  //tower end
<<<<<<< HEAD
>>>>>>> bfa9489 (#6 :sparkles: 포탑 생성)
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 07be956 (#6 :bug: hole bye)
=======
=======
  //mine start
  for(let i = 0; i < minecount; i++){
    mine = new Mine(this, Math.random() * (EndMineRangeX - StartMineRangeX) + StartMineRangeX, Math.random() * (EndMineRangeY - StartMineRangeY) + StartMineRangeY, "mine");
=======
  //mine start
  for (let i = 0; i < minecount; i++) {
    mine = new Mine(
      this,
      Math.random() * (EndMineRangeX - StartMineRangeX) + StartMineRangeX,
      Math.random() * (EndMineRangeY - StartMineRangeY) + StartMineRangeY,
      "mine"
    );
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
    mine.scale_Circle();
    mines.add(mine);
  }
  //mine end
<<<<<<< HEAD
=======
    towerLU = new CatTower(this, -100, -100, "cat", "can", "skill");
    towerRU = new CatTower(this, 100, -100, "cat", "can", "skill");
    towerLD = new CatTower(this, -100, 100, "cat", "can", "skill");
    towerRD = new CatTower(this, 100, 100, "cat", "can", "skill");
    towerLU.scale_Circle();
    towerRU.scale_Circle();
    towerLD.scale_Circle();
    towerRD.scale_Circle();
    towerLU.setDepth(1);
    towerRU.setDepth(1);
    towerLD.setDepth(1);
    towerRD.setDepth(1);
=======
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)

  // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##

<<<<<<< HEAD
    //mine start
    for (let i = 0; i < minecount; i++) {
        mine = new Mine(this, Math.random() * (EndMineRangeX - StartMineRangeX) + StartMineRangeX, Math.random() * (EndMineRangeY - StartMineRangeY) + StartMineRangeY, "mine");
        mine.scale_Circle();
        mines.add(mine);
    }
    //mine end
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

>>>>>>> 643016e (#6 :sparkles: 인게임 coin 생성)
    // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##
<<<<<<< HEAD
<<<<<<< HEAD
    if  (!slime_king_active){
      slime_king = new Boss(this,300,80,player.x+300,player.y+300,'slime_king','swarm',5,1)
=======
    if  (!boss_active){
      slime_king = new Boss(this,200,80,player.x+300,player.y+300,'slime_king','swarm',5,1,'boss')
>>>>>>> 1376234 (#3 :art: 코드 깔끔하게하기)
      slime_king.setDepth(2);
      slime_king.anime()
      slime_king_active = true
      bossSet.add(slime_king)
    }
=======

>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
    //navi start
    navi = this.add.image(50, 50, 'navi').setScrollFactor(0).setScale(0.1);
    navi.setDepth(2)
    //navi end
<<<<<<< HEAD
>>>>>>> 43845d2 (#6 :bug: 맵chunk 미생성 수정)
=======

    //exp bar start
    expbar = this.add.graphics().setScrollFactor(0);
    expbarBG = this.add.graphics().setScrollFactor(0);
    expbar.setDepth(3);
    expbarBG.setDepth(2);
    //exp bar end
>>>>>>> b192aa3 (#6 :sparkles: exp bar 추가)
=======
  //navi start
  navi = this.add.image(50, 50, "navi").setScrollFactor(0).setScale(0.1);
  navi.setDepth(2);
  //navi end

  //exp bar start
  expbar = this.add.graphics().setScrollFactor(0);
  expbarBG = this.add.graphics().setScrollFactor(0);
  expbar.setDepth(3);
  expbarBG.setDepth(2);
  //exp bar end
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
}

function update(time, delta) {
  var snappedChunkX =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
  var snappedChunkY =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

  snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
  snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

  for (var x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
    for (var y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
      var existingChunk = getChunk(x, y);

      if (existingChunk == null) {
        var newChunk = new Chunk(this, x, y);
        chunks.push(newChunk);
      }
    }
  }
  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];

<<<<<<< HEAD
        if (
            Phaser.Math.Distance.Between(
                snappedChunkX,
                snappedChunkY,
                chunk.x,
                chunk.y
            ) < 3
        ) {
            if (chunk !== null) {
                chunk.load();
            }
        } else {
            if (chunk !== null) {
                chunk.unload();
            }
        }
    }


    this.followPoint.x = player.x
    this.followPoint.y = player.y

    this.cameras.main.startFollow(player, false);
    //map end

    //navi start

    navi.rotation = Phaser.Math.Angle.Between(hole.x, hole.y, player.x, player.y);

<<<<<<< HEAD
  //player start
  changeSlot();
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
  if (normalAttackTimer == normalAttackAS) {
    normalAttackTimer = 0;
=======
=======
  normalAttackAS = fairySet[nowFairy].as;
>>>>>>> 8ab07ca (#3 :sparkles: 위치 폭탄)
=======
    // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##
    if  (!slime_king_active){
      slime_king = new Boss(this,300,80,player.x+300,player.y+300,'slime_king','swarm',5,1)
      slime_king.anime()
      slime_king_active = true
      bossSet.add(slime_king)
    }
}

function update(time, delta) {
    //player start
    changeSlot();
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
  if (normalAttackTimer > normalAttackAS) {
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
    control = false;
  } else {
    normalAttackTimer++;
  }
  //mouse clicked
  if (mouse.leftButtonDown() && !control && fairySet[nowFairy].bombcount>0) {
    magic = new Magic(this, fairySet[nowFairy]);
<<<<<<< HEAD
    magic.setDepth(2);
    this.physics.add.overlap(
      magic,
      alienSet,
      fairySet[nowFairy].attack,
      null,
      this
    );
=======
    this.physics.add.overlap(magic, monsterSet, fairySet[nowFairy].attack, null, this);
<<<<<<< HEAD
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
=======
    
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
    fairySet[nowFairy].normalAttack(magic);
  }
=======
    //navi end
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

    //player start
    changeSlot();
    normalAttackAS = fairySet[nowFairy].as;
    if (normalAttackTimer > normalAttackAS) {
        control = false;
=======
    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

  this.followPoint.x = player.x;
  this.followPoint.y = player.y;

  this.cameras.main.startFollow(player, false);
  //map end

  //navi start

  navi.rotation = Phaser.Math.Angle.Between(hole.x, hole.y, player.x, player.y);

  //navi end

  //player start
  changeSlot();
  normalAttackAS = fairySet[nowFairy].as;
  if (normalAttackTimer > normalAttackAS) {
    control = false;
  } else {
    normalAttackTimer++;
  }
  //mouse clicked
  if (mouse.leftButtonDown() && !control && fairySet[nowFairy].bombcount > 0) {
    magic = new Magic(this, fairySet[nowFairy]);
    magic.setDepth(2);
    this.physics.add.overlap(
      magic,
      monsterSet,
      fairySet[nowFairy].attack,
      null,
      this
=======

    camera = this.cameras.main;
    input = this.input;
    mouse = input.mousePointer;
    this.input.on(
        "pointermove",
        function (pointer) {
            let cursor = pointer;
            let angle = Phaser.Math.Angle.Between(
                player.x,
                player.y,
                cursor.x + this.cameras.main.scrollX,
                cursor.y + this.cameras.main.scrollY
            );
        },
        this
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
    );

<<<<<<< HEAD
  for (let i = 0; i < 5; i++) {
    if (fairySet[i].timer < fairySet[i].skillCD) {
      fairySet[i].timer++;
    } else {
      fairySet[i].skillUse = false;
    }
  }

  if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
    fairySet[nowFairy].skillFire();
  }

  player.move();
  //player end

  //enemy start

  // 몬스터가 유저 따라가게함
  if (monsterCount !== 0) {
    for (let i = 0; i < monsterSet.children.entries.length; i++) {
      if (monsterSet.children.entries[i].type == "follower") {
        this.physics.moveToObject(
          monsterSet.children.entries[i],
          player,
          monsterSet.children.entries[i].velo
        );
      }
      // 몬스터가 홀에 도달하게 함
      else if (monsterSet.children.entries[i].type == "siege") {
        this.physics.moveToObject(
          monsterSet.children.entries[i],
          hole,
          monsterSet.children.entries[i].velo
        );
      }
    }
  }

  if (hole.hp <= 0) {
    $this.pause();
    updateHP();
    gameover();
  }

  gameTimer++;
  Updatetimer();

  // 플레이어 기준랜덤 위치에 몬스터 생성
  // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
  if (gameTimer > 300 && gameTimer % 30 == 0) {
    // 1번 zombie
    enemySpawn(randomLocation);

    // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
    addMonster(this, "alien", "swarm", 10, 100, monX, monY, "follower");
    // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')
  }
  if (gameTimer > 1200 && gameTimer % 600 == 0) {
    // 2번 worm
    enemySpawn(randomLocation);
    addMonster(this, "worm", "swarm", 10, 70, monX, monY, "siege");

    // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
    // addMonster(this, 'worm_plus', 'worm_plus_anim',20,100,monX,monY,'follower')
  }
  if (gameTimer > 1500 && gameTimer % 300 == 0) {
    enemySpawn(randomLocation);
    addMonster(this, "sonic", "swarm", 5, 200, monX, monY, "follower");
  }
  if (gameTimer > 1800 && gameTimer % 900 == 0) {
    enemySpawn(randomLocation);
    addMonster(this, "turtle", "swarm", 100, 30, monX, monY, "siege");
  }
  // 몬스터 빅웨이브
  if (gameTimer > 600 && gameTimer < 1200 && gameTimer % 3 == 0) {
    // 1번 zombie
    enemySpawn(randomLocation);

    // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
    addMonster(this, "alien", "swarm", 10, 100, monX, monY, "follower");
    // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')
  }

  // 보스

  // 슬라임
  if (gameTimer == 1800) {
    slime_king = new Boss(
      this,
      200,
      80,
      player.x + 300,
      player.y + 300,
      "slime_king",
      "swarm",
      5,
      1,
      "boss"
=======
    // 플레이어, 요정 로딩
    global.wizard = fairySet[0] = new Fairy(
        this,
        100,
        4,
        1,
        1,
        140,
        40,
        500,
        1,
        player,
        0.5,
        1
    );
    fairySet[0].initFairy1(0, 0);
    global.reaper = fairySet[1] = new Fairy(
        this,
        100,
        10,
        1,
        1,
        70,
        10,
        160,
        2,
        player,
        0.4,
        2
    );
    global.ninja = fairySet[2] = new Fairy(
        this,
        100,
        0,
        1,
        3,
        80,
        10,
        300,
        3,
        player,
        0.5,
        1
    );
    fairySet[2].initFairy3(0, 10);
    global.slime = fairySet[3] = new Fairy(
        this,
        7200,
        10,
        1,
        99999,
        90,
        10,
        400,
        4,
        player,
        0.5,
        1
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
    );

<<<<<<< HEAD
  // 골렘
  if (gameTimer == 3600) {
    golem = new Boss(
      this,
      500,
      100,
      player.x + 600,
      player.y - 600,
      "golem",
      "swarm",
      10,
      10,
      "boss"
    );
    golem.setDepth(2);
    golem.anime();
    boss_active = true;
    bossSet.add(golem);
  }

  // 보스 이동 및 사망 체크
  if (boss_active) {
    for (let i = 0; i < bossSet.children.entries.length; i++) {
      if (bossSet.children.entries[i].bossSpiece != "golem") {
        this.physics.moveToObject(
          bossSet.children.entries[i],
          player,
          bossSet.children.entries[i].velo
        );
      } else if (bossSet.children.entries[i].bossSpiece == "golem") {
        this.physics.moveToObject(
          bossSet.children.entries[i],
          hole,
          bossSet.children.entries[i].velo
        );
      }
      if (bossSet.children.entries[i].health <= 0) {
        if (bossSet.children.entries[i].bossSpiece == "slime_king") {
          slime_pattern(
            this,
            bossSet.children.entries[i].pt,
            bossSet.children.entries[i].x,
            bossSet.children.entries[i].y
          );
        }
        bossSet.children.entries[i].destroy();
        if (bossSet.children.entries.length == 0) {
          boss_active = false;
        }
      }
=======
    global.witch = fairySet[4] = new Fairy(
        this,
        720,
        10,
        1,
        3,
        40,
        10,
        500,
        5,
        player,
        0.5,
        1
    );
    global.bombs = this.physics.add.group();
    fairySet[4].initFairy5(1, 1);
    for (let i = 0; i < 5; i++) {
        fairySet[i].setDepth(2);
=======
  player = cats[catNumber];
  player = new Player(this, 1, 20, 20, "cat" + (ChoiceCat + 1));
  player.ability = ChoiceCat + 1
  player.setScale(0.7);
  player.setDepth(2);
  let hw = player.body.halfWidth;
  let hh = player.body.halfHeight;

  player.setCircle(hw, hh - hw, hh - hw);

  camera = this.cameras.main;
  input = this.input;
  mouse = input.mousePointer;
  this.input.on(
    "pointermove",
    function (pointer) {
      let cursor = pointer;
      let angle = Phaser.Math.Angle.Between(
        player.x,
        player.y,
        cursor.x + this.cameras.main.scrollX,
        cursor.y + this.cameras.main.scrollY
      );
    },
    this
  );

  // 플레이어, 요정 로딩
  global.wizard = fairySet[0] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    60,
    20,
    500,
    1,
    player,
    0.5,
    1
  );
  fairySet[0].initFairy1(0, 0);
  global.reaper = fairySet[1] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    100,
    20,
    160,
    2,
    player,
    0.4,
    2
  );
  global.ninja = fairySet[2] = new Fairy(
    this,
    100,
    6,
    1,
    3,
    60,
    10,
    300,
    3,
    player,
    0.5,
    1
  );
  fairySet[2].initFairy3(0, 0);
  global.slime = fairySet[3] = new Fairy(
    this,
    7200,
    10,
    1,
    99999,
    60,
    10,
    400,
    4,
    player,
    0.5,
    1
  );

  global.witch = fairySet[4] = new Fairy(
    this,
    600,
    5,
    1,
    3,
    40,
    10,
    500,
    5,
    player,
    0.5,
    1
  );
  global.bombs = this.physics.add.group();
  fairySet[4].initFairy5(1, 1);
  for (let i = 0; i < 5; i++) {
    fairySet[i].setDepth(2);
  }
  console.log(witch);
  player.changeFairy(fairySet[0]);
  normalAttackAS = fairySet[0].as;
  // animation
  this.anims.create({
    key: "fairy1_idle",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_attack",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy1_1_idle",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_1_attack",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy1_2_idle",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_2_attack",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_idle",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_attack",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_1_idle",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_1_attack",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_2_idle",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_2_attack",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_idle",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_attack",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_1_idle",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_1_attack",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_2_idle",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_2_attack",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_idle",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_attack",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_1_idle",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_1_attack",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_2_idle",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_2_attack",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_idle",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_attack",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_1_idle",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_1_attack",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_2_idle",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_2_attack",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  // 공격 애니메이션
  this.anims.create({
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_1",
    frames: this.anims.generateFrameNumbers("magic2_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });

  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_1",
    frames: this.anims.generateFrameNumbers("magic5_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  fairySet[nowFairy].play(fairySet[nowFairy].idleKey, true);

  //player end

  // 홀 애니메이션

  this.anims.create({
    key: "new_hole",
    frames: this.anims.generateFrameNumbers("new_hole", { start: 0, end: 2 }),
    frameRate: 6,
    repeat: -1,
  });

  this.anims.create({
    key: "hole_damage",
    frames: this.anims.generateFrameNumbers("new_hole", { start: 3, end: 7 }),
    frameRate: 12,
    repeat: 0,
  });

  //cointext start
  // cointext = this.add.text(500, 20, 'coin: 0', {font: 'Bold 15px Arial', fill: '#fff', fontStyle: "strong"}).setScrollFactor(0);
  // cointext.setStroke('#000', 2);
  // cointext.setDepth(2);
  //cointext end

  //enemy start

  monsterSet = this.physics.add.group();
  magics = this.physics.add.group();
  towerAttacks = this.physics.add.group();
  towerSkillAttacks = this.physics.add.group();
  mines = this.physics.add.group();

  // 임시 구멍
  hole = this.physics.add.sprite(0, 0, "new_hole").play("new_hole");
  hole.setScale(2.3);
  hw = hole.body.halfWidth;
  hh = hole.body.halfHeight;
  hole.setCircle(hw * 0.7, hh - hw * 0.7, hh - hw * 0.7);
  hole.hp = 500;
  hole.setDepth(1);
  ingameUi();

  // 그룹셋
  monsterSet = this.physics.add.group();
  bossSet = this.physics.add.group();
  bossMagicSet = this.physics.add.group();
  magics = this.physics.add.group();

  this.physics.add.collider(player, bossSet, player.hitPlayer);
  this.physics.add.collider(bossSet, monsterSet);
  thisScene.physics.add.overlap(magics, bossSet, attack);
  thisScene.physics.add.overlap(bossMagicSet, player, player.hitPlayer);

  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
  this.physics.add.collider(player, monsterSet, player.hitPlayer);
  thisScene.physics.add.overlap(magics, monsterSet, attack);
  // 만약 몬스터와 구멍이 닿았다면 (hitHole 함수 실행)
  thisScene.physics.add.overlap(hole, monsterSet, hitHole);
  thisScene.physics.add.overlap(hole, bossSet, destroyHole);
  //map start
  let snappedChunkX =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
  let snappedChunkY =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

  snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
  snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

  for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
    for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
      let existingChunk = getChunk(x, y);

      if (existingChunk == null) {
        let newChunk = new Chunk(this, x, y);
        chunks.push(newChunk);
      }
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
    }
  }
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

<<<<<<< HEAD
    this.anims.create({
        key: "fairy2_idle",
        frames: this.anims.generateFrameNumbers("fairy2", {start: 10, end: 19}),
        frameRate: 8,
        repeat: -1,
    });
=======
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

  this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);

  // 공격 맞은 후 일시 무적에 사용
  timer = this.time.addEvent({
    delay: 2000,
    callback: () => {
      player.invincible = false;
      player.body.checkCollision.none = false;
      player.setVisible(true);
    },
    loop: true,
  });

  // ============== 몬스터 스프라이트 애니메이션 목록 ==================
  this.anims.create({
    key: "alien",
    frames: this.anims.generateFrameNumbers("alien", { start: 9, end: 14 }),
    frameRate: 3,
    repeat: -1, // -1은 무한 반복 의미
  });

  this.anims.create({
    key: "worm",
    frames: this.anims.generateFrameNumbers("worm", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "alienPlus",
    frames: this.anims.generateFrameNumbers("alienPlus", { start: 9, end: 14 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "wormPlus",
    frames: this.anims.generateFrameNumbers("wormPlus", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "sonic",
    frames: this.anims.generateFrameNumbers("sonic", { start: 0, end: 1 }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "turtle",
    frames: this.anims.generateFrameNumbers("turtle", { start: 0, end: 1 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "slime",
    frames: this.anims.generateFrameNumbers("slime", { start: 7, end: 14 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "fly",
    frames: this.anims.generateFrameNumbers("fly", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

<<<<<<< HEAD
  this.anims.create({
    key: "flyPlus",
    frames: this.anims.generateFrameNumbers("flyPlus", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });
// boss
=======
  // boss
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)

  this.anims.create({
    key: "slimeKing",
    frames: this.anims.generateFrameNumbers("slimeKing", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "golem",
    frames: this.anims.generateFrameNumbers("golem", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "fireGiant",
    frames: this.anims.generateFrameNumbers("fireGiant", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "monster_die",
    frames: this.anims.generateFrameNumbers("monster_die", {
      start: 0,
      end: 5,
    }),
    frameRate: 12,
    repeat: -1,
  });

  this.anims.create({
    key: "fireGiantAura",
<<<<<<< HEAD
    frames: this.anims.generateFrameNumbers("fireGiantAura", { start: 0, end: 5 }),
=======
    frames: this.anims.generateFrameNumbers("fireGiantAura", {
      start: 0,
      end: 7,
    }),
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)
    frameRate: 12,
    repeat: -1,
  });
  //enemy end
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)

  //tower start

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.anims.create({
        key: "fairy3_idle",
        frames: this.anims.generateFrameNumbers("fairy3", {start: 11, end: 19}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy3_attack",
        frames: this.anims.generateFrameNumbers("fairy3", {start: 0, end: 9}),
        frameRate: 14,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy4_idle",
        frames: this.anims.generateFrameNumbers("fairy4", {start: 7, end: 14}),
        frameRate: 8,
        repeat: -1,
    });
=======
  towerLU = new CatTower(this, -100, -100, "cat", "can", "skill");
  towerRU = new CatTower(this, 100, -100, "cat", "can", "skill");
  towerLD = new CatTower(this, -100, 100, "cat", "can", "skill");
  towerRD = new CatTower(this, 100, 100, "cat", "can", "skill");
=======
//cattower animation start
this.anims.create({
  key: "0_idle",
  frames: this.anims.generateFrameNumbers("catNone", {
    start: 0,
    end: 2,
  }),
  frameRate: 4,
  repeat: -1,
});

this.anims.create({
  key: "0_attack",
  frames: this.anims.generateFrameNumbers("catNone", {
    start: 3,
    end: 8,
  }),
  frameRate: 8,
  repeat: 0,
});

this.anims.create({
  key: "1_idle",
  frames: this.anims.generateFrameNumbers("catThunder", {
    start: 0,
    end: 2,
  }),
  frameRate: 4,
  repeat: -1,
});

this.anims.create({
  key: "1_attack",
  frames: this.anims.generateFrameNumbers("catThunder", {
    start: 3,
    end: 8,
  }),
  frameRate: 8,
  repeat: 0,
});

this.anims.create({
  key: "2_idle",
  frames: this.anims.generateFrameNumbers("catFire", {
    start: 0,
    end: 2,
  }),
  frameRate: 4,
  repeat: -1,
});

this.anims.create({
  key: "2_attack",
  frames: this.anims.generateFrameNumbers("catFire", {
    start: 3,
    end: 8,
  }),
  frameRate: 8,
  repeat: 0,
});

this.anims.create({
  key: "3_idle",
  frames: this.anims.generateFrameNumbers("catWater", {
    start: 0,
    end: 2,
  }),
  frameRate: 4,
  repeat: -1,
});

this.anims.create({
  key: "3_attack",
  frames: this.anims.generateFrameNumbers("catWater", {
    start: 3,
    end: 8,
  }),
  frameRate: 8,
  repeat: 0,
});

this.anims.create({
  key: "4_idle",
  frames: this.anims.generateFrameNumbers("catEarth", {
    start: 0,
    end: 2,
  }),
  frameRate: 4,
  repeat: -1,
});

this.anims.create({
  key: "4_attack",
  frames: this.anims.generateFrameNumbers("catEarth", {
    start: 3,
    end: 8,
  }),
  frameRate: 8,
  repeat: 0,
});
//cattower animation end
=======
  //cattower animation start
  this.anims.create({
    key: "0_idle",
    frames: this.anims.generateFrameNumbers("catNone", {
      start: 0,
      end: 2,
    }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "0_attack",
    frames: this.anims.generateFrameNumbers("catNone", {
      start: 3,
      end: 8,
    }),
    frameRate: 16,
    repeat: 0,
  });

  this.anims.create({
    key: "1_idle",
    frames: this.anims.generateFrameNumbers("catThunder", {
      start: 0,
      end: 2,
    }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "1_attack",
    frames: this.anims.generateFrameNumbers("catThunder", {
      start: 3,
      end: 8,
    }),
    frameRate: 16,
    repeat: 0,
  });

  this.anims.create({
    key: "2_idle",
    frames: this.anims.generateFrameNumbers("catFire", {
      start: 0,
      end: 2,
    }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "2_attack",
    frames: this.anims.generateFrameNumbers("catFire", {
      start: 3,
      end: 8,
    }),
    frameRate: 16,
    repeat: 0,
  });

  this.anims.create({
    key: "3_idle",
    frames: this.anims.generateFrameNumbers("catWater", {
      start: 0,
      end: 2,
    }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "3_attack",
    frames: this.anims.generateFrameNumbers("catWater", {
      start: 3,
      end: 8,
    }),
    frameRate: 16,
    repeat: 0,
  });

  this.anims.create({
    key: "4_idle",
    frames: this.anims.generateFrameNumbers("catEarth", {
      start: 0,
      end: 2,
    }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "4_attack",
    frames: this.anims.generateFrameNumbers("catEarth", {
      start: 3,
      end: 8,
    }),
    frameRate: 16,
    repeat: 0,
  });
  //cattower animation end
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  towerLU = new CatTower(this, -100, -100, "none_idle", "can", "skill");
  towerRU = new CatTower(this, 100, -100, "none_idle", "can", "skill");
  towerLD = new CatTower(this, -100, 100, "none_idle", "can", "skill");
  towerRD = new CatTower(this, 100, 100, "none_idle", "can", "skill");
>>>>>>> 2ed0a21 (:bug: cattower 이미지 수정중)
=======
  towerLU = new CatTower(this, -100, -100, "0_idle", "can", "skill", 0);
  towerRU = new CatTower(this, 100, -100, "0_idle", "can", "skill", 0);
  towerLD = new CatTower(this, -100, 100, "0_idle", "can", "skill", 0);
  towerRD = new CatTower(this, 100, 100, "0_idle", "can", "skill", 0);
>>>>>>> a3c8e71 (#6 :sparkles: tower animation 설정)
=======
  towerLU = new CatTower(this, -130, -130, "0_idle", "can", "skill", 0);
  towerRU = new CatTower(this, 130, -130, "0_idle", "can", "skill", 0);
  towerLD = new CatTower(this, -130, 130, "0_idle", "can", "skill", 0);
  towerRD = new CatTower(this, 130, 130, "0_idle", "can", "skill", 0);
>>>>>>> cefbaad (#2 :recycle: 캣타워 디자인 수정)
=======
  towerLU = new CatTower(this, -140, -140, "0_idle", "can", "skill", 0);
  towerRU = new CatTower(this, 140, -140, "0_idle", "can", "skill", 0);
  towerLD = new CatTower(this, -140, 140, "0_idle", "can", "skill", 0);
  towerRD = new CatTower(this, 140, 140, "0_idle", "can", "skill", 0);
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
  towerLU.scale_Circle();
  towerRU.scale_Circle();
  towerLD.scale_Circle();
  towerRD.scale_Circle();

  towerLU.scale = 2;
  towerRU.scale = 2;
  towerLD.scale = 2;
  towerRD.scale = 2;

  towerLU.setDepth(1);
  towerRU.setDepth(1);
  towerLD.setDepth(1);
  towerRD.setDepth(1);

  //tower end

  //mine start
  for (let i = 0; i < mineCount[mineshowtime]; i++) {
    let x =
      Math.random() *
        (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
      StartMineRangeX[mineshowtime];
    let y =
      Math.random() *
        (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
      StartMineRangeY[mineshowtime];
    mine = new Mine(this, x, y, "mine", 0);
    mine.scale_Circle();
    mines.add(mine);
  }
  //mine end

  // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##

  //navi start
  navi = this.add.image(58, 80, "navi").setScrollFactor(0).setScale(1);
  navi.setDepth(4);
  //navi end

  //exp bar start
  expBar = this.add.graphics().setScrollFactor(0);
  expBarBG = this.add.graphics().setScrollFactor(0);
  expBar.setDepth(4);
  expBarBG.setDepth(3);

  this.cameras.main.ignore([expBar, expBarBG, navi]);

  //exp bar end
  // hp bar start
  hpBar = this.add.graphics();
  hpBarBG = this.add.graphics();
  hpBar.setDepth(5);
  hpBarBG.setDepth(4);
  // hp bar end

  this.cameras.main.setZoom(0.8);
  UICam.setZoom(1);
}

function update(time, delta) {
  frameTime += delta;
  player.move();
  //  Health bar start
  hpBar.clear();

  hpBarBG.fillStyle(0xff0000);
  hpBarBG.fillRect(0, 0, 60, 10);
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)

  hpBar.fillStyle(0x2ff40a);
  hpBar.fillRect(0, 0, 60 * (player.health / player.maxHealth), 10);

<<<<<<< HEAD
    this.anims.create({
        key: "fairy5_idle",
        frames: this.anims.generateFrameNumbers("fairy5", {start: 15, end: 24}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy5_attack",
        frames: this.anims.generateFrameNumbers("fairy5", {start: 0, end: 13}),
        frameRate: 17,
        repeat: 0,
    });

    // 공격 애니메이션
    this.anims.create({
        key: "magic1",
        frames: this.anims.generateFrameNumbers("magic1", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic2",
        frames: this.anims.generateFrameNumbers("magic2", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });

    this.anims.create({
        key: "magic2_1",
        frames: this.anims.generateFrameNumbers("magic2_1", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });

    this.anims.create({
        key: "magic3",
        frames: this.anims.generateFrameNumbers("magic3", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic4",
        frames: this.anims.generateFrameNumbers("magic4", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic5",
        frames: this.anims.generateFrameNumbers("magic5", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic5_1",
        frames: this.anims.generateFrameNumbers("magic5_1", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    fairySet[nowFairy].play("fairy" + (nowFairy + 1) + "_idle", true);

    //player end

    //cointext start
    // cointext = this.add.text(500, 20, 'coin: 0', {font: 'Bold 15px Arial', fill: '#fff', fontStyle: "strong"}).setScrollFactor(0);
    // cointext.setStroke('#000', 2);
    // cointext.setDepth(2);
    //cointext end

    //enemy start

    monsterSet = this.physics.add.group();
    magics = this.physics.add.group()
    towerAttacks = this.physics.add.group();
    towerSkillAttacks = this.physics.add.group();
    mines = this.physics.add.group();

    // 임시 구멍
    hole = this.physics.add.sprite(0, 0, "fairy4");
    hole.hp = 100;
    hole.setDepth(1);

    // 그룹셋
    monsterSet = this.physics.add.group();
    bossSet = this.physics.add.group();
    bossMagicSet = this.physics.add.group();
    magics = this.physics.add.group();

    this.physics.add.collider(player, bossSet, player.hitPlayer);
    this.physics.add.collider(bossSet, monsterSet);
    thisScene.physics.add.overlap(magics, bossSet, attack);
    thisScene.physics.add.overlap(bossMagicSet, player, player.hitPlayer);

    // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
    this.physics.add.collider(player, monsterSet, player.hitPlayer);
    thisScene.physics.add.overlap(magics, monsterSet, attack);
    // 만약 몬스터와 구멍이 닿았다면 (hithole 함수 실행)
    thisScene.physics.add.overlap(hole, monsterSet, hithole);
    thisScene.physics.add.overlap(hole, bossSet, destroyhole);
    //map start
    var snappedChunkX =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
    var snappedChunkY =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));
=======
  hpBar.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
  hpBarBG.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
  // expBar.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
  // expBarBG.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
  // Health bar end
  if (frameTime > 16.5) {
    frameTime = 0;

    let snappedChunkX =
      this.chunkSize *
      this.tileSize *
      Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
    let snappedChunkY =
      this.chunkSize *
      this.tileSize *
      Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)

    snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
    snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

<<<<<<< HEAD
    for (var x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
        for (var y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
            var existingChunk = getChunk(x, y);

            if (existingChunk == null) {
                var newChunk = new Chunk(this, x, y);
                chunks.push(newChunk);
            }
        }
=======
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
    }
  );
  this.load.spritesheet(
    "skill4",
    "images/attack/weapon/10_weaponhit_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
    }
  );
  // 요정 스프라이트
  this.load.spritesheet("fairy1", "images/fairy/fairy1.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy2", "images/fairy/fairy2.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy3", "images/fairy/fairy3.png", {
    frameWidth: 134,
    frameHeight: 158,
  });

  this.load.spritesheet("fairy4", "images/fairy/fairy4.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy5", "images/fairy/fairy5.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  //player end

  //enemy start

  // 몬스터
  this.load.spritesheet(
    "alien",
    "http://labs.phaser.io/assets/tests/invaders/invader1.png",
    { frameWidth: 32, frameHeight: 32 }
  );

  // 보스

  //enemy end
}

    for (var i = 0; i < chunks.length; i++) {
        var chunk = chunks[i];
=======
    for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
      for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
        let existingChunk = getChunk(x, y);

        if (existingChunk == null) {
          let newChunk = new Chunk(this, x, y);
          chunks.push(newChunk);
        }
      }
    }
    for (let i = 0; i < chunks.length; i++) {
      let chunk = chunks[i];

      if (
        Phaser.Math.Distance.Between(
          snappedChunkX,
          snappedChunkY,
          chunk.x,
          chunk.y
        ) < 3
      ) {
        if (chunk !== null) {
          chunk.load();
        }
      } else {
        if (chunk !== null) {
          chunk.unload();
        }
      }
    }

    this.followPoint.x = player.x;
    this.followPoint.y = player.y;
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)

    this.cameras.main.startFollow(player, false);
    UICam.startFollow(player, false);
=======
=======
>>>>>>> 6734bfb (#3 :cat: 규냥)
=======
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
    //map start
    this.load.image("sprWater", "images/map/sprWater.png");
    this.load.image("sprSand", "images/map/sprSand.png");
    this.load.image("sprGrass", "images/map/sprGrass.png");
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
    //map end
=======
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)

  //tower start

  this.load.spritesheet("catNone", "images/cattower/towerNone.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catThunder", "images/cattower/towerThunder.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catFire", "images/cattower/towerFire.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catWater", "images/cattower/towerWater.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catEarth", "images/cattower/towerEarth.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.image("can", "images/cattower/can.png");
  this.load.image("skill", "images/cattower/skill.png");
  //tower end

  //hole start
  this.load.spritesheet("new_hole", "images/hole/new_hole.png", {
    frameWidth: 100,
    frameHeight: 100,
  });
  //hole end

  //navi start
  this.load.image("navi", "images/navi/arrow.png");
  //navi end

  //mine start
  this.load.image("minearrow", "images/mine/boxarrow.png");
  this.load.image("mine", "images/mine/mine.png");
  //mine end

<<<<<<< HEAD
    //player start
<<<<<<< HEAD
    changeSlot();
    normalAttackAS = fairySet[nowFairy].as;
    if (normalAttackTimer > normalAttackAS) {
      control = false;
    } else {
      normalAttackTimer++;
    }
    //mouse clicked
    if (
      mouse.leftButtonDown() &&
      !control &&
      fairySet[nowFairy].bombCount > 0
    ) {
      magic = new Magic(this, fairySet[nowFairy]);
      magic.setDepth(2);
      this.physics.add.overlap(
        magic,
        monsterSet,
        fairySet[nowFairy].attack,
        null,
        this
      );
      fairySet[nowFairy].normalAttack(magic);
    }
  }
  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];

<<<<<<< HEAD
<<<<<<< HEAD
    this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);
    //map enderlap(magics, monsterSet, attack);
    this.anims.create({
        key: "swarm",
        frames: this.anims.generateFrameNumbers("alien", {start: 0, end: 1}),
        frameRate: 2,
        repeat: -1,
    });

    // 공격 맞은 후 일시 무적에 사용
    timer = this.time.addEvent({
        delay: 2000,
        callback: () => {
            player.invincible = false;
        },
        loop: true,
    });

    // ============== 몬스터 스프라이트 애니메이션 목록 ==================
    this.anims.create({
        key: "swarm",
        frames: this.anims.generateFrameNumbers("alien", {start: 0, end: 1}),
        frameRate: 2,
        repeat: -1,
    });
=======
    for (let i = 0; i < 5; i++) {
      if (fairySet[i].timer < fairySet[i].skillCD) {
        fairySet[i].timer++;
      } else {
        fairySet[i].skillUse = false;
      }
    }

    if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
      fairySet[nowFairy].skillFire();
    }

    player.healCount++;
    if (player.healCount > player.maxHealCount) {
      player.healCount = 0;
      player.health += player.heal;
      if (player.health > player.maxHealth) {
        player.health = player.maxHealth;
      }
    }

    if (player.invincible) {
      hitTimer++;
      if (hitTimer >= 15) {
        hitTimer = 0;

        if (hitVisible) {
          hitVisible = false;
        } else {
          hitVisible = true;
=======
    // 플레이어 스프라이트
    this.load.spritesheet("cat1", "images/cat/cat1.png", {
        frameWidth: 96,
        frameHeight: 100,
    });
    this.load.spritesheet("cat2", "images/cat/cat2.png", {
        frameWidth: 116,
        frameHeight: 112,
    });
    this.load.spritesheet("cat3", "images/cat/cat3.png", {
        frameWidth: 116,
        frameHeight: 112,
    });
    this.load.spritesheet("cat4", "images/cat/cat4.png", {
        frameWidth: 96,
        frameHeight: 100,
    });
    this.load.spritesheet("cat5", "images/cat/cat5.png", {
        frameWidth: 96,
        frameHeight: 100,
    });
    this.load.spritesheet("cat6", "images/cat/cat6.png", {
        frameWidth: 116,
        frameHeight: 112,
    });
    this.load.spritesheet("cat7", "images/cat/cat7.png", {
        frameWidth: 96,
        frameHeight: 100,
    });

    // 공격 스프라이트
    this.load.spritesheet(
        "magic1",
        "images/attack/weapon/magic1.png",
        {
<<<<<<< HEAD
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
            frameWidth: 138,
            frameHeight: 138,
            endFrame: 4,
        }
    );

    this.load.spritesheet(
        "magic1_1",
        "images/attack/weapon/magic1_1.png",
        {
            frameWidth: 362,
            frameHeight: 362,
            endFrame: 7,
        }
    );
    this.load.spritesheet(
        "magic1_1_1",
        "images/attack/weapon/magic1_1_1.png",
        {
            frameWidth: 74,
            frameHeight: 74,
            endFrame: 24,
        }
    );
    this.load.spritesheet(
        "magic1_2",
        "images/attack/weapon/magic1_2.png",
        {
            frameWidth: 138,
            frameHeight: 138,
            endFrame: 4,
>>>>>>> 65a0d49 (#3 :sparkles: vfx update)
        }
    );
    this.load.spritesheet(
        "magic1_2_1",
        "images/attack/weapon/magic1_2_1.png",
        {
            frameWidth: 74,
            frameHeight: 74,
            endFrame: 24,
        }
    );
    this.load.spritesheet(
        "magic2",
        "images/attack/weapon/magic2.png",
        {
            frameWidth: 192,
            frameHeight: 108,
        }
    );
    this.load.spritesheet(
        "magic2_1",
        "images/attack/weapon/magic2_1.png",
        {
            frameWidth: 192,
            frameHeight: 108,
        }
    );
    this.load.spritesheet(
        "magic2_2",
        "images/attack/weapon/magic2_2.png",
        {
            frameWidth: 192,
            frameHeight: 108,
        }
    );
    this.load.spritesheet(
        "magic2_1_1",
        "images/attack/weapon/magic2_1_1.png",
        {
            frameWidth: 74,
            frameHeight: 74,
        }
    );
    this.load.spritesheet(
        "magic2_2_1",
        "images/attack/weapon/magic2_2_1.png",
        {
            frameWidth: 192,
            frameHeight: 108,
        }
    );
=======
  //player start
  // 플레이어 스프라이트
  this.load.spritesheet("cat1", "images/cat/cat1.png", {
    frameWidth: 96,
    frameHeight: 100,
  });
  this.load.spritesheet("cat2", "images/cat/cat2.png", {
    frameWidth: 116,
    frameHeight: 112,
  });
  this.load.spritesheet("cat3", "images/cat/cat3.png", {
    frameWidth: 116,
    frameHeight: 112,
  });
  this.load.spritesheet("cat4", "images/cat/cat4.png", {
    frameWidth: 96,
    frameHeight: 100,
  });
  this.load.spritesheet("cat5", "images/cat/cat5.png", {
    frameWidth: 96,
    frameHeight: 100,
  });
  this.load.spritesheet("cat6", "images/cat/cat6.png", {
    frameWidth: 116,
    frameHeight: 112,
  });
  this.load.spritesheet("cat7", "images/cat/cat7.png", {
    frameWidth: 96,
    frameHeight: 100,
  });

  // 공격 스프라이트
  this.load.spritesheet("magic1", "images/attack/weapon/magic1.png", {
    frameWidth: 138,
    frameHeight: 138,
    endFrame: 4,
  });

  this.load.spritesheet("magic1_1", "images/attack/weapon/magic1_1.png", {
    frameWidth: 362,
    frameHeight: 362,
    endFrame: 7,
  });
  this.load.spritesheet("magic1_1_1", "images/attack/weapon/magic1_1_1.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 24,
  });
  this.load.spritesheet("magic1_2", "images/attack/weapon/magic1_2.png", {
    frameWidth: 138,
    frameHeight: 138,
    endFrame: 4,
  });
  this.load.spritesheet("magic1_2_1", "images/attack/weapon/magic1_2_1.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 24,
  });
  this.load.spritesheet("magic2", "images/attack/weapon/magic2.png", {
    frameWidth: 192,
    frameHeight: 108,
  });
  this.load.spritesheet("magic2_1", "images/attack/weapon/magic2_1.png", {
    frameWidth: 192,
    frameHeight: 108,
  });
  this.load.spritesheet("magic2_2", "images/attack/weapon/magic2_2.png", {
    frameWidth: 192,
    frameHeight: 108,
  });
  this.load.spritesheet("magic2_1_1", "images/attack/weapon/magic2_1_1.png", {
    frameWidth: 74,
    frameHeight: 74,
  });
  this.load.spritesheet("magic2_2_1", "images/attack/weapon/magic2_2_1.png", {
    frameWidth: 192,
    frameHeight: 108,
  });
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)

  this.load.spritesheet("magic3", "images/attack/weapon/magic3.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 7,
  });
  this.load.spritesheet("magic3_1", "images/attack/weapon/magic3_1.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 7,
  });
  this.load.spritesheet("magic3_2", "images/attack/weapon/magic3_2.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 7,
  });
  this.load.spritesheet(
    "magic4",
    "images/attack/weapon/slime_attack1_48x48.png",
    {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 2,
    }
  );

<<<<<<< HEAD
    this.load.spritesheet(
        "fly",
        "images/monster/fly.png",
        {
            frameWidth: 48,
            frameHeight: 48
        })

    this.load.spritesheet(
        "alienPlus",
        "images/monster/alienPlus.png",
        {
            frameWidth: 20,
            frameHeight: 20
        })
=======
  this.load.spritesheet(
    "magic4_1",
    "images/attack/weapon/slime_attack2_48x48.png",
    {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 2,
    }
  );

  this.load.spritesheet(
    "magic4_2",
    "images/attack/weapon/slime_attack3_48x48.png",
    {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 2,
    }
  );

  this.load.spritesheet(
    "magic5",
    "images/attack/weapon/8_protectioncircle_spritesheet.png",
    { frameWidth: 100, frameHeight: 100, endFrame: 61 }
  );

  this.load.spritesheet("magic5_1", "images/attack/weapon/magic5_1.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 8,
  });
  this.load.spritesheet("magic5_2", "images/attack/weapon/magic5_2.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 8,
  });
  this.load.spritesheet("magic5_3", "images/attack/weapon/magic5_3.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 8,
  });
  // 스킬 스프라이트

  this.load.spritesheet(
    "skill4",
    "images/attack/weapon/10_weaponhit_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
    }
  );
  // 요정 스프라이트
  this.load.spritesheet("fairy1", "images/fairy/fairy1.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy1_1", "images/fairy/fairy1_yellow.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy1_2", "images/fairy/fairy1_red.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy2", "images/fairy/fairy2.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy2_1", "images/fairy/fairy2_Red.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy2_2", "images/fairy/fairy2_black.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy3", "images/fairy/fairy3.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

  this.load.spritesheet("fairy3_1", "images/fairy/fairy3_Red.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

  this.load.spritesheet("fairy3_2", "images/fairy/fairy3_master.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

  this.load.spritesheet("fairy4", "images/fairy/fairy4.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy4_1", "images/fairy/fairy4_blue.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy4_2", "images/fairy/fairy4_green.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy5", "images/fairy/fairy5.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  this.load.spritesheet("fairy5_1", "images/fairy/fairy5_red.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  this.load.spritesheet("fairy5_2", "images/fairy/fairy5_black.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  //player end

  //enemy start

  // 몬스터

  this.load.spritesheet("monster_die", "images/monster/monster_die2.png", {
    frameWidth: 64,
    frameHeight: 64,
  });

  this.load.spritesheet("alien", "images/monster/alien.png", {
    frameWidth: 20,
<<<<<<< HEAD
    frameHeight: 20
})
>>>>>>> 4e05805 (#2 :sparkles: 몬스터 디자인 수정 및 레벨 디자인 수정)
=======
    frameHeight: 20,
  });
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)

  this.load.spritesheet("worm", "images/monster/worm.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  this.load.spritesheet("sonic", "images/monster/sonic.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("turtle", "images/monster/turtle.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("slime", "images/monster/slime.png", {
    frameWidth: 16,
    frameHeight: 16,
  });

  this.load.spritesheet("fly", "images/monster/fly.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("alienPlus", "images/monster/alienPlus.png", {
    frameWidth: 20,
    frameHeight: 20,
  });

  this.load.spritesheet("wormPlus", "images/monster/wormPlus.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  //   보스
  this.load.spritesheet("slimeKing", "images/boss/slimeKing.png", {
    frameWidth: 96,
    frameHeight: 96,
  });

  this.load.spritesheet("golem", "images/boss/golem.png", {
    frameWidth: 96,
    frameHeight: 96,
  });

  this.load.spritesheet("fireGiant", "images/boss/fireGiant.png", {
    frameWidth: 96,
    frameHeight: 96,
  });

  this.load.spritesheet("fireGiantAura", "images/boss/fireGiantAura.png", {
    frameWidth: 64,
    frameHeight: 64,
  });
  //enemy end
}

function create() {
  this.input.setDefaultCursor("url(/images/cursor/aimNone.png), pointer");
  if (ChoiceCat === 4) {
    setSound.setBGM(5);
  } else {
    setSound.setBGM(1);
  }

  thisScene = this;
  //map start
  this.chunkSize = 8;
  this.tileSize = 300;
  this.cameraSpeed = 1;
  UICam = this.cameras.add(
    player.x,
    player.y,
    this.cameras.main.worldView.width,
    this.cameras.main.worldView.height
  );
  this.followPoint = new Phaser.Math.Vector2(
    this.cameras.main.worldView.x + this.cameras.main.worldView.width * 0.5,
    this.cameras.main.worldView.y + this.cameras.main.worldView.height * 0.5
  );
  // this.cameras.main.setBounds(0, 0, mapSize, mapSize);
  // this.physics.world.setBounds(0, 0, mapSize, mapSize);

  cursors = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D,
    slot1: Phaser.Input.Keyboard.KeyCodes.ONE,
    slot2: Phaser.Input.Keyboard.KeyCodes.TWO,
    slot3: Phaser.Input.Keyboard.KeyCodes.THREE,
    slot4: Phaser.Input.Keyboard.KeyCodes.FOUR,
    slot5: Phaser.Input.Keyboard.KeyCodes.FIVE,
    skill: Phaser.Input.Keyboard.KeyCodes.SPACE,
  });
  // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true);
  global.$this = this.scene;
  this.input.keyboard.on("keydown-" + "SHIFT", function (event) {
    initUpgrade();
  });
  //map end

  //player start
  cats = require("./jsons/cats.json");
  fairySet = require("./jsons/fairys.json");

<<<<<<< HEAD
    player = cats[catNumber];
    player = new Player(this, 1, 20, 20, "cat" + (ChoiceCat + 1));
    player.setScale(0.7);
    player.setDepth(2);
    let hw = player.body.halfWidth;
    let hh = player.body.halfHeight;
=======
  player = cats[catNumber];
  player = new Player(this, 1, 20, 20, "cat" + (ChoiceCat + 1));
  player.ability = ChoiceCat + 1;
  player.setScale(0.7);
  player.setDepth(2);
  let hw = player.body.halfWidth;
  let hh = player.body.halfHeight;
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)

  player.setCircle(hw * 0.6, hh - hw * 0.6, hh - hw * 0.6);
  camera = this.cameras.main;
  input = this.input;
  mouse = input.mousePointer;
  this.input.on(
    "pointermove",
    function (pointer) {
      let cursor = pointer;
      let angle = Phaser.Math.Angle.Between(
        player.x,
        player.y,
        cursor.x + this.cameras.main.scrollX,
        cursor.y + this.cameras.main.scrollY
      );
    },
    this
  );

  // 플레이어, 요정 로딩
  global.wizard = fairySet[0] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    60,
    20,
    500,
    1,
    player,
    0.5,
    1
  );
  fairySet[0].initFairy1(0, 0);
  global.reaper = fairySet[1] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    80,
    20,
    160,
    2,
    player,
    0.5,
    1
  );
  global.ninja = fairySet[2] = new Fairy(
    this,
    100,
    6,
    1,
    3,
    60,
    10,
    300,
    3,
    player,
    0.5,
    1
  );
  fairySet[2].initFairy3(0, 0);
  global.slime = fairySet[3] = new Fairy(
    this,
    7200,
    10,
    1,
    10,
    60,
    10,
    400,
    4,
    player,
    0.5,
    2
  );

  global.witch = fairySet[4] = new Fairy(
    this,
    600,
    5,
    1,
    3,
    40,
    10,
    500,
    5,
    player,
    0.5,
    1
  );
  global.bombs = this.physics.add.group();
  fairySet[4].initFairy5(0.5, 1);
  for (let i = 0; i < 5; i++) {
    fairySet[i].setDepth(2);
  }
  player.changeFairy(fairySet[0]);
  normalAttackAS = fairySet[0].as;
  // animation
  this.anims.create({
    key: "fairy1_idle",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_attack",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy1_1_idle",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_1_attack",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy1_2_idle",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_2_attack",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_idle",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_attack",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_1_idle",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_1_attack",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_2_idle",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_2_attack",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_idle",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_attack",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_1_idle",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_1_attack",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_2_idle",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_2_attack",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_idle",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_attack",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_1_idle",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_1_attack",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_2_idle",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_2_attack",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_idle",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_attack",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_1_idle",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_1_attack",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_2_idle",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_2_attack",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  // 공격 애니메이션
  this.anims.create({
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", {
      start: 0,
      end: 3,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic1_1",
    frames: this.anims.generateFrameNumbers("magic1_1", {
      start: 0,
      end: 6,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });

  this.anims.create({
    key: "magic1_1_1",
    frames: this.anims.generateFrameNumbers("magic1_1_1", {
      start: 0,
      end: 24,
      first: 0,
    }),
    frameRate: 70,
    repeat: -1,
  });

  this.anims.create({
    key: "magic1_2_1",
    frames: this.anims.generateFrameNumbers("magic1_2_1", {
      start: 0,
      end: 24,
      first: 0,
    }),
    frameRate: 70,
    repeat: -1,
  });
  this.anims.create({
    key: "magic1_2",
    frames: this.anims.generateFrameNumbers("magic1_2", {
      start: 0,
      end: 3,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", {
      start: 0,
      end: 15,
    }),
    frameRate: 16,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_1",
    frames: this.anims.generateFrameNumbers("magic2_1", {
      start: 0,
      end: 15,
    }),
    frameRate: 16,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_1_1",
    frames: this.anims.generateFrameNumbers("magic2_1_1", {
      start: 0,
      end: 15,
    }),
    frameRate: 16,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_2",
    frames: this.anims.generateFrameNumbers("magic2_2", {
      start: 0,
      end: 15,
    }),
    frameRate: 16,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_2_1",
    frames: this.anims.generateFrameNumbers("magic2_2_1", {
      start: 3,
      end: 3,
      first: 0,
    }),
    frameRate: 1,
    repeat: -1,
  });

  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });

  this.anims.create({
    key: "magic3_1",
    frames: this.anims.generateFrameNumbers("magic3_1", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic3_2",
    frames: this.anims.generateFrameNumbers("magic3_2", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", {
      start: 0,
      end: 2,
      first: 0,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4_1",
    frames: this.anims.generateFrameNumbers("magic4_1", {
      start: 0,
      end: 2,
      first: 0,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4_2",
    frames: this.anims.generateFrameNumbers("magic4_2", {
      start: 0,
      end: 2,
      first: 0,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });

  this.anims.create({
    key: "magic5_1",
    frames: this.anims.generateFrameNumbers("magic5_1", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 50,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_2",
    frames: this.anims.generateFrameNumbers("magic5_2", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 50,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_3",
    frames: this.anims.generateFrameNumbers("magic5_3", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 50,
    repeat: -1,
  });
  fairySet[nowFairy].play(fairySet[nowFairy].idleKey, true);

  //player end

  // 홀 애니메이션

  this.anims.create({
    key: "new_hole",
    frames: this.anims.generateFrameNumbers("new_hole", { start: 0, end: 2 }),
    frameRate: 6,
    repeat: -1,
  });

  this.anims.create({
    key: "hole_damage",
    frames: this.anims.generateFrameNumbers("new_hole", { start: 3, end: 7 }),
    frameRate: 12,
    repeat: 0,
  });

  //cointext start
  // cointext = this.add.text(500, 20, 'coin: 0', {font: 'Bold 15px Arial', fill: '#fff', fontStyle: "strong"}).setScrollFactor(0);
  // cointext.setStroke('#000', 2);
  // cointext.setDepth(2);
  //cointext end

  //enemy start

  bossSet = this.physics.add.group();
  bossMagicSet = this.physics.add.group();
  monsterSet = this.physics.add.group();
  magics = this.physics.add.group();
  towerAttacks = this.physics.add.group();
  towerSkillAttacks = this.physics.add.group();
  mines = this.physics.add.group();

  // 임시 구멍
  hole = this.physics.add.sprite(0, 0, "new_hole").play("new_hole");
  hole.setScale(2.3);
  hw = hole.body.halfWidth;
  hh = hole.body.halfHeight;
  hole.setCircle(hw * 0.7, hh - hw * 0.7, hh - hw * 0.7);
  hole.hp = 500;
  hole.setDepth(1);
  ingameUi();

  this.physics.add.collider(player, bossSet, player.hitPlayer);
  this.physics.add.collider(bossSet, monsterSet);
  thisScene.physics.add.overlap(magics, bossSet, attack);
  thisScene.physics.add.overlap(bossMagicSet, player, player.hitPlayer);

  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
  this.physics.add.collider(player, monsterSet, player.hitPlayer);
  thisScene.physics.add.overlap(magics, monsterSet, attack);
  // 만약 몬스터와 구멍이 닿았다면 (hitHole 함수 실행)
  thisScene.physics.add.overlap(hole, monsterSet, hitHole);
  thisScene.physics.add.overlap(hole, bossSet, destroyHole);
  //map start
  let snappedChunkX =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
  let snappedChunkY =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

  snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
  snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

  for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
    for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
      let existingChunk = getChunk(x, y);

      if (existingChunk == null) {
        let newChunk = new Chunk(this, x, y);
        chunks.push(newChunk);
      }
    }
  }
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];
    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

  this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);

  // 공격 맞은 후 일시 무적에 사용
  timer = this.time.addEvent({
    delay: 2000,
    callback: () => {
      player.invincible = false;
      player.body.checkCollision.none = false;
      player.setVisible(true);
    },
    loop: true,
  });

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
=======
    this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);
=======
  // ============== 몬스터 스프라이트 애니메이션 목록 ==================
  this.anims.create({
    key: "alien",
    frames: this.anims.generateFrameNumbers("alien", { start: 9, end: 14 }),
    frameRate: 3,
    repeat: -1, // -1은 무한 반복 의미
  });
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)

  this.anims.create({
    key: "worm",
    frames: this.anims.generateFrameNumbers("worm", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "alienPlus",
    frames: this.anims.generateFrameNumbers("alienPlus", { start: 9, end: 14 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "wormPlus",
    frames: this.anims.generateFrameNumbers("wormPlus", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "sonic",
    frames: this.anims.generateFrameNumbers("sonic", { start: 0, end: 1 }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "turtle",
    frames: this.anims.generateFrameNumbers("turtle", { start: 0, end: 1 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "slime",
    frames: this.anims.generateFrameNumbers("slime", { start: 7, end: 14 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "fly",
    frames: this.anims.generateFrameNumbers("fly", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });
  // boss

  this.anims.create({
    key: "slimeKing",
    frames: this.anims.generateFrameNumbers("slimeKing", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "golem",
    frames: this.anims.generateFrameNumbers("golem", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "fireGiant",
    frames: this.anims.generateFrameNumbers("fireGiant", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

<<<<<<< HEAD
    this.anims.create({
        key: "fly",
        frames: this.anims.generateFrameNumbers("fly", {start: 0, end: 2}),
        frameRate: 3,
        repeat: -1,
    });
<<<<<<< HEAD

=======
>>>>>>> 4e05805 (#2 :sparkles: 몬스터 디자인 수정 및 레벨 디자인 수정)
// boss
=======
  this.anims.create({
    key: "monster_die",
    frames: this.anims.generateFrameNumbers("monster_die", {
      start: 0,
      end: 5,
    }),
    frameRate: 12,
    repeat: -1,
  });
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)

  this.anims.create({
    key: "fireGiantAura",
    frames: this.anims.generateFrameNumbers("fireGiantAura", {
      start: 0,
      end: 5,
    }),
    frameRate: 12,
    repeat: -1,
  });
  //enemy end

  //tower start

  //cattower animation start
  this.anims.create({
    key: "0_idle",
    frames: this.anims.generateFrameNumbers("catNone", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "0_attack",
    frames: this.anims.generateFrameNumbers("catNone", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });

<<<<<<< HEAD
    this.anims.create({
        key: "fireGiantAura",
        frames: this.anims.generateFrameNumbers("fireGiantAura", {start: 0, end: 5}),
        frameRate: 12,
        repeat: -1,
    });
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
    //enemy end
=======
  this.anims.create({
    key: "1_idle",
    frames: this.anims.generateFrameNumbers("catThunder", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)

  this.anims.create({
    key: "1_attack",
    frames: this.anims.generateFrameNumbers("catThunder", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });

  this.anims.create({
    key: "2_idle",
    frames: this.anims.generateFrameNumbers("catFire", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "2_attack",
    frames: this.anims.generateFrameNumbers("catFire", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });

  this.anims.create({
    key: "3_idle",
    frames: this.anims.generateFrameNumbers("catWater", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "3_attack",
    frames: this.anims.generateFrameNumbers("catWater", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });

  this.anims.create({
    key: "4_idle",
    frames: this.anims.generateFrameNumbers("catEarth", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "4_attack",
    frames: this.anims.generateFrameNumbers("catEarth", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });
  //cattower animation end

    towerLU = new CatTower(this, -130, -130, "0_idle", "can", "skill", 0);
    towerRU = new CatTower(this, 130, -130, "0_idle", "can", "skill", 0);
    towerLD = new CatTower(this, -130, 130, "0_idle", "can", "skill", 0);
    towerRD = new CatTower(this, 130, 130, "0_idle", "can", "skill", 0);
    towerLU.scale_Circle();
    towerRU.scale_Circle();
    towerLD.scale_Circle();
    towerRD.scale_Circle();

  towerLU.scale = 2;
  towerRU.scale = 2;
  towerLD.scale = 2;
  towerRD.scale = 2;

  towerLU.setDepth(1);
  towerRU.setDepth(1);
  towerLD.setDepth(1);
  towerRD.setDepth(1);

  //tower end

  //mine start
  for (let i = 0; i < mineCount[mineshowtime]; i++) {
    let x =
      Math.random() *
        (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
      StartMineRangeX[mineshowtime];
    let y =
      Math.random() *
        (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
      StartMineRangeY[mineshowtime];
    mine = new Mine(this, x, y, "mine", 0);
    mine.scale_Circle();
    mines.add(mine);
  }
  //mine end

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    //mine start
    for (let i = 0; i < minecount; i++) {
        mine = new Mine(
            this,
            Math.random() * (EndMineRangeX - StartMineRangeX) + StartMineRangeX,
            Math.random() * (EndMineRangeY - StartMineRangeY) + StartMineRangeY,
            "mine"
        );
        mine.scale_Circle();
        mines.add(mine);
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
    }
=======
    //mine start
    for (let i = 0; i < mineCount[mineshowtime]; i++) {
        let x =
            Math.random() *
            (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
            StartMineRangeX[mineshowtime];
        let y =
            Math.random() *
            (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
            StartMineRangeY[mineshowtime];
        mine = new Mine(this, x, y, "mine", 0);
        mine.scale_Circle();
        mines.add(mine);
    }
    console.log(mines);
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
    //mine end

    // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##

    //navi start
<<<<<<< HEAD
    navi = this.add.image(50, 50, "navi").setScrollFactor(0).setScale(0.1);
    navi.setDepth(2);
    //navi end

    //exp bar start
    expbar = this.add.graphics().setScrollFactor(0);
    expbarBG = this.add.graphics().setScrollFactor(0);
    expbar.setDepth(3);
    expbarBG.setDepth(2);
    //exp bar end
}

function update(time, delta) {
    var snappedChunkX =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
    var snappedChunkY =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

    snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
    snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

    for (var x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
        for (var y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
            var existingChunk = getChunk(x, y);

            if (existingChunk == null) {
                var newChunk = new Chunk(this, x, y);
                chunks.push(newChunk);
            }
        }
    }
    for (var i = 0; i < chunks.length; i++) {
        var chunk = chunks[i];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // fairy skill start
  for (let i = 0; i < 5; i++){
    if (fairys[i].timer === fairys[now_fairy].skillCD) {
      fairys[i].skillUse = false;
    } else {
      fairys[i].timer++;
    }
  }
  // fairy skill end

  if (cursors.slot1.isDown && !fairys[now_fairy].skillUse) {
    
    fairys[now_fairy].skillFire();

  }
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
  //enemy start
=======
    player.move();
    //player end

    //enemy start
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

  if (alien_count !=0){
<<<<<<< HEAD
<<<<<<< HEAD
    for(let i=0;i<aliens.children.entries.length;i++){
        // console.log(this.physics.moveToObject(monsters[i], player, 100))
        // if ()
        this.physics.moveToObject(aliens.children.entries[i], player, aliens.children.entries[i].velo);
        
=======
    if (normalAttackTimer === normalAttackAS) {
        normalAttackTimer = 0;
        control = false;
    } else {
        normalAttackTimer++;
>>>>>>> ec22f2e (#3 #2 :sparkles: 컨벤션 수정)
    }
    // fairy.anims.playAfterRepeat('fairy1_idle');
    //mouse clicked
    if (mouse.leftButtonDown() && !control) {
        magicFire(this);
    }
<<<<<<< HEAD
    
=======
    this.physics.moveToObject(alien, player['sprite'], 100);}
>>>>>>> 8aecbcf (#3 :sparkles: 플레이어 객체 설정)
    mon1_delay ++;
=======
    player.move();
    //player end

    //map start

    // let tile = map.getTileAt(map.worldToTileX(player.x), map.worldToTileY(player.y));

    // if (tile) {
    //   console.log('' + JSON.stringify(tile.properties))
    // }

    //map end
=======
    
>>>>>>> dbb8db6 (#6 :sparkles: 맵 동적 생성)
=======
  //enemy start
>>>>>>> 457e4ef (#1 :sparkles: develop merge)

  if (alienCount !== 0) {
    for (let i = 0; i < alienSet.children.entries.length; i++) {
      // console.log(this.physics.moveToObject(monsters[i], player, 100))
      // if ()
      this.physics.moveToObject(
        alienSet.children.entries[i],
        player,
        alienSet.children.entries[i].velo
      );
    }
  }

<<<<<<< HEAD
  mon1Delay++;
=======

    // 몬스터가 유저 따라가게함
    if (monsterCount !== 0) {
        for (let i = 0; i < monsterSet.children.entries.length; i++) {
            if (monsterSet.children.entries[i].type == 'follower') {
                if (monsterSet.children.entries[i].cc != 'slime'){
                this.physics.moveToObject(monsterSet.children.entries[i], player, monsterSet.children.entries[i].velo)};
            }
            // #홀에 따라가게 하는 코드 작성하기#
            else if (monsterSet.children.entries[i].type == 'siege') {
                this.physics.moveToObject(monsterSet.children.entries[i], hole, monsterSet.children.entries[i].velo);
            }
        }
<<<<<<< HEAD
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)

  // 랜덤 위치에 몬스터 생성 (추후 player.x 및 y 좌표 기준 생성으로 변경)
  if (mon1Delay > 60) {
<<<<<<< HEAD
=======
    gameTimer++;
    console.log(gameTimer);
>>>>>>> 821f5ec (#1 :sparkles: 플레이어 업그레이드 삭제)
    randomLocation = Math.floor(Math.random() * 4) + 1;
    if (randomLocation === 1) {
      mon1X = Phaser.Math.Between(player.x - 2000, player.x + 2000);
      mon1Y = Phaser.Math.Between(player.y + 2000, player.y + 2010);
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    mon1Delay++;
>>>>>>> ec22f2e (#3 #2 :sparkles: 컨벤션 수정)
=======
    monDelay++;
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
=======
    }

<<<<<<< HEAD
    if (slime_king_active){
    this.physics.moveToObject(slime_king,player,80);
    if(slime_king.health <= 100){
      slime_king.destroy()
      slime_king_active = false
    }
    }
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
=======
    if (boss_active){
      for (let i = 0; i < bossSet.children.entries.length; i ++){
    this.physics.moveToObject(bossSet.children.entries[i],player,bossSet.children.entries[i].velo);
    if (bossSet.children.entries[i].health <=0){
    slime_pattern(this,bossSet.children.entries[i].pt,bossSet.children.entries[i].x,bossSet.children.entries[i].y)
    bossSet.children.entries[i].destroy()}}}
>>>>>>> 54e99e5 (#2 :sparkle: 슬라임 패턴 구현)
=======
    if (boss_active) {
        for (let i = 0; i < bossSet.children.entries.length; i++) {
            this.physics.moveToObject(bossSet.children.entries[i], player, bossSet.children.entries[i].velo);
            if (bossSet.children.entries[i].health <= 0) {
                slime_pattern(this, bossSet.children.entries[i].pt, bossSet.children.entries[i].x, bossSet.children.entries[i].y)
                bossSet.children.entries[i].destroy()
            }
        }
    }
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

    gameTimer++;

    if (gameTimer == 1800) {
        slime_king = new Boss(this, 200, 80, player.x + 300, player.y + 300, 'slime_king', 'swarm', 5, 1, 'boss')
        slime_king.setDepth(2);
        slime_king.anime()
        boss_active = true
        bossSet.add(slime_king)
    }

<<<<<<< HEAD
<<<<<<< HEAD
// 랜덤 위치에 몬스터 생성 (추후 player.x 및 y 좌표 기준 생성으로 변경)
<<<<<<< HEAD
    if (mon1Delay > 60) {
        gameTimer++;
        console.log(gameTimer);
=======
    if (monDelay > 60) {
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
        randomLocation = Math.floor(Math.random() * 4) + 1
        if (randomLocation === 1) {
            monX = Phaser.Math.Between(player.x - 2000, player.x + 2000);
            monY = Phaser.Math.Between(player.y + 2000, player.y + 2010);
        }

        else if (randomLocation === 2) {
            monX = Phaser.Math.Between(player.x - 2000, player.x + 2000);
            monY = Phaser.Math.Between(player.y - 2000, player.y - 2010);
        }

        else if (randomLocation === 3) {
            monX = Phaser.Math.Between(player.x - 2000, player.x - 2000);
            monY = Phaser.Math.Between(player.y - 2000, player.y + 2000);
        }

        else if (randomLocation === 4) {
            monX = Phaser.Math.Between(player.x + 2000, player.x + 2000);
            monY = Phaser.Math.Between(player.y - 2000, player.y + 2000);}
=======
=======
    gameTimer++;

>>>>>>> e63670c (#2 :sparkle: 코드 정리)
    // 플레이어 기준랜덤 위치에 몬스터 생성
    // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
<<<<<<< HEAD
    if (mon1Delay > 300) {
      // 1번 zombie
      enemySpawn(randomLocation)
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
      
      // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
      addMonster(this, 'alien', 'swarm',10,100,monX,monY,'follower')
      // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')

      mon1Delay = 0};

    
    if (mon2Delay > 1200){
      // 2번 worm
      enemySpawn(randomLocation)
      addMonster(this, 'worm', 'swarm', 10,70,monX,monY, 'siege')

<<<<<<< HEAD
          // case 3:
        }
<<<<<<< HEAD


        alien = new Enemy(this, 10, 100, mon1X, mon1Y, 'alien', 'swarm');
        alienCount += 1;
        mon1Delay = 0;
        alienSet.add(alien);
        this.physics.add.collider(alienSet, alien);
        alien.anime(alien);
=======
    if (randomLocation === 2) {
      mon1X = Phaser.Math.Between(player.x - 2000, player.x + 2000);
      mon1Y = Phaser.Math.Between(player.y - 2000, player.y - 2010);
>>>>>>> 457e4ef (#1 :sparkles: develop merge)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  this.physics.add.overlap(player['sprite'], alien, hitplayer, null, this);
>>>>>>> 8aecbcf (#3 :sparkles: 플레이어 객체 설정)
=======
    this.physics.moveToObject(alien, player, 100);}
    mon1_delay ++;

<<<<<<< HEAD
<<<<<<< HEAD
  if (mon1_delay > 60){
      mon1_x = Phaser.Math.Between(0, 16000);
      mon1_y = Phaser.Math.Between(4000, 8000);
      alien = this.physics.add.sprite(mon1_x,mon1_y,'alien')
      alien_count += 1
      mon1_delay = 0
      aliens.add(alien)
      anime(alien)
      }
=======
    }

>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
  for(let i = magics.length-1; i>=0;i--){
=======
      // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
      // addMonster(this, 'worm_plus', 'worm_plus_anim',20,100,monX,monY,'follower')

      mon2Delay = 0};
    
    if (mon3Delay > 1500){
      enemySpawn(randomLocation)
      addMonster(this, 'sonic', 'swarm', 5,200,monX,monY,'follower')
      mon3Delay = 0};

    
    if (mon4Delay > 3000){
      enemySpawn(randomLocation)
      addMonster(this, 'turtle', 'swarm', 100,30,monX,monY,'siege')
      mon4Delay = 0};
    
      for(let i = magics.length-1; i>=0;i--){
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
    magics[i].timer++;
    if(magics[i].timer == magics[i].lifetime){
      magics[i].destroy();
      magics.splice(i,1);
=======
    for (let i = magics.length - 1; i >= 0; i--) {
        magics[i].timer++;
        if (magics[i].timer === magics[i].lifeTime) {
            magics[i].destroy();
            magics.splice(i, 1);
        }
>>>>>>> ec22f2e (#3 #2 :sparkles: 컨벤션 수정)
    }
<<<<<<< HEAD
=======
>>>>>>> dbb8db6 (#6 :sparkles: 맵 동적 생성)

<<<<<<< HEAD
  this.physics.add.overlap(player, alien, player.hitPlayer, null, this);
>>>>>>> dd93dae (#3 :sparkles: 요정, 공격 객체화)
=======

// 랜덤 위치에 몬스터 생성 (추후 player.x 및 y 좌표 기준 생성으로 변경)
if (mon1_delay > 60){
    random_rocation = Math.floor(Math.random()*4)+1
    if (random_rocation == 1){
    mon1_x = Phaser.Math.Between(player.x-2000, player.x+2000);
    mon1_y = Phaser.Math.Between(player.y+2000, player.y+2010);}

    if (random_rocation == 2){
        mon1_x = Phaser.Math.Between(player.x-2000, player.x+2000);
        mon1_y = Phaser.Math.Between(player.y-2000, player.y-2010);}

    if (random_rocation == 3){
        mon1_x = Phaser.Math.Between(player.x-2000, player.x-2000);
        mon1_y = Phaser.Math.Between(player.y-2000, player.y+2000);}

    if (random_rocation == 4){
        mon1_x = Phaser.Math.Between(player.x+2000, player.x+2000);
        mon1_y = Phaser.Math.Between(player.y-2000, player.y+2000);}
    

        
    alien = new Enemy(this, 10, 100, mon1_x, mon1_y, 'alien', 'swarm');
    alien_count += 1;
    mon1_delay = 0;
    aliens.add(alien);
    this.physics.add.collider(aliens, alien);
    alien.anime(alien);
    }
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)

  //enemy end
  
=======
    //enemy end
=======
  }
  //enemy end
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)

>>>>>>> ec22f2e (#3 #2 :sparkles: 컨벤션 수정)
=======
    if (randomLocation === 3) {
      mon1X = Phaser.Math.Between(player.x - 2000, player.x - 2000);
      mon1Y = Phaser.Math.Between(player.y - 2000, player.y + 2000);
    }

    if (randomLocation === 4) {
      mon1X = Phaser.Math.Between(player.x + 2000, player.x + 2000);
      mon1Y = Phaser.Math.Between(player.y - 2000, player.y + 2000);
    }

    alien = new Enemy(this, 10, 100, mon1X, mon1Y, "alien", "swarm");
    alienCount += 1;
    mon1Delay = 0;
    alienSet.add(alien);
    this.physics.add.collider(alienSet, alien);
    alien.anime(alien);
  }

  //enemy end
<<<<<<< HEAD
>>>>>>> 457e4ef (#1 :sparkles: develop merge)
=======
=======
    if ((gameTimer > 300) && (gameTimer % 30 == 0)) {
        // 1번 zombie
        enemySpawn(randomLocation)

        // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
        addMonster(this, 'alien', 'swarm', 10, 100, monX, monY, 'follower')
        // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')
    }
    ;
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

    if ((gameTimer > 1200) && (gameTimer % 600 == 0)) {
        // 2번 worm
        enemySpawn(randomLocation)
        addMonster(this, 'worm', 'swarm', 10, 70, monX, monY, 'siege')

        // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
        // addMonster(this, 'worm_plus', 'worm_plus_anim',20,100,monX,monY,'follower')
    }
    ;

    if ((gameTimer > 1500) && (gameTimer % 300 == 0)) {
        enemySpawn(randomLocation)
        addMonster(this, 'sonic', 'swarm', 5, 200, monX, monY, 'follower')
    }
    ;


    if ((gameTimer > 1800) && (gameTimer % 900 == 0)) {
        enemySpawn(randomLocation)
        addMonster(this, 'turtle', 'swarm', 100, 30, monX, monY, 'siege')
    }

    if ((gameTimer > 0) && (gameTimer % 300 == 0)) {
        enemySpawn(randomLocation)
        addMonster(this, 'slime', 'swarm', 10, 75, monX, monY, 'follower')
    }
    ;

    // 몬스터 빅웨이브
    if ((gameTimer > 600) && (gameTimer < 1200) && (gameTimer % 3 == 0)) {
        // 1번 zombie
        enemySpawn(randomLocation)

        // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
        addMonster(this, 'alien', 'swarm', 10, 100, monX, monY, 'follower')
        // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')
    }

<<<<<<< HEAD
    // 보스

    // 슬라임
    if (gameTimer == 1800) {
        slime_king = new Boss(this, 200, 80, player.x + 300, player.y + 300, 'slime_king', 'swarm', 5, 1, 'boss')
        slime_king.setDepth(2);
        slime_king.anime()
        boss_active = true
        bossSet.add(slime_king)
    }

    if (boss_active) {
        for (let i = 0; i < bossSet.children.entries.length; i++) {
            this.physics.moveToObject(bossSet.children.entries[i], player, bossSet.children.entries[i].velo);
            if (bossSet.children.entries[i].health <= 0) {
                slime_pattern(this, bossSet.children.entries[i].pt, bossSet.children.entries[i].x, bossSet.children.entries[i].y)
                bossSet.children.entries[i].destroy()
            }
        }
    }

    for (let i = magics.length - 1; i >= 0; i--) {
        magics[i].timer++;
        if (magics[i].timer == magics[i].lifetime) {
            magics[i].destroy();
            magics.splice(i, 1);
        }
    }

    //enemy end


    //tower start

    towerLU.towerAttackTimer++;
    towerRU.towerAttackTimer++;
    towerLD.towerAttackTimer++;
    towerRD.towerAttackTimer++;

    towerLU.towerSkillAttackTimer++;
    towerRU.towerSkillAttackTimer++;
    towerLD.towerSkillAttackTimer++;
    towerRD.towerSkillAttackTimer++;
    //tower end

>>>>>>> bfa9489 (#6 :sparkles: 포탑 생성)
=======
=======
=======

>>>>>>> 2425c48 (#2 :sparkle: 몬스터 피격 시 빨개짐)
  //enemy end
=======
        if (
            Phaser.Math.Distance.Between(
                snappedChunkX,
                snappedChunkY,
                chunk.x,
                chunk.y
            ) < 3
        ) {
            if (chunk !== null) {
                chunk.load();
            }
        } else {
            if (chunk !== null) {
                chunk.unload();
            }
        }
    }
>>>>>>> d0fc426 (#2 :sparkles: 불거인)

    this.followPoint.x = player.x;
    this.followPoint.y = player.y;

    this.cameras.main.startFollow(player, false);
    //map end

<<<<<<< HEAD
  towerLU.towerSkillAttackTimer++;
  towerRU.towerSkillAttackTimer++;
  towerLD.towerSkillAttackTimer++;
  towerRD.towerSkillAttackTimer++;
  //tower end
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
    //navi start
>>>>>>> d0fc426 (#2 :sparkles: 불거인)

    navi.rotation = Phaser.Math.Angle.Between(hole.x, hole.y, player.x, player.y);

    //navi end

    //player start
    changeSlot();
    normalAttackAS = fairySet[nowFairy].as;
    if (normalAttackTimer > normalAttackAS) {
        control = false;
=======
    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

  this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);
  //map enderlap(magics, monsterSet, attack);
  this.anims.create({
    key: "swarm",
    frames: this.anims.generateFrameNumbers("alien", { start: 0, end: 1 }),
    frameRate: 2,
    repeat: -1,
  });

  // 공격 맞은 후 일시 무적에 사용
  timer = this.time.addEvent({
    delay: 2000,
    callback: () => {
      player.invincible = false;
      player.body.checkCollision.none = false
      player.setVisible(true);
    },
    loop: true,
  });

  // ============== 몬스터 스프라이트 애니메이션 목록 ==================
  this.anims.create({
    key: "swarm",
    frames: this.anims.generateFrameNumbers("alien", { start: 0, end: 1 }),
    frameRate: 2,
    repeat: -1,
  });
  //enemy end

  //tower start

  towerLU = new CatTower(this, -100, -100, "cat", "can", "skill");
  towerRU = new CatTower(this, 100, -100, "cat", "can", "skill");
  towerLD = new CatTower(this, -100, 100, "cat", "can", "skill");
  towerRD = new CatTower(this, 100, 100, "cat", "can", "skill");
  console.log(towerLU);
  towerLU.scale_Circle();
  towerRU.scale_Circle();
  towerLD.scale_Circle();
  towerRD.scale_Circle();
  towerLU.setDepth(1);
  towerRU.setDepth(1);
  towerLD.setDepth(1);
  towerRD.setDepth(1);

  //tower end

  //mine start
  for (let i = 0; i < minecount; i++) {
    mine = new Mine(
      this,
      Math.random() * (EndMineRangeX - StartMineRangeX) + StartMineRangeX,
      Math.random() * (EndMineRangeY - StartMineRangeY) + StartMineRangeY,
      "mine"
=======
>>>>>>> ad327af (Update game.js)
    );
    // this.cameras.main.setBounds(0, 0, mapSize, mapSize);
    // this.physics.world.setBounds(0, 0, mapSize, mapSize);
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  cursors = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D,
    slot1: Phaser.Input.Keyboard.KeyCodes.ONE,
    slot2: Phaser.Input.Keyboard.KeyCodes.TWO,
    slot3: Phaser.Input.Keyboard.KeyCodes.THREE,
    slot4: Phaser.Input.Keyboard.KeyCodes.FOUR,
    slot5: Phaser.Input.Keyboard.KeyCodes.FIVE,
    skill: Phaser.Input.Keyboard.KeyCodes.SPACE,
  });
  // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true);
  global.$this = this.scene;
  this.input.keyboard.on("keydown-" + "SHIFT", function (event) {
    initUpgrade();
  });
  //map end

  //player start
  cats = require("./jsons/cats.json");
  fairySet = require("./jsons/fairys.json");

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    player = cats[catNumber];
    player = new Player(this, 1, 100, 100, "cat" + (ChoiceCat + 1));
    player.setDepth(2);
=======
  //exp bar start
  expbar = this.add.graphics().setScrollFactor(0);
  expbarBG = this.add.graphics().setScrollFactor(0);
  expbar.setDepth(3);
  expbarBG.setDepth(2);
  //exp bar end

  // hp bar start
  hpbar = this.add.graphics();
  hpbarBG = this.add.graphics();
  hpbar.setDepth(5);
  hpbarBG.setDepth(4);
  // hp bar end

}
function update(time, delta) {


  var snappedChunkX =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
  var snappedChunkY =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));
>>>>>>> 3e6dfa6 (#3 :sparkles: player 기능 구현)
=======
    player = cats[catNumber];
    player = new Player(this, 1, 20, 20, "cat" + (ChoiceCat + 1));
    player.setScale(0.7)
    player.setDepth(2);
    let hw = player.body.halfWidth;
    let hh = player.body.halfHeight;

    player.setCircle(hw, hh - hw, hh - hw);
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
=======
  player = cats[catNumber];
  player = new Player(this, 1, 20, 20, "cat" + (ChoiceCat + 1));
  player.setScale(0.7);
  player.setDepth(2);
  let hw = player.body.halfWidth;
  let hh = player.body.halfHeight;

  player.setCircle(hw, hh - hw, hh - hw);
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  camera = this.cameras.main;
  input = this.input;
  mouse = input.mousePointer;
  this.input.on(
    "pointermove",
    function (pointer) {
      let cursor = pointer;
      let angle = Phaser.Math.Angle.Between(
        player.x,
        player.y,
        cursor.x + this.cameras.main.scrollX,
        cursor.y + this.cameras.main.scrollY
      );
    },
    this
  );

<<<<<<< HEAD
<<<<<<< HEAD
  for (let i = 0; i < 5; i++) {
    if (fairySet[i].timer < fairySet[i].skillCD) {
      fairySet[i].timer++;
    } else {
      fairySet[i].skillUse = false;
    }
  }

  if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
    fairySet[nowFairy].skillFire();
  }

  player.move();
  player.healCount++;
  if (player.healCount > player.maxHealCount) {
    player.healCount = 0;
    player.health += player.heal;
    if (player.health > player.maxHealth) {
      player.health = player.maxHealth;
    }
    console.log(player.health);
  }

  if (player.invincible) {
    hitTimer++;
    if (hitTimer >= 15) {
      hitTimer = 0;

      if (hitVisible) {
        hitVisible = false;
      } else {
        hitVisible = true;
      }

      player.setVisible(hitVisible);
    }
  }

  //player end

  //enemy start

  // 몬스터가 유저 따라가게함
  if (monsterCount !== 0) {
    for (let i = 0; i < monsterSet.children.entries.length; i++) {
      if (monsterSet.children.entries[i].type == "follower") {
        this.physics.moveToObject(
          monsterSet.children.entries[i],
          player,
          monsterSet.children.entries[i].velo
        );
<<<<<<< HEAD
        fairySet[nowFairy].normalAttack(magic);
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
  expbar.fillStyle(0xff0000);
  expbar.fillRect(
    0,
    0,
    this.cameras.main.worldView.width * (player.exp / player.maxExp),
    16
  );
  //exp bar end
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b192aa3 (#6 :sparkles: exp bar 추가)
=======
    expbar.fillStyle(0xff0000);
    expbar.fillRect(0, 0, this.cameras.main.worldView.width * (player.exp / player.maxExp), 16);
    //exp bar end
>>>>>>> 9ff3036 (#2 :sparkle: 코드 정리)
=======
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
=======
    for (let i = 0; i < 5; i++) {
        if (fairySet[i].timer < fairySet[i].skillCD) {
            fairySet[i].timer++;
        } else {
            fairySet[i].skillUse = false;
        }
    }

    if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
        fairySet[nowFairy].skillFire();
    }

    player.move();
    //player end

    //enemy start

    // 몬스터가 유저 따라가게함
    if (monsterCount !== 0) {
        for (let i = 0; i < monsterSet.children.entries.length; i++) {
            if (monsterSet.children.entries[i].type == "follower") {
                this.physics.moveToObject(
                    monsterSet.children.entries[i],
                    player,
                    monsterSet.children.entries[i].velo
                );
            }
            // 몬스터가 홀에 도달하게 함
            else if (monsterSet.children.entries[i].type == "siege") {
                this.physics.moveToObject(
                    monsterSet.children.entries[i],
                    hole,
                    monsterSet.children.entries[i].velo
                );
=======
    // 플레이어, 요정 로딩
    global.wizard = fairySet[0] = new Fairy(
        this,
        100,
        10,
        1,
        1,
        60,
        20,
        500,
        1,
        player,
        0.5,
        1
    );
    fairySet[0].initFairy1(0, 0);
    global.reaper = fairySet[1] = new Fairy(
        this,
        100,
        10,
        1,
        1,
        100,
        20,
        160,
        2,
        player,
        0.4,
        2
    );
    global.ninja = fairySet[2] = new Fairy(
        this,
        100,
        6,
        1,
        3,
        60,
        10,
        300,
        3,
        player,
        0.5,
        1
    );
    fairySet[2].initFairy3(0, 0);
    global.slime = fairySet[3] = new Fairy(
        this,
        7200,
        10,
        1,
        99999,
        60,
        10,
        400,
        4,
        player,
        0.5,
        1
    );
=======
  // 플레이어, 요정 로딩
  global.wizard = fairySet[0] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    60,
    20,
    500,
    1,
    player,
    0.5,
    1
  );
  fairySet[0].initFairy1(0, 0);
  global.reaper = fairySet[1] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    100,
    20,
    160,
    2,
    player,
    0.4,
    2
  );
  global.ninja = fairySet[2] = new Fairy(
    this,
    100,
    6,
    1,
    3,
    60,
    10,
    300,
    3,
    player,
    0.5,
    1
  );
  fairySet[2].initFairy3(0, 0);
  global.slime = fairySet[3] = new Fairy(
    this,
    7200,
    10,
    1,
    99999,
    60,
    10,
    400,
    4,
    player,
    0.5,
    1
  );
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  global.witch = fairySet[4] = new Fairy(
    this,
    600,
    5,
    1,
    3,
    40,
    10,
    500,
    5,
    player,
    0.5,
    1
  );
  global.bombs = this.physics.add.group();
  fairySet[4].initFairy5(1, 1);
  for (let i = 0; i < 5; i++) {
    fairySet[i].setDepth(2);
  }
  player.changeFairy(fairySet[0]);
  normalAttackAS = fairySet[0].as;
  // animation
  this.anims.create({
    key: "fairy1_idle",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_attack",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy1_1_idle",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_1_attack",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy1_2_idle",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_2_attack",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_idle",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_attack",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_1_idle",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_1_attack",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_2_idle",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_2_attack",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_idle",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_attack",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_1_idle",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_1_attack",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_2_idle",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_2_attack",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_idle",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_attack",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_1_idle",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_1_attack",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_2_idle",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_2_attack",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_idle",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_attack",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_1_idle",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_1_attack",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_2_idle",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_2_attack",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  // 공격 애니메이션
  this.anims.create({
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_1",
    frames: this.anims.generateFrameNumbers("magic2_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });

  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_1",
    frames: this.anims.generateFrameNumbers("magic5_1", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });
  fairySet[nowFairy].play(fairySet[nowFairy].idleKey, true);

  //player end

  //cointext start
  // cointext = this.add.text(500, 20, 'coin: 0', {font: 'Bold 15px Arial', fill: '#fff', fontStyle: "strong"}).setScrollFactor(0);
  // cointext.setStroke('#000', 2);
  // cointext.setDepth(2);
  //cointext end
  UICam = this.cameras.add(
    player.x,
    player.y,
    this.cameras.main.worldView.width,
    this.cameras.main.worldView.height
  );
  //enemy start

  monsterSet = this.physics.add.group();
  magics = this.physics.add.group();
  towerAttacks = this.physics.add.group();
  towerSkillAttacks = this.physics.add.group();
  mines = this.physics.add.group();

  // 임시 구멍
  hole = this.physics.add.sprite(0, 0, "magic1");
  hole.setScale(2.3);
  hw = hole.body.halfWidth;
  hh = hole.body.halfHeight;
  hole.setCircle(hw * 0.7, hh - hw * 0.7, hh - hw * 0.7);
  hole.hp = 500;
  hole.setDepth(1);
  ingameUi();

  // 그룹셋
  monsterSet = this.physics.add.group();
  bossSet = this.physics.add.group();
  bossMagicSet = this.physics.add.group();
  magics = this.physics.add.group();

  this.physics.add.collider(player, bossSet, player.hitPlayer);
  this.physics.add.collider(bossSet, monsterSet);
  thisScene.physics.add.overlap(magics, bossSet, attack);
  thisScene.physics.add.overlap(bossMagicSet, player, player.hitPlayer);

  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
  this.physics.add.collider(player, monsterSet, player.hitPlayer);
  thisScene.physics.add.overlap(magics, monsterSet, attack);
  // 만약 몬스터와 구멍이 닿았다면 (hitHole 함수 실행)
  thisScene.physics.add.overlap(hole, monsterSet, hitHole);
  thisScene.physics.add.overlap(hole, bossSet, destroyHole);
  //map start
  let snappedChunkX =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
  let snappedChunkY =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

  snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
  snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

  for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
    for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
      let existingChunk = getChunk(x, y);

      if (existingChunk == null) {
        let newChunk = new Chunk(this, x, y);
        chunks.push(newChunk);
      }
    }
  }
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
    this.anims.create({
        key: "fairy1_1_idle",
        frames: this.anims.generateFrameNumbers("fairy1_1", {start: 12, end: 21}),
        frameRate: 8,
        repeat: -1,
    });
=======
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

  this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);

  // 공격 맞은 후 일시 무적에 사용
  timer = this.time.addEvent({
    delay: 2000,
    callback: () => {
      player.invincible = false;
      player.body.checkCollision.none = false;
      player.setVisible(true);
    },
    loop: true,
  });

<<<<<<< HEAD
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
    this.anims.create({
        key: "fairy2_idle",
        frames: this.anims.generateFrameNumbers("fairy2", {start: 10, end: 19}),
        frameRate: 8,
        repeat: -1,
    });
=======
  // ============== 몬스터 스프라이트 애니메이션 목록 ==================
  this.anims.create({
    key: "swarm",
    frames: this.anims.generateFrameNumbers("alien", { start: 0, end: 1 }),
    frameRate: 30,
    repeat: -1,
  });
  //enemy end
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  //tower start

<<<<<<< HEAD
    this.anims.create({
<<<<<<< HEAD
        key: "fairy3_idle",
        frames: this.anims.generateFrameNumbers("fairy3", {start: 11, end: 19}),
        frameRate: 8,
        repeat: -1,
    });
=======
        key: "fairy2_1_idle",
        frames: this.anims.generateFrameNumbers("fairy2_1", {start: 10, end: 19}),
        frameRate: 8,
        repeat: -1,
    });
=======
  towerLU = new CatTower(this, -100, -100, "cat", "can", "skill");
  towerRU = new CatTower(this, 100, -100, "cat", "can", "skill");
  towerLD = new CatTower(this, -100, 100, "cat", "can", "skill");
  towerRD = new CatTower(this, 100, 100, "cat", "can", "skill");
  towerLU.scale_Circle();
  towerRU.scale_Circle();
  towerLD.scale_Circle();
  towerRD.scale_Circle();
  towerLU.setDepth(1);
  towerRU.setDepth(1);
  towerLD.setDepth(1);
  towerRD.setDepth(1);
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  //tower end

  //mine start
  for (let i = 0; i < mineCount; i++) {
    mine = new Mine(
      this,
      Math.random() * (EndMineRangeX - StartMineRangeX) + StartMineRangeX,
      Math.random() * (EndMineRangeY - StartMineRangeY) + StartMineRangeY,
      "mine"
    );
    mine.scale_Circle();
    mines.add(mine);
  }
  //mine end

  // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##

  //navi start
  navi = this.add.image(64, 80, "navi").setScrollFactor(0).setScale(1);
  navi.setDepth(4);
  //navi end

  //exp bar start
  expBar = this.add.graphics().setScrollFactor(0);
  expBarBG = this.add.graphics().setScrollFactor(0);
  expBar.setDepth(4);
  expBarBG.setDepth(3);

  this.cameras.main.ignore([expBar, expBarBG, navi]);

  //exp bar end
  // hp bar start
  hpBar = this.add.graphics();
  hpBarBG = this.add.graphics();
  hpBar.setDepth(5);
  hpBarBG.setDepth(4);
  // hp bar end

  this.cameras.main.setZoom(0.8);
  UICam.setZoom(1);
}

<<<<<<< HEAD
    this.anims.create({
        key: "fairy3_2_attack",
        frames: this.anims.generateFrameNumbers("fairy3_2", {start: 0, end: 7}),
        frameRate: 14,
        repeat: 0,
    });
>>>>>>> 2f19786 (#2 :sparkle: 불거인)

    this.anims.create({
        key: "fairy3_attack",
        frames: this.anims.generateFrameNumbers("fairy3", {start: 0, end: 9}),
        frameRate: 14,
        repeat: 0,
    });
=======
function update(time, delta) {
  for (let i = 0; i < 5; i++) {
    if (fairySet[i].timer < fairySet[i].skillCD) {
      fairySet[i].timer++;
      if (fairySet[i].skillUse === true) {
        useSkill(i);
      }
    } else {
      if (fairySet[i].skillUse === true) {
        fairySet[i].skillUse = false;
        canSkill(i);
      }
    }
  }

  if (
    cursors.skill.isDown &&
    fairySet[nowFairy].isSkill &&
    !fairySet[nowFairy].skillUse
  ) {
    fairySet[nowFairy].skillFire();
    // fairySet[nowFairy].skillUse = true;
  }

  frameTime += delta;
  player.move();

  //  Health bar start
  hpBar.clear();
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

  hpBarBG.fillStyle(0xff0000);
  hpBarBG.fillRect(0, 0, 60, 10);

  hpBar.fillStyle(0x2ff40a);
  hpBar.fillRect(0, 0, 60 * (player.health / player.maxHealth), 10);

<<<<<<< HEAD
    this.anims.create({
<<<<<<< HEAD
=======
        key: "fairy4_1_idle",
        frames: this.anims.generateFrameNumbers("fairy4_1", {start: 7, end: 14}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy4_1_attack",
        frames: this.anims.generateFrameNumbers("fairy4_1", {start: 0, end: 5}),
        frameRate: 10,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy4_2_idle",
        frames: this.anims.generateFrameNumbers("fairy4_2", {start: 7, end: 14}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy4_2_attack",
        frames: this.anims.generateFrameNumbers("fairy4_2", {start: 0, end: 5}),
        frameRate: 10,
        repeat: 0,
    });

    this.anims.create({
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
        key: "fairy5_idle",
        frames: this.anims.generateFrameNumbers("fairy5", {start: 15, end: 24}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy5_attack",
        frames: this.anims.generateFrameNumbers("fairy5", {start: 0, end: 13}),
        frameRate: 17,
        repeat: 0,
    });

<<<<<<< HEAD
=======
    this.anims.create({
        key: "fairy5_1_idle",
        frames: this.anims.generateFrameNumbers("fairy5_1", {start: 15, end: 24}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy5_1_attack",
        frames: this.anims.generateFrameNumbers("fairy5_1", {start: 0, end: 13}),
        frameRate: 17,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy5_2_idle",
        frames: this.anims.generateFrameNumbers("fairy5_2", {start: 15, end: 24}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy5_2_attack",
        frames: this.anims.generateFrameNumbers("fairy5_2", {start: 0, end: 13}),
        frameRate: 17,
        repeat: 0,
    });

>>>>>>> 2f19786 (#2 :sparkle: 불거인)
    // 공격 애니메이션
    this.anims.create({
        key: "magic1",
        frames: this.anims.generateFrameNumbers("magic1", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic2",
        frames: this.anims.generateFrameNumbers("magic2", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });

    this.anims.create({
        key: "magic2_1",
        frames: this.anims.generateFrameNumbers("magic2_1", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });

    this.anims.create({
        key: "magic3",
        frames: this.anims.generateFrameNumbers("magic3", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic4",
        frames: this.anims.generateFrameNumbers("magic4", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic5",
        frames: this.anims.generateFrameNumbers("magic5", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
    this.anims.create({
        key: "magic5_1",
        frames: this.anims.generateFrameNumbers("magic5_1", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });
<<<<<<< HEAD
    fairySet[nowFairy].play("fairy" + (nowFairy + 1) + "_idle", true);
=======
    fairySet[nowFairy].play(fairySet[nowFairy].idleKey, true);
>>>>>>> 2f19786 (#2 :sparkle: 불거인)

    //player end

    //cointext start
    // cointext = this.add.text(500, 20, 'coin: 0', {font: 'Bold 15px Arial', fill: '#fff', fontStyle: "strong"}).setScrollFactor(0);
    // cointext.setStroke('#000', 2);
    // cointext.setDepth(2);
    //cointext end

    //enemy start

    monsterSet = this.physics.add.group();
    magics = this.physics.add.group();
    towerAttacks = this.physics.add.group();
    towerSkillAttacks = this.physics.add.group();
    mines = this.physics.add.group();

<<<<<<< HEAD

    // 임시 구멍
    hole = this.physics.add.sprite(0, 0, "fairy4");
    hole.hp = 5;
    hole.setDepth(1);
    inGameUI();
    // 그룹셋
    monsterSet = this.physics.add.group();
    bossSet = this.physics.add.group();
=======
    // 임시 구멍
    hole = this.physics.add.sprite(0, 0, "magic1");
    hole.setScale(2.3);
    hw = hole.body.halfWidth;
    hh = hole.body.halfHeight;
    hole.setCircle(hw * 0.7, hh - hw * 0.7, hh - hw * 0.7);
    hole.hp = 500;
    hole.setDepth(1);
    ingameUi();

    // 그룹셋
    monsterSet = this.physics.add.group();
    bossSet = this.physics.add.group();
    bossMagicSet = this.physics.add.group();
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
    magics = this.physics.add.group();

    this.physics.add.collider(player, bossSet, player.hitPlayer);
    this.physics.add.collider(bossSet, monsterSet);
    thisScene.physics.add.overlap(magics, bossSet, attack);
    thisScene.physics.add.overlap(bossMagicSet, player, player.hitPlayer);

    // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
    this.physics.add.collider(player, monsterSet, player.hitPlayer);
    thisScene.physics.add.overlap(magics, monsterSet, attack);
    // 만약 몬스터와 구멍이 닿았다면 (hitHole 함수 실행)
    thisScene.physics.add.overlap(hole, monsterSet, hitHole);
    thisScene.physics.add.overlap(hole, bossSet, destroyHole);
    //map start
=======
  hpBar.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
  hpBarBG.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
  // expBar.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
  // expBarBG.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
  // Health bar end
  if (frameTime > 16.5) {
    frameTime = 0;

>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
    let snappedChunkX =
      this.chunkSize *
      this.tileSize *
      Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
    let snappedChunkY =
      this.chunkSize *
      this.tileSize *
      Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

    snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
    snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

    for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
      for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
        let existingChunk = getChunk(x, y);

        if (existingChunk == null) {
          let newChunk = new Chunk(this, x, y);
          chunks.push(newChunk);
        }
      }
    }
    for (let i = 0; i < chunks.length; i++) {
      let chunk = chunks[i];

<<<<<<< HEAD
        if (
            Phaser.Math.Distance.Between(
                snappedChunkX,
                snappedChunkY,
                chunk.x,
                chunk.y
            ) < 3
        ) {
            if (chunk !== null) {
                chunk.load();
            }
        } else {
            if (chunk !== null) {
                chunk.unload();
>>>>>>> ad327af (Update game.js)
            }
=======
      if (
        Phaser.Math.Distance.Between(
          snappedChunkX,
          snappedChunkY,
          chunk.x,
          chunk.y
        ) < 3
      ) {
        if (chunk !== null) {
          chunk.load();
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
        }
      } else {
        if (chunk !== null) {
          chunk.unload();
        }
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    gameTimer++;

    // 플레이어 기준랜덤 위치에 몬스터 생성
    // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
    // if (gameTimer > 300 && gameTimer % 30 == 0) {
    //   // 1번 zombie
    //   enemySpawn(randomLocation);
    //
    //   // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
    //   addMonster(this, "alien", "swarm", 10, 100, monX, monY, "follower");
    //   // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')
    // }
    // if (gameTimer > 1200 && gameTimer % 600 == 0) {
    //   // 2번 worm
    //   enemySpawn(randomLocation);
    //   addMonster(this, "worm", "swarm", 10, 70, monX, monY, "siege");
    //
    //   // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
    //   // addMonster(this, 'worm_plus', 'worm_plus_anim',20,100,monX,monY,'follower')
    // }
    // if (gameTimer > 1500 && gameTimer % 300 == 0) {
    //   enemySpawn(randomLocation);
    //   addMonster(this, "sonic", "swarm", 5, 200, monX, monY, "follower");
    // }
    // if (gameTimer > 1800 && gameTimer % 900 == 0) {
    //   enemySpawn(randomLocation);
    //   addMonster(this, "turtle", "swarm", 100, 30, monX, monY, "siege");
    // }
    //
    // if (gameTimer > 0 && gameTimer % 300 == 0) {
    //   enemySpawn(randomLocation);
    //   addMonster(this, "slime", "swarm", 10, 75, monX, monY, "follower");
    // }
    // // 몬스터 빅웨이브
    // if (gameTimer > 600 && gameTimer < 1200 && gameTimer % 3 == 0) {
    //   // 1번 zombie
    //   enemySpawn(randomLocation);
    //
    //   // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
    //   addMonster(this, "alien", "swarm", 10, 100, monX, monY, "follower");
    //   // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')
    // }

    // 보스

    // 불거인
    if (gameTimer == 100) {
        fire_giant_aura = new Boss(this, 500, 10, player.x - 600, player.y - 600, 'fire_giant_aura', 'swarm', 5, 10, 'boss')
        fire_giant_aura.setDepth(1);
        fire_giant_aura.anime();
        boss_fire_giant_active = true;
        bossMagicSet.add(fire_giant_aura);
    }
    if (gameTimer == 100) {
        fire_giant = new Boss(this, 500, 10, player.x - 600, player.y - 600, 'fire_giant', 'swarm', 1, 10, 'boss')
        fire_giant.setDepth(2);
        fire_giant.anime();
        boss_active = true;
        bossSet.add(fire_giant);
    }

    // 슬라임
    if (gameTimer == 60) {
        slime_king = new Boss(
            this,
            200,
            80,
            player.x + 300,
            player.y + 300,
            "slime_king",
            "swarm",
            5,
            1,
            "boss"
=======
      }
      // 몬스터가 홀에 도달하게 함
      else if (monsterSet.children.entries[i].type == "siege") {
        this.physics.moveToObject(
          monsterSet.children.entries[i],
          hole,
          monsterSet.children.entries[i].velo
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
        );
      }
    }

    // 골렘
    if (gameTimer == 100) {
        golem = new Boss(this, 500, 100, player.x + 600, player.y - 600, 'golem', 'swarm', 10, 10, 'boss')
        golem.setDepth(2);
        golem.anime();
        boss_active = true;
        bossSet.add(golem);
    }

    // 보스 이동 및 사망 체크
    if (boss_active) {
        for (let i = 0; i < bossSet.children.entries.length; i++) {
            if (bossSet.children.entries[i].bossSpiece != 'golem') {
                this.physics.moveToObject(
                    bossSet.children.entries[i],
                    player,
                    bossSet.children.entries[i].velo
                )
                if (boss_fire_giant_active) {
                    this.physics.moveToObject(
                        bossMagicSet.children.entries[0],
                        player,
                        bossMagicSet.children.entries[0].velo
                    )
                }
            } else if (bossSet.children.entries[i].bossSpiece == 'golem') {
                this.physics.moveToObject(
                    bossSet.children.entries[i],
                    hole,
                    bossSet.children.entries[i].velo
                )
            }
            ;
            if (bossSet.children.entries[i].health <= 0) {
                if (bossSet.children.entries[i].bossSpiece == 'slime_king') {
                    slime_pattern(
                        this,
                        bossSet.children.entries[i].pt,
                        bossSet.children.entries[i].x,
                        bossSet.children.entries[i].y
                    );
                }
                bossSet.children.entries[i].destroy();
                if (bossSet.children.entries.length == 0) {
                    boss_active = false
                }
            }
        }
      }
=======
    for (var i = 0; i < chunks.length; i++) {
        var chunk = chunks[i];
=======
    for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];
>>>>>>> aabc1ad (#3 :sparkles: 각종 코드 수정)
=======
    this.followPoint.x = player.x;
    this.followPoint.y = player.y;
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

    this.cameras.main.startFollow(player, false);
    UICam.startFollow(player, false);
=======
>>>>>>> 6734bfb (#3 :cat: 규냥)
    //map end

    //tower start

    this.load.spritesheet("catNone", "images/cattower/towerNone.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.spritesheet("catThunder", "images/cattower/towerThunder.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.spritesheet("catFire", "images/cattower/towerFire.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.spritesheet("catWater", "images/cattower/towerWater.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.spritesheet("catEarth", "images/cattower/towerEarth.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    this.load.image("can", "images/cattower/can.png");
    this.load.image("skill", "images/cattower/skill.png");
    //tower end

    //hole start
    this.load.spritesheet("new_hole", "images/hole/new_hole.png", {
        frameWidth: 100,
        frameHeight: 100,
    });
    //hole end

    //navi start
    this.load.image("navi", "images/navi/arrow.png");
    //navi end

    //mine start
    this.load.image("minearrow", "images/mine/boxarrow.png");
    this.load.image("mine", "images/mine/mine.png");
    //mine end

    //player start
    // 플레이어 스프라이트
    this.load.spritesheet("cat1", "images/cat/cat1.png", {
        frameWidth: 96,
        frameHeight: 100,
    });
    this.load.spritesheet("cat2", "images/cat/cat2.png", {
        frameWidth: 116,
        frameHeight: 112,
    });
    this.load.spritesheet("cat3", "images/cat/cat3.png", {
        frameWidth: 116,
        frameHeight: 112,
    });
    this.load.spritesheet("cat4", "images/cat/cat4.png", {
        frameWidth: 96,
        frameHeight: 100,
    });
    this.load.spritesheet("cat5", "images/cat/cat5.png", {
        frameWidth: 96,
        frameHeight: 100,
    });
    this.load.spritesheet("cat6", "images/cat/cat6.png", {
        frameWidth: 116,
        frameHeight: 112,
    });
    this.load.spritesheet("cat7", "images/cat/cat7.png", {
        frameWidth: 96,
        frameHeight: 100,
    });

<<<<<<< HEAD
    for (let i = 0; i < 5; i++) {
      if (fairySet[i].timer < fairySet[i].skillCD) {
        fairySet[i].timer++;
        if (fairySet[i].skillUse === true) {
          useSkill(i);
        }
      } else {
        if (fairySet[i].skillUse === true) {
          fairySet[i].skillUse = false;
          canSkill(i);
        }
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
    // 공격 맞은 후 일시 무적에 사용
    timer = this.time.addEvent({
        delay: 2000,
        callback: () => {
            player.invincible = false;
<<<<<<< HEAD
=======
            player.body.checkCollision.none = false
            player.setVisible(true);
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
        },
        loop: true,
    });
=======
    if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
=======
    if (
      cursors.skill.isDown &&
      fairySet[nowFairy].isSkill &&
      !fairySet[nowFairy].skillUse
    ) {
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)
      fairySet[nowFairy].skillFire();
      // fairySet[nowFairy].skillUse = true;
    }
=======
    // 공격 스프라이트
    this.load.spritesheet("magic1", "images/attack/weapon/magic1.png", {
        frameWidth: 138,
        frameHeight: 138,
        endFrame: 4,
    });

    this.load.spritesheet("magic1_1", "images/attack/weapon/magic1_1.png", {
        frameWidth: 362,
        frameHeight: 362,
        endFrame: 7,
    });
    this.load.spritesheet("magic1_1_1", "images/attack/weapon/magic1_1_1.png", {
        frameWidth: 74,
        frameHeight: 74,
        endFrame: 24,
    });
    this.load.spritesheet("magic1_2", "images/attack/weapon/magic1_2.png", {
        frameWidth: 138,
        frameHeight: 138,
        endFrame: 4,
    });
    this.load.spritesheet("magic1_2_1", "images/attack/weapon/magic1_2_1.png", {
        frameWidth: 74,
        frameHeight: 74,
        endFrame: 24,
    });
    this.load.spritesheet("magic2", "images/attack/weapon/magic2.png", {
        frameWidth: 192,
        frameHeight: 108,
    });
    this.load.spritesheet("magic2_1", "images/attack/weapon/magic2_1.png", {
        frameWidth: 192,
        frameHeight: 108,
    });
    this.load.spritesheet("magic2_2", "images/attack/weapon/magic2_2.png", {
        frameWidth: 192,
        frameHeight: 108,
    });
    this.load.spritesheet("magic2_1_1", "images/attack/weapon/magic2_1_1.png", {
        frameWidth: 74,
        frameHeight: 74,
    });
    this.load.spritesheet("magic2_2_1", "images/attack/weapon/magic2_2_1.png", {
        frameWidth: 192,
        frameHeight: 108,
    });
>>>>>>> 6734bfb (#3 :cat: 규냥)

    this.load.spritesheet("magic3", "images/attack/weapon/magic3.png", {
        frameWidth: 74,
        frameHeight: 74,
        endFrame: 7,
    });
    this.load.spritesheet("magic3_1", "images/attack/weapon/magic3_1.png", {
        frameWidth: 74,
        frameHeight: 74,
        endFrame: 7,
    });
    this.load.spritesheet("magic3_2", "images/attack/weapon/magic3_2.png", {
        frameWidth: 74,
        frameHeight: 74,
        endFrame: 7,
    });
    this.load.spritesheet(
        "magic4",
        "images/attack/weapon/slime_attack1_48x48.png",
        {
            frameWidth: 48,
            frameHeight: 48,
            endFrame: 2,
        }
    );

    this.load.spritesheet(
        "magic4_1",
        "images/attack/weapon/slime_attack2_48x48.png",
        {
            frameWidth: 48,
            frameHeight: 48,
            endFrame: 2,
        }
    );

    this.load.spritesheet(
        "magic4_2",
        "images/attack/weapon/slime_attack3_48x48.png",
        {
            frameWidth: 48,
            frameHeight: 48,
            endFrame: 2,
        }
    );

    this.load.spritesheet(
        "magic5",
        "images/attack/weapon/8_protectioncircle_spritesheet.png",
        {frameWidth: 100, frameHeight: 100, endFrame: 61}
    );

    this.load.spritesheet("magic5_1", "images/attack/weapon/magic5_1.png", {
        frameWidth: 74,
        frameHeight: 74,
        endFrame: 8,
    });
    this.load.spritesheet("magic5_2", "images/attack/weapon/magic5_2.png", {
        frameWidth: 74,
        frameHeight: 74,
        endFrame: 8,
    });
    this.load.spritesheet("magic5_3", "images/attack/weapon/magic5_3.png", {
        frameWidth: 74,
        frameHeight: 74,
        endFrame: 8,
    });
    // 스킬 스프라이트

    this.load.spritesheet(
        "skill4",
        "images/attack/weapon/10_weaponhit_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
        }
    );
    // 요정 스프라이트
    this.load.spritesheet("fairy1", "images/fairy/fairy1.png", {
        frameWidth: 150,
        frameHeight: 142,
    });

    this.load.spritesheet("fairy1_1", "images/fairy/fairy1_yellow.png", {
        frameWidth: 150,
        frameHeight: 142,
    });

    this.load.spritesheet("fairy1_2", "images/fairy/fairy1_red.png", {
        frameWidth: 150,
        frameHeight: 142,
    });

    this.load.spritesheet("fairy2", "images/fairy/fairy2.png", {
        frameWidth: 230,
        frameHeight: 210,
    });

    this.load.spritesheet("fairy2_1", "images/fairy/fairy2_Red.png", {
        frameWidth: 230,
        frameHeight: 210,
    });

    this.load.spritesheet("fairy2_2", "images/fairy/fairy2_black.png", {
        frameWidth: 230,
        frameHeight: 210,
    });

    this.load.spritesheet("fairy3", "images/fairy/fairy3.png", {
        frameWidth: 140,
        frameHeight: 140,
    });

    this.load.spritesheet("fairy3_1", "images/fairy/fairy3_Red.png", {
        frameWidth: 140,
        frameHeight: 140,
    });

    this.load.spritesheet("fairy3_2", "images/fairy/fairy3_master.png", {
        frameWidth: 140,
        frameHeight: 140,
    });

    this.load.spritesheet("fairy4", "images/fairy/fairy4.png", {
        frameWidth: 136,
        frameHeight: 170,
    });

    this.load.spritesheet("fairy4_1", "images/fairy/fairy4_blue.png", {
        frameWidth: 136,
        frameHeight: 170,
    });

    this.load.spritesheet("fairy4_2", "images/fairy/fairy4_green.png", {
        frameWidth: 136,
        frameHeight: 170,
    });

    this.load.spritesheet("fairy5", "images/fairy/fairy5.png", {
        frameWidth: 160,
        frameHeight: 190,
    });

    this.load.spritesheet("fairy5_1", "images/fairy/fairy5_red.png", {
        frameWidth: 160,
        frameHeight: 190,
    });

    this.load.spritesheet("fairy5_2", "images/fairy/fairy5_black.png", {
        frameWidth: 160,
        frameHeight: 190,
    });

    //player end

    //enemy start

    // 몬스터

    this.load.spritesheet("monster_die", "images/monster/monster_die2.png", {
        frameWidth: 64,
        frameHeight: 64,
    });

    this.load.spritesheet("alien", "images/monster/alien.png", {
        frameWidth: 20,
        frameHeight: 20,
    });

    this.load.spritesheet("worm", "images/monster/worm.png", {
        frameWidth: 48,
        frameHeight: 48,
    });

    this.load.spritesheet("sonic", "images/monster/sonic.png", {
        frameWidth: 32,
        frameHeight: 32,
    });

    this.load.spritesheet("turtle", "images/monster/turtle.png", {
        frameWidth: 32,
        frameHeight: 32,
    });

    this.load.spritesheet("slime", "images/monster/slime.png", {
        frameWidth: 16,
        frameHeight: 16,
    });

    this.load.spritesheet("fly", "images/monster/fly.png", {
        frameWidth: 32,
        frameHeight: 32,
    });

    this.load.spritesheet("alienPlus", "images/monster/alienPlus.png", {
        frameWidth: 20,
        frameHeight: 20,
    });

    this.load.spritesheet("wormPlus", "images/monster/wormPlus.png", {
        frameWidth: 48,
        frameHeight: 48,
    });

    //   보스
    this.load.spritesheet("slimeKing", "images/boss/slimeKing.png", {
        frameWidth: 96,
        frameHeight: 96,
    });

    this.load.spritesheet("golem", "images/boss/golem.png", {
        frameWidth: 96,
        frameHeight: 96,
    });

    this.load.spritesheet("fireGiant", "images/boss/fireGiant.png", {
        frameWidth: 96,
        frameHeight: 96,
    });

    this.load.spritesheet("fireGiantAura", "images/boss/fireGiantAura.png", {
        frameWidth: 64,
        frameHeight: 64,
    });
    //enemy end
}

function create() {
    this.input.setDefaultCursor("url(/images/cursor/aimNone.png), pointer");
    if (ChoiceCat === 4) {
        setSound.setBGM(5);
    } else {
        setSound.setBGM(1);
    }

    thisScene = this;
    //map start
    this.chunkSize = 8;
    this.tileSize = 1024;
    this.cameraSpeed = 1;
    UICam = this.cameras.add(
        player.x,
        player.y,
        this.cameras.main.worldView.width,
        this.cameras.main.worldView.height
    );
    this.followPoint = new Phaser.Math.Vector2(
        this.cameras.main.worldView.x + this.cameras.main.worldView.width * 0.5,
        this.cameras.main.worldView.y + this.cameras.main.worldView.height * 0.5
    );
    // this.cameras.main.setBounds(0, 0, mapSize, mapSize);
    // this.physics.world.setBounds(0, 0, mapSize, mapSize);

    cursors = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
        slot1: Phaser.Input.Keyboard.KeyCodes.ONE,
        slot2: Phaser.Input.Keyboard.KeyCodes.TWO,
        slot3: Phaser.Input.Keyboard.KeyCodes.THREE,
        slot4: Phaser.Input.Keyboard.KeyCodes.FOUR,
        slot5: Phaser.Input.Keyboard.KeyCodes.FIVE,
        skill: Phaser.Input.Keyboard.KeyCodes.SPACE,
    });
    // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true);
    global.$this = this.scene;
    this.input.keyboard.on("keydown-" + "SHIFT", function (event) {
        initUpgrade();
    });
    //map end

    //player start
    cats = require("./jsons/cats.json");
    fairySet = require("./jsons/fairys.json");

    player = cats[catNumber];
    player = new Player(this, 1, 20, 20, "cat" + (ChoiceCat + 1));
    player.ability = ChoiceCat + 1;
    player.setScale(0.7);
    player.setDepth(2);
    let hw = player.body.halfWidth;
    let hh = player.body.halfHeight;

    player.setCircle(hw * 0.6, hh - hw * 0.6, hh - hw * 0.6);
    camera = this.cameras.main;
    input = this.input;
    mouse = input.mousePointer;
    this.input.on(
        "pointermove",
        function (pointer) {
            let cursor = pointer;
            let angle = Phaser.Math.Angle.Between(
                player.x,
                player.y,
                cursor.x + this.cameras.main.scrollX,
                cursor.y + this.cameras.main.scrollY
            );
        },
        this
    );

    // 플레이어, 요정 로딩
    global.wizard = fairySet[0] = new Fairy(
        this,
        100,
        10,
        1,
        1,
        60,
        20,
        500,
        1,
        player,
        0.5,
        1
    );
    fairySet[0].initFairy1(0, 0);
    global.reaper = fairySet[1] = new Fairy(
        this,
        100,
        10,
        1,
        1,
        80,
        20,
        160,
        2,
        player,
        0.5,
        1
    );
    global.ninja = fairySet[2] = new Fairy(
        this,
        100,
        6,
        1,
        3,
        60,
        10,
        300,
        3,
        player,
        0.5,
        1
    );
    fairySet[2].initFairy3(0, 0);
    global.slime = fairySet[3] = new Fairy(
        this,
        7200,
        10,
        1,
        10,
        60,
        10,
        400,
        4,
        player,
        0.5,
        2
    );

    global.witch = fairySet[4] = new Fairy(
        this,
        600,
        5,
        1,
        3,
        40,
        10,
        500,
        5,
        player,
        0.5,
        1
    );
    global.bombs = this.physics.add.group();
    fairySet[4].initFairy5(0.5, 1);
    for (let i = 0; i < 5; i++) {
        fairySet[i].setDepth(2);
    }
    player.changeFairy(fairySet[0]);
    normalAttackAS = fairySet[0].as;
    // animation
    this.anims.create({
        key: "fairy1_idle",
        frames: this.anims.generateFrameNumbers("fairy1", {start: 12, end: 21}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy1_attack",
        frames: this.anims.generateFrameNumbers("fairy1", {start: 6, end: 10}),
        frameRate: 12,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy1_1_idle",
        frames: this.anims.generateFrameNumbers("fairy1_1", {start: 12, end: 21}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy1_1_attack",
        frames: this.anims.generateFrameNumbers("fairy1_1", {start: 6, end: 10}),
        frameRate: 12,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy1_2_idle",
        frames: this.anims.generateFrameNumbers("fairy1_2", {start: 12, end: 21}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy1_2_attack",
        frames: this.anims.generateFrameNumbers("fairy1_2", {start: 6, end: 10}),
        frameRate: 12,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy2_idle",
        frames: this.anims.generateFrameNumbers("fairy2", {start: 10, end: 19}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy2_attack",
        frames: this.anims.generateFrameNumbers("fairy2", {start: 0, end: 8}),
        frameRate: 14,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy2_1_idle",
        frames: this.anims.generateFrameNumbers("fairy2_1", {start: 10, end: 19}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy2_1_attack",
        frames: this.anims.generateFrameNumbers("fairy2_1", {start: 0, end: 8}),
        frameRate: 14,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy2_2_idle",
        frames: this.anims.generateFrameNumbers("fairy2_2", {start: 10, end: 19}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy2_2_attack",
        frames: this.anims.generateFrameNumbers("fairy2_2", {start: 0, end: 8}),
        frameRate: 14,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy3_idle",
        frames: this.anims.generateFrameNumbers("fairy3", {start: 9, end: 18}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy3_attack",
        frames: this.anims.generateFrameNumbers("fairy3", {start: 0, end: 7}),
        frameRate: 14,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy3_1_idle",
        frames: this.anims.generateFrameNumbers("fairy3_1", {start: 9, end: 18}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy3_1_attack",
        frames: this.anims.generateFrameNumbers("fairy3_1", {start: 0, end: 7}),
        frameRate: 14,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy3_2_idle",
        frames: this.anims.generateFrameNumbers("fairy3_2", {start: 9, end: 18}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy3_2_attack",
        frames: this.anims.generateFrameNumbers("fairy3_2", {start: 0, end: 7}),
        frameRate: 14,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy4_idle",
        frames: this.anims.generateFrameNumbers("fairy4", {start: 7, end: 14}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy4_attack",
        frames: this.anims.generateFrameNumbers("fairy4", {start: 0, end: 5}),
        frameRate: 10,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy4_1_idle",
        frames: this.anims.generateFrameNumbers("fairy4_1", {start: 7, end: 14}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy4_1_attack",
        frames: this.anims.generateFrameNumbers("fairy4_1", {start: 0, end: 5}),
        frameRate: 10,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy4_2_idle",
        frames: this.anims.generateFrameNumbers("fairy4_2", {start: 7, end: 14}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy4_2_attack",
        frames: this.anims.generateFrameNumbers("fairy4_2", {start: 0, end: 5}),
        frameRate: 10,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy5_idle",
        frames: this.anims.generateFrameNumbers("fairy5", {start: 15, end: 24}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy5_attack",
        frames: this.anims.generateFrameNumbers("fairy5", {start: 0, end: 13}),
        frameRate: 17,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy5_1_idle",
        frames: this.anims.generateFrameNumbers("fairy5_1", {start: 15, end: 24}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy5_1_attack",
        frames: this.anims.generateFrameNumbers("fairy5_1", {start: 0, end: 13}),
        frameRate: 17,
        repeat: 0,
    });

    this.anims.create({
        key: "fairy5_2_idle",
        frames: this.anims.generateFrameNumbers("fairy5_2", {start: 15, end: 24}),
        frameRate: 8,
        repeat: -1,
    });

    this.anims.create({
        key: "fairy5_2_attack",
        frames: this.anims.generateFrameNumbers("fairy5_2", {start: 0, end: 13}),
        frameRate: 17,
        repeat: 0,
    });

    // 공격 애니메이션
    this.anims.create({
        key: "magic1",
        frames: this.anims.generateFrameNumbers("magic1", {
            start: 0,
            end: 3,
            first: 0,
        }),
        frameRate: 20,
        repeat: -1,
    });
    this.anims.create({
        key: "magic1_1",
        frames: this.anims.generateFrameNumbers("magic1_1", {
            start: 0,
            end: 6,
            first: 0,
        }),
        frameRate: 20,
        repeat: -1,
    });

    this.anims.create({
        key: "magic1_1_1",
        frames: this.anims.generateFrameNumbers("magic1_1_1", {
            start: 0,
            end: 24,
            first: 0,
        }),
        frameRate: 70,
        repeat: -1,
    });

    this.anims.create({
        key: "magic1_2_1",
        frames: this.anims.generateFrameNumbers("magic1_2_1", {
            start: 0,
            end: 24,
            first: 0,
        }),
        frameRate: 70,
        repeat: -1,
    });
    this.anims.create({
        key: "magic1_2",
        frames: this.anims.generateFrameNumbers("magic1_2", {
            start: 0,
            end: 3,
            first: 0,
        }),
        frameRate: 20,
        repeat: -1,
    });
    this.anims.create({
        key: "magic2",
        frames: this.anims.generateFrameNumbers("magic2", {
            start: 0,
            end: 15,
        }),
        frameRate: 16,
        repeat: -1,
    });

    this.anims.create({
        key: "magic2_1",
        frames: this.anims.generateFrameNumbers("magic2_1", {
            start: 0,
            end: 15,
        }),
        frameRate: 16,
        repeat: -1,
    });

    this.anims.create({
        key: "magic2_1_1",
        frames: this.anims.generateFrameNumbers("magic2_1_1", {
            start: 0,
            end: 15,
        }),
        frameRate: 16,
        repeat: -1,
    });

    this.anims.create({
        key: "magic2_2",
        frames: this.anims.generateFrameNumbers("magic2_2", {
            start: 0,
            end: 15,
        }),
        frameRate: 16,
        repeat: -1,
    });

    this.anims.create({
        key: "magic2_2_1",
        frames: this.anims.generateFrameNumbers("magic2_2_1", {
            start: 3,
            end: 3,
            first: 0,
        }),
        frameRate: 1,
        repeat: -1,
    });

    this.anims.create({
        key: "magic3",
        frames: this.anims.generateFrameNumbers("magic3", {
            start: 0,
            end: 7,
            first: 0,
        }),
        frameRate: 20,
        repeat: -1,
    });

    this.anims.create({
        key: "magic3_1",
        frames: this.anims.generateFrameNumbers("magic3_1", {
            start: 0,
            end: 7,
            first: 0,
        }),
        frameRate: 20,
        repeat: -1,
    });
    this.anims.create({
        key: "magic3_2",
        frames: this.anims.generateFrameNumbers("magic3_2", {
            start: 0,
            end: 7,
            first: 0,
        }),
        frameRate: 20,
        repeat: -1,
    });
    this.anims.create({
        key: "magic4",
        frames: this.anims.generateFrameNumbers("magic4", {
            start: 0,
            end: 2,
            first: 0,
        }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: "magic4_1",
        frames: this.anims.generateFrameNumbers("magic4_1", {
            start: 0,
            end: 2,
            first: 0,
        }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: "magic4_2",
        frames: this.anims.generateFrameNumbers("magic4_2", {
            start: 0,
            end: 2,
            first: 0,
        }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: "magic5",
        frames: this.anims.generateFrameNumbers("magic5", {
            start: 0,
            end: 60,
            first: 0,
        }),
        frameRate: 200,
        repeat: -1,
    });

    this.anims.create({
        key: "magic5_1",
        frames: this.anims.generateFrameNumbers("magic5_1", {
            start: 0,
            end: 7,
            first: 0,
        }),
        frameRate: 50,
        repeat: -1,
    });
    this.anims.create({
        key: "magic5_2",
        frames: this.anims.generateFrameNumbers("magic5_2", {
            start: 0,
            end: 7,
            first: 0,
        }),
        frameRate: 50,
        repeat: -1,
    });
    this.anims.create({
        key: "magic5_3",
        frames: this.anims.generateFrameNumbers("magic5_3", {
            start: 0,
            end: 7,
            first: 0,
        }),
        frameRate: 50,
        repeat: -1,
    });
    fairySet[nowFairy].play(fairySet[nowFairy].idleKey, true);

    //player end

    // 홀 애니메이션

    this.anims.create({
        key: "new_hole",
        frames: this.anims.generateFrameNumbers("new_hole", {start: 0, end: 2}),
        frameRate: 6,
        repeat: -1,
    });

    this.anims.create({
        key: "hole_damage",
        frames: this.anims.generateFrameNumbers("new_hole", {start: 3, end: 7}),
        frameRate: 12,
        repeat: 0,
    });

    //cointext start
    // cointext = this.add.text(500, 20, 'coin: 0', {font: 'Bold 15px Arial', fill: '#fff', fontStyle: "strong"}).setScrollFactor(0);
    // cointext.setStroke('#000', 2);
    // cointext.setDepth(2);
    //cointext end

    //enemy start

    bossSet = this.physics.add.group();
    bossMagicSet = this.physics.add.group();
    monsterSet = this.physics.add.group();
    magics = this.physics.add.group();
    towerAttacks = this.physics.add.group();
    towerSkillAttacks = this.physics.add.group();
    mines = this.physics.add.group();

    // 임시 구멍
    hole = this.physics.add.sprite(0, 0, "new_hole").play("new_hole");
    hole.setScale(2.3);
    hw = hole.body.halfWidth;
    hh = hole.body.halfHeight;
    hole.setCircle(hw * 0.7, hh - hw * 0.7, hh - hw * 0.7);
    hole.hp = 500;
    hole.setDepth(1);
    ingameUi();

    this.physics.add.collider(player, bossSet, player.hitPlayer);
    this.physics.add.collider(bossSet, monsterSet);
    thisScene.physics.add.overlap(magics, bossSet, attack);
    thisScene.physics.add.overlap(bossMagicSet, player, player.hitPlayer);

    // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
    this.physics.add.collider(player, monsterSet, player.hitPlayer);
    thisScene.physics.add.overlap(magics, monsterSet, attack);
    // 만약 몬스터와 구멍이 닿았다면 (hitHole 함수 실행)
    thisScene.physics.add.overlap(hole, monsterSet, hitHole);
    thisScene.physics.add.overlap(hole, bossSet, destroyHole);
    //map start
    let snappedChunkX =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
    let snappedChunkY =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

    snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
    snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

    for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
        for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
            let existingChunk = getChunk(x, y);

            if (existingChunk == null) {
                let newChunk = new Chunk(this, x, y);
                chunks.push(newChunk);
            }
        }
    }
    for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];
        if (
            Phaser.Math.Distance.Between(
                snappedChunkX,
                snappedChunkY,
                chunk.x,
                chunk.y
            ) < 3
        ) {
            if (chunk !== null) {
                chunk.load();
            }
        } else {
            if (chunk !== null) {
                chunk.unload();
            }
        }
    }

    for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];

        if (
<<<<<<< HEAD
          monsterSet.children.entries[i].type == "follower" ||
          monsterSet.children.entries[i].type == "wave"
        ) {
          this.physics.moveToObject(
            monsterSet.children.entries[i],
            player,
            monsterSet.children.entries[i].velo
          );
        }
        // 몬스터가 홀에 도달하게 함
        else if (monsterSet.children.entries[i].type == "siege") {
          this.physics.moveToObject(
            monsterSet.children.entries[i],
            hole,
            monsterSet.children.entries[i].velo
          );
        }
      }
    }

    if (hole.hp <= 0) {
      $this.pause();
      updateHP();
      GameOver();
    }

    gameTimer++;
    UpdateTimer();

    // 플레이어 기준랜덤 위치에 몬스터 생성
    // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
    // monsterSpawn 초기값은 300
    if (gameTimer > 300 && gameTimer % monsterSpawn == 0) {
      // 1번 zombie
      enemySpawn(randomLocation);
      if (10800 < gameTimer && gameTimer <= 18000) {
<<<<<<< HEAD
<<<<<<< HEAD
        addMonster(this, "alien_plus", "swarm", 60, 60, monX, monY, "follower");
=======
        addMonster(this, "alienPlus", "alienPlus", 70, 55, monX, monY, "follower");
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
      } else if (18000 < gameTimer) {
        addMonster(
          this,
          "alien_plus",
          "swarm",
          120,
=======
        addMonster(
          this,
          "alienPlus",
          "alienPlus",
          80,
          60,
          monX,
          monY,
          "follower"
        );
      } else if (18000 < gameTimer) {
        addMonster(
          this,
          "alienPlus",
          "alienPlus",
          130,
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)
          75,
          monX,
          monY,
          "follower"
        );
      } else {
<<<<<<< HEAD
        addMonster(this, "alien", "swarm", 30, 50, monX, monY, "follower");
      }
    }
    if (gameTimer > 3600 && gameTimer % 180 == 0) {
      // 2번 worm
      siegeSpawn(randomLocation);
      if (21000 < gameTimer && gameTimer <= 34000) {
        addMonster(this, "worm_plus", "swarm", 100, 50, monX, monY, "siege");
      } else if (34000 < gameTimer) {
        addMonster(this, "worm_plus", "swarm", 160, 60, monX, monY, "siege");
      } else if (gameTimer <= 21000) {
        addMonster(this, "worm", "swarm", 40, 40, monX, monY, "siege");
      }
    }
    if (gameTimer > 7200 && gameTimer % 300 == 0) {
=======
        addMonster(this, "alien", "alien", 30, 45, monX, monY, "follower");
      }
    }
    if (gameTimer > 6000 && gameTimer % 240 === 0) {
      // 2번 worm
      siegeSpawn(randomLocation);
      if (12000 < gameTimer && gameTimer <= 18000) {
        addMonster(this, "wormPlus", "wormPlus", 100, 50, monX, monY, "siege");
      } else if (18000 < gameTimer) {
        addMonster(this, "wormPlus", "wormPlus", 160, 60, monX, monY, "siege");
      } else if (gameTimer <= 12000) {
        addMonster(this, "worm", "worm", 40, 40, monX, monY, "siege");
      }
    }
    if (gameTimer > 12000 && gameTimer % 300 === 0) {
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
      enemySpawn(randomLocation);
      addMonster(this, "sonic", "swarm", 150, 80, monX, monY, "follower");
    }
<<<<<<< HEAD
    if (gameTimer > 12000 && gameTimer % 600 == 0) {
=======
    if (gameTimer > 21000 && gameTimer % 600 === 0) {
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
      siegeSpawn(randomLocation);
      addMonster(this, "turtle", "swarm", 300, 30, monX, monY, "siege");
    }

<<<<<<< HEAD
    if (gameTimer > 16000 && gameTimer % 400 == 0) {
=======
    if (gameTimer > 18000 && gameTimer % 200 === 0) {
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
      enemySpawn(randomLocation);
      addMonster(this, "slime", "swarm", 240, 75, monX, monY, "follower");
    }
    // 몬스터 빅 웨이브
<<<<<<< HEAD
    if (gameTimer > 8000 && gameTimer < 8200 && gameTimer % 3 == 0) {
=======
    if (gameTimer === 7700) {
      messageBoss("빅 웨이브");
    }
    if (gameTimer === 19700) {
      messageBoss("빅 웨이브");
    }

    if (gameTimer > 8000 && gameTimer < 8300 && gameTimer % 3 === 0) {
>>>>>>> c2d4c9c (#1 :sparkles: 몬스터 알림 구현)
      enemySpawn(randomLocation);
      addMonster(this, "fly", "swarm", 10, 50, monX, monY, "wave");
    } else if (20000 < gameTimer && gameTimer < 21000 && gameTimer % 3 == 0) {
      enemySpawn(randomLocation);
<<<<<<< HEAD
      addMonster(this, "fly", "swarm", 100, 50, monX, monY, "wave");
=======
      addMonster(this, "flyPlus", "flyPlus", 100, 50, monX, monY, "wave");
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
    }

    // 스폰 주기
    if (gameTimer < 3600) {
      monsterSpawn = 90;
    } else if (3600 <= gameTimer && gameTimer < 10800) {
      monsterSpawn = 70;
    } else if (10800 <= gameTimer && gameTimer < 18000) {
      monsterSpawn = 50;
    } else if (18000 <= gameTimer) {
      monsterSpawn = 30;
    }

    // 보스

    // 슬라임
<<<<<<< HEAD
    if (gameTimer == 10800) {
      slime_king = new Boss(
=======
    if (gameTimer === 17400) {
      messageBoss("슬라임 킹");
    }

    if (gameTimer === 18000) {
      setSound.playSE(13);
      slimeKing = new Boss(
>>>>>>> c2d4c9c (#1 :sparkles: 몬스터 알림 구현)
        this,
<<<<<<< HEAD
        400,
        80,
        player.x + 300,
        player.y + 300,
        "slime_king",
        "swarm",
        5,
        1,
        "boss"
      );
      slime_king.setDepth(2);
      slime_king.anime();
      boss_active = true;
      bossSet.add(slime_king);
=======
        300,
        70,
        player.x + 500,
        player.y + 500,
        "slimeKing",
        "slimeKing",
        3,
        1,
        "boss"
      );
      slimeKing.setDepth(2);
      slimeKing.anime(player);
      bossActive = true;
      let mw = slimeKing.body.halfWidth;
      let mh = slimeKing.body.halfHeight;
    
      slimeKing.setCircle(mw, mh - mw, mh - mw);
      bossSet.add(slimeKing);
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
    }

    // 골렘
<<<<<<< HEAD
    if (gameTimer == 21000) {
=======
    if (gameTimer === 20400) {
      messageBoss("골렘");
    }
    if (gameTimer === 21000) {
      setSound.playSE(14);
>>>>>>> c2d4c9c (#1 :sparkles: 몬스터 알림 구현)
      golem = new Boss(
        this,
        550,
        35,
        hole.x + 2000,
        hole.y - 2000,
        "golem",
        "swarm",
        8,
        10,
        "boss"
      );
      golem.setDepth(2);
<<<<<<< HEAD
      golem.anime();
      boss_active = true;
=======
      golem.anime(player);
      bossActive = true;

      let mw = golem.body.halfWidth;
      let mh = golem.body.halfHeight;
    
      golem.setCircle(mw, mh - mw, mh - mw);
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
      bossSet.add(golem);
    }

    // 불거인
<<<<<<< HEAD
    if (gameTimer == 28000) {
      fire_giant = new Boss(
=======
    if (gameTimer === 27400) {
      messageBoss("불거인");
    }
    if (gameTimer === 28000) {
      setSound.playSE(15);

      fireGiant = new Boss(
>>>>>>> c2d4c9c (#1 :sparkles: 몬스터 알림 구현)
        this,
        500,
<<<<<<< HEAD
        30,
        player.x - 60,
        player.y - 60,
        "fire_giant",
        "swarm",
        1,
        10,
        "boss"
      );
      fire_giant.setDepth(6);
      fire_giant.anime();
      boss_active = true;
      boss_fire_giant_active = true;
      bossSet.add(fire_giant);
=======
        80,
        player.x - 1000,
        player.y - 1000,
        "fireGiant",
        "fireGiant",
        3,
        10,
        "boss"
      );
      fireGiant.setDepth(6);
      fireGiant.anime(player);
      bossActive = true;
      bossFireGiantActive = true;

      let mw = fireGiant.body.halfWidth;
      let mh = fireGiant.body.halfHeight;
    
      fireGiant.setCircle(mw, mh - mw, mh - mw);

      bossSet.add(fireGiant);
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
      fireGiantIndex = bossSet.children.entries.length - 1;
    }

    if (gameTimer == 28000) {
      fire_giant_aura = new Boss(
        this,
        10000,
        100,
        player.x - 60,
        player.y - 60,
        "fire_giant_aura",
        "swarm",
        1,
        10,
        "boss"
      );
<<<<<<< HEAD
      fire_giant_aura.setDepth(5);
      fire_giant_aura.anime();
      bossMagicSet.add(fire_giant_aura);
=======
      fireGiantAura.setDepth(5);
      fireGiantAura.anime(player);
      bossMagicSet.add(fireGiantAura);
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
    }

    if (boss_fire_giant_active) {
      let x = bossSet.children.entries[fireGiantIndex].x;
      let y = bossSet.children.entries[fireGiantIndex].y;

      let aura = new Boss(
        this,
        10000,
        100,
        x,
        y,
        "fire_giant_aura",
        "swarm",
        1 + (28000 - gameTimer) / 600,
        10,
        "boss"
      );
      bossMagicSet.children.entries[0].destroy();
      aura.setDepth(5);
      aura.anime(player);
      bossMagicSet.add(aura);
    }

    // 보스 이동 및 사망 체크
    if (boss_active) {
      for (let i = 0; i < bossSet.children.entries.length; i++) {
        if (bossSet.children.entries[i].invincible) {
          bossSet.children.entries[i].setTint(0xff0000);
        }
        if (bossSet.children.entries[i].bossSpiece != "golem") {
          this.physics.moveToObject(
            bossSet.children.entries[i],
            player,
            bossSet.children.entries[i].velo
          );
          if (bossSet.children.entries[i].bossSpiece == "fire_giant") {
            if (boss_fire_giant_active) {
              this.physics.moveToObject(
                bossMagicSet.children.entries[0],
                bossSet.children.entries[i],
                bossMagicSet.children.entries[0].velo
              );
            }
          }
        } else if (bossSet.children.entries[i].bossSpiece == "golem") {
          this.physics.moveToObject(
            bossSet.children.entries[i],
            hole,
            bossSet.children.entries[i].velo
          );
        }
        if (bossSet.children.entries[i].health <= 0 && bossSet.children.entries[i].bossSpecie !== "slimeKing") {
          for (let i = 0; i < 5; i++) {
            player.expUp();
          }
          if (bossSet.children.entries[i].bossSpiece != "slime_king") {
            global.coin += 10;
          } else global.coin += 2;
          if (bossSet.children.entries[i].bossSpiece == "slime_king") {
            slime_pattern(
              this,
              bossSet.children.entries[i].pt,
              bossSet.children.entries[i].x,
              bossSet.children.entries[i].y
            );
          }

          if (bossSet.children.entries[i].bossSpiece == "fire_giant") {
            bossMagicSet.children.entries[0].destroy();
            boss_fire_giant_active = false;
          }

          bossSet.children.entries[i].destroy();
          if (bossSet.children.entries.length == 0) {
            boss_active = false;
          }
        }
      }
    }

    for (let i = magics.length - 1; i >= 0; i--) {
      magics[i].timer++;
      if (magics[i].timer == magics[i].lifetime) {
        magics[i].destroy();
        magics.splice(i, 1);
      }
    }
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

=======
            Phaser.Math.Distance.Between(
                snappedChunkX,
                snappedChunkY,
                chunk.x,
                chunk.y
            ) < 3
        ) {
            if (chunk !== null) {
                chunk.load();
            }
        } else {
            if (chunk !== null) {
                chunk.unload();
            }
        }
    }

    this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);

    // 공격 맞은 후 일시 무적에 사용
    timer = this.time.addEvent({
        delay: 2000,
        callback: () => {
            player.invincible = false;
            player.body.checkCollision.none = false;
            player.setVisible(true);
        },
        loop: true,
    });

    // ============== 몬스터 스프라이트 애니메이션 목록 ==================
    this.anims.create({
        key: "alien",
        frames: this.anims.generateFrameNumbers("alien", {start: 9, end: 14}),
        frameRate: 3,
        repeat: -1, // -1은 무한 반복 의미
    });

    this.anims.create({
        key: "worm",
        frames: this.anims.generateFrameNumbers("worm", {start: 0, end: 2}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "alienPlus",
        frames: this.anims.generateFrameNumbers("alienPlus", {start: 9, end: 14}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "wormPlus",
        frames: this.anims.generateFrameNumbers("wormPlus", {start: 0, end: 2}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "sonic",
        frames: this.anims.generateFrameNumbers("sonic", {start: 0, end: 1}),
        frameRate: 4,
        repeat: -1,
    });

    this.anims.create({
        key: "turtle",
        frames: this.anims.generateFrameNumbers("turtle", {start: 0, end: 1}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "slime",
        frames: this.anims.generateFrameNumbers("slime", {start: 7, end: 14}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "fly",
        frames: this.anims.generateFrameNumbers("fly", {start: 0, end: 2}),
        frameRate: 3,
        repeat: -1,
    });
    // boss

    this.anims.create({
        key: "slimeKing",
        frames: this.anims.generateFrameNumbers("slimeKing", {start: 0, end: 2}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "golem",
        frames: this.anims.generateFrameNumbers("golem", {start: 0, end: 2}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "fireGiant",
        frames: this.anims.generateFrameNumbers("fireGiant", {start: 0, end: 2}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "monster_die",
        frames: this.anims.generateFrameNumbers("monster_die", {
            start: 0,
            end: 5,
        }),
        frameRate: 12,
        repeat: -1,
    });

    this.anims.create({
        key: "fireGiantAura",
        frames: this.anims.generateFrameNumbers("fireGiantAura", {
            start: 0,
            end: 5,
        }),
        frameRate: 12,
        repeat: -1,
    });
>>>>>>> 6734bfb (#3 :cat: 규냥)
    //enemy end

    //tower start

    //cattower animation start
    this.anims.create({
        key: "0_idle",
        frames: this.anims.generateFrameNumbers("catNone", {
            start: 0,
            end: 2,
        }),
        frameRate: 4,
        repeat: -1,
    });

    this.anims.create({
        key: "0_attack",
        frames: this.anims.generateFrameNumbers("catNone", {
            start: 3,
            end: 8,
        }),
        frameRate: 8,
        repeat: 0,
    });

    this.anims.create({
        key: "1_idle",
        frames: this.anims.generateFrameNumbers("catThunder", {
            start: 0,
            end: 2,
        }),
        frameRate: 4,
        repeat: -1,
    });

    this.anims.create({
        key: "1_attack",
        frames: this.anims.generateFrameNumbers("catThunder", {
            start: 3,
            end: 8,
        }),
        frameRate: 8,
        repeat: 0,
    });

    this.anims.create({
        key: "2_idle",
        frames: this.anims.generateFrameNumbers("catFire", {
            start: 0,
            end: 2,
        }),
        frameRate: 4,
        repeat: -1,
    });

    this.anims.create({
        key: "2_attack",
        frames: this.anims.generateFrameNumbers("catFire", {
            start: 3,
            end: 8,
        }),
        frameRate: 8,
        repeat: 0,
    });

    this.anims.create({
        key: "3_idle",
        frames: this.anims.generateFrameNumbers("catWater", {
            start: 0,
            end: 2,
        }),
        frameRate: 4,
        repeat: -1,
    });

    this.anims.create({
        key: "3_attack",
        frames: this.anims.generateFrameNumbers("catWater", {
            start: 3,
            end: 8,
        }),
        frameRate: 8,
        repeat: 0,
    });

    this.anims.create({
        key: "4_idle",
        frames: this.anims.generateFrameNumbers("catEarth", {
            start: 0,
            end: 2,
        }),
        frameRate: 4,
        repeat: -1,
    });

    this.anims.create({
        key: "4_attack",
        frames: this.anims.generateFrameNumbers("catEarth", {
            start: 3,
            end: 8,
        }),
        frameRate: 8,
        repeat: 0,
    });
<<<<<<< HEAD
    //cattower animation end
=======

    this.anims.create({
        key: "5_idle",
        frames: this.anims.generateFrameNumbers("catFinal", {
            start: 0,
            end: 2,
        }),
        frameRate: 4,
        repeat: -1,
    });

    this.anims.create({
        key: "5_attack",
        frames: this.anims.generateFrameNumbers("catFinal", {
            start: 3,
            end: 8,
        }),
        frameRate: 8,
        repeat: 0,
    });
//cattower animation end
>>>>>>> 5cde85b (:sparkles: coin 수정)

    towerLU = new CatTower(this, -140, -140, "0_idle", "can", "skill", 0);
    towerRU = new CatTower(this, 140, -140, "0_idle", "can", "skill", 0);
    towerLD = new CatTower(this, -140, 140, "0_idle", "can", "skill", 0);
    towerRD = new CatTower(this, 140, 140, "0_idle", "can", "skill", 0);
    towerLU.scale_Circle();
    towerRU.scale_Circle();
    towerLD.scale_Circle();
    towerRD.scale_Circle();

    towerLU.scale = 2;
    towerRU.scale = 2;
    towerLD.scale = 2;
    towerRD.scale = 2;

    towerLU.setDepth(1);
    towerRU.setDepth(1);
    towerLD.setDepth(1);
    towerRD.setDepth(1);

    //tower end

<<<<<<< HEAD
<<<<<<< HEAD
    //mine start
<<<<<<< HEAD
    for (let i = 0; i < mineCount; i++) {
        mine = new Mine(
            this,
            Math.random() * (EndMineRangeX - StartMineRangeX) + StartMineRangeX,
            Math.random() * (EndMineRangeY - StartMineRangeY) + StartMineRangeY,
            "mine"
        );
=======
    this.anims.create({
        key: "minecoin",
        frames: this.anims.generateFrameNumbers("mineani", {
            start: 0,
            end: 3,
        }),
        frameRate: 8,
        repeat: -1,
    });

    for (let i = 0; i < mineCount[mineshowtime]; i++) {
        let x =
            Math.random() *
            (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
            StartMineRangeX[mineshowtime];
        let y =
            Math.random() *
            (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
            StartMineRangeY[mineshowtime];
        mine = new Mine(this, x, y, "minecoin", 0);
>>>>>>> 5cde85b (:sparkles: coin 수정)
        mine.scale_Circle();
        mine.set_anime();
        mines.add(mine);
>>>>>>> ad327af (Update game.js)
    }
    //mine end

    // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##

    //navi start
    navi = this.add.image(64, 80, "navi").setScrollFactor(0).setScale(0.8);
    navi.setDepth(4);
    //navi end

=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
    //exp bar start
<<<<<<< HEAD
    expBar.clear();
=======
    expBar = this.add.graphics().setScrollFactor(0);
    expBarBG = this.add.graphics().setScrollFactor(0);
    expBar.setDepth(4);
    expBarBG.setDepth(3);

    this.cameras.main.ignore([expBar, expBarBG, navi]);
>>>>>>> e875625 (:bug: 리팩토링 오류 수정)

<<<<<<< HEAD
    //exp bar end
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
    console.log(UICam);
>>>>>>> 2e09e3c (#3 :sparkles: camera zoom and exp bar patch)
=======
>>>>>>> e875625 (:bug: 리팩토링 오류 수정)
    // hp bar start
    hpBar = this.add.graphics();
    hpBarBG = this.add.graphics();
    hpBar.setDepth(5);
    hpBarBG.setDepth(4);
    // hp bar end

<<<<<<< HEAD
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
=======
    this.cameras.main.setZoom(0.8);
    UICam.setZoom(1);
>>>>>>> 2e09e3c (#3 :sparkles: camera zoom and exp bar patch)
}

function update(time, delta) {

    frameTime += delta
    player.move();

    //  Health bar start
    hpBar.clear();

    hpBarBG.fillStyle(0xff0000);
    hpBarBG.fillRect(0, 0, 60, 10);

    hpBar.fillStyle(0x2ff40a);
    hpBar.fillRect(0, 0, 60 * (player.health / player.maxHealth), 10);

    hpBar.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
    hpBarBG.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
    // expBar.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
    // expBarBG.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
    // Health bar end
    if (frameTime > 16.5) {
        frameTime = 0;
<<<<<<< HEAD
    

    var snappedChunkX =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
    var snappedChunkY =
        this.chunkSize *
        this.tileSize *
        Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

    snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
    snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

    for (var x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
        for (var y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
            var existingChunk = getChunk(x, y);

            if (existingChunk == null) {
                var newChunk = new Chunk(this, x, y);
                chunks.push(newChunk);
            }
        }
    }
    for (var i = 0; i < chunks.length; i++) {
        var chunk = chunks[i];

        if (
            Phaser.Math.Distance.Between(
                snappedChunkX,
                snappedChunkY,
                chunk.x,
                chunk.y
            ) < 3
        ) {
            if (chunk !== null) {
                chunk.load();
            }
        } else {
            if (chunk !== null) {
                chunk.unload();
            }
        }
    }

    this.followPoint.x = player.x;
    this.followPoint.y = player.y;

    this.cameras.main.startFollow(player, false);
    //map end

    //navi start

    navi.rotation = Phaser.Math.Angle.Between(hole.x, hole.y, player.x, player.y);

    //navi end

    //player start
    changeSlot();
    normalAttackAS = fairySet[nowFairy].as;
    if (normalAttackTimer > normalAttackAS) {
        control = false;
    } else {
        normalAttackTimer++;
    }
    //mouse clicked
    if (mouse.leftButtonDown() && !control && fairySet[nowFairy].bombcount > 0) {
        magic = new Magic(this, fairySet[nowFairy]);
        magic.setDepth(2);
        this.physics.add.overlap(
            magic,
            monsterSet,
            fairySet[nowFairy].attack,
            null,
            this
        );
        fairySet[nowFairy].normalAttack(magic);
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
    for (let i = 0; i < 5; i++) {
        if (fairySet[i].timer < fairySet[i].skillCD) {
            fairySet[i].timer++;
        } else {
            fairySet[i].skillUse = false;
        }
    }

    if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
        fairySet[nowFairy].skillFire();
    }

<<<<<<< HEAD
    player.move();
<<<<<<< HEAD
=======
=======
>>>>>>> 6700b0c (#3 :sparkles: 요정 덜덜이 문제 해결)
    player.healCount++;
    if (player.healCount > player.maxHealCount) {
        player.healCount = 0;
        player.health += player.heal;
        if (player.health > player.maxHealth) {
            player.health = player.maxHealth;
        }
        console.log(player.health);
    }

    if (player.invincible) {
        hitTimer++;
        if (hitTimer >= 15) {
            hitTimer = 0;

            if (hitVisible) {
                hitVisible = false;
            } else {
                hitVisible = true;
            }

            player.setVisible(hitVisible);
        }
    }

>>>>>>> 2f19786 (#2 :sparkle: 불거인)
    //player end

    //enemy start

    // 몬스터가 유저 따라가게함
    if (monsterCount !== 0) {
        for (let i = 0; i < monsterSet.children.entries.length; i++) {
            if (monsterSet.children.entries[i].invincible){
                monsterSet.children.entries[i]
                .setTint(0xff0000)}

            if (monsterSet.children.entries[i].type == "follower" || monsterSet.children.entries[i].type == "wave") {
                this.physics.moveToObject(
                    monsterSet.children.entries[i],
                    player,
                    monsterSet.children.entries[i].velo
                );
            }
            // 몬스터가 홀에 도달하게 함
            else if (monsterSet.children.entries[i].type == "siege") {
                this.physics.moveToObject(
                    monsterSet.children.entries[i],
                    hole,
                    monsterSet.children.entries[i].velo
                );
            }
        }
    }

    if (hole.hp <= 0) {
        $this.pause();
        updateHP();
        gameover();
    }

<<<<<<< HEAD
<<<<<<< HEAD
    gameTimer++;
    Updatetimer();

    // 플레이어 기준랜덤 위치에 몬스터 생성
    // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
    // monsterSpawn 초기값은 300
    if (gameTimer > 300 && gameTimer % monsterSpawn == 0) {
        // 1번 zombie
        enemySpawn(randomLocation);
        if (10800 < gameTimer &&  gameTimer <= 18000)
        {addMonster(this, 'alien_plus', 'swarm',90,65,monX,monY,'follower')}
        else if (18000 < gameTimer){
            addMonster(this, 'alien_plus','swarm', 160, 75, monX,monY,'follower')}
        else {
        addMonster(this, "alien", "swarm", 30, 50, monX, monY, "follower");}
    }
    if (gameTimer > 3600 && gameTimer % 180 == 0) {
        // 2번 worm
        enemySpawn(randomLocation);
        if (21000 <gameTimer && gameTimer <= 34000 ){addMonster(this, 'worm_plus', 'swarm',100,50,monX,monY,'siege')}
        else if (34000 < gameTimer){addMonster(this,'worm_plus', 'swarm', 160, 60, monX,monY, 'siege')}
        else if (gameTimer <= 21000){addMonster(this, "worm", "swarm", 45, 40, monX, monY, "siege")};

    }
    if (gameTimer > 7200 && gameTimer % 300 == 0) {
        enemySpawn(randomLocation);
        addMonster(this, "sonic", "swarm", 150, 80, monX, monY, "follower");
    }
    if (gameTimer > 12000 && gameTimer % 600 == 0) {
        enemySpawn(randomLocation);
        addMonster(this, "turtle", "swarm", 300, 30, monX, monY, "siege");
    }

    if (gameTimer > 16000 && gameTimer % 400 == 0) {
        enemySpawn(randomLocation);
        addMonster(this, "slime", "swarm", 240, 75, monX, monY, "follower");
    }
    // 몬스터 빅 웨이브
    if (gameTimer >  8000 && gameTimer < 8200 && gameTimer % 3 == 0) {
        enemySpawn(randomLocation);
        addMonster(this, "fly", "swarm", 10, 50, monX, monY, "wave");
    }
    else if (20000<gameTimer && gameTimer < 21000 && gameTimer % 3 == 0){
        enemySpawn(randomLocation);
        addMonster(this, "fly", "swarm", 100, 50, monX, monY, "wave");
    }

    // 스폰 주기 
    if (gameTimer < 3600){
        monsterSpawn = 90
    }
    else if (3600 <=gameTimer && gameTimer < 7200){
        monsterSpawn = 60
    }
    else if (7200 <= gameTimer && gameTimer < 10800){
        monsterSpawn = 30
    }
    else if (10800 <= gameTimer){
        monsterSpawn = 15
    }
    

    // 보스

    // 슬라임
    if (gameTimer == 10800) {
        slime_king = new Boss(
            this,
            400,
            80,
            player.x + 300,
            player.y + 300,
            "slime_king",
            "swarm",
            5,
            1,
            "boss"
        );
        slime_king.setDepth(2);
        slime_king.anime();
        boss_active = true;
        bossSet.add(slime_king);
    }

    // 골렘
<<<<<<< HEAD
<<<<<<< HEAD
    if (gameTimer == 100) {
        golem = new Boss(
            this,
            500,
            100,
            player.x + 600,
            player.y - 600,
            "golem",
            "swarm",
            10,
            10,
            "boss"
        );
        golem.setDepth(2);
        golem.anime();
        boss_active = true;
        bossSet.add(golem);
    }
=======
  gameTimer++;
  Updatetimer();
=======
    gameTimer++;
    Updatetimer();
>>>>>>> 2f19786 (#2 :sparkle: 불거인)

    // 플레이어 기준랜덤 위치에 몬스터 생성
    // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
    if (gameTimer > 300 && gameTimer % 30 == 0) {
        // 1번 zombie
        enemySpawn(randomLocation);

        // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
        addMonster(this, "alien", "swarm", 10, 100, monX, monY, "follower");
        // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')
    }
    if (gameTimer > 1200 && gameTimer % 600 == 0) {
        // 2번 worm
        enemySpawn(randomLocation);
        addMonster(this, "worm", "swarm", 10, 70, monX, monY, "siege");

        // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
        // addMonster(this, 'worm_plus', 'worm_plus_anim',20,100,monX,monY,'follower')
    }
    if (gameTimer > 1500 && gameTimer % 300 == 0) {
        enemySpawn(randomLocation);
        addMonster(this, "sonic", "swarm", 5, 200, monX, monY, "follower");
    }
    if (gameTimer > 1800 && gameTimer % 900 == 0) {
        enemySpawn(randomLocation);
        addMonster(this, "turtle", "swarm", 100, 30, monX, monY, "siege");
    }

    if (gameTimer > 0 && gameTimer % 300 == 0) {
        enemySpawn(randomLocation);
        addMonster(this, "slime", "swarm", 10, 75, monX, monY, "follower");
    }
    // 몬스터 빅웨이브
    if (gameTimer > 600 && gameTimer < 1200 && gameTimer % 3 == 0) {
        // 1번 zombie
        enemySpawn(randomLocation);

        // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
        addMonster(this, "alien", "swarm", 10, 100, monX, monY, "follower");
        // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')
    }

    // 보스

    // 슬라임
    if (gameTimer == 1800) {
        slime_king = new Boss(
            this,
            200,
            80,
            player.x + 300,
            player.y + 300,
            "slime_king",
            "swarm",
            5,
            1,
            "boss"
        );
        slime_king.setDepth(2);
        slime_king.anime();
        boss_active = true;
        bossSet.add(slime_king);
    }

    // 골렘
    if (gameTimer == 3600) {
=======
    if (gameTimer == 30000) {
>>>>>>> 6d4c0a5 (#2 #3 :sparkles: 밸런스 조정)
=======
    if (gameTimer == 21000) {
>>>>>>> d41a882 (#2 :bug: 몬스터 밸런싱 v.1)
        golem = new Boss(
            this,
            500,
            30,
            player.x + 2000,
            player.y - 2000,
            "golem",
            "swarm",
            8,
            10,
            "boss"
        );
        golem.setDepth(2);
        golem.anime();
        boss_active = true;
        bossSet.add(golem);
    }

    // 불거인
    if (gameTimer == 28000) {
        fire_giant_aura = new Boss(this, 10000, 100, player.x - 600, player.y - 600, 'fire_giant_aura', 'swarm', 5, 10, 'boss')
        fire_giant_aura.setDepth(1);
        fire_giant_aura.anime();
        boss_fire_giant_active = true;
        bossMagicSet.add(fire_giant_aura);
    }
    if (gameTimer == 28000) {
        fire_giant = new Boss(this, 500, 30, player.x - 600, player.y - 600, 'fire_giant', 'swarm', 1, 10, 'boss')
        fire_giant.setDepth(2);
        fire_giant.anime();
        boss_active = true;
        bossSet.add(fire_giant);
    }
=======
>>>>>>> 4cde4e7 (#2 :bug: 불거인 오라 확대)

<<<<<<< HEAD
  // 골렘
  if (gameTimer == 3600) {
    golem = new Boss(
      this,
      500,
      100,
      player.x + 600,
      player.y - 600,
      "golem",
      "swarm",
      10,
      10,
      "boss"
    );
    golem.setDepth(2);
    golem.anime();
    boss_active = true;
    bossSet.add(golem);
  }
>>>>>>> 39825fe (#2 :recycle: 머지 충돌 해결)
=======
>>>>>>> 2f19786 (#2 :sparkle: 불거인)

        let snappedChunkX =
            this.chunkSize *
            this.tileSize *
            Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
        let snappedChunkY =
            this.chunkSize *
            this.tileSize *
            Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

        snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
        snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

        for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
            for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
                let existingChunk = getChunk(x, y);

                if (existingChunk == null) {
                    let newChunk = new Chunk(this, x, y);
                    chunks.push(newChunk);
                }
            }
        }
        for (let i = 0; i < chunks.length; i++) {
            let chunk = chunks[i];

            if (
                Phaser.Math.Distance.Between(
                    snappedChunkX,
                    snappedChunkY,
                    chunk.x,
                    chunk.y
                ) < 3
            ) {
                if (chunk !== null) {
                    chunk.load();
                }
            } else {
                if (chunk !== null) {
                    chunk.unload();
                }
            }
        }

        this.followPoint.x = player.x;
        this.followPoint.y = player.y;

        this.cameras.main.startFollow(player, false);
        UICam.startFollow(player, false);
        //map end

        //navi start

        navi.rotation = Phaser.Math.Angle.Between(hole.x, hole.y, player.x, player.y);

        //navi end

        //player start
        changeSlot();
        normalAttackAS = fairySet[nowFairy].as;
        if (normalAttackTimer > normalAttackAS) {
            control = false;
        } else {
            normalAttackTimer++;
        }
        //mouse clicked
        if (mouse.leftButtonDown() && !control && fairySet[nowFairy].bombCount > 0) {
            magic = new Magic(this, fairySet[nowFairy]);
            magic.setDepth(2);
            this.physics.add.overlap(
                magic,
                monsterSet,
                fairySet[nowFairy].attack,
                null,
                this
            );
            fairySet[nowFairy].normalAttack(magic);
        }

        for (let i = 0; i < 5; i++) {
            if (fairySet[i].timer < fairySet[i].skillCD) {
                fairySet[i].timer++;
            } else {
                fairySet[i].skillUse = false;
            }
        }

        if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
            fairySet[nowFairy].skillFire();
        }

        player.healCount++;
        if (player.healCount > player.maxHealCount) {
            player.healCount = 0;
            player.health += player.heal;
            if (player.health > player.maxHealth) {
                player.health = player.maxHealth;
            }
        }

        if (player.invincible) {
            hitTimer++;
            if (hitTimer >= 15) {
                hitTimer = 0;

                if (hitVisible) {
                    hitVisible = false;
                } else {
                    hitVisible = true;
                }

                player.setVisible(hitVisible);
            }
        }

        //player end

        //enemy start

        // 몬스터가 유저 따라가게함
        if (monsterCount !== 0) {
            for (let i = 0; i < monsterSet.children.entries.length; i++) {
                if (monsterSet.children.entries[i].invincible) {
                    monsterSet.children.entries[i]
                        .setTint(0xff0000)
                }

                if (monsterSet.children.entries[i].type === "follower" || monsterSet.children.entries[i].type === "wave") {
                    this.physics.moveToObject(
                        monsterSet.children.entries[i],
                        player,
                        monsterSet.children.entries[i].velocity
                    );
                }
                // 몬스터가 홀에 도달하게 함
                else if (monsterSet.children.entries[i].type === "siege") {
                    this.physics.moveToObject(
                        monsterSet.children.entries[i],
                        hole,
                        monsterSet.children.entries[i].velocity
                    );
                }
            }
        }

        if (hole.hp <= 0) {
            $this.pause();
            updateHP();
            GameOver();
        }

        gameTimer++;
        UpdateTimer();

        // 플레이어 기준랜덤 위치에 몬스터 생성
        // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
        // monsterSpawn 초기값은 300
        if (gameTimer > 300 && gameTimer % monsterSpawn === 0) {
            // 1번 zombie
            enemySpawn(randomLocation);
            if (10800 < gameTimer && gameTimer <= 18000) {
                addMonster(this, 'alienPlus', 'swarm', 60, 60, monX, monY, 'follower')
            } else if (18000 < gameTimer) {
                addMonster(this, 'alienPlus', 'swarm', 120, 75, monX, monY, 'follower')
            } else {
                addMonster(this, "alien", "swarm", 30, 50, monX, monY, "follower");
            }
        }
        if (gameTimer > 3600 && gameTimer % 180 === 0) {
            // 2번 worm
            siegeSpawn(randomLocation);
            if (21000 < gameTimer && gameTimer <= 34000) {
                addMonster(this, 'wormPlus', 'swarm', 100, 50, monX, monY, 'siege')
            } else if (34000 < gameTimer) {
                addMonster(this, 'wormPlus', 'swarm', 160, 60, monX, monY, 'siege')
            } else if (gameTimer <= 21000) {
                addMonster(this, "worm", "swarm", 40, 40, monX, monY, "siege")
            }
            ;

        }
        if (gameTimer > 7200 && gameTimer % 300 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "sonic", "swarm", 150, 80, monX, monY, "follower");
        }
        if (gameTimer > 12000 && gameTimer % 600 === 0) {
            siegeSpawn(randomLocation);
            addMonster(this, "turtle", "swarm", 300, 30, monX, monY, "siege");
        }

        if (gameTimer > 16000 && gameTimer % 400 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "slime", "swarm", 240, 75, monX, monY, "follower");
        }
        // 몬스터 빅 웨이브
        if (gameTimer > 8000 && gameTimer < 8200 && gameTimer % 3 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "fly", "swarm", 10, 50, monX, monY, "wave");
        } else if (20000 < gameTimer && gameTimer < 21000 && gameTimer % 3 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "fly", "swarm", 100, 50, monX, monY, "wave");
        }

        // 스폰 주기
        if (gameTimer < 3600) {
            monsterSpawn = 90
        } else if (3600 <= gameTimer && gameTimer < 7200) {
            monsterSpawn = 70
        } else if (7200 <= gameTimer && gameTimer < 10800) {
            monsterSpawn = 50
        } else if (10800 <= gameTimer) {
            monsterSpawn = 30
        }

<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
    //enemy end
=======
        // 보스
>>>>>>> 4cde4e7 (#2 :bug: 불거인 오라 확대)

        // 슬라임
        if (gameTimer === 10800) {
            slimeKing = new Boss(
                this,
                400,
                80,
                player.x + 300,
                player.y + 300,
                "slimeKing",
                "swarm",
                5,
                1,
                "boss"
            );
            slimeKing.setDepth(2);
            slimeKing.anime();
            bossActive = true;
            bossSet.add(slimeKing);
        }

        // 골렘
        if (gameTimer === 21000) {
            golem = new Boss(
                this,
                500,
                30,
                hole.x + 2000,
                hole.y - 2000,
                "golem",
                "swarm",
                8,
                10,
                "boss"
            );
            golem.setDepth(2);
            golem.anime();
            bossActive = true;
            bossSet.add(golem);
        }

        // 불거인
        if (gameTimer === 28000) {
            fireGiant = new Boss(this, 500, 30, player.x - 60, player.y - 60, 'fireGiant', 'swarm', 1, 10, 'boss')
            fireGiant.setDepth(6);
            fireGiant.anime();
            bossActive = true;
            bossFireGiantActive = true;
            bossSet.add(fireGiant);
            fireGiantIndex = bossSet.children.entries.length - 1;
        }

        if (gameTimer === 28000) {
            fireGiantAura = new Boss(this, 10000, 100, player.x - 60, player.y - 60, 'fireGiantAura', 'swarm', 1, 10, 'boss')
            fireGiantAura.setDepth(5);
            fireGiantAura.anime();
            bossMagicSet.add(fireGiantAura);
        }

        if (bossFireGiantActive) {
            let x = bossSet.children.entries[fireGiantIndex].x;
            let y = bossSet.children.entries[fireGiantIndex].y;

            let aura = new Boss(this, 10000, 100, x, y, 'fireGiantAura', 'swarm', 1 + (28000 - gameTimer) / 600, 10, 'boss')
            bossMagicSet.children.entries[0].destroy();
            aura.setDepth(5);
            aura.anime();
            bossMagicSet.add(aura);
        }

<<<<<<< HEAD
<<<<<<< HEAD
    //exp bar start
    expbar.clear();

<<<<<<< HEAD
    //  BG
    expbarBG.fillStyle(0x000000);
    expbarBG.fillRect(0, 0, this.cameras.main.worldView.width, 16); // x y 가로길이, 세로길이

    //  Health
=======
  //  Health bar start
  hpbar.clear();
=======
    //  Health bar start
    hpbar.clear();
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
=======
>>>>>>> ce245c6 (#3 :bug: 버그 수정)

        // 보스 이동 및 사망 체크
        if (bossActive) {
            for (let i = 0; i < bossSet.children.entries.length; i++) {
                if (bossSet.children.entries[i].invincible) {
                    bossSet.children.entries[i]
                        .setTint(0xff0000)
                }
                if (bossSet.children.entries[i].bossSpecie !== "golem") {
                    this.physics.moveToObject(
                        bossSet.children.entries[i],
                        player,
                        bossSet.children.entries[i].velocity
                    );
                    if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
                        if (bossFireGiantActive) {
                            this.physics.moveToObject(
                                bossMagicSet.children.entries[0],
                                bossSet.children.entries[i],
                                bossMagicSet.children.entries[0].velocity
                            );
                        }
                    }
                } else if (bossSet.children.entries[i].bossSpecie === "golem") {
                    this.physics.moveToObject(
                        bossSet.children.entries[i],
                        hole,
                        bossSet.children.entries[i].velocity
                    );
                }
                if (bossSet.children.entries[i].health <= 0) {
                    for (let i = 0; i < 5; i++) {
                        player.expUp()
                    }
                    if (bossSet.children.entries[i].bossSpecie !== 'slimeKing') {
                        global.coin += 10
                    } else (global.coin += 2)
                    if (bossSet.children.entries[i].bossSpecie === "slimeKing") {
                        slimePattern(
                            this,
                            bossSet.children.entries[i].pt,
                            bossSet.children.entries[i].x,
                            bossSet.children.entries[i].y
                        );
                    }

                    if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
                        bossMagicSet.children.entries[0].destroy();
                        bossFireGiantActive = false;
                    }

<<<<<<< HEAD
  //  BG
  expbarBG.fillStyle(0x000000);
  expbarBG.fillRect(0, 0, this.cameras.main.worldView.width, 16); // x y 가로길이, 세로길이


<<<<<<< HEAD
>>>>>>> 3e6dfa6 (#3 :sparkles: player 기능 구현)

>>>>>>> ad327af (Update game.js)
=======
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
    expbar.fillStyle(0xff0000);
    expbar.fillRect(
        0,
        0,
        this.cameras.main.worldView.width * (player.exp / player.maxExp),
        16
    );
<<<<<<< HEAD
    //exp bar end
<<<<<<< HEAD
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
  expbar.fillStyle(0xff0000);
  expbar.fillRect(
    0,
    0,
    this.cameras.main.worldView.width * (player.exp / player.maxExp),
    16
  );
  //exp bar end
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
=======
>>>>>>> ad327af (Update game.js)
=======
=======
                    bossSet.children.entries[i].destroy();
                    if (bossSet.children.entries.length === 0) {
                        bossActive = false;
                    }
                }
            }
        }

        for (let i = magics.length - 1; i >= 0; i--) {
            magics[i].timer++;
            if (magics[i].timer === magics[i].lifetime) {
                magics[i].destroy();
                magics.splice(i, 1);
            }
        }


        //enemy end

        //tower start

        towerLU.towerAttackTimer++;
        towerRU.towerAttackTimer++;
        towerLD.towerAttackTimer++;
        towerRD.towerAttackTimer++;

        towerLU.towerSkillAttackTimer++;
        towerRU.towerSkillAttackTimer++;
        towerLD.towerSkillAttackTimer++;
        towerRD.towerSkillAttackTimer++;
        //tower end


        //exp bar start
        expBar.clear();

        //  BG
        expBarBG.fillStyle(0x000000);
        expBarBG.fillRect(0, 0, UICam.worldView.width, 16); // x y 가로길이, 세로길이


        expBar.fillStyle(0xff0000);
        expBar.fillRect(
            0,
            0,
            UICam.worldView.width * (player.exp / player.maxExp),
            16
        );
>>>>>>> 4cde4e7 (#2 :bug: 불거인 오라 확대)
    }    //exp bar end
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6af9760 (:recycle: 60fps 기준 시간 고정)
=======
    console.log(chunks);
<<<<<<< HEAD
    UICam.ignore([player, bossSet, fairySet, monsterSet, hpbar, hpbarBG, hole, towerLD, towerLU, towerRD, towerRU, magics, 
        chunks[0].tiles, chunks[1].tiles, chunks[2].tiles, chunks[3].tiles, chunks[4].tiles, chunks[5].tiles, chunks[6].tiles, 
        chunks[7].tiles, chunks[8].tiles, chunks[9].tiles, chunks[10].tiles, chunks[11].tiles, chunks[12].tiles, chunks[13].tiles, 
        chunks[14].tiles, chunks[15].tiles, mines, towerAttacks, towerSkillAttacks]);  
>>>>>>> 2e09e3c (#3 :sparkles: camera zoom and exp bar patch)
=======
    UICam.ignore([player, bossSet, fairySet, monsterSet, hpBar, hpBarBG, hole, towerLD, towerLU, towerRD, towerRU, magics,
        chunks[0].tiles, chunks[1].tiles, chunks[2].tiles, chunks[3].tiles, chunks[4].tiles, chunks[5].tiles, chunks[6].tiles,
        chunks[7].tiles, chunks[8].tiles, chunks[9].tiles, chunks[10].tiles, chunks[11].tiles, chunks[12].tiles, chunks[13].tiles,
        chunks[14].tiles, chunks[15].tiles, mines, towerAttacks, towerSkillAttacks]);
>>>>>>> aabc1ad (#3 :sparkles: 각종 코드 수정)
=======
    UICam.ignore([player, bossSet, fairySet, monsterSet, hpBar, hpBarBG, hole, towerLD, towerLU, towerRD, towerRU, magics, mines, towerAttacks, towerSkillAttacks]);
>>>>>>> e875625 (:bug: 리팩토링 오류 수정)
}


=======
    //  BG
    expBarBG.fillStyle(0x000000);
    expBarBG.fillRect(0, 0, UICam.worldView.width, 16); // x y 가로길이, 세로길이

    expBar.fillStyle(0xff0000);
    expBar.fillRect(
      0,
      0,
      UICam.worldView.width * (player.exp / player.maxExp),
      16
    );
  } //exp bar end
  UICam.ignore([
    player,
    bossSet,
    fairySet,
    monsterSet,
    hpBar,
    hpBarBG,
    hole,
    towerLD,
    towerLU,
    towerRD,
    towerRU,
    magics,
    mines,
    towerAttacks,
    towerSkillAttacks,
  ]);
<<<<<<< HEAD
}

>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
=======
    navi = this.add.image(58, 80, "navi").setScrollFactor(0).setScale(1);
    navi.setDepth(4);
    //navi end

>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
    //exp bar start
    expBar = this.add.graphics().setScrollFactor(0);
    expBarBG = this.add.graphics().setScrollFactor(0);
    expBar.setDepth(4);
    expBarBG.setDepth(3);

    this.cameras.main.ignore([expBar, expBarBG, navi]);

    //exp bar end
    // hp bar start
    hpBar = this.add.graphics();
    hpBarBG = this.add.graphics();
    hpBar.setDepth(5);
    hpBarBG.setDepth(4);
    // hp bar end

    this.cameras.main.setZoom(0.8);
    UICam.setZoom(1);
=======

  if (gameTimer % 3600 === 0) {
    ++mineshowtime;
=======
    //mine start
>>>>>>> 6734bfb (#3 :cat: 규냥)
    for (let i = 0; i < mineCount[mineshowtime]; i++) {
        let x =
            Math.random() *
            (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
            StartMineRangeX[mineshowtime];
        let y =
            Math.random() *
            (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
            StartMineRangeY[mineshowtime];
        mine = new Mine(this, x, y, "mine", 0);
        mine.scale_Circle();
        mines.add(mine);
    }
<<<<<<< HEAD
    console.log(mines);
  }
<<<<<<< HEAD
=======
    //mine end
=======
  // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)

  //navi start
  navi = this.add.image(58, 80, "navi").setScrollFactor(0).setScale(1);
  navi.setDepth(4);
  //navi end

  //exp bar start
  expBar = this.add.graphics().setScrollFactor(0);
  expBarBG = this.add.graphics().setScrollFactor(0);
  expBar.setDepth(4);
  expBarBG.setDepth(3);

  this.cameras.main.ignore([expBar, expBarBG, navi]);

  //exp bar end
  // hp bar start
  hpBar = this.add.graphics();
  hpBarBG = this.add.graphics();
  hpBar.setDepth(5);
  hpBarBG.setDepth(4);
  // hp bar end

  this.cameras.main.setZoom(0.8);
  UICam.setZoom(1);
}

function update(time, delta) {
<<<<<<< HEAD
<<<<<<< HEAD
    for (let i = 0; i < 5; i++) {
        if (fairySet[i].timer < fairySet[i].skillCD) {
            fairySet[i].timer++;
            if (fairySet[i].skillUse === true) {
                useSkill(i);
            }
        } else {
            if (fairySet[i].skillUse === true) {
                fairySet[i].skillUse = false;
                canSkill(i);
            }
        }
    }

    if (
        cursors.skill.isDown &&
        fairySet[nowFairy].isSkill &&
        !fairySet[nowFairy].skillUse
    ) {
        fairySet[nowFairy].skillFire();
        // fairySet[nowFairy].skillUse = true;
    }

    frameTime += delta;
    player.move();
    //  Health bar start
    hpBar.clear();

    hpBarBG.fillStyle(0xff0000);
    hpBarBG.fillRect(0, 0, 60, 10);

    hpBar.fillStyle(0x2ff40a);
    hpBar.fillRect(0, 0, 60 * (player.health / player.maxHealth), 10);

    hpBar.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
    hpBarBG.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
    // expBar.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
    // expBarBG.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
    // Health bar end
    if (frameTime > 16.5) {
        frameTime = 0;

        let snappedChunkX =
            this.chunkSize *
            this.tileSize *
            Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
        let snappedChunkY =
            this.chunkSize *
            this.tileSize *
            Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

        snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
        snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

        for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
            for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
                let existingChunk = getChunk(x, y);

                if (existingChunk == null) {
                    let newChunk = new Chunk(this, x, y);
                    chunks.push(newChunk);
                }
            }
        }
        for (let i = 0; i < chunks.length; i++) {
            let chunk = chunks[i];

            if (
                Phaser.Math.Distance.Between(
                    snappedChunkX,
                    snappedChunkY,
                    chunk.x,
                    chunk.y
                ) < 3
            ) {
                if (chunk !== null) {
                    chunk.load();
                }
            } else {
                if (chunk !== null) {
                    chunk.unload();
                }
            }
        }

        this.followPoint.x = player.x;
        this.followPoint.y = player.y;

        this.cameras.main.startFollow(player, false);
        UICam.startFollow(player, false);
        //map end

        //navi start

        navi.rotation = Phaser.Math.Angle.Between(
            hole.x,
            hole.y,
            player.x,
            player.y
        );

        //navi end

        //player start
        changeSlot();
        normalAttackAS = fairySet[nowFairy].as;
        if (normalAttackTimer > normalAttackAS) {
            control = false;
        } else {
            normalAttackTimer++;
        }
        //mouse clicked
        if (
            mouse.leftButtonDown() &&
            !control &&
            fairySet[nowFairy].bombCount > 0
        ) {
            magic = new Magic(this, fairySet[nowFairy]);
            magic.setDepth(2);
            this.physics.add.overlap(
                magic,
                monsterSet,
                fairySet[nowFairy].attack,
                null,
                this
            );
            fairySet[nowFairy].normalAttack(magic);
        }

        for (let i = 0; i < 5; i++) {
            if (fairySet[i].timer < fairySet[i].skillCD) {
                fairySet[i].timer++;
            } else {
                fairySet[i].skillUse = false;
            }
        }

        if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
            fairySet[nowFairy].skillFire();
        }

        player.healCount++;
        if (player.healCount > player.maxHealCount) {
            player.healCount = 0;
            player.health += player.heal;
            if (player.health > player.maxHealth) {
                player.health = player.maxHealth;
            }
        }

        if (player.invincible) {
            hitTimer++;
            if (hitTimer >= 15) {
                hitTimer = 0;

                if (hitVisible) {
                    hitVisible = false;
                } else {
                    hitVisible = true;
                }

                player.setVisible(hitVisible);
            }
        }

        //player end

        //enemy start

        // 몬스터가 유저 따라가게함
        if (monsterCount !== 0) {
            for (let i = 0; i < monsterSet.children.entries.length; i++) {
                if (monsterSet.children.entries[i].invincible) {
                    monsterSet.children.entries[i].setTint(0xff0000);
                }

                if (
                    monsterSet.children.entries[i].type === "follower" ||
                    monsterSet.children.entries[i].type === "wave"
                ) {
                    this.physics.moveToObject(
                        monsterSet.children.entries[i],
                        player,
                        monsterSet.children.entries[i].velocity
                    );
                }
                // 몬스터가 홀에 도달하게 함
                else if (monsterSet.children.entries[i].type === "siege") {
                    this.physics.moveToObject(
                        monsterSet.children.entries[i],
                        hole,
                        monsterSet.children.entries[i].velocity
                    );
                }
            }
        }

        if (hole.hp <= 0) {
            $this.pause();
            updateHP();
            GameOver();
        }

        gameTimer++;
        UpdateTimer();

        // 플레이어 기준랜덤 위치에 몬스터 생성
        // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
        // monsterSpawn 초기값은 300
        if (gameTimer > 300 && gameTimer % monsterSpawn === 0) {
            // 1번 zombie
            enemySpawn(randomLocation);
            if (10800 < gameTimer && gameTimer <= 18000) {
                addMonster(
                    this,
                    "alienPlus",
                    "alienPlus",
                    70,
                    55,
                    monX,
                    monY,
                    "follower"
                );
            } else if (18000 < gameTimer) {
                addMonster(
                    this,
                    "alienPlus",
                    "alienPlus",
                    130,
                    75,
                    monX,
                    monY,
                    "follower"
                );
            } else {
                addMonster(this, "alien", "alien", 30, 45, monX, monY, "follower");
            }
        }
        if (gameTimer > 6000 && gameTimer % 240 === 0) {
            // 2번 worm
            siegeSpawn(randomLocation);
            if (12000 < gameTimer && gameTimer <= 18000) {
                addMonster(this, "wormPlus", "wormPlus", 100, 50, monX, monY, "siege");
            } else if (18000 < gameTimer) {
                addMonster(this, "wormPlus", "wormPlus", 160, 60, monX, monY, "siege");
            } else if (gameTimer <= 12000) {
                addMonster(this, "worm", "worm", 40, 40, monX, monY, "siege");
            }
        }
        if (gameTimer > 12000 && gameTimer % 300 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "sonic", "sonic", 150, 80, monX, monY, "follower");
        }
        if (gameTimer > 21000 && gameTimer % 600 === 0) {
            siegeSpawn(randomLocation);
            addMonster(this, "turtle", "turtle", 300, 50, monX, monY, "siege");
        }

        if (gameTimer > 18000 && gameTimer % 200 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "slime", "slime", 240, 75, monX, monY, "follower");
        }
        // 몬스터 빅 웨이브
        if (gameTimer === 7700) {
            messageBoss("빅 웨이브");
        }
        if (gameTimer === 19700) {
            messageBoss("빅 웨이브");
        }

        if (gameTimer > 8000 && gameTimer < 8300 && gameTimer % 3 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "fly", "fly", 10, 50, monX, monY, "wave");
        } else if (20000 < gameTimer && gameTimer < 21000 && gameTimer % 3 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "fly", "fly", 100, 50, monX, monY, "wave");
        }

        // 스폰 주기
        if (gameTimer < 4200) {
            monsterSpawn = 90;
        } else if (4200 <= gameTimer && gameTimer < 11000) {
            monsterSpawn = 60;
        } else if (11000 <= gameTimer && gameTimer < 23000) {
            monsterSpawn = 30;
        } else if (23000 <= gameTimer) {
            monsterSpawn = 15;
        }

        // 보스

        // 슬라임
        if (gameTimer === 17400) {
            messageBoss("슬라임 킹");
        }

        if (gameTimer === 18000) {
            if (ChoiceCat === 5) {
                let rand = Math.floor(Math.random() * 20);
                setSound.playSE(rand);
            } else {
                setSound.playSE(13);
            }
            slimeKing = new Boss(
                this,
                300,
                70,
                player.x + 500,
                player.y + 500,
                "slimeKing",
                "slimeKing",
                3,
                1,
                "boss"
            );
            slimeKing.setDepth(2);
            slimeKing.anime(player);
            bossActive = true;
            let mw = slimeKing.body.halfWidth;
            let mh = slimeKing.body.halfHeight;

            slimeKing.setCircle(mh / 2, mw - mh / 2, mw);
            bossSet.add(slimeKing);
        }

        // 골렘
        if (gameTimer === 20400) {
            messageBoss("골렘");
        }
        if (gameTimer === 21000) {
          if (ChoiceCat === 5) {
            let rand = Math.floor(Math.random() * 20);
            setSound.playSE(rand);
          } else {
            setSound.playSE(14);
          }
            golem = new Boss(
                this,
                500,
                30,
                hole.x + 2000,
                hole.y - 2000,
                "golem",
                "golem",
                3,
                10,
                "boss"
            );
            golem.setDepth(2);
            golem.anime(player);
            bossActive = true;
            let mw = golem.body.halfWidth;
            let mh = golem.body.halfHeight;
            golem.setCircle(mh / 2, mw - mh / 2, mw);
            bossSet.add(golem);
        }

        // 불거인
        if (gameTimer === 27400) {
            messageBoss("불거인");
        }
        if (gameTimer === 28000) {
          if (ChoiceCat === 5) {
            let rand = Math.floor(Math.random() * 20);
            setSound.playSE(rand);
          } else {
            setSound.playSE(15);
          }
            fireGiant = new Boss(
                this,
                500,
                10,
                player.x - 60,
                player.y - 60,
                "fireGiant",
                "fireGiant",
                3,
                10,
                "boss"
            );
            let mw = fireGiant.body.halfWidth;
            let mh = fireGiant.body.halfHeight;
            fireGiant.setCircle(mh / 2, mw - mh / 2, mw);
            fireGiant.setDepth(6);
            fireGiant.anime(player);
            bossActive = true;
            bossFireGiantActive = true;
            bossSet.add(fireGiant);
            fireGiantIndex = bossSet.children.entries.length - 1;
        }

        if (gameTimer === 28000) {
            fireGiantAura = new Boss(
                this,
                10000,
                1000,
                player.x - 60,
                player.y - 60,
                "fireGiantAura",
                "fireGiantAura",
                1,
                10,
                "boss"
            );
            let mw = fireGiantAura.body.halfWidth;
            let mh = fireGiantAura.body.halfHeight;
            fireGiantAura.setCircle(mh / 2, mw - mh / 2, mw);
            fireGiantAura.setDepth(5);
            fireGiantAura.anime();
            bossMagicSet.add(fireGiantAura);
        }

        if (bossFireGiantActive && gameTimer % 120 == 0) {
            let x = bossSet.children.entries[fireGiantIndex].x;
            let y = bossSet.children.entries[fireGiantIndex].y;

            let aura = new Boss(
                this,
                10000,
                100,
                x,
                y,
                "fireGiantAura",
                "fireGiantAura",
                gameTimer / 120,
                10,
                "boss"
            );
            bossMagicSet.children.entries[0].destroy();
            let mw = aura.body.halfWidth;
            let mh = aura.body.halfHeight;
            aura.setCircle(mh / 2, mw - mh / 2, mw - mh / 2);
            aura.setDepth(5);
            aura.anime();
            bossMagicSet.add(aura);
        }

        // 보스 이동 및 사망 체크
        if (bossActive) {
            for (let i = 0; i < bossSet.children.entries.length; i++) {
                if (bossSet.children.entries[i].invincible) {
                    bossSet.children.entries[i].setTint(0xff0000);
                }
                if (bossSet.children.entries[i].bossSpecie !== "golem") {
                    this.physics.moveToObject(
                        bossSet.children.entries[i],
                        player,
                        bossSet.children.entries[i].velocity
                    );
                    if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
                        if (bossFireGiantActive) {
                            this.physics.moveToObject(
                                bossMagicSet.children.entries[0],
                                bossSet.children.entries[i],
                                bossMagicSet.children.entries[0].velocity
                            );
                        }
                    }
                } else if (bossSet.children.entries[i].bossSpecie === "golem") {
                    this.physics.moveToObject(
                        bossSet.children.entries[i],
                        hole,
                        bossSet.children.entries[i].velocity
                    );
                }
                if (bossSet.children.entries[i].health <= 0) {
                    for (let i = 0; i < 5; i++) {
                        player.expUp();
                    }
                    if (bossSet.children.entries[i].bossSpecie !== "slimeKing") {
                        global.coin += 10;
                    } else global.coin += 2;
                    if (bossSet.children.entries[i].bossSpecie === "slimeKing") {
                        slimePattern(
                            this,
                            bossSet.children.entries[i].pt,
                            bossSet.children.entries[i].x,
                            bossSet.children.entries[i].y
                        );
                    }

                    if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
                        bossMagicSet.children.entries[0].destroy();
                        bossFireGiantActive = false;
                    }

                    bossSet.children.entries[i].destroy();
                    if (bossSet.children.entries.length === 0) {
                        bossActive = false;
                    }
                }
            }
        }

        //enemy end

        //tower start

        towerLU.towerAttackTimer++;
        towerRU.towerAttackTimer++;
        towerLD.towerAttackTimer++;
        towerRD.towerAttackTimer++;

        towerLU.towerSkillAttackTimer++;
        towerRU.towerSkillAttackTimer++;
        towerLD.towerSkillAttackTimer++;
        towerRD.towerSkillAttackTimer++;
        //tower end

        //exp bar start
        expBar.clear();

        //  BG
        expBarBG.fillStyle(0x000000);
        expBarBG.fillRect(0, 0, UICam.worldView.width, 16); // x y 가로길이, 세로길이

        expBar.fillStyle(0xff0000);
        expBar.fillRect(
            0,
            0,
            UICam.worldView.width * (player.exp / player.maxExp),
            16
        );
    } //exp bar end
    UICam.ignore([
        player,
        bossSet,
        fairySet,
        monsterSet,
        hpBar,
        hpBarBG,
        hole,
        towerLD,
        towerLU,
        towerRD,
        towerRU,
        magics,
        mines,
        towerAttacks,
        towerSkillAttacks,
        bossMagicSet,
    ]);

    if (gameTimer % 3600 === 0) {
        ++mineshowtime;
        for (let i = 0; i < mineCount[mineshowtime]; i++) {
            let x =
                Math.random() *
                (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
                StartMineRangeX[mineshowtime];
            let y =
                Math.random() *
                (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
                StartMineRangeY[mineshowtime];
            mine = new Mine(this, x, y, "minecoin", 0);
            mine.scale_Circle();
            mine.set_anime();
            mines.add(mine);
        }
        console.log(mines);
    }

    if (!towerLU.anims.isPlaying) {
        console.log(towerLU.stone);
        towerLU.anims.play(`${towerLU.stone}_idle`, true);
    }
    if (!towerLD.anims.isPlaying) {
        towerLD.anims.play(`${towerLD.stone}_idle`, true);
    }
    if (!towerRU.anims.isPlaying) {
        towerRU.anims.play(`${towerRU.stone}_idle`, true);
    }
    if (!towerRD.anims.isPlaying) {
        towerRD.anims.play(`${towerRD.stone}_idle`, true);
    }

    if (!towerLU.anims.isPlaying) {
        console.log(towerLU.stone);
        towerLU.anims.play(`${towerLU.stone}_idle`, true);
    }
    if (!towerLD.anims.isPlaying) {
        towerLD.anims.play(`${towerLD.stone}_idle`, true);
    }
    if (!towerRU.anims.isPlaying) {
        towerRU.anims.play(`${towerRU.stone}_idle`, true);
    }
    if (!towerRD.anims.isPlaying) {
        towerRD.anims.play(`${towerRD.stone}_idle`, true);
    }
>>>>>>> 6734bfb (#3 :cat: 규냥)
}

if (!towerLU.anims.isPlaying) {
  towerLU.anims.play(`${towerLU.stone}_idle`, true);
}
if (!towerLD.anims.isPlaying) {
  towerLD.anims.play(`${towerLD.stone}_idle`, true);
}
if (!towerRU.anims.isPlaying) {
  towerRU.anims.play(`${towerRU.stone}_idle`, true);
}
if (!towerRD.anims.isPlaying) {
  towerRD.anims.play(`${towerRD.stone}_idle`, true);
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
}

function update(time, delta) {
    frameTime += delta;
    player.move();
    //  Health bar start
    hpBar.clear();
=======
  frameTime += delta;
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
  for (let i = 0; i < 5; i++) {
    if (fairySet[i].timer < fairySet[i].skillCD) {
      fairySet[i].timer++;
      if (fairySet[i].skillUse === true) {
        useSkill(i);
      }
    } else {
      if (fairySet[i].skillUse === true) {
        fairySet[i].skillUse = false;
        canSkill(i);
      }
    }
  }
>>>>>>> 89c00c0 (:bug: 파일덮어쓰기)

  if (
    cursors.skill.isDown &&
    fairySet[nowFairy].isSkill &&
    !fairySet[nowFairy].skillUse
  ) {
    fairySet[nowFairy].skillFire();
    // fairySet[nowFairy].skillUse = true;
  }

  frameTime += delta;
  player.move();
  //  Health bar start
  hpBar.clear();

  hpBarBG.fillStyle(0xff0000);
  hpBarBG.fillRect(0, 0, 60, 10);

  hpBar.fillStyle(0x2ff40a);
  hpBar.fillRect(0, 0, 60 * (player.health / player.maxHealth), 10);

  hpBar.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
  hpBarBG.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
  // expBar.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
  // expBarBG.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
  // Health bar end
  if (frameTime > 16.5) {
    frameTime = 0;

    let snappedChunkX =
      this.chunkSize *
      this.tileSize *
      Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
    let snappedChunkY =
      this.chunkSize *
      this.tileSize *
      Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

    snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
    snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

    for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
      for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
        let existingChunk = getChunk(x, y);

        if (existingChunk == null) {
          let newChunk = new Chunk(this, x, y);
          chunks.push(newChunk);
        }
      }
    }
    for (let i = 0; i < chunks.length; i++) {
      let chunk = chunks[i];

      if (
        Phaser.Math.Distance.Between(
          snappedChunkX,
          snappedChunkY,
          chunk.x,
          chunk.y
        ) < 3
      ) {
        if (chunk !== null) {
          chunk.load();
        }
      } else {
        if (chunk !== null) {
          chunk.unload();
        }
      }
    }

    this.followPoint.x = player.x;
    this.followPoint.y = player.y;

    this.cameras.main.startFollow(player, false);
    UICam.startFollow(player, false);
=======
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
    //map end
=======
>>>>>>> b36e339 (#7 codemode collider 처리)

  //tower start

  this.load.spritesheet("catNone", "images/cattower/towerNone.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catThunder", "images/cattower/towerThunder.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catFire", "images/cattower/towerFire.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catWater", "images/cattower/towerWater.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.spritesheet("catEarth", "images/cattower/towerEarth.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  this.load.image("can", "images/cattower/can.png");
  this.load.image("skill", "images/cattower/skill.png");
  //tower end

  //hole start
  this.load.spritesheet("new_hole", "images/hole/new_hole.png", {
    frameWidth: 100,
    frameHeight: 100,
  });
  //hole end

  //navi start
  this.load.image("navi", "images/navi/arrow.png");
  //navi end

  //mine start
  this.load.image("minearrow", "images/mine/boxarrow.png");
  this.load.image("mine", "images/mine/mine.png");
  //mine end

  //player start
  // 플레이어 스프라이트
  this.load.spritesheet("cat1", "images/cat/cat1.png", {
    frameWidth: 96,
    frameHeight: 100,
  });
  this.load.spritesheet("cat2", "images/cat/cat2.png", {
    frameWidth: 116,
    frameHeight: 112,
  });
  this.load.spritesheet("cat3", "images/cat/cat3.png", {
    frameWidth: 116,
    frameHeight: 112,
  });
  this.load.spritesheet("cat4", "images/cat/cat4.png", {
    frameWidth: 96,
    frameHeight: 100,
  });
  this.load.spritesheet("cat5", "images/cat/cat5.png", {
    frameWidth: 96,
    frameHeight: 100,
  });
  this.load.spritesheet("cat6", "images/cat/cat6.png", {
    frameWidth: 116,
    frameHeight: 112,
  });
  this.load.spritesheet("cat7", "images/cat/cat7.png", {
    frameWidth: 96,
    frameHeight: 100,
  });

  // 공격 스프라이트
  this.load.spritesheet("magic1", "images/attack/weapon/magic1.png", {
    frameWidth: 138,
    frameHeight: 138,
    endFrame: 4,
  });

  this.load.spritesheet("magic1_1", "images/attack/weapon/magic1_1.png", {
    frameWidth: 362,
    frameHeight: 362,
    endFrame: 7,
  });
  this.load.spritesheet("magic1_1_1", "images/attack/weapon/magic1_1_1.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 24,
  });
  this.load.spritesheet("magic1_2", "images/attack/weapon/magic1_2.png", {
    frameWidth: 138,
    frameHeight: 138,
    endFrame: 4,
  });
  this.load.spritesheet("magic1_2_1", "images/attack/weapon/magic1_2_1.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 24,
  });
  this.load.spritesheet("magic2", "images/attack/weapon/magic2.png", {
    frameWidth: 192,
    frameHeight: 108,
  });
  this.load.spritesheet("magic2_1", "images/attack/weapon/magic2_1.png", {
    frameWidth: 192,
    frameHeight: 108,
  });
  this.load.spritesheet("magic2_2", "images/attack/weapon/magic2_2.png", {
    frameWidth: 192,
    frameHeight: 108,
  });
  this.load.spritesheet("magic2_1_1", "images/attack/weapon/magic2_1_1.png", {
    frameWidth: 74,
    frameHeight: 74,
  });
  this.load.spritesheet("magic2_2_1", "images/attack/weapon/magic2_2_1.png", {
    frameWidth: 192,
    frameHeight: 108,
  });

  this.load.spritesheet("magic3", "images/attack/weapon/magic3.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 7,
  });
  this.load.spritesheet("magic3_1", "images/attack/weapon/magic3_1.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 7,
  });
  this.load.spritesheet("magic3_2", "images/attack/weapon/magic3_2.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 7,
  });
  this.load.spritesheet(
    "magic4",
    "images/attack/weapon/slime_attack1_48x48.png",
    {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 2,
    }
  );

  this.load.spritesheet(
    "magic4_1",
    "images/attack/weapon/slime_attack2_48x48.png",
    {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 2,
    }
  );

  this.load.spritesheet(
    "magic4_2",
    "images/attack/weapon/slime_attack3_48x48.png",
    {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 2,
    }
  );

  this.load.spritesheet(
    "magic5",
    "images/attack/weapon/8_protectioncircle_spritesheet.png",
    { frameWidth: 100, frameHeight: 100, endFrame: 61 }
  );

  this.load.spritesheet("magic5_1", "images/attack/weapon/magic5_1.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 8,
  });
  this.load.spritesheet("magic5_2", "images/attack/weapon/magic5_2.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 8,
  });
  this.load.spritesheet("magic5_3", "images/attack/weapon/magic5_3.png", {
    frameWidth: 74,
    frameHeight: 74,
    endFrame: 8,
  });
  // 스킬 스프라이트

  this.load.spritesheet(
    "skill4",
    "images/attack/weapon/10_weaponhit_spritesheet.png",
    {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 61,
    }
  );
  // 요정 스프라이트
  this.load.spritesheet("fairy1", "images/fairy/fairy1.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy1_1", "images/fairy/fairy1_yellow.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy1_2", "images/fairy/fairy1_red.png", {
    frameWidth: 150,
    frameHeight: 142,
  });

  this.load.spritesheet("fairy2", "images/fairy/fairy2.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy2_1", "images/fairy/fairy2_Red.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy2_2", "images/fairy/fairy2_black.png", {
    frameWidth: 230,
    frameHeight: 210,
  });

  this.load.spritesheet("fairy3", "images/fairy/fairy3.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

  this.load.spritesheet("fairy3_1", "images/fairy/fairy3_Red.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

  this.load.spritesheet("fairy3_2", "images/fairy/fairy3_master.png", {
    frameWidth: 140,
    frameHeight: 140,
  });

  this.load.spritesheet("fairy4", "images/fairy/fairy4.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy4_1", "images/fairy/fairy4_blue.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy4_2", "images/fairy/fairy4_green.png", {
    frameWidth: 136,
    frameHeight: 170,
  });

  this.load.spritesheet("fairy5", "images/fairy/fairy5.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  this.load.spritesheet("fairy5_1", "images/fairy/fairy5_red.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  this.load.spritesheet("fairy5_2", "images/fairy/fairy5_black.png", {
    frameWidth: 160,
    frameHeight: 190,
  });

  //player end

  //enemy start

  // 몬스터

  this.load.spritesheet("monster_die", "images/monster/monster_die2.png", {
    frameWidth: 64,
    frameHeight: 64,
  });

  this.load.spritesheet("alien", "images/monster/alien.png", {
    frameWidth: 20,
    frameHeight: 20,
  });

  this.load.spritesheet("worm", "images/monster/worm.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  this.load.spritesheet("sonic", "images/monster/sonic.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("turtle", "images/monster/turtle.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("slime", "images/monster/slime.png", {
    frameWidth: 16,
    frameHeight: 16,
  });

  this.load.spritesheet("fly", "images/monster/fly.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("alienPlus", "images/monster/alienPlus.png", {
    frameWidth: 20,
    frameHeight: 20,
  });

  this.load.spritesheet("wormPlus", "images/monster/wormPlus.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  //   보스
  this.load.spritesheet("slimeKing", "images/boss/slimeKing.png", {
    frameWidth: 96,
    frameHeight: 96,
  });

  this.load.spritesheet("golem", "images/boss/golem.png", {
    frameWidth: 96,
    frameHeight: 96,
  });

  this.load.spritesheet("fireGiant", "images/boss/fireGiant.png", {
    frameWidth: 96,
    frameHeight: 96,
  });

  this.load.spritesheet("fireGiantAura", "images/boss/fireGiantAura.png", {
    frameWidth: 64,
    frameHeight: 64,
  });
  //enemy end
}

function create() {
  this.input.setDefaultCursor("url(/images/cursor/aimNone.png), pointer");
  if (ChoiceCat === 4) {
    setSound.setBGM(5);
  } else {
    setSound.setBGM(1);
  }

  thisScene = this;
  //map start
  this.chunkSize = 8;
  this.tileSize = 300;
  this.cameraSpeed = 1;
  UICam = this.cameras.add(
    player.x,
    player.y,
    this.cameras.main.worldView.width,
    this.cameras.main.worldView.height
  );
  this.followPoint = new Phaser.Math.Vector2(
    this.cameras.main.worldView.x + this.cameras.main.worldView.width * 0.5,
    this.cameras.main.worldView.y + this.cameras.main.worldView.height * 0.5
  );
  // this.cameras.main.setBounds(0, 0, mapSize, mapSize);
  // this.physics.world.setBounds(0, 0, mapSize, mapSize);

  cursors = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S,
    left: Phaser.Input.Keyboard.KeyCodes.A,
    right: Phaser.Input.Keyboard.KeyCodes.D,
    slot1: Phaser.Input.Keyboard.KeyCodes.ONE,
    slot2: Phaser.Input.Keyboard.KeyCodes.TWO,
    slot3: Phaser.Input.Keyboard.KeyCodes.THREE,
    slot4: Phaser.Input.Keyboard.KeyCodes.FOUR,
    slot5: Phaser.Input.Keyboard.KeyCodes.FIVE,
    skill: Phaser.Input.Keyboard.KeyCodes.SPACE,
  });
  // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true);
  global.$this = this.scene;
  this.input.keyboard.on("keydown-" + "SHIFT", function (event) {
    initUpgrade();
  });
  //map end

  //player start
  cats = require("./jsons/cats.json");
  fairySet = require("./jsons/fairys.json");

  player = cats[catNumber];
  player = new Player(this, 1, 20, 20, "cat" + (ChoiceCat + 1));
  player.ability = ChoiceCat + 1;
  player.setScale(0.7);
  player.setDepth(2);
  let hw = player.body.halfWidth;
  let hh = player.body.halfHeight;

  player.setCircle(hw * 0.6, hh - hw * 0.6, hh - hw * 0.6);
  camera = this.cameras.main;
  input = this.input;
  mouse = input.mousePointer;
  this.input.on(
    "pointermove",
    function (pointer) {
      let cursor = pointer;
      let angle = Phaser.Math.Angle.Between(
        player.x,
        player.y,
        cursor.x + this.cameras.main.scrollX,
        cursor.y + this.cameras.main.scrollY
      );
    },
    this
  );

  // 플레이어, 요정 로딩
  global.wizard = fairySet[0] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    60,
    20,
    500,
    1,
    player,
    0.5,
    1
  );
  fairySet[0].initFairy1(0, 0);
  global.reaper = fairySet[1] = new Fairy(
    this,
    100,
    10,
    1,
    1,
    80,
    20,
    160,
    2,
    player,
    0.5,
    1
  );
  global.ninja = fairySet[2] = new Fairy(
    this,
    100,
    6,
    1,
    3,
    60,
    10,
    300,
    3,
    player,
    0.5,
    1
  );
  fairySet[2].initFairy3(0, 0);
  global.slime = fairySet[3] = new Fairy(
    this,
    7200,
    10,
    1,
    10,
    60,
    10,
    400,
    4,
    player,
    0.5,
    2
  );

  global.witch = fairySet[4] = new Fairy(
    this,
    600,
    5,
    1,
    3,
    40,
    10,
    500,
    5,
    player,
    0.5,
    1
  );
  global.bombs = this.physics.add.group();
  fairySet[4].initFairy5(0.5, 1);
  for (let i = 0; i < 5; i++) {
    fairySet[i].setDepth(2);
  }
  player.changeFairy(fairySet[0]);
  normalAttackAS = fairySet[0].as;
  // animation
  this.anims.create({
    key: "fairy1_idle",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_attack",
    frames: this.anims.generateFrameNumbers("fairy1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy1_1_idle",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_1_attack",
    frames: this.anims.generateFrameNumbers("fairy1_1", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy1_2_idle",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 12, end: 21 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy1_2_attack",
    frames: this.anims.generateFrameNumbers("fairy1_2", { start: 6, end: 10 }),
    frameRate: 12,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_idle",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_attack",
    frames: this.anims.generateFrameNumbers("fairy2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_1_idle",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_1_attack",
    frames: this.anims.generateFrameNumbers("fairy2_1", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy2_2_idle",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 10, end: 19 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy2_2_attack",
    frames: this.anims.generateFrameNumbers("fairy2_2", { start: 0, end: 8 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_idle",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_attack",
    frames: this.anims.generateFrameNumbers("fairy3", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_1_idle",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_1_attack",
    frames: this.anims.generateFrameNumbers("fairy3_1", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy3_2_idle",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 9, end: 18 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy3_2_attack",
    frames: this.anims.generateFrameNumbers("fairy3_2", { start: 0, end: 7 }),
    frameRate: 14,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_idle",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_attack",
    frames: this.anims.generateFrameNumbers("fairy4", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_1_idle",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_1_attack",
    frames: this.anims.generateFrameNumbers("fairy4_1", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy4_2_idle",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 7, end: 14 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy4_2_attack",
    frames: this.anims.generateFrameNumbers("fairy4_2", { start: 0, end: 5 }),
    frameRate: 10,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_idle",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_attack",
    frames: this.anims.generateFrameNumbers("fairy5", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_1_idle",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_1_attack",
    frames: this.anims.generateFrameNumbers("fairy5_1", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  this.anims.create({
    key: "fairy5_2_idle",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 15, end: 24 }),
    frameRate: 8,
    repeat: -1,
  });

  this.anims.create({
    key: "fairy5_2_attack",
    frames: this.anims.generateFrameNumbers("fairy5_2", { start: 0, end: 13 }),
    frameRate: 17,
    repeat: 0,
  });

  // 공격 애니메이션
  this.anims.create({
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", {
      start: 0,
      end: 3,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic1_1",
    frames: this.anims.generateFrameNumbers("magic1_1", {
      start: 0,
      end: 6,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });

  this.anims.create({
    key: "magic1_1_1",
    frames: this.anims.generateFrameNumbers("magic1_1_1", {
      start: 0,
      end: 24,
      first: 0,
    }),
    frameRate: 70,
    repeat: -1,
  });

  this.anims.create({
    key: "magic1_2_1",
    frames: this.anims.generateFrameNumbers("magic1_2_1", {
      start: 0,
      end: 24,
      first: 0,
    }),
    frameRate: 70,
    repeat: -1,
  });
  this.anims.create({
    key: "magic1_2",
    frames: this.anims.generateFrameNumbers("magic1_2", {
      start: 0,
      end: 3,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", {
      start: 0,
      end: 15,
    }),
    frameRate: 16,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_1",
    frames: this.anims.generateFrameNumbers("magic2_1", {
      start: 0,
      end: 15,
    }),
    frameRate: 16,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_1_1",
    frames: this.anims.generateFrameNumbers("magic2_1_1", {
      start: 0,
      end: 15,
    }),
    frameRate: 16,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_2",
    frames: this.anims.generateFrameNumbers("magic2_2", {
      start: 0,
      end: 15,
    }),
    frameRate: 16,
    repeat: -1,
  });

  this.anims.create({
    key: "magic2_2_1",
    frames: this.anims.generateFrameNumbers("magic2_2_1", {
      start: 3,
      end: 3,
      first: 0,
    }),
    frameRate: 1,
    repeat: -1,
  });

  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });

  this.anims.create({
    key: "magic3_1",
    frames: this.anims.generateFrameNumbers("magic3_1", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic3_2",
    frames: this.anims.generateFrameNumbers("magic3_2", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", {
      start: 0,
      end: 2,
      first: 0,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4_1",
    frames: this.anims.generateFrameNumbers("magic4_1", {
      start: 0,
      end: 2,
      first: 0,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4_2",
    frames: this.anims.generateFrameNumbers("magic4_2", {
      start: 0,
      end: 2,
      first: 0,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", {
      start: 0,
      end: 60,
      first: 0,
    }),
    frameRate: 200,
    repeat: -1,
  });

  this.anims.create({
    key: "magic5_1",
    frames: this.anims.generateFrameNumbers("magic5_1", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 50,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_2",
    frames: this.anims.generateFrameNumbers("magic5_2", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 50,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5_3",
    frames: this.anims.generateFrameNumbers("magic5_3", {
      start: 0,
      end: 7,
      first: 0,
    }),
    frameRate: 50,
    repeat: -1,
  });
  fairySet[nowFairy].play(fairySet[nowFairy].idleKey, true);

  //player end

  // 홀 애니메이션

  this.anims.create({
    key: "new_hole",
    frames: this.anims.generateFrameNumbers("new_hole", { start: 0, end: 2 }),
    frameRate: 6,
    repeat: -1,
  });

  this.anims.create({
    key: "hole_damage",
    frames: this.anims.generateFrameNumbers("new_hole", { start: 3, end: 7 }),
    frameRate: 12,
    repeat: 0,
  });

  //cointext start
  // cointext = this.add.text(500, 20, 'coin: 0', {font: 'Bold 15px Arial', fill: '#fff', fontStyle: "strong"}).setScrollFactor(0);
  // cointext.setStroke('#000', 2);
  // cointext.setDepth(2);
  //cointext end

  //enemy start

  bossSet = this.physics.add.group();
  bossMagicSet = this.physics.add.group();
  monsterSet = this.physics.add.group();
  magics = this.physics.add.group();
  towerAttacks = this.physics.add.group();
  towerSkillAttacks = this.physics.add.group();
  mines = this.physics.add.group();

  // 임시 구멍
  hole = this.physics.add.sprite(0, 0, "new_hole").play("new_hole");
  hole.setScale(2.3);
  hw = hole.body.halfWidth;
  hh = hole.body.halfHeight;
  hole.setCircle(hw * 0.7, hh - hw * 0.7, hh - hw * 0.7);
  hole.hp = 10;
  hole.setDepth(1);
  ingameUi();

  this.physics.add.collider(player, bossSet, player.hitPlayer);
  this.physics.add.collider(bossSet, monsterSet);
  thisScene.physics.add.overlap(magics, bossSet, attack);
  thisScene.physics.add.overlap(bossMagicSet, player, player.hitPlayer);

  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
  this.physics.add.collider(player, monsterSet, player.hitPlayer);
  thisScene.physics.add.overlap(magics, monsterSet, attack);
  // 만약 몬스터와 구멍이 닿았다면 (hitHole 함수 실행)
  thisScene.physics.add.overlap(hole, monsterSet, hitHole);
  thisScene.physics.add.overlap(hole, bossSet, destroyHole);
  //map start
  let snappedChunkX =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
  let snappedChunkY =
    this.chunkSize *
    this.tileSize *
    Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

  snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
  snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

  for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
    for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
      let existingChunk = getChunk(x, y);

      if (existingChunk == null) {
        let newChunk = new Chunk(this, x, y);
        chunks.push(newChunk);
      }
    }
  }
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];
    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];

    if (
      Phaser.Math.Distance.Between(
        snappedChunkX,
        snappedChunkY,
        chunk.x,
        chunk.y
      ) < 3
    ) {
      if (chunk !== null) {
        chunk.load();
      }
    } else {
      if (chunk !== null) {
        chunk.unload();
      }
    }
  }

  this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);

  // 공격 맞은 후 일시 무적에 사용
  timer = this.time.addEvent({
    delay: 2000,
    callback: () => {
      player.invincible = false;
      player.body.checkCollision.none = false;
      player.setVisible(true);
    },
    loop: true,
  });

  // ============== 몬스터 스프라이트 애니메이션 목록 ==================
  this.anims.create({
    key: "alien",
    frames: this.anims.generateFrameNumbers("alien", { start: 9, end: 14 }),
    frameRate: 3,
    repeat: -1, // -1은 무한 반복 의미
  });

  this.anims.create({
    key: "worm",
    frames: this.anims.generateFrameNumbers("worm", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "alienPlus",
    frames: this.anims.generateFrameNumbers("alienPlus", { start: 9, end: 14 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "wormPlus",
    frames: this.anims.generateFrameNumbers("wormPlus", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "sonic",
    frames: this.anims.generateFrameNumbers("sonic", { start: 0, end: 1 }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "turtle",
    frames: this.anims.generateFrameNumbers("turtle", { start: 0, end: 1 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "slime",
    frames: this.anims.generateFrameNumbers("slime", { start: 7, end: 14 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "fly",
    frames: this.anims.generateFrameNumbers("fly", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });
  // boss

  this.anims.create({
    key: "slimeKing",
    frames: this.anims.generateFrameNumbers("slimeKing", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "golem",
    frames: this.anims.generateFrameNumbers("golem", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "fireGiant",
    frames: this.anims.generateFrameNumbers("fireGiant", { start: 0, end: 2 }),
    frameRate: 3,
    repeat: -1,
  });

  this.anims.create({
    key: "monster_die",
    frames: this.anims.generateFrameNumbers("monster_die", {
      start: 0,
      end: 5,
    }),
    frameRate: 12,
    repeat: -1,
  });

  this.anims.create({
    key: "fireGiantAura",
    frames: this.anims.generateFrameNumbers("fireGiantAura", {
      start: 0,
      end: 5,
    }),
    frameRate: 12,
    repeat: -1,
  });
  //enemy end

  //tower start

  //cattower animation start
  this.anims.create({
    key: "0_idle",
    frames: this.anims.generateFrameNumbers("catNone", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "0_attack",
    frames: this.anims.generateFrameNumbers("catNone", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });

  this.anims.create({
    key: "1_idle",
    frames: this.anims.generateFrameNumbers("catThunder", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "1_attack",
    frames: this.anims.generateFrameNumbers("catThunder", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });

  this.anims.create({
    key: "2_idle",
    frames: this.anims.generateFrameNumbers("catFire", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "2_attack",
    frames: this.anims.generateFrameNumbers("catFire", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });

  this.anims.create({
    key: "3_idle",
    frames: this.anims.generateFrameNumbers("catWater", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "3_attack",
    frames: this.anims.generateFrameNumbers("catWater", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });

  this.anims.create({
    key: "4_idle",
    frames: this.anims.generateFrameNumbers("catEarth", {
      start: 0,
      end: 2,
    }),
    frameRate: 4,
    repeat: -1,
  });

  this.anims.create({
    key: "4_attack",
    frames: this.anims.generateFrameNumbers("catEarth", {
      start: 3,
      end: 8,
    }),
    frameRate: 8,
    repeat: 0,
  });
  //cattower animation end

  towerLU = new CatTower(this, -140, -140, "0_idle", "can", "skill", 0);
  towerRU = new CatTower(this, 140, -140, "0_idle", "can", "skill", 0);
  towerLD = new CatTower(this, -140, 140, "0_idle", "can", "skill", 0);
  towerRD = new CatTower(this, 140, 140, "0_idle", "can", "skill", 0);
  towerLU.scale_Circle();
  towerRU.scale_Circle();
  towerLD.scale_Circle();
  towerRD.scale_Circle();

  towerLU.scale = 2;
  towerRU.scale = 2;
  towerLD.scale = 2;
  towerRD.scale = 2;

  towerLU.setDepth(1);
  towerRU.setDepth(1);
  towerLD.setDepth(1);
  towerRD.setDepth(1);

  //tower end

  //mine start
  for (let i = 0; i < mineCount[mineshowtime]; i++) {
    let x =
      Math.random() *
        (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
      StartMineRangeX[mineshowtime];
    let y =
      Math.random() *
        (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
      StartMineRangeY[mineshowtime];
    mine = new Mine(this, x, y, "mine", 0);
    mine.scale_Circle();
    mines.add(mine);
  }
  //mine end

  // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##

  //navi start
  navi = this.add.image(58, 80, "navi").setScrollFactor(0).setScale(1);
  navi.setDepth(4);
  //navi end

  //exp bar start
  expBar = this.add.graphics().setScrollFactor(0);
  expBarBG = this.add.graphics().setScrollFactor(0);
  expBar.setDepth(4);
  expBarBG.setDepth(3);

  this.cameras.main.ignore([expBar, expBarBG, navi]);

  //exp bar end
  // hp bar start
  hpBar = this.add.graphics();
  hpBarBG = this.add.graphics();
  hpBar.setDepth(5);
  hpBarBG.setDepth(4);
  // hp bar end

  this.cameras.main.setZoom(0.8);
  UICam.setZoom(1);


  // 난이도
  if (global.ChoiceLevel === 1){
    difficulty_hp = 10;
    difficulty_spawn = 10;
    difficulty_vel = 10;
  }

  if (global.ChoiceLevel === 2){
    difficulty_hp = 20;
    difficulty_spawn = 20;
    difficulty_vel = 20;
  }
}

function update(time, delta) {
  for (let i = 0; i < 5; i++) {
    if (fairySet[i].timer < fairySet[i].skillCD) {
      fairySet[i].timer++;
      if (fairySet[i].skillUse === true) {
        useSkill(i);
      }
    } else {
      if (fairySet[i].skillUse === true) {
        fairySet[i].skillUse = false;
        canSkill(i);
      }
    }
  }

  if (
    cursors.skill.isDown &&
    fairySet[nowFairy].isSkill &&
    !fairySet[nowFairy].skillUse
  ) {
    fairySet[nowFairy].skillFire();
    // fairySet[nowFairy].skillUse = true;
  }

  frameTime += delta;
  player.move();
  //  Health bar start
  hpBar.clear();

  hpBarBG.fillStyle(0xff0000);
  hpBarBG.fillRect(0, 0, 60, 10);

  hpBar.fillStyle(0x2ff40a);
  hpBar.fillRect(0, 0, 60 * (player.health / player.maxHealth), 10);

  hpBar.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
  hpBarBG.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
  // expBar.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
  // expBarBG.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
  // Health bar end
  if (frameTime > 16.5) {
    frameTime = 0;

    let snappedChunkX =
      this.chunkSize *
      this.tileSize *
      Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
    let snappedChunkY =
      this.chunkSize *
      this.tileSize *
      Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

    snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
    snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

    for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
      for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
        let existingChunk = getChunk(x, y);

        if (existingChunk == null) {
          let newChunk = new Chunk(this, x, y);
          chunks.push(newChunk);
        }
      }
    }
    for (let i = 0; i < chunks.length; i++) {
      let chunk = chunks[i];

      if (
        Phaser.Math.Distance.Between(
          snappedChunkX,
          snappedChunkY,
          chunk.x,
          chunk.y
        ) < 3
      ) {
        if (chunk !== null) {
          chunk.load();
        }
      } else {
        if (chunk !== null) {
          chunk.unload();
        }
      }
    }

    this.followPoint.x = player.x;
    this.followPoint.y = player.y;

<<<<<<< HEAD
        if (
            Phaser.Math.Distance.Between(
                snappedChunkX,
                snappedChunkY,
                chunk.x,
                chunk.y
            ) < 3
        ) {
<<<<<<< HEAD
          this.physics.moveToObject(
            monsterSet.children.entries[i],
            player,
            monsterSet.children.entries[i].velocity
          );
        }
        // 몬스터가 홀에 도달하게 함
        else if (monsterSet.children.entries[i].type === "siege") {
          this.physics.moveToObject(
            monsterSet.children.entries[i],
            hole,
            monsterSet.children.entries[i].velocity
          );
        }
      }
    }

    if (hole.hp <= 0) {
      $this.pause();
      updateHP();
      GameOver();
    }

    gameTimer++;
    UpdateTimer();

    // 플레이어 기준랜덤 위치에 몬스터 생성
    // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
    // monsterSpawn 초기값은 300
    if (gameTimer > 300 && gameTimer % monsterSpawn === 0) {
      // 1번 zombie
      enemySpawn(randomLocation);
      if (10800 < gameTimer && gameTimer <= 18000) {
        addMonster(
          this,
          "alienPlus",
          "alienPlus",
          70,
          55,
          monX,
          monY,
          "follower"
        );
      } else if (18000 < gameTimer) {
        addMonster(
          this,
          "alienPlus",
          "alienPlus",
          130,
          75,
          monX,
          monY,
          "follower"
        );
      } else {
        addMonster(this, "alien", "alien", 30, 45, monX, monY, "follower");
      }
    }
    if (gameTimer > 6000 && gameTimer % 240 === 0) {
      // 2번 worm
      siegeSpawn(randomLocation);
      if (12000 < gameTimer && gameTimer <= 18000) {
        addMonster(this, "wormPlus", "wormPlus", 100, 50, monX, monY, "siege");
      } else if (18000 < gameTimer) {
        addMonster(this, "wormPlus", "wormPlus", 160, 60, monX, monY, "siege");
      } else if (gameTimer <= 12000) {
        addMonster(this, "worm", "worm", 40, 40, monX, monY, "siege");
      }
    }
    if (gameTimer > 12000 && gameTimer % 300 === 0) {
      enemySpawn(randomLocation);
      addMonster(this, "sonic", "sonic", 150, 80, monX, monY, "follower");
    }
    if (gameTimer > 21000 && gameTimer % 600 === 0) {
      siegeSpawn(randomLocation);
      addMonster(this, "turtle", "turtle", 300, 50, monX, monY, "siege");
    }

    if (gameTimer > 18000 && gameTimer % 200 === 0) {
      enemySpawn(randomLocation);
      addMonster(this, "slime", "slime", 240, 75, monX, monY, "follower");
    }
    // 몬스터 빅 웨이브
    if (gameTimer === 7700) {
      messageBoss("빅 웨이브");
    }
    if (gameTimer === 19700) {
      messageBoss("빅 웨이브");
    }

    if (gameTimer > 8000 && gameTimer < 8300 && gameTimer % 3 === 0) {
      enemySpawn(randomLocation);
      addMonster(this, "fly", "fly", 10, 50, monX, monY, "wave");
    } else if (20000 < gameTimer && gameTimer < 21000 && gameTimer % 3 === 0) {
      enemySpawn(randomLocation);
      addMonster(this, "fly", "fly", 100, 50, monX, monY, "wave");
    }

    // 스폰 주기
    if (gameTimer < 4200) {
      monsterSpawn = 90;
    } else if (4200 <= gameTimer && gameTimer < 11000) {
      monsterSpawn = 60;
    } else if (11000 <= gameTimer && gameTimer < 23000) {
      monsterSpawn = 30;
    } else if (23000 <= gameTimer) {
      monsterSpawn = 15;
    }

    // 보스

<<<<<<< HEAD
        //enemy start

        // 몬스터가 유저 따라가게함
        if (monsterCount !== 0) {
            for (let i = 0; i < monsterSet.children.entries.length; i++) {
                if (monsterSet.children.entries[i].invincible) {
                    monsterSet.children.entries[i].setTint(0xff0000);
                }

                if (
                    monsterSet.children.entries[i].type === "follower" ||
                    monsterSet.children.entries[i].type === "wave"
                ) {
                    this.physics.moveToObject(
                        monsterSet.children.entries[i],
                        player,
                        monsterSet.children.entries[i].velocity
                    );
                }
                // 몬스터가 홀에 도달하게 함
                else if (monsterSet.children.entries[i].type === "siege") {
                    this.physics.moveToObject(
                        monsterSet.children.entries[i],
                        hole,
                        monsterSet.children.entries[i].velocity
                    );
                }
            }
        }

        if (hole.hp <= 0) {
            $this.pause();
            updateHP();
            GameOver();
        }

        gameTimer++;
        UpdateTimer();

        // 플레이어 기준랜덤 위치에 몬스터 생성
        // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
        // monsterSpawn 초기값은 300
        if (gameTimer > 300 && gameTimer % monsterSpawn === 0) {
            // 1번 zombie
            enemySpawn(randomLocation);
            if (10800 < gameTimer && gameTimer <= 18000) {
                addMonster(this, "alienPlus", "alienPlus", 80, 60, monX, monY, "follower");
            } else if (18000 < gameTimer) {
                addMonster(this, "alienPlus", "alienPlus", 130, 75, monX, monY, "follower");
            } else {
                addMonster(this, "alien", "alien", 30, 50, monX, monY, "follower");
            }
        }
        if (gameTimer > 1200 && gameTimer % 120 === 0) {
            // 2번 worm
            siegeSpawn(randomLocation);
            if (10800 < gameTimer && gameTimer <= 18000) {
                addMonster(this, "wormPlus", "wormPlus", 100, 50, monX, monY, "siege");
            } else if (18000 < gameTimer) {
                addMonster(this, "wormPlus", "wormPlus", 160, 60, monX, monY, "siege");
            } else if (gameTimer <= 18000) {
                addMonster(this, "worm", "worm", 40, 40, monX, monY, "siege");
            }
        }
        if (gameTimer > 7200 && gameTimer % 300 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "sonic", "sonic", 150, 80, monX, monY, "follower");
        }
        if (gameTimer > 20000 && gameTimer % 600 === 0) {
            siegeSpawn(randomLocation);
            addMonster(this, "turtle", "turtle", 300, 50, monX, monY, "siege");
        }

        if (gameTimer > 16000 && gameTimer % 200 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "slime", "slime", 240, 75, monX, monY, "follower");
        }
        // 몬스터 빅 웨이브
        if (gameTimer > 8000 && gameTimer < 8300 && gameTimer % 3 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "fly", "fly", 10, 50, monX, monY, "wave");
        } else if (20000 < gameTimer && gameTimer < 21000 && gameTimer % 3 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "fly", "fly", 100, 50, monX, monY, "wave");
        }

        // 스폰 주기
        if (gameTimer < 4200) {
            monsterSpawn = 90;
        } else if (4200 <= gameTimer && gameTimer < 11000) {
            monsterSpawn = 60;
        } else if (11000 <= gameTimer && gameTimer < 23000) {
            monsterSpawn = 30;
        } else if (23000 <= gameTimer) {
            monsterSpawn = 15;
        }

        // 보스

        // 슬라임
        if (gameTimer === 10800) {
            setSound.playSE(13);

            slimeKing = new Boss(
                this,
                400,
                80,
                player.x + 300,
                player.y + 300,
                "slimeKing",
                "slimeKing",
                3,
                1,
                "boss"
            );
            slimeKing.setDepth(2);
            slimeKing.anime();
            let mw = slimeKing.body.halfWidth;
            let mh = slimeKing.body.halfHeight;
            slimeKing.setCircle(mh / 2, mw - (mh / 2), mw);
            bossActive = true;
            bossSet.add(slimeKing);
        }
=======
    // 슬라임
    if (gameTimer === 17400) {
      messageBoss("슬라임 킹");
    }

    if (gameTimer === 18000) {
      if (ChoiceCat === 5) {
        let rand = Math.floor(Math.random() * 20);
        setSound.playSE(rand);
      } else {
        setSound.playSE(13);
      }
      slimeKing = new Boss(
        this,
        300,
        70,
        player.x + 500,
        player.y + 500,
        "slimeKing",
        "slimeKing",
        3,
        1,
        "boss"
      );
      slimeKing.setDepth(2);
      slimeKing.anime(player);
      bossActive = true;
      let mw = slimeKing.body.halfWidth;
      let mh = slimeKing.body.halfHeight;

      slimeKing.setCircle(mh / 2, mw - mh / 2, mw);
      bossSet.add(slimeKing);
    }
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)

    // 골렘
    if (gameTimer === 20400) {
      messageBoss("골렘");
    }
    if (gameTimer === 21000) {
<<<<<<< HEAD
      setSound.playSE(14);

<<<<<<< HEAD
            golem = new Boss(
                this,
                500,
                30,
                hole.x + 2000,
                hole.y - 2000,
                "golem",
                "golem",
                3,
                10,
                "boss"
            );
            golem.setDepth(2);
            golem.anime();
            bossActive = true;
            let mw = golem.body.halfWidth;
            let mh = golem.body.halfHeight;
            golem.setCircle(mh / 2, mw - (mh / 2), mw);
            bossSet.add(golem);
        }

        // 불거인
        if (gameTimer === 28000) {
            setSound.playSE(15);

            fireGiant = new Boss(
                this,
                500,
                10,
                player.x - 60,
                player.y - 60,
                "fireGiant",
                "fireGiant",
                3,
                10,
                "boss"
            );
            let mw = fireGiant.body.halfWidth;
            let mh = fireGiant.body.halfHeight;
            fireGiant.setCircle(mh / 2, mw - (mh / 2), mw);
            fireGiant.setDepth(6);
            fireGiant.anime();
            bossActive = true;
            bossFireGiantActive = true;
            bossSet.add(fireGiant);
            fireGiantIndex = bossSet.children.entries.length - 1;
        }

        if (gameTimer === 28000) {
            fireGiantAura = new Boss(
                this,
                10000,
                1000,
                player.x - 60,
                player.y - 60,
                "fireGiantAura",
                "fireGiantAura",
                1,
                10,
                "boss"
            );
            let mw = fireGiantAura.body.halfWidth;
            let mh = fireGiantAura.body.halfHeight;
            fireGiantAura.setCircle(mh / 2, mw - (mh / 2), mw);
            fireGiantAura.setDepth(5);
            fireGiantAura.anime();
            bossMagicSet.add(fireGiantAura);
        }

        if (bossFireGiantActive && (gameTimer % 120 == 0)) {
            let x = bossSet.children.entries[fireGiantIndex].x;
            let y = bossSet.children.entries[fireGiantIndex].y;

            let aura = new Boss(
                this,
                10000,
                100,
                x,
                y,
                "fireGiantAura",
                "fireGiantAura",
                gameTimer / 120,
                10,
                "boss"
            );
            bossMagicSet.children.entries[0].destroy();
            let mw = aura.body.halfWidth;
            let mh = aura.body.halfHeight;
            aura.setCircle(mh / 2, mw - (mh / 2), mw - (mh / 2));
            aura.setDepth(5);
            aura.anime();
            bossMagicSet.add(aura);
        }

        // 보스 이동 및 사망 체크
        if (bossActive) {
            for (let i = 0; i < bossSet.children.entries.length; i++) {
                if (bossSet.children.entries[i].invincible) {
                    bossSet.children.entries[i].setTint(0xff0000);
                }
                if (bossSet.children.entries[i].bossSpecie !== "golem") {
                    this.physics.moveToObject(
                        bossSet.children.entries[i],
                        player,
                        bossSet.children.entries[i].velocity
                    );
                    if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
                        if (bossFireGiantActive) {
                            this.physics.moveToObject(
                                bossMagicSet.children.entries[0],
                                bossSet.children.entries[i],
                                bossMagicSet.children.entries[0].velocity
                            );
                        }
                    }
                } else if (bossSet.children.entries[i].bossSpecie === "golem") {
                    this.physics.moveToObject(
                        bossSet.children.entries[i],
                        hole,
                        bossSet.children.entries[i].velocity
                    );
                }
                if (bossSet.children.entries[i].health <= 0) {
                    for (let i = 0; i < 5; i++) {
                        player.expUp();
                    }
                    if (bossSet.children.entries[i].bossSpecie !== "slimeKing") {
                        global.coin += 10;
                    } else global.coin += 2;
                    if (bossSet.children.entries[i].bossSpecie === "slimeKing") {
                        slimePattern(
                            this,
                            bossSet.children.entries[i].pt,
                            bossSet.children.entries[i].x,
                            bossSet.children.entries[i].y
                        );
                    }

                    if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
                        bossMagicSet.children.entries[0].destroy();
                        bossFireGiantActive = false;
                    }

                    bossSet.children.entries[i].destroy();
                    if (bossSet.children.entries.length === 0) {
                        bossActive = false;
                    }
                }
=======
=======
      if (ChoiceCat === 5) {
        let rand = Math.floor(Math.random() * 20);
        setSound.playSE(rand);
      } else {
        setSound.playSE(14);
      }
>>>>>>> 89c00c0 (:bug: 파일덮어쓰기)
      golem = new Boss(
        this,
        500,
        30,
        hole.x + 2000,
        hole.y - 2000,
        "golem",
        "golem",
        3,
        10,
        "boss"
      );
      golem.setDepth(2);
      golem.anime(player);
      bossActive = true;
      let mw = golem.body.halfWidth;
      let mh = golem.body.halfHeight;
      golem.setCircle(mh / 2, mw - mh / 2, mw);
      bossSet.add(golem);
    }

    // 불거인
    if (gameTimer === 27400) {
      messageBoss("불거인");
    }
    if (gameTimer === 28000) {
      if (ChoiceCat === 5) {
        let rand = Math.floor(Math.random() * 20);
        setSound.playSE(rand);
      } else {
        setSound.playSE(15);
      }
      fireGiant = new Boss(
        this,
        500,
        10,
        player.x - 60,
        player.y - 60,
        "fireGiant",
        "fireGiant",
        3,
        10,
        "boss"
      );
      let mw = fireGiant.body.halfWidth;
      let mh = fireGiant.body.halfHeight;
      fireGiant.setCircle(mh / 2, mw - mh / 2, mw);
      fireGiant.setDepth(6);
      fireGiant.anime(player);
      bossActive = true;
      bossFireGiantActive = true;
      bossSet.add(fireGiant);
      fireGiantIndex = bossSet.children.entries.length - 1;
    }

    if (gameTimer === 28000) {
      fireGiantAura = new Boss(
        this,
        10000,
        1000,
        player.x - 60,
        player.y - 60,
        "fireGiantAura",
        "fireGiantAura",
        1,
        10,
        "boss"
      );
      let mw = fireGiantAura.body.halfWidth;
      let mh = fireGiantAura.body.halfHeight;
      fireGiantAura.setCircle(mh / 2, mw - mh / 2, mw);
      fireGiantAura.setDepth(5);
      fireGiantAura.anime();
      bossMagicSet.add(fireGiantAura);
    }

    if (bossFireGiantActive && gameTimer % 120 == 0) {
      let x = bossSet.children.entries[fireGiantIndex].x;
      let y = bossSet.children.entries[fireGiantIndex].y;

      let aura = new Boss(
        this,
        10000,
        100,
        x,
        y,
        "fireGiantAura",
        "fireGiantAura",
        gameTimer / 120,
        10,
        "boss"
      );
      bossMagicSet.children.entries[0].destroy();
      let mw = aura.body.halfWidth;
      let mh = aura.body.halfHeight;
      aura.setCircle(mh / 2, mw - mh / 2, mw - mh / 2);
      aura.setDepth(5);
      aura.anime();
      bossMagicSet.add(aura);
    }

    // 보스 이동 및 사망 체크
    if (bossActive) {
      for (let i = 0; i < bossSet.children.entries.length; i++) {
        if (bossSet.children.entries[i].invincible) {
          bossSet.children.entries[i].setTint(0xff0000);
        }
        if (bossSet.children.entries[i].bossSpecie !== "golem") {
          this.physics.moveToObject(
            bossSet.children.entries[i],
            player,
            bossSet.children.entries[i].velocity
          );
          if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
            if (bossFireGiantActive) {
              this.physics.moveToObject(
                bossMagicSet.children.entries[0],
                bossSet.children.entries[i],
                bossMagicSet.children.entries[0].velocity
              );
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
            if (chunk !== null) {
                chunk.load();
            }
        } else {
            if (chunk !== null) {
                chunk.unload();
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
            }
        }
=======
    this.cameras.main.startFollow(player, false);
    UICam.startFollow(player, false);
    //map end

    //navi start

    navi.rotation = Phaser.Math.Angle.Between(
      hole.x,
      hole.y,
      player.x,
      player.y
    );

    //navi end

    //player start
    changeSlot();
    normalAttackAS = fairySet[nowFairy].as;
    if (normalAttackTimer > normalAttackAS) {
      control = false;
    } else {
      normalAttackTimer++;
    }
    //mouse clicked
    if (
      mouse.leftButtonDown() &&
      !control &&
      fairySet[nowFairy].bombCount > 0
    ) {
      magic = new Magic(this, fairySet[nowFairy]);
      magic.setDepth(2);
      this.physics.add.overlap(
        magic,
        monsterSet,
        fairySet[nowFairy].attack,
        null,
        this
      );
      fairySet[nowFairy].normalAttack(magic);
>>>>>>> b36e339 (#7 codemode collider 처리)
    }

    for (let i = 0; i < 5; i++) {
      if (fairySet[i].timer < fairySet[i].skillCD) {
        fairySet[i].timer++;
      } else {
        fairySet[i].skillUse = false;
      }
    }

    if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
      fairySet[nowFairy].skillFire();
    }

    player.healCount++;
    if (player.healCount > player.maxHealCount) {
      player.healCount = 0;
      player.health += player.heal;
      if (player.health > player.maxHealth) {
        player.health = player.maxHealth;
      }
    }

    if (player.invincible) {
      hitTimer++;
      if (hitTimer >= 15) {
        hitTimer = 0;

        if (hitVisible) {
          hitVisible = false;
        } else {
          hitVisible = true;
        }

        player.setVisible(hitVisible);
      }
    }

    //player end

    //enemy start

    // 몬스터가 유저 따라가게함
    if (monsterCount !== 0) {
      for (let i = 0; i < monsterSet.children.entries.length; i++) {
        if (monsterSet.children.entries[i].invincible) {
          monsterSet.children.entries[i].setTint(0xff0000);
        }

        if (
          monsterSet.children.entries[i].type === "follower" ||
          monsterSet.children.entries[i].type === "wave"
        ) {
          this.physics.moveToObject(
            monsterSet.children.entries[i],
            player,
            monsterSet.children.entries[i].velocity + difficulty_vel
          );
        }
        // 몬스터가 홀에 도달하게 함
        else if (monsterSet.children.entries[i].type === "siege") {
          this.physics.moveToObject(
            monsterSet.children.entries[i],
            hole,
            monsterSet.children.entries[i].velocity + difficulty_vel
          );
        }
      }
    }

    if (hole.hp <= 0) {
      $this.pause();
      updateHP();
      GameOver();
    }

    gameTimer++;
    UpdateTimer();

    // 플레이어 기준랜덤 위치에 몬스터 생성
    // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
    // monsterSpawn 초기값은 300
    if (gameTimer > 300 && gameTimer % monsterSpawn === 0) {
      // 1번 zombie
      enemySpawn(randomLocation);
      if (10800 < gameTimer && gameTimer <= 18000) {
        addMonster(
          this,
          "alienPlus",
          "alienPlus",
          70 + difficulty_hp,
          55,
          monX,
          monY,
          "follower"
        );
      } else if (18000 < gameTimer) {
        addMonster(
          this,
          "alienPlus",
          "alienPlus",
          130 + difficulty_hp,
          75,
          monX,
          monY,
          "follower"
        );
      } else {
        addMonster(this, "alien", "alien", 30 + difficulty_hp, 45, monX, monY, "follower");
      }
    }
    if (gameTimer > 6000 && gameTimer % 240 === 0) {
      // 2번 worm
      siegeSpawn(randomLocation);
      if (12000 < gameTimer && gameTimer <= 18000) {
        addMonster(this, "wormPlus", "wormPlus", 100 + difficulty_hp, 50, monX, monY, "siege");
      } else if (18000 < gameTimer) {
        addMonster(this, "wormPlus", "wormPlus", 160 + difficulty_hp, 60, monX, monY, "siege");
      } else if (gameTimer <= 12000) {
        addMonster(this, "worm", "worm", 40 + difficulty_hp, 40, monX, monY, "siege");
      }
    }
    if (gameTimer > 12000 && gameTimer % 300 === 0) {
      enemySpawn(randomLocation);
      addMonster(this, "sonic", "sonic", 150 + difficulty_hp, 80, monX, monY, "follower");
    }
    if (gameTimer > 21000 && gameTimer % 600 === 0) {
      siegeSpawn(randomLocation);
      addMonster(this, "turtle", "turtle", 300 + difficulty_hp, 50, monX, monY, "siege");
    }

    if (gameTimer > 18000 && gameTimer % 200 === 0) {
      enemySpawn(randomLocation);
      addMonster(this, "slime", "slime", 240 + difficulty_hp, 75, monX, monY, "follower");
    }
    // 몬스터 빅 웨이브
    if (gameTimer === 7700) {
      messageBoss("빅 웨이브");
    }
    if (gameTimer === 19700) {
      messageBoss("빅 웨이브");
    }

    if (gameTimer > 8000 && gameTimer < 8300 && gameTimer % 3 === 0) {
      enemySpawn(randomLocation);
      addMonster(this, "fly", "fly", 10 + difficulty_hp, 50, monX, monY, "wave");
    } else if (20000 < gameTimer && gameTimer < 21000 && gameTimer % 3 === 0) {
      enemySpawn(randomLocation);
      addMonster(this, "fly", "fly", 100 + difficulty_hp, 50, monX, monY, "wave");
    }

    // 스폰 주기
    if (gameTimer < 4200) {
      monsterSpawn = 90 - difficulty_spawn;
    } else if (4200 <= gameTimer && gameTimer < 11000) {
      monsterSpawn = 60 - difficulty_spawn;
    } else if (11000 <= gameTimer && gameTimer < 23000) {
      monsterSpawn = 30 - difficulty_spawn;
    } else if (23000 <= gameTimer) {
      monsterSpawn = 15 - difficulty_spawn;
    }

    // 보스

    // 슬라임
    if (gameTimer === 17400) {
      messageBoss("슬라임 킹");
    }

    if (gameTimer === 18000) {
      if (ChoiceCat === 5) {
        let rand = Math.floor(Math.random() * 20);
        setSound.playSE(rand);
      } else {
        setSound.playSE(13);
      }
      slimeKing = new Boss(
        this,
        300 + difficulty_hp,
        70 + difficulty_vel,
        player.x + 500,
        player.y + 500,
        "slimeKing",
        "slimeKing",
        3,
        1,
        "boss"
      );
      slimeKing.setDepth(2);
      slimeKing.anime(player);
      bossActive = true;
      let mw = slimeKing.body.halfWidth;
      let mh = slimeKing.body.halfHeight;

      slimeKing.setCircle(mh / 2, mw - mh / 2, mw);
      bossSet.add(slimeKing);
    }

    // 골렘
    if (gameTimer === 20400) {
      messageBoss("골렘");
    }
    if (gameTimer === 21000) {
      if (ChoiceCat === 5) {
        let rand = Math.floor(Math.random() * 20);
        setSound.playSE(rand);
      } else {
        setSound.playSE(14);
      }
      golem = new Boss(
        this,
        500 + difficulty_hp,
        30 + difficulty_vel,
        hole.x + 2000,
        hole.y - 2000,
        "golem",
        "golem",
        3,
        10,
        "boss"
      );
      golem.setDepth(2);
      golem.anime(player);
      bossActive = true;
      let mw = golem.body.halfWidth;
      let mh = golem.body.halfHeight;
      golem.setCircle(mh / 2, mw - mh / 2, mw);
      bossSet.add(golem);
    }

    // 불거인
    if (gameTimer === 27400) {
      messageBoss("불거인");
    }
    if (gameTimer === 28000) {
      if (ChoiceCat === 5) {
        let rand = Math.floor(Math.random() * 20);
        setSound.playSE(rand);
      } else {
        setSound.playSE(15);
      }
      fireGiant = new Boss(
        this,
<<<<<<< HEAD
        500,
        10,
        player.x - 600,
        player.y - 600,
=======
        500 + difficulty_hp,
        50 + difficulty_vel,
        player.x - 60,
        player.y - 60,
>>>>>>> 0471dc6 (#1 :sparkles:  난이도 시스템 - 몬스터 구현)
        "fireGiant",
        "fireGiant",
        3,
        10,
        "boss"
      );
      let mw = fireGiant.body.halfWidth;
      let mh = fireGiant.body.halfHeight;
      fireGiant.setCircle(mh / 2, mw - mh / 2, mw);
      fireGiant.setDepth(6);
      fireGiant.anime(player);
      bossActive = true;
      bossFireGiantActive = true;
      bossSet.add(fireGiant);
      fireGiantIndex = bossSet.children.entries.length - 1;
    }

    if (gameTimer === 28000) {
      fireGiantAura = new Boss(
        this,
        10000,
        1000,
        player.x - 600,
        player.y - 600,
        "fireGiantAura",
        "fireGiantAura",
        1,
        10,
        "boss"
      );
      let mw = fireGiantAura.body.halfWidth;
      let mh = fireGiantAura.body.halfHeight;
      fireGiantAura.setCircle(mh / 2, mw - mh / 2, mw);
      fireGiantAura.setDepth(5);
      fireGiantAura.anime();
      bossMagicSet.add(fireGiantAura);
    }

    if (bossFireGiantActive && gameTimer % 120 === 0) {
      let x = bossSet.children.entries[fireGiantIndex].x;
      let y = bossSet.children.entries[fireGiantIndex].y;

      let aura = new Boss(
        this,
        10000,
        100,
        x,
        y,
        "fireGiantAura",
        "fireGiantAura",
        (gameTimer - 28000) / 120 + 1,
        10,
        "boss"
      );
      bossMagicSet.children.entries[0].destroy();
      let mw = aura.body.halfWidth;
      let mh = aura.body.halfHeight;
      aura.setCircle(mh / 2, mw - mh / 2, mw - mh / 2);
      aura.setDepth(5);
      aura.anime();
      bossMagicSet.add(aura);
    }

    // 보스 이동 및 사망 체크
    if (bossActive) {
      for (let i = 0; i < bossSet.children.entries.length; i++) {
        if (bossSet.children.entries[i].invincible) {
          bossSet.children.entries[i].setTint(0xff0000);
        }
        if (bossSet.children.entries[i].bossSpecie !== "golem") {
          this.physics.moveToObject(
            bossSet.children.entries[i],
            player,
            bossSet.children.entries[i].velocity
          );
          if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
            if (bossFireGiantActive) {
              this.physics.moveToObject(
                bossMagicSet.children.entries[0],
                bossSet.children.entries[i],
                bossMagicSet.children.entries[0].velocity
              );
            }
          }
        } else if (bossSet.children.entries[i].bossSpecie === "golem") {
          this.physics.moveToObject(
            bossSet.children.entries[i],
            hole,
            bossSet.children.entries[i].velocity
          );
        }
        if (bossSet.children.entries[i].health <= 0) {
          for (let i = 0; i < 5; i++) {
            player.expUp();
          }
          if (bossSet.children.entries[i].bossSpecie !== "slimeKing") {
            global.coin += 10;
          } else global.coin += 2;
          if (bossSet.children.entries[i].bossSpecie === "slimeKing") {
            slimePattern(
              this,
              bossSet.children.entries[i].pt,
              bossSet.children.entries[i].x,
              bossSet.children.entries[i].y
            );
          }

          if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
            bossMagicSet.children.entries[0].destroy();
            bossFireGiantActive = false;
          }

          bossSet.children.entries[i].destroy();
          if (bossSet.children.entries.length === 0) {
            bossActive = false;
          }
        }
      }
    }

    //enemy end

    //tower start

    towerLU.towerAttackTimer++;
    towerRU.towerAttackTimer++;
    towerLD.towerAttackTimer++;
    towerRD.towerAttackTimer++;

    towerLU.towerSkillAttackTimer++;
    towerRU.towerSkillAttackTimer++;
    towerLD.towerSkillAttackTimer++;
    towerRD.towerSkillAttackTimer++;
    //tower end

<<<<<<< HEAD
    //mine start
    for (let i = 0; i < mineCount[mineshowtime]; i++) {
        let x =
            Math.random() *
            (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
            StartMineRangeX[mineshowtime];
        let y =
            Math.random() *
            (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
            StartMineRangeY[mineshowtime];
        mine = new Mine(this, x, y, "mine", 0);
        mine.scale_Circle();
        mines.add(mine);
    }
    //mine end

<<<<<<< HEAD
<<<<<<< HEAD
    if (!towerLU.anims.isPlaying) {
      console.log(towerLU.stone);
      towerLU.anims.play(`${towerLU.stone}_idle`, true);
    }
    if (!towerLD.anims.isPlaying) {
      towerLD.anims.play(`${towerLD.stone}_idle`, true);
    }
    if (!towerRU.anims.isPlaying) {
      towerRU.anims.play(`${towerRU.stone}_idle`, true);
    }
    if (!towerRD.anims.isPlaying) {
      towerRD.anims.play(`${towerRD.stone}_idle`, true);
    }
<<<<<<< HEAD

=======
=======
  if (!towerLU.anims.isPlaying) {
    console.log(towerLU.stone);
    towerLU.anims.play(`${towerLU.stone}_idle`, true);
  }
  if (!towerLD.anims.isPlaying) {
    towerLD.anims.play(`${towerLD.stone}_idle`, true);
  }
  if (!towerRU.anims.isPlaying) {
    towerRU.anims.play(`${towerRU.stone}_idle`, true);
  }
  if (!towerRD.anims.isPlaying) {
    towerRD.anims.play(`${towerRD.stone}_idle`, true);
  }
>>>>>>> 89c00c0 (:bug: 파일덮어쓰기)

  if (!towerLU.anims.isPlaying) {
    console.log(towerLU.stone);
    towerLU.anims.play(`${towerLU.stone}_idle`, true);
<<<<<<< HEAD
=======
  }
  if (!towerLD.anims.isPlaying) {
    towerLD.anims.play(`${towerLD.stone}_idle`, true);
  }
  if (!towerRU.anims.isPlaying) {
    towerRU.anims.play(`${towerRU.stone}_idle`, true);
  }
  if (!towerRD.anims.isPlaying) {
    towerRD.anims.play(`${towerRD.stone}_idle`, true);
>>>>>>> 89c00c0 (:bug: 파일덮어쓰기)
  }
  if (!towerLD.anims.isPlaying) {
    towerLD.anims.play(`${towerLD.stone}_idle`, true);
  }
  if (!towerRU.anims.isPlaying) {
    towerRU.anims.play(`${towerRU.stone}_idle`, true);
  }
  if (!towerRD.anims.isPlaying) {
    towerRD.anims.play(`${towerRD.stone}_idle`, true);
  }
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)
=======
  }
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
    // ##보스 생성, 나중에 타이머 조건 넣고 업데이트에 넣기 ##

    //navi start
    navi = this.add.image(58, 80, "navi").setScrollFactor(0).setScale(1);
    navi.setDepth(4);
    //navi end

=======
>>>>>>> b36e339 (#7 codemode collider 처리)
    //exp bar start
    expBar.clear();

    //  BG
    expBarBG.fillStyle(0x000000);
    expBarBG.fillRect(0, 0, UICam.worldView.width, 16); // x y 가로길이, 세로길이

    expBar.fillStyle(0xff0000);
    expBar.fillRect(
      0,
      0,
      UICam.worldView.width * (player.exp / player.maxExp),
      16
    );
  } //exp bar end
  UICam.ignore([
    player,
    bossSet,
    fairySet,
    monsterSet,
    hpBar,
    hpBarBG,
    hole,
    towerLD,
    towerLU,
    towerRD,
    towerRU,
    magics,
    mines,
    towerAttacks,
    towerSkillAttacks,
    bossMagicSet,
  ]);

  if (gameTimer % 3600 === 0) {
    ++mineshowtime;
    for (let i = 0; i < mineCount[mineshowtime]; i++) {
      let x =
        Math.random() *
          (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
        StartMineRangeX[mineshowtime];
      let y =
        Math.random() *
          (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
        StartMineRangeY[mineshowtime];
      mine = new Mine(this, x, y, "mine", 0);
      mine.scale_Circle();
      mines.add(mine);
    }
    console.log(mines);
  }

  if (!towerLU.anims.isPlaying) {
    console.log(towerLU.stone);
    towerLU.anims.play(`${towerLU.stone}_idle`, true);
  }
  if (!towerLD.anims.isPlaying) {
    towerLD.anims.play(`${towerLD.stone}_idle`, true);
  }
  if (!towerRU.anims.isPlaying) {
    towerRU.anims.play(`${towerRU.stone}_idle`, true);
  }
  if (!towerRD.anims.isPlaying) {
    towerRD.anims.play(`${towerRD.stone}_idle`, true);
  }

<<<<<<< HEAD
    frameTime += delta;
    player.move();
    //  Health bar start
    hpBar.clear();

    hpBarBG.fillStyle(0xff0000);
    hpBarBG.fillRect(0, 0, 60, 10);

    hpBar.fillStyle(0x2ff40a);
    hpBar.fillRect(0, 0, 60 * (player.health / player.maxHealth), 10);

    hpBar.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
    hpBarBG.setPosition(Math.floor(player.x) - 30, Math.floor(player.y) + 40);
    // expBar.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
    // expBarBG.setPosition(Math.floor(player.x)-375, Math.floor(player.y) - 372);
    // Health bar end
    if (frameTime > 16.5) {
        frameTime = 0;

        let snappedChunkX =
            this.chunkSize *
            this.tileSize *
            Math.round(this.followPoint.x / (this.chunkSize * this.tileSize));
        let snappedChunkY =
            this.chunkSize *
            this.tileSize *
            Math.round(this.followPoint.y / (this.chunkSize * this.tileSize));

        snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize;
        snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize;

        for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
            for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
                let existingChunk = getChunk(x, y);

                if (existingChunk == null) {
                    let newChunk = new Chunk(this, x, y);
                    chunks.push(newChunk);
                }
            }
        }
        for (let i = 0; i < chunks.length; i++) {
            let chunk = chunks[i];

            if (
                Phaser.Math.Distance.Between(
                    snappedChunkX,
                    snappedChunkY,
                    chunk.x,
                    chunk.y
                ) < 3
            ) {
                if (chunk !== null) {
                    chunk.load();
                }
            } else {
                if (chunk !== null) {
                    chunk.unload();
                }
            }
        }

        this.followPoint.x = player.x;
        this.followPoint.y = player.y;

        this.cameras.main.startFollow(player, false);
        UICam.startFollow(player, false);
        //map end

        //navi start

        navi.rotation = Phaser.Math.Angle.Between(
            hole.x,
            hole.y,
            player.x,
            player.y
        );

        //navi end

        //player start
        changeSlot();
        normalAttackAS = fairySet[nowFairy].as;
        if (normalAttackTimer > normalAttackAS) {
            control = false;
        } else {
            normalAttackTimer++;
        }
        //mouse clicked
        if (
            mouse.leftButtonDown() &&
            !control &&
            fairySet[nowFairy].bombCount > 0
        ) {
            magic = new Magic(this, fairySet[nowFairy]);
            magic.setDepth(2);
            this.physics.add.overlap(
                magic,
                monsterSet,
                fairySet[nowFairy].attack,
                null,
                this
            );
            fairySet[nowFairy].normalAttack(magic);
        }

        for (let i = 0; i < 5; i++) {
            if (fairySet[i].timer < fairySet[i].skillCD) {
                fairySet[i].timer++;
            } else {
                fairySet[i].skillUse = false;
            }
        }

        if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
            fairySet[nowFairy].skillFire();
        }

        player.healCount++;
        if (player.healCount > player.maxHealCount) {
            player.healCount = 0;
            player.health += player.heal;
            if (player.health > player.maxHealth) {
                player.health = player.maxHealth;
            }
        }

        if (player.invincible) {
            hitTimer++;
            if (hitTimer >= 15) {
                hitTimer = 0;

                if (hitVisible) {
                    hitVisible = false;
                } else {
                    hitVisible = true;
                }

                player.setVisible(hitVisible);
            }
        }

        //player end

        //enemy start

        // 몬스터가 유저 따라가게함
        if (monsterCount !== 0) {
            for (let i = 0; i < monsterSet.children.entries.length; i++) {
                if (monsterSet.children.entries[i].invincible) {
                    monsterSet.children.entries[i].setTint(0xff0000);
                }

                if (
                    monsterSet.children.entries[i].type === "follower" ||
                    monsterSet.children.entries[i].type === "wave"
                ) {
                    this.physics.moveToObject(
                        monsterSet.children.entries[i],
                        player,
                        monsterSet.children.entries[i].velocity
                    );
                }
                // 몬스터가 홀에 도달하게 함
                else if (monsterSet.children.entries[i].type === "siege") {
                    this.physics.moveToObject(
                        monsterSet.children.entries[i],
                        hole,
                        monsterSet.children.entries[i].velocity
                    );
                }
            }
        }

        if (hole.hp <= 0) {
            $this.pause();
            updateHP();
            GameOver();
        }

        gameTimer++;
        UpdateTimer();

        // 플레이어 기준랜덤 위치에 몬스터 생성
        // 생성규칙: 몬스터이름, 애니메이션, 체력, 속도, x,y,타입,딜레이
        // monsterSpawn 초기값은 300
        if (gameTimer > 300 && gameTimer % monsterSpawn === 0) {
            // 1번 zombie
            enemySpawn(randomLocation);
            if (10800 < gameTimer && gameTimer <= 18000) {
                addMonster(
                    this,
                    "alienPlus",
                    "alienPlus",
                    70,
                    55,
                    monX,
                    monY,
                    "follower"
                );
            } else if (18000 < gameTimer) {
                addMonster(
                    this,
                    "alienPlus",
                    "alienPlus",
                    130,
                    75,
                    monX,
                    monY,
                    "follower"
                );
            } else {
                addMonster(this, "alien", "alien", 30, 45, monX, monY, "follower");
            }
        }
        if (gameTimer > 6000 && gameTimer % 240 === 0) {
            // 2번 worm
            siegeSpawn(randomLocation);
            if (12000 < gameTimer && gameTimer <= 18000) {
                addMonster(this, "wormPlus", "wormPlus", 100, 50, monX, monY, "siege");
            } else if (18000 < gameTimer) {
                addMonster(this, "wormPlus", "wormPlus", 160, 60, monX, monY, "siege");
            } else if (gameTimer <= 12000) {
                addMonster(this, "worm", "worm", 40, 40, monX, monY, "siege");
            }
        }
        if (gameTimer > 12000 && gameTimer % 300 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "sonic", "sonic", 150, 80, monX, monY, "follower");
        }
        if (gameTimer > 21000 && gameTimer % 600 === 0) {
            siegeSpawn(randomLocation);
            addMonster(this, "turtle", "turtle", 300, 50, monX, monY, "siege");
        }

        if (gameTimer > 18000 && gameTimer % 200 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "slime", "slime", 240, 75, monX, monY, "follower");
        }
        // 몬스터 빅 웨이브
        if (gameTimer === 7700) {
            messageBoss("빅 웨이브");
        }
        if (gameTimer === 19700) {
            messageBoss("빅 웨이브");
        }

        if (gameTimer > 8000 && gameTimer < 8300 && gameTimer % 3 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "fly", "fly", 10, 50, monX, monY, "wave");
        } else if (20000 < gameTimer && gameTimer < 21000 && gameTimer % 3 === 0) {
            enemySpawn(randomLocation);
            addMonster(this, "fly", "fly", 100, 50, monX, monY, "wave");
        }

        // 스폰 주기
        if (gameTimer < 4200) {
            monsterSpawn = 90;
        } else if (4200 <= gameTimer && gameTimer < 11000) {
            monsterSpawn = 60;
        } else if (11000 <= gameTimer && gameTimer < 23000) {
            monsterSpawn = 30;
        } else if (23000 <= gameTimer) {
            monsterSpawn = 15;
        }

        // 보스

        // 슬라임
        if (gameTimer === 17400) {
            messageBoss("슬라임 킹");
        }

        if (gameTimer === 18000) {
            if (ChoiceCat === 5) {
                let rand = Math.floor(Math.random() * 20);
                setSound.playSE(rand);
            } else {
                setSound.playSE(13);
            }
            slimeKing = new Boss(
                this,
                300,
                70,
                player.x + 500,
                player.y + 500,
                "slimeKing",
                "slimeKing",
                3,
                1,
                "boss"
            );
            slimeKing.setDepth(2);
            slimeKing.anime(player);
            bossActive = true;
            let mw = slimeKing.body.halfWidth;
            let mh = slimeKing.body.halfHeight;

            slimeKing.setCircle(mh / 2, mw - mh / 2, mw);
            bossSet.add(slimeKing);
        }

        // 골렘
        if (gameTimer === 20400) {
            messageBoss("골렘");
        }
        if (gameTimer === 21000) {
            if (ChoiceCat === 5) {
                let rand = Math.floor(Math.random() * 20);
                setSound.playSE(rand);
            } else {
                setSound.playSE(14);
            }
            golem = new Boss(
                this,
                500,
                30,
                hole.x + 2000,
                hole.y - 2000,
                "golem",
                "golem",
                3,
                10,
                "boss"
            );
            golem.setDepth(2);
            golem.anime(player);
            bossActive = true;
            let mw = golem.body.halfWidth;
            let mh = golem.body.halfHeight;
            golem.setCircle(mh / 2, mw - mh / 2, mw);
            bossSet.add(golem);
        }

        // 불거인
        if (gameTimer === 27400) {
            messageBoss("불거인");
        }
        if (gameTimer === 28000) {
            if (ChoiceCat === 5) {
                let rand = Math.floor(Math.random() * 20);
                setSound.playSE(rand);
            } else {
                setSound.playSE(15);
            }
            fireGiant = new Boss(
                this,
                500,
                10,
                player.x - 600,
                player.y - 600,
                "fireGiant",
                "fireGiant",
                3,
                10,
                "boss"
            );
            let mw = fireGiant.body.halfWidth;
            let mh = fireGiant.body.halfHeight;
            fireGiant.setCircle(mh / 2, mw - mh / 2, mw);
            fireGiant.setDepth(6);
            fireGiant.anime(player);
            bossActive = true;
            bossFireGiantActive = true;
            bossSet.add(fireGiant);
            fireGiantIndex = bossSet.children.entries.length - 1;
        }

        if (gameTimer === 28000) {
            fireGiantAura = new Boss(
                this,
                10000,
                1000,
                player.x - 600,
                player.y - 600,
                "fireGiantAura",
                "fireGiantAura",
                1,
                10,
                "boss"
            );
            let mw = fireGiantAura.body.halfWidth;
            let mh = fireGiantAura.body.halfHeight;
            fireGiantAura.setCircle(mh / 2, mw - mh / 2, mw);
            fireGiantAura.setDepth(5);
            fireGiantAura.anime();
            bossMagicSet.add(fireGiantAura);
        }

        if (bossFireGiantActive && gameTimer % 120 === 0) {
            let x = bossSet.children.entries[fireGiantIndex].x;
            let y = bossSet.children.entries[fireGiantIndex].y;

            let aura = new Boss(
                this,
                10000,
                100,
                x,
                y,
                "fireGiantAura",
                "fireGiantAura",
                (gameTimer - 28000) / 120 + 1,
                10,
                "boss"
            );
            bossMagicSet.children.entries[0].destroy();
            let mw = aura.body.halfWidth;
            let mh = aura.body.halfHeight;
            aura.setCircle(mh / 2, mw - mh / 2, mw - mh / 2);
            aura.setDepth(5);
            aura.anime();
            bossMagicSet.add(aura);
        }

        // 보스 이동 및 사망 체크
        if (bossActive) {
            for (let i = 0; i < bossSet.children.entries.length; i++) {
                if (bossSet.children.entries[i].invincible) {
                    bossSet.children.entries[i].setTint(0xff0000);
                }
                if (bossSet.children.entries[i].bossSpecie !== "golem") {
                    this.physics.moveToObject(
                        bossSet.children.entries[i],
                        player,
                        bossSet.children.entries[i].velocity
                    );
                    if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
                        if (bossFireGiantActive) {
                            this.physics.moveToObject(
                                bossMagicSet.children.entries[0],
                                bossSet.children.entries[i],
                                bossMagicSet.children.entries[0].velocity
                            );
                        }
                    }
                } else if (bossSet.children.entries[i].bossSpecie === "golem") {
                    this.physics.moveToObject(
                        bossSet.children.entries[i],
                        hole,
                        bossSet.children.entries[i].velocity
                    );
                }
                if (bossSet.children.entries[i].health <= 0) {
                    for (let i = 0; i < 5; i++) {
                        player.expUp();
                    }
                    if (bossSet.children.entries[i].bossSpecie !== "slimeKing") {
                        global.coin += 10;
                    } else global.coin += 2;
                    if (bossSet.children.entries[i].bossSpecie === "slimeKing") {
                        slimePattern(
                            this,
                            bossSet.children.entries[i].pt,
                            bossSet.children.entries[i].x,
                            bossSet.children.entries[i].y
                        );
                    }

                    if (bossSet.children.entries[i].bossSpecie === "fireGiant") {
                        bossMagicSet.children.entries[0].destroy();
                        bossFireGiantActive = false;
                    }

                    bossSet.children.entries[i].destroy();
                    if (bossSet.children.entries.length === 0) {
                        bossActive = false;
                    }
                }
            }
        }

        //enemy end

        //tower start

        towerLU.towerAttackTimer++;
        towerRU.towerAttackTimer++;
        towerLD.towerAttackTimer++;
        towerRD.towerAttackTimer++;

        towerLU.towerSkillAttackTimer++;
        towerRU.towerSkillAttackTimer++;
        towerLD.towerSkillAttackTimer++;
        towerRD.towerSkillAttackTimer++;
        //tower end

        //exp bar start
        expBar.clear();

        //  BG
        expBarBG.fillStyle(0x000000);
        expBarBG.fillRect(0, 0, UICam.worldView.width, 16); // x y 가로길이, 세로길이

        expBar.fillStyle(0xff0000);
        expBar.fillRect(
            0,
            0,
            UICam.worldView.width * (player.exp / player.maxExp),
            16
        );
    } //exp bar end
    UICam.ignore([
        player,
        bossSet,
        fairySet,
        monsterSet,
        hpBar,
        hpBarBG,
        hole,
        towerLD,
        towerLU,
        towerRD,
        towerRU,
        magics,
        mines,
        towerAttacks,
        towerSkillAttacks,
        bossMagicSet,
    ]);

    if (gameTimer % 3600 === 0) {
        ++mineshowtime;
        for (let i = 0; i < mineCount[mineshowtime]; i++) {
            let x =
                Math.random() *
                (EndMineRangeX[mineshowtime] - StartMineRangeX[mineshowtime]) +
                StartMineRangeX[mineshowtime];
            let y =
                Math.random() *
                (EndMineRangeY[mineshowtime] - StartMineRangeY[mineshowtime]) +
                StartMineRangeY[mineshowtime];
            mine = new Mine(this, x, y, "mine", 0);
            mine.scale_Circle();
            mines.add(mine);
        }
        console.log(mines);
    }

    if (!towerLU.anims.isPlaying) {
        console.log(towerLU.stone);
        towerLU.anims.play(`${towerLU.stone}_idle`, true);
    }
    if (!towerLD.anims.isPlaying) {
        towerLD.anims.play(`${towerLD.stone}_idle`, true);
    }
    if (!towerRU.anims.isPlaying) {
        towerRU.anims.play(`${towerRU.stone}_idle`, true);
    }
    if (!towerRD.anims.isPlaying) {
        towerRD.anims.play(`${towerRD.stone}_idle`, true);
    }

    if (!towerLU.anims.isPlaying) {
        console.log(towerLU.stone);
        towerLU.anims.play(`${towerLU.stone}_idle`, true);
    }
    if (!towerLD.anims.isPlaying) {
        towerLD.anims.play(`${towerLD.stone}_idle`, true);
    }
    if (!towerRU.anims.isPlaying) {
        towerRU.anims.play(`${towerRU.stone}_idle`, true);
    }
    if (!towerRD.anims.isPlaying) {
        towerRD.anims.play(`${towerRD.stone}_idle`, true);
    }
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
=======
  if (!towerLU.anims.isPlaying) {
    console.log(towerLU.stone);
    towerLU.anims.play(`${towerLU.stone}_idle`, true);
  }
  if (!towerLD.anims.isPlaying) {
    towerLD.anims.play(`${towerLD.stone}_idle`, true);
  }
  if (!towerRU.anims.isPlaying) {
    towerRU.anims.play(`${towerRU.stone}_idle`, true);
  }
  if (!towerRD.anims.isPlaying) {
    towerRD.anims.play(`${towerRD.stone}_idle`, true);
  }
>>>>>>> b36e339 (#7 codemode collider 처리)
}

>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
//player start
<<<<<<< HEAD

// 플레이어 공격
<<<<<<< HEAD
let magicFire = function (game) {
    // 게임에서 외부 UI 연관 테스트

    //for fire again
    magic = new Magic(game, fairySet[nowFairy].range, fairySet[nowFairy]);
    magics.push(magic);
    // console.log(magic);
    // console.log(magic.body);
    game.physics.add.overlap(magic, alienSet, attack, null, this);
    // magic.body.setCircle(45);

    /*충돌관련 하드코딩 된 부분 나중에 수정 */
    magic.body.width = 50;
    magic.body.height = 50;
    magic.body.offset.x = 25;
    magic.body.offset.y = 25;
    normalAttackTimer = 0;
    fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_attack", true);
=======
var magicFire = function (game) {
  // 게임에서 외부 UI 연관 테스트
  exp++;
  updateExp();
  if (exp === 3) {
    level++;
    exp = 0;
    levelup();
    updateExp();
  }
  //for fire again
  magic = new Magic(game, fairySet[nowFairy].range, fairySet[nowFairy]);
  magics.push(magic);
  // console.log(magic);
  // console.log(magic.body);
  game.physics.add.overlap(magic, monsterSet, attack, null, this);
  // magic.body.setCircle(45);

  /*충돌관련 하드코딩 된 부분 나중에 수정 */
<<<<<<< HEAD
  magic.body.width = 50;
  magic.body.height = 50;
  magic.body.offset.x = 25;
  magic.body.offset.y = 25;
  normalAttackTimer = 0;

<<<<<<< HEAD
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
=======
  let angle = Phaser.Math.Angle.Between(
    fairySet[nowFairy].x,
    fairySet[nowFairy].y,
    input.x + camera.scrollX,
    input.y + camera.scrollY
  );
>>>>>>> 457e4ef (#1 :sparkles: develop merge)
=======
    magic.body.width = 50;
    magic.body.height = 50;
    magic.body.offset.x = 25;
    magic.body.offset.y = 25;
    normalAttackTimer = 0;
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)

  // 각도 계산 공식
  angle = ((angle + Math.PI / 2) * 180) / Math.PI + 90;
  magic.rotation += (angle - 180) / 60 - 1.5;
  magic.anims.play("magic" + (nowFairy + 1), true);

  //move to mouse position
  game.physics.moveTo(
    magic,
    input.x + camera.scrollX,
    input.y + camera.scrollY,
    fairySet[nowFairy].velo
  );
  control = true;
};

<<<<<<< HEAD
=======
>>>>>>> f7fa4a4 (#3 :sparkles: 플레이어 스킬 구현1)
function changeSlot() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
=======
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
>>>>>>> 6734bfb (#3 :cat: 규냥)
=======
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
    if (
        cursors.slot1.isDown &&
        nowFairy !== 0 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 0;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }

    if (
        cursors.slot2.isDown &&
        nowFairy !== 1 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 1;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }

    if (
        cursors.slot3.isDown &&
        nowFairy !== 2 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 2;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }

    if (
        cursors.slot4.isDown &&
        nowFairy !== 3 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 3;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }

    if (
        cursors.slot5.isDown &&
        nowFairy !== 4 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 4;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }

    if (!fairySet[nowFairy].anims.isPlaying) {
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }
=======
  if (
    cursors.slot1.isDown &&
    nowFairy !== 0 &&
=======
=======
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
>>>>>>> b36e339 (#7 codemode collider 처리)
  if (
    cursors.slot1.isDown &&
    nowFairy !== 0 &&
    /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
  ) {
    fairySet[nowFairy].x = -10000;
    fairySet[nowFairy].y = -10000;
    nowFairy = 0;
    player.changeFairy(fairySet[nowFairy]);
    normalAttackAS = fairySet[nowFairy].as;
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }
<<<<<<< HEAD
<<<<<<< HEAD

  if (
    cursors.slot2.isDown &&
    nowFairy !== 1 &&
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
    /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
  ) {
    fairySet[nowFairy].x = -10000;
    fairySet[nowFairy].y = -10000;
<<<<<<< HEAD
    nowFairy = 0;
=======
    nowFairy = 1;
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
    player.changeFairy(fairySet[nowFairy]);
    normalAttackAS = fairySet[nowFairy].as;
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }
<<<<<<< HEAD
=======
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2f19786 (#2 :sparkle: 불거인)

=======
    
>>>>>>> 22911cf (#2 :bug: 스폰위치 변경)
=======

>>>>>>> 3f1b2fe (#2 :bug: 불거인 오류 수정)
=======
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
    }

>>>>>>> 6734bfb (#3 :cat: 규냥)
    if (
        cursors.slot2.isDown &&
        nowFairy !== 1 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 1;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
    }
<<<<<<< HEAD
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
>>>>>>> 6734bfb (#3 :cat: 규냥)

    if (
        cursors.slot3.isDown &&
        nowFairy !== 2 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 2;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
    }

    if (
        cursors.slot4.isDown &&
        nowFairy !== 3 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 3;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
    }

    if (
        cursors.slot5.isDown &&
        nowFairy !== 4 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 4;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (!fairySet[nowFairy].anims.isPlaying) {
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }
>>>>>>> 3e6dfa6 (#3 :sparkles: player 기능 구현)
}

function attack(magic, monster) {
<<<<<<< HEAD
  if (!monster.invincible) {
    if (magic.pierceCount > 0) {
      magic.pierceCount--;
    } else {
      magic.destroy();
    }

    if (
        cursors.slot4.isDown &&
        nowFairy !== 3 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 3;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }

    if (
        cursors.slot5.isDown &&
        nowFairy !== 4 &&
        /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
    ) {
        fairySet[nowFairy].x = -10000;
        fairySet[nowFairy].y = -10000;
        nowFairy = 4;
        player.changeFairy(fairySet[nowFairy]);
        normalAttackAS = fairySet[nowFairy].as;
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (!fairySet[nowFairy].anims.isPlaying) {
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }
=======
function changeSlot(){
  if (
    cursors.slot1.isDown &&
    now_fairy !== 0 &&
    /idle/.test(fairys[now_fairy].anims.currentAnim.key)
  ) {
    fairys[now_fairy].x = -100;
    fairys[now_fairy].y = -100;
    now_fairy = 0;
    player.changeFairy(fairys[now_fairy]);
    normalAttackAS = fairys[now_fairy].as;
    fairys[now_fairy].anims.play("fairy" + (now_fairy + 1) + "_idle", true);
  }

  if (
    cursors.slot2.isDown &&
    now_fairy !== 1 &&
    /idle/.test(fairys[now_fairy].anims.currentAnim.key)
  ) {
    fairys[now_fairy].x = -100;
    fairys[now_fairy].y = -100;
    now_fairy = 1;
    player.changeFairy(fairys[now_fairy]);
    normalAttackAS = fairys[now_fairy].as;
    fairys[now_fairy].anims.play("fairy" + (now_fairy + 1) + "_idle", true);
  }

  if (
    cursors.slot3.isDown &&
    now_fairy !== 2 &&
    /idle/.test(fairys[now_fairy].anims.currentAnim.key)
  ) {
    fairys[now_fairy].x = -100;
    fairys[now_fairy].y = -100;
    now_fairy = 2;
    player.changeFairy(fairys[now_fairy]);
    normalAttackAS = fairys[now_fairy].as;
    fairys[now_fairy].anims.play("fairy" + (now_fairy + 1) + "_idle", true);
  }

  if (
    cursors.slot4.isDown &&
    now_fairy !== 3 &&
    /idle/.test(fairys[now_fairy].anims.currentAnim.key)
  ) {
    fairys[now_fairy].x = -100;
    fairys[now_fairy].y = -100;
    now_fairy = 3;
    player.changeFairy(fairys[now_fairy]);
    normalAttackAS = fairys[now_fairy].as;
    fairys[now_fairy].anims.play("fairy" + (now_fairy + 1) + "_idle", true);
  }

  if (
    cursors.slot5.isDown &&
    now_fairy !== 4 &&
    /idle/.test(fairys[now_fairy].anims.currentAnim.key)
  ) {
    fairys[now_fairy].x = -100;
    fairys[now_fairy].y = -100;
    now_fairy = 4;
    player.changeFairy(fairys[now_fairy]);
    normalAttackAS = fairys[now_fairy].as;
    fairys[now_fairy].anims.play("fairy" + (now_fairy + 1) + "_idle", true);
  }

  if (!fairys[now_fairy].anims.isPlaying) {
    fairys[now_fairy].anims.play("fairy" + (now_fairy + 1) + "_idle", true);
=======
  if (!fairySet[nowFairy].anims.isPlaying) {
    fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
>>>>>>> 457e4ef (#1 :sparkles: develop merge)
  }
=======
    if (!fairySet[nowFairy].anims.isPlaying) {
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
    }
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
}

function attack(magic, monster) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
>>>>>>> b038195 (#1 :bug: 버그 수정)
=======
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
  if (!monster.invincible) {
    if (magic.pierceCount > 0) {
      magic.pierceCount--;
    } else {
      magic.destroy();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    if (!monster.invincible) {
        if (magic.pierceCount > 0) {
            magic.pierceCount--;
        } else {
            magic.destroy();
        }
    
    if (nowFairy === 3){
      if(monsterSet.children.entries.length !== 0){
        if(magic.bounceCount <= 0){
=======
    }

    if (nowFairy === 3) {
      if (monsterSet.children.entries.length !== 0) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        if (magic.bounceCount <= 0) {
>>>>>>> b038195 (#1 :bug: 버그 수정)
          magic.destroy();
        } else {
=======
>>>>>>> ea7f1de (#3 :sparkles: 튕기는 부메랑 복사_1)
          let monNum = Math.floor(
            Math.random() * monsterSet.children.entries.length
          );
=======
        let monNum = Math.floor(
          Math.random() * monsterSet.children.entries.length
        );
>>>>>>> e000c8a (#1 :sparkles: 홀체력 및 게임 오버 구현)
=======
        let monNum = Math.floor(
          Math.random() * monsterSet.children.entries.length
        );
>>>>>>> ae21595 (#1 :sparkles: 클리어, 인게임 UI 수정)
=======
        let monNum = Math.floor(
          Math.random() * monsterSet.children.entries.length
        );
>>>>>>> 8e09cfa (#6 :bug: 상자 크기 수정)
        if (magic.bounceCount <= 0) {
          magic.destroy();
=======
    if (!monster.invincible) {
        if (magic.pierceCount > 0) {
            magic.pierceCount--;
>>>>>>> ad327af (Update game.js)
        } else {
            magic.destroy();
        }

<<<<<<< HEAD
<<<<<<< HEAD
        let copy = Math.floor(Math.random() * 100 + 1);
=======
        let copy = Math.floor(
          Math.random() * 100 + 1
        );
>>>>>>> 8e09cfa (#6 :bug: 상자 크기 수정)

        if (magic.isFirst && copy <= fairySet[3].copyCount) {
          // magic.isFirst = false;
          let copyMagic = new Magic(thisScene, fairySet[nowFairy]);
          copyMagic.isFirst = false;
          magics.add(copyMagic);
          copyMagic.setPosition(magic.x, magic.y);
=======
    if (!fairySet[nowFairy].anims.isPlaying) {
        fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
=======
    if (!fairySet[nowFairy].anims.isPlaying) {
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
    }
}

function attack(magic, monster) {
    if (!monster.invincible) {
        if (magic.pierceCount > 0) {
            magic.pierceCount--;
        } else {
            magic.destroy();
        }

        if (nowFairy === 3) {
            if (monsterSet.children.entries.length !== 0) {
                let monNum = Math.floor(
                    Math.random() * monsterSet.children.entries.length
                );
                if (magic.bounceCount <= 0) {
                    magic.destroy();
                } else {

                    thisScene.physics.moveTo(
                        magic,
                        monsterSet.children.entries[monNum].x,
                        monsterSet.children.entries[monNum].y,
                        magic.fairy.velo
                    );
                    magic.bounceCount--;
                }
>>>>>>> d0fc426 (#2 :sparkles: 불거인)

                let copy = Math.floor(
                    Math.random() * 100 + 1
                );

=======
        if (nowFairy === 3) {
            if (monsterSet.children.entries.length !== 0) {
                let monNum = Math.floor(
                    Math.random() * monsterSet.children.entries.length
                );
                if (magic.bounceCount <= 0) {
                    magic.destroy();
                } else {
                    thisScene.physics.moveTo(
                        magic,
                        monsterSet.children.entries[monNum].x,
                        monsterSet.children.entries[monNum].y,
                        magic.fairy.velocity
                    );
                    magic.bounceCount--;
                }

                let copy = Math.floor(Math.random() * 100 + 1);

>>>>>>> ad327af (Update game.js)
                if (magic.isFirst && copy <= fairySet[3].copyCount) {
                    // magic.isFirst = false;
                    let copyMagic = new Magic(thisScene, fairySet[nowFairy]);
<<<<<<< HEAD
                    copyMagic.isFirst = false;
<<<<<<< HEAD
                    magics.add(copyMagic)
=======
=======
                    // copyMagic.isFirst = false;
>>>>>>> cb6e8bf (#3 :sparkles: 슬라임 버프)
                    magics.add(copyMagic);
>>>>>>> ad327af (Update game.js)
                    copyMagic.setPosition(magic.x, magic.y);

                    thisScene.physics.moveTo(
                        copyMagic,
                        -monsterSet.children.entries[monNum].x,
                        -monsterSet.children.entries[monNum].y,
                        copyMagic.fairy.velocity
                    );
                    copyMagic.bounceCount = magic.bounceCount;
                }
            }
<<<<<<< HEAD
=======
        }

        if (magic.fairy.fairyNum === 3 && magic.fairy.evo2) {
            //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
            let num = Math.floor(Math.random() * 100 + 1);
            if (num <= magic.fairy.deathCount && monster.type !== "boss") {
                if (monster.monSpecie !== "slime") {
                    monster.dieAnim();
                    monster.destroy();
                    player.expUp();
                    monsterCount -= 1;
                } else if (monster.monSpecie === "slime") {
                    for (let i = 0; i < 2; i++) {
                        addMonster(
                            thisScene,
                            "babySlime",
                            "swarm",
                            150,
                            125,
                            monster.x + i * 10,
                            monster.y,
                            "follower"
                        );
                    }
                    monster.destroy();
                    monsterCount -= 1;
                }
            }
<<<<<<< HEAD
<<<<<<< HEAD
=======
        }
        if (magic.fairy.stun > 0) {
            monster.cc = 'earth';
>>>>>>> ce245c6 (#3 :bug: 버그 수정)
        }

<<<<<<< HEAD
<<<<<<< HEAD
        monster.health -= (magic.fairy.dmg * player.dmgmul);
=======
        monster.invincible = true;
        monster.health -= (fairySet[nowFairy].dmg * player.dmgmul);
>>>>>>> 1199532 (#2 :bug: 몬스터 무적 수정)
=======
        monster.invincible = true;
        monster.health -= (magic.fairy.dmg * player.dmgMul);
>>>>>>> 99ced01 (#3 :bug: 데미지 안들어가는 버그 수정)

        if (monster.health <= 0 && monster.type !== "boss") {
            if (monster.monSpecie !== "slime") {
                monster.dieAnim();
                monster.destroy();
                player.expUp();
                monsterCount -= 1;
            } else if (monster.monSpiece == "slime") {
                for (let i = 0; i < 2; i++) {
                    addMonster(
                        thisScene,
                        "baby_slime",
                        "swarm",
                        50,
                        125,
                        monster.x + i * 20,
                        monster.y,
                        "follower"
                    );
                }
                monster.destroy();
                monsterCount -= 1;
            }
>>>>>>> ad327af (Update game.js)
        }
    }
<<<<<<< HEAD

    if (nowFairy === 2) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
      if (num <= fairySet[nowFairy].deathCount && monster.type != "boss") {
        if (monster.monSpiece != "slime") {
          monster.die_anim();
          monster.destroy();
          player.expUp();
          monsterCount -= 1;
        } else if (monster.monSpiece == "slime") {
          for (let i = 0; i < 2; i++) {
            addMonster(
              thisScene,
              "baby_slime",
              "swarm",
              50,
              125,
              monster.x + i * 10,
              monster.y,
              "follower"
            );
          }
          monster.destroy();
          monsterCount -= 1;
=======
            if (magic.fairy.stun > 0) {
                monster.cc = 'earth';
            }
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
        }

        monster.health -= (fairySet[nowFairy].dmg * player.dmgmul);
        monster.invincible = true;
        if (monster.health <= 0 && monster.type != "boss") {
            if (monster.monSpiece != "slime") {
                monster.die_anim();
                monster.destroy();
                player.expUp();
<<<<<<< HEAD
=======
                if (magic.fairy.fairyNum === 2) {
                    let vampireNum = Math.floor(Math.random() * 100 + 1);
                    if (vampireNum < 5) {
                        player.health += magic.fairy.vampire;
                        if (player.health > player.maxHealth) {
                            player.health = player.maxHealth;
                        }
                    }
                }
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
                monsterCount -= 1;
            } else if (monster.monSpecie === "slime") {
                for (let i = 0; i < 2; i++) {
                    addMonster(
                        thisScene,
                        "babySlime",
                        "swarm",
                        150,
                        125,
                        monster.x + i * 20,
                        monster.y,
                        "follower"
                    );
                }
                monster.destroy();
                monsterCount -= 1;
            }
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      }
>>>>>>> da9ff4f (#3 :sparkles: 튕기는 부메랑)
=======
>>>>>>> b1ee08a (#2 :recycle:  몬스터 피격 개선)
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (nowFairy === 2) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
<<<<<<< HEAD
      if (num <= fairySet[nowFairy].deathCount) {
        alien.destroy();
=======
=======
>>>>>>> cee2f61 (#2 :sparkles: 몬스터 기능 추가)
    if (nowFairy === 2 ) {
=======
    if (nowFairy === 2) {
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
=======
    }

    if (nowFairy === 2) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
      if (num <= fairySet[nowFairy].deathCount && monster.type != "boss") {
=======
      if (num <= fairySet[nowFairy].deathCount && monster.type != 'boss') {
        if (monster.monSpiece != 'slime'){
>>>>>>> e961a66 (#2 :sparkles: 몬스터 = 슬라임)
        monster.die_anim();
        monster.destroy();
<<<<<<< HEAD
>>>>>>> 344a1b1 (#2 :sparkles: 폭발 이펙트)
        player.levelUp();
<<<<<<< HEAD
<<<<<<< HEAD
=======
        if (nowFairy === 2) {
            //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
            let num = Math.floor(Math.random() * 100 + 1);
            if (num <= fairySet[nowFairy].deathCount && monster.type != 'boss') {
                monster.die_anim();
                monster.destroy();
                player.levelUp();
>>>>>>> 9ff3036 (#2 :sparkle: 코드 정리)

        alienCount -= 1;
      }
    }

    alien.health -= fairySet[nowFairy].dmg;
    alien.invincible = true;
    if (alien.health <= 0) {
      alien.destroy();
      player.levelUp();
      alienCount -= 1;
=======
    if (nowFairy === 2) { //  && fairys[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100);
      if (num <= 9) {
        monster.destroy();
      }
    }
=======
        monsterCount -= 1;}
        else if (monster.monSpiece == 'slime'){
            for (let i=0; i<2; i++){
                console.log('동작')
                addMonster(thisScene, 'baby_slime', 'swarm', 50, 125, monster.x+i*10, monster.y, 'follower')
            }
            monster.destroy()
            monsterCount -= 1 }
            }
        }
>>>>>>> e961a66 (#2 :sparkles: 몬스터 = 슬라임)

    monster.health -= fairySet[nowFairy].dmg;
    monster.invincible = true;
<<<<<<< HEAD
    if (monster.health <= 0){
=======
    if (monster.health <= 0 && monster.type !='boss') {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 54e99e5 (#2 :sparkle: 슬라임 패턴 구현)
=======
      monster.die_anim();
>>>>>>> 344a1b1 (#2 :sparkles: 폭발 이펙트)
      monster.destroy();
      monsterCount -= 1;
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
    }
  }
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
=======
        if (nowFairy === 2) {
            //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
            let num = Math.floor(Math.random() * 100 + 1);
            if (num <= fairySet[nowFairy].deathCount) {
                monster.destroy();
                player.levelUp();
=======
>>>>>>> cee2f61 (#2 :sparkles: 몬스터 기능 추가)

        monsterCount -= 1;
      }
    }

<<<<<<< HEAD
        monster.health -= fairySet[nowFairy].dmg;
        monster.invincible = true;
        if (monster.health <= 0 && monster.type != 'boss') {
<<<<<<< HEAD
=======
            monster.die_anim();
>>>>>>> 9ff3036 (#2 :sparkle: 코드 정리)
            monster.destroy();
            player.levelUp();
            monsterCount -= 1;
        }
=======
    monster.health -= fairySet[nowFairy].dmg;
    monster.invincible = true;
    if (monster.health <= 0 && monster.type != "boss") {
      monster.die_anim();
      monster.destroy();
      player.expUp();
      monsterCount -= 1;
>>>>>>> cee2f61 (#2 :sparkles: 몬스터 기능 추가)
    }
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
}
<<<<<<< HEAD
<<<<<<< HEAD

//player end

//enemy start

<<<<<<< HEAD
<<<<<<< HEAD
function hitplayer (player, alien)
{   
    if (invincible == false){
    invincible = true
    alien.hp -= 1
    console.log(invincible)
    // 일단 피해 준 몬스터는 사라지는데 추후 코드로 몇초간 안보이게 또는 유저 잠시 무적으로 수정해야함
    // alien.destroy();
    alien_count -= 1;
    // 피해 1 줌
    // stop_game -= 1;
    }

=======
function hitplayer(p, alien) {
  // 일단 피해 준 몬스터는 사라지는데 추후 코드로 몇초간 안보이게 또는 유저 잠시 무적으로 수정해야함
  alien.destroy();
  player['health']-=50;
  console.log(player['health']);
  if (player['health'] <= 0) {
    console.log('Game Over!');
  }
  // 피해 1 줌
  // life -= 1;
>>>>>>> 8aecbcf (#3 :sparkles: 플레이어 객체 설정)
}

=======
>>>>>>> dd93dae (#3 :sparkles: 요정, 공격 객체화)
function attack(magic, alien) {
    // magic.destroy();
    if (!alien.invincible) {
        alien.health -= 1
        alien.invincible = true;
        if (alien.health === 0) {
            alien.destroy();
            alienCount -= 1;
        }
    }

}
=======
  if (!fairySet[nowFairy].anims.isPlaying) {
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }
}

function attack(magic, monster) {
=======
  if (
    cursors.slot1.isDown &&
    nowFairy !== 0 &&
    /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
  ) {
    fairySet[nowFairy].x = -10000;
    fairySet[nowFairy].y = -10000;
    nowFairy = 0;
    player.changeFairy(fairySet[nowFairy]);
    normalAttackAS = fairySet[nowFairy].as;
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }
=======
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
    }
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
    }
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
=======
>>>>>>> b36e339 (#7 codemode collider 처리)

  if (
    cursors.slot2.isDown &&
    nowFairy !== 1 &&
    /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
  ) {
    fairySet[nowFairy].x = -10000;
    fairySet[nowFairy].y = -10000;
    nowFairy = 1;
    player.changeFairy(fairySet[nowFairy]);
    normalAttackAS = fairySet[nowFairy].as;
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }

  if (
    cursors.slot3.isDown &&
    nowFairy !== 2 &&
    /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
  ) {
    fairySet[nowFairy].x = -10000;
    fairySet[nowFairy].y = -10000;
    nowFairy = 2;
    player.changeFairy(fairySet[nowFairy]);
    normalAttackAS = fairySet[nowFairy].as;
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }

  if (
    cursors.slot4.isDown &&
    nowFairy !== 3 &&
    /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
  ) {
    fairySet[nowFairy].x = -10000;
    fairySet[nowFairy].y = -10000;
    nowFairy = 3;
    player.changeFairy(fairySet[nowFairy]);
    normalAttackAS = fairySet[nowFairy].as;
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }

  if (
    cursors.slot5.isDown &&
    nowFairy !== 4 &&
    /idle/.test(fairySet[nowFairy].anims.currentAnim.key)
  ) {
    fairySet[nowFairy].x = -10000;
    fairySet[nowFairy].y = -10000;
    nowFairy = 4;
    player.changeFairy(fairySet[nowFairy]);
    normalAttackAS = fairySet[nowFairy].as;
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }

  if (!fairySet[nowFairy].anims.isPlaying) {
    fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
  }
}

function attack(magic, monster) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
  if (!monster.invincible) {
    if (magic.pierceCount > 0) {
      magic.pierceCount--;
    } else {
      magic.destroy();
<<<<<<< HEAD
    }
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)

    if (nowFairy === 3) {
      if (monsterSet.children.entries.length !== 0) {
        let monNum = Math.floor(
          Math.random() * monsterSet.children.entries.length
        );
        if (magic.bounceCount <= 0) {
          magic.destroy();
=======
    if (!fairySet[nowFairy].anims.isPlaying) {
        fairySet[nowFairy].anims.play(fairySet[nowFairy].idleKey, true);
    }
}

function attack(magic, monster) {
    if (!monster.invincible) {
      if (ChoiceCat === 5) {
        let rand = Math.floor(Math.random() * 20);
        setSound.playSE(rand);
      } else {
        setSound.playSE(12);
      }
        if (magic.pierceCount > 0) {
            magic.pierceCount--;
>>>>>>> 6734bfb (#3 :cat: 규냥)
        } else {
            magic.destroy();
        }

        if (nowFairy === 3) {
            if (monsterSet.children.entries.length !== 0) {
                let monNum = Math.floor(
                    Math.random() * monsterSet.children.entries.length
                );
                if (magic.bounceCount <= 0) {
                    magic.destroy();
                } else {
                    thisScene.physics.moveTo(
                        magic,
                        monsterSet.children.entries[monNum].x,
                        monsterSet.children.entries[monNum].y,
                        magic.fairy.velocity
                    );
                    magic.bounceCount--;
                }

<<<<<<< HEAD
        if (magic.isFirst && copy <= fairySet[3].copyCount) {
          // magic.isFirst = false;
          let copyMagic = new Magic(thisScene, fairySet[nowFairy]);
          // copyMagic.isFirst = false;
          magics.add(copyMagic);
          copyMagic.setPosition(magic.x, magic.y);

          thisScene.physics.moveTo(
            copyMagic,
            -monsterSet.children.entries[monNum].x,
            -monsterSet.children.entries[monNum].y,
            copyMagic.fairy.velocity
          );
          copyMagic.bounceCount = magic.bounceCount;
        }
      }
    }

    if (magic.fairy.fairyNum === 3 && magic.fairy.evo2) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
      if (num <= magic.fairy.deathCount && monster.type !== "boss") {
        if (monster.monSpecie !== "slime") {
          monster.die_anim();
          monster.destroy();
          player.expUp();
          monsterCount -= 1;
        } else if (monster.monSpecie === "slime") {
          for (let i = 0; i < 2; i++) {
            addMonster(
              thisScene,
              "baby_slime",
              "swarm",
              150,
              125,
              monster.x + i * 10,
              monster.y,
              "follower"
            );
          }
          monster.destroy();
          monsterCount -= 1;
        }
      }
    }
    if (magic.fairy.stun > 0) {
      monster.cc = "earth";
    }

    monster.invincible = true;
    monster.health -= magic.fairy.dmg * player.dmgMul;

    if (monster.health <= 0 && monster.type !== "boss") {
      if (monster.monSpecie !== "slime") {
        monster.die_anim();
        monster.destroy();
        player.expUp();
        if (magic.fairy.fairyNum === 2) {
          let vampireNum = Math.floor(Math.random() * 100 + 1);
          if (vampireNum < 5) {
            player.health += magic.fairy.vampire;
            if (player.health > player.maxHealth) {
              player.health = player.maxHealth;
=======
                let copy = Math.floor(Math.random() * 100 + 1);

                if (magic.isFirst && copy <= fairySet[3].copyCount) {
                    // magic.isFirst = false;
                    let copyMagic = new Magic(thisScene, fairySet[nowFairy]);
                    // copyMagic.isFirst = false;
                    magics.add(copyMagic);
                    copyMagic.setPosition(magic.x, magic.y);
                    if (magic.fairy.evo2) {
                        copyMagic.anims.play("magic" + magic.fairy.fairyNum + "_2", true);
                    } else if (magic.fairy.evo1) {
                        copyMagic.anims.play("magic" + magic.fairy.fairyNum + "_1", true);
                    } else {
                        copyMagic.anims.play("magic" + magic.fairy.fairyNum, true);
                    }
                    thisScene.physics.moveTo(
                        copyMagic,
                        -monsterSet.children.entries[monNum].x,
                        -monsterSet.children.entries[monNum].y,
                        copyMagic.fairy.velocity
                    );
                    copyMagic.bounceCount = magic.bounceCount;
                }
>>>>>>> 6734bfb (#3 :cat: 규냥)
            }
        }
<<<<<<< HEAD
        monsterCount -= 1;
      } else if (monster.monSpecie === "slime") {
        for (let i = 0; i < 2; i++) {
          addMonster(
            thisScene,
            "baby_slime",
            "swarm",
            150,
            125,
            monster.x + i * 20,
            monster.y,
            "follower"
          );
=======

        if (magic.fairy.fairyNum === 3 && magic.fairy.evo2) {
            //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
            let num = Math.floor(Math.random() * 100 + 1);
            if (num <= magic.fairy.deathCount && monster.type !== "boss") {
                if (monster.monSpecie !== "slime") {
                    monster.dieAnim();
                    monster.destroy();
                    player.expUp();
                    monsterCount -= 1;
                } else if (monster.monSpecie === "slime") {
                    for (let i = 0; i < 2; i++) {
                        addMonster(
                            thisScene,
                            "babySlime",
                            "slime",
                            150,
                            125,
                            monster.x + i * 10,
                            monster.y,
                            "follower"
                        );
                    }
                    monster.destroy();
                    monsterCount -= 1;
                }
            }
        }
        if (magic.fairy.stun > 0) {
            monster.cc = "earth";
        }

        monster.invincible = true;
        monster.health -= magic.fairy.dmg * player.dmgMul;

        if (monster.health <= 0 && monster.type !== "boss") {
            if (monster.monSpecie !== "slime") {
                monster.dieAnim();
                monster.destroy();
                player.expUp();
                if (magic.fairy.fairyNum === 2) {
                    let vampireNum = Math.floor(Math.random() * 100 + 1);
                    if (vampireNum < 5) {
                        player.health += magic.fairy.vampire;
                        if (player.health > player.maxHealth) {
                            player.health = player.maxHealth;
                        }
                    }
                }
                monsterCount -= 1;
            } else if (monster.monSpecie === "slime") {
                for (let i = 0; i < 2; i++) {
                    addMonster(
                        thisScene,
                        "babySlime",
                        "slime",
                        150,
                        125,
                        monster.x + i * 20,
                        monster.y,
                        "follower"
                    );
                }
                monster.destroy();
                monsterCount -= 1;
            }
>>>>>>> 6734bfb (#3 :cat: 규냥)
        }
    }
}

=======
>>>>>>> 52852dc (#3 :bug: 오타 및 컨벤션 수정)
=======


=======
  if (!fairySet[nowFairy].anims.isPlaying) {
    fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
  }
}

<<<<<<< HEAD
function attack(magic, monster) {
  if (!monster.invincible) {
    setSound.playSE(12);

    if (magic.pierceCount > 0) {
      magic.pierceCount--;
    } else {
      magic.destroy();
    }

    if (nowFairy === 2) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
      if (num <= fairySet[nowFairy].deathCount) {
        monster.destroy();
        player.expUp();

        monsterCount -= 1;
      }
    }
=======
        player.expUp();

        monsterCount -= 1;
      }
    }
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
=======
    }

    if (nowFairy === 2) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
      if (num <= fairySet[nowFairy].deathCount && monster.type != "boss") {
<<<<<<< HEAD
        monster.die_anim();
        monster.destroy();
        player.expUp();
<<<<<<< HEAD

=======
        if (magic.fairy.fairyNum === 2) {
          let vampireNum = Math.floor(Math.random() * 100 + 1);
          if (vampireNum < 6) {
            player.health += magic.fairy.vampire;
            if (player.health > player.maxHealth) {
              player.health = player.maxHealth;
            }
          }
        }
>>>>>>> 3e6dfa6 (#3 :sparkles: player 기능 구현)
        monsterCount -= 1;
=======
        if (monster.monSpiece != "slime") {
          monster.die_anim();
          monster.destroy();
          player.expUp();
          monsterCount -= 1;
        } else if (monster.monSpiece == "slime") {
          for (let i = 0; i < 2; i++) {
            addMonster(
              thisScene,
              "baby_slime",
              "swarm",
              50,
              125,
              monster.x + i * 10,
              monster.y,
              "follower"
            );
          }
          monster.destroy();
          monsterCount -= 1;
        }
<<<<<<< HEAD
>>>>>>> c931056 (#2 :sparkles: 골렘 패턴 추가)
      }
    }
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    monster.health -= fairySet[nowFairy].dmg;
=======
    monster.health -= fairySet[nowFairy].dmg * player.dmgmul;
>>>>>>> e000c8a (#1 :sparkles: 홀체력 및 게임 오버 구현)
=======
    monster.health -= fairySet[nowFairy].dmg * player.dmgmul;
>>>>>>> ae21595 (#1 :sparkles: 클리어, 인게임 UI 수정)
=======
    monster.health -= (fairySet[nowFairy].dmg * player.dmgmul);
>>>>>>> 8e09cfa (#6 :bug: 상자 크기 수정)
    monster.invincible = true;
    if (monster.health <= 0 && monster.type != "boss") {
      monster.die_anim();
      monster.destroy();
      player.expUp();
      monsterCount -= 1;
=======
        if (monster.monSpiece != 'slime'){
            monster.die_anim();
            monster.destroy();
            player.levelUp();
            monsterCount -= 1;}
        else if (monster.monSpiece == 'slime'){
                for (let i=0; i<2; i++){
                    addMonster(thisScene, 'baby_slime', 'swarm', 50, 125, monster.x+i*20, monster.y, 'follower')
                }
                monster.destroy()
                monsterCount -= 1 }
>>>>>>> e961a66 (#2 :sparkles: 몬스터 = 슬라임)
=======
    } else if (monster.health > 0) {
        hit_anime(monster)
>>>>>>> 2f19786 (#2 :sparkle: 불거인)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
=======
    if (nowFairy === 3) {
      if (monsterSet.children.entries.length !== 0) {
        let monNum = Math.floor(
          Math.random() * monsterSet.children.entries.length
        );
        if (magic.bounceCount <= 0) {
          magic.destroy();
=======
    if (!monster.invincible) {
        setSound.playSE(12);

        if (magic.pierceCount > 0) {
            magic.pierceCount--;
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
        } else {
            magic.destroy();
        }

        if (nowFairy === 3) {
            if (monsterSet.children.entries.length !== 0) {
                let monNum = Math.floor(
                    Math.random() * monsterSet.children.entries.length
                );
                if (magic.bounceCount <= 0) {
                    magic.destroy();
                } else {
                    thisScene.physics.moveTo(
                        magic,
                        monsterSet.children.entries[monNum].x,
                        monsterSet.children.entries[monNum].y,
                        magic.fairy.velocity
                    );
                    magic.bounceCount--;
                }

                let copy = Math.floor(Math.random() * 100 + 1);

                if (magic.isFirst && copy <= fairySet[3].copyCount) {
                    // magic.isFirst = false;
                    let copyMagic = new Magic(thisScene, fairySet[nowFairy]);
                    // copyMagic.isFirst = false;
                    magics.add(copyMagic);
                    copyMagic.setPosition(magic.x, magic.y);
                    if (magic.fairy.evo2) {
                        copyMagic.anims.play("magic" + magic.fairy.fairyNum+"_2", true);
                      }else if(magic.fairy.evo1){
                        copyMagic.anims.play("magic" + magic.fairy.fairyNum+"_1", true);
                    } else {
                        copyMagic.anims.play("magic" + magic.fairy.fairyNum, true);
                    }
                    thisScene.physics.moveTo(
                        copyMagic,
                        -monsterSet.children.entries[monNum].x,
                        -monsterSet.children.entries[monNum].y,
                        copyMagic.fairy.velocity
                    );
                    copyMagic.bounceCount = magic.bounceCount;
                }
            }
        }

        if (magic.fairy.fairyNum === 3 && magic.fairy.evo2) {
            //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
            let num = Math.floor(Math.random() * 100 + 1);
            if (num <= magic.fairy.deathCount && monster.type !== "boss") {
                if (monster.monSpecie !== "slime") {
                    monster.dieAnim();
                    monster.destroy();
                    player.expUp();
                    monsterCount -= 1;
                } else if (monster.monSpecie === "slime") {
                    for (let i = 0; i < 2; i++) {
                        addMonster(
                            thisScene,
                            "babySlime",
                            "slime",
                            150,
                            125,
                            monster.x + i * 10,
                            monster.y,
                            "follower"
                        );
                    }
                    monster.destroy();
                    monsterCount -= 1;
                }
            }
        }
        if (magic.fairy.stun > 0) {
            monster.cc = "earth";
        }

        monster.invincible = true;
        monster.health -= magic.fairy.dmg * player.dmgMul;

        if (monster.health <= 0 && monster.type !== "boss") {
            if (monster.monSpecie !== "slime") {
                monster.dieAnim();
                monster.destroy();
                player.expUp();
                if (magic.fairy.fairyNum === 2) {
                    let vampireNum = Math.floor(Math.random() * 100 + 1);
                    if (vampireNum < 5) {
                        player.health += magic.fairy.vampire;
                        if (player.health > player.maxHealth) {
                            player.health = player.maxHealth;
                        }
                    }
                }
                monsterCount -= 1;
            } else if (monster.monSpecie === "slime") {
                for (let i = 0; i < 2; i++) {
                    addMonster(
                        thisScene,
                        "babySlime",
                        "slime",
                        150,
                        125,
                        monster.x + i * 20,
                        monster.y,
                        "follower"
                    );
                }
                monster.destroy();
                monsterCount -= 1;
            }
        }
<<<<<<< HEAD
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
        monster.destroy();
        monsterCount -= 1;
      }
    }
  }
<<<<<<< HEAD
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
=======
>>>>>>> ad327af (Update game.js)
}
=======
>>>>>>> 39825fe (#2 :recycle: 머지 충돌 해결)
=======
}
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)

>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
// 임시 구멍 구현
<<<<<<< HEAD
function hithole(hole, monster) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  hole.hp -= 1;
  updateHP();
  monster.destroy();
<<<<<<< HEAD
  monsterCount -= 1;
  if (hole.lhp <= 0) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.log("game over")
=======

  monster.health -= (fairySet[nowFairy].dmg*player.dmgmul);
  monster.invincible = true;
  if (monster.health <= 0 && monster.type != "boss") {
    monster.destroy();
    player.expUp();
    monsterCount -= 1;
>>>>>>> 01f5b01 (#3 :sparkles: 스킬 바꾸기)
  }
=======
    }
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
=======
>>>>>>> b36e339 (#7 codemode collider 처리)
  if (!monster.invincible) {
    if (ChoiceCat === 5) {
      let rand = Math.floor(Math.random() * 20);
      setSound.playSE(rand);
    } else {
      setSound.playSE(12);
<<<<<<< HEAD
    }
    if (magic.pierceCount > 0) {
      magic.pierceCount--;
    } else {
      magic.destroy();
    }

    if (nowFairy === 3) {
      if (monsterSet.children.entries.length !== 0) {
        let monNum = Math.floor(
          Math.random() * monsterSet.children.entries.length
        );
        if (magic.bounceCount <= 0) {
          magic.destroy();
=======
    if (!monster.invincible) {
        if (ChoiceCat === 5) {
            let rand = Math.floor(Math.random() * 20);
            setSound.playSE(rand);
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
        } else {
            setSound.playSE(12);
        }
        if (magic.pierceCount > 0) {
            magic.pierceCount--;
        } else {
            magic.destroy();
        }

        if (nowFairy === 3) {
            if (monsterSet.children.entries.length !== 0) {
                let monNum = Math.floor(
                    Math.random() * monsterSet.children.entries.length
                );
                if (magic.bounceCount <= 0) {
                    magic.destroy();
                } else {
                    thisScene.physics.moveTo(
                        magic,
                        monsterSet.children.entries[monNum].x,
                        monsterSet.children.entries[monNum].y,
                        magic.fairy.velocity
                    );
                    magic.bounceCount--;
                }

                let copy = Math.floor(Math.random() * 100 + 1);

                if (magic.isFirst && copy <= fairySet[3].copyCount) {
                    // magic.isFirst = false;
                    let copyMagic = new Magic(thisScene, fairySet[nowFairy]);
                    // copyMagic.isFirst = false;
                    magics.add(copyMagic);
                    copyMagic.setPosition(magic.x, magic.y);
                    if (magic.fairy.evo2) {
                        copyMagic.anims.play("magic" + magic.fairy.fairyNum + "_2", true);
                    } else if (magic.fairy.evo1) {
                        copyMagic.anims.play("magic" + magic.fairy.fairyNum + "_1", true);
                    } else {
                        copyMagic.anims.play("magic" + magic.fairy.fairyNum, true);
                    }
                    thisScene.physics.moveTo(
                        copyMagic,
                        -monsterSet.children.entries[monNum].x,
                        -monsterSet.children.entries[monNum].y,
                        copyMagic.fairy.velocity
                    );
                    copyMagic.bounceCount = magic.bounceCount;
                }
            }
        }

        if (magic.fairy.fairyNum === 3 && magic.fairy.evo2) {
            //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
            let num = Math.floor(Math.random() * 100 + 1);
            if (num <= magic.fairy.deathCount && monster.type !== "boss") {
                if (monster.monSpecie !== "slime") {
                    monster.dieAnim();
                    monster.destroy();
                    player.expUp();
                    monsterCount -= 1;
                } else if (monster.monSpecie === "slime") {
                    for (let i = 0; i < 2; i++) {
                        addMonster(
                            thisScene,
                            "babySlime",
                            "slime",
                            150,
                            125,
                            monster.x + i * 10,
                            monster.y,
                            "follower"
                        );
                    }
                    monster.destroy();
                    monsterCount -= 1;
                }
            }
        }
        if (magic.fairy.stun > 0) {
            monster.cc = "earth";
        }

        monster.invincible = true;
        monster.health -= magic.fairy.dmg * player.dmgMul;

        if (monster.health <= 0 && monster.type !== "boss") {
            if (monster.monSpecie !== "slime") {
                monster.dieAnim();
                monster.destroy();
                player.expUp();
                if (magic.fairy.fairyNum === 2) {
                    let vampireNum = Math.floor(Math.random() * 100 + 1);
                    if (vampireNum < 5) {
                        player.health += magic.fairy.vampire;
                        if (player.health > player.maxHealth) {
                            player.health = player.maxHealth;
                        }
                    }
                }
                monsterCount -= 1;
            } else if (monster.monSpecie === "slime") {
                for (let i = 0; i < 2; i++) {
                    addMonster(
                        thisScene,
                        "babySlime",
                        "slime",
                        150,
                        125,
                        monster.x + i * 20,
                        monster.y,
                        "follower"
                    );
                }
                monster.destroy();
                monsterCount -= 1;
            }
        }
    }
<<<<<<< HEAD
  }
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
=======
    }
    if (magic.pierceCount > 0) {
      magic.pierceCount--;
    } else {
      magic.destroy();
    }

    if (nowFairy === 3) {
      if (monsterSet.children.entries.length !== 0) {
        let monNum = Math.floor(
          Math.random() * monsterSet.children.entries.length
        );
        if (magic.bounceCount <= 0) {
          magic.destroy();
        } else {
          thisScene.physics.moveTo(
            magic,
            monsterSet.children.entries[monNum].x,
            monsterSet.children.entries[monNum].y,
            magic.fairy.velocity
          );
          magic.bounceCount--;
        }

        let copy = Math.floor(Math.random() * 100 + 1);

        if (magic.isFirst && copy <= fairySet[3].copyCount) {
          // magic.isFirst = false;
          let copyMagic = new Magic(thisScene, fairySet[nowFairy]);
          // copyMagic.isFirst = false;
          magics.add(copyMagic);
          copyMagic.setPosition(magic.x, magic.y);
          if (magic.fairy.evo2) {
            copyMagic.anims.play("magic" + magic.fairy.fairyNum + "_2", true);
          } else if (magic.fairy.evo1) {
            copyMagic.anims.play("magic" + magic.fairy.fairyNum + "_1", true);
          } else {
            copyMagic.anims.play("magic" + magic.fairy.fairyNum, true);
          }
          thisScene.physics.moveTo(
            copyMagic,
            -monsterSet.children.entries[monNum].x,
            -monsterSet.children.entries[monNum].y,
            copyMagic.fairy.velocity
          );
          copyMagic.bounceCount = magic.bounceCount;
        }
      }
    }

    if (magic.fairy.fairyNum === 3 && magic.fairy.evo2) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
      if (num <= magic.fairy.deathCount && monster.type !== "boss") {
        if (monster.monSpecie !== "slime") {
          monster.dieAnim();
          monster.destroy();
          player.expUp();
          monsterCount -= 1;
        } else if (monster.monSpecie === "slime") {
          for (let i = 0; i < 2; i++) {
            addMonster(
              thisScene,
              "babySlime",
              "slime",
              150 + difficulty_hp,
              125,
              monster.x + i * 10,
              monster.y,
              "follower"
            );
          }
          monster.destroy();
          monsterCount -= 1;
        }
      }
    }
    if (magic.fairy.stun > 0) {
      monster.cc = "earth";
    }

    monster.invincible = true;
    monster.health -= magic.fairy.dmg * player.dmgMul;

    if (monster.health <= 0 && monster.type !== "boss") {
      if (monster.monSpecie !== "slime") {
        monster.dieAnim();
        monster.destroy();
        player.expUp();
        if (magic.fairy.fairyNum === 2) {
          let vampireNum = Math.floor(Math.random() * 100 + 1);
          if (vampireNum < 5) {
            player.health += magic.fairy.vampire;
            if (player.health > player.maxHealth) {
              player.health = player.maxHealth;
            }
          }
        }
        monsterCount -= 1;
      } else if (monster.monSpecie === "slime") {
        for (let i = 0; i < 2; i++) {
          addMonster(
            thisScene,
            "babySlime",
            "slime",
            150 + difficulty_hp,
            125,
            monster.x + i * 20,
            monster.y,
            "follower"
          );
        }
        monster.destroy();
        monsterCount -= 1;
      }
    }
  }
>>>>>>> b36e339 (#7 codemode collider 처리)
}



<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log("game over");
  }
=======
=======
    if (monster.type = 'wave'){
=======
    if (monster.type === 'wave'){
>>>>>>> 671ee41 (#3 :bug: 몬스터 밸런싱 3차)
=======
    if (monster.type === 'wave') {
>>>>>>> 4cde4e7 (#2 :bug: 불거인 오라 확대)
=======
    if (monster.type === 'wave' && monster.type === 'follower') {
>>>>>>> d83d0dd (#2 :bug: 홀에는 시즈만 가능하게 수정)
=======
=======
function hitHole(hole, monster) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> aabc1ad (#3 :sparkles: 각종 코드 수정)
    if (monster.type === 'wave' || monster.type === 'follower') {
>>>>>>> 061565a (#2 초기 생성 위치 변경)
        return
    }
>>>>>>> 1a3c018 (#2 :bug: 몬스터 밸런스 2차 개선)
=======
    if (monster.type === "wave" || monster.type === "follower") {
        return;
    }
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
    if (monster.type === "wave" || monster.type === "follower") {
        return;
    }
>>>>>>> 6734bfb (#3 :cat: 규냥)
=======
    if (monster.type === "wave" || monster.type === "follower") {
        return;
    }
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
    hole.hp -= 1;
    updateHP();
    monster.destroy();
    monsterCount -= 1;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (hole.lhp <= 0) {
        console.log("game over");
    }
>>>>>>> ad327af (Update game.js)
}

<<<<<<< HEAD
>>>>>>> e000c8a (#1 :sparkles: 홀체력 및 게임 오버 구현)
=======
    console.log("game over");
  }
}

>>>>>>> ae21595 (#1 :sparkles: 클리어, 인게임 UI 수정)
=======
    hole.hp -= 1;
    monster.destroy();
    monsterCount -= 1;
    if (hole.lhp <= 0) {
        console.log("game over")
    }
}


<<<<<<< HEAD
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
// 임시 구멍 구현
=======
// // 임시 구멍 구현
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
// 임시 구멍 구현
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
// function hithole(hole, monster) {
//   hole.hp -= 1;
//   monster.destroy();

//   if (hole.hp <= 0) {
//     console.log("game over");
//   }
// }
=======
>>>>>>> 2425c48 (#2 :sparkle: 몬스터 피격 시 빨개짐)

function addMonster(scene, mon_name, mon_anime, hp, velo, x, y, type) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  monster = new Enemy(scene, hp, velo, x, y, mon_name, mon_anime, type);
=======
  monster = new Enemy(scene, hp, velo, x, y, mon_name, mon_anime, type);
  if (monster.monSpiece == "baby_slime") {
    monster.scale = 0.5;
  }
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
=======
=======
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
>>>>>>> b36e339 (#7 codemode collider 처리)
  if (monster.type === "wave" || monster.type === "follower") {
    return;
  }
  hole.hp -= 1;
  updateHP();
  monster.destroy();
  monsterCount -= 1;
<<<<<<< HEAD
<<<<<<< HEAD
  if (hole.lhp <= 0) {
    console.log("game over");
  }
}

function addMonster(scene, mon_name, mon_anime, hp, velo, x, y, type) {
  monster = new Enemy(scene, hp, velo, x, y, mon_name, mon_anime, type);
  if (monster.monSpecie === "baby_slime") {
    monster.scale = 0.5;
  }
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
  monster.setDepth(2);
  monsterCount += 1;
  monsterSet.add(monster);
  scene.physics.add.collider(monsterSet, monster);
  monster.anime();
<<<<<<< HEAD
<<<<<<< HEAD
=======
    monster = new Enemy(scene, hp, velo, x, y, mon_name, mon_anime, type);
    if (monster.monSpiece == 'baby_slime'){monster.scale=0.5}
=======
=======
>>>>>>> ad327af (Update game.js)
    monster = new Enemy(scene, hp, velo, x, y, mon_name, mon_anime, type);
    if (monster.monSpecie === "baby_slime") {
=======
function addMonster(scene, mon_name, monAnime, hp, velo, x, y, type) {
    monster = new Enemy(scene, hp, velo, x, y, mon_name, monAnime, type);
    if (monster.monSpecie === "babySlime") {
>>>>>>> 38ba311 (#1 :aquarius: 오류 수정)
        monster.scale = 0.5;
    }
<<<<<<< HEAD
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
>>>>>>> ad327af (Update game.js)
    monster.setDepth(2);
    monsterCount += 1;
    monsterSet.add(monster);
    scene.physics.add.collider(monsterSet, monster);
    monster.anime();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e961a66 (#2 :sparkles: 몬스터 = 슬라임)
=======
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
>>>>>>> dcd6a42 (Revert "Merge branch 'develop_KGM' into 'develop'")
=======
>>>>>>> ad327af (Update game.js)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
  if (monster.type === "wave" || monster.type === "follower") {
    return;
  }
  hole.hp -= 1;
  updateHP();
  monster.destroy();
  monsterCount -= 1;
<<<<<<< HEAD
  hole
  .play('hole_damage')
=======
  hole.play("hole_damage");
  if (hole.lhp <= 0) {
    console.log("game over");
  }
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)
=======
  hole.play("hole_damage");
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
  hole.play("hole_damage");
>>>>>>> b36e339 (#7 codemode collider 처리)
  thisScene.time.addEvent({
    delay: 600,
    callback: () => {
      hole.play("new_hole");
    },
    loop: false,
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
    hole
        .play('hole_damage')
    if (hole.lhp <= 0) {
        console.log("game over");
    }
    thisScene.time.addEvent({
        delay: 600,
        callback: () => {
            hole
                .play('new_hole')
        },
        loop: false,
    });
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
}

function addMonster(scene, mon_name, monAnime, hp, velo, x, y, type) {
<<<<<<< HEAD
    monster = new Enemy(scene, hp, velo, x, y, mon_name, monAnime, type).setInteractive({cursor: 'url(images/cursor/aimHover.png), pointer'});
    if (monster.monSpecie === "babySlime") {
        monster.scale = 2;
    } else if (monster.monSpecie === 'alien' || monster.monSpecie === 'alienPlus' || monster.monSpecie === 'fly') {
        monster.scale = 2.5;
    } else if (monster.monSpecie === 'turtle' || monster.monSpecie === 'sonic' || monster.monSpecie === 'slime') {
=======
    hole.play("hole_damage");
    thisScene.time.addEvent({
        delay: 600,
        callback: () => {
            hole.play("new_hole");
        },
        loop: false,
    });
}

function addMonster(scene, mon_name, monAnime, hp, velo, x, y, type) {
=======
    hole.play("hole_damage");
    thisScene.time.addEvent({
        delay: 600,
        callback: () => {
            hole.play("new_hole");
        },
        loop: false,
    });
}

function addMonster(scene, mon_name, monAnime, hp, velo, x, y, type) {
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
    monster = new Enemy(
        scene,
        hp,
        velo,
        x,
        y,
        mon_name,
        monAnime,
        type
    ).setInteractive({cursor: "url(images/cursor/aimHover.png), pointer"});
    if (monster.monSpecie === "babySlime") {
        monster.scale = 2;
    } else if (
        monster.monSpecie === "alien" ||
        monster.monSpecie === "alienPlus" ||
        monster.monSpecie === "fly"
    ) {
        monster.scale = 2.5;
    } else if (
        monster.monSpecie === "turtle" ||
        monster.monSpecie === "sonic" ||
        monster.monSpecie === "slime"
    ) {
<<<<<<< HEAD
>>>>>>> 6734bfb (#3 :cat: 규냥)
=======
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
        monster.scale = 3;
    }
    monster.setDepth(2);
    monsterCount += 1;
    let mw = monster.body.halfWidth;
    let mh = monster.body.halfHeight;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
}

function addMonster(scene, mon_name, monAnime, hp, velo, x, y, type) {
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
}

function addMonster(scene, mon_name, monAnime, hp, velo, x, y, type) {
>>>>>>> b36e339 (#7 codemode collider 처리)
  monster = new Enemy(
    scene,
    hp,
    velo,
    x,
    y,
    mon_name,
    monAnime,
    type
  ).setInteractive({ cursor: "url(images/cursor/aimHover.png), pointer" });
  if (monster.monSpecie === "babySlime") {
    monster.scale = 2;
  } else if (
    monster.monSpecie === "alien" ||
<<<<<<< HEAD
<<<<<<< HEAD
    monster.monSpecie === "alienPlus"
=======
    monster.monSpecie === "alienPlus" ||
    monster.monSpecie === "fly"
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
    monster.monSpecie === "alienPlus" ||
    monster.monSpecie === "fly"
>>>>>>> b36e339 (#7 codemode collider 처리)
  ) {
    monster.scale = 2.5;
  } else if (
    monster.monSpecie === "turtle" ||
    monster.monSpecie === "sonic" ||
    monster.monSpecie === "slime"
  ) {
    monster.scale = 3;
  }
  monster.setDepth(2);
  monsterCount += 1;
  let mw = monster.body.halfWidth;
  let mh = monster.body.halfHeight;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> aaa2437 (#1 :sparkles: 쿨타임 보이는거 구현 ㅎㅎ)

<<<<<<< HEAD
<<<<<<< HEAD
  monster.setCircle(mw, mh - mw, mh - mw);
=======
  monster.setCircle(mh / 2, mw - (mh / 2), mw);
>>>>>>> 4e05805 (#2 :sparkles: 몬스터 디자인 수정 및 레벨 디자인 수정)
=======

  monster.setCircle(mh / 2, mw - mh / 2, mw);
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
  monsterSet.add(monster);
  scene.physics.add.collider(monsterSet, monster);
<<<<<<< HEAD
  monster.anime();
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
=======
    monster.setCircle(mw, mh - mw, mh - mw);
    monsterSet.add(monster);
    scene.physics.add.collider(monsterSet, monster);
    monster.anime();
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
  monster.anime(player);
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
=======
=======
=======
>>>>>>> b36e339 (#7 codemode collider 처리)

  monster.setCircle(mh / 2, mw - mh / 2, mw);
  monsterSet.add(monster);
  scene.physics.add.collider(monsterSet, monster);
  monster.anime(player);
}
>>>>>>> ab7abba (#1 :fire: 불거인 수정)

    monster.setCircle(mh / 2, mw - mh / 2, mw);
    monsterSet.add(monster);
    scene.physics.add.collider(monsterSet, monster);
    monster.anime(player);
>>>>>>> 6734bfb (#3 :cat: 규냥)
}
<<<<<<< HEAD
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
=======

<<<<<<< HEAD
function destroyhole(hole, golem) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.log("작동");
  if (golem.bossSpiece == "golem") {
    hole.hp -= 9999;
    golem.destroy();
  }
=======
    console.log('작동')
    if (golem.bossSpiece == 'golem') {
        hole.hp -= 9999
        golem.destroy()
    }
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
    console.log("작동");
=======
>>>>>>> 4cde4e7 (#2 :bug: 불거인 오라 확대)
    if (golem.bossSpiece == "golem") {
=======
function destroyHole(hole, golem) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (golem.bossSpiece === "golem") {
>>>>>>> aabc1ad (#3 :sparkles: 각종 코드 수정)
=======
    if (golem.bossSpecie === "golem") {
>>>>>>> 3f5551d (#2 :alien: game.js 수정)
        hole.hp -= 9999;
        golem.destroy();
    }
>>>>>>> ad327af (Update game.js)
=======
  if (golem.bossSpiece === "golem") {
    hole.hp -= 9999;
    golem.destroy();
  }
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
=======
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
>>>>>>> b36e339 (#7 codemode collider 처리)
  if (golem.bossSpecie === "golem") {
    hole.hp -= 9999;
    golem.destroy();
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
=======
=======
>>>>>>> 6734bfb (#3 :cat: 규냥)
=======
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
    if (golem.bossSpecie === "golem") {
        hole.hp -= 9999;
        golem.destroy();
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
>>>>>>> 6734bfb (#3 :cat: 규냥)
=======
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
=======
>>>>>>> b36e339 (#7 codemode collider 처리)
}

function siegeSpawn() {
  randomLocation = Math.floor(Math.random() * 4) + 1;
  if (randomLocation === 1) {
    monX = Phaser.Math.Between(hole.x - 1500, hole.x + 1500);
    monY = Phaser.Math.Between(hole.y + 1500, hole.y + 1510);
  } else if (randomLocation === 2) {
    monX = Phaser.Math.Between(hole.x - 1500, hole.x + 1500);
    monY = Phaser.Math.Between(hole.y - 1500, hole.y - 1510);
  } else if (randomLocation === 3) {
    monX = Phaser.Math.Between(hole.x - 1500, hole.x - 1500);
    monY = Phaser.Math.Between(hole.y - 1500, hole.y + 1500);
  } else if (randomLocation === 4) {
    monX = Phaser.Math.Between(hole.x + 1500, hole.x + 1500);
    monY = Phaser.Math.Between(hole.y - 1500, hole.y + 1500);
  }
}

function enemySpawn(scene) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
    randomLocation = Math.floor(Math.random() * 4) + 1;
    if (randomLocation === 1) {
        monX = Phaser.Math.Between(player.x - 500, player.x + 500);
        monY = Phaser.Math.Between(player.y + 500, player.y + 510);
    } else if (randomLocation === 2) {
        monX = Phaser.Math.Between(player.x - 500, player.x + 500);
        monY = Phaser.Math.Between(player.y - 500, player.y - 510);
    } else if (randomLocation === 3) {
        monX = Phaser.Math.Between(player.x - 500, player.x - 500);
        monY = Phaser.Math.Between(player.y - 500, player.y + 500);
    } else if (randomLocation === 4) {
        monX = Phaser.Math.Between(player.x + 500, player.x + 500);
        monY = Phaser.Math.Between(player.y - 500, player.y + 500);
    }
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function slime_pattern(scene, pt, x, y) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (pt != 16) {
        pt *= 2
        console.log(pt)
=======
function slime_pattern(scene, pt, x, y) {
<<<<<<< HEAD
    if (pt != 16) {
        pt *= 2
>>>>>>> 9ff3036 (#2 :sparkle: 코드 정리)
        for (let i = 0; i < pt; i++) {
            // 분열될 때마다 체력 감소 구현하기
            if (pt < 4) {
                slime_king = new Boss(scene, 100, 100, x + i * 100, y, 'slime_king', 'swarm', 2.5, pt, 'boss')
            } else if (pt < 8) {
                slime_king = new Boss(scene, 50, 100, x + i * 50, y, 'slime_king', 'swarm', 1.25, pt, 'boss')
            } else {
                slime_king = new Boss(scene, 25, 100, x + i * 25, y, 'slime_king', 'swarm', 0.5, pt, 'boss')
=======
    if (pt != 16) {
        pt *= 2;
        for (let i = 0; i < pt; i++) {
=======
    if (pt != 16) {
=======
=======
function slimePattern(scene, pt, x, y) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f5551d (#2 :alien: game.js 수정)
    if (pt !== 16) {
>>>>>>> aabc1ad (#3 :sparkles: 각종 코드 수정)
        pt *= 2;
        for (let i = 0; i < 2; i++) {
>>>>>>> ad327af (Update game.js)
=======
    if (pt !== 16) {
        pt *= 2;
        for (let i = 0; i < 2; i++) {
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
            // 분열될 때마다 체력 감소 구현하기
            if (pt < 4) {
                slimeKing = new Boss(
                    scene,
                    200,
                    100,
                    x + i * 100,
                    y,
                    "slimeKing",
<<<<<<< HEAD
                    "swarm",
=======
                    "slimeKing",
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
                    2.5,
                    pt,
                    "boss"
                );
            } else if (pt < 8) {
                slimeKing = new Boss(
                    scene,
                    100,
                    100,
                    x + i * 50,
                    y,
                    "slimeKing",
<<<<<<< HEAD
                    "swarm",
=======
                    "slimeKing",
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
                    1.25,
                    pt,
                    "boss"
                );
            } else {
                slimeKing = new Boss(
                    scene,
                    50,
                    100,
                    x + i * 25,
                    y,
<<<<<<< HEAD
                    "slimeKing",
<<<<<<< HEAD
                    "swarm",
=======
                    "slimeKing",
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
                    "slimeKing_end",
                    "slimeKing",
>>>>>>> 4e05805 (#2 :sparkles: 몬스터 디자인 수정 및 레벨 디자인 수정)
                    0.5,
                    pt,
                    "boss"
                );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
>>>>>>> ad327af (Update game.js)
            }
<<<<<<< HEAD
            slime_king.anime();
            scene.physics.add.collider(bossSet, slime_king);
            bossSet.add(slime_king);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

function enemySpawn(scene){
  randomLocation = Math.floor(Math.random() * 4) + 1
  if (randomLocation === 1) {
    monX = Phaser.Math.Between(player.x - 500, player.x + 500);
    monY = Phaser.Math.Between(player.y + 500, player.y + 510);
  }

  else if (randomLocation === 2) {
    monX = Phaser.Math.Between(player.x - 500, player.x + 500);
    monY = Phaser.Math.Between(player.y - 500, player.y - 510);
  }

  else if (randomLocation === 3) {
    monX = Phaser.Math.Between(player.x - 500, player.x - 500);
    monY = Phaser.Math.Between(player.y - 500, player.y + 500);
  }

  else if (randomLocation === 4) {
    monX = Phaser.Math.Between(player.x + 500, player.x + 500);
    monY = Phaser.Math.Between(player.y - 500, player.y + 500);}
}

function slime_pattern(scene,pt,x,y){
  if(pt != 16){
      pt *= 2
      for (let i = 0; i<pt; i++){
        // 분열될 때마다 체력 감소 구현하기
        if(pt < 4){
          slime_king = new Boss(scene,100,100,x+i*100,y,'slime_king','swarm',2.5,pt,'boss')}
        else if (pt < 8){
          slime_king = new Boss(scene,50,100,x+i*50,y,'slime_king','swarm',1.25,pt,'boss')
>>>>>>> 344a1b1 (#2 :sparkles: 폭발 이펙트)
=======
>>>>>>> 9ff3036 (#2 :sparkle: 코드 정리)
=======
>>>>>>> cee2f61 (#2 :sparkles: 몬스터 기능 추가)
=======
            slimeKing.anime();
            scene.physics.add.collider(bossSet, slimeKing);
            bossSet.add(slimeKing);
>>>>>>> 3f5551d (#2 :alien: game.js 수정)
        }
=======
  if (pt != 16) {
    pt *= 2;
<<<<<<< HEAD
    console.log(pt);
=======
  if (pt != 16) {
    pt *= 2;
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
=======
  if (pt != 16) {
    pt *= 2;
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
  if (pt != 16) {
    pt *= 2;
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
    for (let i = 0; i < pt; i++) {
=======
    for (let i = 0; i < 2; i++) {
>>>>>>> 321a471 (#2 :bug: 슬라임 분열 수 감소)
=======
  if (pt !== 16) {
    pt *= 2;
    for (let i = 0; i < 2; i++) {
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
      // 분열될 때마다 체력 감소 구현하기
      if (pt < 4) {
        slime_king = new Boss(
          scene,
<<<<<<< HEAD
          100,
=======
          200,
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
          100,
          x + i * 100,
          y,
          "slime_king",
=======
  if (pt !== 16) {
    pt *= 2;
    for (let i = 0; i < 2; i++) {
      // 분열될 때마다 체력 감소 구현하기
      if (pt < 4) {
        slimeKing = new Boss(
          scene,
          200,
          100,
          x + i * 100,
          y,
          "slimeKing",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
          "swarm",
=======
          "slime",
>>>>>>> fa0b105 (#2 :sparkles:  몬스터 스프라이트 적용 1차)
=======
          "slimeKing",
>>>>>>> 74c4598 (#2 :sparkle: 슬라임 변경 및 콜라이더 변경)
          2.5,
          pt,
          "boss"
        );
      } else if (pt < 8) {
<<<<<<< HEAD
        slime_king = new Boss(
          scene,
<<<<<<< HEAD
          50,
=======
          100,
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
          100,
          x + i * 50,
          y,
          "slime_king",
=======
        slimeKing = new Boss(
          scene,
          100,
          100,
          x + i * 50,
          y,
          "slimeKing",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
          "swarm",
=======
          "slime",
>>>>>>> fa0b105 (#2 :sparkles:  몬스터 스프라이트 적용 1차)
=======
          "slimeKing",
>>>>>>> 74c4598 (#2 :sparkle: 슬라임 변경 및 콜라이더 변경)
          1.25,
          pt,
          "boss"
        );
      } else {
<<<<<<< HEAD
        slime_king = new Boss(
          scene,
<<<<<<< HEAD
          25,
=======
          50,
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
          100,
          x + i * 25,
          y,
          "slime_king",
=======
        slimeKing = new Boss(
          scene,
          50,
          100,
          x + i * 25,
          y,
<<<<<<< HEAD
          "slimeKing",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
          "swarm",
=======
          "slime",
>>>>>>> fa0b105 (#2 :sparkles:  몬스터 스프라이트 적용 1차)
=======
=======
          "slimeKing_end",
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
          "slimeKing",
>>>>>>> 74c4598 (#2 :sparkle: 슬라임 변경 및 콜라이더 변경)
          0.5,
          pt,
          "boss"
        );
      }
<<<<<<< HEAD
<<<<<<< HEAD
      slime_king.anime();
      scene.physics.add.collider(bossSet, slime_king);
      bossSet.add(slime_king);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
=======
>>>>>>> 7df4765 (#1 :bug: 버그 수 정)
=======
>>>>>>> 02b1079 (#1 :poop: 누가 내 코드 건드렸어!!!)
=======
>>>>>>> 3b1904d (#1 :sparkles: tower Ui)
=======
        }
>>>>>>> d0fc426 (#2 :sparkles: 불거인)
=======
        }
>>>>>>> ad327af (Update game.js)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
      slimeKing.anime();
=======
      slimeKing.anime(player);
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
      scene.physics.add.collider(bossSet, slimeKing);
      let mw = slimeKing.body.halfWidth;
      let mh = slimeKing.body.halfHeight;
    
      slimeKing.setCircle(mw, mh - mw, mh - mw);
      bossSet.add(slimeKing);
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
=======
            }
            slimeKing.anime();
            scene.physics.add.collider(bossSet, slimeKing);
            let mw = slimeKing.body.halfWidth;
            let mh = slimeKing.body.halfHeight;
            slimeKing.setCircle(mh / 2, mw - (mh / 2), mw);
            bossSet.add(slimeKing);
        }
>>>>>>> 8283fbf (#2 :bug: 슬라임킹 원형 처리)
=======
}

function slimePattern(scene, pt, x, y) {
    if (pt !== 16) {
        pt *= 2;
        for (let i = 0; i < 2; i++) {
            // 분열될 때마다 체력 감소 구현하기
            if (pt < 4) {
                slimeKing = new Boss(
                    scene,
                    200,
                    100,
                    x + i * 100,
                    y,
                    "slimeKing",
                    "slimeKing",
                    2.5,
                    pt,
                    "boss"
                );
            } else if (pt < 8) {
                slimeKing = new Boss(
                    scene,
                    100,
                    100,
                    x + i * 50,
                    y,
                    "slimeKing",
                    "slimeKing",
                    1.25,
                    pt,
                    "boss"
                );
            } else {
                slimeKing = new Boss(
                    scene,
                    50,
                    100,
                    x + i * 25,
                    y,
                    "slimeKing_end",
                    "slimeKing",
                    0.5,
                    pt,
                    "boss"
                );
            }
            slimeKing.anime(player);
            scene.physics.add.collider(bossSet, slimeKing);
            let mw = slimeKing.body.halfWidth;
            let mh = slimeKing.body.halfHeight;
            slimeKing.setCircle(mh / 2, mw - mh / 2, mw);
            bossSet.add(slimeKing);
        }
>>>>>>> 6734bfb (#3 :cat: 규냥)
=======
  randomLocation = Math.floor(Math.random() * 4) + 1;
  if (randomLocation === 1) {
    monX = Phaser.Math.Between(player.x - 500, player.x + 500);
    monY = Phaser.Math.Between(player.y + 500, player.y + 510);
  } else if (randomLocation === 2) {
    monX = Phaser.Math.Between(player.x - 500, player.x + 500);
    monY = Phaser.Math.Between(player.y - 500, player.y - 510);
  } else if (randomLocation === 3) {
    monX = Phaser.Math.Between(player.x - 500, player.x - 500);
    monY = Phaser.Math.Between(player.y - 500, player.y + 500);
  } else if (randomLocation === 4) {
    monX = Phaser.Math.Between(player.x + 500, player.x + 500);
    monY = Phaser.Math.Between(player.y - 500, player.y + 500);
  }
}

function slimePattern(scene, pt, x, y) {
=======
  randomLocation = Math.floor(Math.random() * 4) + 1;
  if (randomLocation === 1) {
    monX = Phaser.Math.Between(player.x - 500, player.x + 500);
    monY = Phaser.Math.Between(player.y + 500, player.y + 510);
  } else if (randomLocation === 2) {
    monX = Phaser.Math.Between(player.x - 500, player.x + 500);
    monY = Phaser.Math.Between(player.y - 500, player.y - 510);
  } else if (randomLocation === 3) {
    monX = Phaser.Math.Between(player.x - 500, player.x - 500);
    monY = Phaser.Math.Between(player.y - 500, player.y + 500);
  } else if (randomLocation === 4) {
    monX = Phaser.Math.Between(player.x + 500, player.x + 500);
    monY = Phaser.Math.Between(player.y - 500, player.y + 500);
  }
}

function slimePattern(scene, pt, x, y) {
>>>>>>> b36e339 (#7 codemode collider 처리)
  if (pt !== 16) {
    pt *= 2;
    for (let i = 0; i < 2; i++) {
      // 분열될 때마다 체력 감소 구현하기
      if (pt < 4) {
        slimeKing = new Boss(
          scene,
          200 + difficulty_hp,
          100,
          x + i * 100,
          y,
          "slimeKing",
          "slimeKing",
          2.5,
          pt,
          "boss"
        );
      } else if (pt < 8) {
        slimeKing = new Boss(
          scene,
          100 + difficulty_hp,
          100,
          x + i * 50,
          y,
          "slimeKing",
          "slimeKing",
          1.25,
          pt,
          "boss"
        );
      } else {
        slimeKing = new Boss(
          scene,
          50 + difficulty_hp,
          100,
          x + i * 25,
          y,
          "slimeKing_end",
          "slimeKing",
          0.5,
          pt,
          "boss"
        );
      }
      slimeKing.anime(player);
      scene.physics.add.collider(bossSet, slimeKing);
      let mw = slimeKing.body.halfWidth;
      let mh = slimeKing.body.halfHeight;
      slimeKing.setCircle(mh / 2, mw - mh / 2, mw);
      bossSet.add(slimeKing);
<<<<<<< HEAD
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
}

function slimePattern(scene, pt, x, y) {
    if (pt !== 16) {
        pt *= 2;
        for (let i = 0; i < 2; i++) {
            // 분열될 때마다 체력 감소 구현하기
            if (pt < 4) {
                slimeKing = new Boss(
                    scene,
                    200,
                    100,
                    x + i * 100,
                    y,
                    "slimeKing",
                    "slimeKing",
                    2.5,
                    pt,
                    "boss"
                );
            } else if (pt < 8) {
                slimeKing = new Boss(
                    scene,
                    100,
                    100,
                    x + i * 50,
                    y,
                    "slimeKing",
                    "slimeKing",
                    1.25,
                    pt,
                    "boss"
                );
            } else {
                slimeKing = new Boss(
                    scene,
                    50,
                    100,
                    x + i * 25,
                    y,
                    "slimeKing_end",
                    "slimeKing",
                    0.5,
                    pt,
                    "boss"
                );
            }
            slimeKing.anime(player);
            scene.physics.add.collider(bossSet, slimeKing);
            let mw = slimeKing.body.halfWidth;
            let mh = slimeKing.body.halfHeight;
            slimeKing.setCircle(mh / 2, mw - mh / 2, mw);
            bossSet.add(slimeKing);
        }
>>>>>>> ab7abba (#1 :fire: 불거인 수정)
=======
>>>>>>> b36e339 (#7 codemode collider 처리)
    }
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function hit_anime(monster) {
    monster
        .setTint(0xff0000)
    thisScene.time.addEvent({
        delay: 150, callback: () => {
            if (monster.active == true) {
                monster.anime()
            }
        }, loop: false
    });

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b1ee08a (#2 :recycle:  몬스터 피격 개선)


// slime_pattern(){
//   if(this.pt == 1){
//       bossSet[0].destory()
//       for (let i; i<10; i++){
//           slime_king_copy = new Boss(scene,50,100,boss.x,boss.y,'slime_king_2','swarm',5,2)
//           slime_king.anime()
//           bossSet.add(slime_king_copy)
//       }
      
//   }
// }
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
=======
>>>>>>> 54e99e5 (#2 :sparkle: 슬라임 패턴 구현)
=======
}
<<<<<<< HEAD
>>>>>>> 2425c48 (#2 :sparkle: 몬스터 피격 시 빨개짐)
=======

>>>>>>> 2f19786 (#2 :sparkle: 불거인)
=======
>>>>>>> 318c5d7 (#3 :bug: 마녀버그 수정)
=======
>>>>>>> 075b39a (#1 :sparkles: 무기 업그레이드 완성)
//enemy end

//map start
function getChunk(x, y) {
  let chunk = null;
  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i].x === x && chunks[i].y === y) {
      chunk = chunks[i];
    }
  }
  return chunk;
}

//map end
