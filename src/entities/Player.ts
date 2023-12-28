import Phaser from "phaser";

import { playerAnims } from "./playerAnims";
import collidable from "../mixins/collidable";

class LeftHand extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "leftHand");

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

    this.init();
  }

  init() {
    this.setFlipX(true);

    this.setScale(0.12);
  }
}

class RightHand extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "rightHand");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.init();
  }

  init() {
    this.setOrigin(0.5, 0.5);
    this.setScale(0.12);
  }
}

class Body extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.init();
  }

  init() {
    const scaleFactor = 0.1; // You can adjust this value based on your scaling needs
    this.setScale(scaleFactor);

    playerAnims(this.anims);
  }
}

class Player extends Phaser.Physics.Arcade.Sprite {
  playerBody: Body;
  leftHand: LeftHand;
  rightHand: RightHand;
  playerSpeed!: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.playerBody = new Body(scene, x, y);
    this.rightHand = new RightHand(scene, x, y);
    this.leftHand = new LeftHand(scene, x, y);
    Object.assign(this, collidable as any);

    this.init();
    this.initEvents();
  }

  init() {
    this.setDisplaySize(this.body.width, this.body.height);
    this.body.setSize(this.width / 1.5, 5);
    this.setOffset(this.body.offset.x, this.height * 1.4);
    this.setAlpha(0);
    this.setCollideWorldBounds(true);
    this.playerSpeed = 200;
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  update() {
    this.handlePlayerInput();
    this.setPlayerPartPositions();
    this.handleAnimationSwitch();
  }

  setPlayerPartPositions() {
    this.playerBody.body.reset(this.x, this.y);
    this.leftHand.body.reset(this.x - 15, this.y + 20);
    this.rightHand.body.reset(this.x + 13, this.y + 20);
  }

  handlePlayerInput() {
    const { left, right, down, up } =
      this.scene.input.keyboard.createCursorKeys();

    if (left.isDown) {
      this.onLeftDown();
    } else if (right.isDown) {
      this.onRightDown();
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

  onLeftDown() {
    this.setVelocityX(-this.playerSpeed);
    this.rightHand.setFlipX(true);
    this.playerBody.setFlipX(true);
  }

  onRightDown() {
    this.setVelocityX(this.playerSpeed);
    this.rightHand.setFlipX(false);
    this.playerBody.setFlipX(false);
  }

  handleAnimationSwitch() {
    if (
      (this.body as Phaser.Physics.Arcade.Body).velocity.x !== 0 ||
      (this.body as Phaser.Physics.Arcade.Body).velocity.y !== 0
    ) {
      this.playerBody.play("walk", true);
    } else {
      this.playerBody.play("idle", true);
    }
  }
}

export default Player;
