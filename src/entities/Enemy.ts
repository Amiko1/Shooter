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

    this.setCollideWorldBounds(true);
    this.setImmovable(true);
    this.setOrigin(0.5, 1);
  }
}

export default Enemy;
