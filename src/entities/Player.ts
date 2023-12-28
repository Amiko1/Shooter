import Phaser from "phaser";

import collidable from "../mixins/collidable";
import { playerAnims } from "./playerAnims";

class Player extends Phaser.Physics.Arcade.Sprite {
  playerBody: Body;

  playerSpeed!: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    Object.assign(this, collidable as any);

    this.init();
    this.initEvents();
  }

  init() {
    const scaleFactor = 0.12;
    this.setScale(scaleFactor);
    this.body.setSize(this.width / 2, 10);
    this.setOffset(this.body.offset.x, this.height);
    this.setCollideWorldBounds(true);
    this.playerSpeed = 200;
    playerAnims(this.anims);
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  update() {
    this.handlePlayerInput();
    this.handleAnimationSwitch();
  }

  handlePlayerInput() {
    const { left, right, down, up } =
      this.scene.input.keyboard.createCursorKeys();

    if (left.isDown) {
      this.setVelocityX(-this.playerSpeed);
      this.setFlipX(true);
    } else if (right.isDown) {
      this.setVelocityX(this.playerSpeed);
      this.setFlipX(false);
    } else {
      this.setVelocityX(0);
    }

    if (up.isDown) {
      this.setVelocityY(-this.playerSpeed);
    } else if (down.isDown) {
      this.setVelocityY(this.playerSpeed);
    } else {
      this.setVelocityY(0);
    }
  }

  handleAnimationSwitch() {
    if (
      (this.body as Phaser.Physics.Arcade.Body).velocity.x !== 0 ||
      (this.body as Phaser.Physics.Arcade.Body).velocity.y !== 0
    ) {
      // this.play("walk", true);
    } else {
      // this.play("idle", true);
    }
  }
}

export default Player;
