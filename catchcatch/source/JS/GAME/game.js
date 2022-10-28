<<<<<<< HEAD
import Fairy from "./GameObj/fairy.js";
import Magic from "./GameObj/magic.js";
import Player from "./GameObj/player.js";
import Enemy from "./GameObj/enemy.js";
import inGameUI, {updateExp} from "../UI/inGameUI.js";
import levelup from "../UI/levelup.js";
import initUpgrade, {closeUpgrade} from "../UI/upgrade.js";

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
import CatTower from "./GameObj/cattower.js";
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
import Boss from './GameObj/boss.js';
<<<<<<< HEAD
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
=======
import CatTower from "./GameObj/cattower.js";
>>>>>>> bfa9489 (#6 :sparkles: 포탑 생성)
=======
import Mine from "./GameObj/mine.js";
>>>>>>> 643016e (#6 :sparkles: 인게임 coin 생성)

export const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    parent: "game-container",
    backgroundColor: "black",
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
            fps: 60,
            debug: false,
            fixedStep: false,
        },
    },
};

//player start
// 고양이 json
let cats;
// 플레이어 객체
global.player = "";
// 캐릭터 선택 시 변경될 변수
let catNumber = 0;
// 요정
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
global.thisScene = "";
// 공격 및 공격 딜레이 관련
global.control = false;
global.normalAttackTimer = 0;
var normalAttackAS = 20;
var magic;
global.magics = "";

export var cursors;
var gameOver = false;
var scoreText;
// 마우스 포인터 관련
export var input;
var mouse;
//player end

<<<<<<< HEAD
=======
//gametimer
let gameTimer = 0;

>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
//map start
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
let controls;
//map end

//navi start
var navi;
//navi end

//coin start
global.coin = 0;
global.cointext = "";
//coin end

//enemy start


// 몬스터 변수 선언
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
// 1번 몬스터: alien
var alien;
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)

// 2번 몬스터: worm
var worm;

// 3번 몬스터: sonic
var sonic;

// 4번 몬스터: turtle
var turtle;

// 5번 몬스터: alien_plus
var alien_plus;

// 6번 몬스터: worm_plus
var worm_plus;

var cursors;


// 보스
var slime_king;

// 보스 패턴
var pt;
// 보스 활성 확인
var boss_active;

var monX;
var monY;
global.monsterCount = 0;
var randomLocation = 0;
var timer;
var random_monster = 0;


// 임시 구멍
var hole;

// 몬스터 이미지

//enemy end


//tower start
var towerLU
var towerRU
var towerLD
var towerRD
global.towerAttacks = "";
global.towerSkillAttacks = "";
//tower end

//mine start
var mine;
var minecount = 10;
var StartMineRangeX = -1000;
var StartMineRangeY = -1000;
var EndMineRangeX = 1000;
var EndMineRangeY = 1000;

global.mines = "";

//mine end


function preload() {
    //map start
    this.load.image("sprWater", "images/map/sprWater.png");
    this.load.image("sprSand", "images/map/sprSand.png");
    this.load.image("sprGrass", "images/map/sprGrass.png");
    //map end

    //tower start
    this.load.image("cat", "images/cattower/cat.png");
    this.load.image("can", "images/cattower/can.png");
    this.load.image("skill", "images/cattower/skill.png");
    //tower end

    //hole start
    this.load.image("hole", "images/hole/hole.png");
    //hole end

    //navi start
    this.load.image("navi", "images/navi/arrow.png");
    //navi end

    //mine start
    this.load.image("mine", "images/mine/mine.png")
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
<<<<<<< HEAD
=======
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
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
    this.load.spritesheet(
        "magic2",
        "images/attack/weapon/12_nebula_spritesheet.png",
        {
            frameWidth: 100,
            frameHeight: 100,
            endFrame: 61,
        }
    );
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
=======
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

    this.load.spritesheet(
        "magic2",
        "images/attack/weapon/7_firespin_spritesheet.png",
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
        {frameWidth: 100, frameHeight: 100, endFrame: 61}
    );

    this.load.spritesheet(
        "magic5_1",
        "images/attack/weapon/13_vortex_spritesheet.png",
        {frameWidth: 100, frameHeight: 100, endFrame: 61}
    );

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
  // 요정 스프라이트
  this.load.spritesheet("fairy1", "images/fairy/fairy1.png", {
    frameWidth: 150,
    frameHeight: 142,
  });
=======
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
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

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

<<<<<<< HEAD
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

    // 몬스터
    this.load.spritesheet(
        "alien",
        "http://labs.phaser.io/assets/tests/invaders/invader1.png",
        {frameWidth: 32, frameHeight: 32}
    );

    // 보스

    //enemy end
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
}

