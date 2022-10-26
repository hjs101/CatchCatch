import Fairy from "./GameObj/fairy.js";
import Magic from "./GameObj/magic.js";
import Player from "./GameObj/player.js";
import Enemy from "./GameObj/enemy.js";
import inGameUI, { updateExp } from "../UI/inGameUI.js";
import levelup from "../UI/levelup.js";
import initUpgrade, { closeUpgrade } from "../UI/upgrade.js";

import { Chunk, Tile } from "./Entities.js";

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
      debug: true,
      fixedStep: false,
    },
  },
};

//player start
// 고양이 json
let cats;
// 플레이어 객체
let player;
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

//enemy start

// 몬스터 변수 선언
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

// 몬스터 이미지

//enemy end

function preload() {
  //map start
  this.load.image("sprWater", "images/map/sprWater.png");
  this.load.image("sprSand", "images/map/sprSand.png");
  this.load.image("sprGrass", "images/map/sprGrass.png");
  //map end

  //player start
  // 플레이어 스프라이트
  this.load.spritesheet("cat1", "images/cat/cat1.png", {
    frameWidth: 96,
    frameHeight: 100,
  });

<<<<<<< HEAD
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
    { frameWidth: 100, frameHeight: 100, endFrame: 61 }
  );
  this.load.spritesheet(
    "magic5_1",
    "images/attack/weapon/13_vortex_spritesheet.png",
    { frameWidth: 100, frameHeight: 100, endFrame: 61 }
  );

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
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)

  //enemy start
  this.load.spritesheet(
    "alien",
    "http://labs.phaser.io/assets/tests/invaders/invader1.png",
    { frameWidth: 32, frameHeight: 32 }
  );
  //enemy end
}

