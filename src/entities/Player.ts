import Phaser from "phaser";
import collidable from "../mixins/collidable";
import { playerAnims, PlayerAnimKeys } from "./playerAnims";
import { States } from "./PlayerStates";

class Player extends Phaser.Physics.Arcade.Sprite {
  playerSpeed!: number;
  playerState: States;
  cursors: any;
  keys: any;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "rifle-south");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    Object.assign(this, collidable as any);

    this.init();
    this.initEvents();
  }

  init() {
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.keys = this.scene.input.keyboard.addKeys("W,A,S,D");
    playerAnims(this.anims);
    this.play(PlayerAnimKeys.RIFLE_SOUTH_SHOOT);
    this.setScale(0.42);
    this.setOrigin(1, 0.5);
    this.setSize(150, this.height);
    this.setCollideWorldBounds(true);
    this.playerSpeed = 200;
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  update() {
    this.handlePlayerInput();
    this.handleAiming();
  }

  handleAiming() {
    const pointer = this.scene.input.activePointer;
    const angle = this.calculateAngle(pointer.worldX, pointer.worldY);
    const direction = this.mapAngleToDirection(angle);

    this.playAnimationByDirection(direction);
  }

  calculateAngle(targetX: number, targetY: number): number {
    return Phaser.Math.Angle.Between(this.x, this.y, targetX, targetY);
  }

  mapAngleToDirection(angle: number): string {
    let angleDeg = Phaser.Math.RadToDeg(angle);
    angleDeg = angleDeg < 0 ? angleDeg + 360 : angleDeg;

    const angleSectors = Math.round(angleDeg / 45) % 8;
    const directions = [
      "east",
      "southEast",
      "south",
      "southWest",
      "west",
      "northWest",
      "north",
      "northEast",
    ];

    return directions[angleSectors];
  }

  playAnimationByDirection(direction: string) {
    const animationKey = this.getAnimationKey(direction);
    this.play(animationKey, true);
  }

  getAnimationKey(direction: string): string {
    return this.body.velocity.x || this.body.velocity.y
      ? `rifle-${direction}-shoot`
      : `rifle-${direction}-standShoot`;
  }

  handlePlayerInput() {
    const { W, A, S, D } = this.keys;

    const velocity = { x: 0, y: 0 };

    if (A.isDown) velocity.x = -this.playerSpeed;
    if (D.isDown) velocity.x = this.playerSpeed;
    if (W.isDown) velocity.y = -this.playerSpeed;
    if (S.isDown) velocity.y = this.playerSpeed;

    this.setVelocity(velocity.x, velocity.y);
  }
}

export default Player;
