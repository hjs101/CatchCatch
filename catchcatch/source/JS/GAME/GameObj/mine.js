import { mines } from "../game";
import { UpdateCatCoin } from "../../UI/ingame-ui";

export default class Mine extends Phaser.Physics.Arcade.Image {
  mineSprite;
  mine = 0;

  constructor(scene, mineX, mineY, minesprite) {
    super(scene, mineX, mineY, minesprite);

    this.scene = scene;
<<<<<<< HEAD
    this.minesprite = minesprite;
<<<<<<< HEAD
=======

>>>>>>> 8e09cfa (#6 :bug: 상자 크기 수정)
=======
    this.mineSprite = minesprite;
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)

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
  overlapopen(mine, player) {
<<<<<<< HEAD
=======
  overlapOpen(mine, player) {
>>>>>>> 84c8e4e (#1 :sparkles: 각종 코드 수정)
    var range = Phaser.Math.Distance.Between(mine.x, mine.y, 0, 0);

=======
    var range = Phaser.Math.Distance.Between(
      mine.x,
      mine.y,
      0,
      0
    )



>>>>>>> 8e09cfa (#6 :bug: 상자 크기 수정)
    if (0 <= range && range < 100) {
      coin += 1;
      // cointext.setText('coin: ' + coin);
    }
    if (100 <= range && range < 500) {
      coin += 2;
      // cointext.setText('coin: ' + coin);
    }
    if (500 <= range && range < 1000) {
      coin += 3;
      // cointext.setText('coin: ' + coin);
    }
    UpdateCatCoin();

    mine.destroy();
  }
}