function create() {
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
    thisScene = this;
    //map start
    this.chunkSize = 8;
    this.tileSize = 300;
    this.cameraSpeed = 1;
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

    this.cameras.main.setZoom(1);
    this.followPoint = new Phaser.Math.Vector2(
        this.cameras.main.worldView.x + this.cameras.main.worldView.width * 0.5,
        this.cameras.main.worldView.y + this.cameras.main.worldView.height * 0.5
    );
    // this.cameras.main.setBounds(0, 0, mapSize, mapSize);
    // this.physics.world.setBounds(0, 0, mapSize, mapSize);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)
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
    });
    // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels, true);
=======
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
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)

=======
  global.$this = this.scene;
  this.input.keyboard.on("keydown-" + "SHIFT", function (event) {
    initUpgrade();
  });
>>>>>>> 6fd22c6 (#1 :sparkles: merge 완료)
  //map end

  //player start
  cats = require("./jsons/cats.json");
  fairySet = require("./jsons/fairys.json");
<<<<<<< HEAD
  console.log(ChoiceCat);
=======

>>>>>>> a774e3d (#1 :sparkles: levelup random 및 levelup시 수치 증가)
  player = cats[catNumber];
<<<<<<< HEAD
  player = new Player(this, 1, 100, 100, "cat"+(ChoiceCat+1));
  player.setDepth(1);
=======
  player = new Player(this, 1, 100, 100);
  player.setDepth(2);
>>>>>>> 43845d2 (#6 :bug: 맵chunk 미생성 수정)
  inGameUI();
=======
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
    player = new Player(this, 1, 100, 100, "cat" + (ChoiceCat + 1));
    player.setDepth(2);
    inGameUI();
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

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
>>>>>>> a774e3d (#1 :sparkles: levelup random 및 levelup시 수치 증가)
=======
  fairySet[4].initFairy5(1, 1)
>>>>>>> 8ab07ca (#3 :sparkles: 위치 폭탄)
  for (let i = 0; i < 5; i++) {
    fairySet[i].setDepth(1);
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

    this.anims.create({
        key: "fairy1_attack",
        frames: this.anims.generateFrameNumbers("fairy1", {start: 6, end: 10}),
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

    this.anims.create({
        key: "fairy4_attack",
        frames: this.anims.generateFrameNumbers("fairy4", {start: 0, end: 5}),
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

    //enemy start

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
    monsterSet = this.physics.add.group();
    magics = this.physics.add.group();
    towerAttacks = this.physics.add.group();
    towerSkillAttacks = this.physics.add.group();
    mines = this.physics.add.group();

    // 임시 구멍
    hole = this.physics.add.sprite(0, 0, 'fairy4')
    hole.hp = 100;
    hole.setDepth(1);
>>>>>>> 7144909 (#2 :sparkle: 몬스터 생성 주기 수정)

    // 그룹셋
    monsterSet = this.physics.add.group();
    bossSet = this.physics.add.group();
    magics = this.physics.add.group();


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

    // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
    this.physics.add.collider(player, monsterSet, player.hitPlayer);
    thisScene.physics.add.overlap(magics, monsterSet, attack);
    // 만약 몬스터와 구멍이 닿았다면 (hithole 함수 실행)
    thisScene.physics.add.overlap(hole, monsterSet, hithole)

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

    // 공격 맞은 후 일시 무적에 사용
    timer = this.time.addEvent({
        delay: 2000,
        callback: () => {
            player.invincible = false;
        },
        loop: true,
    });

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


    //tower start

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
    mine.scale_Circle();
    mines.add(mine);
  }
  //mine end
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

    //tower end

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
>>>>>>> 43845d2 (#6 :bug: 맵chunk 미생성 수정)
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
                this.physics.moveToObject(monsterSet.children.entries[i], player, monsterSet.children.entries[i].velo);
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
    ;

    // 몬스터 빅웨이브
    if ((gameTimer > 600) && (gameTimer < 1200) && (gameTimer % 3 == 0)) {
        // 1번 zombie
        enemySpawn(randomLocation)

        // #### if문으로 특정 시간 이후면 강화몹 소환으로 변경하기 ###
        addMonster(this, 'alien', 'swarm', 10, 100, monX, monY, 'follower')
        // addMonster(this, 'alien_plus', 'alien_plus_anim',20,100,monX,monY,'follower')
    }

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
}

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
    if (!monster.invincible) {
        if (magic.pierceCount > 0) {
            magic.pierceCount--;
        } else {
            magic.destroy();
        }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (nowFairy === 2) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
      if (num <= fairySet[nowFairy].deathCount) {
        alien.destroy();
=======
    if (nowFairy === 2 ) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor(Math.random() * 100 + 1);
      if (num <= fairySet[nowFairy].deathCount && monster.type != 'boss') {
        monster.die_anim();
        monster.destroy();
>>>>>>> 344a1b1 (#2 :sparkles: 폭발 이펙트)
        player.levelUp();

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

    monster.health -= fairySet[nowFairy].dmg;
    monster.invincible = true;
<<<<<<< HEAD
    if (monster.health <= 0){
=======
    if (monster.health <= 0 && monster.type !='boss') {
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

                monsterCount -= 1;
            }
        }

        monster.health -= fairySet[nowFairy].dmg;
        monster.invincible = true;
        if (monster.health <= 0 && monster.type != 'boss') {
            monster.destroy();
            player.levelUp();
            monsterCount -= 1;
        }
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
>>>>>>> 52852dc (#3 :bug: 오타 및 컨벤션 수정)
=======


// 임시 구멍 구현 
function hithole(hole, monster) {
    hole.hp -= 1
    monster.destroy()

    if (hole.hp <= 0) {
        console.log('game over')
    }
}


function addMonster(scene, mon_name, mon_anime, hp, velo, x, y, type) {
    monster = new Enemy(scene, hp, velo, x, y, mon_name, mon_anime, type);
    monster.setDepth(2);
    monsterCount += 1;
    monsterSet.add(monster);
    scene.physics.add.collider(monsterSet, monster);
    monster.anime();
}
<<<<<<< HEAD
>>>>>>> a428d38 (#2 :recycle: 변수명 변경 및 코드 가독성 위한  함수화)
=======


function enemySpawn(scene) {
    randomLocation = Math.floor(Math.random() * 4) + 1
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

<<<<<<< HEAD
function slime_pattern(scene, pt, x, y) {
    if (pt != 16) {
        pt *= 2
        console.log(pt)
        for (let i = 0; i < pt; i++) {
            // 분열될 때마다 체력 감소 구현하기
            if (pt < 4) {
                slime_king = new Boss(scene, 100, 100, x + i * 100, y, 'slime_king', 'swarm', 2.5, pt, 'boss')
            } else if (pt < 8) {
                slime_king = new Boss(scene, 50, 100, x + i * 50, y, 'slime_king', 'swarm', 1.25, pt, 'boss')
            } else {
                slime_king = new Boss(scene, 25, 100, x + i * 25, y, 'slime_king', 'swarm', 0.5, pt, 'boss')
            }
            slime_king.anime();
            scene.physics.add.collider(bossSet, slime_king);
            bossSet.add(slime_king);
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
        }
    }
}

<<<<<<< HEAD


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
//enemy end

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
