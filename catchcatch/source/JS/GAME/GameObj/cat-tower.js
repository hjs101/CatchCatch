import { monsterSet, bossSet } from "../game.js";
import { petSkillAttackFunc } from "../game.js";
import TowerMagic from "./tower-magic";
import TowerSkill from "./tower-skill";
import tower from "../../UI/tower-upgrade.js";
import Player from "./player";
import { UpdateCatCoin } from "../../UI/ingame-ui.js";

export default class CatTower extends Phaser.Physics.Arcade.Sprite {
  weaponSprite;
  skillSprite;
  towerAttackTimer = 0; //총알 시간
  towerSkillAttackTimer = 0; //스킬 시간
  towerAS = [180, 0, 0, 0, 360, 90]; //총알 연사속도
  towerSkillAS = [
    [600, 600, 600],
    [1800, 1200, 600],
    [1800, 1200, 600],
    [1800, 1200, 600],
    [1800, 1200, 600],
    [3600, 3600, 3600],
  ]; //스킬 연사속도
  towerDmg = [50, 0, 0, 0, 100, 50]; //총알 대미지
  towerSkillDmg = [0, 50, 50, 0, 0, 99999]; //스킬 대미지
  towerSkillcount = [
    [1, 1, 1],
    [1, 2, 4],
    [1, 3, 6],
    [1, 2, 4],
    [1, 2, 4],
    [1, 1, 1],
  ]; //스킬 소환 개수
  towerSkilldelay = [
    [6000, 6000, 6000],
    [6000, 11000, 15000],
    [6000, 11000, 15000],
    [6000, 11000, 15000],
    [6000, 11000, 15000],
    [1000, 1000, 1000],
  ];
  circleSize = 0.8;
  timedEvent;

