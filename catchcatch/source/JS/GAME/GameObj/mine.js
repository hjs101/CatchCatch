import { mines } from "../game";
import { setSound } from "../../SOUND/sound";

<<<<<<< HEAD
export default class Mine extends Phaser.Physics.Arcade.Sprite {
    mine = 0;
    coinTime;
=======
export default class Mine extends Phaser.Physics.Arcade.Image {
  mineSprite;
  mine = 0;
  coinTime;
>>>>>>> 785eea8 (#1 :sparkles: 튜토리얼 중간 완료 및 쿨타임 UI 수정)

  constructor(scene, mineX, mineY, minesprite, cointimes) {
    super(scene, mineX, mineY, minesprite, cointimes);

<<<<<<< HEAD
<<<<<<< HEAD
    this.scene = scene;
<<<<<<< HEAD
    this.minesprite = minesprite;
<<<<<<< HEAD
=======

>>>>>>> 8e09cfa (#6 :bug: 상자 크기 수정)
=======
    this.mineSprite = minesprite;
<<<<<<< HEAD
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
=======
    this.coinTime = cointimes;
>>>>>>> c32c276 (:sparkles: mine 등장 시기 생성)

    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.add.overlap(this, player, this.overlapOpen);
  }

  scale_Circle() {
    this.setScale(1);
    let hw = this.body.halfWidth;
    let hh = this.body.halfHeight;
    this.setCircle(hw * 1, hh - hw * 1, hh - hw * 1);
  }

<<<<<<< HEAD
<<<<<<< HEAD
  overlapopen(mine, player) {
<<<<<<< HEAD
=======
  overlapOpen(mine, player) {
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
=======
  overlapopen(mine) {
>>>>>>> 4b975cf (#1 :sparkles: 타워 업그레이드 코인 소모)
    var range = Phaser.Math.Distance.Between(mine.x, mine.y, 0, 0);

<<<<<<< HEAD
=======
    var range = Phaser.Math.Distance.Between(
      mine.x,
      mine.y,
      0,
      0
    )



>>>>>>> 8e09cfa (#6 :bug: 상자 크기 수정)
    if (0 <= range && range < 100) {
      player.coin += 1;
      // cointext.setText('coin: ' + coin);
=======
    if(gameTimer % 7200 == 0){
    mine.coinTime = gameTimer / 7200;
>>>>>>> c32c276 (:sparkles: mine 등장 시기 생성)
=======
        this.scene = scene;
        this.minesprite = minesprite;
        this.coinTime = cointimes;

        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.physics.add.overlap(this, player, this.overlapOpen);
>>>>>>> a649d28 (#2 :moneybag: 동전 획득 소리)
    }

    scale_Circle() {
        this.setScale(1);
        let hw = this.body.halfWidth;
        let hh = this.body.halfHeight;
        this.setCircle(hw * 1, hh - hw * 1, hh - hw * 1);
    }

    set_anime(){
        this.play(this.minesprite);
    }

    overlapOpen(mine, player) {
        console.log(mine)
        var range = Phaser.Math.Distance.Between(mine.x, mine.y, 0, 0);

        if (gameTimer % 7200 === 0) {
            mine.coinTime = gameTimer / 7200;
        }
        if (0 <= range && range < 500) {
            player.coin += 1 + mine.coinTime;
        } else if (500 <= range && range < 5000) {
            player.coin += 2 + mine.coinTime;
        } else {
            player.coin += 3 + mine.coinTime;
        }
        UpdateCatCoin();
        if (ChoiceCat === 5) {
            let rand = Math.floor(Math.random() * 20);
            setSound.playSE(rand);
        } else {
            setSound.playSE(17);
        }
        mine.destroy();
=======
    this.scene = scene;
    this.mineSprite = minesprite;
    this.coinTime = cointimes;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.add.overlap(this, player, this.overlapOpen);
  }

  scale_Circle() {
    this.setScale(1);
    let hw = this.body.halfWidth;
    let hh = this.body.halfHeight;
    this.setCircle(hw * 1, hh - hw * 1, hh - hw * 1);
  }

  overlapOpen(mine, player) {
    var range = Phaser.Math.Distance.Between(mine.x, mine.y, 0, 0);

    if (gameTimer % 7200 === 0) {
      mine.coinTime = gameTimer / 7200;
    }
    if (0 <= range && range < 500) {
      player.coin += 1 + mine.coinTime;
    } else if (500 <= range && range < 5000) {
      player.coin += 2 + mine.coinTime;
    } else {
      player.coin += 3 + mine.coinTime;
>>>>>>> 785eea8 (#1 :sparkles: 튜토리얼 중간 완료 및 쿨타임 UI 수정)
    }
    setSound.playSE(17);
    mine.destroy();
  }
}
