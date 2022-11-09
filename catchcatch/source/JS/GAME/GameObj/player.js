import { cursors, mapSize } from "../game.js";
import { GameOver } from "../../UI/ingame-ui.js";
import levelup from "../../UI/levelup.js";
import { setSound } from "../../SOUND/sound";

export const Direction = Object.freeze({
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
});

export default class Player extends Phaser.Physics.Arcade.Sprite {
<<<<<<< HEAD
<<<<<<< HEAD
  maxHealth = 20;
  health = 20;
  healthLevel = 1;
  dmgmul = 1;
  dmgmulLevel = 1;
=======
  maxHealth = 10;
  health = 10;
  healthLevel = 1;
  dmgMul = 1;
  dmgMulLevel = 1;
>>>>>>> 9ea8632 (#3 :sparkles: 밸런스패치)
  speed = 100;
  speedLevel = 1;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  maxExp = 3000000;
=======
  maxExp = 300000000000;
>>>>>>> b8e8c56 (#3 :sparkles: 무적개선)
=======
  maxExp = 30000;
>>>>>>> 9d72bdb (#3 :sparkles: 게임 버그픽스 및 업데이트)
=======
  maxExp = 30000;
>>>>>>> e0b3f4c (#3 :bug: 버그픽스)
=======
  maxExp = 3000000;
  maxExp = 30000;
>>>>>>> 73f34e9 (Update player.js)
=======
  maxExp = 3;
>>>>>>> b12c7f3 (:poop: 뭐가 바뀐지 모르겠다)
  exp = 0;
  level = 1;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  maxExpBonus = 1;
<<<<<<< HEAD
  coin = 1000;
  // 캐릭터 특수능력 일단 보류
  ablity;
  heal = 0;
  healCount = 0;
  maxHealCount = 300;
  healLevel = 1;
  fairy;
  invincible = false;
<<<<<<< HEAD
  constructor(scene, dmgmul, maxHealth, health, catname) {
    super(scene, 0, 0, catname);
<<<<<<< HEAD
=======
  constructor(scene, dmgmul, maxHealth, health) {
    super(scene, 0, 0, "cat1");
>>>>>>> a774e3d (#1 :sparkles: levelup random 및 levelup시 수치 증가)
    this.scale = 0.7;
=======
>>>>>>> 3e6dfa6 (#3 :sparkles: player 기능 구현)
    this.alpha = 1;
    this.dmgmul = dmgmul;
    this.maxHealth = maxHealth;
    this.health = health;
    scene.add.existing(this);
    scene.physics.add.existing(this);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 8ab07ca (#3 :sparkles: 위치 폭탄)
    scene.anims.create({
      key: "turn",
      frames: this.anims.generateFrameNumbers(catname, { start: 0, end: 0 }),
      frameRate: 10,
    });
    scene.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers(catname, { start: 1, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
    scene.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers(catname, { start: 1, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
  }
=======
    maxHealth = 20;
    health = 20;
    healthLevel = 1;
    dmgMul = 1;
    dmgMulLevel = 1;
    speed = 100;
    speedLevel = 1;
    maxExp = 3;
    exp = 0;
    level = 1;
    maxExpBonus = 1;
    coin = 100000;
    // 캐릭터 특수능력 일단 보류
    ability = 0;
    heal = 0;
    healCount = 0;
    maxHealCount = 300;
    healLevel = 1;
    fairy;
    invincible = false;
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
=======
=======
  maxExpBonus = 0;
>>>>>>> 4d90a92 (#3 :bug: 개발자 치트모드 해제)
=======
  maxExpBonus = 1;
>>>>>>> 82fad1e (:bug: debug 모드 해제)
=======
  maxExpBonus = 0;
>>>>>>> c6b3778 (#3 :sparkles: vfx update 2)
=======
  maxExpBonus = 1;
>>>>>>> a9b833c (#3 :sparkles: 치트모드 해제)
=======
  maxExpBonus = 5;
>>>>>>> e036777 (#2 #3 :honey_pot: 레벨업 수치, 폭발음)
  coin = 100000;
  // 캐릭터 특수능력 일단 보류
  ability = 0;
  heal = 0;
  healCount = 0;
  maxHealCount = 600;
  healLevel = 1;
  fairy;
  invincible = false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 9ea8632 (#3 :sparkles: 밸런스패치)
=======
  type = "player";
<<<<<<< HEAD
>>>>>>> c428dc5 (#2 :sparkles: 폭탄 몹 추가)
=======
>>>>>>> f72d473 (Revert "#2 :sparkles: 폭탄 몹 추가")
=======
  type = "player";
>>>>>>> 62febc3 (Revert "Revert "#2 :sparkles: 폭탄 몹 추가"")

=======
  myInvincibleEvent = undefined;
>>>>>>> b8e8c56 (#3 :sparkles: 무적개선)
  constructor(scene, dmgMul, maxHealth, health, catName) {
    super(scene, 1024, 1024, catName);
    this.alpha = 1;
    this.dmgMul = dmgMul;
    this.maxHealth = maxHealth;
    this.health = health;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.anims.create({
      key: "turn",
      frames: this.anims.generateFrameNumbers(catName, { start: 0, end: 0 }),
      frameRate: 10,
    });
    scene.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers(catName, { start: 1, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
    scene.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers(catName, { start: 1, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
  }

<<<<<<< HEAD
    expUp() {
        this.exp++;
        this.expUpdate();
        updateExp();
<<<<<<< HEAD
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
    

=======
>>>>>>> a774e3d (#1 :sparkles: levelup random 및 levelup시 수치 증가)
=======
    updateExp();
>>>>>>> 89832b9 (#1 :sparkles: 레벨업 버그 고침)
  }

  levelUp() {
    this.exp++;
    updateExp();
    console.log("levelup");
    if (this.exp === this.maxExp) {
      this.level++;
      this.exp = 0;
      levelup();
      updateExp();
      this.maxExp = this.maxExp + this.maxExpBonus;
    }
  }

=======
  }

>>>>>>> f5bd30f (#1 :sparkles: fairy5렙 9렙 구매 가능 및 레벨업에서 4, 8 안뜸)
  changeFairy(fairy) {
    this.fairy = fairy;
  }

  move(direction) {
    this.fairy.x = this.x - 20;
    this.fairy.y = this.y - 50;
    
    if (cursors.left.isDown) {
      this.setVelocityX(-this.speed);
      this.anims.play("left", true);
      this.flipX = true;
    } else if (cursors.right.isDown) {
      this.setVelocityX(this.speed);
      this.flipX = false;
      this.anims.play("right", true);
    } else {
      this.setVelocityX(0);
=======
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
    }
=======
  expUp() {
    this.exp++;
    this.expUpdate();
  }
>>>>>>> 9ea8632 (#3 :sparkles: 밸런스패치)

  commonLevelUp(id) {
    switch (id) {
      case "dmgMul":
        this.dmgMulLevel++;
        this.dmgMul += 0.2;
        break;
      case "health":
        this.healthLevel++;
        this.maxHealth += 2;
        this.health += 2;
        break;
      case "heal":
        this.healLevel++;
        this.heal += 1;
        break;
      case "speed":
        this.speedLevel++;
        this.speed += 5;
        break;
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
  expUpdate() {
    if (this.exp >= this.maxExp) {
      if (!isLevelup) {
        this.exp -= this.maxExp;
        this.maxExp += this.maxExpBonus;
        this.level++;
        isLevelup = true;
        levelup();
      }
    }
<<<<<<< HEAD
>>>>>>> a37e11d (#1 :sparkles: levelup 개편)
=======
>>>>>>> 4c2f366 (#2 :sparkles: 몬스터 구조 변경)
  }

<<<<<<< HEAD
  hitByEnemy(damage) {}

  hitPlayer(player, alien) {
<<<<<<< HEAD
<<<<<<< HEAD
    if (player.invincible == false) {
      player.invincible = true;
      alien.hp -= 1;
      player.health -= 1;
=======
    if (player.invincible == false){
      player.invincible = true
      player.health-=1;
>>>>>>> 738219b (#2 :sparkles: : 몬스터 종류 구현 및 보스 초기 제작)
=======
    if (player.invincible == false) {
      player.invincible = true;
      player.body.checkCollision.none = true;
      player.health -= 1;
<<<<<<< HEAD
>>>>>>> f5bd30f (#1 :sparkles: fairy5렙 9렙 구매 가능 및 레벨업에서 4, 8 안뜸)
      console.log(player.invincible);
      console.log(player.health);
=======
>>>>>>> 3e6dfa6 (#3 :sparkles: player 기능 구현)
      // 피해 1 줌
      // stop_game -= 1;
      if (player.health <= 0) {
        gameover();
      }
=======
    expUpdate() {
        if (this.exp >= this.maxExp) {
            if (!isLevelup) {
                this.exp -= this.maxExp;
                this.maxExp += this.maxExpBonus;
                this.level++;
                isLevelup = true;
                levelup();
                updateExp();
            }
        }
        updateExp();
    }

    changeFairy(fairy) {
        this.fairy = fairy;
=======
  changeFairy(fairy) {
    this.fairy = fairy;
  }

  move(hpBar, hpBarBG) {
    this.fairy.x = this.x - 20;
    this.fairy.y = this.y - 50;

    if (cursors.left.isDown) {
      this.setVelocityX(-this.speed);
      this.anims.play("left", true);
      this.flipX = true;
    } else if (cursors.right.isDown) {
      this.setVelocityX(this.speed);
      this.flipX = false;
      this.anims.play("right", true);
    } else {
      this.setVelocityX(0);
>>>>>>> 9ea8632 (#3 :sparkles: 밸런스패치)
    }

    if (cursors.up.isDown) {
      this.setVelocityY(-this.speed);

      if (cursors.left.isDown) {
        this.anims.play("left", true);
      } else {
        this.anims.play("right", true);
      }
    } else if (cursors.down.isDown) {
      this.setVelocityY(this.speed);

      if (cursors.left.isDown) {
        this.anims.play("left", true);
      } else {
        this.anims.play("right", true);
      }
    } else {
      this.setVelocityY(0);
      if (!cursors.left.isDown && !cursors.right.isDown) {
        this.anims.play("turn", true);
      }
    }
    let speedDiag = this.speed * (1 / 1.44);
    if (cursors.left.isDown && cursors.up.isDown) {
      this.body.setVelocityX(-speedDiag);
      this.body.setVelocityY(-speedDiag);
    }

    // Up and right
    if (cursors.right.isDown && cursors.up.isDown) {
      this.body.setVelocityX(speedDiag);
      this.body.setVelocityY(-speedDiag);
    }

<<<<<<< HEAD
    hitPlayer(player) {
        setSound.playSE(11);
        if (player.invincible === false) {
            player.invincible = true;
            player.body.checkCollision.none = true;
            player.health -= 1;
            // 피해 1 줌
            // stop_game -= 1;
            if (player.health <= 0) {
                GameOver();
                $this.pause();
            }
        }
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
=======
    // Down and right
    if (cursors.right.isDown && cursors.down.isDown) {
      this.body.setVelocityX(speedDiag);
      this.body.setVelocityY(speedDiag);
>>>>>>> 9ea8632 (#3 :sparkles: 밸런스패치)
    }

    // Down and left
    if (cursors.left.isDown && cursors.down.isDown) {
      this.body.setVelocityX(-speedDiag);
      this.body.setVelocityY(speedDiag);
    }
    hpBar.setPosition(this.x - 30, this.y + 40);
    hpBarBG.setPosition(this.x - 30, this.y + 40);
  }

  hitByEnemy(damage) {}

  hitPlayer(player) {
    if (ChoiceCat === 5) {
      let rand = Math.floor(Math.random() * 20);
      setSound.playSE(rand);
    } else {
      setSound.playSE(11);
    }
    if (player.invincible === false) {
      player.invincible = true;
      player.body.checkCollision.none = true;
      player.health -= 1;
      // 피해 1 줌
      // stop_game -= 1;
      if (player.health <= 0) {
        player.health = 0;
        GameOver();
        $this.pause();
      }
    }
    // 공격 맞은 후 일시 무적에 사용
    player.unInvincible();
  }

  bombHitPlayer(player, bombDead) {
    if (ChoiceCat === 5) {
      let rand = Math.floor(Math.random() * 20);
      setSound.playSE(rand);
    } else {
      setSound.playSE(11);
    }
    if (!player.invincible) {
      player.invincible = true;
      player.body.checkCollision.none = true;
      player.health -= 3;
      player.unInvincible();
      // 피해 1 줌
      // stop_game -= 1;
      if (player.health <= 0) {
        player.health = 0;
        GameOver();
        $this.pause();
      }
    }
  }

  unInvincible() {
    this.myInvincibleEvent = thisScene.time.addEvent({
      delay: 1000,
      callback: () => {
        this.invincible = false;
        this.body.checkCollision.none = false;
        this.setVisible(true);
        thisScene.time.removeEvent(this.myInvincibleEvent);
        this.myInvincibleEvent = undefined;
      },
      loop: false,
    });
  }
}