  constructor(
    scene,
    stone,
    level,
    x,
    y,
    towerSprite,
    weaponSprite,
    weaponDeadSprite,
    skillSprite,
    skillShowSprite,
    skillDeadSprite
  ) {
    super(scene, x, y, towerSprite);

    this.scene = scene;
    this.weaponSprite = weaponSprite;
    this.weaponDeadSprite = weaponDeadSprite;
    this.skillSprite = skillSprite;
    this.skillShowSprite = skillShowSprite;
    this.skillDeadSprite = skillDeadSprite;
    this.stone = stone;
    this.level = level;
    this.invisible = "false";

<<<<<<< HEAD
    console.log(this);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  scale_Circle() {
<<<<<<< HEAD:catchcatch/source/JS/GAME/GameObj/cattower.js
<<<<<<< HEAD
<<<<<<< HEAD
    this.setScale(circlesize);
=======
    this.setScale(this.circlesize);
<<<<<<< HEAD
>>>>>>> 65318f5 (#6 :bug: 수정)
    console.log(this);
=======
    this.setScale(0.1);
>>>>>>> da9ff4f (#3 :sparkles: 튕기는 부메랑)
=======
>>>>>>> 4cde4e7 (#2 :bug: 불거인 오라 확대)
=======
    this.setScale(this.circleSize);
>>>>>>> 30550e6 (#6 :sparkles: 타워 코드 정리):catchcatch/source/JS/GAME/GameObj/catTower.js
=======
=======
    console.log(this)
    
>>>>>>> 2ed0a21 (:bug: cattower 이미지 수정중)
=======
>>>>>>> a3c8e71 (#6 :sparkles: tower animation 설정)
=======
>>>>>>> 4179948 (#2 :recycle:  코드 최적화)
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.anims.play(towerSprite, true);

    //테스트용
    // this.level = 2;
    // this.invisible = "true";

    scene.events.on("update", () => {
      this.update();
    });
  }

  update() {
    if (player.body.velocity.x > 0) {
      this.flipX = true;
    } else {
      this.flipX = false;
    }
    this.towerAttackTimer++;
    this.towerSkillAttackTimer++;
<<<<<<< HEAD
<<<<<<< HEAD
    if (this.towerAttackTimer >= this.towerAS[this.stone]) {
      this.towerAttackTimer = 0;
<<<<<<< HEAD
      //노멀
=======
>>>>>>> 52169d4 (#2 :recycle: 수치 조정)
      if (this.stone === 0 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {
          let magic = new TowerMagic(this.scene, this);
          petAttacks.add(magic);
          magic.anims.play(this.weaponSprite);
          let angle = Math.floor(Math.random() * 360);
          let x = Math.cos(angle * (Math.PI / 180));
          let y = Math.sin(angle * (Math.PI / 180));
          this.scene.physics.moveTo(magic, this.x + x, this.y + y, 300);
        }
      }
      //전기
      if (this.stone === 1 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {}
      }
      //불
      if (this.stone === 2 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {}
      }
      //물
      if (this.stone === 3 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {}
      }
      //땅
      if (this.stone === 4 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {
          let magic = new TowerMagic(this.scene, this);
          magic.setScale(3);
          petAttacks.add(magic);
          magic.anims.play(this.weaponSprite);
          let angle = Math.floor(Math.random() * 360);
          let x = Math.cos(angle * (Math.PI / 180));
          let y = Math.sin(angle * (Math.PI / 180));
          this.scene.physics.moveTo(magic, this.x + x, this.y + y, 300);
        }
      }
      //갓
      if (this.stone === 5 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level * 3; i++) {
          let magic = new TowerMagic(this.scene, this);
          petAttacks.add(magic);
          magic.anims.play(this.weaponSprite);
          let angle = Math.floor(Math.random() * 360);
          let x = Math.cos(angle * (Math.PI / 180));
          let y = Math.sin(angle * (Math.PI / 180));
          this.scene.physics.moveTo(magic, this.x + x, this.y + y, 300);
        }
      }
    }
=======
    // if (this.towerAttackTimer >= this.towerAS[this.stone]) {
    //   this.towerAttackTimer = 0;
=======
    if (this.towerAttackTimer >= this.towerAS[this.stone]) {
      this.towerAttackTimer = 0;
>>>>>>> eafeb9f (camera effect)

      //노멀

<<<<<<< HEAD
    //   if (this.stone === 0 && this.level > 0 && this.invisible === "true") {
    //     for (let i = 0; i < this.level; i++) {
    //       let magic = new TowerMagic(this.scene, this);
    //       petAttacks.add(magic);
    //       magic.anims.play(this.weaponSprite);
    //       let angle = Math.floor(Math.random() * 360);
    //       let x = Math.cos(angle * (Math.PI / 180));
    //       let y = Math.sin(angle * (Math.PI / 180));
    //       this.scene.physics.moveTo(magic, this.x + x, this.y + y, 300);
    //     }
    //   }
    //   //전기
    //   if (this.stone === 1 && this.level > 0 && this.invisible === "true") {
    //     for (let i = 0; i < this.level; i++) {}
    //   }
    //   //불
    //   if (this.stone === 2 && this.level > 0 && this.invisible === "true") {
    //     for (let i = 0; i < this.level; i++) {}
    //   }
    //   //물
    //   if (this.stone === 3 && this.level > 0 && this.invisible === "true") {
    //     for (let i = 0; i < this.level; i++) {}
    //   }
    //   //땅
    //   if (this.stone === 4 && this.level > 0 && this.invisible === "true") {
    //     for (let i = 0; i < this.level; i++) {
    //       let magic = new TowerMagic(this.scene, this);
    //       petAttacks.add(magic);
    //       magic.anims.play(this.weaponSprite);
    //       let angle = Math.floor(Math.random() * 360);
    //       let x = Math.cos(angle * (Math.PI / 180));
    //       let y = Math.sin(angle * (Math.PI / 180));
    //       this.scene.physics.moveTo(magic, this.x + x, this.y + y, 300);
    //     }
    //   }
    //   //갓
    //   if (this.stone === 5 && this.level > 0 && this.invisible === "true") {
    //     for (let i = 0; i < this.level * 3; i++) {
    //       let magic = new TowerMagic(this.scene, this);
    //       petAttacks.add(magic);
    //       magic.anims.play(this.weaponSprite);
    //       let angle = Math.floor(Math.random() * 360);
    //       let x = Math.cos(angle * (Math.PI / 180));
    //       let y = Math.sin(angle * (Math.PI / 180));
    //       this.scene.physics.moveTo(magic, this.x + x, this.y + y, 300);
    //     }
    //   }
    // }
>>>>>>> 3f55488 (merge)
=======
      if (this.stone === 0 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {
          let magic = new TowerMagic(this.scene, this);
          petAttacks.add(magic);
          magic.anims.play(this.weaponSprite);
          let angle = Math.floor(Math.random() * 360);
          let x = Math.cos(angle * (Math.PI / 180));
          let y = Math.sin(angle * (Math.PI / 180));
          this.scene.physics.moveTo(magic, this.x + x, this.y + y, 300);
        }
      }
      //전기
      if (this.stone === 1 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {}
      }
      //불
      if (this.stone === 2 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {}
      }
      //물
      if (this.stone === 3 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {}
      }
      //땅
      if (this.stone === 4 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level; i++) {
          let magic = new TowerMagic(this.scene, this);
          petAttacks.add(magic);
          magic.anims.play(this.weaponSprite);
          let angle = Math.floor(Math.random() * 360);
          let x = Math.cos(angle * (Math.PI / 180));
          let y = Math.sin(angle * (Math.PI / 180));
          this.scene.physics.moveTo(magic, this.x + x, this.y + y, 300);
        }
      }
      //갓
      if (this.stone === 5 && this.level > 0 && this.invisible === "true") {
        for (let i = 0; i < this.level * 3; i++) {
          let magic = new TowerMagic(this.scene, this);
          petAttacks.add(magic);
          magic.anims.play(this.weaponSprite);
          let angle = Math.floor(Math.random() * 360);
          let x = Math.cos(angle * (Math.PI / 180));
          let y = Math.sin(angle * (Math.PI / 180));
          this.scene.physics.moveTo(magic, this.x + x, this.y + y, 300);
        }
      }
    }
>>>>>>> eafeb9f (camera effect)
    if (
      this.towerSkillAttackTimer >=
      this.towerSkillAS[this.stone][this.level - 1]
    ) {
      this.towerSkillAttackTimer = 0;

      //노멀

      if (this.stone === 0 && this.level > 0 && this.invisible === "true") {
        let skill = new TowerSkill(
          this.scene,
          this,
          player.x,
          player.y,
          1,
          6000,
          2
        );
        shield = true;
        UICam.ignore(skill);
        skill.setAlpha(0.5);
        skill.anims.play(this.skillSprite);
      }
      //전기
      if (this.stone === 1 && this.level > 0 && this.invisible === "true") {
        for (
          let i = 0;
          i < this.towerSkillcount[this.stone][this.level - 1];
          i++
        ) {
          let angle = Math.floor(Math.random() * 360);
          let x = Math.cos(angle * (Math.PI / 180)) * 300;
          let y = Math.sin(angle * (Math.PI / 180)) * 200;
          let skill = new TowerSkill(
            this.scene,
            this,
            player.x + x,
            player.y + y,
            1,
            6000,
            2
          );
          UICam.ignore(skill);
          skill.setSize(30, 50);
          skill.body.offset.x = 20;
          skill.body.offset.y = 5;
          skill.anims.play(this.skillSprite);
          thisScene.physics.add.overlap(skill, bossSet, petSkillAttackFunc);
          thisScene.physics.add.overlap(skill, monsterSet, petSkillAttackFunc);
        }
      }
      //불
      if (this.stone === 2 && this.level > 0 && this.invisible === "true") {
        console.log(
          this.stone + " : " + this.towerSkillcount[this.stone][this.level - 1]
        );
        for (
          let i = 0;
          i < this.towerSkillcount[this.stone][this.level - 1];
          i++
        ) {
          let angle = Math.floor(Math.random() * 360);
          let x = Math.cos(angle * (Math.PI / 180)) * 300;
          let y = Math.sin(angle * (Math.PI / 180)) * 200;
          let skill = new TowerSkill(
            this.scene,
            this,
            player.x + x,
            player.y + y,
            1,
            6000,
            2
          );
          UICam.ignore(skill);
          skill.setSize(30, 50);
          skill.body.offset.x = 20;
          skill.body.offset.y = 5;
          skill.anims.play(this.skillSprite);
          thisScene.physics.add.overlap(skill, bossSet, petSkillAttackFunc);
          thisScene.physics.add.overlap(skill, monsterSet, petSkillAttackFunc);
        }
      }
      //물
      if (this.stone === 3 && this.level > 0 && this.invisible === "true") {
        for (
          let i = 0;
          i < this.towerSkillcount[this.stone][this.level - 1];
          i++
        ) {
          let angle = Math.floor(Math.random() * 360);
          let x = Math.cos(angle * (Math.PI / 180));
          let y = Math.sin(angle * (Math.PI / 180));
          let skill = new TowerSkill(
            this.scene,
            this,
            player.x,
            player.y,
            1,
            15000,
            2
          );
          UICam.ignore(skill);
          skill.setSize(50, 30);
          skill.body.offset.x = 10;
          skill.body.offset.y = 30;
          skill.anims.play(this.skillSprite);
          this.scene.physics.moveTo(skill, skill.x + x, skill.y + y, 130);
          this.scene.physics.add.collider(skill, monsterSet);
          this.scene.physics.add.collider(skill, bossSet);
        }
      }
      //땅
      if (this.stone === 4 && this.level > 0 && this.invisible === "true") {
        console.log(
          this.stone + " : " + this.towerSkillcount[this.stone][this.level - 1]
        );
        let angle = Math.floor(Math.random() * 360);
        let x = Math.cos(angle * (Math.PI / 180)) * 300;
        let y = Math.sin(angle * (Math.PI / 180)) * 200;
        for (
          let i = 0;
          i < this.towerSkillcount[this.stone][this.level - 1];
          i++
        ) {
          let skill = new TowerSkill(
            this.scene,
            this,
            player.x + i * 30,
            player.y,
            1,
            15000,
            2
          );
          UICam.ignore(skill);
          skill.setSize(30, 40);
          skill.body.offset.x = 20;
          skill.body.offset.y = 15;
          skill.body.immovable = true;
          skill.anims.play(this.skillSprite);
          this.scene.physics.add.collider(skill, monsterSet);
          this.scene.physics.add.collider(skill, bossSet);
        }
      }
      //갓
      if (this.stone === 5 && this.level > 0 && this.invisible === "true") {
        let skill = new TowerSkill(
          this.scene,
          this,
          player.x,
          player.y,
          1,
          1000,
          2
        );

        UICam.ignore(skill);
        skill.setScale(10);
        skill.setDepth(100);
        skill.setSize(75, 72);
        skill.body.offset.x = -5;
        skill.body.offset.y = -3;
        skill.anims.play(this.skillSprite);
        // thisScene.physics.add.overlap(skill, bossSet, petSkillAttackFunc);
        thisScene.physics.add.overlap(skill, monsterSet, petSkillAttackFunc);
      }
    }

    if (this.level > 0 && this.invisible === "false") {
      this.invisible = "true";
      this.setVisible(true);
    }
  }

  scale_Circle() {
    this.setScale(this.circleSize);
>>>>>>> d16b408 (#1 :sparkles: 타워 업그레이드 코인 소모)
    let hw = this.body.halfWidth;
    let hh = this.body.halfHeight;
    this.setCircle(hw * 5, (hh - hw) * 5, (hh - hw) * 5);
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  magicFire(game, tower, mouse, speed) {
    let magic = new TowerMagic(game, tower);

    let magicLeft;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:catchcatch/source/JS/GAME/GameObj/cattower.js
    let magicright = new TMagic(game, tower);
<<<<<<< HEAD
    if (mouse.type !== "boss" || (mouse.type === "boss" && mouse.bossSpiece !=="slime_king")) {
<<<<<<< HEAD
      console.log(mouse)
=======
=======
    let magicRight = new TowerMagic(game, tower);
>>>>>>> 30550e6 (#6 :sparkles: 타워 코드 정리):catchcatch/source/JS/GAME/GameObj/catTower.js
=======
    let magicRight = new TowerMagic(game, tower);
>>>>>>> d16b408 (#1 :sparkles: 타워 업그레이드 코인 소모)
=======
    let magicRight;
>>>>>>> f620f3d (#6 :bug: 타워 카메라 ignore)
    if (
      mouse.type !== "boss" ||
      (mouse.type === "boss" && mouse.bossSpecie !== "golem")
    ) {
<<<<<<< HEAD
<<<<<<< HEAD:catchcatch/source/JS/GAME/GameObj/cattower.js
<<<<<<< HEAD
      console.log(mouse);
>>>>>>> c260c13 (#1 :sparkles: 타워 업그레이드 구현)
=======
>>>>>>> 4cde4e7 (#2 :bug: 불거인 오라 확대)
      if (this.isthree === false && this.istwo === false) {
=======
      if (this.isthree === false) {
>>>>>>> da9ff4f (#3 :sparkles: 튕기는 부메랑)
=======
      if (this.isThree === false && this.isTwo === false) {
>>>>>>> 30550e6 (#6 :sparkles: 타워 코드 정리):catchcatch/source/JS/GAME/GameObj/catTower.js
=======
      if (this.isThree === false && this.isTwo === false) {
>>>>>>> d16b408 (#1 :sparkles: 타워 업그레이드 코인 소모)
        towerAttacks.add(magic);
      } else if (this.isThree === false && this.isTwo === true) {
        magicLeft = new TowerMagic(game, tower);
        towerAttacks.add(magic);
        towerAttacks.add(magicLeft);
      } else {
        magicLeft = new TowerMagic(game, tower);
        magicRight = new TowerMagic(game, tower);
        towerAttacks.add(magic);
        towerAttacks.add(magicLeft);
        towerAttacks.add(magicRight);
      }
    }
    game.physics.add.overlap(towerAttacks, monsterSet, tower.attack);
    tower.towerAttackTimer = 0;

    let angle = Phaser.Math.Angle.Between(tower.x, tower.y, mouse.x, mouse.y);

    magic.rotation = angle;
    let num = (tower.x - mouse.x) ** 2 + (tower.y - mouse.y) ** 2;
    let d = 145;
    let angle_dis = Math.sqrt(num);
    let angle_mouse = Math.asin(-(mouse.y - tower.y) / angle_dis);

    angle_mouse = (angle_mouse * 180) / Math.PI;
    if (mouse.x - tower.x < 0 && angle_mouse > 0) {
      angle_mouse = 180 - angle_mouse;
    } else if (mouse.x - tower.x < 0 && angle_mouse < 0) {
      angle_mouse = -angle_mouse - 180;
    } else if (angle_mouse === -0) {
      angle_mouse = -180;
<<<<<<< HEAD
=======
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.add.overlap(this, monsterSet, this.overlapHit);
        scene.physics.add.overlap(this, bossSet, this.overlapHit);
>>>>>>> d9a4abe (#1 :sparkles: 타워 코드 수정)
=======
>>>>>>> d16b408 (#1 :sparkles: 타워 업그레이드 코인 소모)
    }

    let vxm;
    let vym;
    let vxp;
    let vyp;

    if (angle_mouse >= 0) {
      if (0 <= angle_mouse - 30 <= 90) {
        vxm = tower.x + d * Math.cos(((angle_mouse - 30) * Math.PI) / 180);
        vym = tower.y - d * Math.sin(((angle_mouse - 30) * Math.PI) / 180);
      }

      if (0 <= angle_mouse + 30 <= 90) {
        vxp = tower.x + d * Math.cos(((angle_mouse + 30) * Math.PI) / 180);
        vyp = tower.y - d * Math.sin(((angle_mouse + 30) * Math.PI) / 180);
      }
    } else {
      if (0 <= angle_mouse + 30) {
        vxm = tower.x + d * Math.cos(((angle_mouse + 30) * Math.PI) / 180);
        vym = tower.y - d * Math.sin(((angle_mouse + 30) * Math.PI) / 180);
      } else if (-180 < angle_mouse + 30) {
        vxm = tower.x + d * Math.cos((-(angle_mouse + 30) * Math.PI) / 180);
        vym = tower.y + d * Math.sin((-(angle_mouse + 30) * Math.PI) / 180);
      }
      vxp =
        tower.x - d * Math.cos(((180 - (angle_mouse - 30)) * Math.PI) / 180);
      vyp =
        tower.y - d * Math.sin(((180 - (angle_mouse - 30)) * Math.PI) / 180);
    }
    if (
      mouse.type !== "boss" ||
      (mouse.type === "boss" && mouse.bossSpiece !== "golem")
    ) {
      if (tower.isThree === false && tower.isTwo === false) {
        game.physics.moveTo(magic, mouse.x, mouse.y, speed);
      } else if (tower.isThree === false && tower.isTwo === true) {
        game.physics.moveTo(magicLeft, vxm, vym, speed);
        game.physics.moveTo(magic, mouse.x, mouse.y, speed);
      } else {
        game.physics.moveTo(magicLeft, vxm, vym, speed);
        game.physics.moveTo(magic, mouse.x, mouse.y, speed);
        game.physics.moveTo(magicRight, vxp, vyp, speed);
      }
    }
    // control = true;
  }

  damageFunc(thTower) {
    if (
      thTower.towerDmgLevel < 10 &&
      player.coin >= thTower.towerDmgCost[thTower.towerDmgLevel + 1]
    ) {
      player.coin -= thTower.towerDmgCost[thTower.towerDmgLevel + 1];
      UpdateCatCoin();
      thTower.towerDmgLevel += 1;
      thTower.level++;
      tower();
    }
  }

  bulletFunc(thTower) {
    if (thTower.bulletLevel < 2) {
      if (
        thTower.isTwo === false &&
        thTower.isThree === false &&
        player.coin >= thTower.bulletCost[thTower.bulletLevel + 1]
      ) {
        player.coin -= thTower.bulletCost[thTower.bulletLevel + 1];
        thTower.isTwo = true;
        thTower.bulletLevel += 1;
      } else if (
        thTower.isTwo === true &&
        thTower.isThree === false &&
        player.coin >= thTower.bulletCost[thTower.bulletLevel + 1]
      ) {
        player.coin -= thTower.bulletCost[thTower.bulletLevel + 1];
        thTower.isThree = true;
        thTower.bulletLevel += 1;
      }

      thTower.level++;
      UpdateCatCoin();
      tower();
    }
  }

  rangeFunc(thTower) {
    if (thTower.level >= 10) {
      if (
        thTower.circleSizeLevel < 10 &&
        player.coin >= thTower.circleSizeCost[thTower.circleSizeLevel + 1]
      ) {
        player.coin -= thTower.circleSizeCost[thTower.circleSizeLevel + 1];
        thTower.circlesize += 0.01;
        thTower.circleSizeLevel++;
        thTower.level++;
      }
      UpdateCatCoin();
      tower();
    }
  }

  speedFunc(thTower) {
    if (thTower.level >= 10) {
      if (
        thTower.towerASLevel < 10 &&
        player.coin >= thTower.towerASCost[thTower.towerASLevel + 1]
      ) {
        player.coin -= thTower.towerASCost[thTower.towerASLevel + 1];
        thTower.towerASLevel += 1;
        thTower.level++;
      }
      tower();
      UpdateCatCoin();
    }
  }

  changeEvelop(num, thTower) {
    if (this.level >= 9 && !this.isTowerEvelop1) {
      if (!this.isTowerEvelop1 && player.coin >= thTower.towerEvelopCost[0]) {
        player.coin -= thTower.towerEvelopCost[0];

        this.towerEvelop1[num] = true;
        this.isTowerEvelop1 = true;
        thTower.stone = num + 1;
        this.anims.play(`${num + 1}_idle`, true);
        this.level++;
      } else if (player.coin < thTower.towerEvelopCost[0]) {
        alert("코인 부족");
      }
    } else if (this.level >= 19) {
      if (!this.isTowerEvelop2) {
        if (
          !this.towerEvelop1[num] &&
          player.coin >= thTower.towerEvelopCost[1]
        ) {
          player.coin -= thTower.towerEvelopCost[1];

          this.towerEvelop2[num] = true;
          this.isTowerEvelop2 = true;

          this.level++;
        } else if (this.towerEvelop1[num]) {
          alert("중복");
        } else {
          alert("코인 부족");
        }
      } else if (
        player.coin < thTower.towerEvelopCost[0] ||
        player.coin < thTower.towerEvelopCost[1]
      ) {
        alert("코인 부족");
      }
    } else {
      alert("레벨 부족");
    }
    UpdateCatCoin();
    tower();
  }

  attack(magic, alien) {
    if (!alien.invincible) {
      magic.destroy();

      alien.health -= magic.dmg;

      if (alien.health <= 0) {
        alien.destroy();
        monsterCount -= 1;
      }
      alien.invincible = true;
    }
  }

  skillattack(skill, alien) {
    if (!alien.invincible) {
      if (skill.tower.towerEvelop1[0] === true) {
        if (Math.floor(Math.random() * (10 - 1) + 1) === 1) {
          alien.health -= skill.dmg * 9999;
        } else {
          alien.health -= 0;
        }
      } else if (skill.tower.towerEvelop1[1] === true) {
        alien.health -= skill.dmg / 2;
      } else if (skill.tower.towerEvelop1[2] === true) {
        alien.CC = "water";
      } else if (skill.tower.towerEvelop1[3] === true) {
        alien.CC = "earth";
      }

      if (skill.tower.towerEvelop2[0] === true) {
        if (Math.floor(Math.random() * (10 - 1) + 1) === 1) {
          alien.health -= skill.dmg * 9999;
        } else {
          alien.health -= 0;
        }
      } else if (skill.tower.towerEvelop2[1] === true) {
        alien.health -= skill.dmg / 2;
      } else if (skill.tower.towerEvelop2[2] === true) {
        alien.CC = "water";
      } else if (skill.tower.towerEvelop2[3] === true) {
        alien.CC = "earth";
      }

      alien.invincible = true;
      if (alien.health <= 0) {
        alien.destroy();
        monsterCount -= 1;
      }
    }
  }

  overlaphit(tower, enemy) {
    if (tower.towerAttackTimer > tower.towerAS[tower.towerASLevel]) {
      tower.magicFire(tower.scene, tower, enemy, tower.towerWeaponSpeed);
      tower.towerAttackTimer = 0;
    }
    
    if (tower.towerSkillAttackTimer > tower.towerSkillAS) {
      tower.skillFire(tower.scene, tower, enemy, tower.towerSkillSpeed);
      tower.towerSkillAttackTimer = 0;
    }
    tower.anims.play(`${tower.stone}_attack`, true);
  }

  skillFire(game, tower, mouse, speed) {
    if (
      mouse.type !== "boss" ||
      (mouse.type === "boss" && mouse.bossSpecie !== "golem")
    ) {
      let skill;
      let skill2;
      if (tower.towerEvelop1[0] === true) {
        skill = new TowerSkill(game, tower, 1000, 3000, 0.01);
      } else if (tower.towerEvelop1[1] === true) {
        skill = new TowerSkill(game, tower, 1000, 10000, 0.01);
        skill.dmg = skill.dmg / 2;
      } else if (tower.towerEvelop1[2] === true) {
        skill = new TowerSkill(game, tower, 1000, 3000, 0.01);
        mouse.CC = "water";
      } else if (tower.towerEvelop1[3] === true) {
        skill = new TowerSkill(game, tower, 1000, 3000, 0.01);
        mouse.CC = "earth";
      }

      if (skill) {
        skill.body.checkCollision.none = true;
        let hw = skill.body.halfWidth;
        let hh = skill.body.halfHeight;
        skill.setCircle(hw * 100, hh - hw * 100, hh - hw * 100);
        towerSkillAttacks.add(skill);
      }


      if (tower.towerEvelop2[0] === true) {
        skill2 = new TowerSkill(game, tower, 0, 3000, 0.01);
      } else if (tower.towerEvelop2[1] === true) {
        skill2 = new TowerSkill(game, tower, 0, 10000, 0.01);
        skill2.dmg = skill2.dmg / 2;
      } else if (tower.towerEvelop2[2] === true) {
        skill2 = new TowerSkill(game, tower, 0, 3000, 0.01);
        mouse.CC = "water";
      } else if (tower.towerEvelop2[3] === true) {
        skill2 = new TowerSkill(game, tower, 0, 3000, 0.01);
        mouse.CC = "earth";
      }

      if (skill2) {
        skill2.body.checkCollision.none = true;
        let hw = skill2.body.halfWidth;
        let hh = skill2.body.halfHeight;
        skill2.setCircle(hw * 1000, hh - hw * 1000, hh - hw * 1000);
        towerSkillAttacks.add(skill2);
      }

      game.physics.add.overlap(
        towerSkillAttacks,
        monsterSet,
        tower.skillattack
      );

      tower.towerSkillAttackTimer = 0;

      game.tweens.add({
        targets: skill,
        x: mouse.x,
        y: mouse.y,
        duration: speed,
        ease: "Linear",
        completeDelay: speed,
      });

    }
  }
=======
>>>>>>> b73dc87 (#6 :sparkles: 타워 삭제)
=======
=======
  levelUp() {
    this.level++;
  }

>>>>>>> 87451fe (#1 :sparkles: 레벨업에 common대신 pet 구현)
  overlaphit() {}
>>>>>>> b8f5732 (#6 :sparkles: pet 추가)
}
