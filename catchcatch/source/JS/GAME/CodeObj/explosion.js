import Player from "./player";

export default class Explosion extends Phaser.GameObjects.Sprite {
<<<<<<< HEAD
    constructor(scene, x, y) {
        // magic5_1를 나중에 폭발 스프라이트 애니메이션  key로 바꾸기
        super(scene, x, y, "monster_die");
        scene.time.addEvent({
            delay: 500, callback: () => {
                this.destroy();
            }, loop: false
        });
        scene.add.existing(this);
        this.scale = 2;
        UICam.ignore(this);
        this.play("monster_die");
    }
}
=======
  constructor(scene, x, y) {
    // magic5_1를 나중에 폭발 스프라이트 애니메이션  key로 바꾸기
    super(scene, x, y, "monster_die");
    scene.time.addEvent({
      delay: 500,
      callback: () => {
        this.destroy();
      },
      loop: false,
    });
    scene.add.existing(this);
    this.scale = 2;
    this.play("monster_die");
  }
}
>>>>>>> 2965cee (#2 :sparkles: 코드캐치 피격 이펙트)
