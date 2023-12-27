import Phaser from "phaser";
import { playerConfig } from "../utils/importConfig";
const { walk } = playerConfig;
class Player extends Phaser.Physics.Arcade.Sprite {
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  playerSpeed!: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.init();
    this.initEvents();
  }

  init() {
    this.playerSpeed = 200;
    this.setScale(0.11);
    if (this.scene.input.keyboard)
      this.cursors = this.scene.input.keyboard.createCursorKeys();

    this.setCollideWorldBounds(true);
    this.registerAnimations();
  }

  registerAnimations() {
    this.anims.create({
      key: "walk",
      frames: walk.getImageNames().map((name) => {
        return { key: name };
      }),
      frameRate: 6,
      repeat: 1,
    });
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  update(time: number, delta: number) {
    super.preUpdate(time, delta);
    const { left, right } = this.cursors;

    if (left.isDown) {
      this.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.setVelocityX(this.playerSpeed);
    } else {
      this.setVelocityX(0);
    }

    this.play("walk", true);
  }
}

export default Player;
