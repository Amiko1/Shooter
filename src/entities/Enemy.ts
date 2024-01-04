import Phaser from "phaser";

import collidable from "../mixins/collidable";

class Enemy extends Phaser.Physics.Arcade.Sprite {
  speed: number;
  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    super(scene, x, y, key);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Mixins
    Object.assign(this, collidable);

    this.init();
  }

  init() {
    this.speed = 200;
    this.setImmovable(true);
    this.setOrigin(0.5, 1);
  }

  moveTo(player: Phaser.Physics.Arcade.Sprite) {
    this.scene.physics.moveToObject(this, player);
  }
}

export default Enemy;
