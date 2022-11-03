import { mines } from "../game";
import { UpdateCatCoin } from "../../UI/ingame-ui";

export default class Mine extends Phaser.Physics.Arcade.Image {
  mineSprite;
  mine = 0;
  coinTime;

  constructor(scene, mineX, mineY, minesprite, cointimes) {
    super(scene, mineX, mineY, minesprite, cointimes);

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
    }
    if (0 <= range && range < 500) {
      player.coin += 1 + mine.coinTime;
      // console.log(1);
    }
    else if (500 <= range && range < 5000) {
      player.coin += 2 + mine.coinTime;
      // console.log(2);
    }
    else {
      player.coin += 3 + mine.coinTime;
      // console.log(3);
    }
    console.log(player.coin);
    UpdateCatCoin();

    mine.destroy();
  }
}
