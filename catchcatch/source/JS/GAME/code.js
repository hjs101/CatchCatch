import Player from "./CodeObj/player.js";
<<<<<<< HEAD
import { Chunk, Tile } from "./entities.js";
import { sockConnect } from "./CodeObj/Execlient.js";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import IncodeUI from "../UI/incode-ui.js";
=======
=======
import IncodeUI, { makeranking } from "../UI/incode-ui.js";
>>>>>>> d997832 (#2 #3 :sparkles: 폭발 범위 원형 변경 및 사이즈 조정)
=======
import IncodeUI, { makeranking, codegameclear } from "../UI/incode-ui.js";
>>>>>>> e1abf85 (#7 코드모드 연습 결과창 업데이트)
import Enemy from "./CodeObj/enemy.js";
import Magic from "./CodeObj/magic.js";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8674ac1 (#7 :sparkles: 코드모드 공격 기능 구현)
=======
=======

>>>>>>> 2965cee (#2 :sparkles: 코드캐치 피격 이펙트)
import { showscore } from "../UI/incode-ui.js";
>>>>>>> af488ab (#1 :sparkles: UI score 추가)
=======
import {Chunk, Tile} from "./entities.js";
import {sockConnect} from "./CodeObj/Execlient.js";
import IncodeUI, {makeranking, codegameclear} from "../UI/incode-ui.js";
import Enemy from "./CodeObj/enemy.js";
import Magic from "./CodeObj/magic.js";
import {showscore} from "../UI/incode-ui.js";
import {setSound} from "../SOUND/sound";
=======
import { showscore, LoseLife } from "../UI/incode-ui.js";
import { setSound } from "../SOUND/sound";
>>>>>>> 997419e (#7 ㅋㅗㄷㅡㅋㅐㅊㅣ ㄱㅐㅅㅓㄴ)

<<<<<<< HEAD
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)
export const codeConfig = {
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
            debug: true,
            fixedStep: false,
        },
=======
export let codeConfig = {
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
      debug: debugmode,
      debugShowVelocity: true,
      fixedStep: false,
>>>>>>> 494dd23 (#7 :sparkles: debug 모드 온오프 수정)
    },
};

// 우리가 전달할 정보 --------------------------
let monsterpos = [
    [1, 2],
    [0, 2],
    [4, 5],
    [6, 2],
    [1, 2],
];
// ----------------------------------------
let monX;
let monY;
let randomLocation;
let cats;
let maxMon;
let monCount = 0;
var player = "";
global.codeScene = "";
let codeStart;
var gameOver = false;
var scoreText;
global.gameTimer = 0;
global.score = 0;
global.magicSet = "";
var map;
var chunks = [];
export var camera;
let frameTime = 0;
let timer = 0;
let monTimer = 30;
let spawnTimer = 0;
let monSpawn = 0;
// 목숨제
global.health = 3;

// 몬스터 변수 선언
var monster;
global.codeMonsterSet = "";
global.codeEnemySet = "";

export function config() {
  codeConfig = {
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
        debug: debugmode,
        debugShowVelocity: false,
        fixedStep: false,
      },
    },
  };
}

function preload() {
<<<<<<< HEAD
    //map start
    this.load.image("sprWater", "images/map/sprWater.png");
    this.load.image("sprSand", "images/map/sprSand.png");
    this.load.image("sprGrass", "images/map/sprGrass.png");
    //map end
    let frameTime = 0;
=======
  //map start
  this.load.image("sprWater", "images/map/sprWater.png");
  this.load.image("sprSand", "images/map/sprSand.png");
  this.load.image("sprGrass", "images/map/sprGrass.png");
  this.load.image("ssafy", "images/map/ssafy.png");
  //map end
  let frameTime = 0;
>>>>>>> d1b5041 (#7 :sparkles: 코딩모드 싸피 입히기)

<<<<<<< HEAD
  //player start
  // 플레이어 스프라이트
  this.load.spritesheet("tower1", "images/cattower/8_ssafy.png", {
    frameWidth: 38,
    frameHeight: 64,
  });

  this.load.spritesheet("tower2", "images/cattower/lucky_ssafy.png", {
    frameWidth: 38,
    frameHeight: 64,
  });
  // player end
=======
    //player start
    // 플레이어 스프라이트
    this.load.spritesheet("tower1", "images/cattower/towerFinal.png", {
        frameWidth: 38,
        frameHeight: 64,
    });
    // player end
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)

<<<<<<< HEAD
    //attack sprite start
    this.load.spritesheet(
        "magic1",
        "images/attack/weapon/code_tower_normal.png",
        {
            frameWidth: 64,
            frameHeight: 64,
            endFrame: 5,
        }
    );
    this.load.spritesheet(
        "magic2",
        "images/attack/weapon/code_tower_thunder.png",
        {
            frameWidth: 64,
            frameHeight: 64,
            endFrame: 5,
        }
    );
    this.load.spritesheet("magic3", "images/attack/weapon/code_tower_fire.png", {
        frameWidth: 64,
        frameHeight: 64,
        endFrame: 5,
    });
    this.load.spritesheet("magic4", "images/attack/weapon/code_tower_water.png", {
        frameWidth: 64,
        frameHeight: 64,
        endFrame: 5,
    });
    this.load.spritesheet("magic5", "images/attack/weapon/code_tower_earth.png", {
        frameWidth: 64,
        frameHeight: 64,
        endFrame: 5,
    });
    //attack sprite end
=======
  //attack sprite start
  this.load.spritesheet("magic1", "images/attack/weapon/normalMagic.png", {
    frameWidth: 64,
    frameHeight: 64,
    endFrame: 5,
  });
  this.load.spritesheet("magic2", "images/attack/weapon/thunderMagic.png", {
    frameWidth: 64,
    frameHeight: 64,
    endFrame: 5,
  });
  this.load.spritesheet("magic3", "images/attack/weapon/fireMagic.png", {
    frameWidth: 64,
    frameHeight: 64,
    endFrame: 5,
  });
  this.load.spritesheet("magic4", "images/attack/weapon/waterMagic.png", {
    frameWidth: 64,
    frameHeight: 64,
    endFrame: 5,
  });
  this.load.spritesheet("magic5", "images/attack/weapon/earthMagic.png", {
    frameWidth: 64,
    frameHeight: 64,
    endFrame: 5,
  });
  //attack sprite end
>>>>>>> b698733 (#7 :sparkles: 코딩모드 업데이트)

<<<<<<< HEAD
    //object sprite start
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
=======
  //object sprite start
  this.load.spritesheet("cat1", "images/cat/cat8.png", {
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
  // 몬스터
  this.load.spritesheet("monster_die", "images/monster/monster_die2.png", {
    frameWidth: 64,
    frameHeight: 64,
  });

  this.load.spritesheet("alien", "images/monster/normalSlime.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  this.load.spritesheet("worm", "images/monster/thunderSlime.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  this.load.spritesheet("sonic", "images/monster/fireSlime.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  this.load.spritesheet("turtle", "images/monster/waterSlime.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  this.load.spritesheet("slime", "images/monster/earthSlime.png", {
    frameWidth: 48,
    frameHeight: 48,
  });
>>>>>>> d1b5041 (#7 :sparkles: 코딩모드 싸피 입히기)

<<<<<<< HEAD
  //object sprite end
}

function create() {
  // resource load start
  IncodeUI("디펜스");
  monCount = 0;
  chunks = [];
  score = 0;
  health = 3;
  spawnTimer = 0;
  monSpawn = 30;
  codeStart = true;
  this.anims.create({
    key: "tower1_idle",
    frames: this.anims.generateFrameNumbers("tower1", { start: 0, end: 1 }),
    frameRate: 8,
    repeat: -1,
  });
  this.anims.create({
    key: "tower2_idle",
    frames: this.anims.generateFrameNumbers("tower2", { start: 0, end: 1 }),
    frameRate: 8,
    repeat: -1,
  });
  // ============== 몬스터 스프라이트 애니메이션 목록 ==================
  this.anims.create({
    key: "alien",
    frames: this.anims.generateFrameNumbers("alien", { start: 0, end: 6 }),
    frameRate: 7,
    repeat: -1, // -1은 무한 반복 의미
  });
=======
    this.load.spritesheet("fly", "images/monster/fly.png", {
        frameWidth: 48,
        frameHeight: 48,
    });
    //object sprite end
}

<<<<<<< HEAD
function create() {
    // resource load start
    IncodeUI();
    monCount = 0;
    chunks = [];
    score = 0;
    codeStart = true;
    this.anims.create({
        key: "tower1_idle",
        frames: this.anims.generateFrameNumbers("tower1", {start: 0, end: 2}),
        frameRate: 8,
        repeat: -1,
    });
    this.anims.create({
        key: "tower1_attack",
        frames: this.anims.generateFrameNumbers("tower1", {start: 3, end: 8}),
        frameRate: 16,
        repeat: -1,
    });
    // ============== 몬스터 스프라이트 애니메이션 목록 ==================
    this.anims.create({
        key: "alien",
        frames: this.anims.generateFrameNumbers("alien", {start: 9, end: 14}),
        frameRate: 3,
        repeat: -1, // -1은 무한 반복 의미
    });
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)
=======
  this.anims.create({
    key: "worm",
    frames: this.anims.generateFrameNumbers("worm", { start: 0, end: 6 }),
    frameRate: 7,
    repeat: -1,
  });
>>>>>>> d1b5041 (#7 :sparkles: 코딩모드 싸피 입히기)

    this.anims.create({
        key: "worm",
        frames: this.anims.generateFrameNumbers("worm", {start: 0, end: 2}),
        frameRate: 3,
        repeat: -1,
    });

<<<<<<< HEAD
  this.anims.create({
    key: "sonic",
    frames: this.anims.generateFrameNumbers("sonic", { start: 0, end: 6 }),
    frameRate: 7,
    repeat: -1,
  });
=======
    this.anims.create({
        key: "alienPlus",
        frames: this.anims.generateFrameNumbers("alienPlus", {start: 9, end: 14}),
        frameRate: 3,
        repeat: -1,
    });

<<<<<<< HEAD
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
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)
=======
  this.anims.create({
    key: "turtle",
    frames: this.anims.generateFrameNumbers("turtle", { start: 0, end: 6 }),
    frameRate: 7,
    repeat: -1,
  });

  this.anims.create({
    key: "slime",
    frames: this.anims.generateFrameNumbers("slime", { start: 0, end: 6 }),
    frameRate: 7,
    repeat: -1,
  });
>>>>>>> d1b5041 (#7 :sparkles: 코딩모드 싸피 입히기)

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

<<<<<<< HEAD
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
    key: "magic1",
    frames: this.anims.generateFrameNumbers("magic1", { start: 1, end: 1 }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic2",
    frames: this.anims.generateFrameNumbers("magic2", { start: 1, end: 1 }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic3",
    frames: this.anims.generateFrameNumbers("magic3", { start: 1, end: 1 }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic4",
    frames: this.anims.generateFrameNumbers("magic4", { start: 1, end: 1 }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "magic5",
    frames: this.anims.generateFrameNumbers("magic5", { start: 1, end: 1 }),
    frameRate: 20,
    repeat: -1,
  });
  this.anims.create({
    key: "cat1_turn",
    frames: this.anims.generateFrameNumbers("cat1", {
      start: 0,
      end: 0,
    }),
    frameRate: 10,
  });
  this.anims.create({
    key: "cat1_left",
    frames: this.anims.generateFrameNumbers("cat1", {
      start: 1,
      end: 7,
    }),
    frameRate: 14,
    repeat: -1,
  });
  this.anims.create({
    key: "cat1_right",
    frames: this.anims.generateFrameNumbers("cat1", {
      start: 1,
      end: 7,
    }),
    frameRate: 14,
    repeat: -1,
  });
  this.anims.create({
    key: "cat2_turn",
    frames: this.anims.generateFrameNumbers("cat2", {
      start: 0,
      end: 0,
    }),
    frameRate: 10,
  });
  this.anims.create({
    key: "cat2_left",
    frames: this.anims.generateFrameNumbers("cat2", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat2_right",
    frames: this.anims.generateFrameNumbers("cat2", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat3_turn",
    frames: this.anims.generateFrameNumbers("cat3", {
      start: 0,
      end: 0,
    }),
    frameRate: 10,
  });
  this.anims.create({
    key: "cat3_left",
    frames: this.anims.generateFrameNumbers("cat3", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat3_right",
    frames: this.anims.generateFrameNumbers("cat3", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat4_turn",
    frames: this.anims.generateFrameNumbers("cat4", {
      start: 0,
      end: 0,
    }),
    frameRate: 10,
  });
  this.anims.create({
    key: "cat4_left",
    frames: this.anims.generateFrameNumbers("cat4", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat4_right",
    frames: this.anims.generateFrameNumbers("cat4", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat5_turn",
    frames: this.anims.generateFrameNumbers("cat5", {
      start: 0,
      end: 0,
    }),
    frameRate: 10,
  });
  this.anims.create({
    key: "cat5_left",
    frames: this.anims.generateFrameNumbers("cat5", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat5_right",
    frames: this.anims.generateFrameNumbers("cat5", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "cat6_turn",
    frames: this.anims.generateFrameNumbers("cat6", {
      start: 0,
      end: 0,
    }),
    frameRate: 10,
  });
  this.anims.create({
    key: "cat6_left",
    frames: this.anims.generateFrameNumbers("cat6", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat6_right",
    frames: this.anims.generateFrameNumbers("cat6", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat7_turn",
    frames: this.anims.generateFrameNumbers("cat7", {
      start: 0,
      end: 0,
    }),
    frameRate: 10,
  });
  this.anims.create({
    key: "cat7_left",
    frames: this.anims.generateFrameNumbers("cat7", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "cat7_right",
    frames: this.anims.generateFrameNumbers("cat7", {
      start: 1,
      end: 7,
    }),
    frameRate: 10,
    repeat: -1,
  });
  // resource load end
  var ssafy = this.add.image(0, 0, "ssafy");
  ssafy.setDepth(2);
  ssafy.setAlpha(0.5);
  //player start
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  player = new Player(this, 10, 10, "tower1");
  player.play("tower1_attack");
=======
  player = new Player(this,10,10,"tower1");
=======
  player = new Player(this, 10, 10, "tower1");
>>>>>>> 6834f63 (#7 :sparkles: 몬스터 생성 로직 구현)
  player.play("tower1_idle");
>>>>>>> 8674ac1 (#7 :sparkles: 코드모드 공격 기능 구현)
=======
  player = new Player(this, 10, 10, "tower" + Math.floor(Math.random() * 2));
  let playerRandom = Math.floor(Math.random() * 2 + 1);
  player.play("tower" + playerRandom + "_idle");
>>>>>>> 73a6d02 (#7 :sparkles: 고양이 이동 애니메이션 싸피 캐릭 적용)
  player.setScale(2);
  player.setDepth(3);
  player.body.debugBodyColor = 0x7f921b;
  //player end
  codeScene = this;
  //map start
  this.chunkSize = 8;
  this.tileSize = 300;
  this.cameraSpeed = 1;
=======
    this.anims.create({
        key: "fly",
        frames: this.anims.generateFrameNumbers("fly", {start: 0, end: 2}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "cat1",
        frames: this.anims.generateFrameNumbers("cat1", {start: 0, end: 0}),
        frameRate: 3,
        repeat: -1,
    });
    this.anims.create({
        key: "cat2",
        frames: this.anims.generateFrameNumbers("cat2", {start: 0, end: 0}),
        frameRate: 3,
        repeat: -1,
    });
    this.anims.create({
        key: "cat3",
        frames: this.anims.generateFrameNumbers("cat3", {start: 0, end: 0}),
        frameRate: 3,
        repeat: -1,
    });
    this.anims.create({
        key: "cat4",
        frames: this.anims.generateFrameNumbers("cat4", {start: 0, end: 0}),
        frameRate: 3,
        repeat: -1,
    });
    this.anims.create({
        key: "cat5",
        frames: this.anims.generateFrameNumbers("cat5", {start: 0, end: 0}),
        frameRate: 3,
        repeat: -1,
    });
    this.anims.create({
        key: "cat6",
        frames: this.anims.generateFrameNumbers("cat6", {start: 0, end: 0}),
        frameRate: 3,
        repeat: -1,
    });
    this.anims.create({
        key: "cat7",
        frames: this.anims.generateFrameNumbers("cat7", {start: 0, end: 0}),
        frameRate: 3,
        repeat: -1,
    });

    this.anims.create({
        key: "magic1",
        frames: this.anims.generateFrameNumbers("magic1", {start: 0, end: 5}),
        frameRate: 20,
        repeat: -1,
    });
    this.anims.create({
        key: "magic2",
        frames: this.anims.generateFrameNumbers("magic2", {start: 0, end: 5}),
        frameRate: 20,
        repeat: -1,
    });
    this.anims.create({
        key: "magic3",
        frames: this.anims.generateFrameNumbers("magic3", {start: 0, end: 5}),
        frameRate: 20,
        repeat: -1,
    });
    this.anims.create({
        key: "magic4",
        frames: this.anims.generateFrameNumbers("magic4", {start: 0, end: 5}),
        frameRate: 20,
        repeat: -1,
    });
    this.anims.create({
        key: "magic5",
        frames: this.anims.generateFrameNumbers("magic5", {start: 0, end: 5}),
        frameRate: 20,
        repeat: -1,
    });
    // resource load end

    //player start
    player = new Player(this, 10, 10, "tower1");
    player.play("tower1_idle");
    player.setScale(2);
    player.setDepth(3);
    //player end
    codeScene = this;
    //map start
    this.chunkSize = 8;
    this.tileSize = 300;
    this.cameraSpeed = 1;
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)

    this.followPoint = new Phaser.Math.Vector2(
        this.cameras.main.worldView.x + this.cameras.main.worldView.width * 0.5,
        this.cameras.main.worldView.y + this.cameras.main.worldView.height * 0.5
    );

    global.$this = this.scene;

    camera = this.cameras.main;

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
    //map enderlap(magics, codeMonsterSet, attack);

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

<<<<<<< HEAD
  this.followPoint.x = player.x;
  this.followPoint.y = player.y;
  //map end
<<<<<<< HEAD

<<<<<<< HEAD
  this.cameras.main.setZoom(0.7);
  this.cameras.main.startFollow(player, false);
  console.log(this.cameras);
=======
    //monster start
    codeMonsterSet = this.physics.add.group();
    magicSet = this.physics.add.group();
    //monster end
<<<<<<< HEAD
>>>>>>> 8674ac1 (#7 :sparkles: 코드모드 공격 기능 구현)
=======
    
<<<<<<< HEAD
>>>>>>> 1d21851 (#7 :sparkles: 코드모드 업데이트)
=======

  this.cameras.main.setZoom(0.7);
  this.cameras.main.startFollow(player, false);
  
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)


<<<<<<< HEAD
  socket.onopen = function () {
    IsStarted = false;
    PinNumber = null;

<<<<<<< HEAD
    var Data = {
      action: "exeClientInit",
    };
    socket.send(JSON.stringify(Data));
  };

  socket.onmessage = function (data) {
    var msg = JSON.parse(data.data.toString());

<<<<<<< HEAD
    if (msg.action === "PinNumber") {
      PinNumber = msg.pinnumber;
      console.log(`당신의 Pin번호는 "${PinNumber}" 입니다.`);
    }
    // 게임 시작시 1초 마다 서버에게 데이터를 보내는걸 시작한다.
    else if (msg.action === "StartGame") {
      IsStarted = true;
      IsRunning = false;
    }
    // 1번의 cycle이 끝나면 보낸다.
    else if (msg.action === "codeData") {
      //여기서 바뀐 정보를 전달 받는다.
      monster = msg.monster;
      monsterpos = msg.monsterpos;

      testshow();
      IsRunning = false;
    }
  };
=======
  if (msg.action === "PinNumber") {
    PinNumber = msg.pinnumber;
    console.log(`당신의 Pin번호는 "${PinNumber}" 입니다.`);
=======
        codeMonsterSet.add(enemy);
      }
      break;
    case 6:
      maxMon = 30;
      for (let i = 0; i < 8; i++) {
        catSpawn();
        let enemy = new Enemy(
          this,
          120,
          monX,
          monY,
          "cat1",
          "cat1",
          0,
          randomLocation
        );
        codeMonsterSet.add(enemy);
      }
      break;
>>>>>>> d603061 (#7 :bug: 코딩모드 6라운드 난이도 업)
  }
  // 게임 시작시 1초 마다 서버에게 데이터를 보내는걸 시작한다.
  else if (msg.action === "StartGame") {
    IsStarted = true;
    IsRunning = false;
  }
  // 1번의 cycle이 끝나면 보낸다.
  else if (msg.action === "codeData") {
    //여기서 바뀐 정보를 전달 받는다.
    attack(msg.attack,msg.angle,msg.type);
    IsRunning = false;
  }
};
=======
>>>>>>> d08f9a0 (#7 코딩모드 바깥으로 꺼내기)
for(let i=0;i<5;i++){
  let enemy = new Enemy(this,60,300*(i+1),-300*(i+1),"alien", "swarm", 1);
  if(enemy.type === 1){
    enemy.health = 1;
  }
  codeMonsterSet.add(enemy);
  this.physics.moveToObject(
    codeMonsterSet.children.entries[i],
    player,
    codeMonsterSet.children.entries[i].velo
  );
<<<<<<< HEAD
} 
>>>>>>> 8674ac1 (#7 :sparkles: 코드모드 공격 기능 구현)
=======
}
this.physics.add.overlap(magicSet, codeMonsterSet, monsterHit);
<<<<<<< HEAD
>>>>>>> 1d21851 (#7 :sparkles: 코드모드 업데이트)
=======

this.scene.pause();
>>>>>>> d08f9a0 (#7 코딩모드 바깥으로 꺼내기)
=======
=======
    this.followPoint.x = player.x;
    this.followPoint.y = player.y;
    //map end
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)

    //monster start
    codeMonsterSet = this.physics.add.group();
    codeEnemySet = this.physics.add.group();
    magicSet = this.physics.add.group();
    //monster end

    this.cameras.main.setZoom(0.7);
    this.cameras.main.startFollow(player, false);

    switch (stageNum) {
        case 1:
            maxMon = 10;
            break;
        case 2:
            maxMon = 10;
            break;
        case 3:
            maxMon = 10;
            break;
        case 4:
            maxMon = 10;
            for (let i = 0; i < 5; i++) {
                catSpawn();
                let enemy = new Enemy(
                    this,
                    60,
                    monX,
                    monY,
                    "cat1",
                    "cat1",
                    0,
                    randomLocation
                );

                codeMonsterSet.add(enemy);
            }
            break;
        case 5:
            maxMon = 10;
            for (let i = 0; i < 5; i++) {
                catSpawn();
                let enemy = new Enemy(
                    this,
                    60,
                    monX,
                    monY,
                    "cat1",
                    "cat1",
                    0,
                    randomLocation
                );

                codeMonsterSet.add(enemy);
            }
            break;
        case 6:
            maxMon = 15;
            let randomNum = Math.floor(Math.random() * 3 + 5);
            for (let i = 0; i < randomNum; i++) {
                catSpawn();
                let enemy = new Enemy(
                    this,
                    60,
                    monX,
                    monY,
                    "cat1",
                    "cat1",
                    0,
                    randomLocation
                );
                codeMonsterSet.add(enemy);
            }
            break;
    }

<<<<<<< HEAD
  this.physics.add.overlap(magicSet, codeMonsterSet, monsterHit);
  this.physics.add.overlap(player, codeMonsterSet, playerHit);
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
<<<<<<< HEAD
<<<<<<< HEAD
  this.scene.pause();
>>>>>>> 6834f63 (#7 :sparkles: 몬스터 생성 로직 구현)
=======
  // this.scene.pause();
>>>>>>> bdf2b7f (#7 :sparkles: 코딩모드 완성 직전)
=======
  this.scene.pause();
>>>>>>> 49c1ea6 (#7 :sparkles: 코딩모드 수정)
=======
  // this.scene.pause();
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
  this.scene.pause();
>>>>>>> edba596 (#7 :sparkles: 코딩모드 난이도 조절중)
=======
  // this.scene.pause();
>>>>>>> cbafe55 (#1 :sparkles: 다시하기, 뒤로가기 구현)
=======
  this.scene.pause();
>>>>>>> 4e4dea8 (#7 :sparkles: 코딩모드 업데이트)
=======
  // this.scene.pause();
>>>>>>> 2817eee (#3 :sparkles: 사신, 슬라임 스킬 변경)
=======
  this.scene.pause();
>>>>>>> f3a73b3 (#7 :sparkles: 코딩모드 구조 완성)
=======
    this.physics.add.overlap(magicSet, codeMonsterSet, monsterHit);
    this.physics.add.overlap(player, codeMonsterSet, playerHit);
    this.scene.pause();
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)
=======
  // this.scene.pause();
>>>>>>> 494dd23 (#7 :sparkles: debug 모드 온오프 수정)
=======
  this.scene.pause();
>>>>>>> f0ef009 (#1 :sparkles: UI 핀번호 복사)
=======
  // this.scene.pause();
>>>>>>> e353187 (#3 :sparkles: 보호막 및 기타 변경사항 적용)
=======
  this.scene.pause();
>>>>>>> 86e602a (#3 #7 :sparkles: 코딩모드 및 펫 수정)
}

function update(time, delta) {
    frameTime += delta;

<<<<<<< HEAD
    if (frameTime > 16.5) {
        showscore.textContent = global.score + " score";
        // 여기다가 UI 띄워라
        frameTime = 0;
        timer++;
        monTimer++;
        if (timer > 60) {
            timer = 0;
            if (IsStarted) {
                dataSend();
            }
        }

        if (monTimer > 40) {
            monTimer = 0;

            switch (stageNum) {
                case 1:
                    if (monCount < maxMon) {
                        let enemy =
                            monCount % 2 === 0
                                ? new Enemy(
                                    this,
                                    80,
                                    400,
                                    -400,
                                    "alien",
                                    "alien",
                                    1,
                                    randomLocation
                                )
                                : new Enemy(
                                    this,
                                    80,
                                    -400,
                                    -400,
                                    "alien",
                                    "alien",
                                    1,
                                    randomLocation
                                );
                        if (enemy.type === 1) {
                            enemy.health = 1;
                        }
                        codeMonsterSet.add(enemy);
                        codeEnemySet.add(enemy);
                        this.physics.moveToObject(enemy, player, enemy.velo);
                        monCount++;
                    }
                    break;
                case 2:
                    if (monCount < maxMon) {
                        enemySpawn();
                        let enemy = new Enemy(
                            this,
                            60,
                            monX,
                            monY,
                            "alien",
                            "alien",
                            1,
                            randomLocation
                        );
                        if (enemy.type === 1) {
                            enemy.health = 1;
                        }
                        codeMonsterSet.add(enemy);
                        codeEnemySet.add(enemy);
                        this.physics.moveToObject(enemy, player, enemy.velo);
                        monCount++;
                    }
                    break;
                case 3:
                    if (monCount < maxMon) {
                        enemySpawn();
                        let typeNum = Math.floor(Math.random() * 4 + 2);
                        let enemy = new Enemy(
                            this,
                            60,
                            monX,
                            monY,
                            "alien",
                            "alien",
                            typeNum,
                            randomLocation
                        );
                        if (enemy.type === 1) {
                            enemy.health = 1;
                        }
                        codeMonsterSet.add(enemy);
                        codeEnemySet.add(enemy);
                        this.physics.moveToObject(enemy, player, enemy.velo);
                        monCount++;
                    }
                    break;
                case 4:
                    if (monCount < maxMon) {
                        enemySpawn();
                        let typeNum = Math.floor(Math.random() * 5 + 1);
                        let enemy = new Enemy(
                            this,
                            30,
                            monX,
                            monY,
                            "alien",
                            "alien",
                            typeNum,
                            randomLocation
                        );

                        // enemy.setScale(2);
                        if (enemy.type === 1) {
                            enemy.health = 1;
                        }
                        codeMonsterSet.add(enemy);
                        codeEnemySet.add(enemy);
                        this.physics.moveToObject(enemy, player, enemy.velo);
                        monCount++;
                    }

                    break;
                case 5:
                    if (monCount < maxMon) {
                        enemySpawn();
                        let typeNum = Math.floor(Math.random() * 5 + 1);
                        let enemy = new Enemy(
                            this,
                            40,
                            monX,
                            monY,
                            "alien",
                            "alien",
                            typeNum,
                            randomLocation
                        );
                        if (enemy.type === 1) {
                            enemy.health = 1;
                        }
                        codeMonsterSet.add(enemy);
                        codeEnemySet.add(enemy);
                        this.physics.moveToObject(enemy, player, enemy.velo);
                        monCount++;
                    }
                    break;
                case 6:
                    if (monCount < maxMon) {
                        enemySpawn();
                        let typeNum = Math.floor(Math.random() * 5 + 1);
                        let enemy = new Enemy(
                            this,
                            40,
                            monX,
                            monY,
                            "alien",
                            "alien",
                            typeNum,
                            randomLocation
                        );
                        if (enemy.type === 1) {
                            enemy.health = 1;
                        }
                        codeMonsterSet.add(enemy);
                        codeEnemySet.add(enemy);
                        this.physics.moveToObject(enemy, player, enemy.velo);
                        monCount++;
                    }
                    break;
            }
        }
=======
  if (frameTime > 16.5) {
    showscore.textContent = global.score + " score";
    // 여기다가 UI 띄워라
    frameTime = 0;
    timer++;
    monTimer++;
    spawnTimer++;
    if (timer > 30) {
      timer = 0;
      if (IsStarted && stageNum != 6) {
        dataSend();
      } else {
        ranking_dataSend();
      }
>>>>>>> 2613b3b (#7 :recycle: 코딩모드 2배수)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
>>>>>>> 8674ac1 (#7 :sparkles: 코드모드 공격 기능 구현)
=======
    if (monTimer > 60) {
=======
    if (monTimer > 40) {
>>>>>>> edba596 (#7 :sparkles: 코딩모드 난이도 조절중)
=======
    if (monTimer > 30) {
>>>>>>> 2613b3b (#7 :recycle: 코딩모드 2배수)
=======
    if (spawnTimer < 1500) {
      monSpawn = 30;
    } else if (spawnTimer > 1500 && spawnTimer < 3000) {
      monSpawn = 20;
    } else if (spawnTimer > 3000) {
      monSpawn = 10;
    }

    if (monTimer > monSpawn) {
>>>>>>> 997419e (#7 ㅋㅗㄷㅡㅋㅐㅊㅣ ㄱㅐㅅㅓㄴ)
      monTimer = 0;

      switch (stageNum) {
        case 1:
          if (monCount < maxMon) {
            let enemy =
              monCount % 2 === 0
                ? new Enemy(
                    this,
                    80,
                    400,
                    -400,
                    "alien",
                    "alien",
                    1,
                    randomLocation
                  )
                : new Enemy(
                    this,
                    80,
                    -400,
                    -400,
                    "alien",
                    "alien",
                    1,
                    randomLocation
                  );
            if (enemy.type === 1) {
              enemy.health = 1;
            }
            codeMonsterSet.add(enemy);
            codeEnemySet.add(enemy);
            this.physics.moveToObject(enemy, player, enemy.velo);
            monCount++;
          }
          break;
        case 2:
          if (monCount < maxMon) {
            enemySpawn();
            let enemy = new Enemy(
              this,
              60,
              monX,
              monY,
              "alien",
              "alien",
              1,
              randomLocation
            );
            if (enemy.type === 1) {
              enemy.health = 1;
            }
            codeMonsterSet.add(enemy);
            codeEnemySet.add(enemy);
            this.physics.moveToObject(enemy, player, enemy.velo);
            monCount++;
          }
          break;
        case 3:
          if (monCount < maxMon) {
            enemySpawn();
            let typeNum = Math.floor(Math.random() * 4 + 2);
            let enemy = new Enemy(
              this,
              60,
              monX,
              monY,
              "alien",
              "alien",
              typeNum,
              randomLocation
            );
            if (enemy.type === 1) {
              enemy.health = 1;
            }
            codeMonsterSet.add(enemy);
            codeEnemySet.add(enemy);
            this.physics.moveToObject(enemy, player, enemy.velo);
            monCount++;
          }
          break;
        case 4:
          if (monCount < maxMon) {
            enemySpawn();
            let typeNum = Math.floor(Math.random() * 5 + 1);
            let enemy = new Enemy(
              this,
              30,
              monX,
              monY,
              "alien",
              "alien",
              typeNum,
              randomLocation
            );

            // enemy.setScale(2);
            if (enemy.type === 1) {
              enemy.health = 1;
            }
            codeMonsterSet.add(enemy);
            codeEnemySet.add(enemy);
            this.physics.moveToObject(enemy, player, enemy.velo);
            monCount++;
          }

          break;
        case 5:
          if (monCount < maxMon) {
            enemySpawn();
            let typeNum = Math.floor(Math.random() * 5 + 1);
            let enemy = new Enemy(
              this,
              40,
              monX,
              monY,
              "alien",
              "alien",
              typeNum,
              randomLocation
            );
            if (enemy.type === 1) {
              enemy.health = 1;
            }
            codeMonsterSet.add(enemy);
            codeEnemySet.add(enemy);
            this.physics.moveToObject(enemy, player, enemy.velo);
            monCount++;
          }
          break;
        case 6:
          if (health > 0) {
            enemySpawn();
            let typeNum = Math.floor(Math.random() * 5 + 1);
            let enemy = new Enemy(
              this,
              80,
              monX,
              monY,
              "alien",
              "alien",
              typeNum,
              randomLocation
            );
            if (enemy.type === 1) {
              enemy.health = 1;
            }
            codeMonsterSet.add(enemy);
            codeEnemySet.add(enemy);
            this.physics.moveToObject(enemy, player, enemy.velo);
            monCount++;
          }
          break;
      }
    }
<<<<<<< HEAD

>>>>>>> 6834f63 (#7 :sparkles: 몬스터 생성 로직 구현)
=======
>>>>>>> bdf2b7f (#7 :sparkles: 코딩모드 완성 직전)
  }
=======
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)
}

//map start
function getChunk(x, y) {
    var chunk = null;
    for (var i = 0; i < chunks.length; i++) {
        if (chunks[i].x == x && chunks[i].y == y) {
            chunk = chunks[i];
        }
    }
    return chunk;
}

//map end

//sock start
function dataSend() {
    if (socket.bufferedAmount == 0) {
        if (IsStarted != false && IsRunning != true) {
            if (codeEnemySet.children.entries.length > 0) {
                let objList = [[]];
                let obj = codeMonsterSet.children.entries;

                for (let i = 0; i < codeMonsterSet.children.entries.length; i++) {
                    objList.push([
                        obj[i].x,
                        obj[i].y,
                        obj[i].type,
                        obj[i].body.halfWidth,
                    ]);
                }
                for (let i = 0; i < objList.length; i++) {
                    if (objList[i] == 0) {
                        objList.splice(i, 1);
                        i--;
                    }
                }

                shuffle(objList);

<<<<<<< HEAD
                var Data = {
                    action: "exeData",
                    pinnumber: PinNumber,
                    catchobj: objList,
                };
                codeStart = false;
                IsRunning = true;
                socket.send(JSON.stringify(Data));
            } else if (!codeStart) {
                setSound.playSE(26);
                console.log("Game End, Score : " + score);
                Data = {
                    action: "endGame",
                    pinnumber: PinNumber,
                };
                socket.send(JSON.stringify(Data));
                IsStarted = false;
                if (stageNum === 6) {
                    makeranking();
                } else {
                    codegameclear();
                }
            }
=======
        var Data = {
          action: "exeData",
          pinnumber: PinNumber,
          catchobj: objList,
        };
        codeStart = false;
        IsRunning = true;
        socket.send(JSON.stringify(Data));
      } else if (!codeStart) {
        setSound.playSE(26);
        Data = {
          action: "endGame",
          pinnumber: PinNumber,
        };
        socket.send(JSON.stringify(Data));
        IsStarted = false;
        if (stageNum === 6) {
          makeranking();
        } else {
          codegameclear();
>>>>>>> 6e70ce0 (:recycle: console.log 제거)
        }
    }
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
function testshow() {
  monster[0] = false;
  for (let i = 0; i < monster.length; ++i) {
    console.log(monster[i] + " ");
=======
=======
=======

>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)
// sock end
<<<<<<< HEAD
>>>>>>> 1d21851 (#7 :sparkles: 코드모드 업데이트)
function attack(isAttack, angle, element) {
=======
=======
function ranking_dataSend() {
  if (socket.bufferedAmount == 0) {
    if (IsStarted != false && IsRunning != true) {
      if (health > 0) {
        let objList = [[]];
        let obj = codeMonsterSet.children.entries;

        for (let i = 0; i < codeMonsterSet.children.entries.length; i++) {
          objList.push([
            obj[i].x,
            obj[i].y,
            obj[i].type,
            obj[i].body.halfWidth,
          ]);
        }
        for (let i = 0; i < objList.length; i++) {
          if (objList[i] == 0) {
            objList.splice(i, 1);
            i--;
          }
        }

        shuffle(objList);

        var Data = {
          action: "exeData",
          pinnumber: PinNumber,
          catchobj: objList,
        };
        codeStart = false;
        IsRunning = true;
        socket.send(JSON.stringify(Data));
      } else if (!codeStart) {
        setSound.playSE(26);
        Data = {
          action: "endGame",
          pinnumber: PinNumber,
        };
        socket.send(JSON.stringify(Data));
        IsStarted = false;
        if (stageNum === 6) {
          makeranking();
        } else {
          codegameclear();
        }
      }
    }
  }
}

// sock end

>>>>>>> 997419e (#7 ㅋㅗㄷㅡㅋㅐㅊㅣ ㄱㅐㅅㅓㄴ)
export function attack(isAttack, angle, element) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d08f9a0 (#7 코딩모드 바깥으로 꺼내기)
  if(isAttack){
    let x = Math.cos(angle*(Math.PI/180));
    let y = Math.sin(angle*(Math.PI/180));
=======
  if (isAttack) {
    let x = Math.cos(angle * (Math.PI / 180));
    let y = Math.sin(angle * (Math.PI / 180));
<<<<<<< HEAD
>>>>>>> 6834f63 (#7 :sparkles: 몬스터 생성 로직 구현)

=======
    if (element < 1 || element > 5) {
      element = 1;
    }
>>>>>>> c0018ab (#7 :bug: 코드모드 수정)
    let magic = new Magic(codeScene, element);
    magic.anims.play("magic" + element);
    magicSet.add(magic);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    codeScene.physics.moveTo(
      magic,
      x,
      -y,
      300
    );
>>>>>>> 8674ac1 (#7 :sparkles: 코드모드 공격 기능 구현)
=======
    codeScene.physics.moveTo(magic, x, -y, 300);
>>>>>>> bdf2b7f (#7 :sparkles: 코딩모드 완성 직전)
=======
    codeScene.physics.moveTo(magic, x, y, 300);
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
=======
    codeScene.physics.moveTo(magic, x, y, 3000);
>>>>>>> 2817eee (#3 :sparkles: 사신, 슬라임 스킬 변경)
=======
    codeScene.physics.moveTo(magic, x, y, 500);
>>>>>>> f3a73b3 (#7 :sparkles: 코딩모드 구조 완성)
=======
    codeScene.physics.moveTo(magic, x, y, 1000);
>>>>>>> 2613b3b (#7 :recycle: 코딩모드 2배수)
  }
=======
    if (isAttack) {
        let x = Math.cos(angle * (Math.PI / 180));
        let y = Math.sin(angle * (Math.PI / 180));

        let magic = new Magic(codeScene, element);
        setSound.playSE(25);
        magic.anims.play("magic" + element);
        magicSet.add(magic);
        codeScene.physics.moveTo(magic, x, y, 500);
    }
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)
}

<<<<<<< HEAD
// sock end
=======
function monsterHit(magic, monster) {
<<<<<<< HEAD
<<<<<<< HEAD

  if(monster.type === 0){
    console.log("GameOver!");
=======
  if (monster.type === 0) {
<<<<<<< HEAD
<<<<<<< HEAD
    score -= 200;
>>>>>>> 6834f63 (#7 :sparkles: 몬스터 생성 로직 구현)
=======
    score -= 300;
>>>>>>> f3a73b3 (#7 :sparkles: 코딩모드 구조 완성)
=======
    LoseLife();
>>>>>>> 997419e (#7 ㅋㅗㄷㅡㅋㅐㅊㅣ ㄱㅐㅅㅓㄴ)
  }

  if (!monster.invincible) {
    if (monster.weak === magic.element) {
      monster.health -= 3;
    } else {
      monster.invincible = true;
      monster.health -= 1;
<<<<<<< HEAD
=======
    if (monster.type === 0) {
        score -= 300;
>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)
=======
      monster.setTint(0xff0000);
>>>>>>> 2965cee (#2 :sparkles: 코드캐치 피격 이펙트)
    }

<<<<<<< HEAD
    if (!monster.invincible) {
        if (monster.weak === magic.element) {
            monster.health -= 3;
        } else {
            monster.invincible = true;
            monster.health -= 1;
        }
        magic.destroy();

        if (monster.health <= 0) {
            if (monster.type !== 0) {
                setSound.playSE(23);
            } else {
                setSound.playSE(27);
            }
            score += 100;
            monster.destroy();
            console.log(score);
        }
=======
    if (monster.health <= 0) {
      if (monster.type !== 0) {
        setSound.playSE(23);
      } else {
        setSound.playSE(27);
      }
      score += 100;
      monster.die_anim();
      monster.destroy();
>>>>>>> 6e70ce0 (:recycle: console.log 제거)
    }
}
<<<<<<< HEAD
>>>>>>> 1d21851 (#7 :sparkles: 코드모드 업데이트)
=======

function playerHit(player, monster) {
<<<<<<< HEAD
    monster.destroy();
    score -= 50;
=======
  camera.shake(100, 0.01); //camera
  monster.destroy();
<<<<<<< HEAD
  score -= 50;
>>>>>>> c0018ab (#7 :bug: 코드모드 수정)
=======
  LoseLife();
>>>>>>> 997419e (#7 ㅋㅗㄷㅡㅋㅐㅊㅣ ㄱㅐㅅㅓㄴ)
}

// sock end

function enemySpawn() {
    randomLocation = Math.floor(Math.random() * 4) + 1;
    if (randomLocation === 1) {
        monX = Phaser.Math.Between(player.x - 400, player.x + 400);
        monY = Phaser.Math.Between(player.y + 400, player.y + 400);
    } else if (randomLocation === 2) {
        monX = Phaser.Math.Between(player.x - 400, player.x + 400);
        monY = Phaser.Math.Between(player.y - 400, player.y - 400);
    } else if (randomLocation === 3) {
        monX = Phaser.Math.Between(player.x - 400, player.x - 400);
        monY = Phaser.Math.Between(player.y - 400, player.y + 400);
    } else if (randomLocation === 4) {
        monX = Phaser.Math.Between(player.x + 400, player.x + 400);
        monY = Phaser.Math.Between(player.y - 400, player.y + 400);
    }
}

function catSpawn() {
    randomLocation = Math.floor(Math.random() * 4) + 1;
    if (randomLocation === 1) {
        monX = Phaser.Math.Between(player.x - 220, player.x + 220);
        monY = Phaser.Math.Between(player.y + 220, player.y + 220);
    } else if (randomLocation === 2) {
        monX = Phaser.Math.Between(player.x - 220, player.x + 220);
        monY = Phaser.Math.Between(player.y - 220, player.y - 220);
    } else if (randomLocation === 3) {
        monX = Phaser.Math.Between(player.x - 220, player.x - 220);
        monY = Phaser.Math.Between(player.y - 220, player.y + 220);
    } else if (randomLocation === 4) {
        monX = Phaser.Math.Between(player.x + 220, player.x + 220);
        monY = Phaser.Math.Between(player.y - 220, player.y + 220);
    }
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6834f63 (#7 :sparkles: 몬스터 생성 로직 구현)
=======
function debugModeChange(scene) {
  if (scene.physics.world.drawDebug) {
    scene.physics.world.drawDebug = false;
    // scene.physics.world.debugGraphic.clear();
  } else {
    scene.physics.world.drawDebug = true;
  }
}
<<<<<<< HEAD
>>>>>>> bdf2b7f (#7 :sparkles: 코딩모드 완성 직전)
=======

=======
>>>>>>> b36e339 (#7 codemode collider 처리)
=======
>>>>>>> c6573a4 (#7 :sparkles: 코딩모드 업데이트)
=======

>>>>>>> a5a8bb0 (#7 :star: 코딩 모드 사운드)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
>>>>>>> 2d18cb4 (#3 #7 :sparkles: 코딩모드 및 아케이드모드 업데이트)
