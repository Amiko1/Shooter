import { Scene, Physics } from "phaser";

class Player extends Physics.Arcade.Sprite {
  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, "player");

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }
}

export default Player;