function create() {
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
>>>>>>> f7fa4a4 (#3 :sparkles: 플레이어 스킬 구현1)
  this.tileSize = 1024;
  this.cameraSpeed = 10;
>>>>>>> dbb8db6 (#6 :sparkles: 맵 동적 생성)

  this.cameras.main.setZoom(1);
  this.followPoint = new Phaser.Math.Vector2(
    this.cameras.main.worldView.x + this.cameras.main.worldView.width * 0.5,
    this.cameras.main.worldView.y + this.cameras.main.worldView.height * 0.5
  );
  // this.cameras.main.setBounds(0, 0, mapSize, mapSize);
  // this.physics.world.setBounds(0, 0, mapSize, mapSize);

<<<<<<< HEAD
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
  console.log(cats);
  player = cats[catNumber];
  player = new Player(this, 1, 100, 100);
  player.setDepth(1);
  console.log(player);
  console.log(player);
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
  fairySet[0] = new Fairy(this, 100, 4, 1, 1, 60, 10, 500, 1, player);
  fairySet[0].initFairy1(2, 2);
  fairySet[1] = new Fairy(this, 100, 10, 1, 1, 70, 10, 160, 2, player);
  fairySet[2] = new Fairy(this, 100, 0, 1, 3, 80, 10, 300, 3, player);
  fairySet[3] = new Fairy(this, 100, 10, 1, 4, 90, 10, 400, 4, player);
  fairySet[3].initFairy3(0, 0);
  fairySet[4] = new Fairy(this, 100, 10, 1, 5, 100, 10, 500, 5, player);
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

  this.anims.create({
    key: "turn",
    frames: this.anims.generateFrameNumbers("cat1", { start: 0, end: 0 }),
    frameRate: 10,
  });
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("cat1", { start: 1, end: 7 }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("cat1", { start: 1, end: 7 }),
    frameRate: 10,
    repeat: -1,
  });

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

  //player end

  //map start

  //map end

  //enemy start

<<<<<<< HEAD
<<<<<<< HEAD
    alienSet = this.physics.add.group();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
    this.physics.add.overlap(player, aliens, hitplayer);

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
  magics = this.physics.add.group();
  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
  this.physics.add.collider(player, aliens, player.hitPlayer);
  thisScene.physics.add.overlap(magics, aliens, attack);
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
=======
  alienSet = this.physics.add.group();
  magics = this.physics.add.group();
  // 만약 유저와 몬스터가 닿았다면 (hitplayer 함수 실행)
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
    this.anims.create({
        key: 'swarm',
        frames: this.anims.generateFrameNumbers('alien', {start: 0, end: 1}),
        frameRate: 2,
        repeat: -1
    })

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

  this.cameras.main.centerOn(this.followPoint.x, this.followPoint.y);
  //map enderlap(magics, alienSet, attack);
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

  //enemy end
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

  this.cameras.main.startFollow(player, false);
  //map end

  //player start
  changeSlot();

<<<<<<< HEAD
<<<<<<< HEAD
  if (normalAttackTimer == normalAttackAS) {
    normalAttackTimer = 0;
=======
  if (normalAttackTimer > normalAttackAS) {
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
    control = false;
  } else {
    normalAttackTimer++;
  }
  //mouse clicked
  if (mouse.leftButtonDown() && !control) {
    magic = new Magic(this, fairySet[nowFairy]);
    this.physics.add.overlap(
      magic,
      alienSet,
      fairySet[nowFairy].attack,
      null,
      this
    );
    fairySet[nowFairy].normalAttack(magic);
  }

  for (let i = 0; i < 5; i++){
    if (fairySet[i].timer < fairySet[i].skillCD) {
      fairySet[i].timer++;
    } else {
      fairySet[i].skillUse = false;
    }
  }

  if (cursors.skill.isDown && !fairySet[nowFairy].skillUse) {
    console.log(fairySet[nowFairy].timer);
    console.log(fairySet[nowFairy].skillCD);
    fairySet[nowFairy].skillFire();
  }

  player.move();
  //player end

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

  mon1Delay++;

  // 랜덤 위치에 몬스터 생성 (추후 player.x 및 y 좌표 기준 생성으로 변경)
  if (mon1Delay > 60) {
    randomLocation = Math.floor(Math.random() * 4) + 1;
    if (randomLocation === 1) {
      mon1X = Phaser.Math.Between(player.x - 2000, player.x + 2000);
      mon1Y = Phaser.Math.Between(player.y + 2000, player.y + 2010);
    }

<<<<<<< HEAD
    mon1Delay++;
>>>>>>> ec22f2e (#3 #2 :sparkles: 컨벤션 수정)


<<<<<<< HEAD
// 랜덤 위치에 몬스터 생성 (추후 player.x 및 y 좌표 기준 생성으로 변경)
    if (mon1Delay > 60) {
        gameTimer++;
        console.log(gameTimer);
        randomLocation = Math.floor(Math.random() * 4) + 1
        if (randomLocation === 1) {
            mon1X = Phaser.Math.Between(player.x - 2000, player.x + 2000);
            mon1Y = Phaser.Math.Between(player.y + 2000, player.y + 2010);
        }

        if (randomLocation === 2) {
            mon1X = Phaser.Math.Between(player.x - 2000, player.x + 2000);
            mon1Y = Phaser.Math.Between(player.y - 2000, player.y - 2010);
        }

        if (randomLocation === 3) {
            mon1X = Phaser.Math.Between(player.x - 2000, player.x - 2000);
            mon1Y = Phaser.Math.Between(player.y - 2000, player.y + 2000);
        }

        if (randomLocation === 4) {
            mon1X = Phaser.Math.Between(player.x + 2000, player.x + 2000);
            mon1Y = Phaser.Math.Between(player.y - 2000, player.y + 2000);
        }


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
  for(let i = magics.length-1; i>=0;i--){
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
>>>>>>> 457e4ef (#1 :sparkles: develop merge)
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
  game.physics.add.overlap(magic, alienSet, attack, null, this);
  // magic.body.setCircle(45);

  /*충돌관련 하드코딩 된 부분 나중에 수정 */
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
    fairySet[nowFairy].x = -100;
    fairySet[nowFairy].y = -100;
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
    fairySet[nowFairy].x = -100;
    fairySet[nowFairy].y = -100;
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
    fairySet[nowFairy].x = -100;
    fairySet[nowFairy].y = -100;
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
    fairySet[nowFairy].x = -100;
    fairySet[nowFairy].y = -100;
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
    fairySet[nowFairy].x = -100;
    fairySet[nowFairy].y = -100;
    nowFairy = 4;
    player.changeFairy(fairySet[nowFairy]);
    normalAttackAS = fairySet[nowFairy].as;
    fairySet[nowFairy].anims.play("fairy" + (nowFairy + 1) + "_idle", true);
  }

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
}

function attack(magic, alien) {
  if (!alien.invincible) {
    if (magic.pierceCount > 0) {
      magic.pierceCount--;
    } else {
      magic.destroy();
    }

    if (nowFairy === 2) {
      //  && fairySet[nowFairy].level === 9 (추후에 레벨업 생길 때 추가)
      let num = Math.floor((Math.random() * 100) + 1);
      if (num <= fairySet[nowFairy].deathCount) {
        alien.destroy();
        alienCount -= 1;
      }
    }

    alien.health -= fairySet[nowFairy].dmg;
    alien.invincible = true;
    if (alien.health <= 0) {
      alien.destroy();
      alienCount -= 1;
    }
  }
>>>>>>> daff650 (#3 :sparkles: 플레이어 일반공격 특성 추가)
}
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
