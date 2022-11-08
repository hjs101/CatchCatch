import { monsterSet, bossSet } from "../game";
import TowerMagic from "./tower-magic";
import TowerSkill from "./tower-skill";
import tower from "../../UI/tower-upgrade.js";
import Player from "./player";
import { UpdateCatCoin } from "../../UI/ingame-ui.js";

export default class CatTower extends Phaser.Physics.Arcade.Sprite {
  weaponSprite;
  skillSprite;
  towerAttackTimer = 0;
  towerSkillAttackTimer = 0;
  towerAS = 50; //연사속도
  towerASLevel = 0; //연사속도
  towerSkillAS = 50; //연사속도
  towerDmg = 13; //기본 대미지
  towerDmgLevel = 0;
  towerSkillDmg = 6; //스킬 기본 대미지
  towerWeaponSpeed = 500; //발사속도
  towerSkillSpeed = 500; //발사속도
  isAttack = false;
  isTwo = false; //2연발
  isThree = false; //3연발
  bulletLevel = 0;
  towerEvelop1 ="none";
  circleSize = 1.5;
  circleSizeLevel = 0;
  level = 0;
  stone = 0;
  timedEvent;

  constructor(scene, towerX, towerY, towerSprite, weaponSprite, skillSprite, stones) {
    super(scene, towerX, towerY, towerSprite);

    this.scene = scene;
    this.weaponSprite = weaponSprite;
    this.skillSprite = skillSprite;
    this.stone = stones;

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
    scene.physics.add.overlap(this, monsterSet, this.overlaphit);
    scene.physics.add.overlap(this, bossSet, this.overlaphit);
    this.anims.play(towerSprite, true);
  }

  scale_Circle() {
    this.setScale(this.circleSize);
>>>>>>> d16b408 (#1 :sparkles: 타워 업그레이드 코인 소모)
    let hw = this.body.halfWidth;
    let hh = this.body.halfHeight;
    this.setCircle(hw * 5, hh - hw * 5, hh - hw * 5);
  }

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
}
